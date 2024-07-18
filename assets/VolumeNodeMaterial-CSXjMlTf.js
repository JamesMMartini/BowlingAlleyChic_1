(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uc="166",Yp=0,tu=1,$p=2,Hh=1,Kp=2,pi=3,Vi=0,cn=1,gi=2,yi=0,as=1,nu=2,iu=3,su=4,Zp=5,ss=100,jp=101,Jp=102,Qp=103,em=104,tm=200,nm=201,im=202,sm=203,hl=204,dl=205,rm=206,om=207,am=208,lm=209,cm=210,um=211,hm=212,dm=213,fm=214,pm=0,mm=1,gm=2,wo=3,_m=4,vm=5,xm=6,Mm=7,ko=0,ym=1,Sm=2,En=0,Gh=1,kh=2,Wh=3,Xh=4,Tm=5,qh=6,Yh=7,$h=300,Ys=301,$s=302,fl=303,pl=304,Wo=306,ml=1e3,os=1001,gl=1002,Jt=1003,Em=1004,Vr=1005,Bn=1006,_a=1007,Bi=1008,Ti=1009,Kh=1010,Zh=1011,Tr=1012,Xo=1013,Hi=1014,ni=1015,hs=1016,hc=1017,dc=1018,Ks=1020,jh=35902,Jh=1021,Qh=1022,Vn=1023,ed=1024,td=1025,zs=1026,Zs=1027,nd=1028,fc=1029,id=1030,pc=1031,mc=1033,go=33776,_o=33777,vo=33778,xo=33779,_l=35840,vl=35841,xl=35842,Ml=35843,yl=36196,Sl=37492,Tl=37496,El=37808,Nl=37809,Al=37810,wl=37811,bl=37812,Rl=37813,Cl=37814,Ll=37815,Pl=37816,Il=37817,Dl=37818,Ul=37819,Ol=37820,Fl=37821,Mo=36492,Bl=36494,zl=36495,sd=36283,Vl=36284,Hl=36285,Gl=36286,Nm=3200,Am=3201,Ei=0,rd=1,Oi="",Fn="srgb",Yn="srgb-linear",gc="display-p3",qo="display-p3-linear",bo="linear",vt="srgb",Ro="rec709",Co="p3",_s=7680,ru=519,wm=512,od=513,bm=514,ad=515,Rm=516,Cm=517,Lm=518,Pm=519,Lo=35044,_r=35048,ou="300 es",Hn=2e3,js=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const xr=Math.PI/180,Js=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function _c(i,e){return(i%e+e)%e}function Im(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dm(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function Um(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function Om(i,e=1){return e-Math.abs(_c(i,e*2)-e)}function Fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vm(i,e){return i+Math.random()*(e-i)}function Hm(i){return i*(.5-Math.random())}function Gm(i){i!==void 0&&(au=i);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function km(i){return i*xr}function Wm(i){return i*Js}function Xm(i){return(i&i-1)===0&&i!==0}function qm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ym(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $m(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ld={DEG2RAD:xr,RAD2DEG:Js,generateUUID:Si,clamp:Zt,euclideanModulo:_c,mapLinear:Im,inverseLerp:Dm,lerp:Mr,damp:Um,pingpong:Om,smoothstep:Fm,smootherstep:Bm,randInt:zm,randFloat:Vm,randFloatSpread:Hm,seededRandom:Gm,degToRad:km,radToDeg:Wm,isPowerOfTwo:Xm,ceilPowerOfTwo:qm,floorPowerOfTwo:Ym,setQuaternionFromProperEuler:$m,normalize:ht,denormalize:zn};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],T=s[1],x=s[4],E=s[7],F=s[2],A=s[5],w=s[8];return r[0]=o*_+a*T+l*F,r[3]=o*m+a*x+l*A,r[6]=o*f+a*E+l*w,r[1]=c*_+u*T+d*F,r[4]=c*m+u*x+d*A,r[7]=c*f+u*E+d*w,r[2]=h*_+p*T+g*F,r[5]=h*m+p*x+g*A,r[8]=h*f+p*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*d+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Xe;function cd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Km(){const i=Er("canvas");return i.style.display="block",i}const lu={};function vc(i){i in lu||(lu[i]=!0,console.warn(i))}function Zm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const cu=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uu=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[Yn]:{transfer:bo,primaries:Ro,toReference:i=>i,fromReference:i=>i},[Fn]:{transfer:vt,primaries:Ro,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qo]:{transfer:bo,primaries:Co,toReference:i=>i.applyMatrix3(uu),fromReference:i=>i.applyMatrix3(cu)},[gc]:{transfer:vt,primaries:Co,toReference:i=>i.convertSRGBToLinear().applyMatrix3(uu),fromReference:i=>i.applyMatrix3(cu).convertLinearToSRGB()}},jm=new Set([Yn,qo]),dt={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Hr[e].toReference,s=Hr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hr[i].primaries},getTransfer:function(i){return i===Oi?bo:Hr[i].transfer}};function Vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vs;class Jm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=Er("canvas")),vs.width=e.width,vs.height=e.height;const n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vs(t[n]/255)*255):t[n]=Vs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qm=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ma(s[o].image)):r.push(Ma(s[o]))}else r=Ma(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eg=0;class en extends Xi{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=os,s=os,r=Bn,o=Bi,a=Vn,l=Ti,c=en.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Si(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ml:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ml:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=$h;en.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(p+1)/2,F=(f+1)/2,A=(u+h)/4,w=(d+_)/4,D=(g+m)/4;return x>E&&x>F?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=w/n):E>F?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=D/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=w/r,s=D/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ni extends Xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ud(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Ni{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xc extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tg extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*_,T=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const F=Math.sqrt(x),A=Math.atan2(F,f*T);m=Math.sin(m*A)/F,a=Math.sin(a*A)/F}const E=a*T;if(l=l*m+h*E,c=c*m+p*E,u=u*m+g*E,d=d*m+_*E,m===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=F,c*=F,u*=F,d*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new U,hu=new Cr;class Lr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),kr.subVectors(this.max,ar),xs.subVectors(e.a,ar),Ms.subVectors(e.b,ar),ys.subVectors(e.c,ar),Ri.subVectors(Ms,xs),Ci.subVectors(ys,Ms),$i.subVectors(xs,ys);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-$i.z,$i.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,$i.z,0,-$i.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-$i.y,$i.x,0];return!Sa(t,xs,Ms,ys,kr)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,xs,Ms,ys,kr))?!1:(Wr.crossVectors(Ri,Ci),t=[Wr.x,Wr.y,Wr.z],Sa(t,xs,Ms,ys,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new U,new U,new U,new U,new U,new U,new U,new U],In=new U,Gr=new Lr,xs=new U,Ms=new U,ys=new U,Ri=new U,Ci=new U,$i=new U,ar=new U,kr=new U,Wr=new U,Ki=new U;function Sa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ng=new Lr,lr=new U,Ta=new U;class Mc{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ng.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(Ta)),this.expandByPoint(lr.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new U,Ea=new U,Xr=new U,Li=new U,Na=new U,qr=new U,Aa=new U;class ig{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ea.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Ea);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xr),a=Li.dot(this.direction),l=-Li.dot(Xr),c=Li.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ea).addScaledVector(Xr,h),p}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,s,r){Na.subVectors(t,e),qr.subVectors(n,e),Aa.crossVectors(Na,qr);let o=this.direction.dot(Aa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(qr.crossVectors(Li,qr));if(l<0)return null;const c=a*this.direction.dot(Na.cross(Li));if(c<0||l+c>o)return null;const u=-a*Li.dot(Aa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,s,r,o,a,l,c,u,d,h,p,g,_,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sg,e,rg)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Pi.crossVectors(n,vn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Pi.crossVectors(n,vn)),Pi.normalize(),Yr.crossVectors(vn,Pi),s[0]=Pi.x,s[4]=Yr.x,s[8]=vn.x,s[1]=Pi.y,s[5]=Yr.y,s[9]=vn.y,s[2]=Pi.z,s[6]=Yr.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],x=n[7],E=n[11],F=n[15],A=s[0],w=s[4],D=s[8],S=s[12],y=s[1],R=s[5],Y=s[9],k=s[13],Z=s[2],ne=s[6],$=s[10],oe=s[14],q=s[3],ye=s[7],Ae=s[11],be=s[15];return r[0]=o*A+a*y+l*Z+c*q,r[4]=o*w+a*R+l*ne+c*ye,r[8]=o*D+a*Y+l*$+c*Ae,r[12]=o*S+a*k+l*oe+c*be,r[1]=u*A+d*y+h*Z+p*q,r[5]=u*w+d*R+h*ne+p*ye,r[9]=u*D+d*Y+h*$+p*Ae,r[13]=u*S+d*k+h*oe+p*be,r[2]=g*A+_*y+m*Z+f*q,r[6]=g*w+_*R+m*ne+f*ye,r[10]=g*D+_*Y+m*$+f*Ae,r[14]=g*S+_*k+m*oe+f*be,r[3]=T*A+x*y+E*Z+F*q,r[7]=T*w+x*R+E*ne+F*ye,r[11]=T*D+x*Y+E*$+F*Ae,r[15]=T*S+x*k+E*oe+F*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*h+n*c*h+s*a*p-n*l*p)+_*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*d-t*a*p-r*o*d+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-t*l*d+t*a*h+s*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=d*m*c-_*h*c+_*l*p-a*m*p-d*l*f+a*h*f,x=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,E=u*_*c-g*d*c+g*a*p-o*_*p-u*a*f+o*d*f,F=g*d*l-u*_*l-g*a*h+o*_*h+u*a*m-o*d*m,A=t*T+n*x+s*E+r*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=T*w,e[1]=(_*h*r-d*m*r-_*s*p+n*m*p+d*s*f-n*h*f)*w,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*w,e[3]=(d*l*r-a*h*r-d*s*c+n*h*c+a*s*p-n*l*p)*w,e[4]=x*w,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*f+t*h*f)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*w,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*w,e[8]=E*w,e[9]=(g*d*r-u*_*r-g*n*p+t*_*p+u*n*f-t*d*f)*w,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*w,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*p-t*a*p)*w,e[12]=F*w,e[13]=(u*_*s-g*d*s+g*n*h-t*_*h-u*n*m+t*d*m)*w,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*w,e[15]=(o*d*s-u*a*s+u*n*l-t*d*l-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,g=r*d,_=o*u,m=o*d,f=a*d,T=l*c,x=l*u,E=l*d,F=n.x,A=n.y,w=n.z;return s[0]=(1-(_+f))*F,s[1]=(p+E)*F,s[2]=(g-x)*F,s[3]=0,s[4]=(p-E)*A,s[5]=(1-(h+f))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+x)*w,s[9]=(m-T)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);const c=1/r,u=1/o,d=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Hn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let p,g;if(a===Hn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===js)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Hn){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(o-r),h=(t+e)*c,p=(n+s)*u;let g,_;if(a===Hn)g=(o+r)*d,_=-2*d;else if(a===js)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new U,Dn=new _t,sg=new U(0,0,0),rg=new U(1,1,1),Pi=new U,Yr=new U,vn=new U,du=new _t,fu=new Cr;class Ln{constructor(e=0,t=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let og=0;const pu=new U,Ts=new Cr,hi=new _t,$r=new U,cr=new U,ag=new U,lg=new Cr,mu=new U(1,0,0),gu=new U(0,1,0),_u=new U(0,0,1),vu={type:"added"},cg={type:"removed"},Es={type:"childadded",child:null},wa={type:"childremoved",child:null};class Ft extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new U,t=new Ln,n=new Cr,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Xe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(cr,$r,this.up):hi.lookAt($r,cr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(hi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cg),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new U(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new U,di=new U,ba=new U,fi=new U,Ns=new U,As=new U,xu=new U,Ra=new U,Ca=new U,La=new U;class ti{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),di.subVectors(n,t),ba.subVectors(e,t);const o=Un.dot(Un),a=Un.dot(di),l=Un.dot(ba),c=di.dot(di),u=di.dot(ba),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),di.subVectors(e,t),Un.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Un.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ns.subVectors(s,n),As.subVectors(r,n),Ra.subVectors(e,n);const l=Ns.dot(Ra),c=As.dot(Ra);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,s);const u=Ns.dot(Ca),d=As.dot(Ca);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ns,o);La.subVectors(e,r);const p=Ns.dot(La),g=As.dot(La);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(As,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return xu.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(xu,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(n).addScaledVector(Ns,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Pa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=_c(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Pa(o,r,e+1/3),this.g=Pa(o,r,e),this.b=Pa(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const n=dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return dt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Zt(Kt.r*255,0,255))*65536+Math.round(Zt(Kt.g*255,0,255))*256+Math.round(Zt(Kt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Fn){dt.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,s=Kt.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Kr);const n=Mr(Ii.h,Kr.h,t),s=Mr(Ii.s,Kr.s,t),r=Mr(Ii.l,Kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Le;Le.NAMES=dd;let ug=0;class tn extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=as,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=dl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class yc extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new U,Zr=new we;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return vc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),e}}class fd extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pd extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wn extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hg=0;const wn=new _t,Ia=new Ft,ws=new U,xn=new Lr,ur=new Lr,Vt=new U;class wi extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cd(e)?pd:fd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(xn.min,ur.min),xn.expandByPoint(Vt),Vt.addVectors(xn.max,ur.max),xn.expandByPoint(Vt)):(xn.expandByPoint(ur.min),xn.expandByPoint(ur.max))}xn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Vt.add(ws)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new U,l[D]=new U;const c=new U,u=new U,d=new U,h=new we,p=new we,g=new we,_=new U,m=new U;function f(D,S,y){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[D].add(_),a[S].add(_),a[y].add(_),l[D].add(m),l[S].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,S=T.length;D<S;++D){const y=T[D],R=y.start,Y=y.count;for(let k=R,Z=R+Y;k<Z;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new U,E=new U,F=new U,A=new U;function w(D){F.fromBufferAttribute(s,D),A.copy(F);const S=a[D];x.copy(S),x.sub(F.multiplyScalar(F.dot(S))).normalize(),E.crossVectors(A,S);const R=E.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,R)}for(let D=0,S=T.length;D<S;++D){const y=T[D],R=y.start,Y=y.count;for(let k=R,Z=R+Y;k<Z;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Rn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mu=new _t,Zi=new ig,jr=new Mc,yu=new U,bs=new U,Rs=new U,Cs=new U,Da=new U,Jr=new U,Qr=new we,eo=new we,to=new we,Su=new U,Tu=new U,Eu=new U,no=new U,io=new U;class Gn extends Ft{constructor(e=new wi,t=new yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Da.fromBufferAttribute(d,e),o?Jr.addScaledVector(Da,u):Jr.addScaledVector(Da.sub(t),u))}t.add(Jr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(jr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(jr,yu)===null||Zi.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(Mu.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,F=x;E<F;E+=3){const A=a.getX(E),w=a.getX(E+1),D=a.getX(E+2);s=so(this,f,e,n,c,u,d,A,w,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);s=so(this,o,e,n,c,u,d,T,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,F=x;E<F;E+=3){const A=E,w=E+1,D=E+2;s=so(this,f,e,n,c,u,d,A,w,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,x=m+1,E=m+2;s=so(this,o,e,n,c,u,d,T,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function dg(i,e,t,n,s,r,o,a){let l;if(e.side===cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Vi,a),l===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:i}}function so(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,bs),i.getVertexPosition(l,Rs),i.getVertexPosition(c,Cs);const u=dg(i,e,t,n,bs,Rs,Cs,no);if(u){s&&(Qr.fromBufferAttribute(s,a),eo.fromBufferAttribute(s,l),to.fromBufferAttribute(s,c),u.uv=ti.getInterpolation(no,bs,Rs,Cs,Qr,eo,to,new we)),r&&(Qr.fromBufferAttribute(r,a),eo.fromBufferAttribute(r,l),to.fromBufferAttribute(r,c),u.uv1=ti.getInterpolation(no,bs,Rs,Cs,Qr,eo,to,new we)),o&&(Su.fromBufferAttribute(o,a),Tu.fromBufferAttribute(o,l),Eu.fromBufferAttribute(o,c),u.normal=ti.getInterpolation(no,bs,Rs,Cs,Su,Tu,Eu,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};ti.getNormal(bs,Rs,Cs,d.normal),u.face=d}return u}class Pr extends wi{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(d,2));function g(_,m,f,T,x,E,F,A,w,D,S){const y=E/w,R=F/D,Y=E/2,k=F/2,Z=A/2,ne=w+1,$=D+1;let oe=0,q=0;const ye=new U;for(let Ae=0;Ae<$;Ae++){const be=Ae*R-k;for(let je=0;je<ne;je++){const pt=je*y-Y;ye[_]=pt*T,ye[m]=be*x,ye[f]=Z,c.push(ye.x,ye.y,ye.z),ye[_]=0,ye[m]=0,ye[f]=A>0?1:-1,u.push(ye.x,ye.y,ye.z),d.push(je/w),d.push(1-Ae/D),oe+=1}}for(let Ae=0;Ae<D;Ae++)for(let be=0;be<w;be++){const je=h+be+ne*Ae,pt=h+be+ne*(Ae+1),K=h+(be+1)+ne*(Ae+1),ce=h+(be+1)+ne*Ae;l.push(je,pt,ce),l.push(pt,K,ce),q+=6}a.addGroup(p,q,S),p+=q,h+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){const e={};for(let t=0;t<i.length;t++){const n=Qs(i[t]);for(const s in n)e[s]=n[s]}return e}function fg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function md(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const gd={clone:Qs,merge:on};var pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _d extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new U,Nu=new we,Au=new we;class Sn extends _d{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Nu,Au),t.subVectors(Au,Nu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Ps=1;class gg extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Ls,Ps,e,t);s.layers=this.layers,this.add(s);const r=new Sn(Ls,Ps,e,t);r.layers=this.layers,this.add(r);const o=new Sn(Ls,Ps,e,t);o.layers=this.layers,this.add(o);const a=new Sn(Ls,Ps,e,t);a.layers=this.layers,this.add(a);const l=new Sn(Ls,Ps,e,t);l.layers=this.layers,this.add(l);const c=new Sn(Ls,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vd extends en{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _g extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pr(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:yi});r.uniforms.tEquirect.value=t;const o=new Gn(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Bn),new gg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ua=new U,vg=new U,xg=new Xe;class Ui{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ua.subVectors(n,t).cross(vg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xg.getNormalMatrix(e),s=this.coplanarPoint(Ua).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Mc,ro=new U;class Sc{constructor(e=new Ui,t=new Ui,n=new Ui,s=new Ui,r=new Ui,o=new Ui){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],T=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-r,h-c,m-p,E-f).normalize(),n[1].setComponents(l+r,h+c,m+p,E+f).normalize(),n[2].setComponents(l+o,h+u,m+g,E+T).normalize(),n[3].setComponents(l-o,h-u,m-g,E-T).normalize(),n[4].setComponents(l-a,h-d,m-_,E-x).normalize(),t===Hn)n[5].setComponents(l+a,h+d,m+_,E+x).normalize();else if(t===js)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mg(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,a),d.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Yo extends wi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const T=f*h-o;for(let x=0;x<c;x++){const E=x*d-r;g.push(E,-T,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const x=T+c*f,E=T+c*(f+1),F=T+1+c*(f+1),A=T+1+c*f;p.push(x,E,A),p.push(E,F,A)}this.setIndex(p),this.setAttribute("position",new Wn(g,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sg=`#ifdef USE_ALPHAHASH
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
#endif`,Tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ug=`#ifdef USE_BUMPMAP
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
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wg=`#define PI 3.141592653589793
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
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qg=`vec3 transformedNormal = objectNormal;
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
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`
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
}`,Qg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l_=`#ifdef USE_GRADIENTMAP
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
}`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d_=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,f_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v_=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,x_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,M_=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C_=`#if defined( USE_POINTS_UV )
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
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k_=`#ifdef USE_NORMALMAP
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
#endif`,W_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,w0=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,b0=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,R0=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,U0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,O0=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,F0=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,B0=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,z0=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,V0=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,H0=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G0=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,k0=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,W0=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,X0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,q0=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Y0=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$0=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,K0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,j0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ye={alphahash_fragment:yg,alphahash_pars_fragment:Sg,alphamap_fragment:Tg,alphamap_pars_fragment:Eg,alphatest_fragment:Ng,alphatest_pars_fragment:Ag,aomap_fragment:wg,aomap_pars_fragment:bg,batching_pars_vertex:Rg,batching_vertex:Cg,begin_vertex:Lg,beginnormal_vertex:Pg,bsdfs:Ig,iridescence_fragment:Dg,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Og,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:Bg,clipping_planes_vertex:zg,color_fragment:Vg,color_pars_fragment:Hg,color_pars_vertex:Gg,color_vertex:kg,common:Wg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Yg,displacementmap_vertex:$g,emissivemap_fragment:Kg,emissivemap_pars_fragment:Zg,colorspace_fragment:jg,colorspace_pars_fragment:Jg,envmap_fragment:Qg,envmap_common_pars_fragment:e_,envmap_pars_fragment:t_,envmap_pars_vertex:n_,envmap_physical_pars_fragment:f_,envmap_vertex:i_,fog_vertex:s_,fog_pars_vertex:r_,fog_fragment:o_,fog_pars_fragment:a_,gradientmap_pars_fragment:l_,lightmap_pars_fragment:c_,lights_lambert_fragment:u_,lights_lambert_pars_fragment:h_,lights_pars_begin:d_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:__,lights_physical_fragment:v_,lights_physical_pars_fragment:x_,lights_fragment_begin:M_,lights_fragment_maps:y_,lights_fragment_end:S_,logdepthbuf_fragment:T_,logdepthbuf_pars_fragment:E_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:A_,map_fragment:w_,map_pars_fragment:b_,map_particle_fragment:R_,map_particle_pars_fragment:C_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:P_,morphinstance_vertex:I_,morphcolor_vertex:D_,morphnormal_vertex:U_,morphtarget_pars_vertex:O_,morphtarget_vertex:F_,normal_fragment_begin:B_,normal_fragment_maps:z_,normal_pars_fragment:V_,normal_pars_vertex:H_,normal_vertex:G_,normalmap_pars_fragment:k_,clearcoat_normal_fragment_begin:W_,clearcoat_normal_fragment_maps:X_,clearcoat_pars_fragment:q_,iridescence_pars_fragment:Y_,opaque_fragment:$_,packing:K_,premultiplied_alpha_fragment:Z_,project_vertex:j_,dithering_fragment:J_,dithering_pars_fragment:Q_,roughnessmap_fragment:e0,roughnessmap_pars_fragment:t0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:o0,skinning_pars_vertex:a0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:u0,specularmap_pars_fragment:h0,tonemapping_fragment:d0,tonemapping_pars_fragment:f0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:_0,uv_vertex:v0,worldpos_vertex:x0,background_vert:M0,background_frag:y0,backgroundCube_vert:S0,backgroundCube_frag:T0,cube_vert:E0,cube_frag:N0,depth_vert:A0,depth_frag:w0,distanceRGBA_vert:b0,distanceRGBA_frag:R0,equirect_vert:C0,equirect_frag:L0,linedashed_vert:P0,linedashed_frag:I0,meshbasic_vert:D0,meshbasic_frag:U0,meshlambert_vert:O0,meshlambert_frag:F0,meshmatcap_vert:B0,meshmatcap_frag:z0,meshnormal_vert:V0,meshnormal_frag:H0,meshphong_vert:G0,meshphong_frag:k0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:q0,meshtoon_frag:Y0,points_vert:$0,points_frag:K0,shadow_vert:Z0,shadow_frag:j0,sprite_vert:J0,sprite_frag:Q0},pe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Zn={basic:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:on([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:on([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:on([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:on([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:on([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:on([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:on([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:on([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:on([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:on([pe.lights,pe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Zn.physical={uniforms:on([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const oo={r:0,b:0,g:0},Ji=new Ln,ev=new _t;function tv(i,e,t,n,s,r,o){const a=new Le(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function g(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function _(T){let x=!1;const E=g(T);E===null?f(a,l):E&&E.isColor&&(f(E,1),x=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===Wo)?(u===void 0&&(u=new Gn(new Pr(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Qs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ji.copy(x.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(Ji)),u.material.toneMapped=dt.getTransfer(E.colorSpace)!==vt,(d!==E||h!==E.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Gn(new Yo(2,2),new si({name:"BackgroundMaterial",uniforms:Qs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(E.colorSpace)!==vt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,x){T.getRGB(oo,md(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:_,addToRenderList:m}}function nv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(y,R,Y,k,Z){let ne=!1;const $=d(k,Y,R);r!==$&&(r=$,c(r.object)),ne=p(y,k,Y,Z),ne&&g(y,k,Y,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,E(y,R,Y,k),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,R,Y){const k=Y.wireframe===!0;let Z=n[y.id];Z===void 0&&(Z={},n[y.id]=Z);let ne=Z[R.id];ne===void 0&&(ne={},Z[R.id]=ne);let $=ne[k];return $===void 0&&($=h(l()),ne[k]=$),$}function h(y){const R=[],Y=[],k=[];for(let Z=0;Z<t;Z++)R[Z]=0,Y[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:Y,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,R,Y,k){const Z=r.attributes,ne=R.attributes;let $=0;const oe=Y.getAttributes();for(const q in oe)if(oe[q].location>=0){const Ae=Z[q];let be=ne[q];if(be===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(be=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(be=y.instanceColor)),Ae===void 0||Ae.attribute!==be||be&&Ae.data!==be.data)return!0;$++}return r.attributesNum!==$||r.index!==k}function g(y,R,Y,k){const Z={},ne=R.attributes;let $=0;const oe=Y.getAttributes();for(const q in oe)if(oe[q].location>=0){let Ae=ne[q];Ae===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor));const be={};be.attribute=Ae,Ae&&Ae.data&&(be.data=Ae.data),Z[q]=be,$++}r.attributes=Z,r.attributesNum=$,r.index=k}function _(){const y=r.newAttributes;for(let R=0,Y=y.length;R<Y;R++)y[R]=0}function m(y){f(y,0)}function f(y,R){const Y=r.newAttributes,k=r.enabledAttributes,Z=r.attributeDivisors;Y[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),Z[y]!==R&&(i.vertexAttribDivisor(y,R),Z[y]=R)}function T(){const y=r.newAttributes,R=r.enabledAttributes;for(let Y=0,k=R.length;Y<k;Y++)R[Y]!==y[Y]&&(i.disableVertexAttribArray(Y),R[Y]=0)}function x(y,R,Y,k,Z,ne,$){$===!0?i.vertexAttribIPointer(y,R,Y,Z,ne):i.vertexAttribPointer(y,R,Y,k,Z,ne)}function E(y,R,Y,k){_();const Z=k.attributes,ne=Y.getAttributes(),$=R.defaultAttributeValues;for(const oe in ne){const q=ne[oe];if(q.location>=0){let ye=Z[oe];if(ye===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),ye!==void 0){const Ae=ye.normalized,be=ye.itemSize,je=e.get(ye);if(je===void 0)continue;const pt=je.buffer,K=je.type,ce=je.bytesPerElement,Te=K===i.INT||K===i.UNSIGNED_INT||ye.gpuType===Xo;if(ye.isInterleavedBufferAttribute){const xe=ye.data,ke=xe.stride,$e=ye.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<q.locationSize;Ze++)f(q.location+Ze,xe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<q.locationSize;Ze++)m(q.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Ze=0;Ze<q.locationSize;Ze++)x(q.location+Ze,be/q.locationSize,K,Ae,ke*ce,($e+be/q.locationSize*Ze)*ce,Te)}else{if(ye.isInstancedBufferAttribute){for(let xe=0;xe<q.locationSize;xe++)f(q.location+xe,ye.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let xe=0;xe<q.locationSize;xe++)m(q.location+xe);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let xe=0;xe<q.locationSize;xe++)x(q.location+xe,be/q.locationSize,K,Ae,be*ce,be/q.locationSize*xe*ce,Te)}}else if($!==void 0){const Ae=$[oe];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(q.location,Ae);break;case 3:i.vertexAttrib3fv(q.location,Ae);break;case 4:i.vertexAttrib4fv(q.location,Ae);break;default:i.vertexAttrib1fv(q.location,Ae)}}}}T()}function F(){D();for(const y in n){const R=n[y];for(const Y in R){const k=R[Y];for(const Z in k)u(k[Z].object),delete k[Z];delete R[Y]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const Y in R){const k=R[Y];for(const Z in k)u(k[Z].object),delete k[Z];delete R[Y]}delete n[y.id]}function w(y){for(const R in n){const Y=n[R];if(Y[y.id]===void 0)continue;const k=Y[y.id];for(const Z in k)u(k[Z].object),delete k[Z];delete Y[y.id]}}function D(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function iv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,n,h[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ti&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ni&&!w)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:E,maxSamples:F}}function rv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ui,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:n,x=T*4;let E=f.clippingState||null;l.value=E,E=u(g,h,x,p);for(let F=0;F!==x;++F)E[F]=t[F];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,E=p;x!==_;++x,E+=4)o.copy(d[x]).applyMatrix4(T,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ov(i){let e=new WeakMap;function t(o,a){return a===fl?o.mapping=Ys:a===pl&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fl||a===pl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _g(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class $o extends _d{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ds=4,wu=[.125,.215,.35,.446,.526,.582],rs=20,Oa=new $o,bu=new Le;let Fa=null,Ba=0,za=0,Va=!1;const ns=(1+Math.sqrt(5))/2,Is=1/ns,Ru=[new U(-ns,Is,0),new U(ns,Is,0),new U(-Is,0,ns),new U(Is,0,ns),new U(0,ns,-Is),new U(0,ns,Is),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,Ba,za),this._renderer.xr.enabled=Va,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:hs,format:Vn,colorSpace:Yn,depthBuffer:!1},s=Lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(r)),this._blurMaterial=lv(r,e,t)}return s}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,n,s){const a=new Sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(bu),u.toneMapping=En,u.autoClear=!1;const p=new yc({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Gn(new Pr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(bu),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):T===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;ao(s,T*x,f>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ys||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ru[(s-r-1)%Ru.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Gn(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*rs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const f=[];let T=0;for(let w=0;w<rs;++w){const D=w/_,S=Math.exp(-D*D/2);f.push(S),w===0?T+=S:w<m&&(T+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const E=this._sizeLods[s],F=3*E*(s>x-Ds?s-x+Ds:0),A=4*(this._cubeSize-E);ao(t,F,A,3*E,2*E),l.setRenderTarget(t),l.render(d,Oa)}}function av(i){const e=[],t=[],n=[];let s=i;const r=i-Ds+1+wu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ds?l=wu[o-i+Ds-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),x=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,D=A>2?0:-1,S=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];T.set(S,_*g*A),x.set(h,m*g*A);const y=[A,A,A,A,A,A];E.set(y,f*g*A)}const F=new wi;F.setAttribute("position",new Rn(T,_)),F.setAttribute("uv",new Rn(x,m)),F.setAttribute("faceIndex",new Rn(E,f)),e.push(F),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lu(i,e,t){const n=new Gi(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lv(i,e,t){const n=new Float32Array(rs),s=new U(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Pu(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Iu(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function cv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fl||l===pl,u=l===Ys||l===$s;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Cu(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Cu(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function uv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&vc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hv(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let x=0,E=T.length;x<E;x+=3){const F=T[x+0],A=T[x+1],w=T[x+2];h.push(F,A,A,w,w,F)}}else if(g!==void 0){const T=g.array;_=g.version;for(let x=0,E=T.length/3-1;x<E;x+=3){const F=x+0,A=x+1,w=x+2;h.push(F,A,A,w,w,F)}}else return;const m=new(cd(h)?pd:fd)(h,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function dv(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){i.drawElements(n,p,r,h*o),t.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,h*o,g),t.update(p,n,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T];for(let T=0;T<_.length;T++)t.update(f,n,_[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pv(i,e,t){const n=new WeakMap,s=new et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let E=a.attributes.position.count*x,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*F*4*d),w=new xc(A,E,F,d);w.type=ni,w.needsUpdate=!0;const D=x*4;for(let y=0;y<d;y++){const R=m[y],Y=f[y],k=T[y],Z=E*F*4*y;for(let ne=0;ne<R.count;ne++){const $=ne*D;p===!0&&(s.fromBufferAttribute(R,ne),A[Z+$+0]=s.x,A[Z+$+1]=s.y,A[Z+$+2]=s.z,A[Z+$+3]=0),g===!0&&(s.fromBufferAttribute(Y,ne),A[Z+$+4]=s.x,A[Z+$+5]=s.y,A[Z+$+6]=s.z,A[Z+$+7]=0),_===!0&&(s.fromBufferAttribute(k,ne),A[Z+$+8]=s.x,A[Z+$+9]=s.y,A[Z+$+10]=s.z,A[Z+$+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new we(E,F)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function mv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Ir extends en{constructor(e,t,n,s,r,o,a,l,c,u=zs){if(u!==zs&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zs&&(n=Hi),n===void 0&&u===Zs&&(n=Ks),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Md=new en,Du=new Ir(1,1),yd=new xc,Sd=new tg,Td=new vd,Uu=[],Ou=[],Fu=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function nr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ko(i,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function Mv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;zu.set(n),i.uniformMatrix2fv(this.addr,!1,zu),zt(t,n)}}function yv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Bu.set(n),i.uniformMatrix3fv(this.addr,!1,Bu),zt(t,n)}}function Sv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Fu.set(n),i.uniformMatrix4fv(this.addr,!1,Fu),zt(t,n)}}function Tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Lv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=ad,r=Du):r=Md,t.setTexture2D(e||r,s)}function Pv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sd,s)}function Iv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Td,s)}function Dv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yd,s)}function Uv(i){switch(i){case 5126:return gv;case 35664:return _v;case 35665:return vv;case 35666:return xv;case 35674:return Mv;case 35675:return yv;case 35676:return Sv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return Nv;case 35669:case 35673:return Av;case 5125:return wv;case 36294:return bv;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Ov(i,e){i.uniform1fv(this.addr,e)}function Fv(i,e){const t=nr(e,this.size,2);i.uniform2fv(this.addr,t)}function Bv(i,e){const t=nr(e,this.size,3);i.uniform3fv(this.addr,t)}function zv(i,e){const t=nr(e,this.size,4);i.uniform4fv(this.addr,t)}function Vv(i,e){const t=nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hv(i,e){const t=nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gv(i,e){const t=nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kv(i,e){i.uniform1iv(this.addr,e)}function Wv(i,e){i.uniform2iv(this.addr,e)}function Xv(i,e){i.uniform3iv(this.addr,e)}function qv(i,e){i.uniform4iv(this.addr,e)}function Yv(i,e){i.uniform1uiv(this.addr,e)}function $v(i,e){i.uniform2uiv(this.addr,e)}function Kv(i,e){i.uniform3uiv(this.addr,e)}function Zv(i,e){i.uniform4uiv(this.addr,e)}function jv(i,e,t){const n=this.cache,s=e.length,r=Ko(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Md,r[o])}function Jv(i,e,t){const n=this.cache,s=e.length,r=Ko(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sd,r[o])}function Qv(i,e,t){const n=this.cache,s=e.length,r=Ko(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Td,r[o])}function ex(i,e,t){const n=this.cache,s=e.length,r=Ko(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yd,r[o])}function tx(i){switch(i){case 5126:return Ov;case 35664:return Fv;case 35665:return Bv;case 35666:return zv;case 35674:return Vv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return kv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return $v;case 36295:return Kv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ex}}class nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}}class ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tx(t.type)}}class sx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Vu(i,e){i.seq.push(e),i.map[e.id]=e}function rx(i,e,t){const n=i.name,s=n.length;for(Ha.lastIndex=0;;){const r=Ha.exec(n),o=Ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vu(t,c===void 0?new nx(a,i,e):new ix(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new sx(a),Vu(t,d)),t=d}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);rx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Hu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ox=37297;let ax=0;function lx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function cx(i){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(i);let n;switch(e===t?n="":e===Co&&t===Ro?n="LinearDisplayP3ToLinearSRGB":e===Ro&&t===Co&&(n="LinearSRGBToLinearDisplayP3"),i){case Yn:case qo:return[n,"LinearTransferOETF"];case Fn:case gc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lx(i.getShaderSource(e),o)}else return s}function ux(i,e){const t=cx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hx(i,e){let t;switch(e){case Gh:t="Linear";break;case kh:t="Reinhard";break;case Wh:t="OptimizedCineon";break;case Xh:t="ACESFilmic";break;case qh:t="AgX";break;case Yh:t="Neutral";break;case Tm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function fx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function px(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function vr(i){return i!==""}function ku(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(i){return i.replace(mx,_x)}const gx=new Map;function _x(i,e){let t=Ye[e];if(t===void 0){const n=gx.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(vx,xx)}function xx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function yx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ys:case $s:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function Tx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ko:e="ENVMAP_BLENDING_MULTIPLY";break;case ym:e="ENVMAP_BLENDING_MIX";break;case Sm:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Nx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Mx(t),c=yx(t),u=Sx(t),d=Tx(t),h=Ex(t),p=dx(t),g=fx(r),_=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),f.length>0&&(f+=`
`)):(m=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),f=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ye.tonemapping_pars_fragment:"",t.toneMapping!==En?hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,ux("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),o=kl(o),o=ku(o,t),o=Wu(o,t),a=kl(a),a=ku(a,t),a=Wu(a,t),o=Xu(o),a=Xu(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=T+m+o,E=T+f+a,F=Hu(s,s.VERTEX_SHADER,x),A=Hu(s,s.FRAGMENT_SHADER,E);s.attachShader(_,F),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(F).trim(),Z=s.getShaderInfoLog(A).trim();let ne=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,A);else{const oe=Gu(s,F,"vertex"),q=Gu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+oe+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(k===""||Z==="")&&($=!1);$&&(R.diagnostics={runnable:ne,programLog:Y,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(F),s.deleteShader(A),D=new yo(s,_),S=px(s,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,ox)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ax++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=A,this}let Ax=0;class wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bx(e),t.set(e,n)),n}}class bx{constructor(e){this.id=Ax++,this.code=e,this.usedTimes=0}}function Rx(i,e,t,n,s,r,o){const a=new hd,l=new wx,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,Y,k){const Z=Y.fog,ne=k.geometry,$=S.isMeshStandardMaterial?Y.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),q=oe&&oe.mapping===Wo?oe.image.height:null,ye=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Ae=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,be=Ae!==void 0?Ae.length:0;let je=0;ne.morphAttributes.position!==void 0&&(je=1),ne.morphAttributes.normal!==void 0&&(je=2),ne.morphAttributes.color!==void 0&&(je=3);let pt,K,ce,Te;if(ye){const rt=Zn[ye];pt=rt.vertexShader,K=rt.fragmentShader}else pt=S.vertexShader,K=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),Te=l.getFragmentShaderID(S);const xe=i.getRenderTarget(),ke=k.isInstancedMesh===!0,$e=k.isBatchedMesh===!0,Ze=!!S.map,Tt=!!S.matcap,b=!!oe,bt=!!S.aoMap,ut=!!S.lightMap,mt=!!S.bumpMap,Ce=!!S.normalMap,Rt=!!S.displacementMap,He=!!S.emissiveMap,We=!!S.metalnessMap,N=!!S.roughnessMap,v=S.anisotropy>0,G=S.clearcoat>0,ie=S.dispersion>0,se=S.iridescence>0,te=S.sheen>0,Ie=S.transmission>0,me=v&&!!S.anisotropyMap,Me=G&&!!S.clearcoatMap,qe=G&&!!S.clearcoatNormalMap,ue=G&&!!S.clearcoatRoughnessMap,ve=se&&!!S.iridescenceMap,Je=se&&!!S.iridescenceThicknessMap,Ve=te&&!!S.sheenColorMap,Se=te&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,Ke=!!S.specularColorMap,yt=!!S.specularIntensityMap,L=Ie&&!!S.transmissionMap,he=Ie&&!!S.thicknessMap,j=!!S.gradientMap,Q=!!S.alphaMap,fe=S.alphaTest>0,Ue=!!S.alphaHash,Qe=!!S.extensions;let Ct=En;S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const kt={shaderID:ye,shaderType:S.type,shaderName:S.name,vertexShader:pt,fragmentShader:K,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:Te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:$e,batchingColor:$e&&k._colorsTexture!==null,instancing:ke,instancingColor:ke&&k.instanceColor!==null,instancingMorph:ke&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Yn,alphaToCoverage:!!S.alphaToCoverage,map:Ze,matcap:Tt,envMap:b,envMapMode:b&&oe.mapping,envMapCubeUVHeight:q,aoMap:bt,lightMap:ut,bumpMap:mt,normalMap:Ce,displacementMap:h&&Rt,emissiveMap:He,normalMapObjectSpace:Ce&&S.normalMapType===rd,normalMapTangentSpace:Ce&&S.normalMapType===Ei,metalnessMap:We,roughnessMap:N,anisotropy:v,anisotropyMap:me,clearcoat:G,clearcoatMap:Me,clearcoatNormalMap:qe,clearcoatRoughnessMap:ue,dispersion:ie,iridescence:se,iridescenceMap:ve,iridescenceThicknessMap:Je,sheen:te,sheenColorMap:Ve,sheenRoughnessMap:Se,specularMap:Ge,specularColorMap:Ke,specularIntensityMap:yt,transmission:Ie,transmissionMap:L,thicknessMap:he,gradientMap:j,opaque:S.transparent===!1&&S.blending===as&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:Ue,combine:S.combine,mapUv:Ze&&_(S.map.channel),aoMapUv:bt&&_(S.aoMap.channel),lightMapUv:ut&&_(S.lightMap.channel),bumpMapUv:mt&&_(S.bumpMap.channel),normalMapUv:Ce&&_(S.normalMap.channel),displacementMapUv:Rt&&_(S.displacementMap.channel),emissiveMapUv:He&&_(S.emissiveMap.channel),metalnessMapUv:We&&_(S.metalnessMap.channel),roughnessMapUv:N&&_(S.roughnessMap.channel),anisotropyMapUv:me&&_(S.anisotropyMap.channel),clearcoatMapUv:Me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(S.sheenRoughnessMap.channel),specularMapUv:Ge&&_(S.specularMap.channel),specularColorMapUv:Ke&&_(S.specularColorMap.channel),specularIntensityMapUv:yt&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:he&&_(S.thicknessMap.channel),alphaMapUv:Q&&_(S.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ce||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ne.attributes.uv&&(Ze||Q),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:je,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Ze&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gi,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Qe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&S.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(T(y,S),x(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),S.push(a.mask)}function E(S){const y=g[S.type];let R;if(y){const Y=Zn[y];R=gd.clone(Y.uniforms)}else R=S.uniforms;return R}function F(S,y){let R;for(let Y=0,k=u.length;Y<k;Y++){const Z=u[Y];if(Z.cacheKey===y){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new Nx(i,y,S,r),u.push(R)),R}function A(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:F,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:D}}function Cx(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Lx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $u(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,p,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Lx),n.length>1&&n.sort(h||Yu),s.length>1&&s.sort(h||Yu)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Px(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new $u,i.set(n,[o])):s>=r.length?(o=new $u,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Le};break;case"SpotLight":t={position:new U,direction:new U,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Dx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ux=0;function Ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fx(i){const e=new Ix,t=Dx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new _t,o=new _t;function a(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,x=0,E=0,F=0,A=0,w=0;c.sort(Ox);for(let S=0,y=c.length;S<y;S++){const R=c[S],Y=R.color,k=R.intensity,Z=R.distance,ne=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=Y.r*k,d+=Y.g*k,h+=Y.b*k;else if(R.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(R.sh.coefficients[$],k);w++}else if(R.isDirectionalLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const oe=R.shadow,q=t.get(R);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=$,p++}else if(R.isSpotLight){const $=e.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(Y).multiplyScalar(k),$.distance=Z,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,n.spot[_]=$;const oe=R.shadow;if(R.map&&(n.spotLightMap[F]=R.map,F++,oe.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=oe.matrix,R.castShadow){const q=t.get(R);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=ne,E++}_++}else if(R.isRectAreaLight){const $=e.get(R);$.color.copy(Y).multiplyScalar(k),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=$,m++}else if(R.isPointLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const oe=R.shadow,q=t.get(R);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,q.shadowCameraNear=oe.camera.near,q.shadowCameraFar=oe.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=$,g++}else if(R.isHemisphereLight){const $=e.get(R);$.skyColor.copy(R.color).multiplyScalar(k),$.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[f]=$,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==T||D.numPointShadows!==x||D.numSpotShadows!==E||D.numSpotMaps!==F||D.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+F-A,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=T,D.numPointShadows=x,D.numSpotShadows=E,D.numSpotMaps=F,D.numLightProbes=w,n.version=Ux++)}function l(c,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const x=c[f];if(x.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(x.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ku(i){const e=new Fx(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Bx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ku(i),e.set(s,[a])):r>=o.length?(a=new Ku(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class zx extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vx extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
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
}`;function kx(i,e,t){let n=new Sc;const s=new we,r=new we,o=new et,a=new zx({depthPacking:Am}),l=new Vx,c={},u=t.maxTextureSize,d={[Vi]:cn,[cn]:Vi,[gi]:gi},h=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Hx,fragmentShader:Gx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new wi;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let f=this.type;this.render=function(A,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(yi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const k=f!==pi&&this.type===pi,Z=f===pi&&this.type!==pi;for(let ne=0,$=A.length;ne<$;ne++){const oe=A[ne],q=oe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ye=q.getFrameExtents();if(s.multiply(ye),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ye.x),s.x=r.x*ye.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ye.y),s.y=r.y*ye.y,q.mapSize.y=r.y)),q.map===null||k===!0||Z===!0){const be=this.type!==pi?{minFilter:Jt,magFilter:Jt}:{};q.map!==null&&q.map.dispose(),q.map=new Gi(s.x,s.y,be),q.map.texture.name=oe.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Ae=q.getViewportCount();for(let be=0;be<Ae;be++){const je=q.getViewport(be);o.set(r.x*je.x,r.y*je.y,r.x*je.z,r.y*je.w),Y.viewport(o),q.updateMatrices(oe,be),n=q.getFrustum(),E(w,D,q.camera,oe,this.type)}q.isPointLightShadow!==!0&&this.type===pi&&T(q,D),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,R)};function T(A,w){const D=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gi(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,D,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,D,p,_,null)}function x(A,w,D,S){let y=null;const R=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=D.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=y.uuid,k=w.uuid;let Z=c[Y];Z===void 0&&(Z={},c[Y]=Z);let ne=Z[k];ne===void 0&&(ne=y.clone(),Z[k]=ne,w.addEventListener("dispose",F)),y=ne}if(y.visible=w.visible,y.wireframe=w.wireframe,S===pi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Y=i.properties.get(y);Y.light=D}return y}function E(A,w,D,S,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===pi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const k=e.update(A),Z=A.material;if(Array.isArray(Z)){const ne=k.groups;for(let $=0,oe=ne.length;$<oe;$++){const q=ne[$],ye=Z[q.materialIndex];if(ye&&ye.visible){const Ae=x(A,ye,S,y);A.onBeforeShadow(i,A,w,D,k,Ae,q),i.renderBufferDirect(D,null,k,Ae,A,q),A.onAfterShadow(i,A,w,D,k,Ae,q)}}}else if(Z.visible){const ne=x(A,Z,S,y);A.onBeforeShadow(i,A,w,D,k,ne,null),i.renderBufferDirect(D,null,k,ne,A,null),A.onAfterShadow(i,A,w,D,k,ne,null)}}const Y=A.children;for(let k=0,Z=Y.length;k<Z;k++)E(Y[k],w,D,S,y)}function F(A){A.target.removeEventListener("dispose",F);for(const D in c){const S=c[D],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function Wx(i){function e(){let L=!1;const he=new et;let j=null;const Q=new et(0,0,0,0);return{setMask:function(fe){j!==fe&&!L&&(i.colorMask(fe,fe,fe,fe),j=fe)},setLocked:function(fe){L=fe},setClear:function(fe,Ue,Qe,Ct,kt){kt===!0&&(fe*=Ct,Ue*=Ct,Qe*=Ct),he.set(fe,Ue,Qe,Ct),Q.equals(he)===!1&&(i.clearColor(fe,Ue,Qe,Ct),Q.copy(he))},reset:function(){L=!1,j=null,Q.set(-1,0,0,0)}}}function t(){let L=!1,he=null,j=null,Q=null;return{setTest:function(fe){fe?Te(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(fe){he!==fe&&!L&&(i.depthMask(fe),he=fe)},setFunc:function(fe){if(j!==fe){switch(fe){case pm:i.depthFunc(i.NEVER);break;case mm:i.depthFunc(i.ALWAYS);break;case gm:i.depthFunc(i.LESS);break;case wo:i.depthFunc(i.LEQUAL);break;case _m:i.depthFunc(i.EQUAL);break;case vm:i.depthFunc(i.GEQUAL);break;case xm:i.depthFunc(i.GREATER);break;case Mm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=fe}},setLocked:function(fe){L=fe},setClear:function(fe){Q!==fe&&(i.clearDepth(fe),Q=fe)},reset:function(){L=!1,he=null,j=null,Q=null}}}function n(){let L=!1,he=null,j=null,Q=null,fe=null,Ue=null,Qe=null,Ct=null,kt=null;return{setTest:function(rt){L||(rt?Te(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(rt){he!==rt&&!L&&(i.stencilMask(rt),he=rt)},setFunc:function(rt,li,$n){(j!==rt||Q!==li||fe!==$n)&&(i.stencilFunc(rt,li,$n),j=rt,Q=li,fe=$n)},setOp:function(rt,li,$n){(Ue!==rt||Qe!==li||Ct!==$n)&&(i.stencilOp(rt,li,$n),Ue=rt,Qe=li,Ct=$n)},setLocked:function(rt){L=rt},setClear:function(rt){kt!==rt&&(i.clearStencil(rt),kt=rt)},reset:function(){L=!1,he=null,j=null,Q=null,fe=null,Ue=null,Qe=null,Ct=null,kt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,f=null,T=null,x=null,E=null,F=null,A=new Le(0,0,0),w=0,D=!1,S=null,y=null,R=null,Y=null,k=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,$=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ne=$>=1):oe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ne=$>=2);let q=null,ye={};const Ae=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),je=new et().fromArray(Ae),pt=new et().fromArray(be);function K(L,he,j,Q){const fe=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(L,Ue),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<j;Qe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(he+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return Ue}const ce={};ce[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Te(i.DEPTH_TEST),r.setFunc(wo),mt(!1),Ce(tu),Te(i.CULL_FACE),bt(yi);function Te(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function xe(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function ke(L,he){return u[L]!==he?(i.bindFramebuffer(L,he),u[L]=he,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function $e(L,he){let j=h,Q=!1;if(L){j=d.get(he),j===void 0&&(j=[],d.set(he,j));const fe=L.textures;if(j.length!==fe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,Qe=fe.length;Ue<Qe;Ue++)j[Ue]=i.COLOR_ATTACHMENT0+Ue;j.length=fe.length,Q=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Q=!0);Q&&i.drawBuffers(j)}function Ze(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const Tt={[ss]:i.FUNC_ADD,[jp]:i.FUNC_SUBTRACT,[Jp]:i.FUNC_REVERSE_SUBTRACT};Tt[Qp]=i.MIN,Tt[em]=i.MAX;const b={[tm]:i.ZERO,[nm]:i.ONE,[im]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[cm]:i.SRC_ALPHA_SATURATE,[am]:i.DST_COLOR,[rm]:i.DST_ALPHA,[sm]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[lm]:i.ONE_MINUS_DST_COLOR,[om]:i.ONE_MINUS_DST_ALPHA,[um]:i.CONSTANT_COLOR,[hm]:i.ONE_MINUS_CONSTANT_COLOR,[dm]:i.CONSTANT_ALPHA,[fm]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(L,he,j,Q,fe,Ue,Qe,Ct,kt,rt){if(L===yi){g===!0&&(xe(i.BLEND),g=!1);return}if(g===!1&&(Te(i.BLEND),g=!0),L!==Zp){if(L!==_||rt!==D){if((m!==ss||x!==ss)&&(i.blendEquation(i.FUNC_ADD),m=ss,x=ss),rt)switch(L){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFunc(i.ONE,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case su:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,T=null,E=null,F=null,A.set(0,0,0),w=0,_=L,D=rt}return}fe=fe||he,Ue=Ue||j,Qe=Qe||Q,(he!==m||fe!==x)&&(i.blendEquationSeparate(Tt[he],Tt[fe]),m=he,x=fe),(j!==f||Q!==T||Ue!==E||Qe!==F)&&(i.blendFuncSeparate(b[j],b[Q],b[Ue],b[Qe]),f=j,T=Q,E=Ue,F=Qe),(Ct.equals(A)===!1||kt!==w)&&(i.blendColor(Ct.r,Ct.g,Ct.b,kt),A.copy(Ct),w=kt),_=L,D=!1}function ut(L,he){L.side===gi?xe(i.CULL_FACE):Te(i.CULL_FACE);let j=L.side===cn;he&&(j=!j),mt(j),L.blending===as&&L.transparent===!1?bt(yi):bt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const Q=L.stencilWrite;o.setTest(Q),Q&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),He(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function Ce(L){L!==Yp?(Te(i.CULL_FACE),L!==y&&(L===tu?i.cullFace(i.BACK):L===$p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),y=L}function Rt(L){L!==R&&(ne&&i.lineWidth(L),R=L)}function He(L,he,j){L?(Te(i.POLYGON_OFFSET_FILL),(Y!==he||k!==j)&&(i.polygonOffset(he,j),Y=he,k=j)):xe(i.POLYGON_OFFSET_FILL)}function We(L){L?Te(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function N(L){L===void 0&&(L=i.TEXTURE0+Z-1),q!==L&&(i.activeTexture(L),q=L)}function v(L,he,j){j===void 0&&(q===null?j=i.TEXTURE0+Z-1:j=q);let Q=ye[j];Q===void 0&&(Q={type:void 0,texture:void 0},ye[j]=Q),(Q.type!==L||Q.texture!==he)&&(q!==j&&(i.activeTexture(j),q=j),i.bindTexture(L,he||ce[L]),Q.type=L,Q.texture=he)}function G(){const L=ye[q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(L){je.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function Se(L){pt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),pt.copy(L))}function Ge(L,he){let j=l.get(he);j===void 0&&(j=new WeakMap,l.set(he,j));let Q=j.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(he,L.name),j.set(L,Q))}function Ke(L,he){const Q=l.get(he).get(L);a.get(he)!==Q&&(i.uniformBlockBinding(he,Q,L.__bindingPointIndex),a.set(he,Q))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,ye={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,f=null,T=null,x=null,E=null,F=null,A=new Le(0,0,0),w=0,D=!1,S=null,y=null,R=null,Y=null,k=null,je.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Te,disable:xe,bindFramebuffer:ke,drawBuffers:$e,useProgram:Ze,setBlending:bt,setMaterial:ut,setFlipSided:mt,setCullFace:Ce,setLineWidth:Rt,setPolygonOffset:He,setScissorTest:We,activeTexture:N,bindTexture:v,unbindTexture:G,compressedTexImage2D:ie,compressedTexImage3D:se,texImage2D:ve,texImage3D:Je,updateUBOMapping:Ge,uniformBlockBinding:Ke,texStorage2D:qe,texStorage3D:ue,texSubImage2D:te,texSubImage3D:Ie,compressedTexSubImage2D:me,compressedTexSubImage3D:Me,scissor:Ve,viewport:Se,reset:yt}}function Zu(i,e,t,n){const s=Xx(n);switch(t){case Jh:return i*e;case ed:return i*e;case td:return i*e*2;case nd:return i*e/s.components*s.byteLength;case fc:return i*e/s.components*s.byteLength;case id:return i*e*2/s.components*s.byteLength;case pc:return i*e*2/s.components*s.byteLength;case Qh:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case mc:return i*e*4/s.components*s.byteLength;case go:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:case Ml:return Math.max(i,16)*Math.max(e,8)/4;case _l:case xl:return Math.max(i,8)*Math.max(e,8)/2;case yl:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mo:case Bl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sd:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hl:case Gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xx(i){switch(i){case Ti:case Kh:return{byteLength:1,components:1};case Tr:case Zh:case hs:return{byteLength:2,components:1};case hc:case dc:return{byteLength:2,components:4};case Hi:case Xo:case ni:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,v){return p?new OffscreenCanvas(N,v):Er("canvas")}function _(N,v,G){let ie=1;const se=We(N);if((se.width>G||se.height>G)&&(ie=G/Math.max(se.width,se.height)),ie<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const te=Math.floor(ie*se.width),Ie=Math.floor(ie*se.height);d===void 0&&(d=g(te,Ie));const me=v?g(te,Ie):d;return me.width=te,me.height=Ie,me.getContext("2d").drawImage(N,0,0,te,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Ie+")."),me}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==Jt&&N.minFilter!==Bn}function f(N){i.generateMipmap(N)}function T(N,v,G,ie,se=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let te=v;if(v===i.RED&&(G===i.FLOAT&&(te=i.R32F),G===i.HALF_FLOAT&&(te=i.R16F),G===i.UNSIGNED_BYTE&&(te=i.R8)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.R8UI),G===i.UNSIGNED_SHORT&&(te=i.R16UI),G===i.UNSIGNED_INT&&(te=i.R32UI),G===i.BYTE&&(te=i.R8I),G===i.SHORT&&(te=i.R16I),G===i.INT&&(te=i.R32I)),v===i.RG&&(G===i.FLOAT&&(te=i.RG32F),G===i.HALF_FLOAT&&(te=i.RG16F),G===i.UNSIGNED_BYTE&&(te=i.RG8)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RG8UI),G===i.UNSIGNED_SHORT&&(te=i.RG16UI),G===i.UNSIGNED_INT&&(te=i.RG32UI),G===i.BYTE&&(te=i.RG8I),G===i.SHORT&&(te=i.RG16I),G===i.INT&&(te=i.RG32I)),v===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),v===i.RGBA){const Ie=se?bo:dt.getTransfer(ie);G===i.FLOAT&&(te=i.RGBA32F),G===i.HALF_FLOAT&&(te=i.RGBA16F),G===i.UNSIGNED_BYTE&&(te=Ie===vt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(N,v){let G;return N?v===null||v===Hi||v===Ks?G=i.DEPTH24_STENCIL8:v===ni?G=i.DEPTH32F_STENCIL8:v===Tr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hi||v===Ks?G=i.DEPTH_COMPONENT24:v===ni?G=i.DEPTH_COMPONENT32F:v===Tr&&(G=i.DEPTH_COMPONENT16),G}function E(N,v){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Jt&&N.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?v.mipmaps.length:1}function F(N){const v=N.target;v.removeEventListener("dispose",F),w(v),v.isVideoTexture&&u.delete(v)}function A(N){const v=N.target;v.removeEventListener("dispose",A),S(v)}function w(N){const v=n.get(N);if(v.__webglInit===void 0)return;const G=N.source,ie=h.get(G);if(ie){const se=ie[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(N),Object.keys(ie).length===0&&h.delete(G)}n.remove(N)}function D(N){const v=n.get(N);i.deleteTexture(v.__webglTexture);const G=N.source,ie=h.get(G);delete ie[v.__cacheKey],o.memory.textures--}function S(N){const v=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(v.__webglFramebuffer[ie]))for(let se=0;se<v.__webglFramebuffer[ie].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[ie][se]);else i.deleteFramebuffer(v.__webglFramebuffer[ie]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ie])}else{if(Array.isArray(v.__webglFramebuffer))for(let ie=0;ie<v.__webglFramebuffer.length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[ie]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ie=0;ie<v.__webglColorRenderbuffer.length;ie++)v.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const G=N.textures;for(let ie=0,se=G.length;ie<se;ie++){const te=n.get(G[ie]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(G[ie])}n.remove(N)}let y=0;function R(){y=0}function Y(){const N=y;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),y+=1,N}function k(N){const v=[];return v.push(N.wrapS),v.push(N.wrapT),v.push(N.wrapR||0),v.push(N.magFilter),v.push(N.minFilter),v.push(N.anisotropy),v.push(N.internalFormat),v.push(N.format),v.push(N.type),v.push(N.generateMipmaps),v.push(N.premultiplyAlpha),v.push(N.flipY),v.push(N.unpackAlignment),v.push(N.colorSpace),v.join()}function Z(N,v){const G=n.get(N);if(N.isVideoTexture&&Rt(N),N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){const ie=N.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(G,N,v);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function ne(N,v){const G=n.get(N);if(N.version>0&&G.__version!==N.version){pt(G,N,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function $(N,v){const G=n.get(N);if(N.version>0&&G.__version!==N.version){pt(G,N,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function oe(N,v){const G=n.get(N);if(N.version>0&&G.__version!==N.version){K(G,N,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}const q={[ml]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},ye={[Jt]:i.NEAREST,[Em]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},Ae={[wm]:i.NEVER,[Pm]:i.ALWAYS,[od]:i.LESS,[ad]:i.LEQUAL,[bm]:i.EQUAL,[Lm]:i.GEQUAL,[Rm]:i.GREATER,[Cm]:i.NOTEQUAL};function be(N,v){if(v.type===ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===_a||v.magFilter===Vr||v.magFilter===Bi||v.minFilter===Bn||v.minFilter===_a||v.minFilter===Vr||v.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,q[v.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,q[v.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,q[v.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ye[v.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ye[v.minFilter]),v.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Jt||v.minFilter!==Vr&&v.minFilter!==Bi||v.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function je(N,v){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,v.addEventListener("dispose",F));const ie=v.source;let se=h.get(ie);se===void 0&&(se={},h.set(ie,se));const te=k(v);if(te!==N.__cacheKey){se[te]===void 0&&(se[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[te].usedTimes++;const Ie=se[N.__cacheKey];Ie!==void 0&&(se[N.__cacheKey].usedTimes--,Ie.usedTimes===0&&D(v)),N.__cacheKey=te,N.__webglTexture=se[te].texture}return G}function pt(N,v,G){let ie=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=i.TEXTURE_3D);const se=je(N,v),te=v.source;t.bindTexture(ie,N.__webglTexture,i.TEXTURE0+G);const Ie=n.get(te);if(te.version!==Ie.__version||se===!0){t.activeTexture(i.TEXTURE0+G);const me=dt.getPrimaries(dt.workingColorSpace),Me=v.colorSpace===Oi?null:dt.getPrimaries(v.colorSpace),qe=v.colorSpace===Oi||me===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ue=_(v.image,!1,s.maxTextureSize);ue=He(v,ue);const ve=r.convert(v.format,v.colorSpace),Je=r.convert(v.type);let Ve=T(v.internalFormat,ve,Je,v.colorSpace,v.isVideoTexture);be(ie,v);let Se;const Ge=v.mipmaps,Ke=v.isVideoTexture!==!0,yt=Ie.__version===void 0||se===!0,L=te.dataReady,he=E(v,ue);if(v.isDepthTexture)Ve=x(v.format===Zs,v.type),yt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Ve,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ve,ue.width,ue.height,0,ve,Je,null));else if(v.isDataTexture)if(Ge.length>0){Ke&&yt&&t.texStorage2D(i.TEXTURE_2D,he,Ve,Ge[0].width,Ge[0].height);for(let j=0,Q=Ge.length;j<Q;j++)Se=Ge[j],Ke?L&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Se.width,Se.height,ve,Je,Se.data):t.texImage2D(i.TEXTURE_2D,j,Ve,Se.width,Se.height,0,ve,Je,Se.data);v.generateMipmaps=!1}else Ke?(yt&&t.texStorage2D(i.TEXTURE_2D,he,Ve,ue.width,ue.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Je,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,ue.width,ue.height,0,ve,Je,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ve,Ge[0].width,Ge[0].height,ue.depth);for(let j=0,Q=Ge.length;j<Q;j++)if(Se=Ge[j],v.format!==Vn)if(ve!==null)if(Ke){if(L)if(v.layerUpdates.size>0){const fe=Zu(Se.width,Se.height,v.format,v.type);for(const Ue of v.layerUpdates){const Qe=Se.data.subarray(Ue*fe/Se.data.BYTES_PER_ELEMENT,(Ue+1)*fe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Ue,Se.width,Se.height,1,ve,Qe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Se.width,Se.height,ue.depth,ve,Se.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ve,Se.width,Se.height,ue.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Se.width,Se.height,ue.depth,ve,Je,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ve,Se.width,Se.height,ue.depth,0,ve,Je,Se.data)}else{Ke&&yt&&t.texStorage2D(i.TEXTURE_2D,he,Ve,Ge[0].width,Ge[0].height);for(let j=0,Q=Ge.length;j<Q;j++)Se=Ge[j],v.format!==Vn?ve!==null?Ke?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?L&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Se.width,Se.height,ve,Je,Se.data):t.texImage2D(i.TEXTURE_2D,j,Ve,Se.width,Se.height,0,ve,Je,Se.data)}else if(v.isDataArrayTexture)if(Ke){if(yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Ve,ue.width,ue.height,ue.depth),L)if(v.layerUpdates.size>0){const j=Zu(ue.width,ue.height,v.format,v.type);for(const Q of v.layerUpdates){const fe=ue.data.subarray(Q*j/ue.data.BYTES_PER_ELEMENT,(Q+1)*j/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ue.width,ue.height,1,ve,Je,fe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Je,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,ue.width,ue.height,ue.depth,0,ve,Je,ue.data);else if(v.isData3DTexture)Ke?(yt&&t.texStorage3D(i.TEXTURE_3D,he,Ve,ue.width,ue.height,ue.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Je,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,ue.width,ue.height,ue.depth,0,ve,Je,ue.data);else if(v.isFramebufferTexture){if(yt)if(Ke)t.texStorage2D(i.TEXTURE_2D,he,Ve,ue.width,ue.height);else{let j=ue.width,Q=ue.height;for(let fe=0;fe<he;fe++)t.texImage2D(i.TEXTURE_2D,fe,Ve,j,Q,0,ve,Je,null),j>>=1,Q>>=1}}else if(Ge.length>0){if(Ke&&yt){const j=We(Ge[0]);t.texStorage2D(i.TEXTURE_2D,he,Ve,j.width,j.height)}for(let j=0,Q=Ge.length;j<Q;j++)Se=Ge[j],Ke?L&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ve,Je,Se):t.texImage2D(i.TEXTURE_2D,j,Ve,ve,Je,Se);v.generateMipmaps=!1}else if(Ke){if(yt){const j=We(ue);t.texStorage2D(i.TEXTURE_2D,he,Ve,j.width,j.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Je,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ve,ve,Je,ue);m(v)&&f(ie),Ie.__version=te.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function K(N,v,G){if(v.image.length!==6)return;const ie=je(N,v),se=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+G);const te=n.get(se);if(se.version!==te.__version||ie===!0){t.activeTexture(i.TEXTURE0+G);const Ie=dt.getPrimaries(dt.workingColorSpace),me=v.colorSpace===Oi?null:dt.getPrimaries(v.colorSpace),Me=v.colorSpace===Oi||Ie===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const qe=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!qe&&!ue?ve[Q]=_(v.image[Q],!0,s.maxCubemapSize):ve[Q]=ue?v.image[Q].image:v.image[Q],ve[Q]=He(v,ve[Q]);const Je=ve[0],Ve=r.convert(v.format,v.colorSpace),Se=r.convert(v.type),Ge=T(v.internalFormat,Ve,Se,v.colorSpace),Ke=v.isVideoTexture!==!0,yt=te.__version===void 0||ie===!0,L=se.dataReady;let he=E(v,Je);be(i.TEXTURE_CUBE_MAP,v);let j;if(qe){Ke&&yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ge,Je.width,Je.height);for(let Q=0;Q<6;Q++){j=ve[Q].mipmaps;for(let fe=0;fe<j.length;fe++){const Ue=j[fe];v.format!==Vn?Ve!==null?Ke?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,Ue.width,Ue.height,Ve,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Ge,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,Ue.width,Ue.height,Ve,Se,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Ge,Ue.width,Ue.height,0,Ve,Se,Ue.data)}}}else{if(j=v.mipmaps,Ke&&yt){j.length>0&&he++;const Q=We(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ue){Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Ve,Se,ve[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,ve[Q].width,ve[Q].height,0,Ve,Se,ve[Q].data);for(let fe=0;fe<j.length;fe++){const Qe=j[fe].image[Q].image;Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Qe.width,Qe.height,Ve,Se,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Ge,Qe.width,Qe.height,0,Ve,Se,Qe.data)}}else{Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ve,Se,ve[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,Ve,Se,ve[Q]);for(let fe=0;fe<j.length;fe++){const Ue=j[fe];Ke?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Ve,Se,Ue.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Ge,Ve,Se,Ue.image[Q])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),te.__version=se.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function ce(N,v,G,ie,se,te){const Ie=r.convert(G.format,G.colorSpace),me=r.convert(G.type),Me=T(G.internalFormat,Ie,me,G.colorSpace);if(!n.get(v).__hasExternalTextures){const ue=Math.max(1,v.width>>te),ve=Math.max(1,v.height>>te);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,te,Me,ue,ve,v.depth,0,Ie,me,null):t.texImage2D(se,te,Me,ue,ve,0,Ie,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Ce(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,se,n.get(G).__webglTexture,0,mt(v)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,se,n.get(G).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(N,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,N),v.depthBuffer){const ie=v.depthTexture,se=ie&&ie.isDepthTexture?ie.type:null,te=x(v.stencilBuffer,se),Ie=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=mt(v);Ce(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,te,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,N)}else{const ie=v.textures;for(let se=0;se<ie.length;se++){const te=ie[se],Ie=r.convert(te.format,te.colorSpace),me=r.convert(te.type),Me=T(te.internalFormat,Ie,me,te.colorSpace),qe=mt(v);G&&Ce(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Me,v.width,v.height):Ce(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,Me,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Me,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(N,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const ie=n.get(v.depthTexture).__webglTexture,se=mt(v);if(v.depthTexture.format===zs)Ce(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(v.depthTexture.format===Zs)Ce(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ke(N){const v=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");xe(v.__webglFramebuffer,N)}else if(G){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]=i.createRenderbuffer(),Te(v.__webglDepthbuffer[ie],N,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Te(v.__webglDepthbuffer,N,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(N,v,G){const ie=n.get(N);v!==void 0&&ce(ie.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ke(N)}function Ze(N){const v=N.texture,G=n.get(N),ie=n.get(v);N.addEventListener("dispose",A);const se=N.textures,te=N.isWebGLCubeRenderTarget===!0,Ie=se.length>1;if(Ie||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=v.version,o.memory.textures++),te){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let Me=0;Me<v.mipmaps.length;Me++)G.__webglFramebuffer[me][Me]=i.createFramebuffer()}else G.__webglFramebuffer[me]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)G.__webglFramebuffer[me]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let me=0,Me=se.length;me<Me;me++){const qe=n.get(se[me]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Ce(N)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<se.length;me++){const Me=se[me];G.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const qe=r.convert(Me.format,Me.colorSpace),ue=r.convert(Me.type),ve=T(Me.internalFormat,qe,ue,Me.colorSpace,N.isXRRenderTarget===!0),Je=mt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,ve,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,G.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),be(i.TEXTURE_CUBE_MAP,v);for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)ce(G.__webglFramebuffer[me][Me],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else ce(G.__webglFramebuffer[me],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let me=0,Me=se.length;me<Me;me++){const qe=se[me],ue=n.get(qe);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),be(i.TEXTURE_2D,qe),ce(G.__webglFramebuffer,N,qe,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),m(qe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,ie.__webglTexture),be(me,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)ce(G.__webglFramebuffer[Me],N,v,i.COLOR_ATTACHMENT0,me,Me);else ce(G.__webglFramebuffer,N,v,i.COLOR_ATTACHMENT0,me,0);m(v)&&f(me),t.unbindTexture()}N.depthBuffer&&ke(N)}function Tt(N){const v=N.textures;for(let G=0,ie=v.length;G<ie;G++){const se=v[G];if(m(se)){const te=N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(se).__webglTexture;t.bindTexture(te,Ie),f(te),t.unbindTexture()}}}const b=[],bt=[];function ut(N){if(N.samples>0){if(Ce(N)===!1){const v=N.textures,G=N.width,ie=N.height;let se=i.COLOR_BUFFER_BIT;const te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(N),me=v.length>1;if(me)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);const qe=n.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,G,ie,0,0,G,ie,se,i.NEAREST),l===!0&&(b.length=0,bt.length=0,b.push(i.COLOR_ATTACHMENT0+Me),N.depthBuffer&&N.resolveDepthBuffer===!1&&(b.push(te),bt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,b))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);const qe=n.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const v=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function mt(N){return Math.min(s.maxSamples,N.samples)}function Ce(N){const v=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(N){const v=o.render.frame;u.get(N)!==v&&(u.set(N,v),N.update())}function He(N,v){const G=N.colorSpace,ie=N.format,se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Yn&&G!==Oi&&(dt.getTransfer(G)===vt?(ie!==Vn||se!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),v}function We(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=R,this.setTexture2D=Z,this.setTexture2DArray=ne,this.setTexture3D=$,this.setTextureCube=oe,this.rebindTextures=$e,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ce}function Yx(i,e){function t(n,s=Oi){let r;const o=dt.getTransfer(s);if(n===Ti)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.BYTE;if(n===Zh)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===hs)return i.HALF_FLOAT;if(n===Jh)return i.ALPHA;if(n===Qh)return i.RGB;if(n===Vn)return i.RGBA;if(n===ed)return i.LUMINANCE;if(n===td)return i.LUMINANCE_ALPHA;if(n===zs)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===nd)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===id)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===go||n===_o||n===vo||n===xo)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===vl||n===xl||n===Ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===Sl||n===Tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yl||n===Sl)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===El||n===Nl||n===Al||n===wl||n===bl||n===Rl||n===Cl||n===Ll||n===Pl||n===Il||n===Dl||n===Ul||n===Ol||n===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===Bl||n===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sd||n===Vl||n===Hl||n===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class $x extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lo extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kx={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new en,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new si({vertexShader:Zx,fragmentShader:jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new Yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qx extends Xi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const _=new Jx,m=t.getContextAttributes();let f=null,T=null;const x=[],E=[],F=new we;let A=null;const w=new Sn;w.layers.enable(1),w.viewport=new et;const D=new Sn;D.layers.enable(2),D.viewport=new et;const S=[w,D],y=new $x;y.layers.enable(1),y.layers.enable(2);let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=x[K];return ce===void 0&&(ce=new Ga,x[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=x[K];return ce===void 0&&(ce=new Ga,x[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=x[K];return ce===void 0&&(ce=new Ga,x[K]=ce),ce.getHandSpace()};function k(K){const ce=E.indexOf(K.inputSource);if(ce===-1)return;const Te=x[ce];Te!==void 0&&(Te.update(K.inputSource,K.frame,c||o),Te.dispatchEvent({type:K.type,data:K.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ne);for(let K=0;K<x.length;K++){const ce=E[K];ce!==null&&(E[K]=null,x[K].disconnect(ce))}R=null,Y=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,s=null,T=null,pt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Gi(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,Te=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Zs:zs,Te=m.stencil?Ks:Hi);const ke={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Gi(h.textureWidth,h.textureHeight,{format:Vn,type:Ti,depthTexture:new Ir(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(K){for(let ce=0;ce<K.removed.length;ce++){const Te=K.removed[ce],xe=E.indexOf(Te);xe>=0&&(E[xe]=null,x[xe].disconnect(Te))}for(let ce=0;ce<K.added.length;ce++){const Te=K.added[ce];let xe=E.indexOf(Te);if(xe===-1){for(let $e=0;$e<x.length;$e++)if($e>=E.length){E.push(Te),xe=$e;break}else if(E[$e]===null){E[$e]=Te,xe=$e;break}if(xe===-1)break}const ke=x[xe];ke&&ke.connect(Te)}}const $=new U,oe=new U;function q(K,ce,Te){$.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(Te.matrixWorld);const xe=$.distanceTo(oe),ke=ce.projectionMatrix.elements,$e=Te.projectionMatrix.elements,Ze=ke[14]/(ke[10]-1),Tt=ke[14]/(ke[10]+1),b=(ke[9]+1)/ke[5],bt=(ke[9]-1)/ke[5],ut=(ke[8]-1)/ke[0],mt=($e[8]+1)/$e[0],Ce=Ze*ut,Rt=Ze*mt,He=xe/(-ut+mt),We=He*-ut;ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(We),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const N=Ze+He,v=Tt+He,G=Ce-We,ie=Rt+(xe-We),se=b*Tt/v*N,te=bt*Tt/v*N;K.projectionMatrix.makePerspective(G,ie,se,te,N,v),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function ye(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;_.texture!==null&&(K.near=_.depthNear,K.far=_.depthFar),y.near=D.near=w.near=K.near,y.far=D.far=w.far=K.far,(R!==y.near||Y!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,Y=y.far,w.near=R,w.far=Y,D.near=R,D.far=Y,w.updateProjectionMatrix(),D.updateProjectionMatrix(),K.updateProjectionMatrix());const ce=K.parent,Te=y.cameras;ye(y,ce);for(let xe=0;xe<Te.length;xe++)ye(Te[xe],ce);Te.length===2?q(y,w,D):y.projectionMatrix.copy(w.projectionMatrix),Ae(K,y,ce)};function Ae(K,ce,Te){Te===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(Te.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Js*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let be=null;function je(K,ce){if(u=ce.getViewerPose(c||o),g=ce,u!==null){const Te=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let xe=!1;Te.length!==y.cameras.length&&(y.cameras.length=0,xe=!0);for(let $e=0;$e<Te.length;$e++){const Ze=Te[$e];let Tt=null;if(p!==null)Tt=p.getViewport(Ze);else{const bt=d.getViewSubImage(h,Ze);Tt=bt.viewport,$e===0&&(e.setRenderTargetTextures(T,bt.colorTexture,h.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(T))}let b=S[$e];b===void 0&&(b=new Sn,b.layers.enable($e),b.viewport=new et,S[$e]=b),b.matrix.fromArray(Ze.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(Ze.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),$e===0&&(y.matrix.copy(b.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xe===!0&&y.cameras.push(b)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const $e=d.getDepthInformation(Te[0]);$e&&$e.isValid&&$e.texture&&_.init(e,$e,s.renderState)}}for(let Te=0;Te<x.length;Te++){const xe=E[Te],ke=x[Te];xe!==null&&ke!==void 0&&ke.update(xe,ce,c||o)}be&&be(K,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}const pt=new xd;pt.setAnimationLoop(je),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const Qi=new Ln,eM=new _t;function tM(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,md(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,x,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,T,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),x=T.envMap,E=T.envMapRotation;x&&(m.envMap.value=x,Qi.copy(E),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(Qi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nM(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const E=x.program;n.uniformBlockBinding(T,E)}function c(T,x){let E=s[T.id];E===void 0&&(g(T),E=u(T),s[T.id]=E,T.addEventListener("dispose",m));const F=x.program;n.updateUBOMapping(T,F);const A=e.render.frame;r[T.id]!==A&&(h(T),r[T.id]=A)}function u(T){const x=d();T.__bindingPointIndex=x;const E=i.createBuffer(),F=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,F,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const x=s[T.id],E=T.uniforms,F=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,w=E.length;A<w;A++){const D=Array.isArray(E[A])?E[A]:[E[A]];for(let S=0,y=D.length;S<y;S++){const R=D[S];if(p(R,A,S,F)===!0){const Y=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let Z=0;for(let ne=0;ne<k.length;ne++){const $=k[ne],oe=_($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,Y+Z,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,Z),Z+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,x,E,F){const A=T.value,w=x+"_"+E;if(F[w]===void 0)return typeof A=="number"||typeof A=="boolean"?F[w]=A:F[w]=A.clone(),!0;{const D=F[w];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return F[w]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(T){const x=T.uniforms;let E=0;const F=16;for(let w=0,D=x.length;w<D;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,R=S.length;y<R;y++){const Y=S[y],k=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,ne=k.length;Z<ne;Z++){const $=k[Z],oe=_($),q=E%F;q!==0&&F-q<oe.boundary&&(E+=F-q),Y.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=oe.storage}}}const A=E%F;return A>0&&(E+=F-A),T.__size=E,T.__cache={},this}function _(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){const x=T.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class MA{constructor(e={}){const{canvas:t=Km(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=En,this.toneMappingExposure=1;const x=this;let E=!1,F=0,A=0,w=null,D=-1,S=null;const y=new et,R=new et;let Y=null;const k=new Le(0);let Z=0,ne=t.width,$=t.height,oe=1,q=null,ye=null;const Ae=new et(0,0,ne,$),be=new et(0,0,ne,$);let je=!1;const pt=new Sc;let K=!1,ce=!1;const Te=new _t,xe=new U,ke=new et,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Tt(){return w===null?oe:1}let b=n;function bt(M,P){return t.getContext(M,P)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",fe,!1),b===null){const P="webgl2";if(b=bt(P,M),b===null)throw bt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ut,mt,Ce,Rt,He,We,N,v,G,ie,se,te,Ie,me,Me,qe,ue,ve,Je,Ve,Se,Ge,Ke,yt;function L(){ut=new uv(b),ut.init(),Ge=new Yx(b,ut),mt=new sv(b,ut,e,Ge),Ce=new Wx(b),Rt=new fv(b),He=new Cx,We=new qx(b,ut,Ce,He,mt,Ge,Rt),N=new ov(x),v=new cv(x),G=new Mg(b),Ke=new nv(b,G),ie=new hv(b,G,Rt,Ke),se=new mv(b,ie,G,Rt),Je=new pv(b,mt,We),qe=new rv(He),te=new Rx(x,N,v,ut,mt,Ke,qe),Ie=new tM(x,He),me=new Px,Me=new Bx(ut),ve=new tv(x,N,v,Ce,se,h,l),ue=new kx(x,se,mt),yt=new nM(b,Rt,mt,Ce),Ve=new iv(b,ut,Rt),Se=new dv(b,ut,Rt),Rt.programs=te.programs,x.capabilities=mt,x.extensions=ut,x.properties=He,x.renderLists=me,x.shadowMap=ue,x.state=Ce,x.info=Rt}L();const he=new Qx(x,b);this.xr=he,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const M=ut.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ut.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(M){M!==void 0&&(oe=M,this.setSize(ne,$,!1))},this.getSize=function(M){return M.set(ne,$)},this.setSize=function(M,P,z=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=M,$=P,t.width=Math.floor(M*oe),t.height=Math.floor(P*oe),z===!0&&(t.style.width=M+"px",t.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(ne*oe,$*oe).floor()},this.setDrawingBufferSize=function(M,P,z){ne=M,$=P,oe=z,t.width=Math.floor(M*z),t.height=Math.floor(P*z),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(Ae)},this.setViewport=function(M,P,z,V){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,P,z,V),Ce.viewport(y.copy(Ae).multiplyScalar(oe).round())},this.getScissor=function(M){return M.copy(be)},this.setScissor=function(M,P,z,V){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,P,z,V),Ce.scissor(R.copy(be).multiplyScalar(oe).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){Ce.setScissorTest(je=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){ye=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(M=!0,P=!0,z=!0){let V=0;if(M){let O=!1;if(w!==null){const de=w.texture.format;O=de===mc||de===pc||de===fc}if(O){const de=w.texture.type,ge=de===Ti||de===Hi||de===Tr||de===Ks||de===hc||de===dc,Ee=ve.getClearColor(),Ne=ve.getClearAlpha(),Oe=Ee.r,Be=Ee.g,De=Ee.b;ge?(p[0]=Oe,p[1]=Be,p[2]=De,p[3]=Ne,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=Oe,g[1]=Be,g[2]=De,g[3]=Ne,b.clearBufferiv(b.COLOR,0,g))}else V|=b.COLOR_BUFFER_BIT}P&&(V|=b.DEPTH_BUFFER_BIT),z&&(V|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),Me.dispose(),He.dispose(),N.dispose(),v.dispose(),se.dispose(),Ke.dispose(),yt.dispose(),te.dispose(),he.dispose(),he.removeEventListener("sessionstart",$n),he.removeEventListener("sessionend",$c),Yi.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Rt.autoReset,P=ue.enabled,z=ue.autoUpdate,V=ue.needsUpdate,O=ue.type;L(),Rt.autoReset=M,ue.enabled=P,ue.autoUpdate=z,ue.needsUpdate=V,ue.type=O}function fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ue(M){const P=M.target;P.removeEventListener("dispose",Ue),Qe(P)}function Qe(M){Ct(M),He.remove(M)}function Ct(M){const P=He.get(M).programs;P!==void 0&&(P.forEach(function(z){te.releaseProgram(z)}),M.isShaderMaterial&&te.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,z,V,O,de){P===null&&(P=$e);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Ee=kp(M,P,z,V,O);Ce.setMaterial(V,ge);let Ne=z.index,Oe=1;if(V.wireframe===!0){if(Ne=ie.getWireframeAttribute(z),Ne===void 0)return;Oe=2}const Be=z.drawRange,De=z.attributes.position;let ot=Be.start*Oe,Et=(Be.start+Be.count)*Oe;de!==null&&(ot=Math.max(ot,de.start*Oe),Et=Math.min(Et,(de.start+de.count)*Oe)),Ne!==null?(ot=Math.max(ot,0),Et=Math.min(Et,Ne.count)):De!=null&&(ot=Math.max(ot,0),Et=Math.min(Et,De.count));const Nt=Et-ot;if(Nt<0||Nt===1/0)return;Ke.setup(O,V,Ee,z,Ne);let gn,at=Ve;if(Ne!==null&&(gn=G.get(Ne),at=Se,at.setIndex(gn)),O.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*Tt()),at.setMode(b.LINES)):at.setMode(b.TRIANGLES);else if(O.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),Ce.setLineWidth(Re*Tt()),O.isLineSegments?at.setMode(b.LINES):O.isLineLoop?at.setMode(b.LINE_LOOP):at.setMode(b.LINE_STRIP)}else O.isPoints?at.setMode(b.POINTS):O.isSprite&&at.setMode(b.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Re=O._multiDrawStarts,Wt=O._multiDrawCounts,lt=O._multiDrawCount,Pn=Ne?G.get(Ne).bytesPerElement:1,gs=He.get(V).currentProgram.getUniforms();for(let _n=0;_n<lt;_n++)gs.setValue(b,"_gl_DrawID",_n),at.render(Re[_n]/Pn,Wt[_n])}else if(O.isInstancedMesh)at.renderInstances(ot,Nt,O.count);else if(z.isInstancedBufferGeometry){const Re=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Wt=Math.min(z.instanceCount,Re);at.renderInstances(ot,Nt,Wt)}else at.render(ot,Nt)};function kt(M,P,z){M.transparent===!0&&M.side===gi&&M.forceSinglePass===!1?(M.side=cn,M.needsUpdate=!0,zr(M,P,z),M.side=Vi,M.needsUpdate=!0,zr(M,P,z),M.side=gi):zr(M,P,z)}this.compile=function(M,P,z=null){z===null&&(z=M),m=Me.get(z),m.init(P),T.push(m),z.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),M!==z&&M.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const V=new Set;return M.traverse(function(O){const de=O.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const Ee=de[ge];kt(Ee,z,O),V.add(Ee)}else kt(de,z,O),V.add(de)}),T.pop(),m=null,V},this.compileAsync=function(M,P,z=null){const V=this.compile(M,P,z);return new Promise(O=>{function de(){if(V.forEach(function(ge){He.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){O(M);return}setTimeout(de,10)}ut.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let rt=null;function li(M){rt&&rt(M)}function $n(){Yi.stop()}function $c(){Yi.start()}const Yi=new xd;Yi.setAnimationLoop(li),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(M){rt=M,he.setAnimationLoop(M),M===null?Yi.stop():Yi.start()},he.addEventListener("sessionstart",$n),he.addEventListener("sessionend",$c),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(P),P=he.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,P,w),m=Me.get(M,T.length),m.init(P),T.push(m),Te.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),pt.setFromProjectionMatrix(Te),ce=this.localClippingEnabled,K=qe.init(this.clippingPlanes,ce),_=me.get(M,f.length),_.init(),f.push(_),he.enabled===!0&&he.isPresenting===!0){const de=x.xr.getDepthSensingMesh();de!==null&&fa(de,P,-1/0,x.sortObjects)}fa(M,P,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,ye),Ze=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ze&&ve.addToRenderList(_,M),this.info.render.frame++,K===!0&&qe.beginShadows();const z=m.state.shadowsArray;ue.render(z,M,P),K===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,O=_.transmissive;if(m.setupLights(),P.isArrayCamera){const de=P.cameras;if(O.length>0)for(let ge=0,Ee=de.length;ge<Ee;ge++){const Ne=de[ge];Zc(V,O,M,Ne)}Ze&&ve.render(M);for(let ge=0,Ee=de.length;ge<Ee;ge++){const Ne=de[ge];Kc(_,M,Ne,Ne.viewport)}}else O.length>0&&Zc(V,O,M,P),Ze&&ve.render(M),Kc(_,M,P);w!==null&&(We.updateMultisampleRenderTarget(w),We.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(x,M,P),Ke.resetDefaultState(),D=-1,S=null,T.pop(),T.length>0?(m=T[T.length-1],K===!0&&qe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function fa(M,P,z,V){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||pt.intersectsSprite(M)){V&&ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const ge=se.update(M),Ee=M.material;Ee.visible&&_.push(M,ge,Ee,z,ke.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||pt.intersectsObject(M))){const ge=se.update(M),Ee=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ke.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ke.copy(ge.boundingSphere.center)),ke.applyMatrix4(M.matrixWorld).applyMatrix4(Te)),Array.isArray(Ee)){const Ne=ge.groups;for(let Oe=0,Be=Ne.length;Oe<Be;Oe++){const De=Ne[Oe],ot=Ee[De.materialIndex];ot&&ot.visible&&_.push(M,ge,ot,z,ke.z,De)}}else Ee.visible&&_.push(M,ge,Ee,z,ke.z,null)}}const de=M.children;for(let ge=0,Ee=de.length;ge<Ee;ge++)fa(de[ge],P,z,V)}function Kc(M,P,z,V){const O=M.opaque,de=M.transmissive,ge=M.transparent;m.setupLightsView(z),K===!0&&qe.setGlobalState(x.clippingPlanes,z),V&&Ce.viewport(y.copy(V)),O.length>0&&Br(O,P,z),de.length>0&&Br(de,P,z),ge.length>0&&Br(ge,P,z),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Zc(M,P,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Gi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?hs:Ti,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const de=m.state.transmissionRenderTarget[V.id],ge=V.viewport||y;de.setSize(ge.z,ge.w);const Ee=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(k),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),Ze?ve.render(z):x.clear();const Ne=x.toneMapping;x.toneMapping=En;const Oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),K===!0&&qe.setGlobalState(x.clippingPlanes,V),Br(M,z,V),We.updateMultisampleRenderTarget(de),We.updateRenderTargetMipmap(de),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let De=0,ot=P.length;De<ot;De++){const Et=P[De],Nt=Et.object,gn=Et.geometry,at=Et.material,Re=Et.group;if(at.side===gi&&Nt.layers.test(V.layers)){const Wt=at.side;at.side=cn,at.needsUpdate=!0,jc(Nt,z,V,gn,at,Re),at.side=Wt,at.needsUpdate=!0,Be=!0}}Be===!0&&(We.updateMultisampleRenderTarget(de),We.updateRenderTargetMipmap(de))}x.setRenderTarget(Ee),x.setClearColor(k,Z),Oe!==void 0&&(V.viewport=Oe),x.toneMapping=Ne}function Br(M,P,z){const V=P.isScene===!0?P.overrideMaterial:null;for(let O=0,de=M.length;O<de;O++){const ge=M[O],Ee=ge.object,Ne=ge.geometry,Oe=V===null?ge.material:V,Be=ge.group;Ee.layers.test(z.layers)&&jc(Ee,P,z,Ne,Oe,Be)}}function jc(M,P,z,V,O,de){M.onBeforeRender(x,P,z,V,O,de),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.transparent===!0&&O.side===gi&&O.forceSinglePass===!1?(O.side=cn,O.needsUpdate=!0,x.renderBufferDirect(z,P,V,O,M,de),O.side=Vi,O.needsUpdate=!0,x.renderBufferDirect(z,P,V,O,M,de),O.side=gi):x.renderBufferDirect(z,P,V,O,M,de),M.onAfterRender(x,P,z,V,O,de)}function zr(M,P,z){P.isScene!==!0&&(P=$e);const V=He.get(M),O=m.state.lights,de=m.state.shadowsArray,ge=O.state.version,Ee=te.getParameters(M,O.state,de,P,z),Ne=te.getProgramCacheKey(Ee);let Oe=V.programs;V.environment=M.isMeshStandardMaterial?P.environment:null,V.fog=P.fog,V.envMap=(M.isMeshStandardMaterial?v:N).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",Ue),Oe=new Map,V.programs=Oe);let Be=Oe.get(Ne);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===ge)return Qc(M,Ee),Be}else Ee.uniforms=te.getUniforms(M),M.onBeforeCompile(Ee,x),Be=te.acquireProgram(Ee,Ne),Oe.set(Ne,Be),V.uniforms=Ee.uniforms;const De=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=qe.uniform),Qc(M,Ee),V.needsLights=Xp(M),V.lightsStateVersion=ge,V.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function Jc(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=yo.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Qc(M,P){const z=He.get(M);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function kp(M,P,z,V,O){P.isScene!==!0&&(P=$e),We.resetTextureUnits();const de=P.fog,ge=V.isMeshStandardMaterial?P.environment:null,Ee=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Yn,Ne=(V.isMeshStandardMaterial?v:N).get(V.envMap||ge),Oe=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!z.morphAttributes.position,ot=!!z.morphAttributes.normal,Et=!!z.morphAttributes.color;let Nt=En;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Nt=x.toneMapping);const gn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=gn!==void 0?gn.length:0,Re=He.get(V),Wt=m.state.lights;if(K===!0&&(ce===!0||M!==S)){const An=M===S&&V.id===D;qe.setState(V,M,An)}let lt=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Wt.state.version||Re.outputColorSpace!==Ee||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==Ne||V.fog===!0&&Re.fog!==de||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==qe.numPlanes||Re.numIntersection!==qe.numIntersection)||Re.vertexAlphas!==Oe||Re.vertexTangents!==Be||Re.morphTargets!==De||Re.morphNormals!==ot||Re.morphColors!==Et||Re.toneMapping!==Nt||Re.morphTargetsCount!==at)&&(lt=!0):(lt=!0,Re.__version=V.version);let Pn=Re.currentProgram;lt===!0&&(Pn=zr(V,P,O));let gs=!1,_n=!1,pa=!1;const Lt=Pn.getUniforms(),bi=Re.uniforms;if(Ce.useProgram(Pn.program)&&(gs=!0,_n=!0,pa=!0),V.id!==D&&(D=V.id,_n=!0),gs||S!==M){Lt.setValue(b,"projectionMatrix",M.projectionMatrix),Lt.setValue(b,"viewMatrix",M.matrixWorldInverse);const An=Lt.map.cameraPosition;An!==void 0&&An.setValue(b,xe.setFromMatrixPosition(M.matrixWorld)),mt.logarithmicDepthBuffer&&Lt.setValue(b,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Lt.setValue(b,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,_n=!0,pa=!0)}if(O.isSkinnedMesh){Lt.setOptional(b,O,"bindMatrix"),Lt.setOptional(b,O,"bindMatrixInverse");const An=O.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Lt.setValue(b,"boneTexture",An.boneTexture,We))}O.isBatchedMesh&&(Lt.setOptional(b,O,"batchingTexture"),Lt.setValue(b,"batchingTexture",O._matricesTexture,We),Lt.setOptional(b,O,"batchingIdTexture"),Lt.setValue(b,"batchingIdTexture",O._indirectTexture,We),Lt.setOptional(b,O,"batchingColorTexture"),O._colorsTexture!==null&&Lt.setValue(b,"batchingColorTexture",O._colorsTexture,We));const ma=z.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0)&&Je.update(O,z,Pn),(_n||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,Lt.setValue(b,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(bi.envMap.value=Ne,bi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&P.environment!==null&&(bi.envMapIntensity.value=P.environmentIntensity),_n&&(Lt.setValue(b,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Wp(bi,pa),de&&V.fog===!0&&Ie.refreshFogUniforms(bi,de),Ie.refreshMaterialUniforms(bi,V,oe,$,m.state.transmissionRenderTarget[M.id]),yo.upload(b,Jc(Re),bi,We)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(yo.upload(b,Jc(Re),bi,We),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Lt.setValue(b,"center",O.center),Lt.setValue(b,"modelViewMatrix",O.modelViewMatrix),Lt.setValue(b,"normalMatrix",O.normalMatrix),Lt.setValue(b,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const An=V.uniformsGroups;for(let ga=0,qp=An.length;ga<qp;ga++){const eu=An[ga];yt.update(eu,Pn),yt.bind(eu,Pn)}}return Pn}function Wp(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Xp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,P,z){He.get(M.texture).__webglTexture=P,He.get(M.depthTexture).__webglTexture=z;const V=He.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,P){const z=He.get(M);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,z=0){w=M,F=P,A=z;let V=!0,O=null,de=!1,ge=!1;if(M){const Ne=He.get(M);Ne.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(b.FRAMEBUFFER,null),V=!1):Ne.__webglFramebuffer===void 0?We.setupRenderTarget(M):Ne.__hasExternalTextures&&We.rebindTextures(M,He.get(M.texture).__webglTexture,He.get(M.depthTexture).__webglTexture);const Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);const Be=He.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[P])?O=Be[P][z]:O=Be[P],de=!0):M.samples>0&&We.useMultisampledRTT(M)===!1?O=He.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[z]:O=Be,y.copy(M.viewport),R.copy(M.scissor),Y=M.scissorTest}else y.copy(Ae).multiplyScalar(oe).floor(),R.copy(be).multiplyScalar(oe).floor(),Y=je;if(Ce.bindFramebuffer(b.FRAMEBUFFER,O)&&V&&Ce.drawBuffers(M,O),Ce.viewport(y),Ce.scissor(R),Ce.setScissorTest(Y),de){const Ne=He.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+P,Ne.__webglTexture,z)}else if(ge){const Ne=He.get(M.texture),Oe=P||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ne.__webglTexture,z||0,Oe)}D=-1},this.readRenderTargetPixels=function(M,P,z,V,O,de,ge){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=He.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Ce.bindFramebuffer(b.FRAMEBUFFER,Ee);try{const Ne=M.texture,Oe=Ne.format,Be=Ne.type;if(!mt.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-V&&z>=0&&z<=M.height-O&&b.readPixels(P,z,V,O,Ge.convert(Oe),Ge.convert(Be),de)}finally{const Ne=w!==null?He.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,P,z,V,O,de,ge){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=He.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Ce.bindFramebuffer(b.FRAMEBUFFER,Ee);try{const Ne=M.texture,Oe=Ne.format,Be=Ne.type;if(!mt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=M.width-V&&z>=0&&z<=M.height-O){const De=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,De),b.bufferData(b.PIXEL_PACK_BUFFER,de.byteLength,b.STREAM_READ),b.readPixels(P,z,V,O,Ge.convert(Oe),Ge.convert(Be),0),b.flush();const ot=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);await Zm(b,ot,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,De),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,de)}finally{b.deleteBuffer(De),b.deleteSync(ot)}return de}}finally{const Ne=w!==null?He.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(M,P=null,z=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,M=arguments[1]);const V=Math.pow(2,-z),O=Math.floor(M.image.width*V),de=Math.floor(M.image.height*V),ge=P!==null?P.x:0,Ee=P!==null?P.y:0;We.setTexture2D(M,0),b.copyTexSubImage2D(b.TEXTURE_2D,z,0,0,ge,Ee,O,de),Ce.unbindTexture()},this.copyTextureToTexture=function(M,P,z=null,V=null,O=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],P=arguments[2],O=arguments[3]||0,z=null);let de,ge,Ee,Ne,Oe,Be;z!==null?(de=z.max.x-z.min.x,ge=z.max.y-z.min.y,Ee=z.min.x,Ne=z.min.y):(de=M.image.width,ge=M.image.height,Ee=0,Ne=0),V!==null?(Oe=V.x,Be=V.y):(Oe=0,Be=0);const De=Ge.convert(P.format),ot=Ge.convert(P.type);We.setTexture2D(P,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,P.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,P.unpackAlignment);const Et=b.getParameter(b.UNPACK_ROW_LENGTH),Nt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),gn=b.getParameter(b.UNPACK_SKIP_PIXELS),at=b.getParameter(b.UNPACK_SKIP_ROWS),Re=b.getParameter(b.UNPACK_SKIP_IMAGES),Wt=M.isCompressedTexture?M.mipmaps[O]:M.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Wt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Wt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ee),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ne),M.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,O,Oe,Be,de,ge,De,ot,Wt.data):M.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,O,Oe,Be,Wt.width,Wt.height,De,Wt.data):b.texSubImage2D(b.TEXTURE_2D,O,Oe,Be,de,ge,De,ot,Wt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Et),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Nt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,gn),b.pixelStorei(b.UNPACK_SKIP_ROWS,at),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Re),O===0&&P.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(M,P,z=null,V=null,O=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,M=arguments[2],P=arguments[3],O=arguments[4]||0);let de,ge,Ee,Ne,Oe,Be,De,ot,Et;const Nt=M.isCompressedTexture?M.mipmaps[O]:M.image;z!==null?(de=z.max.x-z.min.x,ge=z.max.y-z.min.y,Ee=z.max.z-z.min.z,Ne=z.min.x,Oe=z.min.y,Be=z.min.z):(de=Nt.width,ge=Nt.height,Ee=Nt.depth,Ne=0,Oe=0,Be=0),V!==null?(De=V.x,ot=V.y,Et=V.z):(De=0,ot=0,Et=0);const gn=Ge.convert(P.format),at=Ge.convert(P.type);let Re;if(P.isData3DTexture)We.setTexture3D(P,0),Re=b.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)We.setTexture2DArray(P,0),Re=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,P.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,P.unpackAlignment);const Wt=b.getParameter(b.UNPACK_ROW_LENGTH),lt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Pn=b.getParameter(b.UNPACK_SKIP_PIXELS),gs=b.getParameter(b.UNPACK_SKIP_ROWS),_n=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Nt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Nt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ne),b.pixelStorei(b.UNPACK_SKIP_ROWS,Oe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Be),M.isDataTexture||M.isData3DTexture?b.texSubImage3D(Re,O,De,ot,Et,de,ge,Ee,gn,at,Nt.data):P.isCompressedArrayTexture?b.compressedTexSubImage3D(Re,O,De,ot,Et,de,ge,Ee,gn,Nt.data):b.texSubImage3D(Re,O,De,ot,Et,de,ge,Ee,gn,at,Nt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Wt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,lt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Pn),b.pixelStorei(b.UNPACK_SKIP_ROWS,gs),b.pixelStorei(b.UNPACK_SKIP_IMAGES,_n),O===0&&P.generateMipmaps&&b.generateMipmap(Re),Ce.unbindTexture()},this.initRenderTarget=function(M){He.get(M).__webglFramebuffer===void 0&&We.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?We.setTextureCube(M,0):M.isData3DTexture?We.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?We.setTexture2DArray(M,0):We.setTexture2D(M,0),Ce.unbindTexture()},this.resetState=function(){F=0,A=0,w=null,Ce.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gc?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===qo?"display-p3":"srgb"}}class yA extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ed{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return vc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new U;class Ec{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class iM extends tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Nd extends Rn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ad extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class wd extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class bd extends en{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Jt,this.minFilter=Jt,this.generateMipmaps=!1,this.needsUpdate=!0}}class sM extends tn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Le(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Rd extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rM extends Rd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class oM extends tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aM extends tn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class lM extends tn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class cM extends tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uM extends tn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Le(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ei,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cd extends Ad{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const ju={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hM{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const dM=new hM;class Nc{constructor(e){this.manager=e!==void 0?e:dM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Nc.DEFAULT_MATERIAL_NAME="__DEFAULT";class fM extends Nc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ju.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Er("img");function l(){u(),ju.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class SA extends Nc{constructor(e){super(e)}load(e,t,n,s){const r=new en,o=new fM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ir extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class pM extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ka=new _t,Ju=new U,Qu=new U;class Ac{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mM extends Ac{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ld extends ir{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const eh=new _t,hr=new U,Wa=new U;class gM extends Ac{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh)}}class _M extends ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vM extends Ac{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xM extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new vM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class MM extends ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yM extends ir{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class SM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=th();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function th(){return(typeof performance>"u"?Date:performance).now()}class TM extends Ed{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);const EM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Zo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const NM=new $o(-1,1,1,-1,0,1);class AM extends wi{constructor(){super(),this.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wn([0,2,0,0,2,0],2))}}const wM=new AM;class bM{constructor(e){this._mesh=new Gn(wM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class RM extends Zo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof si?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gd.clone(e.uniforms),this.material=new si({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new bM(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nh extends Zo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class CM extends Zo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class TA{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new we);this._width=n.width,this._height=n.height,t=new Gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hs}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new RM(EM),this.copyPass.material.blending=yi,this.clock=new SM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}nh!==void 0&&(o instanceof nh?n=!0:o instanceof CM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class EA extends Zo{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const ih={VERTEX:"vertex",FRAGMENT:"fragment"},tt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},jo=["x","y","z","w"];function Pd(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of Po(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*Po(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}function zi(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function Id(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Le(...e):t==="vec2"?new we(...e):t==="vec3"?new U(...e):t==="vec4"?new et(...e):t==="mat3"?new Xe(...e):t==="mat4"?new _t(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?Ud(e[0]):null}function Dd(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Ud(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const sh=new Map;let LM=0;class Pe extends Xi{constructor(e=null){super(),this.nodeType=e,this.updateType=tt.NONE,this.updateBeforeType=tt.NONE,this.updateAfterType=tt.NONE,this.uuid=ld.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.global=!1,this.isNode=!0,Object.defineProperty(this,"id",{value:LM++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,tt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,tt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,tt.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(const{childNode:e}of Po(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=Pd(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getUpdateAfterType(){return this.updateAfterType}getElementType(e){const t=this.getNodeType(e);return e.getElementType(t)}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);let n=0;for(const s of this.getChildren())t["node"+n++]=s;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}updateAfter(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const l of Object.values(o))l&&l.isNode===!0&&l.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),l=e.getDataFromNode(this);s=l.snippet,s===void 0&&(s=this.generate(e)||"",l.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return Po(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:o}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=o.toJSON(e.meta).uuid):n[s]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];s[r]=t[o]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}if(s){const a=o(e.textures),l=o(e.images),c=o(e.nodes);a.length>0&&(r.textures=a),l.length>0&&(r.images=l),c.length>0&&(r.nodes=c)}return r}}function J(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(sh.has(i)){console.warn(`Redefinition of node class ${i}`);return}sh.set(i,e),e.type=i}class it extends Pe{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(s!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,s),a=e.getVarFromNode(this,null,s),l=e.getPropertyName(a);return e.addLineFlowCode(`${l} = ${o}`),r.snippet=o,r.propertyName=l,e.format(r.propertyName,s,t)}}return super.build(e,t)}}J("TempNode",it);class sr extends Pe{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}J("ArrayElementNode",sr);class wc extends Pe{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}J("ConvertNode",wc);class Od extends it{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),o=[];for(const l of s){let c=l.build(e);const u=e.getComponentType(l.getNodeType(e));u!==r&&(c=e.format(c,u,r)),o.push(c)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}J("JoinNode",Od);const PM=jo.join("");class Wl extends Pe{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(jo.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const l=n.build(e,o);this.components.length===s&&this.components===PM.slice(0,this.components.length)?r=e.format(l,o,t):r=e.format(`${l}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}J("SplitNode",Wl);class Fd extends it{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=s.build(e,o),l=t.build(e,r),c=e.getTypeLength(r),u=[];for(let d=0;d<c;d++){const h=jo[d];h===n[0]?(u.push(a),d+=n.length-1):u.push(l+"."+h)}return`${e.getType(r)}( ${u.join(", ")} )`}}J("SetNode",Fd);class Jo extends Pe{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?zi(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=zi(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=Dd(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Id(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}J("InputNode",Jo);class ai extends Jo{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}J("ConstNode",ai);let er=null;const Us=new Map;function I(i,e){if(Us.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);Us.set(i,e)}const rh=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Bd={setup(i,e){const t=e.shift();return i(ta(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(er.assign(t,...n),t);if(Us.has(e)){const n=Us.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&Us.has(e.slice(0,e.length-6))){const n=Us.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=rh(e),re(new Wl(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=rh(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>re(new Fd(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),re(new Wl(i,e));if(/^\d+$/.test(e)===!0)return re(new sr(t,new ai(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},Xa=new WeakMap,oh=new WeakMap,IM=function(i,e=null){const t=zi(i);if(t==="node"){let n=Xa.get(i);return n===void 0&&(n=new Proxy(i,Bd),Xa.set(i,n),Xa.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return re(Xl(i,e));if(t==="shader")return ae(i)}return i},DM=function(i,e=null){for(const t in i)i[t]=re(i[t],e);return i},UM=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=re(i[n],e);return i},OM=function(i,e=null,t=null,n=null){const s=r=>re(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...Hs(r))):t!==null?(t=re(t),(...r)=>s(new i(e,...Hs(r),t))):(...r)=>s(new i(e,...Hs(r)))},FM=function(i,...e){return re(new i(...Hs(e)))};class BM extends Pe{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode===null&&(t.outputNode=this.setupOutput(e)),t.outputNode.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=oh.get(e.constructor);o===void 0&&(o=new WeakMap,oh.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=re(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),re(a.call(n))}const s=t.jsFunc,r=n!==null?s(n,e.stack,e):s(e.stack,e);return re(r)}setup(e){const{outputNode:t}=e.getNodeProperties(this);return t||this.setupOutput(e)}setupOutput(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class zM extends Pe{constructor(e){super(),this.jsFunc=e,this.layout=null,this.global=!0}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return ta(e),re(new BM(this,e))}setup(){return this.call()}}const VM=[!1,!0],HM=[0,1,2,3],GM=[-1,-2],zd=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],bc=new Map;for(const i of VM)bc.set(i,new ai(i));const Rc=new Map;for(const i of HM)Rc.set(i,new ai(i,"uint"));const Cc=new Map([...Rc].map(i=>new ai(i.value,"int")));for(const i of GM)Cc.set(i,new ai(i,"int"));const Qo=new Map([...Cc].map(i=>new ai(i.value)));for(const i of zd)Qo.set(i,new ai(i));for(const i of zd)Qo.set(-i,new ai(-i));const ea={bool:bc,uint:Rc,ints:Cc,float:Qo},ah=new Map([...bc,...Qo]),Xl=(i,e)=>ah.has(i)?ah.get(i):i.isNode===!0?i:new ai(i,e),kM=i=>{try{return i.getNodeType()}catch{return}},ft=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[Id(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return re(e.get(t[0]));if(t.length===1){const s=Xl(t[0],i);return kM(s)===i?re(s):re(new wc(s,i))}const n=t.map(s=>Xl(s));return re(new Od(n,i))}},lh=i=>i&&i.value,WM=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function yr(i){return new Proxy(new zM(i),Bd)}const re=(i,e=null)=>IM(i,e),ta=(i,e=null)=>new DM(i,e),Hs=(i,e=null)=>new UM(i,e),B=(...i)=>new OM(...i),le=(...i)=>new FM(...i),ae=i=>{const e=new yr(i),t=(...n)=>{let s;return ta(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};J("ShaderNode",yr);I("toGlobal",i=>(i.global=!0,i));const ch=i=>{er=i},XM=()=>er,wt=(...i)=>er.if(...i);function qM(i){return er&&er.add(i),i}I("append",qM);const YM=new ft("color"),X=new ft("float",ea.float),Ut=new ft("int",ea.ints),$M=new ft("uint",ea.uint),KM=new ft("bool",ea.bool),ee=new ft("vec2"),Fi=new ft("ivec2"),ZM=new ft("uvec2"),jM=new ft("bvec2"),H=new ft("vec3"),JM=new ft("ivec3"),QM=new ft("uvec3"),ey=new ft("bvec3"),_e=new ft("vec4"),ty=new ft("ivec4"),ny=new ft("uvec4"),iy=new ft("bvec4"),Lc=new ft("mat2"),sy=new ft("imat2"),ry=new ft("umat2"),oy=new ft("bmat2"),nn=new ft("mat3"),ay=new ft("imat3"),ly=new ft("umat3"),cy=new ft("bmat3"),Gs=new ft("mat4"),uy=new ft("imat4"),hy=new ft("umat4"),dy=new ft("bmat4");I("toColor",YM);I("toFloat",X);I("toInt",Ut);I("toUint",$M);I("toBool",KM);I("toVec2",ee);I("toIvec2",Fi);I("toUvec2",ZM);I("toBvec2",jM);I("toVec3",H);I("toIvec3",JM);I("toUvec3",QM);I("toBvec3",ey);I("toVec4",_e);I("toIvec4",ty);I("toUvec4",ny);I("toBvec4",iy);I("toMat2",Lc);I("toImat2",sy);I("toUmat2",ry);I("toBmat2",oy);I("toMat3",nn);I("toImat3",ay);I("toUmat3",ly);I("toBmat3",cy);I("toMat4",Gs);I("toImat4",uy);I("toUmat4",hy);I("toBmat4",dy);const fy=B(sr),py=(i,e)=>re(new wc(re(i),e));I("element",fy);I("convert",py);class Vd extends it{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return jo.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),l=s.build(e,o),c=s.getNodeType(e),u=e.getDataFromNode(this);let d;if(u.initialized===!0)t!=="void"&&(d=a);else if(r){const h=e.getVarFromNode(this,null,o),p=e.getPropertyName(h);e.addLineFlowCode(`${p} = ${l}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const m=n.components[_];e.addLineFlowCode(`${g}.${m} = ${p}[ ${_} ]`)}t!=="void"&&(d=a)}else d=`${a} = ${l}`,(t==="void"||c==="void")&&(e.addLineFlowCode(d),t!=="void"&&(d=a));return u.initialized=!0,e.format(d,o,t)}}const my=B(Vd);J("AssignNode",Vd);I("assign",my);class Hd extends Pe{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}setupVarying(e){const t=e.getNodeProperties(this);let n=t.varying;if(n===void 0){const s=this.name,r=this.getNodeType(e);t.varying=n=e.getVaryingFromNode(this,s,r),t.node=this.node}return n.needsInterpolation||(n.needsInterpolation=e.shaderStage==="fragment"),n}setup(e){this.setupVarying(e)}analyze(e){return this.setupVarying(e),this.node.analyze(e)}generate(e){const t=e.getNodeProperties(this),n=this.setupVarying(e);if(t.propertyName===void 0){const s=this.getNodeType(e),r=e.getPropertyName(n,ih.VERTEX);e.flowNodeFromShaderStage(ih.VERTEX,this.node,s,r),t.propertyName=r}return e.getPropertyName(n)}}const It=B(Hd);I("varying",It);J("VaryingNode",Hd);class Pc extends Pe{constructor(e,t=null,n=null){super(t),this.defaultNode=n,this.global=!0,this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):It(this).build(e,n)}else{console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`);const{defaultNode:r}=this;return r!==null?r.build(e,n):e.generateConst(n)}}}const jt=(i,e,t)=>re(new Pc(i,e,re(t)));J("AttributeNode",Pc);class Gd extends Pe{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const kd=B(Gd);I("bypass",kd);J("BypassNode",Gd);class Wd extends Pe{constructor(e,t=!0){super(),this.node=e,this.parent=t,this.isCacheNode=!0}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=e.getCacheFromNode(this,parent);e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const So=(i,...e)=>re(new Wd(re(i),...e));I("cache",So);J("CacheNode",Wd);class Ic extends Pe{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}analyze(e){this.node.build(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Sr=B(Ic),gy=(i,e)=>Sr(i,{label:e});I("context",Sr);I("label",gy);J("ContextNode",Ic);class hn extends Pe{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===hn.VERTEX)s=e.getVertexIndex();else if(n===hn.INSTANCE)s=e.getInstanceIndex();else if(n===hn.DRAW)s=e.getDrawIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=It(this).build(e,t),r}}hn.VERTEX="vertex";hn.INSTANCE="instance";hn.DRAW="draw";const _y=le(hn,hn.VERTEX),Dc=le(hn,hn.INSTANCE),vy=le(hn,hn.DRAW);J("IndexNode",hn);class na{start(){}finish(){}direct(){}directRectArea(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class Xd extends Pe{constructor(e,t=null){super(),this.node=e,this.name=t,this.global=!0,this.isVarNode=!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),o=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const Io=B(Xd);I("temp",Io);I("toVar",(...i)=>Io(...i).append());J("VarNode",Xd);class st extends Pe{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const St=(i,e)=>re(new st(i,e)),Kn=(i,e)=>re(new st(i,e,!0)),gt=le(st,"vec4","DiffuseColor"),_i=le(st,"float","Roughness"),Do=le(st,"float","Metalness"),ql=le(st,"float","Clearcoat"),Uo=le(st,"float","ClearcoatRoughness"),Os=le(st,"vec3","Sheen"),Uc=le(st,"float","SheenRoughness"),Oc=le(st,"float","Iridescence"),qd=le(st,"float","IridescenceIOR"),Yd=le(st,"float","IridescenceThickness"),Yl=le(st,"float","AlphaT"),is=le(st,"float","Anisotropy"),To=le(st,"vec3","AnisotropyT"),ks=le(st,"vec3","AnisotropyB"),yn=le(st,"color","SpecularColor"),Oo=le(st,"float","SpecularF90"),$l=le(st,"float","Shininess"),xy=le(st,"vec4","Output"),Ws=le(st,"float","dashSize"),Fo=le(st,"float","gapSize");le(st,"float","pointWidth");const Eo=le(st,"float","IOR"),Kl=le(st,"float","Transmission"),$d=le(st,"float","Thickness"),Kd=le(st,"float","AttenuationDistance"),Zd=le(st,"color","AttenuationColor"),jd=le(st,"float","Dispersion");J("PropertyNode",st);class My extends st{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}J("ParameterNode",My);class Fc extends Pe{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}B(Fc);J("CodeNode",Fc);class yy extends Fc{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,o=e.getCodeFromNode(this,r);s!==""&&(o.name=s);const a=e.getPropertyName(o);let l=this.getNodeFunction(e).getCode(a);const c=this.keywords,u=Object.keys(c);if(u.length>0)for(const d of u){const h=new RegExp(`\\b${d}\\b`,"g"),p=c[d].build(e,"property");l=l.replace(h,p)}return o.code=l+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}J("FunctionNode",yy);class Bc extends Pe{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const Sy=i=>new Bc(i),zc=i=>new Bc(i,!0);zc("frame");zc("render");const Ty=Sy("object");J("UniformGroupNode",Bc);class ds extends Jo{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.name="",this.groupNode=Ty}label(e){return this.name=e,this}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const r=e(s,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,this.name||e.context.label),l=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(l,n,t)}}const Fe=(i,e)=>{const t=WM(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return re(new ds(n,t))};J("UniformNode",ds);const mn=i=>jt("uv"+(i>0?i:""),"vec2");class Jd extends Pe{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const Bo=B(Jd);I("textureSize",Bo);J("TextureSizeNode",Jd);class xt extends it{constructor(e,t,n,...s){if(super(),s.length>0){let r=new xt(e,t,n);for(let o=0;o<s.length-1;o++)r=new xt(e,r,s[o]);t=r,n=s[s.length-1]}this.op=e,this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=s.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const l=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return l>1?`bvec${l}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,l=null;o!=="void"?(a=s.getNodeType(e),l=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?l=a:a=l="float":n===">>"||n==="<<"?(a=o,l=e.changeComponentType(l,"uint")):e.isMatrix(a)&&e.isVector(l)?l=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(l)?a=e.getVectorFromMatrix(l):a=l=o):a=l=o;const c=s.build(e,a),u=typeof r<"u"?r.build(e,l):null,d=e.getTypeLength(t),h=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&d>1?e.format(`${e.getMethod("lessThan")}( ${c}, ${u} )`,o,t):n==="<="&&d>1?e.format(`${e.getMethod("lessThanEqual")}( ${c}, ${u} )`,o,t):n===">"&&d>1?e.format(`${e.getMethod("greaterThan")}( ${c}, ${u} )`,o,t):n===">="&&d>1?e.format(`${e.getMethod("greaterThanEqual")}( ${c}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${c})`,a,t):h?e.format(`${h}( ${c}, ${u} )`,o,t):e.format(`( ${c} ${n} ${u} )`,o,t);if(a!=="void")return h?e.format(`${h}( ${c}, ${u} )`,o,t):e.format(`${c} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const fn=B(xt,"+"),ii=B(xt,"-"),ct=B(xt,"*"),Ai=B(xt,"/"),Ey=B(xt,"%"),Ny=B(xt,"=="),Ay=B(xt,"!="),wy=B(xt,"<"),by=B(xt,">"),Ry=B(xt,"<="),Cy=B(xt,">="),Ly=B(xt,"&&"),Py=B(xt,"||"),Iy=B(xt,"!"),Dy=B(xt,"^^"),Uy=B(xt,"&"),Oy=B(xt,"~"),Fy=B(xt,"|"),By=B(xt,"^"),zy=B(xt,"<<"),Vy=B(xt,">>");I("add",fn);I("sub",ii);I("mul",ct);I("div",Ai);I("remainder",Ey);I("equal",Ny);I("notEqual",Ay);I("lessThan",wy);I("greaterThan",by);I("lessThanEqual",Ry);I("greaterThanEqual",Cy);I("and",Ly);I("or",Py);I("not",Iy);I("xor",Dy);I("bitAnd",Uy);I("bitNot",Oy);I("bitOr",Fy);I("bitXor",By);I("shiftLeft",zy);I("shiftRight",Vy);J("OperatorNode",xt);class C extends it{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return r>o&&r>a?t:o>a?n:a>r?s:t}getNodeType(e){const t=this.method;return t===C.LENGTH||t===C.DISTANCE||t===C.DOT?"float":t===C.CROSS?"vec3":t===C.ALL?"bool":t===C.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===C.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,l=this.cNode,c=e.renderer.isWebGLRenderer===!0;if(n===C.TRANSFORM_DIRECTION){let u=o,d=a;e.isMatrix(u.getNodeType(e))?d=_e(H(d),0):u=_e(H(u),0);const h=ct(u,d).xyz;return Nr(h).build(e,t)}else{if(n===C.NEGATE)return e.format("( - "+o.build(e,r)+" )",s,t);if(n===C.ONE_MINUS)return ii(1,o).build(e,t);if(n===C.RECIPROCAL)return Ai(1,o).build(e,t);if(n===C.DIFFERENCE)return Jn(ii(o,a)).build(e,t);{const u=[];return n===C.CROSS||n===C.MOD?u.push(o.build(e,s),a.build(e,s)):n===C.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):c&&(n===C.MIN||n===C.MAX)||n===C.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===C.REFRACT?u.push(o.build(e,r),a.build(e,r),l.build(e,"float")):n===C.MIX?u.push(o.build(e,r),a.build(e,r),l.build(e,e.getTypeLength(l.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),l!==null&&u.push(l.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}C.ALL="all";C.ANY="any";C.EQUALS="equals";C.RADIANS="radians";C.DEGREES="degrees";C.EXP="exp";C.EXP2="exp2";C.LOG="log";C.LOG2="log2";C.SQRT="sqrt";C.INVERSE_SQRT="inversesqrt";C.FLOOR="floor";C.CEIL="ceil";C.NORMALIZE="normalize";C.FRACT="fract";C.SIN="sin";C.COS="cos";C.TAN="tan";C.ASIN="asin";C.ACOS="acos";C.ATAN="atan";C.ABS="abs";C.SIGN="sign";C.LENGTH="length";C.NEGATE="negate";C.ONE_MINUS="oneMinus";C.DFDX="dFdx";C.DFDY="dFdy";C.ROUND="round";C.RECIPROCAL="reciprocal";C.TRUNC="trunc";C.FWIDTH="fwidth";C.BITCAST="bitcast";C.TRANSPOSE="transpose";C.ATAN2="atan2";C.MIN="min";C.MAX="max";C.MOD="mod";C.STEP="step";C.REFLECT="reflect";C.DISTANCE="distance";C.DIFFERENCE="difference";C.DOT="dot";C.CROSS="cross";C.POW="pow";C.TRANSFORM_DIRECTION="transformDirection";C.MIX="mix";C.CLAMP="clamp";C.REFRACT="refract";C.SMOOTHSTEP="smoothstep";C.FACEFORWARD="faceforward";const Qd=X(1e-6);X(1e6);const uh=X(Math.PI);X(Math.PI*2);const ef=B(C,C.ALL),Hy=B(C,C.ANY),Gy=B(C,C.EQUALS),ky=B(C,C.RADIANS),Wy=B(C,C.DEGREES),tf=B(C,C.EXP),Zl=B(C,C.EXP2),nf=B(C,C.LOG),ia=B(C,C.LOG2),Xy=B(C,C.SQRT),qy=B(C,C.INVERSE_SQRT),sa=B(C,C.FLOOR),sf=B(C,C.CEIL),Nr=B(C,C.NORMALIZE),ra=B(C,C.FRACT),Tn=B(C,C.SIN),jn=B(C,C.COS),Yy=B(C,C.TAN),$y=B(C,C.ASIN),Ky=B(C,C.ACOS),Zy=B(C,C.ATAN),Jn=B(C,C.ABS),Vc=B(C,C.SIGN),Xs=B(C,C.LENGTH),jy=B(C,C.NEGATE),Jy=B(C,C.ONE_MINUS),Qy=B(C,C.DFDX),eS=B(C,C.DFDY),tS=B(C,C.ROUND),nS=B(C,C.RECIPROCAL),iS=B(C,C.TRUNC),sS=B(C,C.FWIDTH);B(C,C.BITCAST);const rS=B(C,C.TRANSPOSE),oS=B(C,C.ATAN2),vi=B(C,C.MIN),ln=B(C,C.MAX),aS=B(C,C.MOD),lS=B(C,C.STEP),cS=B(C,C.REFLECT),uS=B(C,C.DISTANCE),hS=B(C,C.DIFFERENCE),oa=B(C,C.DOT),rf=B(C,C.CROSS),xi=B(C,C.POW),of=B(C,C.POW,2),dS=B(C,C.POW,3),fS=B(C,C.POW,4),pS=B(C,C.TRANSFORM_DIRECTION),mS=i=>ct(Vc(i),xi(Jn(i),1/3)),gS=i=>oa(i,i),Dt=B(C,C.MIX),ls=(i,e=0,t=1)=>re(new C(C.CLAMP,re(i),re(e),re(t))),_S=i=>ls(i),af=B(C,C.REFRACT),ri=B(C,C.SMOOTHSTEP),vS=B(C,C.FACEFORWARD),xS=(i,e,t)=>Dt(e,t,i),MS=(i,e,t)=>ri(e,t,i);I("all",ef);I("any",Hy);I("equals",Gy);I("radians",ky);I("degrees",Wy);I("exp",tf);I("exp2",Zl);I("log",nf);I("log2",ia);I("sqrt",Xy);I("inverseSqrt",qy);I("floor",sa);I("ceil",sf);I("normalize",Nr);I("fract",ra);I("sin",Tn);I("cos",jn);I("tan",Yy);I("asin",$y);I("acos",Ky);I("atan",Zy);I("abs",Jn);I("sign",Vc);I("length",Xs);I("lengthSq",gS);I("negate",jy);I("oneMinus",Jy);I("dFdx",Qy);I("dFdy",eS);I("round",tS);I("reciprocal",nS);I("trunc",iS);I("fwidth",sS);I("atan2",oS);I("min",vi);I("max",ln);I("mod",aS);I("step",lS);I("reflect",cS);I("distance",uS);I("dot",oa);I("cross",rf);I("pow",xi);I("pow2",of);I("pow3",dS);I("pow4",fS);I("transformDirection",pS);I("mix",xS);I("clamp",ls);I("refract",af);I("smoothstep",MS);I("faceForward",vS);I("difference",hS);I("saturate",_S);I("cbrt",mS);I("transpose",rS);J("MathNode",C);const yS=ae(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=Dt(n,s,r);return _e(o,e.a)}),SS=ae(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),r=t.lessThanEqual(.0031308),o=Dt(n,s,r);return _e(o,e.a)}),hh=i=>{let e=null;return i===Yn?e="Linear":i===Fn&&(e="sRGB"),e},lf=(i,e)=>hh(i)+"To"+hh(e);class pn extends it{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===pn.LINEAR_TO_LINEAR?t:TS[e]({value:t})}}pn.LINEAR_TO_LINEAR="LinearToLinear";pn.LINEAR_TO_sRGB="LinearTosRGB";pn.sRGB_TO_LINEAR="sRGBToLinear";const TS={[pn.LINEAR_TO_sRGB]:SS,[pn.sRGB_TO_LINEAR]:yS},ES=(i,e)=>re(new pn(lf(Yn,e),re(i))),cf=(i,e)=>re(new pn(lf(e,Yn),re(i))),NS=B(pn,pn.LINEAR_TO_sRGB),AS=B(pn,pn.sRGB_TO_LINEAR);I("linearTosRGB",NS);I("sRGBToLinear",AS);I("linearToColorSpace",ES);I("colorSpaceToLinear",cf);J("ColorSpaceNode",pn);class uf extends Pe{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const aa=B(uf);J("ExpressionNode",uf);class hf extends ds{constructor(e){super(0),this.textureNode=e,this.updateType=tt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const wS=B(hf);J("MaxMipLevelNode",hf);class fs extends ds{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=tt.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":this.value.type===Hi?"uvec4":this.value.type===Xo?"ivec4":"vec4"}getInputType(){return"texture"}getDefaultUV(){return mn(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return Fe(t.matrix).mul(H(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?tt.FRAME:tt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,o,a){const l=this.value;let c;return s?c=e.generateTextureLevel(l,t,n,s,r):a?c=e.generateTextureGrad(l,t,n,a,r):o?c=e.generateTextureCompare(l,t,n,o,r):this.sampler===!1?c=e.generateTextureLoad(l,t,n,r):c=e.generateTexture(l,t,n,r),c}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:d,compareNode:h,depthNode:p,gradNode:g}=n,_=this.generateUV(e,u),m=d?d.build(e,"float"):null,f=p?p.build(e,"int"):null,T=h?h.build(e,"float"):null,x=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,E=e.getVarFromNode(this);a=e.getPropertyName(E);const F=this.generateSnippet(e,r,_,m,f,T,x);e.addLineFlowCode(`${a} = ${F}`),o.snippet=F,o.propertyName=a}let l=a;const c=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(l=cf(aa(l,c),s.colorSpace).setup(e).build(e,c)),e.format(l,c,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,re(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(wS(t)),t.referenceNode=this,re(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return Bo(this,e)}compare(e){const t=this.clone();return t.compareNode=re(e),t.referenceNode=this,re(t)}grad(e,t){const n=this.clone();return n.gradNode=[re(e),re(t)],n.referenceNode=this,re(n)}depth(e){const t=this.clone();return t.depthNode=re(e),t.referenceNode=this,re(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Xt=B(fs),mi=(...i)=>Xt(...i).setSampler(!1);I("texture",Xt);J("TextureNode",fs);class la extends ds{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getElementType(e){return this.getNodeType(e)}getInputType(){return"buffer"}}const Hc=(i,e,t)=>re(new la(i,e,t));J("BufferNode",la);class bS extends sr{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class df extends la{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=tt.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(s==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;this._elementType=this.elementType===null?zi(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType);let n=Float32Array;return this._elementType.charAt(0)==="i"?n=Int32Array:this._elementType.charAt(0)==="u"&&(n=Uint32Array),this.value=new n(t*4),this.bufferCount=t,this.bufferType=e.changeComponentType("vec4",e.getComponentType(this._elementType)),super.setup(e)}element(e){return re(new bS(this,re(e)))}}const jl=(i,e)=>re(new df(i,e));J("UniformsNode",df);class RS extends sr{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class rr extends Pe{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=tt.OBJECT}element(e){return re(new RS(this,re(e)))}setNodeType(e){let t=null;this.count!==null?t=Hc(null,e,this.count):Array.isArray(this.getValueFromReference())?t=jl(null,e):e==="texture"?t=Xt(null):t=Fe(null,e),this.node=t}getNodeType(e){return this.node===null&&this.updateValue(),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const Cn=(i,e,t)=>re(new rr(i,e,t)),CS=(i,e,t,n)=>re(new rr(i,e,n,t));J("ReferenceNode",rr);class ff extends rr{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const Mi=(i,e,t)=>re(new ff(i,e,t));J("MaterialReferenceNode",ff);const ps=zc("camera").onRenderUpdate(()=>{ps.needsUpdate=!0}),dr=Fe("float").label("cameraNear").setGroup(ps).onRenderUpdate(({camera:i})=>i.near),fr=Fe("float").label("cameraFar").setGroup(ps).onRenderUpdate(({camera:i})=>i.far),LS=Fe("float").label("cameraLogDepth").setGroup(ps).onRenderUpdate(({camera:i})=>2/(Math.log(i.far+1)/Math.LN2)),Qn=Fe("mat4").label("cameraProjectionMatrix").setGroup(ps).onRenderUpdate(({camera:i})=>i.projectionMatrix),or=Fe("mat4").label("cameraViewMatrix").setGroup(ps).onRenderUpdate(({camera:i})=>i.matrixWorldInverse),pf=Fe(new U).label("cameraPosition").setGroup(ps).onRenderUpdate(({camera:i},e)=>e.value.setFromMatrixPosition(i.matrixWorld));class ze extends Pe{constructor(e=ze.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=tt.OBJECT,this._uniformNode=new ds(null)}getNodeType(){const e=this.scope;if(e===ze.WORLD_MATRIX||e===ze.VIEW_MATRIX)return"mat4";if(e===ze.NORMAL_MATRIX)return"mat3";if(e===ze.POSITION||e===ze.VIEW_POSITION||e===ze.DIRECTION||e===ze.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===ze.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===ze.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===ze.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===ze.POSITION)n.value=n.value||new U,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===ze.SCALE)n.value=n.value||new U,n.value.setFromMatrixScale(t.matrixWorld);else if(s===ze.DIRECTION)n.value=n.value||new U,t.getWorldDirection(n.value);else if(s===ze.VIEW_POSITION){const r=e.camera;n.value=n.value||new U,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===ze.WORLD_MATRIX||t===ze.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===ze.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===ze.POSITION||t===ze.VIEW_POSITION||t===ze.DIRECTION||t===ze.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}ze.VIEW_MATRIX="viewMatrix";ze.NORMAL_MATRIX="normalMatrix";ze.WORLD_MATRIX="worldMatrix";ze.POSITION="position";ze.SCALE="scale";ze.VIEW_POSITION="viewPosition";ze.DIRECTION="direction";B(ze,ze.DIRECTION);B(ze,ze.VIEW_MATRIX);B(ze,ze.NORMAL_MATRIX);B(ze,ze.WORLD_MATRIX);const Jl=B(ze,ze.POSITION);B(ze,ze.SCALE);const Gc=B(ze,ze.VIEW_POSITION);J("Object3DNode",ze);class Yt extends ze{constructor(e=Yt.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}le(Yt,Yt.DIRECTION);const cs=le(Yt,Yt.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),mf=le(Yt,Yt.NORMAL_MATRIX),Ar=le(Yt,Yt.WORLD_MATRIX);le(Yt,Yt.POSITION);le(Yt,Yt.SCALE);le(Yt,Yt.VIEW_POSITION);const PS=Fe(new _t).onObjectUpdate(({object:i},e)=>e.value.copy(i.matrixWorld).invert());J("ModelNode",Yt);const zo=jt("normal","vec3",H(0,1,0)),qn=zo.toVar("normalLocal"),ki=It(mf.mul(qn),"v_normalView").normalize().toVar("normalView"),IS=It(ki.transformDirection(or),"v_normalWorld").normalize().toVar("transformedNormalWorld"),At=St("vec3","transformedNormalView"),gf=At.transformDirection(or).normalize().toVar("transformedNormalWorld"),Fs=St("vec3","transformedClearcoatNormalView"),dh=new Map;class W extends Pe{constructor(e){super(),this.scope=e}getCache(e,t){let n=dh.get(e);return n===void 0&&(n=Mi(e,t),dh.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===W.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===W.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===W.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=X(1);else if(n===W.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularMap?s=r.mul(this.getTexture(n).a):s=r}else if(n===W.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=r.mul(this.getTexture(n).rgb):s=r}else if(n===W.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===W.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===W.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=r.mul(this.getTexture(n)):s=r}else if(n===W.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=ki;else if(n===W.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===W.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===W.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=ki;else if(n===W.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===W.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===W.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);s=Lc(pr.x,pr.y,pr.y.negate(),pr.x).mul(r.rg.mul(2).sub(ee(1)).normalize().mul(r.b))}else s=pr;else if(n===W.IRIDESCENCE_THICKNESS){const r=Cn("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=Cn("0","float",t.iridescenceThicknessRange);s=r.sub(o).mul(this.getTexture(n).g).add(o)}else s=r}else if(n===W.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?s=r.mul(this.getTexture(n).r):s=r}else if(n===W.THICKNESS){const r=this.getFloat(n);t.thicknessMap?s=r.mul(this.getTexture(n).g):s=r}else if(n===W.IOR)s=this.getFloat(n);else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}W.ALPHA_TEST="alphaTest";W.COLOR="color";W.OPACITY="opacity";W.SHININESS="shininess";W.SPECULAR="specular";W.SPECULAR_STRENGTH="specularStrength";W.SPECULAR_INTENSITY="specularIntensity";W.SPECULAR_COLOR="specularColor";W.REFLECTIVITY="reflectivity";W.ROUGHNESS="roughness";W.METALNESS="metalness";W.NORMAL="normal";W.CLEARCOAT="clearcoat";W.CLEARCOAT_ROUGHNESS="clearcoatRoughness";W.CLEARCOAT_NORMAL="clearcoatNormal";W.EMISSIVE="emissive";W.ROTATION="rotation";W.SHEEN="sheen";W.SHEEN_ROUGHNESS="sheenRoughness";W.ANISOTROPY="anisotropy";W.IRIDESCENCE="iridescence";W.IRIDESCENCE_IOR="iridescenceIOR";W.IRIDESCENCE_THICKNESS="iridescenceThickness";W.IOR="ior";W.TRANSMISSION="transmission";W.THICKNESS="thickness";W.ATTENUATION_DISTANCE="attenuationDistance";W.ATTENUATION_COLOR="attenuationColor";W.LINE_SCALE="scale";W.LINE_DASH_SIZE="dashSize";W.LINE_GAP_SIZE="gapSize";W.LINE_WIDTH="linewidth";W.LINE_DASH_OFFSET="dashOffset";W.POINT_WIDTH="pointWidth";W.DISPERSION="dispersion";const DS=le(W,W.ALPHA_TEST),wr=le(W,W.COLOR),US=le(W,W.SHININESS),OS=le(W,W.EMISSIVE),_f=le(W,W.OPACITY),FS=le(W,W.SPECULAR),fh=le(W,W.SPECULAR_INTENSITY),BS=le(W,W.SPECULAR_COLOR),zS=le(W,W.SPECULAR_STRENGTH);le(W,W.REFLECTIVITY);const VS=le(W,W.ROUGHNESS),HS=le(W,W.METALNESS),GS=le(W,W.NORMAL),kS=le(W,W.CLEARCOAT),WS=le(W,W.CLEARCOAT_ROUGHNESS),XS=le(W,W.CLEARCOAT_NORMAL),qS=le(W,W.ROTATION),YS=le(W,W.SHEEN),$S=le(W,W.SHEEN_ROUGHNESS),KS=le(W,W.ANISOTROPY),ZS=le(W,W.IRIDESCENCE),jS=le(W,W.IRIDESCENCE_IOR),JS=le(W,W.IRIDESCENCE_THICKNESS),QS=le(W,W.TRANSMISSION),eT=le(W,W.THICKNESS),tT=le(W,W.IOR),nT=le(W,W.ATTENUATION_DISTANCE),iT=le(W,W.ATTENUATION_COLOR),Ql=le(W,W.LINE_SCALE),vf=le(W,W.LINE_DASH_SIZE),xf=le(W,W.LINE_GAP_SIZE),qa=le(W,W.LINE_WIDTH),ph=le(W,W.LINE_DASH_OFFSET),sT=le(W,W.POINT_WIDTH),rT=le(W,W.DISPERSION),pr=Fe(new we).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))});J("MaterialNode",W);const an=jt("position","vec3"),qt=an.toVar("positionLocal"),ec=It(Ar.mul(qt).xyz,"v_positionWorld"),oT=It(qt.transformDirection(Ar),"v_positionWorldDirection").normalize().toVar("positionWorldDirection"),Qt=It(cs.mul(qt).xyz,"v_positionView"),Mt=It(Qt.negate(),"v_positionViewDirection").normalize().toVar("positionViewDirection");class Mf extends it{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return It(e.context.mvp);const t=this.positionNode||qt;return Qn.mul(cs).mul(t)}}const mh=B(Mf);J("ModelViewProjectionNode",Mf);class yf extends Jo{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=Lo,this.instanced=!1,this.attribute=null,this.global=!0,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getHash(e){if(this.bufferStride===0&&this.bufferOffset===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Ed(n,r),l=new Ec(a,s,o);a.setUsage(this.usage),this.attribute=l,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=It(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this.attribute&&this.attribute.isBufferAttribute===!0&&(this.attribute.usage=e),this}setInstanced(e){return this.instanced=e,this}}const ca=(i,e,t,n)=>re(new yf(i,e,t,n)),aT=(i,e,t,n)=>ca(i,e,t,n).setUsage(_r),tc=(i,e,t,n)=>ca(i,e,t,n).setInstanced(!0),gh=(i,e,t,n)=>aT(i,e,t,n).setInstanced(!0);I("toAttribute",i=>ca(i.value));J("BufferAttributeNode",yf);class Sf extends Pe{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null,this.updateType=tt.FRAME,this.buffer=null,this.bufferColor=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const l=t.instanceMatrix,c=new TM(l.array,16,1);this.buffer=c;const u=l.usage===_r?gh:tc,d=[u(c,"vec4",16,0),u(c,"vec4",16,4),u(c,"vec4",16,8),u(c,"vec4",16,12)];e=Gs(...d),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const l=new Nd(n.array,3),c=n.usage===_r?gh:tc;this.bufferColor=l,this.instanceColorNode=H(c(l,"vec3",3,0))}const s=e.mul(qt).xyz,r=nn(e[0].xyz,e[1].xyz,e[2].xyz),o=qn.div(H(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;qt.assign(s),qn.assign(a),this.instanceColorNode!==null&&Kn("vec3","vInstanceColor").assign(this.instanceColorNode)}update(){this.instanceMesh.instanceMatrix.usage!==_r&&this.instanceMesh.instanceMatrix.version!==this.buffer.version&&(this.buffer.version=this.instanceMesh.instanceMatrix.version),this.instanceMesh.instanceColor&&this.instanceMesh.instanceColor.usage!==_r&&this.instanceMesh.instanceColor.version!==this.bufferColor.version&&(this.bufferColor.version=this.instanceMesh.instanceColor.version)}}const lT=B(Sf);J("InstanceNode",Sf);const Tf=ae((i,e)=>(e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents(),jt("tangent","vec4")))(),kc=Tf.xyz.toVar("tangentLocal"),Ef=It(cs.mul(_e(kc,0)).xyz,"v_tangentView").normalize().toVar("tangentView");class Nf extends Pe{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(e.getDrawIndex()===null?this.batchingIdNode=Dc:this.batchingIdNode=vy);const t=ae(([h])=>{const p=Bo(mi(this.batchMesh._indirectTexture),0),g=Ut(h).remainder(Ut(p)),_=Ut(h).div(Ut(p));return mi(this.batchMesh._indirectTexture,Fi(g,_),null,"uvec4").x}).setLayout({name:"getIndirectIndex",type:"uint",inputs:[{name:"id",type:"int"}]}),n=this.batchMesh._matricesTexture,s=Bo(mi(n),0),r=X(t(Ut(this.batchingIdNode))).mul(4).toVar(),o=Ut(r.mod(s)),a=Ut(r).div(Ut(s)),l=Gs(mi(n,Fi(o,a)),mi(n,Fi(o.add(1),a)),mi(n,Fi(o.add(2),a)),mi(n,Fi(o.add(3),a))),c=nn(l[0].xyz,l[1].xyz,l[2].xyz);qt.assign(l.mul(qt));const u=qn.div(H(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),d=c.mul(u).xyz;qn.assign(d),e.hasGeometryAttribute("tangent")&&kc.mulAssign(c)}}const cT=B(Nf);J("batch",Nf);class Af extends Pe{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=tt.OBJECT,this.skinIndexNode=jt("skinIndex","uvec4"),this.skinWeightNode=jt("skinWeight","vec4");let n,s,r;t?(n=Cn("bindMatrix","mat4"),s=Cn("bindMatrixInverse","mat4"),r=CS("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=Fe(e.bindMatrix,"mat4"),s=Fe(e.bindMatrixInverse,"mat4"),r=Hc(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),l=o.element(t.y),c=o.element(t.z),u=o.element(t.w),d=s.mul(qt),h=fn(a.mul(n.x).mul(d),l.mul(n.y).mul(d),c.mul(n.z).mul(d),u.mul(n.w).mul(d)),p=r.mul(h).xyz;let g=fn(n.x.mul(a),n.y.mul(l),n.z.mul(c),n.w.mul(u));g=r.mul(g).mul(s);const _=g.transformDirection(qn).xyz;qt.assign(p),qn.assign(_),e.hasGeometryAttribute("tangent")&&kc.assign(_)}generate(e,t){if(t!=="void")return qt.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const uT=i=>re(new Af(i,!0));J("SkinningNode",Af);class wf extends Pe{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let r=0,o=this.params.length-1;r<o;r++){const a=this.params[r],l=a.isNode!==!0&&a.name||this.getVarName(r),c=a.isNode!==!0&&a.type||"int";n[l]=aa(l,c)}const s=e.addStack();return t.returnsNode=this.params[this.params.length-1](n,s,e),t.stackNode=s,e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n=this.params,s=t.stackNode;for(let a=0,l=n.length-1;a<l;a++){const c=n[a];let u=null,d=null,h=null,p=null,g=null,_=null;c.isNode?(p="int",h=this.getVarName(a),u="0",d=c.build(e,p),g="<"):(p=c.type||"int",h=c.name||this.getVarName(a),u=c.start,d=c.end,g=c.condition,_=c.update,typeof u=="number"?u=u.toString():u&&u.isNode&&(u=u.build(e,p)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,p)),u!==void 0&&d===void 0?(u=u+" - 1",d="0",g=">="):d!==void 0&&u===void 0&&(u="0",g="<"),g===void 0&&(Number(u)>Number(d)?g=">=":g="<"));const m={start:u,end:d,condition:g},f=m.start,T=m.end;let x="",E="",F="";_||(p==="int"||p==="uint"?g.includes("<")?_="++":_="--":g.includes("<")?_="+= 1.":_="-= 1."),x+=e.getVar(p,h)+" = "+f,E+=h+" "+g+" "+T,F+=h+" "+_;const A=`for ( ${x}; ${E}; ${F} )`;e.addFlowCode((a===0?`
`:"")+e.tab+A+` {

`).addFlowTab()}const r=s.build(e,"void"),o=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+r);for(let a=0,l=this.params.length-1;a<l;a++)e.addFlowCode((a===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),o}}const kn=(...i)=>re(new wf(Hs(i,"int"))).append(),bf=()=>aa("break").append();I("loop",(i,...e)=>kd(i,kn(...e)));J("LoopNode",wf);const Ya=new WeakMap,Mn=new et,_h=ae(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const o=Ut(_y).mul(t).add(r),a=o.div(n),l=o.sub(a.mul(n));return mi(i,Fi(l,a)).depth(s).mul(e)});function hT(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let o=Ya.get(i);if(o===void 0||o.count!==r){let f=function(){_.dispose(),Ya.delete(i),i.removeEventListener("dispose",f)};o!==void 0&&o.texture.dispose();const a=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],c=i.morphAttributes.color||[];let u=0;e===!0&&(u=1),t===!0&&(u=2),n===!0&&(u=3);let d=i.attributes.position.count*u,h=1;const p=4096;d>p&&(h=Math.ceil(d/p),d=p);const g=new Float32Array(d*h*4*r),_=new xc(g,d,h,r);_.type=ni,_.needsUpdate=!0;const m=u*4;for(let T=0;T<r;T++){const x=a[T],E=l[T],F=c[T],A=d*h*4*T;for(let w=0;w<x.count;w++){const D=w*m;e===!0&&(Mn.fromBufferAttribute(x,w),g[A+D+0]=Mn.x,g[A+D+1]=Mn.y,g[A+D+2]=Mn.z,g[A+D+3]=0),t===!0&&(Mn.fromBufferAttribute(E,w),g[A+D+4]=Mn.x,g[A+D+5]=Mn.y,g[A+D+6]=Mn.z,g[A+D+7]=0),n===!0&&(Mn.fromBufferAttribute(F,w),g[A+D+8]=Mn.x,g[A+D+9]=Mn.y,g[A+D+10]=Mn.z,g[A+D+11]=F.itemSize===4?Mn.w:1)}}o={count:r,texture:_,stride:u,size:new we(d,h)},Ya.set(i,o),i.addEventListener("dispose",f)}return o}class Rf extends Pe{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=Fe(1),this.updateType=tt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:l,size:c}=hT(t);n===!0&&qt.mulAssign(this.morphBaseInfluence),s===!0&&qn.mulAssign(this.morphBaseInfluence);const u=Ut(c.width);kn(o,({i:d})=>{const h=X(0).toVar();this.mesh.count>1&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?h.assign(mi(this.mesh.morphTexture,Fi(Ut(d).add(1),Ut(Dc))).r):h.assign(Cn("morphTargetInfluences","float").element(d).toVar()),n===!0&&qt.addAssign(_h({bufferMap:a,influence:h,stride:l,width:u,depth:d,offset:Ut(0)})),s===!0&&qn.addAssign(_h({bufferMap:a,influence:h,stride:l,width:u,depth:d,offset:Ut(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const dT=B(Rf);J("MorphNode",Rf);const fT=Mt.negate().reflect(At),pT=fT.transformDirection(or).toVar("reflectVector");class Cf extends fs{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return pT}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===js||!n.isRenderTargetTexture?H(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const Lf=B(Cf);I("cubeTexture",Lf);J("CubeTextureNode",Cf);class Dr extends Pe{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}J("LightingNode",Dr);let mr=null;class qi extends Dr{constructor(e=null){super(),this.updateType=tt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Le,this._defaultColorNode=Fe(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){mr===null&&(mr=e.createNodeMaterial(),mr.fragmentNode=_e(0,0,0,1),mr.isShadowNodeMaterial=!0);const s=this.light.shadow,r=e.createRenderTarget(s.mapSize.width,s.mapSize.height),o=new Ir;o.minFilter=Jt,o.magFilter=Jt,o.image.width=s.mapSize.width,o.image.height=s.mapSize.height,o.compareFunction=od,r.depthTexture=o,s.camera.updateProjectionMatrix();const a=Cn("intensity","float",s),l=Cn("bias","float",s),c=Cn("normalBias","float",s),u=t.material.shadowPositionNode||ec;let d=Fe(s.matrix).mul(u.add(IS.mul(c)));d=d.xyz.div(d.w);const h=d.x.greaterThanEqual(0).and(d.x.lessThanEqual(1)).and(d.y.greaterThanEqual(0)).and(d.y.lessThanEqual(1)).and(d.z.lessThanEqual(1));let p=d.z.add(l);e.renderer.coordinateSystem===js&&(p=p.mul(2).sub(1)),d=H(d.x,d.y.oneMinus(),p),n=((f,T,x)=>Xt(f,T).compare(x))(o,d.xy,d.z);const _=Xt(r.texture,d),m=h.mix(1,n.mix(_.a.mix(1,_),1));this.rtt=r,this.colorNode=this.colorNode.mul(Dt(1,m,a)),this.shadowNode=n,this.shadowMaskNode=m,this.updateBeforeType=tt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:r,camera:o}=e,a=r.overrideMaterial;r.overrideMaterial=mr,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n),n.shadow.camera.layers.mask=o.layers.mask;const l=s.toneMapping,c=s.getRenderTarget(),u=s.getRenderObjectFunction();s.setRenderObjectFunction((d,...h)=>{d.castShadow===!0&&s.renderObject(d,...h)}),s.setRenderTarget(t),s.toneMapping=En,s.render(r,n.shadow.camera),s.setRenderTarget(c),s.setRenderObjectFunction(u),s.toneMapping=l,r.overrideMaterial=a}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}J("AnalyticLightNode",qi);const Vo=new WeakMap,mT=i=>i.sort((e,t)=>e.id-t.id);class gT extends Pe{constructor(e=[]){super("vec3"),this.totalDiffuseNode=H().temp("totalDiffuse"),this.totalSpecularNode=H().temp("totalSpecular"),this.outgoingLightNode=H().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}analyze(e){const t=e.getDataFromNode(this);for(const n of t.nodes)n.build(e)}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=s;const l=e.addStack(),c=e.getDataFromNode(this);c.nodes=l.nodes,n.start(t,l,e);for(const f of r)f.build(e);n.indirectDiffuse(t,l,e),n.indirectSpecular(t,l,e),n.ambientOcclusion(t,l,e);const{backdrop:u,backdropAlpha:d}=t,{directDiffuse:h,directSpecular:p,indirectDiffuse:g,indirectSpecular:_}=t.reflectedLight;let m=h.add(g);u!==null&&(d!==null?m=H(d.mix(m,u)):m=H(u),t.material.transparent=!0),o.assign(m),a.assign(p.add(_)),s.assign(o.add(a)),n.finish(t,l,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=mT(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const r=n.constructor,o=Vo.has(r)?Vo.get(r):qi;s=re(new o(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const _T=B(gT);function ms(i,e){if(Vo.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);Vo.set(i,e)}class Pf extends Dr{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}J("AONode",Pf);class If extends Ic{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=H().temp("directDiffuse"),s=H().temp("directSpecular"),r=H().temp("indirectDiffuse"),o=H().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:o};return{radiance:H().temp("radiance"),irradiance:H().temp("irradiance"),iblIrradiance:H().temp("iblIrradiance"),ambientOcclusion:X(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const Df=B(If);I("lightingContext",Df);J("LightingContextNode",If);const vT=i=>i.mul(Tf.w).xyz,xT=It(vT(ki.cross(Ef)),"v_bitangentView").normalize().toVar("bitangentView"),Bs=nn(Ef,xT,ki);Mt.mul(Bs);const MT=(()=>{let i=ks.cross(Mt);return i=i.cross(ks).normalize(),i=Dt(i,At,is.mul(_i.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})();class Wc extends Pe{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}setup(e){const t=e.getNodeProperties(this);t.condNode=this.condNode.cache(),t.ifNode=this.ifNode.cache(),t.elseNode=this.elseNode?this.elseNode.cache():null}generate(e,t){const n=this.getNodeType(e),s=e.getDataFromNode(this);if(s.nodeProperty!==void 0)return s.nodeProperty;const{condNode:r,ifNode:o,elseNode:a}=e.getNodeProperties(this),l=t!=="void",c=l?St(n).build(e):"";s.nodeProperty=c;const u=r.build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let d=o.build(e,n);if(d&&(l?d=c+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let h=a.build(e,n);h&&(l?h=c+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(c,n,t)}}const bn=B(Wc);I("cond",bn);J("CondNode",Wc);const vh=X(1),nc=X(-2),co=X(.8),$a=X(-1),uo=X(.4),Ka=X(2),ho=X(.305),Za=X(3),xh=X(.21),yT=X(4),Mh=X(4),ST=X(16),TT=ae(([i])=>{const e=H(Jn(i)).toVar(),t=X(-1).toVar();return wt(e.x.greaterThan(e.z),()=>{wt(e.x.greaterThan(e.y),()=>{t.assign(bn(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(bn(i.y.greaterThan(0),1,4))})}).else(()=>{wt(e.z.greaterThan(e.y),()=>{t.assign(bn(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(bn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),ET=ae(([i,e])=>{const t=ee().toVar();return wt(e.equal(0),()=>{t.assign(ee(i.z,i.y).div(Jn(i.x)))}).elseif(e.equal(1),()=>{t.assign(ee(i.x.negate(),i.z.negate()).div(Jn(i.y)))}).elseif(e.equal(2),()=>{t.assign(ee(i.x.negate(),i.y).div(Jn(i.z)))}).elseif(e.equal(3),()=>{t.assign(ee(i.z.negate(),i.y).div(Jn(i.x)))}).elseif(e.equal(4),()=>{t.assign(ee(i.x.negate(),i.z).div(Jn(i.y)))}).else(()=>{t.assign(ee(i.x,i.y).div(Jn(i.z)))}),ct(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),NT=ae(([i])=>{const e=X(0).toVar();return wt(i.greaterThanEqual(co),()=>{e.assign(vh.sub(i).mul($a.sub(nc)).div(vh.sub(co)).add(nc))}).elseif(i.greaterThanEqual(uo),()=>{e.assign(co.sub(i).mul(Ka.sub($a)).div(co.sub(uo)).add($a))}).elseif(i.greaterThanEqual(ho),()=>{e.assign(uo.sub(i).mul(Za.sub(Ka)).div(uo.sub(ho)).add(Ka))}).elseif(i.greaterThanEqual(xh),()=>{e.assign(ho.sub(i).mul(yT.sub(Za)).div(ho.sub(xh)).add(Za))}).else(()=>{e.assign(X(-2).mul(ia(ct(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});ae(([i,e])=>{const t=i.toVar();t.assign(ct(2,t).sub(1));const n=H(t,1).toVar();return wt(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const AT=ae(([i,e,t,n,s,r])=>{const o=X(t),a=H(e),l=ls(NT(o),nc,r),c=ra(l),u=sa(l),d=H(ic(i,a,u,n,s,r)).toVar();return wt(c.notEqual(0),()=>{const h=H(ic(i,a,u.add(1),n,s,r)).toVar();d.assign(Dt(d,h,c))}),d}),ic=ae(([i,e,t,n,s,r])=>{const o=X(t).toVar(),a=H(e),l=X(TT(a)).toVar(),c=X(ln(Mh.sub(o),0)).toVar();o.assign(ln(o,Mh));const u=X(Zl(o)).toVar(),d=ee(ET(a,l).mul(u.sub(2)).add(1)).toVar();return wt(l.greaterThan(2),()=>{d.y.addAssign(u),l.subAssign(3)}),d.x.addAssign(l.mul(u)),d.x.addAssign(c.mul(ct(3,ST))),d.y.addAssign(ct(4,Zl(r).sub(u))),d.x.mulAssign(n),d.y.mulAssign(s),i.uv(d).grad(ee(),ee())}),ja=ae(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const l=jn(n),c=t.mul(l).add(s.cross(t).mul(Tn(n))).add(s.mul(s.dot(t).mul(l.oneMinus())));return ic(i,c,e,r,o,a)});ae(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:r,dTheta:o,mipInt:a,envMap:l,CUBEUV_TEXEL_WIDTH:c,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d})=>{const h=H(bn(e,t,rf(t,n))).toVar();wt(ef(h.equals(H(0))),()=>{h.assign(H(n.z,0,n.x.negate()))}),h.assign(Nr(h));const p=H().toVar();return p.addAssign(s.element(Ut(0)).mul(ja({theta:0,axis:h,outputDirection:n,mipInt:a,envMap:l,CUBEUV_TEXEL_WIDTH:c,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d}))),kn({start:Ut(1),end:i},({i:g})=>{wt(g.greaterThanEqual(r),()=>{bf()});const _=X(o.mul(X(g))).toVar();p.addAssign(s.element(g).mul(ja({theta:_.mul(-1),axis:h,outputDirection:n,mipInt:a,envMap:l,CUBEUV_TEXEL_WIDTH:c,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d}))),p.addAssign(s.element(g).mul(ja({theta:_,axis:h,outputDirection:n,mipInt:a,envMap:l,CUBEUV_TEXEL_WIDTH:c,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d})))}),_e(p,1)});let Ho=null;const yh=new WeakMap;function wT(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function bT(i){let e=yh.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=Ho.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=Ho.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,yh.set(i,e)}return e.texture}class Uf extends it{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=Xt(null),this._width=Fe(0),this._height=Fe(0),this._maxMip=Fe(0),this.updateBeforeType=tt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=wT(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=bT(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){Ho===null&&(Ho=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===Hn&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=H(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),AT(this._texture,t,s,this._width,this._height,this._maxMip)}}const RT=B(Uf);J("PMREMNode",Uf);const Sh=new WeakMap;class Of extends Dr{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let p=Sh.get(t.value);p===void 0&&(p=RT(t.value),Sh.set(t.value,p)),t=p}const{material:n}=e,r=n.envMap?Cn("envMapIntensity","float",e.material):Cn("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?MT:At,l=Sr(t,Th(_i,a)).mul(r),c=Sr(t,CT(gf)).mul(Math.PI).mul(r),u=So(l),d=So(c);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(d);const h=e.context.lightingModel.clearcoatRadiance;if(h){const p=Sr(t,Th(Uo,Fs)).mul(r),g=So(p);h.addAssign(g)}}}const Th=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Mt.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(or)),t),getTextureLevel:()=>i}},CT=i=>({getUV:()=>i,getTextureLevel:()=>X(1)});J("EnvironmentNode",Of);class Ff extends Dr{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}J("IrradianceNode",Ff);let Ja,Qa;class nt extends Pe{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===nt.VIEWPORT?"vec4":this.scope===nt.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=tt.NONE;return(this.scope===nt.RESOLUTION||this.scope===nt.VIEWPORT)&&(e=tt.RENDER),this.updateType=e,e}update({renderer:e}){this.scope===nt.VIEWPORT?e.getViewport(Qa):e.getDrawingBufferSize(Ja)}setup(){const e=this.scope;let t=null;if(e===nt.RESOLUTION)t=Fe(Ja||(Ja=new we));else if(e===nt.VIEWPORT)t=Fe(Qa||(Qa=new et));else{t=LT.div(sc);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=ee(n,s)}return t}generate(e){if(this.scope===nt.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(sc).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}nt.COORDINATE="coordinate";nt.RESOLUTION="resolution";nt.VIEWPORT="viewport";nt.TOP_LEFT="topLeft";nt.BOTTOM_LEFT="bottomLeft";nt.TOP_RIGHT="topRight";nt.BOTTOM_RIGHT="bottomRight";const LT=le(nt,nt.COORDINATE),sc=le(nt,nt.RESOLUTION),qs=le(nt,nt.VIEWPORT),br=le(nt,nt.TOP_LEFT);le(nt,nt.BOTTOM_LEFT);le(nt,nt.TOP_RIGHT);le(nt,nt.BOTTOM_RIGHT);J("ViewportNode",nt);const gr=new we;class Ur extends fs{constructor(e=br,t=null,n=null){n===null&&(n=new bd,n.minFilter=Bi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=tt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(gr);const n=this.value;(n.image.width!==gr.width||n.image.height!==gr.height)&&(n.image.width=gr.width,n.image.height=gr.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const PT=B(Ur),Bf=B(Ur,null,null,{generateMipmaps:!0});I("viewportTexture",PT);I("viewportMipTexture",Bf);J("ViewportTextureNode",Ur);let el=null;class zf extends Ur{constructor(e=br,t=null){el===null&&(el=new Ir),super(e,t,el)}}const Vf=B(zf);I("viewportDepthTexture",Vf);J("ViewportDepthTextureNode",zf);class Nn extends Pe{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===Nn.DEPTH?e.getFragDepth():super.generate(e)}setup({camera:e}){const{scope:t}=this,n=this.valueNode;let s=null;if(t===Nn.DEPTH)n!==null?s=Gf().assign(n):e.isPerspectiveCamera?s=IT(Qt.z,dr,fr):s=No(Qt.z,dr,fr);else if(t===Nn.LINEAR_DEPTH)if(n!==null)if(e.isPerspectiveCamera){const r=Hf(n,dr,fr);s=No(r,dr,fr)}else s=n;else s=No(Qt.z,dr,fr);return s}}const No=(i,e,t)=>i.add(e).div(e.sub(t)),IT=(i,e,t)=>e.add(i).mul(t).div(t.sub(e).mul(i)),Hf=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));Nn.DEPTH="depth";Nn.LINEAR_DEPTH="linearDepth";const Gf=B(Nn,Nn.DEPTH),kf=le(Nn,Nn.DEPTH),DT=B(Nn,Nn.LINEAR_DEPTH);DT(Vf());kf.assign=i=>Gf(i);J("ViewportDepthNode",Nn);class Wi extends Pe{constructor(e=Wi.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:r}=t,o=r+s,a=n?o-s:o;return this.scope===Wi.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return ae(()=>{const s=jl(e),r=St("float","distanceToPlane"),o=St("float","distanceToGradient"),a=St("float","clipOpacity");a.assign(1);let l;if(kn(n,({i:c})=>{l=s.element(c),r.assign(Qt.dot(l.xyz).negate().add(l.w)),o.assign(r.fwidth().div(2)),a.mulAssign(ri(o.negate(),o,r)),a.equal(0).discard()}),n<t){const c=St("float","unionclipOpacity");c.assign(1),kn({start:n,end:t},({i:u})=>{l=s.element(u),r.assign(Qt.dot(l.xyz).negate().add(l.w)),o.assign(r.fwidth().div(2)),c.mulAssign(ri(o.negate(),o,r).oneMinus())}),a.mulAssign(c.oneMinus())}gt.a.mulAssign(a),gt.a.equal(0).discard()})()}setupDefault(e,t,n){return ae(()=>{const s=jl(e);let r;if(kn(n,({i:o})=>{r=s.element(o),Qt.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=St("bool","clipped");o.assign(!0),kn({start:n,end:t},({i:a})=>{r=s.element(a),o.assign(Qt.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}Wi.ALPHA_TO_COVERAGE="alphaToCoverage";Wi.DEFAULT="default";const UT=()=>re(new Wi),OT=()=>re(new Wi(Wi.ALPHA_TO_COVERAGE));class Wf extends Pe{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===Hn&&n.side===cn?"false":e.getFrontFacing()}}const FT=le(Wf),Go=X(FT).mul(2).sub(1);J("FrontFacingNode",Wf);const rc=new Map;class sn extends tn{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Pd(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const r=_e(s,gt.a).max(0);t=this.setupOutput(e,r),xy.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let s=this.fragmentNode;s.isOutputStructNode!==!0&&(s=_e(s)),t=this.setupOutput(e,s)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=OT():e.stack.add(UT())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=mh().w.add(1).log2().mul(LS).mul(.5)),n!==null&&kf.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;if(e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&dT(t).append(),t.isSkinnedMesh===!0&&uT(t).append(),this.displacementMap){const r=Mi("displacementMap","texture"),o=Mi("displacementScale","float"),a=Mi("displacementBias","float");qt.addAssign(qn.normalize().mul(r.x.mul(o).add(a)))}t.isBatchedMesh&&cT(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&lT(t).append(),this.positionNode!==null&&qt.assign(this.positionNode);const s=mh();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?_e(this.colorNode):wr;this.vertexColors===!0&&t.hasAttribute("color")&&(n=_e(n.xyz.mul(jt("color","vec3")),n.a)),e.instanceColor&&(n=Kn("vec3","vInstanceColor").mul(n)),gt.assign(n);const s=this.opacityNode?X(this.opacityNode):_f;if(gt.a.assign(gt.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?X(this.alphaTestNode):DS;gt.a.lessThanEqual(r).discard()}this.transparent===!1&&this.blending===as&&this.alphaToCoverage===!1&&gt.a.assign(1)}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=Qt.dFdx().cross(Qt.dFdy()).normalize();At.assign(e.mul(Go))}else{const e=this.normalNode?H(this.normalNode):GS;At.assign(e.mul(Go))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?Lf(this.envMap):Xt(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new Of(t)),e.material.lightMap&&n.push(new Ff(Mi("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const r=this.aoNode!==null?this.aoNode:Xt(e.material.aoMap);n.push(new Pf(r))}let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=_T([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let l=gt.rgb;if(a&&a.hasLight!==!1){const c=this.setupLightingModel(e);l=Df(a,c,n,s)}else n!==null&&(l=H(s!==null?Dt(l,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(l=l.add(H(r||OS))),l}setupOutput(e,t){if(this.fog===!0){const n=e.fogNode;n&&(t=_e(n.mix(t.rgb,n.colorNode),t.a))}return t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=tn.prototype.toJSON.call(this,e),s=Po(this);n.inputNodes={};for(const{property:o,childNode:a}of s)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}if(t){const o=r(e.textures),a=r(e.images),l=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),l.length>0&&(n.nodes=l)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=BT(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function Gt(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(rc.has(i)){console.warn(`Redefinition of node material ${i}`);return}rc.set(i,e),e.type=i}function BT(i){const e=rc.get(i);if(e!==void 0)return new e}Gt("NodeMaterial",sn);class Xf extends Pe{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new yr(t);return this._currentCond=bn(e,n),this.add(this._currentCond)}elseif(e,t){const n=new yr(t),s=bn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new yr(e),this}build(e,...t){const n=XM();ch(this);for(const s of this.nodes)s.build(e,"void");return ch(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}B(Xf);J("StackNode",Xf);class qf extends it{constructor(e=oT){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return ee(t,n)}}B(qf);J("EquirectUVNode",qf);class Yf extends Pe{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}J("StructTypeNode",Yf);class $f extends Pe{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Yf(n)).name}generate(e,t){const n=e.getOutputStructName(),s=this.members,r=n!==""?n+".":"";for(let o=0;o<s.length;o++){const a=s[o].build(e,t);e.addLineFlowCode(`${r}m${o} = ${a}`)}return n}}B($f);J("OutputStructNode",$f);class Kf extends Pe{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.toUint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).toFloat().mul(1/2**32)}}const zT=B(Kf);I("hash",zT);J("HashNode",Kf);const oc=(i,e)=>xi(ct(4,i.mul(ii(1,i))),e),VT=(i,e)=>i.lessThan(.5)?oc(i.mul(2),e).div(2):ii(1,oc(ct(ii(1,i),2),e).div(2)),HT=(i,e,t)=>xi(Ai(xi(i,e),fn(xi(i,e),xi(ii(1,i),t))),1/e),GT=(i,e)=>Tn(uh.mul(e.mul(i).sub(1))).div(uh.mul(e.mul(i).sub(1)));I("parabola",oc);I("gain",VT);I("pcurve",HT);I("sinc",GT);const ei=ae(([i])=>i.fract().sub(.5).abs()),Zf=ae(([i])=>H(ei(i.z.add(ei(i.y.mul(1)))),ei(i.z.add(ei(i.x.mul(1)))),ei(i.y.add(ei(i.x.mul(1)))))),kT=ae(([i,e,t])=>{const n=H(i).toVar(),s=X(1.4).toVar(),r=X(0).toVar(),o=H(n).toVar();return kn({start:X(0),end:X(3),type:"float",condition:"<="},()=>{const a=H(Zf(o.mul(2))).toVar();n.addAssign(a.add(t.mul(X(.1).mul(e)))),o.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const l=X(ei(n.z.add(ei(n.x.add(ei(n.y)))))).toVar();r.addAssign(l.div(s)),o.addAssign(.14)}),r});ei.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});Zf.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});kT.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let tl;class jf extends Wc{constructor(e){tl=tl||aa("discard"),super(e,tl)}}const WT=B(jf),XT=i=>WT(i).append();I("discard",XT);J("DiscardNode",jf);class Jf extends Pe{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null,this.global=!0}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const o of this.functionNodes){const l=o.shaderNode.layout;if(l===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const c=l.inputs;if(t.length===c.length){let u=0;for(let d=0;d<t.length;d++){const h=t[d],p=c[d];h.getNodeType(e)===p.type?u++:u=0}u>r&&(s=o,r=u)}}this._candidateFnCall=n=s(...t)}return n}}B(Jf);J("FunctionOverloadingNode",Jf);class Qf extends it{constructor(){super("vec2")}setup(){const e=H(Mt.z,0,Mt.x.negate()).normalize(),t=Mt.cross(e);return ee(e.dot(At),t.dot(At)).mul(.495).add(.5)}}const qT=le(Qf);J("MatcapUVNode",Qf);class un extends ds{constructor(e=un.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=tt.FRAME}update(e){const t=this.scope,n=this.scale;t===un.LOCAL?this.value+=e.deltaTime*n:t===un.DELTA?this.value=e.deltaTime*n:t===un.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}un.LOCAL="local";un.GLOBAL="global";un.DELTA="delta";un.FRAME="frame";const YT=(i,e=0)=>re(new un(un.LOCAL,i,e));le(un,un.FRAME).toUint();J("TimerNode",un);class Ot extends Pe{constructor(e=Ot.SINE,t=YT()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=re(this.timeNode);let n=null;return e===Ot.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Ot.SQUARE?n=t.fract().round():e===Ot.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Ot.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Ot.SINE="sine";Ot.SQUARE="square";Ot.TRIANGLE="triangle";Ot.SAWTOOTH="sawtooth";B(Ot,Ot.SINE);B(Ot,Ot.SQUARE);B(Ot,Ot.TRIANGLE);B(Ot,Ot.SAWTOOTH);J("OscNode",Ot);class oi extends it{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===oi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===oi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}oi.DIRECTION_TO_COLOR="directionToColor";oi.COLOR_TO_DIRECTION="colorToDirection";const ep=B(oi,oi.DIRECTION_TO_COLOR),$T=B(oi,oi.COLOR_TO_DIRECTION);I("directionToColor",ep);I("colorToDirection",$T);J("PackingNode",oi);class Xc extends Pe{constructor(e,t,n,s=X(0),r=X(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(s)).add(s)}}const KT=B(Xc,null,null,{doClamp:!1}),ZT=B(Xc);I("remap",KT);I("remapClamp",ZT);J("RemapNode",Xc);class tp extends it{constructor(e,t,n=ee(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const jT=B(tp);I("rotateUV",jT);J("RotateUVNode",tp);class np extends it{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return Lc(r,o,o.negate(),r).mul(n)}else{const r=t,o=Gs(_e(1,0,0,0),_e(0,jn(r.x),Tn(r.x).negate(),0),_e(0,Tn(r.x),jn(r.x),0),_e(0,0,0,1)),a=Gs(_e(jn(r.y),0,Tn(r.y),0),_e(0,1,0,0),_e(Tn(r.y).negate(),0,jn(r.y),0),_e(0,0,0,1)),l=Gs(_e(jn(r.z),Tn(r.z).negate(),0,0),_e(Tn(r.z),jn(r.z),0,0),_e(0,0,1,0),_e(0,0,0,1));return o.mul(a).mul(l).mul(_e(n,1)).xyz}}}const JT=B(np);I("rotate",JT);J("RotateNode",np);class ip extends Pe{constructor(e,t=mn(),n=X(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,o=e.mod(s.mul(r)).floor(),a=o.mod(s),l=r.sub(o.add(1).div(s).ceil()),c=n.reciprocal(),u=ee(a,l);return t.add(u).mul(c)}}B(ip);J("SpriteSheetUVNode",ip);class sp extends sr{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const rp=B(sp);I("storageElement",rp);J("StorageArrayElementNode",sp);class op extends Pe{constructor(e,t=null,n=null,s=X(1),r=qt,o=qn){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(H(1)));const l=r.yz.mul(s),c=r.zx.mul(s),u=r.xy.mul(s),d=e.value,h=t!==null?t.value:d,p=n!==null?n.value:d,g=Xt(d,l).mul(a.x),_=Xt(h,c).mul(a.y),m=Xt(p,u).mul(a.z);return fn(g,_,m)}}const QT=B(op),eE=(...i)=>QT(...i);I("triplanarTexture",eE);J("TriplanarTexturesNode",op);new Ui;new U;new U;new U;new _t;new U(0,0,-1);new et;new U;new U;new et;new we;new Ni;ee(br.x.oneMinus(),br.y);class tE extends Pc{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new et(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}J("VertexColorNode",tE);class ap extends rr{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const nE=(i,e,t)=>re(new ap(i,e,t));J("RendererReferenceNode",ap);const ua=1/6,lp=i=>ct(ua,ct(i,ct(i,i.negate().add(3)).sub(3)).add(1)),ac=i=>ct(ua,ct(i,ct(i,ct(3,i).sub(6))).add(4)),cp=i=>ct(ua,ct(i,ct(i,ct(-3,i).add(3)).add(3)).add(1)),lc=i=>ct(ua,xi(i,3)),Eh=i=>lp(i).add(ac(i)),Nh=i=>cp(i).add(lc(i)),Ah=i=>fn(-1,ac(i).div(lp(i).add(ac(i)))),wh=i=>fn(1,lc(i).div(cp(i).add(lc(i)))),bh=(i,e,t)=>{const n=i.uvNode,s=ct(n,e.zw).add(.5),r=sa(s),o=ra(s),a=Eh(o.x),l=Nh(o.x),c=Ah(o.x),u=wh(o.x),d=Ah(o.y),h=wh(o.y),p=ee(r.x.add(c),r.y.add(d)).sub(.5).mul(e.xy),g=ee(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),_=ee(r.x.add(c),r.y.add(h)).sub(.5).mul(e.xy),m=ee(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),f=Eh(o.y).mul(fn(a.mul(i.uv(p).level(t)),l.mul(i.uv(g).level(t)))),T=Nh(o.y).mul(fn(a.mul(i.uv(_).level(t)),l.mul(i.uv(m).level(t))));return f.add(T)},iE=(i,e)=>{const t=ee(i.size(Ut(e))),n=ee(i.size(Ut(e.add(1)))),s=Ai(1,t),r=Ai(1,n),o=bh(i,_e(s,t),sa(e)),a=bh(i,_e(r,n),sf(e));return ra(e).mix(o,a)};class up extends it{constructor(e,t=X(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return iE(this.textureNode,this.blurNode)}}const sE=B(up);I("bicubic",sE);J("TextureBicubicNode",up);class hp extends Pe{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}le(hp);J("PointUVNode",hp);class Xn extends Pe{constructor(e=Xn.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===Xn.BACKGROUND_BLURRINESS?s=Cn("backgroundBlurriness","float",n):t===Xn.BACKGROUND_INTENSITY?s=Cn("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}Xn.BACKGROUND_BLURRINESS="backgroundBlurriness";Xn.BACKGROUND_INTENSITY="backgroundIntensity";le(Xn,Xn.BACKGROUND_BLURRINESS);le(Xn,Xn.BACKGROUND_INTENSITY);J("SceneNode",Xn);const Rh={Uniform:"uniform",Storage:"storage",ReadOnlyStorage:"read-only-storage"},nl={WriteOnly:"write-only",ReadOnly:"read-only",ReadWrite:"read-write"};class rE extends la{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.access=Rh.Storage,this.bufferObject=!1,this.bufferCount=n,this._attribute=null,this._varying=null,this.global=!0,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getHash(e){if(this.bufferCount===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getInputType(){return"storageBuffer"}element(e){return rp(this,e)}setBufferObject(e){return this.bufferObject=e,this}setAccess(e){return this.access=e,this}toReadOnly(){return this.setAccess(Rh.ReadOnlyStorage)}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=ca(this.value),this._varying=It(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}J("StorageBufferNode",rE);class dp extends fs{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStorageTextureNode=!0,this.access=nl.WriteOnly}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}setAccess(e){return this.access=e,this}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}toReadOnly(){return this.setAccess(nl.ReadOnly)}toWriteOnly(){return this.setAccess(nl.WriteOnly)}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=s.build(e,"vec4"),l=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(l)}}B(dp);J("StorageTextureNode",dp);const oE=ae(({texture:i,uv:e})=>{const n=H().temp();return wt(e.x.lessThan(1e-4),()=>{n.assign(H(1,0,0))}).elseif(e.y.lessThan(1e-4),()=>{n.assign(H(0,1,0))}).elseif(e.z.lessThan(1e-4),()=>{n.assign(H(0,0,1))}).elseif(e.x.greaterThan(1-1e-4),()=>{n.assign(H(-1,0,0))}).elseif(e.y.greaterThan(1-1e-4),()=>{n.assign(H(0,-1,0))}).elseif(e.z.greaterThan(1-1e-4),()=>{n.assign(H(0,0,-1))}).else(()=>{const r=i.uv(e.add(H(-.01,0,0))).r.sub(i.uv(e.add(H(.01,0,0))).r),o=i.uv(e.add(H(0,-.01,0))).r.sub(i.uv(e.add(H(0,.01,0))).r),a=i.uv(e.add(H(0,0,-.01))).r.sub(i.uv(e.add(H(0,0,.01))).r);n.assign(H(r,o,a))}),n.normalize()});class fp extends fs{constructor(e,t=null,n=null){super(e,t,n),this.isTexture3DNode=!0}getInputType(){return"texture3D"}getDefaultUV(){return H(.5,.5,.5)}setUpdateMatrix(){}setupUV(e,t){return t}generateUV(e,t){return t.build(e,"vec3")}normal(e){return oE({texture:this,uv:e})}}const aE=B(fp);J("Texture3DNode",fp);class lE extends rr{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}J("UserDataNode",lE);const cE=ae(({base:i,blend:e})=>{const t=n=>e[n].lessThan(Qd).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return H(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),uE=ae(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return H(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),hE=ae(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return H(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),dE=ae(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return H(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class Ht extends it{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let r=null;return e===Ht.BURN?r=cE(s):e===Ht.DODGE?r=uE(s):e===Ht.SCREEN?r=hE(s):e===Ht.OVERLAY&&(r=dE(s)),r}}Ht.BURN="burn";Ht.DODGE="dodge";Ht.SCREEN="screen";Ht.OVERLAY="overlay";const fE=B(Ht,Ht.BURN),pE=B(Ht,Ht.DODGE),mE=B(Ht,Ht.OVERLAY),gE=B(Ht,Ht.SCREEN);I("burn",fE);I("dodge",pE);I("overlay",mE);I("screen",gE);J("BlendModeNode",Ht);const _E=ae(({textureNode:i,bumpScale:e})=>{const t=s=>i.cache().context({getUV:r=>s(r.uvNode||mn()),forceUVContext:!0}),n=X(t(s=>s));return ee(X(t(s=>s.add(s.dFdx()))).sub(n),X(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),vE=ae(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),l=o.cross(s),c=s.dot(a).mul(Go),u=c.sign().mul(n.x.mul(a).add(n.y.mul(l)));return c.abs().mul(t).sub(u).normalize()});class pp extends it{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=_E({textureNode:this.textureNode,bumpScale:e});return vE({surf_pos:Qt,surf_norm:ki,dHdxy:t})}}const xE=B(pp);I("bumpMap",xE);J("BumpMapNode",pp);const ME=ae(({color:i,adjustment:e})=>e.mix(On(i.rgb),i.rgb)),yE=ae(({color:i,adjustment:e})=>{const t=fn(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return Dt(i.rgb,n,s)}),SE=ae(({color:i,adjustment:e})=>{const t=H(.57735,.57735,.57735),n=e.cos();return H(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(oa(t,i.rgb).mul(n.oneMinus())))))});class dn extends it{constructor(e,t,n=X(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let r=null;return e===dn.SATURATION?r=ME(s):e===dn.VIBRANCE?r=yE(s):e===dn.HUE?r=SE(s):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}dn.SATURATION="saturation";dn.VIBRANCE="vibrance";dn.HUE="hue";const TE=B(dn,dn.SATURATION),EE=B(dn,dn.VIBRANCE),NE=B(dn,dn.HUE),AE=H(.2125,.7154,.0721),On=(i,e=AE)=>oa(i,e),mp=(i,e)=>Dt(H(0),i,On(i).sub(e).max(0));I("saturation",TE);I("vibrance",EE);I("hue",NE);I("threshold",mp);J("ColorAdjustmentNode",dn);const wE=ae(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),o=e.dFdy(),a=s.dFdx(),l=s.dFdy(),c=t,u=o.cross(c),d=c.cross(r),h=u.mul(a.x).add(d.mul(l.x)),p=u.mul(a.y).add(d.mul(l.y)),g=h.dot(h).max(p.dot(p)),_=Go.mul(g.inverseSqrt());return fn(h.mul(n.x,_),p.mul(n.y,_),c.mul(n.z)).normalize()});class gp extends it{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Ei}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=H(s.xy.mul(n),s.z));let r=null;return t===rd?r=mf.mul(s).normalize():t===Ei&&(e.hasGeometryAttribute("tangent")===!0?r=Bs.mul(s).normalize():r=wE({eye_pos:Qt,surf_norm:ki,mapN:s,uv:mn()})),r}}const bE=B(gp);I("normalMap",bE);J("NormalMapNode",gp);class _p extends it{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const RE=B(_p);I("posterize",RE);J("PosterizeNode",_p);const CE=ae(({color:i,exposure:e})=>i.mul(e).clamp()),LE=ae(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),PE=ae(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),IE=ae(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),DE=ae(({color:i,exposure:e})=>{const t=nn(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=nn(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=IE({color:i}),i=n.mul(i),i.clamp()}),UE=nn(H(1.6605,-.1246,-.0182),H(-.5876,1.1329,-.1006),H(-.0728,-.0083,1.1187)),OE=nn(H(.6274,.0691,.0164),H(.3293,.9195,.088),H(.0433,.0113,.8956)),FE=ae(([i])=>{const e=H(i).toVar(),t=H(e.mul(e)).toVar(),n=H(t.mul(t)).toVar();return X(15.5).mul(n.mul(t)).sub(ct(40.14,n.mul(e))).add(ct(31.96,n).sub(ct(6.868,t.mul(e))).add(ct(.4298,t).add(ct(.1191,e).sub(.00232))))}),BE=ae(({color:i,exposure:e})=>{const t=H(i).toVar(),n=nn(H(.856627153315983,.137318972929847,.11189821299995),H(.0951212405381588,.761241990602591,.0767994186031903),H(.0482516061458583,.101439036467562,.811302368396859)),s=nn(H(1.1271005818144368,-.1413297634984383,-.14132976349843826),H(-.11060664309660323,1.157823702216272,-.11060664309660294),H(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=X(-12.47393),o=X(4.026069);return t.mulAssign(e),t.assign(OE.mul(t)),t.assign(n.mul(t)),t.assign(ln(t,1e-10)),t.assign(ia(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(ls(t,0,1)),t.assign(FE(t)),t.assign(s.mul(t)),t.assign(xi(ln(H(0),t),H(2.2))),t.assign(UE.mul(t)),t.assign(ls(t,0,1)),t}),zE=ae(({color:i,exposure:e})=>{const t=X(.76),n=X(.15);i=i.mul(e);const s=vi(i.r,vi(i.g,i.b)),r=bn(s.lessThan(.08),s.sub(ct(6.25,s.mul(s))),.04);i.subAssign(r);const o=ln(i.r,ln(i.g,i.b));wt(o.lessThan(t),()=>i);const a=ii(1,t),l=ii(1,a.mul(a).div(o.add(a.sub(t))));i.mulAssign(l.div(o));const c=ii(1,Ai(1,n.mul(o.sub(l)).add(1)));return Dt(i,H(l),c)}).setLayout({name:"NeutralToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),VE={[Gh]:CE,[kh]:LE,[Wh]:PE,[Xh]:DE,[qh]:BE,[Yh]:zE};class vp extends it{constructor(e=En,t=GE,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===En)return t;const s={exposure:this.exposureNode,color:t},r=VE[n];let o=null;return r?o=r(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const HE=(i,e,t)=>re(new vp(i,re(e),re(t))),GE=nE("toneMappingExposure","float");I("toneMapping",(i,e,t)=>HE(e,t,i));J("ToneMappingNode",vp);let il=null;class xp extends Ur{constructor(e=br,t=null){il===null&&(il=new bd),super(e,t,il)}updateReference(){return this}}const kE=B(xp);I("viewportSharedTexture",kE);J("ViewportSharedTextureNode",xp);const WE=new we;class cc extends fs{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class Or extends it{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new Ir;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const r=new Ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hs});r.texture.name="PostProcessing",r.depthTexture=s,this.renderTarget=r,this.updateBeforeType=tt.FRAME,this._textureNode=re(new cc(this,r.texture)),this._depthTextureNode=re(new cc(this,s)),this._linearDepthNode=null,this._viewZNode=null,this._cameraNear=Fe(0),this._cameraFar=Fe(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=Hf(this._depthTextureNode,e,t)}return this._viewZNode}getLinearDepthNode(){if(this._linearDepthNode===null){const e=this._cameraNear,t=this._cameraFar;this._linearDepthNode=No(this.getViewZNode(),e,t)}return this._linearDepthNode}setup(){return this.scope===Or.COLOR?this.getTextureNode():this.getLinearDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(WE);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,l=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=En,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(l)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Or.COLOR="color";Or.DEPTH="depth";const ha=(i,e)=>re(new cc(i,e));J("PassNode",Or);const sl=new $o(-1,1,1,-1,0,1);class XE extends wi{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wn(t,2))}}const qE=new XE;class Fr extends Gn{constructor(e=null){super(qE,e),this.camera=sl}renderAsync(e){return e.renderAsync(this,sl)}render(e){e.render(this,sl)}}const Ch=new Fr,Lh=new Fr;class YE extends it{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=ee(1),this._invSize=Fe(new we),this._passDirection=Fe(new we),this._horizontalRT=new Ni,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Ni,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=ha(this,this._verticalRT.texture),this.updateBeforeType=tt.RENDER,this.resolution=new we(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=t.getRenderTarget(),o=n.value;Ch.material=this._material,Lh.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),Ch.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),Lh.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),_e();const n=t.uvNode||mn(),s=l=>t.cache().context({getUV:()=>l,forceUVContext:!0}),r=ae(()=>{const l=3+2*this.sigma,c=this._getCoefficients(l),u=this._invSize,d=ee(this.directionNode).mul(this._passDirection),h=X(c[0]).toVar(),p=_e(s(n).mul(h)).toVar();for(let g=1;g<l;g++){const _=X(g),m=X(c[g]),f=ee(d.mul(u.mul(_))).toVar(),T=_e(s(n.add(f))),x=_e(s(n.sub(f)));p.addAssign(T.add(x).mul(m)),h.addAssign(ct(2,m))}return p.div(h)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const $E=(i,e)=>re(new YE(re(i),e));I("gaussianBlur",$E);const rl=new we,Ph=new Fr;class KE extends it{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Xt(),this.damp=Fe(t),this._compRT=new Ni,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Ni,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=ha(this,this._compRT.texture),this.updateBeforeType=tt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,r=n.value.type;this._compRT.texture.type=r,this._oldRT.texture.type=r,t.getDrawingBufferSize(rl),this.setSize(rl.x,rl.y);const o=t.toneMapping,a=t.toneMappingNode,l=t.getRenderTarget(),c=n.value;this.textureNodeOld.value=this._oldRT.texture,t.toneMapping=En,t.toneMappingNode=null,t.setRenderTarget(this._compRT),Ph.render(t);const u=this._oldRT;this._oldRT=this._compRT,this._compRT=u,t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(l),n.value=c}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),_e();const s=t.uvNode||mn();n.uvNode=s;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=ae(([u,d])=>{const h=X(d).toVar(),p=_e(u).toVar();return ln(Vc(p.sub(h)),0)}),a=ae(()=>{const u=_e(n),d=_e(r(s));return u.mulAssign(this.damp.mul(o(u,.1))),ln(d,u)}),l=this._materialComposed||(this._materialComposed=e.createNodeMaterial());l.fragmentNode=a(),Ph.material=l;const c=e.getNodeProperties(this);return c.textureNode=t,this._textureNode}}const ZE=(i,e)=>re(new KE(re(i),e));I("afterImage",ZE);const Ih=new Fr;class jE extends it{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=H(.1,0,1),this.samples=s,this.resolution=new we(1,1),this._renderTarget=new Ni,this._renderTarget.texture.name="anamorphic",this._invSize=Fe(new we),this._textureNode=ha(this,this._renderTarget.texture),this.updateBeforeType=tt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;Ih.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),Ih.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),_e();const n=t.uvNode||mn(),s=l=>t.cache().context({getUV:()=>l,forceUVContext:!0}),r=ae(()=>{const l=this.samples,c=Math.floor(l/2),u=H(0).toVar();return kn({start:-c,end:c},({i:d})=>{const h=X(d).abs().div(c).oneMinus(),p=ee(n.x.add(this._invSize.x.mul(d).mul(this.scaleNode)),n.y),g=s(p),_=mp(g,this.tresholdNode).mul(h);u.addAssign(_)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const JE=(i,e=.9,t=3,n=32)=>re(new jE(re(i),re(e),re(t),n));I("anamorphic",JE);class QE extends it{constructor(e){super(),this.textureNode=e,this.updateBeforeType=tt.RENDER,this._invSize=Fe(new we)}updateBefore(){const e=this.textureNode.value;this._invSize.value.set(1/e.image.width,1/e.image.height)}setup(){const{textureNode:e}=this,t=e.uvNode||mn(),n=o=>this.textureNode.cache().context({getUV:()=>o,forceUVContext:!0});return ae(()=>{const o=this._invSize,a=nn(-1,-2,-1,0,0,0,1,2,1),l=nn(-1,0,1,-2,0,2,-1,0,1),c=On(n(t.add(o.mul(ee(-1,-1)))).xyz),u=On(n(t.add(o.mul(ee(-1,0)))).xyz),d=On(n(t.add(o.mul(ee(-1,1)))).xyz),h=On(n(t.add(o.mul(ee(0,-1)))).xyz),p=On(n(t.add(o.mul(ee(0,0)))).xyz),g=On(n(t.add(o.mul(ee(0,1)))).xyz),_=On(n(t.add(o.mul(ee(1,-1)))).xyz),m=On(n(t.add(o.mul(ee(1,0)))).xyz),f=On(n(t.add(o.mul(ee(1,1)))).xyz),T=fn(a[0][0].mul(c),a[1][0].mul(h),a[2][0].mul(_),a[0][1].mul(u),a[1][1].mul(p),a[2][1].mul(m),a[0][2].mul(d),a[1][2].mul(g),a[2][2].mul(f)),x=fn(l[0][0].mul(c),l[1][0].mul(h),l[2][0].mul(_),l[0][1].mul(u),l[1][1].mul(p),l[2][1].mul(m),l[0][2].mul(d),l[1][2].mul(g),l[2][2].mul(f)),E=T.mul(T).add(x.mul(x)).sqrt();return _e(H(E),1)})()}}const eN=i=>re(new QE(re(i)));I("sobel",eN);class tN extends it{constructor(e,t,n=1,s=.025,r=1){super(),this.textureNode=e,this.viewZNode=t,this.focus=Fe(n),this.aperture=Fe(s),this.maxblur=Fe(r),this._aspect=Fe(0),this.updateBeforeType=tt.RENDER}updateBefore(){const e=this.textureNode.value;this._aspect.value=e.image.width/e.image.height}setup(){const{textureNode:e}=this,t=e.uvNode||mn(),n=o=>this.textureNode.uv(o);return ae(()=>{const o=ee(1,this._aspect),a=this.focus.add(this.viewZNode),l=ee(ls(a.mul(this.aperture),this.maxblur.negate(),this.maxblur)),c=l.mul(.9),u=l.mul(.7),d=l.mul(.4);let h=_e(0);return h=h.add(n(t)),h=h.add(n(t.add(ee(0,.4).mul(o).mul(l)))),h=h.add(n(t.add(ee(.15,.37).mul(o).mul(l)))),h=h.add(n(t.add(ee(.29,.29).mul(o).mul(l)))),h=h.add(n(t.add(ee(-.37,.15).mul(o).mul(l)))),h=h.add(n(t.add(ee(.4,0).mul(o).mul(l)))),h=h.add(n(t.add(ee(.37,-.15).mul(o).mul(l)))),h=h.add(n(t.add(ee(.29,-.29).mul(o).mul(l)))),h=h.add(n(t.add(ee(-.15,-.37).mul(o).mul(l)))),h=h.add(n(t.add(ee(0,-.4).mul(o).mul(l)))),h=h.add(n(t.add(ee(-.15,.37).mul(o).mul(l)))),h=h.add(n(t.add(ee(-.29,.29).mul(o).mul(l)))),h=h.add(n(t.add(ee(.37,.15).mul(o).mul(l)))),h=h.add(n(t.add(ee(-.4,0).mul(o).mul(l)))),h=h.add(n(t.add(ee(-.37,-.15).mul(o).mul(l)))),h=h.add(n(t.add(ee(-.29,-.29).mul(o).mul(l)))),h=h.add(n(t.add(ee(.15,-.37).mul(o).mul(l)))),h=h.add(n(t.add(ee(.15,.37).mul(o).mul(c)))),h=h.add(n(t.add(ee(-.37,.15).mul(o).mul(c)))),h=h.add(n(t.add(ee(.37,-.15).mul(o).mul(c)))),h=h.add(n(t.add(ee(-.15,-.37).mul(o).mul(c)))),h=h.add(n(t.add(ee(-.15,.37).mul(o).mul(c)))),h=h.add(n(t.add(ee(.37,.15).mul(o).mul(c)))),h=h.add(n(t.add(ee(-.37,-.15).mul(o).mul(c)))),h=h.add(n(t.add(ee(.15,-.37).mul(o).mul(c)))),h=h.add(n(t.add(ee(.29,.29).mul(o).mul(u)))),h=h.add(n(t.add(ee(.4,0).mul(o).mul(u)))),h=h.add(n(t.add(ee(.29,-.29).mul(o).mul(u)))),h=h.add(n(t.add(ee(0,-.4).mul(o).mul(u)))),h=h.add(n(t.add(ee(-.29,.29).mul(o).mul(u)))),h=h.add(n(t.add(ee(-.4,0).mul(o).mul(u)))),h=h.add(n(t.add(ee(-.29,-.29).mul(o).mul(u)))),h=h.add(n(t.add(ee(0,.4).mul(o).mul(u)))),h=h.add(n(t.add(ee(.29,.29).mul(o).mul(d)))),h=h.add(n(t.add(ee(.4,0).mul(o).mul(d)))),h=h.add(n(t.add(ee(.29,-.29).mul(o).mul(d)))),h=h.add(n(t.add(ee(0,-.4).mul(o).mul(d)))),h=h.add(n(t.add(ee(-.29,.29).mul(o).mul(d)))),h=h.add(n(t.add(ee(-.4,0).mul(o).mul(d)))),h=h.add(n(t.add(ee(-.29,-.29).mul(o).mul(d)))),h=h.add(n(t.add(ee(0,.4).mul(o).mul(d)))),h=h.div(41),h.a=1,_e(h)})()}}const nN=(i,e,t,n,s)=>re(new tN(re(i),re(e),t,n,s));I("dof",nN);const Dh=new Fr;class iN extends it{constructor(e,t=new we(.5,.5),n=1.57,s=1){super("vec4"),this.colorNode=e,this.center=Fe(t),this.angle=Fe(n),this.scale=Fe(s),this._renderTarget=new Ni,this._renderTarget.texture.name="dotScreen",this._size=Fe(new we),this._textureNode=ha(this,this._renderTarget.texture),this.updateBeforeType=tt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._size.value.set(e,t),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.colorNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;Dh.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),Dh.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.colorNode,n=ae(()=>{const a=Tn(this.angle),l=jn(this.angle),c=mn().mul(this._size).sub(this.center),u=ee(l.mul(c.x).sub(a.mul(c.y)),a.mul(c.x).add(l.mul(c.y))).mul(this.scale);return Tn(u.x).mul(Tn(u.y)).mul(4)}),s=ae(()=>{const a=t,l=fn(a.r,a.g,a.b).div(3);return _e(H(l.mul(10).sub(5).add(n())),a.a)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=s();const o=e.getNodeProperties(this);return o.textureNode=t,this._textureNode}}const sN=(i,e,t,n)=>re(new iN(re(i),e,t,n));I("dotScreen",sN);class rN extends it{constructor(e,t=.005,n=0){super("vec4"),this.textureNode=e,this.amount=Fe(t),this.angle=Fe(n),this.updateBeforeType=tt.RENDER}updateBefore(){}setup(){const{textureNode:e}=this,t=e.uvNode||mn(),n=r=>this.textureNode.uv(r);return ae(()=>{const r=ee(jn(this.angle),Tn(this.angle)).mul(this.amount),o=n(t.add(r)),a=n(t),l=n(t.sub(r));return _e(o.r,a.g,l.b,a.a)})()}}const oN=(i,e,t)=>re(new rN(re(i),e,t));I("rgbShift",oN);class Mp extends it{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const l=s[a],c=r[a];t.push(c.build(e,l.type))}else for(const a of s){const l=r[a.name];if(l!==void 0)t.push(l.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const aN=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?Hs(e):ta(e[0]),re(new Mp(re(i),e)));I("call",aN);J("FunctionCallNode",Mp);class yp extends Pe{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Xi,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:X()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=Dd(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Ud(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const Ao=B(yp);I("scriptableValue",Ao);J("ScriptableValueNode",yp);class Sp extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class lN{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const ol=new Sp;class Tp extends Pe{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new Sp,this._output=Ao(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=Ao(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=Ao(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(c,u)=>this.setOutput(c,u),n=new lN(this),s=ol.get("THREE"),r=ol.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,ol,e,t,s,r];this._object=o(...a);const l=this._object.layout;if(l&&(l.cache===!1&&this._local.clear(),this._output.outputType=l.outputType||null,Array.isArray(l.elements)))for(const c of l.elements){const u=c.id||c.name;c.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=c.inputType),c.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=c.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:X()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=s+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const cN=B(Tp);I("scriptable",cN);J("ScriptableNode",Tp);class da extends Pe{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||Qt.z).negate()}setup(){return this.factorNode}}const uN=B(da);I("fog",uN);J("FogNode",da);class Ep extends da{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return ri(this.nearNode,this.farNode,t)}}const hN=B(Ep);I("rangeFog",hN);J("FogRangeNode",Ep);class Np extends da{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const dN=B(Np);I("densityFog",dN);J("FogExp2Node",Np);let es=null,ts=null;class Ap extends Pe{constructor(e=X(),t=X()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(zi(this.minNode.value)),n=e.getTypeLength(zi(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.count>1?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.count>1){const s=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(zi(s)),a=e.getTypeLength(zi(r));es=es||new et,ts=ts||new et,es.setScalar(0),ts.setScalar(0),o===1?es.setScalar(s):s.isColor?es.set(s.r,s.g,s.b):es.set(s.x,s.y,s.z||0,s.w||0),a===1?ts.setScalar(r):r.isColor?ts.set(r.r,r.g,r.b):ts.set(r.x,r.y,r.z||0,r.w||0);const l=4,c=l*t.count,u=new Float32Array(c);for(let h=0;h<c;h++){const p=h%l,g=es.getComponent(p),_=ts.getComponent(p);u[h]=ld.lerp(g,_,Math.random())}const d=this.getNodeType(e);if(t.count<=4096)n=Hc(u,"vec4",t.count).element(Dc).convert(d);else{const h=new Nd(u,4);e.geometry.setAttribute("__range"+this.id,h),n=tc(h).convert(d)}}else n=X(0);return n}}B(Ap);J("RangeNode",Ap);class wp extends Pe{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=tt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const fN=(i,e,t)=>re(new wp(re(i),e,t));I("compute",fN);J("ComputeNode",wp);class us extends Pe{constructor(e=us.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===us.TARGET_DIRECTION&&(n=or.transformDirection(Jl(t).sub(Jl(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}us.TARGET_DIRECTION="targetDirection";const bp=B(us,us.TARGET_DIRECTION);J("LightNode",us);const Rp=ae(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class Cp extends qi{constructor(e=null){super(e),this.cutoffDistanceNode=Fe(0),this.decayExponentNode=Fe(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:r}=this,o=e.context.lightingModel,a=Gc(r).sub(Qt),l=a.normalize(),c=a.length(),u=Rp({lightDistance:c,cutoffDistance:n,decayExponent:s}),d=t.mul(u),h=e.context.reflectedLight;o.direct({lightDirection:l,lightColor:d,reflectedLight:h,shadowMask:this.shadowMaskNode},e.stack,e)}}J("PointLightNode",Cp);ms(_M,Cp);class Lp extends qi{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=bp(this.light),r=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:r,shadowMask:this.shadowMaskNode},e.stack,e)}}J("DirectionalLightNode",Lp);ms(xM,Lp);const al=new _t,fo=new _t;let po,ll;class Pp extends qi{constructor(e=null){super(e),this.halfHeight=Fe(new U),this.halfWidth=Fe(new U)}update(e){super.update(e);const{light:t}=this,n=e.camera.matrixWorldInverse;fo.identity(),al.copy(t.matrixWorld),al.premultiply(n),fo.extractRotation(al),this.halfWidth.value.set(t.width*.5,0,0),this.halfHeight.value.set(0,t.height*.5,0),this.halfWidth.value.applyMatrix4(fo),this.halfHeight.value.applyMatrix4(fo)}setup(e){super.setup(e),po===void 0&&(e.isAvailable("float32Filterable")?(po=Xt(pe.LTC_FLOAT_1),ll=Xt(pe.LTC_FLOAT_2)):(po=Xt(pe.LTC_HALF_1),ll=Xt(pe.LTC_HALF_2)));const{colorNode:t,light:n}=this,s=e.context.lightingModel,r=Gc(n),o=e.context.reflectedLight;s.directRectArea({lightColor:t,lightPosition:r,halfWidth:this.halfWidth,halfHeight:this.halfHeight,reflectedLight:o,ltc_1:po,ltc_2:ll},e.stack,e)}}J("RectAreaLightNode",Pp);ms(yM,Pp);class qc extends qi{constructor(e=null){super(e),this.coneCosNode=Fe(0),this.penumbraCosNode=Fe(0),this.cutoffDistanceNode=Fe(0),this.decayExponentNode=Fe(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return ri(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:r,light:o}=this,a=Gc(o).sub(Qt),l=a.normalize(),c=l.dot(bp(o)),u=this.getSpotAttenuation(c),d=a.length(),h=Rp({lightDistance:d,cutoffDistance:s,decayExponent:r}),p=n.mul(u).mul(h),g=e.context.reflectedLight;t.direct({lightDirection:l,lightColor:p,reflectedLight:g,shadowMask:this.shadowMaskNode},e.stack,e)}}J("SpotLightNode",qc);ms(Ld,qc);class pN extends Ld{constructor(e,t,n,s,r,o){super(e,t,n,s,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}class Ip extends qc{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Xt(t,ee(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}J("IESSpotLightNode",Ip);ms(pN,Ip);class Dp extends qi{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}J("AmbientLightNode",Dp);ms(MM,Dp);class Up extends qi{constructor(e=null){super(e),this.lightPositionNode=Jl(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=Fe(new Le)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,o=ki.dot(s).mul(.5).add(.5),a=Dt(n,t,o);e.context.irradiance.addAssign(a)}}J("HemisphereLightNode",Up);ms(pM,Up);const mN=ae(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class Op extends it{constructor(e=mn()){super("float"),this.uvNode=e}setup(){return mN({uv:this.uvNode})}}const gN=B(Op);I("checker",gN);J("CheckerNode",Op);const _N=new wd;class vN extends sn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(_N),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=ae(()=>{It(ee(),"vUv").assign(mn());const n=jt("instancePosition"),s=St("vec4","mvPos");s.assign(cs.mul(_e(n,1)));const r=qs.z.div(qs.w),o=Qn.mul(s),a=St("vec2","offset");return a.assign(an.xy),a.assign(a.mul(sT)),a.assign(a.div(qs.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(_e(a,0,0))),o})(),this.fragmentNode=ae(()=>{const n=It(ee(),"vUv"),s=St("float","alpha");s.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const c=St("float","dlen");c.assign(a.fwidth()),s.assign(ri(c.oneMinus(),c.add(1),a).oneMinus())}else a.greaterThan(1).discard();let l;return this.pointColorNode?l=this.pointColorNode:t?l=jt("instanceColor").mul(wr):l=wr,_e(l,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Gt("InstancedPointsNodeMaterial",vN);const xN=new Ad;class MN extends sn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(xN),this.setValues(e)}}Gt("LineBasicNodeMaterial",MN);const yN=new Cd;class SN extends sn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(yN),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?X(this.dashScaleNode):Ql,n=this.dashSizeNode?X(this.dashSizeNode):vf,s=this.dashSizeNode?X(this.dashGapNode):xf;Ws.assign(n),Fo.assign(s);const r=It(jt("lineDistance").mul(t));(e?r.add(e):r).mod(Ws.add(Fo)).greaterThan(Ws).discard()}}Gt("LineDashedNodeMaterial",SN);const TN=new Cd;class EN extends sn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(TN),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,r=ae(({start:a,end:l})=>{const c=Qn.element(2).element(2),h=Qn.element(3).element(2).mul(-.5).div(c).sub(a.z).div(l.z.sub(a.z));return _e(Dt(a.xyz,l.xyz,h),l.w)});this.vertexNode=ae(()=>{Kn("vec2","vUv").assign(mn());const a=jt("instanceStart"),l=jt("instanceEnd"),c=St("vec4","start"),u=St("vec4","end");c.assign(cs.mul(_e(a,1))),u.assign(cs.mul(_e(l,1))),s&&(Kn("vec3","worldStart").assign(c.xyz),Kn("vec3","worldEnd").assign(u.xyz));const d=qs.z.div(qs.w),h=Qn.element(2).element(3).equal(-1);wt(h,()=>{wt(c.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:c,end:u}))}).elseif(u.z.lessThan(0).and(c.z.greaterThanEqual(0)),()=>{c.assign(r({start:u,end:c}))})});const p=Qn.mul(c),g=Qn.mul(u),_=p.xyz.div(p.w),m=g.xyz.div(g.w),f=m.xy.sub(_.xy).temp();f.x.assign(f.x.mul(d)),f.assign(f.normalize());const T=Io(_e());if(s){const x=u.xyz.sub(c.xyz).normalize(),E=Dt(c.xyz,u.xyz,.5).normalize(),F=x.cross(E).normalize(),A=x.cross(F),w=Kn("vec4","worldPos");w.assign(an.y.lessThan(.5).cond(c,u));const D=qa.mul(.5);w.addAssign(_e(an.x.lessThan(0).cond(F.mul(D),F.mul(D).negate()),0)),n||(w.addAssign(_e(an.y.lessThan(.5).cond(x.mul(D).negate(),x.mul(D)),0)),w.addAssign(_e(A.mul(D),0)),wt(an.y.greaterThan(1).or(an.y.lessThan(0)),()=>{w.subAssign(_e(A.mul(2).mul(D),0))})),T.assign(Qn.mul(w));const S=Io(H());S.assign(an.y.lessThan(.5).cond(_,m)),T.z.assign(S.z.mul(T.w))}else{const x=St("vec2","offset");x.assign(ee(f.y,f.x.negate())),f.x.assign(f.x.div(d)),x.x.assign(x.x.div(d)),x.assign(an.x.lessThan(0).cond(x.negate(),x)),wt(an.y.lessThan(0),()=>{x.assign(x.sub(f))}).elseif(an.y.greaterThan(1),()=>{x.assign(x.add(f))}),x.assign(x.mul(qa)),x.assign(x.div(qs.w)),T.assign(an.y.lessThan(.5).cond(p,g)),x.assign(x.mul(T.w)),T.assign(T.add(_e(x,0,0)))}return T})();const o=ae(({p1:a,p2:l,p3:c,p4:u})=>{const d=a.sub(c),h=u.sub(c),p=l.sub(a),g=d.dot(h),_=h.dot(p),m=d.dot(p),f=h.dot(h),x=p.dot(p).mul(f).sub(_.mul(_)),F=g.mul(_).sub(m.mul(f)).div(x).clamp(),A=g.add(_.mul(F)).div(f).clamp();return ee(F,A)});this.fragmentNode=ae(()=>{const a=Kn("vec2","vUv");if(n){const u=this.offsetNode?X(this.offsetNodeNode):ph,d=this.dashScaleNode?X(this.dashScaleNode):Ql,h=this.dashSizeNode?X(this.dashSizeNode):vf,p=this.dashSizeNode?X(this.dashGapNode):xf;Ws.assign(h),Fo.assign(p);const g=jt("instanceDistanceStart"),_=jt("instanceDistanceEnd"),m=an.y.lessThan(.5).cond(d.mul(g),Ql.mul(_)),f=It(m.add(ph)),T=u?f.add(u):f;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),T.mod(Ws.add(Fo)).greaterThan(Ws).discard()}const l=St("float","alpha");if(l.assign(1),s){const u=Kn("vec3","worldStart"),d=Kn("vec3","worldEnd"),h=Kn("vec4","worldPos").xyz.normalize().mul(1e5),p=d.sub(u),g=o({p1:u,p2:d,p3:H(0,0,0),p4:h}),_=u.add(p.mul(g.x)),m=h.mul(g.y),x=_.sub(m).length().div(qa);if(!n)if(e){const E=x.fwidth();l.assign(ri(E.negate().add(.5),E.add(.5),x).oneMinus())}else x.greaterThan(.5).discard()}else if(e){const u=a.x,d=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),h=u.mul(u).add(d.mul(d)),p=St("float","dlen");p.assign(h.fwidth()),wt(a.y.abs().greaterThan(1),()=>{l.assign(ri(p.oneMinus(),p.add(1),h).oneMinus())})}else wt(a.y.abs().greaterThan(1),()=>{const u=a.x,d=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(d.mul(d)).greaterThan(1).discard()});let c;if(this.lineColorNode)c=this.lineColorNode;else if(t){const u=jt("instanceColorStart"),d=jt("instanceColorEnd");c=an.y.lessThan(.5).cond(u,d).mul(wr)}else c=wr;return _e(c,l)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}Gt("Line2NodeMaterial",EN);const NN=new lM;class AN extends sn{constructor(e){super(),this.lights=!1,this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(NN),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?X(this.opacityNode):_f;gt.assign(_e(ep(At),e))}}Gt("MeshNormalNodeMaterial",AN);const wN=new yc;class bN extends sn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(wN),this.setValues(e)}}Gt("MeshBasicNodeMaterial",bN);const Rr=ae(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),tr=ae(i=>i.diffuseColor.mul(1/Math.PI)),RN=()=>X(.25),CN=ae(({dotNH:i})=>$l.mul(X(.5)).add(1).mul(X(1/Math.PI)).mul(i.pow($l))),LN=ae(({lightDirection:i})=>{const e=i.add(Mt).normalize(),t=At.dot(e).clamp(),n=Mt.dot(e).clamp(),s=Rr({f0:yn,f90:1,dotVH:n}),r=RN(),o=CN({dotNH:t});return s.mul(r).mul(o)});class Fp extends na{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=At.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(tr({diffuseColor:gt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(LN({lightDirection:e})).mul(zS))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(tr({diffuseColor:gt})))}}const PN=new cM;class IN extends sn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(PN),this.setValues(e)}setupLightingModel(){return new Fp(!1)}}Gt("MeshLambertNodeMaterial",IN);const DN=new oM;class UN extends sn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(DN),this.setValues(e)}setupLightingModel(){return new Fp}setupVariants(){const e=(this.shininessNode?X(this.shininessNode):US).max(1e-4);$l.assign(e);const t=this.specularNode||FS;yn.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Gt("MeshPhongNodeMaterial",UN);const ON=ae(()=>{const i=zo.dFdx().abs().max(zo.dFdy().abs());return i.x.max(i.y).max(i.z)}),Bp=ae(i=>{const{roughness:e}=i,t=ON();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),FN=ae(({alpha:i,dotNL:e,dotNV:t})=>{const n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return Ai(.5,s.add(r).max(Qd))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),BN=ae(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:r,dotNV:o,dotNL:a})=>{const l=a.mul(H(i.mul(t),e.mul(n),o).length()),c=o.mul(H(i.mul(s),e.mul(r),a).length());return Ai(.5,l.add(c)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),zN=ae(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),VN=X(1/Math.PI),HN=ae(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{const r=i.mul(e),o=H(e.mul(n),i.mul(s),r.mul(t)),a=o.dot(o),l=r.div(a);return VN.mul(r.mul(l.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),Uh=ae(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=i,l=i.normalView||At,c=s.pow2(),u=e.add(Mt).normalize(),d=l.dot(e).clamp(),h=l.dot(Mt).clamp(),p=l.dot(u).clamp(),g=Mt.dot(u).clamp();let _=Rr({f0:t,f90:n,dotVH:g}),m,f;if(lh(o)&&(_=Oc.mix(_,r)),lh(a)){const T=To.dot(e),x=To.dot(Mt),E=To.dot(u),F=ks.dot(e),A=ks.dot(Mt),w=ks.dot(u);m=BN({alphaT:Yl,alphaB:c,dotTV:x,dotBV:A,dotTL:T,dotBL:F,dotNV:h,dotNL:d}),f=HN({alphaT:Yl,alphaB:c,dotNH:p,dotTH:E,dotBH:w})}else m=FN({alpha:c,dotNL:d,dotNV:h}),f=zN({alpha:c,dotNH:p});return _.mul(m).mul(f)}),zp=ae(({roughness:i,dotNV:e})=>{const t=_e(-1,-.0275,-.572,.022),n=_e(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return ee(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),Vp=ae(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,r=zp({dotNV:e,roughness:s});return t.mul(r.x).add(n.mul(r.y))}),GN=ae(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(H(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),kN=ae(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=X(1).div(t),r=e.pow2().oneMinus().max(.0078125);return X(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),WN=ae(({dotNV:i,dotNL:e})=>X(1).div(X(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),XN=ae(({lightDirection:i})=>{const e=i.add(Mt).normalize(),t=At.dot(i).clamp(),n=At.dot(Mt).clamp(),s=At.dot(e).clamp(),r=kN({roughness:Uc,dotNH:s}),o=WN({dotNV:n,dotNL:t});return Os.mul(r).mul(o)}),qN=ae(({N:i,V:e,roughness:t})=>{const r=.0078125,o=i.dot(e).saturate(),a=ee(t,o.oneMinus().sqrt());return a.assign(a.mul(.984375).add(r)),a}).setLayout({name:"LTC_Uv",type:"vec2",inputs:[{name:"N",type:"vec3"},{name:"V",type:"vec3"},{name:"roughness",type:"float"}]}),YN=ae(({f:i})=>{const e=i.length();return ln(e.mul(e).add(i.z).div(e.add(1)),0)}).setLayout({name:"LTC_ClippedSphereFormFactor",type:"float",inputs:[{name:"f",type:"vec3"}]}),mo=ae(({v1:i,v2:e})=>{const t=i.dot(e),n=t.abs().toVar(),s=n.mul(.0145206).add(.4965155).mul(n).add(.8543985).toVar(),r=n.add(4.1616724).mul(n).add(3.417594).toVar(),o=s.div(r),a=t.greaterThan(0).cond(o,ln(t.mul(t).oneMinus(),1e-7).inverseSqrt().mul(.5).sub(o));return i.cross(e).mul(a)}).setLayout({name:"LTC_EdgeVectorFormFactor",type:"vec3",inputs:[{name:"v1",type:"vec3"},{name:"v2",type:"vec3"}]}),Oh=ae(({N:i,V:e,P:t,mInv:n,p0:s,p1:r,p2:o,p3:a})=>{const l=r.sub(s).toVar(),c=a.sub(s).toVar(),u=l.cross(c),d=H().toVar();return wt(u.dot(t.sub(s)).greaterThanEqual(0),()=>{const h=e.sub(i.mul(e.dot(i))).normalize(),p=i.cross(h).negate(),g=n.mul(nn(h,p,i).transpose()).toVar(),_=g.mul(s.sub(t)).normalize().toVar(),m=g.mul(r.sub(t)).normalize().toVar(),f=g.mul(o.sub(t)).normalize().toVar(),T=g.mul(a.sub(t)).normalize().toVar(),x=H(0).toVar();x.addAssign(mo({v1:_,v2:m})),x.addAssign(mo({v1:m,v2:f})),x.addAssign(mo({v1:f,v2:T})),x.addAssign(mo({v1:T,v2:_})),d.assign(H(YN({f:x})))}),d}).setLayout({name:"LTC_Evaluate",type:"vec3",inputs:[{name:"N",type:"vec3"},{name:"V",type:"vec3"},{name:"P",type:"vec3"},{name:"mInv",type:"mat3"},{name:"p0",type:"vec3"},{name:"p1",type:"vec3"},{name:"p2",type:"vec3"},{name:"p3",type:"vec3"}]}),Fh=ae(([i,e,t,n,s])=>{const r=H(af(e.negate(),Nr(i),Ai(1,n))),o=H(Xs(s[0].xyz),Xs(s[1].xyz),Xs(s[2].xyz));return Nr(r).mul(t.mul(o))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),$N=ae(([i,e])=>i.mul(ls(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),KN=Bf(),Bh=ae(([i,e,t])=>{const n=KN.uv(i),s=ia(X(sc.x)).mul($N(e,t));return n.bicubic(s)}),zh=ae(([i,e,t])=>(wt(t.notEqual(0),()=>{const n=nf(e).negate().div(t);return tf(n.negate().mul(i))}),H(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),ZN=ae(([i,e,t,n,s,r,o,a,l,c,u,d,h,p,g])=>{let _,m;if(g){_=_e().toVar(),m=H().toVar();const F=u.sub(1).mul(g.mul(.025)),A=H(u.sub(F),u,u.add(F));kn({start:0,end:3},({i:w})=>{const D=A.element(w),S=Fh(i,e,d,D,a),y=o.add(S),R=c.mul(l.mul(_e(y,1))),Y=ee(R.xy.div(R.w)).toVar();Y.addAssign(1),Y.divAssign(2),Y.assign(ee(Y.x,Y.y.oneMinus()));const k=Bh(Y,t,D);_.element(w).assign(k.element(w)),_.a.addAssign(k.a),m.element(w).assign(n.element(w).mul(zh(Xs(S),h,p).element(w)))}),_.a.divAssign(3)}else{const F=Fh(i,e,d,u,a),A=o.add(F),w=c.mul(l.mul(_e(A,1))),D=ee(w.xy.div(w.w)).toVar();D.addAssign(1),D.divAssign(2),D.assign(ee(D.x,D.y.oneMinus())),_=Bh(D,t,u),m=n.mul(zh(Xs(F),h,p))}const f=m.rgb.mul(_.rgb),T=i.dot(e).clamp(),x=H(Vp({dotNV:T,specularColor:s,specularF90:r,roughness:t})),E=m.r.add(m.g,m.b).div(3);return _e(x.oneMinus().mul(f),_.a.oneMinus().mul(E).oneMinus())}),jN=nn(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),JN=i=>{const e=i.sqrt();return H(1).add(e).div(H(1).sub(e))},Vh=(i,e)=>i.sub(e).div(i.add(e)).pow2(),QN=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=H(54856e-17,44201e-17,52481e-17),s=H(1681e3,1795300,2208400),r=H(43278e5,93046e5,66121e5),o=X(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=H(a.x.add(o),a.y,a.z).div(10685e-11),jN.mul(a)},eA=ae(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const r=Dt(i,e,ri(0,.03,n)),o=i.div(r).pow2().mul(X(1).sub(t.pow2())),l=X(1).sub(o).sqrt(),c=Vh(r,i),u=Rr({f0:c,f90:1,dotVH:t}),d=u.oneMinus(),h=r.lessThan(i).cond(Math.PI,0),p=X(Math.PI).sub(h),g=JN(s.clamp(0,.9999)),_=Vh(g,r.toVec3()),m=Rr({f0:_,f90:1,dotVH:l}),f=H(g.x.lessThan(r).cond(Math.PI,0),g.y.lessThan(r).cond(Math.PI,0),g.z.lessThan(r).cond(Math.PI,0)),T=r.mul(n,l,2),x=H(p).add(f),E=u.mul(m).clamp(1e-5,.9999),F=E.sqrt(),A=d.pow2().mul(m).div(H(1).sub(E));let D=u.add(A),S=A.sub(d);for(let y=1;y<=2;++y){S=S.mul(F);const R=QN(X(y).mul(T),X(y).mul(x)).mul(2);D=D.add(S.mul(R))}return D.max(H(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),tA=ae(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),r=bn(t.lessThan(.25),X(-339.2).mul(s).add(X(161.4).mul(t)).sub(25.9),X(-8.48).mul(s).add(X(14.3).mul(t)).sub(9.95)),o=bn(t.lessThan(.25),X(44).mul(s).sub(X(23.7).mul(t)).add(3.26),X(1.97).mul(s).sub(X(3.27).mul(t)).add(.72));return bn(t.lessThan(.25),0,X(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),cl=H(.04),ul=X(1);class Yc extends na{constructor(e=!1,t=!1,n=!1,s=!1,r=!1,o=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=s,this.transmission=r,this.dispersion=o,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=H().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=H().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=H().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=H().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=H().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=At.dot(Mt).clamp();this.iridescenceFresnel=eA({outsideIOR:X(1),eta2:qd,cosTheta1:t,thinFilmThickness:Yd,baseF0:yn}),this.iridescenceF0=GN({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=ec,n=pf.sub(ec).normalize(),s=gf;e.backdrop=ZN(s,n,_i,gt,yn,Oo,t,Ar,or,Qn,Eo,$d,Zd,Kd,this.dispersion?jd:null),e.backdropAlpha=Kl,gt.a.mulAssign(Dt(1,e.backdrop.a,Kl))}}computeMultiscattering(e,t,n){const s=At.dot(Mt).clamp(),r=zp({roughness:_i,dotNV:s}),a=(this.iridescenceF0?Oc.mix(yn,this.iridescenceF0):yn).mul(r.x).add(n.mul(r.y)),c=r.x.add(r.y).oneMinus(),u=yn.add(yn.oneMinus().mul(.047619)),d=a.mul(u).div(c.mul(u).oneMinus());e.addAssign(a),t.addAssign(d.mul(c))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=At.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(XN({lightDirection:e}))),this.clearcoat===!0){const a=Fs.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(Uh({lightDirection:e,f0:cl,f90:ul,roughness:Uo,normalView:Fs})))}n.directDiffuse.addAssign(r.mul(tr({diffuseColor:gt.rgb}))),n.directSpecular.addAssign(r.mul(Uh({lightDirection:e,f0:yn,f90:1,roughness:_i,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}directRectArea({lightColor:e,lightPosition:t,halfWidth:n,halfHeight:s,reflectedLight:r,ltc_1:o,ltc_2:a}){const l=t.add(n).sub(s),c=t.sub(n).sub(s),u=t.sub(n).add(s),d=t.add(n).add(s),h=At,p=Mt,g=Qt.toVar(),_=qN({N:h,V:p,roughness:_i}),m=o.uv(_).toVar(),f=a.uv(_).toVar(),T=nn(H(m.x,0,m.y),H(0,1,0),H(m.z,0,m.w)).toVar(),x=yn.mul(f.x).add(yn.oneMinus().mul(f.y)).toVar();r.directSpecular.addAssign(e.mul(x).mul(Oh({N:h,V:p,P:g,mInv:T,p0:l,p1:c,p2:u,p3:d}))),r.directDiffuse.addAssign(e.mul(gt).mul(Oh({N:h,V:p,P:g,mInv:nn(1,0,0,0,1,0,0,0,1),p0:l,p1:c,p2:u,p3:d})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(tr({diffuseColor:gt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(Os,tA({normal:At,viewDir:Mt,roughness:Uc}))),this.clearcoat===!0){const c=Fs.dot(Mt).clamp(),u=Vp({dotNV:c,specularColor:cl,specularF90:ul,roughness:Uo});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=H().temp("singleScattering"),r=H().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(s,r,Oo);const a=s.add(r),l=gt.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(l.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=At.dot(Mt).clamp().add(e),r=_i.mul(-16).oneMinus().negate().exp2(),o=e.sub(s.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=Fs.dot(Mt).clamp(),s=Rr({dotVH:n,f0:cl,f90:ul}),r=t.mul(ql.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(ql));t.assign(r)}if(this.sheen===!0){const n=Os.r.max(Os.g).max(Os.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const nA=new Rd;class Hp extends sn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(nA),this.setValues(e)}setupLightingModel(){return new Yc}setupSpecular(){const e=Dt(H(.04),gt.rgb,Do);yn.assign(e),Oo.assign(1)}setupVariants(){const e=this.metalnessNode?X(this.metalnessNode):HS;Do.assign(e);let t=this.roughnessNode?X(this.roughnessNode):VS;t=Bp({roughness:t}),_i.assign(t),this.setupSpecular(),gt.assign(_e(gt.rgb.mul(e.oneMinus()),gt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Gt("MeshStandardNodeMaterial",Hp);const iA=new rM;class Gp extends Hp{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.dispersionNode=null,this.anisotropyNode=null,this.setDefaultValues(iA),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}get useDispersion(){return this.dispersion>0||this.dispersionNode!==null}setupSpecular(){const e=this.iorNode?X(this.iorNode):tT;Eo.assign(e),yn.assign(Dt(vi(of(Eo.sub(1).div(Eo.add(1))).mul(BS),H(1)).mul(fh),gt.rgb,Do)),Oo.assign(Dt(fh,1,Do))}setupLightingModel(){return new Yc(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission,this.useDispersion)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?X(this.clearcoatNode):kS,n=this.clearcoatRoughnessNode?X(this.clearcoatRoughnessNode):WS;ql.assign(t),Uo.assign(Bp({roughness:n}))}if(this.useSheen){const t=this.sheenNode?H(this.sheenNode):YS,n=this.sheenRoughnessNode?X(this.sheenRoughnessNode):$S;Os.assign(t),Uc.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?X(this.iridescenceNode):ZS,n=this.iridescenceIORNode?X(this.iridescenceIORNode):jS,s=this.iridescenceThicknessNode?X(this.iridescenceThicknessNode):JS;Oc.assign(t),qd.assign(n),Yd.assign(s)}if(this.useAnisotropy){const t=(this.anisotropyNode?ee(this.anisotropyNode):KS).toVar();is.assign(t.length()),wt(is.equal(0),()=>{t.assign(ee(1,0))}).else(()=>{t.divAssign(ee(is)),is.assign(is.saturate())}),Yl.assign(is.pow2().mix(_i.pow2(),1)),To.assign(Bs[0].mul(t.x).add(Bs[1].mul(t.y))),ks.assign(Bs[1].mul(t.x).sub(Bs[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?X(this.transmissionNode):QS,n=this.thicknessNode?X(this.thicknessNode):eT,s=this.attenuationDistanceNode?X(this.attenuationDistanceNode):nT,r=this.attenuationColorNode?H(this.attenuationColorNode):iT;if(Kl.assign(t),$d.assign(n),Kd.assign(s),Zd.assign(r),this.useDispersion){const o=this.dispersionNode?X(this.dispersionNode):rT;jd.assign(o)}}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?H(this.clearcoatNormalNode):XS;Fs.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.dispersionNode=e.dispersionNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}Gt("MeshPhysicalNodeMaterial",Gp);class sA extends Yc{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:l,thicknessAmbientNode:c,thicknessAttenuationNode:u,thicknessPowerNode:d,thicknessScaleNode:h}=o,p=e.add(At.mul(l)).normalize(),g=X(Mt.dot(p.negate()).saturate().pow(d).mul(h)),_=H(g.add(c).mul(a));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r)}}class rA extends Gp{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=X(.1),this.thicknessAmbientNode=X(0),this.thicknessAttenuationNode=X(.1),this.thicknessPowerNode=X(2),this.thicknessScaleNode=X(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new sA(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Gt("MeshSSSNodeMaterial",rA);const oA=ae(({normal:i,lightDirection:e,builder:t})=>{const n=i.dot(e),s=ee(n.mul(.5).add(.5),0);if(t.material.gradientMap){const r=Mi("gradientMap","texture").context({getUV:()=>s});return H(r.r)}else{const r=s.fwidth().mul(.5);return Dt(H(.7),H(1),ri(X(.7).sub(r.x),X(.7).add(r.x),s.x))}});class aA extends na{direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){const o=oA({normal:zo,lightDirection:e,builder:r}).mul(t);n.directDiffuse.addAssign(o.mul(tr({diffuseColor:gt.rgb})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(tr({diffuseColor:gt})))}}const lA=new aM;class cA extends sn{constructor(e){super(),this.isMeshToonNodeMaterial=!0,this.lights=!0,this.setDefaultValues(lA),this.setValues(e)}setupLightingModel(){return new aA}}Gt("MeshToonNodeMaterial",cA);const uA=new uM;class hA extends sn{constructor(e){super(),this.lights=!1,this.isMeshMatcapNodeMaterial=!0,this.setDefaultValues(uA),this.setValues(e)}setupVariants(e){const t=qT;let n;e.material.matcap?n=Mi("matcap","texture").context({getUV:()=>t}):n=H(Dt(.2,.8,t.y)),gt.rgb.mulAssign(n.rgb)}}Gt("MeshMatcapNodeMaterial",hA);const dA=new wd;class fA extends sn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(dA),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Gt("PointsNodeMaterial",fA);const pA=new iM;class mA extends sn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(pA),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:r}=this,o=qt;let a=cs.mul(H(n||0)),l=ee(Ar[0].xyz.length(),Ar[1].xyz.length());r!==null&&(l=l.mul(r));let c=o.xy;e.center&&e.center.isVector2===!0&&(c=c.sub(Fe(e.center).sub(.5))),c=c.mul(l);const u=X(s||qS),d=c.rotate(u);a=_e(a.xy.add(d),a.zw);const h=Qn.mul(a);return t.vertex=o,h}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Gt("SpriteNodeMaterial",mA);class gA extends na{constructor(){super(),this.shadowNode=X(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){gt.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(gt.rgb)}}const _A=new sM;class vA extends sn{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(_A),this.setValues(e)}setupLightingModel(){return new gA}}Gt("ShadowNodeMaterial",vA);class xA extends sn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.isVolumeNodeMaterial=!0,this.testNode=null,this.setValues(e)}setup(e){const t=aE(this.map,null,0),n=ae(({orig:s,dir:r})=>{const o=H(-.5),a=H(.5),l=r.reciprocal(),c=o.sub(s).mul(l),u=a.sub(s).mul(l),d=vi(c,u),h=ln(c,u),p=ln(d.x,ln(d.y,d.z)),g=vi(h.x,vi(h.y,h.z));return ee(p,g)});this.fragmentNode=ae(()=>{const s=It(H(PS.mul(_e(pf,1)))),o=It(an.sub(s)).normalize(),a=St("vec2","bounds").assign(n({orig:s,dir:o}));a.x.greaterThan(a.y).discard(),a.assign(ee(ln(a.x,0),a.y));const l=St("vec3","p").assign(s.add(a.x.mul(o))),c=St("vec3","inc").assign(H(o.abs().reciprocal())),u=St("float","delta").assign(vi(c.x,vi(c.y,c.z)));u.divAssign(Mi("steps","float"));const d=St("vec4","ac").assign(_e(Mi("base","color"),0));return kn({type:"float",start:a.x,end:a.y,update:"+= delta"},()=>{const h=St("float","d").assign(t.uv(l.add(.5)).r);this.testNode!==null?this.testNode({map:t,mapValue:h,probe:l,finalColor:d}).append():(d.a.assign(1),bf()),l.addAssign(o.mul(u))}),d.a.equal(0).discard(),_e(d)})(),super.setup(e)}}Gt("VolumeNodeMaterial",xA);export{Pr as B,TA as E,yc as M,Sn as P,EA as R,yA as S,SA as T,MA as W,RM as a,si as b,Gn as c,ee as v};
