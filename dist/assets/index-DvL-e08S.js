(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const _m=()=>{};var nl={};/**
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
 */const Hu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Em=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let T=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(T=64)),r.push(t[f],t[p],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Em(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||p==null)throw new vm;const T=i<<2|l>>4;if(r.push(T),d!==64){const R=l<<4&240|d>>2;if(r.push(R),p!==64){const k=d<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Im=function(n){const e=Hu(n);return zu.encodeByteArray(e,!0)},Hs=function(n){return Im(n).replace(/\./g,"")},Gu=function(n){try{return zu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wm=()=>Tm().__FIREBASE_DEFAULTS__,Am=()=>{if(typeof process>"u"||typeof nl>"u")return;const n=nl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gu(n[1]);return e&&JSON.parse(e)},hi=()=>{try{return _m()||wm()||Am()||bm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wu=n=>hi()?.emulatorHosts?.[n],Sm=n=>{const e=Wu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ku=()=>hi()?.config,Qu=n=>hi()?.[`_${n}`];/**
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
 */class Rm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Pm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Hs(JSON.stringify(t)),Hs(JSON.stringify(a)),""].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function km(){const n=hi()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lm(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xm(){return!km()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Om(){try{return typeof indexedDB=="object"}catch{return!1}}function Mm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Bm="FirebaseError";class It extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bm,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Fm(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new It(s,l,r)}}function Fm(n,e){return n.replace(Um,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Um=/\{\$([^}]+)}/g;function $m(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ln(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(rl(i)&&rl(a)){if(!ln(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function rl(n){return n!==null&&typeof n=="object"}/**
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
 */function Hr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jm(n,e){const t=new qm(n,e);return t.subscribe.bind(t)}class qm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=lo),s.error===void 0&&(s.error=lo),s.complete===void 0&&(s.complete=lo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lo(){}/**
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
 */function pe(n){return n&&n._delegate?n._delegate:n}/**
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
 */function zr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ju(n){return(await fetch(n,{credentials:"include"})).ok}class un{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rn="[DEFAULT]";/**
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
 */class zm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Rm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wm(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rn){return this.instances.has(e)}getOptions(e=rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rn){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gm(n){return n===rn?void 0:n}function Wm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Km{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Qm={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Jm=Q.INFO,Ym={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Xm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ym[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sa{constructor(e){this.name=e,this._logLevel=Jm,this._logHandler=Xm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Zm=(n,e)=>e.some(t=>n instanceof t);let sl,il;function ep(){return sl||(sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tp(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yu=new WeakMap,Ro=new WeakMap,Xu=new WeakMap,uo=new WeakMap,ia=new WeakMap;function np(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Nt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Yu.set(t,n)}).catch(()=>{}),ia.set(e,n),e}function rp(n){if(Ro.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ro.set(n,e)}let Po={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ro.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Xu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sp(n){Po=n(Po)}function ip(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ho(this),e,...t);return Xu.set(r,e.sort?e.sort():[e]),Nt(r)}:tp().includes(n)?function(...e){return n.apply(ho(this),e),Nt(Yu.get(this))}:function(...e){return Nt(n.apply(ho(this),e))}}function op(n){return typeof n=="function"?ip(n):(n instanceof IDBTransaction&&rp(n),Zm(n,ep())?new Proxy(n,Po):n)}function Nt(n){if(n instanceof IDBRequest)return np(n);if(uo.has(n))return uo.get(n);const e=op(n);return e!==n&&(uo.set(n,e),ia.set(e,n)),e}const ho=n=>ia.get(n);function ap(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Nt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Nt(a.result),u.oldVersion,u.newVersion,Nt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const cp=["get","getKey","getAll","getAllKeys","count"],lp=["put","add","delete","clear"],fo=new Map;function ol(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fo.get(e))return fo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=lp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cp.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return fo.set(e,i),i}sp(n=>({...n,get:(e,t,r)=>ol(e,t)||n.get(e,t,r),has:(e,t)=>!!ol(e,t)||n.has(e,t)}));/**
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
 */class up{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function hp(n){return n.getComponent()?.type==="VERSION"}const Co="@firebase/app",al="0.14.12";/**
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
 */const gt=new sa("@firebase/app"),dp="@firebase/app-compat",fp="@firebase/analytics-compat",mp="@firebase/analytics",pp="@firebase/app-check-compat",gp="@firebase/app-check",yp="@firebase/auth",_p="@firebase/auth-compat",Ep="@firebase/database",vp="@firebase/data-connect",Ip="@firebase/database-compat",Tp="@firebase/functions",wp="@firebase/functions-compat",Ap="@firebase/installations",bp="@firebase/installations-compat",Sp="@firebase/messaging",Rp="@firebase/messaging-compat",Pp="@firebase/performance",Cp="@firebase/performance-compat",kp="@firebase/remote-config",Dp="@firebase/remote-config-compat",Np="@firebase/storage",Vp="@firebase/storage-compat",Lp="@firebase/firestore",xp="@firebase/ai",Op="@firebase/firestore-compat",Mp="firebase",Bp="12.13.0";/**
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
 */const ko="[DEFAULT]",Fp={[Co]:"fire-core",[dp]:"fire-core-compat",[mp]:"fire-analytics",[fp]:"fire-analytics-compat",[gp]:"fire-app-check",[pp]:"fire-app-check-compat",[yp]:"fire-auth",[_p]:"fire-auth-compat",[Ep]:"fire-rtdb",[vp]:"fire-data-connect",[Ip]:"fire-rtdb-compat",[Tp]:"fire-fn",[wp]:"fire-fn-compat",[Ap]:"fire-iid",[bp]:"fire-iid-compat",[Sp]:"fire-fcm",[Rp]:"fire-fcm-compat",[Pp]:"fire-perf",[Cp]:"fire-perf-compat",[kp]:"fire-rc",[Dp]:"fire-rc-compat",[Np]:"fire-gcs",[Vp]:"fire-gcs-compat",[Lp]:"fire-fst",[Op]:"fire-fst-compat",[xp]:"fire-vertex","fire-js":"fire-js",[Mp]:"fire-js-all"};/**
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
 */const zs=new Map,Up=new Map,Do=new Map;function cl(n,e){try{n.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function On(n){const e=n.name;if(Do.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Do.set(e,n);for(const t of zs.values())cl(t,n);for(const t of Up.values())cl(t,n);return!0}function oa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $p={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new qr("app","Firebase",$p);/**
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
 */class jp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=Bp;function Zu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ko,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(t||(t=Ku()),!t)throw Vt.create("no-options");const i=zs.get(s);if(i){if(ln(t,i.options)&&ln(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const a=new Km(s);for(const u of Do.values())a.addComponent(u);const l=new jp(t,r,a);return zs.set(s,l),l}function eh(n=ko){const e=zs.get(n);if(!e&&n===ko&&Ku())return Zu();if(!e)throw Vt.create("no-app",{appName:n});return e}function Lt(n,e,t){let r=Fp[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(a.join(" "));return}On(new un(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const qp="firebase-heartbeat-database",Hp=1,Nr="firebase-heartbeat-store";let mo=null;function th(){return mo||(mo=ap(qp,Hp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),mo}async function zp(n){try{const t=(await th()).transaction(Nr),r=await t.objectStore(Nr).get(nh(n));return await t.done,r}catch(e){if(e instanceof It)gt.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e?.message});gt.warn(t.message)}}}async function ll(n,e){try{const r=(await th()).transaction(Nr,"readwrite");await r.objectStore(Nr).put(e,nh(n)),await r.done}catch(t){if(t instanceof It)gt.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t?.message});gt.warn(r.message)}}}function nh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gp=1024,Wp=30;class Kp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ul();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Wp){const s=Yp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){gt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ul(),{heartbeatsToSend:t,unsentEntries:r}=Qp(this._heartbeatsCache.heartbeats),s=Hs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return gt.warn(e),""}}}function ul(){return new Date().toISOString().substring(0,10)}function Qp(n,e=Gp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),hl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),hl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Om()?Mm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ll(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ll(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hl(n){return Hs(JSON.stringify({version:2,heartbeats:n})).length}function Yp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Xp(n){On(new un("platform-logger",e=>new up(e),"PRIVATE")),On(new un("heartbeat",e=>new Kp(e),"PRIVATE")),Lt(Co,al,n),Lt(Co,al,"esm2020"),Lt("fire-js","")}Xp("");var Zp="firebase",eg="12.13.0";/**
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
 */Lt(Zp,eg,"app");function rh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tg=rh,sh=new qr("auth","Firebase",rh());/**
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
 */const Gs=new sa("@firebase/auth");function ng(n,...e){Gs.logLevel<=Q.WARN&&Gs.warn(`Auth (${zn}): ${n}`,...e)}function Ds(n,...e){Gs.logLevel<=Q.ERROR&&Gs.error(`Auth (${zn}): ${n}`,...e)}/**
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
 */function st(n,...e){throw ca(n,...e)}function Ge(n,...e){return ca(n,...e)}function aa(n,e,t){const r={...tg(),[e]:t};return new qr("auth","Firebase",r).create(e,{appName:n.name})}function an(n){return aa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(n,"argument-error"),aa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ca(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return sh.create(n,...e)}function F(n,e,...t){if(!n)throw ca(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ds(e),new Error(e)}function yt(n,e){n||ut(e)}/**
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
 */function No(){return typeof self<"u"&&self.location?.href||""}function sg(){return dl()==="http:"||dl()==="https:"}function dl(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function ig(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sg()||Nm()||"connection"in navigator)?navigator.onLine:!0}function og(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Gr{constructor(e,t){this.shortDelay=e,this.longDelay=t,yt(t>e,"Short delay should be less than long delay!"),this.isMobile=Cm()||Vm()}get(){return ig()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function la(n,e){yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ih{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ag={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lg=new Gr(3e4,6e4);function ua(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Gn(n,e,t,r,s={}){return oh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Hr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return Dm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&zr(n.emulatorConfig.host)&&(d.credentials="include"),ih.fetch()(await ah(n,n.config.apiHost,t,l),d)})}async function oh(n,e,t){n._canInitEmulator=!1;const r={...ag,...e};try{const s=new hg(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ws(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ws(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ws(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ws(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw aa(n,f,d);st(n,f)}}catch(s){if(s instanceof It)throw s;st(n,"network-request-failed",{message:String(s)})}}async function ug(n,e,t,r,s={}){const i=await Gn(n,e,t,r,s);return"mfaPendingCredential"in i&&st(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ah(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?la(n.config,s):`${n.config.apiScheme}://${s}`;return cg.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class hg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),lg.get())})}}function ws(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function dg(n,e){return Gn(n,"POST","/v1/accounts:delete",e)}async function Ws(n,e){return Gn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function wr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fg(n,e=!1){const t=pe(n),r=await t.getIdToken(e),s=ha(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:wr(po(s.auth_time)),issuedAtTime:wr(po(s.iat)),expirationTime:wr(po(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function po(n){return Number(n)*1e3}function ha(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ds("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gu(t);return s?JSON.parse(s):(Ds("Failed to decode base64 JWT payload"),null)}catch(s){return Ds("Caught error parsing JWT payload as JSON",s?.toString()),null}}function fl(n){const e=ha(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof It&&mg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class pg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ks(n){const e=n.auth,t=await n.getIdToken(),r=await Vr(n,Ws(e,{idToken:t}));F(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?ch(s.providerUserInfo):[],a=yg(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function gg(n){const e=pe(n);await Ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ch(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function _g(n,e){const t=await oh(n,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ah(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&zr(n.emulatorConfig.host)&&(u.credentials="include"),ih.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Eg(n,e){return Gn(n,"POST","/v2/accounts:revokeToken",ua(n,e))}/**
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
 */class Rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=fl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await _g(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Rn;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
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
 */function Pt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class He{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new pg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fg(this,e)}reload(){return gg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ks(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(an(this.auth));const e=await this.getIdToken();return await Vr(this,dg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:T,isAnonymous:R,providerData:k,stsTokenManager:N}=t;F(p&&N,e,"internal-error");const C=Rn.fromJSON(this.name,N);F(typeof p=="string",e,"internal-error"),Pt(r,e.name),Pt(s,e.name),F(typeof T=="boolean",e,"internal-error"),F(typeof R=="boolean",e,"internal-error"),Pt(i,e.name),Pt(a,e.name),Pt(l,e.name),Pt(u,e.name),Pt(d,e.name),Pt(f,e.name);const j=new He({uid:p,auth:e,email:s,emailVerified:T,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:d,lastLoginAt:f});return k&&Array.isArray(k)&&(j.providerData=k.map(K=>({...K}))),u&&(j._redirectEventId=u),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new Rn;s.updateFromServerResponse(t);const i=new He({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ks(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ch(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Rn;l.updateFromIdToken(r);const u=new He({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
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
 */const ml=new Map;function ht(n){yt(n instanceof Function,"Expected a class definition");let e=ml.get(n);return e?(yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ml.set(n,e),e)}/**
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
 */class lh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lh.type="NONE";const pl=lh;/**
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
 */function Ns(n,e,t){return`firebase:${n}:${e}:${t}`}class Pn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ns(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ns("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ws(this.auth,{idToken:e}).catch(()=>{});return t?He._fromGetAccountInfoResponse(this.auth,t,e):null}return He._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Pn(ht(pl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ht(pl);const a=Ns(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){let p;if(typeof f=="string"){const T=await Ws(e,{idToken:f}).catch(()=>{});if(!T)break;p=await He._fromGetAccountInfoResponse(e,T,f)}else p=He._fromJSON(e,f);d!==i&&(l=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Pn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Pn(i,e,r))}}/**
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
 */function gl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ph(e))return"Blackberry";if(gh(e))return"Webos";if(hh(e))return"Safari";if((e.includes("chrome/")||dh(e))&&!e.includes("edge/"))return"Chrome";if(mh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function uh(n=Ce()){return/firefox\//i.test(n)}function hh(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dh(n=Ce()){return/crios\//i.test(n)}function fh(n=Ce()){return/iemobile/i.test(n)}function mh(n=Ce()){return/android/i.test(n)}function ph(n=Ce()){return/blackberry/i.test(n)}function gh(n=Ce()){return/webos/i.test(n)}function da(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vg(n=Ce()){return da(n)&&!!window.navigator?.standalone}function Ig(){return Lm()&&document.documentMode===10}function yh(n=Ce()){return da(n)||mh(n)||gh(n)||ph(n)||/windows phone/i.test(n)||fh(n)}/**
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
 */function _h(n,e=[]){let t;switch(n){case"Browser":t=gl(Ce());break;case"Worker":t=`${gl(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zn}/${r}`}/**
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
 */class Tg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function wg(n,e={}){return Gn(n,"GET","/v2/passwordPolicy",ua(n,e))}/**
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
 */const Ag=6;class bg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ag,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Sg{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yl(this),this.idTokenSubscription=new yl(this),this.beforeStateQueue=new Tg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ws(this,{idToken:e}),r=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qe(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ks(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=og()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(an(this));const t=e?pe(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(an(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(an(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wg(this),t=new bg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Eg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_h(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ng(`Error while retrieving App Check token: ${e.error}`),e?.token}}function di(n){return pe(n)}class yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=jm(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rg(n){fa=n}function Pg(n){return fa.loadJS(n)}function Cg(){return fa.gapiScript}function kg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Dg(n,e){const t=oa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ln(i,e??{}))return s;st(s,"already-initialized")}return t.initialize({options:e})}function Ng(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ht);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Vg(n,e,t){const r=di(n);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Eh(e),{host:a,port:l}=Lg(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(ln(d,r.config.emulator)&&ln(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,zr(a)?Ju(`${i}//${a}${u}`):xg()}function Eh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Lg(n){const e=Eh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_l(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:_l(a)}}}function _l(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class vh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
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
 */async function Cn(n,e){return ug(n,"POST","/v1/accounts:signInWithIdp",ua(n,e))}/**
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
 */const Og="http://localhost";class hn extends vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new hn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Cn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Cn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cn(e,t)}buildRequest(){const e={requestUri:Og,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hr(t)}return e}}/**
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
 */class ma{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wr extends ma{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ct extends Wr{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
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
 */class lt extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hn._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return lt.credential(t,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
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
 */class kt extends Wr{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Dt extends Wr{constructor(){super("twitter.com")}static credential(e,t){return hn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Dt.credential(t,r)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
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
 */class Mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await He._fromIdTokenResponse(e,r,s),a=El(r);return new Mn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=El(r);return new Mn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function El(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qs extends It{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Qs(e,t,r,s)}}function Ih(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(n,i,e,r):i})}async function Mg(n,e,t=!1){const r=await Vr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mn._forOperation(n,"link",r)}/**
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
 */async function Bg(n,e,t=!1){const{auth:r}=n;if(qe(r.app))return Promise.reject(an(r));const s="reauthenticate";try{const i=await Vr(n,Ih(r,s,e,n),t);F(i.idToken,r,"internal-error");const a=ha(i.idToken);F(a,r,"internal-error");const{sub:l}=a;return F(n.uid===l,r,"user-mismatch"),Mn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&st(r,"user-mismatch"),i}}/**
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
 */async function Fg(n,e,t=!1){if(qe(n.app))return Promise.reject(an(n));const r="signIn",s=await Ih(n,r,e),i=await Mn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Ug(n,e,t,r){return pe(n).onIdTokenChanged(e,t,r)}function $g(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}function jg(n,e,t,r){return pe(n).onAuthStateChanged(e,t,r)}function qg(n){return pe(n).signOut()}const Js="__sak";/**
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
 */class Th{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Js,"1"),this.storage.removeItem(Js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Hg=1e3,zg=10;class wh extends Th{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ig()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Hg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wh.type="LOCAL";const Gg=wh;/**
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
 */class Ah extends Th{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ah.type="SESSION";const bh=Ah;/**
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
 */function Wg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new fi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await Wg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fi.receivers=[];/**
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
 */function pa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Kg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=pa("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const T=p;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(T.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function et(){return window}function Qg(n){et().location.href=n}/**
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
 */function Sh(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function Jg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yg(){return navigator?.serviceWorker?.controller||null}function Xg(){return Sh()?self:null}/**
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
 */const Rh="firebaseLocalStorageDb",Zg=1,Ys="firebaseLocalStorage",Ph="fbase_key";class Kr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mi(n,e){return n.transaction([Ys],e?"readwrite":"readonly").objectStore(Ys)}function ey(){const n=indexedDB.deleteDatabase(Rh);return new Kr(n).toPromise()}function Lo(){const n=indexedDB.open(Rh,Zg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ys,{keyPath:Ph})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ys)?e(r):(r.close(),await ey(),e(await Lo()))})})}async function vl(n,e,t){const r=mi(n,!0).put({[Ph]:e,value:t});return new Kr(r).toPromise()}async function ty(n,e){const t=mi(n,!1).get(e),r=await new Kr(t).toPromise();return r===void 0?null:r.value}function Il(n,e){const t=mi(n,!0).delete(e);return new Kr(t).toPromise()}const ny=800,ry=3;class Ch{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ry)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fi._getInstance(Xg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Jg(),!this.activeServiceWorker)return;this.sender=new Kg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lo();return await vl(e,Js,"1"),await Il(e,Js),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>vl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ty(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Il(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mi(s,!1).getAll();return new Kr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ny)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ch.type="LOCAL";const sy=Ch;new Gr(3e4,6e4);/**
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
 */function kh(n,e){return e?ht(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ga extends vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iy(n){return Fg(n.auth,new ga(n),n.bypassAuthState)}function oy(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Bg(t,new ga(n),n.bypassAuthState)}async function ay(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Mg(t,new ga(n),n.bypassAuthState)}/**
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
 */class Dh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iy;case"linkViaPopup":case"linkViaRedirect":return ay;case"reauthViaPopup":case"reauthViaRedirect":return oy;default:st(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cy=new Gr(2e3,1e4);async function ly(n,e,t){if(qe(n.app))return Promise.reject(Ge(n,"operation-not-supported-in-this-environment"));const r=di(n);rg(n,e,ma);const s=kh(r,t);return new sn(r,"signInViaPopup",e,s).executeNotNull()}class sn extends Dh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cy.get())};e()}}sn.currentPopupAction=null;/**
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
 */const uy="pendingRedirect",Vs=new Map;class hy extends Dh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vs.get(this.auth._key());if(!e){try{const r=await dy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vs.set(this.auth._key(),e)}return this.bypassAuthState||Vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dy(n,e){const t=py(e),r=my(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function fy(n,e){Vs.set(n._key(),e)}function my(n){return ht(n._redirectPersistence)}function py(n){return Ns(uy,n.config.apiKey,n.name)}async function gy(n,e,t=!1){if(qe(n.app))return Promise.reject(an(n));const r=di(n),s=kh(r,e),a=await new hy(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const yy=10*60*1e3;class _y{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ey(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Nh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ge(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tl(e))}saveEventToCache(e){this.cachedEventUids.add(Tl(e)),this.lastProcessedEventTime=Date.now()}}function Tl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Ey(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nh(n);default:return!1}}/**
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
 */async function vy(n,e={}){return Gn(n,"GET","/v1/projects",e)}/**
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
 */const Iy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ty=/^https?/;async function wy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vy(n);for(const t of e)try{if(Ay(t))return}catch{}st(n,"unauthorized-domain")}function Ay(n){const e=No(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ty.test(t))return!1;if(Iy.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const by=new Gr(3e4,6e4);function wl(){const n=et().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sy(n){return new Promise((e,t)=>{function r(){wl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wl(),t(Ge(n,"network-request-failed"))},timeout:by.get()})}if(et().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(et().gapi?.load)r();else{const s=kg("iframefcb");return et()[s]=()=>{gapi.load?r():t(Ge(n,"network-request-failed"))},Pg(`${Cg()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Ls=null,e})}let Ls=null;function Ry(n){return Ls=Ls||Sy(n),Ls}/**
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
 */const Py=new Gr(5e3,15e3),Cy="__/auth/iframe",ky="emulator/auth/iframe",Dy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ny=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vy(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?la(e,ky):`https://${n.config.authDomain}/${Cy}`,r={apiKey:e.apiKey,appName:n.name,v:zn},s=Ny.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Hr(r).slice(1)}`}async function Ly(n){const e=await Ry(n),t=et().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:Vy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ge(n,"network-request-failed"),l=et().setTimeout(()=>{i(a)},Py.get());function u(){et().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const xy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oy=500,My=600,By="_blank",Fy="http://localhost";class Al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uy(n,e,t,r=Oy,s=My){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...xy,width:r.toString(),height:s.toString(),top:i,left:a},d=Ce().toLowerCase();t&&(l=dh(d)?By:t),uh(d)&&(e=e||Fy,u.scrollbars="yes");const f=Object.entries(u).reduce((T,[R,k])=>`${T}${R}=${k},`,"");if(vg(d)&&l!=="_self")return $y(e||"",l),new Al(null);const p=window.open(e||"",l,f);F(p,n,"popup-blocked");try{p.focus()}catch{}return new Al(p)}function $y(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const jy="__/auth/handler",qy="emulator/auth/handler",Hy=encodeURIComponent("fac");async function bl(n,e,t,r,s,i){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:zn,eventId:s};if(e instanceof ma){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",$m(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Wr){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${Hy}=${encodeURIComponent(u)}`:"";return`${zy(n)}?${Hr(l).slice(1)}${d}`}function zy({config:n}){return n.emulator?la(n,qy):`https://${n.authDomain}/${jy}`}/**
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
 */const go="webStorageSupport";class Gy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bh,this._completeRedirectFn=gy,this._overrideRedirectResult=fy}async _openPopup(e,t,r,s){yt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await bl(e,t,r,No(),s);return Uy(e,i,pa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await bl(e,t,r,No(),s);return Qg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ly(e),r=new _y(e);return t.register("authEvent",s=>(F(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(go,{type:go},s=>{const i=s?.[0]?.[go];i!==void 0&&t(!!i),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yh()||hh()||da()}}const Wy=Gy;var Sl="@firebase/auth",Rl="1.13.1";/**
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
 */class Ky{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jy(n){On(new un("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_h(n)},d=new Sg(r,s,i,u);return Ng(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),On(new un("auth-internal",e=>{const t=di(e.getProvider("auth").getImmediate());return(r=>new Ky(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(Sl,Rl,Qy(n)),Lt(Sl,Rl,"esm2020")}/**
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
 */const Yy=5*60,Xy=Qu("authIdTokenMaxAge")||Yy;let Pl=null;const Zy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Xy)return;const s=t?.token;Pl!==s&&(Pl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function e_(n=eh()){const e=oa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Dg(n,{popupRedirectResolver:Wy,persistence:[sy,Gg,bh]}),r=Qu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Zy(i.toString());$g(t,a,()=>a(t.currentUser)),Ug(t,l=>a(l))}}const s=Wu("auth");return s&&Vg(t,`http://${s}`),t}function t_(){return document.getElementsByTagName("head")?.[0]??document}Rg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",t_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jy("Browser");var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xt,Vh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.F=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(I,v,A){for(var y=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)y[xe-2]=arguments[xe];return g.prototype[v].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,_){_||(_=0);const I=Array(16);if(typeof g=="string")for(var v=0;v<16;++v)I[v]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(v=0;v<16;++v)I[v]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],v=E.g[2];let A=E.g[3],y;y=g+(A^_&(v^A))+I[0]+3614090360&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(v^g&(_^v))+I[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=v+(_^A&(g^_))+I[2]+606105819&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(g^v&(A^g))+I[3]+3250441966&4294967295,_=v+(y<<22&4294967295|y>>>10),y=g+(A^_&(v^A))+I[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(v^g&(_^v))+I[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=v+(_^A&(g^_))+I[6]+2821735955&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(g^v&(A^g))+I[7]+4249261313&4294967295,_=v+(y<<22&4294967295|y>>>10),y=g+(A^_&(v^A))+I[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(v^g&(_^v))+I[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=v+(_^A&(g^_))+I[10]+4294925233&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(g^v&(A^g))+I[11]+2304563134&4294967295,_=v+(y<<22&4294967295|y>>>10),y=g+(A^_&(v^A))+I[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(v^g&(_^v))+I[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=v+(_^A&(g^_))+I[14]+2792965006&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(g^v&(A^g))+I[15]+1236535329&4294967295,_=v+(y<<22&4294967295|y>>>10),y=g+(v^A&(_^v))+I[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(g^_))+I[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=v+(g^_&(A^g))+I[11]+643717713&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(v^A))+I[0]+3921069994&4294967295,_=v+(y<<20&4294967295|y>>>12),y=g+(v^A&(_^v))+I[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(g^_))+I[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=v+(g^_&(A^g))+I[15]+3634488961&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(v^A))+I[4]+3889429448&4294967295,_=v+(y<<20&4294967295|y>>>12),y=g+(v^A&(_^v))+I[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(g^_))+I[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=v+(g^_&(A^g))+I[3]+4107603335&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(v^A))+I[8]+1163531501&4294967295,_=v+(y<<20&4294967295|y>>>12),y=g+(v^A&(_^v))+I[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(g^_))+I[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=v+(g^_&(A^g))+I[7]+1735328473&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(v^A))+I[12]+2368359562&4294967295,_=v+(y<<20&4294967295|y>>>12),y=g+(_^v^A)+I[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^v)+I[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=v+(A^g^_)+I[11]+1839030562&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^g)+I[14]+4259657740&4294967295,_=v+(y<<23&4294967295|y>>>9),y=g+(_^v^A)+I[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^v)+I[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=v+(A^g^_)+I[7]+4139469664&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^g)+I[10]+3200236656&4294967295,_=v+(y<<23&4294967295|y>>>9),y=g+(_^v^A)+I[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^v)+I[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=v+(A^g^_)+I[3]+3572445317&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^g)+I[6]+76029189&4294967295,_=v+(y<<23&4294967295|y>>>9),y=g+(_^v^A)+I[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^v)+I[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=v+(A^g^_)+I[15]+530742520&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^g)+I[2]+3299628645&4294967295,_=v+(y<<23&4294967295|y>>>9),y=g+(v^(_|~A))+I[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~v))+I[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=v+(g^(A|~_))+I[14]+2878612391&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~g))+I[5]+4237533241&4294967295,_=v+(y<<21&4294967295|y>>>11),y=g+(v^(_|~A))+I[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~v))+I[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=v+(g^(A|~_))+I[10]+4293915773&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~g))+I[1]+2240044497&4294967295,_=v+(y<<21&4294967295|y>>>11),y=g+(v^(_|~A))+I[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~v))+I[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=v+(g^(A|~_))+I[6]+2734768916&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~g))+I[13]+1309151649&4294967295,_=v+(y<<21&4294967295|y>>>11),y=g+(v^(_|~A))+I[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~v))+I[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=v+(g^(A|~_))+I[2]+718787259&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~g))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,g){g===void 0&&(g=E.length);const _=g-this.blockSize,I=this.C;let v=this.h,A=0;for(;A<g;){if(v==0)for(;A<=_;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(I[v++]=E.charCodeAt(A++),v==this.blockSize){s(this,I),v=0;break}}else for(;A<g;)if(I[v++]=E[A++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=g},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)E[g++]=this.g[_]>>>I&255;return E};function i(E,g){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;const _=[];let I=!0;for(let v=E.length-1;v>=0;v--){const A=E[v]|0;I&&A==g||(_[v]=A,I=!1)}this.g=_}var l={};function u(E){return-128<=E&&E<128?i(E,function(g){return new a([g|0],g<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return C(d(-E));const g=[];let _=1;for(let I=0;E>=_;I++)g[I]=E/_|0,_*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return C(f(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let I=p;for(let A=0;A<E.length;A+=8){var v=Math.min(8,E.length-A);const y=parseInt(E.substring(A,A+v),g);v<8?(v=d(Math.pow(g,v)),I=I.j(v).add(d(y))):(I=I.j(_),I=I.add(d(y)))}return I}var p=u(0),T=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-C(this).m();let E=0,g=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);E+=(I>=0?I:4294967296+I)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(N(this))return"-"+C(this).toString(E);const g=d(Math.pow(E,6));var _=this;let I="";for(;;){const v=Ie(_,g).g;_=j(_,v.j(g));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=v,k(_))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function N(E){return E.h==-1}n.l=function(E){return E=j(this,E),N(E)?-1:k(E)?0:1};function C(E){const g=E.g.length,_=[];for(let I=0;I<g;I++)_[I]=~E.g[I];return new a(_,~E.h).add(T)}n.abs=function(){return N(this)?C(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),_=[];let I=0;for(let v=0;v<=g;v++){let A=I+(this.i(v)&65535)+(E.i(v)&65535),y=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);I=y>>>16,A&=65535,y&=65535,_[v]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(E,g){return E.add(C(g))}n.j=function(E){if(k(this)||k(E))return p;if(N(this))return N(E)?C(this).j(C(E)):C(C(this).j(E));if(N(E))return C(this.j(C(E)));if(this.l(R)<0&&E.l(R)<0)return d(this.m()*E.m());const g=this.g.length+E.g.length,_=[];for(var I=0;I<2*g;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<E.g.length;v++){const A=this.i(I)>>>16,y=this.i(I)&65535,xe=E.i(v)>>>16,Yt=E.i(v)&65535;_[2*I+2*v]+=y*Yt,K(_,2*I+2*v),_[2*I+2*v+1]+=A*Yt,K(_,2*I+2*v+1),_[2*I+2*v+1]+=y*xe,K(_,2*I+2*v+1),_[2*I+2*v+2]+=A*xe,K(_,2*I+2*v+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new a(_,0)};function K(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function Z(E,g){this.g=E,this.h=g}function Ie(E,g){if(k(g))throw Error("division by zero");if(k(E))return new Z(p,p);if(N(E))return g=Ie(C(E),g),new Z(C(g.g),C(g.h));if(N(g))return g=Ie(E,C(g)),new Z(C(g.g),g.h);if(E.g.length>30){if(N(E)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var _=T,I=g;I.l(E)<=0;)_=Be(_),I=Be(I);var v=M(_,1),A=M(I,1);for(I=M(I,2),_=M(_,2);!k(I);){var y=A.add(I);y.l(E)<=0&&(v=v.add(_),A=y),I=M(I,1),_=M(_,1)}return g=j(E,v.j(g)),new Z(v,g)}for(v=p;E.l(g)>=0;){for(_=Math.max(1,Math.floor(E.m()/g.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(_),y=A.j(g);N(y)||y.l(E)>0;)_-=I,A=d(_),y=A.j(g);k(A)&&(A=T),v=v.add(A),E=j(E,y)}return new Z(v,E)}n.B=function(E){return Ie(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)&E.i(I);return new a(_,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)|E.i(I);return new a(_,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)^E.i(I);return new a(_,this.h^E.h)};function Be(E){const g=E.g.length+1,_=[];for(let I=0;I<g;I++)_[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(_,E.h)}function M(E,g){const _=g>>5;g%=32;const I=E.g.length-_,v=[];for(let A=0;A<I;A++)v[A]=g>0?E.i(A+_)>>>g|E.i(A+_+1)<<32-g:E.i(A+_);return new a(v,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Vh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,xt=a}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});var As=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lh,_r,xh,xs,xo,Oh,Mh,Bh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof As=="object"&&As];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var w=o[m];if(!(w in h))break e;h=h[w]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&h.push([m,c[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function f(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function p(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(m,w,b){for(var D=Array(arguments.length-2),q=2;q<arguments.length;q++)D[q-2]=arguments[q];return c.prototype[w].apply(m,D)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const c=o.length;if(c>0){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function k(o,c){for(let m=1;m<arguments.length;m++){const w=arguments[m];var h=typeof w;if(h=h!="object"?h:w?Array.isArray(w)?"array":h:"null",h=="array"||h=="object"&&typeof w.length=="number"){h=o.length||0;const b=w.length||0;o.length=h+b;for(let D=0;D<b;D++)o[h+D]=w[D]}else o.push(w)}}class N{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(o){a.setTimeout(()=>{throw o},0)}function j(){var o=E;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class K{constructor(){this.h=this.g=null}add(c,h){const m=Z.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Z=new N(()=>new Ie,o=>o.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,M=!1,E=new K,g=()=>{const o=Promise.resolve(void 0);Be=()=>{o.then(_)}};function _(){for(var o;o=j();){try{o.h.call(o.g)}catch(h){C(h)}var c=Z;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}M=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function xe(o,c){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(xe,v),xe.prototype.init=function(o,c){const h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Yt="closure_listenable_"+(Math.random()*1e6|0),Uf=0;function $f(o,c,h,m,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=w,this.key=++Uf,this.da=this.fa=!1}function cs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ls(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function jf(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function tc(o){const c={};for(const h in o)c[h]=o[h];return c}const nc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rc(o,c){let h,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(h in m)o[h]=m[h];for(let b=0;b<nc.length;b++)h=nc[b],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function us(o){this.src=o,this.g={},this.h=0}us.prototype.add=function(o,c,h,m,w){const b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);const D=Ui(o,c,m,w);return D>-1?(c=o[D],h||(c.fa=!1)):(c=new $f(c,this.src,b,!!m,w),c.fa=h,o.push(c)),c};function Fi(o,c){const h=c.type;if(h in o.g){var m=o.g[h],w=Array.prototype.indexOf.call(m,c,void 0),b;(b=w>=0)&&Array.prototype.splice.call(m,w,1),b&&(cs(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ui(o,c,h,m){for(let w=0;w<o.length;++w){const b=o[w];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==m)return w}return-1}var $i="closure_lm_"+(Math.random()*1e6|0),ji={};function sc(o,c,h,m,w){if(Array.isArray(c)){for(let b=0;b<c.length;b++)sc(o,c[b],h,m,w);return null}return h=ac(h),o&&o[Yt]?o.J(c,h,l(m)?!!m.capture:!1,w):qf(o,c,h,!1,m,w)}function qf(o,c,h,m,w,b){if(!c)throw Error("Invalid event type");const D=l(w)?!!w.capture:!!w;let q=Hi(o);if(q||(o[$i]=q=new us(o)),h=q.add(c,h,m,D,b),h.proxy)return h;if(m=Hf(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)A||(w=D),w===void 0&&(w=!1),o.addEventListener(c.toString(),m,w);else if(o.attachEvent)o.attachEvent(oc(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Hf(){function o(h){return c.call(o.src,o.listener,h)}const c=zf;return o}function ic(o,c,h,m,w){if(Array.isArray(c))for(var b=0;b<c.length;b++)ic(o,c[b],h,m,w);else m=l(m)?!!m.capture:!!m,h=ac(h),o&&o[Yt]?(o=o.i,b=String(c).toString(),b in o.g&&(c=o.g[b],h=Ui(c,h,m,w),h>-1&&(cs(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[b],o.h--)))):o&&(o=Hi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ui(c,h,m,w)),(h=o>-1?c[o]:null)&&qi(h))}function qi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Yt])Fi(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(oc(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Hi(c))?(Fi(h,o),h.h==0&&(h.src=null,c[$i]=null)):cs(o)}}}function oc(o){return o in ji?ji[o]:ji[o]="on"+o}function zf(o,c){if(o.da)o=!0;else{c=new xe(c,this);const h=o.listener,m=o.ha||o.src;o.fa&&qi(o),o=h.call(m,c)}return o}function Hi(o){return o=o[$i],o instanceof us?o:null}var zi="__closure_events_fn_"+(Math.random()*1e9>>>0);function ac(o){return typeof o=="function"?o:(o[zi]||(o[zi]=function(c){return o.handleEvent(c)}),o[zi])}function be(){I.call(this),this.i=new us(this),this.M=this,this.G=null}p(be,I),be.prototype[Yt]=!0,be.prototype.removeEventListener=function(o,c,h,m){ic(this,o,c,h,m)};function ke(o,c){var h,m=o.G;if(m)for(h=[];m;m=m.G)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new v(c,o);else if(c instanceof v)c.target=c.target||o;else{var w=c;c=new v(m,o),rc(c,w)}w=!0;let b,D;if(h)for(D=h.length-1;D>=0;D--)b=c.g=h[D],w=hs(b,m,!0,c)&&w;if(b=c.g=o,w=hs(b,m,!0,c)&&w,w=hs(b,m,!1,c)&&w,h)for(D=0;D<h.length;D++)b=c.g=h[D],w=hs(b,m,!1,c)&&w}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let m=0;m<h.length;m++)cs(h[m]);delete o.g[c],o.h--}}this.G=null},be.prototype.J=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},be.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function hs(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let b=0;b<c.length;++b){const D=c[b];if(D&&!D.da&&D.capture==h){const q=D.listener,ge=D.ha||D.src;D.fa&&Fi(o.i,D),w=q.call(ge,m)!==!1&&w}}return w&&!m.defaultPrevented}function Gf(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function cc(o){o.g=Gf(()=>{o.g=null,o.i&&(o.i=!1,cc(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Wf extends I{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:cc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function er(o){I.call(this),this.h=o,this.g={}}p(er,I);var lc=[];function uc(o){ls(o.g,function(c,h){this.g.hasOwnProperty(h)&&qi(c)},o),o.g={}}er.prototype.N=function(){er.Z.N.call(this),uc(this)},er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gi=a.JSON.stringify,Kf=a.JSON.parse,Qf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function hc(){}function dc(){}var tr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wi(){v.call(this,"d")}p(Wi,v);function Ki(){v.call(this,"c")}p(Ki,v);var Xt={},fc=null;function ds(){return fc=fc||new be}Xt.Ia="serverreachability";function mc(o){v.call(this,Xt.Ia,o)}p(mc,v);function nr(o){const c=ds();ke(c,new mc(c))}Xt.STAT_EVENT="statevent";function pc(o,c){v.call(this,Xt.STAT_EVENT,o),this.stat=c}p(pc,v);function De(o){const c=ds();ke(c,new pc(c,o))}Xt.Ja="timingevent";function gc(o,c){v.call(this,Xt.Ja,o),this.size=c}p(gc,v);function rr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function sr(){this.g=!0}sr.prototype.ua=function(){this.g=!1};function Jf(o,c,h,m,w,b){o.info(function(){if(o.g)if(b){var D="",q=b.split("&");for(let ee=0;ee<q.length;ee++){var ge=q[ee].split("=");if(ge.length>1){const Ee=ge[0];ge=ge[1];const Xe=Ee.split("_");D=Xe.length>=2&&Xe[1]=="type"?D+(Ee+"="+ge+"&"):D+(Ee+"=redacted&")}}}else D=null;else D=b;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+c+`
`+h+`
`+D})}function Yf(o,c,h,m,w,b,D){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+c+`
`+h+`
`+b+" "+D})}function vn(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Zf(o,h)+(m?" "+m:"")})}function Xf(o,c){o.info(function(){return"TIMEOUT: "+c})}sr.prototype.info=function(){};function Zf(o,c){if(!o.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(o=0;o<b.length;o++)if(Array.isArray(b[o])){var h=b[o];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var w=m[0];if(w!="noop"&&w!="stop"&&w!="close")for(let D=1;D<m.length;D++)m[D]=""}}}}return Gi(b)}catch{return c}}var fs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},_c;function Qi(){}p(Qi,hc),Qi.prototype.g=function(){return new XMLHttpRequest},_c=new Qi;function ir(o){return encodeURIComponent(String(o))}function em(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Tt(o,c,h,m){this.j=o,this.i=c,this.l=h,this.S=m||1,this.V=new er(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ec}function Ec(){this.i=null,this.g="",this.h=!1}var vc={},Ji={};function Yi(o,c,h){o.M=1,o.A=ps(Ye(c)),o.u=h,o.R=!0,Ic(o,null)}function Ic(o,c){o.F=Date.now(),ms(o),o.B=Ye(o.A);var h=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Lc(h.i,"t",m),o.C=0,h=o.j.L,o.h=new Ec,o.g=Xc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Wf(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,m=o.ba;var w="readystatechange";Array.isArray(w)||(w&&(lc[0]=w.toString()),w=lc);for(let b=0;b<w.length;b++){const D=sc(h,w[b],m||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=o.J?tc(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),nr(),Jf(o.i,o.v,o.B,o.l,o.S,o.u)}Tt.prototype.ba=function(o){o=o.target;const c=this.O;c&&bt(o)==3?c.j():this.Y(o)},Tt.prototype.Y=function(o){try{if(o==this.g)e:{const q=bt(this.g),ge=this.g.ya(),ee=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||$c(this.g)))){this.K||q!=4||ge==7||(ge==8||ee<=0?nr(3):nr(2)),Xi(this);var c=this.g.ca();this.X=c;var h=tm(this);if(this.o=c==200,Yf(this.i,this.v,this.B,this.l,this.S,q,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,w=this.g;if((m=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var b=m;break t}}b=null}if(o=b)vn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Zi(this,o);else{this.o=!1,this.m=3,De(12),Zt(this),or(this);break e}}if(this.R){o=!0;let Ee;for(;!this.K&&this.C<h.length;)if(Ee=nm(this,h),Ee==Ji){q==4&&(this.m=4,De(14),o=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==vc){this.m=4,De(15),vn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else vn(this.i,this.l,Ee,null),Zi(this,Ee);if(Tc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||h.length!=0||this.h.h||(this.m=1,De(16),o=!1),this.o=this.o&&o,!o)vn(this.i,this.l,h,"[Invalid Chunked Response]"),Zt(this),or(this);else if(h.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ao(D),D.P=!0,De(11))}}else vn(this.i,this.l,h,null),Zi(this,h);q==4&&Zt(this),this.o&&!this.K&&(q==4?Kc(this.j,this):(this.o=!1,ms(this)))}else gm(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,De(12)):(this.m=0,De(13)),Zt(this),or(this)}}}catch{}finally{}};function tm(o){if(!Tc(o))return o.g.la();const c=$c(o.g);if(c==="")return"";let h="";const m=c.length,w=bt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Zt(o),or(o),"";o.h.i=new a.TextDecoder}for(let b=0;b<m;b++)o.h.h=!0,h+=o.h.i.decode(c[b],{stream:!(w&&b==m-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function Tc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function nm(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?Ji:(h=Number(c.substring(h,m)),isNaN(h)?vc:(m+=1,m+h>c.length?Ji:(c=c.slice(m,m+h),o.C=m+h,c)))}Tt.prototype.cancel=function(){this.K=!0,Zt(this)};function ms(o){o.T=Date.now()+o.H,wc(o,o.H)}function wc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=rr(d(o.aa,o),c)}function Xi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Tt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Xf(this.i,this.B),this.M!=2&&(nr(),De(17)),Zt(this),this.m=2,or(this)):wc(this,this.T-o)};function or(o){o.j.I==0||o.K||Kc(o.j,o)}function Zt(o){Xi(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,uc(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Zi(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||eo(h.h,o))){if(!o.L&&eo(h.h,o)&&h.I==3){try{var m=h.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)vs(h),_s(h);else break e;oo(h),De(18)}}else h.xa=w[1],0<h.xa-h.K&&w[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=rr(d(h.Va,h),6e3));Sc(h.h)<=1&&h.ta&&(h.ta=void 0)}else tn(h,11)}else if((o.L||h.g==o)&&vs(h),!y(c))for(w=h.Ba.g.parse(c),c=0;c<w.length;c++){let ee=w[c];const Ee=ee[0];if(!(Ee<=h.K))if(h.K=Ee,ee=ee[1],h.I==2)if(ee[0]=="c"){h.M=ee[1],h.ba=ee[2];const Xe=ee[3];Xe!=null&&(h.ka=Xe,h.j.info("VER="+h.ka));const nn=ee[4];nn!=null&&(h.za=nn,h.j.info("SVER="+h.za));const St=ee[5];St!=null&&typeof St=="number"&&St>0&&(m=1.5*St,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Rt=o.g;if(Rt){const Ts=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ts){var b=m.h;b.g||Ts.indexOf("spdy")==-1&&Ts.indexOf("quic")==-1&&Ts.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(to(b,b.h),b.h=null))}if(m.G){const co=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;co&&(m.wa=co,re(m.J,m.G,co))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var D=o;if(m.na=Yc(m,m.L?m.ba:null,m.W),D.L){Rc(m.h,D);var q=D,ge=m.O;ge&&(q.H=ge),q.D&&(Xi(q),ms(q)),m.g=D}else Gc(m);h.i.length>0&&Es(h)}else ee[0]!="stop"&&ee[0]!="close"||tn(h,7);else h.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?tn(h,7):io(h):ee[0]!="noop"&&h.l&&h.l.qa(ee),h.A=0)}}nr(4)}catch{}}var rm=class{constructor(o,c){this.g=o,this.map=c}};function Ac(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Sc(o){return o.h?1:o.g?o.g.size:0}function eo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function to(o,c){o.g?o.g.add(c):o.h=c}function Rc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ac.prototype.cancel=function(){if(this.i=Pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Pc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return R(o.i)}var Cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sm(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const m=o[h].indexOf("=");let w,b=null;m>=0?(w=o[h].substring(0,m),b=o[h].substring(m+1)):w=o[h],c(w,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function wt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof wt?(this.l=o.l,ar(this,o.j),this.o=o.o,this.g=o.g,cr(this,o.u),this.h=o.h,no(this,xc(o.i)),this.m=o.m):o&&(c=String(o).match(Cc))?(this.l=!1,ar(this,c[1]||"",!0),this.o=lr(c[2]||""),this.g=lr(c[3]||"",!0),cr(this,c[4]),this.h=lr(c[5]||"",!0),no(this,c[6]||"",!0),this.m=lr(c[7]||"")):(this.l=!1,this.i=new hr(null,this.l))}wt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(ur(c,kc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ur(c,kc,!0),"@"),o.push(ir(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ur(h,h.charAt(0)=="/"?am:om,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ur(h,lm)),o.join("")},wt.prototype.resolve=function(o){const c=Ye(this);let h=!!o.j;h?ar(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var m=o.h;if(h)cr(c,o.u);else if(h=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var w=c.h.lastIndexOf("/");w!=-1&&(m=c.h.slice(0,w+1)+m)}if(w=m,w==".."||w==".")m="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){m=w.lastIndexOf("/",0)==0,w=w.split("/");const b=[];for(let D=0;D<w.length;){const q=w[D++];q=="."?m&&D==w.length&&b.push(""):q==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),m&&D==w.length&&b.push("")):(b.push(q),m=!0)}m=b.join("/")}else m=w}return h?c.h=m:h=o.i.toString()!=="",h?no(c,xc(o.i)):h=!!o.m,h&&(c.m=o.m),c};function Ye(o){return new wt(o)}function ar(o,c,h){o.j=h?lr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function cr(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function no(o,c,h){c instanceof hr?(o.i=c,um(o.i,o.l)):(h||(c=ur(c,cm)),o.i=new hr(c,o.l))}function re(o,c,h){o.i.set(c,h)}function ps(o){return re(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function lr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ur(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,im),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function im(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var kc=/[#\/\?@]/g,om=/[#\?:]/g,am=/[#\?]/g,cm=/[#\?@]/g,lm=/#/g;function hr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function en(o){o.g||(o.g=new Map,o.h=0,o.i&&sm(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=hr.prototype,n.add=function(o,c){en(this),this.i=null,o=In(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Dc(o,c){en(o),c=In(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Nc(o,c){return en(o),c=In(o,c),o.g.has(c)}n.forEach=function(o,c){en(this),this.g.forEach(function(h,m){h.forEach(function(w){o.call(c,w,m,this)},this)},this)};function Vc(o,c){en(o);let h=[];if(typeof c=="string")Nc(o,c)&&(h=h.concat(o.g.get(In(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return en(this),this.i=null,o=In(this,o),Nc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Vc(this,o),o.length>0?String(o[0]):c):c};function Lc(o,c,h){Dc(o,c),h.length>0&&(o.i=null,o.g.set(In(o,c),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var h=c[m];const w=ir(h);h=Vc(this,h);for(let b=0;b<h.length;b++){let D=w;h[b]!==""&&(D+="="+ir(h[b])),o.push(D)}}return this.i=o.join("&")};function xc(o){const c=new hr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function In(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function um(o,c){c&&!o.j&&(en(o),o.i=null,o.g.forEach(function(h,m){const w=m.toLowerCase();m!=w&&(Dc(this,m),Lc(this,w,h))},o)),o.j=c}function hm(o,c){const h=new sr;if(a.Image){const m=new Image;m.onload=f(At,h,"TestLoadImage: loaded",!0,c,m),m.onerror=f(At,h,"TestLoadImage: error",!1,c,m),m.onabort=f(At,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(At,h,"TestLoadImage: timeout",!1,c,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function dm(o,c){const h=new sr,m=new AbortController,w=setTimeout(()=>{m.abort(),At(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(b=>{clearTimeout(w),b.ok?At(h,"TestPingServer: ok",!0,c):At(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),At(h,"TestPingServer: error",!1,c)})}function At(o,c,h,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(h)}catch{}}function fm(){this.g=new Qf}function ro(o){this.i=o.Sb||null,this.h=o.ab||!1}p(ro,hc),ro.prototype.g=function(){return new gs(this.i,this.h)};function gs(o,c){be.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(gs,be),n=gs.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,fr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,dr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,fr(this)),this.g&&(this.readyState=3,fr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Oc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Oc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?dr(this):fr(this),this.readyState==3&&Oc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,dr(this))},n.Na=function(o){this.g&&(this.response=o,dr(this))},n.ga=function(){this.g&&dr(this)};function dr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,fr(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function fr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Mc(o){let c="";return ls(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function so(o,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=Mc(h),typeof o=="string"?h!=null&&ir(h):re(o,c,h))}function ce(o){be.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ce,be);var mm=/^https?$/i,pm=["POST","PUT"];n=ce.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_c.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(b){Bc(this,b);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)h.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())h.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),w=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(pm,c,void 0)>=0)||m||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,D]of h)this.g.setRequestHeader(b,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(b){Bc(this,b)}};function Bc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Fc(o),ys(o)}function Fc(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ke(this,"complete"),ke(this,"abort"),ys(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ys(this,!0)),ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Uc(this):this.Xa())},n.Xa=function(){Uc(this)};function Uc(o){if(o.h&&typeof i<"u"){if(o.v&&bt(o)==4)setTimeout(o.Ca.bind(o),0);else if(ke(o,"readystatechange"),bt(o)==4){o.h=!1;try{const b=o.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=b===0){let D=String(o.D).match(Cc)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),m=!mm.test(D?D.toLowerCase():"")}h=m}if(h)ke(o,"complete"),ke(o,"success");else{o.o=6;try{var w=bt(o)>2?o.g.statusText:""}catch{w=""}o.l=w+" ["+o.ca()+"]",Fc(o)}}finally{ys(o)}}}}function ys(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||ke(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function bt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Kf(c)}};function $c(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function gm(o){const c={};o=(o.g&&bt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(y(o[m]))continue;var h=em(o[m]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[w]||[];c[w]=b,b.push(h)}jf(c,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function jc(o){this.za=0,this.i=[],this.j=new sr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mr("baseRetryDelayMs",5e3,o),this.Za=mr("retryDelaySeedMs",1e4,o),this.Ta=mr("forwardChannelMaxRetries",2,o),this.va=mr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ac(o&&o.concurrentRequestLimit),this.Ba=new fm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=jc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,m){De(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=Yc(this,null,this.W),Es(this)};function io(o){if(qc(o),o.I==3){var c=o.V++,h=Ye(o.J);if(re(h,"SID",o.M),re(h,"RID",c),re(h,"TYPE","terminate"),pr(o,h),c=new Tt(o,o.j,c),c.M=2,c.A=ps(Ye(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Xc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ms(c)}Jc(o)}function _s(o){o.g&&(ao(o),o.g.cancel(),o.g=null)}function qc(o){_s(o),o.v&&(a.clearTimeout(o.v),o.v=null),vs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Es(o){if(!bc(o.h)&&!o.m){o.m=!0;var c=o.Ea;Be||g(),M||(Be(),M=!0),E.add(c,o),o.D=0}}function ym(o,c){return Sc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=rr(d(o.Ea,o,c),Qc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const w=new Tt(this,this.j,o);let b=this.o;if(this.U&&(b?(b=tc(b),rc(b,this.U)):b=this.U),this.u!==null||this.R||(w.J=b,b=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=zc(this,w,c),h=Ye(this.J),re(h,"RID",o),re(h,"CVER",22),this.G&&re(h,"X-HTTP-Session-Id",this.G),pr(this,h),b&&(this.R?c="headers="+ir(Mc(b))+"&"+c:this.u&&so(h,this.u,b)),to(this.h,w),this.Ra&&re(h,"TYPE","init"),this.S?(re(h,"$req",c),re(h,"SID","null"),w.U=!0,Yi(w,h,null)):Yi(w,h,c),this.I=2}}else this.I==3&&(o?Hc(this,o):this.i.length==0||bc(this.h)||Hc(this))};function Hc(o,c){var h;c?h=c.l:h=o.V++;const m=Ye(o.J);re(m,"SID",o.M),re(m,"RID",h),re(m,"AID",o.K),pr(o,m),o.u&&o.o&&so(m,o.u,o.o),h=new Tt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=zc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),to(o.h,h),Yi(h,m,c)}function pr(o,c){o.H&&ls(o.H,function(h,m){re(c,m,h)}),o.l&&ls({},function(h,m){re(c,m,h)})}function zc(o,c,h){h=Math.min(o.i.length,h);const m=o.l?d(o.l.Ka,o.l,o):null;e:{var w=o.i;let q=-1;for(;;){const ge=["count="+h];q==-1?h>0?(q=w[0].g,ge.push("ofs="+q)):q=0:ge.push("ofs="+q);let ee=!0;for(let Ee=0;Ee<h;Ee++){var b=w[Ee].g;const Xe=w[Ee].map;if(b-=q,b<0)q=Math.max(0,w[Ee].g-100),ee=!1;else try{b="req"+b+"_"||"";try{var D=Xe instanceof Map?Xe:Object.entries(Xe);for(const[nn,St]of D){let Rt=St;l(St)&&(Rt=Gi(St)),ge.push(b+nn+"="+encodeURIComponent(Rt))}}catch(nn){throw ge.push(b+"type="+encodeURIComponent("_badmap")),nn}}catch{m&&m(Xe)}}if(ee){D=ge.join("&");break e}}D=void 0}return o=o.i.splice(0,h),c.G=o,D}function Gc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;Be||g(),M||(Be(),M=!0),E.add(c,o),o.A=0}}function oo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=rr(d(o.Da,o),Qc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Wc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=rr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,De(10),_s(this),Wc(this))};function ao(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Wc(o){o.g=new Tt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Ye(o.na);re(c,"RID","rpc"),re(c,"SID",o.M),re(c,"AID",o.K),re(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&re(c,"TO",o.ia),re(c,"TYPE","xmlhttp"),pr(o,c),o.u&&o.o&&so(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ps(Ye(c)),h.u=null,h.R=!0,Ic(h,o)}n.Va=function(){this.C!=null&&(this.C=null,_s(this),oo(this),De(19))};function vs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Kc(o,c){var h=null;if(o.g==c){vs(o),ao(o),o.g=null;var m=2}else if(eo(o.h,c))h=c.G,Rc(o.h,c),m=1;else return;if(o.I!=0){if(c.o)if(m==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var w=o.D;m=ds(),ke(m,new gc(m,h)),Es(o)}else Gc(o);else if(w=c.m,w==3||w==0&&c.X>0||!(m==1&&ym(o,c)||m==2&&oo(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),w){case 1:tn(o,5);break;case 4:tn(o,10);break;case 3:tn(o,6);break;default:tn(o,2)}}}function Qc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function tn(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),m=o.Ua;const w=!m;m=new wt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ar(m,"https"),ps(m),w?hm(m.toString(),h):dm(m.toString(),h)}else De(2);o.I=0,o.l&&o.l.pa(c),Jc(o),qc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Jc(o){if(o.I=0,o.ja=[],o.l){const c=Pc(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ja,c),k(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function Yc(o,c,h){var m=h instanceof wt?Ye(h):new wt(h);if(m.g!="")c&&(m.g=c+"."+m.g),cr(m,m.u);else{var w=a.location;m=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const b=new wt(null);m&&ar(b,m),c&&(b.g=c),w&&cr(b,w),h&&(b.h=h),m=b}return h=o.G,c=o.wa,h&&c&&re(m,h,c),re(m,"VER",o.ka),pr(o,m),m}function Xc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new ce(new ro({ab:h})):new ce(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zc(){}n=Zc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Is(){}Is.prototype.g=function(o,c){return new Fe(o,c)};function Fe(o,c){be.call(this),this.g=new jc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!y(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Tn(this)}p(Fe,be),Fe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){io(this.g)},Fe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Gi(o),o=h);c.i.push(new rm(c.Ya++,o)),c.I==3&&Es(c)},Fe.prototype.N=function(){this.g.l=null,delete this.j,io(this.g),delete this.g,Fe.Z.N.call(this)};function el(o){Wi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(el,Wi);function tl(){Ki.call(this),this.status=1}p(tl,Ki);function Tn(o){this.g=o}p(Tn,Zc),Tn.prototype.ra=function(){ke(this.g,"a")},Tn.prototype.qa=function(o){ke(this.g,new el(o))},Tn.prototype.pa=function(o){ke(this.g,new tl)},Tn.prototype.oa=function(){ke(this.g,"b")},Is.prototype.createWebChannel=Is.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,Bh=function(){return new Is},Mh=function(){return ds()},Oh=Xt,xo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fs.NO_ERROR=0,fs.TIMEOUT=8,fs.HTTP_ERROR=6,xs=fs,yc.COMPLETE="complete",xh=yc,dc.EventType=tr,tr.OPEN="a",tr.CLOSE="b",tr.ERROR="c",tr.MESSAGE="d",be.prototype.listen=be.prototype.J,_r=dc,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,Lh=ce}).apply(typeof As<"u"?As:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let Wn="12.13.0";function n_(n){Wn=n}/**
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
 */const dn=new sa("@firebase/firestore");function wn(){return dn.logLevel}function L(n,...e){if(dn.logLevel<=Q.DEBUG){const t=e.map(ya);dn.debug(`Firestore (${Wn}): ${n}`,...t)}}function _t(n,...e){if(dn.logLevel<=Q.ERROR){const t=e.map(ya);dn.error(`Firestore (${Wn}): ${n}`,...t)}}function fn(n,...e){if(dn.logLevel<=Q.WARN){const t=e.map(ya);dn.warn(`Firestore (${Wn}): ${n}`,...t)}}function ya(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Fh(n,r,t)}function Fh(n,e,t){let r=`FIRESTORE (${Wn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _t(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Fh(e,s,r)}function $(n,e){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Uh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Re.UNAUTHENTICATED))}shutdown(){}}class s_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class i_{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ot,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ot)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Uh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class o_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class a_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new o_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new kl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function l_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class _a{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=l_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function Oo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return yo(s)===yo(i)?G(s,i):yo(s)?1:-1}return G(n.length,e.length)}const u_=55296,h_=57343;function yo(n){const e=n.charCodeAt(0);return e>=u_&&e<=h_}function Bn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Dl="__name__";class Ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ze.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return G(e.length,t.length)}static compareSegments(e,t){const r=Ze.isNumericId(e),s=Ze.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):Oo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xt.fromString(e.substring(4,e.length-2))}}class ne extends Ze{construct(e,t,r){return new ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const d_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends Ze{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return d_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dl}static keyField(){return new we([Dl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ne.fromString(e))}static fromName(e){return new O(ne.fromString(e).popFirst(5))}static empty(){return new O(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ne(e.slice()))}}/**
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
 */function $h(n,e,t){if(!t)throw new V(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function f_(n,e,t,r){if(e===!0&&r===!0)throw new V(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nl(n){if(!O.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vl(n){if(O.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function pi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function $e(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pi(n);throw new V(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function me(n,e){const t={typeString:n};return e&&(t.value=e),t}function Qr(n,e){if(!jh(n))throw new V(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new V(S.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ll=-62135596800,xl=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*xl);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ll)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xl}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qr(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ll;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:me("string",se._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new se(0,0))}static max(){return new U(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Lr=-1;function m_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new Ft(s,O.empty(),e)}function p_(n){return new Ft(n.readTime,n.key,Lr)}class Ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ft(U.min(),O.empty(),Lr)}static max(){return new Ft(U.max(),O.empty(),Lr)}}function g_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
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
 */const y_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class __{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Kn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==y_)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function E_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class gi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}gi.ce=-1;/**
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
 */const Ea=-1;function yi(n){return n==null}function Xs(n){return n===0&&1/n==-1/0}function v_(n){return typeof n=="number"&&Number.isInteger(n)&&!Xs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const qh="";function I_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ol(e)),e=T_(n.get(t),e);return Ol(e)}function T_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case qh:t+="";break;default:t+=i}}return t}function Ol(n){return n+qh+""}/**
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
 */function Ml(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Kt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bs(this.root,e,this.comparator,!0)}}class bs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Te.RED,this.left=s??Te.EMPTY,this.right=i??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Te(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bl(this.data.getIterator())}getIteratorFrom(e){return new Bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class Bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new _e(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class zh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zh("Invalid base64 string: "+i):i}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const w_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=w_.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $t(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
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
 */const Gh="server_timestamp",Wh="__type__",Kh="__previous_value__",Qh="__local_write_time__";function va(n){return(n?.mapValue?.fields||{})[Wh]?.stringValue===Gh}function _i(n){const e=n.mapValue.fields[Kh];return va(e)?_i(e):e}function xr(n){const e=Ut(n.mapValue.fields[Qh].timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class A_{constructor(e,t,r,s,i,a,l,u,d,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f,this.apiKey=p}}const Mo="(default)";class Or{constructor(e,t){this.projectId=e,this.database=t||Mo}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database===Mo}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}function b_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Or(n.options.projectId,e)}/**
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
 */const Jh="__type__",S_="__max__",Ss={mapValue:{}},Yh="__vector__",Zs="value";function jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?va(n)?4:P_(n)?9007199254740991:R_(n)?10:11:B(28295,{value:n})}function it(n,e){if(n===e)return!0;const t=jt(n);if(t!==jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xr(n).isEqual(xr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ut(s.timestampValue),l=Ut(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return $t(s.bytesValue).isEqual($t(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ue(s.doubleValue),l=ue(i.doubleValue);return a===l?Xs(a)===Xs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Bn(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ml(a)!==Ml(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!it(a[u],l[u])))return!1;return!0}(n,e);default:return B(52216,{left:n})}}function Mr(n,e){return(n.values||[]).find(t=>it(t,e))!==void 0}function Fn(n,e){if(n===e)return 0;const t=jt(n),r=jt(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ue(i.integerValue||i.doubleValue),u=ue(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Fl(n.timestampValue,e.timestampValue);case 4:return Fl(xr(n),xr(e));case 5:return Oo(n.stringValue,e.stringValue);case 6:return function(i,a){const l=$t(i),u=$t(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=G(l[d],u[d]);if(f!==0)return f}return G(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=G(ue(i.latitude),ue(a.latitude));return l!==0?l:G(ue(i.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ul(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},u=a.fields||{},d=l[Zs]?.arrayValue,f=u[Zs]?.arrayValue,p=G(d?.values?.length||0,f?.values?.length||0);return p!==0?p:Ul(d,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ss.mapValue&&a===Ss.mapValue)return 0;if(i===Ss.mapValue)return 1;if(a===Ss.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const T=Oo(u[p],f[p]);if(T!==0)return T;const R=Fn(l[u[p]],d[f[p]]);if(R!==0)return R}return G(u.length,f.length)}(n.mapValue,e.mapValue);default:throw B(23264,{he:t})}}function Fl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Ut(n),r=Ut(e),s=G(t.seconds,r.seconds);return s!==0?s:G(t.nanos,r.nanos)}function Ul(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Fn(t[s],r[s]);if(i)return i}return G(t.length,r.length)}function Un(n){return Bo(n)}function Bo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ut(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return $t(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Bo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Bo(t.fields[a])}`;return s+"}"}(n.mapValue):B(61005,{value:n})}function Os(n){switch(jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_i(n);return e?16+Os(e):16;case 5:return 2*n.stringValue.length;case 6:return $t(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Os(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Kt(r.fields,(i,a)=>{s+=i.length+Os(a)}),s}(n.mapValue);default:throw B(13486,{value:n})}}function $l(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Fo(n){return!!n&&"integerValue"in n}function Ia(n){return!!n&&"arrayValue"in n}function jl(n){return!!n&&"nullValue"in n}function ql(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ms(n){return!!n&&"mapValue"in n}function R_(n){return(n?.mapValue?.fields||{})[Jh]?.stringValue===Yh}function Ar(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Kt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ar(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ar(n.arrayValue.values[t]);return e}return{...n}}function P_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===S_}/**
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
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ms(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(t)}setAll(e){let t=we.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ar(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ms(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ms(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Kt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Me(Ar(this.value))}}function Xh(n){const e=[];return Kt(n.fields,(t,r)=>{const s=new we([t]);if(Ms(r)){const i=Xh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
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
 */class Pe{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Pe(e,0,U.min(),U.min(),U.min(),Me.empty(),0)}static newFoundDocument(e,t,r,s){return new Pe(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new Pe(e,2,t,U.min(),U.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,U.min(),U.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ei{constructor(e,t){this.position=e,this.inclusive=t}}function Hl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=Fn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Br{constructor(e,t="asc"){this.field=e,this.dir=t}}function C_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zh{}class fe extends Zh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new D_(e,t,r):t==="array-contains"?new L_(e,r):t==="in"?new x_(e,r):t==="not-in"?new O_(e,r):t==="array-contains-any"?new M_(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new N_(e,r):new V_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fn(t,this.value)):t!==null&&jt(this.value)===jt(t)&&this.matchesComparison(Fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends Zh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Qe(e,t)}matches(e){return ed(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ed(n){return n.op==="and"}function td(n){return k_(n)&&ed(n)}function k_(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function Uo(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+Un(n.value);if(td(n))return n.filters.map(e=>Uo(e)).join(",");{const e=n.filters.map(t=>Uo(t)).join(",");return`${n.op}(${e})`}}function nd(n,e){return n instanceof fe?function(r,s){return s instanceof fe&&r.op===s.op&&r.field.isEqual(s.field)&&it(r.value,s.value)}(n,e):n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&nd(a,s.filters[l]),!0):!1}(n,e):void B(19439)}function rd(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${Un(t.value)}`}(n):n instanceof Qe?function(t){return t.op.toString()+" {"+t.getFilters().map(rd).join(" ,")+"}"}(n):"Filter"}class D_ extends fe{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class N_ extends fe{constructor(e,t){super(e,"in",t),this.keys=sd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class V_ extends fe{constructor(e,t){super(e,"not-in",t),this.keys=sd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sd(n,e){return(e.arrayValue?.values||[]).map(t=>O.fromName(t.referenceValue))}class L_ extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ia(t)&&Mr(t.arrayValue,this.value)}}class x_ extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mr(this.value.arrayValue,t)}}class O_ extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Mr(this.value.arrayValue,t)}}class M_ extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ia(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Mr(this.value.arrayValue,r))}}/**
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
 */class B_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Gl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new B_(n,e,t,r,s,i,a)}function Ta(n){const e=$(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Uo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Un(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Un(r)).join(",")),e.Te=t}return e.Te}function wa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!C_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zl(n.startAt,e.startAt)&&zl(n.endAt,e.endAt)}function $o(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Jn{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function F_(n,e,t,r,s,i,a,l){return new Jn(n,e,t,r,s,i,a,l)}function Ei(n){return new Jn(n)}function Wl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function U_(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function id(n){return n.collectionGroup!==null}function br(n){const e=$(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new _e(we.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Br(i,r))}),t.has(we.keyField().canonicalString())||e.Ie.push(new Br(we.keyField(),r))}return e.Ie}function tt(n){const e=$(n);return e.Ee||(e.Ee=$_(e,br(n))),e.Ee}function $_(n,e){if(n.limitType==="F")return Gl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Br(s.field,i)});const t=n.endAt?new ei(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ei(n.startAt.position,n.startAt.inclusive):null;return Gl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function jo(n,e){const t=n.filters.concat([e]);return new Jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function j_(n,e){const t=n.explicitOrderBy.concat([e]);return new Jn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function qo(n,e,t){return new Jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vi(n,e){return wa(tt(n),tt(e))&&n.limitType===e.limitType}function od(n){return`${Ta(tt(n))}|lt:${n.limitType}`}function An(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>rd(s)).join(", ")}]`),yi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Un(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Un(s)).join(",")),`Target(${r})`}(tt(n))}; limitType=${n.limitType})`}function Ii(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of br(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=Hl(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,br(r),s)||r.endAt&&!function(a,l,u){const d=Hl(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,br(r),s))}(n,e)}function q_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ad(n){return(e,t)=>{let r=!1;for(const s of br(n)){const i=H_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function H_(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Fn(u,d):B(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
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
 */class yn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hh(this.inner)}size(){return this.innerSize}}/**
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
 */const z_=new ae(O.comparator);function Et(){return z_}const cd=new ae(O.comparator);function Er(...n){let e=cd;for(const t of n)e=e.insert(t.key,t);return e}function ld(n){let e=cd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function on(){return Sr()}function ud(){return Sr()}function Sr(){return new yn(n=>n.toString(),(n,e)=>n.isEqual(e))}const G_=new ae(O.comparator),W_=new _e(O.comparator);function W(...n){let e=W_;for(const t of n)e=e.add(t);return e}const K_=new _e(G);function Q_(){return K_}/**
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
 */function Aa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xs(e)?"-0":e}}function hd(n){return{integerValue:""+n}}function J_(n,e){return v_(e)?hd(e):Aa(n,e)}/**
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
 */class Ti{constructor(){this._=void 0}}function Y_(n,e,t){return n instanceof ti?function(s,i){const a={fields:{[Wh]:{stringValue:Gh},[Qh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&va(i)&&(i=_i(i)),i&&(a.fields[Kh]=i),{mapValue:a}}(t,e):n instanceof Fr?fd(n,e):n instanceof Ur?md(n,e):function(s,i){const a=dd(s,i),l=Kl(a)+Kl(s.Ae);return Fo(a)&&Fo(s.Ae)?hd(l):Aa(s.serializer,l)}(n,e)}function X_(n,e,t){return n instanceof Fr?fd(n,e):n instanceof Ur?md(n,e):t}function dd(n,e){return n instanceof ni?function(r){return Fo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ti extends Ti{}class Fr extends Ti{constructor(e){super(),this.elements=e}}function fd(n,e){const t=pd(e);for(const r of n.elements)t.some(s=>it(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ur extends Ti{constructor(e){super(),this.elements=e}}function md(n,e){let t=pd(e);for(const r of n.elements)t=t.filter(s=>!it(s,r));return{arrayValue:{values:t}}}class ni extends Ti{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Kl(n){return ue(n.integerValue||n.doubleValue)}function pd(n){return Ia(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Z_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Fr&&s instanceof Fr||r instanceof Ur&&s instanceof Ur?Bn(r.elements,s.elements,it):r instanceof ni&&s instanceof ni?it(r.Ae,s.Ae):r instanceof ti&&s instanceof ti}(n.transform,e.transform)}class eE{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wi{}function gd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ai(n.key,Le.none()):new Jr(n.key,n.data,Le.none());{const t=n.data,r=Me.empty();let s=new _e(we.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Qt(n.key,r,new Ue(s.toArray()),Le.none())}}function tE(n,e,t){n instanceof Jr?function(s,i,a){const l=s.value.clone(),u=Jl(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Qt?function(s,i,a){if(!Bs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Jl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(yd(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Rr(n,e,t,r){return n instanceof Jr?function(i,a,l,u){if(!Bs(i.precondition,a))return l;const d=i.value.clone(),f=Yl(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qt?function(i,a,l,u){if(!Bs(i.precondition,a))return l;const d=Yl(i.fieldTransforms,u,a),f=a.data;return f.setAll(yd(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return Bs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function nE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=dd(r.transform,s||null);i!=null&&(t===null&&(t=Me.empty()),t.set(r.field,i))}return t||null}function Ql(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bn(r,s,(i,a)=>Z_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Jr extends wi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qt extends wi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Jl(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,X_(a,l,t[s]))}return r}function Yl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Y_(i,a,e))}return r}class Ai extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rE extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sE{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&tE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Rr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Rr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ud();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=gd(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&Bn(this.mutations,e.mutations,(t,r)=>Ql(t,r))&&Bn(this.baseMutations,e.baseMutations,(t,r)=>Ql(t,r))}}class ba{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return G_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ba(e,t,r,s)}}/**
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
 */class iE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,J;function aE(n){switch(n){case S.OK:return B(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function _d(n){if(n===void 0)return _t("GRPC error has no .code"),S.UNKNOWN;switch(n){case he.OK:return S.OK;case he.CANCELLED:return S.CANCELLED;case he.UNKNOWN:return S.UNKNOWN;case he.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case he.INTERNAL:return S.INTERNAL;case he.UNAVAILABLE:return S.UNAVAILABLE;case he.UNAUTHENTICATED:return S.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case he.NOT_FOUND:return S.NOT_FOUND;case he.ALREADY_EXISTS:return S.ALREADY_EXISTS;case he.PERMISSION_DENIED:return S.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case he.ABORTED:return S.ABORTED;case he.OUT_OF_RANGE:return S.OUT_OF_RANGE;case he.UNIMPLEMENTED:return S.UNIMPLEMENTED;case he.DATA_LOSS:return S.DATA_LOSS;default:return B(39323,{code:n})}}(J=he||(he={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cE(){return new TextEncoder}/**
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
 */const lE=new xt([4294967295,4294967295],0);function Xl(n){const e=cE().encode(n),t=new Vh;return t.update(e),new Uint8Array(t.digest())}function Zl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xt([t,r],0),new xt([s,i],0)]}class Sa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new vr(`Invalid padding: ${t}`);if(r<0)throw new vr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new vr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=xt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(xt.fromNumber(r)));return s.compare(lE)===1&&(s=new xt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Xl(e),[r,s]=Zl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Sa(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Xl(e),[r,s]=Zl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yr{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Xr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yr(U.min(),s,new ae(G),Et(),W())}}class Xr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xr(r,t,W(),W(),W())}}/**
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
 */class Fs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Ed{constructor(e,t){this.targetId=e,this.Ce=t}}class vd{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class eu{constructor(){this.ve=0,this.Fe=tu(),this.Me=Ae.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=W(),t=W(),r=W();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}}),new Xr(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=tu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class uE{constructor(e){this.Ge=e,this.ze=new Map,this.je=Et(),this.Je=Rs(),this.He=Rs(),this.Ze=new ae(G)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:B(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if($o(i))if(r===0){const a=new O(i.path);this.et(t,a,Pe.newNoDocument(a,U.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=$t(r).toUint8Array()}catch(u){if(u instanceof zh)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Sa(a,s,i)}catch(u){return fn(u instanceof vr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&$o(l.target)){const u=new O(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Pe.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=W();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Yr(e,t,this.Ze,this.je,r);return this.je=Et(),this.Je=Rs(),this.He=Rs(),this.Ze=new ae(G),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new eu,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new _e(G),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new _e(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new eu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Rs(){return new ae(O.comparator)}function tu(){return new ae(O.comparator)}const hE={asc:"ASCENDING",desc:"DESCENDING"},dE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fE={and:"AND",or:"OR"};class mE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ho(n,e){return n.useProto3Json||yi(e)?e:{value:e}}function ri(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Id(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function pE(n,e){return ri(n,e.toTimestamp())}function nt(n){return X(!!n,49232),U.fromTimestamp(function(t){const r=Ut(t);return new se(r.seconds,r.nanos)}(n))}function Ra(n,e){return zo(n,e).canonicalString()}function zo(n,e){const t=function(s){return new ne(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Td(n){const e=ne.fromString(n);return X(Rd(e),10190,{key:e.toString()}),e}function Go(n,e){return Ra(n.databaseId,e.path)}function _o(n,e){const t=Td(e);if(t.get(1)!==n.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Ad(t))}function wd(n,e){return Ra(n.databaseId,e)}function gE(n){const e=Td(n);return e.length===4?ne.emptyPath():Ad(e)}function Wo(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ad(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function nu(n,e,t){return{name:Go(n,e),fields:t.value.mapValue.fields}}function yE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(X(f===void 0||typeof f=="string",58123),Ae.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ae.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?S.UNKNOWN:_d(d.code);return new V(f,d.message||"")}(a);t=new vd(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_o(n,r.document.name),i=nt(r.document.updateTime),a=r.document.createTime?nt(r.document.createTime):U.min(),l=new Me({mapValue:{fields:r.document.fields}}),u=Pe.newFoundDocument(s,i,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Fs(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_o(n,r.document),i=r.readTime?nt(r.readTime):U.min(),a=Pe.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Fs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_o(n,r.document),i=r.removedTargetIds||[];t=new Fs([],i,s,null)}else{if(!("filter"in e))return B(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new oE(s,i),l=r.targetId;t=new Ed(l,a)}}return t}function _E(n,e){let t;if(e instanceof Jr)t={update:nu(n,e.key,e.value)};else if(e instanceof Ai)t={delete:Go(n,e.key)};else if(e instanceof Qt)t={update:nu(n,e.key,e.data),updateMask:RE(e.fieldMask)};else{if(!(e instanceof rE))return B(16599,{dt:e.type});t={verify:Go(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ti)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ur)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ni)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw B(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)}(n,e.precondition)),t}function EE(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?nt(s.updateTime):nt(i);return a.isEqual(U.min())&&(a=nt(i)),new eE(a,s.transformResults||[])}(t,e))):[]}function vE(n,e){return{documents:[wd(n,e.path)]}}function IE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=wd(n,s);const i=function(d){if(d.length!==0)return Sd(Qe.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(T){return{field:bn(T.field),direction:AE(T.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ho(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function TE(n){let e=gE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const T=bd(p);return T instanceof Qe&&td(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(T=>function(k){return new Br(Sn(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(T))}(t.orderBy));let l=null;t.limit&&(l=function(p){let T;return T=typeof p=="object"?p.value:p,yi(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(p){const T=!!p.before,R=p.values||[];return new ei(R,T)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const T=!p.before,R=p.values||[];return new ei(R,T)}(t.endAt)),F_(e,s,a,i,l,"F",u,d)}function wE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Sn(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Sn(t.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Sn(t.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Sn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}}(n):n.fieldFilter!==void 0?function(t){return fe.create(Sn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qe.create(t.compositeFilter.filters.map(r=>bd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}}(t.compositeFilter.op))}(n):B(30097,{filter:n})}function AE(n){return hE[n]}function bE(n){return dE[n]}function SE(n){return fE[n]}function bn(n){return{fieldPath:n.canonicalString()}}function Sn(n){return we.fromServerFormat(n.fieldPath)}function Sd(n){return n instanceof fe?function(t){if(t.op==="=="){if(ql(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NAN"}};if(jl(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ql(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NAN"}};if(jl(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(t.field),op:bE(t.op),value:t.value}}}(n):n instanceof Qe?function(t){const r=t.getFilters().map(s=>Sd(s));return r.length===1?r[0]:{compositeFilter:{op:SE(t.op),filters:r}}}(n):B(54877,{filter:n})}function RE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Rd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Pd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class dt{constructor(e,t,r,s,i=U.min(),a=U.min(),l=Ae.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class PE{constructor(e){this.yt=e}}function CE(n){const e=TE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qo(e,e.limit,"L"):e}/**
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
 */class kE{constructor(){this.bn=new DE}addToCollectionParentIndex(e,t){return this.bn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Ft.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class DE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new _e(ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(ne.comparator)).toArray()}}/**
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
 */const ru={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Cd=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Cd,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
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
 */class qt{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new qt(0)}static ar(){return new qt(-1)}}/**
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
 */const su="LruGarbageCollector",NE=1048576;function iu([n,e],[t,r]){const s=G(n,t);return s===0?G(e,r):s}class VE{constructor(e){this.Pr=e,this.buffer=new _e(iu),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();iu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class LE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){L(su,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qn(t)?L(su,"Ignoring IndexedDB error during garbage collection: ",t):await Kn(t)}await this.Ar(3e5)})}}class xE{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(gi.ce);const r=new VE(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(ru)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ru):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),wn()<=Q.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function OE(n,e){return new xE(n,e)}/**
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
 */class ME{constructor(){this.changes=new yn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class FE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Rr(r.mutation,s,Ue.empty(),se.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=on();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Er();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=on();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Et();const a=Sr(),l=function(){return Sr()}();return t.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Qt)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Rr(f.mutation,d,f.mutation.getFieldMask(),se.now())):a.set(d.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>l.set(d,new BE(f,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Sr();let s=new ae((a,l)=>a-l),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Ue.empty();f=l.applyToLocalView(d,f),r.set(u,f);const p=(s.get(l.batchId)||W()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,p=ud();f.forEach(T=>{if(!i.has(T)){const R=gd(t.get(T),r.get(T));R!==null&&p.set(T,R),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return U_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):id(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(on());let l=Lr,u=i;return a.next(d=>P.forEach(d,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(T=>{u=u.insert(f,T)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,W())).next(f=>({batchId:l,changes:ld(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=Er();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Er();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,u=>{const d=function(p,T){return new Jn(T,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((p,T)=>{a=a.insert(p,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Pe.newInvalidDocument(f)))});let l=Er();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&Rr(f.mutation,d,Ue.empty(),se.now()),Ii(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class UE{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:nt(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:CE(s.bundledQuery),readTime:nt(s.readTime)}}(t)),P.resolve()}}/**
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
 */class $E{constructor(){this.overlays=new ae(O.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=on();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=on(),i=t.length+1,a=new O(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ae((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=on(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=on(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return P.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new iE(t,r));let i=this.Lr.get(t);i===void 0&&(i=W(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class jE{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Pa{constructor(){this.kr=new _e(ve.Kr),this.qr=new _e(ve.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new ve(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new ve(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new O(new ne([])),r=new ve(t,e),s=new ve(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new O(new ne([])),r=new ve(t,e),s=new ve(t,e+1);let i=W();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ve(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return O.comparator(e.key,t.key)||G(e.Jr,t.Jr)}static Ur(e,t){return G(e.Jr,t.Jr)||O.comparator(e.key,t.key)}}/**
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
 */class qE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new _e(ve.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sE(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new ve(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ea:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const l=this.Zr(a.Jr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(G);return t.forEach(s=>{const i=new ve(s,0),a=new ve(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],l=>{r=r.add(l.Jr)})}),P.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const a=new ve(new O(i),0);let l=new _e(G);return this.Hr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Jr)),!0)},a),P.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){X(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return P.forEach(t.mutations,s=>{const i=new ve(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new ve(t,0),s=this.Hr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class HE{constructor(e){this.ti=e,this.docs=function(){return new ae(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Pe.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Et();const a=t.path,l=new O(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||g_(p_(f),r)<=0||(s.has(f.key)||Ii(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ni(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new zE(this)}getSize(e){return P.resolve(this.size)}}class zE extends ME{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class GE{constructor(e){this.persistence=e,this.ri=new yn(t=>Ta(t),wa),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new Pa,this.targetCount=0,this.oi=qt._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new qt(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class kd{constructor(e,t){this._i={},this.overlays={},this.ai=new gi(0),this.ui=!1,this.ui=!0,this.ci=new jE,this.referenceDelegate=e(this),this.li=new GE(this),this.indexManager=new kE,this.remoteDocumentCache=function(s){return new HE(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new PE(t),this.Pi=new UE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $E,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new qE(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new WE(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return P.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class WE extends __{constructor(e){super(),this.currentSequenceNumber=e}}class Ca{constructor(e){this.persistence=e,this.Ri=new Pa,this.Ai=null}static Vi(e){return new Ca(e)}get di(){if(this.Ai)return this.Ai;throw B(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,r=>{const s=O.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,U.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class si{constructor(e,t){this.persistence=e,this.fi=new yn(r=>I_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=OE(this,t)}static Vi(e,t){return new si(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return P.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Os(e.data.value)),t}wr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ka{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ka(e,t.fromCache,r,s)}}/**
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
 */class KE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QE{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return xm()?8:E_(Ce())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new KE;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(wn()<=Q.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",An(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(wn()<=Q.DEBUG&&L("QueryEngine","Query:",An(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(wn()<=Q.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",An(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):P.resolve())}gs(e,t){if(Wl(t))return P.resolve(null);let r=tt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=qo(t,null,"F"),r=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ss(t,l);return this.bs(t,d,a,u.readTime)?this.gs(e,qo(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,r,s){return Wl(t)||s.isEqual(U.min())?P.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?P.resolve(null):(wn()<=Q.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),An(t)),this.Ds(e,a,t,m_(s,Lr)).next(l=>l))})}Ss(e,t){let r=new _e(ad(e));return t.forEach((s,i)=>{Ii(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return wn()<=Q.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",An(t)),this.fs.getDocumentsMatchingQuery(e,t,Ft.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Da="LocalStore",JE=3e8;class YE{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ae(G),this.Fs=new yn(i=>Ta(i),wa),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FE(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function XE(n,e,t,r){return new YE(n,e,t,r)}async function Dd(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=W();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function ZE(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const p=d.batch,T=p.keys();let R=P.resolve();return T.forEach(k=>{R=R.next(()=>f.getEntry(u,k)).next(N=>{const C=d.docVersions.get(k);X(C!==null,48541),N.version.compareTo(C)<0&&(p.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=W();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Nd(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function ev(n,e){const t=$(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((f,p)=>{const T=s.get(p);if(!T)return;l.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,f.addedDocuments,p)));let R=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(Ae.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(p,R),function(N,C,j){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=JE?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(T,R,f)&&l.push(t.li.updateTargetData(i,R))});let u=Et(),d=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(tv(i,a,e.documentUpdates).next(f=>{u=f.Bs,d=f.Ls})),!r.isEqual(U.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return P.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.vs=s,i))}function tv(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Et();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):L(Da,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function nv(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ea),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rv(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new dt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function Ko(n,e,t){const r=$(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Qn(a))throw a;L(Da,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function ou(n,e,t){const r=$(n);let s=U.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const p=$(u),T=p.Fs.get(f);return T!==void 0?P.resolve(p.vs.get(T)):p.li.getTargetData(d,f)}(r,a,tt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:W())).next(l=>(sv(r,q_(e),l),{documents:l,ks:i})))}function sv(n,e,t){let r=n.Ms.get(e)||U.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class au{constructor(){this.activeTargetIds=Q_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iv{constructor(){this.vo=new au,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new au,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ov{Mo(e){}shutdown(){}}/**
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
 */const cu="ConnectivityMonitor";class lu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){L(cu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){L(cu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ps=null;function Qo(){return Ps===null?Ps=function(){return 268435456+Math.round(2147483648*Math.random())}():Ps++,"0x"+Ps.toString(16)}/**
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
 */const Eo="RestConnection",av={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class cv{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Mo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Qo(),l=this.Qo(e,t.toUriEncodedString());L(Eo,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:d}=new URL(l),f=zr(d);return this.zo(e,l,u,r,f).then(p=>(L(Eo,`Received RPC '${e}' ${a}: `,p),p),p=>{throw fn(Eo,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=av[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class lv{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Se="WebChannelConnection",gr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class kn extends cv{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!kn.c_){const e=Mh();gr(e,Oh.STAT_EVENT,t=>{t.stat===xo.PROXY?L(Se,"STAT_EVENT: detected buffering proxy"):t.stat===xo.NOPROXY&&L(Se,"STAT_EVENT: detected no buffering proxy")}),kn.c_=!0}}zo(e,t,r,s,i){const a=Qo();return new Promise((l,u)=>{const d=new Lh;d.setWithCredentials(!0),d.listenOnce(xh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case xs.NO_ERROR:const p=d.getResponseJson();L(Se,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case xs.TIMEOUT:L(Se,`RPC '${e}' ${a} timed out`),u(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case xs.HTTP_ERROR:const T=d.getStatus();if(L(Se,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const k=R?.error;if(k&&k.status&&k.message){const N=function(j){const K=j.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN}(k.status);u(new V(N,k.message))}else u(new V(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(S.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(Se,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);L(Se,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Qo(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");L(Se,`Creating RPC '${e}' stream ${s}: ${d}`,l);const f=a.createWebChannel(d,l);this.I_(f);let p=!1,T=!1;const R=new lv({Jo:k=>{T?L(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(p||(L(Se,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),L(Se,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Ho:()=>f.close()});return gr(f,_r.EventType.OPEN,()=>{T||(L(Se,`RPC '${e}' stream ${s} transport opened.`),R.i_())}),gr(f,_r.EventType.CLOSE,()=>{T||(T=!0,L(Se,`RPC '${e}' stream ${s} transport closed`),R.o_(),this.E_(f))}),gr(f,_r.EventType.ERROR,k=>{T||(T=!0,fn(Se,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),R.o_(new V(S.UNAVAILABLE,"The operation could not be completed")))}),gr(f,_r.EventType.MESSAGE,k=>{if(!T){const N=k.data[0];X(!!N,16349);const C=N,j=C?.error||C[0]?.error;if(j){L(Se,`RPC '${e}' stream ${s} received error:`,j);const K=j.status;let Z=function(M){const E=he[M];if(E!==void 0)return _d(E)}(K),Ie=j.message;K==="NOT_FOUND"&&Ie.includes("database")&&Ie.includes("does not exist")&&Ie.includes(this.databaseId.database)&&fn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Z===void 0&&(Z=S.INTERNAL,Ie="Unknown error status: "+K+" with message "+j.message),T=!0,R.o_(new V(Z,Ie)),f.close()}else L(Se,`RPC '${e}' stream ${s} received:`,N),R.__(N)}}),kn.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Bh()}}/**
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
 */function uv(n){return new kn(n)}function vo(){return typeof document<"u"?document:null}/**
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
 */function bi(n){return new mE(n,!0)}/**
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
 */kn.c_=!1;class Vd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const uu="PersistentStream";class Ld{constructor(e,t,r,s,i,a,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(_t(t.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new V(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return L(uu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(L(uu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hv extends Ld{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=yE(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?nt(a.readTime):U.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Wo(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=$o(u)?{documents:vE(i,u)}:{query:IE(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Id(i,a.resumeToken);const d=Ho(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=ri(i,a.snapshotVersion.toTimestamp());const d=Ho(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=wE(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Wo(this.serializer),t.removeTarget=e,this.K_(t)}}class dv extends Ld{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=EE(e.writeResults,e.commitTime),r=nt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Wo(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>_E(this.serializer,r))};this.K_(t)}}/**
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
 */class fv{}class mv extends fv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,zo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(S.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,zo(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(S.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function pv(n,e,t,r){return new mv(n,e,t,r)}class gv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_t(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ot="RemoteStore";class yv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new qt(1e3),this.Va=new qt(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{_n(this)&&(L(ot,"Restarting streams for network reachability change."),await async function(u){const d=$(u);d.da.add(4),await Zr(d),d.ga.set("Unknown"),d.da.delete(4),await Si(d)}(this))})}),this.ga=new gv(r,s)}}async function Si(n){if(_n(n))for(const e of n.ma)await e(!0)}async function Zr(n){for(const e of n.ma)await e(!1)}function Jo(n,e){return n.Ea.get(e)||void 0}function xd(n,e){const t=$(n),r=Jo(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=function(l,u){const d=Jo(l,u);d!==void 0&&l.Ra.delete(d);const f=function(T,R){return R%2!=0?T.Va.next():T.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(t,e.targetId);L(ot,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new dt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),xa(t)?La(t):Yn(t).O_()&&Va(t,i)}function Na(n,e){const t=$(n),r=Yn(t),s=Jo(t,e);L(ot,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&Od(t,s),t.Ia.size===0&&(r.O_()?r.L_():_n(t)&&t.ga.set("Unknown"))}function Va(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void L(ot,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Yn(n).Z_(e)}function Od(n,e){n.pa.$e(e),Yn(n).X_(e)}function La(n){n.pa=new uE({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):W()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Yn(n).start(),n.ga.ua()}function xa(n){return _n(n)&&!Yn(n).x_()&&n.Ia.size>0}function _n(n){return $(n).da.size===0}function Md(n){n.pa=void 0}async function _v(n){n.ga.set("Online")}async function Ev(n){n.Ia.forEach((e,t)=>{Va(n,e)})}async function vv(n,e){Md(n),xa(n)?(n.ga.ha(e),La(n)):n.ga.set("Unknown")}async function Iv(n,e,t){if(n.ga.set("Online"),e instanceof vd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(n,e)}catch(r){L(ot,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ii(n,r)}else if(e instanceof Fs?n.pa.Xe(e):e instanceof Ed?n.pa.st(e):n.pa.tt(e),!t.isEqual(U.min()))try{const r=await Nd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.pa.Tt(a);l.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const p=i.Ia.get(f);p&&i.Ia.set(f,p.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,f)=>{const p=i.Ia.get(d);if(!p)return;i.Ia.set(d,p.withResumeToken(Ae.EMPTY_BYTE_STRING,p.snapshotVersion)),Od(i,d);const T=new dt(p.target,d,f,p.sequenceNumber);Va(i,T)});const u=function(f,p){const T=new Map;p.targetChanges.forEach((k,N)=>{const C=f.Ra.get(N);C!==void 0&&T.set(C,k)});let R=new ae(G);return p.targetMismatches.forEach((k,N)=>{const C=f.Ra.get(k);C!==void 0&&(R=R.insert(C,N))}),new Yr(p.snapshotVersion,T,R,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){L(ot,"Failed to raise snapshot:",r),await ii(n,r)}}async function ii(n,e,t){if(!Qn(e))throw e;n.da.add(1),await Zr(n),n.ga.set("Offline"),t||(t=()=>Nd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(ot,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Si(n)})}function Bd(n,e){return e().catch(t=>ii(n,t,e))}async function Ri(n){const e=$(n),t=Ht(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ea;for(;Tv(e);)try{const s=await nv(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,wv(e,s)}catch(s){await ii(e,s)}Fd(e)&&Ud(e)}function Tv(n){return _n(n)&&n.Ta.length<10}function wv(n,e){n.Ta.push(e);const t=Ht(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Fd(n){return _n(n)&&!Ht(n).x_()&&n.Ta.length>0}function Ud(n){Ht(n).start()}async function Av(n){Ht(n).ra()}async function bv(n){const e=Ht(n);for(const t of n.Ta)e.ea(t.mutations)}async function Sv(n,e,t){const r=n.Ta.shift(),s=ba.from(r,e,t);await Bd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ri(n)}async function Rv(n,e){e&&Ht(n).Y_&&await async function(r,s){if(function(a){return aE(a)&&a!==S.ABORTED}(s.code)){const i=r.Ta.shift();Ht(r).B_(),await Bd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ri(r)}}(n,e),Fd(n)&&Ud(n)}async function hu(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),L(ot,"RemoteStore received new credentials");const r=_n(t);t.da.add(3),await Zr(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Si(t)}async function Pv(n,e){const t=$(n);e?(t.da.delete(2),await Si(t)):e||(t.da.add(2),await Zr(t),t.ga.set("Unknown"))}function Yn(n){return n.ya||(n.ya=function(t,r,s){const i=$(t);return i.sa(),new hv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:_v.bind(null,n),Yo:Ev.bind(null,n),t_:vv.bind(null,n),H_:Iv.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),xa(n)?La(n):n.ga.set("Unknown")):(await n.ya.stop(),Md(n))})),n.ya}function Ht(n){return n.wa||(n.wa=function(t,r,s){const i=$(t);return i.sa(),new dv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Av.bind(null,n),t_:Rv.bind(null,n),ta:bv.bind(null,n),na:Sv.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await Ri(n)):(await n.wa.stop(),n.Ta.length>0&&(L(ot,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
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
 */class Oa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Oa(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ma(n,e){if(_t("AsyncQueue",`${e}: ${n}`),Qn(n))return new V(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Dn{static emptySet(e){return new Dn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=Er(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Dn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Dn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class du{constructor(){this.Sa=new ae(O.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):B(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,r)=>{e.push(r)}),e}}class $n{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new $n(e,t,Dn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Cv{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class kv{constructor(){this.queries=fu(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=fu(),i.forEach((a,l)=>{for(const u of l.va)u.onError(r)})})(this,new V(S.ABORTED,"Firestore shutting down"))}}function fu(){return new yn(n=>od(n),vi)}async function $d(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new Cv,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Ma(a,`Initialization of query '${An(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&Ba(t)}async function jd(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Dv(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.va)l.Na(s)&&(r=!0);a.Ca=s}}r&&Ba(t)}function Nv(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function Ba(n){n.xa.forEach(e=>{e.next()})}var Yo,mu;(mu=Yo||(Yo={})).Ba="default",mu.Cache="cache";class qd{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Yo.Cache}}/**
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
 */class Hd{constructor(e){this.key=e}}class zd{constructor(e){this.key=e}}class Vv{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=W(),this.mutatedKeys=W(),this.iu=ad(e),this.su=new Dn(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new du,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const T=s.get(f),R=Ii(this.query,p)?p:null,k=!!T&&this.mutatedKeys.has(T.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let C=!1;T&&R?T.data.isEqual(R.data)?k!==N&&(r.track({type:3,doc:R}),C=!0):this.uu(T,R)||(r.track({type:2,doc:R}),C=!0,(u&&this.iu(R,u)>0||d&&this.iu(R,d)<0)&&(l=!0)):!T&&R?(r.track({type:0,doc:R}),C=!0):T&&!R&&(r.track({type:1,doc:T}),C=!0,(u||d)&&(l=!0)),C&&(R?(a=a.add(R),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:a,au:r,bs:l,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((f,p)=>function(R,k){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Vt:C})}};return N(R)-N(k)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),s=s??!1;const l=t&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,d=u!==this.nu;return this.nu=u,a.length!==0||d?{snapshot:new $n(this.query,e.su,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new du,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=W(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const t=[];return e.forEach(r=>{this.ru.has(r)||t.push(new zd(r))}),this.ru.forEach(r=>{e.has(r)||t.push(new Hd(r))}),t}Tu(e){this.tu=e.ks,this.ru=W();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return $n.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Fa="SyncEngine";class Lv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xv{constructor(e){this.key=e,this.Eu=!1}}class Ov{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new yn(l=>od(l),vi),this.Vu=new Map,this.du=new Set,this.mu=new ae(O.comparator),this.fu=new Map,this.gu=new Pa,this.pu={},this.yu=new Map,this.wu=qt.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Mv(n,e,t=!0){const r=Yd(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await Gd(r,e,t,!0),s}async function Bv(n,e){const t=Yd(n);await Gd(t,e,!0,!1)}async function Gd(n,e,t,r){const s=await rv(n.localStore,tt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Fv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&xd(n.remoteStore,s),l}async function Fv(n,e,t,r,s){n.bu=(p,T,R)=>async function(N,C,j,K){let Z=C.view._u(j);Z.bs&&(Z=await ou(N.localStore,C.query,!1).then(({documents:E})=>C.view._u(E,Z)));const Ie=K&&K.targetChanges.get(C.targetId),Be=K&&K.targetMismatches.get(C.targetId)!=null,M=C.view.applyChanges(Z,N.isPrimaryClient,Ie,Be);return gu(N,C.targetId,M.hu),M.snapshot}(n,p,T,R);const i=await ou(n.localStore,e,!0),a=new Vv(e,i.ks),l=a._u(i.documents),u=Xr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);gu(n,t,d.hu);const f=new Lv(e,t,a);return n.Au.set(e,f),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),d.snapshot}async function Uv(n,e,t){const r=$(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(a=>!vi(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ko(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Na(r.remoteStore,s.targetId),Xo(r,s.targetId)}).catch(Kn)):(Xo(r,s.targetId),await Ko(r.localStore,s.targetId,!0))}async function $v(n,e){const t=$(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Na(t.remoteStore,r.targetId))}async function jv(n,e,t){const r=Qv(n);try{const s=await function(a,l){const u=$(a),d=se.now(),f=l.reduce((R,k)=>R.add(k.key),W());let p,T;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=Et(),N=W();return u.xs.getEntries(R,f).next(C=>{k=C,k.forEach((j,K)=>{K.isValidDocument()||(N=N.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,k)).next(C=>{p=C;const j=[];for(const K of l){const Z=nE(K,p.get(K.key).overlayedDocument);Z!=null&&j.push(new Qt(K.key,Z,Xh(Z.value.mapValue),Le.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,j,l)}).next(C=>{T=C;const j=C.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(R,C.batchId,j)})}).then(()=>({batchId:T.batchId,changes:ld(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.pu[a.currentUser.toKey()];d||(d=new ae(G)),d=d.insert(l,u),a.pu[a.currentUser.toKey()]=d}(r,s.batchId,t),await es(r,s.changes),await Ri(r.remoteStore)}catch(s){const i=Ma(s,"Failed to persist write");t.reject(i)}}async function Wd(n,e){const t=$(n);try{const r=await ev(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.fu.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?X(a.Eu,14607):s.removedDocuments.size>0&&(X(a.Eu,42227),a.Eu=!1))}),await es(t,r,e)}catch(r){await Kn(r)}}function pu(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach((i,a)=>{const l=a.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=$(a);u.onlineState=l;let d=!1;u.queries.forEach((f,p)=>{for(const T of p.va)T.Oa(l)&&(d=!0)}),d&&Ba(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qv(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let a=new ae(O.comparator);a=a.insert(i,Pe.newNoDocument(i,U.min()));const l=W().add(i),u=new Yr(U.min(),new Map,new ae(G),a,l);await Wd(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Ua(r)}else await Ko(r.localStore,e,!1).then(()=>Xo(r,e,t)).catch(Kn)}async function Hv(n,e){const t=$(n),r=e.batch.batchId;try{const s=await ZE(t.localStore,e);Qd(t,r,null),Kd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await es(t,s)}catch(s){await Kn(s)}}async function zv(n,e,t){const r=$(n);try{const s=await function(a,l){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(X(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);Qd(r,e,t),Kd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await es(r,s)}catch(s){await Kn(s)}}function Kd(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function Qd(n,e,t){const r=$(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Xo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(r=>{n.gu.containsKey(r)||Jd(n,r)})}function Jd(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(Na(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),Ua(n))}function gu(n,e,t){for(const r of t)r instanceof Hd?(n.gu.addReference(r.key,e),Gv(n,r)):r instanceof zd?(L(Fa,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||Jd(n,r.key)):B(19791,{Cu:r})}function Gv(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(L(Fa,"New document in limbo: "+t),n.du.add(r),Ua(n))}function Ua(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new O(ne.fromString(e)),r=n.wu.next();n.fu.set(r,new xv(t)),n.mu=n.mu.insert(t,r),xd(n.remoteStore,new dt(tt(Ei(t.path)),r,"TargetPurposeLimboResolution",gi.ce))}}async function es(n,e,t){const r=$(n),s=[],i=[],a=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{a.push(r.bu(u,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){const f=d?!d.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=ka.Es(u.targetId,d);i.push(f)}}))}),await Promise.all(a),r.Ru.H_(s),await async function(u,d){const f=$(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(d,T=>P.forEach(T.Ts,R=>f.persistence.referenceDelegate.addReference(p,T.targetId,R)).next(()=>P.forEach(T.Is,R=>f.persistence.referenceDelegate.removeReference(p,T.targetId,R)))))}catch(p){if(!Qn(p))throw p;L(Da,"Failed to update sequence numbers: "+p)}for(const p of d){const T=p.targetId;if(!p.fromCache){const R=f.vs.get(T),k=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(T,N)}}}(r.localStore,i))}async function Wv(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){L(Fa,"User change. New user:",e.toKey());const r=await Dd(t.localStore,e);t.currentUser=e,function(i,a){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new V(S.CANCELLED,a))})}),i.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await es(t,r.Ns)}}function Kv(n,e){const t=$(n),r=t.fu.get(e);if(r&&r.Eu)return W().add(r.key);{let s=W();const i=t.Vu.get(e);if(!i)return s;for(const a of i){const l=t.Au.get(a);s=s.unionWith(l.view.ou)}return s}}function Yd(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qv.bind(null,e),e.Ru.H_=Dv.bind(null,e.eventManager),e.Ru.Du=Nv.bind(null,e.eventManager),e}function Qv(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zv.bind(null,e),e}class oi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bi(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return XE(this.persistence,new QE,e.initialUser,this.serializer)}xu(e){return new kd(Ca.Vi,this.serializer)}Mu(e){return new iv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oi.provider={build:()=>new oi};class Jv extends oi{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){X(this.persistence.referenceDelegate instanceof si,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LE(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new kd(r=>si.Vi(r,t),this.serializer)}}class Zo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wv.bind(null,this.syncEngine),await Pv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kv}()}createDatastore(e){const t=bi(e.databaseInfo.databaseId),r=uv(e.databaseInfo);return pv(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new yv(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>pu(this.syncEngine,t,0),function(){return lu.v()?new lu:new ov}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,f){const p=new Ov(s,i,a,l,u,d);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=$(t);L(ot,"RemoteStore shutting down."),r.da.add(5),await Zr(r),r.fa.shutdown(),r.ga.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Zo.provider={build:()=>new Zo};/**
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
 */class Xd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const zt="FirestoreClient";class Yv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=_a.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ma(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Io(n,e){n.asyncQueue.verifyOperationInProgress(),L(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Dd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function yu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Xv(n);L(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>hu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>hu(e.remoteStore,s)),n._onlineComponents=e}async function Xv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(zt,"Using user provided OfflineComponentProvider");try{await Io(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await Io(n,new oi)}}else L(zt,"Using default OfflineComponentProvider"),await Io(n,new Jv(void 0));return n._offlineComponents}async function Zd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(zt,"Using user provided OnlineComponentProvider"),await yu(n,n._uninitializedComponentsProvider._online)):(L(zt,"Using default OnlineComponentProvider"),await yu(n,new Zo))),n._onlineComponents}function Zv(n){return Zd(n).then(e=>e.syncEngine)}async function ea(n){const e=await Zd(n),t=e.eventManager;return t.onListen=Mv.bind(null,e.syncEngine),t.onUnlisten=Uv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Bv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$v.bind(null,e.syncEngine),t}function eI(n,e,t,r){const s=new Xd(r),i=new qd(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>$d(await ea(n),i)),()=>{s.Ku(),n.asyncQueue.enqueueAndForget(async()=>jd(await ea(n),i))}}function tI(n,e,t={}){const r=new Ot;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const f=new Xd({next:T=>{f.Ku(),a.enqueueAndForget(()=>jd(i,p));const R=T.docs.has(l);!R&&T.fromCache?d.reject(new V(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&u&&u.source==="server"?d.reject(new V(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),p=new qd(Ei(l.path),f,{includeMetadataChanges:!0,Wa:!0});return $d(i,p)}(await ea(n),n.asyncQueue,e,t,r)),r.promise}function nI(n,e){const t=new Ot;return n.asyncQueue.enqueueAndForget(async()=>jv(await Zv(n),e,t)),t.promise}/**
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
 */function ef(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const rI="ComponentProvider",_u=new Map;function sI(n,e,t,r,s){return new A_(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ef(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const tf="firestore.googleapis.com",Eu=!0;class vu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tf,this.ssl=Eu}else this.host=e.host,this.ssl=e.ssl??Eu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NE)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}f_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ef(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new r_;switch(r.type){case"firstParty":return new a_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=_u.get(t);r&&(L(rI,"Removing Datastore"),_u.delete(t),r.terminate())}(this),Promise.resolve()}}function iI(n,e,t,r={}){n=$e(n,Pi);const s=zr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Ju(`https://${l}`),i.host!==tf&&i.host!==l&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ln(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Re.MOCK_USER;else{d=Pm(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Re(p)}n._authCredentials=new s_(new Uh(d,f))}}/**
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
 */class En{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new En(this.firestore,e,this._query)}}class le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Qr(t,le._jsonSchema))return new le(e,r||null,new O(ne.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:me("string",le._jsonSchemaVersion),referencePath:me("string")};class Mt extends En{constructor(e,t,r){super(e,t,Ei(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new O(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function nf(n,e,...t){if(n=pe(n),$h("collection","path",e),n instanceof Pi){const r=ne.fromString(e,...t);return Vl(r),new Mt(n,null,r)}{if(!(n instanceof le||n instanceof Mt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return Vl(r),new Mt(n.firestore,null,r)}}function Jt(n,e,...t){if(n=pe(n),arguments.length===1&&(e=_a.newId()),$h("doc","path",e),n instanceof Pi){const r=ne.fromString(e,...t);return Nl(r),new le(n,null,new O(r))}{if(!(n instanceof le||n instanceof Mt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return Nl(r),new le(n.firestore,n instanceof Mt?n.converter:null,new O(r))}}/**
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
 */const Iu="AsyncQueue";class Tu{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Vd(this,"async_queue_retry"),this.lc=()=>{const r=vo();r&&L(Iu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=vo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=vo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new Ot;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Qn(e))throw e;L(Iu,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,_t("INTERNAL UNHANDLED ERROR: ",wu(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=Oa.createAndSchedule(this,e,t,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&B(47125,{Rc:wu(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function wu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class vt extends Pi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Tu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tu(e),this._firestoreClient=void 0,await e}}}function oI(n,e){const t=typeof n=="object"?n:eh(),r=typeof n=="string"?n:e,s=oa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Sm("firestore");i&&iI(s,...i)}return s}function Ci(n){if(n._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||aI(n),n._firestoreClient}function aI(n){const e=n._freezeSettings(),t=sI(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Yv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(Ae.fromBase64String(e))}catch(t){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qr(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:me("string",je._jsonSchemaVersion),bytes:me("string")};/**
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
 */class ki{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $a{constructor(e){this._methodName=e}}/**
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
 */class rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rt._jsonSchemaVersion}}static fromJSON(e){if(Qr(e,rt._jsonSchema))return new rt(e.latitude,e.longitude)}}rt._jsonSchemaVersion="firestore/geoPoint/1.0",rt._jsonSchema={type:me("string",rt._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
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
 */class We{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qr(e,We._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new We(e.vectorValues);throw new V(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:me("string",We._jsonSchemaVersion),vectorValues:me("object")};/**
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
 */const cI=/^__.*__$/;class lI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jr(e,this.data,t,this.fieldTransforms)}}class rf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:n})}}class ja{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ja({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return ai(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(sf(this.dataSource)&&cI.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class uI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bi(e)}V(e,t,r,s=!1){return new ja({dataSource:e,methodName:t,targetDoc:r,path:we.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ts(n){const e=n._freezeSettings(),t=bi(n._databaseId);return new uI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function qa(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);Ha("Data must be an object, but it was:",a,r);const l=cf(r,a);let u,d;if(i.merge)u=new Ue(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const T=jn(e,p,t);if(!a.contains(T))throw new V(S.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);hf(f,T)||f.push(T)}u=new Ue(f),d=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=a.fieldTransforms;return new lI(new Me(l),u,d)}class Di extends $a{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Di}}function of(n,e,t,r){const s=n.V(1,e,t);Ha("Data must be an object, but it was:",s,r);const i=[],a=Me.empty();Kt(r,(u,d)=>{const f=uf(e,u,t);d=pe(d);const p=s.Sc(f);if(d instanceof Di)i.push(f);else{const T=ns(d,p);T!=null&&(i.push(f),a.set(f,T))}});const l=new Ue(i);return new rf(a,l,s.fieldTransforms)}function af(n,e,t,r,s,i){const a=n.V(1,e,t),l=[jn(e,r,t)],u=[s];if(i.length%2!=0)throw new V(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)l.push(jn(e,i[T])),u.push(i[T+1]);const d=[],f=Me.empty();for(let T=l.length-1;T>=0;--T)if(!hf(d,l[T])){const R=l[T];let k=u[T];k=pe(k);const N=a.Sc(R);if(k instanceof Di)d.push(R);else{const C=ns(k,N);C!=null&&(d.push(R),f.set(R,C))}}const p=new Ue(d);return new rf(f,p,a.fieldTransforms)}function hI(n,e,t,r=!1){return ns(t,n.V(r?4:3,e))}function ns(n,e){if(lf(n=pe(n)))return Ha("Unsupported field value:",e,n),cf(n,e);if(n instanceof $a)return function(r,s){if(!sf(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=ns(l,s.bc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return J_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=se.fromDate(r);return{timestampValue:ri(s.serializer,i)}}if(r instanceof se){const i=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ri(s.serializer,i)}}if(r instanceof rt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof je)return{bytesValue:Id(s.serializer,r._byteString)};if(r instanceof le){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ra(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof We)return function(a,l){const u=a instanceof We?a.toArray():a;return{mapValue:{fields:{[Jh]:{stringValue:Yh},[Zs]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return Aa(l.serializer,f)})}}}}}}(r,s);if(Pd(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${pi(r)}`)}(n,e)}function cf(n,e){const t={};return Hh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kt(n,(r,s)=>{const i=ns(s,e.yc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function lf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof rt||n instanceof je||n instanceof le||n instanceof $a||n instanceof We||Pd(n))}function Ha(n,e,t){if(!lf(t)||!jh(t)){const r=pi(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function jn(n,e,t){if((e=pe(e))instanceof ki)return e._internalPath;if(typeof e=="string")return uf(n,e);throw ai("Field path arguments must be of type string or ",n,!1,void 0,t)}const dI=new RegExp("[~\\*/\\[\\]]");function uf(n,e,t){if(e.search(dI)>=0)throw ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ki(...e.split("."))._internalPath}catch{throw ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ai(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new V(S.INVALID_ARGUMENT,l+n+u)}function hf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class fI{convertValue(e,t="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($t(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Kt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[Zs].arrayValue?.values?.map(r=>ue(r.doubleValue));return new We(t)}convertGeoPoint(e){return new rt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=_i(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const t=Ut(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ne.fromString(e);X(Rd(r),9688,{name:e});const s=new Or(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||_t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class df extends fI{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}const Au="@firebase/firestore",bu="4.14.1";/**
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
 */function Su(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class ff{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(jn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mI extends ff{data(){return super.data()}}/**
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
 */function pI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class za{}class mf extends za{}function gI(n,e,...t){let r=[];e instanceof za&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Wa).length,l=i.filter(u=>u instanceof Ga).length;if(a>1||a>0&&l>0)throw new V(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ga extends mf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ga(e,t,r)}_apply(e){const t=this._parse(e);return pf(e._query,t),new En(e.firestore,e.converter,jo(e._query,t))}_parse(e){const t=ts(e.firestore);return function(i,a,l,u,d,f,p){let T;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Pu(p,f);const k=[];for(const N of p)k.push(Ru(u,i,N));T={arrayValue:{values:k}}}else T=Ru(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Pu(p,f),T=hI(l,a,p,f==="in"||f==="not-in");return fe.create(d,f,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Wa extends za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)pf(a,u),a=jo(a,u)}(e._query,t),new En(e.firestore,e.converter,jo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ka extends mf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ka(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Br(i,a)}(e._query,this._field,this._direction);return new En(e.firestore,e.converter,j_(e._query,t))}}function yI(n,e="asc"){const t=e,r=jn("orderBy",n);return Ka._create(r,t)}function Ru(n,e,t){if(typeof(t=pe(t))=="string"){if(t==="")throw new V(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!id(e)&&t.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ne.fromString(t));if(!O.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $l(n,new O(r))}if(t instanceof le)return $l(n,t._key);throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pi(t)}.`)}function Pu(n,e){if(!Array.isArray(n)||n.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pf(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Qa(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ir{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cn extends ff{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(jn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=cn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",cn._jsonSchema={type:me("string",cn._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class Us extends cn{data(e={}){return super.data(e)}}class Nn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ir(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Us(this._firestore,this._userDataWriter,r.key,r,new Ir(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ir(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ir(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:_I(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Nn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_a.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _I(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
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
 */Nn._jsonSchemaVersion="firestore/querySnapshot/1.0",Nn._jsonSchema={type:me("string",Nn._jsonSchemaVersion),bundleSource:me("string","QuerySnapshot"),bundleName:me("string"),bundle:me("string")};/**
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
 */class EI{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ts(e)}set(e,t,r){this._verifyNotCommitted();const s=To(e,this._firestore),i=Qa(s.converter,t,r),a=qa(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Le.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=To(e,this._firestore);let a;return a=typeof(t=pe(t))=="string"||t instanceof ki?af(this._dataReader,"WriteBatch.update",i._key,t,r,s):of(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Le.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=To(e,this._firestore);return this._mutations=this._mutations.concat(new Ai(t._key,Le.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function To(n,e){if((n=pe(n)).firestore!==e)throw new V(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Ja(n){n=$e(n,le);const e=$e(n.firestore,vt),t=Ci(e);return tI(t,n._key).then(r=>_f(e,n,r))}function vI(n,e,t){n=$e(n,le);const r=$e(n.firestore,vt),s=Qa(n.converter,e,t),i=ts(r);return rs(r,[qa(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Le.none())])}function Ya(n,e,t,...r){n=$e(n,le);const s=$e(n.firestore,vt),i=ts(s);let a;return a=typeof(e=pe(e))=="string"||e instanceof ki?af(i,"updateDoc",n._key,e,t,r):of(i,"updateDoc",n._key,e),rs(s,[a.toMutation(n._key,Le.exists(!0))])}function gf(n){return rs($e(n.firestore,vt),[new Ai(n._key,Le.none())])}function yf(n,e){const t=$e(n.firestore,vt),r=Jt(n),s=Qa(n.converter,e),i=ts(n.firestore);return rs(t,[qa(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function Cu(n,...e){n=pe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Su(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Su(e[r])){const d=e[r];e[r]=d.next?.bind(d),e[r+1]=d.error?.bind(d),e[r+2]=d.complete?.bind(d)}let i,a,l;if(n instanceof le)a=$e(n.firestore,vt),l=Ei(n._key.path),i={next:d=>{e[r]&&e[r](_f(a,n,d))},error:e[r+1],complete:e[r+2]};else{const d=$e(n,En);a=$e(d.firestore,vt),l=d._query;const f=new df(a);i={next:p=>{e[r]&&e[r](new Nn(a,f,d,p))},error:e[r+1],complete:e[r+2]},pI(n._query)}const u=Ci(a);return eI(u,l,s,i)}function rs(n,e){const t=Ci(n);return nI(t,e)}function _f(n,e,t){const r=t.docs.get(e._key),s=new df(n);return new cn(n,s,e._key,r,new Ir(t.hasPendingWrites,t.fromCache),e.converter)}function II(n){return n=$e(n,vt),Ci(n),new EI(n,e=>rs(n,e))}(function(e,t=!0){n_(zn),On(new un("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new vt(new i_(r.getProvider("auth-internal")),new c_(a,r.getProvider("app-check-internal")),b_(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Lt(Au,bu,e),Lt(Au,bu,"esm2020")})();const TI={apiKey:"AIzaSyBTz4iLKtBiZwHk-5pjNU1AFQF1zDhyTHI",authDomain:"gen-lang-client-0019812834.firebaseapp.com",projectId:"gen-lang-client-0019812834",storageBucket:"gen-lang-client-0019812834.firebasestorage.app",messagingSenderId:"677554753890",appId:"1:677554753890:web:2c13f2a2b0e019e5471c3b",measurementId:"G-ZMRMRWXQNV"},Ef=Zu(TI),Xa=e_(Ef),Ni=oI(Ef,"money"),wI=new lt,AI="1.3.0",bI=[{version:"1.3.0",date:"2026-05-18",label:"Pro Features · Recurring UX Fix",changes:[{type:"fix",text:"รายการประจำ — ปรับ UX ใหม่ทั้งหมด: แสดงสถานะชัดเจน (ถึงกำหนด/ใกล้/จ่ายแล้ว) ไม่สับสนกับปุ่ม"},{type:"fix",text:'รายการประจำ — กดปุ่ม "💸 เพิ่มรายจ่าย" จะเปิดฟอร์มพร้อมกรอกข้อมูลให้อัตโนมัติ'},{type:"new",text:"Quick-fill รายการประจำในฟอร์มเพิ่มรายการ — เมื่อถึงกำหนด จะแสดง chip ให้เลือกทันที"},{type:"fix",text:"รายการล่าสุดบนมือถือ — แสดงแค่ 3 รายการ ไม่ต้องเลื่อนเพื่อดูหน้า Dashboard"},{type:"new",text:"[Pro] เปรียบเทียบรายเดือน — กราฟเทียบรายรับ-รายจ่ายย้อนหลัง 6/12 เดือน"},{type:"new",text:"[Pro] Savings Goal — ตั้งเป้าหมายการออม พร้อม progress bar"},{type:"new",text:"[Pro] Export PDF — พิมพ์รายงานการเงินรอบบิลปัจจุบัน"}]},{version:"1.2.0",date:"2026-05-18",label:"Budget · Recurring · Export · Insights",changes:[{type:"new",text:"Budget รายหมวดหมู่ — ตั้งวงเงินแต่ละหมวด เห็น progress bar สี 🟢🟡🔴 แบบ real-time"},{type:"new",text:"แจ้งเตือน Budget — แจ้งเมื่อใกล้เกิน (80%) และเมื่อเกินแล้ว เลือกแจ้งครั้งเดียว/ทุกครั้งได้"},{type:"new",text:"Export CSV — ดาวน์โหลดรายการเป็นไฟล์ CSV (Free 30 วัน / Pro 1 ปี)"},{type:"new",text:"Spending Insights — ค่าใช้จ่ายเฉลี่ยต่อวัน, หมวดที่ใช้มากสุด, savings rate, เทียบรอบที่แล้ว"},{type:"new",text:"รายการประจำ (Recurring) — ตั้งบิลประจำ แจ้งเตือนวันครบกำหนด กดปุ่มเดียวบันทึกว่าจ่ายแล้ว"},{type:"new",text:"ค้นหารายการ — พิมพ์ค้นหาชื่อ/จำนวน/หมวดหมู่ได้ทันที ใช้ได้ทั้ง Free และ Pro"},{type:"fix",text:"แก้สแกนสลิปรูปเดิมซ้ำไม่ได้ — กดสแกนรูปเดิมอีกครั้งใช้งานได้แล้ว"},{type:"fix",text:"แก้ loading overlay ค้างหน้าจอเมื่อเกิด error ระหว่างสแกน"},{type:"fix",text:"แก้ตัวเลขเงินมีทศนิยมผิด เช่น 0.30000000000000004"},{type:"improve",text:"Settings modal — ปิดด้วยการกด backdrop ได้แล้ว"}]},{version:"1.1.0",date:"2026-05-18",label:"ฟีเจอร์ใหม่ + ปรับปรุง",changes:[{type:"new",text:'มุมมอง "แยก" ในรายการทั้งหมด — รายรับซ้าย รายจ่ายขวา พร้อมตาชั่งบอกว่าฝั่งไหนหนักกว่า'},{type:"new",text:"Timeline วันต่อวัน — รายการจัดกลุ่มตามวันที่ อ่านง่ายขึ้น"},{type:"new",text:'สลับดู "รอบบิล" กับ "ทั้งหมด" ในหน้ารายการ'},{type:"new",text:"Pro — เก็บรูปสลิปไว้ 3 เดือน คลิก 📷 ดูภาพย้อนหลังได้ทุกเมื่อ"},{type:"new",text:"แนวโน้มรายวัน — ช่วงวันที่แสดงตามรอบบิลที่ตั้งไว้ (วันตัดรอบ 1–31)"},{type:"new",text:"แสดงจำนวนสแกนที่เหลือวันนี้ — เปลี่ยนสีเตือนเมื่อใกล้หมด"},{type:"fix",text:"แก้ข้อมูลไม่บันทึก เพราะแอปต่อ Firestore ผิด database"},{type:"fix",text:"แก้หน้า login ไม่โชว์หลัง deploy ครั้งแรก"},{type:"fix",text:"แก้เพิ่มรายการต่อเนื่องไม่ได้ — หน้าจอค้างทำให้พิมพ์ไม่ได้"},{type:"fix",text:"แก้จำนวนสแกนที่เหลือแสดงผิดหลังรีเฟรชหน้า"},{type:"improve",text:"เปิดแอปครั้งถัดไปข้อมูลโชว์เกือบทันที — ไม่ต้องรอโหลดนาน"},{type:"improve",text:"กราฟแนวโน้มไม่แสดงแท่งว่างของวันในอนาคต"}]},{version:"1.0.0",date:"2026-05-17",label:"เปิดตัว",changes:[{type:"new",text:"Login ด้วย Google — ข้อมูลแยกต่อคน sync ทุกอุปกรณ์"},{type:"new",text:"UI ใหม่ทั้งหมด — light theme, clean layout"},{type:"new",text:"สแกนสลิปด้วย Gemini 2.5 Flash AI"},{type:"new",text:"Free plan — สแกนสลิปฟรี 5 ครั้ง/วัน"},{type:"new",text:"Pro plan — สแกนไม่จำกัด + เก็บรูปสลิป"},{type:"new",text:"แนวโน้มรายวันตามรอบบิลที่ตั้งไว้"}]}],ku={th:{locale:"th-TH","login.subtitle":`บันทึกรายรับ-รายจ่ายส่วนตัว
ข้อมูลของคุณ เห็นแค่คุณคนเดียว`,"login.google":"เข้าสู่ระบบด้วย Google","login.note":`ข้อมูลทั้งหมดเก็บในบัญชี Google ของคุณ
ไม่มีค่าใช้จ่าย · ปลอดภัย · ใช้ได้ทุกอุปกรณ์`,"sync.online":"ออนไลน์","sync.offline":"ออฟไลน์","sync.syncing":"กำลังซิงค์...","nav.dashboard":"ภาพรวม","nav.transactions":"รายการทั้งหมด","nav.analytics":"หมวดหมู่","nav.trends":"แนวโน้ม","page.dashboard":"ภาพรวม","page.transactions":"รายการทั้งหมด","page.analytics":"วิเคราะห์ตามหมวดหมู่","page.trends":"แนวโน้มรายวัน","sidebar.upgrade":"⭐ อัปเกรดเป็น Pro","sidebar.signout":"ออกจากระบบ","topbar.add":"+ เพิ่มรายการ","topbar.add.text":"เพิ่มรายการ","dash.balance":"ยอดคงเหลือ","dash.income":"รายรับ","dash.expense":"รายจ่าย","dash.expenseRatio":"สัดส่วนรายจ่าย","dash.recent":"รายการล่าสุด","dash.seeAll":"ดูทั้งหมด →","dash.empty":`ยังไม่มีรายการ
กด "เพิ่มรายการ" เพื่อเริ่มต้น`,"dash.balance.positive":"↑ คุณมีเงินเหลือ","dash.balance.negative":"↓ รายจ่ายเกินรายรับ","dash.balance.zero":"รายรับเท่ากับรายจ่าย","dash.ratio.income":"รายรับ","dash.ratio.expense":"รายจ่าย","tx.title":"รายการทั้งหมด","tx.viewList":"☰ รายการ","tx.viewSplit":"⊞ แยก","tx.rangeAll":"ทั้งหมด","tx.rangeCycle":"รอบบิล","tx.filterAllTypes":"ทุกประเภท","tx.filterIncome":"รายรับ","tx.filterExpense":"รายจ่าย","tx.filterAllCats":"ทุกหมวดหมู่","tx.noResults":"ไม่มีรายการที่ตรงกับเงื่อนไข","tx.noItems":"ไม่มีรายการ","tx.scale.income":"รายรับ","tx.scale.expense":"รายจ่าย","tx.scale.noItems":"ยังไม่มีรายการ","tx.scale.equal":"เท่ากันพอดี","tx.split.income":"💰 รายรับ","tx.split.expense":"💸 รายจ่าย","tx.split.emptyIncome":"ยังไม่มีรายรับ","tx.split.emptyExpense":"ยังไม่มีรายจ่าย","trends.titleFull":"แนวโน้มรายวัน ({start} – {end})","trends.freeNotice":"📊 Free plan ดูย้อนหลังได้สูงสุด 30 วัน — ","trends.upgradeBtn":"อัปเกรดเป็น Pro ↗","trends.chart.income":"รายรับ","trends.chart.expense":"รายจ่าย","analytics.expenseTitle":"รายจ่ายแยกตามหมวดหมู่","analytics.incomeTitle":"รายรับแยกตามหมวดหมู่","analytics.noData":"ยังไม่มีข้อมูล","modal.addTitle":"เพิ่มรายการใหม่","modal.editTitle":"แก้ไขรายการ","modal.scan":"📸 สแกนสลิป / แนบรูปภาพ","modal.prepareImg":"กำลังเตรียมรูปภาพ...","modal.analyzing":"กำลังวิเคราะห์...","modal.scanning":"กำลังสแกน...","modal.type.income":"↑ รายรับ","modal.type.expense":"↓ รายจ่าย","modal.amountLabel":"จำนวนเงิน (฿)","modal.amountPlaceholder":"0.00","modal.descLabel":"รายละเอียด","modal.descPlaceholder":"เช่น ค่าอาหารกลางวัน","modal.catLabel":"หมวดหมู่","modal.dateLabel":"วันและเวลา","modal.continueLabel":"บันทึกและเพิ่มรายการต่อไป","modal.addBtn":"เพิ่มรายการ","modal.editBtn":"บันทึกการแก้ไข","delete.title":"ยืนยันการลบ","delete.confirm":"คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?","delete.cancel":"ยกเลิก","delete.delete":"ลบ","settings.title":"ตั้งค่าระบบ","settings.cutoffLabel":"วันที่ตัดรอบบิลรายเดือน (1–31)","settings.cutoffHelp":"ตัวอย่าง: ตั้งเป็นวันที่ 25 → รอบนับตั้งแต่ 25 ของเดือนก่อน ถึง 24 ของเดือนนี้","settings.langLabel":"ภาษา / Language","settings.save":"บันทึกการตั้งค่า","settings.changelog":"🆕 ประวัติอัปเดต","settings.clearData":"🗑️ ล้างข้อมูลทั้งหมด","settings.signout":"🚪 ออกจากระบบ","upgrade.title":"⭐ อัปเกรดเป็น Pro","upgrade.free":"Free","upgrade.freePrice":"ฟรี","upgrade.recommended":"แนะนำ","upgrade.pro":"Pro","upgrade.proPrice":"79 ฿/เดือน","upgrade.pay":"ชำระเงิน 79 ฿/เดือน","upgrade.note":"ยกเลิกได้ทุกเมื่อ · ชำระผ่านบัตรเครดิต / PromptPay","bnav.dashboard":"ภาพรวม","bnav.transactions":"รายการ","bnav.analytics":"หมวดหมู่","bnav.trends":"แนวโน้ม","changelog.title":"ประวัติอัปเดต","cl.new":"ใหม่","cl.fix":"แก้ไข","cl.improve":"ปรับปรุง","loading.default":"กำลังโหลด...","loading.signingIn":"กำลังเข้าสู่ระบบ...","loading.payment":"กำลังประมวลผลการชำระเงิน...","loading.deleting":"กำลังลบ...","loading.clearing":"กำลังล้างข้อมูล...","toast.signInError":"เข้าสู่ระบบไม่สำเร็จ: ","toast.saved":"✅ บันทึกแล้ว","toast.editSaved":"✅ บันทึกการแก้ไขแล้ว","toast.deleted":"🗑️ ลบรายการแล้ว","toast.deleteError":"❌ ลบไม่สำเร็จ: ","toast.fieldRequired":"กรุณากรอกข้อมูลให้ครบถ้วน","toast.scanSuccess":"✅ สแกนสำเร็จโดย Gemini 2.5 Flash","toast.scanNoAmount":"⚠️ AI ไม่พบยอดเงินในสลิปนี้","toast.scanError":"⚠️ สแกนไม่ได้: {msg} — รูปยังแนบอยู่","toast.paymentSoon":"ระบบชำระเงินกำลังเปิดใช้งาน เร็วๆ นี้","toast.paymentSuccess":"🎉 อัปเกรดเป็น Pro สำเร็จ!","toast.paymentFail":"❌ ชำระเงินไม่สำเร็จ: ","toast.settingsSaved":"บันทึกตั้งค่าแล้ว ✅","toast.settingsLocal":"บันทึกในเครื่องแล้ว (ซิงค์ไม่ได้)","toast.clearAll":"🗑️ ล้างข้อมูลทั้งหมดแล้ว","toast.clearNone":"ไม่มีข้อมูลให้ล้าง","toast.langChanged":"🌐 เปลี่ยนภาษาแล้ว","toast.cutoffError":"กรุณากรอกวันที่ระหว่าง 1-31","confirm.clearAll":"ต้องการล้างข้อมูลทั้งหมดหรือไม่?","scan.pro":"Pro — สแกนสลิปได้ไม่จำกัด ⭐","scan.free.left":"Free — เหลือ {left}/{total} ครั้งวันนี้","scan.free.exhausted":"หมดแล้ววันนี้ — อัปเกรด Pro เพื่อสแกนต่อ","scan.limit.upgrade":`ใช้ครบ {total} ครั้งสแกนฟรีวันนี้แล้ว
อัปเกรดเป็น Pro เพื่อสแกนไม่จำกัด`,"slip.viewSlip":"ดูสลิป ↗","slip.viewBtn":"ดูสลิป","cat.salary":"เงินเดือน","cat.freelance":"ฟรีแลนซ์","cat.investment":"การลงทุน","cat.gift":"ของขวัญ/โบนัส","cat.other_in":"รายรับอื่นๆ","cat.food":"อาหาร","cat.transport":"เดินทาง","cat.shopping":"ช้อปปิ้ง","cat.utilities":"ค่าสาธารณูปโภค","cat.health":"สุขภาพ","cat.entertainment":"บันเทิง","cat.education":"การศึกษา","cat.rent":"ค่าเช่า/บ้าน","cat.other_ex":"รายจ่ายอื่นๆ","dev.switchFree":"🔧 Dev: Pro → สลับ Free","dev.switchPro":"🔧 Dev: Free → สลับ Pro","dev.toasted":"🔧 Dev: สลับเป็น "},en:{locale:"en-US","login.subtitle":`Track your personal income & expenses.
Your data, visible only to you.`,"login.google":"Sign in with Google","login.note":`All data stored in your Google account.
Free · Secure · All devices`,"sync.online":"Online","sync.offline":"Offline","sync.syncing":"Syncing...","nav.dashboard":"Overview","nav.transactions":"Transactions","nav.analytics":"Categories","nav.trends":"Trends","page.dashboard":"Overview","page.transactions":"All Transactions","page.analytics":"Category Analysis","page.trends":"Daily Trends","sidebar.upgrade":"⭐ Upgrade to Pro","sidebar.signout":"Sign Out","topbar.add":"+ Add","topbar.add.text":"Add","dash.balance":"Balance","dash.income":"Income","dash.expense":"Expenses","dash.expenseRatio":"Expense Ratio","dash.recent":"Recent Transactions","dash.seeAll":"See all →","dash.empty":`No transactions yet.
Press "Add" to get started.`,"dash.balance.positive":"↑ You have money left over","dash.balance.negative":"↓ Expenses exceed income","dash.balance.zero":"Income equals expenses","dash.ratio.income":"Income","dash.ratio.expense":"Expense","tx.title":"All Transactions","tx.viewList":"☰ List","tx.viewSplit":"⊞ Split","tx.rangeAll":"All","tx.rangeCycle":"Cycle","tx.filterAllTypes":"All Types","tx.filterIncome":"Income","tx.filterExpense":"Expense","tx.filterAllCats":"All Categories","tx.noResults":"No matching transactions","tx.noItems":"No transactions","tx.scale.income":"Income","tx.scale.expense":"Expenses","tx.scale.noItems":"No transactions yet","tx.scale.equal":"Perfectly balanced","tx.split.income":"💰 Income","tx.split.expense":"💸 Expenses","tx.split.emptyIncome":"No income yet","tx.split.emptyExpense":"No expenses yet","trends.titleFull":"Daily Trend ({start} – {end})","trends.freeNotice":"📊 Free plan: view up to 30 days — ","trends.upgradeBtn":"Upgrade to Pro ↗","trends.chart.income":"Income","trends.chart.expense":"Expenses","analytics.expenseTitle":"Expenses by Category","analytics.incomeTitle":"Income by Category","analytics.noData":"No data yet","modal.addTitle":"Add New Transaction","modal.editTitle":"Edit Transaction","modal.scan":"📸 Scan Slip / Attach Image","modal.prepareImg":"Preparing image...","modal.analyzing":"Analyzing...","modal.scanning":"Scanning...","modal.type.income":"↑ Income","modal.type.expense":"↓ Expense","modal.amountLabel":"Amount (฿)","modal.amountPlaceholder":"0.00","modal.descLabel":"Description","modal.descPlaceholder":"e.g. Lunch","modal.catLabel":"Category","modal.dateLabel":"Date & Time","modal.continueLabel":"Save and add another","modal.addBtn":"Add Transaction","modal.editBtn":"Save Changes","delete.title":"Confirm Delete","delete.confirm":"Are you sure you want to delete this transaction?","delete.cancel":"Cancel","delete.delete":"Delete","settings.title":"Settings","settings.cutoffLabel":"Monthly Billing Cutoff Day (1–31)","settings.cutoffHelp":"Example: Set to 25 → cycle runs from the 25th of last month to the 24th of this month","settings.langLabel":"Language / ภาษา","settings.save":"Save Settings","settings.changelog":"🆕 Update History","settings.clearData":"🗑️ Clear All Data","settings.signout":"🚪 Sign Out","upgrade.title":"⭐ Upgrade to Pro","upgrade.free":"Free","upgrade.freePrice":"Free","upgrade.recommended":"Recommended","upgrade.pro":"Pro","upgrade.proPrice":"฿79/month","upgrade.pay":"Pay ฿79/month","upgrade.note":"Cancel anytime · Pay by credit card / PromptPay","bnav.dashboard":"Overview","bnav.transactions":"Transactions","bnav.analytics":"Categories","bnav.trends":"Trends","changelog.title":"Update History","cl.new":"New","cl.fix":"Fix","cl.improve":"Improve","loading.default":"Loading...","loading.signingIn":"Signing in...","loading.payment":"Processing payment...","loading.deleting":"Deleting...","loading.clearing":"Clearing data...","toast.signInError":"Sign-in failed: ","toast.saved":"✅ Saved","toast.editSaved":"✅ Changes saved","toast.deleted":"🗑️ Transaction deleted","toast.deleteError":"❌ Delete failed: ","toast.fieldRequired":"Please fill in all fields","toast.scanSuccess":"✅ Scanned by Gemini 2.5 Flash","toast.scanNoAmount":"⚠️ AI did not find an amount in this slip","toast.scanError":"⚠️ Scan failed: {msg} — image still attached","toast.paymentSoon":"Payment system coming soon","toast.paymentSuccess":"🎉 Upgraded to Pro successfully!","toast.paymentFail":"❌ Payment failed: ","toast.settingsSaved":"Settings saved ✅","toast.settingsLocal":"Saved locally (sync failed)","toast.clearAll":"🗑️ All data cleared","toast.clearNone":"No data to clear","toast.langChanged":"🌐 Language changed","toast.cutoffError":"Please enter a day between 1 and 31","confirm.clearAll":"Clear all transaction data?","scan.pro":"Pro — Unlimited slip scans ⭐","scan.free.left":"Free — {left}/{total} scans remaining today","scan.free.exhausted":"No scans left today — upgrade to Pro","scan.limit.upgrade":`Used all {total} free scans today.
Upgrade to Pro for unlimited scanning.`,"slip.viewSlip":"View slip ↗","slip.viewBtn":"View slip","cat.salary":"Salary","cat.freelance":"Freelance","cat.investment":"Investment","cat.gift":"Gift/Bonus","cat.other_in":"Other Income","cat.food":"Food","cat.transport":"Transport","cat.shopping":"Shopping","cat.utilities":"Utilities","cat.health":"Health","cat.entertainment":"Entertainment","cat.education":"Education","cat.rent":"Rent/Home","cat.other_ex":"Other Expense","dev.switchFree":"🔧 Dev: Pro → Switch Free","dev.switchPro":"🔧 Dev: Free → Switch Pro","dev.toasted":"🔧 Dev: Switched to "}};let Vi=(()=>{const n=localStorage.getItem("mf_lang");return n==="th"||n==="en"?n:navigator.language?.toLowerCase().startsWith("th")?"th":"en"})();function wo(){return Vi}function SI(n){n!=="th"&&n!=="en"||(Vi=n,localStorage.setItem("mf_lang",n))}function x(n,e){let t=ku[Vi]?.[n]??ku.th[n]??n;if(e)for(const[r,s]of Object.entries(e))t=t.replaceAll(`{${r}}`,s);return t}function Gt(){return x("locale")}function Du(){document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=x(e.dataset.i18n)}),document.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=x(e.dataset.i18nHtml).replace(/\n/g,"<br>")}),document.querySelectorAll("[data-i18n-ph]").forEach(e=>{e.placeholder=x(e.dataset.i18nPh)});const n=document.getElementById("select-language");n&&(n.value=Vi)}const mn={income:[{id:"salary",emoji:"💼"},{id:"freelance",emoji:"💻"},{id:"investment",emoji:"📈"},{id:"gift",emoji:"🎁"},{id:"other_in",emoji:"💰"}],expense:[{id:"food",emoji:"🍜"},{id:"transport",emoji:"🚗"},{id:"shopping",emoji:"🛍️"},{id:"utilities",emoji:"💡"},{id:"health",emoji:"🏥"},{id:"entertainment",emoji:"🎮"},{id:"education",emoji:"📚"},{id:"rent",emoji:"🏠"},{id:"other_ex",emoji:"📦"}]};function ss(n){return x(`cat.${n}`)||n}const RI={income:["#22c55e","#16a34a","#86efac","#4ade80","#bbf7d0"],expense:["#f43f5e","#e11d48","#fb7185","#f97316","#fb923c","#fbbf24","#a855f7","#8b5cf6","#6366f1"]},PI=new Map([...mn.income,...mn.expense].map(n=>[n.id,n]));function CI(n){const e=PI.get(n);return e?{...e,label:ss(n)}:{label:n,emoji:"📌"}}const Nu="pkey_test_YOUR_OMISE_PUBLIC_KEY",qn=5,Pr=["nunmongss@gmail.com"];let Cr=localStorage.getItem("mf_dev_plan")||"pro",oe=JSON.parse(localStorage.getItem("mf_cache_tx")||"[]"),Li="income",$s=null,kr=null,Tr="dashboard",ft=parseInt(localStorage.getItem("mf_cutoff_day"))||1,vf="cycle",If="",Tf=null,wf=null,ci=null,ct=null,Wt={},de={enabled:!0,notifyNear:!0,notifyOver:!0,nearThreshold:80,notifyMode:"always"},Cs={},ze=[],Ao=new Set,Vn=null,li=null,Dr=null,Ne=null,ks=null,ye=null,te="free",xi=0,Oi="",mt=null;const is=()=>nf(Ni,"users",ye.uid,"transactions"),Mi=()=>Jt(Ni,"users",ye.uid),$r=()=>nf(Ni,"users",ye.uid,"recurring"),kI=oe.length>0;kI&&(Af(),pt("syncing"),gn());jg(Xa,n=>{if(n)ye=n,Af(),VI(),ec(),pt("syncing"),oe.length>0&&gn(),OI(),LI();else{ye=null,mt&&(mt(),mt=null),Vn&&(Vn(),Vn=null),oe=[],ze=[],Wt={},te="free";const e=document.getElementById("btn-dev-toggle");e&&(e.style.display="none"),DI()}});function DI(){document.getElementById("login-screen").style.display="flex",document.getElementById("app-wrapper").style.display="none",pn()}function Af(){document.getElementById("login-screen").style.display="none",document.getElementById("app-wrapper").style.display=""}async function NI(){try{ui(x("loading.signingIn")),await ly(Xa,wI)}catch(n){pn(),z(x("toast.signInError")+n.message,"error")}}async function Vu(){mt&&(mt(),mt=null),await qg(Xa),localStorage.removeItem("mf_cache_tx")}function VI(){if(!ye)return;const n=document.getElementById("user-avatar"),e=document.getElementById("user-name");n&&(n.src=ye.photoURL||""),e&&(e.textContent=ye.displayName||ye.email||"");const t=document.getElementById("mobile-avatar"),r=document.getElementById("mobile-user-name");t&&(t.src=ye.photoURL||""),r&&(r.textContent=ye.displayName||ye.email||"")}function LI(){mt&&mt();const n=gI(is(),yI("date","desc"));pt("syncing"),mt=Cu(n,e=>{oe=e.docs.map(t=>({id:t.id,...t.data()})),xI(),FI(),gn(),pt("online"),pn()},e=>{console.error("[Firestore] snapshot error:",e),pt("offline"),pn(),z("⚠️ Firestore error: "+e.message,"error",8e3)}),Vn&&Vn(),Vn=Cu($r(),e=>{ze=e.docs.map(t=>({id:t.id,...t.data()})),Df(),iT()})}function xI(){const n=new Date;n.setDate(n.getDate()-90),oe.forEach(e=>{e.imageData&&new Date(e.createdAt)<n&&(e.imageData="",Sf(e.id,{imageData:""}).catch(()=>{}))})}async function OI(){try{const n=await Ja(Mi());if(n.exists()){const e=n.data();e.cutoff_day&&(ft=parseInt(e.cutoff_day)||1,localStorage.setItem("mf_cutoff_day",ft)),xi=e.scan_count||0,Oi=e.scan_date||"",te=Pr.includes(ye?.email)?Cr:e.plan||"free",Wt=e.budgets||{},de=Object.assign({enabled:!0,notifyNear:!0,notifyOver:!0,nearThreshold:80,notifyMode:"always"},e.budgetSettings||{}),Ne=e.savingsGoal||null}else Pr.includes(ye?.email)&&(te=Cr);os(),ZI(),Pr.includes(ye?.email)&&ec()}catch(n){console.error("loadUserMeta error:",n)}}async function Bt(n){await vI(Mi(),n,{merge:!0})}function os(){const n=document.getElementById("plan-badge");n&&(n.textContent=te==="pro"?"⭐ Pro":"Free",n.className="plan-badge "+te);const e=document.getElementById("mobile-plan-badge");e&&(e.textContent=te==="pro"?"⭐ Pro":"Free",e.className="plan-badge mobile-plan-badge "+te);const t=document.getElementById("mobile-btn-updates");t&&(t.style.display=te==="pro"?"none":"");const r=document.getElementById("btn-upgrade");r&&(r.style.display=te==="pro"?"none":"");const s=document.getElementById("scan-info");if(s)if(te==="pro")s.textContent=x("scan.pro"),s.className="scan-info-row pro";else{const a=new Date().toLocaleDateString("sv"),u=qn-(Oi===a?xi:0);s.textContent=u>0?x("scan.free.left",{left:u,total:qn}):x("scan.free.exhausted");const d=u<=0?"exhausted":u===1?"danger":u<=3?"warning":"";s.className=`scan-info-row${d?" "+d:""}`}const i=document.getElementById("btn-export-pdf");i&&(i.style.display=te==="pro"?"":"none")}async function bf(n){pt("syncing"),await yf(is(),n)}async function Sf(n,e){pt("syncing"),await Ya(Jt(is(),n),e)}async function MI(n){pt("syncing"),await gf(Jt(is(),n))}async function BI(){if(te==="pro")return!0;const n=new Date().toLocaleDateString("sv"),e=await Ja(Mi()),t=e.exists()?e.data():{},s=t.scan_date===n&&t.scan_count||0;if(s>=qn)return jr(x("scan.limit.upgrade",{total:qn})),!1;const i=s+1;return await Bt({scan_count:i,scan_date:n}),xi=i,Oi=n,os(),!0}function ui(n){n===void 0&&(n=x("loading.default")),document.getElementById("loading-text").textContent=n,document.getElementById("loading-overlay").classList.add("active")}function pn(){document.getElementById("loading-overlay").classList.remove("active")}function pt(n){const e=document.getElementById("sync-badge"),t=document.getElementById("sync-label");e.className="sync-badge "+n,t.textContent=x(`sync.${n}`)||n}function FI(){localStorage.setItem("mf_cache_tx",JSON.stringify(oe))}function ie(n){return"฿"+Number(n).toLocaleString("th-TH",{minimumFractionDigits:2,maximumFractionDigits:2})}function Rf(n){const e=new Date(n);if(isNaN(e.getTime()))return n;const t=Gt();return e.toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"})+" · "+e.toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}function Je(n,e){return CI(e)}function at(n){const e=document.createElement("div");return e.appendChild(document.createTextNode(n)),e.innerHTML}function Lu(n,e,t){const r=new Date(n,e+1,0).getDate();return new Date(n,e,Math.min(t,r))}function Xn(){const n=new Date,e=n.getFullYear(),t=n.getMonth();let r=Lu(e,t,ft);if(n.getDate()<ft){const i=t===0?11:t-1,a=t===0?e-1:e;r=Lu(a,i,ft)}const s=new Date(r);return s.setMonth(s.getMonth()+1),{start:r,end:s}}function as(n){if(!n)return!1;const e=new Date(n);if(isNaN(e.getTime()))return!1;const{start:t,end:r}=Xn();return e>=t&&e<r}function UI(){let n=0,e=0;const{start:t,end:r}=Xn();oe.forEach(i=>{if(!i.date)return;const a=new Date(i.date);isNaN(a.getTime())||a<t||a>=r||(i.type==="income"?n+=Number(i.amount):e+=Number(i.amount))});const s=i=>Math.round(i*100)/100;return{income:s(n),expense:s(e),balance:s(n-e)}}let xu;function z(n,e="success",t=3500){const r=document.getElementById("toast");r.textContent=n,r.className=`toast show ${e}`,clearTimeout(xu),xu=setTimeout(()=>{r.className="toast"},t)}function bo(n){Tr=n,document.querySelectorAll(".view").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".bottom-nav-item").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`view-${n}`);e&&e.classList.add("active");const t=document.getElementById(`nav-${n}`);t&&t.classList.add("active"),document.querySelectorAll(`.bottom-nav-item[data-view="${n}"]`).forEach(r=>r.classList.add("active")),document.getElementById("page-title").textContent=x(`page.${n}`)||n,gn(),window.innerWidth<=900&&document.getElementById("sidebar").classList.remove("open")}function ta(n){const e=document.getElementById("input-category");e.innerHTML="",mn[n].forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.emoji} ${ss(t.id)}`,e.appendChild(r)})}function Ou(){const n=document.getElementById("filter-category");n.innerHTML=`<option value="all">${x("tx.filterAllCats")}</option>`,[...mn.income,...mn.expense].forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=`${e.emoji} ${ss(e.id)}`,n.appendChild(t)})}function Mu(){const n=document.getElementById("current-date");n&&(n.textContent=new Date().toLocaleDateString(Gt(),{weekday:"short",year:"numeric",month:"short",day:"numeric"}))}function $I(){const{income:n,expense:e,balance:t}=UI();document.getElementById("total-balance").textContent=ie(t),document.getElementById("total-income").textContent=ie(n),document.getElementById("total-expense").textContent=ie(e);const r=n>0?Math.min(e/n*100,100):e>0?100:0,s=Math.max(0,Math.round(100-r)),i=document.getElementById("chibi-frame");i?.contentWindow&&i.contentWindow.postMessage({type:"setHp",hp:s},"*");const a=document.getElementById("balance-trend");t>0?a.textContent=x("dash.balance.positive"):t<0?a.textContent=x("dash.balance.negative"):a.textContent=x("dash.balance.zero");const l=window.innerWidth<=900,u=[...oe].sort((d,f)=>new Date(f.date)-new Date(d.date)).slice(0,l?3:5);jI("recent-list",u,"empty-recent"),na()}function jI(n,e,t){const r=document.getElementById(n);if(r.innerHTML="",e.length===0){const s=document.getElementById(t);s&&r.appendChild(s.cloneNode(!0));return}e.forEach(s=>{const i=Je(s.type,s.category),a=!!s.imageData,l=document.createElement("div");l.className="transaction-item",l.innerHTML=`
      <div class="tx-emoji">${i.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${at(s.description)}
          ${a?`<button class="tx-image-btn" data-id="${s.id}" title="ดูสลิป">📷</button>`:""}
        </div>
        <div class="tx-meta">${i.label} · ${Rf(s.date)}</div>
      </div>
      <div class="tx-amount ${s.type}">
        ${s.type==="income"?"+":"-"}${ie(s.amount)}
      </div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${s.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${s.id}" title="ลบ">🗑️</button>
      </div>`,r.appendChild(l)}),r.querySelectorAll(".tx-btn-edit").forEach(s=>s.addEventListener("click",()=>Lf(s.dataset.id))),r.querySelectorAll(".tx-btn-delete").forEach(s=>s.addEventListener("click",()=>Of(s.dataset.id))),r.querySelectorAll(".tx-image-btn").forEach(s=>s.addEventListener("click",()=>Pf(s.dataset.id)))}function Pf(n){const e=oe.find(r=>r.id===n);if(!e?.imageData)return;const t=document.getElementById("slip-lightbox");document.getElementById("slip-lightbox-img").src=e.imageData,t.classList.add("active")}function qI(n){Ln()}function Bu(n){vf=n,document.getElementById("btn-range-all").classList.toggle("active",n==="all"),document.getElementById("btn-range-cycle").classList.toggle("active",n==="cycle"),Ln()}function HI(n){return vf!=="cycle"?n:n.filter(e=>as(e.date))}function zI(n){const e=If.trim().toLowerCase();return e?n.filter(t=>{const r=Je(t.type,t.category);return(t.description||"").toLowerCase().includes(e)||String(t.amount).includes(e)||(r.label||"").toLowerCase().includes(e)}):n}function Ln(){const n=document.getElementById("filter-type").value,e=document.getElementById("filter-category").value;let t=HI([...oe]).sort((r,s)=>new Date(s.date)-new Date(r.date));n!=="all"&&(t=t.filter(r=>r.type===n)),e!=="all"&&(t=t.filter(r=>r.category===e)),t=zI(t),GI("all-list",t,"empty-all")}function GI(n,e,t){const r=document.getElementById(n);if(!r)return;if(r.innerHTML="",e.length===0){const i=document.getElementById(t);i?r.appendChild(i.cloneNode(!0)):r.innerHTML=`<div class="empty-state"><div class="empty-icon">📋</div><p>${x("tx.noItems")}</p></div>`;return}let s=null;e.forEach(i=>{const a=i.date?i.date.slice(0,10):"";if(a!==s){s=a;const p=document.createElement("div");p.className="timeline-date-header";const T=new Date(a+"T00:00:00");p.textContent=isNaN(T)?a:T.toLocaleDateString(Gt(),{weekday:"short",year:"numeric",month:"short",day:"numeric"}),r.appendChild(p)}const l=Je(i.type,i.category),u=document.createElement("div");u.className="transaction-item";const d=!!i.imageData,f=te==="pro"&&d;u.innerHTML=`
      <div class="tx-emoji">${l.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${at(i.description)}
          ${d?`<button class="tx-image-btn" data-id="${i.id}" title="${x("slip.viewBtn")}">📷</button>`:""}
        </div>
        <div class="tx-meta">${l.label} · ${Rf(i.date)}</div>
        ${f?`<button class="tx-slip-link" data-id="${i.id}"><img src="${i.imageData}" alt="slip" class="tx-slip-thumb" loading="lazy">${x("slip.viewSlip")}</button>`:""}
      </div>
      <div class="tx-amount ${i.type}">${i.type==="income"?"+":"-"}${ie(i.amount)}</div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${i.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${i.id}" title="ลบ">🗑️</button>
      </div>`,r.appendChild(u)}),r.querySelectorAll(".tx-btn-edit").forEach(i=>i.addEventListener("click",()=>Lf(i.dataset.id))),r.querySelectorAll(".tx-btn-delete").forEach(i=>i.addEventListener("click",()=>Of(i.dataset.id))),r.querySelectorAll(".tx-image-btn, .tx-slip-link").forEach(i=>i.addEventListener("click",()=>Pf(i.dataset.id)))}function WI(){Fu("expense","category-breakdown"),Fu("income","income-breakdown")}function KI(){const n=document.getElementById("dailyTrendChart");if(!n)return;let e,t;const r=document.getElementById("trends-free-notice"),s=document.getElementById("trends-title"),i=new Date;i.setHours(23,59,59,999);const a=Xn(),l=new Date(a.end);l.setDate(l.getDate()-1);const u=Gt(),d=a.start.toLocaleDateString(u,{day:"numeric",month:"short"}),f=l.toLocaleDateString(u,{day:"numeric",month:"short"});if(te==="pro")e=a.start,t=a.end>i?i:a.end,r&&(r.style.display="none"),s&&(s.textContent=x("trends.titleFull",{start:d,end:f}));else{t=new Date(i);const C=new Date(i);C.setDate(C.getDate()-29),C.setHours(0,0,0,0),e=a.start>=C?a.start:C,r&&(r.style.display=""),s&&(s.textContent=x("trends.titleFull",{start:d,end:f}))}const p=[],T=[],R=[],k=new Map;oe.forEach(C=>{const j=C.date?C.date.slice(0,10):null;if(!j)return;k.has(j)||k.set(j,{income:0,expense:0});const K=k.get(j);C.type==="income"?K.income+=Number(C.amount):K.expense+=Number(C.amount)});const N=new Date(e);for(;N<t;){const C=`${N.getFullYear()}-${String(N.getMonth()+1).padStart(2,"0")}-${String(N.getDate()).padStart(2,"0")}`;p.push(N.toLocaleDateString(Gt(),{day:"numeric",month:"short"}));const j=k.get(C)||{income:0,expense:0};T.push(j.income),R.push(j.expense),N.setDate(N.getDate()+1)}if(ct)if(ct.data.labels.length!==p.length)ct.destroy(),ct=null;else{ct.data.labels=p,ct.data.datasets[0].data=T,ct.data.datasets[1].data=R,ct.update("none");return}ct=new Chart(n,{type:"bar",data:{labels:p,datasets:[{label:x("trends.chart.income"),data:T,backgroundColor:"#16A34A",borderRadius:6},{label:x("trends.chart.expense"),data:R,backgroundColor:"#EF4444",borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:"#64748B",font:{family:"Noto Sans Thai",size:12}}},tooltip:{mode:"index",intersect:!1}},scales:{x:{grid:{display:!1},ticks:{color:"#64748B",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0,0,0,0.05)"},ticks:{color:"#64748B",font:{size:11},callback:C=>"฿"+C.toLocaleString()}}}}})}function QI(){const n=document.getElementById("spending-insights-content");if(!n)return;const{start:e,end:t}=Xn(),r=new Date,s=oe.filter(M=>as(M.date)),i=s.filter(M=>M.type==="expense"),a=s.filter(M=>M.type==="income"),l=i.reduce((M,E)=>M+Number(E.amount),0),u=a.reduce((M,E)=>M+Number(E.amount),0);if(s.length===0){n.innerHTML='<div class="empty-state"><div class="empty-icon">💡</div><p>ยังไม่มีข้อมูลในรอบบิลนี้</p></div>';return}const d=e,f=Math.max(1,Math.floor((Math.min(r,t)-d)/864e5)+1),p=l/f,T={};i.forEach(M=>{T[M.category]=(T[M.category]||0)+Number(M.amount)});const R=Object.entries(T).sort((M,E)=>E[1]-M[1])[0];let k="—";if(R){const M=Je("expense",R[0]);k=`${M.emoji} ${M.label}: ${ie(R[1])}`}let N="ไม่มีรายรับ";u>0&&(N=`${((u-l)/u*100).toFixed(1)}%`);const C=Object.entries(Wt).filter(([M,E])=>E?(T[M]||0)>=E:!1),j=new Date(d),K=new Date(d);K.setMonth(K.getMonth()-1);const Z=oe.filter(M=>M.type==="expense"&&M.date).filter(M=>{const E=new Date(M.date);return E>=K&&E<j}).reduce((M,E)=>M+Number(E.amount),0);let Ie="";if(Z>0){const M=l-Z,E=Math.abs(M/Z*100).toFixed(1),g=M<0?"less":"more",_=M<0?`ใช้จ่ายน้อยกว่ารอบที่แล้ว <span class="comparison-value">${E}%</span>! 🎉`:`ใช้จ่ายมากกว่ารอบที่แล้ว <span class="comparison-value">${E}%</span>`;Ie=`<div class="insight-comparison ${g}">📊 ${_}</div>`}const Be=Object.keys(Wt).length>0?C.length>0?`<span style="color:var(--red)">${C.length} หมวดเกิน Budget</span>`:'<span style="color:var(--green)">ทุกหมวดอยู่ในงบ ✓</span>':"ยังไม่ได้ตั้ง Budget";n.innerHTML=`
    <div class="insights-grid">
      <div class="insight-card">
        <div class="insight-card-label">📅 เฉลี่ยต่อวัน</div>
        <div class="insight-card-value">${ie(p)}</div>
        <div class="insight-card-sub">(${f} วันที่ผ่านมา)</div>
      </div>
      <div class="insight-card">
        <div class="insight-card-label">🏆 หมวดใช้จ่ายสูงสุด</div>
        <div class="insight-card-value" style="font-size:14px;">${k}</div>
      </div>
      <div class="insight-card ${u>0?u>l?"positive":"negative":""}">
        <div class="insight-card-label">💚 อัตราออม</div>
        <div class="insight-card-value">${N}</div>
      </div>
      <div class="insight-card">
        <div class="insight-card-label">💰 Budget</div>
        <div class="insight-card-value" style="font-size:13px;">${Be}</div>
      </div>
    </div>
    ${Ie}`}function Fu(n,e){const t=document.getElementById(e),r=oe.filter(u=>u.type===n&&as(u.date));if(r.length===0){t.innerHTML=`<div class="empty-state"><div class="empty-icon">${n==="expense"?"📊":"💵"}</div><p>${x("analytics.noData")}</p></div>`;return}const s={};r.forEach(u=>{s[u.category]=(s[u.category]||0)+Number(u.amount)});const i=Object.entries(s).sort((u,d)=>d[1]-u[1]),a=i[0][1],l=RI[n];t.innerHTML="",i.forEach(([u,d],f)=>{const p=Je(n,u),T=(d/a*100).toFixed(1),R=document.createElement("div");R.className="cat-item";const k=n==="expense"&&Wt[u]||0;let N="";if(k>0){const C=d/k,j=Math.min(C*100,100).toFixed(1),K=C>=1?"over":C>=.7?"warn":"ok",Z=d>k?d-k:0;N=`
        <div class="budget-progress-wrap">
          <div class="budget-bar-track"><div class="budget-bar-fill ${K}" style="width:${j}%"></div></div>
          <div class="budget-bar-text">
            <span>${ie(d)} / ${ie(k)}</span>
            ${Z>0?`<span class="over-label">เกิน ${ie(Z)}</span>`:""}
          </div>
        </div>`}R.innerHTML=`
      <div class="cat-emoji">${p.emoji}</div>
      <div class="cat-info">
        <div class="cat-name">${p.label}</div>
        <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${T}%;background:${l[f%l.length]};"></div></div>
        ${N}
      </div>
      <div class="cat-amount" style="color:${l[f%l.length]}">${ie(d)}</div>`,t.appendChild(R)})}function gn(){Tr==="dashboard"?$I():Tr==="transactions"?Ln():Tr==="analytics"?(WI(),Df()):Tr==="trends"&&(KI(),QI(),Cf())}function na(){const n=document.getElementById("savings-goal-card");if(!n)return;if(te!=="pro"){n.style.display="none";return}n.style.display="";const e=document.getElementById("savings-goal-content");if(!Ne||!Ne.targetAmount){e.innerHTML='<p class="form-help" style="text-align:center;padding:12px">ยังไม่ได้ตั้งเป้าหมาย กด "ตั้งค่า ✏️" เพื่อเริ่ม</p>';return}const t=oe.filter(u=>u.type==="income").reduce((u,d)=>u+Number(d.amount),0),r=oe.filter(u=>u.type==="expense").reduce((u,d)=>u+Number(d.amount),0),s=Math.max(0,t-r),i=Math.min(100,s/Ne.targetAmount*100),a=i>=100?"#16a34a":i>=60?"#d97706":"var(--indigo)",l=Ne.deadline?` · ภายใน ${Ne.deadline}`:"";e.innerHTML=`
    <div class="savings-goal-info">
      <span>${at(Ne.name||"เป้าหมายการออม")}</span>
      <span>${ie(s)} / ${ie(Ne.targetAmount)}${l}</span>
    </div>
    <div class="savings-goal-track">
      <div class="savings-goal-fill" style="width:${i.toFixed(1)}%;background:${a}"></div>
    </div>
    <div class="savings-goal-pct" style="color:${a}">${i>=100?"🎉 บรรลุเป้าหมายแล้ว!":i.toFixed(1)+"%"}</div>`}function Cf(){const n=document.getElementById("monthly-compare-card");if(!n)return;if(te!=="pro"){n.style.display="none";return}n.style.display="";const e=parseInt(document.getElementById("monthly-range-select")?.value||"6"),t=[],r=[],s=[],i=new Date;for(let l=e-1;l>=0;l--){const u=new Date(i.getFullYear(),i.getMonth()-l,1),d=`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}`;t.push(u.toLocaleDateString(Gt(),{month:"short",year:"2-digit"}));const f=oe.filter(p=>p.date&&p.date.startsWith(d));r.push(f.filter(p=>p.type==="income").reduce((p,T)=>p+Number(T.amount),0)),s.push(f.filter(p=>p.type==="expense").reduce((p,T)=>p+Number(T.amount),0))}const a=document.getElementById("monthlyCompareChart");a&&(ks&&(ks.destroy(),ks=null),ks=new Chart(a,{type:"bar",data:{labels:t,datasets:[{label:"รายรับ",data:r,backgroundColor:"#16A34A",borderRadius:4},{label:"รายจ่าย",data:s,backgroundColor:"#EF4444",borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:"#64748B",font:{family:"Noto Sans Thai",size:12}}},tooltip:{mode:"index",intersect:!1}},scales:{x:{grid:{display:!1},ticks:{color:"#64748B",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0,0,0,0.05)"},ticks:{color:"#64748B",font:{size:11},callback:l=>"฿"+l.toLocaleString()}}}}}))}function JI(){if(te!=="pro"){jr("Export PDF");return}const n=new Date,e=Xn(),t=Gt(),r=oe.filter(f=>as(f.date)),s=r.filter(f=>f.type==="income").reduce((f,p)=>f+Number(p.amount),0),i=r.filter(f=>f.type==="expense").reduce((f,p)=>f+Number(p.amount),0);document.getElementById("pdf-date-range").textContent=`${e.start.toLocaleDateString(t,{day:"numeric",month:"long",year:"numeric"})} — ${n.toLocaleDateString(t,{day:"numeric",month:"long",year:"numeric"})}`,document.getElementById("pdf-summary").innerHTML=`
    <div class="pdf-card"><div class="pdf-card-label">รายรับ</div><div class="pdf-card-val income">+${ie(s)}</div></div>
    <div class="pdf-card"><div class="pdf-card-label">รายจ่าย</div><div class="pdf-card-val expense">-${ie(i)}</div></div>
    <div class="pdf-card"><div class="pdf-card-label">คงเหลือ</div><div class="pdf-card-val">${ie(s-i)}</div></div>`;const a={};r.filter(f=>f.type==="expense").forEach(f=>{a[f.category]=(a[f.category]||0)+Number(f.amount)}),document.getElementById("pdf-categories").innerHTML=Object.entries(a).sort((f,p)=>p[1]-f[1]).map(([f,p])=>{const T=Je("expense",f);return`<div class="pdf-cat-row"><span>${T.emoji} ${T.label}</span><span>${ie(p)}</span></div>`}).join("")||"<p>ไม่มีรายจ่าย</p>";const u=[...r].sort((f,p)=>new Date(p.date)-new Date(f.date)).map(f=>{const p=Je(f.type,f.category),T=new Date(f.date);return`<tr>
      <td>${isNaN(T)?f.date:T.toLocaleDateString(t,{day:"numeric",month:"short"})}</td>
      <td>${p.emoji} ${p.label}</td>
      <td>${at(f.description)}</td>
      <td class="${f.type}">${f.type==="income"?"+":"-"}${ie(f.amount)}</td>
    </tr>`}).join("");document.getElementById("pdf-transactions").innerHTML=`<thead><tr><th>วันที่</th><th>หมวดหมู่</th><th>รายละเอียด</th><th>จำนวนเงิน</th></tr></thead><tbody>${u}</tbody>`;const d=document.getElementById("pdf-report");d.style.display="block",Y("settings-modal-overlay"),setTimeout(()=>{window.print(),setTimeout(()=>{d.style.display="none"},500)},300)}function YI(){const n=document.getElementById("budget-form-rows");n.innerHTML="",mn.expense.forEach(e=>{const t=ss(e.id),r=Wt[e.id]||"",s=document.createElement("div");s.className="budget-row",s.innerHTML=`
      <div class="budget-row-emoji">${e.emoji}</div>
      <div class="budget-row-label">${t}</div>
      <input type="number" min="0" step="1" placeholder="ไม่จำกัด"
             data-cat="${e.id}" value="${r}" />`,n.appendChild(s)}),Ke("budget-modal-overlay")}async function XI(){const n=document.querySelectorAll("#budget-form-rows input[data-cat]"),e={};n.forEach(t=>{const r=parseFloat(t.value);t.value.trim()!==""&&!isNaN(r)&&r>0&&(e[t.dataset.cat]=r)}),Wt=e;try{await Bt({budgets:e}),z("💰 บันทึก Budget สำเร็จ","success"),Y("budget-modal-overlay"),gn()}catch(t){z("❌ "+t.message,"error")}}function Uu(n){if(!de.enabled)return;const e=Wt[n];if(!e)return;const{start:t}=Xn(),r=t.toISOString().slice(0,10),s=oe.filter(u=>u.type==="expense"&&u.category===n&&as(u.date)).reduce((u,d)=>u+Number(d.amount),0),i=Je("expense",n),a=`${n}_${r}_near`,l=`${n}_${r}_over`;if(s>=e&&de.notifyOver){if(de.notifyMode==="once"&&Cs[l])return;Cs[l]=!0,z(`⚠️ ${i.emoji}${i.label} เกิน Budget แล้ว! (${ie(s)} / ${ie(e)})`,"error",5e3)}else if(s>=e*(de.nearThreshold/100)&&de.notifyNear){if(de.notifyMode==="once"&&Cs[a])return;Cs[a]=!0,z(`🔔 ${i.emoji}${i.label} ใกล้เกิน Budget (${ie(s)} / ${ie(e)})`,"warning",4e3)}}function ZI(){const n=document.getElementById("toggle-budget-notify"),e=document.getElementById("budget-notify-sub"),t=document.getElementById("toggle-notify-near"),r=document.getElementById("toggle-notify-over"),s=document.getElementById("notify-mode-once"),i=document.getElementById("notify-mode-always");n&&(n.checked=!!de.enabled,e&&(e.style.display=de.enabled?"":"none"),t&&(t.checked=!!de.notifyNear),r&&(r.checked=!!de.notifyOver),s&&(s.checked=de.notifyMode==="once"),i&&(i.checked=de.notifyMode!=="once"))}async function yr(){try{await Bt({budgetSettings:de})}catch(n){console.error("saveBudgetSettings error:",n)}}function eT(){const n=new Date,e=te==="pro"?365:30,t=n.getTime()-e*864e5,r=oe.filter(p=>p.date?new Date(p.date).getTime()>=t:!1).sort((p,T)=>new Date(p.date)-new Date(T.date)),s="\uFEFF",i="วันที่,ประเภท,หมวดหมู่,รายละเอียด,จำนวนเงิน",a=r.map(p=>{const T=Je(p.type,p.category),R=p.type==="income"?"รายรับ":"รายจ่าย",k=new Date(p.date).toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),N=`"${(p.description||"").replace(/"/g,'""')}"`;return[k,R,T.label,N,p.amount].join(",")}),l=s+[i,...a].join(`\r
`),u=new Blob([l],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(u),f=document.createElement("a");f.href=d,f.download="moneyflow_export.csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d),z(`📥 Export สำเร็จ (${r.length} รายการ)`,"success")}function kf(){const n=document.getElementById("recurring-category");n&&(n.innerHTML="",mn.expense.forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=`${e.emoji} ${ss(e.id)}`,n.appendChild(t)}))}function tT(){li=null,document.getElementById("recurring-modal-title").textContent="🔄 เพิ่มรายการประจำ",document.getElementById("recurring-form").reset(),document.getElementById("recurring-edit-id").value="",kf(),Ke("recurring-modal-overlay")}function nT(n){li=n.id,document.getElementById("recurring-modal-title").textContent="✏️ แก้ไขรายการประจำ",document.getElementById("recurring-edit-id").value=n.id,document.getElementById("recurring-desc").value=n.description||"",document.getElementById("recurring-amount").value=n.amount||"",document.getElementById("recurring-day").value=n.dayOfMonth||"",document.getElementById("recurring-installments").value=n.installments||"",document.getElementById("recurring-note").value=n.note||"",kf(),setTimeout(()=>{document.getElementById("recurring-category").value=n.category},0),Ke("recurring-modal-overlay")}async function rT(n){n.preventDefault();const e=document.getElementById("recurring-desc").value.trim(),t=parseFloat(document.getElementById("recurring-amount").value),r=document.getElementById("recurring-category").value,s=parseInt(document.getElementById("recurring-day").value),i=document.getElementById("recurring-installments").value.trim(),a=i?parseInt(i):null,l=document.getElementById("recurring-note").value.trim();if(!e||!t||!r||!s){z("กรุณากรอกข้อมูลให้ครบ","error");return}const u={description:e,amount:t,category:r,type:"expense",dayOfMonth:s,installments:a,note:l,active:!0,paidCount:0,lastPaidDate:"",createdAt:new Date().toISOString()};try{if(li){const{createdAt:d,paidCount:f,lastPaidDate:p,...T}=u;await Ya(Jt($r(),li),T),z("✅ แก้ไขรายการประจำสำเร็จ","success")}else await yf($r(),u),z("✅ เพิ่มรายการประจำสำเร็จ","success");Y("recurring-modal-overlay")}catch(d){z("❌ "+d.message,"error")}}async function sT(n){if(confirm("ลบรายการประจำนี้?"))try{await gf(Jt($r(),n)),z("🗑️ ลบรายการประจำสำเร็จ","success")}catch(e){z("❌ "+e.message,"error")}}function js(n){const e=new Date,t=e.getDate(),r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`,s=n.installments&&(n.paidCount||0)>=n.installments,i=n.lastPaidDate&&n.lastPaidDate.startsWith(r),a=!n.paidCount&&!n.lastPaidDate;if(s)return{key:"done",label:"✅ ครบทุกงวดแล้ว",canPay:!1};if(i)return{key:"paid",label:"✅ จ่ายแล้วเดือนนี้",canPay:!1};const l=n.dayOfMonth-t;if(a&&l<0){const u=new Date(e.getFullYear(),e.getMonth()+1,n.dayOfMonth),d=Math.ceil((u-e)/864e5),f=String(e.getMonth()+2).padStart(2,"0");return{key:"pending",label:`⏳ ครั้งแรก วันที่ ${n.dayOfMonth}/${f} (อีก ${d} วัน)`,canPay:!1}}return l<0?{key:"overdue",label:"🔴 เลยกำหนดแล้ว ยังไม่ได้จ่าย",canPay:!0}:l===0?{key:"overdue",label:"🔴 ถึงกำหนดวันนี้!",canPay:!0}:l<=3?{key:"soon",label:`🟡 อีก ${l} วัน`,canPay:!0}:{key:"pending",label:`⏳ อีก ${l} วัน`,canPay:!1}}function Df(){const n=document.getElementById("recurring-list");if(!n)return;if(ze.length===0){n.innerHTML='<div class="empty-state"><div class="empty-icon">🔄</div><p>ยังไม่มีรายการประจำ<br><small style="color:var(--text-3)">กด "+ เพิ่มรายการประจำ" เพื่อเริ่ม</small></p></div>';return}n.innerHTML="";const e={overdue:0,soon:1,pending:2,paid:3,done:4};[...ze].sort((r,s)=>{const i=js(r).key,a=js(s).key;return(e[i]??5)-(e[a]??5)}).forEach(r=>{const s=Je("expense",r.category),i=js(r),a=r.installments?r.installments-(r.paidCount||0):null,l=a!==null?`${a} งวดคงเหลือ`:"∞",u=document.createElement("div");u.className=`recurring-item${i.key==="overdue"?" rec-overdue":i.key==="soon"?" rec-soon":""}`,u.innerHTML=`
      <div class="tx-emoji">${s.emoji}</div>
      <div class="recurring-item-info">
        <div class="recurring-item-title">${at(r.description)} <strong>${ie(r.amount)}</strong></div>
        <div class="recurring-item-meta">ทุกวันที่ ${r.dayOfMonth} · ${l}${r.note?" · "+at(r.note):""}</div>
        <span class="rec-status ${i.key}">${i.label}</span>
      </div>
      <div class="recurring-item-actions">
        ${i.canPay?`<button class="btn-add-from-recurring" data-id="${r.id}" title="เพิ่มเป็นรายจ่าย">💸 เพิ่มรายจ่าย</button>`:""}
        <button class="tx-btn tx-btn-edit" data-id="${r.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${r.id}" title="ลบ">🗑️</button>
      </div>`,n.appendChild(u),u.querySelectorAll(".btn-add-from-recurring").forEach(d=>d.addEventListener("click",()=>{const f=ze.find(p=>p.id===d.dataset.id);f&&(ra(),setTimeout(()=>Nf(f),60))})),u.querySelectorAll(".tx-btn-edit").forEach(d=>d.addEventListener("click",()=>{const f=ze.find(p=>p.id===d.dataset.id);f&&nT(f)})),u.querySelectorAll(".tx-btn-delete").forEach(d=>d.addEventListener("click",()=>sT(d.dataset.id)))})}function Nf(n){Dr=n.id,Hn("expense"),setTimeout(()=>{document.getElementById("input-amount").value=n.amount,document.getElementById("input-description").value=n.description,setTimeout(()=>{document.getElementById("input-category").value=n.category},30)},30),document.querySelectorAll(".recurring-chip").forEach(t=>t.classList.remove("selected"));const e=document.querySelector(`.recurring-chip[data-id="${n.id}"]`);e&&e.classList.add("selected")}function iT(){const n=new Date,e=n.getDate(),t=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`;ze.forEach(r=>{!r.active||r.installments&&(r.paidCount||0)>=r.installments||r.lastPaidDate&&r.lastPaidDate.startsWith(t)||r.dayOfMonth<=e&&!Ao.has(r.id)&&(Ao.add(r.id),setTimeout(()=>{z(`🔔 ${r.description} ครบกำหนดชำระวันนี้!`,"warning",5e3)},1e3+Ao.size*1500))})}function ra(){kr=null,Dr=null,document.getElementById("modal-title").textContent=x("modal.addTitle"),document.getElementById("submit-label").textContent=x("modal.addBtn"),document.getElementById("transaction-form").reset(),document.getElementById("edit-id").value="";const n=new Date;document.getElementById("input-date").value=new Date(n-n.getTimezoneOffset()*6e4).toISOString().slice(0,16),Bi(),Hn("income"),oT(),Ke("modal-overlay")}function Vf(n){const e=document.getElementById("recurring-shortcuts-wrap");if(!e)return;if(n!=="expense"||!ze.length){e.innerHTML="",e.style.display="none";return}const t=[],r=[];if(ze.forEach(a=>{if(!a.active)return;const l=js(a);l.key==="done"||l.key==="paid"||(l.key==="overdue"||l.key==="soon"?t.push({item:a,s:l}):r.push({item:a,s:l}))}),!t.length&&!r.length){e.innerHTML="",e.style.display="none";return}const s=({item:a,s:l})=>{const u=Je("expense",a.category);return`<button class="recurring-chip ${l.key}" data-id="${a.id}">
      <span class="chip-emoji">${u.emoji}</span>
      <span class="chip-body">
        <span class="chip-name">${at(a.description)}</span>
        <span class="chip-amt">${ie(a.amount)}</span>
      </span>
      <span class="chip-badge ${l.key}">${l.label}</span>
    </button>`};let i="";if(t.length&&(i+=`<div class="rec-shortcut-section urgent">
      <div class="rec-shortcut-label">🔔 ถึงกำหนด — เลือกเพื่อกรอกอัตโนมัติ</div>
      <div class="recurring-chips">${t.map(s).join("")}</div>
    </div>`),r.length){const a="rec-upcoming-detail";i+=`<div class="rec-shortcut-section upcoming">
      <button class="rec-upcoming-toggle" onclick="document.getElementById('${a}').classList.toggle('open')">
        📋 รายการประจำอื่นๆ (${r.length}) <span class="toggle-arrow">▾</span>
      </button>
      <div id="${a}" class="rec-upcoming-list">
        <div class="recurring-chips">${r.map(s).join("")}</div>
      </div>
    </div>`}e.innerHTML=i,e.style.display="",e.querySelectorAll(".recurring-chip").forEach(a=>{a.addEventListener("click",()=>{const l=ze.find(u=>u.id===a.dataset.id);l&&Nf(l)})})}function oT(){Vf(Li)}function Lf(n){const e=oe.find(t=>t.id===n);e&&(kr=n,document.getElementById("modal-title").textContent=x("modal.editTitle"),document.getElementById("submit-label").textContent=x("modal.editBtn"),document.getElementById("edit-id").value=n,document.getElementById("input-amount").value=e.amount,document.getElementById("input-description").value=e.description,document.getElementById("input-date").value=e.date,Bi(),Hn(e.type),setTimeout(()=>{document.getElementById("input-category").value=e.category},0),Ke("modal-overlay"))}function Hn(n){Li=n,document.getElementById("type-income").classList.toggle("active",n==="income"),document.getElementById("type-expense").classList.toggle("active",n==="expense"),ta(n),Vf(n)}function Ke(n){document.getElementById(n).classList.add("open"),xf()}function Y(n){document.getElementById(n).classList.remove("open"),xf()}function xf(){const n=document.querySelector(".modal-overlay.open");document.body.style.overflow=n?"hidden":""}function Of(n){$s=n,Ke("delete-overlay")}function jr(n=""){document.getElementById("upgrade-reason").textContent=n,Ke("upgrade-modal-overlay")}async function aT(n){n.preventDefault();const e=parseFloat(document.getElementById("input-amount").value),t=document.getElementById("input-description").value.trim(),r=document.getElementById("input-category").value,s=document.getElementById("input-date").value;if(!e||e<=0||!t||!r||!s){z(x("toast.fieldRequired"),"error");return}const i=!!kr,a=document.getElementById("check-continue").checked,l=document.getElementById("btn-submit");l.disabled=!0;try{const u={type:Li,amount:e,description:t,category:r,date:s,createdAt:new Date().toISOString(),imageData:te==="pro"&&ci?ci:""};if(i)await Sf(kr,u),kr=null,z(x("toast.editSaved")),Y("modal-overlay"),u.type==="expense"&&setTimeout(()=>Uu(u.category),500);else{if(await bf(u),Dr){const d=ze.find(f=>f.id===Dr);if(d){const f=new Date().toLocaleDateString("sv");Ya(Jt($r(),d.id),{paidCount:(d.paidCount||0)+1,lastPaidDate:f}).catch(()=>{})}Dr=null}if(z(x("toast.saved")),u.type==="expense"&&setTimeout(()=>Uu(u.category),500),a){document.getElementById("input-amount").value="",document.getElementById("input-description").value="",Bi();const d=new Date;document.getElementById("input-date").value=new Date(d-d.getTimezoneOffset()*6e4).toISOString().slice(0,16),document.getElementById("input-amount").focus()}else Y("modal-overlay")}}catch(u){z("❌ "+u.message,"error")}finally{l.disabled=!1}}function Bi(){Tf=null,wf=null,ci=null;const n=document.getElementById("image-preview-container"),e=document.getElementById("image-preview");e.src="",n.style.display="none",document.getElementById("input-slip").value=""}function Mf(n,e,t=800,r=.72){return new Promise(s=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;(a>t||l>t)&&(a>l?(l=Math.round(l*t/a),a=t):(a=Math.round(a*t/l),l=t));const u=document.createElement("canvas");u.width=a,u.height=l,u.getContext("2d").drawImage(i,0,0,a,l),s(u.toDataURL("image/jpeg",r))},i.onerror=()=>s(`data:${e};base64,${n}`),i.src=`data:${e};base64,${n}`})}async function cT(n){const e=n.target.files[0];if(!e)return;const t=document.getElementById("scan-progress"),r=t.querySelector(".progress-bar"),s=t.querySelector(".progress-text");t.classList.add("active"),s.textContent=x("modal.prepareImg"),r.style.setProperty("--progress","10%");try{if(!await BI()){t.classList.remove("active"),document.getElementById("input-slip").value="";return}const a=await Bf(e),l=e.type||"image/jpeg";Tf=a,wf=l,ci=te==="pro"?await Mf(a,l,1200,.82):null;const u=document.getElementById("image-preview-container"),d=document.getElementById("image-preview");d.src=`data:${l};base64,${a}`,u.style.display="block",s.textContent=x("modal.analyzing"),r.style.setProperty("--progress","40%");const f=await fetch("/api/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base64Data:a,mimeType:l})});if(!f.ok){const T=await f.json().catch(()=>({}));throw new Error(T.error||`Server Error ${f.status}`)}const p=await f.json();r.style.setProperty("--progress","90%"),p.amount?(document.getElementById("input-amount").value=p.amount,p.description&&(document.getElementById("input-description").value=p.description),z(x("toast.scanSuccess"))):z(x("toast.scanNoAmount"),"error"),Hn("expense"),r.style.setProperty("--progress","100%")}catch(i){console.error("Scan error:",i),z(x("toast.scanError",{msg:i.message}),"error",6e3)}finally{document.getElementById("input-slip").value="",setTimeout(()=>t.classList.remove("active"),500)}}function Bf(n){return new Promise((e,t)=>{const r=new FileReader;r.readAsDataURL(n),r.onload=()=>e(r.result.split(",")[1]),r.onerror=t})}const So=10,lT=3;let Ve=[];const H={jobs:[],isActive:!1,total:0,completed:0,succeeded:0,failed:0,expanded:!1};function uT(){Y("modal-overlay"),Ke("batch-scan-modal-overlay"),Ve=[],Za(),setTimeout(()=>document.getElementById("batch-scan-input").click(),150)}function qs(){Y("batch-scan-modal-overlay"),Ve=[],document.getElementById("batch-scan-input").value=""}function hT(n){const e=Array.from(n.target.files||[]);if(n.target.value="",e.length===0)return;const t=[...Ve,...e];t.length>So?(z(`เลือกได้สูงสุด ${So} ใบต่อครั้ง`,"error"),Ve=t.slice(0,So)):Ve=t,Za()}function Za(){const n=document.getElementById("batch-scan-file-list"),e=document.getElementById("batch-scan-summary"),t=document.getElementById("batch-scan-count"),r=document.getElementById("batch-scan-start");if(Ve.length===0){n.innerHTML="",e.style.display="none",r.disabled=!0;return}e.style.display="",t.textContent=Ve.length,r.disabled=!1,n.innerHTML=Ve.map((s,i)=>`
    <div class="batch-file-item">
      <span class="batch-file-item-name">${at(s.name)}</span>
      <span class="batch-file-item-size">${(s.size/1024).toFixed(0)} KB</span>
      <button class="batch-file-item-remove" data-idx="${i}" title="ลบออก">✕</button>
    </div>
  `).join(""),n.querySelectorAll(".batch-file-item-remove").forEach(s=>{s.addEventListener("click",()=>{Ve.splice(+s.dataset.idx,1),Za()})})}async function dT(){if(Ve.length===0)return;let n=Ve.length;if(te!=="pro"){const s=new Date().toLocaleDateString("sv"),i=await Ja(Mi()),a=i.exists()?i.data():{},u=a.scan_date===s&&a.scan_count||0,d=qn-u;if(d<=0){jr(x("scan.limit.upgrade",{total:qn}));return}n=Math.min(Ve.length,d),n<Ve.length&&z(`โควต้าเหลือ ${d} ใบ จะสแกนแค่ ${n} ใบแรก`,"error",4e3);const f=u+n;await Bt({scan_count:f,scan_date:s}),xi=f,Oi=s,os()}const e=Ve.slice(0,n),t=Ve.slice(n),r=Date.now();H.jobs=[...e.map((s,i)=>({id:`job_${r}_${i}`,file:s,status:"pending",result:null,error:null,attempts:0})),...t.map((s,i)=>({id:`job_skip_${r}_${i}`,file:s,status:"error",result:null,error:"หมดโควต้าวันนี้",attempts:0}))],H.isActive=!0,H.total=H.jobs.length,H.completed=t.length,H.succeeded=0,H.failed=t.length,qs(),pT(),Ff()}function Ff(){const n=H.jobs.filter(r=>r.status==="scanning").length,e=H.jobs.filter(r=>r.status==="pending"),t=lT-n;for(let r=0;r<t&&r<e.length;r++){const s=e[r];s.status="scanning",mT(s)}xn()}const $u=2;function fT(n){if(!n||typeof n!="string")return null;const e=n.trim().replace(" ","T"),t=new Date(e);if(isNaN(t.getTime()))return null;const r=Date.now(),s=t.getTime();return s>r+864e5||s<new Date("2000-01-01").getTime()?null:t.toISOString()}async function mT(n){let e=null,t=null;for(let r=0;r<=$u;r++){n.attempts=r+1,xn();try{const s=await Bf(n.file),i=n.file.type||"image/jpeg",a=await fetch("/api/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base64Data:s,mimeType:i})});if(!a.ok){const u=await a.json().catch(()=>({}));throw new Error(u.error||`Server Error ${a.status}`)}const l=await a.json();if(!l.amount)throw new Error("AI อ่านยอดไม่ได้");t={data:l,base64Data:s,mimeType:i};break}catch(s){e=s,r<$u&&await new Promise(i=>setTimeout(i,800))}}if(!t)n.status="error",n.error=`${e?.message||"สแกนล้มเหลว"} (ลอง ${n.attempts} ครั้ง)`;else try{const{data:r,base64Data:s,mimeType:i}=t;let a="";if(te==="pro")try{a=await Mf(s,i,1200,.82)}catch{}const l=fT(r.datetime)||new Date().toISOString(),u={type:"expense",amount:parseFloat(r.amount),description:r.description||"รายการจากสลิป",category:"other_ex",date:l,createdAt:new Date().toISOString(),imageData:a};await bf(u),n.status="done",n.result=u}catch(r){n.status="error",n.error=r.message||String(r)}H.completed++,n.status==="done"?H.succeeded++:H.failed++,xn(),H.completed<H.total?Ff():(H.isActive=!1,xn())}function pT(){document.getElementById("bg-scan-popup").classList.add("active"),xn()}function xn(){const n=document.getElementById("bg-scan-title"),e=document.getElementById("bg-scan-progress-bar"),t=document.getElementById("bg-scan-stats"),r=document.getElementById("bg-scan-actions"),s=document.getElementById("bg-scan-list");H.isActive?(n.textContent=`🔄 สแกนสลิป ${H.completed}/${H.total}`,r.hidden=!0):(n.textContent=`✅ เสร็จ! เพิ่ม ${H.succeeded} รายการ${H.failed?` (ล้มเหลว ${H.failed})`:""}`,r.hidden=!1);const i=H.total-H.completed;t.textContent=`✓ ${H.succeeded}  ✕ ${H.failed}  ⏳ ${i}`;const a=H.total>0?H.completed/H.total*100:0;e.style.width=a+"%",H.expanded?(s.hidden=!1,s.innerHTML=H.jobs.map(l=>{const u=l.status==="done"?"✓":l.status==="error"?"✕":l.status==="scanning"?l.attempts>1?`🔁${l.attempts}`:"⏳":"⋯",d=l.status==="done"?`฿${l.result?.amount?.toFixed(2)??""}`:l.status==="error"?l.error||"ผิดพลาด":l.file.name;return`<div class="bg-scan-list-item">
        <span class="status-icon">${u}</span>
        <span class="file-name">${at(l.file.name)}</span>
        <span style="color:var(--text-2);font-size:11px;">${at(d)}</span>
      </div>`}).join("")):s.hidden=!0}function gT(){H.expanded=!H.expanded,document.getElementById("bg-scan-toggle").textContent=H.expanded?"▴":"▾",xn()}function ju(){if(H.isActive){z("ยังสแกนไม่เสร็จ — รอให้เสร็จก่อนปิด","error");return}document.getElementById("bg-scan-popup").classList.remove("active"),H.jobs=[],H.total=0,H.completed=0,H.succeeded=0,H.failed=0,H.expanded=!1,document.getElementById("bg-scan-toggle").textContent="▾"}function ec(){const n=document.getElementById("btn-dev-toggle");if(!n)return;const e=Pr.includes(ye?.email);n.style.display=e?"":"none",n.textContent=x(te==="pro"?"dev.switchFree":"dev.switchPro")}function yT(){Pr.includes(ye?.email)&&(Cr=te==="pro"?"free":"pro",localStorage.setItem("mf_dev_plan",Cr),te=Cr,os(),ec(),z(x("dev.toasted")+(te==="pro"?"Pro ⭐":"Free")))}async function _T(){if(Nu.includes("YOUR_OMISE")){z(x("toast.paymentSoon"),"error",4e3);return}window.OmiseCard||await new Promise((n,e)=>{const t=document.createElement("script");t.src="https://cdn.omise.co/omise.js",t.onload=n,t.onerror=e,document.head.appendChild(t)}),window.OmiseCard.configure({publicKey:Nu}),window.OmiseCard.open({frameLabel:"MoneyFlow Pro",submitLabel:x("upgrade.pay"),currency:"THB",amount:7900,onCreateTokenSuccess:async n=>{try{ui(x("loading.payment")),Y("upgrade-modal-overlay");const t=await(await fetch("/api/payment-create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,uid:ye.uid,email:ye.email})})).json();t.success?(te="pro",await Bt({plan:"pro",pro_until:t.pro_until}),os(),z(x("toast.paymentSuccess"),"success",5e3)):z(x("toast.paymentFail")+(t.error||""),"error")}catch(e){z("❌ "+e.message,"error")}finally{pn()}},onFormClosed:()=>{}})}function qu(){const n=document.getElementById("changelog-body"),e={new:"✨",fix:"🐛",improve:"⚡"},t=Gt();n.innerHTML=bI.map(r=>`
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
            <span class="cl-tag ${s.type}">${x(`cl.${s.type}`)||s.type}</span>
            <span class="cl-text">${s.text}</span>
          </li>`).join("")}
      </ul>
    </div>`).join(""),document.getElementById("changelog-overlay").classList.add("open"),Y("settings-modal-overlay")}function Zn(){const n=window.visualViewport,e=n?.width??window.innerWidth??document.documentElement.clientWidth,t=n?.height??window.innerHeight??document.documentElement.clientHeight,r=document.documentElement;r.style.setProperty("--app-vw",e+"px"),r.style.setProperty("--app-vh",t+"px"),r.classList.toggle("viewport-mobile",e<=900),r.classList.toggle("viewport-tablet",e>900&&e<=1280),r.classList.toggle("viewport-desktop",e>1280)}Zn();window.addEventListener("resize",Zn,{passive:!0});window.addEventListener("orientationchange",Zn,{passive:!0});window.visualViewport?.addEventListener("resize",Zn,{passive:!0});window.visualViewport?.addEventListener("scroll",Zn,{passive:!0});function ET(){Du(),Mu(),Zn(),ta("income"),Ou();const n=document.getElementById("app-version");n&&(n.textContent="v"+AI),document.getElementById("btn-google-signin").addEventListener("click",NI),document.querySelectorAll(".nav-item, .bottom-nav-item").forEach(i=>i.addEventListener("click",()=>{bo(i.dataset.view),document.getElementById("sidebar").classList.remove("open")})),document.getElementById("see-all-btn").addEventListener("click",()=>bo("transactions")),document.getElementById("menu-toggle").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open")),document.addEventListener("click",i=>{const a=document.getElementById("sidebar"),l=document.getElementById("menu-toggle");window.innerWidth<=900&&a.classList.contains("open")&&!a.contains(i.target)&&i.target!==l&&a.classList.remove("open")}),document.getElementById("btn-open-modal").addEventListener("click",ra),document.getElementById("mobile-fab")?.addEventListener("click",ra),document.getElementById("type-income").addEventListener("click",()=>Hn("income")),document.getElementById("type-expense").addEventListener("click",()=>Hn("expense")),document.getElementById("modal-close").addEventListener("click",()=>Y("modal-overlay")),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("modal-overlay")}),document.getElementById("transaction-form").addEventListener("submit",aT),document.getElementById("delete-confirm").addEventListener("click",async()=>{if(!$s)return;const i=$s;$s=null,Y("delete-overlay");try{ui(x("loading.deleting")),await MI(i),z(x("toast.deleted"))}catch(a){z(x("toast.deleteError")+a.message,"error")}finally{pn()}}),document.getElementById("delete-cancel").addEventListener("click",()=>Y("delete-overlay")),document.getElementById("delete-cancel-x").addEventListener("click",()=>Y("delete-overlay")),document.getElementById("delete-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("delete-overlay")}),document.getElementById("btn-clear-all").addEventListener("click",async()=>{if(oe.length===0){z(x("toast.clearNone"),"error");return}if(confirm(x("confirm.clearAll"))){Y("settings-modal-overlay");try{ui(x("loading.clearing"));const i=II(Ni);oe.forEach(a=>i.delete(Jt(is(),a.id))),await i.commit(),z(x("toast.clearAll"))}catch(i){z("❌ "+i.message,"error")}finally{pn()}}}),document.getElementById("filter-type").addEventListener("change",Ln),document.getElementById("filter-category").addEventListener("change",Ln),document.getElementById("tx-search").addEventListener("input",i=>{If=i.target.value,Ln()}),document.getElementById("btn-remove-image").addEventListener("click",Bi),document.getElementById("btn-open-settings").addEventListener("click",()=>{document.getElementById("input-cutoff-day").value=ft,document.getElementById("select-language").value=wo(),Ke("settings-modal-overlay")}),document.getElementById("settings-modal-close").addEventListener("click",()=>Y("settings-modal-overlay")),document.getElementById("settings-modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("settings-modal-overlay")}),document.getElementById("btn-save-settings").addEventListener("click",async()=>{const i=parseInt(document.getElementById("input-cutoff-day").value),a=document.getElementById("select-language").value;if(i<1||i>31||isNaN(i)){z(x("toast.cutoffError"),"error");return}a!==wo()&&(SI(a),Du(),ta(Li),Ou(),pt(document.getElementById("sync-badge").className.replace("sync-badge ","").trim()||"offline"),Mu()),ft=i,localStorage.setItem("mf_cutoff_day",ft);try{await Bt({cutoff_day:i}),z(x("toast.settingsSaved"))}catch{z(x("toast.settingsLocal"),"error")}Y("settings-modal-overlay"),gn()}),document.getElementById("btn-upgrade").addEventListener("click",()=>jr()),document.getElementById("btn-trends-upgrade")?.addEventListener("click",()=>jr(x("trends.upgradeBtn"))),document.getElementById("upgrade-modal-close").addEventListener("click",()=>Y("upgrade-modal-overlay")),document.getElementById("upgrade-modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("upgrade-modal-overlay")}),document.getElementById("btn-pay-omise").addEventListener("click",_T),document.getElementById("btn-view-list")?.addEventListener("click",()=>qI()),document.getElementById("btn-range-all")?.addEventListener("click",()=>Bu("all")),document.getElementById("btn-range-cycle")?.addEventListener("click",()=>Bu("cycle"));const e=document.getElementById("btn-dev-toggle");e&&e.addEventListener("click",yT),document.getElementById("btn-signout").addEventListener("click",Vu),document.getElementById("btn-signout-settings")?.addEventListener("click",Vu),document.getElementById("mobile-btn-updates")?.addEventListener("click",qu),document.getElementById("mobile-btn-settings")?.addEventListener("click",()=>{document.getElementById("input-cutoff-day").value=ft,document.getElementById("select-language").value=wo(),Ke("settings-modal-overlay")}),document.getElementById("btn-changelog").addEventListener("click",qu),document.getElementById("changelog-close").addEventListener("click",()=>Y("changelog-overlay")),document.getElementById("changelog-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("changelog-overlay")});const t=()=>document.getElementById("slip-lightbox").classList.remove("active");document.getElementById("slip-lightbox-close").addEventListener("click",t),document.getElementById("slip-lightbox-backdrop").addEventListener("click",t),document.getElementById("btn-scan").addEventListener("click",()=>document.getElementById("input-slip").click()),document.getElementById("input-slip").addEventListener("change",cT),document.getElementById("btn-scan-batch")?.addEventListener("click",uT),document.getElementById("batch-scan-modal-close")?.addEventListener("click",qs),document.getElementById("batch-scan-cancel")?.addEventListener("click",qs),document.getElementById("batch-scan-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&qs()}),document.getElementById("batch-scan-pick")?.addEventListener("click",()=>document.getElementById("batch-scan-input").click()),document.getElementById("batch-scan-input")?.addEventListener("change",hT),document.getElementById("batch-scan-start")?.addEventListener("click",dT),document.getElementById("bg-scan-toggle")?.addEventListener("click",gT),document.getElementById("bg-scan-close")?.addEventListener("click",ju),document.getElementById("bg-scan-view-list")?.addEventListener("click",()=>{bo("transactions"),ju()}),document.getElementById("btn-open-budget")?.addEventListener("click",YI),document.getElementById("budget-modal-close")?.addEventListener("click",()=>Y("budget-modal-overlay")),document.getElementById("budget-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&Y("budget-modal-overlay")}),document.getElementById("btn-save-budget")?.addEventListener("click",XI),document.getElementById("btn-cancel-budget")?.addEventListener("click",()=>Y("budget-modal-overlay")),document.getElementById("btn-add-recurring")?.addEventListener("click",tT),document.getElementById("recurring-modal-close")?.addEventListener("click",()=>Y("recurring-modal-overlay")),document.getElementById("recurring-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&Y("recurring-modal-overlay")}),document.getElementById("recurring-form")?.addEventListener("submit",rT),document.getElementById("btn-cancel-recurring")?.addEventListener("click",()=>Y("recurring-modal-overlay")),document.getElementById("btn-export-csv")?.addEventListener("click",eT),document.getElementById("btn-export-pdf")?.addEventListener("click",JI),document.getElementById("monthly-range-select")?.addEventListener("change",Cf),document.getElementById("btn-edit-savings-goal")?.addEventListener("click",()=>{Ne?(document.getElementById("savings-goal-name").value=Ne.name||"",document.getElementById("savings-goal-amount").value=Ne.targetAmount||"",document.getElementById("savings-goal-deadline").value=Ne.deadline||""):(document.getElementById("savings-goal-name").value="",document.getElementById("savings-goal-amount").value="",document.getElementById("savings-goal-deadline").value=""),Ke("savings-goal-modal-overlay")}),document.getElementById("savings-goal-modal-close")?.addEventListener("click",()=>Y("savings-goal-modal-overlay")),document.getElementById("savings-goal-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&Y("savings-goal-modal-overlay")}),document.getElementById("btn-save-savings-goal")?.addEventListener("click",async()=>{const i=document.getElementById("savings-goal-name").value.trim(),a=parseFloat(document.getElementById("savings-goal-amount").value),l=document.getElementById("savings-goal-deadline").value;if(!a||a<=0){z("กรุณาใส่จำนวนเงินเป้าหมาย","error");return}Ne={name:i,targetAmount:a,deadline:l},await Bt({savingsGoal:Ne}),Y("savings-goal-modal-overlay"),na(),z("🎯 บันทึกเป้าหมายสำเร็จ")}),document.getElementById("btn-clear-savings-goal")?.addEventListener("click",async()=>{confirm("ลบเป้าหมายการออม?")&&(Ne=null,await Bt({savingsGoal:null}),Y("savings-goal-modal-overlay"),na(),z("ลบเป้าหมายแล้ว","warning"))});const r=document.getElementById("toggle-budget-notify"),s=document.getElementById("budget-notify-sub");r?.addEventListener("change",()=>{de.enabled=r.checked,s&&(s.style.display=de.enabled?"":"none"),yr()}),document.getElementById("toggle-notify-near")?.addEventListener("change",i=>{de.notifyNear=i.target.checked,yr()}),document.getElementById("toggle-notify-over")?.addEventListener("change",i=>{de.notifyOver=i.target.checked,yr()}),document.getElementById("notify-mode-once")?.addEventListener("change",i=>{i.target.checked&&(de.notifyMode="once",yr())}),document.getElementById("notify-mode-always")?.addEventListener("change",i=>{i.target.checked&&(de.notifyMode="always",yr())}),oe.length>0&&gn()}ET();
