(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const xf=()=>{};var kc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Mf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],l=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,p=(o&3)<<4|l>>4;let w=(l&15)<<2|d>>6,P=d&63;h||(P=64,a||(w=64)),r.push(t[m],t[p],t[w],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_u(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Mf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||p==null)throw new Ff;const w=o<<2|l>>4;if(r.push(w),d!==64){const P=l<<4&240|d>>2;if(r.push(P),p!==64){const V=d<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ff extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(n){const e=_u(n);return Eu.encodeByteArray(e,!0)},Es=function(n){return Uf(n).replace(/\./g,"")},Iu=function(n){try{return Eu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=()=>Bf().__FIREBASE_DEFAULTS__,jf=()=>{if(typeof process>"u"||typeof kc>"u")return;const n=kc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Iu(n[1]);return e&&JSON.parse(e)},Bs=()=>{try{return xf()||$f()||jf()||qf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vu=n=>Bs()?.emulatorHosts?.[n],zf=n=>{const e=vu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Tu=()=>Bs()?.config,wu=n=>Bs()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Es(JSON.stringify(t)),Es(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Kf(){const n=Bs()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Yf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xf(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zf(){return!Kf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function em(){try{return typeof indexedDB=="object"}catch{return!1}}function tm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="FirebaseError";class ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=nm,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?rm(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ft(s,l,r)}}function rm(n,e){return n.replace(sm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const sm=/\{\$([^}]+)}/g;function im(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(Vc(o)&&Vc(a)){if(!Jt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Vc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function om(n,e){const t=new am(n,e);return t.subscribe.bind(t)}class am{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");cm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Li),s.error===void 0&&(s.error=Li),s.complete===void 0&&(s.complete=Li);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Li(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Au(n){return(await fetch(n,{credentials:"include"})).ok}class Yt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hm(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:um(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function um(n){return n===Ht?void 0:n}function hm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const fm={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},mm=H.INFO,pm={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},gm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=pm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ro{constructor(e){this.name=e,this._logLevel=mm,this._logHandler=gm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const ym=(n,e)=>e.some(t=>n instanceof t);let Nc,Lc;function _m(){return Nc||(Nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Em(){return Lc||(Lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Su=new WeakMap,Ji=new WeakMap,bu=new WeakMap,Oi=new WeakMap,Po=new WeakMap;function Im(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(At(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Su.set(t,n)}).catch(()=>{}),Po.set(e,n),e}function vm(n){if(Ji.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ji.set(n,e)}let Yi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ji.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return At(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Tm(n){Yi=n(Yi)}function wm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xi(this),e,...t);return bu.set(r,e.sort?e.sort():[e]),At(r)}:Em().includes(n)?function(...e){return n.apply(xi(this),e),At(Su.get(this))}:function(...e){return At(n.apply(xi(this),e))}}function Am(n){return typeof n=="function"?wm(n):(n instanceof IDBTransaction&&vm(n),ym(n,_m())?new Proxy(n,Yi):n)}function At(n){if(n instanceof IDBRequest)return Im(n);if(Oi.has(n))return Oi.get(n);const e=Am(n);return e!==n&&(Oi.set(n,e),Po.set(e,n)),e}const xi=n=>Po.get(n);function Sm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),l=At(a);return r&&a.addEventListener("upgradeneeded",h=>{r(At(a.result),h.oldVersion,h.newVersion,At(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const bm=["get","getKey","getAll","getAllKeys","count"],Rm=["put","add","delete","clear"],Mi=new Map;function Oc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mi.get(e))return Mi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Rm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bm.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&h.done]))[0]};return Mi.set(e,o),o}Tm(n=>({...n,get:(e,t,r)=>Oc(e,t)||n.get(e,t,r),has:(e,t)=>!!Oc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Cm(n){return n.getComponent()?.type==="VERSION"}const Xi="@firebase/app",xc="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Ro("@firebase/app"),Dm="@firebase/app-compat",km="@firebase/analytics-compat",Vm="@firebase/analytics",Nm="@firebase/app-check-compat",Lm="@firebase/app-check",Om="@firebase/auth",xm="@firebase/auth-compat",Mm="@firebase/database",Fm="@firebase/data-connect",Um="@firebase/database-compat",Bm="@firebase/functions",$m="@firebase/functions-compat",jm="@firebase/installations",qm="@firebase/installations-compat",zm="@firebase/messaging",Hm="@firebase/messaging-compat",Gm="@firebase/performance",Wm="@firebase/performance-compat",Km="@firebase/remote-config",Qm="@firebase/remote-config-compat",Jm="@firebase/storage",Ym="@firebase/storage-compat",Xm="@firebase/firestore",Zm="@firebase/ai",ep="@firebase/firestore-compat",tp="firebase",np="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]",rp={[Xi]:"fire-core",[Dm]:"fire-core-compat",[Vm]:"fire-analytics",[km]:"fire-analytics-compat",[Lm]:"fire-app-check",[Nm]:"fire-app-check-compat",[Om]:"fire-auth",[xm]:"fire-auth-compat",[Mm]:"fire-rtdb",[Fm]:"fire-data-connect",[Um]:"fire-rtdb-compat",[Bm]:"fire-fn",[$m]:"fire-fn-compat",[jm]:"fire-iid",[qm]:"fire-iid-compat",[zm]:"fire-fcm",[Hm]:"fire-fcm-compat",[Gm]:"fire-perf",[Wm]:"fire-perf-compat",[Km]:"fire-rc",[Qm]:"fire-rc-compat",[Jm]:"fire-gcs",[Ym]:"fire-gcs-compat",[Xm]:"fire-fst",[ep]:"fire-fst-compat",[Zm]:"fire-vertex","fire-js":"fire-js",[tp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Map,sp=new Map,eo=new Map;function Mc(n,e){try{n.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function En(n){const e=n.name;if(eo.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;eo.set(e,n);for(const t of Is.values())Mc(t,n);for(const t of sp.values())Mc(t,n);return!0}function Co(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new Ar("app","Firebase",ip);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=np;function Ru(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Zi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(t||(t=Tu()),!t)throw St.create("no-options");const o=Is.get(s);if(o){if(Jt(t,o.options)&&Jt(r,o.config))return o;throw St.create("duplicate-app",{appName:s})}const a=new dm(s);for(const h of eo.values())a.addComponent(h);const l=new op(t,r,a);return Is.set(s,l),l}function Pu(n=Zi){const e=Is.get(n);if(!e&&n===Zi&&Tu())return Ru();if(!e)throw St.create("no-app",{appName:n});return e}function bt(n,e,t){let r=rp[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}En(new Yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="firebase-heartbeat-database",cp=1,dr="firebase-heartbeat-store";let Fi=null;function Cu(){return Fi||(Fi=Sm(ap,cp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dr)}catch(t){console.warn(t)}}}}).catch(n=>{throw St.create("idb-open",{originalErrorMessage:n.message})})),Fi}async function lp(n){try{const t=(await Cu()).transaction(dr),r=await t.objectStore(dr).get(Du(n));return await t.done,r}catch(e){if(e instanceof ft)ct.warn(e.message);else{const t=St.create("idb-get",{originalErrorMessage:e?.message});ct.warn(t.message)}}}async function Fc(n,e){try{const r=(await Cu()).transaction(dr,"readwrite");await r.objectStore(dr).put(e,Du(n)),await r.done}catch(t){if(t instanceof ft)ct.warn(t.message);else{const r=St.create("idb-set",{originalErrorMessage:t?.message});ct.warn(r.message)}}}function Du(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=1024,hp=30;class dp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>hp){const s=pp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ct.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uc(),{heartbeatsToSend:t,unsentEntries:r}=fp(this._heartbeatsCache.heartbeats),s=Es(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ct.warn(e),""}}}function Uc(){return new Date().toISOString().substring(0,10)}function fp(n,e=up){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Bc(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Bc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class mp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return em()?tm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bc(n){return Es(JSON.stringify({version:2,heartbeats:n})).length}function pp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(n){En(new Yt("platform-logger",e=>new Pm(e),"PRIVATE")),En(new Yt("heartbeat",e=>new dp(e),"PRIVATE")),bt(Xi,xc,n),bt(Xi,xc,"esm2020"),bt("fire-js","")}gp("");var yp="firebase",_p="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(yp,_p,"app");function ku(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ep=ku,Vu=new Ar("auth","Firebase",ku());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Ro("@firebase/auth");function Ip(n,...e){vs.logLevel<=H.WARN&&vs.warn(`Auth (${Cn}): ${n}`,...e)}function cs(n,...e){vs.logLevel<=H.ERROR&&vs.error(`Auth (${Cn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw ko(n,...e)}function Be(n,...e){return ko(n,...e)}function Do(n,e,t){const r={...Ep(),[e]:t};return new Ar("auth","Firebase",r).create(e,{appName:n.name})}function Kt(n){return Do(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(n,"argument-error"),Do(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ko(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vu.create(n,...e)}function F(n,e,...t){if(!n)throw ko(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cs(e),new Error(e)}function lt(n,e){n||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){return typeof self<"u"&&self.location?.href||""}function Tp(){return $c()==="http:"||$c()==="https:"}function $c(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tp()||Jf()||"connection"in navigator)?navigator.onLine:!0}function Ap(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.shortDelay=e,this.longDelay=t,lt(t>e,"Short delay should be less than long delay!"),this.isMobile=Wf()||Yf()}get(){return wp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n,e){lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rp=new Rr(3e4,6e4);function No(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Dn(n,e,t,r,s={}){return Lu(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=Sr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...o};return Qf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&br(n.emulatorConfig.host)&&(d.credentials="include"),Nu.fetch()(await Ou(n,n.config.apiHost,t,l),d)})}async function Lu(n,e,t){n._canInitEmulator=!1;const r={...Sp,...e};try{const s=new Cp(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw ns(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw ns(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw ns(n,"user-disabled",a);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Do(n,m,d);Ye(n,m)}}catch(s){if(s instanceof ft)throw s;Ye(n,"network-request-failed",{message:String(s)})}}async function Pp(n,e,t,r,s={}){const o=await Dn(n,e,t,r,s);return"mfaPendingCredential"in o&&Ye(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Ou(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?Vo(n.config,s):`${n.config.apiScheme}://${s}`;return bp.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Cp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),Rp.get())})}}function ns(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Be(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(n,e){return Dn(n,"POST","/v1/accounts:delete",e)}async function Ts(n,e){return Dn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kp(n,e=!1){const t=le(n),r=await t.getIdToken(e),s=Lo(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:sr(Ui(s.auth_time)),issuedAtTime:sr(Ui(s.iat)),expirationTime:sr(Ui(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Ui(n){return Number(n)*1e3}function Lo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Iu(t);return s?JSON.parse(s):(cs("Failed to decode base64 JWT payload"),null)}catch(s){return cs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function jc(n){const e=Lo(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ft&&Vp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Vp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(n){const e=n.auth,t=await n.getIdToken(),r=await fr(n,Ts(e,{idToken:t}));F(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=s.providerUserInfo?.length?xu(s.providerUserInfo):[],a=Op(n.providerData,o),l=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!a?.length,d=l?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new no(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Lp(n){const e=le(n);await ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Op(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xu(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(n,e){const t=await Lu(n,{},async()=>{const r=Sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Ou(n,s,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&br(n.emulatorConfig.host)&&(h.credentials="include"),Nu.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mp(n,e){return Dn(n,"POST","/v2/accounts:revokeToken",No(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=jc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await xp(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new fn;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(F(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Np(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new no(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kp(this,e)}reload(){return Lp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await fr(this,Dp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:w,isAnonymous:P,providerData:V,stsTokenManager:L}=t;F(p&&L,e,"internal-error");const C=fn.fromJSON(this.name,L);F(typeof p=="string",e,"internal-error"),It(r,e.name),It(s,e.name),F(typeof w=="boolean",e,"internal-error"),F(typeof P=="boolean",e,"internal-error"),It(o,e.name),It(a,e.name),It(l,e.name),It(h,e.name),It(d,e.name),It(m,e.name);const j=new Ue({uid:p,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:P,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:C,createdAt:d,lastLoginAt:m});return V&&Array.isArray(V)&&(j.providerData=V.map(W=>({...W}))),h&&(j._redirectEventId=h),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new fn;s.updateFromServerResponse(t);const o=new Ue({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ws(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?xu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,l=new fn;l.updateFromIdToken(r);const h=new Ue({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new no(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Map;function rt(n){lt(n instanceof Function,"Expected a class definition");let e=qc.get(n);return e?(lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mu.type="NONE";const zc=Mu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n,e,t){return`firebase:${n}:${e}:${t}`}class mn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=ls(this.userKey,s.apiKey,o),this.fullPersistenceKey=ls("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ts(this.auth,{idToken:e}).catch(()=>{});return t?Ue._fromGetAccountInfoResponse(this.auth,t,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mn(rt(zc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||rt(zc);const a=ls(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){let p;if(typeof m=="string"){const w=await Ts(e,{idToken:m}).catch(()=>{});if(!w)break;p=await Ue._fromGetAccountInfoResponse(e,w,m)}else p=Ue._fromJSON(e,m);d!==o&&(l=p),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new mn(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new mn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($u(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qu(e))return"Blackberry";if(zu(e))return"Webos";if(Uu(e))return"Safari";if((e.includes("chrome/")||Bu(e))&&!e.includes("edge/"))return"Chrome";if(ju(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Fu(n=Se()){return/firefox\//i.test(n)}function Uu(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bu(n=Se()){return/crios\//i.test(n)}function $u(n=Se()){return/iemobile/i.test(n)}function ju(n=Se()){return/android/i.test(n)}function qu(n=Se()){return/blackberry/i.test(n)}function zu(n=Se()){return/webos/i.test(n)}function Oo(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fp(n=Se()){return Oo(n)&&!!window.navigator?.standalone}function Up(){return Xf()&&document.documentMode===10}function Hu(n=Se()){return Oo(n)||ju(n)||zu(n)||qu(n)||/windows phone/i.test(n)||$u(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n,e=[]){let t;switch(n){case"Browser":t=Hc(Se());break;case"Worker":t=`${Hc(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(n,e={}){return Dn(n,"GET","/v2/passwordPolicy",No(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=6;class qp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gc(this),this.idTokenSubscription=new Gc(this),this.beforeStateQueue=new Bp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ts(this,{idToken:e}),r=await Ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ws(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ap()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(Kt(this));const t=e?le(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $p(this),t=new qp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mp(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ip(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $s(n){return le(n)}class Gc{constructor(e){this.auth=e,this.observer=null,this.addObserver=om(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hp(n){xo=n}function Gp(n){return xo.loadJS(n)}function Wp(){return xo.gapiScript}function Kp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n,e){const t=Co(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Jt(o,e??{}))return s;Ye(s,"already-initialized")}return t.initialize({options:e})}function Jp(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(rt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Yp(n,e,t){const r=$s(n);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Wu(e),{host:a,port:l}=Xp(e),h=l===null?"":`:${l}`,d={url:`${o}//${a}${h}/`},m=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(Jt(d,r.config.emulator)&&Jt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,br(a)?Au(`${o}//${a}${h}`):Zp()}function Wu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Xp(n){const e=Wu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Wc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Wc(a)}}}function Wc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n,e){return Pp(n,"POST","/v1/accounts:signInWithIdp",No(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="http://localhost";class Xt extends Ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=t;if(!r||!s)return null;const a=new Xt(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}buildRequest(){const e={requestUri:eg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Mo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Pr{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tt.credential(t,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Pr{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Pr{constructor(){super("twitter.com")}static credential(e,t){return Xt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return wt.credential(t,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await Ue._fromIdTokenResponse(e,r,s),a=Kc(r);return new In({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Kc(r);return new In({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Kc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends ft{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,As.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new As(e,t,r,s)}}function Qu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?As._fromErrorAndOperation(n,o,e,r):o})}async function tg(n,e,t=!1){const r=await fr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return In._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(n,e,t=!1){const{auth:r}=n;if(Fe(r.app))return Promise.reject(Kt(r));const s="reauthenticate";try{const o=await fr(n,Qu(r,s,e,n),t);F(o.idToken,r,"internal-error");const a=Lo(o.idToken);F(a,r,"internal-error");const{sub:l}=a;return F(n.uid===l,r,"user-mismatch"),In._forOperation(n,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&Ye(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(n,e,t=!1){if(Fe(n.app))return Promise.reject(Kt(n));const r="signIn",s=await Qu(n,r,e),o=await In._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}function sg(n,e,t,r){return le(n).onIdTokenChanged(e,t,r)}function ig(n,e,t){return le(n).beforeAuthStateChanged(e,t)}function og(n,e,t,r){return le(n).onAuthStateChanged(e,t,r)}function ag(n){return le(n).signOut()}const Ss="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=1e3,lg=10;class Yu extends Ju{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Up()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yu.type="LOCAL";const ug=Yu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends Ju{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xu.type="SESSION";const Zu=Xu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new js(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await hg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}js.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=Fo("",20);s.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const w=p;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(w.data.response);break;default:clearTimeout(m),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return window}function fg(n){We().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function mg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pg(){return navigator?.serviceWorker?.controller||null}function gg(){return eh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="firebaseLocalStorageDb",yg=1,bs="firebaseLocalStorage",nh="fbase_key";class Cr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qs(n,e){return n.transaction([bs],e?"readwrite":"readonly").objectStore(bs)}function _g(){const n=indexedDB.deleteDatabase(th);return new Cr(n).toPromise()}function ro(){const n=indexedDB.open(th,yg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bs,{keyPath:nh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bs)?e(r):(r.close(),await _g(),e(await ro()))})})}async function Qc(n,e,t){const r=qs(n,!0).put({[nh]:e,value:t});return new Cr(r).toPromise()}async function Eg(n,e){const t=qs(n,!1).get(e),r=await new Cr(t).toPromise();return r===void 0?null:r.value}function Jc(n,e){const t=qs(n,!0).delete(e);return new Cr(t).toPromise()}const Ig=800,vg=3;class rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ro(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>vg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=js._getInstance(gg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await mg(),!this.activeServiceWorker)return;this.sender=new dg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ro();return await Qc(e,Ss,"1"),await Jc(e,Ss),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Eg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=qs(s,!1).getAll();return new Cr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rh.type="LOCAL";const Tg=rh;new Rr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n,e){return e?rt(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends Ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wg(n){return rg(n.auth,new Uo(n),n.bypassAuthState)}function Ag(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),ng(t,new Uo(n),n.bypassAuthState)}async function Sg(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),tg(t,new Uo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wg;case"linkViaPopup":case"linkViaRedirect":return Sg;case"reauthViaPopup":case"reauthViaRedirect":return Ag;default:Ye(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Rr(2e3,1e4);async function Rg(n,e,t){if(Fe(n.app))return Promise.reject(Be(n,"operation-not-supported-in-this-environment"));const r=$s(n);vp(n,e,Mo);const s=sh(r,t);return new Gt(r,"signInViaPopup",e,s).executeNotNull()}class Gt extends ih{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=Fo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bg.get())};e()}}Gt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="pendingRedirect",us=new Map;class Cg extends ih{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const r=await Dg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dg(n,e){const t=Ng(e),r=Vg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function kg(n,e){us.set(n._key(),e)}function Vg(n){return rt(n._redirectPersistence)}function Ng(n){return ls(Pg,n.config.apiKey,n.name)}async function Lg(n,e,t=!1){if(Fe(n.app))return Promise.reject(Kt(n));const r=$s(n),s=sh(r,e),a=await new Cg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=10*60*1e3;class xg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!oh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Be(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Og&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yc(e))}saveEventToCache(e){this.cachedEventUids.add(Yc(e)),this.lastProcessedEventTime=Date.now()}}function Yc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function oh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Mg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,e={}){return Dn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bg=/^https?/;async function $g(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Fg(n);for(const t of e)try{if(jg(t))return}catch{}Ye(n,"unauthorized-domain")}function jg(n){const e=to(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Bg.test(t))return!1;if(Ug.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Rr(3e4,6e4);function Xc(){const n=We().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function zg(n){return new Promise((e,t)=>{function r(){Xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xc(),t(Be(n,"network-request-failed"))},timeout:qg.get()})}if(We().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(We().gapi?.load)r();else{const s=Kp("iframefcb");return We()[s]=()=>{gapi.load?r():t(Be(n,"network-request-failed"))},Gp(`${Wp()}?onload=${s}`).catch(o=>t(o))}}).catch(e=>{throw hs=null,e})}let hs=null;function Hg(n){return hs=hs||zg(n),hs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new Rr(5e3,15e3),Wg="__/auth/iframe",Kg="emulator/auth/iframe",Qg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yg(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vo(e,Kg):`https://${n.config.authDomain}/${Wg}`,r={apiKey:e.apiKey,appName:n.name,v:Cn},s=Jg.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Sr(r).slice(1)}`}async function Xg(n){const e=await Hg(n),t=We().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Yg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qg,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Be(n,"network-request-failed"),l=We().setTimeout(()=>{o(a)},Gg.get());function h(){We().clearTimeout(l),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ey=500,ty=600,ny="_blank",ry="http://localhost";class Zc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sy(n,e,t,r=ey,s=ty){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h={...Zg,width:r.toString(),height:s.toString(),top:o,left:a},d=Se().toLowerCase();t&&(l=Bu(d)?ny:t),Fu(d)&&(e=e||ry,h.scrollbars="yes");const m=Object.entries(h).reduce((w,[P,V])=>`${w}${P}=${V},`,"");if(Fp(d)&&l!=="_self")return iy(e||"",l),new Zc(null);const p=window.open(e||"",l,m);F(p,n,"popup-blocked");try{p.focus()}catch{}return new Zc(p)}function iy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="__/auth/handler",ay="emulator/auth/handler",cy=encodeURIComponent("fac");async function el(n,e,t,r,s,o){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Cn,eventId:s};if(e instanceof Mo){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",im(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))a[m]=p}if(e instanceof Pr){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const h=await n._getAppCheckToken(),d=h?`#${cy}=${encodeURIComponent(h)}`:"";return`${ly(n)}?${Sr(l).slice(1)}${d}`}function ly({config:n}){return n.emulator?Vo(n,ay):`https://${n.authDomain}/${oy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="webStorageSupport";class uy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zu,this._completeRedirectFn=Lg,this._overrideRedirectResult=kg}async _openPopup(e,t,r,s){lt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await el(e,t,r,to(),s);return sy(e,o,Fo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await el(e,t,r,to(),s);return fg(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(lt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Xg(e),r=new xg(e);return t.register("authEvent",s=>(F(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bi,{type:Bi},s=>{const o=s?.[0]?.[Bi];o!==void 0&&t(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$g(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hu()||Uu()||Oo()}}const hy=uy;var tl="@firebase/auth",nl="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function my(n){En(new Yt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gu(n)},d=new zp(r,s,o,h);return Jp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),En(new Yt("auth-internal",e=>{const t=$s(e.getProvider("auth").getImmediate());return(r=>new dy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(tl,nl,fy(n)),bt(tl,nl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=5*60,gy=wu("authIdTokenMaxAge")||py;let rl=null;const yy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>gy)return;const s=t?.token;rl!==s&&(rl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _y(n=Pu()){const e=Co(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qp(n,{popupRedirectResolver:hy,persistence:[Tg,ug,Zu]}),r=wu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=yy(o.toString());ig(t,a,()=>a(t.currentUser)),sg(t,l=>a(l))}}const s=vu("auth");return s&&Yp(t,`http://${s}`),t}function Ey(){return document.getElementsByTagName("head")?.[0]??document}Hp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Be("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",Ey().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});my("Browser");var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rt,ah;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function _(){}_.prototype=g.prototype,I.F=g.prototype,I.prototype=new _,I.prototype.constructor=I,I.D=function(v,E,A){for(var y=Array(arguments.length-2),De=2;De<arguments.length;De++)y[De-2]=arguments[De];return g.prototype[E].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,_){_||(_=0);const v=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)v[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;E<16;++E)v[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=I.g[0],_=I.g[1],E=I.g[2];let A=I.g[3],y;y=g+(A^_&(E^A))+v[0]+3614090360&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+v[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+v[2]+606105819&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+v[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(A^_&(E^A))+v[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+v[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+v[6]+2821735955&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+v[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(A^_&(E^A))+v[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+v[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+v[10]+4294925233&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+v[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(A^_&(E^A))+v[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(E^g&(_^E))+v[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(_^A&(g^_))+v[14]+2792965006&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(g^E&(A^g))+v[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(E^A&(_^E))+v[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+v[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+v[11]+643717713&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+v[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(_^E))+v[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+v[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+v[15]+3634488961&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+v[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(_^E))+v[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+v[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+v[3]+4107603335&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+v[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(_^E))+v[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(g^_))+v[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(A^g))+v[7]+1735328473&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(E^A))+v[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(_^E^A)+v[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+v[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+v[11]+1839030562&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+v[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^A)+v[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+v[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+v[7]+4139469664&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+v[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^A)+v[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+v[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+v[3]+3572445317&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+v[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^A)+v[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^E)+v[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^_)+v[15]+530742520&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^g)+v[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(E^(_|~A))+v[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+v[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+v[14]+2878612391&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+v[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~A))+v[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+v[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+v[10]+4293915773&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+v[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~A))+v[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+v[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+v[6]+2734768916&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+v[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~A))+v[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~E))+v[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~_))+v[2]+718787259&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~g))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const _=g-this.blockSize,v=this.C;let E=this.h,A=0;for(;A<g;){if(E==0)for(;A<=_;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<g;)if(v[E++]=I.charCodeAt(A++),E==this.blockSize){s(this,v),E=0;break}}else for(;A<g;)if(v[E++]=I[A++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var _=I.length-8;_<I.length;++_)I[_]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,_=0;_<4;++_)for(let v=0;v<32;v+=8)I[g++]=this.g[_]>>>v&255;return I};function o(I,g){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=g(I)}function a(I,g){this.h=g;const _=[];let v=!0;for(let E=I.length-1;E>=0;E--){const A=I[E]|0;v&&A==g||(_[E]=A,v=!1)}this.g=_}var l={};function h(I){return-128<=I&&I<128?o(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return C(d(-I));const g=[];let _=1;for(let v=0;I>=_;v++)g[v]=I/_|0,_*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return C(m(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let v=p;for(let A=0;A<I.length;A+=8){var E=Math.min(8,I.length-A);const y=parseInt(I.substring(A,A+E),g);E<8?(E=d(Math.pow(g,E)),v=v.j(E).add(d(y))):(v=v.j(_),v=v.add(d(y)))}return v}var p=h(0),w=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(L(this))return-C(this).m();let I=0,g=1;for(let _=0;_<this.g.length;_++){const v=this.i(_);I+=(v>=0?v:4294967296+v)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(L(this))return"-"+C(this).toString(I);const g=d(Math.pow(I,6));var _=this;let v="";for(;;){const E=Ce(_,g).g;_=j(_,E.j(g));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(I);if(_=E,V(_))return A+v;for(;A.length<6;)A="0"+A;v=A+v}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function L(I){return I.h==-1}n.l=function(I){return I=j(this,I),L(I)?-1:V(I)?0:1};function C(I){const g=I.g.length,_=[];for(let v=0;v<g;v++)_[v]=~I.g[v];return new a(_,~I.h).add(w)}n.abs=function(){return L(this)?C(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),_=[];let v=0;for(let E=0;E<=g;E++){let A=v+(this.i(E)&65535)+(I.i(E)&65535),y=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);v=y>>>16,A&=65535,y&=65535,_[E]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(I,g){return I.add(C(g))}n.j=function(I){if(V(this)||V(I))return p;if(L(this))return L(I)?C(this).j(C(I)):C(C(this).j(I));if(L(I))return C(this.j(C(I)));if(this.l(P)<0&&I.l(P)<0)return d(this.m()*I.m());const g=this.g.length+I.g.length,_=[];for(var v=0;v<2*g;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(let E=0;E<I.g.length;E++){const A=this.i(v)>>>16,y=this.i(v)&65535,De=I.i(E)>>>16,Ut=I.i(E)&65535;_[2*v+2*E]+=y*Ut,W(_,2*v+2*E),_[2*v+2*E+1]+=A*Ut,W(_,2*v+2*E+1),_[2*v+2*E+1]+=y*De,W(_,2*v+2*E+1),_[2*v+2*E+2]+=A*De,W(_,2*v+2*E+2)}for(I=0;I<g;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=g;I<2*g;I++)_[I]=0;return new a(_,0)};function W(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function ee(I,g){this.g=I,this.h=g}function Ce(I,g){if(V(g))throw Error("division by zero");if(V(I))return new ee(p,p);if(L(I))return g=Ce(C(I),g),new ee(C(g.g),C(g.h));if(L(g))return g=Ce(I,C(g)),new ee(C(g.g),g.h);if(I.g.length>30){if(L(I)||L(g))throw Error("slowDivide_ only works with positive integers.");for(var _=w,v=g;v.l(I)<=0;)_=Me(_),v=Me(v);var E=ye(_,1),A=ye(v,1);for(v=ye(v,2),_=ye(_,2);!V(v);){var y=A.add(v);y.l(I)<=0&&(E=E.add(_),A=y),v=ye(v,1),_=ye(_,1)}return g=j(I,E.j(g)),new ee(E,g)}for(E=p;I.l(g)>=0;){for(_=Math.max(1,Math.floor(I.m()/g.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),A=d(_),y=A.j(g);L(y)||y.l(I)>0;)_-=v,A=d(_),y=A.j(g);V(A)&&(A=w),E=E.add(A),I=j(I,y)}return new ee(E,I)}n.B=function(I){return Ce(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)&I.i(v);return new a(_,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)|I.i(v);return new a(_,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)^I.i(v);return new a(_,this.h^I.h)};function Me(I){const g=I.g.length+1,_=[];for(let v=0;v<g;v++)_[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(_,I.h)}function ye(I,g){const _=g>>5;g%=32;const v=I.g.length-_,E=[];for(let A=0;A<v;A++)E[A]=g>0?I.i(A+_)>>>g|I.i(A+_+1)<<32-g:I.i(A+_);return new a(E,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ah=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Rt=a}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});var rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ch,Zn,lh,ds,so,uh,hh,dh;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof rs=="object"&&rs];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var T=i[f];if(!(T in u))break e;u=u[T]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&e(u,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function d(i,c,u){return d=h,d.apply(null,arguments)}function m(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function p(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,T,S){for(var D=Array(arguments.length-2),$=2;$<arguments.length;$++)D[$-2]=arguments[$];return c.prototype[T].apply(f,D)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const c=i.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function V(i,c){for(let f=1;f<arguments.length;f++){const T=arguments[f];var u=typeof T;if(u=u!="object"?u:T?Array.isArray(T)?"array":u:"null",u=="array"||u=="object"&&typeof T.length=="number"){u=i.length||0;const S=T.length||0;i.length=u+S;for(let D=0;D<S;D++)i[u+D]=T[D]}else i.push(T)}}class L{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(i){a.setTimeout(()=>{throw i},0)}function j(){var i=I;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class W{constructor(){this.h=this.g=null}add(c,u){const f=ee.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var ee=new L(()=>new Ce,i=>i.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,ye=!1,I=new W,g=()=>{const i=Promise.resolve(void 0);Me=()=>{i.then(_)}};function _(){for(var i;i=j();){try{i.h.call(i.g)}catch(u){C(u)}var c=ee;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}ye=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i}();function y(i){return/^[\s\xa0]*$/.test(i)}function De(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}p(De,E),De.prototype.init=function(i,c){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&De.Z.h.call(this)},De.prototype.h=function(){De.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ut="closure_listenable_"+(Math.random()*1e6|0),rf=0;function sf(i,c,u,f,T){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=T,this.key=++rf,this.da=this.fa=!1}function $r(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function jr(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function of(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function Da(i){const c={};for(const u in i)c[u]=i[u];return c}const ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Va(i,c){let u,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(u in f)i[u]=f[u];for(let S=0;S<ka.length;S++)u=ka[S],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function qr(i){this.src=i,this.g={},this.h=0}qr.prototype.add=function(i,c,u,f,T){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const D=hi(i,c,f,T);return D>-1?(c=i[D],u||(c.fa=!1)):(c=new sf(c,this.src,S,!!f,T),c.fa=u,i.push(c)),c};function ui(i,c){const u=c.type;if(u in i.g){var f=i.g[u],T=Array.prototype.indexOf.call(f,c,void 0),S;(S=T>=0)&&Array.prototype.splice.call(f,T,1),S&&($r(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function hi(i,c,u,f){for(let T=0;T<i.length;++T){const S=i[T];if(!S.da&&S.listener==c&&S.capture==!!u&&S.ha==f)return T}return-1}var di="closure_lm_"+(Math.random()*1e6|0),fi={};function Na(i,c,u,f,T){if(Array.isArray(c)){for(let S=0;S<c.length;S++)Na(i,c[S],u,f,T);return null}return u=xa(u),i&&i[Ut]?i.J(c,u,l(f)?!!f.capture:!1,T):af(i,c,u,!1,f,T)}function af(i,c,u,f,T,S){if(!c)throw Error("Invalid event type");const D=l(T)?!!T.capture:!!T;let $=pi(i);if($||(i[di]=$=new qr(i)),u=$.add(c,u,f,D,S),u.proxy)return u;if(f=cf(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)A||(T=D),T===void 0&&(T=!1),i.addEventListener(c.toString(),f,T);else if(i.attachEvent)i.attachEvent(Oa(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function cf(){function i(u){return c.call(i.src,i.listener,u)}const c=lf;return i}function La(i,c,u,f,T){if(Array.isArray(c))for(var S=0;S<c.length;S++)La(i,c[S],u,f,T);else f=l(f)?!!f.capture:!!f,u=xa(u),i&&i[Ut]?(i=i.i,S=String(c).toString(),S in i.g&&(c=i.g[S],u=hi(c,u,f,T),u>-1&&($r(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[S],i.h--)))):i&&(i=pi(i))&&(c=i.g[c.toString()],i=-1,c&&(i=hi(c,u,f,T)),(u=i>-1?c[i]:null)&&mi(u))}function mi(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Ut])ui(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(Oa(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=pi(c))?(ui(u,i),u.h==0&&(u.src=null,c[di]=null)):$r(i)}}}function Oa(i){return i in fi?fi[i]:fi[i]="on"+i}function lf(i,c){if(i.da)i=!0;else{c=new De(c,this);const u=i.listener,f=i.ha||i.src;i.fa&&mi(i),i=u.call(f,c)}return i}function pi(i){return i=i[di],i instanceof qr?i:null}var gi="__closure_events_fn_"+(Math.random()*1e9>>>0);function xa(i){return typeof i=="function"?i:(i[gi]||(i[gi]=function(c){return i.handleEvent(c)}),i[gi])}function ve(){v.call(this),this.i=new qr(this),this.M=this,this.G=null}p(ve,v),ve.prototype[Ut]=!0,ve.prototype.removeEventListener=function(i,c,u,f){La(this,i,c,u,f)};function be(i,c){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var T=c;c=new E(f,i),Va(c,T)}T=!0;let S,D;if(u)for(D=u.length-1;D>=0;D--)S=c.g=u[D],T=zr(S,f,!0,c)&&T;if(S=c.g=i,T=zr(S,f,!0,c)&&T,T=zr(S,f,!1,c)&&T,u)for(D=0;D<u.length;D++)S=c.g=u[D],T=zr(S,f,!1,c)&&T}ve.prototype.N=function(){if(ve.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let f=0;f<u.length;f++)$r(u[f]);delete i.g[c],i.h--}}this.G=null},ve.prototype.J=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},ve.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function zr(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let S=0;S<c.length;++S){const D=c[S];if(D&&!D.da&&D.capture==u){const $=D.listener,ue=D.ha||D.src;D.fa&&ui(i.i,D),T=$.call(ue,f)!==!1&&T}}return T&&!f.defaultPrevented}function uf(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function Ma(i){i.g=uf(()=>{i.g=null,i.i&&(i.i=!1,Ma(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class hf extends v{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ma(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xn(i){v.call(this),this.h=i,this.g={}}p(xn,v);var Fa=[];function Ua(i){jr(i.g,function(c,u){this.g.hasOwnProperty(u)&&mi(c)},i),i.g={}}xn.prototype.N=function(){xn.Z.N.call(this),Ua(this)},xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yi=a.JSON.stringify,df=a.JSON.parse,ff=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Ba(){}function $a(){}var Mn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _i(){E.call(this,"d")}p(_i,E);function Ei(){E.call(this,"c")}p(Ei,E);var Bt={},ja=null;function Hr(){return ja=ja||new ve}Bt.Ia="serverreachability";function qa(i){E.call(this,Bt.Ia,i)}p(qa,E);function Fn(i){const c=Hr();be(c,new qa(c))}Bt.STAT_EVENT="statevent";function za(i,c){E.call(this,Bt.STAT_EVENT,i),this.stat=c}p(za,E);function Re(i){const c=Hr();be(c,new za(c,i))}Bt.Ja="timingevent";function Ha(i,c){E.call(this,Bt.Ja,i),this.size=c}p(Ha,E);function Un(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Bn(){this.g=!0}Bn.prototype.ua=function(){this.g=!1};function mf(i,c,u,f,T,S){i.info(function(){if(i.g)if(S){var D="",$=S.split("&");for(let Q=0;Q<$.length;Q++){var ue=$[Q].split("=");if(ue.length>1){const de=ue[0];ue=ue[1];const ze=de.split("_");D=ze.length>=2&&ze[1]=="type"?D+(de+"="+ue+"&"):D+(de+"=redacted&")}}}else D=null;else D=S;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+u+`
`+D})}function pf(i,c,u,f,T,S,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+u+`
`+S+" "+D})}function on(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+yf(i,u)+(f?" "+f:"")})}function gf(i,c){i.info(function(){return"TIMEOUT: "+c})}Bn.prototype.info=function(){};function yf(i,c){if(!i.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var u=S[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var T=f[0];if(T!="noop"&&T!="stop"&&T!="close")for(let D=1;D<f.length;D++)f[D]=""}}}}return yi(S)}catch{return c}}var Gr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ga={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wa;function Ii(){}p(Ii,Ba),Ii.prototype.g=function(){return new XMLHttpRequest},Wa=new Ii;function $n(i){return encodeURIComponent(String(i))}function _f(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function mt(i,c,u,f){this.j=i,this.i=c,this.l=u,this.S=f||1,this.V=new xn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ka}function Ka(){this.i=null,this.g="",this.h=!1}var Qa={},vi={};function Ti(i,c,u){i.M=1,i.A=Kr(qe(c)),i.u=u,i.R=!0,Ja(i,null)}function Ja(i,c){i.F=Date.now(),Wr(i),i.B=qe(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),lc(u.i,"t",f),i.C=0,u=i.j.L,i.h=new Ka,i.g=Rc(i.j,u?c:null,!i.u),i.P>0&&(i.O=new hf(d(i.Y,i,i.g),i.P)),c=i.V,u=i.g,f=i.ba;var T="readystatechange";Array.isArray(T)||(T&&(Fa[0]=T.toString()),T=Fa);for(let S=0;S<T.length;S++){const D=Na(u,T[S],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=i.J?Da(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Fn(),mf(i.i,i.v,i.B,i.l,i.S,i.u)}mt.prototype.ba=function(i){i=i.target;const c=this.O;c&&yt(i)==3?c.j():this.Y(i)},mt.prototype.Y=function(i){try{if(i==this.g)e:{const $=yt(this.g),ue=this.g.ya(),Q=this.g.ca();if(!($<3)&&($!=3||this.g&&(this.h.h||this.g.la()||gc(this.g)))){this.K||$!=4||ue==7||(ue==8||Q<=0?Fn(3):Fn(2)),wi(this);var c=this.g.ca();this.X=c;var u=Ef(this);if(this.o=c==200,pf(this.i,this.v,this.B,this.l,this.S,$,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,T=this.g;if((f=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(f)){var S=f;break t}}S=null}if(i=S)on(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ai(this,i);else{this.o=!1,this.m=3,Re(12),$t(this),jn(this);break e}}if(this.R){i=!0;let de;for(;!this.K&&this.C<u.length;)if(de=If(this,u),de==vi){$==4&&(this.m=4,Re(14),i=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(de==Qa){this.m=4,Re(15),on(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else on(this.i,this.l,de,null),Ai(this,de);if(Ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||u.length!=0||this.h.h||(this.m=1,Re(16),i=!1),this.o=this.o&&i,!i)on(this.i,this.l,u,"[Invalid Chunked Response]"),$t(this),jn(this);else if(u.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Vi(D),D.P=!0,Re(11))}}else on(this.i,this.l,u,null),Ai(this,u);$==4&&$t(this),this.o&&!this.K&&($==4?wc(this.j,this):(this.o=!1,Wr(this)))}else Lf(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,Re(12)):(this.m=0,Re(13)),$t(this),jn(this)}}}catch{}finally{}};function Ef(i){if(!Ya(i))return i.g.la();const c=gc(i.g);if(c==="")return"";let u="";const f=c.length,T=yt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return $t(i),jn(i),"";i.h.i=new a.TextDecoder}for(let S=0;S<f;S++)i.h.h=!0,u+=i.h.i.decode(c[S],{stream:!(T&&S==f-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function Ya(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function If(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?vi:(u=Number(c.substring(u,f)),isNaN(u)?Qa:(f+=1,f+u>c.length?vi:(c=c.slice(f,f+u),i.C=f+u,c)))}mt.prototype.cancel=function(){this.K=!0,$t(this)};function Wr(i){i.T=Date.now()+i.H,Xa(i,i.H)}function Xa(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Un(d(i.aa,i),c)}function wi(i){i.D&&(a.clearTimeout(i.D),i.D=null)}mt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(gf(this.i,this.B),this.M!=2&&(Fn(),Re(17)),$t(this),this.m=2,jn(this)):Xa(this,this.T-i)};function jn(i){i.j.I==0||i.K||wc(i.j,i)}function $t(i){wi(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Ua(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Ai(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||Si(u.h,i))){if(!i.L&&Si(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)Zr(u),Yr(u);else break e;ki(u),Re(18)}}else u.xa=T[1],0<u.xa-u.K&&T[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Un(d(u.Va,u),6e3));tc(u.h)<=1&&u.ta&&(u.ta=void 0)}else qt(u,11)}else if((i.L||u.g==i)&&Zr(u),!y(c))for(T=u.Ba.g.parse(c),c=0;c<T.length;c++){let Q=T[c];const de=Q[0];if(!(de<=u.K))if(u.K=de,Q=Q[1],u.I==2)if(Q[0]=="c"){u.M=Q[1],u.ba=Q[2];const ze=Q[3];ze!=null&&(u.ka=ze,u.j.info("VER="+u.ka));const zt=Q[4];zt!=null&&(u.za=zt,u.j.info("SVER="+u.za));const _t=Q[5];_t!=null&&typeof _t=="number"&&_t>0&&(f=1.5*_t,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Et=i.g;if(Et){const ts=Et.g?Et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ts){var S=f.h;S.g||ts.indexOf("spdy")==-1&&ts.indexOf("quic")==-1&&ts.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(bi(S,S.h),S.h=null))}if(f.G){const Ni=Et.g?Et.g.getResponseHeader("X-HTTP-Session-Id"):null;Ni&&(f.wa=Ni,Y(f.J,f.G,Ni))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var D=i;if(f.na=bc(f,f.L?f.ba:null,f.W),D.L){nc(f.h,D);var $=D,ue=f.O;ue&&($.H=ue),$.D&&(wi($),Wr($)),f.g=D}else vc(f);u.i.length>0&&Xr(u)}else Q[0]!="stop"&&Q[0]!="close"||qt(u,7);else u.I==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?qt(u,7):Di(u):Q[0]!="noop"&&u.l&&u.l.qa(Q),u.A=0)}}Fn(4)}catch{}}var vf=class{constructor(i,c){this.g=i,this.map=c}};function Za(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ec(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function tc(i){return i.h?1:i.g?i.g.size:0}function Si(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function bi(i,c){i.g?i.g.add(c):i.h=c}function nc(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Za.prototype.cancel=function(){if(this.i=rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function rc(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return P(i.i)}var sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tf(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let T,S=null;f>=0?(T=i[u].substring(0,f),S=i[u].substring(f+1)):T=i[u],c(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function pt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof pt?(this.l=i.l,qn(this,i.j),this.o=i.o,this.g=i.g,zn(this,i.u),this.h=i.h,Ri(this,uc(i.i)),this.m=i.m):i&&(c=String(i).match(sc))?(this.l=!1,qn(this,c[1]||"",!0),this.o=Hn(c[2]||""),this.g=Hn(c[3]||"",!0),zn(this,c[4]),this.h=Hn(c[5]||"",!0),Ri(this,c[6]||"",!0),this.m=Hn(c[7]||"")):(this.l=!1,this.i=new Wn(null,this.l))}pt.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Gn(c,ic,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Gn(c,ic,!0),"@"),i.push($n(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Gn(u,u.charAt(0)=="/"?Sf:Af,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Gn(u,Rf)),i.join("")},pt.prototype.resolve=function(i){const c=qe(this);let u=!!i.j;u?qn(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var f=i.h;if(u)zn(c,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var T=c.h.lastIndexOf("/");T!=-1&&(f=c.h.slice(0,T+1)+f)}if(T=f,T==".."||T==".")f="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){f=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let D=0;D<T.length;){const $=T[D++];$=="."?f&&D==T.length&&S.push(""):$==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&D==T.length&&S.push("")):(S.push($),f=!0)}f=S.join("/")}else f=T}return u?c.h=f:u=i.i.toString()!=="",u?Ri(c,uc(i.i)):u=!!i.m,u&&(c.m=i.m),c};function qe(i){return new pt(i)}function qn(i,c,u){i.j=u?Hn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function zn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Ri(i,c,u){c instanceof Wn?(i.i=c,Pf(i.i,i.l)):(u||(c=Gn(c,bf)),i.i=new Wn(c,i.l))}function Y(i,c,u){i.i.set(c,u)}function Kr(i){return Y(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Hn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Gn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,wf),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function wf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ic=/[#\/\?@]/g,Af=/[#\?:]/g,Sf=/[#\?]/g,bf=/[#\?@]/g,Rf=/#/g;function Wn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function jt(i){i.g||(i.g=new Map,i.h=0,i.i&&Tf(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Wn.prototype,n.add=function(i,c){jt(this),this.i=null,i=an(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function oc(i,c){jt(i),c=an(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function ac(i,c){return jt(i),c=an(i,c),i.g.has(c)}n.forEach=function(i,c){jt(this),this.g.forEach(function(u,f){u.forEach(function(T){i.call(c,T,f,this)},this)},this)};function cc(i,c){jt(i);let u=[];if(typeof c=="string")ac(i,c)&&(u=u.concat(i.g.get(an(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}n.set=function(i,c){return jt(this),this.i=null,i=an(this,i),ac(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=cc(this,i),i.length>0?String(i[0]):c):c};function lc(i,c,u){oc(i,c),u.length>0&&(i.i=null,i.g.set(an(i,c),P(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const T=$n(u);u=cc(this,u);for(let S=0;S<u.length;S++){let D=T;u[S]!==""&&(D+="="+$n(u[S])),i.push(D)}}return this.i=i.join("&")};function uc(i){const c=new Wn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function an(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Pf(i,c){c&&!i.j&&(jt(i),i.i=null,i.g.forEach(function(u,f){const T=f.toLowerCase();f!=T&&(oc(this,f),lc(this,T,u))},i)),i.j=c}function Cf(i,c){const u=new Bn;if(a.Image){const f=new Image;f.onload=m(gt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=m(gt,u,"TestLoadImage: error",!1,c,f),f.onabort=m(gt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(gt,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Df(i,c){const u=new Bn,f=new AbortController,T=setTimeout(()=>{f.abort(),gt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(T),S.ok?gt(u,"TestPingServer: ok",!0,c):gt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),gt(u,"TestPingServer: error",!1,c)})}function gt(i,c,u,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(u)}catch{}}function kf(){this.g=new ff}function Pi(i){this.i=i.Sb||null,this.h=i.ab||!1}p(Pi,Ba),Pi.prototype.g=function(){return new Qr(this.i,this.h)};function Qr(i,c){ve.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Qr,ve),n=Qr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Qn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hc(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function hc(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Kn(this):Qn(this),this.readyState==3&&hc(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Kn(this))},n.Na=function(i){this.g&&(this.response=i,Kn(this))},n.ga=function(){this.g&&Kn(this)};function Kn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Qn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function Qn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function dc(i){let c="";return jr(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Ci(i,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=dc(u),typeof i=="string"?u!=null&&$n(u):Y(i,c,u))}function te(i){ve.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(te,ve);var Vf=/^https?$/i,Nf=["POST","PUT"];n=te.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wa.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(S){fc(this,S);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)u.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())u.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),T=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(Nf,c,void 0)>=0)||f||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of u)this.g.setRequestHeader(S,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){fc(this,S)}};function fc(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,mc(i),Jr(i)}function mc(i){i.A||(i.A=!0,be(i,"complete"),be(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,be(this,"complete"),be(this,"abort"),Jr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jr(this,!0)),te.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?pc(this):this.Xa())},n.Xa=function(){pc(this)};function pc(i){if(i.h&&typeof o<"u"){if(i.v&&yt(i)==4)setTimeout(i.Ca.bind(i),0);else if(be(i,"readystatechange"),yt(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=S===0){let D=String(i.D).match(sc)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),f=!Vf.test(D?D.toLowerCase():"")}u=f}if(u)be(i,"complete"),be(i,"success");else{i.o=6;try{var T=yt(i)>2?i.g.statusText:""}catch{T=""}i.l=T+" ["+i.ca()+"]",mc(i)}}finally{Jr(i)}}}}function Jr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||be(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function yt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return yt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),df(c)}};function gc(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Lf(i){const c={};i=(i.g&&yt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(y(i[f]))continue;var u=_f(i[f]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=c[T]||[];c[T]=S,S.push(u)}of(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function yc(i){this.za=0,this.i=[],this.j=new Bn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jn("baseRetryDelayMs",5e3,i),this.Za=Jn("retryDelaySeedMs",1e4,i),this.Ta=Jn("forwardChannelMaxRetries",2,i),this.va=Jn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Za(i&&i.concurrentRequestLimit),this.Ba=new kf,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=yc.prototype,n.ka=8,n.I=1,n.connect=function(i,c,u,f){Re(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=bc(this,null,this.W),Xr(this)};function Di(i){if(_c(i),i.I==3){var c=i.V++,u=qe(i.J);if(Y(u,"SID",i.M),Y(u,"RID",c),Y(u,"TYPE","terminate"),Yn(i,u),c=new mt(i,i.j,c),c.M=2,c.A=Kr(qe(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=Rc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Wr(c)}Sc(i)}function Yr(i){i.g&&(Vi(i),i.g.cancel(),i.g=null)}function _c(i){Yr(i),i.v&&(a.clearTimeout(i.v),i.v=null),Zr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Xr(i){if(!ec(i.h)&&!i.m){i.m=!0;var c=i.Ea;Me||g(),ye||(Me(),ye=!0),I.add(c,i),i.D=0}}function Of(i,c){return tc(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Un(d(i.Ea,i,c),Ac(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const T=new mt(this,this.j,i);let S=this.o;if(this.U&&(S?(S=Da(S),Va(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ic(this,T,c),u=qe(this.J),Y(u,"RID",i),Y(u,"CVER",22),this.G&&Y(u,"X-HTTP-Session-Id",this.G),Yn(this,u),S&&(this.R?c="headers="+$n(dc(S))+"&"+c:this.u&&Ci(u,this.u,S)),bi(this.h,T),this.Ra&&Y(u,"TYPE","init"),this.S?(Y(u,"$req",c),Y(u,"SID","null"),T.U=!0,Ti(T,u,null)):Ti(T,u,c),this.I=2}}else this.I==3&&(i?Ec(this,i):this.i.length==0||ec(this.h)||Ec(this))};function Ec(i,c){var u;c?u=c.l:u=i.V++;const f=qe(i.J);Y(f,"SID",i.M),Y(f,"RID",u),Y(f,"AID",i.K),Yn(i,f),i.u&&i.o&&Ci(f,i.u,i.o),u=new mt(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Ic(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),bi(i.h,u),Ti(u,f,c)}function Yn(i,c){i.H&&jr(i.H,function(u,f){Y(c,f,u)}),i.l&&jr({},function(u,f){Y(c,f,u)})}function Ic(i,c,u){u=Math.min(i.i.length,u);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var T=i.i;let $=-1;for(;;){const ue=["count="+u];$==-1?u>0?($=T[0].g,ue.push("ofs="+$)):$=0:ue.push("ofs="+$);let Q=!0;for(let de=0;de<u;de++){var S=T[de].g;const ze=T[de].map;if(S-=$,S<0)$=Math.max(0,T[de].g-100),Q=!1;else try{S="req"+S+"_"||"";try{var D=ze instanceof Map?ze:Object.entries(ze);for(const[zt,_t]of D){let Et=_t;l(_t)&&(Et=yi(_t)),ue.push(S+zt+"="+encodeURIComponent(Et))}}catch(zt){throw ue.push(S+"type="+encodeURIComponent("_badmap")),zt}}catch{f&&f(ze)}}if(Q){D=ue.join("&");break e}}D=void 0}return i=i.i.splice(0,u),c.G=i,D}function vc(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;Me||g(),ye||(Me(),ye=!0),I.add(c,i),i.A=0}}function ki(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Un(d(i.Da,i),Ac(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Tc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Un(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Re(10),Yr(this),Tc(this))};function Vi(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Tc(i){i.g=new mt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=qe(i.na);Y(c,"RID","rpc"),Y(c,"SID",i.M),Y(c,"AID",i.K),Y(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&Y(c,"TO",i.ia),Y(c,"TYPE","xmlhttp"),Yn(i,c),i.u&&i.o&&Ci(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=Kr(qe(c)),u.u=null,u.R=!0,Ja(u,i)}n.Va=function(){this.C!=null&&(this.C=null,Yr(this),ki(this),Re(19))};function Zr(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function wc(i,c){var u=null;if(i.g==c){Zr(i),Vi(i),i.g=null;var f=2}else if(Si(i.h,c))u=c.G,nc(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var T=i.D;f=Hr(),be(f,new Ha(f,u)),Xr(i)}else vc(i);else if(T=c.m,T==3||T==0&&c.X>0||!(f==1&&Of(i,c)||f==2&&ki(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),T){case 1:qt(i,5);break;case 4:qt(i,10);break;case 3:qt(i,6);break;default:qt(i,2)}}}function Ac(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function qt(i,c){if(i.j.info("Error code "+c),c==2){var u=d(i.bb,i),f=i.Ua;const T=!f;f=new pt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||qn(f,"https"),Kr(f),T?Cf(f.toString(),u):Df(f.toString(),u)}else Re(2);i.I=0,i.l&&i.l.pa(c),Sc(i),_c(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function Sc(i){if(i.I=0,i.ja=[],i.l){const c=rc(i.h);(c.length!=0||i.i.length!=0)&&(V(i.ja,c),V(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function bc(i,c,u){var f=u instanceof pt?qe(u):new pt(u);if(f.g!="")c&&(f.g=c+"."+f.g),zn(f,f.u);else{var T=a.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const S=new pt(null);f&&qn(S,f),c&&(S.g=c),T&&zn(S,T),u&&(S.h=u),f=S}return u=i.G,c=i.wa,u&&c&&Y(f,u,c),Y(f,"VER",i.ka),Yn(i,f),f}function Rc(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new te(new Pi({ab:u})):new te(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pc(){}n=Pc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function es(){}es.prototype.g=function(i,c){return new Ne(i,c)};function Ne(i,c){ve.call(this),this.g=new yc(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!y(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new cn(this)}p(Ne,ve),Ne.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Di(this.g)},Ne.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=yi(i),i=u);c.i.push(new vf(c.Ya++,i)),c.I==3&&Xr(c)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Di(this.g),delete this.g,Ne.Z.N.call(this)};function Cc(i){_i.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const u in c){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}p(Cc,_i);function Dc(){Ei.call(this),this.status=1}p(Dc,Ei);function cn(i){this.g=i}p(cn,Pc),cn.prototype.ra=function(){be(this.g,"a")},cn.prototype.qa=function(i){be(this.g,new Cc(i))},cn.prototype.pa=function(i){be(this.g,new Dc)},cn.prototype.oa=function(){be(this.g,"b")},es.prototype.createWebChannel=es.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,dh=function(){return new es},hh=function(){return Hr()},uh=Bt,so={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Gr.NO_ERROR=0,Gr.TIMEOUT=8,Gr.HTTP_ERROR=6,ds=Gr,Ga.COMPLETE="complete",lh=Ga,$a.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",ve.prototype.listen=ve.prototype.J,Zn=$a,te.prototype.listenOnce=te.prototype.K,te.prototype.getLastError=te.prototype.Ha,te.prototype.getLastErrorCode=te.prototype.ya,te.prototype.getStatus=te.prototype.ca,te.prototype.getResponseJson=te.prototype.La,te.prototype.getResponseText=te.prototype.la,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Fa,ch=te}).apply(typeof rs<"u"?rs:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn="12.13.0";function Iy(n){kn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Ro("@firebase/firestore");function ln(){return Zt.logLevel}function N(n,...e){if(Zt.logLevel<=H.DEBUG){const t=e.map(Bo);Zt.debug(`Firestore (${kn}): ${n}`,...t)}}function ut(n,...e){if(Zt.logLevel<=H.ERROR){const t=e.map(Bo);Zt.error(`Firestore (${kn}): ${n}`,...t)}}function en(n,...e){if(Zt.logLevel<=H.WARN){const t=e.map(Bo);Zt.warn(`Firestore (${kn}): ${n}`,...t)}}function Bo(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,fh(n,r,t)}function fh(n,e,t){let r=`FIRESTORE (${kn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ut(r),new Error(r)}function K(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||fh(e,s,r)}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class Ty{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wy{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Pt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Pt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new mh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string",2055,{h:e}),new we(e)}}class Ay{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Sy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ay(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class il{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class by{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){K(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new il(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new il(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ry(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function io(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return $i(s)===$i(o)?q(s,o):$i(s)?1:-1}return q(n.length,e.length)}const Py=55296,Cy=57343;function $i(n){const e=n.charCodeAt(0);return e>=Py&&e<=Cy}function vn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="__name__";class He{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&M(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return He.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof He?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=He.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return q(e.length,t.length)}static compareSegments(e,t){const r=He.isNumericId(e),s=He.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?He.extractNumericId(e).compare(He.extractNumericId(t)):io(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rt.fromString(e.substring(4,e.length-2))}}class J extends He{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new J(t)}static emptyPath(){return new J([])}}const Dy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends He{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return Dy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ol}static keyField(){return new Ee([ol])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new k(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new k(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(J.fromString(e))}static fromName(e){return new x(J.fromString(e).popFirst(5))}static empty(){return new x(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new J(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(n,e,t){if(!t)throw new k(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ky(n,e,t,r){if(e===!0&&r===!0)throw new k(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function al(n){if(!x.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cl(n){if(x.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Oe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new k(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zs(n);throw new k(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n,e){const t={typeString:n};return e&&(t.value=e),t}function Dr(n,e){if(!gh(n))throw new k(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new k(b.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=-62135596800,ul=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ul);return new X(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ll)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ul}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Dr(e,X._jsonSchema))return new X(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ll;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:ce("string",X._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new X(0,0))}static max(){return new U(new X(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=-1;function Vy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new X(t+1,0):new X(t,r));return new Dt(s,x.empty(),e)}function Ny(n){return new Dt(n.readTime,n.key,mr)}class Dt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Dt(U.min(),x.empty(),mr)}static max(){return new Dt(U.max(),x.empty(),mr)}}function Ly(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Oy)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let s=0,o=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&t()},h=>r(h))}),a=!0,o===s&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(s=>s?R.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new R((r,s)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(m=>{a[d]=m,++l,l===o&&r(a)},m=>s(m))}})}static doWhile(e,t){return new R((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function My(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hs.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=-1;function Gs(n){return n==null}function Rs(n){return n===0&&1/n==-1/0}function Fy(n){return typeof n=="number"&&Number.isInteger(n)&&!Rs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="";function Uy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hl(e)),e=By(n.get(t),e);return hl(e)}function By(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case yh:t+="";break;default:t+=o}}return t}function hl(n){return n+yh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function _h(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ss(this.root,e,this.comparator,!0)}}class ss{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??_e.RED,this.left=s??_e.EMPTY,this.right=o??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new _e(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return _e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fl(this.data.getIterator())}getIteratorFrom(e){return new fl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class fl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Le([])}unionWith(e){let t=new he(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Eh("Invalid base64 string: "+o):o}}(e);return new Ie(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new Ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const $y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(n){if(K(!!n,39018),typeof n=="string"){let e=0;const t=$y.exec(n);if(K(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:se(n.seconds),nanos:se(n.nanos)}}function se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vt(n){return typeof n=="string"?Ie.fromBase64String(n):Ie.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="server_timestamp",vh="__type__",Th="__previous_value__",wh="__local_write_time__";function qo(n){return(n?.mapValue?.fields||{})[vh]?.stringValue===Ih}function Ws(n){const e=n.mapValue.fields[Th];return qo(e)?Ws(e):e}function pr(n){const e=kt(n.mapValue.fields[wh].timestampValue);return new X(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,r,s,o,a,l,h,d,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=p}}const oo="(default)";class gr{constructor(e,t){this.projectId=e,this.database=t||oo}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database===oo}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}function qy(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new k(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="__type__",zy="__max__",is={mapValue:{}},Sh="__vector__",Ps="value";function Nt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qo(n)?4:Gy(n)?9007199254740991:Hy(n)?10:11:M(28295,{value:n})}function Xe(n,e){if(n===e)return!0;const t=Nt(n);if(t!==Nt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pr(n).isEqual(pr(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=kt(s.timestampValue),l=kt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return Vt(s.bytesValue).isEqual(Vt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return se(s.geoPointValue.latitude)===se(o.geoPointValue.latitude)&&se(s.geoPointValue.longitude)===se(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return se(s.integerValue)===se(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=se(s.doubleValue),l=se(o.doubleValue);return a===l?Rs(a)===Rs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return vn(n.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(dl(a)!==dl(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Xe(a[h],l[h])))return!1;return!0}(n,e);default:return M(52216,{left:n})}}function yr(n,e){return(n.values||[]).find(t=>Xe(t,e))!==void 0}function Tn(n,e){if(n===e)return 0;const t=Nt(n),r=Nt(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=se(o.integerValue||o.doubleValue),h=se(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return ml(n.timestampValue,e.timestampValue);case 4:return ml(pr(n),pr(e));case 5:return io(n.stringValue,e.stringValue);case 6:return function(o,a){const l=Vt(o),h=Vt(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=q(l[d],h[d]);if(m!==0)return m}return q(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=q(se(o.latitude),se(a.latitude));return l!==0?l:q(se(o.longitude),se(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pl(n.arrayValue,e.arrayValue);case 10:return function(o,a){const l=o.fields||{},h=a.fields||{},d=l[Ps]?.arrayValue,m=h[Ps]?.arrayValue,p=q(d?.values?.length||0,m?.values?.length||0);return p!==0?p:pl(d,m)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===is.mapValue&&a===is.mapValue)return 0;if(o===is.mapValue)return 1;if(a===is.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let p=0;p<h.length&&p<m.length;++p){const w=io(h[p],m[p]);if(w!==0)return w;const P=Tn(l[h[p]],d[m[p]]);if(P!==0)return P}return q(h.length,m.length)}(n.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function ml(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=kt(n),r=kt(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function pl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=Tn(t[s],r[s]);if(o)return o}return q(t.length,r.length)}function wn(n){return ao(n)}function ao(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return x.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=ao(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ao(t.fields[a])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function fs(n){switch(Nt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ws(n);return e?16+fs(e):16;case 5:return 2*n.stringValue.length;case 6:return Vt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+fs(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Mt(r.fields,(o,a)=>{s+=o.length+fs(a)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function gl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function co(n){return!!n&&"integerValue"in n}function zo(n){return!!n&&"arrayValue"in n}function yl(n){return!!n&&"nullValue"in n}function _l(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ms(n){return!!n&&"mapValue"in n}function Hy(n){return(n?.mapValue?.fields||{})[Ah]?.stringValue===Sh}function ir(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Mt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ir(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ir(n.arrayValue.values[t]);return e}return{...n}}function Gy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ms(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ir(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=ir(a):s.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());ms(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ms(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Mt(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Ve(ir(this.value))}}function bh(n){const e=[];return Mt(n.fields,(t,r)=>{const s=new Ee([t]);if(ms(r)){const o=bh(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t,r,s,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ae(e,0,U.min(),U.min(),U.min(),Ve.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,U.min(),U.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,U.min(),U.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.position=e,this.inclusive=t}}function El(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=Tn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Il(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t="asc"){this.field=e,this.dir=t}}function Wy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{}class ae extends Rh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Qy(e,t,r):t==="array-contains"?new Xy(e,r):t==="in"?new Zy(e,r):t==="not-in"?new e_(e,r):t==="array-contains-any"?new t_(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Jy(e,r):new Yy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Tn(t,this.value)):t!==null&&Nt(this.value)===Nt(t)&&this.matchesComparison(Tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class je extends Rh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new je(e,t)}matches(e){return Ph(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ph(n){return n.op==="and"}function Ch(n){return Ky(n)&&Ph(n)}function Ky(n){for(const e of n.filters)if(e instanceof je)return!1;return!0}function lo(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+wn(n.value);if(Ch(n))return n.filters.map(e=>lo(e)).join(",");{const e=n.filters.map(t=>lo(t)).join(",");return`${n.op}(${e})`}}function Dh(n,e){return n instanceof ae?function(r,s){return s instanceof ae&&r.op===s.op&&r.field.isEqual(s.field)&&Xe(r.value,s.value)}(n,e):n instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&Dh(a,s.filters[l]),!0):!1}(n,e):void M(19439)}function kh(n){return n instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${wn(t.value)}`}(n):n instanceof je?function(t){return t.op.toString()+" {"+t.getFilters().map(kh).join(" ,")+"}"}(n):"Filter"}class Qy extends ae{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class Jy extends ae{constructor(e,t){super(e,"in",t),this.keys=Vh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Yy extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Vh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Vh(n,e){return(e.arrayValue?.values||[]).map(t=>x.fromName(t.referenceValue))}class Xy extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zo(t)&&yr(t.arrayValue,this.value)}}class Zy extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yr(this.value.arrayValue,t)}}class e_ extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!yr(this.value.arrayValue,t)}}class t_ extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>yr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t=null,r=[],s=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function vl(n,e=null,t=[],r=[],s=null,o=null,a=null){return new n_(n,e,t,r,s,o,a)}function Ho(n){const e=B(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>lo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Gs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wn(r)).join(",")),e.Te=t}return e.Te}function Go(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Wy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Dh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Il(n.startAt,e.startAt)&&Il(n.endAt,e.endAt)}function uo(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function r_(n,e,t,r,s,o,a,l){return new Ln(n,e,t,r,s,o,a,l)}function Ks(n){return new Ln(n)}function Tl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function s_(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Nh(n){return n.collectionGroup!==null}function or(n){const e=B(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new he(Ee.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new _r(o,r))}),t.has(Ee.keyField().canonicalString())||e.Ie.push(new _r(Ee.keyField(),r))}return e.Ie}function Ke(n){const e=B(n);return e.Ee||(e.Ee=i_(e,or(n))),e.Ee}function i_(n,e){if(n.limitType==="F")return vl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new _r(s.field,o)});const t=n.endAt?new Cs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Cs(n.startAt.position,n.startAt.inclusive):null;return vl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ho(n,e){const t=n.filters.concat([e]);return new Ln(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function o_(n,e){const t=n.explicitOrderBy.concat([e]);return new Ln(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function fo(n,e,t){return new Ln(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qs(n,e){return Go(Ke(n),Ke(e))&&n.limitType===e.limitType}function Lh(n){return`${Ho(Ke(n))}|lt:${n.limitType}`}function un(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>kh(s)).join(", ")}]`),Gs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>wn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>wn(s)).join(",")),`Target(${r})`}(Ke(n))}; limitType=${n.limitType})`}function Js(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of or(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,h){const d=El(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,or(r),s)||r.endAt&&!function(a,l,h){const d=El(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,or(r),s))}(n,e)}function a_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Oh(n){return(e,t)=>{let r=!1;for(const s of or(n)){const o=c_(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function c_(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Tn(h,d):M(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mt(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return _h(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new Z(x.comparator);function ht(){return l_}const xh=new Z(x.comparator);function er(...n){let e=xh;for(const t of n)e=e.insert(t.key,t);return e}function Mh(n){let e=xh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Wt(){return ar()}function Fh(){return ar()}function ar(){return new nn(n=>n.toString(),(n,e)=>n.isEqual(e))}const u_=new Z(x.comparator),h_=new he(x.comparator);function z(...n){let e=h_;for(const t of n)e=e.add(t);return e}const d_=new he(q);function f_(){return d_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function Uh(n){return{integerValue:""+n}}function m_(n,e){return Fy(e)?Uh(e):Wo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this._=void 0}}function p_(n,e,t){return n instanceof Ds?function(s,o){const a={fields:{[vh]:{stringValue:Ih},[wh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&qo(o)&&(o=Ws(o)),o&&(a.fields[Th]=o),{mapValue:a}}(t,e):n instanceof Er?$h(n,e):n instanceof Ir?jh(n,e):function(s,o){const a=Bh(s,o),l=wl(a)+wl(s.Ae);return co(a)&&co(s.Ae)?Uh(l):Wo(s.serializer,l)}(n,e)}function g_(n,e,t){return n instanceof Er?$h(n,e):n instanceof Ir?jh(n,e):t}function Bh(n,e){return n instanceof ks?function(r){return co(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Ds extends Ys{}class Er extends Ys{constructor(e){super(),this.elements=e}}function $h(n,e){const t=qh(e);for(const r of n.elements)t.some(s=>Xe(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ir extends Ys{constructor(e){super(),this.elements=e}}function jh(n,e){let t=qh(e);for(const r of n.elements)t=t.filter(s=>!Xe(s,r));return{arrayValue:{values:t}}}class ks extends Ys{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wl(n){return se(n.integerValue||n.doubleValue)}function qh(n){return zo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function y_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Er&&s instanceof Er||r instanceof Ir&&s instanceof Ir?vn(r.elements,s.elements,Xe):r instanceof ks&&s instanceof ks?Xe(r.Ae,s.Ae):r instanceof Ds&&s instanceof Ds}(n.transform,e.transform)}class __{constructor(e,t){this.version=e,this.transformResults=t}}class Pe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ps(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xs{}function zh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Zs(n.key,Pe.none()):new kr(n.key,n.data,Pe.none());{const t=n.data,r=Ve.empty();let s=new he(Ee.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ft(n.key,r,new Le(s.toArray()),Pe.none())}}function E_(n,e,t){n instanceof kr?function(s,o,a){const l=s.value.clone(),h=Sl(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ft?function(s,o,a){if(!ps(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Sl(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Hh(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function cr(n,e,t,r){return n instanceof kr?function(o,a,l,h){if(!ps(o.precondition,a))return l;const d=o.value.clone(),m=bl(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ft?function(o,a,l,h){if(!ps(o.precondition,a))return l;const d=bl(o.fieldTransforms,h,a),m=a.data;return m.setAll(Hh(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(o,a,l){return ps(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function I_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Bh(r.transform,s||null);o!=null&&(t===null&&(t=Ve.empty()),t.set(r.field,o))}return t||null}function Al(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vn(r,s,(o,a)=>y_(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class kr extends Xs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ft extends Xs{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Hh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Sl(n,e,t){const r=new Map;K(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,l=e.data.field(o.field);r.set(o.field,g_(a,l,t[s]))}return r}function bl(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,p_(o,a,e))}return r}class Zs extends Xs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v_ extends Xs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&E_(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fh();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(s.key)?null:l;const h=zh(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&vn(this.mutations,e.mutations,(t,r)=>Al(t,r))&&vn(this.baseMutations,e.baseMutations,(t,r)=>Al(t,r))}}class Ko{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){K(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return u_}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ko(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,G;function S_(n){switch(n){case b.OK:return M(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Gh(n){if(n===void 0)return ut("GRPC error has no .code"),b.UNKNOWN;switch(n){case ie.OK:return b.OK;case ie.CANCELLED:return b.CANCELLED;case ie.UNKNOWN:return b.UNKNOWN;case ie.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ie.INTERNAL:return b.INTERNAL;case ie.UNAVAILABLE:return b.UNAVAILABLE;case ie.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ie.NOT_FOUND:return b.NOT_FOUND;case ie.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ie.ABORTED:return b.ABORTED;case ie.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ie.DATA_LOSS:return b.DATA_LOSS;default:return M(39323,{code:n})}}(G=ie||(ie={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new Rt([4294967295,4294967295],0);function Rl(n){const e=b_().encode(n),t=new ah;return t.update(e),new Uint8Array(t.digest())}function Pl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Rt([t,r],0),new Rt([s,o],0)]}class Qo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new tr(`Invalid padding: ${t}`);if(r<0)throw new tr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new tr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new tr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Rt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Rt.fromNumber(r)));return s.compare(R_)===1&&(s=new Rt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Rl(e),[r,s]=Pl(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Qo(o,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Rl(e),[r,s]=Pl(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Nr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Vr(U.min(),s,new Z(q),ht(),z())}}class Nr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Nr(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Wh{constructor(e,t){this.targetId=e,this.Ce=t}}class Kh{constructor(e,t,r=Ie.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Cl{constructor(){this.ve=0,this.Fe=Dl(),this.Me=Ie.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),r=z();return this.Fe.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}}),new Nr(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Dl()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class P_{constructor(e){this.Ge=e,this.ze=new Map,this.je=ht(),this.Je=os(),this.He=os(),this.Ze=new Z(q)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(uo(o))if(r===0){const a=new x(o.path);this.et(t,a,Ae.newNoDocument(a,U.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),h=l?this.ct(l,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,l;try{a=Vt(r).toUint8Array()}catch(h){if(h instanceof Eh)return en("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Qo(a,s,o)}catch(h){return en(h instanceof tr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.et(t,o,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&uo(l.target)){const h=new x(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Ae.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.Ke())}});let r=z();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const s=new Vr(e,t,this.Ze,this.je,r);return this.je=ht(),this.Je=os(),this.He=os(),this.Ze=new Z(q),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Cl,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new he(q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new he(q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function os(){return new Z(x.comparator)}function Dl(){return new Z(x.comparator)}const C_={asc:"ASCENDING",desc:"DESCENDING"},D_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},k_={and:"AND",or:"OR"};class V_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mo(n,e){return n.useProto3Json||Gs(e)?e:{value:e}}function Vs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function N_(n,e){return Vs(n,e.toTimestamp())}function Qe(n){return K(!!n,49232),U.fromTimestamp(function(t){const r=kt(t);return new X(r.seconds,r.nanos)}(n))}function Jo(n,e){return po(n,e).canonicalString()}function po(n,e){const t=function(s){return new J(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Jh(n){const e=J.fromString(n);return K(td(e),10190,{key:e.toString()}),e}function go(n,e){return Jo(n.databaseId,e.path)}function ji(n,e){const t=Jh(e);if(t.get(1)!==n.databaseId.projectId)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(Xh(t))}function Yh(n,e){return Jo(n.databaseId,e)}function L_(n){const e=Jh(n);return e.length===4?J.emptyPath():Xh(e)}function yo(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xh(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function kl(n,e,t){return{name:go(n,e),fields:t.value.mapValue.fields}}function O_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(K(m===void 0||typeof m=="string",58123),Ie.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ie.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const m=d.code===void 0?b.UNKNOWN:Gh(d.code);return new k(m,d.message||"")}(a);t=new Kh(r,s,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ji(n,r.document.name),o=Qe(r.document.updateTime),a=r.document.createTime?Qe(r.document.createTime):U.min(),l=new Ve({mapValue:{fields:r.document.fields}}),h=Ae.newFoundDocument(s,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];t=new gs(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ji(n,r.document),o=r.readTime?Qe(r.readTime):U.min(),a=Ae.newNoDocument(s,o),l=r.removedTargetIds||[];t=new gs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ji(n,r.document),o=r.removedTargetIds||[];t=new gs([],o,s,null)}else{if(!("filter"in e))return M(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new A_(s,o),l=r.targetId;t=new Wh(l,a)}}return t}function x_(n,e){let t;if(e instanceof kr)t={update:kl(n,e.key,e.value)};else if(e instanceof Zs)t={delete:go(n,e.key)};else if(e instanceof Ft)t={update:kl(n,e.key,e.data),updateMask:H_(e.fieldMask)};else{if(!(e instanceof v_))return M(16599,{dt:e.type});t={verify:go(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof Ds)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ks)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw M(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:N_(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,e.precondition)),t}function M_(n,e){return n&&n.length>0?(K(e!==void 0,14353),n.map(t=>function(s,o){let a=s.updateTime?Qe(s.updateTime):Qe(o);return a.isEqual(U.min())&&(a=Qe(o)),new __(a,s.transformResults||[])}(t,e))):[]}function F_(n,e){return{documents:[Yh(n,e.path)]}}function U_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Yh(n,s);const o=function(d){if(d.length!==0)return ed(je.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:hn(w.field),direction:j_(w.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=mo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function B_(n){let e=L_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){K(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(p){const w=Zh(p);return w instanceof je&&Ch(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(w=>function(V){return new _r(dn(V.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(p){let w;return w=typeof p=="object"?p.value:p,Gs(w)?null:w}(t.limit));let h=null;t.startAt&&(h=function(p){const w=!!p.before,P=p.values||[];return new Cs(P,w)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const w=!p.before,P=p.values||[];return new Cs(P,w)}(t.endAt)),r_(e,s,a,o,l,"F",h,d)}function $_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=dn(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=dn(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=dn(t.unaryFilter.field);return ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=dn(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(t){return ae.create(dn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return je.create(t.compositeFilter.filters.map(r=>Zh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op))}(n):M(30097,{filter:n})}function j_(n){return C_[n]}function q_(n){return D_[n]}function z_(n){return k_[n]}function hn(n){return{fieldPath:n.canonicalString()}}function dn(n){return Ee.fromServerFormat(n.fieldPath)}function ed(n){return n instanceof ae?function(t){if(t.op==="=="){if(_l(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NAN"}};if(yl(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_l(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NAN"}};if(yl(t.value))return{unaryFilter:{field:hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hn(t.field),op:q_(t.op),value:t.value}}}(n):n instanceof je?function(t){const r=t.getFilters().map(s=>ed(s));return r.length===1?r[0]:{compositeFilter:{op:z_(t.op),filters:r}}}(n):M(54877,{filter:n})}function H_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function td(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function nd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,r,s,o=U.min(),a=U.min(),l=Ie.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new st(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.yt=e}}function W_(n){const e=B_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.bn=new Q_}addToCollectionParentIndex(e,t){return this.bn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Dt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Q_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new he(J.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new he(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rd=41943040;class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(rd,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Lt(0)}static ar(){return new Lt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="LruGarbageCollector",J_=1048576;function Ll([n,e],[t,r]){const s=q(n,t);return s===0?q(e,r):s}class Y_{constructor(e){this.Pr=e,this.buffer=new he(Ll),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ll(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class X_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(Nl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nn(t)?N(Nl,"Ignoring IndexedDB error during garbage collection: ",t):await Vn(t)}await this.Ar(3e5)})}}class Z_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Hs.ce);const r=new Y_(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Vl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vl):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(o=p,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),ln()<=H.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${p} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:p})))}}function eE(n,e){return new Z_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(){this.changes=new nn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&cr(r.mutation,s,Le.empty(),X.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const s=Wt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=er();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Wt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let o=ht();const a=ar(),l=function(){return ar()}();return t.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Ft)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),cr(m.mutation,d,m.mutation.getFieldMask(),X.now())):a.set(d.key,Le.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>l.set(d,new nE(m,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=ar();let s=new Z((a,l)=>a-l),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let m=r.get(h)||Le.empty();m=l.applyToLocalView(d,m),r.set(h,m);const p=(s.get(l.batchId)||z()).add(h);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,p=Fh();m.forEach(w=>{if(!o.has(w)){const P=zh(t.get(w),r.get(w));P!==null&&p.set(w,P),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return s_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):R.resolve(Wt());let l=mr,h=o;return a.next(d=>R.forEach(d,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(m)?R.resolve():this.remoteDocumentCache.getEntry(e,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,z())).next(m=>({batchId:l,changes:Mh(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let s=er();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=er();return this.indexManager.getCollectionParents(e,o).next(l=>R.forEach(l,h=>{const d=function(p,w){return new Ln(w,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((p,w)=>{a=a.insert(p,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ae.newInvalidDocument(m)))});let l=er();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&cr(m.mutation,d,Le.empty(),X.now()),Js(t,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Qe(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:W_(s.bundledQuery),readTime:Qe(s.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.overlays=new Z(x.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Wt();return R.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.St(e,t,o)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=Wt(),o=t.length+1,a=new x(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new Z((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Wt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Wt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return R.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new w_(t,r));let o=this.Lr.get(t);o===void 0&&(o=z(),this.Lr.set(t,o)),this.Lr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.sessionToken=Ie.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.kr=new he(me.Kr),this.qr=new he(me.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new me(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new me(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new x(new J([])),r=new me(t,e),s=new me(t,e+1),o=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new x(new J([])),r=new me(t,e),s=new me(t,e+1);let o=z();return this.qr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new me(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return x.comparator(e.key,t.key)||q(e.Jr,t.Jr)}static Ur(e,t){return q(e.Jr,t.Jr)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new he(me.Kr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new T_(o,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new me(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?jo:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new me(t,0),s=new me(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,s],a=>{const l=this.Zr(a.Jr);o.push(l)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he(q);return t.forEach(s=>{const o=new me(s,0),a=new me(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],l=>{r=r.add(l.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new me(new x(o),0);let l=new he(q);return this.Hr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Jr)),!0)},a),R.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){K(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(t.mutations,s=>{const o=new me(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new me(t,0),s=this.Hr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.ti=e,this.docs=function(){return new Z(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=ht();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ae.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=ht();const a=t.path,l=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ly(Ny(m),r)<=0||(s.has(m.key)||Js(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(e,t,r,s){M(9500)}ni(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new lE(this)}getSize(e){return R.resolve(this.size)}}class lE extends tE{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.persistence=e,this.ri=new nn(t=>Ho(t),Go),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new Yo,this.targetCount=0,this.oi=Lt._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Lt(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),R.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this._i={},this.overlays={},this.ai=new Hs(0),this.ui=!1,this.ui=!0,this.ci=new oE,this.referenceDelegate=e(this),this.li=new uE(this),this.indexManager=new K_,this.remoteDocumentCache=function(s){return new cE(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new G_(t),this.Pi=new sE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new aE(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const s=new hE(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(o=>this.referenceDelegate.Ii(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(e,t){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class hE extends xy{constructor(e){super(),this.currentSequenceNumber=e}}class Xo{constructor(e){this.persistence=e,this.Ri=new Yo,this.Ai=null}static Vi(e){return new Xo(e)}get di(){if(this.Ai)return this.Ai;throw M(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const s=x.fromPath(r);return this.mi(e,s).next(o=>{o||t.removeEntry(s,U.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ns{constructor(e,t){this.persistence=e,this.fi=new nn(r=>Uy(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=eE(this,t)}static Vi(e,t){return new Ns(e,t)}Ti(){}Ii(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return R.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(o=>o?R.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(r++,o.removeEntry(a,U.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fs(e.data.value)),t}wr(e,t,r){return R.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=z(),s=z();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Zo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Zf()?8:My(Se())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.gs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new dE;return this.ys(e,t,a).next(l=>{if(o.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>o.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(ln()<=H.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(ln()<=H.DEBUG&&N("QueryEngine","Query:",un(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ln()<=H.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ke(t))):R.resolve())}gs(e,t){if(Tl(t))return R.resolve(null);let r=Ke(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=fo(t,null,"F"),r=Ke(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=z(...o);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.Ss(t,l);return this.bs(t,d,a,h.readTime)?this.gs(e,fo(t,null,"F")):this.Ds(e,d,t,h)}))})))}ps(e,t,r,s){return Tl(t)||s.isEqual(U.min())?R.resolve(null):this.fs.getDocuments(e,r).next(o=>{const a=this.Ss(t,o);return this.bs(t,a,r,s)?R.resolve(null):(ln()<=H.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),un(t)),this.Ds(e,a,t,Vy(s,mr)).next(l=>l))})}Ss(e,t){let r=new he(Oh(e));return t.forEach((s,o)=>{Js(e,o)&&(r=r.add(o))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,t,r){return ln()<=H.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",un(t)),this.fs.getDocumentsMatchingQuery(e,t,Dt.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="LocalStore",mE=3e8;class pE{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Z(q),this.Fs=new nn(o=>Ho(o),Go),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rE(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function gE(n,e,t,r){return new pE(n,e,t,r)}async function id(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function yE(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,h,d,m){const p=d.batch,w=p.keys();let P=R.resolve();return w.forEach(V=>{P=P.next(()=>m.getEntry(h,V)).next(L=>{const C=d.docVersions.get(V);K(C!==null,48541),L.version.compareTo(C)<0&&(p.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),m.addEntry(L)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(h,p))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=z();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function od(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function _E(n,e){const t=B(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((m,p)=>{const w=s.get(p);if(!w)return;l.push(t.li.removeMatchingKeys(o,m.removedDocuments,p).next(()=>t.li.addMatchingKeys(o,m.addedDocuments,p)));let P=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?P=P.withResumeToken(Ie.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(m.resumeToken,r)),s=s.insert(p,P),function(L,C,j){return L.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=mE?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(w,P,m)&&l.push(t.li.updateTargetData(o,P))});let h=ht(),d=z();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(EE(o,a,e.documentUpdates).next(m=>{h=m.Bs,d=m.Ls})),!r.isEqual(U.min())){const m=t.li.getLastRemoteSnapshotVersion(o).next(p=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(m)}return R.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.vs=s,o))}function EE(n,e,t){let r=z(),s=z();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=ht();return t.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):N(ea,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Bs:a,Ls:s}})}function IE(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=jo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vE(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(o=>o?(s=o,R.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new st(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function _o(n,e,t){const r=B(n),s=r.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Nn(a))throw a;N(ea,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ol(n,e,t){const r=B(n);let s=U.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const p=B(h),w=p.Fs.get(m);return w!==void 0?R.resolve(p.vs.get(w)):p.li.getTargetData(d,m)}(r,a,Ke(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?o:z())).next(l=>(TE(r,a_(e),l),{documents:l,ks:o})))}function TE(n,e,t){let r=n.Ms.get(e)||U.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ms.set(e,r)}class xl{constructor(){this.activeTargetIds=f_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wE{constructor(){this.vo=new xl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new xl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="ConnectivityMonitor";class Fl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(Ml,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){N(Ml,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as=null;function Eo(){return as===null?as=function(){return 268435456+Math.round(2147483648*Math.random())}():as++,"0x"+as.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="RestConnection",SE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class bE{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===oo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,o){const a=Eo(),l=this.Qo(e,t.toUriEncodedString());N(qi,`Sending RPC '${e}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(l),m=br(d);return this.zo(e,l,h,r,m).then(p=>(N(qi,`Received RPC '${e}' ${a}: `,p),p),p=>{throw en(qi,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,t,r,s,o,a){return this.Wo(e,t,r,s,o)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}Qo(e,t){const r=SE[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection",Xn=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class gn extends bE{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!gn.c_){const e=hh();Xn(e,uh.STAT_EVENT,t=>{t.stat===so.PROXY?N(Te,"STAT_EVENT: detected buffering proxy"):t.stat===so.NOPROXY&&N(Te,"STAT_EVENT: detected no buffering proxy")}),gn.c_=!0}}zo(e,t,r,s,o){const a=Eo();return new Promise((l,h)=>{const d=new ch;d.setWithCredentials(!0),d.listenOnce(lh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ds.NO_ERROR:const p=d.getResponseJson();N(Te,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case ds.TIMEOUT:N(Te,`RPC '${e}' ${a} timed out`),h(new k(b.DEADLINE_EXCEEDED,"Request time out"));break;case ds.HTTP_ERROR:const w=d.getStatus();if(N(Te,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const V=P?.error;if(V&&V.status&&V.message){const L=function(j){const W=j.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(W)>=0?W:b.UNKNOWN}(V.status);h(new k(L,V.message))}else h(new k(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new k(b.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(Te,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);N(Te,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)})}T_(e,t,r){const s=Eo(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=o.join("");N(Te,`Creating RPC '${e}' stream ${s}: ${d}`,l);const m=a.createWebChannel(d,l);this.I_(m);let p=!1,w=!1;const P=new RE({Jo:V=>{w?N(Te,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(p||(N(Te,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),N(Te,`RPC '${e}' stream ${s} sending:`,V),m.send(V))},Ho:()=>m.close()});return Xn(m,Zn.EventType.OPEN,()=>{w||(N(Te,`RPC '${e}' stream ${s} transport opened.`),P.i_())}),Xn(m,Zn.EventType.CLOSE,()=>{w||(w=!0,N(Te,`RPC '${e}' stream ${s} transport closed`),P.o_(),this.E_(m))}),Xn(m,Zn.EventType.ERROR,V=>{w||(w=!0,en(Te,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),P.o_(new k(b.UNAVAILABLE,"The operation could not be completed")))}),Xn(m,Zn.EventType.MESSAGE,V=>{if(!w){const L=V.data[0];K(!!L,16349);const C=L,j=C?.error||C[0]?.error;if(j){N(Te,`RPC '${e}' stream ${s} received error:`,j);const W=j.status;let ee=function(ye){const I=ie[ye];if(I!==void 0)return Gh(I)}(W),Ce=j.message;W==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&en(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ee===void 0&&(ee=b.INTERNAL,Ce="Unknown error status: "+W+" with message "+j.message),w=!0,P.o_(new k(ee,Ce)),m.close()}else N(Te,`RPC '${e}' stream ${s} received:`,L),P.__(L)}}),gn.u_(),setTimeout(()=>{P.s_()},0),P}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return dh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(n){return new gn(n)}function zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){return new V_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.c_=!1;class ad{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="PersistentStream";class cd{constructor(e,t,r,s,o,a,l,h){this.Ci=e,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ad(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new k(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return N(Ul,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(N(Ul,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CE extends cd{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=O_(this.serializer,e),r=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Qe(a.readTime):U.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=yo(this.serializer),t.addTarget=function(o,a){let l;const h=a.target;if(l=uo(h)?{documents:F_(o,h)}:{query:U_(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Qh(o,a.resumeToken);const d=mo(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=Vs(o,a.snapshotVersion.toTimestamp());const d=mo(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=$_(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=yo(this.serializer),t.removeTarget=e,this.K_(t)}}class DE extends cd{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return K(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){K(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=M_(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=yo(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>x_(this.serializer,r))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{}class VE extends kE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,po(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(b.UNKNOWN,o.toString())})}jo(e,t,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,po(t,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(b.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function NE(n,e,t,r){return new VE(n,e,t,r)}class LE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ut(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="RemoteStore";class OE{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Lt(1e3),this.Va=new Lt(1001),this.da=new Set,this.ma=[],this.fa=o,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{rn(this)&&(N(Ze,"Restarting streams for network reachability change."),await async function(h){const d=B(h);d.da.add(4),await Lr(d),d.ga.set("Unknown"),d.da.delete(4),await ti(d)}(this))})}),this.ga=new LE(r,s)}}async function ti(n){if(rn(n))for(const e of n.ma)await e(!0)}async function Lr(n){for(const e of n.ma)await e(!1)}function Io(n,e){return n.Ea.get(e)||void 0}function ld(n,e){const t=B(n),r=Io(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=function(l,h){const d=Io(l,h);d!==void 0&&l.Ra.delete(d);const m=function(w,P){return P%2!=0?w.Va.next():w.Aa.next()}(l,h);return l.Ea.set(h,m),l.Ra.set(m,h),m}(t,e.targetId);N(Ze,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const o=new st(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,o),sa(t)?ra(t):On(t).O_()&&na(t,o)}function ta(n,e){const t=B(n),r=On(t),s=Io(t,e);N(Ze,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&ud(t,s),t.Ia.size===0&&(r.O_()?r.L_():rn(t)&&t.ga.set("Unknown"))}function na(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void N(Ze,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}On(n).Z_(e)}function ud(n,e){n.pa.$e(e),On(n).X_(e)}function ra(n){n.pa=new P_({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):z()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),On(n).start(),n.ga.ua()}function sa(n){return rn(n)&&!On(n).x_()&&n.Ia.size>0}function rn(n){return B(n).da.size===0}function hd(n){n.pa=void 0}async function xE(n){n.ga.set("Online")}async function ME(n){n.Ia.forEach((e,t)=>{na(n,e)})}async function FE(n,e){hd(n),sa(n)?(n.ga.ha(e),ra(n)):n.ga.set("Unknown")}async function UE(n,e,t){if(n.ga.set("Online"),e instanceof Kh&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds){if(s.Ia.has(l)){const h=s.Ra.get(l);h!==void 0&&(await s.remoteSyncer.rejectListen(h,a),s.Ea.delete(h),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(n,e)}catch(r){N(Ze,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ls(n,r)}else if(e instanceof gs?n.pa.Xe(e):e instanceof Wh?n.pa.st(e):n.pa.tt(e),!t.isEqual(U.min()))try{const r=await od(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.pa.Tt(a);l.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const p=o.Ia.get(m);p&&o.Ia.set(m,p.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,m)=>{const p=o.Ia.get(d);if(!p)return;o.Ia.set(d,p.withResumeToken(Ie.EMPTY_BYTE_STRING,p.snapshotVersion)),ud(o,d);const w=new st(p.target,d,m,p.sequenceNumber);na(o,w)});const h=function(m,p){const w=new Map;p.targetChanges.forEach((V,L)=>{const C=m.Ra.get(L);C!==void 0&&w.set(C,V)});let P=new Z(q);return p.targetMismatches.forEach((V,L)=>{const C=m.Ra.get(V);C!==void 0&&(P=P.insert(C,L))}),new Vr(p.snapshotVersion,w,P,p.documentUpdates,p.resolvedLimboDocuments)}(o,l);return o.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){N(Ze,"Failed to raise snapshot:",r),await Ls(n,r)}}async function Ls(n,e,t){if(!Nn(e))throw e;n.da.add(1),await Lr(n),n.ga.set("Offline"),t||(t=()=>od(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(Ze,"Retrying IndexedDB access"),await t(),n.da.delete(1),await ti(n)})}function dd(n,e){return e().catch(t=>Ls(n,t,e))}async function ni(n){const e=B(n),t=Ot(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:jo;for(;BE(e);)try{const s=await IE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,$E(e,s)}catch(s){await Ls(e,s)}fd(e)&&md(e)}function BE(n){return rn(n)&&n.Ta.length<10}function $E(n,e){n.Ta.push(e);const t=Ot(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function fd(n){return rn(n)&&!Ot(n).x_()&&n.Ta.length>0}function md(n){Ot(n).start()}async function jE(n){Ot(n).ra()}async function qE(n){const e=Ot(n);for(const t of n.Ta)e.ea(t.mutations)}async function zE(n,e,t){const r=n.Ta.shift(),s=Ko.from(r,e,t);await dd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ni(n)}async function HE(n,e){e&&Ot(n).Y_&&await async function(r,s){if(function(a){return S_(a)&&a!==b.ABORTED}(s.code)){const o=r.Ta.shift();Ot(r).B_(),await dd(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ni(r)}}(n,e),fd(n)&&md(n)}async function Bl(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),N(Ze,"RemoteStore received new credentials");const r=rn(t);t.da.add(3),await Lr(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await ti(t)}async function GE(n,e){const t=B(n);e?(t.da.delete(2),await ti(t)):e||(t.da.add(2),await Lr(t),t.ga.set("Unknown"))}function On(n){return n.ya||(n.ya=function(t,r,s){const o=B(t);return o.sa(),new CE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:xE.bind(null,n),Yo:ME.bind(null,n),t_:FE.bind(null,n),H_:UE.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),sa(n)?ra(n):n.ga.set("Unknown")):(await n.ya.stop(),hd(n))})),n.ya}function Ot(n){return n.wa||(n.wa=function(t,r,s){const o=B(t);return o.sa(),new DE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:jE.bind(null,n),t_:HE.bind(null,n),ta:qE.bind(null,n),na:zE.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await ni(n)):(await n.wa.stop(),n.Ta.length>0&&(N(Ze,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,l=new ia(e,t,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oa(n,e){if(ut("AsyncQueue",`${e}: ${n}`),Nn(n))return new k(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{static emptySet(e){return new yn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=er(),this.sortedSet=new Z(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new yn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.Sa=new Z(x.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):M(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,r)=>{e.push(r)}),e}}class An{constructor(e,t,r,s,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new An(e,t,yn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class KE{constructor(){this.queries=jl(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=B(t),o=s.queries;s.queries=jl(),o.forEach((a,l)=>{for(const h of l.va)h.onError(r)})})(this,new k(b.ABORTED,"Firestore shutting down"))}}function jl(){return new nn(n=>Lh(n),Qs)}async function pd(n,e){const t=B(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.Fa()&&e.Ma()&&(r=2):(o=new WE,r=e.Ma()?0:1);try{switch(r){case 0:o.Ca=await t.onListen(s,!0);break;case 1:o.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=oa(a,`Initialization of query '${un(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,o),o.va.push(e),e.Oa(t.onlineState),o.Ca&&e.Na(o.Ca)&&aa(t)}async function gd(n,e){const t=B(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.va.indexOf(e);a>=0&&(o.va.splice(a,1),o.va.length===0?s=e.Ma()?0:1:!o.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function QE(n,e){const t=B(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const l of a.va)l.Na(s)&&(r=!0);a.Ca=s}}r&&aa(t)}function JE(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const o of s.va)o.onError(t);r.queries.delete(e)}function aa(n){n.xa.forEach(e=>{e.next()})}var vo,ql;(ql=vo||(vo={})).Ba="default",ql.Cache="cache";class yd{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new An(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=An.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==vo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.key=e}}class Ed{constructor(e){this.key=e}}class YE{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=z(),this.mutatedKeys=z(),this.iu=Oh(e),this.su=new yn(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new $l,s=t?t.su:this.su;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const w=s.get(m),P=Js(this.query,p)?p:null,V=!!w&&this.mutatedKeys.has(w.key),L=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let C=!1;w&&P?w.data.isEqual(P.data)?V!==L&&(r.track({type:3,doc:P}),C=!0):this.uu(w,P)||(r.track({type:2,doc:P}),C=!0,(h&&this.iu(P,h)>0||d&&this.iu(P,d)<0)&&(l=!0)):!w&&P?(r.track({type:0,doc:P}),C=!0):w&&!P&&(r.track({type:1,doc:w}),C=!0,(h||d)&&(l=!0)),C&&(P?(a=a.add(P),o=L?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{su:a,au:r,bs:l,mutatedKeys:o}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((m,p)=>function(P,V){const L=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:C})}};return L(P)-L(V)}(m.type,p.type)||this.iu(m.doc,p.doc)),this.cu(r),s=s??!1;const l=t&&!s?this.lu():[],h=this.ru.size===0&&this.current&&!s?1:0,d=h!==this.nu;return this.nu=h,a.length!==0||d?{snapshot:new An(this.query,e.su,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new $l,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=z(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const t=[];return e.forEach(r=>{this.ru.has(r)||t.push(new Ed(r))}),this.ru.forEach(r=>{e.has(r)||t.push(new _d(r))}),t}Tu(e){this.tu=e.ks,this.ru=z();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return An.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ca="SyncEngine";class XE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ZE{constructor(e){this.key=e,this.Eu=!1}}class eI{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new nn(l=>Lh(l),Qs),this.Vu=new Map,this.du=new Set,this.mu=new Z(x.comparator),this.fu=new Map,this.gu=new Yo,this.pu={},this.yu=new Map,this.wu=Lt.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function tI(n,e,t=!0){const r=Sd(n);let s;const o=r.Au.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Iu()):s=await Id(r,e,t,!0),s}async function nI(n,e){const t=Sd(n);await Id(t,e,!0,!1)}async function Id(n,e,t,r){const s=await vE(n.localStore,Ke(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await rI(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&ld(n.remoteStore,s),l}async function rI(n,e,t,r,s){n.bu=(p,w,P)=>async function(L,C,j,W){let ee=C.view._u(j);ee.bs&&(ee=await Ol(L.localStore,C.query,!1).then(({documents:I})=>C.view._u(I,ee)));const Ce=W&&W.targetChanges.get(C.targetId),Me=W&&W.targetMismatches.get(C.targetId)!=null,ye=C.view.applyChanges(ee,L.isPrimaryClient,Ce,Me);return Hl(L,C.targetId,ye.hu),ye.snapshot}(n,p,w,P);const o=await Ol(n.localStore,e,!0),a=new YE(e,o.ks),l=a._u(o.documents),h=Nr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);Hl(n,t,d.hu);const m=new XE(e,t,a);return n.Au.set(e,m),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),d.snapshot}async function sI(n,e,t){const r=B(n),s=r.Au.get(e),o=r.Vu.get(s.targetId);if(o.length>1)return r.Vu.set(s.targetId,o.filter(a=>!Qs(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _o(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ta(r.remoteStore,s.targetId),To(r,s.targetId)}).catch(Vn)):(To(r,s.targetId),await _o(r.localStore,s.targetId,!0))}async function iI(n,e){const t=B(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ta(t.remoteStore,r.targetId))}async function oI(n,e,t){const r=fI(n);try{const s=await function(a,l){const h=B(a),d=X.now(),m=l.reduce((P,V)=>P.add(V.key),z());let p,w;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let V=ht(),L=z();return h.xs.getEntries(P,m).next(C=>{V=C,V.forEach((j,W)=>{W.isValidDocument()||(L=L.add(j))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,V)).next(C=>{p=C;const j=[];for(const W of l){const ee=I_(W,p.get(W.key).overlayedDocument);ee!=null&&j.push(new Ft(W.key,ee,bh(ee.value.mapValue),Pe.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,j,l)}).next(C=>{w=C;const j=C.applyToLocalDocumentSet(p,L);return h.documentOverlayCache.saveOverlays(P,C.batchId,j)})}).then(()=>({batchId:w.batchId,changes:Mh(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let d=a.pu[a.currentUser.toKey()];d||(d=new Z(q)),d=d.insert(l,h),a.pu[a.currentUser.toKey()]=d}(r,s.batchId,t),await Or(r,s.changes),await ni(r.remoteStore)}catch(s){const o=oa(s,"Failed to persist write");t.reject(o)}}async function vd(n,e){const t=B(n);try{const r=await _E(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.fu.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?K(a.Eu,14607):s.removedDocuments.size>0&&(K(a.Eu,42227),a.Eu=!1))}),await Or(t,r,e)}catch(r){await Vn(r)}}function zl(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach((o,a)=>{const l=a.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=B(a);h.onlineState=l;let d=!1;h.queries.forEach((m,p)=>{for(const w of p.va)w.Oa(l)&&(d=!0)}),d&&aa(h)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aI(n,e,t){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),o=s&&s.key;if(o){let a=new Z(x.comparator);a=a.insert(o,Ae.newNoDocument(o,U.min()));const l=z().add(o),h=new Vr(U.min(),new Map,new Z(q),a,l);await vd(r,h),r.mu=r.mu.remove(o),r.fu.delete(e),la(r)}else await _o(r.localStore,e,!1).then(()=>To(r,e,t)).catch(Vn)}async function cI(n,e){const t=B(n),r=e.batch.batchId;try{const s=await yE(t.localStore,e);wd(t,r,null),Td(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Or(t,s)}catch(s){await Vn(s)}}async function lI(n,e,t){const r=B(n);try{const s=await function(a,l){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next(p=>(K(p!==null,37113),m=p.keys(),h.mutationQueue.removeMutationBatch(d,p))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,e);wd(r,e,t),Td(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Or(r,s)}catch(s){await Vn(s)}}function Td(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function wd(n,e,t){const r=B(n);let s=r.pu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function To(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(r=>{n.gu.containsKey(r)||Ad(n,r)})}function Ad(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(ta(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),la(n))}function Hl(n,e,t){for(const r of t)r instanceof _d?(n.gu.addReference(r.key,e),uI(n,r)):r instanceof Ed?(N(ca,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||Ad(n,r.key)):M(19791,{Cu:r})}function uI(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(N(ca,"New document in limbo: "+t),n.du.add(r),la(n))}function la(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new x(J.fromString(e)),r=n.wu.next();n.fu.set(r,new ZE(t)),n.mu=n.mu.insert(t,r),ld(n.remoteStore,new st(Ke(Ks(t.path)),r,"TargetPurposeLimboResolution",Hs.ce))}}async function Or(n,e,t){const r=B(n),s=[],o=[],a=[];r.Au.isEmpty()||(r.Au.forEach((l,h)=>{a.push(r.bu(h,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:t?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Zo.Es(h.targetId,d);o.push(m)}}))}),await Promise.all(a),r.Ru.H_(s),await async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(d,w=>R.forEach(w.Ts,P=>m.persistence.referenceDelegate.addReference(p,w.targetId,P)).next(()=>R.forEach(w.Is,P=>m.persistence.referenceDelegate.removeReference(p,w.targetId,P)))))}catch(p){if(!Nn(p))throw p;N(ea,"Failed to update sequence numbers: "+p)}for(const p of d){const w=p.targetId;if(!p.fromCache){const P=m.vs.get(w),V=P.snapshotVersion,L=P.withLastLimboFreeSnapshotVersion(V);m.vs=m.vs.insert(w,L)}}}(r.localStore,o))}async function hI(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){N(ca,"User change. New user:",e.toKey());const r=await id(t.localStore,e);t.currentUser=e,function(o,a){o.yu.forEach(l=>{l.forEach(h=>{h.reject(new k(b.CANCELLED,a))})}),o.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Or(t,r.Ns)}}function dI(n,e){const t=B(n),r=t.fu.get(e);if(r&&r.Eu)return z().add(r.key);{let s=z();const o=t.Vu.get(e);if(!o)return s;for(const a of o){const l=t.Au.get(a);s=s.unionWith(l.view.ou)}return s}}function Sd(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aI.bind(null,e),e.Ru.H_=QE.bind(null,e.eventManager),e.Ru.Du=JE.bind(null,e.eventManager),e}function fI(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lI.bind(null,e),e}class Os{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ei(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return gE(this.persistence,new fE,e.initialUser,this.serializer)}xu(e){return new sd(Xo.Vi,this.serializer)}Mu(e){return new wE}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Os.provider={build:()=>new Os};class mI extends Os{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){K(this.persistence.referenceDelegate instanceof Ns,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new X_(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new sd(r=>Ns.Vi(r,t),this.serializer)}}class wo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hI.bind(null,this.syncEngine),await GE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KE}()}createDatastore(e){const t=ei(e.databaseInfo.databaseId),r=PE(e.databaseInfo);return NE(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,l){return new OE(r,s,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>zl(this.syncEngine,t,0),function(){return Fl.v()?new Fl:new AE}())}createSyncEngine(e,t){return function(s,o,a,l,h,d,m){const p=new eI(s,o,a,l,h,d);return m&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=B(t);N(Ze,"RemoteStore shutting down."),r.da.add(5),await Lr(r),r.fa.shutdown(),r.ga.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}wo.provider={build:()=>new wo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="FirestoreClient";class pI{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=we.UNAUTHENTICATED,this.clientId=$o.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(xt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(xt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=oa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hi(n,e){n.asyncQueue.verifyOperationInProgress(),N(xt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await id(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Gl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gI(n);N(xt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Bl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Bl(e.remoteStore,s)),n._onlineComponents=e}async function gI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(xt,"Using user provided OfflineComponentProvider");try{await Hi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;en("Error using user provided cache. Falling back to memory cache: "+t),await Hi(n,new Os)}}else N(xt,"Using default OfflineComponentProvider"),await Hi(n,new mI(void 0));return n._offlineComponents}async function Rd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(xt,"Using user provided OnlineComponentProvider"),await Gl(n,n._uninitializedComponentsProvider._online)):(N(xt,"Using default OnlineComponentProvider"),await Gl(n,new wo))),n._onlineComponents}function yI(n){return Rd(n).then(e=>e.syncEngine)}async function Ao(n){const e=await Rd(n),t=e.eventManager;return t.onListen=tI.bind(null,e.syncEngine),t.onUnlisten=sI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iI.bind(null,e.syncEngine),t}function _I(n,e,t,r){const s=new bd(r),o=new yd(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>pd(await Ao(n),o)),()=>{s.Ku(),n.asyncQueue.enqueueAndForget(async()=>gd(await Ao(n),o))}}function EI(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const m=new bd({next:w=>{m.Ku(),a.enqueueAndForget(()=>gd(o,p));const P=w.docs.has(l);!P&&w.fromCache?d.reject(new k(b.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&h&&h.source==="server"?d.reject(new k(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),p=new yd(Ks(l.path),m,{includeMetadataChanges:!0,Wa:!0});return pd(o,p)}(await Ao(n),n.asyncQueue,e,t,r)),r.promise}function II(n,e){const t=new Pt;return n.asyncQueue.enqueueAndForget(async()=>oI(await yI(n),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="ComponentProvider",Wl=new Map;function TI(n,e,t,r,s){return new jy(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Pd(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="firestore.googleapis.com",Kl=!0;class Ql{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new k(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cd,this.ssl=Kl}else this.host=e.host,this.ssl=e.ssl??Kl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<J_)throw new k(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ky("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ri{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ql({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ql(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vy;switch(r.type){case"firstParty":return new Sy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wl.get(t);r&&(N(vI,"Removing Datastore"),Wl.delete(t),r.terminate())}(this),Promise.resolve()}}function wI(n,e,t,r={}){n=Oe(n,ri);const s=br(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Au(`https://${l}`),o.host!==Cd&&o.host!==l&&en("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:s,emulatorOptions:r};if(!Jt(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=we.MOCK_USER;else{d=Gf(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new k(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new we(p)}n._authCredentials=new Ty(new mh(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sn(this.firestore,e,this._query)}}class re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}toJSON(){return{type:re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Dr(t,re._jsonSchema))return new re(e,r||null,new x(J.fromString(t.referencePath)))}}re._jsonSchemaVersion="firestore/documentReference/1.0",re._jsonSchema={type:ce("string",re._jsonSchemaVersion),referencePath:ce("string")};class Ct extends sn{constructor(e,t,r){super(e,t,Ks(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new x(e))}withConverter(e){return new Ct(this.firestore,e,this._path)}}function AI(n,e,...t){if(n=le(n),ph("collection","path",e),n instanceof ri){const r=J.fromString(e,...t);return cl(r),new Ct(n,null,r)}{if(!(n instanceof re||n instanceof Ct))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return cl(r),new Ct(n.firestore,null,r)}}function xr(n,e,...t){if(n=le(n),arguments.length===1&&(e=$o.newId()),ph("doc","path",e),n instanceof ri){const r=J.fromString(e,...t);return al(r),new re(n,null,new x(r))}{if(!(n instanceof re||n instanceof Ct))throw new k(b.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return al(r),new re(n.firestore,n instanceof Ct?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="AsyncQueue";class Yl{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new ad(this,"async_queue_retry"),this.lc=()=>{const r=zi();r&&N(Jl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=zi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new Pt;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Nn(e))throw e;N(Jl,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,ut("INTERNAL UNHANDLED ERROR: ",Xl(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=ia.createAndSchedule(this,e,t,r,o=>this.Ec(o));return this.oc.push(s),s}Pc(){this._c&&M(47125,{Rc:Xl(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function Xl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class dt extends ri{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Yl,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yl(e),this._firestoreClient=void 0,await e}}}function SI(n,e){const t=typeof n=="object"?n:Pu(),r=typeof n=="string"?n:e,s=Co(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=zf("firestore");o&&wI(s,...o)}return s}function si(n){if(n._terminated)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bI(n),n._firestoreClient}function bI(n){const e=n._freezeSettings(),t=TI(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new pI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xe(Ie.fromBase64String(e))}catch(t){throw new k(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xe(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Dr(e,xe._jsonSchema))return xe.fromBase64String(e.bytes)}}xe._jsonSchemaVersion="firestore/bytes/1.0",xe._jsonSchema={type:ce("string",xe._jsonSchemaVersion),bytes:ce("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Je._jsonSchemaVersion}}static fromJSON(e){if(Dr(e,Je._jsonSchema))return new Je(e.latitude,e.longitude)}}Je._jsonSchemaVersion="firestore/geoPoint/1.0",Je._jsonSchema={type:ce("string",Je._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Dr(e,$e._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new $e(e.vectorValues);throw new k(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$e._jsonSchemaVersion="firestore/vectorValue/1.0",$e._jsonSchema={type:ce("string",$e._jsonSchemaVersion),vectorValues:ce("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=/^__.*__$/;class PI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new kr(e,this.data,t,this.fieldTransforms)}}class Dd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function kd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{dataSource:n})}}class ha{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.fc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ha({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return xs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(kd(this.dataSource)&&RI.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class CI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ei(e)}V(e,t,r,s=!1){return new ha({dataSource:e,methodName:t,targetDoc:r,path:Ee.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mr(n){const e=n._freezeSettings(),t=ei(n._databaseId);return new CI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function da(n,e,t,r,s,o={}){const a=n.V(o.merge||o.mergeFields?2:0,e,t,s);fa("Data must be an object, but it was:",a,r);const l=Ld(r,a);let h,d;if(o.merge)h=new Le(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const p of o.mergeFields){const w=Sn(e,p,t);if(!a.contains(w))throw new k(b.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Md(m,w)||m.push(w)}h=new Le(m),d=a.fieldTransforms.filter(p=>h.covers(p.field))}else h=null,d=a.fieldTransforms;return new PI(new Ve(l),h,d)}class oi extends ua{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oi}}function Vd(n,e,t,r){const s=n.V(1,e,t);fa("Data must be an object, but it was:",s,r);const o=[],a=Ve.empty();Mt(r,(h,d)=>{const m=xd(e,h,t);d=le(d);const p=s.Sc(m);if(d instanceof oi)o.push(m);else{const w=Fr(d,p);w!=null&&(o.push(m),a.set(m,w))}});const l=new Le(o);return new Dd(a,l,s.fieldTransforms)}function Nd(n,e,t,r,s,o){const a=n.V(1,e,t),l=[Sn(e,r,t)],h=[s];if(o.length%2!=0)throw new k(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)l.push(Sn(e,o[w])),h.push(o[w+1]);const d=[],m=Ve.empty();for(let w=l.length-1;w>=0;--w)if(!Md(d,l[w])){const P=l[w];let V=h[w];V=le(V);const L=a.Sc(P);if(V instanceof oi)d.push(P);else{const C=Fr(V,L);C!=null&&(d.push(P),m.set(P,C))}}const p=new Le(d);return new Dd(m,p,a.fieldTransforms)}function DI(n,e,t,r=!1){return Fr(t,n.V(r?4:3,e))}function Fr(n,e){if(Od(n=le(n)))return fa("Unsupported field value:",e,n),Ld(n,e);if(n instanceof ua)return function(r,s){if(!kd(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=Fr(l,s.bc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return m_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=X.fromDate(r);return{timestampValue:Vs(s.serializer,o)}}if(r instanceof X){const o=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vs(s.serializer,o)}}if(r instanceof Je)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xe)return{bytesValue:Qh(s.serializer,r._byteString)};if(r instanceof re){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Jo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $e)return function(a,l){const h=a instanceof $e?a.toArray():a;return{mapValue:{fields:{[Ah]:{stringValue:Sh},[Ps]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw l.Dc("VectorValues must only contain numeric values.");return Wo(l.serializer,m)})}}}}}}(r,s);if(nd(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${zs(r)}`)}(n,e)}function Ld(n,e){const t={};return _h(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mt(n,(r,s)=>{const o=Fr(s,e.yc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Od(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Je||n instanceof xe||n instanceof re||n instanceof ua||n instanceof $e||nd(n))}function fa(n,e,t){if(!Od(t)||!gh(t)){const r=zs(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function Sn(n,e,t){if((e=le(e))instanceof ii)return e._internalPath;if(typeof e=="string")return xd(n,e);throw xs("Field path arguments must be of type string or ",n,!1,void 0,t)}const kI=new RegExp("[~\\*/\\[\\]]");function xd(n,e,t){if(e.search(kI)>=0)throw xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ii(...e.split("."))._internalPath}catch{throw xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xs(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(b.INVALID_ARGUMENT,l+n+h)}function Md(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{convertValue(e,t="none"){switch(Nt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Mt(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){const t=e.fields?.[Ps].arrayValue?.values?.map(r=>se(r.doubleValue));return new $e(t)}convertGeoPoint(e){return new Je(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ws(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pr(e));default:return null}}convertTimestamp(e){const t=kt(e);return new X(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);K(td(r),9688,{name:e});const s=new gr(r.get(1),r.get(3)),o=new x(r.popFirst(5));return s.isEqual(t)||ut(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends VI{constructor(e){super(),this.firestore=e}convertBytes(e){return new xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,t)}}const Zl="@firebase/firestore",eu="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Sn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NI extends Ud{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ma{}class Bd extends ma{}function OI(n,e,...t){let r=[];e instanceof ma&&r.push(e),r=r.concat(t),function(o){const a=o.filter(h=>h instanceof ga).length,l=o.filter(h=>h instanceof pa).length;if(a>1||a>0&&l>0)throw new k(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class pa extends Bd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new pa(e,t,r)}_apply(e){const t=this._parse(e);return $d(e._query,t),new sn(e.firestore,e.converter,ho(e._query,t))}_parse(e){const t=Mr(e.firestore);return function(o,a,l,h,d,m,p){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new k(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){ru(p,m);const V=[];for(const L of p)V.push(nu(h,o,L));w={arrayValue:{values:V}}}else w=nu(h,o,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||ru(p,m),w=DI(l,a,p,m==="in"||m==="not-in");return ae.create(d,m,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ga extends ma{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ga(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)$d(a,h),a=ho(a,h)}(e._query,t),new sn(e.firestore,e.converter,ho(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ya extends Bd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ya(e,t)}_apply(e){const t=function(s,o,a){if(s.startAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _r(o,a)}(e._query,this._field,this._direction);return new sn(e.firestore,e.converter,o_(e._query,t))}}function xI(n,e="asc"){const t=e,r=Sn("orderBy",n);return ya._create(r,t)}function nu(n,e,t){if(typeof(t=le(t))=="string"){if(t==="")throw new k(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nh(e)&&t.indexOf("/")!==-1)throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(J.fromString(t));if(!x.isDocumentKey(r))throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gl(n,new x(r))}if(t instanceof re)return gl(n,t._key);throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zs(t)}.`)}function ru(n,e){if(!Array.isArray(n)||n.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $d(n,e){const t=function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function _a(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class nr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qt extends Ud{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ys(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Sn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Qt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Qt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qt._jsonSchema={type:ce("string",Qt._jsonSchemaVersion),bundleSource:ce("string","DocumentSnapshot"),bundleName:ce("string"),bundle:ce("string")};class ys extends Qt{data(e={}){return super.data(e)}}class _n{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new nr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ys(this._firestore,this._userDataWriter,r.key,r,new nr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new ys(s._firestore,s._userDataWriter,l.doc.key,l.doc,new nr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new ys(s._firestore,s._userDataWriter,l.doc.key,l.doc,new nr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:MI(l.type),doc:h,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$o.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n._jsonSchemaVersion="firestore/querySnapshot/1.0",_n._jsonSchema={type:ce("string",_n._jsonSchemaVersion),bundleSource:ce("string","QuerySnapshot"),bundleName:ce("string"),bundle:ce("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Mr(e)}set(e,t,r){this._verifyNotCommitted();const s=Gi(e,this._firestore),o=_a(s.converter,t,r),a=da(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Pe.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const o=Gi(e,this._firestore);let a;return a=typeof(t=le(t))=="string"||t instanceof ii?Nd(this._dataReader,"WriteBatch.update",o._key,t,r,s):Vd(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(a.toMutation(o._key,Pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Gi(e,this._firestore);return this._mutations=this._mutations.concat(new Zs(t._key,Pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Gi(n,e){if((n=le(n)).firestore!==e)throw new k(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){n=Oe(n,re);const e=Oe(n.firestore,dt),t=si(e);return EI(t,n._key).then(r=>qd(e,n,r))}function UI(n,e,t){n=Oe(n,re);const r=Oe(n.firestore,dt),s=_a(n.converter,e,t),o=Mr(r);return Ur(r,[da(o,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Pe.none())])}function BI(n,e,t,...r){n=Oe(n,re);const s=Oe(n.firestore,dt),o=Mr(s);let a;return a=typeof(e=le(e))=="string"||e instanceof ii?Nd(o,"updateDoc",n._key,e,t,r):Vd(o,"updateDoc",n._key,e),Ur(s,[a.toMutation(n._key,Pe.exists(!0))])}function $I(n){return Ur(Oe(n.firestore,dt),[new Zs(n._key,Pe.none())])}function jI(n,e){const t=Oe(n.firestore,dt),r=xr(n),s=_a(n.converter,e),o=Mr(n.firestore);return Ur(t,[da(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Pe.exists(!1))]).then(()=>r)}function qI(n,...e){n=le(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||tu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(tu(e[r])){const d=e[r];e[r]=d.next?.bind(d),e[r+1]=d.error?.bind(d),e[r+2]=d.complete?.bind(d)}let o,a,l;if(n instanceof re)a=Oe(n.firestore,dt),l=Ks(n._key.path),o={next:d=>{e[r]&&e[r](qd(a,n,d))},error:e[r+1],complete:e[r+2]};else{const d=Oe(n,sn);a=Oe(d.firestore,dt),l=d._query;const m=new Fd(a);o={next:p=>{e[r]&&e[r](new _n(a,m,d,p))},error:e[r+1],complete:e[r+2]},LI(n._query)}const h=si(a);return _I(h,l,s,o)}function Ur(n,e){const t=si(n);return II(t,e)}function qd(n,e,t){const r=t.docs.get(e._key),s=new Fd(n);return new Qt(n,s,e._key,r,new nr(t.hasPendingWrites,t.fromCache),e.converter)}function zI(n){return n=Oe(n,dt),si(n),new FI(n,e=>Ur(n,e))}(function(e,t=!0){Iy(Cn),En(new Yt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new dt(new wy(r.getProvider("auth-internal")),new by(a,r.getProvider("app-check-internal")),qy(a,s),a);return o={useFetchStreams:t,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),bt(Zl,eu,e),bt(Zl,eu,"esm2020")})();const HI={apiKey:"AIzaSyBTz4iLKtBiZwHk-5pjNU1AFQF1zDhyTHI",authDomain:"gen-lang-client-0019812834.firebaseapp.com",projectId:"gen-lang-client-0019812834",storageBucket:"gen-lang-client-0019812834.firebasestorage.app",messagingSenderId:"677554753890",appId:"1:677554753890:web:2c13f2a2b0e019e5471c3b",measurementId:"G-ZMRMRWXQNV"},zd=Ru(HI),Ea=_y(zd),Ia=SI(zd,"money"),GI=new tt,WI="1.1.0",KI=[{version:"1.1.0",date:"2026-05-18",label:"ฟีเจอร์ใหม่ + ปรับปรุง",changes:[{type:"new",text:'มุมมอง "แยก" ในรายการทั้งหมด — รายรับซ้าย รายจ่ายขวา พร้อมตาชั่งบอกว่าฝั่งไหนหนักกว่า'},{type:"new",text:"Timeline วันต่อวัน — รายการจัดกลุ่มตามวันที่ อ่านง่ายขึ้น"},{type:"new",text:'สลับดู "รอบบิล" กับ "ทั้งหมด" ในหน้ารายการ'},{type:"new",text:"Pro — เก็บรูปสลิปไว้ 3 เดือน คลิก 📷 ดูภาพย้อนหลังได้ทุกเมื่อ"},{type:"new",text:"แนวโน้มรายวัน — ช่วงวันที่แสดงตามรอบบิลที่ตั้งไว้ (วันตัดรอบ 1–31)"},{type:"new",text:"แสดงจำนวนสแกนที่เหลือวันนี้ — เปลี่ยนสีเตือนเมื่อใกล้หมด"},{type:"fix",text:"แก้ข้อมูลไม่บันทึก เพราะแอปต่อ Firestore ผิด database"},{type:"fix",text:"แก้หน้า login ไม่โชว์หลัง deploy ครั้งแรก"},{type:"fix",text:"แก้เพิ่มรายการต่อเนื่องไม่ได้ — หน้าจอค้างทำให้พิมพ์ไม่ได้"},{type:"fix",text:"แก้จำนวนสแกนที่เหลือแสดงผิดหลังรีเฟรชหน้า"},{type:"improve",text:"เปิดแอปครั้งถัดไปข้อมูลโชว์เกือบทันที — ไม่ต้องรอโหลดนาน"},{type:"improve",text:"กราฟแนวโน้มไม่แสดงแท่งว่างของวันในอนาคต"}]},{version:"1.0.0",date:"2026-05-17",label:"เปิดตัว",changes:[{type:"new",text:"Login ด้วย Google — ข้อมูลแยกต่อคน sync ทุกอุปกรณ์"},{type:"new",text:"UI ใหม่ทั้งหมด — light theme, clean layout"},{type:"new",text:"สแกนสลิปด้วย Gemini 2.5 Flash AI"},{type:"new",text:"Free plan — สแกนสลิปฟรี 5 ครั้ง/วัน"},{type:"new",text:"Pro plan — สแกนไม่จำกัด + เก็บรูปสลิป"},{type:"new",text:"แนวโน้มรายวันตามรอบบิลที่ตั้งไว้"}]}],su={th:{locale:"th-TH","login.subtitle":`บันทึกรายรับ-รายจ่ายส่วนตัว
ข้อมูลของคุณ เห็นแค่คุณคนเดียว`,"login.google":"เข้าสู่ระบบด้วย Google","login.note":`ข้อมูลทั้งหมดเก็บในบัญชี Google ของคุณ
ไม่มีค่าใช้จ่าย · ปลอดภัย · ใช้ได้ทุกอุปกรณ์`,"sync.online":"ออนไลน์","sync.offline":"ออฟไลน์","sync.syncing":"กำลังซิงค์...","nav.dashboard":"ภาพรวม","nav.transactions":"รายการทั้งหมด","nav.analytics":"หมวดหมู่","nav.trends":"แนวโน้ม","page.dashboard":"ภาพรวม","page.transactions":"รายการทั้งหมด","page.analytics":"วิเคราะห์ตามหมวดหมู่","page.trends":"แนวโน้มรายวัน","sidebar.upgrade":"⭐ อัปเกรดเป็น Pro","sidebar.signout":"ออกจากระบบ","topbar.add":"+ เพิ่มรายการ","topbar.add.text":"เพิ่มรายการ","dash.balance":"ยอดคงเหลือ","dash.income":"รายรับ","dash.expense":"รายจ่าย","dash.expenseRatio":"สัดส่วนรายจ่าย","dash.recent":"รายการล่าสุด","dash.seeAll":"ดูทั้งหมด →","dash.empty":`ยังไม่มีรายการ
กด "เพิ่มรายการ" เพื่อเริ่มต้น`,"dash.balance.positive":"↑ คุณมีเงินเหลือ","dash.balance.negative":"↓ รายจ่ายเกินรายรับ","dash.balance.zero":"รายรับเท่ากับรายจ่าย","dash.ratio.income":"รายรับ","dash.ratio.expense":"รายจ่าย","tx.title":"รายการทั้งหมด","tx.viewList":"☰ รายการ","tx.viewSplit":"⊞ แยก","tx.rangeAll":"ทั้งหมด","tx.rangeCycle":"รอบบิล","tx.filterAllTypes":"ทุกประเภท","tx.filterIncome":"รายรับ","tx.filterExpense":"รายจ่าย","tx.filterAllCats":"ทุกหมวดหมู่","tx.noResults":"ไม่มีรายการที่ตรงกับเงื่อนไข","tx.noItems":"ไม่มีรายการ","tx.scale.income":"รายรับ","tx.scale.expense":"รายจ่าย","tx.scale.noItems":"ยังไม่มีรายการ","tx.scale.equal":"เท่ากันพอดี","tx.split.income":"💰 รายรับ","tx.split.expense":"💸 รายจ่าย","tx.split.emptyIncome":"ยังไม่มีรายรับ","tx.split.emptyExpense":"ยังไม่มีรายจ่าย","trends.titleFull":"แนวโน้มรายวัน ({start} – {end})","trends.freeNotice":"📊 Free plan ดูย้อนหลังได้สูงสุด 30 วัน — ","trends.upgradeBtn":"อัปเกรดเป็น Pro ↗","trends.chart.income":"รายรับ","trends.chart.expense":"รายจ่าย","analytics.expenseTitle":"รายจ่ายแยกตามหมวดหมู่","analytics.incomeTitle":"รายรับแยกตามหมวดหมู่","analytics.noData":"ยังไม่มีข้อมูล","modal.addTitle":"เพิ่มรายการใหม่","modal.editTitle":"แก้ไขรายการ","modal.scan":"📸 สแกนสลิป / แนบรูปภาพ","modal.prepareImg":"กำลังเตรียมรูปภาพ...","modal.analyzing":"กำลังวิเคราะห์...","modal.scanning":"กำลังสแกน...","modal.type.income":"↑ รายรับ","modal.type.expense":"↓ รายจ่าย","modal.amountLabel":"จำนวนเงิน (฿)","modal.amountPlaceholder":"0.00","modal.descLabel":"รายละเอียด","modal.descPlaceholder":"เช่น ค่าอาหารกลางวัน","modal.catLabel":"หมวดหมู่","modal.dateLabel":"วันและเวลา","modal.continueLabel":"บันทึกและเพิ่มรายการต่อไป","modal.addBtn":"เพิ่มรายการ","modal.editBtn":"บันทึกการแก้ไข","delete.title":"ยืนยันการลบ","delete.confirm":"คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?","delete.cancel":"ยกเลิก","delete.delete":"ลบ","settings.title":"ตั้งค่าระบบ","settings.cutoffLabel":"วันที่ตัดรอบบิลรายเดือน (1–31)","settings.cutoffHelp":"ตัวอย่าง: ตั้งเป็นวันที่ 25 → รอบนับตั้งแต่ 25 ของเดือนก่อน ถึง 24 ของเดือนนี้","settings.langLabel":"ภาษา / Language","settings.save":"บันทึกการตั้งค่า","settings.changelog":"🆕 ประวัติอัปเดต","settings.clearData":"🗑️ ล้างข้อมูลทั้งหมด","settings.signout":"🚪 ออกจากระบบ","upgrade.title":"⭐ อัปเกรดเป็น Pro","upgrade.free":"Free","upgrade.freePrice":"ฟรี","upgrade.recommended":"แนะนำ","upgrade.pro":"Pro","upgrade.proPrice":"79 ฿/เดือน","upgrade.pay":"ชำระเงิน 79 ฿/เดือน","upgrade.note":"ยกเลิกได้ทุกเมื่อ · ชำระผ่านบัตรเครดิต / PromptPay","bnav.dashboard":"ภาพรวม","bnav.transactions":"รายการ","bnav.analytics":"หมวดหมู่","bnav.trends":"แนวโน้ม","changelog.title":"ประวัติอัปเดต","cl.new":"ใหม่","cl.fix":"แก้ไข","cl.improve":"ปรับปรุง","loading.default":"กำลังโหลด...","loading.signingIn":"กำลังเข้าสู่ระบบ...","loading.payment":"กำลังประมวลผลการชำระเงิน...","loading.deleting":"กำลังลบ...","loading.clearing":"กำลังล้างข้อมูล...","toast.signInError":"เข้าสู่ระบบไม่สำเร็จ: ","toast.saved":"✅ บันทึกแล้ว","toast.editSaved":"✅ บันทึกการแก้ไขแล้ว","toast.deleted":"🗑️ ลบรายการแล้ว","toast.deleteError":"❌ ลบไม่สำเร็จ: ","toast.fieldRequired":"กรุณากรอกข้อมูลให้ครบถ้วน","toast.scanSuccess":"✅ สแกนสำเร็จโดย Gemini 2.5 Flash","toast.scanNoAmount":"⚠️ AI ไม่พบยอดเงินในสลิปนี้","toast.scanError":"⚠️ สแกนไม่ได้: {msg} — รูปยังแนบอยู่","toast.paymentSoon":"ระบบชำระเงินกำลังเปิดใช้งาน เร็วๆ นี้","toast.paymentSuccess":"🎉 อัปเกรดเป็น Pro สำเร็จ!","toast.paymentFail":"❌ ชำระเงินไม่สำเร็จ: ","toast.settingsSaved":"บันทึกตั้งค่าแล้ว ✅","toast.settingsLocal":"บันทึกในเครื่องแล้ว (ซิงค์ไม่ได้)","toast.clearAll":"🗑️ ล้างข้อมูลทั้งหมดแล้ว","toast.clearNone":"ไม่มีข้อมูลให้ล้าง","toast.langChanged":"🌐 เปลี่ยนภาษาแล้ว","toast.cutoffError":"กรุณากรอกวันที่ระหว่าง 1-31","confirm.clearAll":"ต้องการล้างข้อมูลทั้งหมดหรือไม่?","scan.pro":"Pro — สแกนสลิปได้ไม่จำกัด ⭐","scan.free.left":"Free — เหลือ {left}/{total} ครั้งวันนี้","scan.free.exhausted":"หมดแล้ววันนี้ — อัปเกรด Pro เพื่อสแกนต่อ","scan.limit.upgrade":`ใช้ครบ {total} ครั้งสแกนฟรีวันนี้แล้ว
อัปเกรดเป็น Pro เพื่อสแกนไม่จำกัด`,"slip.viewSlip":"ดูสลิป ↗","slip.viewBtn":"ดูสลิป","cat.salary":"เงินเดือน","cat.freelance":"ฟรีแลนซ์","cat.investment":"การลงทุน","cat.gift":"ของขวัญ/โบนัส","cat.other_in":"รายรับอื่นๆ","cat.food":"อาหาร","cat.transport":"เดินทาง","cat.shopping":"ช้อปปิ้ง","cat.utilities":"ค่าสาธารณูปโภค","cat.health":"สุขภาพ","cat.entertainment":"บันเทิง","cat.education":"การศึกษา","cat.rent":"ค่าเช่า/บ้าน","cat.other_ex":"รายจ่ายอื่นๆ","dev.switchFree":"🔧 Dev: Pro → สลับ Free","dev.switchPro":"🔧 Dev: Free → สลับ Pro","dev.toasted":"🔧 Dev: สลับเป็น "},en:{locale:"en-US","login.subtitle":`Track your personal income & expenses.
Your data, visible only to you.`,"login.google":"Sign in with Google","login.note":`All data stored in your Google account.
Free · Secure · All devices`,"sync.online":"Online","sync.offline":"Offline","sync.syncing":"Syncing...","nav.dashboard":"Overview","nav.transactions":"Transactions","nav.analytics":"Categories","nav.trends":"Trends","page.dashboard":"Overview","page.transactions":"All Transactions","page.analytics":"Category Analysis","page.trends":"Daily Trends","sidebar.upgrade":"⭐ Upgrade to Pro","sidebar.signout":"Sign Out","topbar.add":"+ Add","topbar.add.text":"Add","dash.balance":"Balance","dash.income":"Income","dash.expense":"Expenses","dash.expenseRatio":"Expense Ratio","dash.recent":"Recent Transactions","dash.seeAll":"See all →","dash.empty":`No transactions yet.
Press "Add" to get started.`,"dash.balance.positive":"↑ You have money left over","dash.balance.negative":"↓ Expenses exceed income","dash.balance.zero":"Income equals expenses","dash.ratio.income":"Income","dash.ratio.expense":"Expense","tx.title":"All Transactions","tx.viewList":"☰ List","tx.viewSplit":"⊞ Split","tx.rangeAll":"All","tx.rangeCycle":"Cycle","tx.filterAllTypes":"All Types","tx.filterIncome":"Income","tx.filterExpense":"Expense","tx.filterAllCats":"All Categories","tx.noResults":"No matching transactions","tx.noItems":"No transactions","tx.scale.income":"Income","tx.scale.expense":"Expenses","tx.scale.noItems":"No transactions yet","tx.scale.equal":"Perfectly balanced","tx.split.income":"💰 Income","tx.split.expense":"💸 Expenses","tx.split.emptyIncome":"No income yet","tx.split.emptyExpense":"No expenses yet","trends.titleFull":"Daily Trend ({start} – {end})","trends.freeNotice":"📊 Free plan: view up to 30 days — ","trends.upgradeBtn":"Upgrade to Pro ↗","trends.chart.income":"Income","trends.chart.expense":"Expenses","analytics.expenseTitle":"Expenses by Category","analytics.incomeTitle":"Income by Category","analytics.noData":"No data yet","modal.addTitle":"Add New Transaction","modal.editTitle":"Edit Transaction","modal.scan":"📸 Scan Slip / Attach Image","modal.prepareImg":"Preparing image...","modal.analyzing":"Analyzing...","modal.scanning":"Scanning...","modal.type.income":"↑ Income","modal.type.expense":"↓ Expense","modal.amountLabel":"Amount (฿)","modal.amountPlaceholder":"0.00","modal.descLabel":"Description","modal.descPlaceholder":"e.g. Lunch","modal.catLabel":"Category","modal.dateLabel":"Date & Time","modal.continueLabel":"Save and add another","modal.addBtn":"Add Transaction","modal.editBtn":"Save Changes","delete.title":"Confirm Delete","delete.confirm":"Are you sure you want to delete this transaction?","delete.cancel":"Cancel","delete.delete":"Delete","settings.title":"Settings","settings.cutoffLabel":"Monthly Billing Cutoff Day (1–31)","settings.cutoffHelp":"Example: Set to 25 → cycle runs from the 25th of last month to the 24th of this month","settings.langLabel":"Language / ภาษา","settings.save":"Save Settings","settings.changelog":"🆕 Update History","settings.clearData":"🗑️ Clear All Data","settings.signout":"🚪 Sign Out","upgrade.title":"⭐ Upgrade to Pro","upgrade.free":"Free","upgrade.freePrice":"Free","upgrade.recommended":"Recommended","upgrade.pro":"Pro","upgrade.proPrice":"฿79/month","upgrade.pay":"Pay ฿79/month","upgrade.note":"Cancel anytime · Pay by credit card / PromptPay","bnav.dashboard":"Overview","bnav.transactions":"Transactions","bnav.analytics":"Categories","bnav.trends":"Trends","changelog.title":"Update History","cl.new":"New","cl.fix":"Fix","cl.improve":"Improve","loading.default":"Loading...","loading.signingIn":"Signing in...","loading.payment":"Processing payment...","loading.deleting":"Deleting...","loading.clearing":"Clearing data...","toast.signInError":"Sign-in failed: ","toast.saved":"✅ Saved","toast.editSaved":"✅ Changes saved","toast.deleted":"🗑️ Transaction deleted","toast.deleteError":"❌ Delete failed: ","toast.fieldRequired":"Please fill in all fields","toast.scanSuccess":"✅ Scanned by Gemini 2.5 Flash","toast.scanNoAmount":"⚠️ AI did not find an amount in this slip","toast.scanError":"⚠️ Scan failed: {msg} — image still attached","toast.paymentSoon":"Payment system coming soon","toast.paymentSuccess":"🎉 Upgraded to Pro successfully!","toast.paymentFail":"❌ Payment failed: ","toast.settingsSaved":"Settings saved ✅","toast.settingsLocal":"Saved locally (sync failed)","toast.clearAll":"🗑️ All data cleared","toast.clearNone":"No data to clear","toast.langChanged":"🌐 Language changed","toast.cutoffError":"Please enter a day between 1 and 31","confirm.clearAll":"Clear all transaction data?","scan.pro":"Pro — Unlimited slip scans ⭐","scan.free.left":"Free — {left}/{total} scans remaining today","scan.free.exhausted":"No scans left today — upgrade to Pro","scan.limit.upgrade":`Used all {total} free scans today.
Upgrade to Pro for unlimited scanning.`,"slip.viewSlip":"View slip ↗","slip.viewBtn":"View slip","cat.salary":"Salary","cat.freelance":"Freelance","cat.investment":"Investment","cat.gift":"Gift/Bonus","cat.other_in":"Other Income","cat.food":"Food","cat.transport":"Transport","cat.shopping":"Shopping","cat.utilities":"Utilities","cat.health":"Health","cat.entertainment":"Entertainment","cat.education":"Education","cat.rent":"Rent/Home","cat.other_ex":"Other Expense","dev.switchFree":"🔧 Dev: Pro → Switch Free","dev.switchPro":"🔧 Dev: Free → Switch Pro","dev.toasted":"🔧 Dev: Switched to "}};let ai=(()=>{const n=localStorage.getItem("mf_lang");return n==="th"||n==="en"?n:navigator.language?.toLowerCase().startsWith("th")?"th":"en"})();function Wi(){return ai}function QI(n){n!=="th"&&n!=="en"||(ai=n,localStorage.setItem("mf_lang",n))}function O(n,e){let t=su[ai]?.[n]??su.th[n]??n;if(e)for(const[r,s]of Object.entries(e))t=t.replaceAll(`{${r}}`,s);return t}function bn(){return O("locale")}function iu(){document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=O(e.dataset.i18n)}),document.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=O(e.dataset.i18nHtml).replace(/\n/g,"<br>")}),document.querySelectorAll("[data-i18n-ph]").forEach(e=>{e.placeholder=O(e.dataset.i18nPh)});const n=document.getElementById("select-language");n&&(n.value=ai)}const vr={income:[{id:"salary",emoji:"💼"},{id:"freelance",emoji:"💻"},{id:"investment",emoji:"📈"},{id:"gift",emoji:"🎁"},{id:"other_in",emoji:"💰"}],expense:[{id:"food",emoji:"🍜"},{id:"transport",emoji:"🚗"},{id:"shopping",emoji:"🛍️"},{id:"utilities",emoji:"💡"},{id:"health",emoji:"🏥"},{id:"entertainment",emoji:"🎮"},{id:"education",emoji:"📚"},{id:"rent",emoji:"🏠"},{id:"other_ex",emoji:"📦"}]};function va(n){return O(`cat.${n}`)||n}const JI={income:["#22c55e","#16a34a","#86efac","#4ade80","#bbf7d0"],expense:["#f43f5e","#e11d48","#fb7185","#f97316","#fb923c","#fbbf24","#a855f7","#8b5cf6","#6366f1"]},YI=new Map([...vr.income,...vr.expense].map(n=>[n.id,n]));function XI(n){const e=YI.get(n);return e?{...e,label:va(n)}:{label:n,emoji:"📌"}}const ou="pkey_test_YOUR_OMISE_PUBLIC_KEY",Ms=5,lr=["nunmongss@gmail.com"];let ur=localStorage.getItem("mf_dev_plan")||"pro",ge=JSON.parse(localStorage.getItem("mf_cache_tx")||"[]"),Ta="income",_s=null,hr=null,rr="dashboard",it=parseInt(localStorage.getItem("mf_cutoff_day"))||1,Hd="list",Gd="cycle",Wd=null,Kd=null,Fs=null,et=null,pe=null,oe="free",wa=0,Aa="",ot=null;const Br=()=>AI(Ia,"users",pe.uid,"transactions"),Sa=()=>xr(Ia,"users",pe.uid),ZI=ge.length>0;ZI&&(Qd(),at("syncing"),Rn());og(Ea,n=>{if(n)pe=n,Qd(),nv(),Ca(),at("syncing"),ge.length>0&&Rn(),iv(),rv();else{pe=null,ot&&(ot(),ot=null),ge=[],oe="free";const e=document.getElementById("btn-dev-toggle");e&&(e.style.display="none"),ev()}});function ev(){document.getElementById("login-screen").style.display="flex",document.getElementById("app-wrapper").style.display="none",tn()}function Qd(){document.getElementById("login-screen").style.display="none",document.getElementById("app-wrapper").style.display=""}async function tv(){try{Us(O("loading.signingIn")),await Rg(Ea,GI)}catch(n){tn(),ne(O("toast.signInError")+n.message,"error")}}async function au(){ot&&(ot(),ot=null),await ag(Ea),localStorage.removeItem("mf_cache_tx")}function nv(){if(!pe)return;const n=document.getElementById("user-avatar"),e=document.getElementById("user-name");n&&(n.src=pe.photoURL||""),e&&(e.textContent=pe.displayName||pe.email||"");const t=document.getElementById("mobile-avatar"),r=document.getElementById("mobile-user-name");t&&(t.src=pe.photoURL||""),r&&(r.textContent=pe.displayName||pe.email||"")}function rv(){ot&&ot();const n=OI(Br(),xI("date","desc"));at("syncing"),ot=qI(n,e=>{ge=e.docs.map(t=>({id:t.id,...t.data()})),sv(),lv(),Rn(),at("online"),tn()},e=>{console.error("[Firestore] snapshot error:",e),at("offline"),tn(),ne("⚠️ Firestore error: "+e.message,"error",8e3)})}function sv(){const n=new Date;n.setDate(n.getDate()-90),ge.forEach(e=>{e.imageData&&new Date(e.createdAt)<n&&(e.imageData="",Jd(e.id,{imageData:""}).catch(()=>{}))})}async function iv(){try{const n=await jd(Sa());if(n.exists()){const e=n.data();e.cutoff_day&&(it=parseInt(e.cutoff_day)||1,localStorage.setItem("mf_cutoff_day",it)),wa=e.scan_count||0,Aa=e.scan_date||"",oe=lr.includes(pe?.email)?ur:e.plan||"free"}else lr.includes(pe?.email)&&(oe=ur);ci(),lr.includes(pe?.email)&&Ca()}catch(n){console.error("loadUserMeta error:",n)}}async function ba(n){await UI(Sa(),n,{merge:!0})}function ci(){const n=document.getElementById("plan-badge");n&&(n.textContent=oe==="pro"?"⭐ Pro":"Free",n.className="plan-badge "+oe);const e=document.getElementById("mobile-plan-badge");e&&(e.textContent=oe==="pro"?"⭐ Pro":"Free",e.className="plan-badge mobile-plan-badge "+oe);const t=document.getElementById("mobile-btn-updates");t&&(t.style.display=oe==="pro"?"none":"");const r=document.getElementById("btn-upgrade");r&&(r.style.display=oe==="pro"?"none":"");const s=document.getElementById("scan-info");if(s)if(oe==="pro")s.textContent=O("scan.pro"),s.className="scan-info-row pro";else{const o=new Date().toLocaleDateString("sv"),l=Ms-(Aa===o?wa:0);s.textContent=l>0?O("scan.free.left",{left:l,total:Ms}):O("scan.free.exhausted");const h=l<=0?"exhausted":l===1?"danger":l<=3?"warning":"";s.className=`scan-info-row${h?" "+h:""}`}}async function ov(n){at("syncing"),await jI(Br(),n)}async function Jd(n,e){at("syncing"),await BI(xr(Br(),n),e)}async function av(n){at("syncing"),await $I(xr(Br(),n))}async function cv(){if(oe==="pro")return!0;const n=new Date().toLocaleDateString("sv"),e=await jd(Sa()),t=e.exists()?e.data():{},s=t.scan_date===n&&t.scan_count||0;if(s>=Ms)return bo(O("scan.limit.upgrade",{total:Ms})),!1;const o=s+1;return await ba({scan_count:o,scan_date:n}),wa=o,Aa=n,ci(),!0}function Us(n){n===void 0&&(n=O("loading.default")),document.getElementById("loading-text").textContent=n,document.getElementById("loading-overlay").classList.add("active")}function tn(){document.getElementById("loading-overlay").classList.remove("active")}function at(n){const e=document.getElementById("sync-badge"),t=document.getElementById("sync-label");e.className="sync-badge "+n,t.textContent=O(`sync.${n}`)||n}function lv(){localStorage.setItem("mf_cache_tx",JSON.stringify(ge))}function Ge(n){return"฿"+Number(n).toLocaleString("th-TH",{minimumFractionDigits:2,maximumFractionDigits:2})}function Yd(n){const e=new Date(n);if(isNaN(e.getTime()))return n;const t=bn();return e.toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"})+" · "+e.toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}function Ra(n,e){return XI(e)}function Xd(n){const e=document.createElement("div");return e.appendChild(document.createTextNode(n)),e.innerHTML}function cu(n,e,t){const r=new Date(n,e+1,0).getDate();return new Date(n,e,Math.min(t,r))}function Pa(){const n=new Date,e=n.getFullYear(),t=n.getMonth();let r=cu(e,t,it);if(n.getDate()<it){const o=t===0?11:t-1,a=t===0?e-1:e;r=cu(a,o,it)}const s=new Date(r);return s.setMonth(s.getMonth()+1),{start:r,end:s}}function Zd(n){if(!n)return!1;const e=new Date(n);if(isNaN(e.getTime()))return!1;const{start:t,end:r}=Pa();return e>=t&&e<r}function uv(){let n=0,e=0;const{start:t,end:r}=Pa();ge.forEach(o=>{if(!o.date)return;const a=new Date(o.date);isNaN(a.getTime())||a<t||a>=r||(o.type==="income"?n+=Number(o.amount):e+=Number(o.amount))});const s=o=>Math.round(o*100)/100;return{income:s(n),expense:s(e),balance:s(n-e)}}let lu;function ne(n,e="success",t=3500){const r=document.getElementById("toast");r.textContent=n,r.className=`toast show ${e}`,clearTimeout(lu),lu=setTimeout(()=>{r.className="toast"},t)}function uu(n){rr=n,document.querySelectorAll(".view").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".bottom-nav-item").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`view-${n}`);e&&e.classList.add("active");const t=document.getElementById(`nav-${n}`);t&&t.classList.add("active"),document.querySelectorAll(`.bottom-nav-item[data-view="${n}"]`).forEach(r=>r.classList.add("active")),document.getElementById("page-title").textContent=O(`page.${n}`)||n,Rn(),window.innerWidth<=900&&document.getElementById("sidebar").classList.remove("open")}function So(n){const e=document.getElementById("input-category");e.innerHTML="",vr[n].forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.emoji} ${va(t.id)}`,e.appendChild(r)})}function hu(){const n=document.getElementById("filter-category");n.innerHTML=`<option value="all">${O("tx.filterAllCats")}</option>`,[...vr.income,...vr.expense].forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=`${e.emoji} ${va(e.id)}`,n.appendChild(t)})}function hv(){const{income:n,expense:e,balance:t}=uv();document.getElementById("total-balance").textContent=Ge(t),document.getElementById("total-income").textContent=Ge(n),document.getElementById("total-expense").textContent=Ge(e);const r=n+e,s=r>0?e/r*100:0;document.getElementById("ratio-fill").style.width=s+"%",document.getElementById("ratio-income-label").textContent=`${O("dash.ratio.income")} ${(100-s).toFixed(0)}%`,document.getElementById("ratio-expense-label").textContent=`${O("dash.ratio.expense")} ${s.toFixed(0)}%`;const o=document.getElementById("balance-trend");t>0?o.textContent=O("dash.balance.positive"):t<0?o.textContent=O("dash.balance.negative"):o.textContent=O("dash.balance.zero");const a=[...ge].sort((l,h)=>new Date(h.date)-new Date(l.date)).slice(0,5);dv("recent-list",a,"empty-recent")}function dv(n,e,t){const r=document.getElementById(n);if(r.innerHTML="",e.length===0){const s=document.getElementById(t);s&&r.appendChild(s.cloneNode(!0));return}e.forEach(s=>{const o=Ra(s.type,s.category),a=!!s.imageData,l=document.createElement("div");l.className="transaction-item",l.innerHTML=`
      <div class="tx-emoji">${o.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${Xd(s.description)}
          ${a?`<button class="tx-image-btn" data-id="${s.id}" title="ดูสลิป">📷</button>`:""}
        </div>
        <div class="tx-meta">${o.label} · ${Yd(s.date)}</div>
      </div>
      <div class="tx-amount ${s.type}">
        ${s.type==="income"?"+":"-"}${Ge(s.amount)}
      </div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${s.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${s.id}" title="ลบ">🗑️</button>
      </div>`,r.appendChild(l)}),r.querySelectorAll(".tx-btn-edit").forEach(s=>s.addEventListener("click",()=>tf(s.dataset.id))),r.querySelectorAll(".tx-btn-delete").forEach(s=>s.addEventListener("click",()=>nf(s.dataset.id))),r.querySelectorAll(".tx-image-btn").forEach(s=>s.addEventListener("click",()=>ef(s.dataset.id)))}function ef(n){const e=ge.find(r=>r.id===n);if(!e?.imageData)return;const t=document.getElementById("slip-lightbox");document.getElementById("slip-lightbox-img").src=e.imageData,t.classList.add("active")}function du(n){Hd=n;const e=n==="split";document.getElementById("tx-list-view").style.display=e?"none":"",document.getElementById("tx-split-view").style.display=e?"":"none",document.getElementById("filter-type").style.display=e?"none":"",document.getElementById("btn-view-list").classList.toggle("active",!e),document.getElementById("btn-view-split").classList.toggle("active",e),Tr()}function fv(n,e){const t=document.getElementById("scale-beam"),r=document.getElementById("scale-pan-left"),s=document.getElementById("scale-pan-right"),o=document.getElementById("scale-verdict"),a=document.getElementById("scale-income-total"),l=document.getElementById("scale-expense-total");if(!t)return;const h=n.reduce((p,w)=>p+Number(w.amount),0),d=e.reduce((p,w)=>p+Number(w.amount),0),m=h+d;if(m===0)t.classList.add("idle"),r.classList.add("idle-left"),s.classList.add("idle-right"),t.style.transform="",r.style.transform="",s.style.transform="";else{t.classList.remove("idle"),r.classList.remove("idle-left"),s.classList.remove("idle-right");const p=(d-h)/m*22;t.style.transform=`rotate(${p}deg)`,r.style.transform=`rotate(${-p}deg)`,s.style.transform=`rotate(${-p}deg)`}if(r.classList.toggle("heavy",h>d),s.classList.toggle("heavy",d>h),a&&(a.textContent=Ge(h)),l&&(l.textContent=Ge(d)),o){const p=Math.abs(h-d);m===0?(o.textContent=O("tx.scale.noItems"),o.className="scale-verdict"):h>d?(o.textContent=`+${Ge(p)}`,o.className="scale-verdict positive"):d>h?(o.textContent=`-${Ge(p)}`,o.className="scale-verdict negative"):(o.textContent=O("tx.scale.equal"),o.className="scale-verdict")}}function fu(n){Gd=n,document.getElementById("btn-range-all").classList.toggle("active",n==="all"),document.getElementById("btn-range-cycle").classList.toggle("active",n==="cycle"),Tr()}function Ki(n){return Gd!=="cycle"?n:n.filter(e=>Zd(e.date))}function Tr(){const n=document.getElementById("filter-category").value;if(Hd==="split"){let e=Ki(ge.filter(r=>r.type==="income")).sort((r,s)=>new Date(s.date)-new Date(r.date)),t=Ki(ge.filter(r=>r.type==="expense")).sort((r,s)=>new Date(s.date)-new Date(r.date));n!=="all"&&(e=e.filter(r=>r.category===n),t=t.filter(r=>r.category===n)),fv(e,t),Qi("split-income-list",e,"empty-split-income"),Qi("split-expense-list",t,"empty-split-expense")}else{const e=document.getElementById("filter-type").value;let t=Ki([...ge]).sort((r,s)=>new Date(s.date)-new Date(r.date));e!=="all"&&(t=t.filter(r=>r.type===e)),n!=="all"&&(t=t.filter(r=>r.category===n)),Qi("all-list",t,"empty-all")}}function Qi(n,e,t){const r=document.getElementById(n);if(!r)return;if(r.innerHTML="",e.length===0){const o=document.getElementById(t);o?r.appendChild(o.cloneNode(!0)):r.innerHTML=`<div class="empty-state"><div class="empty-icon">📋</div><p>${O("tx.noItems")}</p></div>`;return}let s=null;e.forEach(o=>{const a=o.date?o.date.slice(0,10):"";if(a!==s){s=a;const p=document.createElement("div");p.className="timeline-date-header";const w=new Date(a+"T00:00:00");p.textContent=isNaN(w)?a:w.toLocaleDateString(bn(),{weekday:"short",year:"numeric",month:"short",day:"numeric"}),r.appendChild(p)}const l=Ra(o.type,o.category),h=document.createElement("div");h.className="transaction-item";const d=!!o.imageData,m=oe==="pro"&&d;h.innerHTML=`
      <div class="tx-emoji">${l.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${Xd(o.description)}
          ${d?`<button class="tx-image-btn" data-id="${o.id}" title="${O("slip.viewBtn")}">📷</button>`:""}
        </div>
        <div class="tx-meta">${l.label} · ${Yd(o.date)}</div>
        ${m?`<button class="tx-slip-link" data-id="${o.id}"><img src="${o.imageData}" alt="slip" class="tx-slip-thumb" loading="lazy">${O("slip.viewSlip")}</button>`:""}
      </div>
      <div class="tx-amount ${o.type}">${o.type==="income"?"+":"-"}${Ge(o.amount)}</div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${o.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${o.id}" title="ลบ">🗑️</button>
      </div>`,r.appendChild(h)}),r.querySelectorAll(".tx-btn-edit").forEach(o=>o.addEventListener("click",()=>tf(o.dataset.id))),r.querySelectorAll(".tx-btn-delete").forEach(o=>o.addEventListener("click",()=>nf(o.dataset.id))),r.querySelectorAll(".tx-image-btn, .tx-slip-link").forEach(o=>o.addEventListener("click",()=>ef(o.dataset.id)))}function mv(){mu("expense","category-breakdown"),mu("income","income-breakdown")}function pv(){const n=document.getElementById("dailyTrendChart");if(!n)return;let e,t;const r=document.getElementById("trends-free-notice"),s=document.getElementById("trends-title"),o=new Date;o.setHours(23,59,59,999);const a=Pa(),l=new Date(a.end);l.setDate(l.getDate()-1);const h=bn(),d=a.start.toLocaleDateString(h,{day:"numeric",month:"short"}),m=l.toLocaleDateString(h,{day:"numeric",month:"short"});if(oe==="pro")e=a.start,t=a.end>o?o:a.end,r&&(r.style.display="none"),s&&(s.textContent=O("trends.titleFull",{start:d,end:m}));else{t=new Date(o);const C=new Date(o);C.setDate(C.getDate()-29),C.setHours(0,0,0,0),e=a.start>=C?a.start:C,r&&(r.style.display=""),s&&(s.textContent=O("trends.titleFull",{start:d,end:m}))}const p=[],w=[],P=[],V=new Map;ge.forEach(C=>{const j=C.date?C.date.slice(0,10):null;if(!j)return;V.has(j)||V.set(j,{income:0,expense:0});const W=V.get(j);C.type==="income"?W.income+=Number(C.amount):W.expense+=Number(C.amount)});const L=new Date(e);for(;L<t;){const C=`${L.getFullYear()}-${String(L.getMonth()+1).padStart(2,"0")}-${String(L.getDate()).padStart(2,"0")}`;p.push(L.toLocaleDateString(bn(),{day:"numeric",month:"short"}));const j=V.get(C)||{income:0,expense:0};w.push(j.income),P.push(j.expense),L.setDate(L.getDate()+1)}if(et)if(et.data.labels.length!==p.length)et.destroy(),et=null;else{et.data.labels=p,et.data.datasets[0].data=w,et.data.datasets[1].data=P,et.update("none");return}et=new Chart(n,{type:"bar",data:{labels:p,datasets:[{label:O("trends.chart.income"),data:w,backgroundColor:"#16A34A",borderRadius:6},{label:O("trends.chart.expense"),data:P,backgroundColor:"#EF4444",borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:"#64748B",font:{family:"Noto Sans Thai",size:12}}},tooltip:{mode:"index",intersect:!1}},scales:{x:{grid:{display:!1},ticks:{color:"#64748B",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0,0,0,0.05)"},ticks:{color:"#64748B",font:{size:11},callback:C=>"฿"+C.toLocaleString()}}}}})}function mu(n,e){const t=document.getElementById(e),r=ge.filter(h=>h.type===n&&Zd(h.date));if(r.length===0){t.innerHTML=`<div class="empty-state"><div class="empty-icon">${n==="expense"?"📊":"💵"}</div><p>${O("analytics.noData")}</p></div>`;return}const s={};r.forEach(h=>{s[h.category]=(s[h.category]||0)+Number(h.amount)});const o=Object.entries(s).sort((h,d)=>d[1]-h[1]),a=o[0][1],l=JI[n];t.innerHTML="",o.forEach(([h,d],m)=>{const p=Ra(n,h),w=(d/a*100).toFixed(1),P=document.createElement("div");P.className="cat-item",P.innerHTML=`
      <div class="cat-emoji">${p.emoji}</div>
      <div class="cat-info">
        <div class="cat-name">${p.label}</div>
        <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${w}%;background:${l[m%l.length]};"></div></div>
      </div>
      <div class="cat-amount" style="color:${l[m%l.length]}">${Ge(d)}</div>`,t.appendChild(P)})}function Rn(){rr==="dashboard"?hv():rr==="transactions"?Tr():rr==="analytics"?mv():rr==="trends"&&pv()}function pu(){hr=null,document.getElementById("modal-title").textContent=O("modal.addTitle"),document.getElementById("submit-label").textContent=O("modal.addBtn"),document.getElementById("transaction-form").reset(),document.getElementById("edit-id").value="";const n=new Date;document.getElementById("input-date").value=new Date(n-n.getTimezoneOffset()*6e4).toISOString().slice(0,16),li(),wr("income"),Pn("modal-overlay")}function tf(n){const e=ge.find(t=>t.id===n);e&&(hr=n,document.getElementById("modal-title").textContent=O("modal.editTitle"),document.getElementById("submit-label").textContent=O("modal.editBtn"),document.getElementById("edit-id").value=n,document.getElementById("input-amount").value=e.amount,document.getElementById("input-description").value=e.description,document.getElementById("input-date").value=e.date,li(),wr(e.type),setTimeout(()=>{document.getElementById("input-category").value=e.category},0),Pn("modal-overlay"))}function wr(n){Ta=n,document.getElementById("type-income").classList.toggle("active",n==="income"),document.getElementById("type-expense").classList.toggle("active",n==="expense"),So(n)}function Pn(n){document.getElementById(n).classList.add("open")}function fe(n){document.getElementById(n).classList.remove("open")}function nf(n){_s=n,Pn("delete-overlay")}function bo(n=""){document.getElementById("upgrade-reason").textContent=n,Pn("upgrade-modal-overlay")}async function gv(n){n.preventDefault();const e=parseFloat(document.getElementById("input-amount").value),t=document.getElementById("input-description").value.trim(),r=document.getElementById("input-category").value,s=document.getElementById("input-date").value;if(!e||e<=0||!t||!r||!s){ne(O("toast.fieldRequired"),"error");return}const o=!!hr,a=document.getElementById("check-continue").checked,l=document.getElementById("btn-submit");l.disabled=!0;try{const h={type:Ta,amount:e,description:t,category:r,date:s,createdAt:new Date().toISOString(),imageData:oe==="pro"&&Fs?Fs:""};if(o)await Jd(hr,h),hr=null,ne(O("toast.editSaved")),fe("modal-overlay");else if(await ov(h),ne(O("toast.saved")),a){document.getElementById("input-amount").value="",document.getElementById("input-description").value="",li();const d=new Date;document.getElementById("input-date").value=new Date(d-d.getTimezoneOffset()*6e4).toISOString().slice(0,16),document.getElementById("input-amount").focus()}else fe("modal-overlay")}catch(h){ne("❌ "+h.message,"error")}finally{l.disabled=!1}}function gu(){document.getElementById("current-date").textContent=new Date().toLocaleDateString(bn(),{weekday:"short",year:"numeric",month:"short",day:"numeric"})}function li(){Wd=null,Kd=null,Fs=null;const n=document.getElementById("image-preview-container"),e=document.getElementById("image-preview");e.src="",n.style.display="none",document.getElementById("input-slip").value=""}function yv(n,e,t=800,r=.72){return new Promise(s=>{const o=new Image;o.onload=()=>{let{width:a,height:l}=o;(a>t||l>t)&&(a>l?(l=Math.round(l*t/a),a=t):(a=Math.round(a*t/l),l=t));const h=document.createElement("canvas");h.width=a,h.height=l,h.getContext("2d").drawImage(o,0,0,a,l),s(h.toDataURL("image/jpeg",r))},o.onerror=()=>s(`data:${e};base64,${n}`),o.src=`data:${e};base64,${n}`})}async function _v(n){const e=n.target.files[0];if(!e)return;const t=document.getElementById("scan-progress"),r=t.querySelector(".progress-bar"),s=t.querySelector(".progress-text");t.classList.add("active"),s.textContent=O("modal.prepareImg"),r.style.setProperty("--progress","10%");try{if(!await cv()){t.classList.remove("active"),document.getElementById("input-slip").value="";return}const a=await Ev(e),l=e.type||"image/jpeg";Wd=a,Kd=l,Fs=oe==="pro"?await yv(a,l,1200,.82):null;const h=document.getElementById("image-preview-container"),d=document.getElementById("image-preview");d.src=`data:${l};base64,${a}`,h.style.display="block",s.textContent=O("modal.analyzing"),r.style.setProperty("--progress","40%");const m=await fetch("/api/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base64Data:a,mimeType:l})});if(!m.ok){const w=await m.json().catch(()=>({}));throw new Error(w.error||`Server Error ${m.status}`)}const p=await m.json();r.style.setProperty("--progress","90%"),p.amount?(document.getElementById("input-amount").value=p.amount,p.description&&(document.getElementById("input-description").value=p.description),ne(O("toast.scanSuccess"))):ne(O("toast.scanNoAmount"),"error"),wr("expense"),r.style.setProperty("--progress","100%")}catch(o){console.error("Scan error:",o),ne(O("toast.scanError",{msg:o.message}),"error",6e3)}finally{setTimeout(()=>t.classList.remove("active"),500)}}function Ev(n){return new Promise((e,t)=>{const r=new FileReader;r.readAsDataURL(n),r.onload=()=>e(r.result.split(",")[1]),r.onerror=t})}function Ca(){const n=document.getElementById("btn-dev-toggle");if(!n)return;const e=lr.includes(pe?.email);n.style.display=e?"":"none",n.textContent=O(oe==="pro"?"dev.switchFree":"dev.switchPro")}function Iv(){lr.includes(pe?.email)&&(ur=oe==="pro"?"free":"pro",localStorage.setItem("mf_dev_plan",ur),oe=ur,ci(),Ca(),ne(O("dev.toasted")+(oe==="pro"?"Pro ⭐":"Free")))}async function vv(){if(ou.includes("YOUR_OMISE")){ne(O("toast.paymentSoon"),"error",4e3);return}window.OmiseCard||await new Promise((n,e)=>{const t=document.createElement("script");t.src="https://cdn.omise.co/omise.js",t.onload=n,t.onerror=e,document.head.appendChild(t)}),window.OmiseCard.configure({publicKey:ou}),window.OmiseCard.open({frameLabel:"MoneyFlow Pro",submitLabel:O("upgrade.pay"),currency:"THB",amount:7900,onCreateTokenSuccess:async n=>{try{Us(O("loading.payment")),fe("upgrade-modal-overlay");const t=await(await fetch("/api/payment-create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,uid:pe.uid,email:pe.email})})).json();t.success?(oe="pro",await ba({plan:"pro",pro_until:t.pro_until}),ci(),ne(O("toast.paymentSuccess"),"success",5e3)):ne(O("toast.paymentFail")+(t.error||""),"error")}catch(e){ne("❌ "+e.message,"error")}finally{tn()}},onFormClosed:()=>{}})}function yu(){const n=document.getElementById("changelog-body"),e={new:"✨",fix:"🐛",improve:"⚡"},t=bn();n.innerHTML=KI.map(r=>`
    <div class="cl-version">
      <div class="cl-version-header">
        <span class="cl-version-num">v${r.version}</span>
        <span class="cl-version-label">${r.label}</span>
        <span class="cl-version-date">${new Date(r.date).toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"})}</span>
      </div>
      <ul class="cl-list">
        ${r.changes.map(s=>`
          <li class="cl-item cl-${s.type}">
            <span class="cl-icon">${e[s.type]||"•"}</span>
            <span class="cl-tag ${s.type}">${O(`cl.${s.type}`)||s.type}</span>
            <span class="cl-text">${s.text}</span>
          </li>`).join("")}
      </ul>
    </div>`).join(""),document.getElementById("changelog-overlay").classList.add("open"),fe("settings-modal-overlay")}function Tv(){iu(),gu(),So("income"),hu();const n=document.getElementById("app-version");n&&(n.textContent="v"+WI),document.getElementById("btn-google-signin").addEventListener("click",tv),document.querySelectorAll(".nav-item, .bottom-nav-item").forEach(r=>r.addEventListener("click",()=>{uu(r.dataset.view),document.getElementById("sidebar").classList.remove("open")})),document.getElementById("see-all-btn").addEventListener("click",()=>uu("transactions")),document.getElementById("menu-toggle").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open")),document.addEventListener("click",r=>{const s=document.getElementById("sidebar"),o=document.getElementById("menu-toggle");window.innerWidth<=900&&s.classList.contains("open")&&!s.contains(r.target)&&r.target!==o&&s.classList.remove("open")}),document.getElementById("btn-open-modal").addEventListener("click",pu),document.getElementById("mobile-fab")?.addEventListener("click",pu),document.getElementById("type-income").addEventListener("click",()=>wr("income")),document.getElementById("type-expense").addEventListener("click",()=>wr("expense")),document.getElementById("modal-close").addEventListener("click",()=>fe("modal-overlay")),document.getElementById("modal-overlay").addEventListener("click",r=>{r.target===r.currentTarget&&fe("modal-overlay")}),document.getElementById("transaction-form").addEventListener("submit",gv),document.getElementById("delete-confirm").addEventListener("click",async()=>{if(!_s)return;const r=_s;_s=null,fe("delete-overlay");try{Us(O("loading.deleting")),await av(r),ne(O("toast.deleted"))}catch(s){ne(O("toast.deleteError")+s.message,"error")}finally{tn()}}),document.getElementById("delete-cancel").addEventListener("click",()=>fe("delete-overlay")),document.getElementById("delete-cancel-x").addEventListener("click",()=>fe("delete-overlay")),document.getElementById("delete-overlay").addEventListener("click",r=>{r.target===r.currentTarget&&fe("delete-overlay")}),document.getElementById("btn-clear-all").addEventListener("click",async()=>{if(ge.length===0){ne(O("toast.clearNone"),"error");return}if(confirm(O("confirm.clearAll"))){fe("settings-modal-overlay");try{Us(O("loading.clearing"));const r=zI(Ia);ge.forEach(s=>r.delete(xr(Br(),s.id))),await r.commit(),ne(O("toast.clearAll"))}catch(r){ne("❌ "+r.message,"error")}finally{tn()}}}),document.getElementById("filter-type").addEventListener("change",Tr),document.getElementById("filter-category").addEventListener("change",Tr),document.getElementById("btn-remove-image").addEventListener("click",li),document.getElementById("btn-open-settings").addEventListener("click",()=>{document.getElementById("input-cutoff-day").value=it,document.getElementById("select-language").value=Wi(),Pn("settings-modal-overlay")}),document.getElementById("settings-modal-close").addEventListener("click",()=>fe("settings-modal-overlay")),document.getElementById("settings-modal-overlay").addEventListener("click",r=>{r.target===r.currentTarget&&fe("settings-modal-overlay")}),document.getElementById("btn-save-settings").addEventListener("click",async()=>{const r=parseInt(document.getElementById("input-cutoff-day").value),s=document.getElementById("select-language").value;if(r<1||r>31||isNaN(r)){ne(O("toast.cutoffError"),"error");return}s!==Wi()&&(QI(s),iu(),gu(),So(Ta),hu(),at(document.getElementById("sync-badge").className.replace("sync-badge ","").trim()||"offline")),it=r,localStorage.setItem("mf_cutoff_day",it);try{await ba({cutoff_day:r}),ne(O("toast.settingsSaved"))}catch{ne(O("toast.settingsLocal"),"error")}fe("settings-modal-overlay"),Rn()}),document.getElementById("btn-upgrade").addEventListener("click",()=>bo()),document.getElementById("btn-trends-upgrade")?.addEventListener("click",()=>bo(O("trends.upgradeBtn"))),document.getElementById("upgrade-modal-close").addEventListener("click",()=>fe("upgrade-modal-overlay")),document.getElementById("upgrade-modal-overlay").addEventListener("click",r=>{r.target===r.currentTarget&&fe("upgrade-modal-overlay")}),document.getElementById("btn-pay-omise").addEventListener("click",vv),document.getElementById("btn-view-list")?.addEventListener("click",()=>du("list")),document.getElementById("btn-view-split")?.addEventListener("click",()=>du("split")),document.getElementById("btn-range-all")?.addEventListener("click",()=>fu("all")),document.getElementById("btn-range-cycle")?.addEventListener("click",()=>fu("cycle"));const e=document.getElementById("btn-dev-toggle");e&&e.addEventListener("click",Iv),document.getElementById("btn-signout").addEventListener("click",au),document.getElementById("btn-signout-settings")?.addEventListener("click",au),document.getElementById("mobile-btn-updates")?.addEventListener("click",yu),document.getElementById("mobile-btn-settings")?.addEventListener("click",()=>{document.getElementById("input-cutoff-day").value=it,document.getElementById("select-language").value=Wi(),Pn("settings-modal-overlay")}),document.getElementById("btn-changelog").addEventListener("click",yu),document.getElementById("changelog-close").addEventListener("click",()=>fe("changelog-overlay")),document.getElementById("changelog-overlay").addEventListener("click",r=>{r.target===r.currentTarget&&fe("changelog-overlay")});const t=()=>document.getElementById("slip-lightbox").classList.remove("active");document.getElementById("slip-lightbox-close").addEventListener("click",t),document.getElementById("slip-lightbox-backdrop").addEventListener("click",t),document.getElementById("btn-scan").addEventListener("click",()=>document.getElementById("input-slip").click()),document.getElementById("input-slip").addEventListener("change",_v),ge.length>0&&Rn()}Tv();
