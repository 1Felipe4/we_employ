System.register(["./index-legacy-hartNXar.js"],(function(e,t){"use strict";var n,r,o,s,i,a,l,c,u,d,f,p,h,m,y,g,b,w,E,O,S,_,v,R,A,T,j,C,x,N,P,k,U,D,F,B,L,q;return{setters:[e=>{n=e.r,r=e.o,o=e.d,s=e.c,i=e.w,a=e.u,l=e.a,c=e.b,u=e.e,d=e.I,f=e.f,p=e.g,h=e.h,m=e.i,y=e.j,g=e.k,b=e.l,w=e.m,E=e.n,O=e.p,S=e.q,_=e.s,v=e.t,R=e.F,A=e.v,T=e.x,j=e.y,C=e.z,x=e.A,N=e.B,P=e.C,k=e.D,U=e.E,D=e.G,F=e.H,B=e.J,L=e.K,q=e.L}],execute:function(){function t(e,t){return function(){return e.apply(t,arguments)}}const{toString:I}=Object.prototype,{getPrototypeOf:z}=Object,M=(H=Object.create(null),e=>{const t=I.call(e);return H[t]||(H[t]=t.slice(8,-1).toLowerCase())});var H;const J=e=>(e=e.toLowerCase(),t=>M(t)===e),V=e=>t=>typeof t===e,{isArray:W}=Array,K=V("undefined"),G=J("ArrayBuffer"),$=V("string"),X=V("function"),Q=V("number"),Y=e=>null!==e&&"object"==typeof e,Z=e=>{if("object"!==M(e))return!1;const t=z(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},ee=J("Date"),te=J("File"),ne=J("Blob"),re=J("FileList"),oe=J("URLSearchParams");function se(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),W(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function ie(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,le=e=>!K(e)&&e!==ae,ce=(ue="undefined"!=typeof Uint8Array&&z(Uint8Array),e=>ue&&e instanceof ue);var ue;const de=J("HTMLFormElement"),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pe=J("RegExp"),he=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};se(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},me="abcdefghijklmnopqrstuvwxyz",ye="0123456789",ge={DIGIT:ye,ALPHA:me,ALPHA_DIGIT:me+me.toUpperCase()+ye},be=J("AsyncFunction"),we={isArray:W,isArrayBuffer:G,isBuffer:function(e){return null!==e&&!K(e)&&null!==e.constructor&&!K(e.constructor)&&X(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||X(e.append)&&("formdata"===(t=M(e))||"object"===t&&X(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&G(e.buffer),t},isString:$,isNumber:Q,isBoolean:e=>!0===e||!1===e,isObject:Y,isPlainObject:Z,isUndefined:K,isDate:ee,isFile:te,isBlob:ne,isRegExp:pe,isFunction:X,isStream:e=>Y(e)&&X(e.pipe),isURLSearchParams:oe,isTypedArray:ce,isFileList:re,forEach:se,merge:function e(){const{caseless:t}=le(this)&&this||{},n={},r=(r,o)=>{const s=t&&ie(n,o)||o;Z(n[s])&&Z(r)?n[s]=e(n[s],r):Z(r)?n[s]=e({},r):W(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&se(arguments[o],r);return n},extend:(e,n,r,{allOwnKeys:o}={})=>(se(n,((n,o)=>{r&&X(n)?e[o]=t(n,r):e[o]=n}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&z(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:M,kindOfTest:J,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(W(e))return e;let t=e.length;if(!Q(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:de,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:he,freezeMethods:e=>{he(e,((t,n)=>{if(X(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];X(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return W(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:ie,global:ae,isContextDefined:le,ALPHABET:ge,generateString:(e=16,t=ge.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&X(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=W(e)?[]:{};return se(e,((e,t)=>{const s=n(e,r+1);!K(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:be,isThenable:e=>e&&(Y(e)||X(e))&&X(e.then)&&X(e.catch)};function Ee(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}we.inherits(Ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:we.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Oe=Ee.prototype,Se={};function _e(e){return we.isPlainObject(e)||we.isArray(e)}function ve(e){return we.endsWith(e,"[]")?e.slice(0,-2):e}function Re(e,t,n){return e?e.concat(t).map((function(e,t){return e=ve(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Se[e]={value:e}})),Object.defineProperties(Ee,Se),Object.defineProperty(Oe,"isAxiosError",{value:!0}),Ee.from=(e,t,n,r,o,s)=>{const i=Object.create(Oe);return we.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Ee.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Ae=we.toFlatObject(we,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Te(e,t,n){if(!we.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=we.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!we.isUndefined(t[e])}))).metaTokens,o=n.visitor||c,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&we.isSpecCompliantForm(t);if(!we.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(we.isDate(e))return e.toISOString();if(!a&&we.isBlob(e))throw new Ee("Blob is not supported. Use a Buffer instead.");return we.isArrayBuffer(e)||we.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(we.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(we.isArray(e)&&function(e){return we.isArray(e)&&!e.some(_e)}(e)||(we.isFileList(e)||we.endsWith(n,"[]"))&&(a=we.toArray(e)))return n=ve(n),a.forEach((function(e,r){!we.isUndefined(e)&&null!==e&&t.append(!0===i?Re([n],r,s):null===i?n:n+"[]",l(e))})),!1;return!!_e(e)||(t.append(Re(o,n,s),l(e)),!1)}const u=[],d=Object.assign(Ae,{defaultVisitor:c,convertValue:l,isVisitable:_e});if(!we.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!we.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),we.forEach(n,(function(n,s){!0===(!(we.isUndefined(n)||null===n)&&o.call(t,n,we.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t}function je(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ce(e,t){this._pairs=[],e&&Te(e,this,t)}const xe=Ce.prototype;function Ne(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pe(e,t,n){if(!t)return e;const r=n&&n.encode||Ne,o=n&&n.serialize;let s;if(s=o?o(t,n):we.isURLSearchParams(t)?t.toString():new Ce(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}xe.append=function(e,t){this._pairs.push([e,t])},xe.toString=function(e){const t=e?function(t){return e.call(this,t,je)}:je;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class ke{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){we.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},De={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Ce,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Fe="undefined"!=typeof window&&"undefined"!=typeof document,Be=(Le="undefined"!=typeof navigator&&navigator.product,Fe&&["ReactNative","NativeScript","NS"].indexOf(Le)<0);var Le;const qe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Ie={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fe,hasStandardBrowserEnv:Be,hasStandardBrowserWebWorkerEnv:qe},Symbol.toStringTag,{value:"Module"})),...De};function ze(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&we.isArray(r)?r.length:s,a?(we.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&we.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&we.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(we.isFormData(e)&&we.isFunction(e.entries)){const n={};return we.forEachEntry(e,((e,r)=>{t(function(e){return we.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const Me={transitional:Ue,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=we.isObject(e);if(o&&we.isHTMLForm(e)&&(e=new FormData(e)),we.isFormData(e))return r?JSON.stringify(ze(e)):e;if(we.isArrayBuffer(e)||we.isBuffer(e)||we.isStream(e)||we.isFile(e)||we.isBlob(e))return e;if(we.isArrayBufferView(e))return e.buffer;if(we.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Te(e,new Ie.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Ie.isNode&&we.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=we.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Te(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(we.isString(e))try{return(t||JSON.parse)(e),we.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Me.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&we.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw Ee.from(o,Ee.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ie.classes.FormData,Blob:Ie.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};we.forEach(["delete","get","head","post","put","patch"],(e=>{Me.headers[e]={}}));const He=Me,Je=we.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ve=Symbol("internals");function We(e){return e&&String(e).trim().toLowerCase()}function Ke(e){return!1===e||null==e?e:we.isArray(e)?e.map(Ke):String(e)}function Ge(e,t,n,r,o){return we.isFunction(r)?r.call(this,t,n):(o&&(t=n),we.isString(t)?we.isString(r)?-1!==t.indexOf(r):we.isRegExp(r)?r.test(t):void 0:void 0)}class $e{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=We(t);if(!o)throw new Error("header name must be a non-empty string");const s=we.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Ke(e))}const s=(e,t)=>we.forEach(e,((e,n)=>o(e,n,t)));return we.isPlainObject(e)||e instanceof this.constructor?s(e,t):we.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Je[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=We(e)){const n=we.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(we.isFunction(t))return t.call(this,e,n);if(we.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=We(e)){const n=we.findKey(this,e);return!(!n||void 0===this[n]||t&&!Ge(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=We(e)){const o=we.findKey(n,e);!o||t&&!Ge(0,n[o],o,t)||(delete n[o],r=!0)}}return we.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Ge(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return we.forEach(this,((r,o)=>{const s=we.findKey(n,o);if(s)return t[s]=Ke(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=Ke(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return we.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&we.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ve]=this[Ve]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=We(e);t[r]||(function(e,t){const n=we.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return we.isArray(e)?e.forEach(r):r(e),this}}$e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),we.reduceDescriptors($e.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),we.freezeMethods($e);const Xe=$e;function Qe(e,t){const n=this||He,r=t||n,o=Xe.from(r.headers);let s=r.data;return we.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Ye(e){return!(!e||!e.__CANCEL__)}function Ze(e,t,n){Ee.call(this,null==e?"canceled":e,Ee.ERR_CANCELED,t,n),this.name="CanceledError"}we.inherits(Ze,Ee,{__CANCEL__:!0});const et=Ie.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];we.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),we.isString(r)&&i.push("path="+r),we.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function tt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const nt=Ie.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=we.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function rt(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[i];o||(o=l),n[s]=a,r[s]=l;let u=i,d=0;for(;u!==s;)d+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const f=c&&l-c;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,l=r(a);n=s;const c={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:l||void 0,estimated:l&&i&&s<=i?(i-s)/l:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const ot={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=Xe.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:l}=e;function c(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(we.isFormData(r))if(Ie.hasStandardBrowserEnv||Ie.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const d=tt(e.baseURL,e.url);function f(){if(!u)return;const r=Xe.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Ee("Request failed with status code "+n.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),c()}),(function(e){n(e),c()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),Pe(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(f)},u.onabort=function(){u&&(n(new Ee("Request aborted",Ee.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new Ee("Network Error",Ee.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Ue;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Ee(t,r.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,e,u)),u=null},Ie.hasStandardBrowserEnv&&(l&&we.isFunction(l)&&(l=l(e)),l||!1!==l&&nt(d))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&et.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&we.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),we.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",rt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",rt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{u&&(n(!t||t.type?new Ze(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);p&&-1===Ie.protocols.indexOf(p)?n(new Ee("Unsupported protocol "+p+":",Ee.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};we.forEach(ot,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const st=e=>`- ${e}`,it=e=>we.isFunction(e)||null===e||!1===e,at=e=>{e=we.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!it(n)&&(r=ot[(t=String(n)).toLowerCase()],void 0===r))throw new Ee(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new Ee("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(st).join("\n"):" "+st(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function lt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ze(null,e)}function ct(e){return lt(e),e.headers=Xe.from(e.headers),e.data=Qe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),at(e.adapter||He.adapter)(e).then((function(t){return lt(e),t.data=Qe.call(e,e.transformResponse,t),t.headers=Xe.from(t.headers),t}),(function(t){return Ye(t)||(lt(e),t&&t.response&&(t.response.data=Qe.call(e,e.transformResponse,t.response),t.response.headers=Xe.from(t.response.headers))),Promise.reject(t)}))}const ut=e=>e instanceof Xe?e.toJSON():e;function dt(e,t){t=t||{};const n={};function r(e,t,n){return we.isPlainObject(e)&&we.isPlainObject(t)?we.merge.call({caseless:n},e,t):we.isPlainObject(t)?we.merge({},t):we.isArray(t)?t.slice():t}function o(e,t,n){return we.isUndefined(t)?we.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!we.isUndefined(t))return r(void 0,t)}function i(e,t){return we.isUndefined(t)?we.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(ut(e),ut(t),!0)};return we.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=l[r]||o,i=s(e[r],t[r],r);we.isUndefined(i)&&s!==a||(n[r]=i)})),n}const ft="1.6.7",pt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{pt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ht={};pt.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new Ee(r(o," has been removed"+(t?" in "+t:"")),Ee.ERR_DEPRECATED);return t&&!ht[o]&&(ht[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const mt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new Ee("option "+s+" must be "+n,Ee.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Ee("Unknown option "+s,Ee.ERR_BAD_OPTION)}},validators:pt},yt=mt.validators;class gt{constructor(e){this.defaults=e,this.interceptors={request:new ke,response:new ke}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=dt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&mt.assertOptions(n,{silentJSONParsing:yt.transitional(yt.boolean),forcedJSONParsing:yt.transitional(yt.boolean),clarifyTimeoutError:yt.transitional(yt.boolean)},!1),null!=r&&(we.isFunction(r)?t.paramsSerializer={serialize:r}:mt.assertOptions(r,{encode:yt.function,serialize:yt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&we.merge(o.common,o[t.method]);o&&we.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Xe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[ct.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=i.length;let f=t;for(d=0;d<u;){const e=i[d++],t=i[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{c=ct.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return Pe(tt((e=dt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}we.forEach(["delete","get","head","options"],(function(e){gt.prototype[e]=function(t,n){return this.request(dt(n||{},{method:e,url:t,data:(n||{}).data}))}})),we.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(dt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}gt.prototype[e]=t(),gt.prototype[e+"Form"]=t(!0)}));const bt=gt;class wt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Ze(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new wt((function(t){e=t})),cancel:e}}}const Et=wt,Ot={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ot).forEach((([e,t])=>{Ot[t]=e}));const St=Ot,_t=function e(n){const r=new bt(n),o=t(bt.prototype.request,r);return we.extend(o,bt.prototype,r,{allOwnKeys:!0}),we.extend(o,r,null,{allOwnKeys:!0}),o.create=function(t){return e(dt(n,t))},o}(He);_t.Axios=bt,_t.CanceledError=Ze,_t.CancelToken=Et,_t.isCancel=Ye,_t.VERSION=ft,_t.toFormData=Te,_t.AxiosError=Ee,_t.Cancel=_t.CanceledError,_t.all=function(e){return Promise.all(e)},_t.spread=function(e){return function(t){return e.apply(null,t)}},_t.isAxiosError=function(e){return we.isObject(e)&&!0===e.isAxiosError},_t.mergeConfig=dt,_t.AxiosHeaders=Xe,_t.formToJSON=e=>ze(we.isHTMLForm(e)?new FormData(e):e),_t.getAdapter=at,_t.HttpStatusCode=St,_t.default=_t,e("default",o({__name:"Tab1Page",setup(e){const{solutionData:t,meta:o,getSolutionData:I}=function(){const e=n([]),t=n({loaded:!1}),o=n(_t.CancelToken.source()),s=async(n=2023,r=[])=>{t.value.loaded=!1,o.value&&o.value.cancel("Operation canceled by the user."),o.value=_t.CancelToken.source();try{const s={year:n};r.length&&(s.countries=r.join(","));const i=await _t.get("/api/solution",{params:s,cancelToken:o.value.token});e.value=i.data,t.value.loaded=!0}catch(s){throw t.value.loaded=!0,console.error("Error fetching solution data:",s),s}};return r((async()=>{s()})),{solutionData:e,meta:t,getSolutionData:s}}();n(!1);const z=n([]),M=n(["Trinidad and Tobago","Australia","USA","Canada","Germany"]),H=n([]),J=n(2023),V=()=>{const e=`${["solutionData"].concat(H.value).join("_")}.json`;((e,t)=>{const n=JSON.stringify(e,null,2),r=new Blob([n],{type:"application/json"}),o=document.createElement("a");o.href=window.URL.createObjectURL(r),o.download=t,o.click()})(t.value,e)},W=()=>{I(J.value,H.value)};return(e,n)=>{const r=l("ion-label");return c(),s(a(k),null,{default:i((()=>[u(a(h),null,{default:i((()=>[u(a(d),null,{default:i((()=>[u(a(f),null,{default:i((()=>[p("We Employ")])),_:1})])),_:1})])),_:1}),u(a(P),{fullscreen:!0},{default:i((()=>[u(a(h),{collapse:"condense"},{default:i((()=>[u(a(d),null,{default:i((()=>[u(a(f),{size:"large"},{default:i((()=>[p("Solution Data")])),_:1})])),_:1})])),_:1}),a(o).loaded?y("",!0):(c(),s(a(m),{key:0,type:"indeterminate"})),u(a(g),null,{default:i((()=>[u(a(b),null,{default:i((()=>[u(a(w),{"size-md":"4",size:"12"},{default:i((()=>[u(a(E),null,{default:i((()=>[u(a(O),{label:"Year",labelPlacement:"stacked",type:"number",onIonChange:n[0]||(n[0]=e=>W()),modelValue:J.value,"onUpdate:modelValue":n[1]||(n[1]=e=>J.value=e),disabled:!a(o).loaded,debounce:2e3},null,8,["modelValue","disabled"])])),_:1})])),_:1}),u(a(w),{"size-md":"8",size:"12"},{default:i((()=>[u(a(E),null,{default:i((()=>[u(a(S),{onIonChange:n[2]||(n[2]=e=>W()),label:"Country",labelPlacement:"stacked",placeholder:"Make a Selection",interface:"popover",multiple:!0,modelValue:H.value,"onUpdate:modelValue":n[3]||(n[3]=e=>H.value=e),disabled:!a(o).loaded},{default:i((()=>[(c(!0),_(R,null,v(M.value,((e,t)=>(c(),s(a(U),{key:t},{default:i((()=>[p(T(e),1)])),_:2},1024)))),128))])),_:1},8,["modelValue","disabled"]),a(o).loaded?(c(),s(a(A),{key:0,slot:"end",color:"success"},{default:i((()=>[p(T(a(t).length),1)])),_:1})):y("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),u(a(j),{multiple:!0,value:z.value},{default:i((()=>[(c(!0),_(R,null,v(a(t),((e,t)=>(c(),s(a(D),{value:e.record_id,key:t},{default:i((()=>[u(a(E),{slot:"header"},{default:i((()=>[u(r,null,{default:i((()=>[p(T(e.name),1)])),_:2},1024)])),_:2},1024),u(a(F),{slot:"content"},{default:i((()=>[u(a(B),null,{default:i((()=>[u(a(L),null,{default:i((()=>[u(a(E),null,{default:i((()=>[u(r,null,{default:i((()=>[p("Work ID")])),_:1}),u(a(q),{slot:"end"},{default:i((()=>[p(T(e.work_id_number),1)])),_:2},1024)])),_:2},1024),u(a(E),null,{default:i((()=>[u(r,null,{default:i((()=>[p("ID")])),_:1}),u(a(q),{slot:"end"},{default:i((()=>[p("#"+T(e.record_id),1)])),_:2},1024)])),_:2},1024),u(a(E),null,{default:i((()=>[u(r,null,{default:i((()=>[p("Email")])),_:1}),u(r,{slot:"end"},{default:i((()=>[p(T(e.email_address),1)])),_:2},1024)])),_:2},1024),u(a(E),null,{default:i((()=>[u(r,null,{default:i((()=>[p("Phone")])),_:1}),u(r,{slot:"end"},{default:i((()=>[p(T(e.phone_number),1)])),_:2},1024)])),_:2},1024),u(a(E),null,{default:i((()=>[u(r,null,{default:i((()=>[p("Average Hours Per Week")])),_:1}),u(r,{slot:"end"},{default:i((()=>[p(T(e.average_hours_per_week),1)])),_:2},1024)])),_:2},1024),u(r,null,{default:i((()=>[p("Events")])),_:1}),u(a(L),null,{default:i((()=>[(c(!0),_(R,null,v(e.events,(e=>(c(),s(a(E),null,{default:i((()=>[u(r,null,{default:i((()=>[p(T(e.event_name),1)])),_:2},1024),u(r,{slot:"end"},{default:i((()=>[p(T(e.event_date),1)])),_:2},1024)])),_:2},1024)))),256))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["value"])))),128))])),_:1},8,["value"]),a(o).loaded?(c(),s(a(C),{key:1,slot:"fixed",vertical:"top",horizontal:"end",edge:"true"},{default:i((()=>[u(a(x),{onClick:n[4]||(n[4]=e=>V())},{default:i((()=>[u(a(N),{icon:a("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M176 272l80 80 80-80M256 48v288' class='ionicon-fill-none ionicon-stroke-width'/></svg>")},null,8,["icon"])])),_:1})])),_:1})):y("",!0)])),_:1})])),_:1})}}}))}}}));
