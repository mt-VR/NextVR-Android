(()=>{var xb=0,Am=1,_b=2;var h0=1,wb=2,Ss=3,Ji=0,Qn=1,Gn=2;var ir=0,qa=1,Em=2,Tm=3,Rm=4,Sb=5,Hr=100,Mb=101,Ab=102,Cm=103,Lm=104,Eb=200,Tb=201,Rb=202,Cb=203,ph=204,mh=205,Lb=206,Pb=207,Ib=208,Nb=209,Db=210,kb=211,Ob=212,Ub=213,Fb=214,Bb=0,zb=1,Hb=2,Mc=3,Vb=4,Gb=5,Wb=6,qb=7,Zh=0,Xb=1,$b=2,sr=0,Yb=1,jb=2,Zb=3,Kb=4,Jb=5,Qb=6,Pm="attached",ex="detached",f0=300,Ya=301,ja=302,gh=303,yh=304,td=306,Xr=1e3,di=1001,zo=1002,gn=1003,Ac=1004;var ko=1005;var un=1006,Kh=1007;var ar=1008;var rr=1009,tx=1010,nx=1011,Jh=1012,p0=1013,tr=1014,Ms=1015,Ho=1016,m0=1017,g0=1018,Gr=1020,ix=1021,xi=1023,sx=1024,rx=1025,Wr=1026,Za=1027,ax=1028,y0=1029,ox=1030,v0=1031,b0=1033,ku=33776,Ou=33777,Uu=33778,Fu=33779,Im=35840,Nm=35841,Dm=35842,km=35843,x0=36196,Om=37492,Um=37496,Fm=37808,Bm=37809,zm=37810,Hm=37811,Vm=37812,Gm=37813,Wm=37814,qm=37815,Xm=37816,$m=37817,Ym=37818,jm=37819,Zm=37820,Km=37821,Bu=36492,Jm=36494,Qm=36495,lx=36283,eg=36284,tg=36285,ng=36286;var Ka=2300,$r=2301,zu=2302,ig=2400,sg=2401,rg=2402,cx=2500;var _0=0,nd=1,Qo=2,w0=3e3,qr=3001,dx=3200,ux=3201,Qh=0,hx=1,_i="",$t="srgb",yn="srgb-linear",ef="display-p3",id="display-p3-linear",Ec="linear",Ft="srgb",Tc="rec709",Rc="p3";var Aa=7680;var ag=519,fx=512,px=513,mx=514,S0=515,gx=516,yx=517,vx=518,bx=519,vh=35044;var og="300 es",bh=1035,As=2e3,Cc=2001,or=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lg=1234567,Oo=Math.PI/180,Ja=180/Math.PI;function Ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function Pn(n,e,t){return Math.max(e,Math.min(t,n))}function tf(n,e){return(n%e+e)%e}function xx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _x(n,e,t){return n!==e?(t-n)/(e-n):0}function Uo(n,e,t){return(1-t)*n+t*e}function wx(n,e,t,i){return Uo(n,e,1-Math.exp(-t*i))}function Sx(n,e=1){return e-Math.abs(tf(n,e*2)-e)}function Mx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ax(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ex(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Tx(n,e){return n+Math.random()*(e-n)}function Rx(n){return n*(.5-Math.random())}function Cx(n){n!==void 0&&(lg=n);let e=lg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lx(n){return n*Oo}function Px(n){return n*Ja}function xh(n){return(n&n-1)===0&&n!==0}function Ix(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nx(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),d=a((e+i)/2),u=r((e-i)/2),h=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*d,l*u,l*h,o*c);break;case"YZY":n.set(l*h,o*d,l*u,o*c);break;case"ZXZ":n.set(l*u,l*h,o*d,o*c);break;case"XZX":n.set(o*d,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*d,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var el={DEG2RAD:Oo,RAD2DEG:Ja,generateUUID:Ui,clamp:Pn,euclideanModulo:tf,mapLinear:xx,inverseLerp:_x,lerp:Uo,damp:wx,pingpong:Sx,smoothstep:Mx,smootherstep:Ax,randInt:Ex,randFloat:Tx,randFloatSpread:Rx,seededRandom:Cx,degToRad:Lx,radToDeg:Px,isPowerOfTwo:xh,ceilPowerOfTwo:Ix,floorPowerOfTwo:Lc,setQuaternionFromProperEuler:Nx,normalize:At,denormalize:Ki},je=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],p=i[5],g=i[8],y=s[0],f=s[3],m=s[6],x=s[1],v=s[4],M=s[7],E=s[2],T=s[5],b=s[8];return r[0]=a*y+o*x+l*E,r[3]=a*f+o*v+l*T,r[6]=a*m+o*M+l*b,r[1]=c*y+d*x+u*E,r[4]=c*f+d*v+u*T,r[7]=c*m+d*M+u*b,r[2]=h*y+p*x+g*E,r[5]=h*f+p*v+g*T,r[8]=h*m+p*M+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,p=c*r-a*l,g=t*u+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-d*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hu.makeScale(e,t)),this}rotate(e){return this.premultiply(Hu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hu=new ot;function M0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dx(){let n=Vo("canvas");return n.style.display="block",n}var cg={};function Fo(n){n in cg||(cg[n]=!0,console.warn(n))}var dg=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ug=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zl={[yn]:{transfer:Ec,primaries:Tc,toReference:n=>n,fromReference:n=>n},[$t]:{transfer:Ft,primaries:Tc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[id]:{transfer:Ec,primaries:Rc,toReference:n=>n.applyMatrix3(ug),fromReference:n=>n.applyMatrix3(dg)},[ef]:{transfer:Ft,primaries:Rc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ug),fromReference:n=>n.applyMatrix3(dg).convertLinearToSRGB()}},kx=new Set([yn,id]),bt={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!kx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Zl[e].toReference,s=Zl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zl[n].primaries},getTransfer:function(n){return n===_i?Ec:Zl[n].transfer}};function Xa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ea,Pc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ea===void 0&&(Ea=Vo("canvas")),Ea.width=e.width,Ea.height=e.height;let i=Ea.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ea}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xa(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xa(t[i]/255)*255):t[i]=Xa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ox=0,Ic=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gu(s[a].image)):r.push(Gu(s[a]))}else r=Gu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Gu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ux=0,En=class n extends or{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=di,s=di,r=un,a=ar,o=xi,l=rr,c=n.DEFAULT_ANISOTROPY,d=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Ui(),this.name="",this.source=new Ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===qr?$t:_i),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$t?qr:w0}set encoding(e){Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qr?$t:_i}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=f0;En.DEFAULT_ANISOTROPY=1;var Rt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],g=l[9],y=l[2],f=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(p+1)/2,E=(m+1)/2,T=(d+h)/4,b=(u+y)/4,O=(g+f)/4;return v>M&&v>E?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=b/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=O/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=b/r,s=O/r),this.set(i,s,r,t),this}let x=Math.sqrt((f-g)*(f-g)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(u-y)/x,this.z=(h-d)/x,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_h=class extends or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qr?$t:_i),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new En(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Es=class extends _h{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Nc=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wh=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var it=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],h=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==h||c!==p||d!==g){let f=1-o,m=l*h+c*p+d*g+u*y,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let E=Math.sqrt(v),T=Math.atan2(E,m*x);f=Math.sin(f*T)/E,o=Math.sin(o*T)/E}let M=o*x;if(l=l*f+h*M,c=c*f+p*M,d=d*f+g*M,u=u*f+y*M,f===1-o){let E=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=E,c*=E,d*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+d*u+l*p-c*h,e[t+1]=l*g+d*h+c*u-o*p,e[t+2]=c*g+d*p+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"YXZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"ZXY":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"ZYX":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"YZX":this._x=h*d*u+c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u-h*p*g;break;case"XZY":this._x=h*d*u-c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wu.copy(this).projectOnVector(e),this.sub(Wu)}reflect(e){return this.sub(Wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wu=new D,hg=new it,wi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Di):Di.fromBufferAttribute(r,a),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kl.copy(i.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Jl.subVectors(this.max,Ro),Ta.subVectors(e.a,Ro),Ra.subVectors(e.b,Ro),Ca.subVectors(e.c,Ro),Zs.subVectors(Ra,Ta),Ks.subVectors(Ca,Ra),Or.subVectors(Ta,Ca);let t=[0,-Zs.z,Zs.y,0,-Ks.z,Ks.y,0,-Or.z,Or.y,Zs.z,0,-Zs.x,Ks.z,0,-Ks.x,Or.z,0,-Or.x,-Zs.y,Zs.x,0,-Ks.y,Ks.x,0,-Or.y,Or.x,0];return!qu(t,Ta,Ra,Ca,Jl)||(t=[1,0,0,0,1,0,0,0,1],!qu(t,Ta,Ra,Ca,Jl))?!1:(Ql.crossVectors(Zs,Ks),t=[Ql.x,Ql.y,Ql.z],qu(t,Ta,Ra,Ca,Jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ys),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ys=[new D,new D,new D,new D,new D,new D,new D,new D],Di=new D,Kl=new wi,Ta=new D,Ra=new D,Ca=new D,Zs=new D,Ks=new D,Or=new D,Ro=new D,Jl=new D,Ql=new D,Ur=new D;function qu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ur.fromArray(n,r);let o=s.x*Math.abs(Ur.x)+s.y*Math.abs(Ur.y)+s.z*Math.abs(Ur.z),l=e.dot(Ur),c=t.dot(Ur),d=i.dot(Ur);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Fx=new wi,Co=new D,Xu=new D,ui=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);let t=Co.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Co,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Xu)),this.expandByPoint(Co.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vs=new D,$u=new D,ec=new D,Js=new D,Yu=new D,tc=new D,ju=new D,Yr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,t),vs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$u.copy(e).add(t).multiplyScalar(.5),ec.copy(t).sub(e).normalize(),Js.copy(this.origin).sub($u);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ec),o=Js.dot(this.direction),l=-Js.dot(ec),c=Js.lengthSq(),d=Math.abs(1-a*a),u,h,p,g;if(d>0)if(u=a*l-o,h=a*o-l,g=r*d,u>=0)if(h>=-g)if(h<=g){let y=1/d;u*=y,h*=y,p=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($u).addScaledVector(ec,h),p}intersectSphere(e,t){vs.subVectors(e.center,this.origin);let i=vs.dot(this.direction),s=vs.dot(vs)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,t,i,s,r){Yu.subVectors(t,e),tc.subVectors(i,e),ju.crossVectors(Yu,tc);let a=this.direction.dot(ju),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Js.subVectors(this.origin,e);let l=o*this.direction.dot(tc.crossVectors(Js,tc));if(l<0)return null;let c=o*this.direction.dot(Yu.cross(Js));if(c<0||l+c>a)return null;let d=-o*Js.dot(ju);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class n{constructor(e,t,i,s,r,a,o,l,c,d,u,h,p,g,y,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,u,h,p,g,y,f)}set(e,t,i,s,r,a,o,l,c,d,u,h,p,g,y,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=p,m[7]=g,m[11]=y,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/La.setFromMatrixColumn(e,0).length(),r=1/La.setFromMatrixColumn(e,1).length(),a=1/La.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*d,p=a*u,g=o*d,y=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*d,p=l*u,g=c*d,y=c*u;t[0]=h+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*d,p=l*u,g=c*d,y=c*u;t[0]=h-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*d,p=a*u,g=o*d,y=o*u;t[0]=l*d,t[4]=g*c-p,t[8]=h*c+y,t[1]=l*u,t[5]=y*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=y-h*u,t[8]=g*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+g,t[10]=h-y*u}else if(e.order==="XZY"){let h=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+y,t[5]=a*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*d,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bx,e,zx)}lookAt(e,t,i){let s=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Qs.crossVectors(i,oi),Qs.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Qs.crossVectors(i,oi)),Qs.normalize(),nc.crossVectors(oi,Qs),s[0]=Qs.x,s[4]=nc.x,s[8]=oi.x,s[1]=Qs.y,s[5]=nc.y,s[9]=oi.y,s[2]=Qs.z,s[6]=nc.z,s[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],p=i[13],g=i[2],y=i[6],f=i[10],m=i[14],x=i[3],v=i[7],M=i[11],E=i[15],T=s[0],b=s[4],O=s[8],S=s[12],_=s[1],I=s[5],N=s[9],U=s[13],C=s[2],R=s[6],F=s[10],V=s[14],q=s[3],G=s[7],Q=s[11],ee=s[15];return r[0]=a*T+o*_+l*C+c*q,r[4]=a*b+o*I+l*R+c*G,r[8]=a*O+o*N+l*F+c*Q,r[12]=a*S+o*U+l*V+c*ee,r[1]=d*T+u*_+h*C+p*q,r[5]=d*b+u*I+h*R+p*G,r[9]=d*O+u*N+h*F+p*Q,r[13]=d*S+u*U+h*V+p*ee,r[2]=g*T+y*_+f*C+m*q,r[6]=g*b+y*I+f*R+m*G,r[10]=g*O+y*N+f*F+m*Q,r[14]=g*S+y*U+f*V+m*ee,r[3]=x*T+v*_+M*C+E*q,r[7]=x*b+v*I+M*R+E*G,r[11]=x*O+v*N+M*F+E*Q,r[15]=x*S+v*U+M*V+E*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],g=e[3],y=e[7],f=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*o*h+i*c*h+s*o*p-i*l*p)+y*(+t*l*p-t*c*h+r*a*h-s*a*p+s*c*d-r*l*d)+f*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*d-i*c*d)+m*(-s*o*d-t*l*u+t*o*h+s*a*u-i*a*h+i*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],g=e[12],y=e[13],f=e[14],m=e[15],x=u*f*c-y*h*c+y*l*p-o*f*p-u*l*m+o*h*m,v=g*h*c-d*f*c-g*l*p+a*f*p+d*l*m-a*h*m,M=d*y*c-g*u*c+g*o*p-a*y*p-d*o*m+a*u*m,E=g*u*l-d*y*l-g*o*h+a*y*h+d*o*f-a*u*f,T=t*x+i*v+s*M+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return e[0]=x*b,e[1]=(y*h*r-u*f*r-y*s*p+i*f*p+u*s*m-i*h*m)*b,e[2]=(o*f*r-y*l*r+y*s*c-i*f*c-o*s*m+i*l*m)*b,e[3]=(u*l*r-o*h*r-u*s*c+i*h*c+o*s*p-i*l*p)*b,e[4]=v*b,e[5]=(d*f*r-g*h*r+g*s*p-t*f*p-d*s*m+t*h*m)*b,e[6]=(g*l*r-a*f*r-g*s*c+t*f*c+a*s*m-t*l*m)*b,e[7]=(a*h*r-d*l*r+d*s*c-t*h*c-a*s*p+t*l*p)*b,e[8]=M*b,e[9]=(g*u*r-d*y*r-g*i*p+t*y*p+d*i*m-t*u*m)*b,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*m+t*o*m)*b,e[11]=(d*o*r-a*u*r-d*i*c+t*u*c+a*i*p-t*o*p)*b,e[12]=E*b,e[13]=(d*y*s-g*u*s+g*i*h-t*y*h-d*i*f+t*u*f)*b,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*f-t*o*f)*b,e[15]=(a*u*s-d*o*s+d*i*l-t*u*l-a*i*h+t*o*h)*b,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,p=r*d,g=r*u,y=a*d,f=a*u,m=o*u,x=l*c,v=l*d,M=l*u,E=i.x,T=i.y,b=i.z;return s[0]=(1-(y+m))*E,s[1]=(p+M)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(h+m))*T,s[6]=(f+x)*T,s[7]=0,s[8]=(g+v)*b,s[9]=(f-x)*b,s[10]=(1-(h+y))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=La.set(s[0],s[1],s[2]).length(),a=La.set(s[4],s[5],s[6]).length(),o=La.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ki.copy(this);let c=1/r,d=1/a,u=1/o;return ki.elements[0]*=c,ki.elements[1]*=c,ki.elements[2]*=c,ki.elements[4]*=d,ki.elements[5]*=d,ki.elements[6]*=d,ki.elements[8]*=u,ki.elements[9]*=u,ki.elements[10]*=u,t.setFromRotationMatrix(ki),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=As){let l=this.elements,c=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),h=(i+s)/(i-s),p,g;if(o===As)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Cc)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=As){let l=this.elements,c=1/(t-e),d=1/(i-s),u=1/(a-r),h=(t+e)*c,p=(i+s)*d,g,y;if(o===As)g=(a+r)*u,y=-2*u;else if(o===Cc)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},La=new D,ki=new Re,Bx=new D(0,0,0),zx=new D(1,1,1),Qs=new D,nc=new D,oi=new D,fg=new Re,pg=new it,hi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pg.setFromEuler(this),this.setFromQuaternion(pg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hx=0,mg=new D,Pa=new it,bs=new Re,ic=new D,Lo=new D,Vx=new D,Gx=new it,gg=new D(1,0,0),yg=new D(0,1,0),vg=new D(0,0,1),Wx={type:"added"},qx={type:"removed"},Bt=class n extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new hi,i=new it,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new ot}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pa.setFromAxisAngle(e,t),this.quaternion.multiply(Pa),this}rotateOnWorldAxis(e,t){return Pa.setFromAxisAngle(e,t),this.quaternion.premultiply(Pa),this}rotateX(e){return this.rotateOnAxis(gg,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(vg,e)}translateOnAxis(e,t){return mg.copy(e).applyQuaternion(this.quaternion),this.position.add(mg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gg,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ic.copy(e):ic.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(Lo,ic,this.up):bs.lookAt(ic,Lo,this.up),this.quaternion.setFromRotationMatrix(bs),s&&(bs.extractRotation(s.matrixWorld),Pa.setFromRotationMatrix(bs),this.quaternion.premultiply(Pa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bs.multiply(e.parent.matrixWorld)),e.applyMatrix4(bs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new D(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oi=new D,xs=new D,Zu=new D,_s=new D,Ia=new D,Na=new D,bg=new D,Ku=new D,Ju=new D,Qu=new D,sc=!1,Va=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Oi.subVectors(e,t),s.cross(Oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Oi.subVectors(s,t),xs.subVectors(i,t),Zu.subVectors(e,t);let a=Oi.dot(Oi),o=Oi.dot(xs),l=Oi.dot(Zu),c=xs.dot(xs),d=xs.dot(Zu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,p=(c*l-o*d)*h,g=(a*d-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getUV(e,t,i,s,r,a,o,l){return sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sc=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(a,_s.y),l.addScaledVector(o,_s.z),l)}static isFrontFacing(e,t,i,s){return Oi.subVectors(i,t),xs.subVectors(e,t),Oi.cross(xs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Oi.cross(xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sc=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ia.subVectors(s,i),Na.subVectors(r,i),Ku.subVectors(e,i);let l=Ia.dot(Ku),c=Na.dot(Ku);if(l<=0&&c<=0)return t.copy(i);Ju.subVectors(e,s);let d=Ia.dot(Ju),u=Na.dot(Ju);if(d>=0&&u<=d)return t.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(Ia,a);Qu.subVectors(e,r);let p=Ia.dot(Qu),g=Na.dot(Qu);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Na,o);let f=d*g-p*u;if(f<=0&&u-d>=0&&p-g>=0)return bg.subVectors(r,s),o=(u-d)/(u-d+(p-g)),t.copy(s).addScaledVector(bg,o);let m=1/(f+y+h);return a=y*m,o=h*m,t.copy(i).addScaledVector(Ia,a).addScaledVector(Na,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},A0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},rc={h:0,s:0,l:0};function eh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=bt.workingColorSpace){if(e=tf(e,1),t=Pn(t,0,1),i=Pn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=eh(a,r,e+1/3),this.g=eh(a,r,e),this.b=eh(a,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let i=A0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=Vu(e.r),this.g=Vu(e.g),this.b=Vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return bt.fromWorkingColorSpace(Ln.copy(this),e),Math.round(Pn(Ln.r*255,0,255))*65536+Math.round(Pn(Ln.g*255,0,255))*256+Math.round(Pn(Ln.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(Ln.copy(this),t);let i=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=$t){bt.fromWorkingColorSpace(Ln.copy(this),e);let t=Ln.r,i=Ln.g,s=Ln.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(rc);let i=Uo(er.h,rc.h,t),s=Uo(er.s,rc.s,t),r=Uo(er.l,rc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new De;De.NAMES=A0;var Xx=0,ei=class extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=qa,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qa&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ph&&(i.blendSrc=this.blendSrc),this.blendDst!==mh&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Aa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Aa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Aa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},hn=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dn=new D,ac=new je,kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ms,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}};var Dc=class extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var kc=class extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Wn=class extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var $x=0,bi=new Re,th=new Bt,Da=new D,li=new wi,Po=new wi,Sn=new D,qn=class n extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M0(e)?kc:Dc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Da).negate(),this.translate(Da.x,Da.y,Da.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];li.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Po.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(li.min,Po.min),li.expandByPoint(Sn),Sn.addVectors(li.max,Po.max),li.expandByPoint(Sn)):(li.expandByPoint(Po.min),li.expandByPoint(Po.max))}li.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Sn.fromBufferAttribute(o,c),l&&(Da.fromBufferAttribute(e,c),Sn.add(Da)),s=Math.max(s,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],d=[];for(let _=0;_<o;_++)c[_]=new D,d[_]=new D;let u=new D,h=new D,p=new D,g=new je,y=new je,f=new je,m=new D,x=new D;function v(_,I,N){u.fromArray(s,_*3),h.fromArray(s,I*3),p.fromArray(s,N*3),g.fromArray(a,_*2),y.fromArray(a,I*2),f.fromArray(a,N*2),h.sub(u),p.sub(u),y.sub(g),f.sub(g);let U=1/(y.x*f.y-f.x*y.y);isFinite(U)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(p,-y.y).multiplyScalar(U),x.copy(p).multiplyScalar(y.x).addScaledVector(h,-f.x).multiplyScalar(U),c[_].add(m),c[I].add(m),c[N].add(m),d[_].add(x),d[I].add(x),d[N].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let _=0,I=M.length;_<I;++_){let N=M[_],U=N.start,C=N.count;for(let R=U,F=U+C;R<F;R+=3)v(i[R+0],i[R+1],i[R+2])}let E=new D,T=new D,b=new D,O=new D;function S(_){b.fromArray(r,_*3),O.copy(b);let I=c[_];E.copy(I),E.sub(b.multiplyScalar(b.dot(I))).normalize(),T.crossVectors(O,I);let U=T.dot(d[_])<0?-1:1;l[_*4]=E.x,l[_*4+1]=E.y,l[_*4+2]=E.z,l[_*4+3]=U}for(let _=0,I=M.length;_<I;++_){let N=M[_],U=N.start,C=N.count;for(let R=U,F=U+C;R<F;R+=3)S(i[R+0]),S(i[R+1]),S(i[R+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),y=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,f),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d),p=0,g=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let m=0;m<d;m++)h[g++]=c[p++]}return new kt(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let h=c[d],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xg=new Re,Fr=new Yr,oc=new ui,_g=new D,ka=new D,Oa=new D,Ua=new D,nh=new D,lc=new D,cc=new je,dc=new je,uc=new je,wg=new D,Sg=new D,Mg=new D,hc=new D,fc=new D,Et=class extends Bt{constructor(e=new qn,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){lc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(nh.fromBufferAttribute(u,e),a?lc.addScaledVector(nh,d):lc.addScaledVector(nh.sub(t),d))}t.add(lc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(r),Fr.copy(e.ray).recast(e.near),!(oc.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(oc,_g)===null||Fr.origin.distanceToSquared(_g)>(e.far-e.near)**2))&&(xg.copy(r).invert(),Fr.copy(e.ray).applyMatrix4(xg),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let f=h[g],m=a[f.materialIndex],x=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let M=x,E=v;M<E;M+=3){let T=o.getX(M),b=o.getX(M+1),O=o.getX(M+2);s=pc(this,m,e,i,c,d,u,T,b,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let f=g,m=y;f<m;f+=3){let x=o.getX(f),v=o.getX(f+1),M=o.getX(f+2);s=pc(this,a,e,i,c,d,u,x,v,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let f=h[g],m=a[f.materialIndex],x=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let M=x,E=v;M<E;M+=3){let T=M,b=M+1,O=M+2;s=pc(this,m,e,i,c,d,u,T,b,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let f=g,m=y;f<m;f+=3){let x=f,v=f+1,M=f+2;s=pc(this,a,e,i,c,d,u,x,v,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Yx(n,e,t,i,s,r,a,o){let l;if(e.side===Qn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ji,o),l===null)return null;fc.copy(o),fc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(fc);return c<t.near||c>t.far?null:{distance:c,point:fc.clone(),object:n}}function pc(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ka),n.getVertexPosition(l,Oa),n.getVertexPosition(c,Ua);let d=Yx(n,e,t,i,ka,Oa,Ua,hc);if(d){s&&(cc.fromBufferAttribute(s,o),dc.fromBufferAttribute(s,l),uc.fromBufferAttribute(s,c),d.uv=Va.getInterpolation(hc,ka,Oa,Ua,cc,dc,uc,new je)),r&&(cc.fromBufferAttribute(r,o),dc.fromBufferAttribute(r,l),uc.fromBufferAttribute(r,c),d.uv1=Va.getInterpolation(hc,ka,Oa,Ua,cc,dc,uc,new je),d.uv2=d.uv1),a&&(wg.fromBufferAttribute(a,o),Sg.fromBufferAttribute(a,l),Mg.fromBufferAttribute(a,c),d.normal=Va.getInterpolation(hc,ka,Oa,Ua,wg,Sg,Mg,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Va.getNormal(ka,Oa,Ua,u.normal),d.face=u}return d}var lr=class n extends qn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(d,3)),this.setAttribute("uv",new Wn(u,2));function g(y,f,m,x,v,M,E,T,b,O,S){let _=M/b,I=E/O,N=M/2,U=E/2,C=T/2,R=b+1,F=O+1,V=0,q=0,G=new D;for(let Q=0;Q<F;Q++){let ee=Q*I-U;for(let re=0;re<R;re++){let z=re*_-N;G[y]=z*x,G[f]=ee*v,G[m]=C,c.push(G.x,G.y,G.z),G[y]=0,G[f]=0,G[m]=T>0?1:-1,d.push(G.x,G.y,G.z),u.push(re/b),u.push(1-Q/O),V+=1}}for(let Q=0;Q<O;Q++)for(let ee=0;ee<b;ee++){let re=h+ee+R*Q,z=h+ee+R*(Q+1),W=h+(ee+1)+R*(Q+1),ne=h+(ee+1)+R*Q;l.push(re,z,ne),l.push(z,W,ne),q+=6}o.addGroup(p,q,S),p+=q,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qa(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vn(n){let e={};for(let t=0;t<n.length;t++){let i=Qa(n[t]);for(let s in i)e[s]=i[s]}return e}function jx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function E0(n){return n.getRenderTarget()===null?n.outputColorSpace:bt.workingColorSpace}var Zx={clone:Qa,merge:Vn},Kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ts=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kx,this.fragmentShader=Jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Oc=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=As}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yt=class extends Oc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fa=-90,Ba=1,Sh=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(Fa,Ba,e,t);s.layers=this.layers,this.add(s);let r=new Yt(Fa,Ba,e,t);r.layers=this.layers,this.add(r);let a=new Yt(Fa,Ba,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Fa,Ba,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Fa,Ba,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Fa,Ba,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===As)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Uc=class extends En{constructor(e,t,i,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ya,super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mh=class extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qr?$t:_i),this.texture=new Uc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lr(5,5,5),r=new Ts({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:ir});r.uniforms.tEquirect.value=t;let a=new Et(s,r),o=t.minFilter;return t.minFilter===ar&&(t.minFilter=un),new Sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},ih=new D,Qx=new D,e_=new ot,ci=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ih.subVectors(i,t).cross(Qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ih),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||e_.getNormalMatrix(e),s=this.coplanarPoint(ih).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Br=new ui,mc=new D,Wo=class{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,a=new ci){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=As){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],p=s[8],g=s[9],y=s[10],f=s[11],m=s[12],x=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,f-p,M-m).normalize(),i[1].setComponents(l+r,h+c,f+p,M+m).normalize(),i[2].setComponents(l+a,h+d,f+g,M+x).normalize(),i[3].setComponents(l-a,h-d,f-g,M-x).normalize(),i[4].setComponents(l-o,h-u,f-y,M-v).normalize(),t===As)i[5].setComponents(l+o,h+u,f+y,M+v).normalize();else if(t===Cc)i[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(mc.x=s.normal.x>0?e.max.x:e.min.x,mc.y=s.normal.y>0?e.max.y:e.min.y,mc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function T0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function t_(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,d){let u=c.array,h=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,u,h),c.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,d,u){let h=d.array,p=d._updateRange,g=d.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,h),g.length!==0){for(let y=0,f=g.length;y<f;y++){let m=g[y];t?n.bufferSubData(u,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(u,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}d.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,d),u.version=c.version}}return{get:a,remove:o,update:l}}var Nn=class n extends qn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,p=[],g=[],y=[],f=[];for(let m=0;m<d;m++){let x=m*h-a;for(let v=0;v<c;v++){let M=v*u-r;g.push(M,-x,0),y.push(0,0,1),f.push(v/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let v=x+c*m,M=x+c*(m+1),E=x+1+c*(m+1),T=x+1+c*m;p.push(v,M,T),p.push(M,E,T)}this.setIndex(p),this.setAttribute("position",new Wn(g,3)),this.setAttribute("normal",new Wn(y,3)),this.setAttribute("uv",new Wn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},n_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i_=`#ifdef USE_ALPHAHASH
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
#endif`,s_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,o_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l_=`#ifdef USE_AOMAP
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
#endif`,c_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
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
#endif`,u_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,h_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m_=`#ifdef USE_IRIDESCENCE
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
#endif`,g_=`#ifdef USE_BUMPMAP
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A_=`#define PI 3.141592653589793
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
} // validated`,E_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T_=`vec3 transformedNormal = objectNormal;
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
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`
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
}`,D_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G_=`#ifdef USE_GRADIENTMAP
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
}`,W_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y_=`uniform bool receiveShadow;
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
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ew=`PhysicalMaterial material;
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
#endif`,tw=`struct PhysicalMaterial {
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
}`,nw=`
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
#endif`,iw=`#if defined( RE_IndirectDiffuse )
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
#endif`,sw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ow=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hw=`#if defined( USE_POINTS_UV )
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
#endif`,fw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gw=`#ifdef USE_MORPHNORMALS
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
#endif`,yw=`#ifdef USE_MORPHTARGETS
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
#endif`,vw=`#ifdef USE_MORPHTARGETS
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
#endif`,bw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mw=`#ifdef USE_NORMALMAP
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
#endif`,Aw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zw=`float getShadowMask() {
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
}`,Hw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vw=`#ifdef USE_SKINNING
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
#endif`,Gw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ww=`#ifdef USE_SKINNING
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
#endif`,qw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jw=`#ifdef USE_TRANSMISSION
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
#endif`,Zw=`#ifdef USE_TRANSMISSION
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
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`#include <common>
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
}`,lS=`#if DEPTH_PACKING == 3200
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
}`,cS=`#define DISTANCE
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
}`,dS=`#define DISTANCE
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 diffuse;
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
}`,yS=`#define LAMBERT
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
}`,vS=`#define LAMBERT
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
}`,bS=`#define MATCAP
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
}`,xS=`#define MATCAP
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
}`,_S=`#define NORMAL
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
}`,wS=`#define NORMAL
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
}`,SS=`#define PHONG
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
}`,MS=`#define PHONG
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
}`,AS=`#define STANDARD
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
}`,ES=`#define STANDARD
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
}`,TS=`#define TOON
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
}`,RS=`#define TOON
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
}`,CS=`uniform float size;
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
}`,LS=`uniform vec3 diffuse;
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
}`,PS=`#include <common>
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
}`,IS=`uniform vec3 color;
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
}`,NS=`uniform float rotation;
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
}`,DS=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:n_,alphahash_pars_fragment:i_,alphamap_fragment:s_,alphamap_pars_fragment:r_,alphatest_fragment:a_,alphatest_pars_fragment:o_,aomap_fragment:l_,aomap_pars_fragment:c_,batching_pars_vertex:d_,batching_vertex:u_,begin_vertex:h_,beginnormal_vertex:f_,bsdfs:p_,iridescence_fragment:m_,bumpmap_pars_fragment:g_,clipping_planes_fragment:y_,clipping_planes_pars_fragment:v_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:x_,color_fragment:__,color_pars_fragment:w_,color_pars_vertex:S_,color_vertex:M_,common:A_,cube_uv_reflection_fragment:E_,defaultnormal_vertex:T_,displacementmap_pars_vertex:R_,displacementmap_vertex:C_,emissivemap_fragment:L_,emissivemap_pars_fragment:P_,colorspace_fragment:I_,colorspace_pars_fragment:N_,envmap_fragment:D_,envmap_common_pars_fragment:k_,envmap_pars_fragment:O_,envmap_pars_vertex:U_,envmap_physical_pars_fragment:j_,envmap_vertex:F_,fog_vertex:B_,fog_pars_vertex:z_,fog_fragment:H_,fog_pars_fragment:V_,gradientmap_pars_fragment:G_,lightmap_fragment:W_,lightmap_pars_fragment:q_,lights_lambert_fragment:X_,lights_lambert_pars_fragment:$_,lights_pars_begin:Y_,lights_toon_fragment:Z_,lights_toon_pars_fragment:K_,lights_phong_fragment:J_,lights_phong_pars_fragment:Q_,lights_physical_fragment:ew,lights_physical_pars_fragment:tw,lights_fragment_begin:nw,lights_fragment_maps:iw,lights_fragment_end:sw,logdepthbuf_fragment:rw,logdepthbuf_pars_fragment:aw,logdepthbuf_pars_vertex:ow,logdepthbuf_vertex:lw,map_fragment:cw,map_pars_fragment:dw,map_particle_fragment:uw,map_particle_pars_fragment:hw,metalnessmap_fragment:fw,metalnessmap_pars_fragment:pw,morphcolor_vertex:mw,morphnormal_vertex:gw,morphtarget_pars_vertex:yw,morphtarget_vertex:vw,normal_fragment_begin:bw,normal_fragment_maps:xw,normal_pars_fragment:_w,normal_pars_vertex:ww,normal_vertex:Sw,normalmap_pars_fragment:Mw,clearcoat_normal_fragment_begin:Aw,clearcoat_normal_fragment_maps:Ew,clearcoat_pars_fragment:Tw,iridescence_pars_fragment:Rw,opaque_fragment:Cw,packing:Lw,premultiplied_alpha_fragment:Pw,project_vertex:Iw,dithering_fragment:Nw,dithering_pars_fragment:Dw,roughnessmap_fragment:kw,roughnessmap_pars_fragment:Ow,shadowmap_pars_fragment:Uw,shadowmap_pars_vertex:Fw,shadowmap_vertex:Bw,shadowmask_pars_fragment:zw,skinbase_vertex:Hw,skinning_pars_vertex:Vw,skinning_vertex:Gw,skinnormal_vertex:Ww,specularmap_fragment:qw,specularmap_pars_fragment:Xw,tonemapping_fragment:$w,tonemapping_pars_fragment:Yw,transmission_fragment:jw,transmission_pars_fragment:Zw,uv_pars_fragment:Kw,uv_pars_vertex:Jw,uv_vertex:Qw,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:sS,cube_vert:rS,cube_frag:aS,depth_vert:oS,depth_frag:lS,distanceRGBA_vert:cS,distanceRGBA_frag:dS,equirect_vert:uS,equirect_frag:hS,linedashed_vert:fS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:yS,meshlambert_frag:vS,meshmatcap_vert:bS,meshmatcap_frag:xS,meshnormal_vert:_S,meshnormal_frag:wS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:AS,meshphysical_frag:ES,meshtoon_vert:TS,meshtoon_frag:RS,points_vert:CS,points_frag:LS,shadow_vert:PS,shadow_frag:IS,sprite_vert:NS,sprite_frag:DS},ge={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Zi={basic:{uniforms:Vn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Vn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Vn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Vn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Vn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new De(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Vn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Vn([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Vn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Vn([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Vn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Vn([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Vn([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Vn([ge.lights,ge.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Zi.physical={uniforms:Vn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var gc={r:0,b:0,g:0};function kS(n,e,t,i,s,r,a){let o=new De(0),l=r===!0?0:1,c,d,u=null,h=0,p=null;function g(f,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),x=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===td)?(d===void 0&&(d=new Et(new lr(1,1,1),new Ts({name:"BackgroundCubeMaterial",uniforms:Qa(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=bt.getTransfer(v.colorSpace)!==Ft,(u!==v||h!==v.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Et(new Nn(2,2),new Ts({name:"BackgroundMaterial",uniforms:Qa(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=bt.getTransfer(v.colorSpace)!==Ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function y(f,m){f.getRGB(gc,E0(n)),i.buffers.color.setClear(gc.r,gc.g,gc.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),l=m,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,y(o,l)},render:g}}function OS(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=f(null),c=l,d=!1;function u(C,R,F,V,q){let G=!1;if(a){let Q=y(V,F,R);c!==Q&&(c=Q,p(c.object)),G=m(C,V,F,q),G&&x(C,V,F,q)}else{let Q=R.wireframe===!0;(c.geometry!==V.id||c.program!==F.id||c.wireframe!==Q)&&(c.geometry=V.id,c.program=F.id,c.wireframe=Q,G=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(G||d)&&(d=!1,O(C,R,F,V),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(C){return i.isWebGL2?n.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?n.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function y(C,R,F){let V=F.wireframe===!0,q=o[C.id];q===void 0&&(q={},o[C.id]=q);let G=q[R.id];G===void 0&&(G={},q[R.id]=G);let Q=G[V];return Q===void 0&&(Q=f(h()),G[V]=Q),Q}function f(C){let R=[],F=[],V=[];for(let q=0;q<s;q++)R[q]=0,F[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:V,object:C,attributes:{},index:null}}function m(C,R,F,V){let q=c.attributes,G=R.attributes,Q=0,ee=F.getAttributes();for(let re in ee)if(ee[re].location>=0){let W=q[re],ne=G[re];if(ne===void 0&&(re==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),re==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor)),W===void 0||W.attribute!==ne||ne&&W.data!==ne.data)return!0;Q++}return c.attributesNum!==Q||c.index!==V}function x(C,R,F,V){let q={},G=R.attributes,Q=0,ee=F.getAttributes();for(let re in ee)if(ee[re].location>=0){let W=G[re];W===void 0&&(re==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),re==="instanceColor"&&C.instanceColor&&(W=C.instanceColor));let ne={};ne.attribute=W,W&&W.data&&(ne.data=W.data),q[re]=ne,Q++}c.attributes=q,c.attributesNum=Q,c.index=V}function v(){let C=c.newAttributes;for(let R=0,F=C.length;R<F;R++)C[R]=0}function M(C){E(C,0)}function E(C,R){let F=c.newAttributes,V=c.enabledAttributes,q=c.attributeDivisors;F[C]=1,V[C]===0&&(n.enableVertexAttribArray(C),V[C]=1),q[C]!==R&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,R),q[C]=R)}function T(){let C=c.newAttributes,R=c.enabledAttributes;for(let F=0,V=R.length;F<V;F++)R[F]!==C[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function b(C,R,F,V,q,G,Q){Q===!0?n.vertexAttribIPointer(C,R,F,q,G):n.vertexAttribPointer(C,R,F,V,q,G)}function O(C,R,F,V){if(i.isWebGL2===!1&&(C.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let q=V.attributes,G=F.getAttributes(),Q=R.defaultAttributeValues;for(let ee in G){let re=G[ee];if(re.location>=0){let z=q[ee];if(z===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),z!==void 0){let W=z.normalized,ne=z.itemSize,ae=t.get(z);if(ae===void 0)continue;let $=ae.buffer,ie=ae.type,pe=ae.bytesPerElement,le=i.isWebGL2===!0&&(ie===n.INT||ie===n.UNSIGNED_INT||z.gpuType===p0);if(z.isInterleavedBufferAttribute){let we=z.data,X=we.stride,Wt=z.offset;if(we.isInstancedInterleavedBuffer){for(let Le=0;Le<re.locationSize;Le++)E(re.location+Le,we.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Le=0;Le<re.locationSize;Le++)M(re.location+Le);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Le=0;Le<re.locationSize;Le++)b(re.location+Le,ne/re.locationSize,ie,W,X*pe,(Wt+ne/re.locationSize*Le)*pe,le)}else{if(z.isInstancedBufferAttribute){for(let we=0;we<re.locationSize;we++)E(re.location+we,z.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let we=0;we<re.locationSize;we++)M(re.location+we);n.bindBuffer(n.ARRAY_BUFFER,$);for(let we=0;we<re.locationSize;we++)b(re.location+we,ne/re.locationSize,ie,W,ne*pe,ne/re.locationSize*we*pe,le)}}else if(Q!==void 0){let W=Q[ee];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(re.location,W);break;case 3:n.vertexAttrib3fv(re.location,W);break;case 4:n.vertexAttrib4fv(re.location,W);break;default:n.vertexAttrib1fv(re.location,W)}}}}T()}function S(){N();for(let C in o){let R=o[C];for(let F in R){let V=R[F];for(let q in V)g(V[q].object),delete V[q];delete R[F]}delete o[C]}}function _(C){if(o[C.id]===void 0)return;let R=o[C.id];for(let F in R){let V=R[F];for(let q in V)g(V[q].object),delete V[q];delete R[F]}delete o[C.id]}function I(C){for(let R in o){let F=o[R];if(F[C.id]===void 0)continue;let V=F[C.id];for(let q in V)g(V[q].object),delete V[q];delete F[C.id]}}function N(){U(),d=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:N,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:_,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function US(n,e,t,i){let s=i.isWebGL2,r;function a(d){r=d}function o(d,u){n.drawArrays(r,d,u),t.update(u,r,1)}function l(d,u,h){if(h===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,d,u,h),t.update(u,r,h)}function c(d,u,h){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(d[g],u[g]);else{p.multiDrawArraysWEBGL(r,d,0,u,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function FS(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=a||e.has("OES_texture_float"),E=v&&M,T=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:T}}function BS(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ci,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let p=u.length!==0||h||i!==0||s;return s=h,i=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){let g=u.clippingPlanes,y=u.clipIntersection,f=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!f)r?d(null):c();else{let x=r?0:i,v=x*4,M=m.clippingState||null;l.value=M,M=d(g,h,v,p);for(let E=0;E!==v;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,p,g){let y=u!==null?u.length:0,f=null;if(y!==0){if(f=l.value,g!==!0||f===null){let m=p+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,M=p;v!==y;++v,M+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function zS(n){let e=new WeakMap;function t(a,o){return o===gh?a.mapping=Ya:o===yh&&(a.mapping=ja),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===gh||o===yh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Mh(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var eo=class extends Oc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ga=4,Ag=[.125,.215,.35,.446,.526,.582],Vr=20,sh=new eo,Eg=new De,rh=null,ah=0,oh=0,zr=(1+Math.sqrt(5))/2,za=1/zr,Tg=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,zr,za),new D(0,zr,-za),new D(za,0,zr),new D(-za,0,zr),new D(zr,za,0),new D(-zr,za,0)],Fc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,ah,oh),e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ya||e.mapping===ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ho,format:xi,colorSpace:yn,depthBuffer:!1},s=Rg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HS(r)),this._blurMaterial=VS(r,e,t)}return s}_compileMaterial(e){let t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,sh)}_sceneToCubeUV(e,t,i,s){let o=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Eg),d.toneMapping=sr,d.autoClear=!1;let p=new hn({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),g=new Et(new lr,p),y=!1,f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,y=!0):(p.color.copy(Eg),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;yc(s,x*v,m>2?v:0,v,v),d.setRenderTarget(s),y&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ya||e.mapping===ja;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;yc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,sh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tg[(s-1)%Tg.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new Et(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),y=r/g,f=isFinite(r)?1+Math.floor(d*y):Vr;f>Vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Vr}`);let m=[],x=0;for(let b=0;b<Vr;++b){let O=b/y,S=Math.exp(-O*O/2);m.push(S),b===0?x+=S:b<f&&(x+=2*S)}for(let b=0;b<m.length;b++)m[b]=m[b]/x;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;let M=this._sizeLods[s],E=3*M*(s>v-Ga?s-v+Ga:0),T=4*(this._cubeSize-M);yc(t,E,T,3*M,2*M),l.setRenderTarget(t),l.render(u,sh)}};function HS(n){let e=[],t=[],i=[],s=n,r=n-Ga+1+Ag.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ga?l=Ag[a-n+Ga-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,y=3,f=2,m=1,x=new Float32Array(y*g*p),v=new Float32Array(f*g*p),M=new Float32Array(m*g*p);for(let T=0;T<p;T++){let b=T%3*2/3-1,O=T>2?0:-1,S=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];x.set(S,y*g*T),v.set(h,f*g*T);let _=[T,T,T,T,T,T];M.set(_,m*g*T)}let E=new qn;E.setAttribute("position",new kt(x,y)),E.setAttribute("uv",new kt(v,f)),E.setAttribute("faceIndex",new kt(M,m)),e.push(E),s>Ga&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rg(n,e,t){let i=new Es(n,e,t);return i.texture.mapping=td,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function VS(n,e,t){let i=new Float32Array(Vr),s=new D(0,1,0);return new Ts({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nf(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Cg(){return new Ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Lg(){return new Ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function nf(){return`

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
	`}function GS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===gh||l===yh,d=l===Ya||l===ja;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Fc(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||d&&u&&s(u)){t===null&&(t=new Fc(n));let h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function WS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qS(n,e,t,i){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let f=0,m=y.length;f<m;f++)e.remove(y[f])}h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let f=0,m=y.length;f<m;f++)e.update(y[f],n.ARRAY_BUFFER)}}function c(u){let h=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let x=p.array;y=p.version;for(let v=0,M=x.length;v<M;v+=3){let E=x[v+0],T=x[v+1],b=x[v+2];h.push(E,T,T,b,b,E)}}else if(g!==void 0){let x=g.array;y=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){let E=v+0,T=v+1,b=v+2;h.push(E,T,T,b,b,E)}}else return;let f=new(M0(h)?kc:Dc)(h,1);f.version=y;let m=r.get(u);m&&e.remove(m),r.set(u,f)}function d(u){let h=r.get(u);if(h){let p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function XS(n,e,t,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function d(p,g){n.drawElements(r,g,o,p*l),t.update(g,r,1)}function u(p,g,y){if(y===0)return;let f,m;if(s)f=n,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,g,o,p*l,y),t.update(g,r,y)}function h(p,g,y){if(y===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<y;m++)this.render(p[m]/l,g[m]);else{f.multiDrawElementsWEBGL(r,g,0,o,p,0,y);let m=0;for(let x=0;x<y;x++)m+=g[x];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=h}function $S(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function YS(n,e){return n[0]-e[0]}function jS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ZS(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new Rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=p!==void 0?p.length:0,y=r.get(d);if(y===void 0||y.count!==g){let C=function(){N.dispose(),r.delete(d),d.removeEventListener("dispose",C)};y!==void 0&&y.texture.dispose();let x=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],b=d.morphAttributes.color||[],O=0;x===!0&&(O=1),v===!0&&(O=2),M===!0&&(O=3);let S=d.attributes.position.count*O,_=1;S>e.maxTextureSize&&(_=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let I=new Float32Array(S*_*4*g),N=new Nc(I,S,_,g);N.type=Ms,N.needsUpdate=!0;let U=O*4;for(let R=0;R<g;R++){let F=E[R],V=T[R],q=b[R],G=S*_*4*R;for(let Q=0;Q<F.count;Q++){let ee=Q*U;x===!0&&(a.fromBufferAttribute(F,Q),I[G+ee+0]=a.x,I[G+ee+1]=a.y,I[G+ee+2]=a.z,I[G+ee+3]=0),v===!0&&(a.fromBufferAttribute(V,Q),I[G+ee+4]=a.x,I[G+ee+5]=a.y,I[G+ee+6]=a.z,I[G+ee+7]=0),M===!0&&(a.fromBufferAttribute(q,Q),I[G+ee+8]=a.x,I[G+ee+9]=a.y,I[G+ee+10]=a.z,I[G+ee+11]=q.itemSize===4?a.w:1)}}y={count:g,texture:N,size:new je(S,_)},r.set(d,y),d.addEventListener("dispose",C)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];let m=d.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",h),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=h===void 0?0:h.length,g=i[d.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];i[d.id]=g}for(let v=0;v<p;v++){let M=g[v];M[0]=v,M[1]=h[v]}g.sort(jS);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(YS);let y=d.morphAttributes.position,f=d.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let M=o[v],E=M[0],T=M[1];E!==Number.MAX_SAFE_INTEGER&&T?(y&&d.getAttribute("morphTarget"+v)!==y[E]&&d.setAttribute("morphTarget"+v,y[E]),f&&d.getAttribute("morphNormal"+v)!==f[E]&&d.setAttribute("morphNormal"+v,f[E]),s[v]=T,m+=T):(y&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),f&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),s[v]=0)}let x=d.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function KS(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Bc=class extends En{constructor(e,t,i,s,r,a,o,l,c,d){if(d=d!==void 0?d:Wr,d!==Wr&&d!==Za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Wr&&(i=tr),i===void 0&&d===Za&&(i=Gr),super(null,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},R0=new En,C0=new Bc(1,1);C0.compareFunction=S0;var L0=new Nc,P0=new wh,I0=new Uc,Pg=[],Ig=[],Ng=new Float32Array(16),Dg=new Float32Array(9),kg=new Float32Array(4);function oo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Pg[s];if(r===void 0&&(r=new Float32Array(s),Pg[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function vn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sd(n,e){let t=Ig[e];t===void 0&&(t=new Int32Array(e),Ig[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function JS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function QS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2fv(this.addr,e),bn(t,e)}}function eM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;n.uniform3fv(this.addr,e),bn(t,e)}}function tM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4fv(this.addr,e),bn(t,e)}}function nM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(vn(t,i))return;kg.set(i),n.uniformMatrix2fv(this.addr,!1,kg),bn(t,i)}}function iM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(vn(t,i))return;Dg.set(i),n.uniformMatrix3fv(this.addr,!1,Dg),bn(t,i)}}function sM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(vn(t,i))return;Ng.set(i),n.uniformMatrix4fv(this.addr,!1,Ng),bn(t,i)}}function rM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2iv(this.addr,e),bn(t,e)}}function oM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3iv(this.addr,e),bn(t,e)}}function lM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4iv(this.addr,e),bn(t,e)}}function cM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2uiv(this.addr,e),bn(t,e)}}function uM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3uiv(this.addr,e),bn(t,e)}}function hM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4uiv(this.addr,e),bn(t,e)}}function fM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?C0:R0;t.setTexture2D(e||r,s)}function pM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||P0,s)}function mM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||I0,s)}function gM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||L0,s)}function yM(n){switch(n){case 5126:return JS;case 35664:return QS;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return dM;case 36295:return uM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(n,e){n.uniform1fv(this.addr,e)}function bM(n,e){let t=oo(e,this.size,2);n.uniform2fv(this.addr,t)}function xM(n,e){let t=oo(e,this.size,3);n.uniform3fv(this.addr,t)}function _M(n,e){let t=oo(e,this.size,4);n.uniform4fv(this.addr,t)}function wM(n,e){let t=oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function SM(n,e){let t=oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MM(n,e){let t=oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function AM(n,e){n.uniform1iv(this.addr,e)}function EM(n,e){n.uniform2iv(this.addr,e)}function TM(n,e){n.uniform3iv(this.addr,e)}function RM(n,e){n.uniform4iv(this.addr,e)}function CM(n,e){n.uniform1uiv(this.addr,e)}function LM(n,e){n.uniform2uiv(this.addr,e)}function PM(n,e){n.uniform3uiv(this.addr,e)}function IM(n,e){n.uniform4uiv(this.addr,e)}function NM(n,e,t){let i=this.cache,s=e.length,r=sd(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||R0,r[a])}function DM(n,e,t){let i=this.cache,s=e.length,r=sd(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||P0,r[a])}function kM(n,e,t){let i=this.cache,s=e.length,r=sd(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||I0,r[a])}function OM(n,e,t){let i=this.cache,s=e.length,r=sd(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||L0,r[a])}function UM(n){switch(n){case 5126:return vM;case 35664:return bM;case 35665:return xM;case 35666:return _M;case 35674:return wM;case 35675:return SM;case 35676:return MM;case 5124:case 35670:return AM;case 35667:case 35671:return EM;case 35668:case 35672:return TM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return LM;case 36295:return PM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return OM}}var Ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yM(t.type)}},Eh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UM(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},lh=/(\w+)(\])?(\[|\.)?/g;function Og(n,e){n.seq.push(e),n.map[e.id]=e}function FM(n,e,t){let i=n.name,s=i.length;for(lh.lastIndex=0;;){let r=lh.exec(i),a=lh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Og(t,c===void 0?new Ah(o,n,e):new Eh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Th(o),Og(t,u)),t=u}}}var $a=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);FM(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Ug(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var BM=37297,zM=0;function HM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function VM(n){let e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(n),i;switch(e===t?i="":e===Rc&&t===Tc?i="LinearDisplayP3ToLinearSRGB":e===Tc&&t===Rc&&(i="LinearSRGBToLinearDisplayP3"),n){case yn:case id:return[i,"LinearTransferOETF"];case $t:case ef:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Fg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+HM(n.getShaderSource(e),a)}else return s}function GM(n,e){let t=VM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function WM(n,e){let t;switch(e){case Yb:t="Linear";break;case jb:t="Reinhard";break;case Zb:t="OptimizedCineon";break;case Kb:t="ACESFilmic";break;case Qb:t="AgX";break;case Jb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wa).join(`
`)}function XM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Wa).join(`
`)}function $M(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Wa(n){return n!==""}function Bg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(n){return n.replace(jM,KM)}var ZM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function KM(n,e){let t=Ke[e];if(t===void 0){let i=ZM.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rh(t)}var JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(n){return n.replace(JM,QM)}function QM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ss&&(e="SHADOWMAP_TYPE_VSM"),e}function t1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ya:case ja:e="ENVMAP_TYPE_CUBE";break;case td:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ja:e="ENVMAP_MODE_REFRACTION";break}return e}function i1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Xb:e="ENVMAP_BLENDING_MIX";break;case $b:e="ENVMAP_BLENDING_ADD";break}return e}function s1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function r1(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=e1(t),c=t1(t),d=n1(t),u=i1(t),h=s1(t),p=t.isWebGL2?"":qM(t),g=XM(t),y=$M(r),f=s.createProgram(),m,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Wa).join(`
`),m.length>0&&(m+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Wa).join(`
`),x.length>0&&(x+=`
`)):(m=[Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),x=[p,Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?Ke.tonemapping_pars_fragment:"",t.toneMapping!==sr?WM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),a=Rh(a),a=Bg(a,t),a=zg(a,t),o=Rh(o),o=Bg(o,t),o=zg(o,t),a=Hg(a),o=Hg(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===og?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let M=v+m+a,E=v+x+o,T=Ug(s,s.VERTEX_SHADER,M),b=Ug(s,s.FRAGMENT_SHADER,E);s.attachShader(f,T),s.attachShader(f,b),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function O(N){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(f).trim(),C=s.getShaderInfoLog(T).trim(),R=s.getShaderInfoLog(b).trim(),F=!0,V=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,T,b);else{let q=Fg(s,T,"vertex"),G=Fg(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+q+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(C===""||R==="")&&(V=!1);V&&(N.diagnostics={runnable:F,programLog:U,vertexShader:{log:C,prefix:m},fragmentShader:{log:R,prefix:x}})}s.deleteShader(T),s.deleteShader(b),S=new $a(s,f),_=YM(s,f)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let _;this.getAttributes=function(){return _===void 0&&O(this),_};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(f,BM)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=b,this}var a1=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Lh(e),t.set(e,i)),i}},Lh=class{constructor(e){this.id=a1++,this.code=e,this.usedTimes=0}};function o1(n,e,t,i,s,r,a){let o=new Go,l=new Ch,c=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function f(S,_,I,N,U){let C=N.fog,R=U.geometry,F=S.isMeshStandardMaterial?N.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),q=V&&V.mapping===td?V.image.height:null,G=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ee=Q!==void 0?Q.length:0,re=0;R.morphAttributes.position!==void 0&&(re=1),R.morphAttributes.normal!==void 0&&(re=2),R.morphAttributes.color!==void 0&&(re=3);let z,W,ne,ae;if(G){let Bn=Zi[G];z=Bn.vertexShader,W=Bn.fragmentShader}else z=S.vertexShader,W=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);let $=n.getRenderTarget(),ie=U.isInstancedMesh===!0,pe=U.isBatchedMesh===!0,le=!!S.map,we=!!S.matcap,X=!!V,Wt=!!S.aoMap,Le=!!S.lightMap,Be=!!S.bumpMap,Pe=!!S.normalMap,qt=!!S.displacementMap,et=!!S.emissiveMap,P=!!S.metalnessMap,A=!!S.roughnessMap,j=S.anisotropy>0,de=S.clearcoat>0,ce=S.iridescence>0,ue=S.sheen>0,Ie=S.transmission>0,_e=j&&!!S.anisotropyMap,Ee=de&&!!S.clearcoatMap,ze=de&&!!S.clearcoatNormalMap,tt=de&&!!S.clearcoatRoughnessMap,oe=ce&&!!S.iridescenceMap,Mt=ce&&!!S.iridescenceThicknessMap,ct=ue&&!!S.sheenColorMap,Xe=ue&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Te=!!S.specularColorMap,Ze=!!S.specularIntensityMap,St=Ie&&!!S.transmissionMap,tn=Ie&&!!S.thicknessMap,rt=!!S.gradientMap,me=!!S.alphaMap,B=S.alphaTest>0,be=!!S.alphaHash,xe=!!S.extensions,Ve=!!R.attributes.uv1,Oe=!!R.attributes.uv2,Pt=!!R.attributes.uv3,It=sr;return S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(It=n.toneMapping),{isWebGL2:d,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:W,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:pe,instancing:ie,instancingColor:ie&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:yn,map:le,matcap:we,envMap:X,envMapMode:X&&V.mapping,envMapCubeUVHeight:q,aoMap:Wt,lightMap:Le,bumpMap:Be,normalMap:Pe,displacementMap:h&&qt,emissiveMap:et,normalMapObjectSpace:Pe&&S.normalMapType===hx,normalMapTangentSpace:Pe&&S.normalMapType===Qh,metalnessMap:P,roughnessMap:A,anisotropy:j,anisotropyMap:_e,clearcoat:de,clearcoatMap:Ee,clearcoatNormalMap:ze,clearcoatRoughnessMap:tt,iridescence:ce,iridescenceMap:oe,iridescenceThicknessMap:Mt,sheen:ue,sheenColorMap:ct,sheenRoughnessMap:Xe,specularMap:ke,specularColorMap:Te,specularIntensityMap:Ze,transmission:Ie,transmissionMap:St,thicknessMap:tn,gradientMap:rt,opaque:S.transparent===!1&&S.blending===qa,alphaMap:me,alphaTest:B,alphaHash:be,combine:S.combine,mapUv:le&&y(S.map.channel),aoMapUv:Wt&&y(S.aoMap.channel),lightMapUv:Le&&y(S.lightMap.channel),bumpMapUv:Be&&y(S.bumpMap.channel),normalMapUv:Pe&&y(S.normalMap.channel),displacementMapUv:qt&&y(S.displacementMap.channel),emissiveMapUv:et&&y(S.emissiveMap.channel),metalnessMapUv:P&&y(S.metalnessMap.channel),roughnessMapUv:A&&y(S.roughnessMap.channel),anisotropyMapUv:_e&&y(S.anisotropyMap.channel),clearcoatMapUv:Ee&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ze&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&y(S.sheenRoughnessMap.channel),specularMapUv:ke&&y(S.specularMap.channel),specularColorMapUv:Te&&y(S.specularColorMap.channel),specularIntensityMapUv:Ze&&y(S.specularIntensityMap.channel),transmissionMapUv:St&&y(S.transmissionMap.channel),thicknessMapUv:tn&&y(S.thicknessMap.channel),alphaMapUv:me&&y(S.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Pe||j),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUv1s:Ve,vertexUv2s:Oe,vertexUv3s:Pt,pointsUvs:U.isPoints===!0&&!!R.attributes.uv&&(le||me),fog:!!C,useFog:S.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:re,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,useLegacyLights:n._useLegacyLights,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&bt.getTransfer(S.map.colorSpace)===Ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gn,flipSided:S.side===Qn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:xe&&S.extensions.derivatives===!0,extensionFragDepth:xe&&S.extensions.fragDepth===!0,extensionDrawBuffers:xe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)_.push(I),_.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(x(_,S),v(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function x(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function v(S,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),S.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function M(S){let _=g[S.type],I;if(_){let N=Zi[_];I=Zx.clone(N.uniforms)}else I=S.uniforms;return I}function E(S,_){let I;for(let N=0,U=c.length;N<U;N++){let C=c[N];if(C.cacheKey===_){I=C,++I.usedTimes;break}}return I===void 0&&(I=new r1(n,_,S,r),c.push(I)),I}function T(S){if(--S.usedTimes===0){let _=c.indexOf(S);c[_]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function O(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:M,acquireProgram:E,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:O}}function l1(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function c1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,h,p,g,y,f){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:f},n[e]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=f),e++,m}function o(u,h,p,g,y,f){let m=a(u,h,p,g,y,f);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,h,p,g,y,f){let m=a(u,h,p,g,y,f);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,h){t.length>1&&t.sort(u||c1),i.length>1&&i.sort(h||Gg),s.length>1&&s.sort(h||Gg)}function d(){for(let u=e,h=n.length;u<h;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function d1(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Wg,n.set(i,[a])):s>=r.length?(a=new Wg,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function u1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function h1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var f1=0;function p1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function m1(n,e){let t=new u1,i=h1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new D);let r=new D,a=new Re,o=new Re;function l(d,u){let h=0,p=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,f=0,m=0,x=0,v=0,M=0,E=0,T=0,b=0,O=0,S=0;d.sort(p1);let _=u===!0?Math.PI:1;for(let N=0,U=d.length;N<U;N++){let C=d[N],R=C.color,F=C.intensity,V=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=R.r*F*_,p+=R.g*F*_,g+=R.b*F*_;else if(C.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(C.sh.coefficients[G],F);S++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*_),C.castShadow){let Q=C.shadow,ee=i.get(C);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,s.directionalShadow[y]=ee,s.directionalShadowMap[y]=q,s.directionalShadowMatrix[y]=C.shadow.matrix,M++}s.directional[y]=G,y++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(R).multiplyScalar(F*_),G.distance=V,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,s.spot[m]=G;let Q=C.shadow;if(C.map&&(s.spotLightMap[b]=C.map,b++,Q.updateMatrices(C),C.castShadow&&O++),s.spotLightMatrix[m]=Q.matrix,C.castShadow){let ee=i.get(C);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,s.spotShadow[m]=ee,s.spotShadowMap[m]=q,T++}m++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(R).multiplyScalar(F),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),s.rectArea[x]=G,x++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*_),G.distance=C.distance,G.decay=C.decay,C.castShadow){let Q=C.shadow,ee=i.get(C);ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,s.pointShadow[f]=ee,s.pointShadowMap[f]=q,s.pointShadowMatrix[f]=C.shadow.matrix,E++}s.point[f]=G,f++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(F*_),G.groundColor.copy(C.groundColor).multiplyScalar(F*_),s.hemi[v]=G,v++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;let I=s.hash;(I.directionalLength!==y||I.pointLength!==f||I.spotLength!==m||I.rectAreaLength!==x||I.hemiLength!==v||I.numDirectionalShadows!==M||I.numPointShadows!==E||I.numSpotShadows!==T||I.numSpotMaps!==b||I.numLightProbes!==S)&&(s.directional.length=y,s.spot.length=m,s.rectArea.length=x,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=T+b-O,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=S,I.directionalLength=y,I.pointLength=f,I.spotLength=m,I.rectAreaLength=x,I.hemiLength=v,I.numDirectionalShadows=M,I.numPointShadows=E,I.numSpotShadows=T,I.numSpotMaps=b,I.numLightProbes=S,s.version=f1++)}function c(d,u){let h=0,p=0,g=0,y=0,f=0,m=u.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){let M=d[x];if(M.isDirectionalLight){let E=s.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(M.isSpotLight){let E=s.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let E=s.rectArea[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let E=s.point[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let E=s.hemi[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),f++}}}return{setup:l,setupView:c,state:s}}function qg(n,e){let t=new m1(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function g1(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new qg(n,e),t.set(r,[l])):a>=o.length?(l=new qg(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ph=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ih=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
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
}`;function b1(n,e,t){let i=new Wo,s=new je,r=new je,a=new Rt,o=new Ph({depthPacking:ux}),l=new Ih,c={},d=t.maxTextureSize,u={[Ji]:Qn,[Qn]:Ji,[Gn]:Gn},h=new Ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:y1,fragmentShader:v1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new qn;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Et(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let m=this.type;this.render=function(T,b,O){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let S=n.getRenderTarget(),_=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ir),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=m!==Ss&&this.type===Ss,C=m===Ss&&this.type!==Ss;for(let R=0,F=T.length;R<F;R++){let V=T[R],q=V.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let G=q.getFrameExtents();if(s.multiply(G),r.copy(q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/G.x),s.x=r.x*G.x,q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/G.y),s.y=r.y*G.y,q.mapSize.y=r.y)),q.map===null||U===!0||C===!0){let ee=this.type!==Ss?{minFilter:gn,magFilter:gn}:{};q.map!==null&&q.map.dispose(),q.map=new Es(s.x,s.y,ee),q.map.texture.name=V.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let Q=q.getViewportCount();for(let ee=0;ee<Q;ee++){let re=q.getViewport(ee);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),N.viewport(a),q.updateMatrices(V,ee),i=q.getFrustum(),M(b,O,q.camera,V,this.type)}q.isPointLightShadow!==!0&&this.type===Ss&&x(q,O),q.needsUpdate=!1}m=this.type,f.needsUpdate=!1,n.setRenderTarget(S,_,I)};function x(T,b){let O=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Es(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,O,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,O,p,y,null)}function v(T,b,O,S){let _=null,I=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)_=I;else if(_=O.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=_.uuid,U=b.uuid,C=c[N];C===void 0&&(C={},c[N]=C);let R=C[U];R===void 0&&(R=_.clone(),C[U]=R,b.addEventListener("dispose",E)),_=R}if(_.visible=b.visible,_.wireframe=b.wireframe,S===Ss?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:u[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,O.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=n.properties.get(_);N.light=O}return _}function M(T,b,O,S,_){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Ss)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);let U=e.update(T),C=T.material;if(Array.isArray(C)){let R=U.groups;for(let F=0,V=R.length;F<V;F++){let q=R[F],G=C[q.materialIndex];if(G&&G.visible){let Q=v(T,G,S,_);T.onBeforeShadow(n,T,b,O,U,Q,q),n.renderBufferDirect(O,null,U,Q,T,q),T.onAfterShadow(n,T,b,O,U,Q,q)}}}else if(C.visible){let R=v(T,C,S,_);T.onBeforeShadow(n,T,b,O,U,R,null),n.renderBufferDirect(O,null,U,R,T,null),T.onAfterShadow(n,T,b,O,U,R,null)}}let N=T.children;for(let U=0,C=N.length;U<C;U++)M(N[U],b,O,S,_)}function E(T){T.target.removeEventListener("dispose",E);for(let O in c){let S=c[O],_=T.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}function x1(n,e,t){let i=t.isWebGL2;function s(){let B=!1,be=new Rt,xe=null,Ve=new Rt(0,0,0,0);return{setMask:function(Oe){xe!==Oe&&!B&&(n.colorMask(Oe,Oe,Oe,Oe),xe=Oe)},setLocked:function(Oe){B=Oe},setClear:function(Oe,Pt,It,_n,Bn){Bn===!0&&(Oe*=_n,Pt*=_n,It*=_n),be.set(Oe,Pt,It,_n),Ve.equals(be)===!1&&(n.clearColor(Oe,Pt,It,_n),Ve.copy(be))},reset:function(){B=!1,xe=null,Ve.set(-1,0,0,0)}}}function r(){let B=!1,be=null,xe=null,Ve=null;return{setTest:function(Oe){Oe?pe(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Oe){be!==Oe&&!B&&(n.depthMask(Oe),be=Oe)},setFunc:function(Oe){if(xe!==Oe){switch(Oe){case Bb:n.depthFunc(n.NEVER);break;case zb:n.depthFunc(n.ALWAYS);break;case Hb:n.depthFunc(n.LESS);break;case Mc:n.depthFunc(n.LEQUAL);break;case Vb:n.depthFunc(n.EQUAL);break;case Gb:n.depthFunc(n.GEQUAL);break;case Wb:n.depthFunc(n.GREATER);break;case qb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=Oe}},setLocked:function(Oe){B=Oe},setClear:function(Oe){Ve!==Oe&&(n.clearDepth(Oe),Ve=Oe)},reset:function(){B=!1,be=null,xe=null,Ve=null}}}function a(){let B=!1,be=null,xe=null,Ve=null,Oe=null,Pt=null,It=null,_n=null,Bn=null;return{setTest:function(Nt){B||(Nt?pe(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(Nt){be!==Nt&&!B&&(n.stencilMask(Nt),be=Nt)},setFunc:function(Nt,zn,ji){(xe!==Nt||Ve!==zn||Oe!==ji)&&(n.stencilFunc(Nt,zn,ji),xe=Nt,Ve=zn,Oe=ji)},setOp:function(Nt,zn,ji){(Pt!==Nt||It!==zn||_n!==ji)&&(n.stencilOp(Nt,zn,ji),Pt=Nt,It=zn,_n=ji)},setLocked:function(Nt){B=Nt},setClear:function(Nt){Bn!==Nt&&(n.clearStencil(Nt),Bn=Nt)},reset:function(){B=!1,be=null,xe=null,Ve=null,Oe=null,Pt=null,It=null,_n=null,Bn=null}}}let o=new s,l=new r,c=new a,d=new WeakMap,u=new WeakMap,h={},p={},g=new WeakMap,y=[],f=null,m=!1,x=null,v=null,M=null,E=null,T=null,b=null,O=null,S=new De(0,0,0),_=0,I=!1,N=null,U=null,C=null,R=null,F=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,G=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=G>=2);let ee=null,re={},z=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),ne=new Rt().fromArray(z),ae=new Rt().fromArray(W);function $(B,be,xe,Ve){let Oe=new Uint8Array(4),Pt=n.createTexture();n.bindTexture(B,Pt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<xe;It++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(be,0,n.RGBA,1,1,Ve,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(be+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return Pt}let ie={};ie[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ie[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(n.DEPTH_TEST),l.setFunc(Mc),et(!1),P(Am),pe(n.CULL_FACE),Pe(ir);function pe(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function le(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function we(B,be){return p[B]!==be?(n.bindFramebuffer(B,be),p[B]=be,i&&(B===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=be),B===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=be)),!0):!1}function X(B,be){let xe=y,Ve=!1;if(B)if(xe=g.get(be),xe===void 0&&(xe=[],g.set(be,xe)),B.isWebGLMultipleRenderTargets){let Oe=B.texture;if(xe.length!==Oe.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let Pt=0,It=Oe.length;Pt<It;Pt++)xe[Pt]=n.COLOR_ATTACHMENT0+Pt;xe.length=Oe.length,Ve=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,Ve=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,Ve=!0);Ve&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Wt(B){return f!==B?(n.useProgram(B),f=B,!0):!1}let Le={[Hr]:n.FUNC_ADD,[Mb]:n.FUNC_SUBTRACT,[Ab]:n.FUNC_REVERSE_SUBTRACT};if(i)Le[Cm]=n.MIN,Le[Lm]=n.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(Le[Cm]=B.MIN_EXT,Le[Lm]=B.MAX_EXT)}let Be={[Eb]:n.ZERO,[Tb]:n.ONE,[Rb]:n.SRC_COLOR,[ph]:n.SRC_ALPHA,[Db]:n.SRC_ALPHA_SATURATE,[Ib]:n.DST_COLOR,[Lb]:n.DST_ALPHA,[Cb]:n.ONE_MINUS_SRC_COLOR,[mh]:n.ONE_MINUS_SRC_ALPHA,[Nb]:n.ONE_MINUS_DST_COLOR,[Pb]:n.ONE_MINUS_DST_ALPHA,[kb]:n.CONSTANT_COLOR,[Ob]:n.ONE_MINUS_CONSTANT_COLOR,[Ub]:n.CONSTANT_ALPHA,[Fb]:n.ONE_MINUS_CONSTANT_ALPHA};function Pe(B,be,xe,Ve,Oe,Pt,It,_n,Bn,Nt){if(B===ir){m===!0&&(le(n.BLEND),m=!1);return}if(m===!1&&(pe(n.BLEND),m=!0),B!==Sb){if(B!==x||Nt!==I){if((v!==Hr||T!==Hr)&&(n.blendEquation(n.FUNC_ADD),v=Hr,T=Hr),Nt)switch(B){case qa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Em:n.blendFunc(n.ONE,n.ONE);break;case Tm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case qa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Em:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Tm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,E=null,b=null,O=null,S.set(0,0,0),_=0,x=B,I=Nt}return}Oe=Oe||be,Pt=Pt||xe,It=It||Ve,(be!==v||Oe!==T)&&(n.blendEquationSeparate(Le[be],Le[Oe]),v=be,T=Oe),(xe!==M||Ve!==E||Pt!==b||It!==O)&&(n.blendFuncSeparate(Be[xe],Be[Ve],Be[Pt],Be[It]),M=xe,E=Ve,b=Pt,O=It),(_n.equals(S)===!1||Bn!==_)&&(n.blendColor(_n.r,_n.g,_n.b,Bn),S.copy(_n),_=Bn),x=B,I=!1}function qt(B,be){B.side===Gn?le(n.CULL_FACE):pe(n.CULL_FACE);let xe=B.side===Qn;be&&(xe=!xe),et(xe),B.blending===qa&&B.transparent===!1?Pe(ir):Pe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);let Ve=B.stencilWrite;c.setTest(Ve),Ve&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),j(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(B){N!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),N=B)}function P(B){B!==xb?(pe(n.CULL_FACE),B!==U&&(B===Am?n.cullFace(n.BACK):B===_b?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),U=B}function A(B){B!==C&&(q&&n.lineWidth(B),C=B)}function j(B,be,xe){B?(pe(n.POLYGON_OFFSET_FILL),(R!==be||F!==xe)&&(n.polygonOffset(be,xe),R=be,F=xe)):le(n.POLYGON_OFFSET_FILL)}function de(B){B?pe(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function ce(B){B===void 0&&(B=n.TEXTURE0+V-1),ee!==B&&(n.activeTexture(B),ee=B)}function ue(B,be,xe){xe===void 0&&(ee===null?xe=n.TEXTURE0+V-1:xe=ee);let Ve=re[xe];Ve===void 0&&(Ve={type:void 0,texture:void 0},re[xe]=Ve),(Ve.type!==B||Ve.texture!==be)&&(ee!==xe&&(n.activeTexture(xe),ee=xe),n.bindTexture(B,be||ie[B]),Ve.type=B,Ve.texture=be)}function Ie(){let B=re[ee];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(B){ne.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ne.copy(B))}function St(B){ae.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ae.copy(B))}function tn(B,be){let xe=u.get(be);xe===void 0&&(xe=new WeakMap,u.set(be,xe));let Ve=xe.get(B);Ve===void 0&&(Ve=n.getUniformBlockIndex(be,B.name),xe.set(B,Ve))}function rt(B,be){let Ve=u.get(be).get(B);d.get(be)!==Ve&&(n.uniformBlockBinding(be,Ve,B.__bindingPointIndex),d.set(be,Ve))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ee=null,re={},p={},g=new WeakMap,y=[],f=null,m=!1,x=null,v=null,M=null,E=null,T=null,b=null,O=null,S=new De(0,0,0),_=0,I=!1,N=null,U=null,C=null,R=null,F=null,ne.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:pe,disable:le,bindFramebuffer:we,drawBuffers:X,useProgram:Wt,setBlending:Pe,setMaterial:qt,setFlipSided:et,setCullFace:P,setLineWidth:A,setPolygonOffset:j,setScissorTest:de,activeTexture:ce,bindTexture:ue,unbindTexture:Ie,compressedTexImage2D:_e,compressedTexImage3D:Ee,texImage2D:ke,texImage3D:Te,updateUBOMapping:tn,uniformBlockBinding:rt,texStorage2D:ct,texStorage3D:Xe,texSubImage2D:ze,texSubImage3D:tt,compressedTexSubImage2D:oe,compressedTexSubImage3D:Mt,scissor:Ze,viewport:St,reset:me}}function _1(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap,u,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return p?new OffscreenCanvas(P,A):Vo("canvas")}function y(P,A,j,de){let ce=1;if((P.width>de||P.height>de)&&(ce=de/Math.max(P.width,P.height)),ce<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let ue=A?Lc:Math.floor,Ie=ue(ce*P.width),_e=ue(ce*P.height);u===void 0&&(u=g(Ie,_e));let Ee=j?g(Ie,_e):u;return Ee.width=Ie,Ee.height=_e,Ee.getContext("2d").drawImage(P,0,0,Ie,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ie+"x"+_e+")."),Ee}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function f(P){return xh(P.width)&&xh(P.height)}function m(P){return o?!1:P.wrapS!==di||P.wrapT!==di||P.minFilter!==gn&&P.minFilter!==un}function x(P,A){return P.generateMipmaps&&A&&P.minFilter!==gn&&P.minFilter!==un}function v(P){n.generateMipmap(P)}function M(P,A,j,de,ce=!1){if(o===!1)return A;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=A;if(A===n.RED&&(j===n.FLOAT&&(ue=n.R32F),j===n.HALF_FLOAT&&(ue=n.R16F),j===n.UNSIGNED_BYTE&&(ue=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(ue=n.R8UI),j===n.UNSIGNED_SHORT&&(ue=n.R16UI),j===n.UNSIGNED_INT&&(ue=n.R32UI),j===n.BYTE&&(ue=n.R8I),j===n.SHORT&&(ue=n.R16I),j===n.INT&&(ue=n.R32I)),A===n.RG&&(j===n.FLOAT&&(ue=n.RG32F),j===n.HALF_FLOAT&&(ue=n.RG16F),j===n.UNSIGNED_BYTE&&(ue=n.RG8)),A===n.RGBA){let Ie=ce?Ec:bt.getTransfer(de);j===n.FLOAT&&(ue=n.RGBA32F),j===n.HALF_FLOAT&&(ue=n.RGBA16F),j===n.UNSIGNED_BYTE&&(ue=Ie===Ft?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function E(P,A,j){return x(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==gn&&P.minFilter!==un?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function T(P){return P===gn||P===Ac||P===ko?n.NEAREST:n.LINEAR}function b(P){let A=P.target;A.removeEventListener("dispose",b),S(A),A.isVideoTexture&&d.delete(A)}function O(P){let A=P.target;A.removeEventListener("dispose",O),I(A)}function S(P){let A=i.get(P);if(A.__webglInit===void 0)return;let j=P.source,de=h.get(j);if(de){let ce=de[A.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&_(P),Object.keys(de).length===0&&h.delete(j)}i.remove(P)}function _(P){let A=i.get(P);n.deleteTexture(A.__webglTexture);let j=P.source,de=h.get(j);delete de[A.__cacheKey],a.memory.textures--}function I(P){let A=P.texture,j=i.get(P),de=i.get(A);if(de.__webglTexture!==void 0&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(j.__webglFramebuffer[ce]))for(let ue=0;ue<j.__webglFramebuffer[ce].length;ue++)n.deleteFramebuffer(j.__webglFramebuffer[ce][ue]);else n.deleteFramebuffer(j.__webglFramebuffer[ce]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ce])}else{if(Array.isArray(j.__webglFramebuffer))for(let ce=0;ce<j.__webglFramebuffer.length;ce++)n.deleteFramebuffer(j.__webglFramebuffer[ce]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ce=0;ce<j.__webglColorRenderbuffer.length;ce++)j.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ce]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ce=0,ue=A.length;ce<ue;ce++){let Ie=i.get(A[ce]);Ie.__webglTexture&&(n.deleteTexture(Ie.__webglTexture),a.memory.textures--),i.remove(A[ce])}i.remove(A),i.remove(P)}let N=0;function U(){N=0}function C(){let P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function R(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function F(P,A){let j=i.get(P);if(P.isVideoTexture&&qt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){let de=P.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(j,P,A);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function V(P,A){let j=i.get(P);if(P.version>0&&j.__version!==P.version){ne(j,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function q(P,A){let j=i.get(P);if(P.version>0&&j.__version!==P.version){ne(j,P,A);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function G(P,A){let j=i.get(P);if(P.version>0&&j.__version!==P.version){ae(j,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}let Q={[Xr]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[zo]:n.MIRRORED_REPEAT},ee={[gn]:n.NEAREST,[Ac]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Kh]:n.LINEAR_MIPMAP_NEAREST,[ar]:n.LINEAR_MIPMAP_LINEAR},re={[fx]:n.NEVER,[bx]:n.ALWAYS,[px]:n.LESS,[S0]:n.LEQUAL,[mx]:n.EQUAL,[vx]:n.GEQUAL,[gx]:n.GREATER,[yx]:n.NOTEQUAL};function z(P,A,j){if(j?(n.texParameteri(P,n.TEXTURE_WRAP_S,Q[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Q[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Q[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ee[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ee[A.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==di||A.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==gn&&A.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let de=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===gn||A.minFilter!==ko&&A.minFilter!==ar||A.type===Ms&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Ho&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(P,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function W(P,A){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",b));let de=A.source,ce=h.get(de);ce===void 0&&(ce={},h.set(de,ce));let ue=R(A);if(ue!==P.__cacheKey){ce[ue]===void 0&&(ce[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ce[ue].usedTimes++;let Ie=ce[P.__cacheKey];Ie!==void 0&&(ce[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&_(A)),P.__cacheKey=ue,P.__webglTexture=ce[ue].texture}return j}function ne(P,A,j){let de=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=n.TEXTURE_3D);let ce=W(P,A),ue=A.source;t.bindTexture(de,P.__webglTexture,n.TEXTURE0+j);let Ie=i.get(ue);if(ue.version!==Ie.__version||ce===!0){t.activeTexture(n.TEXTURE0+j);let _e=bt.getPrimaries(bt.workingColorSpace),Ee=A.colorSpace===_i?null:bt.getPrimaries(A.colorSpace),ze=A.colorSpace===_i||_e===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let tt=m(A)&&f(A.image)===!1,oe=y(A.image,tt,!1,s.maxTextureSize);oe=et(A,oe);let Mt=f(oe)||o,ct=r.convert(A.format,A.colorSpace),Xe=r.convert(A.type),ke=M(A.internalFormat,ct,Xe,A.colorSpace,A.isVideoTexture);z(de,A,Mt);let Te,Ze=A.mipmaps,St=o&&A.isVideoTexture!==!0&&ke!==x0,tn=Ie.__version===void 0||ce===!0,rt=E(A,oe,Mt);if(A.isDepthTexture)ke=n.DEPTH_COMPONENT,o?A.type===Ms?ke=n.DEPTH_COMPONENT32F:A.type===tr?ke=n.DEPTH_COMPONENT24:A.type===Gr?ke=n.DEPTH24_STENCIL8:ke=n.DEPTH_COMPONENT16:A.type===Ms&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Wr&&ke===n.DEPTH_COMPONENT&&A.type!==Jh&&A.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=tr,Xe=r.convert(A.type)),A.format===Za&&ke===n.DEPTH_COMPONENT&&(ke=n.DEPTH_STENCIL,A.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Gr,Xe=r.convert(A.type))),tn&&(St?t.texStorage2D(n.TEXTURE_2D,1,ke,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ke,oe.width,oe.height,0,ct,Xe,null));else if(A.isDataTexture)if(Ze.length>0&&Mt){St&&tn&&t.texStorage2D(n.TEXTURE_2D,rt,ke,Ze[0].width,Ze[0].height);for(let me=0,B=Ze.length;me<B;me++)Te=Ze[me],St?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Te.width,Te.height,ct,Xe,Te.data):t.texImage2D(n.TEXTURE_2D,me,ke,Te.width,Te.height,0,ct,Xe,Te.data);A.generateMipmaps=!1}else St?(tn&&t.texStorage2D(n.TEXTURE_2D,rt,ke,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ct,Xe,oe.data)):t.texImage2D(n.TEXTURE_2D,0,ke,oe.width,oe.height,0,ct,Xe,oe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){St&&tn&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,ke,Ze[0].width,Ze[0].height,oe.depth);for(let me=0,B=Ze.length;me<B;me++)Te=Ze[me],A.format!==xi?ct!==null?St?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,oe.depth,ct,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,ke,Te.width,Te.height,oe.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,oe.depth,ct,Xe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,ke,Te.width,Te.height,oe.depth,0,ct,Xe,Te.data)}else{St&&tn&&t.texStorage2D(n.TEXTURE_2D,rt,ke,Ze[0].width,Ze[0].height);for(let me=0,B=Ze.length;me<B;me++)Te=Ze[me],A.format!==xi?ct!==null?St?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Te.width,Te.height,ct,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,me,ke,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Te.width,Te.height,ct,Xe,Te.data):t.texImage2D(n.TEXTURE_2D,me,ke,Te.width,Te.height,0,ct,Xe,Te.data)}else if(A.isDataArrayTexture)St?(tn&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,ke,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ct,Xe,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,oe.width,oe.height,oe.depth,0,ct,Xe,oe.data);else if(A.isData3DTexture)St?(tn&&t.texStorage3D(n.TEXTURE_3D,rt,ke,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ct,Xe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ke,oe.width,oe.height,oe.depth,0,ct,Xe,oe.data);else if(A.isFramebufferTexture){if(tn)if(St)t.texStorage2D(n.TEXTURE_2D,rt,ke,oe.width,oe.height);else{let me=oe.width,B=oe.height;for(let be=0;be<rt;be++)t.texImage2D(n.TEXTURE_2D,be,ke,me,B,0,ct,Xe,null),me>>=1,B>>=1}}else if(Ze.length>0&&Mt){St&&tn&&t.texStorage2D(n.TEXTURE_2D,rt,ke,Ze[0].width,Ze[0].height);for(let me=0,B=Ze.length;me<B;me++)Te=Ze[me],St?t.texSubImage2D(n.TEXTURE_2D,me,0,0,ct,Xe,Te):t.texImage2D(n.TEXTURE_2D,me,ke,ct,Xe,Te);A.generateMipmaps=!1}else St?(tn&&t.texStorage2D(n.TEXTURE_2D,rt,ke,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,Xe,oe)):t.texImage2D(n.TEXTURE_2D,0,ke,ct,Xe,oe);x(A,Mt)&&v(de),Ie.__version=ue.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ae(P,A,j){if(A.image.length!==6)return;let de=W(P,A),ce=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+j);let ue=i.get(ce);if(ce.version!==ue.__version||de===!0){t.activeTexture(n.TEXTURE0+j);let Ie=bt.getPrimaries(bt.workingColorSpace),_e=A.colorSpace===_i?null:bt.getPrimaries(A.colorSpace),Ee=A.colorSpace===_i||Ie===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ze=A.isCompressedTexture||A.image[0].isCompressedTexture,tt=A.image[0]&&A.image[0].isDataTexture,oe=[];for(let me=0;me<6;me++)!ze&&!tt?oe[me]=y(A.image[me],!1,!0,s.maxCubemapSize):oe[me]=tt?A.image[me].image:A.image[me],oe[me]=et(A,oe[me]);let Mt=oe[0],ct=f(Mt)||o,Xe=r.convert(A.format,A.colorSpace),ke=r.convert(A.type),Te=M(A.internalFormat,Xe,ke,A.colorSpace),Ze=o&&A.isVideoTexture!==!0,St=ue.__version===void 0||de===!0,tn=E(A,Mt,ct);z(n.TEXTURE_CUBE_MAP,A,ct);let rt;if(ze){Ze&&St&&t.texStorage2D(n.TEXTURE_CUBE_MAP,tn,Te,Mt.width,Mt.height);for(let me=0;me<6;me++){rt=oe[me].mipmaps;for(let B=0;B<rt.length;B++){let be=rt[B];A.format!==xi?Xe!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,0,0,be.width,be.height,Xe,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,Te,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,0,0,be.width,be.height,Xe,ke,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B,Te,be.width,be.height,0,Xe,ke,be.data)}}}else{rt=A.mipmaps,Ze&&St&&(rt.length>0&&tn++,t.texStorage2D(n.TEXTURE_CUBE_MAP,tn,Te,oe[0].width,oe[0].height));for(let me=0;me<6;me++)if(tt){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,oe[me].width,oe[me].height,Xe,ke,oe[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Te,oe[me].width,oe[me].height,0,Xe,ke,oe[me].data);for(let B=0;B<rt.length;B++){let xe=rt[B].image[me].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,0,0,xe.width,xe.height,Xe,ke,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,Te,xe.width,xe.height,0,Xe,ke,xe.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Xe,ke,oe[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Te,Xe,ke,oe[me]);for(let B=0;B<rt.length;B++){let be=rt[B];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,0,0,Xe,ke,be.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,B+1,Te,Xe,ke,be.image[me])}}}x(A,ct)&&v(n.TEXTURE_CUBE_MAP),ue.__version=ce.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function $(P,A,j,de,ce,ue){let Ie=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Ee=M(j.internalFormat,Ie,_e,j.colorSpace);if(!i.get(A).__hasExternalTextures){let tt=Math.max(1,A.width>>ue),oe=Math.max(1,A.height>>ue);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ue,Ee,tt,oe,A.depth,0,Ie,_e,null):t.texImage2D(ce,ue,Ee,tt,oe,0,Ie,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Pe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ce,i.get(j).__webglTexture,0,Be(A)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,ce,i.get(j).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(P,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let de=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||Pe(A)){let ce=A.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Ms?de=n.DEPTH_COMPONENT32F:ce.type===tr&&(de=n.DEPTH_COMPONENT24));let ue=Be(A);Pe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,de,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,de,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,de,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){let de=Be(A);j&&Pe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,A.width,A.height):Pe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{let de=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ce=0;ce<de.length;ce++){let ue=de[ce],Ie=r.convert(ue.format,ue.colorSpace),_e=r.convert(ue.type),Ee=M(ue.internalFormat,Ie,_e,ue.colorSpace),ze=Be(A);j&&Pe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ee,A.width,A.height):Pe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,Ee,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let de=i.get(A.depthTexture).__webglTexture,ce=Be(A);if(A.depthTexture.format===Wr)Pe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(A.depthTexture.format===Za)Pe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function le(P){let A=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");pe(A.__webglFramebuffer,P)}else if(j){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=n.createRenderbuffer(),ie(A.__webglDepthbuffer[de],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),ie(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(P,A,j){let de=i.get(P);A!==void 0&&$(de.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&le(P)}function X(P){let A=P.texture,j=i.get(P),de=i.get(A);P.addEventListener("dispose",O),P.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=A.version,a.memory.textures++);let ce=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Ie=f(P)||o;if(ce){j.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)j.__webglFramebuffer[_e][Ee]=n.createFramebuffer()}else j.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let _e=0;_e<A.mipmaps.length;_e++)j.__webglFramebuffer[_e]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(ue)if(s.drawBuffers){let _e=P.texture;for(let Ee=0,ze=_e.length;Ee<ze;Ee++){let tt=i.get(_e[Ee]);tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Pe(P)===!1){let _e=ue?A:[A];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ee=0;Ee<_e.length;Ee++){let ze=_e[Ee];j.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Ee]);let tt=r.convert(ze.format,ze.colorSpace),oe=r.convert(ze.type),Mt=M(ze.internalFormat,tt,oe,ze.colorSpace,P.isXRRenderTarget===!0),ct=Be(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Mt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,j.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),z(n.TEXTURE_CUBE_MAP,A,Ie);for(let _e=0;_e<6;_e++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)$(j.__webglFramebuffer[_e][Ee],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else $(j.__webglFramebuffer[_e],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);x(A,Ie)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){let _e=P.texture;for(let Ee=0,ze=_e.length;Ee<ze;Ee++){let tt=_e[Ee],oe=i.get(tt);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),z(n.TEXTURE_2D,tt,Ie),$(j.__webglFramebuffer,P,tt,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),x(tt,Ie)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?_e=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,de.__webglTexture),z(_e,A,Ie),o&&A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)$(j.__webglFramebuffer[Ee],P,A,n.COLOR_ATTACHMENT0,_e,Ee);else $(j.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,_e,0);x(A,Ie)&&v(_e),t.unbindTexture()}P.depthBuffer&&le(P)}function Wt(P){let A=f(P)||o,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let de=0,ce=j.length;de<ce;de++){let ue=j[de];if(x(ue,A)){let Ie=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(ue).__webglTexture;t.bindTexture(Ie,_e),v(Ie),t.unbindTexture()}}}function Le(P){if(o&&P.samples>0&&Pe(P)===!1){let A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,de=P.height,ce=n.COLOR_BUFFER_BIT,ue=[],Ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(P),Ee=P.isWebGLMultipleRenderTargets===!0;if(Ee)for(let ze=0;ze<A.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ze=0;ze<A.length;ze++){ue.push(n.COLOR_ATTACHMENT0+ze),P.depthBuffer&&ue.push(Ie);let tt=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(tt===!1&&(P.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Ee&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ze]),tt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ie]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ie])),Ee){let oe=i.get(A[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,j,de,0,0,j,de,ce,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let ze=0;ze<A.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ze]);let tt=i.get(A[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,tt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Be(P){return Math.min(s.maxSamples,P.samples)}function Pe(P){let A=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qt(P){let A=a.render.frame;d.get(P)!==A&&(d.set(P,A),P.update())}function et(P,A){let j=P.colorSpace,de=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===bh||j!==yn&&j!==_i&&(bt.getTransfer(j)===Ft?o===!1?e.has("EXT_sRGB")===!0&&de===xi?(P.format=bh,P.minFilter=un,P.generateMipmaps=!1):A=Pc.sRGBToLinear(A):(de!==xi||ce!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),A}this.allocateTextureUnit=C,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=we,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Pe}function w1(n,e,t){let i=t.isWebGL2;function s(r,a=_i){let o,l=bt.getTransfer(a);if(r===rr)return n.UNSIGNED_BYTE;if(r===m0)return n.UNSIGNED_SHORT_4_4_4_4;if(r===g0)return n.UNSIGNED_SHORT_5_5_5_1;if(r===tx)return n.BYTE;if(r===nx)return n.SHORT;if(r===Jh)return n.UNSIGNED_SHORT;if(r===p0)return n.INT;if(r===tr)return n.UNSIGNED_INT;if(r===Ms)return n.FLOAT;if(r===Ho)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ix)return n.ALPHA;if(r===xi)return n.RGBA;if(r===sx)return n.LUMINANCE;if(r===rx)return n.LUMINANCE_ALPHA;if(r===Wr)return n.DEPTH_COMPONENT;if(r===Za)return n.DEPTH_STENCIL;if(r===bh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ax)return n.RED;if(r===y0)return n.RED_INTEGER;if(r===ox)return n.RG;if(r===v0)return n.RG_INTEGER;if(r===b0)return n.RGBA_INTEGER;if(r===ku||r===Ou||r===Uu||r===Fu)if(l===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ku)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ou)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ku)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ou)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Im||r===Nm||r===Dm||r===km)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Im)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===km)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===x0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Om||r===Um)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Om)return l===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Um)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fm||r===Bm||r===zm||r===Hm||r===Vm||r===Gm||r===Wm||r===qm||r===Xm||r===$m||r===Ym||r===jm||r===Zm||r===Km)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Fm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$m)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ym)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zm)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Km)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bu||r===Jm||r===Qm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Bu)return l===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lx||r===eg||r===tg||r===ng)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Bu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===eg)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tg)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ng)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Nh=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},In=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},S1={type:"move"},Bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let f=t.getJointPose(y,i),m=this._getHandJoint(c,y);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new In;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Dh=class extends or{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,g=null,y=t.getContextAttributes(),f=null,m=null,x=[],v=[],M=new je,E=null,T=new Yt;T.layers.enable(1),T.viewport=new Rt;let b=new Yt;b.layers.enable(2),b.viewport=new Rt;let O=[T,b],S=new Nh;S.layers.enable(1),S.layers.enable(2);let _=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=x[z];return W===void 0&&(W=new Bo,x[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=x[z];return W===void 0&&(W=new Bo,x[z]=W),W.getGripSpace()},this.getHand=function(z){let W=x[z];return W===void 0&&(W=new Bo,x[z]=W),W.getHandSpace()};function N(z){let W=v.indexOf(z.inputSource);if(W===-1)return;let ne=x[W];ne!==void 0&&(ne.update(z.inputSource,z.frame,c||a),ne.dispatchEvent({type:z.type,data:z.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",C);for(let z=0;z<x.length;z++){let W=v[z];W!==null&&(v[z]=null,x[z].disconnect(W))}_=null,I=null,e.setRenderTarget(f),p=null,h=null,u=null,s=null,m=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",C),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let W={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new Es(p.framebufferWidth,p.framebufferHeight,{format:xi,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let W=null,ne=null,ae=null;y.depth&&(ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=y.stencil?Za:Wr,ne=y.stencil?Gr:tr);let $={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer($),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new Es(h.textureWidth,h.textureHeight,{format:xi,type:rr,depthTexture:new Bc(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let ie=e.properties.get(m);ie.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(z){for(let W=0;W<z.removed.length;W++){let ne=z.removed[W],ae=v.indexOf(ne);ae>=0&&(v[ae]=null,x[ae].disconnect(ne))}for(let W=0;W<z.added.length;W++){let ne=z.added[W],ae=v.indexOf(ne);if(ae===-1){for(let ie=0;ie<x.length;ie++)if(ie>=v.length){v.push(ne),ae=ie;break}else if(v[ie]===null){v[ie]=ne,ae=ie;break}if(ae===-1)break}let $=x[ae];$&&$.connect(ne)}}let R=new D,F=new D;function V(z,W,ne){R.setFromMatrixPosition(W.matrixWorld),F.setFromMatrixPosition(ne.matrixWorld);let ae=R.distanceTo(F),$=W.projectionMatrix.elements,ie=ne.projectionMatrix.elements,pe=$[14]/($[10]-1),le=$[14]/($[10]+1),we=($[9]+1)/$[5],X=($[9]-1)/$[5],Wt=($[8]-1)/$[0],Le=(ie[8]+1)/ie[0],Be=pe*Wt,Pe=pe*Le,qt=ae/(-Wt+Le),et=qt*-Wt;W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(et),z.translateZ(qt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let P=pe+qt,A=le+qt,j=Be-et,de=Pe+(ae-et),ce=we*le/A*P,ue=X*le/A*P;z.projectionMatrix.makePerspective(j,de,ce,ue,P,A),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function q(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;S.near=b.near=T.near=z.near,S.far=b.far=T.far=z.far,(_!==S.near||I!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),_=S.near,I=S.far);let W=z.parent,ne=S.cameras;q(S,W);for(let ae=0;ae<ne.length;ae++)q(ne[ae],W);ne.length===2?V(S,T,b):S.projectionMatrix.copy(T.projectionMatrix),G(z,S,W)};function G(z,W,ne){ne===null?z.matrix.copy(W.matrixWorld):(z.matrix.copy(ne.matrixWorld),z.matrix.invert(),z.matrix.multiply(W.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ja*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let Q=null;function ee(z,W){if(d=W.getViewerPose(c||a),g=W,d!==null){let ne=d.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let ae=!1;ne.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let $=0;$<ne.length;$++){let ie=ne[$],pe=null;if(p!==null)pe=p.getViewport(ie);else{let we=u.getViewSubImage(h,ie);pe=we.viewport,$===0&&(e.setRenderTargetTextures(m,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(m))}let le=O[$];le===void 0&&(le=new Yt,le.layers.enable($),le.viewport=new Rt,O[$]=le),le.matrix.fromArray(ie.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ie.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(pe.x,pe.y,pe.width,pe.height),$===0&&(S.matrix.copy(le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(le)}}for(let ne=0;ne<x.length;ne++){let ae=v[ne],$=x[ne];ae!==null&&$!==void 0&&$.update(ae,W,c||a)}Q&&Q(z,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}let re=new T0;re.setAnimationLoop(ee),this.setAnimationLoop=function(z){Q=z},this.dispose=function(){}}};function M1(n,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,E0(n)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,x,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),u(f,m)):m.isMeshPhongMaterial?(r(f,m),d(f,m)):m.isMeshStandardMaterial?(r(f,m),h(f,m),m.isMeshPhysicalMaterial&&p(f,m,M)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),y(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,x,v):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Qn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Qn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let x=e.get(m).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,x,v){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*x,f.scale.value=v*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function d(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,x){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qn&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function y(f,m){let x=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function A1(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){let M=v.program;i.uniformBlockBinding(x,M)}function c(x,v){let M=s[x.id];M===void 0&&(g(x),M=d(x),s[x.id]=M,x.addEventListener("dispose",f));let E=v.program;i.updateUBOMapping(x,E);let T=e.render.frame;r[x.id]!==T&&(h(x),r[x.id]=T)}function d(x){let v=u();x.__bindingPointIndex=v;let M=n.createBuffer(),E=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let v=s[x.id],M=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,b=M.length;T<b;T++){let O=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,_=O.length;S<_;S++){let I=O[S];if(p(I,T,S,E)===!0){let N=I.__offset,U=Array.isArray(I.value)?I.value:[I.value],C=0;for(let R=0;R<U.length;R++){let F=U[R],V=y(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,N+C,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):(F.toArray(I.__data,C),C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,M,E){let T=x.value,b=v+"_"+M;if(E[b]===void 0)return typeof T=="number"||typeof T=="boolean"?E[b]=T:E[b]=T.clone(),!0;{let O=E[b];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return E[b]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(x){let v=x.uniforms,M=0,E=16;for(let b=0,O=v.length;b<O;b++){let S=Array.isArray(v[b])?v[b]:[v[b]];for(let _=0,I=S.length;_<I;_++){let N=S[_],U=Array.isArray(N.value)?N.value:[N.value];for(let C=0,R=U.length;C<R;C++){let F=U[C],V=y(F),q=M%E;q!==0&&E-q<V.boundary&&(M+=E-q),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=V.storage}}}let T=M%E;return T>0&&(M+=E-T),x.__size=M,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function f(x){let v=x.target;v.removeEventListener("dispose",f);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var jr=class{constructor(e={}){let{canvas:t=Dx(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let p=new Uint32Array(4),g=new Int32Array(4),y=null,f=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;let v=this,M=!1,E=0,T=0,b=null,O=-1,S=null,_=new Rt,I=new Rt,N=null,U=new De(0),C=0,R=t.width,F=t.height,V=1,q=null,G=null,Q=new Rt(0,0,R,F),ee=new Rt(0,0,R,F),re=!1,z=new Wo,W=!1,ne=!1,ae=null,$=new Re,ie=new je,pe=new D,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return b===null?V:1}let X=i;function Wt(L,H){for(let Z=0;Z<L.length;Z++){let K=L[Z],Y=t.getContext(K,H);if(Y!==null)return Y}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",be,!1),X===null){let H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),X=Wt(H,L),X===null)throw Wt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Le,Be,Pe,qt,et,P,A,j,de,ce,ue,Ie,_e,Ee,ze,tt,oe,Mt,ct,Xe,ke,Te,Ze,St;function tn(){Le=new WS(X),Be=new FS(X,Le,e),Le.init(Be),Te=new w1(X,Le,Be),Pe=new x1(X,Le,Be),qt=new $S(X),et=new l1,P=new _1(X,Le,Pe,et,Be,Te,qt),A=new zS(v),j=new GS(v),de=new t_(X,Be),Ze=new OS(X,Le,de,Be),ce=new qS(X,de,qt,Ze),ue=new KS(X,ce,de,qt),ct=new ZS(X,Be,P),tt=new BS(et),Ie=new o1(v,A,j,Le,Be,Ze,tt),_e=new M1(v,et),Ee=new d1,ze=new g1(Le,Be),Mt=new kS(v,A,j,Pe,ue,h,l),oe=new b1(v,ue,Be),St=new A1(X,qt,Be,Pe),Xe=new US(X,Le,qt,Be),ke=new XS(X,Le,qt,Be),qt.programs=Ie.programs,v.capabilities=Be,v.extensions=Le,v.properties=et,v.renderLists=Ee,v.shadowMap=oe,v.state=Pe,v.info=qt}tn();let rt=new Dh(v,X);this.xr=rt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let L=Le.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Le.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(R,F,!1))},this.getSize=function(L){return L.set(R,F)},this.setSize=function(L,H,Z=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=L,F=H,t.width=Math.floor(L*V),t.height=Math.floor(H*V),Z===!0&&(t.style.width=L+"px",t.style.height=H+"px"),this.setViewport(0,0,L,H)},this.getDrawingBufferSize=function(L){return L.set(R*V,F*V).floor()},this.setDrawingBufferSize=function(L,H,Z){R=L,F=H,V=Z,t.width=Math.floor(L*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,L,H)},this.getCurrentViewport=function(L){return L.copy(_)},this.getViewport=function(L){return L.copy(Q)},this.setViewport=function(L,H,Z,K){L.isVector4?Q.set(L.x,L.y,L.z,L.w):Q.set(L,H,Z,K),Pe.viewport(_.copy(Q).multiplyScalar(V).floor())},this.getScissor=function(L){return L.copy(ee)},this.setScissor=function(L,H,Z,K){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,H,Z,K),Pe.scissor(I.copy(ee).multiplyScalar(V).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(L){Pe.setScissorTest(re=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){G=L},this.getClearColor=function(L){return L.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(L=!0,H=!0,Z=!0){let K=0;if(L){let Y=!1;if(b!==null){let Se=b.texture.format;Y=Se===b0||Se===v0||Se===y0}if(Y){let Se=b.texture.type,Ne=Se===rr||Se===tr||Se===Jh||Se===Gr||Se===m0||Se===g0,Fe=Mt.getClearColor(),We=Mt.getClearAlpha(),nt=Fe.r,$e=Fe.g,Ye=Fe.b;Ne?(p[0]=nt,p[1]=$e,p[2]=Ye,p[3]=We,X.clearBufferuiv(X.COLOR,0,p)):(g[0]=nt,g[1]=$e,g[2]=Ye,g[3]=We,X.clearBufferiv(X.COLOR,0,g))}else K|=X.COLOR_BUFFER_BIT}H&&(K|=X.DEPTH_BUFFER_BIT),Z&&(K|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ee.dispose(),ze.dispose(),et.dispose(),A.dispose(),j.dispose(),ue.dispose(),Ze.dispose(),St.dispose(),Ie.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Bn),rt.removeEventListener("sessionend",Nt),ae&&(ae.dispose(),ae=null),zn.stop()};function me(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let L=qt.autoReset,H=oe.enabled,Z=oe.autoUpdate,K=oe.needsUpdate,Y=oe.type;tn(),qt.autoReset=L,oe.enabled=H,oe.autoUpdate=Z,oe.needsUpdate=K,oe.type=Y}function be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function xe(L){let H=L.target;H.removeEventListener("dispose",xe),Ve(H)}function Ve(L){Oe(L),et.remove(L)}function Oe(L){let H=et.get(L).programs;H!==void 0&&(H.forEach(function(Z){Ie.releaseProgram(Z)}),L.isShaderMaterial&&Ie.releaseShaderCache(L))}this.renderBufferDirect=function(L,H,Z,K,Y,Se){H===null&&(H=le);let Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=gb(L,H,Z,K,Y);Pe.setMaterial(K,Ne);let We=Z.index,nt=1;if(K.wireframe===!0){if(We=ce.getWireframeAttribute(Z),We===void 0)return;nt=2}let $e=Z.drawRange,Ye=Z.attributes.position,rn=$e.start*nt,ai=($e.start+$e.count)*nt;Se!==null&&(rn=Math.max(rn,Se.start*nt),ai=Math.min(ai,(Se.start+Se.count)*nt)),We!==null?(rn=Math.max(rn,0),ai=Math.min(ai,We.count)):Ye!=null&&(rn=Math.max(rn,0),ai=Math.min(ai,Ye.count));let wn=ai-rn;if(wn<0||wn===1/0)return;Ze.setup(Y,K,Fe,Z,We);let gs,Xt=Xe;if(We!==null&&(gs=de.get(We),Xt=ke,Xt.setIndex(gs)),Y.isMesh)K.wireframe===!0?(Pe.setLineWidth(K.wireframeLinewidth*we()),Xt.setMode(X.LINES)):Xt.setMode(X.TRIANGLES);else if(Y.isLine){let at=K.linewidth;at===void 0&&(at=1),Pe.setLineWidth(at*we()),Y.isLineSegments?Xt.setMode(X.LINES):Y.isLineLoop?Xt.setMode(X.LINE_LOOP):Xt.setMode(X.LINE_STRIP)}else Y.isPoints?Xt.setMode(X.POINTS):Y.isSprite&&Xt.setMode(X.TRIANGLES);if(Y.isBatchedMesh)Xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Xt.renderInstances(rn,wn,Y.count);else if(Z.isInstancedBufferGeometry){let at=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Pu=Math.min(Z.instanceCount,at);Xt.renderInstances(rn,wn,Pu)}else Xt.render(rn,wn)};function Pt(L,H,Z){L.transparent===!0&&L.side===Gn&&L.forceSinglePass===!1?(L.side=Qn,L.needsUpdate=!0,jl(L,H,Z),L.side=Ji,L.needsUpdate=!0,jl(L,H,Z),L.side=Gn):jl(L,H,Z)}this.compile=function(L,H,Z=null){Z===null&&(Z=L),f=ze.get(Z),f.init(),x.push(f),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),L!==Z&&L.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights(v._useLegacyLights);let K=new Set;return L.traverse(function(Y){let Se=Y.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){let Fe=Se[Ne];Pt(Fe,Z,Y),K.add(Fe)}else Pt(Se,Z,Y),K.add(Se)}),x.pop(),f=null,K},this.compileAsync=function(L,H,Z=null){let K=this.compile(L,H,Z);return new Promise(Y=>{function Se(){if(K.forEach(function(Ne){et.get(Ne).currentProgram.isReady()&&K.delete(Ne)}),K.size===0){Y(L);return}setTimeout(Se,10)}Le.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let It=null;function _n(L){It&&It(L)}function Bn(){zn.stop()}function Nt(){zn.start()}let zn=new T0;zn.setAnimationLoop(_n),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(L){It=L,rt.setAnimationLoop(L),L===null?zn.stop():zn.start()},rt.addEventListener("sessionstart",Bn),rt.addEventListener("sessionend",Nt),this.render=function(L,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(H),H=rt.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,H,b),f=ze.get(L,x.length),f.init(),x.push(f),$.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),z.setFromProjectionMatrix($),ne=this.localClippingEnabled,W=tt.init(this.clippingPlanes,ne),y=Ee.get(L,m.length),y.init(),m.push(y),ji(L,H,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(q,G),this.info.render.frame++,W===!0&&tt.beginShadows();let Z=f.state.shadowsArray;if(oe.render(Z,L,H),W===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(y,L),f.setupLights(v._useLegacyLights),H.isArrayCamera){let K=H.cameras;for(let Y=0,Se=K.length;Y<Se;Y++){let Ne=K[Y];bm(y,L,Ne,Ne.viewport)}}else bm(y,L,H);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),L.isScene===!0&&L.onAfterRender(v,L,H),Ze.resetDefaultState(),O=-1,S=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function ji(L,H,Z,K){if(L.visible===!1)return;if(L.layers.test(H.layers)){if(L.isGroup)Z=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(H);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||z.intersectsSprite(L)){K&&pe.setFromMatrixPosition(L.matrixWorld).applyMatrix4($);let Ne=ue.update(L),Fe=L.material;Fe.visible&&y.push(L,Ne,Fe,Z,pe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||z.intersectsObject(L))){let Ne=ue.update(L),Fe=L.material;if(K&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),pe.copy(L.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),pe.copy(Ne.boundingSphere.center)),pe.applyMatrix4(L.matrixWorld).applyMatrix4($)),Array.isArray(Fe)){let We=Ne.groups;for(let nt=0,$e=We.length;nt<$e;nt++){let Ye=We[nt],rn=Fe[Ye.materialIndex];rn&&rn.visible&&y.push(L,Ne,rn,Z,pe.z,Ye)}}else Fe.visible&&y.push(L,Ne,Fe,Z,pe.z,null)}}let Se=L.children;for(let Ne=0,Fe=Se.length;Ne<Fe;Ne++)ji(Se[Ne],H,Z,K)}function bm(L,H,Z,K){let Y=L.opaque,Se=L.transmissive,Ne=L.transparent;f.setupLightsView(Z),W===!0&&tt.setGlobalState(v.clippingPlanes,Z),Se.length>0&&mb(Y,Se,H,Z),K&&Pe.viewport(_.copy(K)),Y.length>0&&Yl(Y,H,Z),Se.length>0&&Yl(Se,H,Z),Ne.length>0&&Yl(Ne,H,Z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function mb(L,H,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let Se=Be.isWebGL2;ae===null&&(ae=new Es(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Ho:rr,minFilter:ar,samples:Se?4:0})),v.getDrawingBufferSize(ie),Se?ae.setSize(ie.x,ie.y):ae.setSize(Lc(ie.x),Lc(ie.y));let Ne=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(U),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();let Fe=v.toneMapping;v.toneMapping=sr,Yl(L,Z,K),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae);let We=!1;for(let nt=0,$e=H.length;nt<$e;nt++){let Ye=H[nt],rn=Ye.object,ai=Ye.geometry,wn=Ye.material,gs=Ye.group;if(wn.side===Gn&&rn.layers.test(K.layers)){let Xt=wn.side;wn.side=Qn,wn.needsUpdate=!0,xm(rn,Z,K,ai,wn,gs),wn.side=Xt,wn.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae)),v.setRenderTarget(Ne),v.setClearColor(U,C),v.toneMapping=Fe}function Yl(L,H,Z){let K=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Se=L.length;Y<Se;Y++){let Ne=L[Y],Fe=Ne.object,We=Ne.geometry,nt=K===null?Ne.material:K,$e=Ne.group;Fe.layers.test(Z.layers)&&xm(Fe,H,Z,We,nt,$e)}}function xm(L,H,Z,K,Y,Se){L.onBeforeRender(v,H,Z,K,Y,Se),L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Y.onBeforeRender(v,H,Z,K,L,Se),Y.transparent===!0&&Y.side===Gn&&Y.forceSinglePass===!1?(Y.side=Qn,Y.needsUpdate=!0,v.renderBufferDirect(Z,H,K,Y,L,Se),Y.side=Ji,Y.needsUpdate=!0,v.renderBufferDirect(Z,H,K,Y,L,Se),Y.side=Gn):v.renderBufferDirect(Z,H,K,Y,L,Se),L.onAfterRender(v,H,Z,K,Y,Se)}function jl(L,H,Z){H.isScene!==!0&&(H=le);let K=et.get(L),Y=f.state.lights,Se=f.state.shadowsArray,Ne=Y.state.version,Fe=Ie.getParameters(L,Y.state,Se,H,Z),We=Ie.getProgramCacheKey(Fe),nt=K.programs;K.environment=L.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(L.isMeshStandardMaterial?j:A).get(L.envMap||K.environment),nt===void 0&&(L.addEventListener("dispose",xe),nt=new Map,K.programs=nt);let $e=nt.get(We);if($e!==void 0){if(K.currentProgram===$e&&K.lightsStateVersion===Ne)return wm(L,Fe),$e}else Fe.uniforms=Ie.getUniforms(L),L.onBuild(Z,Fe,v),L.onBeforeCompile(Fe,v),$e=Ie.acquireProgram(Fe,We),nt.set(We,$e),K.uniforms=Fe.uniforms;let Ye=K.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ye.clippingPlanes=tt.uniform),wm(L,Fe),K.needsLights=vb(L),K.lightsStateVersion=Ne,K.needsLights&&(Ye.ambientLightColor.value=Y.state.ambient,Ye.lightProbe.value=Y.state.probe,Ye.directionalLights.value=Y.state.directional,Ye.directionalLightShadows.value=Y.state.directionalShadow,Ye.spotLights.value=Y.state.spot,Ye.spotLightShadows.value=Y.state.spotShadow,Ye.rectAreaLights.value=Y.state.rectArea,Ye.ltc_1.value=Y.state.rectAreaLTC1,Ye.ltc_2.value=Y.state.rectAreaLTC2,Ye.pointLights.value=Y.state.point,Ye.pointLightShadows.value=Y.state.pointShadow,Ye.hemisphereLights.value=Y.state.hemi,Ye.directionalShadowMap.value=Y.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ye.spotShadowMap.value=Y.state.spotShadowMap,Ye.spotLightMatrix.value=Y.state.spotLightMatrix,Ye.spotLightMap.value=Y.state.spotLightMap,Ye.pointShadowMap.value=Y.state.pointShadowMap,Ye.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=$e,K.uniformsList=null,$e}function _m(L){if(L.uniformsList===null){let H=L.currentProgram.getUniforms();L.uniformsList=$a.seqWithValue(H.seq,L.uniforms)}return L.uniformsList}function wm(L,H){let Z=et.get(L);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function gb(L,H,Z,K,Y){H.isScene!==!0&&(H=le),P.resetTextureUnits();let Se=H.fog,Ne=K.isMeshStandardMaterial?H.environment:null,Fe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yn,We=(K.isMeshStandardMaterial?j:A).get(K.envMap||Ne),nt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ye=!!Z.morphAttributes.position,rn=!!Z.morphAttributes.normal,ai=!!Z.morphAttributes.color,wn=sr;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wn=v.toneMapping);let gs=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Xt=gs!==void 0?gs.length:0,at=et.get(K),Pu=f.state.lights;if(W===!0&&(ne===!0||L!==S)){let vi=L===S&&K.id===O;tt.setState(K,L,vi)}let nn=!1;K.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Pu.state.version||at.outputColorSpace!==Fe||Y.isBatchedMesh&&at.batching===!1||!Y.isBatchedMesh&&at.batching===!0||Y.isInstancedMesh&&at.instancing===!1||!Y.isInstancedMesh&&at.instancing===!0||Y.isSkinnedMesh&&at.skinning===!1||!Y.isSkinnedMesh&&at.skinning===!0||Y.isInstancedMesh&&at.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&at.instancingColor===!1&&Y.instanceColor!==null||at.envMap!==We||K.fog===!0&&at.fog!==Se||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==tt.numPlanes||at.numIntersection!==tt.numIntersection)||at.vertexAlphas!==nt||at.vertexTangents!==$e||at.morphTargets!==Ye||at.morphNormals!==rn||at.morphColors!==ai||at.toneMapping!==wn||Be.isWebGL2===!0&&at.morphTargetsCount!==Xt)&&(nn=!0):(nn=!0,at.__version=K.version);let Dr=at.currentProgram;nn===!0&&(Dr=jl(K,H,Y));let Sm=!1,To=!1,Iu=!1,Rn=Dr.getUniforms(),kr=at.uniforms;if(Pe.useProgram(Dr.program)&&(Sm=!0,To=!0,Iu=!0),K.id!==O&&(O=K.id,To=!0),Sm||S!==L){Rn.setValue(X,"projectionMatrix",L.projectionMatrix),Rn.setValue(X,"viewMatrix",L.matrixWorldInverse);let vi=Rn.map.cameraPosition;vi!==void 0&&vi.setValue(X,pe.setFromMatrixPosition(L.matrixWorld)),Be.logarithmicDepthBuffer&&Rn.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Rn.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,To=!0,Iu=!0)}if(Y.isSkinnedMesh){Rn.setOptional(X,Y,"bindMatrix"),Rn.setOptional(X,Y,"bindMatrixInverse");let vi=Y.skeleton;vi&&(Be.floatVertexTextures?(vi.boneTexture===null&&vi.computeBoneTexture(),Rn.setValue(X,"boneTexture",vi.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Rn.setOptional(X,Y,"batchingTexture"),Rn.setValue(X,"batchingTexture",Y._matricesTexture,P));let Nu=Z.morphAttributes;if((Nu.position!==void 0||Nu.normal!==void 0||Nu.color!==void 0&&Be.isWebGL2===!0)&&ct.update(Y,Z,Dr),(To||at.receiveShadow!==Y.receiveShadow)&&(at.receiveShadow=Y.receiveShadow,Rn.setValue(X,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(kr.envMap.value=We,kr.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),To&&(Rn.setValue(X,"toneMappingExposure",v.toneMappingExposure),at.needsLights&&yb(kr,Iu),Se&&K.fog===!0&&_e.refreshFogUniforms(kr,Se),_e.refreshMaterialUniforms(kr,K,V,F,ae),$a.upload(X,_m(at),kr,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&($a.upload(X,_m(at),kr,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Rn.setValue(X,"center",Y.center),Rn.setValue(X,"modelViewMatrix",Y.modelViewMatrix),Rn.setValue(X,"normalMatrix",Y.normalMatrix),Rn.setValue(X,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let vi=K.uniformsGroups;for(let Du=0,bb=vi.length;Du<bb;Du++)if(Be.isWebGL2){let Mm=vi[Du];St.update(Mm,Dr),St.bind(Mm,Dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dr}function yb(L,H){L.ambientLightColor.needsUpdate=H,L.lightProbe.needsUpdate=H,L.directionalLights.needsUpdate=H,L.directionalLightShadows.needsUpdate=H,L.pointLights.needsUpdate=H,L.pointLightShadows.needsUpdate=H,L.spotLights.needsUpdate=H,L.spotLightShadows.needsUpdate=H,L.rectAreaLights.needsUpdate=H,L.hemisphereLights.needsUpdate=H}function vb(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(L,H,Z){et.get(L.texture).__webglTexture=H,et.get(L.depthTexture).__webglTexture=Z;let K=et.get(L);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,H){let Z=et.get(L);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(L,H=0,Z=0){b=L,E=H,T=Z;let K=!0,Y=null,Se=!1,Ne=!1;if(L){let We=et.get(L);We.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(X.FRAMEBUFFER,null),K=!1):We.__webglFramebuffer===void 0?P.setupRenderTarget(L):We.__hasExternalTextures&&P.rebindTextures(L,et.get(L.texture).__webglTexture,et.get(L.depthTexture).__webglTexture);let nt=L.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ne=!0);let $e=et.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray($e[H])?Y=$e[H][Z]:Y=$e[H],Se=!0):Be.isWebGL2&&L.samples>0&&P.useMultisampledRTT(L)===!1?Y=et.get(L).__webglMultisampledFramebuffer:Array.isArray($e)?Y=$e[Z]:Y=$e,_.copy(L.viewport),I.copy(L.scissor),N=L.scissorTest}else _.copy(Q).multiplyScalar(V).floor(),I.copy(ee).multiplyScalar(V).floor(),N=re;if(Pe.bindFramebuffer(X.FRAMEBUFFER,Y)&&Be.drawBuffers&&K&&Pe.drawBuffers(L,Y),Pe.viewport(_),Pe.scissor(I),Pe.setScissorTest(N),Se){let We=et.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,We.__webglTexture,Z)}else if(Ne){let We=et.get(L.texture),nt=H||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,We.__webglTexture,Z||0,nt)}O=-1},this.readRenderTargetPixels=function(L,H,Z,K,Y,Se,Ne){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=et.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){Pe.bindFramebuffer(X.FRAMEBUFFER,Fe);try{let We=L.texture,nt=We.format,$e=We.type;if(nt!==xi&&Te.convert(nt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ye=$e===Ho&&(Le.has("EXT_color_buffer_half_float")||Be.isWebGL2&&Le.has("EXT_color_buffer_float"));if($e!==rr&&Te.convert($e)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Ms&&(Be.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=L.width-K&&Z>=0&&Z<=L.height-Y&&X.readPixels(H,Z,K,Y,Te.convert(nt),Te.convert($e),Se)}finally{let We=b!==null?et.get(b).__webglFramebuffer:null;Pe.bindFramebuffer(X.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(L,H,Z=0){let K=Math.pow(2,-Z),Y=Math.floor(H.image.width*K),Se=Math.floor(H.image.height*K);P.setTexture2D(H,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,L.x,L.y,Y,Se),Pe.unbindTexture()},this.copyTextureToTexture=function(L,H,Z,K=0){let Y=H.image.width,Se=H.image.height,Ne=Te.convert(Z.format),Fe=Te.convert(Z.type);P.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment),H.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,K,L.x,L.y,Y,Se,Ne,Fe,H.image.data):H.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,K,L.x,L.y,H.mipmaps[0].width,H.mipmaps[0].height,Ne,H.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,K,L.x,L.y,Ne,Fe,H.image),K===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(L,H,Z,K,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=L.max.x-L.min.x+1,Ne=L.max.y-L.min.y+1,Fe=L.max.z-L.min.z+1,We=Te.convert(K.format),nt=Te.convert(K.type),$e;if(K.isData3DTexture)P.setTexture3D(K,0),$e=X.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)P.setTexture2DArray(K,0),$e=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);let Ye=X.getParameter(X.UNPACK_ROW_LENGTH),rn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),ai=X.getParameter(X.UNPACK_SKIP_PIXELS),wn=X.getParameter(X.UNPACK_SKIP_ROWS),gs=X.getParameter(X.UNPACK_SKIP_IMAGES),Xt=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Xt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Xt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,L.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,L.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,L.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D($e,Y,H.x,H.y,H.z,Se,Ne,Fe,We,nt,Xt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D($e,Y,H.x,H.y,H.z,Se,Ne,Fe,We,Xt.data)):X.texSubImage3D($e,Y,H.x,H.y,H.z,Se,Ne,Fe,We,nt,Xt),X.pixelStorei(X.UNPACK_ROW_LENGTH,Ye),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,rn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ai),X.pixelStorei(X.UNPACK_SKIP_ROWS,wn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,gs),Y===0&&K.generateMipmaps&&X.generateMipmap($e),Pe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?P.setTextureCube(L,0):L.isData3DTexture?P.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?P.setTexture2DArray(L,0):P.setTexture2D(L,0),Pe.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,Pe.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ef?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===id?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$t?qr:w0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qr?$t:yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},kh=class extends jr{};kh.prototype.isWebGL1Renderer=!0;var zc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var to=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Hn=new D,Xo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Xg=new D,$g=new Rt,Yg=new Rt,E1=new D,jg=new Re,vc=new D,ch=new ui,Zg=new Re,dh=new Yr,Hc=class extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pm,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,vc),this.boundingBox.expandByPoint(vc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,vc),this.boundingSphere.expandByPoint(vc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ch.copy(this.boundingSphere),ch.applyMatrix4(s),e.ray.intersectsSphere(ch)!==!1&&(Zg.copy(s).invert(),dh.copy(e.ray).applyMatrix4(Zg),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ex?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;$g.fromBufferAttribute(s.attributes.skinIndex,e),Yg.fromBufferAttribute(s.attributes.skinWeight,e),Xg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Yg.getComponent(r);if(a!==0){let o=$g.getComponent(r);jg.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(E1.copy(Xg).applyMatrix4(jg),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},$o=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Oh=class extends En{constructor(e=null,t=1,i=1,s,r,a,o,l,c=gn,d=gn,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kg=new Re,T1=new Re,Vc=class n{constructor(e=[],t=[]){this.uuid=Ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Re;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:T1;Kg.multiplyMatrices(o,t[r]),Kg.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Oh(t,e,e,xi,Ms);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new $o),this.bones.push(a),this.boneInverses.push(new Re().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Zr=class extends kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ha=new Re,Jg=new Re,bc=[],Qg=new wi,R1=new Re,Io=new Et,No=new ui,Gc=class extends Et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,R1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ha),Qg.copy(e.boundingBox).applyMatrix4(Ha),this.boundingBox.union(Qg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ha),No.copy(e.boundingSphere).applyMatrix4(Ha),this.boundingSphere.union(No)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(i),e.ray.intersectsSphere(No)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ha),Jg.multiplyMatrices(i,Ha),Io.matrixWorld=Jg,Io.raycast(e,bc);for(let a=0,o=bc.length;a<o;a++){let l=bc[a];l.instanceId=r,l.object=this,t.push(l)}bc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Yo=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},e0=new D,t0=new D,n0=new Re,uh=new Yr,xc=new ui,no=class extends Bt{constructor(e=new qn,t=new Yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)e0.fromBufferAttribute(t,s-1),t0.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=e0.distanceTo(t0);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(s),xc.radius+=r,e.ray.intersectsSphere(xc)===!1)return;n0.copy(s).invert(),uh.copy(e.ray).applyMatrix4(n0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,d=new D,u=new D,h=new D,p=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){let m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=m,M=x-1;v<M;v+=p){let E=g.getX(v),T=g.getX(v+1);if(c.fromBufferAttribute(f,E),d.fromBufferAttribute(f,T),uh.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);let O=e.ray.origin.distanceTo(h);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let v=m,M=x-1;v<M;v+=p){if(c.fromBufferAttribute(f,v),d.fromBufferAttribute(f,v+1),uh.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},i0=new D,s0=new D,Wc=class extends no{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)i0.fromBufferAttribute(t,s),s0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+i0.distanceTo(s0);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},qc=class extends no{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jo=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},r0=new Re,Uh=new Yr,_c=new ui,wc=new D,Xc=class extends Bt{constructor(e=new qn,t=new jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(s),_c.radius+=r,e.ray.intersectsSphere(_c)===!1)return;r0.copy(s).invert(),Uh.copy(e.ray).applyMatrix4(r0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,y=p;g<y;g++){let f=c.getX(g);wc.fromBufferAttribute(u,f),a0(wc,f,l,s,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=h,y=p;g<y;g++)wc.fromBufferAttribute(u,g),a0(wc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function a0(n,e,t,i,s,r,a){let o=Uh.distanceSqToPoint(n);if(o<t){let l=new D;Uh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var $c=class extends En{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yc=class n extends qn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],h=[],p=[],g=0,y=[],f=i/2,m=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Wn(u,3)),this.setAttribute("normal",new Wn(h,3)),this.setAttribute("uv",new Wn(p,2));function x(){let M=new D,E=new D,T=0,b=(t-e)/i;for(let O=0;O<=r;O++){let S=[],_=O/r,I=_*(t-e)+e;for(let N=0;N<=s;N++){let U=N/s,C=U*l+o,R=Math.sin(C),F=Math.cos(C);E.x=I*R,E.y=-_*i+f,E.z=I*F,u.push(E.x,E.y,E.z),M.set(R,b,F).normalize(),h.push(M.x,M.y,M.z),p.push(U,1-_),S.push(g++)}y.push(S)}for(let O=0;O<s;O++)for(let S=0;S<r;S++){let _=y[S][O],I=y[S+1][O],N=y[S+1][O+1],U=y[S][O+1];d.push(_,I,U),d.push(I,N,U),T+=6}c.addGroup(m,T,0),m+=T}function v(M){let E=g,T=new je,b=new D,O=0,S=M===!0?e:t,_=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,f*_,0),h.push(0,_,0),p.push(.5,.5),g++;let I=g;for(let N=0;N<=s;N++){let C=N/s*l+o,R=Math.cos(C),F=Math.sin(C);b.x=S*F,b.y=f*_,b.z=S*R,u.push(b.x,b.y,b.z),h.push(0,_,0),T.x=R*.5+.5,T.y=F*.5*_+.5,p.push(T.x,T.y),g++}for(let N=0;N<s;N++){let U=E+N,C=I+N;M===!0?d.push(C,C+1,U):d.push(C+1,C,U),O+=3}c.addGroup(m,O,M===!0?1:2),m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var io=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Si=class extends io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var so=class extends ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Sc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function C1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function L1(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function o0(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function N0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var cr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fh=class extends cr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ig,endingEnd:ig}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sg:r=e,o=2*t-i;break;case rg:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sg:a=e,l=2*i-t;break;case rg:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),y=g*g,f=y*g,m=-h*f+2*h*y-h*g,x=(1+h)*f+(-1.5-2*h)*y+(-.5+h)*g+1,v=(-1-p)*f+(1.5+p)*y+.5*g,M=p*f-p*y;for(let E=0;E!==o;++E)r[E]=m*a[d+E]+x*a[c+E]+v*a[l+E]+M*a[u+E];return r}},Bh=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(i-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}},zh=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sc(t,this.TimeBufferType),this.values=Sc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sc(e.times,Array),values:Sc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new zh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ka:t=this.InterpolantFactoryMethodDiscrete;break;case $r:t=this.InterpolantFactoryMethodLinear;break;case zu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return $r;case this.InterpolantFactoryMethodSmooth:return zu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&C1(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zu,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,h=u-i,p=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[h+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=$r;var dr=class extends Mi{};dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Ka;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Mi{};jc.prototype.ValueTypeName="color";var Rs=class extends Mi{};Rs.prototype.ValueTypeName="number";var Hh=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)it.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qi=class extends Mi{InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}};Qi.prototype.ValueTypeName="quaternion";Qi.prototype.DefaultInterpolation=$r;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends Mi{};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Ka;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Mi{};Cs.prototype.ValueTypeName="vector";var Zc=class{constructor(e,t=-1,i,s=cx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ui(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(I1(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(Mi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let d=L1(l);l=o0(l,1,d),c=o0(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],d=c.name.match(r);if(d&&d.length>1){let u=d[1],h=s[u];h||(s[u]=h=[]),h.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,h,p,g,y){if(p.length!==0){let f=[],m=[];N0(p,f,m,g),f.length!==0&&y.push(new u(h,f,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let p={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)p[h[g].morphTargets[y]]=-1;for(let y in p){let f=[],m=[];for(let x=0;x!==h[g].morphTargets.length;++x){let v=h[g];f.push(v.time),m.push(v.morphTarget===y?1:0)}s.push(new Rs(".morphTargetInfluence["+y+"]",f,m))}l=p.length*a}else{let p=".bones["+t[u].name+"]";i(Cs,p+".position",h,"pos",s),i(Qi,p+".quaternion",h,"rot",s),i(Cs,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function P1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return jc;case"quaternion":return Qi;case"bool":case"boolean":return dr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function I1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=P1(n.type);if(n.times===void 0){let t=[],i=[];N0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var nr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Vh=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}},N1=new Vh,Ls=class{constructor(e){this.manager=e!==void 0?e:N1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ls.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws={},Gh=class extends Error{constructor(e,t){super(e),this.response=t}},Zo=class extends Ls{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=nr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ws[e]!==void 0){ws[e].push({onLoad:t,onProgress:i,onError:s});return}ws[e]=[],ws[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=ws[e],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0,y=0,f=new ReadableStream({start(m){x();function x(){u.read().then(({done:v,value:M})=>{if(v)m.close();else{y+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let T=0,b=d.length;T<b;T++){let O=d[T];O.onProgress&&O.onProgress(E)}m.enqueue(M),x()}})}}});return new Response(f)}else throw new Gh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{nr.add(e,c);let d=ws[e];delete ws[e];for(let u=0,h=d.length;u<h;u++){let p=d[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let d=ws[e];if(d===void 0)throw this.manager.itemError(e),c;delete ws[e];for(let u=0,h=d.length;u<h;u++){let p=d[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Wh=class extends Ls{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=nr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Vo("img");function l(){d(),nr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ro=class extends Ls{constructor(e){super(e)}load(e,t,i,s){let r=new En,a=new Wh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ao=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Kc=class extends ao{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hh=new Re,l0=new D,c0=new D,Ko=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),t.position.copy(l0),c0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c0),t.updateMatrixWorld(),hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qh=class extends Ko{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Ja*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Jc=class extends ao{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},d0=new Re,Do=new D,fh=new D,Xh=class extends Ko{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Do.setFromMatrixPosition(e.matrixWorld),i.position.copy(Do),fh.copy(i.position),fh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fh),i.updateMatrixWorld(),s.makeTranslation(-Do.x,-Do.y,-Do.z),d0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(d0)}},Qc=class extends ao{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$h=class extends Ko{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var hr=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ed=class extends Ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=nr.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return nr.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),nr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});nr.add(e,l),r.manager.itemStart(e)}};var sf="\\[\\]\\.:\\/",D1=new RegExp("["+sf+"]","g"),rf="[^"+sf+"]",k1="[^"+sf.replace("\\.","")+"]",O1=/((?:WC+[\/:])*)/.source.replace("WC",rf),U1=/(WCOD+)?/.source.replace("WCOD",k1),F1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rf),B1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rf),z1=new RegExp("^"+O1+U1+F1+B1+"$"),H1=["material","materials","bones","map"],Yh=class{constructor(e,t,i){let s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(D1,"")}static parseTrackName(e){let t=z1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);H1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Yh;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sR=new Float32Array(1);var Jo=class{constructor(e,t,i=0,s=1/0){this.ray=new Yr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return jh(e,this,i,t),i.sort(u0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)jh(e[s],this,i,t);return i.sort(u0),i}};function u0(n,e){return n.distance-e.distance}function jh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)jh(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ti=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function D0(n){if(n.comfortVersion===ti.version)return n;let e={...n,comfortVersion:ti.version,winDist:ti.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=ti.windowScale),e}function V1(n,e){return n>0&&e>0?n/e:16/9}function nl(n,e,t){let i=V1(n,e),s=t>0?t:i,r,a;s>=i?(r=n,a=n/s):(a=e,r=e*s);let o=Math.round((n-r)/2),l=Math.round((e-a)/2),c=Math.round(r),d=Math.round(a);return{x:o,y:l,w:c,h:d,u0:o/n,v0:l/e,uw:c/n,vh:d/e}}function af(n,e,t,i,s){let r=nl(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var es=4096,Dn={width:1200,height:800},fr=160;function G1(n,e=es){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let a=Math.ceil(t)+fr*2,o=Math.ceil(i)+fr*2,l=s==="window"?r%3*1360:s==="slot"?1360:0,c=s==="dock"?800:s==="keyboard"?3160:s==="slot"?0:1200+Math.floor(r/3)*980,d=s==="dock"?400:s==="keyboard"?936:980;if(r>5||a>(s==="window"||s==="slot"?1360:e)||o>d||l+a>e||c+o>e)throw new Error("Workspace texture is full; close a window first.");return[l,c,a,o]})}var rd=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var u,h,p;if(window.__gorillaStereoOverlay){let g=2*Math.tan(el.degToRad(36)),f=[{overlay:!0,matrix:new Re().makeTranslation(0,0,-1).multiply(new Re().makeScale(g*1.78,g*1.48,1)).toArray(),rect:[0,0,Dn.width/2,Dn.height],uvR:[Dn.width/2/es,1-Dn.height/es,Dn.width/2/es,Dn.height/es]}],m=JSON.stringify(f),x="[]";(m!==this.sent||x!==this.sentSpecs)&&(this.sent=m,this.sentSpecs=x,(h=(u=window.NativeXR)==null?void 0:u.frame)==null||h.call(u,m,x));return}e.updateMatrixWorld(!0);let t=[];e.traverse(g=>{g.isCSS3DObject&&g.visible&&t.push(g)});for(let g of t)g.element.parentNode!==this.domElement&&this.domElement.append(g.element),g.element.style.transform!=="none"&&(g.element.style.transform="none");for(let g of this.slots.keys())t.some(y=>y.id===g)||this.slots.delete(g);let i=t.map(g=>{let y=g.element.classList.contains("dock")?"dock":g.element.classList.contains("kb")?"keyboard":g.element.classList.contains("win-drop-slot")?"slot":"window";if(y==="window"&&!this.slots.has(g.id)){let x=new Set(this.slots.values()),v=0;for(;x.has(v);)v++;this.slots.set(g.id,v)}let f=y==="window"||y==="slot"?1040:es-fr*2,m=(y==="dock"?400:y==="keyboard"?936:980)-fr*2;return{width:Math.min(g.element.offsetWidth,f),height:Math.min(g.element.offsetHeight,m),kind:y,slot:this.slots.get(g.id)||0}}),s;try{s=G1(i)}catch(g){this.lastError!==g.message&&(this.lastError=g.message,(p=window.nextvrMessage)==null||p.call(window,g.message));return}let r=[],a=[];t.forEach((g,y)=>{let f=g.element,[m,x,v,M]=s[y],E=`${m+fr}px`,T=`${x+fr}px`;f.style.left!==E&&(f.style.left=E),f.style.top!==T&&(f.style.top=T);let b=g.matrixWorld.clone().multiply(new Re().makeScale(v,M,1)),O=+(f.dataset.curve||0);r.push({id:f.dataset.windowId||(i[y].kind==="dock"?"dock":i[y].kind),matrix:b.toArray(),rect:s[y],curve:O,glass:[fr/v,fr/M,i[y].width/v,i[y].height/M]});let S=f.getBoundingClientRect();for(let _ of f.querySelectorAll("[data-native-app]")){let I=_.getBoundingClientRect();if(!I.width||!I.height)continue;let N=+(_.dataset.aspect||0),U=nl(I.width,I.height,N),C=g.matrixWorld.clone().multiply(new Re().makeTranslation(I.left-S.left+U.x+U.w/2-i[y].width/2,i[y].height/2-(I.top-S.top+U.y+U.h/2),.5)).multiply(new Re().makeScale(U.w,U.h,1));r.push({browser:"app:"+_.dataset.nativeApp,matrix:C.toArray(),rect:[0,0,Math.round(I.width),Math.round(I.height)],curve:+(f.dataset.curve||0),uv:[U.u0,U.v0,U.uw,U.vh]});let R=[U.u0,U.v0,U.uw,U.vh].map(F=>F.toFixed(5)).join(",");_.dataset.uv!==R&&(_.dataset.uv=R,this.last=0)}for(let _ of f.querySelectorAll("[data-native-xr]")){let I=_.getBoundingClientRect();if(!I.width||!I.height)continue;let N="xr:"+_.dataset.nativeXr,U=+(_.dataset.aspect||0),C=nl(I.width,I.height,U),R=g.matrixWorld.clone().multiply(new Re().makeTranslation(I.left-S.left+C.x+C.w/2-i[y].width/2,i[y].height/2-(I.top-S.top+C.y+C.h/2),.5)).multiply(new Re().makeScale(C.w,C.h,1));r.push({browser:N,matrix:R.toArray(),rect:[0,0,Math.round(I.width),Math.round(I.height)],curve:+(f.dataset.curve||0),uv:[C.u0,C.v0,C.uw/2,C.vh],uvR:[C.u0+C.uw/2,C.v0,C.uw/2,C.vh]})}for(let _ of f.querySelectorAll("[data-native-browser]")){let I=_.getBoundingClientRect();if(!I.width||!I.height)continue;let N=_.dataset.nativeBrowser,U=_.dataset.url;if(!U)continue;let C=Math.round(I.width),R=Math.round(I.height),F={left:I.left,top:I.top,right:I.right,bottom:I.bottom};for(let Q=_.parentElement;Q&&Q!==f;Q=Q.parentElement){let ee=getComputedStyle(Q);if(/(auto|scroll|hidden)/.test(ee.overflow+ee.overflowY)){let re=Q.getBoundingClientRect();F.left=Math.max(F.left,re.left),F.top=Math.max(F.top,re.top),F.right=Math.min(F.right,re.right),F.bottom=Math.min(F.bottom,re.bottom)}}a.push({id:N,url:U,width:C,height:R});let V=F.right-F.left,q=F.bottom-F.top;if(V<=0||q<=0)continue;let G=g.matrixWorld.clone().multiply(new Re().makeTranslation(F.left-S.left+V/2-i[y].width/2,i[y].height/2-(F.top-S.top+q/2),.5)).multiply(new Re().makeScale(V,q,1));r.push({browser:N,matrix:G.toArray(),rect:[0,0,C,R],curve:+(f.dataset.curve||0),homeOverlay:_.dataset.homeOverlay==="1",uv:[(F.left-I.left)/C,(I.bottom-F.bottom)/R,V/C,q/R]})}});let o=2*Math.tan(el.degToRad(36)),l=new Re().makeTranslation(0,0,-1).multiply(new Re().makeScale(o*1.5,o,1));if(window.__gorillaStereoOverlay){let g=new Re().makeTranslation(0,0,-1).multiply(new Re().makeScale(o*1.78,o*1.48,1));r.push({overlay:!0,matrix:g.toArray(),rect:[0,0,Dn.width/2,Dn.height],uvR:[Dn.width/2/es,1-Dn.height/es,Dn.width/2/es,Dn.height/es]})}else r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,Dn.width,Dn.height]});let c=performance.now(),d=document.documentElement.dataset.qualityTier||document.documentElement.dataset.quality;if(c-this.last>=({low:32,medium:24,auto:24,high:16}[d]||24)){this.last=c;let g=JSON.stringify(r),y=JSON.stringify(a);(g!==this.sent||y!==this.sentSpecs)&&(this.sent=g,this.sentSpecs=y,window.NativeXR.frame(g,y))}}invalidate(){this.sent=this.sentSpecs=null,this.last=0}};var lo=new D,il=new D,W1=new D,sl=()=>null,ad=()=>!0,O0=()=>null,Jr=null,co=[],k0=0;function U0(n){let e=typeof performance<"u"?performance.now():Date.now(),t=n==null?void 0:n.hands;if(!Array.isArray(t)||t.length===0){e-k0>400&&(co.length=0);return}co.length=0;for(let i of t){let s=(i==null?void 0:i.points)||(i==null?void 0:i.lm);if(!s)continue;let r=1,a=1,o=0,l=0;if(typeof s.length=="number"&&typeof s[0]=="number")for(let c=0;c+1<s.length;c+=3){let d=s[c],u=s[c+1];d<r&&(r=d),u<a&&(a=u),d>o&&(o=d),u>l&&(l=u)}else if(Array.isArray(s))for(let c of s)c&&(c.x<r&&(r=c.x),c.y<a&&(a=c.y),c.x>o&&(o=c.x),c.y>l&&(l=c.y));o>=r&&l>=a&&co.push({x0:Math.max(0,r-.14),y0:Math.max(0,a-.14),x1:Math.min(1,o+.14),y1:Math.min(1,l+.14)})}co.length>0&&(k0=e)}var od={energy:0,lastA:null,lastStepT:0,onMotion(n){let e=n==null?void 0:n.rotationRate,t=e?Math.hypot(e.alpha||0,e.beta||0,e.gamma||0):0,i=(n==null?void 0:n.accelerationIncludingGravity)||(n==null?void 0:n.acceleration);if(!i||i.x===null)return;let s=Math.hypot(i.x||0,i.y||0,i.z||0);if(this.lastA){let r=Math.abs(s-this.lastA.mag);r>.07&&t<85?(this.energy=Math.min(4,this.energy*.86+r*1.35),this.energy>.09&&(this.lastStepT=typeof performance<"u"?performance.now():Date.now())):this.energy*=.88}this.lastA={x:i.x,y:i.y,z:i.z,mag:this.lastA?.92*this.lastA.mag+.08*s:s}},moving(){if(!this.lastA)return!0;let n=typeof performance<"u"?performance.now():Date.now();return this.energy>.08&&n-this.lastStepT<1050}},jt={W:96,H:72,cv:null,ctx:null,prev:null,pos:new D,out:new D,prevOut:new D,stepDelta:new D,lastT:0,lastSc:0,lastScAt:0,_lastSentX:0,_lastSentZ:0,depth:2.85,init(){this.cv||typeof document>"u"||(this.cv=document.createElement("canvas"),this.cv.width=this.W,this.cv.height=this.H,this.ctx=this.cv.getContext("2d",{willReadFrequently:!0}))},reset(){var e,t,i;this.pos.set(0,0,0),this.out.set(0,0,0),this.prevOut.set(0,0,0),this.stepDelta.set(0,0,0),this.prev=null,this.lastSc=0,this.lastScAt=0,this._lastSentX=0,this._lastSentZ=0;let n=sl();n&&(n.position.x=0,n.position.z=0),typeof Jr=="function"?Jr(0,0,0):typeof window<"u"&&((t=(e=window.NativeXR)==null?void 0:e.resetSixDof)==null||t.call(e)),typeof window<"u"&&((i=window.__updateBackfaceStates)==null||i.call(window))},processGray(n,e){let t=this.W,i=this.H;if(!n||n.length<t*i)return null;if(!this.prev)return this.prev=new Float32Array(n),null;let s=this.prev,r=1e18,a=0,o=0;for(let f=-7;f<=7;f++)for(let m=-7;m<=7;m++){let x=0;for(let v=22;v<50&&x<r;v+=2){let M=v*t,E=(v+f)*t;for(let T=30;T<66;T+=2)x+=Math.abs(n[E+T+m]-s[M+T])}x<r&&(r=x,a=m,o=f)}let l=[],c=new Float32Array(25);for(let f=10;f<=i-18;f+=10)for(let m=10;m<=t-18;m+=11){let x=(m+4)/t,v=(f+4)/i,M=!1;for(let U of co)if(x>U.x0&&x<U.x1&&v>U.y0&&v<U.y1){M=!0;break}if(M)continue;let E=0;for(let U=f;U<f+8;U++){let C=U*t;for(let R=m;R<m+7;R++)E+=Math.abs(s[C+R+1]-s[C+R])}if(E<200)continue;let T=1e18,b=0,O=0,S=0;for(let U=-2;U<=2;U++)for(let C=-2;C<=2;C++){let R=m+a+C,F=f+o+U;if(R<0||F<0||R+8>t||F+8>i){c[S++]=1e18;continue}let V=0;for(let q=0;q<8;q++){let G=(f+q)*t+m,Q=(F+q)*t+R;for(let ee=0;ee<8;ee++)V+=Math.abs(n[Q+ee]-s[G+ee])}c[S++]=V,V<T&&(T=V,b=C,O=U)}let _=(U,C)=>c[(C+2)*5+(U+2)],I=0,N=0;if(Math.abs(b)<2){let U=_(b-1,O),C=_(b+1,O),R=U-2*T+C;R>0&&U<1e17&&C<1e17&&(I=.5*(U-C)/R)}if(Math.abs(O)<2){let U=_(b,O-1),C=_(b,O+1),R=U-2*T+C;R>0&&U<1e17&&C<1e17&&(N=.5*(U-C)/R)}l.push({x:m+4-t*.5,y:f+4-i*.5,dx:a+b+I,dy:o+O+N})}if(this.prev.set(n),l.length<10)return null;let d=f=>{let m=0,x=0,v=0,M=0;for(let O of f)m+=O.dx,x+=O.dy,v+=O.x,M+=O.y;let E=f.length;m/=E,x/=E,v/=E,M/=E;let T=0,b=0;for(let O of f){let S=O.x-v,_=O.y-M;T+=(O.dx-m)*S+(O.dy-x)*_,b+=S*S+_*_}return{sc:b>0?T/b:0,mx:m,my:x,px:v,py:M}},u=d(l),h=l.map(f=>Math.hypot(f.dx-u.mx-u.sc*(f.x-u.px),f.dy-u.my-u.sc*(f.y-u.py))),p=[...h].sort((f,m)=>f-m),g=p[p.length>>1]||.5;if(g>.85)return null;let y=l.filter((f,m)=>h[m]<=Math.max(.35,g*2));return y.length<8?null:(u=d(y),this.applyFlowScale(u.sc,a,o,e,u.mx-a),{sc:u.sc,gx:a,gy:o})},applyFlowScale(n,e=0,t=0,i,s=0){var h,p,g;if(!ad())return;let r=sl();if(!r)return;let a=typeof performance<"u"?performance.now():Date.now();if(!Number.isFinite(n)||Math.abs(n)<.0016||Math.abs(n)>.25){a-this.lastScAt>220&&(this.lastSc=0);return}if(Math.hypot(e,t)>3.8){this.lastSc=0;return}if(!(i!==void 0?!!i:od.moving())){this.lastSc=0;return}let l=this.lastSc;if(this.lastSc=n,this.lastScAt=a,l===0||Math.sign(l)!==Math.sign(n)||Math.abs(n-l)>Math.max(.085,Math.abs(n)*1.85))return;let c=n*.72+l*.28,d=Math.max(-.18,Math.min(.18,c*this.depth));if(lo.set(0,0,-1).applyQuaternion(r.quaternion),lo.y=0,lo.lengthSq()>1e-6?lo.normalize():lo.set(0,0,-1),this.pos.addScaledVector(lo,d),Number.isFinite(s)&&Math.abs(s)>=.14&&Math.abs(s)<=2.4&&Math.hypot(e,t)<=1.25&&(il.set(1,0,0).applyQuaternion(r.quaternion),il.y=0,il.lengthSq()>1e-6)){il.normalize();let y=Math.max(-.045,Math.min(.045,-s*.018));this.pos.addScaledVector(il,y)}this.pos.y=0;let u=Math.hypot(this.pos.x,this.pos.z);if(u>3.2){let y=3.2/u;this.pos.x*=y,this.pos.z*=y}this.pos.y=0,this.out.lerp(this.pos,.76),this.out.y=0,r.position.x=this.out.x,r.position.z=this.out.z,Math.hypot(this.out.x-this._lastSentX,this.out.z-this._lastSentZ)>1e-4&&(this._lastSentX=this.out.x,this._lastSentZ=this.out.z,typeof Jr=="function"?Jr(this.out.x,0,this.out.z):typeof window<"u"&&((p=(h=window.NativeXR)==null?void 0:h.sixDofOffset)==null||p.call(h,this.out.x,0,this.out.z)),typeof window<"u"&&((g=window.__updateBackfaceStates)==null||g.call(window)))},update(n,e=.016){var o,l,c;if(!ad()){(this.pos.lengthSq()>0||this.out.lengthSq()>0)&&this.reset();return}let t=Math.max(.55,1-Math.exp(-Math.max(.005,e)*32));this.out.lerp(this.pos,t),this.out.y=0,this.stepDelta.subVectors(this.out,this.prevOut),this.stepDelta.y=0,this.prevOut.copy(this.out);let i=sl();i&&(i.position.x=this.out.x,i.position.z=this.out.z),Math.hypot(this.out.x-this._lastSentX,this.out.z-this._lastSentZ)>1e-4&&(this._lastSentX=this.out.x,this._lastSentZ=this.out.z,typeof Jr=="function"?Jr(this.out.x,0,this.out.z):typeof window<"u"&&((l=(o=window.NativeXR)==null?void 0:o.sixDofOffset)==null||l.call(o,this.out.x,0,this.out.z)),typeof window<"u"&&((c=window.__updateBackfaceStates)==null||c.call(window)));let s=O0();if(!s||s.readyState<2||n-this.lastT<45||(this.lastT=n,this.init(),!this.ctx))return;let r=this.W,a=this.H;try{this.ctx.drawImage(s,0,0,r,a);let d=this.ctx.getImageData(0,0,r,a).data,u=new Float32Array(r*a);for(let h=0,p=0;h<u.length;h++,p+=4)u[h]=d[p]*.3+d[p+1]*.59+d[p+2]*.11;this.processGray(u)}catch{}},consumeStepDelta(n=W1){return n.copy(this.stepDelta),n.y=0,this.stepDelta.set(0,0,0),n}};function ld({camera:n,settings:e,getCamera:t,isEnabled:i,getVideo:s,onNativeOffset:r}={}){typeof t=="function"?sl=t:n&&(sl=()=>n),typeof i=="function"?ad=i:e&&typeof e=="object"&&(ad=()=>e.sixdof!==0),typeof s=="function"&&(O0=s),typeof r=="function"&&(Jr=r)}typeof window<"u"&&(window.addEventListener("devicemotion",n=>od.onMotion(n),{passive:!0}),window.SixDof=jt,window.Walk=od,window.nextvrSixDof=(n,e=0,t=0)=>{if(n&&typeof n=="object"){if(n.gray&&n.gray.length>=jt.W*jt.H)return jt.processGray(n.gray,n.moving);let s=Number(n.sc??0),r=Number(n.gx??0),a=Number(n.gy??0),o=Number(n.mx??0);return jt.applyFlowScale(s,r,a,n.moving,o),{sc:s,gx:r,gy:a}}let i=Number(n??0);return jt.applyFlowScale(i,Number(e||0),Number(e?t:0)),{sc:i,gx:Number(e||0),gy:Number(t||0)}});var F0=new D,q1=new it,B0=new D,Qr=class extends Bt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var ts=new Re,X1=new Re,cd=class{constructor(e={}){let t=this,i,s,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let d=document.createElement("div");d.style.transformStyle="preserve-3d",c.appendChild(d),this.getSize=function(){return{width:i,height:s}},this.render=function(y,f){let m=f.projectionMatrix.elements[5]*a;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let x,v;f.isOrthographicCamera&&(x=-(f.right+f.left)/2,v=(f.top+f.bottom)/2);let M=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,E=f.isOrthographicCamera?`scale( ${M} )scale(`+m+")translate("+u(x)+"px,"+u(v)+"px)"+h(f.matrixWorldInverse):`scale( ${M} )translateZ(`+m+"px)"+h(f.matrixWorldInverse),b=(f.isPerspectiveCamera?"perspective("+m+"px) ":"")+E+"translate("+r+"px,"+a+"px)";o.camera.style!==b&&(d.style.transform=b,o.camera.style=b),g(y,y,f,E)},this.setSize=function(y,f){i=y,s=f,r=i/2,a=s/2,l.style.width=y+"px",l.style.height=f+"px",c.style.width=y+"px",c.style.height=f+"px",d.style.width=y+"px",d.style.height=f+"px"};function u(y){return Math.abs(y)<1e-10?0:y}function h(y){let f=y.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function p(y){let f=y.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function g(y,f,m,x){if(y.isCSS3DObject){let v=y.visible===!0&&y.layers.test(m.layers)===!0;if(y.element.style.display=v===!0?"":"none",v===!0){y.onBeforeRender(t,f,m);let M;y.isCSS3DSprite?(ts.copy(m.matrixWorldInverse),ts.transpose(),y.rotation2D!==0&&ts.multiply(X1.makeRotationZ(y.rotation2D)),y.matrixWorld.decompose(F0,q1,B0),ts.setPosition(F0),ts.scale(B0),ts.elements[3]=0,ts.elements[7]=0,ts.elements[11]=0,ts.elements[15]=1,M=p(ts)):M=p(y.matrixWorld);let E=y.element,T=o.objects.get(y);if(T===void 0||T.style!==M){E.style.transform=M;let b={style:M};o.objects.set(y,b)}E.parentNode!==d&&d.appendChild(E),y.onAfterRender(t,f,m)}}for(let v=0,M=y.children.length;v<M;v++)g(y.children[v],f,m,x)}}};var ye=!!window.NativeXR,_t=ye?Dn:{width:innerWidth,height:innerHeight},V0={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"sunset",panorama:"sunset",quality:"auto",showFps:0,wideCamera:0,spatialLauncher:0,dockSnapSlot:1,fingerTouch:1,pinchOnApp:1,gunGesture:1,mrDim:0,sixdof:1,lateLatch:0,gorillaInstalled:0,profileName:"",profileAvatar:""},rl={};try{rl=JSON.parse(localStorage.getItem("nextvr.v1")||"{}")||{}}catch{}var He={...V0,...rl};He.sunsetDefaultVersion||(!He.envChosen&&He.env==="passthrough"&&(!rl.panorama||rl.panorama==="lagoon")&&(He.env="sunset"),(!rl.panorama||He.env==="sunset"&&!He.envChosen)&&(He.panorama=He.env==="passthrough"?"sunset":He.env),He.sunsetDefaultVersion=1);if(ye){He=D0(He),He.handsOn=!0,He.handDrawSeen||(He.handDraw=V0.handDraw,He.handDrawSeen=1);try{localStorage.setItem("nextvr.v1",JSON.stringify(He))}catch{}}var w=He,Ue=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(He))}catch{}},fn={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",libAll:"Todos",libFilter:"Filtro",libGames:"Jogos",libGamesEmpty:"Os jogos de headset aparecem aqui quando o PhoneXR os encontra.",libRecentEmpty:"Os apps abertos recentemente aparecem aqui.",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 lagoa ao p\xF4r do sol",envSunset:"P\xF4r do sol \xB7 palmeiras",envDusk:"Crep\xFAsculo",envCinema:"Cinema",envPassOn:"Passthrough da c\xE2mera",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",envPalm:"Panorama 360\xB0 \xB7 Palmeira",envPalmeira:"Panorama 360\xB0 \xB7 Palmeira",envVirtual:"Ambiente virtual",envTropical:"Panorama 360\xB0 \xB7 vale tropical",envLakeside:"Panorama 360\xB0 \xB7 lago ao p\xF4r do sol",envDark:"Panorama 360\xB0 \xB7 Dark",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",shizuku:"Shizuku",noAndroidApps:"Nenhum app do Android dispon\xEDvel ainda.",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo",xrTitle:"PhoneXR",xrSub:"Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as m\xE3os como controles",xrBadge:"Jogo de headset",xrReady:"Runtime PhoneXR pronto",xrRuntimeReady:"Runtime PhoneXR pronto: jogos de headset abrem aqui dentro",xrMissing:"O runtime PhoneXR n\xE3o est\xE1 instalado: o jogo aparece na biblioteca mas n\xE3o abre",xrMissingNoApk:"O runtime PhoneXR n\xE3o est\xE1 instalado: veja docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro",xrInstall:"Instalar runtime",xrInstalling:"Instalando o runtime PhoneXR\u2026",xrSelfTest:"Verificar agora",xrNotHostable:"Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho",xrMenuHint:"Pin\xE7a sobre uma janela agita o menu \xB7 fora dela a pin\xE7a \xE9 o gatilho do jogo",xrHandMode:"Entrada das m\xE3os",xrHandModeSub:"Como as m\xE3os chegam ao jogo",xrHandModeNote:"No modo controles, pin\xE7a \xE9 gatilho e punho fechado \xE9 grip. No modo m\xE3os as cordas dos dedos seguem a sua m\xE3o, sem bot\xF5es.",xrModeControllers:"Controles",xrModeControllersSub:"Pin\xE7a = gatilho \xB7 punho fechado = grip (como Oculus Touch)",xrModeHands:"M\xE3os",xrModeHandsSub:"S\xF3 cordas dos dedos, sem bot\xF5es (jogos com suporte a m\xE3os)",xrBundlingNote:"Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).","game.exit":"Sair do jogo","game.menu":"Menu do jogo","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",libAll:"All",libFilter:"Filter",libGames:"Games",libGamesEmpty:"Headset games appear here when PhoneXR finds them.",libRecentEmpty:"Recently opened apps will appear here.",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envLagoon:"360\xB0 panorama \xB7 sunset lagoon",envSunset:"Sunset \xB7 palms",envDusk:"Dusk",envCinema:"Cinema",envPassOn:"Camera passthrough",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",envPalm:"360\xB0 panorama \xB7 palm tree",envPalmeira:"360\xB0 panorama \xB7 palm tree",envVirtual:"Virtual environment",envTropical:"360\xB0 panorama \xB7 tropical valley",envLakeside:"360\xB0 panorama \xB7 sunset lake",envDark:"360\xB0 panorama \xB7 Dark",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",shizuku:"Shizuku",noAndroidApps:"No Android apps available yet.",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again",xrTitle:"PhoneXR",xrSub:"Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers",xrBadge:"Headset game",xrReady:"PhoneXR runtime ready",xrRuntimeReady:"PhoneXR runtime ready: headset games open inside here",xrMissing:"The PhoneXR runtime is not installed: the game shows in the library but cannot open",xrMissingNoApk:"The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Install the runtime (needs Shizuku) to open headset games in here",xrInstall:"Install runtime",xrInstalling:"Installing the PhoneXR runtime\u2026",xrSelfTest:"Check now",xrNotHostable:"This game has to be started by the runtime launcher on the phone screen",xrMenuHint:"Pinch over a window works this menu \xB7 outside it the pinch is the game trigger",xrHandMode:"Hand input",xrHandModeSub:"How the hands reach the game",xrHandModeNote:"Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.",xrModeControllers:"Controllers",xrModeControllersSub:"Pinch = trigger \xB7 fist = grip (like Oculus Touch)",xrModeHands:"Hands",xrModeHandsSub:"Finger curls only, no buttons (hand-tracking-native games)",xrBundlingNote:"No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).","game.exit":"Exit game","game.menu":"Game menu","game.continue":"Continue","game.settings":"Settings","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",libAll:"Todo",libFilter:"Filtro",libGames:"Juegos",libGamesEmpty:"Los juegos de realidad virtual aparecer\xE1n aqu\xED cuando PhoneXR los encuentre.",libRecentEmpty:"Las aplicaciones abiertas recientemente aparecer\xE1n aqu\xED.",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 laguna al atardecer",envSunset:"Atardecer \xB7 palmeras",envDusk:"Crep\xFAsculo",envCinema:"Cine",envPassOn:"Passthrough de la c\xE1mara",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",envPalm:"Panorama 360\xB0 \xB7 palmera",envPalmeira:"Panorama 360\xB0 \xB7 palmera",envVirtual:"Entorno virtual",envTropical:"Panorama 360\xB0 \xB7 valle tropical",envLakeside:"Panorama 360\xB0 \xB7 lago al atardecer",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",shizuku:"Shizuku",noAndroidApps:"A\xFAn no hay apps de Android disponibles.",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo",xrTitle:"PhoneXR",xrSub:"Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles",xrBadge:"Juego de visor",xrReady:"Runtime PhoneXR listo",xrRuntimeReady:"Runtime PhoneXR listo: los juegos de visor abren aqu\xED dentro",xrMissing:"El runtime PhoneXR no est\xE1 instalado: el juego aparece en la biblioteca pero no abre",xrMissingNoApk:"El runtime PhoneXR no est\xE1 instalado: mira docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instala el runtime (necesita Shizuku) para abrir juegos de visor aqu\xED",xrInstall:"Instalar runtime",xrInstalling:"Instalando el runtime PhoneXR\u2026",xrSelfTest:"Comprobar ahora",xrNotHostable:"Este juego debe ser iniciado por el launcher del runtime en la pantalla del m\xF3vil",xrMenuHint:"Pinza sobre una ventana mueve este men\xFA \xB7 fuera de ellas la pinza es el gatillo",xrHandMode:"Entrada de manos",xrHandModeSub:"C\xF3mo llegan las manos al juego",xrHandModeNote:"En modo controles la pinza es gatillo y el pu\xF1o es grip. En modo manos siguen las curvas de tus dedos, sin botones.",xrModeControllers:"Controles",xrModeControllersSub:"Pinza = gatillo \xB7 pu\xF1o = grip (como Oculus Touch)",xrModeHands:"Manos",xrModeHandsSub:"Solo curvas de dedos, sin botones (juegos con manos nativas)",xrBundlingNote:"Ning\xFAn APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).","game.exit":"Salir del juego","game.menu":"Men\xFA del juego","game.continue":"Continuar","game.settings":"Ajustes","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}};Object.assign(fn.pt,{dockSnapSlot:"Espa\xE7o pr\xE9-definido na Dock",dockSnapDesc:"Mostrar janela preta transparente ao mover janelas na Dock normal",dockSnapHint:"Solte aqui para encaixar no espa\xE7o pr\xE9-definido",fingerTouch:"Toque com indicador (sem pin\xE7a)",fingerTouchDesc:"Abrir apps na Dock ou Spatial levando o indicador \xE0 frente",qualityHigh:"Alta (1080p)",qualityMedium:"M\xE9dia (890p)",qualityLow:"Baixa (390p)",qualityAuto:"Autom\xE1tica"});Object.assign(fn.en,{dockSnapSlot:"Pre-defined Dock Slot",dockSnapDesc:"Show semi-transparent black slot when moving windows in normal Dock",dockSnapHint:"Drop here to snap into pre-defined slot",fingerTouch:"Index Finger Touch (No Pinch)",fingerTouchDesc:"Open apps in Dock or Spatial by pushing your index finger forward",qualityHigh:"High (1080p)",qualityMedium:"Medium (890p)",qualityLow:"Low (390p)",qualityAuto:"Auto"});Object.assign(fn.es,{dockSnapSlot:"Espacio predefinido en Dock",dockSnapDesc:"Mostrar ventana negra semitransparente al mover ventanas en el Dock normal",dockSnapHint:"Suelta aqu\xED para encajar en el espacio predefinido",fingerTouch:"Toque con \xEDndice (sin pinza)",fingerTouchDesc:"Abrir apps en el Dock o Spatial llevando el dedo \xEDndice hacia adelante",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Baja (390p)",qualityAuto:"Autom\xE1tica"});fn.ja={...fn.en,desktop:"\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",browser:"\u30D6\u30E9\u30A6\u30B6",youtube:"YouTube",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC",settings:"\u8A2D\u5B9A",menu:"\u30E1\u30CB\u30E5\u30FC",store:"\u30B9\u30C8\u30A2",env:"\u74B0\u5883",keyboard:"\u30AD\u30FC\u30DC\u30FC\u30C9",center:"\u6B63\u9762\u306B\u30EA\u30BB\u30C3\u30C8",search:"\u30A6\u30A7\u30D6\u3092\u691C\u7D22",searchYt:"\u52D5\u753B\u3092\u691C\u7D22",open:"\u958B\u304F",close:"\u9589\u3058\u308B",general:"\u4E00\u822C",hands:"\u30CF\u30F3\u30C9\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0",windows:"\u30A6\u30A3\u30F3\u30C9\u30A6",dock:"\u30C9\u30C3\u30AF",perf:"\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",language:"\u8A00\u8A9E",on:"\u30AA\u30F3",off:"\u30AA\u30D5",sens:"\u611F\u5EA6",scale:"\u30B9\u30B1\u30FC\u30EB",dist:"\u8DDD\u96E2",curve:"\u30AB\u30FC\u30D6",size:"\u30B5\u30A4\u30BA",quality:"\u753B\u8CEA",apps:"\u30A2\u30D7\u30EA",recents:"\u6700\u8FD1",battery:"\u30D0\u30C3\u30C6\u30EA\u30FC",net:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",time:"\u6642\u523B",libAll:"\u3059\u3079\u3066",libFilter:"\u30D5\u30A3\u30EB\u30BF\u30FC",libGames:"\u30B2\u30FC\u30E0",centered:"\u8996\u70B9\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",langChanged:"\u8A00\u8A9E\u3092\u5909\u66F4\u3057\u307E\u3057\u305F",langTitle:"\u8A00\u8A9E",langContinue:"\u6B21\u3078",langPick:"\u8A00\u8A9E\u3092\u9078\u629E",notif:"\u901A\u77E5",noNotif:"\u65B0\u3057\u3044\u901A\u77E5\u306F\u3042\u308A\u307E\u305B\u3093",profile:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",dockSnapSlot:"\u30C9\u30C3\u30AF\u5B9A\u7FA9\u6E08\u307F\u30B9\u30ED\u30C3\u30C8",dockSnapDesc:"\u30A6\u30A3\u30F3\u30C9\u30A6\u79FB\u52D5\u6642\u306B\u534A\u900F\u660E\u306E\u9ED2\u67A0\u3092\u8868\u793A",dockSnapHint:"\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u914D\u7F6E",qualityHigh:"\u9AD8 (1080p)",qualityMedium:"\u4E2D (890p)",qualityLow:"\u4F4E (390p)",qualityAuto:"\u81EA\u52D5"};fn.fr={...fn.en,desktop:"Espace de travail",browser:"Navigateur",youtube:"YouTube",gallery:"Galerie",settings:"Param\xE8tres",menu:"Menu",store:"Boutique",env:"Environnements",keyboard:"Clavier",center:"Recentrer",search:"Rechercher sur le web",searchYt:"Rechercher des vid\xE9os",open:"Ouvrir",close:"Fermer",general:"G\xE9n\xE9ral",hands:"Suivi des mains",windows:"Fen\xEAtres",dock:"Dock",perf:"Performance",language:"Langue",on:"Activ\xE9",off:"D\xE9sactiv\xE9",sens:"Sensibilit\xE9",scale:"\xC9chelle",dist:"Distance",curve:"Courbure",size:"Taille",quality:"Qualit\xE9",apps:"Applications",recents:"R\xE9cents",battery:"Batterie",net:"R\xE9seau",time:"Heure",libAll:"Tout",libFilter:"Filtre",libGames:"Jeux",centered:"Espace recentr\xE9",langChanged:"Langue modifi\xE9e",langTitle:"Langue",langContinue:"Continuer",langPick:"Choisissez votre langue",notif:"Notifications",noNotif:"Aucune notification",profile:"Profil",dockSnapSlot:"Emplacement pr\xE9d\xE9fini du Dock",dockSnapDesc:"Afficher un cadre noir semi-transparent lors du d\xE9placement",dockSnapHint:"Rel\xE2chez ici pour placer la fen\xEAtre",qualityHigh:"Haute (1080p)",qualityMedium:"Moyenne (890p)",qualityLow:"Basse (390p)",qualityAuto:"Auto"};fn.de={...fn.en,desktop:"Arbeitsbereich",browser:"Browser",youtube:"YouTube",gallery:"Galerie",settings:"Einstellungen",menu:"Men\xFC",store:"Store",env:"Umgebungen",keyboard:"Tastatur",center:"Zentrieren",search:"Im Web suchen",searchYt:"Videos suchen",open:"\xD6ffnen",close:"Schlie\xDFen",general:"Allgemein",hands:"Hand-Tracking",windows:"Fenster",dock:"Dock",perf:"Leistung",language:"Sprache",on:"Ein",off:"Aus",sens:"Empfindlichkeit",scale:"Skalierung",dist:"Abstand",curve:"Kr\xFCmmung",size:"Gr\xF6\xDFe",quality:"Qualit\xE4t",apps:"Apps",recents:"Zuletzt",battery:"Akku",net:"Netzwerk",time:"Zeit",libAll:"Alle",libFilter:"Filter",libGames:"Spiele",centered:"Ansicht zentriert",langChanged:"Sprache ge\xE4ndert",langTitle:"Sprache",langContinue:"Weiter",langPick:"Sprache ausw\xE4hlen",notif:"Mitteilungen",noNotif:"Keine neuen Mitteilungen",profile:"Profil",dockSnapSlot:"Vordefinierter Dock-Platz",dockSnapDesc:"Halbtransparentes schwarzes Zielfenster beim Bewegen anzeigen",dockSnapHint:"Hier ablegen zum Einrasten",qualityHigh:"Hoch (1080p)",qualityMedium:"Mittel (890p)",qualityLow:"Niedrig (390p)",qualityAuto:"Automatisch"};fn.ko={...fn.en,desktop:"\uC791\uC5C5 \uACF5\uAC04",browser:"\uBE0C\uB77C\uC6B0\uC800",youtube:"YouTube",gallery:"\uAC24\uB7EC\uB9AC",settings:"\uC124\uC815",menu:"\uBA54\uB274",store:"\uC2A4\uD1A0\uC5B4",env:"\uD658\uACBD",keyboard:"\uD0A4\uBCF4\uB4DC",center:"\uC911\uC559 \uC815\uB82C",search:"\uC6F9 \uAC80\uC0C9",searchYt:"\uB3D9\uC601\uC0C1 \uAC80\uC0C9",open:"\uC5F4\uAE30",close:"\uB2EB\uAE30",general:"\uC77C\uBC18",hands:"\uD578\uB4DC \uD2B8\uB798\uD0B9",windows:"\uCC3D",dock:"\uB3C5",perf:"\uC131\uB2A5",language:"\uC5B8\uC5B4",on:"\uCF1C\uC9D0",off:"\uAEBC\uC9D0",sens:"\uAC10\uB3C4",scale:"\uD06C\uAE30 \uBE44\uC728",dist:"\uAC70\uB9AC",curve:"\uACE1\uB960",size:"\uD06C\uAE30",quality:"\uD654\uC9C8",apps:"\uC571",recents:"\uCD5C\uADFC \uD56D\uBAA9",battery:"\uBC30\uD130\uB9AC",net:"\uB124\uD2B8\uC6CC\uD06C",time:"\uC2DC\uAC04",libAll:"\uC804\uCCB4",libFilter:"\uD544\uD130",libGames:"\uAC8C\uC784",centered:"\uD654\uBA74\uC774 \uC911\uC559\uC5D0 \uB9DE\uCDB0\uC84C\uC2B5\uB2C8\uB2E4",langChanged:"\uC5B8\uC5B4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4",langTitle:"\uC5B8\uC5B4",langContinue:"\uACC4\uC18D",langPick:"\uC5B8\uC5B4 \uC120\uD0DD",notif:"\uC54C\uB9BC",noNotif:"\uC0C8 \uC54C\uB9BC \uC5C6\uC74C",profile:"\uD504\uB85C\uD544",dockSnapSlot:"\uB3C5 \uC0AC\uC804 \uC815\uC758 \uC2AC\uB86F",dockSnapDesc:"\uCC3D \uC774\uB3D9 \uC2DC \uBC18\uD22C\uBA85 \uAC80\uC740 \uC2AC\uB86F \uD45C\uC2DC",dockSnapHint:"\uC5EC\uAE30\uC5D0 \uB193\uC544 \uC2AC\uB86F\uC5D0 \uBC30\uCE58",qualityHigh:"\uB192\uC74C (1080p)",qualityMedium:"\uC911\uAC04 (890p)",qualityLow:"\uB0AE\uC74C (390p)",qualityAuto:"\uC790\uB3D9"};fn.it={...fn.en,desktop:"Spazio di lavoro",browser:"Browser",youtube:"YouTube",gallery:"Galleria",settings:"Impostazioni",menu:"Menu",store:"Store",env:"Ambienti",keyboard:"Tastiera",center:"Ricentra",search:"Cerca sul web",searchYt:"Cerca video",open:"Apri",close:"Chiudi",general:"Generale",hands:"Tracciamento mani",windows:"Finestre",dock:"Dock",perf:"Prestazioni",language:"Lingua",on:"Attivo",off:"Disattivo",sens:"Sensibilit\xE0",scale:"Scala",dist:"Distanza",curve:"Curvatura",size:"Dimensione",quality:"Qualit\xE0",apps:"App",recents:"Recenti",battery:"Batteria",net:"Rete",time:"Ora",libAll:"Tutti",libFilter:"Filtro",libGames:"Giochi",centered:"Ambiente centrato",langChanged:"Lingua modificata",langTitle:"Lingua",langContinue:"Continua",langPick:"Scegli la lingua",notif:"Notifiche",noNotif:"Nessuna notifica",profile:"Profilo",dockSnapSlot:"Slot predefinito Dock",dockSnapDesc:"Mostra finestra nera semitrasparente quando sposti le finestre",dockSnapHint:"Rilascia qui per agganciare",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Bassa (390p)",qualityAuto:"Automatica"};fn.nl={...fn.en,desktop:"Werkruimte",browser:"Browser",youtube:"YouTube",gallery:"Galerij",settings:"Instellingen",menu:"Menu",store:"Winkel",env:"Omgevingen",keyboard:"Toetsenbord",center:"Centreren",search:"Zoeken op het web",searchYt:"Video\u2019s zoeken",open:"Openen",close:"Sluiten",general:"Algemeen",hands:"Handtracking",windows:"Vensters",dock:"Dock",perf:"Prestaties",language:"Taal",on:"Aan",off:"Uit",sens:"Gevoeligheid",scale:"Schaal",dist:"Afstand",curve:"Kromming",size:"Grootte",quality:"Kwaliteit",apps:"Apps",recents:"Recent",battery:"Batterij",net:"Netwerk",time:"Tijd",libAll:"Alles",libFilter:"Filter",libGames:"Games",centered:"Omgeving gecentreerd",langChanged:"Taal gewijzigd",langTitle:"Taal",langContinue:"Doorgaan",langPick:"Kies je taal",notif:"Meldingen",noNotif:"Geen nieuwe meldingen",profile:"Profiel",dockSnapSlot:"Vooraf ingesteld Dock-vak",dockSnapDesc:"Toon halftransparant zwart vak tijdens verplaatsen van vensters",dockSnapHint:"Laat hier los om te plaatsen",qualityHigh:"Hoog (1080p)",qualityMedium:"Gemiddeld (890p)",qualityLow:"Laag (390p)",qualityAuto:"Automatisch"};fn.ru={...fn.en,desktop:"\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",browser:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440",youtube:"YouTube",gallery:"\u0413\u0430\u043B\u0435\u0440\u0435\u044F",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",menu:"\u041C\u0435\u043D\u044E",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",env:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",keyboard:"\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",center:"\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A \u0432 \u0441\u0435\u0442\u0438",searchYt:"\u041F\u043E\u0438\u0441\u043A \u0432\u0438\u0434\u0435\u043E",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",general:"\u041E\u0431\u0449\u0438\u0435",hands:"\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0440\u0443\u043A",windows:"\u041E\u043A\u043D\u0430",dock:"\u0414\u043E\u043A",perf:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",language:"\u042F\u0437\u044B\u043A",on:"\u0412\u043A\u043B.",off:"\u0412\u044B\u043A\u043B.",sens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",scale:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431",dist:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",curve:"\u0418\u0437\u0433\u0438\u0431",size:"\u0420\u0430\u0437\u043C\u0435\u0440",quality:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",apps:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",recents:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",battery:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F",net:"\u0421\u0435\u0442\u044C",time:"\u0412\u0440\u0435\u043C\u044F",libAll:"\u0412\u0441\u0435",libFilter:"\u0424\u0438\u043B\u044C\u0442\u0440",libGames:"\u0418\u0433\u0440\u044B",centered:"\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",langChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0451\u043D",langTitle:"\u042F\u0437\u044B\u043A",langContinue:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",langPick:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A",notif:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",noNotif:"\u041D\u0435\u0442 \u043D\u043E\u0432\u044B\u0445 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",profile:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C",dockSnapSlot:"\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0442 \u0434\u043E\u043A\u0430",dockSnapDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u0447\u0451\u0440\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043E\u043A\u043E\u043D",dockSnapHint:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F",fingerTouch:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C (\u0431\u0435\u0437 \u0449\u0438\u043F\u043A\u0430)",fingerTouchDesc:"\u041D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442; \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0443\u043A\u0438 \u0432\u043F\u0435\u0440\u0451\u0434 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 (\u0431\u0435\u0437 \u043B\u0443\u0447\u0430 \u0438 \u043A\u0440\u0443\u0436\u043A\u0430)",qualityHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qualityMedium:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qualityLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",qualityAuto:"\u0410\u0432\u0442\u043E"};var al=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E",table:"ja"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",table:"ru"},{id:"de",label:"Deutsch",table:"de"},{id:"ko",label:"\uD55C\uAD6D\uC5B4",table:"ko"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano",table:"it"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands",table:"nl"},{id:"pt-PT",label:"Portugu\xEAs (Portugal)",table:"pt"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),$1="pt",yd=n=>al.find(e=>e.id===n)||al.find(e=>e.id===$1);var ff=()=>yd(He.lang).table||"pt",k=n=>(fn[ff()]||fn.pt)[n]||fn.pt[n]||n,ta=n=>al.some(e=>e.id===n&&e.table)?(He.lang=n,Ue(),Me("lang"),!0):!1,fd={},Ge=(n,e)=>((fd[n]||(fd[n]=[])).push(e),e),Me=(n,e)=>(fd[n]||[]).forEach(t=>t(e));function Je(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(Je._t),Je._t=setTimeout(()=>e.classList.remove("on"),2400)}var Ae=new to,fe=new Yt(72,1,.05,120);fe.rotation.order="YXZ";var Tt=new In;Ae.add(Tt);var Gt=1.55;fe.position.set(0,Gt,0);ld({settings:He,camera:fe,contentRoot:Tt});var ho=ye?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new jr({antialias:!0,alpha:!0});ye||(ho.setClearColor(0,0),document.getElementById("gl").appendChild(ho.domElement));var te=ye?new rd:new cd;document.getElementById("css3d").appendChild(te.domElement);if(ye){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}var df=Object.freeze({high:{id:"high",height:1080,label:"1080p",dpr:2},medium:{id:"medium",height:890,label:"890p",dpr:1.55},low:{id:"low",height:390,label:"390p",dpr:1}}),pd="medium",pf=()=>He.quality==="auto"?pd:df[He.quality]?He.quality:"medium",G0=()=>df[pf()]||df.medium;function W0(){let n=pf();return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.55)}function q0(){var t,i;let n=pf(),e=G0();document.documentElement.dataset.quality=He.quality,document.documentElement.dataset.qualityTier=n,document.documentElement.dataset.qualityRes=e.label,(i=(t=window.NativeXR)==null?void 0:t.setQuality)==null||i.call(t,n)}function vd(){q0(),ye||(_t.width=innerWidth,_t.height=innerHeight);let n=_t.width,e=_t.height;fe.aspect=n/e,fe.updateProjectionMatrix(),ho.setPixelRatio(W0()),ho.setSize(n,e),te.setSize(n,e),Me("resize")}addEventListener("resize",vd);addEventListener("orientationchange",()=>setTimeout(vd,120));vd();Ge("quality",vd);var Y1=Object.freeze(["passthrough","sunset","dusk","cinema","lagoon","virtual","palm","night","space","tropical","lakeside","dark"]),mf=()=>[{id:"sunset",name:k("envSunset"),thumb:"./env/sunset.jpg"},{id:"passthrough",name:k("envPass"),thumb:null},{id:"dark",name:k("envDark"),thumb:"./env/dark.jpg"},{id:"dusk",name:k("envDusk"),thumb:"./env/dusk.jpg"},{id:"palm",name:k("envPalm"),thumb:"./env/palm.jpg"},{id:"lagoon",name:k("envLagoon"),thumb:"./env/lagoon.jpg"},{id:"virtual",name:k("envVirtual"),thumb:"./env/virtual.jpg"},{id:"night",name:k("envNight"),thumb:"./env/night.jpg"},{id:"space",name:k("envSpace"),thumb:"./env/space.jpg"},{id:"cinema",name:k("envCinema"),thumb:"./env/cinema.jpg"},{id:"tropical",name:k("envTropical"),thumb:"./env/tropical.jpg"},{id:"lakeside",name:k("envLakeside"),thumb:"./env/lakeside.jpg"}];function Ai(n){var e,t,i;He.env=Y1.includes(n)?n:"passthrough",He.envChosen=1,He.env!=="passthrough"&&(He.panorama=He.env),Ue(),Me("env",He.env),typeof window<"u"&&((e=window.nextvrShowCircleLoader)==null||e.call(window,"env",He.env)),(i=(t=window.NativeXR)==null?void 0:t.env)==null||i.call(t,He.env)}var Fi=n=>Ai(n?"passthrough":He.panorama);function ol(n){var e,t;He.mrDim=n?1:0,Ue(),typeof document<"u"&&(He.mrDim?document.documentElement.dataset.mrDim="1":delete document.documentElement.dataset.mrDim),(t=(e=window.NativeXR)==null?void 0:e.setMrDim)==null||t.call(e,!!He.mrDim),Me("mr-dim",He.mrDim)}var hd,H0;typeof document<"u"&&He.mrDim&&(document.documentElement.dataset.mrDim="1",(H0=(hd=window.NativeXR)==null?void 0:hd.setMrDim)==null||H0.call(hd,!0));var Xn={ok:!1,has:!1,q:new it,tmp:new it,e:new hi},j1=new it,Z1=new it(-Math.SQRT1_2,0,0,Math.SQRT1_2),K1=new D(0,0,1),md=Math.PI/180;function J1(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*md}function Q1(n){n.alpha!=null&&(Xn.has=!0,Xn.e.set(n.beta*md,n.alpha*md,-n.gamma*md,"YXZ"),Xn.tmp.setFromEuler(Xn.e),Xn.tmp.multiply(Z1),Xn.tmp.multiply(j1.setFromAxisAngle(K1,-J1())),Xn.q.copy(Xn.tmp))}async function na(){if(ye)return Xn.ok=Xn.has=!0,Me("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(Je("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",Q1,!0),Xn.ok=!0,setTimeout(()=>{Xn.has||Je("Sem girosc\xF3pio: arraste para olhar")},1200),Me("gyro",!0),!0)}catch{return Je("Girosc\xF3pio indispon\xEDvel"),!1}}var eA=()=>Xn.ok&&Xn.has,ea=null,uo=0,uf=0;addEventListener("pointerdown",n=>{ye||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(ea={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{ea&&(uo-=(n.clientX-ea.x)*.0032,uf=Math.max(-1.2,Math.min(1.2,uf-(n.clientY-ea.y)*.0032)),ea={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>ea=null);addEventListener("pointercancel",()=>ea=null);function Bi(){jt.reset();let n=new hi().setFromQuaternion(fe.quaternion,"YXZ");Tt.rotation.y=n.y,Tt.position.set(0,0,0),fe.position.set(0,Gt,0),Me("recenter"),Je(k("centered"))}var X0=[],ll=n=>X0.push(n),z0=performance.now(),dd=0,of=0,lf=0,ud=0,cf=0,gd=0,ni=null,$0=()=>{let n=performance.now();lf>0&&(ud+=(n-lf)/1e3,cf++,ud>=1&&(gd=Math.round(cf/ud),ud=0,cf=0)),lf=n};function hf(n){let e=Math.min((n-z0)/1e3,.05);if(z0=n,ye||(eA()?(fe.quaternion.slerp(Xn.q,1-Math.exp(-e*12)),uo&&(fe.rotateY(uo),uo=0)):(fe.quaternion.setFromEuler(new hi(uf,fe.rotation.y+uo,0,"YXZ")),uo=0)),jt.update(n,e),fe.position.set(jt.out.x,Gt+jt.out.y,jt.out.z),window.__gorillaStereoOverlay){te.render(Ae,fe),requestAnimationFrame(hf);return}for(let t of X0)t(e,n);if(ho.render(Ae,fe),te.render(Ae,fe),dd+=e,of++,dd>=1){let t=Math.round(of/dd);if(He.quality==="auto"){let s=ye&&He.handsOn&&gd>=15?Math.min(t,gd*2):t,r=s>=52?"high":s>=34?"medium":"low";r!==pd&&(pd=r,q0(),ho.setPixelRatio(W0()),Me("quality-tier",pd))}let i=document.getElementById("fps");i.textContent=He.showFps?t+" fps \xB7 "+G0().label+(ye&&He.handsOn?" \xB7 tracking "+gd+" fps":"")+(ye&&He.handsOn?iA():""):"",dd=0,of=0}requestAnimationFrame(hf)}var tA=typeof location<"u"&&(new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1")),nA=typeof location<"u"&&location.hash.includes("onboarding=skip");tA||(requestAnimationFrame(hf),nA&&!He.entryEnvChosen?Fi(!0):Ai(He.env));if(ye){let n=new Re,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),fe.quaternion.setFromRotationMatrix(n),fe.position.set(jt.out.x,Gt+jt.out.y,jt.out.z),fe.updateMatrixWorld(!0),e&&(Tt.rotation.y=new hi().setFromQuaternion(fe.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=Je,window.nextvrDiag=t=>{ni=t}}function iA(){if(!ni)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n(ni.camera);t!==null&&e.push("cam "+t);let i=n(ni.infer);return i!==null&&e.push("infer "+i+"ms"),ni.delegate&&e.push(String(ni.delegate).split(" ")[0]),typeof ni.narrow=="number"&&typeof ni.wide=="number"&&ni.narrow+ni.wide>0&&e.push("slots "+(ni.narrow>=ni.wide?1:2)),n(ni.stale)>0&&e.push("stale "+Math.round(ni.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var bd=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},xd=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var Ei=[],ve={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},pr=new bd,fo=new xd,vf=Math.tan(36*Math.PI/180),Z0=vf*1.5,wd=!1,Sd=-1/0,dl=2*Z0,ul=2*vf,gf=null,K0=500;ld({getHands:()=>({list:Ei,lastAt:Sd})});var bf=()=>wd;async function ns(){return ye?(wd=!0,window.NativeXR.hands(!0),Me("hands",!0),!0):(Je("Hand tracking requires the Android camera pipeline."),!1)}function J0(n){for(let e of n)Me(`pinch${e}`,ve)}function hl(){let n=pr.cancel();fo.reset(),ve.down=ve.active=!1,ve.phase=pr.phase,ve.hand=null,ve.mode="idle",aA(),J0(n)}function mr(){hl()}function xf(){hl(),Ei.length=0,wd=!1,Sd=-1/0,Me("phonehands",{hands:[],consumed:new Set,scaleX:dl,scaleY:ul}),ye&&window.NativeXR.hands(!1),Me("hands",!1)}function ia(n){let e=dl*2*Z0,t=ul*2*vf;return{x:.5+n[0]/e,y:.5-n[1]/t}}var sA=250,Y0=1.6,j0=.06,ii={x:0,y:0},cl=0,_d=0;function Md(n=performance.now()){if(!ve.active)return{x:ve.x,y:ve.y};let e=n-cl;if(!(e>0)||e>sA)return{x:ve.x,y:ve.y};let t=e/1e3,i=s=>Math.max(-j0,Math.min(j0,s));return{x:Math.min(1,Math.max(0,ve.x+i(ii.x*t))),y:Math.min(1,Math.max(0,ve.y+i(ii.y*t)))}}function rA(n,e,t=0){let i=t>0&&_d>0?(t-_d)/1e9:cl>0?(e-cl)/1e3:-1;if(ve.active&&i>.004&&i<.3){let s=r=>Math.max(-Y0,Math.min(Y0,r));ii.x+=(s((n.x-ve.x)/i)-ii.x)*.35,ii.y+=(s((n.y-ve.y)/i)-ii.y)*.35,Math.hypot(ii.x,ii.y)<.12&&(ii.x=ii.y=0)}else i>=0&&i<=.004||(ii.x=ii.y=0);cl=e,_d=t>0?t:0}function aA(){ii.x=ii.y=0,cl=0,_d=0}ye&&(window.nextvrHands=(n,e=1,t=1)=>{var d;if(!wd)return;$0();let i=performance.now();if(dl=e,ul=t,Sd=i,K0=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),Ei.splice(0,Ei.length,...n.hands||[]),Me("handframe",{...n,hands:Ei}),window.__gorillaStereoOverlay){(d=window.__gorillaOnHands)==null||d.call(window,i);return}let r={hands:Ei,consumed:new Set,scaleX:dl,scaleY:ul};if(U0(r),Me("phonehands",r),r.blockFar){hl();return}let a=Ei.filter(u=>!r.consumed.has(u.id)),o=pr.down&&a.find(u=>u.id===pr.handId)||a.find(u=>u.pinching)||[...a].sort((u,h)=>h.palmWidth-u.palmWidth)[0];if(!o){hl();return}let l=ia(o.aim);rA(l,i,Number(n.timestampNs)||0),ve.x=l.x,ve.y=l.y,ve.active=!0,ve.hand=o;let c=o.predicted?[]:pr.update(o.id,o.pinching);c.includes("down")?fo.begin(o.id,l.x*_t.width,l.y*_t.height,i):c.includes("up")?fo.end():c.includes("cancel")&&fo.reset(),pr.down&&!o.predicted&&fo.sample(o.id,l.x*_t.width,l.y*_t.height,i),ve.mode=fo.mode,ve.down=pr.down,ve.phase=pr.phase,J0(c),ve.down&&Me("pinchsample",ve)});var yf=document.getElementById("overlay");yf.getContext("2d").clearRect(0,0,yf.width,yf.height);ll(()=>{var n,e;!window.__gorillaStereoOverlay&&ye&&gf!==!!w.handDraw&&(gf=!!w.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,gf)),Ei.length&&performance.now()-Sd>K0&&(Ei.length=0,hl(),Me("phonehands",{hands:[],consumed:new Set,scaleX:dl,scaleY:ul}))});var oA=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',android:'<path d="M7 8a5 5 0 0 1 10 0v1H7zM6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM4 11v5M20 11v5M9 19v2M15 19v2M8 4 6.5 2M16 4l1.5-2"/><path d="M10 6h.01M14 6h.01"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),lA=Object.freeze({gauge:'<path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 3-4"/><circle cx="12" cy="14" r="1"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',edit3:'<path d="M12 20h9M4 17.5l-.5 3.5 3.5-.5L19 8.5 15.5 5z"/><path d="m14 6.5 3.5 3.5"/>',zap:'<path d="M13 2 4 13h7l-1 9 10-12h-7z"/>',maximize:'<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',distance:'<path d="M6 12h12M9 9l-3 3 3 3M15 9l3 3-3 3"/>',curve:'<path d="M3 17c3-8 15-8 18 0"/><path d="M4 20h2M18 20h2"/>',appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',vision:'<path d="M4.2 8.6C4.7 6.5 6.4 5 8.6 5h6.8c2.2 0 3.9 1.5 4.4 3.6l.8 4.2c.3 1.8-1.1 3.5-3 3.5h-1.5c-.6 0-1.2-.2-1.7-.7l-1.3-1.1h-2.2l-1.3 1.1c-.5.5-1.1.7-1.7.7H6.4c-1.9 0-3.3-1.7-3-3.5z"/><path d="M3.6 9 1.8 8.2M20.4 9l1.8-.8M12 6.4v4.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="M20 12H5"/><path d="m12 19-7-7 7-7"/>',star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 8.9 8.3 12 2"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>',home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',hand:'<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-5.9-2.3L3.3 16.9a2 2 0 0 1 2.8-2.8L8 16"/>',shizuku:'<path d="M17 6.5a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h5a3 3 0 0 0 3-3"/><path d="M7 6.5h.01M17 17.5h.01"/>'}),cA=Object.freeze({...lA,...oA});function J(n,e="ui-icon"){let t=cA[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var sn=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),fl=(n,e,t)=>Math.max(e,Math.min(t,n)),$n=n=>Number.isFinite(n)?n:0;function _f(n,e=0,t=1.55,i=null){let s=$n(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,a=$n(n==null?void 0:n.z),o=Number.isFinite(i)?i:Math.hypot(s,a);o<1e-5&&(o=sn.minDistance,s=0,a=-o);let l=fl(Math.atan2(-s,-a),-sn.maxYaw,sn.maxYaw);o=fl(o,sn.minDistance,sn.maxDistance);let c=Math.max(0,$n(e)),d=t+sn.lowerEdgeFromEye+c,u=t+sn.upperEdgeFromEye-c;return r=d<=u?fl(r,d,u):t,{x:-Math.sin(l)*o,y:r,z:-Math.cos(l)*o}}function Q0(n,e,t=1200,i=800){return!n||!e?0:Math.hypot(($n(e.x)-$n(n.x))*t,($n(e.y)-$n(n.y))*i)}function wf(n,e,t,i){return Q0(n,e,t,i)>=sn.dragActivationPx}function ey(n,e,t,i){return Q0(n,e,t,i)>=sn.resizeActivationPx}function Sf(n,e){let t=$n(n==null?void 0:n.x),i=$n(n==null?void 0:n.y),s=$n(n==null?void 0:n.z),r=$n(e==null?void 0:e.x)-t,a=$n(e==null?void 0:e.y)-i,o=$n(e==null?void 0:e.z)-s,l=Math.hypot(r,a,o);if(!Number.isFinite(l)||l<=sn.motionDeadZone)return{x:t,y:i,z:s};let d=Math.min(l,sn.maxMotionStep)/l;return{x:t+r*d,y:i+a*d,z:s+o*d}}var dA=Object.freeze({maxAngle:1.15});function pl(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(dA.maxAngle,e))}function Ad(n,e){let t=pl(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function Ed(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function gr(n,e=sn.maxResize){let t=fl($n(e),sn.minResize,sn.maxResize);return fl(Number.isFinite(n)?n:1,sn.minResize,t)}function ty(n,e,t=1.55){let i=Math.max(1e-5,$n(e)),s=Math.min(n-(t+sn.lowerEdgeFromEye),t+sn.upperEdgeFromEye-n);return gr(s/i)}function ny(n,e,t,i){return!(e>1)||!Number.isFinite(t)?gr(n,i):gr(n*t/e,i)}function iy(n,e){let t=gr(n),s=gr(e)-t;return Math.abs(s)<.004?t:gr(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function sy(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let a=0;a<i;a++)r.push({angle:a===0?0:a%2?e:-e,row:0});for(let a=0;a<s;a++)r.push({angle:s===1?0:a===0?-e/2:e/2,row:1});return r}var ry=1.22;function Mf(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function ay({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=Mf(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function oy(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var ml=n=>Number.isFinite(n)?n:0,ly=(n,e,t)=>Math.max(e,Math.min(t,n));function po(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=ml(n==null?void 0:n.x),a=ml(n==null?void 0:n.y),o=ml(n==null?void 0:n.z),l=a-s,c=Math.hypot(r,o),d=Math.hypot(r,l,o)||1e-6,u=Math.max(0,ml(e)),h=Math.max(0,ml(t));return{x:r,y:a,z:o,yaw:Math.atan2(-r,-o),pitch:c>1e-6?Math.atan2(l,c):l>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(u,c||1e-6),halfPitch:Math.atan2(h,d)}}function cy(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return po(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function Af(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return po({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function uA(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,a=n.pitch-n.halfPitch,o=n.pitch+n.halfPitch,l=e.pitch-e.halfPitch,c=e.pitch+e.halfPitch,d=Math.min(i,r)-Math.max(t,s),u=Math.min(o,c)-Math.max(a,l);return d>0&&u>0?-Math.sqrt(d*u):Math.hypot(Math.max(-d,0),Math.max(-u,0))}function Td(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,a=Number.isFinite(t.gap)?t.gap:.03,o=n.box||po(n,n.hw||.5,n.hh||.35),l=0,c=0;for(let h of e){let p=uA(o,h);if(p<0){let g=p*p;l+=26e3*g+1e3,g>c&&(c=g)}else if(p<a){let g=a-p;l+=900*g*g}}let d=Math.hypot(o.x,o.z)||1e-6;l+=26*Math.abs(o.yaw),Math.abs(o.yaw)>r&&(l+=26*(Math.abs(o.yaw)-r)*40),d>s&&(l+=34*(d-s));let u=Number.isFinite(t.lift)?t.lift:o.y;return l+=Math.abs(o.y-u)*12,{score:l,overlap:c,yaw:o.yaw,radius:d}}function hA({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:a=3,ringStep:o=.16,rows:l=2,topRowStep:c=1.22}={}){let d=[],u=Number.isFinite(e)?e:n,h=[0];for(let p=1;p<=6;p++){let g=p*t;if(g>r+1e-9)break;h.push(g,-g)}for(let p=0;p<l;p++){let g=p===0?u:u+s*2*(c-1)+s;for(let y=0;y<a;y++){let f=i+y*o;for(let m of h){let x=ly(m,-r,r);d.push({x:Math.sin(x)*f,y:g,z:-Math.cos(x)*f,angle:x,row:p,radius:f})}}}return d}function dy({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,lift:l=null,rings:c=3,ringStep:d=.16,rows:u=2,gap:h=.03,topRowStep:p=1.22,improvement:g=1e-6}={}){let y={eye:t,desiredDistance:s,maxYaw:o,gap:h,lift:l??t},f=hA({eye:t,lift:l??t,step:i,distance:s,halfHeight:a,outerLimit:o,rings:c,ringStep:d,rows:u,topRowStep:p}),m=null;for(let x of f){let v=po(x,r,a),{score:M,overlap:E}=Td({...x,box:v},n,y),T={x:x.x,y:x.y,z:x.z,angle:x.angle,row:x.row,radius:x.radius,score:M,overlap:E,box:v};(!m||T.score<m.score-g)&&(m=T)}if(e){let x=po(e,r,a),{score:v,overlap:M}=Td({...e,box:x},n,y),E={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:v,overlap:M,box:x,desired:!0};(!m||E.score<=m.score+g)&&(m=E)}return m}function uy({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,gap:l=.03,maxShift:c=3}={}){let d={eye:t,desiredDistance:s,maxYaw:o,gap:l,lift:n.y},u=(f,m,x)=>po({x:f,y:m,z:x},r,a),h=Td({...n,box:u(n.x,n.y,n.z)},e,d);if(h.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:h.score,moved:!1,overlap:0};let p={x:n.x,y:n.y,z:n.z,score:h.score,overlap:h.overlap},g=Math.hypot(n.x,n.z)||s,y=Math.atan2(-n.x,-n.z);for(let f=1;f<=c;f++)for(let m of[1,-1]){let x=ly(y+m*f*i,-o,o),v=-Math.sin(x)*g,M=-Math.cos(x)*g,{score:E,overlap:T}=Td({x:v,y:n.y,z:M,box:u(v,n.y,M)},e,d);E<p.score&&(p={x:v,y:n.y,z:M,score:E,overlap:T})}return{...p,moved:p.x!==n.x||p.z!==n.z}}var Rd={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3};function Cd(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}var mo=class{constructor({armMs:e=Rd.armMs,graceMs:t=Rd.graceMs,holdMs:i=Rd.holdMs,progressHoldMs:s=Rd.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,a=s&&r;if(this.open){if(a)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let o=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:o,active:!1}}if(a){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let o=i-this.startedAt;return o>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,o/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var wt=.00105,he=[],ua=null,Yn={y:Gt-.6,z:-1.7,h:.12};function Ty(n=null){let e=[];for(let t of he)t===n||t.hidden||t.onboarding||e.push(cy(t));if(Gi&&yt.offsetWidth>0){let t=Af(Ci);t&&e.push(t)}if(st&&On&&!Rl&&st.element.offsetWidth>0){let t=Af(On);t&&e.push(t)}return e}var Nf=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:a=!1,chrome:o=!0,resizable:l=!0}){this.onboarding=a,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new D,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=pl(a?0:w.win360?w.win360K:0),this.curveRadius=Ad(s,this.curve);let c=document.createElement("div");c.className="win-shell",c.dataset.windowId=e,c.dataset.resizeScale="1",c.style.width=s+"px";let d=document.createElement("div");d.className="win",d.style.width=s+"px",d.style.height=r+"px",d.innerHTML=`<div class="win-bar">
        <button class="win-new-tab-btn" data-win-new-tab type="button" title="Criar nova guia"><span class="win-new-tab-plus">+</span><span>Criar nova guia</span></button>
        <div class="win-grip" style="display:none"></div><div class="win-title" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden"></div>
        <div class="win-top-right-acts">
          <button class="win-btn" data-act="pin" aria-label="${k("repin")}" title="${k("repin")}">${J("crosshair")}</button>
          <button class="win-btn wide fold-btn" data-act="curve" aria-label="360\xB0" title="Dobra / 360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
          <button class="win-btn close" data-act="close" aria-label="${k("close")}" title="${k("close")}">${J("x")}</button>
        </div>
      </div><div class="win-body"></div>`,d.querySelector(".win-title").textContent=t,d.querySelector(".win-body").appendChild(i),d.addEventListener("pointerdown",()=>Jt(this),!0),d.querySelector(".win-bar").addEventListener("click",x=>{var E;if(x.target.closest("[data-win-new-tab]")){(E=window.nextvrOpenBrowserOption)==null||E.call(window,"new-tab");return}let M=x.target.closest("[data-act]");M&&(M.dataset.act==="close"?ht(this):M.dataset.act==="curve"?this.setCurve(this.curve>0?0:pl(w.win360K)):hy(this))}),d.addEventListener("click",x=>{var M;let v=x.target.closest('[data-act="pin"]');v&&!((M=d.querySelector(".win-bar"))!=null&&M.contains(v))&&hy(this)});let u=document.createElement("div");u.className="win-handle",u.title=k("moveWindow"),u.setAttribute("aria-label",k("moveWindow"));let h=document.createElement("div");h.className="win-resize",h.hidden=!l,h.title=k("resize"),h.setAttribute("aria-label",k("resize")),h.innerHTML=J("move");let p=document.createElement("div");p.className="win-cinema-bar",p.hidden=!(this.curve>0&&!a),p.innerHTML=`<span class="win-cinema-title">${t}</span><div class="win-cinema-acts"><button type="button" class="win-cinema-btn" data-cinema-act="min" title="Minimizar" aria-label="Minimizar">\u2014</button><span class="win-cinema-dot" aria-hidden="true">\u2022</span><button type="button" class="win-cinema-btn win-cinema-expand" data-cinema-act="exit-360" title="Sair do modo 360" aria-label="Sair do modo 360">\u26F6</button></div>`,p.addEventListener("click",x=>{let v=x.target.closest("[data-cinema-act]");v&&(x.stopPropagation(),v.dataset.cinemaAct==="exit-360"?this.setCurve(0):v.dataset.cinemaAct==="min"&&ht(this))});let g=document.createElement("div");g.className="win-brightness-bar",g.hidden=a||e==="left-quick-menu";let y=Math.max(10,Math.min(100,Number(w.brightness??80)||80));g.innerHTML=`<span class="win-bri-icon">${J("sun")}</span><input type="range" class="win-bri-range" data-win-brightness min="10" max="100" step="1" value="${y}" style="--bri-fill:${y}%" aria-label="Brilho"/>`;let f=g.querySelector("[data-win-brightness]");if(f){let x=v=>{v.stopPropagation(),Cy(Number(f.value))};f.addEventListener("input",x),f.addEventListener("change",x)}let m=document.createElement("div");if(m.className="win-predefined-slots",m.hidden=a||e==="left-quick-menu",m.innerHTML=`
      <button type="button" class="win-predefined-slot win-predefined-slot--left" data-predefined-slot="left" title=" encaixar \xE0 esquerda" aria-label="Telinha pr\xE9-definida esquerda">
        <span class="win-predefined-slot-frame"></span>
      </button>
      <button type="button" class="win-predefined-slot win-predefined-slot--center" data-predefined-slot="center" title="Encaixar ao centro" aria-label="Telinha pr\xE9-definida central">
        <span class="win-predefined-slot-frame"></span>
      </button>
      <button type="button" class="win-predefined-slot win-predefined-slot--right" data-predefined-slot="right" title="Encaixar \xE0 direita" aria-label="Telinha pr\xE9-definida direita">
        <span class="win-predefined-slot-frame"></span>
      </button>
    `,m.addEventListener("click",x=>{let v=x.target.closest("[data-predefined-slot]");v&&(x.stopPropagation(),Ly(this,v.dataset.predefinedSlot))}),c.append(d,u,h,p,g,m),this.el=d,this.shell=c,this.handle=u,this.resizeHandle=h,this.cinemaBar=p,this.brightnessBar=g,this.predefinedSlotsBar=m,c.dataset.curve=String(this.curve),this.curve>0&&!a&&c.classList.add("cinema-360"),(a||!o)&&(d.querySelector(".win-bar").hidden=!0),this.obj=new Qr(c),this.obj.scale.setScalar(wt*(this.onboarding?ti.welcomeScale:w.winScale)),Tt.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=Ef(s*wt,r*wt,this,this.hitSegments),this.bendHit(),this.grab=Ef(260*wt,90*wt,this),this.grab.userData.isHandle=!0,this.resizeHit=Ef(80*wt,80*wt,this),this.resizeHit.userData.isResize=!0,!ye){let x=v=>({x:v.clientX/_t.width,y:v.clientY/_t.height});u.addEventListener("pointerdown",v=>{v.stopPropagation();let M=x(v);Gf(this,M.x,M.y,"desktop"),u.setPointerCapture(v.pointerId)}),u.addEventListener("pointermove",v=>{if(lt.win===this){let M=x(v);Wf(M.x,M.y)}}),u.addEventListener("pointerup",as),u.addEventListener("pointercancel",as),h.addEventListener("pointerdown",v=>{v.stopPropagation();let M=x(v);ky(this,M.x,M.y),h.setPointerCapture(v.pointerId)}),h.addEventListener("pointermove",v=>{if(Ot.win===this){let M=x(v);Oy(M.x,M.y)}}),h.addEventListener("pointerup",Mr),h.addEventListener("pointercancel",Mr)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new Nn(this.w*wt,this.h*wt,i,1),this.hitSegments=i,this.curveRadius=Ad(this.w,this.curve),this.bendHit(),this.apply(),Wi(),Me("wins",he)}setCurve(e){var r,a,o,l,c,d,u,h;this.curve=pl(e),this.curveRadius=Ad(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.curve>0&&!this.onboarding;this.shell.classList.toggle("cinema-360",t),this.cinemaBar&&(this.cinemaBar.hidden=!t);let i=this.el.querySelector('[data-act="curve"]');i&&i.setAttribute("aria-pressed",String(this.curve>0)),t?(document.documentElement.dataset.cinema360="1",(a=(r=window.NativeXR)==null?void 0:r.env)==null||a.call(r,"dark")):he.some(p=>p!==this&&!p.hidden&&!p.onboarding&&p.curve>0)||(delete document.documentElement.dataset.cinema360,document.documentElement.dataset.robloxBlackEnv!=="1"&&((l=(o=window.NativeXR)==null?void 0:o.env)==null||l.call(o,w.env||"passthrough")));let s=this.curve>0?32:1;this.hitSegments!==s&&(this.hit.geometry.dispose(),this.hit.geometry=new Nn(this.w*wt,this.h*wt,s,1),this.hitSegments=s),this.bendHit(),this.apply(),(d=(c=te).invalidate)==null||d.call(c),(h=(u=te).render)==null||h.call(u,Ae,fe)}bulge(e){return Ed(e,this.curveRadius)*wt}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,Ed(e.getX(t)/wt,this.curveRadius)*wt);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*w.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2(Gt-e.position.y,i)*w.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?ti.welcomeScale:w.winScale)*this.resizeScale;e.scale.setScalar(wt*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let a=(this.h/2+34)*wt*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-a),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation);let o=28;this.resizeHit.translateX((this.w/2+o)*wt*r),this.resizeHit.translateY(-(this.h/2+o)*wt*r),this.resizeHit.translateZ(this.bulge(this.w/2)+.003),this.resizeHit.scale.setScalar(r),e.updateMatrixWorld(!0),this.hit.updateMatrixWorld(!0),this.grab.updateMatrixWorld(!0),this.resizeHit.updateMatrixWorld(!0)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&lt.win===this&&as(),t&&Ot.win===this&&Mr(),(s=(i=te).invalidate)==null||s.call(i))}};function Ef(n,e,t,i=1){let s=new Et(new Nn(n,e,i,1),new hn({visible:!1}));return s.userData.win=t,Tt.add(s),s}function Wi(){let n=he.some(o=>!o.onboarding&&!o.hidden&&o.id!=="left-quick-menu");for(let o of he)o.onboarding&&(o.id==="spatial-launcher"?(n?(o.resizeScale=.88,o.target.set(0,Gt-.22,-.84)):(o.resizeScale=1.24,o.target.set(0,Gt-.01,-.84)),o.apply()):o.target.set(0,Gt,-ti.welcomeDistance));let e=he.filter(o=>o.pinned&&!o.onboarding&&!o.hidden),t=e.length;if(!t)return;let i=ye?w.winDist:-Yn.z+.5+(w.winDist-2.2),s=Math.max(...e.map(o=>o.w*o.resizeScale))*wt*w.winScale,r=ye?ay({width:s,dist:i,gap:.5,outerLimit:sn.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));if(sy(t,r).forEach(({angle:o,row:l},c)=>{let d=e[c],u=d.h*wt*w.winScale*d.resizeScale,h=Yn.y+Yn.h/2+.14+u/2,p=Math.sin(o)*i,g=-Math.cos(o)*i,y=l===0?h:Math.min(h+u*2*(ry-1)+u,Gt+sn.upperEdgeFromEye-u);d.target.set(p,y,g)}),!ye)return;let a=Math.min(r,Mf(s,i)*.6);for(let o of e){let l=o.w*wt*w.winScale*o.resizeScale/2,c=o.h*wt*w.winScale*o.resizeScale/2,d=uy({desired:{x:o.target.x,y:o.target.y,z:o.target.z},occupied:Ty(o),eye:Gt,step:a,distance:i,halfWidth:l,halfHeight:c,outerLimit:sn.maxYaw-.06,maxShift:4});o.target.set(d.x,d.y,d.z)}}Ge("recenter",Wi);Ge("resize",Wi);function Qt(n){var s,r;let e=he.find(a=>a.id===n.id);if(e)return Jt(e),e;let t=he.filter(a=>!a.onboarding&&!a.hidden&&a.id!=="left-quick-menu");if(n.id!=="left-quick-menu"&&t.length>=5){let a=oy(t);a&&(Je(`${k("arcFull")}: ${a.title}`),ht(a))}let i=new Nf(n);if(he.push(i),Wi(),Jt(i),i.obj.position.copy(i.target),n.id==="left-quick-menu"){i.pinned=!1,i.shell.classList.add("free","lh-floating-win-shell");let a=n.at||{x:-.22,y:Gt-.04,z:-1.42};i.target.set(a.x,a.y,a.z),i.obj.position.copy(i.target),i.resizeHandle.hidden=!0,i.cinemaBar&&(i.cinemaBar.hidden=!0),i.brightnessBar&&(i.brightnessBar.hidden=!0),i.predefinedSlotsBar&&(i.predefinedSlotsBar.hidden=!0)}else n.free&&pA(i,n.at);return i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0,i.cinemaBar&&(i.cinemaBar.hidden=!0),i.brightnessBar&&(i.brightnessBar.hidden=!0),i.predefinedSlotsBar&&(i.predefinedSlotsBar.hidden=!0)),i.apply(),Ae.updateMatrixWorld(!0),(r=(s=te).invalidate)==null||r.call(s),Me("wins",he),i}function pA(n,e=null){n.pinned=!1;let t=n.w*wt*w.winScale*n.resizeScale/2,i=n.h*wt*w.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:Yn.y+Yn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-w.winDist)||w.winDist,a=dy({occupied:Ty(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-w.winDist},eye:Gt,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:sn.maxYaw-.06,lift:s,rings:3,rows:1});a&&n.target.set(a.x,a.y,a.z)}function ht(n){var s,r,a,o,l;if(typeof n=="string"&&(n=he.find(c=>c.id===n)),!n)return;let e=he.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);xt&&(xt.nativeId?xt.nativeId===i:n.el.contains(xt))&&pi(!1),wl&&n.el.contains(wl)&&(wl=null),lt.win===n&&as(),Ot.win===n&&Mr(),he.splice(e,1),(s=n._cleanupQB)==null||s.call(n),Tt.remove(n.obj),Tt.remove(n.hit),Tt.remove(n.grab),Tt.remove(n.resizeHit),n.shell.remove(),ua===n&&(ua=he[he.length-1]||null),he.some(c=>!c.hidden&&!c.onboarding&&c.curve>0)||(delete document.documentElement.dataset.cinema360,document.documentElement.dataset.robloxBlackEnv!=="1"&&((a=(r=window.NativeXR)==null?void 0:r.env)==null||a.call(r,w.env||"passthrough"))),Wi(),(l=(o=te).invalidate)==null||l.call(o),Me("wins",he)}function Jt(n){ua!==n&&(ua=n,n.lastFocus=performance.now(),he.forEach(e=>e.el.classList.toggle("focus",e===ua)))}function hy(n){var e,t,i,s;n.pinned=!0,n.shell.classList.remove("free"),Wi(),n.obj.position.copy(n.target),n.apply(),(t=(e=te).invalidate)==null||t.call(e),(s=(i=te).render)==null||s.call(i,Ae,fe)}var El=()=>ua,mi=new Jo,Dd=new je,lt={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},Ot={win:null,start:null,active:!1,startScale:1,startDistance:1},pn={source:null,start:null,active:!1,plane:null,anchor:null},fi=document.createElement("div");fi.className="win-drop-slot";fi.dataset.windowId="drop-slot";fi.hidden=!0;fi.innerHTML='<div class="win-drop-slot-inner"><span class="win-drop-slot-badge"></span></div>';var xr=new Qr(fi);xr.visible=!1;Tt.add(xr);var kd=null,Od=!1;function Ry(n){let e=ye?w.winDist:-Yn.z+.5+(w.winDist-2.2),t=n.h*wt*w.winScale*n.resizeScale,i=Yn.y+Yn.h/2+.14+t/2,s=Ar||0,r=.56;return[0,-r,r].map(a=>{let o=s+a;return new D(Math.sin(o)*e,i,-Math.cos(o)*e)})}function Cy(n){var i,s,r,a,o,l;let e=Math.max(10,Math.min(100,Math.round(Number(n)||80)));w.brightness=e,Ue(w);let t=(.38+e/100*.62).toFixed(3);document.documentElement.style.setProperty("--nextvr-brightness",t),document.documentElement.dataset.brightnessPercent=String(e);for(let c of document.querySelectorAll("[data-win-brightness]"))String(c.value)!==String(e)&&(c.value=String(e)),c.style.setProperty("--bri-fill",`${e}%`);for(let c of document.querySelectorAll('[data-lh-slider="brightness"], [data-q-range="brightness"]'))String(c.value)!==String(e)&&(c.value=String(e)),c.style.setProperty("--fill",`${e}%`);return ye&&((s=(i=window.NativeXR)==null?void 0:i.setBrightnessPercent)==null||s.call(i,e),(a=(r=window.NativeXR)==null?void 0:r.setBrightness)==null||a.call(r,e)),Me("brightness",e),(l=(o=te).invalidate)==null||l.call(o),e}var mA=()=>Math.max(10,Math.min(100,Number(w.brightness??80)||80));function Ly(n,e="center"){var a,o,l,c;let t=typeof n=="string"?he.find(d=>d.id===n):n||ua||he.find(d=>!d.onboarding&&!d.hidden);if(!t||t.onboarding)return null;let i=Ry(t),s=e==="left"||e===-1?1:e==="right"||e===1?2:0,r=i[s]||i[0];return t.pinned=!1,t.slotKey=s===1?"left":s===2?"right":"center",t.shell.dataset.predefinedSlot=t.slotKey,t.shell.classList.add("free"),t.target.copy(r),t.obj.position.copy(t.target),t.apply(),Ae.updateMatrixWorld(!0),(o=(a=te).invalidate)==null||o.call(a),(c=(l=te).render)==null||c.call(l,Ae,fe),{x:t.obj.position.x,y:t.obj.position.y,z:t.obj.position.z,slot:t.slotKey}}typeof window<"u"&&(window.nextvrSetScreenBrightness=Cy,window.nextvrGetScreenBrightness=mA,window.nextvrSnapWindowToSlot=Ly);function Py(n){var g;if(!n||w.spatialLauncher||w.dockSnapSlot===0){Iy();return}let e=Ry(n),t=he.filter(y=>y!==n&&!y.onboarding&&!y.hidden),i=e.filter(y=>!t.some(f=>f.obj.position.distanceTo(y)<.22)),s=i.length?i:e,r=s[0],a=n.obj.position.distanceTo(s[0]);for(let y=1;y<s.length;y++){let f=n.obj.position.distanceTo(s[y]);f<a&&(r=s[y],a=f)}kd=r;let o=(g=lt.anchor)!=null&&g.center?Tt.worldToLocal(lt.anchor.center.clone()):n.obj.position;Od=n.obj.position.distanceTo(o)>.04&&a<=.16,fi.style.width=n.w+"px",fi.style.height=n.h+"px";let c=fi.querySelector(".win-drop-slot-badge");c&&(c.textContent=k("dockSnapHint")),fi.classList.toggle("is-ready",Od),fi.hidden=!1,xr.position.copy(r);let d=Math.atan2(-r.x,-r.z)*w.winCurve,u=Math.hypot(r.x,r.z)||.001,h=Math.atan2(Gt-r.y,u)*w.winTilt*-1;xr.rotation.set(h,d,0,"YXZ");let p=w.winScale*n.resizeScale;xr.scale.setScalar(wt*p),xr.visible=!0}function Iy(){var n,e;kd=null,Od=!1,(xr.visible||!fi.hidden)&&(xr.visible=!1,fi.hidden=!0,fi.classList.remove("is-ready"),(e=(n=te).invalidate)==null||e.call(n))}function pa(n,e,t=mi){return fe.updateMatrixWorld(!0),Tt.updateMatrixWorld(!0),Dd.set(n*2-1,1-e*2),t.setFromCamera(Dd,fe),t}function gA(n){return n.h*wt*w.winScale*n.resizeScale/2}function yA(n,e,t=null){let i=_f(e,gA(n),Gt,t);return new D(i.x,i.y,i.z)}function Gf(n,e,t,i="handle",s=null){if(n.onboarding||Ot.win)return!1;lt.win&&as(),Jt(n),pa(e,t);let r=n.obj.getWorldPosition(new D),a=new ci().setFromNormalAndCoplanarPoint(mi.ray.direction.clone(),r),o=mi.ray.intersectPlane(a,new D);if(!o)return!1;let l=Tt.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(lt,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:a,anchor:{hit:o.clone(),center:r.clone(),radius:c,applied:new D}}),!0}function vA(){let n=lt.win;!n||lt.active||(lt.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),Wi(),Py(n))}function Wf(n,e){let t=lt.win;if(!t)return!1;pa(n,e);let i=mi.ray.intersectPlane(lt.plane,new D);if(!i)return!1;if(!lt.active){if(!wf(lt.start,{x:n,y:e},_t.width,_t.height))return!1;vA()}let s=lt.anchor,r=i.clone().sub(s.hit);s.applied.copy(Sf(s.applied,r));let a=s.center.clone().add(s.applied),o=yA(t,Tt.worldToLocal(a),s.radius);return t.target.copy(o),t.obj.position.copy(t.target),Py(t),!0}function as(){let n=lt.win;n&&(Od&&kd&&(n.target.copy(kd),n.obj.position.copy(n.target),n.apply()),n.shell.classList.remove("moving")),Iy(),Object.assign(lt,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function Ny(n,e,t="pinch"){if(!Gi||lt.win||Ot.win)return!1;pn.start&&zs(),pa(n,e);let i=kn.getWorldPosition(new D),s=new ci().setFromNormalAndCoplanarPoint(mi.ray.direction.clone(),i),r=mi.ray.intersectPlane(s,new D);return r?(Object.assign(pn,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new D}}),yt.classList.add("grab-armed"),zt.setAttribute("aria-pressed","true"),!0):!1}function bA(){!pn.start||pn.active||(pn.active=!0,yt.classList.remove("grab-armed"),yt.classList.add("moving"))}function qf(n,e){if(!pn.start)return!1;pa(n,e);let t=mi.ray.intersectPlane(pn.plane,new D);if(!t)return!1;if(!pn.active){if(!wf(pn.start,{x:n,y:e},_t.width,_t.height))return!1;bA()}let i=pn.anchor,s=t.clone().sub(i.hit);i.applied.copy(Sf(i.applied,s));let r=i.center.clone().add(i.applied),a=Tt.worldToLocal(r),o=_f(a,Yn.h/2,Gt),l=Math.max(Gt-.55,Math.min(Gt-.08,o.y));return la=new D(o.x,l,o.z),Ar=Math.atan2(-o.x,-o.z),xo(),!0}function zs(){yt==null||yt.classList.remove("grab-armed","moving"),zt==null||zt.setAttribute("aria-pressed","false"),Object.assign(pn,{source:null,start:null,active:!1,plane:null,anchor:null})}function Dy(n,e,t){fe.updateMatrixWorld(!0),Tt.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new D).project(fe),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*_t.width,(t-r)*_t.height)}function ky(n,e,t){return n.onboarding||lt.win?!1:(Ot.win&&Mr(),Jt(n),Object.assign(Ot,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,Dy(n,e,t))}),!0)}function Oy(n,e){let t=Ot.win;if(!t)return!1;if(!Ot.active){if(!ey(Ot.start,{x:n,y:e},_t.width,_t.height))return!1;Ot.active=!0,t.shell.classList.add("resizing")}let i=t.h*wt*w.winScale/2,s=Math.max(Ot.startScale,ty(t.obj.position.y,i,Gt)),r=ny(Ot.startScale,Ot.startDistance,Dy(t,n,e),s);return t.resizeScale=gr(iy(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function Mr(){Ot.win&&Ot.win.shell.classList.remove("resizing"),Object.assign(Ot,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function jn(n,e){pa(n,e);let t=[];for(let o of he)o.hidden||(o.onboarding||t.push(o.resizeHit,o.grab),t.push(o.hit));let i=mi.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),a=i.object.geometry.parameters;return{win:s,u:r.x/a.width+.5,v:.5-r.y/a.height,distance:i.distance}}var Uy=jn;window.windowHitAt=jn;var ut=null,an=null,xA=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function _A(n,e,t,i,s){var l,c;let r=s?xA(s):null;e===0&&(n.target=r,n.activation=r);let a=n.target||r;if(!a)return;let o=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";a.dispatchEvent(new PointerEvent(o,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function yl(n,e,t=n.x,i=n.y,s=null){var r,a;if(n.id==="shell"&&((r=n.win)!=null&&r.onboarding))_A(n,e,t,i,s);else if(window.NativeXR.handTouch(n.id,e,t,i),e===1&&s){let o=(a=s.closest)==null?void 0:a.call(s,"[data-qb-url],[data-qb-act]");o&&o.click()}}function fa(n,e,t){let i=n.getBoundingClientRect(),s=i.left+e*(i.width||n.offsetWidth),r=i.top+t*(i.height||n.offsetHeight),a=document.elementFromPoint(s,r);if(a&&n.contains(a))return a;let o=null,l=c=>{for(let d of c.children){let u=d.getBoundingClientRect();u.width>0&&u.height>0&&s>=u.left&&s<=u.right&&r>=u.top&&r<=u.bottom&&(o=d),l(d)}};return l(n),o||n}function Fy(n,e){var d,u;let t=(d=e==null?void 0:e.closest)==null?void 0:d.call(e,".lh-vslider-pill");if(!t||!((u=n==null?void 0:n.win)!=null&&u.el))return!1;let i=t.querySelector("input[data-lh-slider]");if(!i)return!1;let s=zy(t,n.win.el),r=n.v*n.win.el.offsetHeight,a=Math.max(0,Math.min(1,1-(r-s.t)/Math.max(1,s.b-s.t))),o=Number.isFinite(Number(i.min))?Number(i.min):0,l=Number.isFinite(Number(i.max))?Number(i.max):100,c=Math.round(o+a*(l-o));return i.value=String(c),i.dispatchEvent(new Event("input",{bubbles:!0})),i.dispatchEvent(new Event("change",{bubbles:!0})),!0}function os(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),a=document.elementFromPoint(r.left+i,r.top+s)||Xf(t,i,s);if((e===0||e===2)&&Fy(n,a),e===0&&!(a!=null&&a.closest("[data-native-browser],[data-native-app]"))){let g=NA(a);g?pi(!0,g):pi(!1)}if(a==null?void 0:a.closest("[data-native-xr]")){ut=null;return}let l=a==null?void 0:a.closest("[data-native-app]");if(l){let g=l.getBoundingClientRect(),y=af(l.offsetWidth,l.offsetHeight,+(l.dataset.aspect||0),r.left+i-g.left,r.top+s-g.top);if(e===2&&!y&&!ut)return;let f="app:"+l.dataset.nativeApp;if(ut&&ut.id!==f&&(yl(ut,3),ut=null),e===0){if(!y)return;ut={id:f,win:n.win,x:y.u,y:y.v}}ut&&ut.id===f&&(y||e!==2)&&(y&&(ut.x=y.u,ut.y=y.v),yl(ut,e,ut.x,ut.y)),(e===1||e===3)&&(ut=null);return}let c=a==null?void 0:a.closest("[data-native-browser]"),d=c==null?void 0:c.getBoundingClientRect(),u=c?c.dataset.nativeBrowser:"shell",h=r.left+i-((d==null?void 0:d.left)||0),p=r.top+s-((d==null?void 0:d.top)||0);ut&&ut.id!==u&&(yl(ut,3),ut=null,e!==0)||(e===0&&(ut={id:u,win:n.win,x:h,y:p}),ut&&ut.id===u&&(ut.x=h,ut.y=p,yl(ut,e,h,p,a)),(e===1||e===3)&&(ut=null))}function By(){ut&&yl(ut,3),ut=null,an=null,as(),Mr(),zs()}Ge("pinchcancel",By);function _r(n,e){if(ye){os(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=Xf(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function Xf(n,e,t){let i=null,s=r=>{for(let a of r.children){let o=zy(a,n);e>=o.l&&e<=o.r&&t>=o.t&&t<=o.b&&(i=a,s(a))}};return s(n),i||n}function zy(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}var bl=null,Ud=!1,Ri=null,Fd=!1,Hy=new Map;function $f(){bl&&(clearTimeout(bl),bl=null)}var wA='button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-nav],[data-spatial-act],[data-spatial-env],[data-store-launch],[data-install-gorilla],[data-launch-gorilla],.lib-tile,[data-qb-url],[data-fist-act],[data-fist-env],[data-entry-act],[data-entry-tab],[data-entry-env],[data-cinema-act],[data-win-brightness],[data-predefined-slot],[data-lh-app],[data-lh-act],[data-lh-slider],[data-q-range],[data-win-new-tab]';function SA(n,e){var r,a;if(typeof document<"u"&&Number.isFinite(n)&&Number.isFinite(e)){let o=document.getElementById("left-hand-quick-menu");if(o&&!o.hidden){let l=document.elementFromPoint(n*_t.width,e*_t.height),c=(r=l==null?void 0:l.closest)==null?void 0:r.call(l,"[data-lh-app],[data-lh-act],[data-lh-slider]");if(c)return{x:n,y:e,el:c,isHud:!0}}}let t=Hs(n,e);if(t){let o=t.popupOpt?t.el:Tn[t.i];return{x:n,y:e,el:o||null,isDock:!0}}if(Of(n,e))return{x:n,y:e,el:null,isDockGrab:!0};let s=jn(n,e);if(s){if(s.handle||s.resize)return{x:n,y:e,el:null,hit:s,isWinControl:!0};let o=fa(s.win.el,s.u,s.v),l=((a=o==null?void 0:o.closest)==null?void 0:a.call(o,wA))||null;if(l)return{x:n,y:e,el:l,hit:s}}return null}function MA(n=null){if(w.pinchOnApp===0)return null;let e=n||ve.hand,t=e==null?void 0:e.points;if(!t||t.length<26||Math.hypot(t[18]-t[15],t[19]-t[16])<=.008||Math.hypot(t[24]-t[18],t[25]-t[19])<=.008)return null;let i=Number(Us==null?void 0:Us.scaleX)||1,s=Number(Us==null?void 0:Us.scaleY)||1,r=[];Number.isFinite(t[12])&&Number.isFinite(t[13])&&Number.isFinite(t[24])&&Number.isFinite(t[25])&&r.push([((t[12]+t[24])*.5-.5)*i+.5,((t[13]+t[25])*.5-.5)*s+.5]),Number.isFinite(t[24])&&Number.isFinite(t[25])&&r.push([(t[24]-.5)*i+.5,(t[25]-.5)*s+.5]),t.length>=30&&Number.isFinite(t[15])&&Number.isFinite(t[16])&&Number.isFinite(t[27])&&Number.isFinite(t[28])&&r.push([((t[15]+t[27])*.5-.5)*i+.5,((t[16]+t[28])*.5-.5)*s+.5]),Array.isArray(e.palm)&&e.palm.length>=2&&r.push([(e.palm[0]-.5)*i+.5,(e.palm[1]-.5)*s+.5]);let a=[[0,0],[0,-.016],[0,.016],[-.016,0],[.016,0]];for(let[l,c]of r)for(let[d,u]of a){let h=SA(l+d,c+u);if(h)return h}let o=Hy.get((e==null?void 0:e.id)||"right");return o&&performance.now()-o.at<=380&&o.el&&document.body.contains(o.el)?{x:o.x,y:o.y,el:o.el}:null}var Bd=null;function AA(n,e,t,i,s){var l,c;if(!(n!=null&&n.el))return!1;let a=fa(n.el,e,t),o=!1;for(;a&&a!==document.body;){if(a instanceof HTMLElement){let d=a.scrollHeight>a.clientHeight+2,u=a.scrollWidth>a.clientWidth+2;if(d&&Math.abs(s)>1e-4&&(a.scrollTop-=s*1650,o=!0),u&&Math.abs(i)>1e-4&&(a.scrollLeft-=i*1650,o=!0),o)break}if(a===n.el)break;a=a.parentElement}if(!o){let d=n.el.querySelector("[data-spatial-scroll-track], .spatial-honeycomb, .st-quest-main, .st-main, .lib-grid, .set-body, .win-body");d instanceof HTMLElement&&(d.scrollHeight>d.clientHeight+2&&Math.abs(s)>1e-4&&(d.scrollTop-=s*1650,o=!0),d.scrollWidth>d.clientWidth+2&&Math.abs(i)>1e-4&&(d.scrollLeft-=i*1650,o=!0))}return o&&((c=(l=te).invalidate)==null||c.call(l)),o}Ge("pinchdown",()=>{var l,c,d,u,h,p,g,y,f,m;$f(),Ud=!1,Ri=null,Fd=!1,Bd={x:ve.x,y:ve.y};let n=ve.x,e=ve.y,t=jn(n,e),i=Al(n,e),s=Of(n,e),r=Hs(n,e),a=!!(t!=null&&t.resize||t!=null&&t.handle||s||r||i&&i.button||t&&((c=(l=fa(t.win.el,t.u,t.v))==null?void 0:l.closest)!=null&&c.call(l,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-store-launch],[data-launch-gorilla],.lib-tile,[data-qb-url],[data-fist-act],[data-fist-env],[data-native-app],[data-native-browser],[data-native-xr]'))),o=w.fingerTouch!==0||!a?MA():null;if(o&&(Ri=o,n=o.x,e=o.y,t=jn(n,e),i=Al(n,e),s=Of(n,e),r=Hs(n,e),!(((u=(d=o.el)==null?void 0:d.dataset)==null?void 0:u.id)==="browser"||((p=(h=o.el)==null?void 0:h.dataset)==null?void 0:p.spatialBuiltin)==="browser"||((y=(g=o.el)==null?void 0:g.dataset)==null?void 0:y.app)==="browser")&&o.el&&!(t!=null&&t.resize)&&!(t!=null&&t.handle)&&!s&&!(i&&i.button)&&yr(o.x,o.y,o.el))){Fd=!0,Ds=performance.now()+220;return}if(t!=null&&t.resize){ky(t.win,n,e);return}if(t!=null&&t.handle){Gf(t.win,n,e,"handle",(f=ve.hand)==null?void 0:f.id);return}if(s&&(!t||s.distance<=(t.distance??1/0)+.12)&&(!i||s.distance<i.distance)){Ny(n,e,"pinch");return}if(r&&(!t||r.distance<=(t.distance??1/0)+.15)&&(!i||r.distance<i.distance)){Ri&&(ve.x=n,ve.y=e),_l("down");return}if(i&&(!t||i.distance<t.distance)){Wd(i.button);return}if(t){Jt(t.win);let x=fa(t.win.el,t.u,t.v);((m=x==null?void 0:x.closest)==null?void 0:m.call(x,'[data-spatial-builtin="browser"], [data-app="browser"]'))&&(bl=setTimeout(()=>{bl=null,Ud=!0,an=null,Tl("spatial")},2e3)),an={win:t.win,hit:t};return}_l("down")});Ge("pinchsample",()=>{if(rs&&Yy(performance.now()),an&&ve.mode==="drag"&&!(Ri!=null&&Ri.el)&&(_r(an.hit,"down"),an=null),ve.mode==="drag"&&!(Ri!=null&&Ri.el)&&!Ot.win&&!lt.win&&!pn.start){let n=Bd||{x:ve.x,y:ve.y},e=ve.x-n.x,t=ve.y-n.y;Bd={x:ve.x,y:ve.y};let i=jn(ve.x,ve.y);i&&!i.handle&&!i.resize&&AA(i.win,i.u,i.v,e,t)}});Ge("pinchup",()=>{if($f(),Bd=null,Fd){Fd=!1,Ri=null,an=null;return}let n=Ri;Ri=null;let e=n?n.x:ve.x,t=n?n.y:ve.y;if(Ud){Ud=!1,an=null;return}if(rs){Vs();return}if(Ti>=0||aa||yo){n&&(ve.x=e,ve.y=t),_l("up");return}if(n!=null&&n.el&&document.body.contains(n.el)){an=null,yr(n.x,n.y,n.el);return}if(an&&ve.mode==="drag"&&(_r(an.hit,"down"),an=null),an){let r=jn(e,t),a=r&&!r.handle&&!r.resize&&r.win===an.win?r:an.hit;an=null,_r(a,"down"),_r(a,"up");return}if(ut){let r=jn(e,t);r&&r.win===ut.win&&!r.handle&&!r.resize?os(r,1):By();return}if(Ot.win){Mr();return}if(lt.win){as();return}if(pn.start){qf(ve.x,ve.y),zs();return}let i=Hs(e,t),s=jn(e,t);if(i&&(!s||i.distance<=(s.distance??1/0)+.15)){n&&(ve.x=e,ve.y=t),_l("up");return}if(s&&!s.handle&&!s.resize){_r(s,"up");return}_l("up")});var yt=document.createElement("div");yt.className="dock";var Li=document.createElement("div");Li.className="browser-tab-popup dock-browser-popup";Li.dataset.browserTabMenu="dock";Li.hidden=!0;Li.innerHTML=`
  <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
  <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
`;Li.addEventListener("click",n=>{var i;let e=n.target.closest("[data-browser-opt]");if(!e)return;n.stopPropagation();let t=e.dataset.browserOpt||"new-tab";ha(),(i=window.nextvrOpenBrowserOption)==null||i.call(window,t)});var zt=document.createElement("button");zt.type="button";zt.className="dock-grab";zt.title=k("moveDock");zt.setAttribute("aria-label",k("moveDock"));zt.setAttribute("aria-pressed","false");var kn=new Qr(yt);Tt.add(kn);var Ci=new Et(new Nn(1,1),new hn({visible:!1})),Vi=new Et(new Nn(1,1),new hn({visible:!1})),is=new Et(new Nn(.26,.14),new hn({visible:!1,side:Gn}));Tt.add(Ci,Vi,is);function ha(){var e,t,i,s;Li.hidden=!0;let n=document.querySelector('[data-browser-tab-menu="spatial"]');n&&(n.hidden=!0),(t=(e=te).invalidate)==null||t.call(e),(s=(i=te).render)==null||s.call(i,Ae,fe)}function Tl(n="dock"){var e,t,i,s,r,a;if(n==="spatial"){let o=document.querySelector('[data-browser-tab-menu="spatial"]');o&&(o.hidden=!1)}else{let o=Gd("browser");o&&(Li.style.left=`${o.offsetLeft+o.offsetWidth/2}px`),Li.hidden=!1,xo()}(t=(e=window.NativeXR)==null?void 0:e.click)==null||t.call(e),(s=(i=te).invalidate)==null||s.call(i),(a=(r=te).render)==null||a.call(r,Ae,fe)}typeof window<"u"&&(window.nextvrShowBrowserTabMenu=Tl,window.nextvrHideBrowserTabMenus=ha);if(!ye){let n=e=>({x:e.clientX/_t.width,y:e.clientY/_t.height});zt.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);Ny(t.x,t.y,"desktop")&&zt.setPointerCapture(e.pointerId)}),zt.addEventListener("pointermove",e=>{if(pn.source==="desktop"){let t=n(e);qf(t.x,t.y)}}),zt.addEventListener("pointerup",e=>{pn.source==="desktop"&&(zs(),zt.hasPointerCapture(e.pointerId)&&zt.releasePointerCapture(e.pointerId))}),zt.addEventListener("pointercancel",zs)}var Gi=!0,vl=!1;function Ht(n){var e,t;Gi=!!n,kn.visible=Gi,Gi||(Ti=-1,zs()),(t=(e=te).invalidate)==null||t.call(e)}var Vy=()=>Gi;function en(n){var t,i;let e=!!n;return vl===e||(vl=e,yt.style.setProperty("display",e?"none":"","important"),Ci.visible=Vi.visible=!e,Ht(!e),(i=(t=te).invalidate)==null||i.call(t)),vl}var Vd=()=>vl,EA=[],Tn=[],Gd=n=>Tn.find(e=>e.dataset.id===n)||null,Df=[],TA=J("wifi"),RA='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',CA='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function Gy(n){EA=n,Tn=[],Df.length=0,yt.innerHTML="";for(let e of n){if(e.kind==="sep"){yt.appendChild(LA());continue}if(e.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",i.style.width="14px",i.style.display="inline-block",yt.appendChild(i);continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=w.profileAvatar?`<img src="${w.profileAvatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`:CA,w.profileName&&(t.title=w.profileName);else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${TA}</span><span class="dk-bat">${RA}<span class="dk-bat-percent"></span></span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),Df.push({b:t,win:e.win})}if(e.id==="browser"){let i=null;t.addEventListener("pointerdown",()=>{clearTimeout(i),i=setTimeout(()=>{t.dataset.holdConsumed="1",Tl("dock")},2e3)});let s=()=>{clearTimeout(i),i=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("pointerleave",s)}t.addEventListener("click",()=>{if(t.dataset.holdConsumed==="1"){t.dataset.holdConsumed="0";return}ha(),e.run()}),yt.appendChild(t),Tn.push(t)}yt.appendChild(Li),zt.title=k("moveDock"),zt.setAttribute("aria-label",k("moveDock")),yt.appendChild(zt),Yf(),jf(),bo(),Wy(),xo()}function LA(){let n=document.createElement("span");return n.className="dock-sep",n}function Wy(){for(let{b:n,win:e}of Df){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",he.some(i=>i.id===e))}}Ge("wins",Wy);var ss={time:"--:--",date:"",batteryLevel:null,charging:!1,online:navigator.onLine},cs=()=>({...ss});function zd(){Me("device-status",cs())}function Yf(){let n=yt.querySelector(".dk-time"),e=new Date;ss.time=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),ss.date=e.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),n&&(n.textContent=ss.time),zd()}Yf();setInterval(Yf,1e3);function jf(){let n=yt.querySelector(".dk-wifi");ss.online=navigator.onLine,n&&(n.style.opacity=ss.online?"1":".35"),zd()}addEventListener("online",jf);addEventListener("offline",jf);var vo=null;function bo(){let n=yt.querySelector(".dk-bat");if(!vo){n&&(n.style.display="none"),ss.batteryLevel=null,ss.charging=!1,zd();return}let e=Math.max(0,Math.min(1,Number(vo.level)||0)),t=!!vo.charging;if(ss.batteryLevel=e,ss.charging=t,n){n.style.display="";let i=n.querySelector(".dk-bat-percent"),s=n.querySelector(".fill");s&&(s.setAttribute("width",String(Math.max(1.6,13*e))),s.setAttribute("fill",t?"#8de6c8":e<.2?"#ff6b6b":"currentColor")),i&&(i.textContent=`${Math.round(e*100)}%`),n.title=`${Math.round(e*100)}%${t?" \xB7 carregando":""}`}zd()}window.nextvrBattery=n=>{try{let e=typeof n=="string"?JSON.parse(n):n;e&&typeof e.level=="number"&&(vo=e,bo())}catch{}};!ye&&navigator.getBattery&&navigator.getBattery().then(n=>{vo=n,n.addEventListener("levelchange",bo),n.addEventListener("chargingchange",bo),bo()}).catch(()=>{});var Ti=-1,aa=null,Tf={x:-1,y:-1},xl=null,yo=!1;function kf(){xl&&(clearTimeout(xl),xl=null)}Ge("pinchcancel",()=>{Ti=-1,aa=null,yo=!1,kf(),$f()});function _l(n){var s,r,a;let e=Hs(ve.x,ve.y);if(n==="down"){if(kf(),yo=!1,Tf={x:ve.x,y:ve.y},e!=null&&e.popupOpt){Ti=-1,aa=e.popupOpt;return}aa=null,Ti=e?e.i:-1,Ti>=0&&((r=(s=Tn[Ti])==null?void 0:s.dataset)==null?void 0:r.id)==="browser"&&(xl=setTimeout(()=>{xl=null,yo=!0,Tl("dock")},2e3));return}if(kf(),yo){yo=!1,Ti=-1,aa=null;return}let t=Ti,i=aa;if(Ti=-1,aa=null,n==="up"){let o=(e==null?void 0:e.popupOpt)||i;if(o){ha(),(a=window.nextvrOpenBrowserOption)==null||a.call(window,o);return}let l=e&&e.i===t?e.i:-1;if(l<0&&t>=0&&Math.hypot(ve.x-Tf.x,ve.y-Tf.y)<.085&&(l=t),l<0)return;let c=Tn[l];c&&(c.style.transform="scale(.88)",setTimeout(()=>c.style.transform="",150),c.click())}}function Of(n,e){return!Gi||!Uf?null:(pa(n,e),Vi.updateMatrixWorld(!0),mi.intersectObject(Vi,!1)[0]||null)}function Hs(n,e){if(!Gi)return null;if(pa(n,e),!Li.hidden){is.updateMatrixWorld(!0);let o=mi.intersectObject(is,!1)[0];if(o){let c=is.worldToLocal(o.point.clone()).y>=0?"new-tab":"incognito-tab",d=Li.querySelector(`[data-browser-opt="${c}"]`);return{i:-1,popupOpt:c,el:d,distance:o.distance}}}Ci.updateMatrixWorld(!0);let t=mi.intersectObject(Ci,!1)[0];if(!t)return null;let i=Ci.worldToLocal(t.point.clone()),s=Ci.geometry.parameters,r=(i.x/s.width+.5)*yt.offsetWidth,a=(.5-i.y/s.height)*yt.offsetHeight;for(let o=0;o<Tn.length;o++){let l=Tn[o];if(r>=l.offsetLeft-4&&r<=l.offsetLeft+l.offsetWidth+4&&a>=l.offsetTop-4&&a<=l.offsetTop+l.offsetHeight+4)return{i:o,distance:t.distance,button:l}}return null}var fy="",Uf="",Ar=0,la=null;Ge("recenter",()=>{Ar=0,ks.ready=!1,la=null,zs();for(let n of he)!n.onboarding&&!n.hidden&&(n.pinned=!0,n.shell.classList.remove("free"));xo(),Wi();for(let n of he)n.hidden||n.apply()});Ge("summon-dock",()=>{var e;fe.updateMatrixWorld(!0),Tt.updateMatrixWorld(!0);let n=fe.getWorldDirection(new D).transformDirection(Tt.matrixWorld.clone().invert());Ar=Math.atan2(-n.x,-n.z),ks.ready=!1,la=null,zs(),xo(),(e=window.NativeXR)==null||e.click()});function xo(){let n=_t.width>_t.height,e=(ye?ti.dockDistance:n?1.42:1.75)*w.dockDist,t=ye?-ti.dockDrop:n?-.5:-.6,i=wt*(ye?ti.dockScale:n?.74:.88)*w.dockSize;la?kn.position.copy(la):kn.position.set(-Math.sin(Ar)*e,Gt+t,-Math.cos(Ar)*e),kn.rotation.set(.26,Ar,0,"YXZ"),kn.scale.setScalar(i);let s=yt.offsetWidth*i,r=yt.offsetHeight*i,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==fy&&(fy=a,Ci.geometry.dispose(),Ci.geometry=new Nn(s,r),Yn.h=r,la||Wi());let o=zt.offsetWidth*i,l=zt.offsetHeight*i,c=o.toFixed(3)+"x"+l.toFixed(3);o>0&&c!==Uf&&(Uf=c,Vi.geometry.dispose(),Vi.geometry=new Nn(o,l)),Ci.position.copy(kn.position),Ci.rotation.copy(kn.rotation),is.position.copy(kn.position),is.rotation.copy(kn.rotation);let d=Gd("browser"),u=d&&yt.offsetWidth>0?(d.offsetLeft+d.offsetWidth*.5-yt.offsetWidth*.5)*i:0;is.translateX(u),is.translateY((yt.offsetHeight*.5+52)*i),is.translateZ(.005),Vi.position.copy(kn.position),Vi.rotation.copy(kn.rotation),Vi.translateY((yt.offsetHeight/2-zt.offsetTop-zt.offsetHeight/2)*i),Vi.translateZ(.004),!la&&(Yn.y!==kn.position.y||Yn.z!==-e)&&(Yn.y=kn.position.y,Yn.z=-e,Wi())}var PA=[["q","w","e","r","t","y","u","i","o","p",{k:"\u232B",cls:"wide kb-bksp",icon:"backspace",label:"Apagar"}],["a","s","d","f","g","h","j","k","l",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide kb-shift",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@close",cls:"util kb-hide",icon:"keyboard",label:"Fechar teclado"},{k:"@sym",cls:"util kb-sym",lbl:"!123",label:"N\xFAmeros e s\xEDmbolos"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:" "},{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@settings",cls:"util",icon:"settings",label:"Configura\xE7\xF5es"}]],wr={q:"1",w:"2",e:"3",r:"4",t:"5",y:"6",u:"7",i:"8",o:"9",p:"0",a:"@",s:"#",d:"$",f:"&",g:"*",h:"(",j:")",k:"'",l:'"',z:"%",x:"-",c:"+",v:"=",b:"/",n:";",m:":",",":"!",".":"?"},py=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],IA=0,st=null,On=null,xt=null,go=null,ls=!1,ca=!1,Sr=!1,Rl=!1,Bs=window.__nextvrTyping,NA=n=>(Bs==null?void 0:Bs.editable(n))||null,wl=null,Ff=1,qy=2,Hd=3,DA=ye;function Er(n){var t,i;if(Rl=!!n,!st)return!1;let e=!!n;return st.visible=!e,st.element.style.setProperty("display",e?"none":"","important"),On&&(On.visible=!e),e&&Vs(),(i=(t=te).invalidate)==null||i.call(t),!0}var Xy=()=>!!st&&st.visible!==!1,$y=()=>Rl;function kA(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&he.find(s=>s.shell===t)||null}function pi(n,e){var s,r,a,o,l,c,d,u,h,p,g,y;if(!n){ye&&console.log("kb close; was serving",(xt==null?void 0:xt.nativeId)||(xt==null?void 0:xt.tagName)||"nothing"),Vs(),st&&(Tt.remove(st),Tt.remove(On),st.element.remove(),st=null),xt=null,go=null,ls=ca=Sr=!1,ks.ready=!1,(r=(s=te).invalidate)==null||r.call(s),(o=(a=te).render)==null||o.call(a,Ae,fe);return}let t=e||wl;if(xt=t&&!t.nativeId?(Bs==null?void 0:Bs.focus(t))||null:t||null,xt&&!xt.nativeId&&(wl=xt),go=kA(xt),ye&&console.log("kb open for",(xt==null?void 0:xt.nativeId)||(xt==null?void 0:xt.tagName)||"nothing","in window",(go==null?void 0:go.id)??"none"),st){Bf(),Ae.updateMatrixWorld(!0),(c=(l=te).invalidate)==null||c.call(l),(u=(d=te).render)==null||u.call(d,Ae,fe);return}let i=document.createElement("div");i.className="kb";for(let f of PA){let m=document.createElement("div");m.className="kb-row";for(let x of f){let v=typeof x=="string"?x:x.k,M=document.createElement("button");M.className="key"+(typeof x=="string"?"":" "+x.cls),typeof x=="string"?(M.textContent=v,wr[v]&&(M.dataset.sub=wr[v])):x.icon?(M.innerHTML=J(x.icon),M.setAttribute("aria-label",x.label),M.title=x.label):M.textContent=x.lbl||v,M.dataset.k=v,m.appendChild(M)}i.appendChild(m)}i.addEventListener("click",f=>{let m=f.target.closest("[data-k]");m&&(Wd(m),Vs())}),st=new Qr(i),st.scale.setScalar(wt*(ye?ti.keyboardScale:.9)),Tt.add(st),On=new Et(new Nn(1,1),new hn({visible:!1})),Tt.add(On),Bf(),Ae.updateMatrixWorld(!0),(p=(h=te).invalidate)==null||p.call(h),(y=(g=te).render)==null||y.call(g,Ae,fe)}function OA(){ls?ca?(ls=!1,ca=!1):ca=!0:(ls=!0,ca=!1),Kf()}function Zf(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@"),r=s&&Sr&&wr[n]?wr[n]:n;if(t===Hd){e&&e.classList.remove("hot"),s&&Rf(r,r,!!i,Hd);return}if(t===Ff){if(ye&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){pi(!1);return}if(n==="\u21E7"){OA();return}if(n==="@sym"){Sr=!Sr,Kf();return}if(n==="@lang"||n==="@settings")return;if(n==="@mic"){Je(k("micOff"));return}if(n==="@emoji"){Rf(n,py[IA++%py.length],!1,Ff);return}}Rf(r,r,r==="\u232B"||r==="\u23CE"||Sr?!1:void 0,t)}function Rf(n,e,t,i){if(!xt)return!1;let s=t===void 0?ls:t;return xt.nativeId?window.NativeXR.key(xt.nativeId,e,!!s,i||0):Bs==null||Bs.key(n,!!s,i||0),DA&&i!==qy&&console.log("kb key ->",xt.nativeId||xt.tagName+"."+(xt.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==Hd&&s&&ls&&!ca&&(ls=!1,Kf()),!0}function Kf(){if(st){for(let n of st.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=ls?ca?"lock":"once":"";for(let n of st.element.querySelectorAll('[data-k="@sym"]'))n.textContent=Sr?"ABC":"!123",n.dataset.state=Sr?"lock":"";for(let n of st.element.querySelectorAll("[data-k]")){let e=n.dataset.k;Sr&&wr[e]?(n.textContent=wr[e],n.dataset.sub=e):e.length===1&&/[a-zç,.]/i.test(e)&&(n.textContent=/[a-zç]/i.test(e)?ls?e.toUpperCase():e.toLowerCase():e,wr[e]&&(n.dataset.sub=wr[e]))}}}var my="",UA=.35,ks={yaw:0,ready:!1},FA=n=>Math.atan2(Math.sin(n),Math.cos(n));function BA(){let n=go;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return Ar}function Bf(n=0){if(!st)return;let e=BA();ks.ready?ks.yaw+=FA(e-ks.yaw)*(1-Math.exp(-n*7)):(ks.yaw=e,ks.ready=!0);let t=ks.yaw,i=ye?ti.keyboardDistance:-Yn.z-.35;st.position.set(-Math.sin(t)*i,Gt-(ye?ti.keyboardDrop:.68),-Math.cos(t)*i),st.rotation.set(-Math.PI/2+UA,t,0,"YXZ");let s=st.element.offsetWidth*st.scale.x,r=st.element.offsetHeight*st.scale.x,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==my&&(my=a,On.geometry.dispose(),On.geometry=new Nn(s,r)),On.position.copy(st.position),On.rotation.copy(st.rotation)}var zA=700,HA=90,VA=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),rs=null,Sl=0;function Al(n,e){var o,l;if(!st||Rl)return null;Dd.set(n*2-1,-(e*2-1)),mi.setFromCamera(Dd,fe);let t=mi.intersectObject(On,!1)[0];if(!t)return null;let i=On.worldToLocal(t.point.clone()),s=On.geometry.parameters,r=(i.x/s.width+.5)*st.element.offsetWidth,a=(.5-i.y/s.height)*st.element.offsetHeight;return{distance:t.distance,button:((l=(o=Xf(st.element,r,a))==null?void 0:o.closest)==null?void 0:l.call(o,"[data-k]"))||null}}function Wd(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return Vs(),e?(rs={key:e,button:n,shift:ls},Zf(e,n,Ff),VA(e)&&(Sl=performance.now()+zA),!0):!1}function Vs(){let n=rs;rs=null,Sl=0,n&&Zf(n.key,n.button,Hd,n.shift)}Ge("pinchcancel",Vs);function Yy(n){var i,s;if(!rs)return!1;let e=Al(ve.x,ve.y);if(!e)return Vs(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==rs.key?(Vs(),Wd(e.button)):(Sl&&n>=Sl&&(Zf(rs.key,rs.button,qy),Sl=n+HA),!0)}var gy="";ll((n,e)=>{let t=`${w.winScale}:${w.winDist}`;if(gy!==t&&(gy=t,Wi()),xo(),Bf(n),rs&&Yy(e),an&&ve.mode==="drag"&&(_r(an.hit,"down"),an=null),ut&&ve.active&&ve.down){let i=jn(ve.x,ve.y);i&&i.win===ut.win&&!i.handle&&!i.resize&&os(i,2)}if((Ot.win||lt.win&&lt.source!=="fist")&&ve.active&&ve.down){let i=Md(e);Ot.win&&Oy(i.x,i.y),lt.win&&lt.source!=="fist"&&Wf(i.x,i.y)}if(pn.start&&ve.active&&ve.down){let i=Md(e);qf(i.x,i.y)}for(let i of he)i.hidden||i.apply();jy()});function Cf(n){let e=n.matrixWorld.elements,t=fe.position.x-e[12],i=fe.position.z-e[14];return t*e[8]+i*e[10]<0}function jy(){var e,t,i,s;Ae.updateMatrixWorld(!0);let n=!1;if(Gi&&yt){let r=Cf(kn)?"1":"0";yt.dataset.backface!==r&&(yt.dataset.backface=r,zt&&(zt.dataset.backface=r),n=!0)}if(st&&st.visible!==!1&&st.element){let r=Cf(st)?"1":"0";st.element.dataset.backface!==r&&(st.element.dataset.backface=r,n=!0)}for(let r of he){if(r.hidden||!r.shell)continue;let a=Cf(r.obj)?"1":"0";r.shell.dataset.backface!==a&&(r.shell.dataset.backface=a,n=!0)}n&&((t=(e=te).invalidate)==null||t.call(e),(s=(i=te).render)==null||s.call(i,Ae,fe))}typeof window<"u"&&(window.__updateBackfaceStates=jy);var Zy='button, .d-btn, .spatial-app-tile, .lib-tile, .st-card, .st-tab, .quick-control, .entry-card, .entry-seg-btn, .entry-btn, .entry-store-card, .entry-profile-box, .yt-link, [role="button"]',sa=null;function Os(n){var t;let e=((t=n==null?void 0:n.closest)==null?void 0:t.call(n,Zy))||null;return e===sa?e:(sa&&sa.classList.remove("nextvr-choosing"),sa=e,sa&&sa.classList.add("nextvr-choosing"),sa)}function oa(n){var i;let e=((i=n==null?void 0:n.closest)==null?void 0:i.call(n,Zy))||(n instanceof HTMLElement?n:null);if(!e)return null;Os(e),e.classList.remove("nextvr-clicking"),e.classList.add("nextvr-clicking");let t=e.querySelector(":scope > .nextvr-click-ripple");return t||(t=document.createElement("span"),t.className="nextvr-click-ripple",t.setAttribute("aria-hidden","true"),e.appendChild(t)),t.classList.remove("is-active"),t.classList.add("is-active"),setTimeout(()=>{e.classList.remove("nextvr-clicking"),t==null||t.remove()},340),e}typeof window<"u"&&(window.__nextvrChooseAnim=Os,window.__nextvrClickAnim=oa,document.addEventListener("pointerover",n=>{n.target instanceof Element&&Os(n.target)},{passive:!0,capture:!0}),document.addEventListener("click",n=>{n.target instanceof Element&&oa(n.target)},{passive:!0,capture:!0}));if(ye){let n=function(){try{vo=JSON.parse(window.NativeXR.battery()),bo()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?pi(!0,{nativeId:e}):(xt==null?void 0:xt.nativeId)!==e&&pi(!1)},window.nextvrAppFocus=e=>pi(!0,{nativeId:e}),n(),setInterval(n,1e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var gt=null,Ld=new Map,Pd=new mo({holdMs:2e3,graceMs:260}),da=new Set,Us={hands:[],consumed:new Set,scaleX:1,scaleY:1},gl=null,Lf=0,yy=350,GA=240;function zf(n,e){fe.updateMatrixWorld(!0),Tt.updateMatrixWorld(!0);let t=new Jo;return t.setFromCamera(new je(n*2-1,1-e*2),fe),t}function Nd(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function Hf(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new D),s=n.curve>0?Ed(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function WA(n,e){let t=n.obj.getWorldPosition(new D),i=new D(0,0,1).transformDirection(n.obj.matrixWorld),s=new ci().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new D);let r=n.obj.matrixWorld.clone().invert(),a=e.origin.clone().applyMatrix4(r),o=e.origin.clone().add(e.direction).applyMatrix4(r).sub(a).normalize(),l=n.curveRadius,c=o.x*o.x+o.z*o.z;if(c<1e-9)return e.intersectPlane(s,new D);let d=2*(a.x*o.x+(a.z-l)*o.z),u=a.x*a.x+(a.z-l)*(a.z-l)-l*l,h=d*d-4*c*u;if(h<0)return e.intersectPlane(s,new D);let p=Math.sqrt(h);for(let g of[(-d-p)/(2*c),(-d+p)/(2*c)]){if(!(g>0))continue;let y=a.clone().addScaledVector(o,g);if(!(Math.abs(y.x)>l+1e-6||y.z>l))return y.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new D)}function vy(n){let e=null;for(let t of he){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new D),s=WA(t,n.ray);if(!s)continue;let{local:r,scale:a}=Hf(t,s);if(Math.abs(r.x)*a.x>t.w*a.x/2+.08||Math.abs(r.y)*a.y>t.h*a.y/2+.08)continue;let o=n.ray.origin.distanceTo(s);(!e||o<e.distance)&&(e={win:t,point:s,distance:o})}return e}var Fs=new Map,Ds=0,Ps=null,zi=null;function Pf(n,e=null,t=null){var a;if(typeof document>"u")return;if(!n){zi&&(zi.hidden=!0);return}let i=document.getElementById("hud")||document.body;(!zi||!document.body.contains(zi))&&(zi=document.createElement("div"),zi.id="finger-sticky-dot",zi.className="finger-sticky-dot",i.appendChild(zi));let s=Number.isFinite(e)?e*100:50,r=Number.isFinite(t)?t*100:50;if(!Number.isFinite(e)||!Number.isFinite(t)){let o=(a=n.getBoundingClientRect)==null?void 0:a.call(n);o&&o.width>0&&o.height>0&&_t.width>0&&_t.height>0&&(s=(o.left+o.width*.5)/_t.width*100,r=(o.top+o.height*.5)/_t.height*100)}zi.style.left=`${Math.max(4,Math.min(96,s)).toFixed(1)}%`,zi.style.top=`${Math.max(4,Math.min(96,r)).toFixed(1)}%`,zi.hidden=!1}function ra(n,e=null,t=null){var i,s,r,a;if(Ps===n){Ps&&Pf(Ps,e,t);return}Ps&&((s=(i=Ps.classList)==null?void 0:i.remove)==null||s.call(i,"finger-hover","finger-sticking")),Ps=n||null,Ps?((a=(r=Ps.classList)==null?void 0:r.add)==null||a.call(r,"finger-hover","finger-sticking"),Pf(Ps,e,t)):Pf(null)}function qA(n){if(!n||n.pinching||n.fist||n.predicted)return!1;let e=n.points;if(!e||e.length<63||Math.hypot(e[21]-e[18],e[22]-e[19])<.005)return!1;let t=e[0],i=e[1],s=e[18],r=e[19],a=e[24],o=e[25],l=Math.hypot(a-t,o-i),c=Math.hypot(s-t,r-i);return l>.045&&l>c*1.05}function Id(n,e){var r,a,o,l,c,d,u,h,p,g,y,f,m,x,v,M,E,T,b;if(!Number.isFinite(n)||!Number.isFinite(e))return null;let t=Al(n,e),i=jn(n,e),s=Hs(n,e);if(!s&&Gi){for(let O of[-.02,.02,-.038,.038])if(s=Hs(n,e+O),s)break}if(t&&(!i||t.distance<i.distance)&&t.button)return Os(t.button),{kind:"kb",x:n,y:e,el:t.button,key:"kb:"+(((r=t.button.dataset)==null?void 0:r.k)||t.button.textContent||"")};if(s&&(!i||s.distance<=(i.distance??1/0)+.15)){if(s.popupOpt&&s.el)return Os(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(Tn[s.i]){let O=Tn[s.i];return Os(O),{kind:"dock",x:n,y:e,el:O,key:"dock:"+(((a=O.dataset)==null?void 0:a.id)||s.i)}}}if(i&&!i.handle&&!i.resize){let O=fa(i.win.el,i.u,i.v),S=((o=O==null?void 0:O.closest)==null?void 0:o.call(O,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-spatial-env],[data-fist-act],[data-fist-env],[data-qb-url],[data-browser-opt],[data-id],[data-act],[data-lang]'))||null,_=((l=O==null?void 0:O.closest)==null?void 0:l.call(O,"[data-native-browser],[data-native-app],[data-native-xr]"))||null;if(S){Os(S);let I=((c=S.dataset)==null?void 0:c.browserOpt)||((d=S.dataset)==null?void 0:d.spatialBuiltin)||((u=S.dataset)==null?void 0:u.spatialAndroid)||((h=S.dataset)==null?void 0:h.spatialXr)||((p=S.dataset)==null?void 0:p.spatialScroll)||((g=S.dataset)==null?void 0:g.spatialEnv)||((y=S.dataset)==null?void 0:y.fistAct)||((f=S.dataset)==null?void 0:f.fistEnv)||((m=S.dataset)==null?void 0:m.qbUrl)||((x=S.dataset)==null?void 0:x.id)||((v=S.dataset)==null?void 0:v.act)||((M=S.dataset)==null?void 0:M.lang)||S.getAttribute("aria-label")||S.title||((T=(E=S.textContent)==null?void 0:E.trim())==null?void 0:T.slice(0,24))||"btn";return{kind:"win",x:n,y:e,el:S,hit:i,key:`win:${i.win.id}:${I}`}}if(_){let I=Math.round(i.u*16),N=Math.round(i.v*12);return{kind:"win-surf",x:n,y:e,el:_,hit:i,key:`surf:${i.win.id}:${I}:${N}`}}}if(s!=null&&s.popupOpt&&s.el)return Os(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(s&&Tn[s.i]){let O=Tn[s.i];return Os(O),{kind:"dock",x:n,y:e,el:O,key:"dock:"+(((b=O.dataset)==null?void 0:b.id)||s.i)}}return null}function by(n,e){let t=n.points,i=Number(e==null?void 0:e.scaleX)||1,s=Number(e==null?void 0:e.scaleY)||1,r=[[0,0],[0,.015],[0,-.015],[.015,0],[-.015,0]];if(t&&t.length>=26&&Number.isFinite(t[24])&&Number.isFinite(t[25])){let a=(t[24]-.5)*i+.5,o=(t[25]-.5)*s+.5;for(let[u,h]of r){let p=Id(a+u,o+h);if(p)return p}if(Number.isFinite(t[12])&&Number.isFinite(t[13])){let u=((t[12]+t[24])*.5-.5)*i+.5,h=((t[13]+t[25])*.5-.5)*s+.5;for(let[p,g]of r){let y=Id(u+p,h+g);if(y)return y}}let l=(t[21]-.5)*i+.5,c=(t[22]-.5)*s+.5,d=Id(l,c);if(d)return d}if(Array.isArray(n.aim)&&n.aim.length>=2){let a=ia(n.aim);for(let[o,l]of r){let c=Id(a.x+o,a.y+l);if(c)return c}}return null}function yr(n,e,t=null){var a,o,l,c,d,u,h,p,g,y,f,m,x,v,M,E,T,b,O,S,_,I,N,U,C,R,F,V,q,G,Q,ee,re,z,W,ne,ae,$,ie,pe;if((a=t==null?void 0:t.dataset)!=null&&a.browserOpt)return ha(),(o=window.nextvrOpenBrowserOption)==null||o.call(window,t.dataset.browserOpt),(c=(l=te).invalidate)==null||c.call(l),(u=(d=te).render)==null||u.call(d,Ae,fe),!0;if(t&&Tn.includes(t))return t.classList.add("finger-pressed"),t.style.transform="scale(.88)",setTimeout(()=>{t.style.transform="",t.classList.remove("finger-pressed")},160),oa(t),t.click(),(p=(h=te).invalidate)==null||p.call(h),(y=(g=te).render)==null||y.call(g,Ae,fe),!0;let i=Al(n,e),s=jn(n,e),r=Hs(n,e);if(i&&(!s||i.distance<s.distance))return Wd(i.button),setTimeout(()=>Vs(),55),!0;if(r&&(!s||r.distance<=(s.distance??1/0)+.15)){if(r.popupOpt)return ha(),(f=window.nextvrOpenBrowserOption)==null||f.call(window,r.popupOpt),!0;if(Tn[r.i]){let le=Tn[r.i];return le.classList.add("finger-pressed"),le.style.transform="scale(.88)",setTimeout(()=>{le.style.transform="",le.classList.remove("finger-pressed")},160),oa(le),le.click(),(x=(m=te).invalidate)==null||x.call(m),(M=(v=te).render)==null||M.call(v,Ae,fe),!0}}if(s&&!s.handle&&!s.resize){Jt(s.win);let le=t&&s.win.el.contains(t)?t:fa(s.win.el,s.u,s.v);if(Fy(s,le))return(T=(E=te).invalidate)==null||T.call(E),(O=(b=te).render)==null||O.call(b,Ae,fe),!0;let we=((S=le==null?void 0:le.closest)==null?void 0:S.call(le,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url],[data-lh-app],[data-lh-act],[data-lh-slider]'))||le;we!=null&&we.classList&&(we.classList.add("finger-pressed"),setTimeout(()=>{var Le,Be;return(Be=(Le=we.classList)==null?void 0:Le.remove)==null?void 0:Be.call(Le,"finger-pressed")},180),oa(we));let X=!1,Wt=()=>{X=!0};return(_=we==null?void 0:we.addEventListener)==null||_.call(we,"click",Wt,{once:!0}),_r(s,"down"),_r(s,"up"),(I=we==null?void 0:we.removeEventListener)==null||I.call(we,"click",Wt),!X&&we&&(!((N=we.closest)!=null&&N.call(we,"[data-native-browser],[data-native-app],[data-native-xr]"))||(U=we.matches)!=null&&U.call(we,"[data-qb-url],[data-qb-act]"))&&((C=we.click)==null||C.call(we)),(F=(R=te).invalidate)==null||F.call(R),(q=(V=te).render)==null||q.call(V,Ae,fe),!0}if(r!=null&&r.popupOpt)return ha(),(G=window.nextvrOpenBrowserOption)==null||G.call(window,r.popupOpt),!0;if(r&&Tn[r.i]){let le=Tn[r.i];return le.classList.add("finger-pressed"),le.style.transform="scale(.88)",setTimeout(()=>{le.style.transform="",le.classList.remove("finger-pressed")},160),oa(le),le.click(),(ee=(Q=te).invalidate)==null||ee.call(Q),(z=(re=te).render)==null||z.call(re,Ae,fe),!0}return t&&typeof t.click=="function"&&document.body.contains(t)?((ne=(W=t.classList)==null?void 0:W.add)==null||ne.call(W,"finger-pressed"),setTimeout(()=>{var le,we;return(we=(le=t.classList)==null?void 0:le.remove)==null?void 0:we.call(le,"finger-pressed")},160),oa(t),t.click(),($=(ae=te).invalidate)==null||$.call(ae),(pe=(ie=te).render)==null||pe.call(ie,Ae,fe),!0):!1}function XA(n){return!n||n.length<63?0:Math.hypot(n[15]-n[0],n[16]-n[1])+Math.hypot(n[51]-n[0],n[52]-n[1])+Math.hypot(n[51]-n[15],n[52]-n[16])+Math.hypot(n[27]-n[0],n[28]-n[1])}var Ml=new Map;function $A(n,e,t,i,s){var p,g,y;let r=jn(e,t)||n.winHit;if(!r||!r.win||r.win.hidden)return!1;n.winHit=r;let a=r.win.el,o=fa(a,r.u,r.v);if((p=o==null?void 0:o.closest)==null?void 0:p.call(o,"[data-native-browser],[data-native-app]"))return n.nativeDownSent?os(r,2):(n.nativeDownSent=!0,os(r,0)),!0;let c=null,d=null,u=o;for(;u&&u!==document.body&&!(u instanceof HTMLElement&&(!c&&u.scrollHeight>u.clientHeight+2&&(c=u),!d&&u.scrollWidth>u.clientWidth+2&&(d=u),c&&d)||u===a);)u=u.parentElement;if(!c||!d){let f=a.querySelectorAll("[data-spatial-scroll-track], .spatial-honeycomb, .st-quest-main, .st-main, .lib-grid, .set-body, .win-body");for(let m of f)m instanceof HTMLElement&&(!c&&m.scrollHeight>m.clientHeight+2&&(c=m),!d&&m.scrollWidth>m.clientWidth+2&&(d=m))}let h=!1;return c&&Math.abs(s)>1e-4&&(n.dirY===0&&(n.dirY=c.scrollTop<=4&&t-n.startScreenY>.012?1:-1),c.scrollTop+=n.dirY*s*1850,h=!0),d&&Math.abs(i)>1e-4&&(n.dirX===0&&(n.dirX=d.scrollLeft<=4&&e-n.startScreenX>.012?1:-1),d.scrollLeft+=n.dirX*i*1850,h=!0),h&&((y=(g=te).invalidate)==null||y.call(g)),h}function xy(n){let e=Ml.get(n);e!=null&&e.nativeDownSent&&e.winHit&&os(e.winHit,1),Ml.delete(n)}function YA(n,e,t){var C,R,F,V,q,G,Q,ee,re;if(w.fingerTouch===0)return Fs.delete(n==null?void 0:n.id),xy(n==null?void 0:n.id),ra(null),!1;let i=n==null?void 0:n.points,s=Fs.get(n==null?void 0:n.id);if(i&&i.length>=26&&Math.hypot(i[18]-i[15],i[19]-i[16])>.008){let z=by(n,e);z!=null&&z.el&&Hy.set(n.id||"right",{x:z.x,y:z.y,el:z.el,at:t})}if(!qA(n)){let z=(C=Ml.get(n==null?void 0:n.id))==null?void 0:C.scrolling;if(xy(n==null?void 0:n.id),!z&&s&&!s.latched&&!(n!=null&&n.pinching)&&!(n!=null&&n.fist)&&!(n!=null&&n.predicted)&&i&&i.length>=26&&t-s.enterAt>=40&&t-s.lastSeenAt<=220&&t-s.lastTapAt>=360&&Math.hypot(i[0]-(s.wristX??i[0]),i[1]-(s.wristY??i[1]))<=.045){let W=yr(s.tapX,s.tapY,s.targetEl);if(Fs.delete(n==null?void 0:n.id),ra(null),W)return Ds=t+220,!0}return Fs.delete(n==null?void 0:n.id),ra(null),!1}let r=i&&i.length>=26?i[24]:.5,a=i&&i.length>=26?i[25]:.5,o=Number(e==null?void 0:e.scaleX)||1,l=Number(e==null?void 0:e.scaleY)||1,c=(r-.5)*o+.5,d=(a-.5)*l+.5,u=Ml.get(n.id),h=jn(c,d)||(Array.isArray(n.aim)&&n.aim.length>=2?jn(ia(n.aim).x,ia(n.aim).y):null);if(!u)u={startTipX:r,startTipY:a,startWristX:i?i[0]:r,startWristY:i?i[1]:a,startScreenX:c,startScreenY:d,lastScreenX:c,lastScreenY:d,dirX:0,dirY:0,scrolling:!1,nativeDownSent:!1,winHit:h},Ml.set(n.id,u);else{let z=c-u.lastScreenX,W=d-u.lastScreenY;u.lastScreenX=c,u.lastScreenY=d,h&&(u.winHit=h);let ne=Math.hypot(r-u.startTipX,a-u.startTipY),ae=i?Math.hypot(i[0]-u.startWristX,i[1]-u.startWristY):0;if(!u.scrolling&&u.winHit&&(ne>=.022&&ae>=.012||ne>=.036)&&(u.scrolling=!0),u.scrolling)return $A(u,c,d,z,W),s&&(s.latched=!0),ra(null),!0}let g=(i&&i.length>=17?i[16]:a)-a,y=i&&i.length>=26?Math.hypot(i[24]-i[0],i[25]-i[1]):.1,f=i&&i.length>=20?Math.hypot(i[18]-i[0],i[19]-i[1]):.08,m=y/Math.max(1e-4,f),x=n.head&&n.head.length===63?n.head[25]:0,v=n.head&&n.head.length===63?Math.hypot(n.head[24],n.head[25],n.head[26]):0,M=n.head&&n.head.length===63?n.head[29]-n.head[26]:0,E=Number(n.palmWidth)||0,T=XA(n.points),b=s,O=by(n,e),S=z=>{if(!z)return!1;let W=v>0&&z.baseDist>0?v-z.baseDist:0,ne=v>0&&z.baseDist>0?W/z.baseDist:0,ae=E>.012&&z.basePalm>.012?(z.basePalm-E)/z.basePalm:0,$=T>.02&&z.baseSpan>.02?(z.baseSpan-T)/z.baseSpan:0,ie=M-z.baseTipRelZ;return W>=.016||ne>=.036||ae>=.042||$>=.042||ie>=.014&&(W>=.006||ae>=.018||$>=.018)},_=z=>{if(!z)return!1;let W=z.restTipY-a>=.0075,ne=g-z.restFingerLift>=.0075,ae=x-z.restHeadY>=.0075,$=z.maxIndexRatio>1.08&&z.maxIndexRatio-m>=.08,ie=(z.wristX??.5)-z.restTipX,pe=(z.wristY??.7)-z.restTipY,le=Math.hypot(ie,pe)||1,we=(r-z.restTipX)*(ie/le)+(a-z.restTipY)*(pe/le)>=.0075;return W||ne||ae||$||we||S(z)};if(!O){if(b&&b.pendingBrowserTap&&!b.holdMenuOpened&&t-b.lastTapAt>=360&&(b.pendingBrowserTap=!1,yr(b.tapX,b.tapY,b.targetEl)))return b.latched=!0,b.lastTapAt=t,Ds=t+220,!0;let z=b&&(_(b)||Math.hypot(r-b.restTipX,a-b.restTipY)>=.006);return b&&t-b.lastSeenAt<=180&&t-b.enterAt>=40&&!b.latched&&z&&t-b.lastTapAt>=360&&yr(b.tapX,b.tapY,b.targetEl)?(b.latched=!0,b.lastTapAt=t,Ds=t+220,!0):((!b||t-b.lastSeenAt>180)&&(Fs.delete(n.id),ra(null)),!1)}ra(O.el,O.x,O.y);let I=b&&t-b.enterAt>=40&&O.key===b.targetKey&&_(b);if(!b||O.key!==b.targetKey&&!I)return b&&!b.latched&&t-b.enterAt>=45&&t-b.lastSeenAt<=120&&b.lastTipY-a>=.01&&Math.abs(r-b.lastTipX)<=.018&&t-b.lastTapAt>=360&&yr(b.tapX,b.tapY,b.targetEl)?(b.latched=!0,b.lastTapAt=t,Ds=t+220,!0):(b={targetKey:O.key,targetEl:O.el,tapX:O.x,tapY:O.y,wristX:i[0],wristY:i[1],maxIndexRatio:m,restTipY:a,restFingerLift:g,restHeadY:x,lastTipX:r,lastTipY:a,baseDist:v,basePalm:E,baseSpan:T,baseTipRelZ:M,enterAt:t,lastSeenAt:t,latched:!1,holdMenuOpened:!1,pendingBrowserTap:!1,lastTapAt:(b==null?void 0:b.lastTapAt)??-1e3},Fs.set(n.id,b),!1);O.key===b.targetKey&&(b.tapX=O.x,b.tapY=O.y,b.targetEl=O.el,b.wristX=i[0],b.wristY=i[1],b.lastSeenAt=t);let N=((F=(R=b.targetEl)==null?void 0:R.dataset)==null?void 0:F.id)==="browser"||((q=(V=b.targetEl)==null?void 0:V.dataset)==null?void 0:q.spatialBuiltin)==="browser"||((Q=(G=b.targetEl)==null?void 0:G.dataset)==null?void 0:Q.app)==="browser";if(N&&!b.holdMenuOpened&&t-b.enterAt>=2e3)return b.holdMenuOpened=!0,b.pendingBrowserTap=!1,b.latched=!0,b.lastTapAt=t,Tl(((re=(ee=b.targetEl)==null?void 0:ee.dataset)==null?void 0:re.id)==="browser"?"dock":"spatial"),Ds=t+220,!0;if(t-b.enterAt<40)return b.restTipY=Math.max(b.restTipY,a),b.restFingerLift=Math.min(b.restFingerLift,g),b.restHeadY=Math.min(b.restHeadY,x),b.maxIndexRatio=Math.max(b.maxIndexRatio||m,m),b.lastTipX=r,b.lastTipY=a,v>0&&(b.baseDist=b.baseDist>0?b.baseDist*.5+v*.5:v),E>0&&(b.basePalm=b.basePalm>0?b.basePalm*.5+E*.5:E),T>0&&(b.baseSpan=b.baseSpan>0?b.baseSpan*.5+T*.5:T),b.baseTipRelZ=b.baseTipRelZ*.5+M*.5,!1;let U=_(b);if(b.lastTipX=r,b.lastTipY=a,!b.latched&&U&&t-b.lastTapAt>=360){if(N&&S(b)&&!(b.restTipY-a>=.0075||g-b.restFingerLift>=.0075))return b.pendingBrowserTap=!0,b.latched=!0,!1;if(yr(b.tapX,b.tapY,b.targetEl))return b.latched=!0,b.lastTapAt=t,Ds=t+220,!0}else if(b.latched){let z=v>0&&b.baseDist>0?v-b.baseDist:0,W=E>.012&&b.basePalm>.012?(b.basePalm-E)/b.basePalm:0,ne=T>.02&&b.baseSpan>.02?jA(b,T):0;if(z<=.008&&W<=.022&&ne<=.022&&Math.abs(b.restTipY-a)<=.006){if(b.pendingBrowserTap&&!b.holdMenuOpened&&t-b.lastTapAt>=360)return b.pendingBrowserTap=!1,b.latched=!1,b.lastTapAt=t,Ds=t+220,yr(b.tapX,b.tapY,b.targetEl),!0;b.latched=!1,b.restTipY=a,b.restFingerLift=g,b.restHeadY=x,b.maxIndexRatio=m,b.baseDist=v,b.basePalm=E,b.baseSpan=T,b.baseTipRelZ=M}}else b.restTipY=Math.max(b.restTipY,a),b.restFingerLift=Math.min(b.restFingerLift,g),b.restHeadY=Math.min(b.restHeadY,x),b.maxIndexRatio=Math.max(b.maxIndexRatio||m,m),v>0&&(b.baseDist=b.baseDist>0?Math.min(b.baseDist,b.baseDist*.92+v*.08):v),E>.012&&(b.basePalm=b.basePalm>0?Math.max(b.basePalm,b.basePalm*.92+E*.08):E),T>.02&&(b.baseSpan=b.baseSpan>0?Math.max(b.baseSpan,b.baseSpan*.92+T*.08):T);return!1}function jA(n,e){return(n.baseSpan-e)/n.baseSpan}var Zt=null,vr=null,Kt=null,br=null,ft={frames:0,armed:!1,lastArmedAt:0,lastTriggerAt:-2e3,blueUntil:0},pt={frames:0,armed:!1,lastArmedAt:0,lastTriggerAt:-2e3,blueUntil:0};function Vf(n,e){if(!n||!n.points||n.points.length<63||n.palmToFace===!1||n.backOfHand===!0)return!1;if(n.palmToFace===!0)return!0;let t=n.points;return e?t[12]>t[15]+.015&&t[15]>t[51]?!1:t[12]<=t[15]+.015:t[12]<t[15]-.015&&t[15]<t[51]?!1:t[12]>=t[15]-.015}function qd(n){return!!(n&&(n.left===!0||n.id==="left"))}function Xd(n){return!!(n&&!n.left&&(!n.id||n.id==="right"))}function Ky(n,e){if(!n||n.predicted||n.pinching||n.fist||(e?!qd(n):!Xd(n)))return!1;let t=n.points;if(!t||t.length<63||!Vf(n,e))return!1;let i=(d,u)=>Math.hypot(t[d*3]-t[u*3],t[d*3+1]-t[u*3+1]);if(i(5,6)<.008||i(14,16)<.008||i(18,20)<.008)return!1;let s=Math.max(.042,i(0,9)),r=i(0,8)>i(0,6)*1.12&&i(0,8)>s*1.24,a=i(1,4)>i(1,2)*1.34&&i(4,8)>s*.42&&i(4,5)>s*.3,o=i(0,12)<i(0,10)*1.14||i(0,12)<i(0,8)*.82,l=i(0,16)<i(0,14)*1.14||i(0,16)<i(0,8)*.8,c=i(0,20)<i(0,18)*1.16||i(0,20)<i(0,8)*.78;return r&&a&&o&&l&&c}function ZA(n){return Ky(n,!0)}function KA(n){return Ky(n,!1)}function _y(n,e){if(!n||n.predicted||(e?!qd(n):!Xd(n)))return!1;let t=n.points;if(!t||t.length<63)return!1;let i=(d,u)=>Math.hypot(t[d*3]-t[u*3],t[d*3+1]-t[u*3+1]);if(i(5,6)<.008)return!1;let s=Math.max(.042,i(0,9)),r=i(0,12)<i(0,10)*1.16||i(0,12)<s*1.15,a=i(0,16)<i(0,14)*1.16||i(0,16)<s*1.12,o=i(0,20)<i(0,18)*1.18||i(0,20)<s*1.1;if(!(r&&a&&o))return!1;let l=n.pinching===!0||i(4,8)<s*.42,c=n.fist===!0||i(0,8)<i(0,6)*1.1;return l||c}function wy(n,e,t=!1){var u,h;vr&&(clearTimeout(vr),vr=null);let i=document.getElementById("hud")||document.body;(!Zt||!document.body.contains(Zt))&&(Zt=document.createElement("div"),Zt.id="gun-gesture-indicator",Zt.className="gun-logo-bubble",Zt.dataset.hand="right",Zt.innerHTML=`
      <div class="bolinha-card-inner">
        <img src="./icons/nextvr-bolinha-logo.png" alt="NextVR" class="gun-logo-img" draggable="false"/>
        <span class="bolinha-menu-lbl">Menu</span>
        <span class="bolinha-menu-bar"><span class="bolinha-menu-bar-fill"></span></span>
      </div>
    `,i.appendChild(Zt));let s=n.points,r=Number(e==null?void 0:e.scaleX)||1,a=Number(e==null?void 0:e.scaleY)||1,o=s&&s.length>=26?s[24]*.52+s[12]*.48:((u=n.palm)==null?void 0:u[0])??.55,l=s&&s.length>=26?(s[25]+s[13])*.5-.025:(((h=n.palm)==null?void 0:h[1])??.5)-.06,c=Math.max(.08,Math.min(.92,(o-.5)*r+.5)),d=Math.max(.08,Math.min(.9,(l-.5)*a+.5));Zt.style.left=`${(c*100).toFixed(1)}%`,Zt.style.top=`${(d*100).toFixed(1)}%`,Zt.hidden=!1,Zt.classList.toggle("fired",!!t),Zt.classList.toggle("gun-triggered",!!t),Zt.classList.toggle("bolinha-menu-card",!!t)}function Is(n=0){vr&&(clearTimeout(vr),vr=null),Zt&&(n>0?vr=setTimeout(()=>{var e,t;vr=null,Zt==null||Zt.remove(),Zt=null,document.documentElement.dataset.handBlueOutline==="right"&&delete document.documentElement.dataset.handBlueOutline,(t=(e=te).invalidate)==null||t.call(e)},n):(Zt.remove(),Zt=null,document.documentElement.dataset.handBlueOutline==="right"&&delete document.documentElement.dataset.handBlueOutline))}function Sy(n,e,t=!1){var u,h;br&&(clearTimeout(br),br=null);let i=document.getElementById("hud")||document.body;(!Kt||!document.body.contains(Kt))&&(Kt=document.createElement("div"),Kt.id="left-gesture-indicator",Kt.className="gun-logo-bubble left-logo-bubble",Kt.dataset.hand="left",Kt.innerHTML=`
      <div class="bolinha-card-inner">
        <img src="./icons/nextvr-bolinha-left.png" alt="NextVR Control" class="gun-logo-img left-logo-img" draggable="false"/>
        <span class="bolinha-menu-lbl">Menu</span>
        <span class="bolinha-menu-bar"><span class="bolinha-menu-bar-fill"></span></span>
      </div>
    `,i.appendChild(Kt));let s=n.points,r=Number(e==null?void 0:e.scaleX)||1,a=Number(e==null?void 0:e.scaleY)||1,o=s&&s.length>=26?s[24]*.52+s[12]*.48:((u=n.palm)==null?void 0:u[0])??.35,l=s&&s.length>=26?(s[25]+s[13])*.5-.025:(((h=n.palm)==null?void 0:h[1])??.5)-.06,c=Math.max(.08,Math.min(.92,(o-.5)*r+.5)),d=Math.max(.08,Math.min(.9,(l-.5)*a+.5));Kt.style.left=`${(c*100).toFixed(1)}%`,Kt.style.top=`${(d*100).toFixed(1)}%`,Kt.hidden=!1,Kt.classList.toggle("fired",!!t),Kt.classList.toggle("gun-triggered",!!t),Kt.classList.toggle("bolinha-menu-card",!!t)}function Ns(n=0){br&&(clearTimeout(br),br=null),Kt&&(n>0?br=setTimeout(()=>{var e,t;br=null,Kt==null||Kt.remove(),Kt=null,document.documentElement.dataset.handBlueOutline==="left"&&delete document.documentElement.dataset.handBlueOutline,(t=(e=te).invalidate)==null||t.call(e)},n):(Kt.remove(),Kt=null,document.documentElement.dataset.handBlueOutline==="left"&&delete document.documentElement.dataset.handBlueOutline))}function JA(n,e){var a,o,l,c,d,u,h,p,g,y,f,m,x,v,M,E,T,b,O,S,_,I,N,U;if(w.gunGesture===0)return ft.frames=0,ft.armed=!1,pt.frames=0,pt.armed=!1,Is(0),Ns(0),!1;let t=document.getElementById("gorilla-overlay");if(t&&t.style.display&&t.style.display!=="none"||he.some(C=>(C.id==="entry-menu"||C.id==="language")&&!C.hidden)||document.querySelector(".entry-menu-root")||lt.win||Ot.win||pn.start)return ft.frames=0,ft.armed=!1,pt.frames=0,pt.armed=!1,Is(0),Ns(0),!1;let i=!1,s=((n==null?void 0:n.hands)||[]).find(C=>qd(C));if(!s)(!((a=n==null?void 0:n.hands)!=null&&a.length)||e-ft.lastArmedAt>240&&e>=ft.blueUntil)&&(ft.frames=0,ft.armed=!1,ft.blueUntil=0,Is(0));else if(!Vf(s,!0))ft.frames=0,ft.armed=!1,ft.blueUntil=0,Is(0);else if(ZA(s))ft.frames+=1,ft.frames>=2&&(ft.armed=!0,ft.lastArmedAt=e,wy(s,n,!1),(l=(o=te).invalidate)==null||l.call(o)),i=i||ft.armed;else if(ft.armed&&e-ft.lastArmedAt<=850&&e-ft.lastTriggerAt>=750&&_y(s,!0)){let C=s.id||"left";ft.armed=!1,ft.frames=0,ft.lastTriggerAt=e,ft.blueUntil=e+750,document.documentElement.dataset.handBlueOutline="right",w.handDraw=1,(d=(c=window.NativeXR)==null?void 0:c.handVisuals)==null||d.call(c,!0),Hi.delete(C),da.add(C),n.consumed.add(C),mr(),wy(s,n,!0),Is(420),(u=window.nextvrToggleSpatialAndDockFromGesture)==null||u.call(window),(p=(h=window.NativeXR)==null?void 0:h.click)==null||p.call(h),(y=(g=te).invalidate)==null||y.call(g),(m=(f=te).render)==null||m.call(f,Ae,fe),i=!0}else e-ft.lastArmedAt>300&&e>=ft.blueUntil&&(ft.frames=0,ft.armed=!1,Is(0));let r=((n==null?void 0:n.hands)||[]).find(C=>Xd(C));if(!r)(!((x=n==null?void 0:n.hands)!=null&&x.length)||e-pt.lastArmedAt>240&&e>=pt.blueUntil)&&(pt.frames=0,pt.armed=!1,pt.blueUntil=0,Ns(0));else if(!Vf(r,!1))pt.frames=0,pt.armed=!1,pt.blueUntil=0,Ns(0);else if(KA(r))pt.frames+=1,pt.frames>=2&&(pt.armed=!0,pt.lastArmedAt=e,Sy(r,n,!1),(M=(v=te).invalidate)==null||M.call(v)),i=i||pt.armed;else if(pt.armed&&e-pt.lastArmedAt<=850&&e-pt.lastTriggerAt>=750&&_y(r,!1)){let C=r.id||"right";pt.armed=!1,pt.frames=0,pt.lastTriggerAt=e,pt.blueUntil=e+750,document.documentElement.dataset.handBlueOutline="left",w.handDraw=1,(T=(E=window.NativeXR)==null?void 0:E.handVisuals)==null||T.call(E,!0),Hi.delete(C),da.add(C),n.consumed.add(C),mr(),Sy(r,n,!0),Ns(420),(b=window.nextvrToggleLeftHandQuickMenu)==null||b.call(window),(S=(O=window.NativeXR)==null?void 0:O.click)==null||S.call(O),(I=(_=te).invalidate)==null||I.call(_),(U=(N=te).render)==null||U.call(N,Ae,fe),i=!0}else e-pt.lastArmedAt>300&&e>=pt.blueUntil&&(pt.frames=0,pt.armed=!1,Ns(0));return i}var Hi=new Map;function QA(n){if(!n||n.predicted||n.pinching)return!1;if(n.fist===!0)return!0;let e=n.points;if(!e||e.length<63)return!1;let t=(o,l)=>Math.hypot(e[o*3]-e[l*3],e[o*3+1]-e[l*3+1]);if(t(5,6)<.008||t(14,16)<.008||t(18,20)<.008)return!1;let i=t(0,8)<t(0,6)*1.08,s=t(0,12)<t(0,10)*1.08,r=t(0,16)<t(0,14)*1.08,a=t(0,20)<t(0,18)*1.08;return i&&s&&r&&a}function eE(n,e){var r,a,o,l,c,d,u;if(w.gunGesture===0)return Hi.clear(),!1;let t=document.getElementById("gorilla-overlay");if(t&&t.style.display&&t.style.display!=="none"||he.some(h=>(h.id==="entry-menu"||h.id==="language")&&!h.hidden)||document.querySelector(".entry-menu-root")||Ot.win||pn.start)return Hi.clear(),!1;let i=(n==null?void 0:n.hands)||[],s=new Set;for(let h of i){if(!h)continue;let p=h.id||(h.left?"left":"right");s.add(p);let g=QA(h),y=Nd(h,n,!0),f=Hi.get(p);if(g){if(!f||!f.active)f={active:!0,startAt:e,lastSeenAt:e,startX:y.x,startY:y.y,latched:!1},Hi.set(p,f);else if(f.lastSeenAt=e,Math.hypot(y.x-f.startX,y.y-f.startY)>.12&&(f.startAt=e,f.startX=y.x,f.startY=y.y),!f.latched&&e-f.startAt>=2e3)return f.latched=!0,Is(0),Ns(0),lt.win&&lt.source==="fist"&&as(),mr(),(r=window.nextvrOpenFistQuickMenu)==null||r.call(window),(o=(a=window.NativeXR)==null?void 0:a.click)==null||o.call(a),(c=(l=te).invalidate)==null||c.call(l),(u=(d=te).render)==null||u.call(d,Ae,fe),!0}else f&&(f.latched||e<f.lastSeenAt||e-f.lastSeenAt>260)&&Hi.delete(p)}for(let[h,p]of Hi.entries())!s.has(h)&&(p.latched||e<p.lastSeenAt||e-p.lastSeenAt>260)&&Hi.delete(h);return!1}var Mn=null,If=null;function tE(n="env",e=""){var s,r;let t=document.getElementById("hud")||document.body;(!Mn||!document.body.contains(Mn))&&(Mn=document.createElement("div"),Mn.id="vr-circle-loader",Mn.className="vr-circle-loader",Mn.dataset.circleLoader="1",Mn.hidden=!0,Mn.innerHTML=`
      <div class="vr-circle-ring-wrap">
        <svg viewBox="0 0 84 84" class="vr-circle-ring-svg">
          <circle cx="42" cy="42" r="34" class="vr-circle-track"/>
          <circle cx="42" cy="42" r="34" class="vr-circle-progress"/>
        </svg>
        <div class="vr-circle-label"></div>
      </div>
    `,t.appendChild(Mn)),Mn.dataset.kind=n;let i=Mn.querySelector(".vr-circle-label");i&&(i.textContent=n==="env"?`Carregando ambiente${e?" \xB7 "+e:""}\u2026`:`Abrindo ${e||"app"}\u2026`),Mn.hidden=!1,Mn.classList.remove("active"),Mn.offsetWidth,Mn.classList.add("active"),(r=(s=te).invalidate)==null||r.call(s),If&&clearTimeout(If),If=setTimeout(()=>{var a,o;Mn&&(Mn.hidden=!0,Mn.classList.remove("active"),(o=(a=te).invalidate)==null||o.call(a))},620)}window.nextvrShowCircleLoader=tE;function My(n=!1,e=Us){let t=gt;t!=null&&t.down&&(os({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(da.add(t.id),e.consumed.add(t.id))),gt=null}Ge("phonehands",n=>{var l,c;Us=n;let e=new Set(n.hands.map(d=>d.id));n.hands.length||ra(null);for(let d of Ld.keys())e.has(d)||Ld.delete(d);for(let d of Fs.keys())e.has(d)||Fs.delete(d);for(let d of da){let u=n.hands.find(h=>h.id===d);!u||!u.pinching?da.delete(d):n.consumed.add(d)}if(lt.win&&lt.source==="fist"){let d=n.hands.find(u=>u.id===lt.hand);if(!d||!d.fist||!he.includes(lt.win)||(l=lt.win)!=null&&l.hidden)as();else{n.consumed.add(d.id);let u=Nd(d,n,!0);Wf(u.x,u.y)}}let t=performance.now();if(JA(n,t),eE(n,t),!document.documentElement.classList.contains("xr-on")&&!he.some(d=>d.id==="entry-menu"&&!d.hidden))if(lt.win||Ot.win||pn.start||yt.classList.contains("grab-armed")||gt)Pd.reset();else{let d=(n.hands||[]).filter(p=>p.pinching&&!p.predicted),u=Cd(d),h=Pd.update(t,{left:u,right:u});if(h.opened){Pd.reset(),mr(),an=null,ut=null,Ti=-1,as(),Mr(),zs();for(let p of d)da.add(p.id),n.consumed.add(p.id);Bi()}else u&&h.progress>.15&&(mr(),an=null,ut=null,Ti=-1)}else Pd.reset();if(!(lt.win&&lt.source==="fist")){let d=n.hands.find(u=>!u.fist);if(d){let u=Nd(d,n),h=vy(zf(u.x,u.y));if(h){let{local:p,scale:g}=Hf(h.win,h.point),y=h.win;(Math.abs(p.x)*g.x>y.w*g.x/2-.06||Math.abs(p.y)*g.y>y.h*g.y/2-.06)&&(gl=h.win,Lf=t)}}}for(let d of he)(d!==gl||t-Lf>yy)&&d.shell.classList.remove("phone-grab-hover");gl&&t-Lf<=yy?gl.shell.classList.add("phone-grab-hover"):gl=null;for(let d of n.hands){let u=Ld.get(d.id)||!1;if(Ld.set(d.id,d.fist),!lt.win&&!Ot.win&&d.fist&&!u){let h=Nd(d,n,!0),p=vy(zf(h.x,h.y));p&&(((c=ve.hand)==null?void 0:c.id)===d.id&&mr(),Gf(p.win,h.x,h.y,"fist",d.id)&&n.consumed.add(d.id))}}let i=null;for(let d of n.hands){if(n.consumed.has(d.id)||!d.head||d.head.length!==63)continue;if(Array.isArray(d.aim)&&d.aim.length>=2){let h=ia(d.aim);if(Hs(h.x,h.y))continue}let u=new D().fromArray(d.head,24);if(!(u.length()>.7)){u.applyMatrix4(fe.matrixWorld);for(let h of he){if(h.hidden||h.id==="spatial-launcher")continue;let p=Hf(h,u),g=(gt==null?void 0:gt.win)===h&&gt.id===d.id,y=g?.08:.02,f=g?.26:.11;p.d>f||p.d<-.12||Math.abs(p.local.x)*p.scale.x>h.w*p.scale.x/2+y||Math.abs(p.local.y)*p.scale.y>h.h*p.scale.y/2+y||(!i||g||!i.current&&Math.abs(p.d)<Math.abs(i.d))&&(i={...p,id:d.id,win:h,point:u,current:g})}}}let s=()=>{if(!(lt.win||Ot.win||pn.start||yt.classList.contains("grab-armed")))for(let d of n.hands)n.consumed.has(d.id)||YA(d,n,t)};if(!i&&gt&&e.has(gt.id)&&he.includes(gt.win)&&!gt.win.hidden&&t-gt.lastSeen<=GA&&(i={...gt,current:!0,held:!0}),!i){My(!e.has(gt==null?void 0:gt.id),n),s();return}i.current?(gt.d+=(i.d-gt.d)*.45,gt.u+=(i.u-gt.u)*.45,gt.v+=(i.v-gt.v)*.45,i.held||(gt.lastSeen=t)):(My(!1,n),gt={...i,down:!1,previousD:i.d,lastSeen:t});let r=gt,a=r.u>=0&&r.u<=1&&r.v>=0&&r.v<=1,o={win:r.win,u:Math.max(0,Math.min(1,r.u)),v:Math.max(0,Math.min(1,r.v))};!r.down&&a&&r.d<=.012&&r.previousD>.012?(ve.down&&mr(),Jt(r.win),os(o,0),r.down=!0):r.down&&(r.d>=.035||!a)?(os(o,1),r.down=!1,n.hands.some(d=>d.id===r.id&&d.pinching)&&(da.add(r.id),n.consumed.add(r.id))):r.down&&os(o,2),r.previousD=r.d,r.down?(n.blockFar=!0,n.consumed.add(r.id)):s()});var Ay=0,Ey="";ll((n,e)=>{var a,o,l,c;if(!ye||e-Ay<16)return;Ay=e;let t=Us,i=[],s=w.fingerTouch!==0;for(let d of t.hands){let u=Fs.get(d.id),h=!!(u!=null&&u.targetEl),p=qd(d),g=Xd(d),y=!!(p&&(ft.armed&&Zt&&!Zt.hidden||e<ft.blueUntil)||g&&(pt.armed&&Kt&&!Kt.hidden||e<pt.blueUntil));if((gt==null?void 0:gt.id)===d.id&&gt.down){let T=gt,b=new D((T.u-.5)*T.win.w,(.5-T.v)*T.win.h,0).applyMatrix4(T.win.obj.matrixWorld);i.push({id:d.id,end:fe.worldToLocal(b).toArray(),direct:!0,touching:!0,fingerHover:!0,blueOutline:y,down:T.down,...s?{noBeam:!0}:{}});continue}if(t.consumed.has(d.id)||t.blockFar){i.push({id:d.id,hidden:!0,blueOutline:y});continue}let f=((a=ve.hand)==null?void 0:a.id)===d.id?Md(e):ia(d.aim),m=zf(f.x,f.y),x=he.filter(T=>!T.hidden).flatMap(T=>[T.resizeHit,T.grab,T.hit]);Gi&&(Li.hidden||x.push(is),x.push(Vi,Ci)),On&&st&&!Rl&&x.push(On);let v=m.intersectObjects(x,!1)[0],M=((o=ve.hand)==null?void 0:o.id)===d.id&&ve.down||e<Ds,E=h||M||!!v||(gt==null?void 0:gt.id)===d.id;i.push({id:d.id,...v?{end:v.point.toArray()}:{},down:M,touching:E,fingerHover:h,blueOutline:y,...s?{noBeam:!0}:{}})}let r=JSON.stringify(i);r!==Ey&&(Ey=r,(c=(l=window.NativeXR).handTargets)==null||c.call(l,r))});var Jy={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function Qy(n){return Jy[n]||Jy.landscape}function ev(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return Qy(n==null?void 0:n.shape)}function nE(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function Cl(n){let e=nE(ev(n));return{w:e.w+2,h:e.h+116}}var iE=400,av=3;function Qf(n,e){if(e!=null&&e.shape)return e.shape;let t=on.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||"landscape"}var Ct={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:av,sdk:0,recents:[],library:0,launch:null},on={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},gi=new Map,Jf=new Set,tv=0,nv="";var ep=n=>Ct.sessions.find(e=>e.pkg===n)||null,sE=()=>Ct.sessions.filter(n=>n.alive),rE=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function Gs(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{Je(k("appCommandFailed"))}}function aE(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Ct.sessions=Array.isArray(e.sessions)?e.sessions:[],Ct.shizuku=e.shizuku||Ct.shizuku,Ct.input=e.input||Ct.input,Ct.capacity=e.capacity||av,Ct.recents=Array.isArray(e.recents)?e.recents:[],Ct.sdk=e.sdk||Ct.sdk,Ct.launch=e.launch||null,Ct.diagnostics=e.diagnostics||Ct.diagnostics,e.icons!=null&&e.icons!==on.icons&&(on.icons=e.icons,on.loaded=!1),oE(),Me("appsState"))}function oE(){var e,t,i,s;let n=new Set;for(let r of Ct.sessions)if(r.state!=="stopped"){if(r.state==="suspended"){iv(r.pkg,!0);continue}n.add(r.pkg),gi.has(r.pkg)?ov(r):lE(r)}for(let r of[...gi.keys()])n.has(r)||iv(r,!0);(t=(e=te).invalidate)==null||t.call(e),(s=(i=te).render)==null||s.call(i,Ae,fe),Yd(!0)}function lE(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?k("appMirrorBadge"):k("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(h,p,g)=>{let y=document.createElement("button");return y.className="app-key",y.title=p,y.setAttribute("aria-label",p),y.innerHTML=J(g),y.onclick=()=>Gs({cmd:"key",pkg:n.pkg,key:h}),y},a=document.createElement("button");a.className="app-key",a.title=k("appKeyboard"),a.dataset.act="keys",a.innerHTML=J("keyboard"),a.onclick=()=>fE(n.pkg);let o=document.createElement("button");o.className="app-key",o.dataset.act="rotate",o.title=k("appRotate"),o.setAttribute("aria-label",k("appRotate")),o.innerHTML=J("rotate"),o.onclick=()=>uE(n.pkg),t.append(i,s,r("back",k("appBack"),"back"),r("home",k("appHome"),"top"),r("recents",k("appRecents"),"appGrid"),a,o);let l=document.createElement("div");l.className="app-surface",l.dataset.nativeApp=n.pkg,l.dataset.aspect=String(n.display&&n.display.aspect||16/9),l.dataset.shape=Qf(n.pkg,n);let c=document.createElement("div");c.className="app-state",e.append(t,l),l.append(c);let d=Cl(n),u=Qt({id:rE(n.pkg),title:n.title,node:e,w:d.w,h:d.h});gi.set(n.pkg,{win:u,surface:l,status:c,badge:i,session:n}),ov(n)}function ov(n){var r,a;let e=gi.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?k("appMirrorBadge"):k("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:k("appStarting"),creating:k("appStarting"),launching:k("appStarting"),running:"",failed:n.error?dE(n):k("appFailed")};n.mode==="display"&&((r=Ct.shizuku)!=null&&r.binding||!((a=Ct.shizuku)!=null&&a.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=k("appWaitingService"),i.creating=k("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=k("appMirrorStarting"),i.creating=k("appMirrorStarting"),i.launching=k("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&cE.has(n.error))){let o=document.createElement("button");o.className="app-state-btn",o.textContent=k("appOpenOnPhone"),o.onclick=()=>Gs({cmd:"phone",pkg:n.pkg}),e.status.appendChild(o)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var cE=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function dE(n){let e={shizuku_unavailable:k("appNeedShizuku"),shizuku_denied:k("appShizukuDenied"),shizuku_blocked:k("appShizukuBlocked"),display_refused:k("appDisplayRefused"),display_failed:k("appDisplayFailed"),no_launcher_activity:k("appNoLauncher"),consent_denied:k("appConsentDenied"),mirror_stopped:k("appMirrorStopped"),mirror_failed:k("appMirrorFailed"),mirror_refused:k("appMirrorFailed"),projection_failed:k("appMirrorFailed"),display_empty:k("appDisplayEmpty"),app_not_running:k("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?k("appSurfaceFailed"):e[t]||`${k("appFailed")}: ${t}`}function iv(n,e){let t=gi.get(n);t&&(gi.delete(n),e&&Jf.add(n),ht(t.win),Jf.delete(n))}Ge("wins",()=>{for(let n of[...gi.keys()]){let e=gi.get(n);Jf.has(n)||he.includes(e.win)||(gi.delete(n),Gs({cmd:"close",pkg:n}))}Me("appsState")});function $d(n){n&&Gs({cmd:"open",pkg:n,shape:Qf(n,ep(n))})}function uE(n){var a;let e=gi.get(n),t=ep(n),s=((e==null?void 0:e.surface.dataset.shape)||Qf(n,t))==="portrait"?"landscape":"portrait",r=Cl({shape:s,display:(t==null?void 0:t.display)||((a=e==null?void 0:e.session)==null?void 0:a.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),Gs({cmd:"shape",pkg:n,shape:s}),Yd(!0)}function sv(){Gs({cmd:"shizuku"})}function hE(){on.loaded=!1,Gs({cmd:"refresh"})}function fE(n){pi(!0,{nativeId:"app:"+n})}function tp(n){var e,t;if(on.loaded&&!n)return on;on.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,on.query,on.showSystem),s=JSON.parse(i||'{"apps":[]}');on.apps=Array.isArray(s.apps)?s.apps:[],on.shown=s.shown||on.apps.length,on.total=s.total||on.apps.length,on.icons=s.icons||on.icons}catch{on.apps=[]}return Me("appsState"),on}function Yd(n){let e=[];for(let[i,s]of gi)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===nv||(nv=t,Gs({cmd:"sync",windows:e}))}function pE(){tv||(tv=setInterval(()=>{gi.size&&Yd(!1)},iE))}Ge("wins",()=>Yd(!0));var rv={install:()=>k("shizukuInstall"),start:()=>k("shizukuStart"),update:()=>k("shizukuUpdate"),ask:()=>k("shizukuAsk"),denied:()=>k("shizukuDenied"),rebind:()=>k("shizukuRebind"),ready:()=>k("shizukuReady"),unknown:()=>k("shizukuUnknown")},mE=new Set(["hosted","permission","capture"]);function gE(){let n=Ct.shizuku||{};return mE.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function lv(){var d;let n=Ct.shizuku||{},e=gE(),t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>k("routeHosted"),permission:()=>k("routePermission"),capture:()=>k("routeCapture")};s.textContent=(r[e]||r.capture)();let a=document.createElement("small");if(a.textContent=(rv[n.state]||rv.unknown)(),s.appendChild(a),e==="capture"&&!((d=Ct.input)!=null&&d.accessibility)){let u=document.createElement("small");u.textContent=k("appCaptureInput"),s.appendChild(u)}else if(n.detail){let u=document.createElement("small");u.textContent=n.detail,s.appendChild(u)}t.append(i,s);let o=document.createElement("button");o.className="az-btn",n.ask?(o.textContent=k("shizukuGrant"),o.onclick=()=>sv()):(o.textContent=k("shizukuRecheck"),o.onclick=()=>{hE(),sv()}),t.appendChild(o);let l=document.createElement("button");l.className="az-btn ghost",l.textContent=k("appSelfTest"),l.onclick=async()=>{var u;l.disabled=!0;try{await Gs({cmd:"selftest"});let h=(u=Ct.diagnostics)==null?void 0:u.selfTest;h&&Je(h.ok?k("appSelfTestOk"):k("appSelfTestFailed"))}catch{Je(k("appCommandFailed"))}finally{l.disabled=!1}},t.appendChild(l);let c=document.createElement("button");return c.className="az-btn ghost",c.textContent=k("appDiagnostics"),c.onclick=()=>{let u=t.querySelector(".az-caps");if(u){u.remove();return}let h=document.createElement("pre");h.className="az-caps",h.textContent=yE(),h.onclick=()=>vE(h.textContent),t.appendChild(h)},t.appendChild(c),t}function yE(){var i;let n=Ct.shizuku||{},e=Ct.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||Ct.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...Ct.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=Ct.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||Ct.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function vE(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&Je(k("appDiagnosticsCopied"));return}catch{}}var ds=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function np(n){let e=ep(n.pkg),t=`<span class="nm">${ds((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${ds(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${ds(e.state==="suspended"?k("appMinimized"):k("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${ds(k("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${ds(n.pkg)}" data-session="${e?ds(e.state):""}" data-pkg="${ds(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${ds(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${ds(k("androidApps"))}">${J("device")}</span>`+r+s+`</span><span class="lib-label">${ds(n.label||n.pkg)}</span></button>`}function jd(n){let e=gi.get(n);e&&Jt(e.win)}function cv(){return sE().length}function dv(){return on.apps}function uv(){ye&&(window.nextvrApps=aE,pE(),Ge("lang",()=>{on.loaded=!1,Me("appsState")}))}var Jd="nextvr-xr-game",Ll="nextvr-xr-menu",Ut={runtime:"missing",runtimeVersion:-1,runtimeBundled:!1,vrapi:"missing",broker:!1,summary:"",hosting:!1,display:-1,problem:null,handFeed:0,handMode:"controllers",game:null,canvas:null},Tr=[],bE=null,rp=!1,fv=()=>Ut,pv=()=>Tr,mv=()=>Ut.hosting,Pl=()=>Ut.runtime==="ready",gv=()=>Ut.handMode,xE=()=>{var n;return((n=Ut.game)==null?void 0:n.package)||null};function Xs(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.xrCommand)==null||t.call(e,JSON.stringify(n))}catch{}}function hv(n){var t;let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Object.assign(Ut,e),Kd=null,Ut.hosting&&((t=Ut.game)!=null&&t.package)?SE(Ut.game):ME(),Me("xr",{...Ut,games:Tr}))}function _E(n){let e;try{e=JSON.parse(n)}catch{e=null}Tr=Array.isArray(e==null?void 0:e.games)?e.games:[],bE=(e==null?void 0:e.problem)||null,rp=!0,Me("xr",{...Ut,games:Tr})}function yv(){var n,e;if(!(!ye||window.nextvrXr)){window.nextvrXr=hv,window.nextvrXrLibrary=_E;try{hv(((e=(n=window.NativeXR).xrState)==null?void 0:e.call(n))||"{}")}catch{}ip(),Ge("lang",()=>{ip(),Me("xr",{...Ut,games:Tr})})}}function ip(){Xs({cmd:"library"})}function vv(){rp=!1,Xs({cmd:"refresh"}),ip()}function ap(n){!n||Ut.hosting||Xs({cmd:"open",package:n})}function op(){Ut.hosting&&Xs({cmd:"close"})}function wE(){Ut.hosting&&Xs({cmd:"minimize"})}function bv(){Ut.hosting&&Xs({cmd:"restore"})}function lp(){Xs({cmd:"runtime"})}function xv(n){var t,i;let e=n==="hands"?"hands":"controllers";try{(i=(t=window.NativeXR)==null?void 0:t.xrHandMode)==null||i.call(t,e)}catch{}Ut.handMode=e,Me("xr",{...Ut,games:Tr})}function cp(){Xs({cmd:"selftest"})}function dp(){return Tr.map(n=>({kind:"xr",id:"xr:"+n.package,pkg:n.package,name:n.label||n.package,label:n.label||n.package,game:n}))}function _v(n){let e=n.game,t=`<span class="nm">${Ws(`${(e.label||e.package).slice(0,2)}`)}</span>`,i=xE()===e.package?`<span class="lib-open">${Ws(k("appOpen"))}</span>`:"",s=e.hostable?"":`<span class="lib-sys" title="${Ws(e.describe||k("xrNotHostable"))}">\u2715</span>`;return`<button class="lib-tile game" data-xr="${Ws(e.package)}" aria-label="${Ws(e.label||e.package)}"><span class="lib-cover"><span class="lib-brand">${t}</span><span class="lib-src" title="${Ws(k("xrTitle"))}">${J("controller")}</span>`+s+i+`<span class="lib-vr">XR</span></span><span class="lib-label">${Ws(e.label||e.package)}</span></button>`}var Ws=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function wv(){if(Pl()||!rp||!Tr.length)return null;let n=document.createElement("div");n.className="lib-note az-row";let e=document.createElement("span");e.className="az-dot",e.dataset.state=Ut.runtime;let t=document.createElement("span");t.className="az-text",t.textContent=Ut.runtimeBundled?k("xrMissing"):k("xrMissingNoApk");let i=document.createElement("small");if(i.textContent=Ut.summary||Ut.problem||k("xrSummaryMissing"),t.appendChild(i),n.append(e,t),Ut.runtimeBundled){let r=document.createElement("button");r.className="az-btn",r.textContent=k("xrInstall"),r.onclick=()=>{lp(),Je(k("xrInstalling"))},n.appendChild(r)}let s=document.createElement("button");return s.className="az-btn ghost",s.textContent=k("xrSelfTest"),s.onclick=()=>cp(),n.appendChild(s),n}var qs=!1,sp=null;function SE(n){var d;if(qs)return;sp={windows:he.map(u=>({win:u,hidden:u.hidden})),dockHidden:Vd(),keyboard:Xy(),focus:((d=El())==null?void 0:d.id)||null};for(let u of he)u.setHidden(!0);Er(!0),en(!0),document.documentElement.classList.add("game-on","xr-on"),qs=!0,up.reset(),Zd(0);let e=document.createElement("div");e.className="app-native-host";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=k("xrBadge");let s=document.createElement("div");s.className="app-surface",s.dataset.nativeXr=n.package;let r=Ut.canvas||{w:1920,h:1080};s.dataset.aspect=String(r.w/r.h||16/9);let a=document.createElement("span");a.className="app-bar-spacer";let o=document.createElement("button");o.className="app-key",o.title=k("appMinimize"),o.setAttribute("aria-label",k("appMinimize")),o.innerHTML=J("chevronDown"),o.onclick=()=>wE();let l=document.createElement("button");l.className="app-key",l.title=k("close"),l.setAttribute("aria-label",k("close")),l.innerHTML=J("x"),l.onclick=()=>op(),t.append(i,a,o,l),e.append(t,s);let c=Cl({shape:"landscape",display:{w:r.w,h:r.h}});Qt({id:Jd,title:n.label||n.package,node:e,w:c.w,h:c.h})}function ME(){if(!qs)return;qs=!1,Kd=null;for(let e of[...he])(e.id===Jd||e.id===Ll)&&ht(e);document.documentElement.classList.remove("game-on","xr-on");let n=sp;if(sp=null,n){let e=new Set(n.windows.map(i=>i.win));for(let i of[...he])!e.has(i)&&!i.onboarding&&ht(i);en(n.dockHidden);for(let{win:i,hidden:s}of n.windows)he.includes(i)&&i.setHidden(s);n.keyboard&&Er(!1);let t=he.find(i=>i.id===n.focus);t&&Jt(t)}up.reset(),Zd(0)}Ge("wins",()=>{!qs||!window.nextvrXr||he.some(n=>n.id===Jd)||op()});var up=new mo,AE=()=>qs&&he.some(n=>n.id===Ll);function EE(){if(!qs||he.some(i=>i.id===Ll)||!Ut.game)return;let n=Ut.game,e=document.createElement("div");e.className="game-menu",e.innerHTML=`
    <div class="gm-t">${Ws(n.label||n.package)}</div>
    <p class="gm-sub">${Ws(k("xrMenuHint"))}</p>
    <button class="gm-btn" data-act="continue">${k("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${J("settings")}<span>${k("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${k("game.exit")}</button>`,e.addEventListener("click",i=>{let s=i.target.closest("[data-act]");s&&(TE(),s.dataset.act==="exit"?op():s.dataset.act==="settings"&&Me("game:settings"))});let t=Qt({id:Ll,title:k("game.menu"),node:e,w:560,h:470,free:!0,at:{x:0,y:Gt,z:-.55}});t==null||t.setCurve(0)}function TE(){let n=he.find(e=>e.id===Ll);n&&ht(n)}function Zd(n){let e=document.getElementById("gameRing");if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var Kd=null;function RE(){let n=qs?Uy(ve.x,ve.y):null,e=!!n&&n.win.id!==Jd&&!n.win.onboarding;e!==Kd&&(Kd=e,Xs({cmd:"hands-ui",blocked:e}))}Ge("phonehands",n=>{if(!qs)return;RE();let e=(n.hands||[]).filter(s=>s.pinching),t=Cd(e),i=up.update(performance.now(),{left:t,right:t});Zd(i.progress),i.opened&&EE(),i.closed&&!AE()&&Zd(0)});var Il=null,Zn=null,eu="",Qd=0,Rr=new Set,CE='button:not(:disabled),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="button"], [tabindex]:not([tabindex="-1"])';function LE(){var i;let n=document.getElementById("entry-fullscreen");if(n&&!n.hidden)return n;let e=El();if(e&&!e.hidden)return e.el;let t=document.querySelector(".dock");return t&&t.offsetWidth&&getComputedStyle(t).display!=="none"?t:((i=he.find(s=>!s.hidden&&!s.onboarding))==null?void 0:i.el)||null}function Sv(){let n=LE();return n?[...n.querySelectorAll(CE)].filter(e=>{if(e.closest("[hidden],.win-shell[hidden]"))return!1;let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&getComputedStyle(e).visibility!=="hidden"}):[]}function $s(n){Zn&&Zn!==n&&Zn.classList.remove("joycon-selected"),Zn=n||null,Zn&&(Zn.classList.add("joycon-selected"),Zn.focus({preventScroll:!0}))}function hp(n){let e=Sv();if(!e.length){$s(null);return}if(e.indexOf(Zn)<0){$s(e[0]);return}let i=Zn.getBoundingClientRect(),s=i.left+i.width/2,r=i.top+i.height/2,a=n==="left"?[-1,0]:n==="right"?[1,0]:n==="up"?[0,-1]:[0,1],o=null,l=1/0;for(let c of e){if(c===Zn)continue;let d=c.getBoundingClientRect(),u=d.left+d.width/2-s,h=d.top+d.height/2-r,p=u*a[0]+h*a[1];if(p<=2)continue;let g=Math.abs(u*a[1]-h*a[0]),y=p+g*1.8;y<l&&(o=c,l=y)}o||(o=n==="left"||n==="up"?e.at(-1):e[0]),$s(o)}function PE(){let n=Sv();n.length&&((!Zn||!n.includes(Zn))&&$s(n[0]),Zn==null||Zn.click())}function IE(){var s;let n=document.querySelector('#entry-fullscreen [data-entry-act="back"]');if(n){n.click(),$s(null);return}let e=El(),t=(s=e==null?void 0:e.el)==null?void 0:s.querySelector('[data-entry-act="back"]');if(t){t.click(),$s(null);return}if(e&&!e.onboarding){ht(e),$s(null);return}let i=document.activeElement;i&&i!==document.body&&i.blur()}function NE(){if(Il){let n=Il;Il=null;for(let{win:e,hidden:t}of n.windows)he.includes(e)&&e.setHidden(t);en(n.dockHidden),Ht(n.dockVisible),Er(n.keyboardHidden),$s(null);return}Il={windows:he.filter(n=>!n.onboarding).map(n=>({win:n,hidden:n.hidden})),dockHidden:Vd(),dockVisible:Vy(),keyboardHidden:$y()};for(let{win:n}of Il.windows)n.setHidden(!0);Er(!0),en(!0),$s(null)}function DE(n,e){if(n==="home"){!Rr.has(n)&&e===0&&NE(),Rr.add(n);return}if(n==="left"||n==="right"||n==="up"||n==="down"){(!Rr.has(n)||e>0)&&hp(n),Rr.add(n);return}Rr.has(n)||(Rr.add(n),n==="accept"?PE():n==="back"&&IE())}function kE(n,e,t=0){e?DE(n,t):Rr.delete(n)}function OE(n,e){return Math.abs(n)<.58&&Math.abs(e)<.58?"":Math.abs(n)>Math.abs(e)?n<0?"left":"right":e<0?"up":"down"}function UE(n,e){let t=OE(n,e);if(!t){eu="",Qd=0;return}let i=performance.now();t!==eu?(eu=t,hp(t),Qd=i+320):i>=Qd&&(hp(t),Qd=i+170)}function Mv(){!ye||window.__nextvrJoyconInstalled||(window.__nextvrJoyconInstalled=!0,window.__nextvrJoyconKey=kE,window.__nextvrJoyconAxes=UE,window.addEventListener("blur",()=>{Rr.clear(),eu=""}),window.addEventListener("gamepadconnected",n=>{var t;let e=((t=n.gamepad)==null?void 0:t.id)||"Bluetooth gamepad";Je(/joy.?con/i.test(e)?"Joy-Con conectado":`Controle conectado: ${e}`)}))}var Av="v2.0.0";var fp="ENTRE EM OUTRO MUNDO";var Ev=Object.freeze(["NeyVR","Faylan","colaboradores do nextVR","JocaVR"]),Tv=Object.freeze({NeyVR:"o Dono absoluto mais aurudo do planeta.",Faylan:"o desenvolvedor mais sabido de todo o universo muita aura","colaboradores do nextVR":"",JocaVR:"o portador de jogos mais importante do planeta aurudo 67"}),pp="NextVR \u2014 realidade aumentada",tu=Object.freeze(["O NextVR \xE9 um projeto de realidade virtual criado para transformar a maneira como voc\xEA interage com o mundo digital usando apenas um celular e um VR Box.","Nosso objetivo \xE9 aproximar a experi\xEAncia de dispositivos como o Meta Quest, trazendo recursos como Hand Tracking, ambientes virtuais imersivos e uma interface moderna, futurista e intuitiva.","Estamos desenvolvendo o NextVR para levar a realidade virtual a mais pessoas, sem precisar de equipamentos caros. Cada atualiza\xE7\xE3o representa um novo passo rumo a uma experi\xEAncia mais completa, interativa e acess\xEDvel.","NextVR \u2014 Mais que um app, uma nova forma de ver."]),FE=[pp,...tu].join(`

`);var BE=`
<svg viewBox="0 0 28 24" fill="none" class="entry-back-svg" aria-hidden="true">
  <path d="M11 5L4 12L11 19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19C21.8 12 24 14.2 24 17V19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,zE=`
<svg viewBox="0 0 36 36" fill="none" class="entry-reticle-svg" aria-hidden="true">
  <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="2"/>
  <path d="M18 3V8M18 28V33M3 18H8M28 18H33" stroke="currentColor" stroke-width="2"/>
</svg>`,Rv=`
<svg viewBox="0 0 24 24" fill="currentColor" class="entry-user-svg" aria-hidden="true">
  <circle cx="12" cy="8.2" r="4.2"/>
  <path d="M4 20.5c0-4.2 3.6-6.8 8-6.8s8 2.6 8 6.8z"/>
</svg>`,Cv=`
<svg viewBox="0 0 24 24" fill="none" class="entry-store-svg" aria-hidden="true">
  <path d="M6 8h12l-1.2 12H7.2L6 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`,HE=`
<svg viewBox="0 0 24 24" class="entry-verified-svg" aria-hidden="true">
  <circle cx="12" cy="12" r="10.5" fill="#fe2c55" stroke="#ff6384" stroke-width="1"/>
  <path d="M7.6 12.4l3 3 5.8-6.2" fill="none" stroke="#ffffff" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,VE=[{id:"beat-vr",name:"Beat Saber",cat:"Modo VR Imediato \xB7 4.9 \u2605",bg:"#070814",img:"./beat-saber-logo.jpg"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"A\xE7\xE3o \xB7 Arena VR \xB7 4.8 \u2605",bg:"#0a1426",img:"./hyper-dash-logo.jpg"},{id:"roblox-vr",name:"Roblox",cat:"Ambiente Preto \xB7 4.8 \u2605",bg:"#090d16",img:"./roblox-logo.jpg"},{id:"tiktok",name:"TikTok",cat:"V\xEDdeos Curtos \xB7 4.9 \u2605",bg:"#000000",img:"./tiktok-logo.jpg"},{id:"youtube",name:"YouTube VR",cat:"V\xEDdeo \xB7 360\xB0 \xB7 4.8 \u2605",bg:"#dc2626",img:"./icons/youtube.svg"},{id:"discord",name:"Discord",cat:"Social \xB7 Voz \xB7 4.7 \u2605",bg:"#4f46e5",img:"./icons/discord.svg"},{id:"netflix",name:"Netflix",cat:"Cinema \xB7 TV \xB7 4.8 \u2605",bg:"#991b1b"},{id:"spotify",name:"Spotify",cat:"M\xFAsica \xB7 \xC1udio \xB7 4.8 \u2605",bg:"#059669",img:"./icons/spotify.svg"}],GE=[{id:"chrome",label:"Chrome N",url:"./icons/nextvr-chrome-n.png"},{id:"purple",label:"Neon N",url:"./icons/nextvr-n.png"},{id:"cyber",label:"Cyber Blue",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><circle cx="40" cy="29" r="13" fill="#fff"/><path d="M16 68c0-13 11-21 24-21s24 8 24 21z" fill="#fff"/></svg>')},{id:"emerald",label:"Emerald VR",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><rect x="14" y="26" width="52" height="26" rx="10" fill="#fff"/><circle cx="30" cy="39" r="6" fill="#0f172a"/><circle cx="50" cy="39" r="6" fill="#0f172a"/></svg>')}];function Pi(n){return String(n||"").replace(/[&<>"']/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":e===">"?"&gt;":e==='"'?"&quot;":"&#39;")}var mp={pt:{start:"Iniciar",startVr:"Iniciar VR",settings:"Configura\xE7\xF5es",basicSettings:"Configura\xE7\xF5es b\xE1sicas",handStyle:"Hand tracking style",handDrawn:"M\xE3o desenhada",handInvisible:"Invis\xEDvel",collaborators:"Colaboradores",about:"Sobre",back:"Voltar",store:"Store",storeTitle:"Store NextVR \u2014 Jogos & Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Ativado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"qualidade",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"M\xE9dia (890p)",qLow:"Baixa (390p)",ocularCell:"c\xE2mera grande ocular (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRILHO",handCell:"Hand tracking",fingerTouchOn:"Toque (Sem Pin\xE7a): ON",fingerTouchOff:"Toque (Sem Pin\xE7a): OFF",envTitle:"Ambiente",envAr:"C\xE2mera (AR)",envSunset:"P\xF4r do Sol",envNight:"Noite"},en:{start:"Start",startVr:"Start VR",settings:"Settings",basicSettings:"Basic Settings",handStyle:"Hand tracking style",handDrawn:"Drawn hand",handInvisible:"Invisible",collaborators:"Collaborators",about:"About",back:"Back",store:"Store",storeTitle:"NextVR Store \u2014 Games & Apps",langCell:"LANGUAGE",spatialCell:"SPATIAL APP",on:"Enabled",dock:"Dock",dockSnapOn:"Dock Slot: ON",dockSnapOff:"Dock Slot: OFF",qualityCell:"quality",qAuto:"Auto",qHigh:"High (1080p)",qMed:"Medium (890p)",qLow:"Low (390p)",ocularCell:"ultra-wide camera (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRIGHTNESS",handCell:"Hand tracking",fingerTouchOn:"Finger Touch: ON",fingerTouchOff:"Finger Touch: OFF",envTitle:"Environment",envAr:"Camera (AR)",envSunset:"Sunset",envNight:"Night"},es:{start:"Iniciar",startVr:"Iniciar VR",settings:"Ajustes",basicSettings:"Ajustes b\xE1sicos",handStyle:"Hand tracking style",handDrawn:"Mano dibujada",handInvisible:"Invisible",collaborators:"Colaboradores",about:"Acerca de",back:"Volver",store:"Tienda",storeTitle:"Tienda NextVR \u2014 Juegos y Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Activado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"calidad",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"Media (890p)",qLow:"Baja (390p)",ocularCell:"c\xE1mara gran angular (0.5x)",volumeCell:"VOLUMEN",brightnessCell:"BRILLO",handCell:"Hand tracking",fingerTouchOn:"Toque \xCDndice: ON",fingerTouchOff:"Toque \xCDndice: OFF",envTitle:"Entorno",envAr:"C\xE1mara (AR)",envSunset:"Atardecer",envNight:"Noche"},ja:{start:"\u958B\u59CB",startVr:"VR\u3092\u958B\u59CB",settings:"\u8A2D\u5B9A",basicSettings:"\u57FA\u672C\u8A2D\u5B9A",handStyle:"Hand tracking style",handDrawn:"\u624B\u3092\u8868\u793A",handInvisible:"\u975E\u8868\u793A",collaborators:"\u30B3\u30E9\u30DC\u30EC\u30FC\u30BF\u30FC",about:"\u6982\u8981",back:"\u623B\u308B",store:"\u30B9\u30C8\u30A2",storeTitle:"NextVR \u30B9\u30C8\u30A2 \u2014 \u30B2\u30FC\u30E0\uFF06\u30A2\u30D7\u30EA",langCell:"\u8A00\u8A9E",spatialCell:"SPATIAL APP",on:"\u30AA\u30F3",dock:"\u30C9\u30C3\u30AF",dockSnapOn:"\u30B9\u30ED\u30C3\u30C8: ON",dockSnapOff:"\u30B9\u30ED\u30C3\u30C8: OFF",qualityCell:"\u753B\u8CEA",qAuto:"\u81EA\u52D5",qHigh:"\u9AD8 (1080p)",qMed:"\u4E2D (890p)",qLow:"\u4F4E (390p)",ocularCell:"\u8D85\u5E83\u89D2\u30AB\u30E1\u30E9 (0.5x)",volumeCell:"\u97F3\u91CF",brightnessCell:"\u660E\u308B\u3055",handCell:"Hand tracking",fingerTouchOn:"\u6307\u30BF\u30C3\u30C1: ON",fingerTouchOff:"\u6307\u30BF\u30C3\u30C1: OFF",envTitle:"\u74B0\u5883",envAr:"\u30AB\u30E1\u30E9 (AR)",envSunset:"\u5915\u66AE\u308C",envNight:"\u591C"},ru:{start:"\u041D\u0430\u0447\u0430\u0442\u044C",startVr:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C VR",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",basicSettings:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",handStyle:"Hand tracking style",handDrawn:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0443\u043A\u0430",handInvisible:"\u041D\u0435\u0432\u0438\u0434\u0438\u043C\u0430\u044F",collaborators:"\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",about:"\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438",back:"\u041D\u0430\u0437\u0430\u0434",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",storeTitle:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D NextVR \u2014 \u0418\u0433\u0440\u044B \u0438 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",langCell:"\u042F\u0417\u042B\u041A",spatialCell:"SPATIAL APP",on:"\u0412\u043A\u043B.",dock:"\u0414\u043E\u043A",dockSnapOn:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: ON",dockSnapOff:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: OFF",qualityCell:"\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",qAuto:"\u0410\u0432\u0442\u043E",qHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qMed:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",ocularCell:"\u0448\u0438\u0440\u043E\u043A\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430 (0.5x)",volumeCell:"\u0413\u0420\u041E\u041C\u041A\u041E\u0421\u0422\u042C",brightnessCell:"\u042F\u0420\u041A\u041E\u0421\u0422\u042C",handCell:"Hand tracking",fingerTouchOn:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: ON",fingerTouchOff:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: OFF",envTitle:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",envAr:"\u041A\u0430\u043C\u0435\u0440\u0430 (AR)",envSunset:"\u0417\u0430\u043A\u0430\u0442",envNight:"\u041D\u043E\u0447\u044C"},de:{start:"Starten",startVr:"VR starten",settings:"Einstellungen",basicSettings:"Grundeinstellungen",handStyle:"Hand tracking style",handDrawn:"Gezeichnete Hand",handInvisible:"Unsichtbar",collaborators:"Mitwirkende",about:"\xDCber",back:"Zur\xFCck",store:"Store",storeTitle:"NextVR Store \u2014 Spiele & Apps",langCell:"SPRACHE",spatialCell:"SPATIAL APP",on:"Aktiviert",dock:"Dock",dockSnapOn:"Dock-Slot: ON",dockSnapOff:"Dock-Slot: OFF",qualityCell:"Qualit\xE4t",qAuto:"Auto",qHigh:"Hoch (1080p)",qMed:"Mittel (890p)",qLow:"Niedrig (390p)",ocularCell:"Ultraweitwinkel (0.5x)",volumeCell:"LAUTST\xC4RKE",brightnessCell:"HELLIGKEIT",handCell:"Hand tracking",fingerTouchOn:"Finger-Touch: ON",fingerTouchOff:"Finger-Touch: OFF",envTitle:"Umgebung",envAr:"Kamera (AR)",envSunset:"Sonnenuntergang",envNight:"Nacht"}},Qe=n=>(mp[ff()]||mp.pt)[n]||mp.pt[n]||n;function gp(n){return Qe(n?"handDrawn":"handInvisible")}function yp({onStart:n,onLaunchGorilla:e,getStatus:t,fullscreen:i=!1}={}){let s=document.createElement("div");s.className=i?"entry-menu-root entry-menu-root--fullscreen":"entry-menu-root",s.dataset.entryMenu="2.0.0",i&&(s.dataset.entryFullscreen="1");let r="home",a=6,o=0,l=null,c=null,d=["Carregando c\xE2mera AR...","Carregando Dock...","Otimizando Hand tracking...","Calibrando lentes 3D...","Carregando aplicativos espaciais...","Iniciando NextVR..."],u=N=>N<17?d[0]:N<35?d[1]:N<55?d[2]:N<75?d[3]:N<92?d[4]:d[5],h=()=>{l&&(clearInterval(l),l=null)},p=()=>{let N=s.querySelector("[data-entry-countdown]"),U=s.querySelector("[data-entry-load-pct]"),C=s.querySelector("[data-entry-load-bar]"),R=s.querySelector("[data-entry-load-status]"),F=s.querySelector("[data-entry-countdown-sub]");N&&(N.textContent=String(a)),U&&(U.textContent=`${o}%`),C&&(C.style.width=`${o}%`),R&&(R.textContent=u(o)),F&&(F.textContent=`COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...`)},g=()=>{h(),a=6,o=0,r="loading",_();let N=6e3,U=performance.now();l=setInterval(()=>{let C=Math.max(0,performance.now()-U);if(o=Math.min(100,Math.round(C/N*100)),a=Math.max(1,Math.ceil((N-C)/1e3)),C>=N){o=100,p(),h(),n==null||n();return}p()},60)},y=()=>{let N=t==null?void 0:t();if(N!=null&&N.clockText)return N.clockText;if(N!=null&&N.time&&N.time!=="--:--")return N.time;let U=new Date;return`${String(U.getHours()).padStart(2,"0")}:${String(U.getMinutes()).padStart(2,"0")}`},f=()=>{var U,C;try{let R=(C=(U=window.NativeXR)==null?void 0:U.battery)==null?void 0:C.call(U);if(R&&R!=="null"){let F=typeof R=="string"?JSON.parse(R):R;if(F&&typeof F.level=="number"){let V=Math.round(Math.max(0,Math.min(1,F.level))*100);return{percent:V,charging:!!F.charging,text:`${V}%${F.charging?" \u26A1":""}`}}}}catch{}let N=t==null?void 0:t();if(N&&typeof N.batteryLevel=="number"){let R=Math.round(Math.max(0,Math.min(1,N.batteryLevel))*100);return{percent:R,charging:!!N.charging,text:`${R}%${N.charging?" \u26A1":""}`}}return{percent:100,charging:!1,text:"100%"}},m=()=>{var N,U;w.handsOn=1,w.handDraw=w.handDraw?0:1,Ue(w),(U=(N=window.NativeXR)==null?void 0:N.handVisuals)==null||U.call(N,!!w.handDraw),Me("handDraw",!!w.handDraw)},x=()=>{let N=gp(w.handDraw);return`
      <nav class="entry-cards-row" role="navigation" aria-label="Menu principal NextVR">
        <button type="button" class="entry-card entry-card--primary" data-entry-act="start">
          <span class="entry-card-body">
            <span class="entry-card-title">${Qe("start")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="settings"?"entry-card--active":""}" data-entry-act="settings">
          <span class="entry-card-body">
            <span class="entry-card-title">${Qe("settings")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${w.handDraw?"entry-card--hand-drawn":"entry-card--hand-invisible"}" data-entry-act="hand-style" data-hand-draw="${w.handDraw?"1":"0"}">
          <span class="entry-card-body">
            <span class="entry-card-title">${Qe("handStyle")}</span>
            <span class="entry-card-state" data-hand-style-label>${N}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="collaborators"?"entry-card--active":""}" data-entry-act="collaborators">
          <span class="entry-card-body">
            <span class="entry-card-title">${Qe("collaborators")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="about"?"entry-card--active":""}" data-entry-act="about">
          <span class="entry-card-body">
            <span class="entry-card-title">${Qe("about")}</span>
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
              ${Cv}<span>${Qe("store")}</span>
            </button>
          </div>
        </div>
      </div>`,M=()=>{let N=!!w.gorillaInstalled,C=c!==null?`<button type="button" class="entry-btn entry-btn--primary" disabled>Baixando... ${c}%</button>`:N?`<span class="entry-store-badge-ok" data-entry-gorilla-installed>\u2713 Na Biblioteca</span>
         <button type="button" class="entry-btn entry-btn--primary" data-entry-play-gorilla>Jogar Gorilla Tag</button>`:'<button type="button" class="entry-btn entry-btn--primary" data-entry-install-gorilla>BAIXAR</button>';return`
      <div class="entry-subpanel entry-subpanel--store" data-entry-panel="store">
        <div class="entry-subpanel-head">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <h2 class="entry-subpanel-title">${Qe("storeTitle")}</h2>
            <div style="display:inline-flex;gap:6px;flex-wrap:wrap">
              <span class="entry-store-card-pill" style="background:rgba(255,255,255,.16);color:#fff">P\xE1gina inicial</span>
              <span class="entry-store-card-pill">Jogos</span>
              <span class="entry-store-card-pill">Apps</span>
              <span class="entry-store-card-pill">Lista de desejos</span>
            </div>
          </div>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Qe("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${Qe("startVr")}</button>
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
            ${VE.map(R=>{let F=R.img?`<img src="${R.img}" alt="${Pi(R.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block">`:R.name.slice(0,2).toUpperCase();return`
              <div class="entry-store-card" data-entry-store-app="${R.id}">
                <div class="entry-store-card-dot" style="background:${R.bg};overflow:hidden;padding:0">${F}</div>
                <div class="entry-store-card-meta">
                  <div class="entry-store-card-name">${Pi(R.name)}</div>
                  <div class="entry-store-card-cat">${Pi(R.cat)}</div>
                </div>
                <span class="entry-store-card-pill">Gr\xE1tis</span>
              </div>`}).join("")}
          </div>
        </div>
      </div>`},E=()=>{let N=[{id:"passthrough",label:Qe("envAr")},{id:"sunset",label:Qe("envSunset")},{id:"night",label:Qe("envNight")},{id:"dark",label:"Dark Panor\xE2mico"}],U=[{id:"auto",label:Qe("qAuto")},{id:"high",label:Qe("qHigh")},{id:"medium",label:Qe("qMed")},{id:"low",label:Qe("qLow")}],C=w.entryEnvChosen&&w.env&&w.env!=="passthrough"?w.env:"passthrough",R=w.quality==="med"?"medium":w.quality||"auto",F=!!w.wideCamera,V=!!w.spatialLauncher,q=w.dockSnapSlot!==0,G=w.lang||"pt",Q=Number.isFinite(w.mediaVolume)?w.mediaVolume:70,ee=Number.isFinite(w.brightness)?w.brightness:75;return`
      <div class="entry-subpanel entry-subpanel--settings" data-entry-panel="settings">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">${Qe("basicSettings")}</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Qe("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${Qe("startVr")}</button>
          </div>
        </div>
        <div class="entry-bento-grid">
          <div class="entry-bento-cell entry-bento-cell--idioma">
            <div class="entry-bento-title">${Qe("langCell")}</div>
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
            <div class="entry-bento-title">${Qe("spatialCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${V?"on":""}" data-entry-spatial="1">${Qe("on")}</button>
              <button type="button" class="entry-seg-btn ${V?"":"on"}" data-entry-spatial="0">${Qe("dock")}</button>
              <button type="button" class="entry-seg-btn ${q?"on":""}" data-entry-dock-snap="${q?"1":"0"}" title="Espa\xE7o pr\xE9-definido ao mover janelas na Dock normal">${Qe(q?"dockSnapOn":"dockSnapOff")}</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--qualidade">
            <div class="entry-bento-title">${Qe("qualityCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              ${U.map(re=>`<button type="button" class="entry-seg-btn ${R===re.id?"on":""}" data-entry-quality="${re.id}">${re.label}</button>`).join("")}
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--ocular">
            <div class="entry-bento-title">${Qe("ocularCell")} \xB7 3DoF / 6DoF</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${F?"on":""}" data-entry-wide-cam="1">0.5x</button>
              <button type="button" class="entry-seg-btn ${F?"":"on"}" data-entry-wide-cam="0">1.0x</button>
              <button type="button" class="entry-seg-btn ${w.sixdof===0?"on":""}" data-entry-dof="3dof" title="Modo 3DoF (rota\xE7\xE3o de cabe\xE7a)">3DoF</button>
              <button type="button" class="entry-seg-btn ${w.sixdof!==0?"on":""}" data-entry-dof="6dof" title="Modo 6DoF Falso (andar no espa\xE7o)">6DoF</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--volume">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${Qe("volumeCell")}</span>
              <span class="entry-bento-val" data-vol-val>${Q}%</span>
            </div>
            <input type="range" min="0" max="100" value="${Q}" class="entry-slider" data-entry-volume />
          </div>

          <div class="entry-bento-cell entry-bento-cell--brilho">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${Qe("brightnessCell")}</span>
              <span class="entry-bento-val" data-bri-val>${ee}%</span>
            </div>
            <input type="range" min="10" max="100" value="${ee}" class="entry-slider" data-entry-brightness />
          </div>

          <div class="entry-bento-cell entry-bento-cell--hand">
            <div class="entry-bento-title">${Qe("handCell")}</div>
            <div class="entry-hand-col">
              <button type="button" class="entry-seg-btn ${w.handDraw?"on":""}" data-entry-hand-draw="1">${Qe("handDrawn")}</button>
              <button type="button" class="entry-seg-btn ${w.handDraw?"":"on"}" data-entry-hand-draw="0">${Qe("handInvisible")}</button>
              <button type="button" class="entry-seg-btn ${w.fingerTouch!==0?"on":""}" data-entry-finger-touch="${w.fingerTouch!==0?"1":"0"}" title="Toque com o indicador indo \xE0 frente sem precisar pin\xE7ar">${w.fingerTouch!==0?Qe("fingerTouchOn"):Qe("fingerTouchOff")}</button>
              <button type="button" class="entry-seg-btn ${w.pinchOnApp!==0?"on":""}" data-entry-pinch-app="${w.pinchOnApp!==0?"1":"0"}" title="Fazer a pin\xE7a encima de um app abre o app na hora, sem precisar do raio">Pin\xE7a no App (Sem Raio): ${w.pinchOnApp!==0?"ON":"OFF"}</button>
              <button type="button" class="entry-seg-btn ${w.gunGesture!==0?"on":""}" data-entry-gun-gesture="${w.gunGesture!==0?"1":"0"}" title="Gesto na m\xE3o direita (bolinha com contorno azul) e fechar a m\xE3o por 2s"><span>Bolinha M\xE3o Dir. / Soco: ${w.gunGesture!==0?"ON":"OFF"}</span></button>
              <button type="button" class="entry-seg-btn ${w.mrDim?"on":""}" data-entry-mr-dim="${w.mrDim?"1":"0"}" title="Escurecer o ambiente real (MR) em volta dos apps flutuantes">Ambiente MR: ${w.mrDim?"Escuro":"Normal"}</button>
              <button type="button" class="entry-seg-btn ${w.showFps?"on":""}" data-entry-fps="1">FPS: ${w.showFps?"ON":"OFF"}</button>
              <div class="entry-hand-env-title">${Qe("envTitle")}</div>
              ${N.map(re=>`<button type="button" class="entry-seg-btn ${C===re.id?"on":""}" data-entry-env="${re.id}">${re.label}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>`},T=()=>`
    <div class="entry-subpanel" data-entry-panel="collaborators">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title">${Qe("collaborators")}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${Qe("back")}</button>
        </div>
      </div>
      <div class="entry-collab-list" role="list">
        ${Ev.map(N=>{let U=Tv[N]||"",C=N==="colaboradores do nextVR";return`
          <div class="entry-collab-item ${C?"entry-collab-item--blue":""}" role="listitem" data-collaborator-name="${N}">
            <span class="entry-collab-name-row">
              <span class="entry-collab-name ${C?"entry-collab-name--blue":""}" ${C?'data-collab-blue="1"':""}>${N}</span>
              <span class="entry-collab-verified" data-collab-verified="${N}" title="Verificado">${HE}</span>
              ${U?`<span class="entry-collab-bio" data-collab-bio="${N}">${Pi(U)}</span>`:""}
            </span>
          </div>`}).join("")}
      </div>
    </div>`,b=()=>`
    <div class="entry-subpanel entry-subpanel--about" data-entry-panel="about">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title" data-about-title>${pp}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
        </div>
      </div>
      <div class="entry-about-body" data-about-body>
        ${tu.map((N,U)=>`
          <p class="entry-about-p ${U===tu.length-1?"entry-about-p--closing":""}">${N}</p>
        `).join("")}
      </div>
    </div>`,O=()=>{let N=w.profileName||"",U=w.profileAvatar||"";return`
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
              ${U?`<img src="${Pi(U)}" alt="Foto de perfil" class="entry-login-avatar-img" data-profile-avatar-img />`:Rv}
            </div>
            <button type="button" class="entry-btn entry-btn--primary entry-login-upload-btn" data-profile-upload>
              Escolher Foto da Galeria
            </button>
            <input type="file" accept="image/*" data-profile-file hidden />
          </div>
          <div class="entry-login-right">
            <label class="entry-login-label">
              <span>SEU NOME / NICK</span>
              <input type="text" class="entry-login-input" data-profile-name-input maxlength="24" placeholder="Digite seu nome..." value="${Pi(N)}" />
            </label>
            <div class="entry-login-presets-wrap">
              <span class="entry-login-presets-title">OU ESCOLHA UM AVATAR</span>
              <div class="entry-login-presets">
                ${GE.map(R=>`
                  <button type="button" class="entry-login-preset ${U===R.url?"on":""}" data-profile-preset="${Pi(R.url)}" title="${Pi(R.label)}">
                    <img src="${Pi(R.url)}" alt="${Pi(R.label)}" />
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>`},S=N=>{let U=u(o);return`
      <div class="entry-hud-screen" data-entry-panel="loading" role="status" aria-live="polite">
        <div class="entry-subtitle">${fp}</div>

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
              <div class="entry-hud-status" data-entry-load-status>${U}</div>
              <div class="entry-hud-hint" data-entry-countdown-sub>COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...</div>
            </div>
          </div>
        </div>

        <footer class="entry-hud-bottom">
          <div class="entry-hud-bar-track">
            <div class="entry-hud-bar-fill" data-entry-load-bar style="width:${o}%"></div>
          </div>
        </footer>
      </div>`},_=()=>{let N=f();if(r==="loading"){s.innerHTML=S(N);let $=s.querySelector("[data-entry-cancel-countdown]");$&&($.onclick=()=>{h(),r="home",_()});return}let U=r==="settings"?E():r==="collaborators"?T():r==="about"?b():r==="profile"?O():r==="store"?M():v(),C=w.profileName?Pi(w.profileName):"NextVR (Login)",R=w.profileAvatar?`<img src="${Pi(w.profileAvatar)}" alt="" class="entry-profile-q-img" />`:Rv;s.innerHTML=`
      <div class="entry-left-pattern" aria-hidden="true">
        <div class="entry-left-slashes"></div>
      </div>

      <header class="entry-top-header">
        <div class="entry-top-bars" aria-hidden="true"></div>
        <h1 class="entry-main-title">MAIN MENU</h1>
        <div class="entry-subtitle">${fp}</div>
        <div class="entry-top-right-cluster">
          <button type="button" class="entry-top-store-btn ${r==="store"?"on":""}" data-entry-act="store" title="Abrir Store NextVR">
            ${Cv}
            <span>${Qe("store")}</span>
          </button>
          <div class="entry-top-battery" data-entry-battery-pill title="Bateria sincronizada com o celular">
            <span class="entry-top-bat-bar"><i data-entry-battery-fill style="width:${N.percent}%"></i></span>
            <b data-entry-battery-top>${N.text}</b>
          </div>
        </div>
        <button type="button" class="entry-top-reticle" data-entry-act="gear" title="Configura\xE7\xF5es">${zE}</button>
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
              <div class="entry-profile-meta">Hand: <span data-profile-hand>${gp(w.handDraw)}</span></div>
              <div class="entry-profile-meta">Hora: <span data-entry-clock>${y()}</span> \xB7 Bat: <span data-entry-battery>${N.text}</span></div>
            </div>
            <div class="entry-profile-ver">${Av}</div>
          </div>
        </aside>

        <main class="entry-right-stage">
          ${U}
          ${r==="home"?`
            <button type="button" class="entry-corner-back" data-entry-act="start" title="Iniciar">
              ${BE}
            </button>
          `:""}
        </main>
      </div>
    `,s.querySelectorAll('[data-entry-act="start"]').forEach($=>{$.onclick=()=>{i?g():n==null||n()}});let F=s.querySelector("[data-entry-cancel-countdown]");F&&(F.onclick=()=>{h(),r="home",_()}),s.querySelectorAll('[data-entry-act="settings"], [data-entry-act="gear"]').forEach($=>{$.onclick=()=>{h(),r=r==="settings"?"home":"settings",_()}}),s.querySelectorAll('[data-entry-act="store"]').forEach($=>{$.onclick=ie=>{ie.stopPropagation(),h(),r=r==="store"?"home":"store",_()}}),s.querySelectorAll('[data-entry-act="hand-style"]').forEach($=>{$.onclick=()=>{m(),_()}}),s.querySelectorAll('[data-entry-act="collaborators"]').forEach($=>{$.onclick=()=>{h(),r=r==="collaborators"?"home":"collaborators",_()}}),s.querySelectorAll('[data-entry-act="about"]').forEach($=>{$.onclick=()=>{h(),r=r==="about"?"home":"about",_()}}),s.querySelectorAll('[data-entry-act="profile"]').forEach($=>{$.onclick=ie=>{ie.stopPropagation(),h(),r=r==="profile"?"home":"profile",_()}}),s.querySelectorAll('[data-entry-act="back"]').forEach($=>{$.onclick=()=>{h(),r="home",_()}});let V=s.querySelector("[data-entry-install-gorilla]");V&&(V.onclick=()=>{if(w.gorillaInstalled=1,Ue(w),Me("gorilla-installed",!0),window.__gorillaFastTest){c=null,_();return}c=45,_(),setTimeout(()=>{c=90,r==="store"&&_()},110),setTimeout(()=>{c=null,r==="store"&&_()},230)});let q=s.querySelector("[data-entry-play-gorilla]");q&&(q.onclick=()=>{w.gorillaInstalled=1,Ue(w),Me("gorilla-installed",!0),typeof e=="function"?e():n==null||n()});let G=s.querySelector("[data-profile-name-input]");G&&(G.oninput=()=>{w.profileName=G.value.trim(),Ue(w);let $=s.querySelector("[data-profile-display-name]");$&&($.textContent=w.profileName||"NextVR (Login)")});let Q=s.querySelector("[data-profile-save]");Q&&(Q.onclick=()=>{G&&(w.profileName=G.value.trim()),Ue(w),Me("profile-updated",{name:w.profileName,avatar:w.profileAvatar}),r="home",_()}),s.querySelectorAll("[data-profile-preset]").forEach($=>{$.onclick=()=>{G&&(w.profileName=G.value.trim()),w.profileAvatar=$.dataset.profilePreset,Ue(w),Me("profile-updated",{name:w.profileName,avatar:w.profileAvatar}),_()}});let ee=s.querySelector("[data-profile-upload]"),re=s.querySelector("[data-profile-avatar-preview]"),z=s.querySelector("[data-profile-file]"),W=()=>{var $;G&&(w.profileName=G.value.trim(),Ue(w)),typeof(($=window.NativeXR)==null?void 0:$.pickProfilePhoto)=="function"?window.NativeXR.pickProfilePhoto():z&&z.click()};ee&&(ee.onclick=W),re&&(re.onclick=W),z&&(z.onchange=()=>{var pe;let $=(pe=z.files)==null?void 0:pe[0];if(!$)return;let ie=new FileReader;ie.onload=()=>{let le=new Image;le.onload=()=>{let we=document.createElement("canvas");we.width=160,we.height=160;let X=we.getContext("2d"),Wt=Math.min(le.width,le.height),Le=(le.width-Wt)/2,Be=(le.height-Wt)/2;X.drawImage(le,Le,Be,Wt,Wt,0,0,160,160),G&&(w.profileName=G.value.trim()),w.profileAvatar=we.toDataURL("image/jpeg",.86),Ue(w),Me("profile-updated",{name:w.profileName,avatar:w.profileAvatar}),_()},le.src=String(ie.result)},ie.readAsDataURL($)}),s.querySelectorAll("[data-entry-hand-draw]").forEach($=>{$.onclick=()=>{var ie,pe;w.handsOn=1,w.handDraw=$.dataset.entryHandDraw==="1"?1:0,Ue(w),(pe=(ie=window.NativeXR)==null?void 0:ie.handVisuals)==null||pe.call(ie,!!w.handDraw),Me("handDraw",!!w.handDraw),_()}}),s.querySelectorAll("[data-entry-finger-touch]").forEach($=>{$.onclick=()=>{var ie,pe;w.fingerTouch=w.fingerTouch===0?1:0,Ue(w),(pe=(ie=window.NativeXR)==null?void 0:ie.setFingerTouch)==null||pe.call(ie,!!w.fingerTouch),Me("fingerTouch",!!w.fingerTouch),_()}}),s.querySelectorAll("[data-entry-pinch-app]").forEach($=>{$.onclick=()=>{w.pinchOnApp=w.pinchOnApp===0?1:0,Ue(w),Me("pinchOnApp",!!w.pinchOnApp),_()}}),s.querySelectorAll("[data-entry-gun-gesture]").forEach($=>{$.onclick=()=>{w.gunGesture=w.gunGesture===0?1:0,Ue(w),Me("gunGesture",!!w.gunGesture),_()}}),s.querySelectorAll("[data-entry-env]").forEach($=>{$.onclick=()=>{let ie=$.dataset.entryEnv;w.entryEnvChosen=1,ie==="passthrough"?(w.env="passthrough",Ue(w),Fi(!0)):Ai(ie),_()}}),s.querySelectorAll("[data-entry-quality]").forEach($=>{$.onclick=()=>{var ie,pe;w.quality=$.dataset.entryQuality==="med"?"medium":$.dataset.entryQuality,Ue(w),Me("quality",w.quality),(pe=(ie=window.NativeXR)==null?void 0:ie.setQuality)==null||pe.call(ie,w.quality),_()}}),s.querySelectorAll("[data-entry-dock-snap]").forEach($=>{$.onclick=()=>{w.dockSnapSlot=w.dockSnapSlot===0?1:0,Ue(w),Me("dockSnapSlot",!!w.dockSnapSlot),_()}}),s.querySelectorAll("[data-entry-wide-cam]").forEach($=>{$.onclick=()=>{var ie,pe;w.wideCamera=$.dataset.entryWideCam==="1"?1:0,Ue(w),(pe=(ie=window.NativeXR)==null?void 0:ie.wideCamera)==null||pe.call(ie,!!w.wideCamera),Me("wideCamera",!!w.wideCamera),_()}}),s.querySelectorAll("[data-entry-dof]").forEach($=>{$.onclick=()=>{var pe,le;let ie=$.dataset.entryDof==="6dof";w.sixdof=ie?1:0,Ue(w),ie||jt.reset(),(le=(pe=window.NativeXR)==null?void 0:pe.setSixDofEnabled)==null||le.call(pe,ie),Me("sixdof",ie),_()}}),s.querySelectorAll("[data-entry-spatial]").forEach($=>{$.onclick=()=>{w.spatialLauncher=$.dataset.entrySpatial==="1"?1:0,w.spatialLauncher&&(w.env="passthrough",Fi(!0)),Ue(w),Me("spatialLauncher",!!w.spatialLauncher),_()}}),s.querySelectorAll("[data-entry-lang]").forEach($=>{$.onclick=()=>{ta($.dataset.entryLang),_()}}),s.querySelectorAll("[data-entry-fps]").forEach($=>{$.onclick=()=>{w.showFps=w.showFps?0:1,Ue(w),Me("fps-toggle",w.showFps),_()}}),s.querySelectorAll("[data-entry-mr-dim]").forEach($=>{$.onclick=()=>{var ie,pe;w.mrDim=w.mrDim?0:1,Ue(w),(pe=(ie=window.NativeXR)==null?void 0:ie.setMrDim)==null||pe.call(ie,!!w.mrDim),Me("mr-dim",w.mrDim),_()}});let ne=s.querySelector("[data-entry-volume]");ne&&(ne.oninput=()=>{var pe,le;let $=Number(ne.value);w.mediaVolume=$,Ue(w),ye&&((le=(pe=window.NativeXR)==null?void 0:pe.setMediaVolumePercent)==null||le.call(pe,$));let ie=s.querySelector("[data-vol-val]");ie&&(ie.textContent=`${$}%`)});let ae=s.querySelector("[data-entry-brightness]");ae&&(ae.oninput=()=>{var pe,le;let $=Number(ae.value);w.brightness=$,Ue(w),ye&&((le=(pe=window.NativeXR)==null?void 0:pe.setBrightnessPercent)==null||le.call(pe,$));let ie=s.querySelector("[data-bri-val]");ie&&(ie.textContent=`${$}%`)})};return _(),s.resetToHome=()=>{h(),r="home",_()},Ge("handDraw",()=>{let N=gp(w.handDraw),U=s.querySelector("[data-hand-style-label]"),C=s.querySelector("[data-profile-hand]"),R=s.querySelector('[data-entry-act="hand-style"]');U&&(U.textContent=N),C&&(C.textContent=N),R&&(R.dataset.handDraw=w.handDraw?"1":"0",R.classList.toggle("entry-card--hand-drawn",!!w.handDraw),R.classList.toggle("entry-card--hand-invisible",!w.handDraw))}),Ge("device-status",()=>{let N=s.querySelector("[data-entry-clock]");N&&(N.textContent=y());let U=f(),C=s.querySelector("[data-entry-battery]"),R=s.querySelector("[data-entry-battery-top]"),F=s.querySelector("[data-entry-battery-fill]");C&&(C.textContent=U.text),R&&(R.textContent=U.text),F&&(F.style.width=`${U.percent}%`)}),window.nextvrProfilePhoto=N=>{N&&(w.profileAvatar=String(N),Ue(w),Me("profile-updated",{name:w.profileName,avatar:w.profileAvatar}),_())},s}function vp(n,e){if(e===_0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Qo||e===nd){let t=n.getIndex();if(t===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Qo)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var nu=class extends Ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ap(t)}),this.register(function(t){return new Dp(t)}),this.register(function(t){return new kp(t)}),this.register(function(t){return new Op(t)}),this.register(function(t){return new Tp(t)}),this.register(function(t){return new Rp(t)}),this.register(function(t){return new Cp(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new Mp(t)}),this.register(function(t){return new Pp(t)}),this.register(function(t){return new Ep(t)}),this.register(function(t){return new Np(t)}),this.register(function(t){return new Ip(t)}),this.register(function(t){return new wp(t)}),this.register(function(t){return new Up(t)}),this.register(function(t){return new Fp(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=hr.extractUrlBase(e);a=hr.resolveURL(c,this.path)}else a=hr.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Zo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dv){try{a[dt.KHR_BINARY_GLTF]=new Bp(e)}catch(u){s&&s(u);return}r=JSON.parse(a[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Xp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){let u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){let u=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:a[u]=new Sp;break;case dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new zp(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:a[u]=new Hp;break;case dt.KHR_MESH_QUANTIZATION:a[u]=new Vp;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function WE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wp=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,d=new De(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],yn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Kr(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qc(d),c.distance=u;break;case"spot":c=new Jc(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Lr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},Sp=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return hn}extendParams(e,t,i){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],yn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,$t))}return Promise.all(s)}},Mp=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ap=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(o,o)}return Promise.all(r)}},Ep=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Tp=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],yn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,$t)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Rp=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Cp=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(o[0],o[1],o[2],yn),Promise.all(r)}},Lp=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Pp=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(o[0],o[1],o[2],yn),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,$t)),Promise.all(r)}},Ip=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Np=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Dp=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},kp=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Op=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Up=class{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(d*u);return a.decodeGltfBuffer(new Uint8Array(p),d,u,h,s.mode,s.filter),p})})}else return null}},Fp=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Ii.TRIANGLES&&c.mode!==Ii.TRIANGLE_STRIP&&c.mode!==Ii.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,p=[];for(let g of u){let y=new Re,f=new D,m=new it,x=new D(1,1,1),v=new Gc(g.geometry,g.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&x.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,y.compose(f,m,x));for(let M in l)if(M==="_COLOR_0"){let E=l[M];v.instanceColor=new Zr(E.array,E.itemSize,E.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Bt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}},Dv="glTF",Nl=12,Lv={JSON:1313821514,BIN:5130562},Bp=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Nl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Nl,r=new DataView(e,Nl),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Lv.JSON){let c=new Uint8Array(e,Nl+a,o);this.content=i.decode(c)}else if(l===Lv.BIN){let c=Nl+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let d in a){let u=Wp[d]||d.toLowerCase();o[u]=a[d]}for(let d in e.attributes){let u=Wp[d]||d.toLowerCase();if(a[d]!==void 0){let h=i.accessors[e.attributes[d]],p=_o[h.componentType];c[u]=p.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(p){for(let g in p.attributes){let y=p.attributes[g],f=l[g];f!==void 0&&(y.normalized=f)}u(p)},o,c,yn,h)})})}},Hp=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Vp=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},iu=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=s-t,u=(i-t)/d,h=u*u,p=h*u,g=e*c,y=g-c,f=-2*p+3*h,m=p-h,x=1-f,v=m-h+u;for(let M=0;M!==o;M++){let E=a[y+M+o],T=a[y+M+l]*d,b=a[g+M+o],O=a[g+M]*d;r[M]=x*E+v*T+f*b+m*O}return r}},qE=new it,Gp=class extends iu{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return qE.fromArray(r).normalize().toArray(r),r}},Ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_o={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pv={9728:gn,9729:un,9984:Ac,9985:Kh,9986:ko,9987:ar},Iv={33071:di,33648:zo,10497:Xr},bp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XE={CUBICSPLINE:void 0,LINEAR:$r,STEP:Ka},xp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $E(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new io({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),n.DefaultMaterial}function ma(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Lr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){let u=e[c];if(i){let h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(h)}if(s){let h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(h)}if(r){let h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let d=c[0],u=c[1],h=c[2];return i&&(n.morphAttributes.position=d),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function jE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZE(n){let e,t=n.extensions&&n.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_p(t.attributes):e=n.indices+":"+_p(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+_p(n.targets[i]);return e}function _p(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function qp(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function KE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var JE=new Re,Xp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new ro(this.options.manager):this.textureLoader=new ed(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ma(r,o,s),Lr(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,d]of a.children.entries())r(d,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(hr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=bp[s.type],o=_o[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new kt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=bp[s.type],c=_o[s.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,f;if(p&&p!==u){let m=Math.floor(h/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(x);v||(y=new c(o,m*p,s.count*p/d),v=new qo(y,p/d),t.cache.add(x,v)),f=new Xo(v,l,h%p/d,g)}else o===null?y=new c(s.count*l):y=new c(o,h,s.count*l),f=new kt(y,l,g);if(s.sparse!==void 0){let m=bp.SCALAR,x=_o[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,E=new x(a[1],v,s.sparse.count*m),T=new c(a[2],M,s.sparse.count*l);o!==null&&(f=new kt(f.array.slice(),f.itemSize,f.normalized));for(let b=0,O=E.length;b<O;b++){let S=E[b];if(f.setX(S,T[b*l]),l>=2&&f.setY(S,T[b*l+1]),l>=3&&f.setZ(S,T[b*l+2]),l>=4&&f.setW(S,T[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return d.magFilter=Pv[h.magFilter]||un,d.minFilter=Pv[h.minFilter]||ar,d.wrapS=Iv[h.wrapS]||Xr,d.wrapT=Iv[h.wrapT]||Xr,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let h=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let d=Promise.resolve(l).then(function(u){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){let f=new En(y);f.needsUpdate=!0,h(f)}),t.load(hr.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||KE(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new jo,ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Yo,ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return io}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],yn),o.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,$t)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Gn);let d=r.alphaMode||xp.OPAQUE;if(d===xp.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===xp.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==hn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==hn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==hn){let u=r.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],yn)}return r.emissiveTexture!==void 0&&a!==hn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,$t)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Lr(u,r),t.associations.set(u,{materials:e}),r.extensions&&ma(s,u,r),u})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Nv(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],d=ZE(c),u=s[d];if(u)a.push(u.promise);else{let h;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Nv(new qn,c,t),s[d]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let d=a[l].material===void 0?$E(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let p=0,g=d.length;p<g;p++){let y=d[p],f=a[p],m,x=c[p];if(f.mode===Ii.TRIANGLES||f.mode===Ii.TRIANGLE_STRIP||f.mode===Ii.TRIANGLE_FAN||f.mode===void 0)m=r.isSkinnedMesh===!0?new Hc(y,x):new Et(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),f.mode===Ii.TRIANGLE_STRIP?m.geometry=vp(m.geometry,nd):f.mode===Ii.TRIANGLE_FAN&&(m.geometry=vp(m.geometry,Qo));else if(f.mode===Ii.LINES)m=new Wc(y,x);else if(f.mode===Ii.LINE_STRIP)m=new no(y,x);else if(f.mode===Ii.LINE_LOOP)m=new qc(y,x);else if(f.mode===Ii.POINTS)m=new Xc(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&jE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Lr(m,r),f.extensions&&ma(s,m,f),t.assignFinalMaterial(m),u.push(m)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ma(s,u[0],r),u[0];let h=new In;r.extensions&&ma(s,h,r),t.associations.set(h,{meshes:e});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Yt(el.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new eo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Lr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,d=a.length;c<d;c++){let u=a[c];if(u){o.push(u);let h=new Re;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vc(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){let p=s.channels[u],g=s.samplers[p.sampler],y=p.target,f=y.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),d.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){let h=u[0],p=u[1],g=u[2],y=u[3],f=u[4],m=[];for(let x=0,v=h.length;x<v;x++){let M=h[x],E=p[x],T=g[x],b=y[x],O=f[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let S=i._createAnimationTracks(M,E,T,b,O);if(S)for(let _=0;_<S.length;_++)m.push(S[_])}return new Zc(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,d=o.length;c<d;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(h,JE)});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(r.isBone===!0?d=new $o:c.length>1?d=new In:c.length===1?d=c[0]:d=new Bt,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(r.name&&(d.userData.name=r.name,d.name=a),Lr(d,r),r.extensions&&ma(i,d,r),r.matrix!==void 0){let u=new Re;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new In;i.name&&(r.name=s.createUniqueName(i.name)),Lr(r,i),i.extensions&&ma(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,u=l.length;d<u;d++)r.add(l[d]);let c=d=>{let u=new Map;for(let[h,p]of s.associations)(h instanceof ei||h instanceof En)&&u.set(h,p);return d.traverse(h=>{let p=s.associations.get(h);p!=null&&u.set(h,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Cr[r.path]===Cr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Cr[r.path]){case Cr.weights:c=Rs;break;case Cr.rotation:c=Qi;break;case Cr.position:case Cr.scale:c=Cs;break;default:switch(i.itemSize){case 1:c=Rs;break;case 2:case 3:default:c=Cs;break}break}let d=s.interpolation!==void 0?XE[s.interpolation]:$r,u=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){let g=new c(l[h]+"."+Cr[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=qp(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Qi?Gp:iu;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function QE(n,e,t){let i=e.attributes,s=new wi;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let d=qp(_o[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,d=r.length;c<d;c++){let u=r[c];if(u.POSITION!==void 0){let h=t.json.accessors[u.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){let y=qp(_o[h.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new ui;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Nv(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=Wp[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return bt.workingColorSpace!==yn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Lr(n,e),QE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?YE(n,e.targets,t):n})}var fs=Object.freeze({model:"Google Cardboard 2015",k1:.22,k2:.24,ipd:.064,fov:80}),ba=[0,2,7],jp=.55,su=.14,kv=11.4,eT=1.42,wo=1.04,ou=!1,Ul=!1,vt=null,yi=null,Ys=null,Ni=null,si=null,An=null,ln=null,Fl=null,Bl=null,us=null,Ov=1,ru=!1,Dl=null,au=0,lu=0,qv=0,Zp=[],zl=[],Vt=()=>new D,xn=Vt(),tm=new D(ba[0],.9,ba[2]),cu=[],hs=[null,null],kl=[null,null],Hl=[0,0],ga=[Vt(),Vt()],tT=[Vt(),Vt()],qi=[null,null],xa=[!1,!1],$p=[Vt(),Vt()],Pr=null,Uv=[0,0],nT=0,mt={cs:1,T:null,n:0,mn:[0,0,0],d:[1,1,1],st:null,id:null,seen:null,stamp:0},Lt=[0,0,0],qe={x:0,y:0,z:0,d:0,nx:0,ny:1,nz:0,fx:0,fy:1,fz:0};function iT(n){let e=n.length/9|0;mt.T=n,mt.n=e;let t=[1e9,1e9,1e9],i=[-1e9,-1e9,-1e9];for(let c=0;c<n.length;c+=3)for(let d=0;d<3;d++){let u=n[c+d];u<t[d]&&(t[d]=u),u>i[d]&&(i[d]=u)}mt.mn=t,mt.d=[0,1,2].map(c=>Math.max(1,Math.ceil((i[c]-t[c])/mt.cs)+1));let s=mt.d[0]*mt.d[1]*mt.d[2],r=new Int32Array(s+1),a=mt.cs,o=c=>{let d=[1e9,1e9,1e9,-1e9,-1e9,-1e9];for(let u=0;u<3;u++)for(let h=0;h<3;h++){let p=n[c*9+u*3+h];p<d[h]&&(d[h]=p),p>d[h+3]&&(d[h+3]=p)}return[0,1,2].map(u=>[Math.floor((d[u]-t[u])/a),Math.floor((d[u+3]-t[u])/a)])},l=null;for(let c=0;c<2;c++){if(c===1){for(let d=0;d<s;d++)r[d+1]+=r[d];mt.st=r.slice(),mt.id=new Int32Array(r[s]),l=r.slice()}for(let d=0;d<e;d++){let u=o(d);for(let h=u[2][0];h<=u[2][1];h++)for(let p=u[1][0];p<=u[1][1];p++)for(let g=u[0][0];g<=u[0][1];g++){let y=(h*mt.d[1]+p)*mt.d[0]+g;c===0?r[y+1]++:mt.id[l[y]++]=d}}}mt.seen=new Int32Array(e)}function sT(n,e,t,i,s,r,a,o,l,c,d,u){let h=a-i,p=o-s,g=l-r,y=c-i,f=d-s,m=u-r,x=n-i,v=e-s,M=t-r,E=h*x+p*v+g*M,T=y*x+f*v+m*M;if(E<=0&&T<=0){Lt[0]=i,Lt[1]=s,Lt[2]=r;return}let b=n-a,O=e-o,S=t-l,_=h*b+p*O+g*S,I=y*b+f*O+m*S;if(_>=0&&I<=_){Lt[0]=a,Lt[1]=o,Lt[2]=l;return}let N=E*I-_*T;if(N<=0&&E>=0&&_<=0){let z=E/(E-_);Lt[0]=i+z*h,Lt[1]=s+z*p,Lt[2]=r+z*g;return}let U=n-c,C=e-d,R=t-u,F=h*U+p*C+g*R,V=y*U+f*C+m*R;if(V>=0&&F<=V){Lt[0]=c,Lt[1]=d,Lt[2]=u;return}let q=F*T-E*V;if(q<=0&&T>=0&&V<=0){let z=T/(T-V);Lt[0]=i+z*y,Lt[1]=s+z*f,Lt[2]=r+z*m;return}let G=_*V-F*I;if(G<=0&&I-_>=0&&F-V>=0){let z=(I-_)/(I-_+(F-V));Lt[0]=a+z*(c-a),Lt[1]=o+z*(d-o),Lt[2]=l+z*(u-l);return}let Q=1/(G+q+N),ee=q*Q,re=N*Q;Lt[0]=i+h*ee+y*re,Lt[1]=s+p*ee+f*re,Lt[2]=r+g*ee+m*re}function nm(n,e,t,i){if(!mt.T)return!1;let s=mt.T,r=mt.cs,a=mt.mn,o=mt.d,l=i*i,c=!1,d=++mt.stamp,u=[0,1,2].map(g=>Math.max(0,Math.floor(([n,e,t][g]-i-a[g])/r))),h=[0,1,2].map(g=>Math.min(o[g]-1,Math.floor(([n,e,t][g]+i-a[g])/r)));for(let g=u[2];g<=h[2];g++)for(let y=u[1];y<=h[1];y++)for(let f=u[0];f<=h[0];f++){let m=(g*o[1]+y)*o[0]+f;for(let x=mt.st[m],v=mt.st[m+1];x<v;x++){let M=mt.id[x];if(mt.seen[M]===d)continue;mt.seen[M]=d;let E=M*9;sT(n,e,t,s[E],s[E+1],s[E+2],s[E+3],s[E+4],s[E+5],s[E+6],s[E+7],s[E+8]);let T=n-Lt[0],b=e-Lt[1],O=t-Lt[2],S=T*T+b*b+O*O;if(S<l){l=S,c=!0,qe.x=Lt[0],qe.y=Lt[1],qe.z=Lt[2];let _=s[E+3]-s[E],I=s[E+4]-s[E+1],N=s[E+5]-s[E+2],U=s[E+6]-s[E],C=s[E+7]-s[E+1],R=s[E+8]-s[E+2];qe.fx=I*R-N*C,qe.fy=N*U-_*R,qe.fz=_*C-I*U;let F=Math.hypot(qe.fx,qe.fy,qe.fz)||1;qe.fx/=F,qe.fy/=F,qe.fz/=F}}}if(!c)return!1;let p=Math.sqrt(l);return qe.d=p,p>1e-5?(qe.nx=(n-qe.x)/p,qe.ny=(e-qe.y)/p,qe.nz=(t-qe.z)/p):(qe.nx=qe.fx,qe.ny=qe.fy,qe.nz=qe.fz),!0}function Fv(n,e,t,i,s){if(!mt.T)return null;let r=mt.T,a=mt.cs,o=mt.mn,l=mt.d,c=Math.floor((n-o[0])/a),d=Math.floor((t-o[2])/a);if(c<0||d<0||c>=l[0]||d>=l[2])return null;let u=e,h=e+i*s,p=Math.floor((u-o[1])/a),g=Math.floor((h-o[1])/a),y=null;for(;i<0?p>=Math.max(g,0):p<=Math.min(g,l[1]-1);p+=i){if(p<0||p>=l[1])continue;let f=(d*l[1]+p)*l[0]+c;for(let m=mt.st[f],x=mt.st[f+1];m<x;m++){let v=mt.id[m]*9,M=r[v]-n,E=r[v+2]-t,T=r[v+3]-n,b=r[v+5]-t,O=r[v+6]-n,S=r[v+8]-t,_=(b-S)*(M-O)+(O-T)*(E-S);if(Math.abs(_)<1e-9)continue;let I=((b-S)*(0-O)+(O-T)*(0-S))/_,N=((S-E)*(0-O)+(M-O)*(0-S))/_,U=1-I-N;if(I<0||N<0||U<0)continue;let C=I*r[v+1]+N*r[v+4]+U*r[v+7];if(!((C-e)*i<=0||Math.abs(C-e)>s)&&(!y||Math.abs(C-e)<Math.abs(y.y-e))){let R=r[v+3]-r[v],F=r[v+4]-r[v+1],V=r[v+5]-r[v+2],q=r[v+6]-r[v],G=r[v+7]-r[v+1],Q=r[v+8]-r[v+2],ee=V*q-R*Q,re=Math.hypot(F*Q-V*G,ee,R*G-F*q)||1;y={y:C,ny:ee/re}}}}return y}function rT(n,e,t,i){let s=(r,a)=>{let o=Fv(r,e+1.5,a,-1,8);if(!o)return null;let l=Math.abs(o.ny)>.6?o:null;if(!l)return null;let c=Fv(r,l.y+.05,a,1,3);if(c&&Math.abs(c.y-l.y)<2.2)return null;let d=l.y+i+.05;return nm(r,d,a,i-.02)?null:[r,d,a]};for(let r=0;r<=8;r++)for(let a=0;a<(r?16:1);a++){let o=a/16*6.2832,l=n+Math.cos(o)*r*.5,c=t+Math.sin(o)*r*.5,d=s(l,c);if(d)return d}return null}var aT=(n,e)=>{let t=n.attributes[e];if(t&&(t.isInterleavedBufferAttribute||!(t.array instanceof Float32Array))){let i=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)i[s*t.itemSize+r]=t.getComponent(s,r);n.setAttribute(e,new kt(i,t.itemSize))}};function oT(n){let e=0,t=0;for(let d of n)e+=d.attributes.position.count,t+=d.index?d.index.count:d.attributes.position.count;let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),a=new Uint32Array(t),o=0,l=0;for(let d of n){let u=d.attributes.position.count;if(i.set(d.attributes.position.array,o*3),s.set(d.attributes.normal.array,o*3),r.set(d.attributes.uv.array,o*2),d.index){let h=d.index.array;for(let p=0;p<h.length;p++)a[l++]=h[p]+o}else for(let h=0;h<u;h++)a[l++]=o+h;o+=u}let c=new qn;return c.setAttribute("position",new kt(i,3)),c.setAttribute("normal",new kt(s,3)),c.setAttribute("uv",new kt(r,2)),c.setIndex(new kt(a,1)),c}function Kp(n){return n?(n.generateMipmaps=!1,n.minFilter=un,n.magFilter=un,n.anisotropy=1,n):null}function lT(n){var o;n.updateMatrixWorld(!0);let e=[];n.traverse(l=>{l.isMesh&&l.geometry.attributes.position&&e.push(l)});let t=0;e.forEach(l=>{let c=l.geometry;t+=Math.floor((c.index?c.index.count:c.attributes.position.count)/3)});let i=new Float32Array(t*9),s=0,r=new Map,a=new Map;for(let l of e){let c=Array.isArray(l.material)?l.material[0]:l.material,d=l.geometry.clone();d.applyMatrix4(l.matrixWorld);let u=d.attributes.position,h=d.index,p=Math.floor((h?h.count:u.count)/3)*3;for(let f=0;f<p;f++){let m=h?h.getX(f):f;i[s++]=u.getX(m),i[s++]=u.getY(m),i[s++]=u.getZ(m)}d.attributes.normal||d.computeVertexNormals(),d.attributes.uv||d.setAttribute("uv",new kt(new Float32Array(u.count*2),2));for(let f of Object.keys(d.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&d.deleteAttribute(f);["position","normal","uv"].forEach(f=>aT(d,f));let g=`${c.map?((o=c.map.source)==null?void 0:o.uuid)||c.map.uuid:"nomap"}|${c.color?c.color.getHexString():"fff"}|${c.transparent?1:0}|${c.alphaTest||0}|${c.side||0}`,y=a.get(g);y||(y=new so({map:Kp(c.map),color:c.color?c.color.clone():16777215,transparent:c.transparent,opacity:c.opacity,alphaTest:c.alphaTest,side:c.side,emissive:c.emissive?c.emissive.clone():0,emissiveMap:Kp(c.emissiveMap)}),a.set(g,y)),r.has(g)||r.set(g,{m:y,l:[]}),r.get(g).l.push(d),l.geometry.dispose()}for(let l of r.values()){let c=l.l,d=null;try{let h=oT(c);h.computeBoundingSphere(),d=new Et(h,l.m)}catch{}(d?[d]:c.map(h=>new Et(h,l.m))).forEach(h=>{h.matrixAutoUpdate=!1,h.frustumCulled=!0,si.add(h)}),d&&c.forEach(h=>h.dispose())}return i.subarray(0,s)}function cT(n){cu.length=0,n.updateMatrixWorld(!0);let e=[];if(n.traverse(R=>{R.isSkinnedMesh&&e.push(R)}),!e.length)return;let t=e.reduce((R,F)=>F.geometry.attributes.position.count>R.geometry.attributes.position.count?F:R);e.forEach(R=>{R!==t&&(R.visible=!1)});let i=t.skeleton.bones,s=R=>R.name.toLowerCase().replace(/[^a-z]/g,""),r=R=>i.find(F=>R.test(s(F))),a={ur:r(/^upperarmr$/),lr:r(/^lowerarmr$/),hr:r(/^wristr$/),ul:r(/^upperarml$/),ll:r(/^lowerarml$/),hl:r(/^wristl$/),body:r(/^main$/),head:r(/^head$/)},o={};["r","l"].forEach(R=>{o[R]={pinky:r(new RegExp("^pinkyf?"+R+"$")),index:r(new RegExp("^pointerf?"+R+"$")),thumb:r(new RegExp("^thumb"+R+"$"))}});let l=new Set([a.ur,a.lr,a.hr,a.ul,a.ll,a.hl]);for(let R in o)for(let F in o[R])l.add(o[R][F]);let c=i.map(R=>l.has(R)),d=t.geometry,u=d.attributes.skinIndex,h=d.attributes.skinWeight,p=d.attributes.position.count,g=d.index,y=new Uint8Array(p);for(let R=0;R<p;R++){let F=0;for(let V=0;V<4;V++)c[u.getComponent(R,V)]&&(F+=h.getComponent(R,V));y[R]=F>.45?1:0}let f=[],m=g?g.count:p;for(let R=0;R<m;R+=3){let F=g?g.getX(R):R,V=g?g.getX(R+1):R+1,q=g?g.getX(R+2):R+2;y[F]&&y[V]&&y[q]&&f.push(F,V,q)}f.length>90&&(d.clearGroups(),d.setIndex(f));let x=Array.isArray(t.material)?t.material[0]:t.material;t.material=new so({map:Kp(x.map),color:x.color?x.color.clone():16777215,emissive:2236962}),t.frustumCulled=!1;let v=R=>R.getWorldPosition(Vt()),M=v(a.ur),E=v(a.ul),T=M.clone().sub(E).normalize(),b=v(a.head).sub(v(a.body)).normalize();b.addScaledVector(T,-b.dot(T)).normalize();let O=new D().crossVectors(T,b),S=new it().setFromRotationMatrix(new Re().makeBasis(T,b,O)).invert(),_=M.distanceTo(v(a.lr))+v(a.lr).distanceTo(v(a.hr)),I=wo/_,N=M.clone().add(E).multiplyScalar(.5),U={};["r","l"].forEach(R=>{let F={};for(let Q in o[R]){let ee=o[R][Q];F[Q]=ee?[{b:ee,bind:ee.quaternion.clone(),pos:ee.getWorldPosition(Vt()),wq:ee.getWorldQuaternion(new it),Al:Vt(),cur:0}]:[]}let V=R==="r"?a.hr:a.hl,q=V.getWorldPosition(Vt()),G=q.clone().sub(N).dot(T)>0?1:-1;U[R]={hb:V,hbBind:V.quaternion.clone(),hpos:q,hwq:V.getWorldQuaternion(new it),ch:F,nRest:T.clone().multiplyScalar(-G),qs:null}});function C(R,F){let V=R.nRest.clone().multiplyScalar(F),q=[R.ch.index[0],R.ch.pinky[0]].filter(Boolean).map(z=>z.pos),Q=(q.length?q.reduce((z,W)=>z.add(W),Vt()).multiplyScalar(1/q.length):R.hpos.clone().addScaledVector(b,-.1)).sub(R.hpos).normalize(),ee=V.clone().addScaledVector(Q,-V.dot(Q)).normalize(),re=R.hwq.clone().invert();R.fl=Q.clone().applyQuaternion(re),R.nl=ee.clone().applyQuaternion(re),R.QlInv=new it().setFromRotationMatrix(new Re().makeBasis(R.fl,ee.clone().applyQuaternion(re),new D().crossVectors(R.fl,R.nl))).invert();for(let z in R.ch)R.ch[z].forEach(W=>{W.Al.crossVectors(Q,ee).normalize().applyQuaternion(W.wq.clone().invert())})}C(U.r,Ov),C(U.l,Ov),us&&us.parent&&us.parent.remove(us),us=new In,us.quaternion.copy(S),us.scale.setScalar(I),us.add(n),us.position.set(0,-.32,.1).sub(N.clone().applyQuaternion(S).multiplyScalar(I)),ln.add(us),ln.updateMatrixWorld(!0),[[a.ur,a.lr,a.hr,1],[a.ul,a.ll,a.hl,-1]].forEach(([R,F,V,q])=>{let G=ln.worldToLocal(v(R));cu.push({s:R,e:F,h:V,side:q,bs:R.quaternion.clone(),be:F.quaternion.clone(),sp:G,reach:wo*.97,axis:V.position.clone().normalize(),info:U[q>0?"r":"l"]})})}function Bv(n,e,t,i){n.quaternion.copy(e),n.updateWorldMatrix(!0,!0);let s=n.getWorldPosition(Vt()),r=t.getWorldPosition(Vt()).sub(s).normalize(),a=i.clone().sub(s).normalize(),o=n.getWorldQuaternion(new it),l=new it().setFromUnitVectors(r,a),c=n.parent.getWorldQuaternion(new it).invert();n.quaternion.copy(c.multiply(l).multiply(o)),n.updateWorldMatrix(!1,!0)}function dT(n,e){if(!n||!n.hb)return;let t=n.hb;if(t.quaternion.copy(n.hbBind),e){t.updateWorldMatrix(!0,!1);let s=t.getWorldQuaternion(new it).clone().invert(),r=ln.getWorldQuaternion(new it),a=e.f.clone().applyQuaternion(r).applyQuaternion(s).normalize(),o=e.n.clone().applyQuaternion(r).applyQuaternion(s);if(o.addScaledVector(a,-o.dot(a)),o.lengthSq()>1e-4){o.normalize(),n.nl&&o.dot(n.nl)<-.15&&o.negate();let l=new it().setFromRotationMatrix(new Re().makeBasis(a,o,new D().crossVectors(a,o))).multiply(n.QlInv);l.slerp(new it,.35),n.qs?n.qs.slerp(l,.22):n.qs=l.clone(),t.quaternion.multiply(n.qs)}for(let l in n.ch){let c=Math.max(0,Math.min(.85,e.c[l]??0));n.ch[l].forEach(d=>{d.cur=d.cur*.72+c*.28,d.b.quaternion.copy(d.bind).multiply(new it().setFromAxisAngle(d.Al,d.cur*.95))})}}else for(let i in n.ch)n.ch[i].forEach(s=>{s.cur*=.85,s.b.quaternion.copy(s.bind).multiply(new it().setFromAxisAngle(s.Al,s.cur*1.15))});t.updateWorldMatrix(!1,!0)}function zv(n,e,t){n.s.quaternion.copy(n.bs),n.e.quaternion.copy(n.be),n.s.updateWorldMatrix(!0,!0);let i=n.s.getWorldPosition(Vt()),s=n.e.getWorldPosition(Vt()),r=n.h.getWorldPosition(Vt()),a=i.distanceTo(s),o=s.distanceTo(r),l=e.clone().sub(i),c=Math.min(Math.max(l.length(),Math.abs(a-o)+.01),(a+o)*.995);l.normalize();let d=Math.max(-1,Math.min(1,(a*a+c*c-o*o)/(2*a*c))),u=ln.getWorldQuaternion(new it),h=new D(n.side*.45,-1,.35).normalize().applyQuaternion(u),p=h.clone().addScaledVector(l,-h.dot(l));p.lengthSq()<1e-4&&p.set(0,-1,0),p.normalize();let g=i.clone().addScaledVector(l,a*d).addScaledVector(p,a*Math.sqrt(Math.max(0,1-d*d)));if(Bv(n.s,n.bs,n.e,g),Bv(n.e,n.be,n.h,e),s=n.e.getWorldPosition(Vt()),r=n.h.getWorldPosition(Vt()),e.clone().sub(r).lengthSq()>1e-5){let f=n.e.parent.getWorldQuaternion(new it).invert(),m=n.e.getWorldQuaternion(new it),x=new it().setFromUnitVectors(r.sub(s).normalize(),e.clone().sub(s).normalize());n.e.quaternion.copy(f.multiply(x).multiply(m)),n.e.updateWorldMatrix(!1,!0)}dT(n.info,t)}var ya=(n,e)=>new D(n[e].x-.5,.5-n[e].y,-(n[e].z||0));function Hv(n,e){let t=ya(n,0),i=ya(n,5),s=ya(n,9),r=ya(n,17),a=s.clone().sub(t).normalize(),o=i.clone().sub(t),l=r.clone().sub(t),c=e?new D().crossVectors(l,o):new D().crossVectors(o,l);c.addScaledVector(a,-c.dot(a)).normalize();let d=t.distanceTo(s)||.1,u=(p,g)=>Math.max(0,Math.min(1,1.55-ya(n,p).distanceTo(t)/(ya(n,g).distanceTo(t)||d)*.72)),h=Math.max(0,Math.min(1,1.4-ya(n,4).distanceTo(r)/(i.distanceTo(r)||d)*.75));return{f:a,n:c,c:{index:u(8,5),pinky:u(20,17),thumb:h}}}var Xv="nextvr.gorilla.coins",Kn=(()=>{try{let n=localStorage.getItem(Xv);if(n!==null&&n!==""){let e=Number(n);if(Number.isFinite(e)&&e>=0)return Math.floor(e)}}catch{}return 100})(),Un=null,Ir=null,Jp=null,So=null,Qp=-1,Yp=0;function em(n=1){let e=Math.max(0,Math.floor(Kn+n));if(e===Kn)return Kn;Kn=e;try{localStorage.setItem(Xv,String(Kn))}catch{}return $v(),vt&&(vt.dataset.gorillaRightArmCoins=String(Kn)),typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Kn),Kn}function $v(){if(!Jp||!Ir||Qp===Kn)return;Qp=Kn;let n=Jp,e=Ir.width,t=Ir.height;n.clearRect(0,0,e,t),n.fillStyle="#0b1222",n.beginPath(),n.roundRect?n.roundRect(4,4,e-8,t-8,22):n.rect(4,4,e-8,t-8),n.fill(),n.lineWidth=5,n.strokeStyle="#facc15",n.stroke();let i=50,s=t/2,r=28,a=n.createRadialGradient(i-8,s-8,4,i,s,r);a.addColorStop(0,"#fef08a"),a.addColorStop(.55,"#facc15"),a.addColorStop(1,"#ca8a04"),n.fillStyle=a,n.beginPath(),n.arc(i,s,r,0,Math.PI*2),n.fill(),n.lineWidth=3,n.strokeStyle="#fef9c3",n.stroke(),n.fillStyle="#713f12",n.font="900 26px Inter, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("$",i,s+1),n.textAlign="left",n.fillStyle="#fde047",n.font="800 16px Inter, system-ui, sans-serif",n.fillText("MOEDAS",92,34),n.fillStyle="#ffffff",n.font="900 36px Inter, system-ui, sans-serif",n.fillText(String(Kn),92,74),So&&(So.needsUpdate=!0)}function uT(){if(Un)return Un;Ir=document.createElement("canvas"),Ir.width=256,Ir.height=112,Jp=Ir.getContext("2d"),So=new $c(Ir),So.minFilter=un,So.magFilter=un,Qp=-1,$v(),Un=new In,Un.name="gorilla-right-arm-coin-counter";let n=new hn({color:1976635}),e=new Et(new lr(.088,.044,.072),n);e.position.set(0,0,-.02),Un.add(e);let t=new hn({color:15381256}),i=new Et(new lr(.148,.068,.012),t);i.position.set(0,0,-.004),Un.add(i);let s=new hn({map:So,transparent:!0,depthTest:!0,side:Gn}),r=new Et(new Nn(.14,.062),s);return r.position.set(0,0,.004),Un.add(r),typeof window<"u"&&(window.__gorillaRightArmCoinCounter={coins:Kn,attachedTo:"right-arm",side:1,visible:!0}),Un}function Yv(){if(!Un||!ln)return;let n=cu[0],e=im(),t=new D(0,1,0).applyQuaternion(ln.getWorldQuaternion(new it));if(n&&n.e&&n.h){let i=n.e.getWorldPosition(Vt()),s=n.h.getWorldPosition(Vt()),r=i.clone().lerp(s,.72),a=e.clone().sub(r);a.lengthSq()>1e-5&&(a.normalize(),r.addScaledVector(a,.065)),Un.position.copy(r),Un.up.copy(t),Un.lookAt(e)}else{let i=ln.localToWorld(new D(.24,-.22,-.44));Un.position.copy(i),Un.up.copy(t),Un.lookAt(e)}typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Kn,window.__gorillaRightArmCoinCounter.position=Un.position.toArray())}function hT(n,e){if(!e||e.length<21||(n==null?void 0:n.physicalSide)==="right")return!0;if((n==null?void 0:n.physicalSide)==="left")return!1;if(e[9].x>=.54)return!0;if(e[9].x<=.46)return!1;if(e[9].y<e[0].y&&Math.abs(e[5].x-e[17].x)>.022)return e[5].x<e[17].x;let t=String((n==null?void 0:n.id)||(n==null?void 0:n.handedness)||"").toLowerCase();return typeof(n==null?void 0:n.left)=="boolean"?n.left===!0:t.includes("left")||t==="l"?!0:t.includes("right")||t==="r"?!1:e[9].x>=.5}function fT(n){kl[0]=null,kl[1]=null;let e=[];for(let t=0;t<Ei.length;t++){let i=Ei[t];if(!i||!i.points||i.points.length<63)continue;let s=i.points,r=new Array(21);for(let a=0;a<21;a++)r[a]={x:s[a*3],y:s[a*3+1],z:s[a*3+2]||0};e.push({th:i,lm:r})}if(e.length>=2){e.sort((t,i)=>t.lm[9].x-i.lm[9].x);for(let t=0;t<2;t++){let{lm:i}=e[t],s=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);hs[t]={x:i[9].x,y:i[9].y,s,ori:Hv(i,t===1),t:n},kl[t]=i}}else if(e.length===1){let{th:t,lm:i}=e[0],r=hT(t,i)?1:0,a=1-r,o=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);hs[r]={x:i[9].x,y:i[9].y,s:o,ori:Hv(i,r===1),t:n},kl[r]=i,hs[a]=null,kl[a]=null,xa[a]=!1,qi[a]=null}if(Pr&&n-Pr.t<450){let t=Pr.idx;hs[t]={x:Pr.x,y:Pr.y,s:Pr.s,ori:null,t:n}}}var im=()=>ln.getWorldPosition(Vt());function du(){An&&(An.position.copy(tm),xn.set(0,0,0),xa[0]=!1,xa[1]=!1,qi[0]=null,qi[1]=null,Hl[0]=0,Hl[1]=0,An.updateMatrixWorld(!0))}var Ol=()=>new Promise(n=>setTimeout(n,16));async function Vv(n){let e=await fetch(n);if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.arrayBuffer(),i=new Uint8Array(t);if(i.length>=4&&i[0]===103&&i[1]===108&&i[2]===84&&i[3]===70)return t;let s=new DecompressionStream("gzip"),r=s.writable.getWriter();return r.write(i),r.close(),await new Response(s.readable).arrayBuffer()}function Gv(n,e){return new Promise((t,i)=>n.parse(e,"",t,i))}function va(n,e){yi&&(yi.querySelectorAll("[data-gorilla-splash-fill]").forEach(t=>{t.style.width=`${n}%`}),e&&yi.querySelectorAll("[data-gorilla-splash-step]").forEach(t=>{t.textContent=e}))}function pT(){if(si)return;si=new to,si.background=new De(8898815),si.fog=new zc(8898815,.0042),si.add(new Kc(14677247,4877115,.98));let n=new Kr(16773846,.92);n.position.set(30,60,20),si.add(n);let e=new Kr(10875900,.32);e.position.set(-28,34,-22),si.add(e),An=new In,si.add(An),ln=new Yt(fs.fov,1200/2/800,.05,380),ln.position.set(0,0,0),An.add(ln);let t=fs.ipd*.5;Fl=new Yt(fs.fov,1200/2/800,.05,380),Fl.position.set(-t,0,0),Bl=new Yt(fs.fov,1200/2/800,.05,380),Bl.position.set(t,0,0),ln.add(Fl,Bl);let i=uT();i&&!i.parent&&si.add(i),Yv(),zl.length=0;let s=new Yc(.24,.24,.055,18);s.rotateX(Math.PI*.5);let r=new so({color:16498468,emissive:9584654}),a=[[0,1.35,4.8],[-2.2,1.45,3.6],[2.2,1.45,3.6],[-3.8,1.85,.8],[3.8,1.85,.8],[0,2.2,-2.5],[-1.8,1.6,8.8],[1.8,1.6,8.8]];for(let o=0;o<a.length;o++){let[l,c,d]=a[o],u=new Et(s,r);u.position.set(l,c,d),u.userData={baseY:c,phase:o*.85,cooldownUntil:0},si.add(u),zl.push(u)}try{Ni=new jr({canvas:Ys,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),Ni.setPixelRatio(1),Ni.setSize(896,560,!1),Ni.setScissorTest(!0)}catch{Ni=null}}async function mT(){if(!ru){if(Dl)return Dl;if(pT(),typeof window<"u"&&window.__gorillaFastTest){ru=!0;return}return Dl=(async()=>{var n;try{va(18,"Descompactando mapa da floresta 3D..."),await Ol();let e=new nu;e.textureLoader=new ro((n=e.options)==null?void 0:n.manager);let[t,i]=await Promise.all([Vv("./gorilla-map.task"),Vv("./gorilla-rig.task")]);va(45,"Carregando texturas e geometria..."),await Ol();let[s,r]=await Promise.all([Gv(e,t),Gv(e,i)]);va(68,"Otimizando malhas 3D (Lambert merge)..."),await Ol();let a=lT(s.scene);va(84,"Construindo grade f\xEDsica de colis\xE3o..."),await Ol(),iT(a);let o=rT(ba[0],ba[1],ba[2],jp)||[ba[0],.9,ba[2]];tm.set(o[0],o[1],o[2]),va(94,"Ativando bra\xE7os Gorilla 3D..."),await Ol(),cT(r.scene),du(),ru=!0,va(100,"Pronto! Entrando no Gorilla Tag...")}catch(e){console.warn("Gorilla Tag load fallback:",e),ru=!0}finally{Dl=null}})(),Dl}}function gT(){if(vt)return;let n=document.getElementById("hud")||document.body;vt=document.createElement("div"),vt.id="gorilla-overlay",vt.dataset.testid="gorilla-overlay",vt.dataset.cardboardLenses="2015",vt.dataset.gorillaStage="idle",vt.dataset.gorillaRightArmCoins=String(Kn),vt.dataset.lensModel=fs.model,vt.dataset.lensK1=String(fs.k1),vt.dataset.lensK2=String(fs.k2),vt.style.cssText=["position:fixed","left:0","top:0","width:1200px","height:800px","z-index:9997","display:none","background:#050811","overflow:hidden","touch-action:none"].join(";"),Ys=document.createElement("canvas"),Ys.id="gorilla-canvas",Ys.width=896,Ys.height=560,Ys.style.cssText="position:absolute;left:0;top:0;width:1200px;height:800px;display:block;",vt.appendChild(Ys);let e=document.createElement("div");e.className="gorilla-cardboard-divider",e.style.cssText=["position:absolute","left:599px","top:0","width:2px","height:800px","background:rgba(255,255,255,.22)","pointer-events:none","z-index:4"].join(";"),vt.appendChild(e);let t=(r,a)=>{let o=document.createElement("div");return o.style.cssText=`position:absolute;left:${r+120}px;top:12px;width:360px;display:flex;align-items:center;justify-content:center;gap:6px;z-index:6;pointer-events:auto;font-family:Inter,system-ui,sans-serif`,o.innerHTML=`
      <button type="button" data-gorilla-act="jump" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(251,191,36,.45);background:rgba(120,53,15,.82);color:#fde68a;font:700 10px Inter,sans-serif;cursor:pointer">Salto</button>
      <button type="button" data-gorilla-act="spawn" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Spawn</button>
      <button type="button" data-gorilla-act="recenter" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Recentrar</button>
      <button type="button" data-gorilla-act="exit" ${a?'data-gorilla-exit="1"':""} style="padding:4px 10px;border-radius:999px;border:1px solid rgba(248,113,113,.45);background:rgba(153,27,27,.82);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Sair</button>
    `,o};vt.appendChild(t(0,!0)),vt.appendChild(t(600,!1)),yi=document.createElement("div"),yi.id="gorilla-splash",yi.dataset.testid="gorilla-splash",yi.style.cssText=["position:absolute","left:0","top:0","width:1200px","height:800px","z-index:10","display:none","flex-direction:row","align-items:stretch","justify-content:stretch","background:radial-gradient(circle at 50% 38%, #1e293b 0%, #090d16 70%, #030712 100%)","color:#f8fafc","font-family:Inter,system-ui,sans-serif","text-align:center","user-select:none"].join(";");let i=r=>`
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
  `;yi.innerHTML=i(!0)+i(!1),vt.appendChild(yi),vt.addEventListener("click",r=>{let a=r.target.closest("[data-gorilla-act]");if(!a)return;let o=a.dataset.gorillaAct;if(o==="exit")Zv();else if(o==="spawn")du();else if(o==="jump"){let l=new D(0,0,-1).applyQuaternion(ln?ln.getWorldQuaternion(new it):new it);l.y=0,l.lengthSq()>1e-4&&l.normalize(),xn.x+=l.x*4.2,xn.z+=l.z*4.2,xn.y=Math.max(xn.y,4.8),em(1)}else o==="recenter"&&(qv=new hi().setFromQuaternion(fe.quaternion,"YXZ").y)});let s=r=>{let a=vt.getBoundingClientRect();if(!a.width||!a.height)return;let o=Math.max(0,Math.min(1,(r.clientX-a.left)/a.width)),l=Math.max(0,Math.min(1,(r.clientY-a.top)/a.height)),c=o>=.5?(o-.5)*2:o*2;Pr={idx:c>=.5?1:0,x:c,y:l,s:r.buttons?.12:.18,t:performance.now()}};vt.addEventListener("pointerdown",s),vt.addEventListener("pointermove",r=>{r.buttons&&s(r)}),vt.addEventListener("pointerup",()=>{Pr=null}),n.appendChild(vt)}function Wv(){let n=im();for(let e=0;e<3&&nm(n.x,n.y,n.z,jp);e++){let t=jp-qe.d;An.position.x+=qe.nx*t,An.position.y+=qe.ny*t,An.position.z+=qe.nz*t,n.x+=qe.nx*t,n.y+=qe.ny*t,n.z+=qe.nz*t;let i=xn.x*qe.nx+xn.y*qe.ny+xn.z*qe.nz;i<0&&(xn.x-=qe.nx*i,xn.y-=qe.ny*i,xn.z-=qe.nz*i,qe.ny>.5&&(xn.x*=.88,xn.z*=.88))}n.y<tm.y-18&&du()}function jv(n){if(!ou)return;au=requestAnimationFrame(jv);let e=Math.min((n-(lu||n))/1e3,.04)||.016;if(lu=n,!si||!An||!ln)return;let t=new hi().setFromQuaternion(fe.quaternion,"YXZ");ln.quaternion.setFromEuler(new hi(t.x,t.y-qv,t.z,"YXZ")),fT(n);let i=jt.consumeStepDelta();i.lengthSq()>1e-6&&(An.position.x+=i.x,An.position.z+=i.z,An.position.y+=i.y*.25),xn.y-=9.8*e,xn.multiplyScalar(1-.14*e),An.position.addScaledVector(xn,e),An.updateMatrixWorld(!0),Wv();for(let s=0;s<2;s++){hs[s]&&n-hs[s].t>220&&(hs[s]=null);let r=hs[s],a=cu[s?0:1];if(!r){if(xa[s]=!1,qi[s]=null,Hl[s]=0,a){let g=new D(s?.24:-.24,-.26,-.46);zv(a,ln.localToWorld(g),null)}continue}Hl[s]++;let o=a?a.sp:Vt(),l=Vt();if(l.set((r.x-.5)*1.65,(.5-r.y)*1.8-.34,-Math.min(.95,Math.max(.25,.09/Math.max(r.s,.035)))),qi[s]){let g=l.clone().sub(qi[s]);g.length()>.32&&l.copy(qi[s]).addScaledVector(g.normalize(),.32),l.lerp(qi[s],.24)}let c=l.clone().sub(o);c.length()>wo*.97&&l.copy(o).addScaledVector(c.setLength(wo*.97),1),tT[s].copy(l);let d=ln.localToWorld(l.clone());if(Hl[s]>=1&&nm(d.x,d.y,d.z,su)){let g=new D(qe.x+qe.nx*su,qe.y+qe.ny*su,qe.z+qe.nz*su);if(!xa[s])xa[s]=!0,$p[s].copy(g);else{let y=$p[s].clone().sub(d),f=y.length();if(f>.001){f>.28&&y.multiplyScalar(.28/f),An.position.add(y),Yp+=y.length(),Yp>=.38&&(Yp=0,em(1));let m=y.clone().multiplyScalar(eT/Math.max(e,.01));xn.lerp(m,.56),xn.length()>kv&&xn.setLength(kv),An.updateMatrixWorld(!0),Wv()}}ga[s].copy($p[s])}else xa[s]=!1,ga[s].copy(d);let h=ln.worldToLocal(ga[s].clone()),p=h.clone().sub(o);p.length()>wo*.97&&(h.copy(o).addScaledVector(p.setLength(wo*.97),1),ga[s].copy(ln.localToWorld(h))),qi[s]||(qi[s]=Vt()),qi[s].copy(h),a&&zv(a,ga[s],r.ori)}if(zl.length){let s=im();for(let r=0;r<zl.length;r++){let a=zl[r],o=a.userData;if(n<o.cooldownUntil){a.visible=!1;continue}a.visible=!0,a.rotation.y+=e*2.4,a.position.y=o.baseY+Math.sin(n*.003+o.phase)*.08;let l=a.position.distanceTo(s),c=hs[0]?a.position.distanceTo(ga[0]):99,d=hs[1]?a.position.distanceTo(ga[1]):99;(l<.85||c<.45||d<.45)&&(o.cooldownUntil=n+4500,a.visible=!1,em(5))}}if(Yv(),Ni&&Fl&&Bl){An.updateMatrixWorld(!0);let s=Ys.width,r=Ys.height,a=s>>1;Ni.setViewport(0,0,a,r),Ni.setScissor(0,0,a,r),Ni.render(si,Fl),Ni.setViewport(a,0,a,r),Ni.setScissor(a,0,a,r),Ni.render(si,Bl)}}function Mo(){var t,i,s,r,a,o;if(gT(),Ul||ou)return;Ul=!0,window.__gorillaStereoOverlay=!0,window.__gorillaExit=Zv,window.__gorillaOnHands=null,vt&&(vt.dataset.gorillaRightArmCoins=String(Kn)),w.handsOn=!0,ns().catch(()=>{});try{(i=(t=window.NativeXR)==null?void 0:t.handVisuals)==null||i.call(t,!1)}catch{}Zp=he.map(l=>({win:l,hidden:!!l.hidden}));for(let l of[...he])typeof l.setHidden=="function"?l.setHidden(!0):l.shell&&(l.shell.style.display="none");Er(!0),Ht(!1),en(!0),(r=(s=te).invalidate)==null||r.call(s),(o=(a=te).render)==null||o.call(a,Ae,fe),vt.dataset.gorillaStage="entering",vt.style.display="block",yi.style.display="flex",va(15,"Iniciando Gorilla Tag...");let n=typeof window<"u"&&!!window.__gorillaFastTest,e=new Promise(l=>setTimeout(l,n?240:1200));Promise.all([mT(),e]).then(()=>{Ul&&(Ul=!1,ou=!0,vt.dataset.gorillaStage="playing",yi.style.display="none",du(),lu=performance.now(),jv(lu))})}function Zv(){var n,e,t,i,s,r;Ul=!1,ou=!1,window.__gorillaStereoOverlay=!1,window.__gorillaOnHands=null,Uv[0]=0,Uv[1]=0,nT=0,au&&(cancelAnimationFrame(au),au=0),yi&&(yi.style.display="none"),vt&&(vt.dataset.gorillaStage="idle",vt.style.display="none");try{(e=(n=window.NativeXR)==null?void 0:n.handVisuals)==null||e.call(n,!!w.handDraw)}catch{}for(let{win:a,hidden:o}of Zp)he.includes(a)&&(typeof a.setHidden=="function"?a.setHidden(o):a.shell&&(a.shell.style.display=""));Zp=[],w.spatialLauncher||(en(!1),Ht(!0)),(i=(t=te).invalidate)==null||i.call(t),(r=(s=te).render)==null||r.call(s,Ae,fe)}var se=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var yT=n=>{if(ye)return mn("browser-extra",k("browser"),n);try{window.open(n,"_blank","noopener")}catch{Je("Bloqueado pelo navegador")}},vT=[{name:"Google",url:"https://www.google.com/",bg:"#ffffff",color:"#4285F4",badge:"G"},{name:"YouTube",url:"https://www.youtube.com/",bg:"#ff0033",color:"#ffffff",badge:"\u25B6"},{name:"Roblox",url:"https://www.roblox.com/",bg:"#090d16",color:"#f8fafc",badge:"\u25C8",img:"./roblox-logo.jpg"},{name:"Discord",url:"https://discord.com/app",bg:"#5865F2",color:"#ffffff",badge:"D"},{name:"Instagram",url:"https://www.instagram.com/",bg:"linear-gradient(135deg,#feda75,#d62976,#4f5bd5)",color:"#ffffff",badge:"\u25CE"},{name:"Facebook",url:"https://www.facebook.com/",bg:"#1877F2",color:"#ffffff",badge:"f"},{name:"Beat Saber",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"#070814",color:"#ffffff",badge:"\u2694",img:"./beat-saber-logo.jpg"},{name:"TikTok",url:"https://www.tiktok.com/",bg:"#000000",color:"#25F4EE",badge:"\u266A",img:"./tiktok-logo.jpg"}],bT=[{title:"YouTube \xB7 V\xEDdeos 360\xB0 VR",domain:"youtube.com",url:"https://www.youtube.com/",bg:"linear-gradient(135deg,#7f1d1d,#ef4444)",badge:"\u25B6 YouTube"},{title:"Roblox \xB7 Mundos e Jogos",domain:"roblox.com",url:"https://www.roblox.com/",bg:"linear-gradient(135deg,#0f172a,#334155)",badge:"\u25C8 Roblox",img:"./roblox-logo.jpg"},{title:"Beat Saber \xB7 VR Imediato",domain:"moonrider.xyz",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"linear-gradient(135deg,#1e1b4b,#dc2626)",badge:"\u2694 Beat Saber",img:"./beat-saber-logo.jpg"},{title:"Hyper Dash \xB7 Arena VR",domain:"immersiveweb.dev",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0c4a6e,#0284c7)",badge:"\u26A1 Hyper Dash",img:"./hyper-dash-logo.jpg"}],xT=[{name:"Spotify",url:"https://open.spotify.com/",bg:"#121316",logoBg:"#1ED760",logoColor:"#000000",logoText:"Spotify",pill:!0},{name:"Music",url:"https://music.youtube.com/",bg:"#121316",logoBg:"#FF0033",logoColor:"#ffffff",logoText:"\u25C9 Music",pill:!0},{name:"Crunchyroll",url:"https://www.crunchyroll.com/",bg:"#121316",logoBg:"#F47521",logoColor:"#ffffff",logoText:"crunchyroll",pill:!1},{name:"HBO Max",url:"https://www.max.com/",bg:"#121316",logoBg:"#002BE7",logoColor:"#ffffff",logoText:"HBO max",pill:!1},{name:"Hulu",url:"https://www.hulu.com/",bg:"#121316",logoBg:"#1CE783",logoColor:"#050709",logoText:"hulu",pill:!1},{name:"Tubi",url:"https://tubitv.com/",bg:"#121316",logoBg:"#FA382F",logoColor:"#ffffff",logoText:"tubi",pill:!1},{name:"Paramount+",url:"https://www.paramountplus.com/",bg:"#121316",logoBg:"#0064FF",logoColor:"#ffffff",logoText:"Paramount+",pill:!1},{name:"Peacock",url:"https://www.peacocktv.com/",bg:"#121316",logoBg:"#000000",logoColor:"#ffffff",logoText:"peacock",pill:!1},{name:"Twitch",url:"https://www.twitch.tv/",bg:"#121316",logoBg:"#9146FF",logoColor:"#ffffff",logoText:"twitch",pill:!1},{name:"ESPN",url:"https://www.espn.com/",bg:"#121316",logoBg:"#CC0000",logoColor:"#ffffff",logoText:"ESPN",pill:!1}],_T=[{title:"Acima das Nuvens 360\xB0",sub:"Experi\xEAncia WebXR Panor\xE2mica",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0284c7,#1e1b4b)"},{title:"Explora\xE7\xE3o Espacial VR",sub:"Tour Orbital Interativo 3D",url:"https://eyes.nasa.gov/",bg:"linear-gradient(135deg,#311042,#090d16)"},{title:"Jogos WebXR Imersivos",sub:"Cat\xE1logo VR no Navegador",url:"https://constructarcade.com/",bg:"linear-gradient(135deg,#065f46,#0f172a)"}];function wT(){return`
    <div class="qb-home-scroll">
      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Populares</span></div>
        <div class="qb-pop-row">
          ${vT.map(n=>`
            <button type="button" class="qb-pop-item" data-qb-url="${Ce(n.url)}" title="${Ce(n.name)}">
              <span class="qb-pop-icon" style="background:${n.bg};color:${n.color};overflow:hidden;padding:0">${n.img?`<img src="${n.img}" alt="${Ce(n.name)}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">`:Ce(n.badge)}</span>
              <span class="qb-pop-lbl">${Ce(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Continuar navegando</span><span class="qb-sec-more">Ver mais</span></div>
        <div class="qb-cont-grid">
          ${bT.map(n=>`
            <button type="button" class="qb-cont-card" data-qb-url="${Ce(n.url)}" title="${Ce(n.title)}">
              <div class="qb-cont-thumb" style="background:${n.bg};overflow:hidden">${n.img?`<img src="${n.img}" alt="${Ce(n.title)}" style="width:100%;height:100%;object-fit:cover;display:block">`:`<span>${Ce(n.badge)}</span>`}</div>
              <div class="qb-cont-meta">
                <div class="qb-cont-ttl">${Ce(n.title)}</div>
                <div class="qb-cont-dom">${Ce(n.domain)}</div>
              </div>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Entretenimento</span></div>
        <div class="qb-ent-grid">
          ${xT.map(n=>`
            <button type="button" class="qb-ent-tile" data-qb-url="${Ce(n.url)}" title="${Ce(n.name)}">
              <div class="qb-ent-card" style="background:${n.bg}">
                <span class="qb-ent-logo" style="background:${n.logoBg};color:${n.logoColor}">${Ce(n.logoText)}</span>
              </div>
              <span class="qb-ent-lbl">${Ce(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Experi\xEAncias imersivas</span><span class="qb-sec-more">Explorar</span></div>
        <div class="qb-imm-grid">
          ${_T.map(n=>`
            <button type="button" class="qb-imm-card" data-qb-url="${Ce(n.url)}" style="background:${n.bg}">
              <span class="qb-imm-badge">WEBXR</span>
              <span class="qb-imm-ttl">${Ce(n.title)}</span>
              <span class="qb-imm-sub">${Ce(n.sub)}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `}function Mu(n,e,t="https://duckduckgo.com/",i={}){var C,R,F,V,q,G,Q,ee,re,z;let s=(i==null?void 0:i.mode)==="incognito-tab"||i!=null&&i.incognito?"incognito-tab":"new-tab",r=s==="incognito-tab",a=r&&t==="https://duckduckgo.com/"?"https://duckduckgo.com/?kae=d&kp=-1":t,o=r?"Navegador \xB7 Guia An\xF4nima":(i==null?void 0:i.mode)==="new-tab"?"Navegador \xB7 Nova Guia":e||"Navegador",l=he.find(W=>W.id==="browser");if(l){l.el.dataset.browserMode=s,l.el.dataset.incognito=r?"1":"0",l.shell&&(l.shell.dataset.browserMode=s,l.shell.dataset.incognito=r?"1":"0");let W=l.el.querySelector(".win-title");W&&(W.textContent=o);let ne=l.el.querySelector("[data-browser-incognito]");ne&&(ne.dataset.browserIncognito=r?"1":"0",ne.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",ne.style.background=r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)",ne.style.borderColor=r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)");let ae=l.el.querySelector("[data-native-browser], iframe"),$=l.el.querySelector(".qb-home-overlay"),ie=t==="https://duckduckgo.com/";$&&($.hidden=!ie);let pe=l.el.querySelector(".qb-urlfld");return pe&&(pe.value=a),ae&&(ae.dataset.homeOverlay=ie?"1":"0",ye?(ae.dataset.url=a,(R=(C=window.NativeXR)==null?void 0:C.browserCmd)==null||R.call(C,"browser","go",a)):ae.src=a),Jt(l),(V=(F=te).invalidate)==null||V.call(F),(G=(q=te).render)==null||G.call(q,Ae,fe),l}let c=se("div");c.style.cssText=`display:flex;flex-direction:column;height:100%;background:${r?"#120e1e":"#171a22"};color:#e9edf4`;let d=se("div");d.style.cssText=`display:flex;align-items:center;gap:4px;padding:3px 6px;background:${r?"#0b0814":"#0e1117"};border-bottom:1px solid rgba(255,255,255,.08)`;let u=se("button","qb-icn");u.innerHTML=J("back"),u.title="Voltar";let h=se("button","qb-icn");h.innerHTML=J("enter"),h.style.transform="rotate(180deg)",h.title="Avan\xE7ar";let p=se("button","qb-icn");p.innerHTML=J("refresh"),p.title="Recarregar";let g=se("span","qb-mode-badge");g.dataset.browserIncognito=r?"1":"0",g.dataset.qbAct="home",g.title="In\xEDcio do Navegador",g.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",g.style.cssText=`cursor:pointer;font-size:10px;font-weight:800;letter-spacing:.04em;padding:3px 8px;border-radius:999px;white-space:nowrap;color:#f8fafc;background:${r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)"};border:1px solid ${r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)"}`;let y=se("input","fld qb-urlfld");y.type="text",y.placeholder=r?"Pesquisa privada an\xF4nima ou URL":"Pesquisar ou inserir URL",y.value=a;let f=se("button","qb-icn");f.innerHTML=J("star"),f.title="Favorito",d.append(u,h,p,g,y,f);let m=se("div");m.style.cssText="flex:1;min-height:0;position:relative;background:#181a20";let x=t==="https://duckduckgo.com/",v=se("div","qb-home-overlay",wT());v.hidden=!x;let M=se(ye?"div":"iframe");ye?(M.dataset.nativeBrowser="browser",M.style.cssText="width:100%;height:100%;background:#181a20;position:relative;overflow:hidden",M.dataset.url=a,M.dataset.homeOverlay=x?"1":"0",M.appendChild(v),m.appendChild(M)):(M.style.cssText="width:100%;height:100%;border:0;background:#fff",M.referrerPolicy="no-referrer",M.sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation",M.src=a,M.dataset.homeOverlay=x?"1":"0",m.append(M,v));let E=se("div","qb-dock"),T=document.createElement("button");T.className="dock-av",T.title="Perfil",T.setAttribute("aria-label","Perfil"),T.innerHTML=ST,E.appendChild(T);let b=document.createElement("button");b.className="dock-status",b.title="Status",b.innerHTML=`<span class="dock-time">--:--</span><span class="dock-wifi">${J("wifi")}</span><span class="dock-bat">${MT}</span>`,E.appendChild(b),c.append(d,m,E);function O(){let W=cs(),ne=E.querySelector(".dock-time");if(ne&&(ne.textContent=W.time==="--:--"?new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):W.time),ye&&W.batteryLevel!=null){let ae=E.querySelector(".dock-bat .b-fill");ae&&(ae.setAttribute("width",String(Math.max(2,13*W.batteryLevel))),ae.setAttribute("fill",W.charging?"#8de6c8":W.batteryLevel<.2?"#ff6b6b":"currentColor"))}}O();let S=setInterval(O,2e4);!ye&&navigator.getBattery&&navigator.getBattery().then(W=>{function ne(){let ae=E.querySelector(".dock-bat .b-fill");ae&&(ae.setAttribute("width",String(Math.max(2,13*W.level))),ae.setAttribute("fill",W.charging?"#8de6c8":W.level<.2?"#ff6b6b":"currentColor"))}W.addEventListener("levelchange",ne),W.addEventListener("chargingchange",ne),ne()}).catch(()=>{});function _(){let W=E.querySelector(".dock-wifi");W&&(W.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",_),addEventListener("offline",_),_();function I(W){var ae,$,ie,pe;let ne=(W||"").trim();ne&&(/^https?:\/\//i.test(ne)||(ne=/\.\w{2,}($|\/)/.test(ne)?"https://"+ne:"https://duckduckgo.com/?q="+encodeURIComponent(ne)),y.value=ne,v.hidden=!0,M.dataset.homeOverlay="0",ye?(M.dataset.url=ne,($=(ae=window.NativeXR)==null?void 0:ae.browserCmd)==null||$.call(ae,"browser","go",ne)):M.src=ne,(pe=(ie=te).invalidate)==null||pe.call(ie))}function N(W,ne){var ae,$;ye&&(($=(ae=window.NativeXR)==null?void 0:ae.browserCmd)==null||$.call(ae,"browser",W,ne||""))}v.addEventListener("click",W=>{let ne=W.target.closest("[data-qb-url]");if(!ne)return;W.stopPropagation();let ae=ne.dataset.qbUrl||"";if(ae.includes("roblox.com")){ql();return}if(ae.includes("moonrider.xyz")){Au();return}I(ae)}),g.onclick=()=>{var W,ne;v.hidden=!v.hidden,M.dataset.homeOverlay=v.hidden?"0":"1",(ne=(W=te).invalidate)==null||ne.call(W)},y.addEventListener("keydown",W=>{W.key==="Enter"&&(I(y.value),y.blur())}),y.addEventListener("focus",()=>pi(!0,y)),u.onclick=()=>N("back"),h.onclick=()=>N("fwd"),p.onclick=()=>N("reload");let U=Qt({id:"browser",title:o,node:c});return U!=null&&U.el&&(U.el.dataset.browserMode=s,U.el.dataset.incognito=r?"1":"0"),U!=null&&U.shell&&(U.shell.dataset.browserMode=s,U.shell.dataset.incognito=r?"1":"0"),U._cleanupQB=()=>{clearInterval(S),removeEventListener("online",_),removeEventListener("offline",_)},U.obj.position.copy(U.target),U.apply(),Ae.updateMatrixWorld(!0),(ee=(Q=te).invalidate)==null||ee.call(Q),(z=(re=te).render)==null||z.call(re,Ae,fe),U}function sb(n="new-tab"){let e=n==="incognito-tab",t=Mu("browser",e?"Navegador \xB7 Guia An\xF4nima":"Navegador \xB7 Nova Guia",e?"https://duckduckgo.com/?kae=d&kp=-1":"https://duckduckgo.com/",{mode:e?"incognito-tab":"new-tab",incognito:e});return Je(e?"Guia An\xF4nima aberta":"Nova Guia aberta"),t}typeof window<"u"&&(window.nextvrOpenBrowserOption=sb);var ST='<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',MT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';function mn(n,e,t,i){var g,y,f,m;if(n==="browser"||n==="youtube"||n==="netflix"||n==="prime"||n==="tiktok"||n==="twitch"||n==="discord")return Mu(n,e,t);let s=se("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=se("div","row browser-bar"),a=se("input","fld");a.value=t,a.placeholder=k("search");let o=se("button","go",J("enter"));o.setAttribute("aria-label",k("open")),o.title=k("open");let l=se("button","go",J("external"));l.setAttribute("aria-label",k("open")),l.title=k("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(a,o,l);let c=se("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let d=se("div");d.style.cssText="flex:1;min-height:0;position:relative";let u=se(ye?"div":"iframe");ye&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),d.appendChild(u),s.append(r,c,d);let h=x=>{let v=(x||"").trim();if(v){if(/^https?:\/\//i.test(v)||(v=/\.\w{2,}($|\/)/.test(v)?"https://"+v:"https://duckduckgo.com/?q="+encodeURIComponent(v)),a.value=v,ye){u.dataset.url=v,c.style.display="none";return}u.src=v,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};o.onclick=()=>h(a.value),a.addEventListener("keydown",x=>{x.key==="Enter"&&h(a.value)}),a.addEventListener("focus",()=>pi(!0,a)),l.onclick=()=>yT(a.value),h(t);let p=Qt({id:n,title:e,node:s});return p.shell.classList.add("web-page-window"),p.obj.position.copy(p.target),p.apply(),Ae.updateMatrixWorld(!0),(y=(g=te).invalidate)==null||y.call(g),(m=(f=te).render)==null||m.call(f,Ae,fe),p}var Ce=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var uu=[];function mm(){let n=se("div","pad"),e=se("div");e.innerHTML=`<h2>${k("gallery")}</h2><p class="sub">Veja suas fotos e troque o ambiente do NextVR.</p>`;let t=se("div");t.style.marginTop="22px",t.innerHTML=`<h3 style="font-size:18px;margin:0 0 10px 0;font-weight:700">${k("env")}</h3>
    <p class="sub" style="margin:0 0 12px 0">Escolha o fundo em que tudo flutua.</p>`;let i=se("div","grid3"),s=()=>{i.innerHTML="";for(let u of mf()){let h=se("button","env"+(u.thumb?" env-pano":""));h.style.background=u.thumb?`url('${u.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",h.innerHTML=`<span>${u.name}</span>`,h.setAttribute("aria-pressed",w.env===u.id?"true":"false"),h.onclick=()=>{Ai(u.id),[...i.children].forEach(p=>p.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true"),Je("Ambiente: "+u.name)},i.appendChild(h)}};s(),Ge("env",s),t.appendChild(i);let r=se("div");r.style.cssText="margin-top:26px;display:flex;align-items:center;gap:10px",r.innerHTML=`<h3 style="font-size:18px;margin:0;font-weight:700">${k("gallery")}</h3>`;let a=se("button","go",k("pickPhotos")),o=se("input");o.type="file",o.accept="image/*",o.multiple=!0,o.style.display="none",r.appendChild(a);let l=se("div","grid4"),c=se("div");c.style.cssText="margin-top:14px";let d=()=>{if(l.innerHTML="",!uu.length){l.innerHTML=`<p class="sub" style="grid-column:1/-1">${k("noPhotos")}</p>`;return}uu.forEach(u=>{let h=se("button","thumb");h.innerHTML=`<img src="${u}" alt="">`,h.onclick=()=>{c.innerHTML=`<img src="${u}" style="width:100%;border-radius:16px">`},l.appendChild(h)})};return a.onclick=()=>o.click(),o.onchange=()=>{for(let u of o.files)uu.push(URL.createObjectURL(u));d(),Je(uu.length+" fotos")},d(),n.append(e,t,r,o,l,c),Qt({id:"gallery",title:k("gallery"),node:n})}function xu(){let n=se("div","pad");n.innerHTML=`<h2>${k("env")}</h2><p class="sub">Troque sem fechar nada.</p>`;let e=se("div","grid3");for(let t of mf()){let i=se("button","env"+(t.thumb?" env-pano":""));i.style.background=t.thumb?`url('${t.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",i.innerHTML=`<span>${t.name}</span>`,i.setAttribute("aria-pressed",w.env===t.id),i.onclick=()=>{Ai(t.id),[...e.children].forEach(s=>s.setAttribute("aria-pressed","false")),i.setAttribute("aria-pressed","true")},e.appendChild(i)}return n.appendChild(e),Qt({id:"env",title:k("env"),node:n})}function AT(n,e,t){let i=se("div","opt");return i.append(se("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function cn(n,e,t,i){let s=se("div","yt-row"),r=se("span","yt-ic");r.innerHTML=n;let a=se("div","yt-txt");if(a.innerHTML=`<div class="yt-title">${e}</div>${t?`<div class="yt-sub">${t}</div>`:""}`,s.append(r,a),i){let o=se("div","yt-ctl");o.appendChild(i),s.appendChild(o)}else{let o=se("span","yt-ch");o.innerHTML="",s.appendChild(o)}return s}function _a(n,e){let t=se("button","yt-sw");t.type="button",t.setAttribute("role","switch");let i=()=>{t.dataset.on=w[n]?"1":"0",t.setAttribute("aria-checked",w[n]?"true":"false")};return i(),t.onclick=()=>{w[n]=w[n]?0:1,Ue(),i(),e&&e(w[n])},t}function Ao(n){let e=se("div","yt-sec");return e.textContent=n,e}function wa(n,e,t,i){let s=se("input","yt-range");return s.type="range",s.min=e,s.max=t,s.step=i,s.value=w[n],s.oninput=()=>{w[n]=+s.value,Ue()},s}function rb(n){n.innerHTML="";let e=fv(),t=n,i=se("div","az-row");i.innerHTML=`<i class="az-dot" data-state="${e.runtime}"></i><span class="az-text">${k(Pl()?"xrRuntimeReady":"xrMissing")}<small>${e.summary||""}</small></span>`,t.append(i);let s=se("div","row");if(s.style.cssText="gap:10px;flex-wrap:wrap",e.runtimeBundled&&!Pl()){let o=se("button","go",k("xrInstall"));o.onclick=()=>{lp()},s.append(o)}let r=se("button","go",k("xrSelfTest"));r.onclick=()=>cp(),s.append(r);let a=se("div","seg");for(let[o,l,c]of[["controllers",k("xrModeControllers"),k("xrModeControllersSub")],["hands",k("xrModeHands"),k("xrModeHandsSub")]]){let d=se("button",null,l);d.title=c,d.setAttribute("aria-pressed",String(gv()===o)),d.onclick=()=>{xv(o),[...a.children].forEach(u=>u.setAttribute("aria-pressed","false")),d.setAttribute("aria-pressed","true")},a.appendChild(d)}t.append(AT(k("xrHandMode"),k("xrHandModeSub"),a),s),t.append(se("p","note",k("xrHandModeNote"))),!Pl()&&!e.runtimeBundled&&t.append(se("p","note",k("xrBundlingNote")))}function $l(){var O,S;let n=se("div","quick-center"),e=se("section","quick-panel"),t=se("aside","quick-side"),i=se("div","quick-status"),s=()=>{var I,N;try{let U=(N=(I=window.NativeXR)==null?void 0:I.battery)==null?void 0:N.call(I);if(U){let C=JSON.parse(U);if(C&&typeof C.level=="number")return C}}catch{}let _=cs();return _&&typeof _.batteryLevel=="number"?{level:_.batteryLevel,charging:!!_.charging}:null},r=s(),a=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});i.innerHTML=`<div><strong>Controles r\xE1pidos</strong><span>${a}</span></div><div class="quick-battery">${J("battery")}<b data-cc-battery>${r?Math.round(r.level*100):"\u2014"}%</b></div>`,Ge("device-status",()=>{let _=i.querySelector("[data-cc-battery]");if(!_)return;let I=s();_.textContent=`${I?Math.round(I.level*100):"\u2014"}%`});let l=se("button","quick-gear",J("settings"));l.type="button",l.title="Todas as configura\xE7\xF5es",l.setAttribute("aria-label","Todas as configura\xE7\xF5es"),l.onclick=()=>_u(),i.appendChild(l);let c=se("div","quick-tiles"),d=(_,I,N,U,C=!1)=>{let R=se("button",`quick-tile${C?" is-disabled":""}`);return R.type="button",R.innerHTML=`<span class="quick-tile-icon">${J(_)}</span><span><b>${I}</b><small>${N}</small></span>`,R.disabled=C,U&&(R.onclick=U),c.appendChild(R),R};d("wifi","Wi-Fi","Abrir conex\xF5es",()=>{var _;return(_=window.NativeXR)!=null&&_.systemPanel?window.NativeXR.systemPanel("internet"):Je("Conex\xF5es dispon\xEDveis no Android")}),d("bluetooth","Bluetooth","Dispositivos",()=>{var _;return(_=window.NativeXR)!=null&&_.systemPanel?window.NativeXR.systemPanel("bluetooth"):Je("Bluetooth dispon\xEDvel no Android")}),d("android","Apps Android","Abrir janela Shizuku",()=>wu()),d("lock","Limite","Movimento protegido",null,!0),e.append(i,c);let u=se("div","quick-section");u.innerHTML='<div class="quick-section-title"><b>Controles r\xE1pidos</b><span>Toque para ativar ou ajustar</span></div>';let h=se("div","quick-controls"),p=w.env==="night"?"passthrough":w.env,g=!1,y=null,f=null,m=_=>{var I;g=!!_,(I=window.NativeXR)!=null&&I.audioEnabled&&window.NativeXR.audioEnabled(!g);for(let N of[y,f])N&&(N.classList.toggle("is-active",g),N.setAttribute("aria-pressed",String(g)));y&&(y.querySelector("small").textContent=g?"\xC1udio silenciado":"Som ativado")},x=(_,I,N,U,C=!1)=>{let R=se("button",`quick-control${C?" is-active":""}`);return R.type="button",R.setAttribute("aria-pressed",String(C)),R.innerHTML=`<span>${J(_)}</span><b>${I}</b><small>${N}</small>`,R.onclick=()=>{let F=U(R);R.classList.toggle("is-active",!!F),R.setAttribute("aria-pressed",String(!!F))},h.appendChild(R),R};x("camera","Vis\xE3o do ambiente",w.env==="passthrough"?"C\xE2mera ativa":"C\xE2mera desligada",_=>{let I=w.env!=="passthrough";return Fi(I),_.querySelector("small").textContent=I?"C\xE2mera ativa":"C\xE2mera desligada",I},w.env==="passthrough"),y=x("volumeoff","N\xE3o perturbe","Silenciar \xE1udio do app",()=>(m(!g),g)),x("crosshair","Recentralizar","Ajustar a vis\xE3o",()=>(Bi(),Je("Vis\xE3o recentralizada"),!1)),x("moon","Modo noturno",w.env==="night"?"Ativado":"Desativado",_=>{let I=w.env!=="night";return I?(p=w.env,Ai("night")):Ai(p==="night"?"passthrough":p),_.querySelector("small").textContent=I?"Ativado":"Desativado",I},w.env==="night"),x("settings","Mais configura\xE7\xF5es","Imagem, janelas e idioma",()=>(_u(),!1)),x("android","Apps do Android","Abrir launcher Shizuku",()=>(wu(),!1)),x("appGrid","Spatial App",w.spatialLauncher?"Ativado (Sem Dock)":"Desativado (Dock normal)",_=>{let I=!w.spatialLauncher;return Ru(I),_.querySelector("small").textContent=I?"Ativado (Sem Dock)":"Desativado (Dock normal)",I},!!w.spatialLauncher),x("vision","C\xE2mera Grande Ocular",w.wideCamera?"Ativada":"Normal",_=>{var I,N;return w.wideCamera=w.wideCamera?0:1,Ue(w),(N=(I=window.NativeXR)==null?void 0:I.wideCamera)==null||N.call(I,!!w.wideCamera),_.querySelector("small").textContent=w.wideCamera?"Ativada":"Normal",!!w.wideCamera},!!w.wideCamera),x("move",k("dockSnapSlot"),w.dockSnapSlot!==0?k("on"):k("off"),_=>(w.dockSnapSlot=w.dockSnapSlot===0?1:0,Ue(w),_.querySelector("small").textContent=w.dockSnapSlot!==0?k("on"):k("off"),w.dockSnapSlot!==0),w.dockSnapSlot!==0),x("crosshair",k("fingerTouch"),w.fingerTouch!==0?k("on"):k("off"),_=>{var I,N;return w.fingerTouch=w.fingerTouch===0?1:0,Ue(w),(N=(I=window.NativeXR)==null?void 0:I.setFingerTouch)==null||N.call(I,w.fingerTouch!==0),Me("fingerTouch",w.fingerTouch!==0),_.querySelector("small").textContent=w.fingerTouch!==0?k("on"):k("off"),w.fingerTouch!==0},w.fingerTouch!==0),x("crosshair","Pin\xE7a no App (Sem Raio)",w.pinchOnApp!==0?"Ativado":"Desativado",_=>(w.pinchOnApp=w.pinchOnApp===0?1:0,Ue(w),Me("pinchOnApp",w.pinchOnApp!==0),_.querySelector("small").textContent=w.pinchOnApp!==0?"Ativado":"Desativado",w.pinchOnApp!==0),w.pinchOnApp!==0),x("crosshair","Gesto de Soco 2s (Menu R\xE1pido)",w.gunGesture!==0?"Ativado":"Desativado",_=>(w.gunGesture=w.gunGesture===0?1:0,Ue(w),Me("gunGesture",w.gunGesture!==0),_.querySelector("small").textContent=w.gunGesture!==0?"Ativado":"Desativado",w.gunGesture!==0),w.gunGesture!==0),x("move","Modo 3DoF / 6DoF",w.sixdof!==0?"6DoF Ativado":"3DoF Ativado",_=>{var I,N;return w.sixdof=w.sixdof===0?1:0,Ue(w),w.sixdof||jt.reset(),(N=(I=window.NativeXR)==null?void 0:I.setSixDofEnabled)==null||N.call(I,w.sixdof!==0),Me("sixdof",w.sixdof!==0),_.querySelector("small").textContent=w.sixdof!==0?"6DoF Ativado":"3DoF Ativado",w.sixdof!==0},w.sixdof!==0),u.appendChild(h),e.append(u);let v=se("div","quick-side-title","Ajustes"),M=se("span","quick-side-icon",J("volume")),E=se("input","quick-vertical");E.type="range",E.min="0",E.max="100",E.value=(O=window.NativeXR)!=null&&O.volume?window.NativeXR.volume():65,E.setAttribute("aria-label","Volume"),E.title=`Volume ${E.value}%`,E.oninput=()=>{var _,I;(I=(_=window.NativeXR)==null?void 0:_.setVolume)==null||I.call(_,+E.value),E.title=`Volume ${E.value}%`},f=se("button","quick-side-button",J("volumeoff")),f.type="button",f.title="Silenciar \xE1udio",f.setAttribute("aria-label","Silenciar \xE1udio"),f.setAttribute("aria-pressed","false"),f.onclick=()=>m(!g);let T=se("span","quick-side-icon",J("sun")),b=se("input","quick-vertical");return b.type="range",b.min="10",b.max="100",b.value=(S=window.NativeXR)!=null&&S.brightness?window.NativeXR.brightness():70,b.setAttribute("aria-label","Brilho"),b.title=`Brilho ${b.value}%`,b.oninput=()=>{var _,I;(I=(_=window.NativeXR)==null?void 0:_.setBrightness)==null||I.call(_,+b.value),b.title=`Brilho ${b.value}%`},t.append(v,M,E,f,T,b),n.append(e,t),Qt({id:"control-center",title:"Configura\xE7\xF5es",node:n,w:980,h:640})}function _u(){let n=se("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f0f;color:#f1f1f1;font-family:Inter,system-ui,sans-serif;";let e=se("div");e.style.cssText="display:flex;align-items:center;gap:6px;padding:8px 8px 4px;";let t=se("button","yt-back");t.innerHTML=J("back"),t.title="Voltar",t.setAttribute("aria-label","Voltar"),t.onclick=()=>{let m=he.find(x=>x.id==="settings");m&&ht(m)};let i=se("div","yt-head-title");i.textContent=k("settings"),e.append(t,i);let s=se("div");s.style.cssText="flex:1;min-height:0;overflow-y:auto;padding:4px 0 20px;";let r=null,a=()=>{r=Qt({id:"language-pick",title:k("langTitle"),w:320,h:420,node:ub(w.lang||"pt",m=>{ta(m),Je(k("langChanged")),ht(r);let x=he.find(v=>v.id==="settings");x&&ht(x),_u()},!0)})};s.append(Ao(k("general")));let o=se("button","yt-link");o.append(cn(J("globe"),k("language"),yd(w.lang||"pt").label)),o.onclick=a,s.append(o),s.append(cn(J("gauge"),"Contador de FPS","Mostrar taxa de quadros",_a("showFps")));let l=se("div");l.style.cssText="display:inline-flex;gap:6px;align-items:center;";let c=se("button","entry-seg-btn"+(w.sixdof===0?" on":""),"3DoF");c.dataset.settingsDof="3dof";let d=se("button","entry-seg-btn"+(w.sixdof!==0?" on":""),"6DoF");d.dataset.settingsDof="6dof";let u=()=>{c.classList.toggle("on",w.sixdof===0),d.classList.toggle("on",w.sixdof!==0)};c.onclick=()=>{var m,x;w.sixdof=0,Ue(w),jt.reset(),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!1),Me("sixdof",!1),u()},d.onclick=()=>{var m,x;w.sixdof=1,Ue(w),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!0),Me("sixdof",!0),u()},l.append(c,d),s.append(cn(J("move"),"Modo 3DoF / 6DoF","Alternar entre 3DoF (rota\xE7\xE3o) e 6DoF (andar no espa\xE7o)",l));let h=se("button","yt-link");h.append(cn(J("image"),"Ambiente","Trocar passthrough / panorama")),h.onclick=()=>{let m=he.find(x=>x.id==="settings");m&&ht(m),mm()},s.append(h),s.append(Ao(k("hands"))),s.append(cn(J("user"),"Rastreamento","MediaPipe nativo \xB7 c\xE2mera traseira")),s.append(cn(J("edit3"),"Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",_a("handDraw"))),s.append(cn(J("crosshair"),k("fingerTouch"),k("fingerTouchDesc"),_a("fingerTouch",m=>{var x,v;(v=(x=window.NativeXR)==null?void 0:x.setFingerTouch)==null||v.call(x,!!m),Me("fingerTouch",!!m)}))),s.append(cn(J("crosshair"),"Pin\xE7a no App (Sem Raio)","Fazer a pin\xE7a encima de um app abre o app na hora, sem precisar do raio",_a("pinchOnApp",m=>Me("pinchOnApp",!!m)))),s.append(cn(J("crosshair"),"Gesto de Soco 2s (Menu R\xE1pido)","Fechar a m\xE3o toda por 2 segundos abre o menuzinho de recentrar dock e ambientes",_a("gunGesture",m=>Me("gunGesture",!!m)))),s.append(cn(J("zap"),"Sensibilidade","Pin\xE7a com histerese est\xE1vel")),s.append(Ao(k("windows"))),s.append(cn(J("maximize"),"Tamanho","Escala das janelas",wa("winScale",.6,1.6,.05))),s.append(cn(J("distance"),"Dist\xE2ncia","Dist\xE2ncia do arco",wa("winDist",ye?.6:1.5,ye?1.8:3.4,.05))),s.append(cn(J("curve"),k("curve"),"Abertura do arco",wa("winCurve",0,1,.05))),s.append(cn(J("curve"),k("win360"),k("win360k"),wa("win360K",.2,1.15,.05))),s.append(cn(J("curve"),k("win360All"),"Novas janelas curvadas",_a("win360"))),s.append(cn(J("move"),"Inclina\xE7\xE3o","Ajuste vertical das janelas",wa("winTilt",0,1.5,.05))),s.append(Ao(k("dock"))),s.append(cn(J("appGrid"),"Tamanho da dock",null,wa("dockSize",.7,1.5,.05))),s.append(cn(J("distance"),"Dist\xE2ncia da dock",null,wa("dockDist",.7,1.5,.05))),s.append(cn(J("move"),k("dockSnapSlot"),k("dockSnapDesc"),_a("dockSnapSlot"))),s.append(Ao(k("perf")));let p=se("div","yt-seg");for(let[m,x]of[["low",k("qualityLow")],["medium",k("qualityMedium")],["high",k("qualityHigh")],["auto",k("qualityAuto")]]){let v=se("button","yt-seg-btn");v.textContent=x,v.setAttribute("aria-pressed",w.quality===m),v.onclick=()=>{w.quality=m,Ue(),Me("quality"),[...p.children].forEach(M=>M.setAttribute("aria-pressed","false")),v.setAttribute("aria-pressed","true")},p.appendChild(v)}s.append(cn(J("settings"),k("quality"),"1080p \xB7 890p \xB7 390p \xB7 Auto",p)),s.append(Ao(k("xrTitle")));let g=se("button","yt-link");g.append(cn(J("controller"),k("xrTitle"),k("xrSub"))),g.setAttribute("aria-expanded","false");let y=se("div","card");y.dataset.xrPage="",y.style.margin="0 16px 14px",y.hidden=!0,g.onclick=()=>{y.hidden=!y.hidden,g.setAttribute("aria-expanded",String(!y.hidden)),y.hidden||rb(y)},s.append(g,y);let f=se("div","yt-foot");return f.textContent="NextVR \xB7 shell XR para Android \xB7 v1.0",s.append(f),n.append(e,s),Qt({id:"settings",title:k("settings"),node:n})}function ET(){let n=he.find(h=>h.id==="quick-settings");if(n)return Jt(n),lm(cs()),n;let e=se("div","quick-settings");e.innerHTML=`<section class="qs-panel">
    <header class="qs-top">
      <div class="qs-system">
        <span class="qs-battery" data-q-battery>${J("battery")}<span>--%</span></span>
        <span data-q-time>--:--</span><span class="qs-date" data-q-date></span>
      </div>
      <span class="qs-top-spacer"></span>
      <button class="qs-top-action" data-q-settings aria-label="Configura\xE7\xF5es NextVR">${J("settings")}<span>Configura\xE7\xF5es</span></button>
      <button class="qs-repin" data-act="pin" aria-label="Voltar ao arco">${J("crosshair")}</button>
      <button class="qs-close" data-q-close aria-label="Fechar">${J("x")}</button>
    </header>
    <div class="qs-ranges">
      <label class="qs-range" title="Volume de m\xEDdia"><input data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume"><span>${J("volume")}</span></label>
      <label class="qs-range" title="Brilho da tela"><input data-q-range="brightness" type="range" min="0" max="100" value="50" aria-label="Brilho"><span>${J("sun")}</span></label>
    </div>
    <div class="qs-cards">
      <div class="qs-card"><div class="qs-card-line">${J("wifi")}<span class="qs-card-title">Wi-Fi</span></div><span class="qs-card-sub" data-q-network>Verificando conex\xE3o</span></div>
      <div class="qs-card"><div class="qs-card-line">${J("bluetooth")}<span class="qs-card-title">Bluetooth</span></div><span class="qs-card-sub">Gerenciado pelo Android</span></div>
      <div class="qs-card"><div class="qs-card-line">${J("link")}<span class="qs-card-title">Link</span></div><span class="qs-card-sub">N\xE3o conectado</span></div>
      <div class="qs-card"><div class="qs-card-line">${J("boundary")}<span class="qs-card-title">Limite</span></div><span class="qs-card-sub">Desativado</span></div>
    </div>
    <div class="qs-tools">
      <button class="qs-tool" data-q-env>${J("scene")}<span>Vis\xE3o do ambiente</span></button>
      <button class="qs-tool" disabled title="O NextVR n\xE3o usa microfone">${J("mic")}<span>Microfone</span></button>
      <button class="qs-tool" data-q-recenter>${J("move")}<span>Redefinir visualiza\xE7\xE3o</span></button>
      <button class="qs-tool" data-q-night aria-pressed="false">${J("sun")}<span>Modo noturno</span></button>
      <button class="qs-tool" data-q-dnd aria-pressed="false">${J("moon")}<span>N\xE3o perturbe</span></button>
      <button class="qs-tool" disabled title="Espelhamento do sistema n\xE3o dispon\xEDvel nesta tela">${J("cast")}<span>Espelhar</span></button>
      <button class="qs-tool" disabled>${J("bug")}<span>Relatar problema</span></button>
      <button class="qs-tool" disabled>${J("lock")}<span>Modo viagem</span></button>
      <button class="qs-tool" disabled>${J("device")}<span>Remote Desktop</span></button>
    </div>
  </section>
  <aside class="qs-side" aria-label="Controles r\xE1pidos">
    <div class="qs-volume"><span class="qs-more"><i></i><i></i><i></i></span>
      <div class="qs-volume-slider-wrap"><input class="qs-v-range" data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume de m\xEDdia"></div>
      ${J("volume")}
    </div>
    <button class="qs-side-button" data-q-mute aria-pressed="false" aria-label="Silenciar m\xEDdia">${J("volumeoff")}</button>
    <button class="qs-side-button" data-q-night aria-pressed="false" aria-label="Modo noturno">${J("moon")}</button>
  </aside>`;let t=e,i={night:!1,dnd:!1,muted:!1,lastVolume:50};try{i={...i,...JSON.parse(localStorage.getItem("nextvr.quick-settings.v1")||"{}")}}catch{}let s=[...t.querySelectorAll("[data-q-range]")],r=(h,p)=>{var g,y;try{let f=Number((y=(g=window.NativeXR)==null?void 0:g[h])==null?void 0:y.call(g));return Number.isFinite(f)?Math.max(0,Math.min(100,f)):p}catch{return p}},a=ye?r("mediaVolumePercent",50):50,o=ye?r("brightnessPercent",50):50;a>0&&(i.lastVolume=a);function l(h,p){var y;let g=Math.max(0,Math.min(100,Number(p)||0));for(let f of s.filter(m=>m.dataset.qRange===h))f.value=String(g),f.style.setProperty("--fill",`${g}%`);h==="volume"&&(a=g,w.mediaVolume=g,g>0?(i.lastVolume=g,i.muted=!1):i.muted=!0),h==="brightness"&&((y=window.nextvrSetScreenBrightness)==null||y.call(window,g))}function c(){try{localStorage.setItem("nextvr.quick-settings.v1",JSON.stringify(i))}catch{}}function d(){t.classList.toggle("night",!!i.night),t.querySelectorAll("[data-q-night]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.night))),t.querySelectorAll("[data-q-dnd]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.dnd))),t.querySelectorAll("[data-q-mute]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.muted)))}l("volume",a),l("brightness",o),d();for(let h of s)h.addEventListener("input",()=>l(h.dataset.qRange,h.value)),h.addEventListener("change",()=>{var p,g,y,f;ye&&(h.dataset.qRange==="volume"&&((g=(p=window.NativeXR).setMediaVolumePercent)==null||g.call(p,a)),h.dataset.qRange==="brightness"&&((f=(y=window.NativeXR).setBrightnessPercent)==null||f.call(y,Number(h.value))),d(),c())});t.addEventListener("click",h=>{var g,y;let p=f=>h.target.closest(f);if(p("[data-q-close]")){ht(he.find(f=>f.id==="quick-settings"));return}if(p("[data-q-settings]")){_u();return}if(p("[data-q-env]")){xu();return}if(p("[data-q-recenter]")){Bi();return}if(p("[data-q-night]")){i.night=!i.night,d(),c();return}if(p("[data-q-dnd]")){i.dnd=!i.dnd,d(),c();return}p("[data-q-mute]")&&(i.muted=!i.muted,i.muted?(a>0&&(i.lastVolume=a),l("volume",0)):l("volume",i.lastVolume||50),ye&&((y=(g=window.NativeXR).setMediaVolumePercent)==null||y.call(g,a)),d(),c())});let u=Qt({id:"quick-settings",title:"Configura\xE7\xF5es",node:e,w:1040,h:660,chrome:!1,resizable:!1});return lm(cs()),u}function lm(n=cs()){var a;let e=(a=he.find(o=>o.id==="quick-settings"))==null?void 0:a.el.querySelector(".quick-settings");if(!e)return;let t=e.querySelector("[data-q-battery] span");t&&(t.textContent=n.batteryLevel==null?"--%":`${Math.round(n.batteryLevel*100)}%`);let i=e.querySelector("[data-q-time]");i&&(i.textContent=n.time||"--:--");let s=e.querySelector("[data-q-date]");s&&(s.textContent=n.date||"");let r=e.querySelector("[data-q-network]");r&&(r.textContent=n.online?"Conectado \xE0 internet":"Sem conex\xE3o")}Ge("device-status",lm);var ab="nextvr.lib.recent.v1",TT=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},Wl=TT(ab),RT=()=>{try{localStorage.setItem(ab,JSON.stringify(Wl))}catch{}},ob=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">N</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X",label:"X",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],cm={id:"gorilla-tag",name:"Gorilla Tag",label:"Gorilla Tag",bg:"#0b141a",html:'<img class="lx-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',kind:"app"},Fn=n=>{let e=he.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null};function ql(){var e,t,i,s,r,a,o,l;document.documentElement.dataset.robloxBlackEnv="1",(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,"black"),w.handDraw=1,(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!0),ye&&!bf()&&ns();for(let c of he)c.id!=="roblox"&&c.setHidden(!0);Ht(!1),en(!0);let n=mn("roblox","Roblox","https://www.roblox.com/");return n&&(n.setHidden(!1),n.obj.position.copy(n.target),n.apply(),Ae.updateMatrixWorld(!0),Jt(n)),(a=(r=te).invalidate)==null||a.call(r),(l=(o=te).render)==null||l.call(o,Ae,fe),n}Ge("wins",()=>{var n,e,t,i,s,r;if(document.documentElement.dataset.robloxBlackEnv==="1"&&!he.some(a=>a.id==="roblox")){delete document.documentElement.dataset.robloxBlackEnv,(e=(n=window.NativeXR)==null?void 0:n.env)==null||e.call(n,w.env||"passthrough");for(let a of he)a.id!=="spatial-launcher"&&a.setHidden(!1);w.spatialLauncher?Su():(en(!1),Ht(!0)),(i=(t=te).invalidate)==null||i.call(t),(r=(s=te).render)==null||r.call(s,Ae,fe)}});function Au(){var l,c,d,u,h,p,g,y,f,m;let n=he.find(x=>x.id==="beat-saber");if(n)return n.setHidden(!1),Jt(n),(c=(l=te).invalidate)==null||c.call(l),(u=(d=te).render)==null||u.call(d,Ae,fe),n;w.spatialLauncher||(Ht(!1),en(!0));let e=se("div","beat-saber-vr-stage");e.dataset.beatSaberVr="1",e.style.cssText="position:relative;width:100%;height:100%;background:radial-gradient(circle at 50% 38%,#141838 0%,#060814 68%,#020308 100%);overflow:hidden;display:flex;flex-direction:column;color:#f8fafc",e.innerHTML=`
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
  `;let t=e.querySelector("[data-bs-canvas]"),i=(h=t==null?void 0:t.getContext)==null?void 0:h.call(t,"2d"),s=0,r=performance.now(),a=x=>{if(!i||!document.body.contains(e))return;let v=(x-r)*.001,M=t.width,E=t.height;i.fillStyle="#050712",i.fillRect(0,0,M,E),i.strokeStyle="rgba(56,189,248,0.28)",i.lineWidth=2;for(let I=-3;I<=3;I++)i.beginPath(),i.moveTo(M*.5+I*26,E*.28),i.lineTo(M*.5+I*155,E),i.stroke();let T=v*1.4%1,b=26+T*68,O=M*.5-50-T*120,S=E*.3+T*(E*.52);i.fillStyle="#ff1744",i.strokeStyle="#ff8a80",i.lineWidth=3,i.fillRect(O-b*.5,S-b*.5,b,b),i.strokeRect(O-b*.5,S-b*.5,b,b);let _=M*.5+50+T*120;i.fillStyle="#00e5ff",i.strokeStyle="#84ffff",i.fillRect(_-b*.5,S-b*.5,b,b),i.strokeRect(_-b*.5,S-b*.5,b,b),s=requestAnimationFrame(a)};s=requestAnimationFrame(a);let o=Qt({id:"beat-saber",title:"Beat Saber VR",node:e,w:1020,h:640});return o!=null&&o.shell&&(o.shell.dataset.beatSaberVr="1"),o!=null&&o.el&&(o.el.dataset.beatSaberVr="1"),(p=e.querySelector("[data-bs-exit]"))==null||p.addEventListener("click",()=>{cancelAnimationFrame(s),ht(o),w.spatialLauncher||(en(!1),Ht(!0))}),Jt(o),(y=(g=te).invalidate)==null||y.call(g),(m=(f=te).render)==null||m.call(f,Ae,fe),o}typeof window<"u"&&(window.nextvrOpenRobloxVr=ql,window.nextvrOpenBeatSaberVr=Au);var gm={youtube:()=>mn("youtube","YouTube","https://m.youtube.com/"),browser:()=>mn("browser",k("browser"),"https://duckduckgo.com/"),store:()=>Eu(),gallery:()=>mm(),settings:()=>$l(),discord:()=>mn("discord","Discord","https://discord.com/app"),netflix:()=>mn("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>mn("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>mn("twitch","Twitch","https://www.twitch.tv/"),prime:()=>mn("prime","prime video","https://www.primevideo.com/"),whatsapp:()=>mn("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>mn("instagram","Instagram","https://www.instagram.com/"),x:()=>mn("x","X","https://x.com/"),facebook:()=>mn("facebook","Facebook","https://www.facebook.com/"),telegram:()=>mn("telegram","Telegram","https://web.telegram.org/"),spotify:()=>mn("spotify","Spotify","https://open.spotify.com/"),"gorilla-tag":()=>Mo(),"beat-vr":()=>Au(),"roblox-vr":()=>ql(),roblox:()=>ql(),"hyper-vr":()=>Mu("browser","Hyper Dash VR","https://immersiveweb.dev/")},Vl="apps",hu="home",Gl=null,CT=[["apps","Apps"],["horizon","Horizon+"]],LT=[{id:"gorilla-tag",name:"Gorilla Tag",cat:"games",rating:"4.9",reviews:"28 mil",tag:"VR \xB7 Hand Tracking",badge:"DESTAQUE",img:"./icons/gorilla-tag-logo.jpg",bg:"linear-gradient(135deg,#431407,#ea580c)"},{id:"beat-vr",name:"Beat Saber",cat:"games",rating:"4.9",reviews:"45 mil",tag:"Modo VR Imediato",badge:"VR",img:"./beat-saber-logo.jpg",bg:"linear-gradient(135deg,#450a0a,#0284c7)"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"games",rating:"4.8",reviews:"9,4 mil",tag:"A\xE7\xE3o \xB7 Arena VR",badge:"VR",img:"./hyper-dash-logo.jpg",bg:"linear-gradient(135deg,#082f49,#0284c7)"},{id:"roblox-vr",name:"Roblox",cat:"games",rating:"4.8",reviews:"64 mil",tag:"Ambiente Preto \xB7 Hand Tracking",badge:"NOVO",img:"./roblox-logo.jpg",bg:"linear-gradient(135deg,#090d16,#1e293b)"},{id:"tiktok",name:"TikTok",cat:"apps",rating:"4.9",reviews:"52 mil",tag:"V\xEDdeos \xB7 Social",badge:"APP",img:"./tiktok-logo.jpg",bg:"linear-gradient(135deg,#09090b,#18181b)"},{id:"youtube",name:"YouTube VR",cat:"apps",rating:"4.8",reviews:"31 mil",tag:"V\xEDdeo 360\xB0 \xB7 4K",badge:"APP",img:"./icons/youtube.svg",bg:"linear-gradient(135deg,#450a0a,#dc2626)",isSvg:!0},{id:"discord",name:"Discord",cat:"apps",rating:"4.7",reviews:"19 mil",tag:"Comunidade \xB7 Voz",badge:"APP",img:"./icons/discord.svg",bg:"linear-gradient(135deg,#312e81,#4f46e5)",isSvg:!0},{id:"netflix",name:"Netflix",cat:"apps",rating:"4.8",reviews:"22 mil",tag:"Cinema VR",badge:"APP",img:"",bg:"linear-gradient(135deg,#450a0a,#991b1b)",textLogo:"N"}];function PT(){let n=se("div","st st-quest-store"),e=CT.map(([s,r])=>`<button class="st-tab" data-tab="${s}" aria-selected="${Vl===s}" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden">${r}</button>`).join(""),t=[["home","P\xE1gina inicial"],["games","Jogos"],["apps","Apps"],["wishlist","Lista de desejos"]].map(([s,r])=>`<button type="button" class="st-quest-pill ${hu===s&&Vl!=="horizon"?"on":""}" data-qtab="${s}">${r}</button>`).join(""),i=`
    <div class="st-top st-quest-top">
      ${e}
      <div class="st-quest-nav-left">
        <button type="button" class="st-quest-search-btn" data-openlib title="Pesquisar na Loja">${J("search")}</button>
        <div class="st-quest-pills">${t}</div>
      </div>
      <div class="st-quest-nav-right">
        <button type="button" class="st-quest-icon-btn" data-openlib title="Biblioteca">${J("store")}</button>
        <button type="button" class="st-ava" data-ava aria-label="Perfil"><img src="./icons/nextvr-chrome-n.png" alt="Perfil" style="width:100%;height:100%;border-radius:50%;object-fit:cover"></button>
        <button type="button" class="st-x" data-x aria-label="Fechar">${J("x")}</button>
      </div>
    </div>`;if(Vl==="horizon")i+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else{let s=!!w.gorillaInstalled,r=Gl!==null?`<span class="st-quest-card-btn" style="background:rgba(251,146,60,.24);color:#fdba74">Baixando... ${Gl}%</span>`:s?`<div style="display:flex;gap:6px;align-items:center">
             <span data-gorilla-installed="1" style="font-size:10px;font-weight:800;color:#4ade80;padding:3px 8px;border-radius:999px;background:rgba(34,197,94,.16);border:1px solid rgba(74,222,128,.35)">\u2713 Instalado</span>
             <button class="st-btn st-quest-card-btn" data-launch-gorilla style="background:#2563eb;color:#fff">ABRIR</button>
           </div>`:'<button class="st-btn st-quest-card-btn" data-install-gorilla style="background:#2563eb;color:#fff">BAIXAR</button>',o=LT.filter(l=>hu==="games"?l.cat==="games":hu==="apps"?l.cat==="apps":!0).map(l=>{let c=l.id==="gorilla-tag",d=l.textLogo?`<span style="font-size:38px;font-weight:900;color:#ef4444;letter-spacing:-.04em">${l.textLogo}</span>`:l.isSvg?`<img src="${l.img}" alt="${l.name}" style="width:48px;height:48px;object-fit:contain">`:`<img class="${c?"st-gorilla-logo":""}" src="${l.img}" alt="${l.name}" style="width:100%;height:100%;object-fit:cover;display:block">`,u=c?r:`<button type="button" class="st-btn st-quest-card-btn" data-store-launch="${l.id}" style="background:rgba(255,255,255,.12);color:#f8fafc">Abrir</button>`;return`
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
      <p class="st-note" style="font-size:11px;opacity:.75;margin:8px 0 0">Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>`}return n.innerHTML=i,n.addEventListener("click",s=>{let r=o=>s.target.closest(o),a;if(a=r("[data-tab]")){Vl=a.dataset.tab,ms();return}if(a=r("[data-qtab]")){Vl="apps",hu=a.dataset.qtab,ms();return}if(r("[data-x]")){let o=he.find(l=>l.id==="store");o&&ht(o);return}if(r("[data-ava]")){Je("Perfil NextVR");return}if(r("[data-openlib]")){ym();return}if(r("[data-install-gorilla]")){w.gorillaInstalled=1,Ue(),Sa("gorilla-tag",!0),ri(),Gl=35,ms(),setTimeout(()=>{Gl=80,ms()},120),setTimeout(()=>{Gl=null,ms(),ri(),Je("Gorilla Tag baixado! Adicionado \xE0 Biblioteca de Apps.")},260);return}if(r("[data-launch-gorilla]")){Sa("gorilla-tag"),Mo();return}if(a=r("[data-store-launch]")){let o=a.dataset.storeLaunch;Sa(o,!0);let l=gm[o];l&&l();return}}),n}function ms(){var t,i,s;let n=Fn("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(PT()),n.querySelector(".st").scrollTop=e,(s=(i=te).invalidate)==null||s.call(i)}function Eu(){var i,s,r,a;let n=he.find(o=>o.id==="store");if(n)return ms(),Jt(n),(s=(i=te).render)==null||s.call(i,Ae,fe),n;let e=se("div");e.style.cssText="height:100%";let t=Qt({id:"store",title:"Store",node:e});return ms(),(a=(r=te).render)==null||a.call(r,Ae,fe),t}var yu="recent",$i="all",dm="",sm=["all","apps","games","recent"],IT=n=>({all:k("libAll"),apps:k("apps"),games:k("libGames"),recent:k("recents")})[n]||k("libAll");function Sa(n,e){Wl=[n,...Wl.filter(t=>t!==n)].slice(0,40),RT(),e||ri()}function NT(){var s;!pv().length&&((s=window.NativeXR)!=null&&s.xrLibrary)&&vv();let e=[...dp(),...ob.map(r=>({...r,kind:"app"})),...w.gorillaInstalled?[cm]:[]];$i==="games"&&(e=e.filter(r=>r.kind==="xr")),$i==="games"&&w.gorillaInstalled&&(e=[...e,cm]),$i==="apps"&&(e=e.filter(r=>r.kind==="app")),$i==="recent"&&(e=e.filter(r=>Wl.includes(r.id)));let t=dm.trim().toLowerCase();if(t&&(e=e.filter(r=>(r.name+" "+(r.label||"")).toLowerCase().includes(t))),yu==="az")return[...e].sort((r,a)=>r.name.localeCompare(a.name,"pt-BR"));let i=r=>{let a=Wl.indexOf(r.id);return a<0?1e6:a};return[...e].sort((r,a)=>i(r)-i(a))}function DT(n){let e=n.imgUrl?`<img class="logo" src="${n.imgUrl}" alt="" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">`:n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${J(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug&&!n.imgUrl?`${e}<span class="nm fb">${n.label||n.name}</span>`:t,s=n.id==="gorilla-tag"||n.imgUrl?' style="width:100%;height:100%;display:block"':"";return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand"${s}>${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function kT(){var l;let n=NT(),e=se("div","lib"),t=IT($i),i=he.find(c=>c.id==="library"),s=$i==="games"?k("libGamesEmpty"):$i==="recent"?k("libRecentEmpty"):k("appNoResults"),r=(c,d,u)=>`<button class="lib-rail-btn" data-lib-nav="${c}"
    aria-label="${Ce(d)}" title="${Ce(d)}" aria-pressed="${$i===c}">${J(u)}</button>`;e.innerHTML=`<aside class="lib-rail" aria-label="${Ce(k("apps"))}">
      ${r("all",k("libAll"),"appGrid")}
      ${r("games",k("libGames"),"controller")}
      ${r("recent",k("recents"),"timer")}
      <span class="lib-rail-spacer"></span>
      ${r("apps",k("apps"),"phone")}
    </aside>
    <section class="lib-main">
      <div class="lib-head">
        <h2 class="lib-title">${Ce(k("apps"))}</h2>
        <div class="lib-searchbox">${J("search")}
          <input class="lib-search open" data-q aria-label="${Ce(k("searchApps"))}"
            placeholder="${Ce(k("searchApps"))}" value="${Ce(dm)}">
        </div>
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort aria-label="${Ce(k("recents"))}">
          <span>${yu==="az"?"A\u2013Z":Ce(k("recents"))}</span>${J("chevronDown")}
        </button>
        <button class="lib-pill" data-filter aria-label="${Ce(k("libFilter"))}">
          <span>${Ce(k("libFilter"))} \xB7 ${Ce(t)} <i>(${n.length})</i></span>${J("chevronDown")}
        </button>
        <button class="lib-curve" data-lib-curve aria-label="${Ce(k("win360"))}"
          title="${Ce(k("win360"))}" aria-pressed="${!!(i!=null&&i.curve)}">360\xB0</button>
        <button class="lib-close" data-lib-close aria-label="${Ce(k("close"))}" title="${Ce(k("close"))}">${J("x")}</button>
        <button class="lib-repin" data-act="pin" aria-label="${Ce(k("repin"))}" title="${Ce(k("repin"))}">${J("crosshair")}</button>
      </div>
      <div class="lib-scroll">
        <div class="lib-grid">
          ${n.map(c=>c.kind==="xr"?_v(c):c.kind==="android"?np(c.app):DT(c)).join("")}
          ${n.length?"":`<div class="lib-empty">${Ce(s)}</div>`}
        </div>
      </div>
    </section>`;let a=wv();a&&((l=e.querySelector(".lib-scroll"))==null||l.prepend(a));let o=e.querySelector('[data-q]:not([data-q="android"])');return o&&(o.addEventListener("input",()=>{var d;dm=o.value,ri(!0);let c=(d=Fn("library"))==null?void 0:d.querySelector("[data-q]");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),o.addEventListener("focus",()=>pi(!0,o))),e.addEventListener("click",c=>{let d=h=>c.target.closest(h),u;if(d("[data-lib-close]")){ht(he.find(h=>h.id==="library"));return}if(u=d("[data-lib-nav]")){$i=u.dataset.libNav,ri();return}if(d("[data-lib-curve]")){let h=he.find(p=>p.id==="library");h&&(h.setCurve(h.curve>0?0:w.win360K),ri());return}if(d("[data-sort]")){yu=yu==="az"?"recent":"az",ri();return}if(d("[data-filter]")){$i=sm[(sm.indexOf($i)+1)%sm.length],ri();return}if(u=d("[data-android]")){let h=u.dataset.android;$d(h),jd(h);return}if(u=d("[data-xr]")){let h=u.dataset.xr;mv()?bv():ap(h);return}if(u=d("[data-app]")){let h=[...ob,cm].find(g=>g.id===u.dataset.app);if(!h)return;Sa(h.id);let p=gm[h.id];p?p():Je(h.name+": sem endere\xE7o cadastrado");return}}),e}function ri(n){var i,s,r;let e=Fn("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(kT()),e.querySelector(".lib-scroll").scrollTop=t,(r=(s=te).invalidate)==null||r.call(s)}var fu="Todos",rm="",OT=["Todos","Jogos","Ferramentas","Redes Sociais","M\xEDdia","Produtividade"];function UT(n){let e=`${n.label||""} ${n.pkg||""}`.toLowerCase();return n.game||/game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(e)?"Jogos":/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(e)?"Redes Sociais":/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(e)?"M\xEDdia":/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(e)?"Produtividade":"Ferramentas"}function um(n){var d;tp(!1);let e=((d=n.querySelector(".android-app-scroll"))==null?void 0:d.scrollTop)||0;n.innerHTML="",n.classList.add("android-launcher");let t=se("div","android-launcher-head");t.innerHTML=`<div class="android-launcher-brand"><span class="android-robot">${J("android")}</span><div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div><div class="android-launcher-actions"><label class="android-search">${J("search")}<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label><button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${J("refresh")}</button></div>`,t.querySelector(".android-search input").value=rm;let i=lv(),s=se("div","android-categories"),r=OT.map(u=>`<button class="android-category" data-category="${u}" aria-pressed="${fu===u}">${u}</button>`).join("");s.innerHTML=r;let a=se("div","android-results");a.innerHTML='<b>APPS INSTALADOS</b><span class="android-results-count"></span>';let o=se("div","android-app-scroll"),l=se("div","android-app-grid"),c=()=>{let u=rm.trim().toLocaleLowerCase("pt-BR"),h=dv().filter(g=>{let y=fu==="Todos"||UT(g)===fu,f=!u||`${g.label||""} ${g.pkg||""}`.toLocaleLowerCase("pt-BR").includes(u);return y&&f}),p=a.querySelector(".android-results-count");p&&(p.textContent=`${h.length} ${h.length===1?"app":"apps"}`),l.innerHTML=h.length?h.map(g=>np(g)).join(""):`<div class="android-empty">${k("noAndroidApps")}</div>`};c(),o.appendChild(l),n.append(t),i&&n.appendChild(i),n.append(s,a,o),o.scrollTop=e,n.oninput=u=>{u.target.matches(".android-search input")&&(rm=u.target.value,c())},n.onclick=u=>{let h=u.target.closest("[data-category]");if(h){fu=h.dataset.category,s.querySelectorAll("[data-category]").forEach(g=>g.setAttribute("aria-pressed",String(g===h))),c();return}if(u.target.closest(".android-refresh")){tp(!0),c();return}let p=u.target.closest("[data-android]");p&&($d(p.dataset.android),jd(p.dataset.android))}}function wu(){let n=Fn("shizuku");if(n)return um(n),Jt(he.find(t=>t.id==="shizuku"));let e=se("div","android-launcher");return um(e),Qt({id:"shizuku",title:"Apps do Android",node:e})}function ym(){var i,s,r,a;let n=he.find(o=>o.id==="library");if(n)return ri(),Jt(n),(s=(i=te).render)==null||s.call(i,Ae,fe),n;let e=se("div");e.style.cssText="height:100%";let t=Qt({id:"library",title:k("apps"),node:e,w:1040,h:660,chrome:!1,resizable:!1});return ri(),(a=(r=te).render)==null||a.call(r,Ae,fe),t}var FT=[{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#818cf8,#6366f1)",icon:"compass"},{id:"environments",name:"Ambientes",bg:"linear-gradient(145deg,#8b5cf6,#4c1d95)",icon:"vision"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",icon:"settings"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#1db954,#0b3b1e)",slug:"spotify"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#a855f7,#581c87)",slug:"twitch"},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#ffffff,#e2e8f0)",slug:"youtube",lightBg:!0},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b82f6,#1d4ed8)",slug:"facebook"},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",slug:"telegram"},{id:"x",name:"X",bg:"linear-gradient(145deg,#18181b,#050507)",slug:"x"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#6366f1,#4338ca)",slug:"discord"},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#22c55e,#15803d)",slug:"whatsapp"},{id:"shizuku",name:"My apps",bg:"linear-gradient(145deg,#f97316,#ea580c)",icon:"appGrid"}],BT=[{id:"gorilla-tag",name:"Gorilla Tag",bg:"#0d1b12",imgUrl:"./icons/gorilla-tag-logo.jpg",isGame:!0},{id:"roblox-vr",name:"Roblox VR",bg:"#090d16",imgUrl:"./roblox-logo.jpg",icon:"controller",isGame:!0,url:"https://www.roblox.com/"},{id:"beat-vr",name:"Beat Saber Web",bg:"#070814",imgUrl:"./beat-saber-logo.jpg",icon:"controller",isGame:!0,url:"https://moonrider.xyz/?mode=ride&vr=1"},{id:"hyper-vr",name:"Hyper Dash VR",bg:"#0a1426",imgUrl:"./hyper-dash-logo.jpg",icon:"controller",isGame:!0,url:"https://immersiveweb.dev/"},{id:"webxr-games",name:"WebXR Games",bg:"linear-gradient(145deg,#7c3aed,#4c1d95)",icon:"controller",isGame:!0,url:"https://constructarcade.com/"},{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#e50914,#7f1d1d)",slug:"netflix"},{id:"prime",name:"Prime Video",bg:"linear-gradient(145deg,#00a8e1,#0369a1)",slug:"prime"}],Xi="all",vu="recent",hm="",am=!1,Kv='<svg class="ui-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',zT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4"/><path d="M5 19h14"/></svg>',HT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="4 5 20 5 14 12 14 19 10 17 10 12 4 5"/></svg>',VT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M4 12h7M4 17h4M17 7v11m0 0-3-3m3 3 3-3"/></svg>',GT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 14.5c0-3 2-5.5 4.2-5.5 1.8 0 3.3 1.8 4.8 4.2 1.5 2.4 2.6 3.3 4 3.3 1.4 0 2.5-1.2 2.5-3 0-2.5-1.6-4.5-3.6-4.5-1.5 0-2.7 1.1-4.2 3.4-1.5 2.3-2.9 4.1-4.8 4.1-1.7 0-2.9-.8-2.9-2z"/></svg>',WT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1.5"/><rect x="10" y="5" width="5" height="14" rx="1.5"/><rect x="17" y="5" width="4" height="14" rx="1.2"/></svg>';function qT(){var r;let n=FT.map(a=>({kind:"builtin",...a})),e=BT.map(a=>({kind:"builtin",...a})),t=(((r=dp)==null?void 0:r())||[]).map(a=>({kind:"xr",pkg:a.packageName,name:a.label||a.packageName,iconUrl:a.icon||"",isGame:!0})),i;Xi==="worlds"||Xi==="downloads"?i=[...e.filter(a=>a.isGame),...t,...n]:Xi==="apps"?i=[...n,...e.filter(a=>!a.isGame)]:i=[...n,...e,...t];let s=hm.trim().toLowerCase();return s&&(i=i.filter(a=>a.name.toLowerCase().includes(s))),vu==="az"&&(i=[...i].sort((a,o)=>a.name.localeCompare(o.name,"pt-BR"))),i}function XT(n){if(n.kind==="xr"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Ce(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-glyph">${J("controller")}</span><span class="spatial-app-init">${Ce(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-xr="${Ce(n.pkg)}" data-spatial-game="1" title="${Ce(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--game">${i}</span>
      <span class="spatial-app-label">${Ce(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}if(n.kind==="android"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Ce(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-init">${Ce(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-android="${Ce(n.pkg)}" title="${Ce(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--android">${i}</span>
      <span class="spatial-app-label">${Ce(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}let e=n.imgUrl?`<img class="spatial-app-img" src="${Ce(n.imgUrl)}" alt="" draggable="false">`:n.slug?`<img class="spatial-app-svg" src="./icons/${n.slug}.svg" alt="" draggable="false" onerror="this.remove()">`:n.icon?`<span class="spatial-app-glyph">${J(n.icon)}</span>`:n.html||`<span class="spatial-app-init">${Ce(n.name.slice(0,2))}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-builtin="${Ce(n.id)}" ${n.isGame?'data-spatial-game="1"':""} ${n.url?`data-spatial-url="${Ce(n.url)}"`:""} title="${Ce(n.name)}">
    <span class="spatial-app-circle ${n.lightBg?"spatial-app-circle--light":""}" style="background:${n.bg}">${e}</span>
    <span class="spatial-app-label">${Ce(n.name)}</span>
    <i class="spatial-app-tick" aria-hidden="true"></i>
  </button>`}function $T(){let n=qT(),e=cs(),t=Math.round(Math.max(0,Math.min(1,e.batteryLevel??.9))*100),i=e.time&&e.time!=="--:--"?e.time:"9:48",s=w.profileAvatar?`<img src="${Ce(w.profileAvatar)}" alt="" class="spatial-hz-avatar-img" draggable="false" />`:J("user"),r=w.env||"passthrough",a=!!w.mrDim,o=se("div","spatial-launcher-root");o.innerHTML=`
    <header class="spatial-hz-header">
      <div class="spatial-hz-top-status" aria-label="Status e Ambiente MR">
        <span class="spatial-hz-top-bat"><span class="spatial-hz-bat-pill"><i style="width:${t}%"></i></span><strong data-spatial-bat-top>${t}%</strong></span>
        <span class="spatial-hz-top-clock" data-spatial-clock-top>${Ce(i)}</span>
        <span class="spatial-hz-top-wifi">${J("wifi")}</span>
        <button type="button" class="spatial-hz-mrdim-circle ${a?"on":""}" data-spatial-act="mr-dim" title="${a?"Ambiente MR: Escuro (toque para Normal)":"Escurecer Ambiente MR em volta dos apps"}" aria-pressed="${a?"true":"false"}">
          ${J("vision")}
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
        ${J("search")}
        <input type="text" class="spatial-hz-search-input" data-spatial-search placeholder="Search" value="${Ce(hm)}" aria-label="Search Library" />
      </label>
    </header>

    <div class="spatial-launcher-stage">
      <aside class="spatial-hz-rail" aria-label="Library navigation">
        <button type="button" class="spatial-hz-nav-item ${Xi==="all"?"on":""}" data-spatial-nav="all">
          ${Kv}<span>All</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Xi==="apps"?"on":""}" data-spatial-nav="apps">
          ${J("appGrid")}<span>Apps</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Xi==="worlds"?"on":""}" data-spatial-nav="worlds">
          ${J("location")}<span>Worlds</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Xi==="horizon"?"on":""}" data-spatial-nav="horizon">
          ${J("refresh")}<span>Horizon+</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Xi==="downloads"?"on":""}" data-spatial-nav="downloads">
          ${zT}<span>Downloads</span>
        </button>
        <div class="spatial-hz-rail-divider" aria-hidden="true"></div>
        <button type="button" class="spatial-hz-nav-item spatial-hz-nav-item--store" data-spatial-act="store">
          <span class="spatial-hz-store-badge">${J("store")}</span><span>Store</span>
        </button>
      </aside>

      <div class="spatial-honeycomb-wrap">
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--left" data-spatial-scroll="left" aria-label="Rolar para a esquerda" title="Rolar para a esquerda">\u2039</button>
        <div class="spatial-honeycomb" data-spatial-scroll-track role="list">
          ${n.map(XT).join("")}
        </div>
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--right" data-spatial-scroll="right" aria-label="Rolar para a direita" title="Rolar para a direita">\u203A</button>
      </div>

      <aside class="spatial-hz-filters" aria-label="Filters and sorting">
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="filter" title="Filter: Installed">
          ${HT}<span>Filter: Insta...</span>${J("chevronDown")}
        </button>
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="sort" title="Sort">
          ${VT}<span>Sort: ${vu==="az"?"A\u2013Z":"Recen..."}</span>${J("chevronDown")}
        </button>
      </aside>
    </div>

    <footer class="spatial-hz-bottom" aria-label="Horizon bar">
      <div class="spatial-hz-bot-left">
        <button type="button" class="spatial-hz-game-pill" data-spatial-act="store" title="Store">${J("controller")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="env" title="C\xE2mera Traseira (Ambiente Real)">${J("camera")}</button>
      </div>

      <div class="spatial-hz-bot-center">
        <div class="spatial-hz-bot-main">
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="recenter" title="Recentralizar">${GT}</button>
          <button type="button" class="spatial-hz-home-circle" data-spatial-nav="all" title="Library">${Kv}</button>
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="close" title="Alternar para Dock">${WT}</button>
        </div>
        <div class="spatial-hz-bot-status">
          ${J("wifi")}
          <span data-spatial-clock>${Ce(i)}</span>
          <span class="spatial-hz-bat-pill"><i style="width:${t}%"></i></span>
          <span data-spatial-bat>${t}%</span>
        </div>
      </div>

      <div class="spatial-hz-bot-right">
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="library" title="Biblioteca Completa">${J("notification")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="settings" title="Configura\xE7\xF5es">${J("sliders")}</button>
        <button type="button" class="spatial-hz-avatar-btn" data-spatial-act="settings" title="Perfil">${s}</button>
      </div>
    </footer>

    <div class="browser-tab-popup spatial-browser-popup" data-browser-tab-menu="spatial" hidden>
      <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
      <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
    </div>
  `;let l=o.querySelector("[data-spatial-search]");l&&l.addEventListener("input",()=>{hm=l.value,Yi()});let c=o.querySelector('[data-spatial-builtin="browser"]'),d=o.querySelector('[data-browser-tab-menu="spatial"]'),u=null;if(c&&d){c.addEventListener("pointerdown",()=>{clearTimeout(u),u=setTimeout(()=>{var g,y,f,m,x,v;c.dataset.holdConsumed="1",d.hidden=!1,(y=(g=window.NativeXR)==null?void 0:g.click)==null||y.call(g),(m=(f=te).invalidate)==null||m.call(f),(v=(x=te).render)==null||v.call(x,Ae,fe)},2e3)});let p=()=>{clearTimeout(u),u=null};c.addEventListener("pointerup",p),c.addEventListener("pointercancel",p),c.addEventListener("pointerleave",p)}let h=o.querySelector("[data-spatial-scroll-track]");if(h){let p=0,g=0,y=!1;h.addEventListener("pointerdown",f=>{p=f.clientX,g=h.scrollLeft,y=!1}),h.addEventListener("pointermove",f=>{var x,v;if(f.buttons!==1)return;let m=f.clientX-p;Math.abs(m)>6&&(y=!0,h.scrollLeft=g-m,(v=(x=te).invalidate)==null||v.call(x))}),h.addEventListener("wheel",f=>{var m,x;Math.abs(f.deltaY)>Math.abs(f.deltaX)&&(h.scrollLeft+=f.deltaY,f.preventDefault()),(x=(m=te).invalidate)==null||x.call(m)},{passive:!1}),h.addEventListener("scroll",()=>{var f,m;return(m=(f=te).invalidate)==null?void 0:m.call(f)},{passive:!0}),h._wasDragging=()=>y}return o.addEventListener("click",p=>{var T,b,O,S,_;let g=p.target.closest("[data-spatial-scroll]");if(g&&h){p.stopPropagation();let I=g.dataset.spatialScroll==="left"?-1:1;h.scrollLeft=Math.max(0,h.scrollLeft+I*240),(b=(T=te).invalidate)==null||b.call(T),(S=(O=te).render)==null||S.call(O,Ae,fe);return}let y=p.target.closest("[data-browser-opt]");if(y){p.stopPropagation();let I=y.dataset.browserOpt||"new-tab";d&&(d.hidden=!0),sb(I);return}let f=p.target.closest("[data-spatial-xr]");if(f){let I=f.dataset.spatialXr;I&&ap(I);return}let m=p.target.closest("[data-spatial-builtin]");if(m){if(m.dataset.holdConsumed==="1"){m.dataset.holdConsumed="0";return}d&&!d.hidden&&(d.hidden=!0);let I=m.dataset.spatialBuiltin;if(I==="environments"){xu();return}if(I==="shizuku"){wu();return}if(I==="gorilla-tag"){Mo();return}if(I==="beat-vr"){Au();return}if(I==="roblox-vr"||I==="roblox"){ql();return}if(m.dataset.spatialUrl){Mu("browser",m.title||"Navegador",m.dataset.spatialUrl);return}let N=gm[I];N&&N();return}let x=p.target.closest("[data-spatial-android]");if(x){let I=x.dataset.spatialAndroid;$d(I),jd(I);return}let v=p.target.closest("[data-spatial-env]");if(v){let I=v.dataset.spatialEnv||"passthrough";Ai(I),Yi();return}let M=p.target.closest("[data-spatial-nav]");if(M){Xi=M.dataset.spatialNav||"all",Yi();return}let E=(_=p.target.closest("[data-spatial-act]"))==null?void 0:_.dataset.spatialAct;E==="settings"?$l():E==="store"?Eu():E==="library"?ym():E==="recenter"?Bi():E==="sort"?(vu=vu==="az"?"recent":"az",Yi()):E==="filter"?(Xi=Xi==="downloads"?"all":"downloads",Yi()):E==="env"?xu():E==="mr-dim"?(ol(!w.mrDim),Yi(),Je(w.mrDim?"Ambiente MR: Escuro":"Ambiente MR: Normal")):E==="close"&&Ru(!1)}),o}function Yi(){var a,o,l,c,d,u;let n=Fn("spatial-launcher");if(!n)return;let e=n.querySelector(".spatial-honeycomb"),t=(e==null?void 0:e.scrollTop)||0,i=(e==null?void 0:e.scrollLeft)||0,s=((o=(a=n.querySelector(".finger-hover"))==null?void 0:a.dataset)==null?void 0:o.spatialBuiltin)||null;n.innerHTML="",n.appendChild($T());let r=n.querySelector(".spatial-honeycomb");r&&(r.scrollTop=t,r.scrollLeft=i),s&&((c=(l=n.querySelector(`[data-spatial-builtin="${s}"]`))==null?void 0:l.classList)==null||c.add("finger-hover")),(u=(d=te).invalidate)==null||u.call(d)}var fm=!1,pm=!1,Jv=0;function Su(){var e,t,i,s;if(am)return;let n=he.find(r=>r.id==="spatial-launcher");if(!(!w.spatialLauncher||!n)){am=!0;try{let r=he.filter(o=>o.id!=="spatial-launcher"&&o.id!=="fist-menu"&&!o.onboarding&&!o.hidden);if(r.length>1){let o=r[r.length-1];for(let l of r)l!==o&&ht(l)}r.length!==Jv&&(fm=!1,pm=!1,Jv=r.length);let a=fm||r.length>0&&!pm;n.hidden!==a&&(n.setHidden(a),(t=(e=te).invalidate)==null||t.call(e),(s=(i=te).render)==null||s.call(i,Ae,fe))}finally{am=!1}}}Ge("wins",Su);Ge("env",()=>{Fn("spatial-launcher")&&Yi(),Fn("fist-menu")&&Eo()});Ge("mr-dim",()=>{Fn("spatial-launcher")&&Yi(),Fn("fist-menu")&&Eo()});function vm(){var t,i,s,r,a,o,l,c;if(w.spatialLauncher||he.some(d=>d.id==="spatial-launcher")){let d=he.find(h=>h.id==="spatial-launcher");d||(w.spatialLauncher=1,d=Tu());let u=!d.hidden;return fm=u,pm=!u,d.setHidden(u),(i=(t=te).invalidate)==null||i.call(t),(r=(s=te).render)==null||r.call(s,Ae,fe),Je(u?"Spatial App ocultado":"Spatial App exibido"),!u}let n=document.querySelector(".dock"),e=!n||n.hidden||getComputedStyle(n).display==="none";return e?(en(!1),Ht(!0),Je("Dock exibida")):(Ht(!1),en(!0),Je("Dock ocultada")),(o=(a=te).invalidate)==null||o.call(a),(c=(l=te).render)==null||c.call(l,Ae,fe),e}window.nextvrToggleSpatialAndDockFromGesture=vm;function Tu(){var i,s,r,a,o,l,c,d;let n=he.find(u=>u.id==="spatial-launcher");if(n)return Yi(),Su(),(s=(i=te).invalidate)==null||s.call(i),(a=(r=te).render)==null||a.call(r,Ae,fe),n;w.env="passthrough",Fi(!0);let e=se("div","spatial-launcher-host"),t=Qt({id:"spatial-launcher",title:"Spatial App",node:e,w:1040,h:660,onboarding:!0,chrome:!1,resizable:!1});return t.handle.hidden=!0,t.resizeHandle.hidden=!0,Yi(),Su(),(l=(o=te).invalidate)==null||l.call(o),(d=(c=te).render)==null||d.call(c,Ae,fe),t}function YT(){let n=w.env||"passthrough",e=se("div","fist-quick-menu");return e.innerHTML=`
    <div class="fist-menu-head">
      <div class="fist-menu-badge">${J("crosshair")}</div>
      <div>
        <h3 class="fist-menu-title">Menu R\xE1pido</h3>
        <p class="fist-menu-sub">Atalho de soco (2s) \xB7 Escolha uma a\xE7\xE3o</p>
      </div>
    </div>

    <div class="fist-menu-actions">
      <button type="button" class="fist-menu-btn fist-menu-btn--primary" data-fist-act="recenter">
        ${J("move")}
        <div>
          <strong>Recentrar Dock e Vis\xE3o</strong>
          <small>Traga a dock e janelas para a dire\xE7\xE3o do olhar</small>
        </div>
      </button>

      <button type="button" class="fist-menu-btn" data-fist-act="environments">
        ${J("vision")}
        <div>
          <strong>Entrar em Ambiente Virtual</strong>
          <small>Abrir painel completo de ambientes 360\xB0</small>
        </div>
      </button>

      <button type="button" class="fist-menu-btn ${w.mrDim?"fist-menu-btn--primary":""}" data-fist-act="mr-dim">
        ${J("camera")}
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
          ${J("camera")}<span>C\xE2mera Real</span>
        </button>
        <button type="button" class="fist-env-chip ${n==="sunset"?"on":""}" data-fist-env="sunset">
          ${J("vision")}<span>Sunset 360\xB0</span>
        </button>
        <button type="button" class="fist-env-chip ${n==="lagoon"?"on":""}" data-fist-env="lagoon">
          ${J("vision")}<span>Lagoon 360\xB0</span>
        </button>
        <button type="button" class="fist-env-chip ${n==="dark"?"on":""}" data-fist-env="dark">
          ${J("vision")}<span>Escuro 360\xB0</span>
        </button>
      </div>
    </div>

    <div class="fist-menu-footer-row">
      <button type="button" class="fist-menu-sec-btn" data-fist-act="toggle-dock">
        ${J("appGrid")}<span>Mostrar / Ocultar Dock</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="toggle-spatial">
        ${J("maximize")}<span>${w.spatialLauncher?"Modo Dock":"Apps Flutuantes"}</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="settings">
        ${J("settings")}<span>Ajustes</span>
      </button>
    </div>
  `,e.addEventListener("click",t=>{let i=t.target.closest("[data-fist-env]");if(i){let a=i.dataset.fistEnv||"passthrough";Ai(a),Eo(),Je("Ambiente: "+a);return}let s=t.target.closest("[data-fist-act]");if(!s)return;let r=s.dataset.fistAct;r==="recenter"?(w.spatialLauncher||(en(!1),Ht(!0)),Bi(),ht("fist-menu")):r==="environments"?(ht("fist-menu"),xu()):r==="mr-dim"?(ol(!w.mrDim),Eo(),Je(w.mrDim?"Ambiente MR: Escuro":"Ambiente MR: Normal")):r==="toggle-dock"?(vm(),ht("fist-menu")):r==="toggle-spatial"?(ht("fist-menu"),Ru(!w.spatialLauncher)):r==="settings"?(ht("fist-menu"),$l()):r==="close"&&ht("fist-menu")}),e}function Eo(){var e,t;let n=Fn("fist-menu");n&&(n.innerHTML="",n.appendChild(YT()),(t=(e=te).invalidate)==null||t.call(e))}function jT(){var i,s,r,a,o,l,c,d;let n=he.find(u=>u.id==="fist-menu");if(n)return n.setHidden(!1),Eo(),Jt(n),(s=(i=te).invalidate)==null||s.call(i),(a=(r=te).render)==null||a.call(r,Ae,fe),n;let e=se("div","fist-quick-menu-host"),t=Qt({id:"fist-menu",title:"Menu R\xE1pido",node:e,w:520,h:430});return Eo(),(l=(o=te).invalidate)==null||l.call(o),(d=(c=te).render)==null||d.call(c,Ae,fe),t}window.nextvrOpenFistQuickMenu=jT;var Jn=null;function ZT(){let n=document.createElement("div");n.id="left-hand-quick-menu",n.className="lh-quick-menu lh-quick-menu--floating",n.dataset.floatingWindow="1",n.hidden=!1;let e=Math.max(0,Math.min(100,Number(w.mediaVolume??70)||70)),t=Math.max(10,Math.min(100,Number(w.brightness??80)||80)),i=w.mrDim?80:20;return n.innerHTML=`
    <div class="lh-quick-grid">
      <div class="lh-apps-col">
        <button type="button" class="lh-app-tile" data-lh-app="browser" title="Browser">
          <span class="lh-app-icon lh-app-icon--browser">${J("compass")}</span>
        </button>
        <button type="button" class="lh-app-tile" data-lh-app="youtube" title="YouTube">
          <img src="./icons/youtube.svg" alt="YouTube" class="lh-app-img" draggable="false"/>
        </button>
        <button type="button" class="lh-app-tile" data-lh-app="roblox" title="Roblox">
          <img src="./icons/roblox-logo.png" alt="Roblox" class="lh-app-img" draggable="false"/>
        </button>
        <button type="button" class="lh-app-tile" data-lh-app="store" title="Store">
          <span class="lh-app-icon lh-app-icon--store">${J("store")}</span>
        </button>
        <button type="button" class="lh-round-btn lh-home-btn" data-lh-act="home" title="In\xEDcio">
          ${J("home")}
        </button>
      </div>
      <div class="lh-sliders-col">
        <div class="lh-sliders-row">
          <div class="lh-vslider-pill" title="Volume">
            <input type="range" min="0" max="100" value="${e}" class="lh-vslider-input" data-lh-slider="volume" aria-label="Volume" style="--fill:${e}%"/>
            <span class="lh-vslider-ico">${J("volume")}</span>
          </div>
          <div class="lh-vslider-pill" title="Brilho">
            <input type="range" min="10" max="100" value="${t}" class="lh-vslider-input" data-lh-slider="brightness" aria-label="Brilho" style="--fill:${t}%"/>
            <span class="lh-vslider-ico">${J("sun")}</span>
          </div>
          <div class="lh-vslider-pill" title="Escurecimento MR">
            <input type="range" min="0" max="100" value="${i}" class="lh-vslider-input" data-lh-slider="dim" aria-label="Ambiente Escuro" style="--fill:${i}%"/>
            <span class="lh-vslider-ico">${J("vision")}</span>
          </div>
        </div>
        <div class="lh-bottom-actions">
          <button type="button" class="lh-round-btn lh-hands-btn ${w.fingerTouch!==0?"on":""}" data-lh-act="hands" title="Toque Direto">
            ${J("hand")}
          </button>
          <button type="button" class="lh-round-btn lh-close-btn" data-lh-act="close" title="Fechar">
            \u2715
          </button>
        </div>
      </div>
    </div>
  `,n.querySelectorAll("[data-lh-slider]").forEach(s=>{let r=a=>{var c,d,u,h,p;a.stopPropagation();let o=s.dataset.lhSlider,l=Math.max(0,Math.min(100,Number(s.value)||0));s.style.setProperty("--fill",`${l}%`),o==="volume"?(w.mediaVolume=l,Ue(w),(d=(c=window.NativeXR)==null?void 0:c.setMediaVolumePercent)==null||d.call(c,l)):o==="brightness"?(u=window.nextvrSetScreenBrightness)==null||u.call(window,l):o==="dim"&&ol(l>=50),(p=(h=te).invalidate)==null||p.call(h)};s.addEventListener("input",r),s.addEventListener("change",r),s.addEventListener("pointerdown",a=>a.stopPropagation())}),n.querySelectorAll(".lh-vslider-pill").forEach(s=>{s.addEventListener("click",r=>{let a=s.querySelector("[data-lh-slider]");if(!a||r.target===a)return;let o=s.getBoundingClientRect();if(o.height>8&&Number.isFinite(r.clientY)){let l=Math.max(0,Math.min(1,1-(r.clientY-o.top)/o.height)),c=Number(a.min)||0,d=Number(a.max)||100;a.value=String(Math.round(c+l*(d-c))),a.dispatchEvent(new Event("input",{bubbles:!0})),a.dispatchEvent(new Event("change",{bubbles:!0}))}})}),n.addEventListener("click",s=>{var l,c,d,u,h,p,g,y,f,m;let r=s.target.closest("[data-lh-app]");if(r){s.stopPropagation();let x=r.dataset.lhApp;bu(!1),x==="browser"?browserApp():x==="youtube"?mn("youtube"):x==="roblox"?mn("roblox"):x==="store"&&Eu(),(c=(l=te).invalidate)==null||c.call(l),(u=(d=te).render)==null||u.call(d,Ae,fe);return}let a=s.target.closest("[data-lh-act]");if(!a)return;s.stopPropagation();let o=a.dataset.lhAct;o==="close"?bu(!1):o==="home"?(bu(!1),vm()):o==="hands"&&(w.fingerTouch=w.fingerTouch===0?1:0,Ue(w),a.classList.toggle("on",w.fingerTouch!==0),(p=(h=window.NativeXR)==null?void 0:h.setFingerTouch)==null||p.call(h,w.fingerTouch!==0),Je(w.fingerTouch!==0?"Toque Direto: Ativo":"Toque Direto: Desativado")),(y=(g=te).invalidate)==null||y.call(g),(m=(f=te).render)==null||m.call(f,Ae,fe)}),n}function KT(){if(!Jn)return;let n=Math.max(0,Math.min(100,Number(w.mediaVolume??70)||70)),e=Math.max(10,Math.min(100,Number(w.brightness??80)||80)),t=w.mrDim?80:20,i=Jn.querySelector('[data-lh-slider="volume"]');i&&(i.value=String(n),i.style.setProperty("--fill",`${n}%`));let s=Jn.querySelector('[data-lh-slider="brightness"]');s&&(s.value=String(e),s.style.setProperty("--fill",`${e}%`));let r=Jn.querySelector('[data-lh-slider="dim"]');r&&(r.value=String(t),r.style.setProperty("--fill",`${t}%`));let a=Jn.querySelector('[data-lh-act="hands"]');a&&a.classList.toggle("on",w.fingerTouch!==0)}function bu(n=void 0){var s,r,a,o,l,c,d,u;let e=he.find(h=>h.id==="left-quick-menu"),t=!!(e&&!e.hidden&&Jn&&!Jn.hidden);if(!(typeof n=="boolean"?n:!t))return Jn&&(Jn.hidden=!0),e&&ht("left-quick-menu"),(r=(s=te).invalidate)==null||r.call(s),(o=(a=te).render)==null||o.call(a,Ae,fe),!1;if(Jn||(Jn=ZT()),Jn.hidden=!1,KT(),e){let h=Fn("left-quick-menu");h&&!h.contains(Jn)&&(h.innerHTML="",h.appendChild(Jn)),e.setHidden(!1),Jt(e)}else{let h=se("div","lh-quick-menu-host");h.appendChild(Jn),Qt({id:"left-quick-menu",title:"Controle de Brilho e Som",node:h,w:420,h:300,chrome:!1,resizable:!1,free:!0,at:{x:-.22,y:1.46,z:-1.42}})}return(c=(l=te).invalidate)==null||c.call(l),(u=(d=te).render)==null||u.call(d,Ae,fe),!0}window.nextvrToggleLeftHandQuickMenu=bu;function Ru(n){var e,t,i,s;if(w.spatialLauncher=n?1:0,w.spatialLauncher&&(w.env="passthrough",Fi(!0)),Ue(w),w.spatialLauncher){for(let r of[...he])r.id!=="spatial-launcher"&&!r.onboarding&&ht(r);en(!0),Ht(!1),Tu()}else{let r=he.find(a=>a.id==="spatial-launcher");r&&ht(r),en(!1),!Ma&&!ps&&!js&&Ht(!0),(t=(e=te).invalidate)==null||t.call(e),(s=(i=te).render)==null||s.call(i,Ae,fe)}}Ge("spatialLauncher",n=>Ru(n));Ge("device-status",n=>{let e=Fn("spatial-launcher");if(!e)return;let t=e.querySelector("[data-spatial-clock]");t&&(n!=null&&n.time)&&n.time!=="--:--"&&(t.textContent=n.time);let i=e.querySelector("[data-spatial-bat]"),s=e.querySelector(".spatial-hz-bat-pill i");if(typeof(n==null?void 0:n.batteryLevel)=="number"){let r=Math.round(Math.max(0,Math.min(1,n.batteryLevel))*100);i&&(i.textContent=`${r}%`),s&&(s.style.width=`${r}%`)}});var Nr=Object.freeze({compass:J("compass"),store:J("store"),people:J("people"),camera:J("camera"),gear:J("settings"),play:J("play"),shizuku:J("shizuku"),vision:J("vision")});function JT(){Fi(w.env!=="passthrough")}function lb(){let n=Gd("virtual-environment");if(!n)return;let e=w.env!=="passthrough";n.setAttribute("aria-pressed",String(e)),n.title=`${k("envVirtual")} \xB7 ${e?k("on"):k("off")}`}function Cu(){Gy([{kind:"avatar",id:"profile",label:k("profile"),run:iR},{kind:"status",id:"status",label:k("settings"),run:ET},{kind:"tool",id:"virtual-environment",label:k("envVirtual"),svg:Nr.vision,run:JT},{kind:"spacer"},{id:"browser",win:"browser",label:k("browser"),svg:Nr.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>mn("browser",k("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:k("store"),svg:Nr.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:Eu},{id:"discord",win:"discord",label:"Discord",svg:Nr.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>mn("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:k("gallery"),svg:Nr.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:mm},{id:"settings",win:"control-center",label:k("settings"),svg:Nr.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:$l},{id:"youtube",win:"youtube",label:"YouTube",svg:Nr.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>mn("youtube","YouTube","https://m.youtube.com/")},{id:"shizuku",win:"shizuku",label:k("shizuku"),svg:Nr.shizuku,bg:"linear-gradient(145deg,#4fd1c5,#1a8f87)",run:wu},{id:"library",win:"library",launcher:!0,label:k("apps"),run:ym}]),lb()}Ge("env",lb);Ge("lang",Cu);function QT(){let n=document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');if(!n)return;let e=cv(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=se("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}uv();Mv();yv();Ge("appsState",()=>{QT(),cb()});Ge("xr",()=>{cb();let n=Fn("settings");n!=null&&n.querySelector("[data-xr-page]")&&rb(n.querySelector("[data-xr-page]"))});var om=0;function cb(){om||(om=setTimeout(()=>{om=0,Fn("library")&&ri(),Fn("spatial-launcher")&&Yi();let n=Fn("shizuku");n&&um(n)},500))}var eR=document.getElementById("boot"),O2=document.getElementById("bootGo"),js=null;eR.hidden=!0;function db(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function ub(n,e,t=!1){let i=se("div",t?"langwin slim":"langwin"),s=a=>yd(a).label;return(()=>{let a=t?"":`<div class="lq-hero">
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="NextVR">
         <h1 class="lq-welcome">Bem-vindo<br>ao NextVR</h1>
         <p class="lq-tag">Aponte e pin\xE7a<br>para escolher.</p>
       </div>`;i.innerHTML=`${t?`<img class="lq-logo-sm" src="./icons/nextvr-n.png" alt="NextVR"><div class="lq-pickrow"><span class="lq-pick">${s(n)}</span></div>`:""}
      <div class="lq-main">
        ${a}
        <div class="lang-options" role="list">${al.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${k("langSoon")}</i>`}</button>`).join("")}</div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">${t?"Escolha o idioma.":"Aponte com a m\xE3o e fa\xE7a uma pin\xE7a."}</span>
        <button class="lq-go">${k("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>e(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function tR(){var e,t;let n=Qt({id:"language",title:"Next VR",w:390,h:500,onboarding:!0,node:ub(w.lang||db(),nR)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}Ge("handframe",n=>{let e=js==null?void 0:js.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function nR(n){if(!js)return;ta(n),js&&(ht(js),js=null),Ht(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=na(),t=w.handsOn?ns():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>Bi(),280)}var Ma=null,ps=null,Lu=new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1");function hb(){var e;if(w.gorillaInstalled=1,Ue(w),Sa("gorilla-tag",!0),ri(),ms(),Lu&&ye&&typeof((e=window.NativeXR)==null?void 0:e.startVrSession)=="function"){w.autoLaunchGorilla=1,Ue(w),Xl();return}Xl(),Mo()}Ge("gorilla-installed",()=>{w.gorillaInstalled=1,Ue(w),Sa("gorilla-tag",!0),ri(),ms()});function fb(){ps&&ps.remove();let n=document.createElement("div");return n.id="entry-fullscreen",n.appendChild(yp({fullscreen:!0,onStart:Xl,onLaunchGorilla:hb,getStatus:cs})),document.body.appendChild(n),ps=n,n}function pb(){return Qt({id:"entry-menu",title:"NextVR",w:840,h:525,chrome:!1,resizable:!1,onboarding:!0,node:yp({fullscreen:!1,onStart:Xl,onLaunchGorilla:hb,getStatus:cs})})}async function Xl(n=!1){var r,a,o,l,c,d,u,h,p,g,y,f,m;let e=n===!0;w.lang||ta(db()||"pt");let t=!e&&Lu&&ye&&typeof((r=window.NativeXR)==null?void 0:r.startVrSession)=="function";if(ps&&!t&&(ps.remove(),ps=null),Ma?(ht(Ma),Ma=null):ht("entry-menu"),w.spatialLauncher){for(let x of[...he])x.id!=="spatial-launcher"&&!x.onboarding&&ht(x);en(!0),Ht(!1),Tu()}else ht("spatial-launcher"),en(!1),Ht(!0);if(document.getElementById("stat").hidden=!1,ye||(document.getElementById("perm").hidden=!1),(o=(a=window.NativeXR)==null?void 0:a.handVisuals)==null||o.call(a,!!w.handDraw),(c=(l=window.NativeXR)==null?void 0:l.wideCamera)==null||c.call(l,!!w.wideCamera),e||(u=(d=window.NativeXR)==null?void 0:d.startVrSession)==null||u.call(d,JSON.stringify(w)),(p=(h=te).invalidate)==null||p.call(h),(y=(g=te).render)==null||y.call(g,Ae,fe),t){(m=(f=ps==null?void 0:ps.querySelector(".entry-menu-root"))==null?void 0:f.resetToHome)==null||m.call(f);return}let i=na(),s=w.handsOn?ns():Promise.resolve(!1);await Promise.allSettled([i,s]),ye||setTimeout(()=>Bi(),280)}function iR(){var n;return ye&&((n=window.NativeXR)!=null&&n.openEntryMenu)?(window.NativeXR.openEntryMenu(),null):(Ht(!1),document.getElementById("stat").hidden=!0,Lu||!ye?fb():(Ma=pb(),Ma))}var Qv=!1;window.nextvrEnterWorkspace=n=>{var e,t,i,s,r,a,o,l,c,d;if(n)try{let u=typeof n=="string"?JSON.parse(n):n;u.handDraw!==void 0&&(w.handDraw=u.handDraw?1:0),u.showFps!==void 0&&(w.showFps=u.showFps?1:0),u.mediaVolume!==void 0&&(w.mediaVolume=u.mediaVolume),u.brightness!==void 0&&(w.brightness=u.brightness),u.quality!==void 0&&(w.quality=u.quality,Me("quality")),u.wideCamera!==void 0&&(w.wideCamera=u.wideCamera?1:0),u.spatialLauncher!==void 0&&(w.spatialLauncher=u.spatialLauncher?1:0),u.dockSnapSlot!==void 0&&(w.dockSnapSlot=u.dockSnapSlot?1:0),u.fingerTouch!==void 0&&(w.fingerTouch=u.fingerTouch?1:0),u.mrDim!==void 0&&ol(!!u.mrDim),u.sixdof!==void 0&&(w.sixdof=u.sixdof?1:0,w.sixdof||jt.reset(),(t=(e=window.NativeXR)==null?void 0:e.setSixDofEnabled)==null||t.call(e,w.sixdof!==0)),u.gorillaInstalled!==void 0&&(w.gorillaInstalled=u.gorillaInstalled?1:0,w.gorillaInstalled&&(Sa("gorilla-tag",!0),ri(),ms())),u.profileName!==void 0&&(w.profileName=u.profileName),u.profileAvatar!==void 0&&(w.profileAvatar=u.profileAvatar),u.lang&&ta(u.lang),!w.spatialLauncher&&u.entryEnvChosen&&u.env&&u.env!=="passthrough"?Ai(u.env):(w.env="passthrough",Fi(!0));let h=!!u.autoLaunchGorilla;w.autoLaunchGorilla&&(w.autoLaunchGorilla=0),Ue(w),Cu(),(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!!w.handDraw),(a=(r=window.NativeXR)==null?void 0:r.wideCamera)==null||a.call(r,!!w.wideCamera),(l=(o=window.NativeXR)==null?void 0:o.setFingerTouch)==null||l.call(o,w.fingerTouch!==0),h&&setTimeout(()=>Mo(),120)}catch{}else ye&&(Fi(!0),(d=(c=window.NativeXR)==null?void 0:c.setFingerTouch)==null||d.call(c,w.fingerTouch!==0));Xl(!0),Qv||(Qv=!0,setTimeout(()=>Bi(),220))};Ge("profile-updated",()=>Cu());document.getElementById("btnGyro").onclick=()=>na();document.getElementById("btnHand").onclick=()=>bf()?xf():ns();Ge("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});Ge("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Cu();var eb=new URLSearchParams(location.search).get("onboarding")||(location.hash.includes("onboarding=language")?"language":location.hash.includes("onboarding=skip")?"skip":""),pu,tb,mu,nb,gu,ib;Lu?(Ht(!1),document.getElementById("stat").hidden=!0,(tb=(pu=window.NativeXR)==null?void 0:pu.handVisuals)==null||tb.call(pu,!!w.handDraw),fb()):eb==="language"?(Ht(!1),document.getElementById("stat").hidden=!0,js=tR()):eb==="skip"?(w.spatialLauncher?(en(!0),Ht(!1),Tu()):(en(!1),Ht(!0)),ye&&((nb=(mu=window.NativeXR)==null?void 0:mu.wideCamera)==null||nb.call(mu,!!w.wideCamera),na(),w.handsOn&&ns()),document.getElementById("perm").hidden=!1,setTimeout(()=>Bi(),280)):(Ht(!1),document.getElementById("stat").hidden=!0,ye&&((ib=(gu=window.NativeXR)==null?void 0:gu.handVisuals)==null||ib.call(gu,!!w.handDraw),na(),w.handsOn&&ns()),Ma=pb());ye&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=te).invalidate)==null||e.call(n),na(),w.handsOn&&ns()},window.nextvrSuspend=()=>{xf()},Ge("hands",()=>{document.getElementById("perm").hidden=!0}));Ge("game:settings",()=>$l());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
