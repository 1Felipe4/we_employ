import{r as I,o as lt,d as ct,c as L,w as h,u as w,a as T,b as C,e as y,I as Re,f as Oe,g,h as ge,i as re,j,k as ut,l as ft,m as oe,n as se,F as ie,p as q,t as k,q as dt,s as pt,v as ht,x as mt}from"./index-hzlhUro2.js";const yt="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M176 272l80 80 80-80M256 48v288' class='ionicon-fill-none ionicon-stroke-width'/></svg>";function Le(e,t){return function(){return e.apply(t,arguments)}}const{toString:bt}=Object.prototype,{getPrototypeOf:ye}=Object,X=(e=>t=>{const n=bt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),D=e=>(e=e.toLowerCase(),t=>X(t)===e),Q=e=>t=>typeof t===e,{isArray:M}=Array,v=Q("undefined");function wt(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const je=D("ArrayBuffer");function _t(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&je(e.buffer),t}const Et=Q("string"),x=Q("function"),Ie=Q("number"),Y=e=>e!==null&&typeof e=="object",St=e=>e===!0||e===!1,$=e=>{if(X(e)!=="object")return!1;const t=ye(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rt=D("Date"),Ot=D("File"),gt=D("Blob"),At=D("FileList"),Tt=e=>Y(e)&&x(e.pipe),xt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=X(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},Nt=D("URLSearchParams"),Pt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function V(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),M(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function He(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Me=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qe=e=>!v(e)&&e!==Me;function fe(){const{caseless:e}=qe(this)&&this||{},t={},n=(r,o)=>{const s=e&&He(t,o)||o;$(t[s])&&$(r)?t[s]=fe(t[s],r):$(r)?t[s]=fe({},r):M(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&V(arguments[r],n);return t}const Ct=(e,t,n,{allOwnKeys:r}={})=>(V(t,(o,s)=>{n&&x(o)?e[s]=Le(o,n):e[s]=o},{allOwnKeys:r}),e),kt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ft=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Dt=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ye(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Bt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ut=e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!Ie(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Lt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ye(Uint8Array)),jt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},It=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ht=D("HTMLFormElement"),Mt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),qt=D("RegExp"),ze=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};V(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},zt=e=>{ze(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},vt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return M(e)?r(e):r(String(e).split(t)),n},Vt=()=>{},Jt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ae="abcdefghijklmnopqrstuvwxyz",Te="0123456789",ve={DIGIT:Te,ALPHA:ae,ALPHA_DIGIT:ae+ae.toUpperCase()+Te},$t=(e=16,t=ve.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Wt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Kt=e=>{const t=new Array(10),n=(r,o)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=M(r)?[]:{};return V(r,(i,c)=>{const m=n(i,o+1);!v(m)&&(s[c]=m)}),t[o]=void 0,s}}return r};return n(e,0)},Gt=D("AsyncFunction"),Xt=e=>e&&(Y(e)||x(e))&&x(e.then)&&x(e.catch),a={isArray:M,isArrayBuffer:je,isBuffer:wt,isFormData:xt,isArrayBufferView:_t,isString:Et,isNumber:Ie,isBoolean:St,isObject:Y,isPlainObject:$,isUndefined:v,isDate:Rt,isFile:Ot,isBlob:gt,isRegExp:qt,isFunction:x,isStream:Tt,isURLSearchParams:Nt,isTypedArray:Lt,isFileList:At,forEach:V,merge:fe,extend:Ct,trim:Pt,stripBOM:kt,inherits:Ft,toFlatObject:Dt,kindOf:X,kindOfTest:D,endsWith:Bt,toArray:Ut,forEachEntry:jt,matchAll:It,isHTMLForm:Ht,hasOwnProperty:Ae,hasOwnProp:Ae,reduceDescriptors:ze,freezeMethods:zt,toObjectSet:vt,toCamelCase:Mt,noop:Vt,toFiniteNumber:Jt,findKey:He,global:Me,isContextDefined:qe,ALPHABET:ve,generateString:$t,isSpecCompliantForm:Wt,toJSONObject:Kt,isAsyncFn:Gt,isThenable:Xt};function b(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ve=b.prototype,Je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Je[e]={value:e}});Object.defineProperties(b,Je);Object.defineProperty(Ve,"isAxiosError",{value:!0});b.from=(e,t,n,r,o,s)=>{const i=Object.create(Ve);return a.toFlatObject(e,i,function(m){return m!==Error.prototype},c=>c!=="isAxiosError"),b.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Qt=null;function de(e){return a.isPlainObject(e)||a.isArray(e)}function $e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function xe(e,t,n){return e?e.concat(t).map(function(o,s){return o=$e(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Yt(e){return a.isArray(e)&&!e.some(de)}const Zt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,R){return!a.isUndefined(R[p])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function f(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!m&&a.isBlob(d))throw new b("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?m&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,p,R){let E=d;if(d&&!R&&typeof d=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Yt(d)||(a.isFileList(d)||a.endsWith(p,"[]"))&&(E=a.toArray(d)))return p=$e(p),E.forEach(function(P,te){!(a.isUndefined(P)||P===null)&&t.append(i===!0?xe([p],te,s):i===null?p:p+"[]",f(P))}),!1}return de(d)?!0:(t.append(xe(R,p,s),f(d)),!1)}const l=[],_=Object.assign(Zt,{defaultVisitor:u,convertValue:f,isVisitable:de});function A(d,p){if(!a.isUndefined(d)){if(l.indexOf(d)!==-1)throw Error("Circular reference detected in "+p.join("."));l.push(d),a.forEach(d,function(E,N){(!(a.isUndefined(E)||E===null)&&o.call(t,E,a.isString(N)?N.trim():N,p,_))===!0&&A(E,p?p.concat(N):[N])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return A(e),t}function Ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function be(e,t){this._pairs=[],e&&Z(e,this,t)}const We=be.prototype;We.append=function(t,n){this._pairs.push([t,n])};We.toString=function(t){const n=t?function(r){return t.call(this,r,Ne)}:Ne;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function en(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ke(e,t,n){if(!t)return e;const r=n&&n.encode||en,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new be(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Pe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ge={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tn=typeof URLSearchParams<"u"?URLSearchParams:be,nn=typeof FormData<"u"?FormData:null,rn=typeof Blob<"u"?Blob:null,on={isBrowser:!0,classes:{URLSearchParams:tn,FormData:nn,Blob:rn},protocols:["http","https","file","blob","url","data"]},Xe=typeof window<"u"&&typeof document<"u",sn=(e=>Xe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),an=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ln=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xe,hasStandardBrowserEnv:sn,hasStandardBrowserWebWorkerEnv:an},Symbol.toStringTag,{value:"Module"})),F={...ln,...on};function cn(e,t){return Z(e,new F.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return F.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function un(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fn(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Qe(e){function t(n,r,o,s){let i=n[s++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),m=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,m?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=fn(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(un(r),o,n,0)}),n}return null}function dn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const we={transitional:Ge,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o?JSON.stringify(Qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,m&&new m,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),dn(t)):t}],transformResponse:[function(t){const n=this.transitional||we.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?b.from(c,b.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:F.classes.FormData,Blob:F.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{we.headers[e]={}});const _e=we,pn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hn=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&pn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ce=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function W(e){return e===!1||e==null?e:a.isArray(e)?e.map(W):String(e)}function mn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const yn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function le(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function bn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function wn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class ee{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,m,f){const u=z(m);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(o,u);(!l||o[l]===void 0||f===!0||f===void 0&&o[l]!==!1)&&(o[l||m]=W(c))}const i=(c,m)=>a.forEach(c,(f,u)=>s(f,u,m));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!yn(t)?i(hn(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=z(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return mn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=z(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||le(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=z(i),i){const c=a.findKey(r,i);c&&(!n||le(r,r[c],c,n))&&(delete r[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||le(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=W(o),delete n[s];return}const c=t?bn(s):String(s).trim();c!==s&&delete n[s],n[c]=W(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Ce]=this[Ce]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=z(i);r[c]||(wn(o,i),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(ee.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(ee);const B=ee;function ce(e,t){const n=this||_e,r=t||n,o=B.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Ye(e){return!!(e&&e.__CANCEL__)}function J(e,t,n){b.call(this,e==null?"canceled":e,b.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(J,b,{__CANCEL__:!0});function _n(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const En=F.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Sn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Rn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ze(e,t){return e&&!Sn(t)?Rn(e,t):t}const On=F.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=a.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function gn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function An(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(m){const f=Date.now(),u=r[s];i||(i=f),n[o]=m,r[o]=f;let l=s,_=0;for(;l!==o;)_+=n[l++],l=l%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),f-i<t)return;const A=u&&f-u;return A?Math.round(_*1e3/A):void 0}}function ke(e,t){let n=0;const r=An(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-n,m=r(c),f=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:m||void 0,estimated:m&&i&&f?(i-s)/m:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Tn=typeof XMLHttpRequest<"u",xn=Tn&&function(e){return new Promise(function(n,r){let o=e.data;const s=B.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,m;function f(){e.cancelToken&&e.cancelToken.unsubscribe(m),e.signal&&e.signal.removeEventListener("abort",m)}let u;if(a.isFormData(o)){if(F.hasStandardBrowserEnv||F.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((u=s.getContentType())!==!1){const[p,...R]=u?u.split(";").map(E=>E.trim()).filter(Boolean):[];s.setContentType([p||"multipart/form-data",...R].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",R=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+R))}const _=Ze(e.baseURL,e.url);l.open(e.method.toUpperCase(),Ke(_,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function A(){if(!l)return;const p=B.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:p,config:e,request:l};_n(function(P){n(P),f()},function(P){r(P),f()},E),l=null}if("onloadend"in l?l.onloadend=A:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(A)},l.onabort=function(){l&&(r(new b("Request aborted",b.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new b("Network Error",b.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let R=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Ge;e.timeoutErrorMessage&&(R=e.timeoutErrorMessage),r(new b(R,E.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,l)),l=null},F.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&On(_))){const p=e.xsrfHeaderName&&e.xsrfCookieName&&En.read(e.xsrfCookieName);p&&s.set(e.xsrfHeaderName,p)}o===void 0&&s.setContentType(null),"setRequestHeader"in l&&a.forEach(s.toJSON(),function(R,E){l.setRequestHeader(E,R)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",ke(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ke(e.onUploadProgress)),(e.cancelToken||e.signal)&&(m=p=>{l&&(r(!p||p.type?new J(null,e,l):p),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(m),e.signal&&(e.signal.aborted?m():e.signal.addEventListener("abort",m)));const d=gn(_);if(d&&F.protocols.indexOf(d)===-1){r(new b("Unsupported protocol "+d+":",b.ERR_BAD_REQUEST,e));return}l.send(o||null)})},pe={http:Qt,xhr:xn};a.forEach(pe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}});const Fe=e=>"- ".concat(e),Nn=e=>a.isFunction(e)||e===null||e===!1,et={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!Nn(n)&&(r=pe[(i=String(n)).toLowerCase()],r===void 0))throw new b("Unknown adapter '".concat(i,"'"));if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([c,m])=>"adapter ".concat(c," ")+(m===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?"since :\n"+s.map(Fe).join("\n"):" "+Fe(s[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:pe};function ue(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new J(null,e)}function De(e){return ue(e),e.headers=B.from(e.headers),e.data=ce.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||_e.adapter)(e).then(function(r){return ue(e),r.data=ce.call(e,e.transformResponse,r),r.headers=B.from(r.headers),r},function(r){return Ye(r)||(ue(e),r&&r.response&&(r.response.data=ce.call(e,e.transformResponse,r.response),r.response.headers=B.from(r.response.headers))),Promise.reject(r)})}const Be=e=>e instanceof B?e.toJSON():e;function H(e,t){t=t||{};const n={};function r(f,u,l){return a.isPlainObject(f)&&a.isPlainObject(u)?a.merge.call({caseless:l},f,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(f,u,l){if(a.isUndefined(u)){if(!a.isUndefined(f))return r(void 0,f,l)}else return r(f,u,l)}function s(f,u){if(!a.isUndefined(u))return r(void 0,u)}function i(f,u){if(a.isUndefined(u)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,u)}function c(f,u,l){if(l in t)return r(f,u);if(l in e)return r(void 0,f)}const m={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(f,u)=>o(Be(f),Be(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=m[u]||o,_=l(e[u],t[u],u);a.isUndefined(_)&&l!==c||(n[u]=_)}),n}const tt="1.6.7",Ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ue={};Ee.transitional=function(t,n,r){function o(s,i){return"[Axios v"+tt+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new b(o(i," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!Ue[i]&&(Ue[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function Pn(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],m=c===void 0||i(c,s,e);if(m!==!0)throw new b("option "+s+" must be "+m,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+s,b.ERR_BAD_OPTION)}}const he={assertOptions:Pn,validators:Ee},U=he.validators;class G{constructor(t){this.defaults=t,this.interceptors={request:new Pe,response:new Pe}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+s):r.stack=s}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=H(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&he.assertOptions(r,{silentJSONParsing:U.transitional(U.boolean),forcedJSONParsing:U.transitional(U.boolean),clarifyTimeoutError:U.transitional(U.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:he.assertOptions(o,{encode:U.function,serialize:U.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete s[d]}),n.headers=B.concat(i,s);const c=[];let m=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(m=m&&p.synchronous,c.unshift(p.fulfilled,p.rejected))});const f=[];this.interceptors.response.forEach(function(p){f.push(p.fulfilled,p.rejected)});let u,l=0,_;if(!m){const d=[De.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,f),_=d.length,u=Promise.resolve(n);l<_;)u=u.then(d[l++],d[l++]);return u}_=c.length;let A=n;for(l=0;l<_;){const d=c[l++],p=c[l++];try{A=d(A)}catch(R){p.call(this,R);break}}try{u=De.call(this,A)}catch(d){return Promise.reject(d)}for(l=0,_=f.length;l<_;)u=u.then(f[l++],f[l++]);return u}getUri(t){t=H(this.defaults,t);const n=Ze(t.baseURL,t.url);return Ke(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){G.prototype[t]=function(n,r){return this.request(H(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(H(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}G.prototype[t]=n(),G.prototype[t+"Form"]=n(!0)});const K=G;class Se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new J(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Se(function(o){t=o}),cancel:t}}}const Cn=Se;function kn(e){return function(n){return e.apply(null,n)}}function Fn(e){return a.isObject(e)&&e.isAxiosError===!0}const me={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(me).forEach(([e,t])=>{me[t]=e});const Dn=me;function nt(e){const t=new K(e),n=Le(K.prototype.request,t);return a.extend(n,K.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return nt(H(e,o))},n}const S=nt(_e);S.Axios=K;S.CanceledError=J;S.CancelToken=Cn;S.isCancel=Ye;S.VERSION=tt;S.toFormData=Z;S.AxiosError=b;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=kn;S.isAxiosError=Fn;S.mergeConfig=H;S.AxiosHeaders=B;S.formToJSON=e=>Qe(a.isHTMLForm(e)?new FormData(e):e);S.getAdapter=et.getAdapter;S.HttpStatusCode=Dn;S.default=S;const Bn="";function Un(){const e=I([]),t=I({loaded:!1}),n=async(r=2023,o=[])=>{t.value.loaded=!1;try{const s={year:r};o.length&&(s.countries=o.join(","));const i=await S.get("".concat(Bn,"/api/solution"),{params:s});e.value=i.data,t.value.loaded=!0}catch(s){throw t.value.loaded=!0,console.error("Error fetching solution data:",s),s}};return lt(async()=>{n()}),{solutionData:e,meta:t,getSolutionData:n}}const jn=ct({__name:"Tab1Page",setup(e){const{solutionData:t,meta:n,getSolutionData:r}=Un();I(!1);const o=I(["Trinidad and Tobago","Australia","USA","Canada","Germany"]),s=I([]),i=I(2023),c=()=>{r(i.value,s.value)};return(m,f)=>{const u=T("ion-progress-bar"),l=T("ion-col"),_=T("ion-chip"),A=T("ion-row"),d=T("ion-grid"),p=T("ion-card-title"),R=T("ion-card-subtitle"),E=T("ion-note"),N=T("ion-card-header"),P=T("ion-badge"),te=T("ion-card-content"),rt=T("ion-card"),ot=T("ion-icon"),st=T("ion-fab-button"),it=T("ion-fab");return C(),L(w(pt),null,{default:h(()=>[y(w(ge),null,{default:h(()=>[y(w(Re),null,{default:h(()=>[y(w(Oe),null,{default:h(()=>[g("We Employ")]),_:1})]),_:1})]),_:1}),y(w(dt),{fullscreen:!0},{default:h(()=>[y(w(ge),{collapse:"condense"},{default:h(()=>[y(w(Re),null,{default:h(()=>[y(w(Oe),{size:"large"},{default:h(()=>[g("Solution Data")]),_:1})]),_:1})]),_:1}),w(n).loaded?re("",!0):(C(),L(u,{key:0,type:"indeterminate"})),y(d,null,{default:h(()=>[y(A,null,{default:h(()=>[y(l,null,{default:h(()=>[y(w(j),null,{default:h(()=>[y(w(ut),{label:"Year",labelPlacement:"stacked",type:"number",onIonChange:f[0]||(f[0]=O=>c()),modelValue:i.value,"onUpdate:modelValue":f[1]||(f[1]=O=>i.value=O),disabled:!w(n).loaded,debounce:2e3},null,8,["modelValue","disabled"])]),_:1})]),_:1}),y(l,null,{default:h(()=>[y(w(j),null,{default:h(()=>[y(w(ft),{onIonChange:f[2]||(f[2]=O=>c()),label:"Country",labelPlacement:"stacked",placeholder:"Make a Selection",interface:"popover",multiple:!0,modelValue:s.value,"onUpdate:modelValue":f[3]||(f[3]=O=>s.value=O),disabled:!w(n).loaded},{default:h(()=>[(C(!0),oe(ie,null,se(o.value,(O,ne)=>(C(),L(w(ht),{key:ne},{default:h(()=>[g(k(O),1)]),_:2},1024))),128))]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),w(n).loaded?(C(),L(l,{key:0,size:"12",md:"6"},{default:h(()=>[y(w(j),null,{default:h(()=>[y(w(q),null,{default:h(()=>[g(" Records ")]),_:1}),y(_,{slot:"end",color:"success"},{default:h(()=>[g(k(w(t).length),1)]),_:1})]),_:1})]),_:1})):re("",!0)]),_:1})]),_:1}),y(d,null,{default:h(()=>[y(A,null,{default:h(()=>[(C(!0),oe(ie,null,se(w(t),(O,ne)=>(C(),L(l,{size:"12",key:ne},{default:h(()=>[y(rt,null,{default:h(()=>[y(N,null,{default:h(()=>[y(p,null,{default:h(()=>[g(k(O.name),1)]),_:2},1024),y(R,null,{default:h(()=>[g(k(O.email_address)+" | "+k(O.phone_number),1)]),_:2},1024),y(E,null,{default:h(()=>[g(k(O.work_id_number),1)]),_:2},1024)]),_:2},1024),y(te,null,{default:h(()=>[y(w(mt),null,{default:h(()=>[y(w(j),null,{default:h(()=>[y(w(q),null,{default:h(()=>[g("Country")]),_:1}),y(E,{slot:"end"},{default:h(()=>[g(k(O.country),1)]),_:2},1024)]),_:2},1024),y(w(j),null,{default:h(()=>[y(w(q),null,{default:h(()=>[g("ID")]),_:1}),y(P,{slot:"end"},{default:h(()=>[g("#"+k(O.record_id),1)]),_:2},1024)]),_:2},1024),y(w(j),null,{default:h(()=>[y(w(q),null,{default:h(()=>[g("Average Hours Per Week")]),_:1}),y(E,{slot:"end"},{default:h(()=>[g(k(O.average_hours_per_week),1)]),_:2},1024)]),_:2},1024),y(w(j),null,{default:h(()=>[y(w(q),null,{default:h(()=>[g("Events")]),_:1}),y(E,{slot:"end"},{default:h(()=>[(C(!0),oe(ie,null,se(O.events,at=>(C(),L(_,null,{default:h(()=>[g(k(at.event_name),1)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),w(n).loaded?(C(),L(it,{key:1,slot:"fixed",vertical:"top",horizontal:"end",edge:"true"},{default:h(()=>[y(st,null,{default:h(()=>[y(ot,{icon:w(yt)},null,8,["icon"])]),_:1})]),_:1})):re("",!0)]),_:1})]),_:1})}}});export{jn as default};
