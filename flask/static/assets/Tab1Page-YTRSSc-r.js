import{r as L,o as ot,d as it,c as D,w as m,u as f,a as T,b,I as Se,e as Re,f as A,g as Oe,h as at,i as te,j as Ae,k as _e,l as J,m as I,n as lt,p as ut,q as ne,s as re,F as se,t as H,v as ge,x as C,y as ct,z as ft,A as dt,B as pt,C as ht,D as mt,E as yt,G as bt,H as wt,J as Et,K as V,L as St,M as Rt,N as Ot}from"./index-hr-yurLB.js";const At="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M176 272l80 80 80-80M256 48v288' class='ionicon-fill-none ionicon-stroke-width'/></svg>";function Ue(e,t){return function(){return e.apply(t,arguments)}}const{toString:_t}=Object.prototype,{getPrototypeOf:he}=Object,X=(e=>t=>{const n=_t.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>X(t)===e),Q=e=>t=>typeof t===e,{isArray:j}=Array,q=Q("undefined");function gt(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const je=N("ArrayBuffer");function Tt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&je(e.buffer),t}const Ct=Q("string"),g=Q("function"),He=Q("number"),Y=e=>e!==null&&typeof e=="object",xt=e=>e===!0||e===!1,$=e=>{if(X(e)!=="object")return!1;const t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Nt=N("Date"),Pt=N("File"),kt=N("Blob"),Ft=N("FileList"),Bt=e=>Y(e)&&g(e.pipe),Dt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=X(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},It=N("URLSearchParams"),Lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function z(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),j(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function Me(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const qe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ze=e=>!q(e)&&e!==qe;function ue(){const{caseless:e}=ze(this)&&this||{},t={},n=(r,s)=>{const o=e&&Me(t,s)||s;$(t[o])&&$(r)?t[o]=ue(t[o],r):$(r)?t[o]=ue({},r):j(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&z(arguments[r],n);return t}const Ut=(e,t,n,{allOwnKeys:r}={})=>(z(t,(s,o)=>{n&&g(s)?e[o]=Ue(s,n):e[o]=s},{allOwnKeys:r}),e),jt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ht=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Mt=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&he(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},qt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},zt=e=>{if(!e)return null;if(j(e))return e;let t=e.length;if(!He(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},vt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&he(Uint8Array)),Jt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Vt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},$t=N("HTMLFormElement"),Wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Te=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Kt=N("RegExp"),ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};z(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Gt=e=>{ve(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Xt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return j(e)?r(e):r(String(e).split(t)),n},Qt=()=>{},Yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),oe="abcdefghijklmnopqrstuvwxyz",Ce="0123456789",Je={DIGIT:Ce,ALPHA:oe,ALPHA_DIGIT:oe+oe.toUpperCase()+Ce},Zt=(e=16,t=Je.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function en(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const tn=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=j(r)?[]:{};return z(r,(i,u)=>{const y=n(i,s+1);!q(y)&&(o[u]=y)}),t[s]=void 0,o}}return r};return n(e,0)},nn=N("AsyncFunction"),rn=e=>e&&(Y(e)||g(e))&&g(e.then)&&g(e.catch),a={isArray:j,isArrayBuffer:je,isBuffer:gt,isFormData:Dt,isArrayBufferView:Tt,isString:Ct,isNumber:He,isBoolean:xt,isObject:Y,isPlainObject:$,isUndefined:q,isDate:Nt,isFile:Pt,isBlob:kt,isRegExp:Kt,isFunction:g,isStream:Bt,isURLSearchParams:It,isTypedArray:vt,isFileList:Ft,forEach:z,merge:ue,extend:Ut,trim:Lt,stripBOM:jt,inherits:Ht,toFlatObject:Mt,kindOf:X,kindOfTest:N,endsWith:qt,toArray:zt,forEachEntry:Jt,matchAll:Vt,isHTMLForm:$t,hasOwnProperty:Te,hasOwnProp:Te,reduceDescriptors:ve,freezeMethods:Gt,toObjectSet:Xt,toCamelCase:Wt,noop:Qt,toFiniteNumber:Yt,findKey:Me,global:qe,isContextDefined:ze,ALPHABET:Je,generateString:Zt,isSpecCompliantForm:en,toJSONObject:tn,isAsyncFn:nn,isThenable:rn};function E(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ve=E.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$e[e]={value:e}});Object.defineProperties(E,$e);Object.defineProperty(Ve,"isAxiosError",{value:!0});E.from=(e,t,n,r,s,o)=>{const i=Object.create(Ve);return a.toFlatObject(e,i,function(y){return y!==Error.prototype},u=>u!=="isAxiosError"),E.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const sn=null;function ce(e){return a.isPlainObject(e)||a.isArray(e)}function We(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function xe(e,t,n){return e?e.concat(t).map(function(s,o){return s=We(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function on(e){return a.isArray(e)&&!e.some(ce)}const an=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,O){return!a.isUndefined(O[p])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,y=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!y&&a.isBlob(d))throw new E("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?y&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function c(d,p,O){let _=d;if(d&&!O&&typeof d=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&on(d)||(a.isFileList(d)||a.endsWith(p,"[]"))&&(_=a.toArray(d)))return p=We(p),_.forEach(function(F,st){!(a.isUndefined(F)||F===null)&&t.append(i===!0?xe([p],st,o):i===null?p:p+"[]",h(F))}),!1}return ce(d)?!0:(t.append(xe(O,p,o),h(d)),!1)}const l=[],w=Object.assign(an,{defaultVisitor:c,convertValue:h,isVisitable:ce});function R(d,p){if(!a.isUndefined(d)){if(l.indexOf(d)!==-1)throw Error("Circular reference detected in "+p.join("."));l.push(d),a.forEach(d,function(_,k){(!(a.isUndefined(_)||_===null)&&s.call(t,_,a.isString(k)?k.trim():k,p,w))===!0&&R(_,p?p.concat(k):[k])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}function Ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function me(e,t){this._pairs=[],e&&Z(e,this,t)}const Ke=me.prototype;Ke.append=function(t,n){this._pairs.push([t,n])};Ke.toString=function(t){const n=t?function(r){return t.call(this,r,Ne)}:Ne;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ln(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ge(e,t,n){if(!t)return e;const r=n&&n.encode||ln,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new me(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Pe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},un=typeof URLSearchParams<"u"?URLSearchParams:me,cn=typeof FormData<"u"?FormData:null,fn=typeof Blob<"u"?Blob:null,dn={isBrowser:!0,classes:{URLSearchParams:un,FormData:cn,Blob:fn},protocols:["http","https","file","blob","url","data"]},Qe=typeof window<"u"&&typeof document<"u",pn=(e=>Qe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),hn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qe,hasStandardBrowserEnv:pn,hasStandardBrowserWebWorkerEnv:hn},Symbol.toStringTag,{value:"Module"})),x={...mn,...dn};function yn(e,t){return Z(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function bn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ye(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const u=Number.isFinite(+i),y=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,y?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=wn(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(bn(r),s,n,0)}),n}return null}function En(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ye={transitional:Xe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ye(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yn(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const y=this.env&&this.env.FormData;return Z(u?{"files[]":t}:t,y&&new y,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),En(t)):t}],transformResponse:[function(t){const n=this.transitional||ye.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?E.from(u,E.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ye.headers[e]={}});const be=ye,Sn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rn=e=>{const t={};let n,r,s;return e&&e.split("\n").forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Sn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ke=Symbol("internals");function M(e){return e&&String(e).trim().toLowerCase()}function W(e){return e===!1||e==null?e:a.isArray(e)?e.map(W):String(e)}function On(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const An=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ie(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function _n(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function gn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class ee{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,y,h){const c=M(y);if(!c)throw new Error("header name must be a non-empty string");const l=a.findKey(s,c);(!l||s[l]===void 0||h===!0||h===void 0&&s[l]!==!1)&&(s[l||y]=W(u))}const i=(u,y)=>a.forEach(u,(h,c)=>o(h,c,y));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!An(t)?i(Rn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=M(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return On(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=M(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ie(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=M(i),i){const u=a.findKey(r,i);u&&(!n||ie(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ie(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=W(s),delete n[o];return}const u=t?_n(o):String(o).trim();u!==o&&delete n[o],n[u]=W(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ke]=this[ke]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=M(i);r[u]||(gn(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(ee.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(ee);const P=ee;function ae(e,t){const n=this||be,r=t||n,s=P.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ze(e){return!!(e&&e.__CANCEL__)}function v(e,t,n){E.call(this,e==null?"canceled":e,E.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(v,E,{__CANCEL__:!0});function Tn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new E("Request failed with status code "+n.status,[E.ERR_BAD_REQUEST,E.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Cn=x.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function xn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Nn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function et(e,t){return e&&!xn(t)?Nn(e,t):t}const Pn=x.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function kn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Fn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(y){const h=Date.now(),c=r[o];i||(i=h),n[s]=y,r[s]=h;let l=o,w=0;for(;l!==s;)w+=n[l++],l=l%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const R=c&&h-c;return R?Math.round(w*1e3/R):void 0}}function Fe(e,t){let n=0;const r=Fn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,y=r(u),h=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:y||void 0,estimated:y&&i&&h?(i-o)/y:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const Bn=typeof XMLHttpRequest<"u",Dn=Bn&&function(e){return new Promise(function(n,r){let s=e.data;const o=P.from(e.headers).normalize();let{responseType:i,withXSRFToken:u}=e,y;function h(){e.cancelToken&&e.cancelToken.unsubscribe(y),e.signal&&e.signal.removeEventListener("abort",y)}let c;if(a.isFormData(s)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((c=o.getContentType())!==!1){const[p,...O]=c?c.split(";").map(_=>_.trim()).filter(Boolean):[];o.setContentType([p||"multipart/form-data",...O].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",O=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(p+":"+O))}const w=et(e.baseURL,e.url);l.open(e.method.toUpperCase(),Ge(w,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function R(){if(!l)return;const p=P.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),_={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:p,config:e,request:l};Tn(function(F){n(F),h()},function(F){r(F),h()},_),l=null}if("onloadend"in l?l.onloadend=R:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(R)},l.onabort=function(){l&&(r(new E("Request aborted",E.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new E("Network Error",E.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let O=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const _=e.transitional||Xe;e.timeoutErrorMessage&&(O=e.timeoutErrorMessage),r(new E(O,_.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,l)),l=null},x.hasStandardBrowserEnv&&(u&&a.isFunction(u)&&(u=u(e)),u||u!==!1&&Pn(w))){const p=e.xsrfHeaderName&&e.xsrfCookieName&&Cn.read(e.xsrfCookieName);p&&o.set(e.xsrfHeaderName,p)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(O,_){l.setRequestHeader(_,O)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Fe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Fe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(y=p=>{l&&(r(!p||p.type?new v(null,e,l):p),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(y),e.signal&&(e.signal.aborted?y():e.signal.addEventListener("abort",y)));const d=kn(w);if(d&&x.protocols.indexOf(d)===-1){r(new E("Unsupported protocol "+d+":",E.ERR_BAD_REQUEST,e));return}l.send(s||null)})},fe={http:sn,xhr:Dn};a.forEach(fe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}});const Be=e=>"- ".concat(e),In=e=>a.isFunction(e)||e===null||e===!1,tt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!In(n)&&(r=fe[(i=String(n)).toLowerCase()],r===void 0))throw new E("Unknown adapter '".concat(i,"'"));if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([u,y])=>"adapter ".concat(u," ")+(y===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?"since :\n"+o.map(Be).join("\n"):" "+Be(o[0]):"as no adapter specified";throw new E("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:fe};function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new v(null,e)}function De(e){return le(e),e.headers=P.from(e.headers),e.data=ae.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tt.getAdapter(e.adapter||be.adapter)(e).then(function(r){return le(e),r.data=ae.call(e,e.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return Ze(r)||(le(e),r&&r.response&&(r.response.data=ae.call(e,e.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const Ie=e=>e instanceof P?e.toJSON():e;function U(e,t){t=t||{};const n={};function r(h,c,l){return a.isPlainObject(h)&&a.isPlainObject(c)?a.merge.call({caseless:l},h,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(h,c,l){if(a.isUndefined(c)){if(!a.isUndefined(h))return r(void 0,h,l)}else return r(h,c,l)}function o(h,c){if(!a.isUndefined(c))return r(void 0,c)}function i(h,c){if(a.isUndefined(c)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,c)}function u(h,c,l){if(l in t)return r(h,c);if(l in e)return r(void 0,h)}const y={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(h,c)=>s(Ie(h),Ie(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const l=y[c]||s,w=l(e[c],t[c],c);a.isUndefined(w)&&l!==u||(n[c]=w)}),n}const nt="1.6.7",we={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{we[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Le={};we.transitional=function(t,n,r){function s(o,i){return"[Axios v"+nt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new E(s(i," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!Le[i]&&(Le[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function Ln(e,t,n){if(typeof e!="object")throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],y=u===void 0||i(u,o,e);if(y!==!0)throw new E("option "+o+" must be "+y,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+o,E.ERR_BAD_OPTION)}}const de={assertOptions:Ln,validators:we},B=de.validators;class G{constructor(t){this.defaults=t,this.interceptors={request:new Pe,response:new Pe}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&de.assertOptions(r,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:de.assertOptions(s,{encode:B.function,serialize:B.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=P.concat(i,o);const u=[];let y=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(y=y&&p.synchronous,u.unshift(p.fulfilled,p.rejected))});const h=[];this.interceptors.response.forEach(function(p){h.push(p.fulfilled,p.rejected)});let c,l=0,w;if(!y){const d=[De.bind(this),void 0];for(d.unshift.apply(d,u),d.push.apply(d,h),w=d.length,c=Promise.resolve(n);l<w;)c=c.then(d[l++],d[l++]);return c}w=u.length;let R=n;for(l=0;l<w;){const d=u[l++],p=u[l++];try{R=d(R)}catch(O){p.call(this,O);break}}try{c=De.call(this,R)}catch(d){return Promise.reject(d)}for(l=0,w=h.length;l<w;)c=c.then(h[l++],h[l++]);return c}getUri(t){t=U(this.defaults,t);const n=et(t.baseURL,t.url);return Ge(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){G.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(U(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}G.prototype[t]=n(),G.prototype[t+"Form"]=n(!0)});const K=G;class Ee{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new v(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ee(function(s){t=s}),cancel:t}}}const Un=Ee;function jn(e){return function(n){return e.apply(null,n)}}function Hn(e){return a.isObject(e)&&e.isAxiosError===!0}const pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});const Mn=pe;function rt(e){const t=new K(e),n=Ue(K.prototype.request,t);return a.extend(n,K.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return rt(U(e,s))},n}const S=rt(be);S.Axios=K;S.CanceledError=v;S.CancelToken=Un;S.isCancel=Ze;S.VERSION=nt;S.toFormData=Z;S.AxiosError=E;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=jn;S.isAxiosError=Hn;S.mergeConfig=U;S.AxiosHeaders=P;S.formToJSON=e=>Ye(a.isHTMLForm(e)?new FormData(e):e);S.getAdapter=tt.getAdapter;S.HttpStatusCode=Mn;S.default=S;const qn="";function zn(){const e=L([]),t=L({loaded:!1}),n=async(r=2023,s=[])=>{t.value.loaded=!1;try{const o={year:r};s.length&&(o.countries=s.join(","));const i=await S.get("".concat(qn,"/api/solution"),{params:o});e.value=i.data,t.value.loaded=!0}catch(o){throw t.value.loaded=!0,console.error("Error fetching solution data:",o),o}};return ot(async()=>{n()}),{solutionData:e,meta:t,getSolutionData:n}}const Jn=it({__name:"Tab1Page",setup(e){const{solutionData:t,meta:n,getSolutionData:r}=zn();L(!1);const s=(c,l)=>{const w=JSON.stringify(c,null,2),R=new Blob([w],{type:"application/json"}),d=document.createElement("a");d.href=window.URL.createObjectURL(R),d.download=l,d.click()},o=L(["Trinidad and Tobago","Australia","USA","Canada","Germany"]),i=L([]),u=L(2023),y=()=>{s(t.value,"solutionData.json")},h=()=>{r(u.value,i.value)};return(c,l)=>(T(),D(f(ht),null,{default:m(()=>[b(f(Oe),null,{default:m(()=>[b(f(Se),null,{default:m(()=>[b(f(Re),null,{default:m(()=>[A("We Employ")]),_:1})]),_:1})]),_:1}),b(f(pt),{fullscreen:!0},{default:m(()=>[b(f(Oe),{collapse:"condense"},{default:m(()=>[b(f(Se),null,{default:m(()=>[b(f(Re),{size:"large"},{default:m(()=>[A("Solution Data")]),_:1})]),_:1})]),_:1}),f(n).loaded?te("",!0):(T(),D(f(at),{key:0,type:"indeterminate"})),b(f(Ae),null,{default:m(()=>[b(f(_e),null,{default:m(()=>[b(f(J),null,{default:m(()=>[b(f(I),null,{default:m(()=>[b(f(lt),{label:"Year",labelPlacement:"stacked",type:"number",onIonChange:l[0]||(l[0]=w=>h()),modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=w=>u.value=w),disabled:!f(n).loaded,debounce:2e3},null,8,["modelValue","disabled"])]),_:1})]),_:1}),b(f(J),null,{default:m(()=>[b(f(I),null,{default:m(()=>[b(f(ut),{onIonChange:l[2]||(l[2]=w=>h()),label:"Country",labelPlacement:"stacked",placeholder:"Make a Selection",interface:"popover",multiple:!0,modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=w=>i.value=w),disabled:!f(n).loaded},{default:m(()=>[(T(!0),ne(se,null,re(o.value,(w,R)=>(T(),D(f(mt),{key:R},{default:m(()=>[A(C(w),1)]),_:2},1024))),128))]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),f(n).loaded?(T(),D(f(J),{key:0,size:"12",md:"6"},{default:m(()=>[b(f(I),null,{default:m(()=>[b(f(H),null,{default:m(()=>[A(" Records ")]),_:1}),b(f(ge),{slot:"end",color:"success"},{default:m(()=>[A(C(f(t).length),1)]),_:1})]),_:1})]),_:1})):te("",!0)]),_:1})]),_:1}),b(f(Ae),null,{default:m(()=>[b(f(_e),null,{default:m(()=>[(T(!0),ne(se,null,re(f(t),(w,R)=>(T(),D(f(J),{size:"12",key:R},{default:m(()=>[b(f(yt),null,{default:m(()=>[b(f(bt),null,{default:m(()=>[b(f(wt),null,{default:m(()=>[A(C(w.name),1)]),_:2},1024),b(f(Et),null,{default:m(()=>[A(C(w.email_address)+" | "+C(w.phone_number),1)]),_:2},1024),b(f(V),null,{default:m(()=>[A(C(w.work_id_number),1)]),_:2},1024)]),_:2},1024),b(f(St),null,{default:m(()=>[b(f(Rt),null,{default:m(()=>[b(f(I),null,{default:m(()=>[b(f(H),null,{default:m(()=>[A("Country")]),_:1}),b(f(V),{slot:"end"},{default:m(()=>[A(C(w.country),1)]),_:2},1024)]),_:2},1024),b(f(I),null,{default:m(()=>[b(f(H),null,{default:m(()=>[A("ID")]),_:1}),b(f(Ot),{slot:"end"},{default:m(()=>[A("#"+C(w.record_id),1)]),_:2},1024)]),_:2},1024),b(f(I),null,{default:m(()=>[b(f(H),null,{default:m(()=>[A("Average Hours Per Week")]),_:1}),b(f(V),{slot:"end"},{default:m(()=>[A(C(w.average_hours_per_week),1)]),_:2},1024)]),_:2},1024),b(f(I),null,{default:m(()=>[b(f(H),null,{default:m(()=>[A("Events")]),_:1}),b(f(V),{slot:"end"},{default:m(()=>[(T(!0),ne(se,null,re(w.events,d=>(T(),D(f(ge),null,{default:m(()=>[A(C(d.event_name),1)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),f(n).loaded?(T(),D(f(ct),{key:1,slot:"fixed",vertical:"top",horizontal:"end",edge:"true"},{default:m(()=>[b(f(ft),{onClick:l[4]||(l[4]=w=>y())},{default:m(()=>[b(f(dt),{icon:f(At)},null,8,["icon"])]),_:1})]),_:1})):te("",!0)]),_:1})]),_:1}))}});export{Jn as default};