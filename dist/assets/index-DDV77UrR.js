(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const gm=()=>{};var tl={};/**
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
 */const ju=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},pm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let T=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(T=64)),r.push(t[f],t[g],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ju(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||g==null)throw new ym;const T=i<<2|l>>4;if(r.push(T),d!==64){const R=l<<4&240|d>>2;if(r.push(R),g!==64){const k=d<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ym extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _m=function(n){const e=ju(n);return qu.encodeByteArray(e,!0)},qs=function(n){return _m(n).replace(/\./g,"")},Hu=function(n){try{return qu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Em(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vm=()=>Em().__FIREBASE_DEFAULTS__,Im=()=>{if(typeof process>"u"||typeof tl>"u")return;const n=tl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hu(n[1]);return e&&JSON.parse(e)},ui=()=>{try{return gm()||vm()||Im()||Tm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zu=n=>ui()?.emulatorHosts?.[n],wm=n=>{const e=zu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Gu=()=>ui()?.config,Wu=n=>ui()?.[`_${n}`];/**
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
 */class Am{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function bm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[qs(JSON.stringify(t)),qs(JSON.stringify(a)),""].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Rm(){const n=ui()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function km(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dm(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Nm(){return!Rm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vm(){try{return typeof indexedDB=="object"}catch{return!1}}function Lm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const xm="FirebaseError";class It extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xm,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Om(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new It(s,l,r)}}function Om(n,e){return n.replace(Mm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mm=/\{\$([^}]+)}/g;function Bm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ln(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(nl(i)&&nl(a)){if(!ln(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function nl(n){return n!==null&&typeof n=="object"}/**
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
 */function qr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fm(n,e){const t=new Um(n,e);return t.subscribe.bind(t)}class Um{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$m(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=co),s.error===void 0&&(s.error=co),s.complete===void 0&&(s.complete=co);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $m(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function co(){}/**
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
 */function ge(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Hr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ku(n){return(await fetch(n,{credentials:"include"})).ok}class un{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class jm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Am;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hm(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rn){return this.instances.has(e)}getOptions(e=rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rn){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qm(n){return n===rn?void 0:n}function Hm(n){return n.instantiationMode==="EAGER"}/**
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
 */class zm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Gm={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Wm=Q.INFO,Km={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Qm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Km[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ra{constructor(e){this.name=e,this._logLevel=Wm,this._logHandler=Qm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Jm=(n,e)=>e.some(t=>n instanceof t);let rl,sl;function Ym(){return rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xm(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qu=new WeakMap,So=new WeakMap,Ju=new WeakMap,lo=new WeakMap,sa=new WeakMap;function Zm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Nt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Qu.set(t,n)}).catch(()=>{}),sa.set(e,n),e}function eg(n){if(So.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});So.set(n,e)}let Ro={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return So.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ju.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tg(n){Ro=n(Ro)}function ng(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(uo(this),e,...t);return Ju.set(r,e.sort?e.sort():[e]),Nt(r)}:Xm().includes(n)?function(...e){return n.apply(uo(this),e),Nt(Qu.get(this))}:function(...e){return Nt(n.apply(uo(this),e))}}function rg(n){return typeof n=="function"?ng(n):(n instanceof IDBTransaction&&eg(n),Jm(n,Ym())?new Proxy(n,Ro):n)}function Nt(n){if(n instanceof IDBRequest)return Zm(n);if(lo.has(n))return lo.get(n);const e=rg(n);return e!==n&&(lo.set(n,e),sa.set(e,n)),e}const uo=n=>sa.get(n);function sg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Nt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Nt(a.result),u.oldVersion,u.newVersion,Nt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const ig=["get","getKey","getAll","getAllKeys","count"],og=["put","add","delete","clear"],ho=new Map;function il(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=og.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ig.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return ho.set(e,i),i}tg(n=>({...n,get:(e,t,r)=>il(e,t)||n.get(e,t,r),has:(e,t)=>!!il(e,t)||n.has(e,t)}));/**
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
 */class ag{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function cg(n){return n.getComponent()?.type==="VERSION"}const Po="@firebase/app",ol="0.14.12";/**
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
 */const pt=new ra("@firebase/app"),lg="@firebase/app-compat",ug="@firebase/analytics-compat",hg="@firebase/analytics",dg="@firebase/app-check-compat",fg="@firebase/app-check",mg="@firebase/auth",gg="@firebase/auth-compat",pg="@firebase/database",yg="@firebase/data-connect",_g="@firebase/database-compat",Eg="@firebase/functions",vg="@firebase/functions-compat",Ig="@firebase/installations",Tg="@firebase/installations-compat",wg="@firebase/messaging",Ag="@firebase/messaging-compat",bg="@firebase/performance",Sg="@firebase/performance-compat",Rg="@firebase/remote-config",Pg="@firebase/remote-config-compat",Cg="@firebase/storage",kg="@firebase/storage-compat",Dg="@firebase/firestore",Ng="@firebase/ai",Vg="@firebase/firestore-compat",Lg="firebase",xg="12.13.0";/**
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
 */const Co="[DEFAULT]",Og={[Po]:"fire-core",[lg]:"fire-core-compat",[hg]:"fire-analytics",[ug]:"fire-analytics-compat",[fg]:"fire-app-check",[dg]:"fire-app-check-compat",[mg]:"fire-auth",[gg]:"fire-auth-compat",[pg]:"fire-rtdb",[yg]:"fire-data-connect",[_g]:"fire-rtdb-compat",[Eg]:"fire-fn",[vg]:"fire-fn-compat",[Ig]:"fire-iid",[Tg]:"fire-iid-compat",[wg]:"fire-fcm",[Ag]:"fire-fcm-compat",[bg]:"fire-perf",[Sg]:"fire-perf-compat",[Rg]:"fire-rc",[Pg]:"fire-rc-compat",[Cg]:"fire-gcs",[kg]:"fire-gcs-compat",[Dg]:"fire-fst",[Vg]:"fire-fst-compat",[Ng]:"fire-vertex","fire-js":"fire-js",[Lg]:"fire-js-all"};/**
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
 */const Hs=new Map,Mg=new Map,ko=new Map;function al(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xn(n){const e=n.name;if(ko.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;ko.set(e,n);for(const t of Hs.values())al(t,n);for(const t of Mg.values())al(t,n);return!0}function ia(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Bg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new jr("app","Firebase",Bg);/**
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
 */class Fg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Hn=xg;function Yu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Co,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(t||(t=Gu()),!t)throw Vt.create("no-options");const i=Hs.get(s);if(i){if(ln(t,i.options)&&ln(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const a=new zm(s);for(const u of ko.values())a.addComponent(u);const l=new Fg(t,r,a);return Hs.set(s,l),l}function Xu(n=Co){const e=Hs.get(n);if(!e&&n===Co&&Gu())return Yu();if(!e)throw Vt.create("no-app",{appName:n});return e}function Lt(n,e,t){let r=Og[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(a.join(" "));return}xn(new un(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ug="firebase-heartbeat-database",$g=1,kr="firebase-heartbeat-store";let fo=null;function Zu(){return fo||(fo=sg(Ug,$g,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),fo}async function jg(n){try{const t=(await Zu()).transaction(kr),r=await t.objectStore(kr).get(eh(n));return await t.done,r}catch(e){if(e instanceof It)pt.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e?.message});pt.warn(t.message)}}}async function cl(n,e){try{const r=(await Zu()).transaction(kr,"readwrite");await r.objectStore(kr).put(e,eh(n)),await r.done}catch(t){if(t instanceof It)pt.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t?.message});pt.warn(r.message)}}}function eh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qg=1024,Hg=30;class zg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ll();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Hg){const s=Kg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){pt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ll(),{heartbeatsToSend:t,unsentEntries:r}=Gg(this._heartbeatsCache.heartbeats),s=qs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return pt.warn(e),""}}}function ll(){return new Date().toISOString().substring(0,10)}function Gg(n,e=qg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ul(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ul(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Wg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vm()?Lm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ul(n){return qs(JSON.stringify({version:2,heartbeats:n})).length}function Kg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Qg(n){xn(new un("platform-logger",e=>new ag(e),"PRIVATE")),xn(new un("heartbeat",e=>new zg(e),"PRIVATE")),Lt(Po,ol,n),Lt(Po,ol,"esm2020"),Lt("fire-js","")}Qg("");var Jg="firebase",Yg="12.13.0";/**
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
 */Lt(Jg,Yg,"app");function th(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xg=th,nh=new jr("auth","Firebase",th());/**
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
 */const zs=new ra("@firebase/auth");function Zg(n,...e){zs.logLevel<=Q.WARN&&zs.warn(`Auth (${Hn}): ${n}`,...e)}function ks(n,...e){zs.logLevel<=Q.ERROR&&zs.error(`Auth (${Hn}): ${n}`,...e)}/**
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
 */function st(n,...e){throw aa(n,...e)}function Ge(n,...e){return aa(n,...e)}function oa(n,e,t){const r={...Xg(),[e]:t};return new jr("auth","Firebase",r).create(e,{appName:n.name})}function an(n){return oa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ep(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(n,"argument-error"),oa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function aa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return nh.create(n,...e)}function F(n,e,...t){if(!n)throw aa(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ks(e),new Error(e)}function yt(n,e){n||ut(e)}/**
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
 */function Do(){return typeof self<"u"&&self.location?.href||""}function tp(){return hl()==="http:"||hl()==="https:"}function hl(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function np(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tp()||Cm()||"connection"in navigator)?navigator.onLine:!0}function rp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class zr{constructor(e,t){this.shortDelay=e,this.longDelay=t,yt(t>e,"Short delay should be less than long delay!"),this.isMobile=Sm()||km()}get(){return np()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ca(n,e){yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class rh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ip=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],op=new zr(3e4,6e4);function la(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function zn(n,e,t,r,s={}){return sh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=qr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return Pm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Hr(n.emulatorConfig.host)&&(d.credentials="include"),rh.fetch()(await ih(n,n.config.apiHost,t,l),d)})}async function sh(n,e,t){n._canInitEmulator=!1;const r={...sp,...e};try{const s=new cp(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ts(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ts(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ts(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ts(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw oa(n,f,d);st(n,f)}}catch(s){if(s instanceof It)throw s;st(n,"network-request-failed",{message:String(s)})}}async function ap(n,e,t,r,s={}){const i=await zn(n,e,t,r,s);return"mfaPendingCredential"in i&&st(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ih(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ca(n.config,s):`${n.config.apiScheme}://${s}`;return ip.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class cp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),op.get())})}}function Ts(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function lp(n,e){return zn(n,"POST","/v1/accounts:delete",e)}async function Gs(n,e){return zn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ir(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function up(n,e=!1){const t=ge(n),r=await t.getIdToken(e),s=ua(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Ir(mo(s.auth_time)),issuedAtTime:Ir(mo(s.iat)),expirationTime:Ir(mo(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function mo(n){return Number(n)*1e3}function ua(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ks("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hu(t);return s?JSON.parse(s):(ks("Failed to decode base64 JWT payload"),null)}catch(s){return ks("Caught error parsing JWT payload as JSON",s?.toString()),null}}function dl(n){const e=ua(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof It&&hp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function hp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class dp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class No{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ws(n){const e=n.auth,t=await n.getIdToken(),r=await Dr(n,Gs(e,{idToken:t}));F(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?oh(s.providerUserInfo):[],a=mp(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new No(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function fp(n){const e=ge(n);await Ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function gp(n,e){const t=await sh(n,{},async()=>{const r=qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ih(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Hr(n.emulatorConfig.host)&&(u.credentials="include"),rh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pp(n,e){return zn(n,"POST","/v2/accounts:revokeToken",la(n,e))}/**
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
 */class Rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=dl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await gp(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Rn;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
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
 */function Pt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class He{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new dp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new No(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return up(this,e)}reload(){return fp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(an(this.auth));const e=await this.getIdToken();return await Dr(this,lp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:T,isAnonymous:R,providerData:k,stsTokenManager:N}=t;F(g&&N,e,"internal-error");const C=Rn.fromJSON(this.name,N);F(typeof g=="string",e,"internal-error"),Pt(r,e.name),Pt(s,e.name),F(typeof T=="boolean",e,"internal-error"),F(typeof R=="boolean",e,"internal-error"),Pt(i,e.name),Pt(a,e.name),Pt(l,e.name),Pt(u,e.name),Pt(d,e.name),Pt(f,e.name);const j=new He({uid:g,auth:e,email:s,emailVerified:T,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:d,lastLoginAt:f});return k&&Array.isArray(k)&&(j.providerData=k.map(K=>({...K}))),u&&(j._redirectEventId=u),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new Rn;s.updateFromServerResponse(t);const i=new He({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ws(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?oh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Rn;l.updateFromIdToken(r);const u=new He({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new No(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
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
 */const fl=new Map;function ht(n){yt(n instanceof Function,"Expected a class definition");let e=fl.get(n);return e?(yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fl.set(n,e),e)}/**
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
 */class ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ah.type="NONE";const ml=ah;/**
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
 */function Ds(n,e,t){return`firebase:${n}:${e}:${t}`}class Pn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ds(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ds("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gs(this.auth,{idToken:e}).catch(()=>{});return t?He._fromGetAccountInfoResponse(this.auth,t,e):null}return He._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Pn(ht(ml),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ht(ml);const a=Ds(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){let g;if(typeof f=="string"){const T=await Gs(e,{idToken:f}).catch(()=>{});if(!T)break;g=await He._fromGetAccountInfoResponse(e,T,f)}else g=He._fromJSON(e,f);d!==i&&(l=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Pn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Pn(i,e,r))}}/**
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
 */function gl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fh(e))return"Blackberry";if(mh(e))return"Webos";if(lh(e))return"Safari";if((e.includes("chrome/")||uh(e))&&!e.includes("edge/"))return"Chrome";if(dh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function ch(n=Ce()){return/firefox\//i.test(n)}function lh(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uh(n=Ce()){return/crios\//i.test(n)}function hh(n=Ce()){return/iemobile/i.test(n)}function dh(n=Ce()){return/android/i.test(n)}function fh(n=Ce()){return/blackberry/i.test(n)}function mh(n=Ce()){return/webos/i.test(n)}function ha(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function yp(n=Ce()){return ha(n)&&!!window.navigator?.standalone}function _p(){return Dm()&&document.documentMode===10}function gh(n=Ce()){return ha(n)||dh(n)||mh(n)||fh(n)||/windows phone/i.test(n)||hh(n)}/**
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
 */function ph(n,e=[]){let t;switch(n){case"Browser":t=gl(Ce());break;case"Worker":t=`${gl(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hn}/${r}`}/**
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
 */class Ep{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function vp(n,e={}){return zn(n,"GET","/v2/passwordPolicy",la(n,e))}/**
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
 */const Ip=6;class Tp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ip,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class wp{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pl(this),this.idTokenSubscription=new pl(this),this.beforeStateQueue=new Ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gs(this,{idToken:e}),r=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qe(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ws(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(an(this));const t=e?ge(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(an(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(an(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vp(this),t=new Tp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pp(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ph(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Zg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function hi(n){return ge(n)}class pl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fm(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ap(n){da=n}function bp(n){return da.loadJS(n)}function Sp(){return da.gapiScript}function Rp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Pp(n,e){const t=ia(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ln(i,e??{}))return s;st(s,"already-initialized")}return t.initialize({options:e})}function Cp(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ht);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function kp(n,e,t){const r=hi(n);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=yh(e),{host:a,port:l}=Dp(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(ln(d,r.config.emulator)&&ln(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Hr(a)?Ku(`${i}//${a}${u}`):Np()}function yh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Dp(n){const e=yh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:yl(a)}}}function yl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Np(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class _h{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
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
 */async function Cn(n,e){return ap(n,"POST","/v1/accounts:signInWithIdp",la(n,e))}/**
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
 */const Vp="http://localhost";class hn extends _h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new hn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Cn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Cn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cn(e,t)}buildRequest(){const e={requestUri:Vp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qr(t)}return e}}/**
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
 */class fa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gr extends fa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ct extends Gr{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
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
 */class lt extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hn._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return lt.credential(t,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
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
 */class kt extends Gr{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Dt extends Gr{constructor(){super("twitter.com")}static credential(e,t){return hn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Dt.credential(t,r)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
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
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await He._fromIdTokenResponse(e,r,s),a=_l(r);return new On({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=_l(r);return new On({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function _l(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ks extends It{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ks.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ks(e,t,r,s)}}function Eh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ks._fromErrorAndOperation(n,i,e,r):i})}async function Lp(n,e,t=!1){const r=await Dr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return On._forOperation(n,"link",r)}/**
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
 */async function xp(n,e,t=!1){const{auth:r}=n;if(qe(r.app))return Promise.reject(an(r));const s="reauthenticate";try{const i=await Dr(n,Eh(r,s,e,n),t);F(i.idToken,r,"internal-error");const a=ua(i.idToken);F(a,r,"internal-error");const{sub:l}=a;return F(n.uid===l,r,"user-mismatch"),On._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&st(r,"user-mismatch"),i}}/**
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
 */async function Op(n,e,t=!1){if(qe(n.app))return Promise.reject(an(n));const r="signIn",s=await Eh(n,r,e),i=await On._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Mp(n,e,t,r){return ge(n).onIdTokenChanged(e,t,r)}function Bp(n,e,t){return ge(n).beforeAuthStateChanged(e,t)}function Fp(n,e,t,r){return ge(n).onAuthStateChanged(e,t,r)}function Up(n){return ge(n).signOut()}const Qs="__sak";/**
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
 */class vh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qs,"1"),this.storage.removeItem(Qs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $p=1e3,jp=10;class Ih extends vh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);_p()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jp):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},$p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ih.type="LOCAL";const qp=Ih;/**
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
 */class Th extends vh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Th.type="SESSION";const wh=Th;/**
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
 */function Hp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new di(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await Hp(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}di.receivers=[];/**
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
 */function ma(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class zp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=ma("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const T=g;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(T.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ze(){return window}function Gp(n){Ze().location.href=n}/**
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
 */function Ah(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Wp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kp(){return navigator?.serviceWorker?.controller||null}function Qp(){return Ah()?self:null}/**
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
 */const bh="firebaseLocalStorageDb",Jp=1,Js="firebaseLocalStorage",Sh="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fi(n,e){return n.transaction([Js],e?"readwrite":"readonly").objectStore(Js)}function Yp(){const n=indexedDB.deleteDatabase(bh);return new Wr(n).toPromise()}function Vo(){const n=indexedDB.open(bh,Jp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Js,{keyPath:Sh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Js)?e(r):(r.close(),await Yp(),e(await Vo()))})})}async function El(n,e,t){const r=fi(n,!0).put({[Sh]:e,value:t});return new Wr(r).toPromise()}async function Xp(n,e){const t=fi(n,!1).get(e),r=await new Wr(t).toPromise();return r===void 0?null:r.value}function vl(n,e){const t=fi(n,!0).delete(e);return new Wr(t).toPromise()}const Zp=800,ey=3;class Rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ey)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ah()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=di._getInstance(Qp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Wp(),!this.activeServiceWorker)return;this.sender=new zp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vo();return await El(e,Qs,"1"),await vl(e,Qs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>El(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Xp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fi(s,!1).getAll();return new Wr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rh.type="LOCAL";const ty=Rh;new zr(3e4,6e4);/**
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
 */function Ph(n,e){return e?ht(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ga extends _h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ny(n){return Op(n.auth,new ga(n),n.bypassAuthState)}function ry(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),xp(t,new ga(n),n.bypassAuthState)}async function sy(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Lp(t,new ga(n),n.bypassAuthState)}/**
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
 */class Ch{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ny;case"linkViaPopup":case"linkViaRedirect":return sy;case"reauthViaPopup":case"reauthViaRedirect":return ry;default:st(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iy=new zr(2e3,1e4);async function oy(n,e,t){if(qe(n.app))return Promise.reject(Ge(n,"operation-not-supported-in-this-environment"));const r=hi(n);ep(n,e,fa);const s=Ph(r,t);return new sn(r,"signInViaPopup",e,s).executeNotNull()}class sn extends Ch{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const e=ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iy.get())};e()}}sn.currentPopupAction=null;/**
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
 */const ay="pendingRedirect",Ns=new Map;class cy extends Ch{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ns.get(this.auth._key());if(!e){try{const r=await ly(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ns.set(this.auth._key(),e)}return this.bypassAuthState||Ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ly(n,e){const t=dy(e),r=hy(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function uy(n,e){Ns.set(n._key(),e)}function hy(n){return ht(n._redirectPersistence)}function dy(n){return Ds(ay,n.config.apiKey,n.name)}async function fy(n,e,t=!1){if(qe(n.app))return Promise.reject(an(n));const r=hi(n),s=Ph(r,e),a=await new cy(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const my=10*60*1e3;class gy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!py(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!kh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ge(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=my&&this.cachedEventUids.clear(),this.cachedEventUids.has(Il(e))}saveEventToCache(e){this.cachedEventUids.add(Il(e)),this.lastProcessedEventTime=Date.now()}}function Il(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function py(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kh(n);default:return!1}}/**
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
 */async function yy(n,e={}){return zn(n,"GET","/v1/projects",e)}/**
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
 */const _y=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ey=/^https?/;async function vy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await yy(n);for(const t of e)try{if(Iy(t))return}catch{}st(n,"unauthorized-domain")}function Iy(n){const e=Do(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ey.test(t))return!1;if(_y.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ty=new zr(3e4,6e4);function Tl(){const n=Ze().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wy(n){return new Promise((e,t)=>{function r(){Tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tl(),t(Ge(n,"network-request-failed"))},timeout:Ty.get()})}if(Ze().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ze().gapi?.load)r();else{const s=Rp("iframefcb");return Ze()[s]=()=>{gapi.load?r():t(Ge(n,"network-request-failed"))},bp(`${Sp()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Vs=null,e})}let Vs=null;function Ay(n){return Vs=Vs||wy(n),Vs}/**
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
 */const by=new zr(5e3,15e3),Sy="__/auth/iframe",Ry="emulator/auth/iframe",Py={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ky(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ca(e,Ry):`https://${n.config.authDomain}/${Sy}`,r={apiKey:e.apiKey,appName:n.name,v:Hn},s=Cy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${qr(r).slice(1)}`}async function Dy(n){const e=await Ay(n),t=Ze().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:ky(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Py,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ge(n,"network-request-failed"),l=Ze().setTimeout(()=>{i(a)},by.get());function u(){Ze().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Ny={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vy=500,Ly=600,xy="_blank",Oy="http://localhost";class wl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function My(n,e,t,r=Vy,s=Ly){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Ny,width:r.toString(),height:s.toString(),top:i,left:a},d=Ce().toLowerCase();t&&(l=uh(d)?xy:t),ch(d)&&(e=e||Oy,u.scrollbars="yes");const f=Object.entries(u).reduce((T,[R,k])=>`${T}${R}=${k},`,"");if(yp(d)&&l!=="_self")return By(e||"",l),new wl(null);const g=window.open(e||"",l,f);F(g,n,"popup-blocked");try{g.focus()}catch{}return new wl(g)}function By(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Fy="__/auth/handler",Uy="emulator/auth/handler",$y=encodeURIComponent("fac");async function Al(n,e,t,r,s,i){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Hn,eventId:s};if(e instanceof fa){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Bm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Gr){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${$y}=${encodeURIComponent(u)}`:"";return`${jy(n)}?${qr(l).slice(1)}${d}`}function jy({config:n}){return n.emulator?ca(n,Uy):`https://${n.authDomain}/${Fy}`}/**
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
 */const go="webStorageSupport";class qy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wh,this._completeRedirectFn=fy,this._overrideRedirectResult=uy}async _openPopup(e,t,r,s){yt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Al(e,t,r,Do(),s);return My(e,i,ma())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Al(e,t,r,Do(),s);return Gp(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Dy(e),r=new gy(e);return t.register("authEvent",s=>(F(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(go,{type:go},s=>{const i=s?.[0]?.[go];i!==void 0&&t(!!i),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gh()||lh()||ha()}}const Hy=qy;var bl="@firebase/auth",Sl="1.13.1";/**
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
 */class zy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wy(n){xn(new un("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ph(n)},d=new wp(r,s,i,u);return Cp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xn(new un("auth-internal",e=>{const t=hi(e.getProvider("auth").getImmediate());return(r=>new zy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(bl,Sl,Gy(n)),Lt(bl,Sl,"esm2020")}/**
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
 */const Ky=5*60,Qy=Wu("authIdTokenMaxAge")||Ky;let Rl=null;const Jy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Qy)return;const s=t?.token;Rl!==s&&(Rl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Yy(n=Xu()){const e=ia(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Pp(n,{popupRedirectResolver:Hy,persistence:[ty,qp,wh]}),r=Wu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Jy(i.toString());Bp(t,a,()=>a(t.currentUser)),Mp(t,l=>a(l))}}const s=zu("auth");return s&&kp(t,`http://${s}`),t}function Xy(){return document.getElementsByTagName("head")?.[0]??document}Ap({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Xy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wy("Browser");var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xt,Dh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function _(){}_.prototype=p.prototype,E.F=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(I,v,A){for(var y=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)y[xe-2]=arguments[xe];return p.prototype[v].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,_){_||(_=0);const I=Array(16);if(typeof p=="string")for(var v=0;v<16;++v)I[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;v<16;++v)I[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],v=E.g[2];let A=E.g[3],y;y=p+(A^_&(v^A))+I[0]+3614090360&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(v^p&(_^v))+I[1]+3905402710&4294967295,A=p+(y<<12&4294967295|y>>>20),y=v+(_^A&(p^_))+I[2]+606105819&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(p^v&(A^p))+I[3]+3250441966&4294967295,_=v+(y<<22&4294967295|y>>>10),y=p+(A^_&(v^A))+I[4]+4118548399&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(v^p&(_^v))+I[5]+1200080426&4294967295,A=p+(y<<12&4294967295|y>>>20),y=v+(_^A&(p^_))+I[6]+2821735955&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(p^v&(A^p))+I[7]+4249261313&4294967295,_=v+(y<<22&4294967295|y>>>10),y=p+(A^_&(v^A))+I[8]+1770035416&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(v^p&(_^v))+I[9]+2336552879&4294967295,A=p+(y<<12&4294967295|y>>>20),y=v+(_^A&(p^_))+I[10]+4294925233&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(p^v&(A^p))+I[11]+2304563134&4294967295,_=v+(y<<22&4294967295|y>>>10),y=p+(A^_&(v^A))+I[12]+1804603682&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(v^p&(_^v))+I[13]+4254626195&4294967295,A=p+(y<<12&4294967295|y>>>20),y=v+(_^A&(p^_))+I[14]+2792965006&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(p^v&(A^p))+I[15]+1236535329&4294967295,_=v+(y<<22&4294967295|y>>>10),y=p+(v^A&(_^v))+I[1]+4129170786&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(p^_))+I[6]+3225465664&4294967295,A=p+(y<<9&4294967295|y>>>23),y=v+(p^_&(A^p))+I[11]+643717713&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(v^A))+I[0]+3921069994&4294967295,_=v+(y<<20&4294967295|y>>>12),y=p+(v^A&(_^v))+I[5]+3593408605&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(p^_))+I[10]+38016083&4294967295,A=p+(y<<9&4294967295|y>>>23),y=v+(p^_&(A^p))+I[15]+3634488961&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(v^A))+I[4]+3889429448&4294967295,_=v+(y<<20&4294967295|y>>>12),y=p+(v^A&(_^v))+I[9]+568446438&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(p^_))+I[14]+3275163606&4294967295,A=p+(y<<9&4294967295|y>>>23),y=v+(p^_&(A^p))+I[3]+4107603335&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(v^A))+I[8]+1163531501&4294967295,_=v+(y<<20&4294967295|y>>>12),y=p+(v^A&(_^v))+I[13]+2850285829&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(p^_))+I[2]+4243563512&4294967295,A=p+(y<<9&4294967295|y>>>23),y=v+(p^_&(A^p))+I[7]+1735328473&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(v^A))+I[12]+2368359562&4294967295,_=v+(y<<20&4294967295|y>>>12),y=p+(_^v^A)+I[5]+4294588738&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^v)+I[8]+2272392833&4294967295,A=p+(y<<11&4294967295|y>>>21),y=v+(A^p^_)+I[11]+1839030562&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^p)+I[14]+4259657740&4294967295,_=v+(y<<23&4294967295|y>>>9),y=p+(_^v^A)+I[1]+2763975236&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^v)+I[4]+1272893353&4294967295,A=p+(y<<11&4294967295|y>>>21),y=v+(A^p^_)+I[7]+4139469664&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^p)+I[10]+3200236656&4294967295,_=v+(y<<23&4294967295|y>>>9),y=p+(_^v^A)+I[13]+681279174&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^v)+I[0]+3936430074&4294967295,A=p+(y<<11&4294967295|y>>>21),y=v+(A^p^_)+I[3]+3572445317&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^p)+I[6]+76029189&4294967295,_=v+(y<<23&4294967295|y>>>9),y=p+(_^v^A)+I[9]+3654602809&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^v)+I[12]+3873151461&4294967295,A=p+(y<<11&4294967295|y>>>21),y=v+(A^p^_)+I[15]+530742520&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^p)+I[2]+3299628645&4294967295,_=v+(y<<23&4294967295|y>>>9),y=p+(v^(_|~A))+I[0]+4096336452&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~v))+I[7]+1126891415&4294967295,A=p+(y<<10&4294967295|y>>>22),y=v+(p^(A|~_))+I[14]+2878612391&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~p))+I[5]+4237533241&4294967295,_=v+(y<<21&4294967295|y>>>11),y=p+(v^(_|~A))+I[12]+1700485571&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~v))+I[3]+2399980690&4294967295,A=p+(y<<10&4294967295|y>>>22),y=v+(p^(A|~_))+I[10]+4293915773&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~p))+I[1]+2240044497&4294967295,_=v+(y<<21&4294967295|y>>>11),y=p+(v^(_|~A))+I[8]+1873313359&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~v))+I[15]+4264355552&4294967295,A=p+(y<<10&4294967295|y>>>22),y=v+(p^(A|~_))+I[6]+2734768916&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~p))+I[13]+1309151649&4294967295,_=v+(y<<21&4294967295|y>>>11),y=p+(v^(_|~A))+I[4]+4149444226&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~v))+I[11]+3174756917&4294967295,A=p+(y<<10&4294967295|y>>>22),y=v+(p^(A|~_))+I[2]+718787259&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~p))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,p){p===void 0&&(p=E.length);const _=p-this.blockSize,I=this.C;let v=this.h,A=0;for(;A<p;){if(v==0)for(;A<=_;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<p;)if(I[v++]=E.charCodeAt(A++),v==this.blockSize){s(this,I),v=0;break}}else for(;A<p;)if(I[v++]=E[A++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=p},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;p=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=p&255,p/=256;for(this.v(E),E=Array(16),p=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)E[p++]=this.g[_]>>>I&255;return E};function i(E,p){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function a(E,p){this.h=p;const _=[];let I=!0;for(let v=E.length-1;v>=0;v--){const A=E[v]|0;I&&A==p||(_[v]=A,I=!1)}this.g=_}var l={};function u(E){return-128<=E&&E<128?i(E,function(p){return new a([p|0],p<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(E<0)return C(d(-E));const p=[];let _=1;for(let I=0;E>=_;I++)p[I]=E/_|0,_*=4294967296;return new a(p,0)}function f(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return C(f(E.substring(1),p));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(p,8));let I=g;for(let A=0;A<E.length;A+=8){var v=Math.min(8,E.length-A);const y=parseInt(E.substring(A,A+v),p);v<8?(v=d(Math.pow(p,v)),I=I.j(v).add(d(y))):(I=I.j(_),I=I.add(d(y)))}return I}var g=u(0),T=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-C(this).m();let E=0,p=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);E+=(I>=0?I:4294967296+I)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(N(this))return"-"+C(this).toString(E);const p=d(Math.pow(E,6));var _=this;let I="";for(;;){const v=Ie(_,p).g;_=j(_,v.j(p));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=v,k(_))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function N(E){return E.h==-1}n.l=function(E){return E=j(this,E),N(E)?-1:k(E)?0:1};function C(E){const p=E.g.length,_=[];for(let I=0;I<p;I++)_[I]=~E.g[I];return new a(_,~E.h).add(T)}n.abs=function(){return N(this)?C(this):this},n.add=function(E){const p=Math.max(this.g.length,E.g.length),_=[];let I=0;for(let v=0;v<=p;v++){let A=I+(this.i(v)&65535)+(E.i(v)&65535),y=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);I=y>>>16,A&=65535,y&=65535,_[v]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(E,p){return E.add(C(p))}n.j=function(E){if(k(this)||k(E))return g;if(N(this))return N(E)?C(this).j(C(E)):C(C(this).j(E));if(N(E))return C(this.j(C(E)));if(this.l(R)<0&&E.l(R)<0)return d(this.m()*E.m());const p=this.g.length+E.g.length,_=[];for(var I=0;I<2*p;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<E.g.length;v++){const A=this.i(I)>>>16,y=this.i(I)&65535,xe=E.i(v)>>>16,Yt=E.i(v)&65535;_[2*I+2*v]+=y*Yt,K(_,2*I+2*v),_[2*I+2*v+1]+=A*Yt,K(_,2*I+2*v+1),_[2*I+2*v+1]+=y*xe,K(_,2*I+2*v+1),_[2*I+2*v+2]+=A*xe,K(_,2*I+2*v+2)}for(E=0;E<p;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=p;E<2*p;E++)_[E]=0;return new a(_,0)};function K(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function Z(E,p){this.g=E,this.h=p}function Ie(E,p){if(k(p))throw Error("division by zero");if(k(E))return new Z(g,g);if(N(E))return p=Ie(C(E),p),new Z(C(p.g),C(p.h));if(N(p))return p=Ie(E,C(p)),new Z(C(p.g),p.h);if(E.g.length>30){if(N(E)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var _=T,I=p;I.l(E)<=0;)_=Be(_),I=Be(I);var v=M(_,1),A=M(I,1);for(I=M(I,2),_=M(_,2);!k(I);){var y=A.add(I);y.l(E)<=0&&(v=v.add(_),A=y),I=M(I,1),_=M(_,1)}return p=j(E,v.j(p)),new Z(v,p)}for(v=g;E.l(p)>=0;){for(_=Math.max(1,Math.floor(E.m()/p.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(_),y=A.j(p);N(y)||y.l(E)>0;)_-=I,A=d(_),y=A.j(p);k(A)&&(A=T),v=v.add(A),E=j(E,y)}return new Z(v,E)}n.B=function(E){return Ie(this,E).h},n.and=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)&E.i(I);return new a(_,this.h&E.h)},n.or=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)|E.i(I);return new a(_,this.h|E.h)},n.xor=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)^E.i(I);return new a(_,this.h^E.h)};function Be(E){const p=E.g.length+1,_=[];for(let I=0;I<p;I++)_[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(_,E.h)}function M(E,p){const _=p>>5;p%=32;const I=E.g.length-_,v=[];for(let A=0;A<I;A++)v[A]=p>0?E.i(A+_)>>>p|E.i(A+_+1)<<32-p:E.i(A+_);return new a(v,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Dh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,xt=a}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});var ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nh,pr,Vh,Ls,Lo,Lh,xh,Oh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ws=="object"&&ws];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var w=o[m];if(!(w in h))break e;h=h[w]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&h.push([m,c[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function f(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function g(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(m,w,b){for(var D=Array(arguments.length-2),q=2;q<arguments.length;q++)D[q-2]=arguments[q];return c.prototype[w].apply(m,D)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const c=o.length;if(c>0){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function k(o,c){for(let m=1;m<arguments.length;m++){const w=arguments[m];var h=typeof w;if(h=h!="object"?h:w?Array.isArray(w)?"array":h:"null",h=="array"||h=="object"&&typeof w.length=="number"){h=o.length||0;const b=w.length||0;o.length=h+b;for(let D=0;D<b;D++)o[h+D]=w[D]}else o.push(w)}}class N{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(o){a.setTimeout(()=>{throw o},0)}function j(){var o=E;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class K{constructor(){this.h=this.g=null}add(c,h){const m=Z.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Z=new N(()=>new Ie,o=>o.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,M=!1,E=new K,p=()=>{const o=Promise.resolve(void 0);Be=()=>{o.then(_)}};function _(){for(var o;o=j();){try{o.h.call(o.g)}catch(h){C(h)}var c=Z;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}M=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function xe(o,c){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}g(xe,v),xe.prototype.init=function(o,c){const h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Yt="closure_listenable_"+(Math.random()*1e6|0),Mf=0;function Bf(o,c,h,m,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=w,this.key=++Mf,this.da=this.fa=!1}function as(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function cs(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function Ff(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function ec(o){const c={};for(const h in o)c[h]=o[h];return c}const tc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nc(o,c){let h,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(h in m)o[h]=m[h];for(let b=0;b<tc.length;b++)h=tc[b],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function ls(o){this.src=o,this.g={},this.h=0}ls.prototype.add=function(o,c,h,m,w){const b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);const D=Fi(o,c,m,w);return D>-1?(c=o[D],h||(c.fa=!1)):(c=new Bf(c,this.src,b,!!m,w),c.fa=h,o.push(c)),c};function Bi(o,c){const h=c.type;if(h in o.g){var m=o.g[h],w=Array.prototype.indexOf.call(m,c,void 0),b;(b=w>=0)&&Array.prototype.splice.call(m,w,1),b&&(as(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Fi(o,c,h,m){for(let w=0;w<o.length;++w){const b=o[w];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==m)return w}return-1}var Ui="closure_lm_"+(Math.random()*1e6|0),$i={};function rc(o,c,h,m,w){if(Array.isArray(c)){for(let b=0;b<c.length;b++)rc(o,c[b],h,m,w);return null}return h=oc(h),o&&o[Yt]?o.J(c,h,l(m)?!!m.capture:!1,w):Uf(o,c,h,!1,m,w)}function Uf(o,c,h,m,w,b){if(!c)throw Error("Invalid event type");const D=l(w)?!!w.capture:!!w;let q=qi(o);if(q||(o[Ui]=q=new ls(o)),h=q.add(c,h,m,D,b),h.proxy)return h;if(m=$f(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)A||(w=D),w===void 0&&(w=!1),o.addEventListener(c.toString(),m,w);else if(o.attachEvent)o.attachEvent(ic(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $f(){function o(h){return c.call(o.src,o.listener,h)}const c=jf;return o}function sc(o,c,h,m,w){if(Array.isArray(c))for(var b=0;b<c.length;b++)sc(o,c[b],h,m,w);else m=l(m)?!!m.capture:!!m,h=oc(h),o&&o[Yt]?(o=o.i,b=String(c).toString(),b in o.g&&(c=o.g[b],h=Fi(c,h,m,w),h>-1&&(as(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[b],o.h--)))):o&&(o=qi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Fi(c,h,m,w)),(h=o>-1?c[o]:null)&&ji(h))}function ji(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Yt])Bi(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(ic(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=qi(c))?(Bi(h,o),h.h==0&&(h.src=null,c[Ui]=null)):as(o)}}}function ic(o){return o in $i?$i[o]:$i[o]="on"+o}function jf(o,c){if(o.da)o=!0;else{c=new xe(c,this);const h=o.listener,m=o.ha||o.src;o.fa&&ji(o),o=h.call(m,c)}return o}function qi(o){return o=o[Ui],o instanceof ls?o:null}var Hi="__closure_events_fn_"+(Math.random()*1e9>>>0);function oc(o){return typeof o=="function"?o:(o[Hi]||(o[Hi]=function(c){return o.handleEvent(c)}),o[Hi])}function be(){I.call(this),this.i=new ls(this),this.M=this,this.G=null}g(be,I),be.prototype[Yt]=!0,be.prototype.removeEventListener=function(o,c,h,m){sc(this,o,c,h,m)};function ke(o,c){var h,m=o.G;if(m)for(h=[];m;m=m.G)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new v(c,o);else if(c instanceof v)c.target=c.target||o;else{var w=c;c=new v(m,o),nc(c,w)}w=!0;let b,D;if(h)for(D=h.length-1;D>=0;D--)b=c.g=h[D],w=us(b,m,!0,c)&&w;if(b=c.g=o,w=us(b,m,!0,c)&&w,w=us(b,m,!1,c)&&w,h)for(D=0;D<h.length;D++)b=c.g=h[D],w=us(b,m,!1,c)&&w}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let m=0;m<h.length;m++)as(h[m]);delete o.g[c],o.h--}}this.G=null},be.prototype.J=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},be.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function us(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let b=0;b<c.length;++b){const D=c[b];if(D&&!D.da&&D.capture==h){const q=D.listener,pe=D.ha||D.src;D.fa&&Bi(o.i,D),w=q.call(pe,m)!==!1&&w}}return w&&!m.defaultPrevented}function qf(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function ac(o){o.g=qf(()=>{o.g=null,o.i&&(o.i=!1,ac(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Hf extends I{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ac(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xn(o){I.call(this),this.h=o,this.g={}}g(Xn,I);var cc=[];function lc(o){cs(o.g,function(c,h){this.g.hasOwnProperty(h)&&ji(c)},o),o.g={}}Xn.prototype.N=function(){Xn.Z.N.call(this),lc(this)},Xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zi=a.JSON.stringify,zf=a.JSON.parse,Gf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function uc(){}function hc(){}var Zn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Gi(){v.call(this,"d")}g(Gi,v);function Wi(){v.call(this,"c")}g(Wi,v);var Xt={},dc=null;function hs(){return dc=dc||new be}Xt.Ia="serverreachability";function fc(o){v.call(this,Xt.Ia,o)}g(fc,v);function er(o){const c=hs();ke(c,new fc(c))}Xt.STAT_EVENT="statevent";function mc(o,c){v.call(this,Xt.STAT_EVENT,o),this.stat=c}g(mc,v);function De(o){const c=hs();ke(c,new mc(c,o))}Xt.Ja="timingevent";function gc(o,c){v.call(this,Xt.Ja,o),this.size=c}g(gc,v);function tr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function nr(){this.g=!0}nr.prototype.ua=function(){this.g=!1};function Wf(o,c,h,m,w,b){o.info(function(){if(o.g)if(b){var D="",q=b.split("&");for(let ee=0;ee<q.length;ee++){var pe=q[ee].split("=");if(pe.length>1){const Ee=pe[0];pe=pe[1];const Ye=Ee.split("_");D=Ye.length>=2&&Ye[1]=="type"?D+(Ee+"="+pe+"&"):D+(Ee+"=redacted&")}}}else D=null;else D=b;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+c+`
`+h+`
`+D})}function Kf(o,c,h,m,w,b,D){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+c+`
`+h+`
`+b+" "+D})}function vn(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Jf(o,h)+(m?" "+m:"")})}function Qf(o,c){o.info(function(){return"TIMEOUT: "+c})}nr.prototype.info=function(){};function Jf(o,c){if(!o.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(o=0;o<b.length;o++)if(Array.isArray(b[o])){var h=b[o];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var w=m[0];if(w!="noop"&&w!="stop"&&w!="close")for(let D=1;D<m.length;D++)m[D]=""}}}}return zi(b)}catch{return c}}var ds={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},pc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yc;function Ki(){}g(Ki,uc),Ki.prototype.g=function(){return new XMLHttpRequest},yc=new Ki;function rr(o){return encodeURIComponent(String(o))}function Yf(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function Tt(o,c,h,m){this.j=o,this.i=c,this.l=h,this.S=m||1,this.V=new Xn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _c}function _c(){this.i=null,this.g="",this.h=!1}var Ec={},Qi={};function Ji(o,c,h){o.M=1,o.A=ms(Je(c)),o.u=h,o.R=!0,vc(o,null)}function vc(o,c){o.F=Date.now(),fs(o),o.B=Je(o.A);var h=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Vc(h.i,"t",m),o.C=0,h=o.j.L,o.h=new _c,o.g=Yc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Hf(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,m=o.ba;var w="readystatechange";Array.isArray(w)||(w&&(cc[0]=w.toString()),w=cc);for(let b=0;b<w.length;b++){const D=rc(h,w[b],m||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=o.J?ec(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),er(),Wf(o.i,o.v,o.B,o.l,o.S,o.u)}Tt.prototype.ba=function(o){o=o.target;const c=this.O;c&&bt(o)==3?c.j():this.Y(o)},Tt.prototype.Y=function(o){try{if(o==this.g)e:{const q=bt(this.g),pe=this.g.ya(),ee=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||Uc(this.g)))){this.K||q!=4||pe==7||(pe==8||ee<=0?er(3):er(2)),Yi(this);var c=this.g.ca();this.X=c;var h=Xf(this);if(this.o=c==200,Kf(this.i,this.v,this.B,this.l,this.S,q,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,w=this.g;if((m=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var b=m;break t}}b=null}if(o=b)vn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xi(this,o);else{this.o=!1,this.m=3,De(12),Zt(this),sr(this);break e}}if(this.R){o=!0;let Ee;for(;!this.K&&this.C<h.length;)if(Ee=Zf(this,h),Ee==Qi){q==4&&(this.m=4,De(14),o=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ee==Ec){this.m=4,De(15),vn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else vn(this.i,this.l,Ee,null),Xi(this,Ee);if(Ic(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||h.length!=0||this.h.h||(this.m=1,De(16),o=!1),this.o=this.o&&o,!o)vn(this.i,this.l,h,"[Invalid Chunked Response]"),Zt(this),sr(this);else if(h.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),oo(D),D.P=!0,De(11))}}else vn(this.i,this.l,h,null),Xi(this,h);q==4&&Zt(this),this.o&&!this.K&&(q==4?Wc(this.j,this):(this.o=!1,fs(this)))}else fm(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,De(12)):(this.m=0,De(13)),Zt(this),sr(this)}}}catch{}finally{}};function Xf(o){if(!Ic(o))return o.g.la();const c=Uc(o.g);if(c==="")return"";let h="";const m=c.length,w=bt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Zt(o),sr(o),"";o.h.i=new a.TextDecoder}for(let b=0;b<m;b++)o.h.h=!0,h+=o.h.i.decode(c[b],{stream:!(w&&b==m-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function Ic(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Zf(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?Qi:(h=Number(c.substring(h,m)),isNaN(h)?Ec:(m+=1,m+h>c.length?Qi:(c=c.slice(m,m+h),o.C=m+h,c)))}Tt.prototype.cancel=function(){this.K=!0,Zt(this)};function fs(o){o.T=Date.now()+o.H,Tc(o,o.H)}function Tc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=tr(d(o.aa,o),c)}function Yi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Tt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Qf(this.i,this.B),this.M!=2&&(er(),De(17)),Zt(this),this.m=2,sr(this)):Tc(this,this.T-o)};function sr(o){o.j.I==0||o.K||Wc(o.j,o)}function Zt(o){Yi(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,lc(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Xi(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||Zi(h.h,o))){if(!o.L&&Zi(h.h,o)&&h.I==3){try{var m=h.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Es(h),ys(h);else break e;io(h),De(18)}}else h.xa=w[1],0<h.xa-h.K&&w[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=tr(d(h.Va,h),6e3));bc(h.h)<=1&&h.ta&&(h.ta=void 0)}else tn(h,11)}else if((o.L||h.g==o)&&Es(h),!y(c))for(w=h.Ba.g.parse(c),c=0;c<w.length;c++){let ee=w[c];const Ee=ee[0];if(!(Ee<=h.K))if(h.K=Ee,ee=ee[1],h.I==2)if(ee[0]=="c"){h.M=ee[1],h.ba=ee[2];const Ye=ee[3];Ye!=null&&(h.ka=Ye,h.j.info("VER="+h.ka));const nn=ee[4];nn!=null&&(h.za=nn,h.j.info("SVER="+h.za));const St=ee[5];St!=null&&typeof St=="number"&&St>0&&(m=1.5*St,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Rt=o.g;if(Rt){const Is=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Is){var b=m.h;b.g||Is.indexOf("spdy")==-1&&Is.indexOf("quic")==-1&&Is.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(eo(b,b.h),b.h=null))}if(m.G){const ao=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;ao&&(m.wa=ao,re(m.J,m.G,ao))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var D=o;if(m.na=Jc(m,m.L?m.ba:null,m.W),D.L){Sc(m.h,D);var q=D,pe=m.O;pe&&(q.H=pe),q.D&&(Yi(q),fs(q)),m.g=D}else zc(m);h.i.length>0&&_s(h)}else ee[0]!="stop"&&ee[0]!="close"||tn(h,7);else h.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?tn(h,7):so(h):ee[0]!="noop"&&h.l&&h.l.qa(ee),h.A=0)}}er(4)}catch{}}var em=class{constructor(o,c){this.g=o,this.map=c}};function wc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ac(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function bc(o){return o.h?1:o.g?o.g.size:0}function Zi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function eo(o,c){o.g?o.g.add(c):o.h=c}function Sc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}wc.prototype.cancel=function(){if(this.i=Rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Rc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return R(o.i)}var Pc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tm(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const m=o[h].indexOf("=");let w,b=null;m>=0?(w=o[h].substring(0,m),b=o[h].substring(m+1)):w=o[h],c(w,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function wt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof wt?(this.l=o.l,ir(this,o.j),this.o=o.o,this.g=o.g,or(this,o.u),this.h=o.h,to(this,Lc(o.i)),this.m=o.m):o&&(c=String(o).match(Pc))?(this.l=!1,ir(this,c[1]||"",!0),this.o=ar(c[2]||""),this.g=ar(c[3]||"",!0),or(this,c[4]),this.h=ar(c[5]||"",!0),to(this,c[6]||"",!0),this.m=ar(c[7]||"")):(this.l=!1,this.i=new lr(null,this.l))}wt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(cr(c,Cc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(cr(c,Cc,!0),"@"),o.push(rr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(cr(h,h.charAt(0)=="/"?sm:rm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",cr(h,om)),o.join("")},wt.prototype.resolve=function(o){const c=Je(this);let h=!!o.j;h?ir(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var m=o.h;if(h)or(c,o.u);else if(h=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var w=c.h.lastIndexOf("/");w!=-1&&(m=c.h.slice(0,w+1)+m)}if(w=m,w==".."||w==".")m="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){m=w.lastIndexOf("/",0)==0,w=w.split("/");const b=[];for(let D=0;D<w.length;){const q=w[D++];q=="."?m&&D==w.length&&b.push(""):q==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),m&&D==w.length&&b.push("")):(b.push(q),m=!0)}m=b.join("/")}else m=w}return h?c.h=m:h=o.i.toString()!=="",h?to(c,Lc(o.i)):h=!!o.m,h&&(c.m=o.m),c};function Je(o){return new wt(o)}function ir(o,c,h){o.j=h?ar(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function or(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function to(o,c,h){c instanceof lr?(o.i=c,am(o.i,o.l)):(h||(c=cr(c,im)),o.i=new lr(c,o.l))}function re(o,c,h){o.i.set(c,h)}function ms(o){return re(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ar(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function cr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,nm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function nm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cc=/[#\/\?@]/g,rm=/[#\?:]/g,sm=/[#\?]/g,im=/[#\?@]/g,om=/#/g;function lr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function en(o){o.g||(o.g=new Map,o.h=0,o.i&&tm(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=lr.prototype,n.add=function(o,c){en(this),this.i=null,o=In(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function kc(o,c){en(o),c=In(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Dc(o,c){return en(o),c=In(o,c),o.g.has(c)}n.forEach=function(o,c){en(this),this.g.forEach(function(h,m){h.forEach(function(w){o.call(c,w,m,this)},this)},this)};function Nc(o,c){en(o);let h=[];if(typeof c=="string")Dc(o,c)&&(h=h.concat(o.g.get(In(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return en(this),this.i=null,o=In(this,o),Dc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Nc(this,o),o.length>0?String(o[0]):c):c};function Vc(o,c,h){kc(o,c),h.length>0&&(o.i=null,o.g.set(In(o,c),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var h=c[m];const w=rr(h);h=Nc(this,h);for(let b=0;b<h.length;b++){let D=w;h[b]!==""&&(D+="="+rr(h[b])),o.push(D)}}return this.i=o.join("&")};function Lc(o){const c=new lr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function In(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function am(o,c){c&&!o.j&&(en(o),o.i=null,o.g.forEach(function(h,m){const w=m.toLowerCase();m!=w&&(kc(this,m),Vc(this,w,h))},o)),o.j=c}function cm(o,c){const h=new nr;if(a.Image){const m=new Image;m.onload=f(At,h,"TestLoadImage: loaded",!0,c,m),m.onerror=f(At,h,"TestLoadImage: error",!1,c,m),m.onabort=f(At,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(At,h,"TestLoadImage: timeout",!1,c,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function lm(o,c){const h=new nr,m=new AbortController,w=setTimeout(()=>{m.abort(),At(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(b=>{clearTimeout(w),b.ok?At(h,"TestPingServer: ok",!0,c):At(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),At(h,"TestPingServer: error",!1,c)})}function At(o,c,h,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(h)}catch{}}function um(){this.g=new Gf}function no(o){this.i=o.Sb||null,this.h=o.ab||!1}g(no,uc),no.prototype.g=function(){return new gs(this.i,this.h)};function gs(o,c){be.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(gs,be),n=gs.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,hr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;xc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function xc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ur(this):hr(this),this.readyState==3&&xc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,ur(this))},n.Na=function(o){this.g&&(this.response=o,ur(this))},n.ga=function(){this.g&&ur(this)};function ur(o){o.readyState=4,o.l=null,o.j=null,o.B=null,hr(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function hr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Oc(o){let c="";return cs(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function ro(o,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=Oc(h),typeof o=="string"?h!=null&&rr(h):re(o,c,h))}function ce(o){be.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ce,be);var hm=/^https?$/i,dm=["POST","PUT"];n=ce.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yc.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(b){Mc(this,b);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)h.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())h.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),w=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(dm,c,void 0)>=0)||m||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,D]of h)this.g.setRequestHeader(b,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(b){Mc(this,b)}};function Mc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Bc(o),ps(o)}function Bc(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ke(this,"complete"),ke(this,"abort"),ps(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ps(this,!0)),ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Fc(this):this.Xa())},n.Xa=function(){Fc(this)};function Fc(o){if(o.h&&typeof i<"u"){if(o.v&&bt(o)==4)setTimeout(o.Ca.bind(o),0);else if(ke(o,"readystatechange"),bt(o)==4){o.h=!1;try{const b=o.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=b===0){let D=String(o.D).match(Pc)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),m=!hm.test(D?D.toLowerCase():"")}h=m}if(h)ke(o,"complete"),ke(o,"success");else{o.o=6;try{var w=bt(o)>2?o.g.statusText:""}catch{w=""}o.l=w+" ["+o.ca()+"]",Bc(o)}}finally{ps(o)}}}}function ps(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||ke(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function bt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),zf(c)}};function Uc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fm(o){const c={};o=(o.g&&bt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(y(o[m]))continue;var h=Yf(o[m]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[w]||[];c[w]=b,b.push(h)}Ff(c,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function dr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function $c(o){this.za=0,this.i=[],this.j=new nr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=dr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=dr("baseRetryDelayMs",5e3,o),this.Za=dr("retryDelaySeedMs",1e4,o),this.Ta=dr("forwardChannelMaxRetries",2,o),this.va=dr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new wc(o&&o.concurrentRequestLimit),this.Ba=new um,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=$c.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,m){De(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=Jc(this,null,this.W),_s(this)};function so(o){if(jc(o),o.I==3){var c=o.V++,h=Je(o.J);if(re(h,"SID",o.M),re(h,"RID",c),re(h,"TYPE","terminate"),fr(o,h),c=new Tt(o,o.j,c),c.M=2,c.A=ms(Je(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Yc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),fs(c)}Qc(o)}function ys(o){o.g&&(oo(o),o.g.cancel(),o.g=null)}function jc(o){ys(o),o.v&&(a.clearTimeout(o.v),o.v=null),Es(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function _s(o){if(!Ac(o.h)&&!o.m){o.m=!0;var c=o.Ea;Be||p(),M||(Be(),M=!0),E.add(c,o),o.D=0}}function mm(o,c){return bc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=tr(d(o.Ea,o,c),Kc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const w=new Tt(this,this.j,o);let b=this.o;if(this.U&&(b?(b=ec(b),nc(b,this.U)):b=this.U),this.u!==null||this.R||(w.J=b,b=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Hc(this,w,c),h=Je(this.J),re(h,"RID",o),re(h,"CVER",22),this.G&&re(h,"X-HTTP-Session-Id",this.G),fr(this,h),b&&(this.R?c="headers="+rr(Oc(b))+"&"+c:this.u&&ro(h,this.u,b)),eo(this.h,w),this.Ra&&re(h,"TYPE","init"),this.S?(re(h,"$req",c),re(h,"SID","null"),w.U=!0,Ji(w,h,null)):Ji(w,h,c),this.I=2}}else this.I==3&&(o?qc(this,o):this.i.length==0||Ac(this.h)||qc(this))};function qc(o,c){var h;c?h=c.l:h=o.V++;const m=Je(o.J);re(m,"SID",o.M),re(m,"RID",h),re(m,"AID",o.K),fr(o,m),o.u&&o.o&&ro(m,o.u,o.o),h=new Tt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Hc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),eo(o.h,h),Ji(h,m,c)}function fr(o,c){o.H&&cs(o.H,function(h,m){re(c,m,h)}),o.l&&cs({},function(h,m){re(c,m,h)})}function Hc(o,c,h){h=Math.min(o.i.length,h);const m=o.l?d(o.l.Ka,o.l,o):null;e:{var w=o.i;let q=-1;for(;;){const pe=["count="+h];q==-1?h>0?(q=w[0].g,pe.push("ofs="+q)):q=0:pe.push("ofs="+q);let ee=!0;for(let Ee=0;Ee<h;Ee++){var b=w[Ee].g;const Ye=w[Ee].map;if(b-=q,b<0)q=Math.max(0,w[Ee].g-100),ee=!1;else try{b="req"+b+"_"||"";try{var D=Ye instanceof Map?Ye:Object.entries(Ye);for(const[nn,St]of D){let Rt=St;l(St)&&(Rt=zi(St)),pe.push(b+nn+"="+encodeURIComponent(Rt))}}catch(nn){throw pe.push(b+"type="+encodeURIComponent("_badmap")),nn}}catch{m&&m(Ye)}}if(ee){D=pe.join("&");break e}}D=void 0}return o=o.i.splice(0,h),c.G=o,D}function zc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;Be||p(),M||(Be(),M=!0),E.add(c,o),o.A=0}}function io(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=tr(d(o.Da,o),Kc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Gc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=tr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,De(10),ys(this),Gc(this))};function oo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Gc(o){o.g=new Tt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Je(o.na);re(c,"RID","rpc"),re(c,"SID",o.M),re(c,"AID",o.K),re(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&re(c,"TO",o.ia),re(c,"TYPE","xmlhttp"),fr(o,c),o.u&&o.o&&ro(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ms(Je(c)),h.u=null,h.R=!0,vc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,ys(this),io(this),De(19))};function Es(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Wc(o,c){var h=null;if(o.g==c){Es(o),oo(o),o.g=null;var m=2}else if(Zi(o.h,c))h=c.G,Sc(o.h,c),m=1;else return;if(o.I!=0){if(c.o)if(m==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var w=o.D;m=hs(),ke(m,new gc(m,h)),_s(o)}else zc(o);else if(w=c.m,w==3||w==0&&c.X>0||!(m==1&&mm(o,c)||m==2&&io(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),w){case 1:tn(o,5);break;case 4:tn(o,10);break;case 3:tn(o,6);break;default:tn(o,2)}}}function Kc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function tn(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),m=o.Ua;const w=!m;m=new wt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ir(m,"https"),ms(m),w?cm(m.toString(),h):lm(m.toString(),h)}else De(2);o.I=0,o.l&&o.l.pa(c),Qc(o),jc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Qc(o){if(o.I=0,o.ja=[],o.l){const c=Rc(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ja,c),k(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function Jc(o,c,h){var m=h instanceof wt?Je(h):new wt(h);if(m.g!="")c&&(m.g=c+"."+m.g),or(m,m.u);else{var w=a.location;m=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const b=new wt(null);m&&ir(b,m),c&&(b.g=c),w&&or(b,w),h&&(b.h=h),m=b}return h=o.G,c=o.wa,h&&c&&re(m,h,c),re(m,"VER",o.ka),fr(o,m),m}function Yc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new ce(new no({ab:h})):new ce(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xc(){}n=Xc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vs(){}vs.prototype.g=function(o,c){return new Fe(o,c)};function Fe(o,c){be.call(this),this.g=new $c(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!y(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Tn(this)}g(Fe,be),Fe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){so(this.g)},Fe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=zi(o),o=h);c.i.push(new em(c.Ya++,o)),c.I==3&&_s(c)},Fe.prototype.N=function(){this.g.l=null,delete this.j,so(this.g),delete this.g,Fe.Z.N.call(this)};function Zc(o){Gi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}g(Zc,Gi);function el(){Wi.call(this),this.status=1}g(el,Wi);function Tn(o){this.g=o}g(Tn,Xc),Tn.prototype.ra=function(){ke(this.g,"a")},Tn.prototype.qa=function(o){ke(this.g,new Zc(o))},Tn.prototype.pa=function(o){ke(this.g,new el)},Tn.prototype.oa=function(){ke(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,Oh=function(){return new vs},xh=function(){return hs()},Lh=Xt,Lo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,Ls=ds,pc.COMPLETE="complete",Vh=pc,hc.EventType=Zn,Zn.OPEN="a",Zn.CLOSE="b",Zn.ERROR="c",Zn.MESSAGE="d",be.prototype.listen=be.prototype.J,pr=hc,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,Nh=ce}).apply(typeof ws<"u"?ws:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Gn="12.13.0";function Zy(n){Gn=n}/**
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
 */const dn=new ra("@firebase/firestore");function wn(){return dn.logLevel}function L(n,...e){if(dn.logLevel<=Q.DEBUG){const t=e.map(pa);dn.debug(`Firestore (${Gn}): ${n}`,...t)}}function _t(n,...e){if(dn.logLevel<=Q.ERROR){const t=e.map(pa);dn.error(`Firestore (${Gn}): ${n}`,...t)}}function fn(n,...e){if(dn.logLevel<=Q.WARN){const t=e.map(pa);dn.warn(`Firestore (${Gn}): ${n}`,...t)}}function pa(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Mh(n,r,t)}function Mh(n,e,t){let r=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _t(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Mh(e,s,r)}function $(n,e){return n}/**
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
 */class Bh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class e_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Re.UNAUTHENTICATED))}shutdown(){}}class t_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class n_{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ot,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ot)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Bh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class r_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class s_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new r_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class i_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Cl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function o_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ya{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=o_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function xo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return po(s)===po(i)?G(s,i):po(s)?1:-1}return G(n.length,e.length)}const a_=55296,c_=57343;function po(n){const e=n.charCodeAt(0);return e>=a_&&e<=c_}function Mn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const kl="__name__";class Xe{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Xe.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return G(e.length,t.length)}static compareSegments(e,t){const r=Xe.isNumericId(e),s=Xe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Xe.extractNumericId(e).compare(Xe.extractNumericId(t)):xo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xt.fromString(e.substring(4,e.length-2))}}class ne extends Xe{construct(e,t,r){return new ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const l_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends Xe{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return l_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kl}static keyField(){return new we([kl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
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
 */function Fh(n,e,t){if(!t)throw new V(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function u_(n,e,t,r){if(e===!0&&r===!0)throw new V(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Dl(n){if(!O.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nl(n){if(O.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Uh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function mi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function $e(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mi(n);throw new V(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function me(n,e){const t={typeString:n};return e&&(t.value=e),t}function Kr(n,e){if(!Uh(n))throw new V(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new V(S.INVALID_ARGUMENT,t);return!0}/**
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
 */const Vl=-62135596800,Ll=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ll);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vl)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ll}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Kr(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:me("string",se._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
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
 */const Nr=-1;function h_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new Ft(s,O.empty(),e)}function d_(n){return new Ft(n.readTime,n.key,Nr)}class Ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ft(U.min(),O.empty(),Nr)}static max(){return new Ft(U.max(),O.empty(),Nr)}}function f_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
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
 */const m_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class g_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==m_)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function p_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Kn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const _a=-1;function pi(n){return n==null}function Ys(n){return n===0&&1/n==-1/0}function y_(n){return typeof n=="number"&&Number.isInteger(n)&&!Ys(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const $h="";function __(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=xl(e)),e=E_(n.get(t),e);return xl(e)}function E_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case $h:t+="";break;default:t+=i}}return t}function xl(n){return n+$h+""}/**
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
 */function Ol(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Kt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Te.RED,this.left=s??Te.EMPTY,this.right=i??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Te(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ml(this.data.getIterator())}getIteratorFrom(e){return new Ml(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class Ml{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new _e(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class qh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qh("Invalid base64 string: "+i):i}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const v_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=v_.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $t(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
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
 */const Hh="server_timestamp",zh="__type__",Gh="__previous_value__",Wh="__local_write_time__";function Ea(n){return(n?.mapValue?.fields||{})[zh]?.stringValue===Hh}function yi(n){const e=n.mapValue.fields[Gh];return Ea(e)?yi(e):e}function Vr(n){const e=Ut(n.mapValue.fields[Wh].timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class I_{constructor(e,t,r,s,i,a,l,u,d,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f,this.apiKey=g}}const Oo="(default)";class Lr{constructor(e,t){this.projectId=e,this.database=t||Oo}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database===Oo}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}function T_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(n.options.projectId,e)}/**
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
 */const Kh="__type__",w_="__max__",bs={mapValue:{}},Qh="__vector__",Xs="value";function jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ea(n)?4:b_(n)?9007199254740991:A_(n)?10:11:B(28295,{value:n})}function it(n,e){if(n===e)return!0;const t=jt(n);if(t!==jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vr(n).isEqual(Vr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ut(s.timestampValue),l=Ut(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return $t(s.bytesValue).isEqual($t(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ue(s.doubleValue),l=ue(i.doubleValue);return a===l?Ys(a)===Ys(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Mn(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ol(a)!==Ol(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!it(a[u],l[u])))return!1;return!0}(n,e);default:return B(52216,{left:n})}}function xr(n,e){return(n.values||[]).find(t=>it(t,e))!==void 0}function Bn(n,e){if(n===e)return 0;const t=jt(n),r=jt(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ue(i.integerValue||i.doubleValue),u=ue(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Bl(n.timestampValue,e.timestampValue);case 4:return Bl(Vr(n),Vr(e));case 5:return xo(n.stringValue,e.stringValue);case 6:return function(i,a){const l=$t(i),u=$t(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=G(l[d],u[d]);if(f!==0)return f}return G(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=G(ue(i.latitude),ue(a.latitude));return l!==0?l:G(ue(i.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Fl(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},u=a.fields||{},d=l[Xs]?.arrayValue,f=u[Xs]?.arrayValue,g=G(d?.values?.length||0,f?.values?.length||0);return g!==0?g:Fl(d,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===bs.mapValue&&a===bs.mapValue)return 0;if(i===bs.mapValue)return 1;if(a===bs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const T=xo(u[g],f[g]);if(T!==0)return T;const R=Bn(l[u[g]],d[f[g]]);if(R!==0)return R}return G(u.length,f.length)}(n.mapValue,e.mapValue);default:throw B(23264,{he:t})}}function Bl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Ut(n),r=Ut(e),s=G(t.seconds,r.seconds);return s!==0?s:G(t.nanos,r.nanos)}function Fl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Bn(t[s],r[s]);if(i)return i}return G(t.length,r.length)}function Fn(n){return Mo(n)}function Mo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ut(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return $t(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Mo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Mo(t.fields[a])}`;return s+"}"}(n.mapValue):B(61005,{value:n})}function xs(n){switch(jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yi(n);return e?16+xs(e):16;case 5:return 2*n.stringValue.length;case 6:return $t(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+xs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Kt(r.fields,(i,a)=>{s+=i.length+xs(a)}),s}(n.mapValue);default:throw B(13486,{value:n})}}function Ul(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Bo(n){return!!n&&"integerValue"in n}function va(n){return!!n&&"arrayValue"in n}function $l(n){return!!n&&"nullValue"in n}function jl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Os(n){return!!n&&"mapValue"in n}function A_(n){return(n?.mapValue?.fields||{})[Kh]?.stringValue===Qh}function Tr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Kt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Tr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Tr(n.arrayValue.values[t]);return e}return{...n}}function b_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===w_}/**
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
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Os(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tr(t)}setAll(e){let t=we.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Tr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Os(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Os(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Kt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Me(Tr(this.value))}}function Jh(n){const e=[];return Kt(n.fields,(t,r)=>{const s=new we([t]);if(Os(r)){const i=Jh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
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
 */class Zs{constructor(e,t){this.position=e,this.inclusive=t}}function ql(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=Bn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Or{constructor(e,t="asc"){this.field=e,this.dir=t}}function S_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yh{}class fe extends Yh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new P_(e,t,r):t==="array-contains"?new D_(e,r):t==="in"?new N_(e,r):t==="not-in"?new V_(e,r):t==="array-contains-any"?new L_(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new C_(e,r):new k_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bn(t,this.value)):t!==null&&jt(this.value)===jt(t)&&this.matchesComparison(Bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends Yh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ke(e,t)}matches(e){return Xh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xh(n){return n.op==="and"}function Zh(n){return R_(n)&&Xh(n)}function R_(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function Fo(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+Fn(n.value);if(Zh(n))return n.filters.map(e=>Fo(e)).join(",");{const e=n.filters.map(t=>Fo(t)).join(",");return`${n.op}(${e})`}}function ed(n,e){return n instanceof fe?function(r,s){return s instanceof fe&&r.op===s.op&&r.field.isEqual(s.field)&&it(r.value,s.value)}(n,e):n instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&ed(a,s.filters[l]),!0):!1}(n,e):void B(19439)}function td(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${Fn(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(td).join(" ,")+"}"}(n):"Filter"}class P_ extends fe{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class C_ extends fe{constructor(e,t){super(e,"in",t),this.keys=nd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class k_ extends fe{constructor(e,t){super(e,"not-in",t),this.keys=nd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nd(n,e){return(e.arrayValue?.values||[]).map(t=>O.fromName(t.referenceValue))}class D_ extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return va(t)&&xr(t.arrayValue,this.value)}}class N_ extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xr(this.value.arrayValue,t)}}class V_ extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xr(this.value.arrayValue,t)}}class L_ extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!va(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>xr(this.value.arrayValue,r))}}/**
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
 */class x_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function zl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new x_(n,e,t,r,s,i,a)}function Ia(n){const e=$(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Fo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Fn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Fn(r)).join(",")),e.Te=t}return e.Te}function Ta(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!S_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ed(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Hl(n.startAt,e.startAt)&&Hl(n.endAt,e.endAt)}function Uo(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Qn{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function O_(n,e,t,r,s,i,a,l){return new Qn(n,e,t,r,s,i,a,l)}function _i(n){return new Qn(n)}function Gl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function M_(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function rd(n){return n.collectionGroup!==null}function wr(n){const e=$(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new _e(we.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Or(i,r))}),t.has(we.keyField().canonicalString())||e.Ie.push(new Or(we.keyField(),r))}return e.Ie}function et(n){const e=$(n);return e.Ee||(e.Ee=B_(e,wr(n))),e.Ee}function B_(n,e){if(n.limitType==="F")return zl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Or(s.field,i)});const t=n.endAt?new Zs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zs(n.startAt.position,n.startAt.inclusive):null;return zl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $o(n,e){const t=n.filters.concat([e]);return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function F_(n,e){const t=n.explicitOrderBy.concat([e]);return new Qn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function jo(n,e,t){return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ei(n,e){return Ta(et(n),et(e))&&n.limitType===e.limitType}function sd(n){return`${Ia(et(n))}|lt:${n.limitType}`}function An(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>td(s)).join(", ")}]`),pi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Fn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Fn(s)).join(",")),`Target(${r})`}(et(n))}; limitType=${n.limitType})`}function vi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of wr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=ql(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,wr(r),s)||r.endAt&&!function(a,l,u){const d=ql(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,wr(r),s))}(n,e)}function U_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function id(n){return(e,t)=>{let r=!1;for(const s of wr(n)){const i=$_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $_(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Bn(u,d):B(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
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
 */class yn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jh(this.inner)}size(){return this.innerSize}}/**
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
 */const j_=new ae(O.comparator);function Et(){return j_}const od=new ae(O.comparator);function yr(...n){let e=od;for(const t of n)e=e.insert(t.key,t);return e}function ad(n){let e=od;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function on(){return Ar()}function cd(){return Ar()}function Ar(){return new yn(n=>n.toString(),(n,e)=>n.isEqual(e))}const q_=new ae(O.comparator),H_=new _e(O.comparator);function W(...n){let e=H_;for(const t of n)e=e.add(t);return e}const z_=new _e(G);function G_(){return z_}/**
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
 */function wa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ys(e)?"-0":e}}function ld(n){return{integerValue:""+n}}function W_(n,e){return y_(e)?ld(e):wa(n,e)}/**
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
 */class Ii{constructor(){this._=void 0}}function K_(n,e,t){return n instanceof ei?function(s,i){const a={fields:{[zh]:{stringValue:Hh},[Wh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ea(i)&&(i=yi(i)),i&&(a.fields[Gh]=i),{mapValue:a}}(t,e):n instanceof Mr?hd(n,e):n instanceof Br?dd(n,e):function(s,i){const a=ud(s,i),l=Wl(a)+Wl(s.Ae);return Bo(a)&&Bo(s.Ae)?ld(l):wa(s.serializer,l)}(n,e)}function Q_(n,e,t){return n instanceof Mr?hd(n,e):n instanceof Br?dd(n,e):t}function ud(n,e){return n instanceof ti?function(r){return Bo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ei extends Ii{}class Mr extends Ii{constructor(e){super(),this.elements=e}}function hd(n,e){const t=fd(e);for(const r of n.elements)t.some(s=>it(s,r))||t.push(r);return{arrayValue:{values:t}}}class Br extends Ii{constructor(e){super(),this.elements=e}}function dd(n,e){let t=fd(e);for(const r of n.elements)t=t.filter(s=>!it(s,r));return{arrayValue:{values:t}}}class ti extends Ii{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Wl(n){return ue(n.integerValue||n.doubleValue)}function fd(n){return va(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function J_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Mr&&s instanceof Mr||r instanceof Br&&s instanceof Br?Mn(r.elements,s.elements,it):r instanceof ti&&s instanceof ti?it(r.Ae,s.Ae):r instanceof ei&&s instanceof ei}(n.transform,e.transform)}class Y_{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ms(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ti{}function md(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new wi(n.key,Le.none()):new Qr(n.key,n.data,Le.none());{const t=n.data,r=Me.empty();let s=new _e(we.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Qt(n.key,r,new Ue(s.toArray()),Le.none())}}function X_(n,e,t){n instanceof Qr?function(s,i,a){const l=s.value.clone(),u=Ql(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Qt?function(s,i,a){if(!Ms(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ql(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(gd(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function br(n,e,t,r){return n instanceof Qr?function(i,a,l,u){if(!Ms(i.precondition,a))return l;const d=i.value.clone(),f=Jl(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qt?function(i,a,l,u){if(!Ms(i.precondition,a))return l;const d=Jl(i.fieldTransforms,u,a),f=a.data;return f.setAll(gd(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return Ms(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Z_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ud(r.transform,s||null);i!=null&&(t===null&&(t=Me.empty()),t.set(r.field,i))}return t||null}function Kl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Mn(r,s,(i,a)=>J_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qr extends Ti{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qt extends Ti{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ql(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Q_(a,l,t[s]))}return r}function Jl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,K_(i,a,e))}return r}class wi extends Ti{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eE extends Ti{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tE{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&X_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=br(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=br(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=md(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,(t,r)=>Kl(t,r))&&Mn(this.baseMutations,e.baseMutations,(t,r)=>Kl(t,r))}}class Aa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return q_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Aa(e,t,r,s)}}/**
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
 */class nE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,J;function sE(n){switch(n){case S.OK:return B(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function pd(n){if(n===void 0)return _t("GRPC error has no .code"),S.UNKNOWN;switch(n){case he.OK:return S.OK;case he.CANCELLED:return S.CANCELLED;case he.UNKNOWN:return S.UNKNOWN;case he.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case he.INTERNAL:return S.INTERNAL;case he.UNAVAILABLE:return S.UNAVAILABLE;case he.UNAUTHENTICATED:return S.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case he.NOT_FOUND:return S.NOT_FOUND;case he.ALREADY_EXISTS:return S.ALREADY_EXISTS;case he.PERMISSION_DENIED:return S.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case he.ABORTED:return S.ABORTED;case he.OUT_OF_RANGE:return S.OUT_OF_RANGE;case he.UNIMPLEMENTED:return S.UNIMPLEMENTED;case he.DATA_LOSS:return S.DATA_LOSS;default:return B(39323,{code:n})}}(J=he||(he={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iE(){return new TextEncoder}/**
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
 */const oE=new xt([4294967295,4294967295],0);function Yl(n){const e=iE().encode(n),t=new Dh;return t.update(e),new Uint8Array(t.digest())}function Xl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xt([t,r],0),new xt([s,i],0)]}class ba{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new _r(`Invalid padding: ${t}`);if(r<0)throw new _r(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _r(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new _r(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=xt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(xt.fromNumber(r)));return s.compare(oE)===1&&(s=new xt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Yl(e),[r,s]=Xl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ba(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Yl(e),[r,s]=Xl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class _r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jr{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Yr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Jr(U.min(),s,new ae(G),Et(),W())}}class Yr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Yr(r,t,W(),W(),W())}}/**
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
 */class Bs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class yd{constructor(e,t){this.targetId=e,this.Ce=t}}class _d{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Zl{constructor(){this.ve=0,this.Fe=eu(),this.Me=Ae.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=W(),t=W(),r=W();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}}),new Yr(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=eu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class aE{constructor(e){this.Ge=e,this.ze=new Map,this.je=Et(),this.Je=Ss(),this.He=Ss(),this.Ze=new ae(G)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:B(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Uo(i))if(r===0){const a=new O(i.path);this.et(t,a,Pe.newNoDocument(a,U.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=$t(r).toUint8Array()}catch(u){if(u instanceof qh)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ba(a,s,i)}catch(u){return fn(u instanceof _r?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Uo(l.target)){const u=new O(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Pe.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=W();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Jr(e,t,this.Ze,this.je,r);return this.je=Et(),this.Je=Ss(),this.He=Ss(),this.Ze=new ae(G),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Zl,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new _e(G),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new _e(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ss(){return new ae(O.comparator)}function eu(){return new ae(O.comparator)}const cE={asc:"ASCENDING",desc:"DESCENDING"},lE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uE={and:"AND",or:"OR"};class hE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qo(n,e){return n.useProto3Json||pi(e)?e:{value:e}}function ni(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ed(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dE(n,e){return ni(n,e.toTimestamp())}function tt(n){return X(!!n,49232),U.fromTimestamp(function(t){const r=Ut(t);return new se(r.seconds,r.nanos)}(n))}function Sa(n,e){return Ho(n,e).canonicalString()}function Ho(n,e){const t=function(s){return new ne(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vd(n){const e=ne.fromString(n);return X(bd(e),10190,{key:e.toString()}),e}function zo(n,e){return Sa(n.databaseId,e.path)}function yo(n,e){const t=vd(e);if(t.get(1)!==n.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(Td(t))}function Id(n,e){return Sa(n.databaseId,e)}function fE(n){const e=vd(n);return e.length===4?ne.emptyPath():Td(e)}function Go(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Td(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tu(n,e,t){return{name:zo(n,e),fields:t.value.mapValue.fields}}function mE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(X(f===void 0||typeof f=="string",58123),Ae.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ae.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?S.UNKNOWN:pd(d.code);return new V(f,d.message||"")}(a);t=new _d(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yo(n,r.document.name),i=tt(r.document.updateTime),a=r.document.createTime?tt(r.document.createTime):U.min(),l=new Me({mapValue:{fields:r.document.fields}}),u=Pe.newFoundDocument(s,i,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Bs(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yo(n,r.document),i=r.readTime?tt(r.readTime):U.min(),a=Pe.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Bs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yo(n,r.document),i=r.removedTargetIds||[];t=new Bs([],i,s,null)}else{if(!("filter"in e))return B(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new rE(s,i),l=r.targetId;t=new yd(l,a)}}return t}function gE(n,e){let t;if(e instanceof Qr)t={update:tu(n,e.key,e.value)};else if(e instanceof wi)t={delete:zo(n,e.key)};else if(e instanceof Qt)t={update:tu(n,e.key,e.data),updateMask:AE(e.fieldMask)};else{if(!(e instanceof eE))return B(16599,{dt:e.type});t={verify:zo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ei)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Br)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ti)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw B(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:dE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)}(n,e.precondition)),t}function pE(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?tt(s.updateTime):tt(i);return a.isEqual(U.min())&&(a=tt(i)),new Y_(a,s.transformResults||[])}(t,e))):[]}function yE(n,e){return{documents:[Id(n,e.path)]}}function _E(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Id(n,s);const i=function(d){if(d.length!==0)return Ad(Ke.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(T){return{field:bn(T.field),direction:IE(T.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=qo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function EE(n){let e=fE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const T=wd(g);return T instanceof Ke&&Zh(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(T=>function(k){return new Or(Sn(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(T))}(t.orderBy));let l=null;t.limit&&(l=function(g){let T;return T=typeof g=="object"?g.value:g,pi(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(g){const T=!!g.before,R=g.values||[];return new Zs(R,T)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const T=!g.before,R=g.values||[];return new Zs(R,T)}(t.endAt)),O_(e,s,a,i,l,"F",u,d)}function vE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Sn(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Sn(t.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Sn(t.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Sn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}}(n):n.fieldFilter!==void 0?function(t){return fe.create(Sn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>wd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}}(t.compositeFilter.op))}(n):B(30097,{filter:n})}function IE(n){return cE[n]}function TE(n){return lE[n]}function wE(n){return uE[n]}function bn(n){return{fieldPath:n.canonicalString()}}function Sn(n){return we.fromServerFormat(n.fieldPath)}function Ad(n){return n instanceof fe?function(t){if(t.op==="=="){if(jl(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NAN"}};if($l(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jl(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NAN"}};if($l(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(t.field),op:TE(t.op),value:t.value}}}(n):n instanceof Ke?function(t){const r=t.getFilters().map(s=>Ad(s));return r.length===1?r[0]:{compositeFilter:{op:wE(t.op),filters:r}}}(n):B(54877,{filter:n})}function AE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Sd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class bE{constructor(e){this.yt=e}}function SE(n){const e=EE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jo(e,e.limit,"L"):e}/**
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
 */class RE{constructor(){this.bn=new PE}addToCollectionParentIndex(e,t){return this.bn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Ft.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class PE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new _e(ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(ne.comparator)).toArray()}}/**
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
 */const nu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rd=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Rd,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
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
 */const ru="LruGarbageCollector",CE=1048576;function su([n,e],[t,r]){const s=G(n,t);return s===0?G(e,r):s}class kE{constructor(e){this.Pr=e,this.buffer=new _e(su),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();su(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class DE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){L(ru,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Kn(t)?L(ru,"Ignoring IndexedDB error during garbage collection: ",t):await Wn(t)}await this.Ar(3e5)})}}class NE{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(gi.ce);const r=new kE(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(nu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nu):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),wn()<=Q.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function VE(n,e){return new NE(n,e)}/**
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
 */class LE{constructor(){this.changes=new yn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class OE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&br(r.mutation,s,Ue.empty(),se.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=on();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=yr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=on();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Et();const a=Ar(),l=function(){return Ar()}();return t.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Qt)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),br(f.mutation,d,f.mutation.getFieldMask(),se.now())):a.set(d.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>l.set(d,new xE(f,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Ar();let s=new ae((a,l)=>a-l),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Ue.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(s.get(l.batchId)||W()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=cd();f.forEach(T=>{if(!i.has(T)){const R=md(t.get(T),r.get(T));R!==null&&g.set(T,R),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return M_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(on());let l=Nr,u=i;return a.next(d=>P.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(T=>{u=u.insert(f,T)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,W())).next(f=>({batchId:l,changes:ad(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=yr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=yr();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,u=>{const d=function(g,T){return new Qn(T,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((g,T)=>{a=a.insert(g,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Pe.newInvalidDocument(f)))});let l=yr();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&br(f.mutation,d,Ue.empty(),se.now()),vi(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class ME{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:tt(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:SE(s.bundledQuery),readTime:tt(s.readTime)}}(t)),P.resolve()}}/**
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
 */class BE{constructor(){this.overlays=new ae(O.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=on();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=on(),i=t.length+1,a=new O(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ae((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=on(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=on(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return P.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new nE(t,r));let i=this.Lr.get(t);i===void 0&&(i=W(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class FE{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Ra{constructor(){this.kr=new _e(ve.Kr),this.qr=new _e(ve.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new ve(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new ve(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new O(new ne([])),r=new ve(t,e),s=new ve(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new O(new ne([])),r=new ve(t,e),s=new ve(t,e+1);let i=W();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ve(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return O.comparator(e.key,t.key)||G(e.Jr,t.Jr)}static Ur(e,t){return G(e.Jr,t.Jr)||O.comparator(e.key,t.key)}}/**
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
 */class UE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new _e(ve.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tE(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new ve(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?_a:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const l=this.Zr(a.Jr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(G);return t.forEach(s=>{const i=new ve(s,0),a=new ve(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],l=>{r=r.add(l.Jr)})}),P.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const a=new ve(new O(i),0);let l=new _e(G);return this.Hr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Jr)),!0)},a),P.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){X(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return P.forEach(t.mutations,s=>{const i=new ve(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new ve(t,0),s=this.Hr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class $E{constructor(e){this.ti=e,this.docs=function(){return new ae(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Pe.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Et();const a=t.path,l=new O(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||f_(d_(f),r)<=0||(s.has(f.key)||vi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ni(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new jE(this)}getSize(e){return P.resolve(this.size)}}class jE extends LE{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class qE{constructor(e){this.persistence=e,this.ri=new yn(t=>Ia(t),Ta),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new Ra,this.targetCount=0,this.oi=qt._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new qt(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class Pd{constructor(e,t){this._i={},this.overlays={},this.ai=new gi(0),this.ui=!1,this.ui=!0,this.ci=new FE,this.referenceDelegate=e(this),this.li=new qE(this),this.indexManager=new RE,this.remoteDocumentCache=function(s){return new $E(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new bE(t),this.Pi=new ME(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new BE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new UE(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new HE(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return P.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class HE extends g_{constructor(e){super(),this.currentSequenceNumber=e}}class Pa{constructor(e){this.persistence=e,this.Ri=new Ra,this.Ai=null}static Vi(e){return new Pa(e)}get di(){if(this.Ai)return this.Ai;throw B(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,r=>{const s=O.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,U.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ri{constructor(e,t){this.persistence=e,this.fi=new yn(r=>__(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VE(this,t)}static Vi(e,t){return new ri(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return P.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xs(e.data.value)),t}wr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ca{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ca(e,t.fromCache,r,s)}}/**
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
 */class zE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class GE{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Nm()?8:p_(Ce())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new zE;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(wn()<=Q.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",An(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(wn()<=Q.DEBUG&&L("QueryEngine","Query:",An(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(wn()<=Q.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",An(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):P.resolve())}gs(e,t){if(Gl(t))return P.resolve(null);let r=et(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=jo(t,null,"F"),r=et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ss(t,l);return this.bs(t,d,a,u.readTime)?this.gs(e,jo(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,r,s){return Gl(t)||s.isEqual(U.min())?P.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?P.resolve(null):(wn()<=Q.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),An(t)),this.Ds(e,a,t,h_(s,Nr)).next(l=>l))})}Ss(e,t){let r=new _e(id(e));return t.forEach((s,i)=>{vi(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return wn()<=Q.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",An(t)),this.fs.getDocumentsMatchingQuery(e,t,Ft.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ka="LocalStore",WE=3e8;class KE{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ae(G),this.Fs=new yn(i=>Ia(i),Ta),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OE(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function QE(n,e,t,r){return new KE(n,e,t,r)}async function Cd(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=W();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function JE(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const g=d.batch,T=g.keys();let R=P.resolve();return T.forEach(k=>{R=R.next(()=>f.getEntry(u,k)).next(N=>{const C=d.docVersions.get(k);X(C!==null,48541),N.version.compareTo(C)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=W();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function kd(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function YE(n,e){const t=$(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((f,g)=>{const T=s.get(g);if(!T)return;l.push(t.li.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.li.addMatchingKeys(i,f.addedDocuments,g)));let R=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Ae.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(g,R),function(N,C,j){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=WE?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(T,R,f)&&l.push(t.li.updateTargetData(i,R))});let u=Et(),d=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(XE(i,a,e.documentUpdates).next(f=>{u=f.Bs,d=f.Ls})),!r.isEqual(U.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next(g=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return P.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.vs=s,i))}function XE(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Et();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):L(ka,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function ZE(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=_a),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ev(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new dt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function Wo(n,e,t){const r=$(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Kn(a))throw a;L(ka,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function iu(n,e,t){const r=$(n);let s=U.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const g=$(u),T=g.Fs.get(f);return T!==void 0?P.resolve(g.vs.get(T)):g.li.getTargetData(d,f)}(r,a,et(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:W())).next(l=>(tv(r,U_(e),l),{documents:l,ks:i})))}function tv(n,e,t){let r=n.Ms.get(e)||U.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class ou{constructor(){this.activeTargetIds=G_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nv{constructor(){this.vo=new ou,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ou,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rv{Mo(e){}shutdown(){}}/**
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
 */const au="ConnectivityMonitor";class cu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){L(au,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){L(au,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rs=null;function Ko(){return Rs===null?Rs=function(){return 268435456+Math.round(2147483648*Math.random())}():Rs++,"0x"+Rs.toString(16)}/**
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
 */const _o="RestConnection",sv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class iv{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Oo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Ko(),l=this.Qo(e,t.toUriEncodedString());L(_o,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:d}=new URL(l),f=Hr(d);return this.zo(e,l,u,r,f).then(g=>(L(_o,`Received RPC '${e}' ${a}: `,g),g),g=>{throw fn(_o,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=sv[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class ov{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Se="WebChannelConnection",mr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class kn extends iv{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!kn.c_){const e=xh();mr(e,Lh.STAT_EVENT,t=>{t.stat===Lo.PROXY?L(Se,"STAT_EVENT: detected buffering proxy"):t.stat===Lo.NOPROXY&&L(Se,"STAT_EVENT: detected no buffering proxy")}),kn.c_=!0}}zo(e,t,r,s,i){const a=Ko();return new Promise((l,u)=>{const d=new Nh;d.setWithCredentials(!0),d.listenOnce(Vh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ls.NO_ERROR:const g=d.getResponseJson();L(Se,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Ls.TIMEOUT:L(Se,`RPC '${e}' ${a} timed out`),u(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ls.HTTP_ERROR:const T=d.getStatus();if(L(Se,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const k=R?.error;if(k&&k.status&&k.message){const N=function(j){const K=j.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN}(k.status);u(new V(N,k.message))}else u(new V(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(S.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(Se,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);L(Se,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Ko(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");L(Se,`Creating RPC '${e}' stream ${s}: ${d}`,l);const f=a.createWebChannel(d,l);this.I_(f);let g=!1,T=!1;const R=new ov({Jo:k=>{T?L(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(L(Se,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),L(Se,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Ho:()=>f.close()});return mr(f,pr.EventType.OPEN,()=>{T||(L(Se,`RPC '${e}' stream ${s} transport opened.`),R.i_())}),mr(f,pr.EventType.CLOSE,()=>{T||(T=!0,L(Se,`RPC '${e}' stream ${s} transport closed`),R.o_(),this.E_(f))}),mr(f,pr.EventType.ERROR,k=>{T||(T=!0,fn(Se,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),R.o_(new V(S.UNAVAILABLE,"The operation could not be completed")))}),mr(f,pr.EventType.MESSAGE,k=>{if(!T){const N=k.data[0];X(!!N,16349);const C=N,j=C?.error||C[0]?.error;if(j){L(Se,`RPC '${e}' stream ${s} received error:`,j);const K=j.status;let Z=function(M){const E=he[M];if(E!==void 0)return pd(E)}(K),Ie=j.message;K==="NOT_FOUND"&&Ie.includes("database")&&Ie.includes("does not exist")&&Ie.includes(this.databaseId.database)&&fn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Z===void 0&&(Z=S.INTERNAL,Ie="Unknown error status: "+K+" with message "+j.message),T=!0,R.o_(new V(Z,Ie)),f.close()}else L(Se,`RPC '${e}' stream ${s} received:`,N),R.__(N)}}),kn.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Oh()}}/**
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
 */function av(n){return new kn(n)}function Eo(){return typeof document<"u"?document:null}/**
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
 */function Ai(n){return new hE(n,!0)}/**
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
 */kn.c_=!1;class Dd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const lu="PersistentStream";class Nd{constructor(e,t,r,s,i,a,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Dd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(_t(t.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new V(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return L(lu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(L(lu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cv extends Nd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=mE(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?tt(a.readTime):U.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Go(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Uo(u)?{documents:yE(i,u)}:{query:_E(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ed(i,a.resumeToken);const d=qo(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=ni(i,a.snapshotVersion.toTimestamp());const d=qo(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=vE(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Go(this.serializer),t.removeTarget=e,this.K_(t)}}class lv extends Nd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=pE(e.writeResults,e.commitTime),r=tt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Go(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>gE(this.serializer,r))};this.K_(t)}}/**
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
 */class uv{}class hv extends uv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Ho(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(S.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Ho(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(S.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function dv(n,e,t,r){return new hv(n,e,t,r)}class fv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const ot="RemoteStore";class mv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new qt(1e3),this.Va=new qt(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{_n(this)&&(L(ot,"Restarting streams for network reachability change."),await async function(u){const d=$(u);d.da.add(4),await Xr(d),d.ga.set("Unknown"),d.da.delete(4),await bi(d)}(this))})}),this.ga=new fv(r,s)}}async function bi(n){if(_n(n))for(const e of n.ma)await e(!0)}async function Xr(n){for(const e of n.ma)await e(!1)}function Qo(n,e){return n.Ea.get(e)||void 0}function Vd(n,e){const t=$(n),r=Qo(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=function(l,u){const d=Qo(l,u);d!==void 0&&l.Ra.delete(d);const f=function(T,R){return R%2!=0?T.Va.next():T.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(t,e.targetId);L(ot,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new dt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),La(t)?Va(t):Jn(t).O_()&&Na(t,i)}function Da(n,e){const t=$(n),r=Jn(t),s=Qo(t,e);L(ot,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&Ld(t,s),t.Ia.size===0&&(r.O_()?r.L_():_n(t)&&t.ga.set("Unknown"))}function Na(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void L(ot,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Jn(n).Z_(e)}function Ld(n,e){n.pa.$e(e),Jn(n).X_(e)}function Va(n){n.pa=new aE({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):W()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Jn(n).start(),n.ga.ua()}function La(n){return _n(n)&&!Jn(n).x_()&&n.Ia.size>0}function _n(n){return $(n).da.size===0}function xd(n){n.pa=void 0}async function gv(n){n.ga.set("Online")}async function pv(n){n.Ia.forEach((e,t)=>{Na(n,e)})}async function yv(n,e){xd(n),La(n)?(n.ga.ha(e),Va(n)):n.ga.set("Unknown")}async function _v(n,e,t){if(n.ga.set("Online"),e instanceof _d&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(n,e)}catch(r){L(ot,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await si(n,r)}else if(e instanceof Bs?n.pa.Xe(e):e instanceof yd?n.pa.st(e):n.pa.tt(e),!t.isEqual(U.min()))try{const r=await kd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.pa.Tt(a);l.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const g=i.Ia.get(f);g&&i.Ia.set(f,g.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,f)=>{const g=i.Ia.get(d);if(!g)return;i.Ia.set(d,g.withResumeToken(Ae.EMPTY_BYTE_STRING,g.snapshotVersion)),Ld(i,d);const T=new dt(g.target,d,f,g.sequenceNumber);Na(i,T)});const u=function(f,g){const T=new Map;g.targetChanges.forEach((k,N)=>{const C=f.Ra.get(N);C!==void 0&&T.set(C,k)});let R=new ae(G);return g.targetMismatches.forEach((k,N)=>{const C=f.Ra.get(k);C!==void 0&&(R=R.insert(C,N))}),new Jr(g.snapshotVersion,T,R,g.documentUpdates,g.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){L(ot,"Failed to raise snapshot:",r),await si(n,r)}}async function si(n,e,t){if(!Kn(e))throw e;n.da.add(1),await Xr(n),n.ga.set("Offline"),t||(t=()=>kd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(ot,"Retrying IndexedDB access"),await t(),n.da.delete(1),await bi(n)})}function Od(n,e){return e().catch(t=>si(n,t,e))}async function Si(n){const e=$(n),t=Ht(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:_a;for(;Ev(e);)try{const s=await ZE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,vv(e,s)}catch(s){await si(e,s)}Md(e)&&Bd(e)}function Ev(n){return _n(n)&&n.Ta.length<10}function vv(n,e){n.Ta.push(e);const t=Ht(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Md(n){return _n(n)&&!Ht(n).x_()&&n.Ta.length>0}function Bd(n){Ht(n).start()}async function Iv(n){Ht(n).ra()}async function Tv(n){const e=Ht(n);for(const t of n.Ta)e.ea(t.mutations)}async function wv(n,e,t){const r=n.Ta.shift(),s=Aa.from(r,e,t);await Od(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Si(n)}async function Av(n,e){e&&Ht(n).Y_&&await async function(r,s){if(function(a){return sE(a)&&a!==S.ABORTED}(s.code)){const i=r.Ta.shift();Ht(r).B_(),await Od(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Si(r)}}(n,e),Md(n)&&Bd(n)}async function uu(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),L(ot,"RemoteStore received new credentials");const r=_n(t);t.da.add(3),await Xr(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await bi(t)}async function bv(n,e){const t=$(n);e?(t.da.delete(2),await bi(t)):e||(t.da.add(2),await Xr(t),t.ga.set("Unknown"))}function Jn(n){return n.ya||(n.ya=function(t,r,s){const i=$(t);return i.sa(),new cv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:gv.bind(null,n),Yo:pv.bind(null,n),t_:yv.bind(null,n),H_:_v.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),La(n)?Va(n):n.ga.set("Unknown")):(await n.ya.stop(),xd(n))})),n.ya}function Ht(n){return n.wa||(n.wa=function(t,r,s){const i=$(t);return i.sa(),new lv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Iv.bind(null,n),t_:Av.bind(null,n),ta:Tv.bind(null,n),na:wv.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await Si(n)):(await n.wa.stop(),n.Ta.length>0&&(L(ot,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
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
 */class xa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new xa(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oa(n,e){if(_t("AsyncQueue",`${e}: ${n}`),Kn(n))return new V(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Dn{static emptySet(e){return new Dn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=yr(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Dn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class hu{constructor(){this.Sa=new ae(O.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):B(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Un{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Un(e,t,Dn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ei(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Sv{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class Rv{constructor(){this.queries=du(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=du(),i.forEach((a,l)=>{for(const u of l.va)u.onError(r)})})(this,new V(S.ABORTED,"Firestore shutting down"))}}function du(){return new yn(n=>sd(n),Ei)}async function Fd(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new Sv,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Oa(a,`Initialization of query '${An(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&Ma(t)}async function Ud(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Pv(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.va)l.Na(s)&&(r=!0);a.Ca=s}}r&&Ma(t)}function Cv(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function Ma(n){n.xa.forEach(e=>{e.next()})}var Jo,fu;(fu=Jo||(Jo={})).Ba="default",fu.Cache="cache";class $d{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Un(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=Un.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Jo.Cache}}/**
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
 */class jd{constructor(e){this.key=e}}class qd{constructor(e){this.key=e}}class kv{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=W(),this.mutatedKeys=W(),this.iu=id(e),this.su=new Dn(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new hu,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const T=s.get(f),R=vi(this.query,g)?g:null,k=!!T&&this.mutatedKeys.has(T.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let C=!1;T&&R?T.data.isEqual(R.data)?k!==N&&(r.track({type:3,doc:R}),C=!0):this.uu(T,R)||(r.track({type:2,doc:R}),C=!0,(u&&this.iu(R,u)>0||d&&this.iu(R,d)<0)&&(l=!0)):!T&&R?(r.track({type:0,doc:R}),C=!0):T&&!R&&(r.track({type:1,doc:T}),C=!0,(u||d)&&(l=!0)),C&&(R?(a=a.add(R),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:a,au:r,bs:l,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((f,g)=>function(R,k){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Vt:C})}};return N(R)-N(k)}(f.type,g.type)||this.iu(f.doc,g.doc)),this.cu(r),s=s??!1;const l=t&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,d=u!==this.nu;return this.nu=u,a.length!==0||d?{snapshot:new Un(this.query,e.su,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new hu,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=W(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const t=[];return e.forEach(r=>{this.ru.has(r)||t.push(new qd(r))}),this.ru.forEach(r=>{e.has(r)||t.push(new jd(r))}),t}Tu(e){this.tu=e.ks,this.ru=W();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return Un.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Ba="SyncEngine";class Dv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Nv{constructor(e){this.key=e,this.Eu=!1}}class Vv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new yn(l=>sd(l),Ei),this.Vu=new Map,this.du=new Set,this.mu=new ae(O.comparator),this.fu=new Map,this.gu=new Ra,this.pu={},this.yu=new Map,this.wu=qt.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Lv(n,e,t=!0){const r=Qd(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await Hd(r,e,t,!0),s}async function xv(n,e){const t=Qd(n);await Hd(t,e,!0,!1)}async function Hd(n,e,t,r){const s=await ev(n.localStore,et(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Ov(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Vd(n.remoteStore,s),l}async function Ov(n,e,t,r,s){n.bu=(g,T,R)=>async function(N,C,j,K){let Z=C.view._u(j);Z.bs&&(Z=await iu(N.localStore,C.query,!1).then(({documents:E})=>C.view._u(E,Z)));const Ie=K&&K.targetChanges.get(C.targetId),Be=K&&K.targetMismatches.get(C.targetId)!=null,M=C.view.applyChanges(Z,N.isPrimaryClient,Ie,Be);return gu(N,C.targetId,M.hu),M.snapshot}(n,g,T,R);const i=await iu(n.localStore,e,!0),a=new kv(e,i.ks),l=a._u(i.documents),u=Yr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);gu(n,t,d.hu);const f=new Dv(e,t,a);return n.Au.set(e,f),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),d.snapshot}async function Mv(n,e,t){const r=$(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(a=>!Ei(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Da(r.remoteStore,s.targetId),Yo(r,s.targetId)}).catch(Wn)):(Yo(r,s.targetId),await Wo(r.localStore,s.targetId,!0))}async function Bv(n,e){const t=$(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Da(t.remoteStore,r.targetId))}async function Fv(n,e,t){const r=Gv(n);try{const s=await function(a,l){const u=$(a),d=se.now(),f=l.reduce((R,k)=>R.add(k.key),W());let g,T;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=Et(),N=W();return u.xs.getEntries(R,f).next(C=>{k=C,k.forEach((j,K)=>{K.isValidDocument()||(N=N.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,k)).next(C=>{g=C;const j=[];for(const K of l){const Z=Z_(K,g.get(K.key).overlayedDocument);Z!=null&&j.push(new Qt(K.key,Z,Jh(Z.value.mapValue),Le.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,j,l)}).next(C=>{T=C;const j=C.applyToLocalDocumentSet(g,N);return u.documentOverlayCache.saveOverlays(R,C.batchId,j)})}).then(()=>({batchId:T.batchId,changes:ad(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.pu[a.currentUser.toKey()];d||(d=new ae(G)),d=d.insert(l,u),a.pu[a.currentUser.toKey()]=d}(r,s.batchId,t),await Zr(r,s.changes),await Si(r.remoteStore)}catch(s){const i=Oa(s,"Failed to persist write");t.reject(i)}}async function zd(n,e){const t=$(n);try{const r=await YE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.fu.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?X(a.Eu,14607):s.removedDocuments.size>0&&(X(a.Eu,42227),a.Eu=!1))}),await Zr(t,r,e)}catch(r){await Wn(r)}}function mu(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach((i,a)=>{const l=a.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=$(a);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const T of g.va)T.Oa(l)&&(d=!0)}),d&&Ma(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Uv(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let a=new ae(O.comparator);a=a.insert(i,Pe.newNoDocument(i,U.min()));const l=W().add(i),u=new Jr(U.min(),new Map,new ae(G),a,l);await zd(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Fa(r)}else await Wo(r.localStore,e,!1).then(()=>Yo(r,e,t)).catch(Wn)}async function $v(n,e){const t=$(n),r=e.batch.batchId;try{const s=await JE(t.localStore,e);Wd(t,r,null),Gd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zr(t,s)}catch(s){await Wn(s)}}async function jv(n,e,t){const r=$(n);try{const s=await function(a,l){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(X(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);Wd(r,e,t),Gd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zr(r,s)}catch(s){await Wn(s)}}function Gd(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function Wd(n,e,t){const r=$(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Yo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(r=>{n.gu.containsKey(r)||Kd(n,r)})}function Kd(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(Da(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),Fa(n))}function gu(n,e,t){for(const r of t)r instanceof jd?(n.gu.addReference(r.key,e),qv(n,r)):r instanceof qd?(L(Ba,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||Kd(n,r.key)):B(19791,{Cu:r})}function qv(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(L(Ba,"New document in limbo: "+t),n.du.add(r),Fa(n))}function Fa(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new O(ne.fromString(e)),r=n.wu.next();n.fu.set(r,new Nv(t)),n.mu=n.mu.insert(t,r),Vd(n.remoteStore,new dt(et(_i(t.path)),r,"TargetPurposeLimboResolution",gi.ce))}}async function Zr(n,e,t){const r=$(n),s=[],i=[],a=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{a.push(r.bu(u,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){const f=d?!d.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Ca.Es(u.targetId,d);i.push(f)}}))}),await Promise.all(a),r.Ru.H_(s),await async function(u,d){const f=$(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>P.forEach(d,T=>P.forEach(T.Ts,R=>f.persistence.referenceDelegate.addReference(g,T.targetId,R)).next(()=>P.forEach(T.Is,R=>f.persistence.referenceDelegate.removeReference(g,T.targetId,R)))))}catch(g){if(!Kn(g))throw g;L(ka,"Failed to update sequence numbers: "+g)}for(const g of d){const T=g.targetId;if(!g.fromCache){const R=f.vs.get(T),k=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(T,N)}}}(r.localStore,i))}async function Hv(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){L(Ba,"User change. New user:",e.toKey());const r=await Cd(t.localStore,e);t.currentUser=e,function(i,a){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new V(S.CANCELLED,a))})}),i.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zr(t,r.Ns)}}function zv(n,e){const t=$(n),r=t.fu.get(e);if(r&&r.Eu)return W().add(r.key);{let s=W();const i=t.Vu.get(e);if(!i)return s;for(const a of i){const l=t.Au.get(a);s=s.unionWith(l.view.ou)}return s}}function Qd(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uv.bind(null,e),e.Ru.H_=Pv.bind(null,e.eventManager),e.Ru.Du=Cv.bind(null,e.eventManager),e}function Gv(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$v.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jv.bind(null,e),e}class ii{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ai(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return QE(this.persistence,new GE,e.initialUser,this.serializer)}xu(e){return new Pd(Pa.Vi,this.serializer)}Mu(e){return new nv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ii.provider={build:()=>new ii};class Wv extends ii{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){X(this.persistence.referenceDelegate instanceof ri,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DE(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new Pd(r=>ri.Vi(r,t),this.serializer)}}class Xo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hv.bind(null,this.syncEngine),await bv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Rv}()}createDatastore(e){const t=Ai(e.databaseInfo.databaseId),r=av(e.databaseInfo);return dv(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new mv(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>mu(this.syncEngine,t,0),function(){return cu.v()?new cu:new rv}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,f){const g=new Vv(s,i,a,l,u,d);return f&&(g.Su=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=$(t);L(ot,"RemoteStore shutting down."),r.da.add(5),await Xr(r),r.fa.shutdown(),r.ga.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Xo.provider={build:()=>new Xo};/**
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
 */class Jd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const zt="FirestoreClient";class Kv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=ya.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Oa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vo(n,e){n.asyncQueue.verifyOperationInProgress(),L(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function pu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Qv(n);L(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>uu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>uu(e.remoteStore,s)),n._onlineComponents=e}async function Qv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(zt,"Using user provided OfflineComponentProvider");try{await vo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await vo(n,new ii)}}else L(zt,"Using default OfflineComponentProvider"),await vo(n,new Wv(void 0));return n._offlineComponents}async function Yd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(zt,"Using user provided OnlineComponentProvider"),await pu(n,n._uninitializedComponentsProvider._online)):(L(zt,"Using default OnlineComponentProvider"),await pu(n,new Xo))),n._onlineComponents}function Jv(n){return Yd(n).then(e=>e.syncEngine)}async function Zo(n){const e=await Yd(n),t=e.eventManager;return t.onListen=Lv.bind(null,e.syncEngine),t.onUnlisten=Mv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Bv.bind(null,e.syncEngine),t}function Yv(n,e,t,r){const s=new Jd(r),i=new $d(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>Fd(await Zo(n),i)),()=>{s.Ku(),n.asyncQueue.enqueueAndForget(async()=>Ud(await Zo(n),i))}}function Xv(n,e,t={}){const r=new Ot;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const f=new Jd({next:T=>{f.Ku(),a.enqueueAndForget(()=>Ud(i,g));const R=T.docs.has(l);!R&&T.fromCache?d.reject(new V(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&u&&u.source==="server"?d.reject(new V(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),g=new $d(_i(l.path),f,{includeMetadataChanges:!0,Wa:!0});return Fd(i,g)}(await Zo(n),n.asyncQueue,e,t,r)),r.promise}function Zv(n,e){const t=new Ot;return n.asyncQueue.enqueueAndForget(async()=>Fv(await Jv(n),e,t)),t.promise}/**
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
 */function Xd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const eI="ComponentProvider",yu=new Map;function tI(n,e,t,r,s){return new I_(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Xd(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Zd="firestore.googleapis.com",_u=!0;class Eu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zd,this.ssl=_u}else this.host=e.host,this.ssl=e.ssl??_u;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CE)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}u_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ri{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new e_;switch(r.type){case"firstParty":return new s_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=yu.get(t);r&&(L(eI,"Removing Datastore"),yu.delete(t),r.terminate())}(this),Promise.resolve()}}function nI(n,e,t,r={}){n=$e(n,Ri);const s=Hr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Ku(`https://${l}`),i.host!==Zd&&i.host!==l&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ln(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Re.MOCK_USER;else{d=bm(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Re(g)}n._authCredentials=new t_(new Bh(d,f))}}/**
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
 */class En{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new En(this.firestore,e,this._query)}}class le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Kr(t,le._jsonSchema))return new le(e,r||null,new O(ne.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:me("string",le._jsonSchemaVersion),referencePath:me("string")};class Mt extends En{constructor(e,t,r){super(e,t,_i(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new O(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function ef(n,e,...t){if(n=ge(n),Fh("collection","path",e),n instanceof Ri){const r=ne.fromString(e,...t);return Nl(r),new Mt(n,null,r)}{if(!(n instanceof le||n instanceof Mt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return Nl(r),new Mt(n.firestore,null,r)}}function Jt(n,e,...t){if(n=ge(n),arguments.length===1&&(e=ya.newId()),Fh("doc","path",e),n instanceof Ri){const r=ne.fromString(e,...t);return Dl(r),new le(n,null,new O(r))}{if(!(n instanceof le||n instanceof Mt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return Dl(r),new le(n.firestore,n instanceof Mt?n.converter:null,new O(r))}}/**
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
 */const vu="AsyncQueue";class Iu{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Dd(this,"async_queue_retry"),this.lc=()=>{const r=Eo();r&&L(vu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=Eo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Eo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new Ot;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Kn(e))throw e;L(vu,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,_t("INTERNAL UNHANDLED ERROR: ",Tu(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=xa.createAndSchedule(this,e,t,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&B(47125,{Rc:Tu(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function Tu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class vt extends Ri{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Iu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iu(e),this._firestoreClient=void 0,await e}}}function rI(n,e){const t=typeof n=="object"?n:Xu(),r=typeof n=="string"?n:e,s=ia(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wm("firestore");i&&nI(s,...i)}return s}function Pi(n){if(n._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||sI(n),n._firestoreClient}function sI(n){const e=n._freezeSettings(),t=tI(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Kv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(Ae.fromBase64String(e))}catch(t){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Kr(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:me("string",je._jsonSchemaVersion),bytes:me("string")};/**
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
 */class Ci{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ua{constructor(e){this._methodName=e}}/**
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
 */class nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nt._jsonSchemaVersion}}static fromJSON(e){if(Kr(e,nt._jsonSchema))return new nt(e.latitude,e.longitude)}}nt._jsonSchemaVersion="firestore/geoPoint/1.0",nt._jsonSchema={type:me("string",nt._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
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
 */class We{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Kr(e,We._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new We(e.vectorValues);throw new V(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:me("string",We._jsonSchemaVersion),vectorValues:me("object")};/**
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
 */const iI=/^__.*__$/;class oI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qr(e,this.data,t,this.fieldTransforms)}}class tf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:n})}}class $a{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new $a({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return oi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(nf(this.dataSource)&&iI.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class aI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ai(e)}V(e,t,r,s=!1){return new $a({dataSource:e,methodName:t,targetDoc:r,path:we.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function es(n){const e=n._freezeSettings(),t=Ai(n._databaseId);return new aI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ja(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);qa("Data must be an object, but it was:",a,r);const l=of(r,a);let u,d;if(i.merge)u=new Ue(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const T=$n(e,g,t);if(!a.contains(T))throw new V(S.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);lf(f,T)||f.push(T)}u=new Ue(f),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new oI(new Me(l),u,d)}class ki extends Ua{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ki}}function rf(n,e,t,r){const s=n.V(1,e,t);qa("Data must be an object, but it was:",s,r);const i=[],a=Me.empty();Kt(r,(u,d)=>{const f=cf(e,u,t);d=ge(d);const g=s.Sc(f);if(d instanceof ki)i.push(f);else{const T=ts(d,g);T!=null&&(i.push(f),a.set(f,T))}});const l=new Ue(i);return new tf(a,l,s.fieldTransforms)}function sf(n,e,t,r,s,i){const a=n.V(1,e,t),l=[$n(e,r,t)],u=[s];if(i.length%2!=0)throw new V(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)l.push($n(e,i[T])),u.push(i[T+1]);const d=[],f=Me.empty();for(let T=l.length-1;T>=0;--T)if(!lf(d,l[T])){const R=l[T];let k=u[T];k=ge(k);const N=a.Sc(R);if(k instanceof ki)d.push(R);else{const C=ts(k,N);C!=null&&(d.push(R),f.set(R,C))}}const g=new Ue(d);return new tf(f,g,a.fieldTransforms)}function cI(n,e,t,r=!1){return ts(t,n.V(r?4:3,e))}function ts(n,e){if(af(n=ge(n)))return qa("Unsupported field value:",e,n),of(n,e);if(n instanceof Ua)return function(r,s){if(!nf(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=ts(l,s.bc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return W_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=se.fromDate(r);return{timestampValue:ni(s.serializer,i)}}if(r instanceof se){const i=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ni(s.serializer,i)}}if(r instanceof nt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof je)return{bytesValue:Ed(s.serializer,r._byteString)};if(r instanceof le){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof We)return function(a,l){const u=a instanceof We?a.toArray():a;return{mapValue:{fields:{[Kh]:{stringValue:Qh},[Xs]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return wa(l.serializer,f)})}}}}}}(r,s);if(Sd(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${mi(r)}`)}(n,e)}function of(n,e){const t={};return jh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kt(n,(r,s)=>{const i=ts(s,e.yc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function af(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof nt||n instanceof je||n instanceof le||n instanceof Ua||n instanceof We||Sd(n))}function qa(n,e,t){if(!af(t)||!Uh(t)){const r=mi(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function $n(n,e,t){if((e=ge(e))instanceof Ci)return e._internalPath;if(typeof e=="string")return cf(n,e);throw oi("Field path arguments must be of type string or ",n,!1,void 0,t)}const lI=new RegExp("[~\\*/\\[\\]]");function cf(n,e,t){if(e.search(lI)>=0)throw oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ci(...e.split("."))._internalPath}catch{throw oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new V(S.INVALID_ARGUMENT,l+n+u)}function lf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class uI{convertValue(e,t="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($t(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Kt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[Xs].arrayValue?.values?.map(r=>ue(r.doubleValue));return new We(t)}convertGeoPoint(e){return new nt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=yi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Vr(e));default:return null}}convertTimestamp(e){const t=Ut(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ne.fromString(e);X(bd(r),9688,{name:e});const s=new Lr(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||_t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class uf extends uI{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}const wu="@firebase/firestore",Au="4.14.1";/**
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
 */function bu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class hf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field($n("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class hI extends hf{data(){return super.data()}}/**
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
 */function dI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ha{}class df extends Ha{}function fI(n,e,...t){let r=[];e instanceof Ha&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Ga).length,l=i.filter(u=>u instanceof za).length;if(a>1||a>0&&l>0)throw new V(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class za extends df{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new za(e,t,r)}_apply(e){const t=this._parse(e);return ff(e._query,t),new En(e.firestore,e.converter,$o(e._query,t))}_parse(e){const t=es(e.firestore);return function(i,a,l,u,d,f,g){let T;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ru(g,f);const k=[];for(const N of g)k.push(Su(u,i,N));T={arrayValue:{values:k}}}else T=Su(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ru(g,f),T=cI(l,a,g,f==="in"||f==="not-in");return fe.create(d,f,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ga extends Ha{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ga(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)ff(a,u),a=$o(a,u)}(e._query,t),new En(e.firestore,e.converter,$o(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wa extends df{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Wa(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Or(i,a)}(e._query,this._field,this._direction);return new En(e.firestore,e.converter,F_(e._query,t))}}function mI(n,e="asc"){const t=e,r=$n("orderBy",n);return Wa._create(r,t)}function Su(n,e,t){if(typeof(t=ge(t))=="string"){if(t==="")throw new V(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rd(e)&&t.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ne.fromString(t));if(!O.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ul(n,new O(r))}if(t instanceof le)return Ul(n,t._key);throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mi(t)}.`)}function Ru(n,e){if(!Array.isArray(n)||n.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ff(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Ka(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Er{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cn extends hf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($n("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=cn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",cn._jsonSchema={type:me("string",cn._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class Fs extends cn{data(e={}){return super.data(e)}}class Nn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Er(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Fs(this._firestore,this._userDataWriter,r.key,r,new Er(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Fs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Er(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Fs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Er(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:gI(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Nn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ya.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
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
 */class pI{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=es(e)}set(e,t,r){this._verifyNotCommitted();const s=Io(e,this._firestore),i=Ka(s.converter,t,r),a=ja(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Le.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Io(e,this._firestore);let a;return a=typeof(t=ge(t))=="string"||t instanceof Ci?sf(this._dataReader,"WriteBatch.update",i._key,t,r,s):rf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,Le.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Io(e,this._firestore);return this._mutations=this._mutations.concat(new wi(t._key,Le.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Io(n,e){if((n=ge(n)).firestore!==e)throw new V(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Qa(n){n=$e(n,le);const e=$e(n.firestore,vt),t=Pi(e);return Xv(t,n._key).then(r=>pf(e,n,r))}function yI(n,e,t){n=$e(n,le);const r=$e(n.firestore,vt),s=Ka(n.converter,e,t),i=es(r);return ns(r,[ja(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Le.none())])}function Ja(n,e,t,...r){n=$e(n,le);const s=$e(n.firestore,vt),i=es(s);let a;return a=typeof(e=ge(e))=="string"||e instanceof Ci?sf(i,"updateDoc",n._key,e,t,r):rf(i,"updateDoc",n._key,e),ns(s,[a.toMutation(n._key,Le.exists(!0))])}function mf(n){return ns($e(n.firestore,vt),[new wi(n._key,Le.none())])}function gf(n,e){const t=$e(n.firestore,vt),r=Jt(n),s=Ka(n.converter,e),i=es(n.firestore);return ns(t,[ja(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function Pu(n,...e){n=ge(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||bu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(bu(e[r])){const d=e[r];e[r]=d.next?.bind(d),e[r+1]=d.error?.bind(d),e[r+2]=d.complete?.bind(d)}let i,a,l;if(n instanceof le)a=$e(n.firestore,vt),l=_i(n._key.path),i={next:d=>{e[r]&&e[r](pf(a,n,d))},error:e[r+1],complete:e[r+2]};else{const d=$e(n,En);a=$e(d.firestore,vt),l=d._query;const f=new uf(a);i={next:g=>{e[r]&&e[r](new Nn(a,f,d,g))},error:e[r+1],complete:e[r+2]},dI(n._query)}const u=Pi(a);return Yv(u,l,s,i)}function ns(n,e){const t=Pi(n);return Zv(t,e)}function pf(n,e,t){const r=t.docs.get(e._key),s=new uf(n);return new cn(n,s,e._key,r,new Er(t.hasPendingWrites,t.fromCache),e.converter)}function _I(n){return n=$e(n,vt),Pi(n),new pI(n,e=>ns(n,e))}(function(e,t=!0){Zy(Hn),xn(new un("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new vt(new n_(r.getProvider("auth-internal")),new i_(a,r.getProvider("app-check-internal")),T_(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Lt(wu,Au,e),Lt(wu,Au,"esm2020")})();const EI={apiKey:"AIzaSyBTz4iLKtBiZwHk-5pjNU1AFQF1zDhyTHI",authDomain:"gen-lang-client-0019812834.firebaseapp.com",projectId:"gen-lang-client-0019812834",storageBucket:"gen-lang-client-0019812834.firebasestorage.app",messagingSenderId:"677554753890",appId:"1:677554753890:web:2c13f2a2b0e019e5471c3b",measurementId:"G-ZMRMRWXQNV"},yf=Yu(EI),Ya=Yy(yf),Di=rI(yf,"money"),vI=new lt,II="1.3.0",TI=[{version:"1.3.0",date:"2026-05-18",label:"Pro Features · Recurring UX Fix",changes:[{type:"fix",text:"รายการประจำ — ปรับ UX ใหม่ทั้งหมด: แสดงสถานะชัดเจน (ถึงกำหนด/ใกล้/จ่ายแล้ว) ไม่สับสนกับปุ่ม"},{type:"fix",text:'รายการประจำ — กดปุ่ม "💸 เพิ่มรายจ่าย" จะเปิดฟอร์มพร้อมกรอกข้อมูลให้อัตโนมัติ'},{type:"new",text:"Quick-fill รายการประจำในฟอร์มเพิ่มรายการ — เมื่อถึงกำหนด จะแสดง chip ให้เลือกทันที"},{type:"fix",text:"รายการล่าสุดบนมือถือ — แสดงแค่ 3 รายการ ไม่ต้องเลื่อนเพื่อดูหน้า Dashboard"},{type:"new",text:"[Pro] เปรียบเทียบรายเดือน — กราฟเทียบรายรับ-รายจ่ายย้อนหลัง 6/12 เดือน"},{type:"new",text:"[Pro] Savings Goal — ตั้งเป้าหมายการออม พร้อม progress bar"},{type:"new",text:"[Pro] Export PDF — พิมพ์รายงานการเงินรอบบิลปัจจุบัน"}]},{version:"1.2.0",date:"2026-05-18",label:"Budget · Recurring · Export · Insights",changes:[{type:"new",text:"Budget รายหมวดหมู่ — ตั้งวงเงินแต่ละหมวด เห็น progress bar สี 🟢🟡🔴 แบบ real-time"},{type:"new",text:"แจ้งเตือน Budget — แจ้งเมื่อใกล้เกิน (80%) และเมื่อเกินแล้ว เลือกแจ้งครั้งเดียว/ทุกครั้งได้"},{type:"new",text:"Export CSV — ดาวน์โหลดรายการเป็นไฟล์ CSV (Free 30 วัน / Pro 1 ปี)"},{type:"new",text:"Spending Insights — ค่าใช้จ่ายเฉลี่ยต่อวัน, หมวดที่ใช้มากสุด, savings rate, เทียบรอบที่แล้ว"},{type:"new",text:"รายการประจำ (Recurring) — ตั้งบิลประจำ แจ้งเตือนวันครบกำหนด กดปุ่มเดียวบันทึกว่าจ่ายแล้ว"},{type:"new",text:"ค้นหารายการ — พิมพ์ค้นหาชื่อ/จำนวน/หมวดหมู่ได้ทันที ใช้ได้ทั้ง Free และ Pro"},{type:"fix",text:"แก้สแกนสลิปรูปเดิมซ้ำไม่ได้ — กดสแกนรูปเดิมอีกครั้งใช้งานได้แล้ว"},{type:"fix",text:"แก้ loading overlay ค้างหน้าจอเมื่อเกิด error ระหว่างสแกน"},{type:"fix",text:"แก้ตัวเลขเงินมีทศนิยมผิด เช่น 0.30000000000000004"},{type:"improve",text:"Settings modal — ปิดด้วยการกด backdrop ได้แล้ว"}]},{version:"1.1.0",date:"2026-05-18",label:"ฟีเจอร์ใหม่ + ปรับปรุง",changes:[{type:"new",text:'มุมมอง "แยก" ในรายการทั้งหมด — รายรับซ้าย รายจ่ายขวา พร้อมตาชั่งบอกว่าฝั่งไหนหนักกว่า'},{type:"new",text:"Timeline วันต่อวัน — รายการจัดกลุ่มตามวันที่ อ่านง่ายขึ้น"},{type:"new",text:'สลับดู "รอบบิล" กับ "ทั้งหมด" ในหน้ารายการ'},{type:"new",text:"Pro — เก็บรูปสลิปไว้ 3 เดือน คลิก 📷 ดูภาพย้อนหลังได้ทุกเมื่อ"},{type:"new",text:"แนวโน้มรายวัน — ช่วงวันที่แสดงตามรอบบิลที่ตั้งไว้ (วันตัดรอบ 1–31)"},{type:"new",text:"แสดงจำนวนสแกนที่เหลือวันนี้ — เปลี่ยนสีเตือนเมื่อใกล้หมด"},{type:"fix",text:"แก้ข้อมูลไม่บันทึก เพราะแอปต่อ Firestore ผิด database"},{type:"fix",text:"แก้หน้า login ไม่โชว์หลัง deploy ครั้งแรก"},{type:"fix",text:"แก้เพิ่มรายการต่อเนื่องไม่ได้ — หน้าจอค้างทำให้พิมพ์ไม่ได้"},{type:"fix",text:"แก้จำนวนสแกนที่เหลือแสดงผิดหลังรีเฟรชหน้า"},{type:"improve",text:"เปิดแอปครั้งถัดไปข้อมูลโชว์เกือบทันที — ไม่ต้องรอโหลดนาน"},{type:"improve",text:"กราฟแนวโน้มไม่แสดงแท่งว่างของวันในอนาคต"}]},{version:"1.0.0",date:"2026-05-17",label:"เปิดตัว",changes:[{type:"new",text:"Login ด้วย Google — ข้อมูลแยกต่อคน sync ทุกอุปกรณ์"},{type:"new",text:"UI ใหม่ทั้งหมด — light theme, clean layout"},{type:"new",text:"สแกนสลิปด้วย Gemini 2.5 Flash AI"},{type:"new",text:"Free plan — สแกนสลิปฟรี 5 ครั้ง/วัน"},{type:"new",text:"Pro plan — สแกนไม่จำกัด + เก็บรูปสลิป"},{type:"new",text:"แนวโน้มรายวันตามรอบบิลที่ตั้งไว้"}]}],Cu={th:{locale:"th-TH","login.subtitle":`บันทึกรายรับ-รายจ่ายส่วนตัว
ข้อมูลของคุณ เห็นแค่คุณคนเดียว`,"login.google":"เข้าสู่ระบบด้วย Google","login.note":`ข้อมูลทั้งหมดเก็บในบัญชี Google ของคุณ
ไม่มีค่าใช้จ่าย · ปลอดภัย · ใช้ได้ทุกอุปกรณ์`,"sync.online":"ออนไลน์","sync.offline":"ออฟไลน์","sync.syncing":"กำลังซิงค์...","nav.dashboard":"ภาพรวม","nav.transactions":"รายการทั้งหมด","nav.analytics":"หมวดหมู่","nav.trends":"แนวโน้ม","page.dashboard":"ภาพรวม","page.transactions":"รายการทั้งหมด","page.analytics":"วิเคราะห์ตามหมวดหมู่","page.trends":"แนวโน้มรายวัน","sidebar.upgrade":"⭐ อัปเกรดเป็น Pro","sidebar.signout":"ออกจากระบบ","topbar.add":"+ เพิ่มรายการ","topbar.add.text":"เพิ่มรายการ","dash.balance":"ยอดคงเหลือ","dash.income":"รายรับ","dash.expense":"รายจ่าย","dash.expenseRatio":"สัดส่วนรายจ่าย","dash.recent":"รายการล่าสุด","dash.seeAll":"ดูทั้งหมด →","dash.empty":`ยังไม่มีรายการ
กด "เพิ่มรายการ" เพื่อเริ่มต้น`,"dash.balance.positive":"↑ คุณมีเงินเหลือ","dash.balance.negative":"↓ รายจ่ายเกินรายรับ","dash.balance.zero":"รายรับเท่ากับรายจ่าย","dash.ratio.income":"รายรับ","dash.ratio.expense":"รายจ่าย","tx.title":"รายการทั้งหมด","tx.viewList":"☰ รายการ","tx.viewSplit":"⊞ แยก","tx.rangeAll":"ทั้งหมด","tx.rangeCycle":"รอบบิล","tx.filterAllTypes":"ทุกประเภท","tx.filterIncome":"รายรับ","tx.filterExpense":"รายจ่าย","tx.filterAllCats":"ทุกหมวดหมู่","tx.noResults":"ไม่มีรายการที่ตรงกับเงื่อนไข","tx.noItems":"ไม่มีรายการ","tx.scale.income":"รายรับ","tx.scale.expense":"รายจ่าย","tx.scale.noItems":"ยังไม่มีรายการ","tx.scale.equal":"เท่ากันพอดี","tx.split.income":"💰 รายรับ","tx.split.expense":"💸 รายจ่าย","tx.split.emptyIncome":"ยังไม่มีรายรับ","tx.split.emptyExpense":"ยังไม่มีรายจ่าย","trends.titleFull":"แนวโน้มรายวัน ({start} – {end})","trends.freeNotice":"📊 Free plan ดูย้อนหลังได้สูงสุด 30 วัน — ","trends.upgradeBtn":"อัปเกรดเป็น Pro ↗","trends.chart.income":"รายรับ","trends.chart.expense":"รายจ่าย","analytics.expenseTitle":"รายจ่ายแยกตามหมวดหมู่","analytics.incomeTitle":"รายรับแยกตามหมวดหมู่","analytics.noData":"ยังไม่มีข้อมูล","modal.addTitle":"เพิ่มรายการใหม่","modal.editTitle":"แก้ไขรายการ","modal.scan":"📸 สแกนสลิป / แนบรูปภาพ","modal.prepareImg":"กำลังเตรียมรูปภาพ...","modal.analyzing":"กำลังวิเคราะห์...","modal.scanning":"กำลังสแกน...","modal.type.income":"↑ รายรับ","modal.type.expense":"↓ รายจ่าย","modal.amountLabel":"จำนวนเงิน (฿)","modal.amountPlaceholder":"0.00","modal.descLabel":"รายละเอียด","modal.descPlaceholder":"เช่น ค่าอาหารกลางวัน","modal.catLabel":"หมวดหมู่","modal.dateLabel":"วันและเวลา","modal.continueLabel":"บันทึกและเพิ่มรายการต่อไป","modal.addBtn":"เพิ่มรายการ","modal.editBtn":"บันทึกการแก้ไข","delete.title":"ยืนยันการลบ","delete.confirm":"คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?","delete.cancel":"ยกเลิก","delete.delete":"ลบ","settings.title":"ตั้งค่าระบบ","settings.cutoffLabel":"วันที่ตัดรอบบิลรายเดือน (1–31)","settings.cutoffHelp":"ตัวอย่าง: ตั้งเป็นวันที่ 25 → รอบนับตั้งแต่ 25 ของเดือนก่อน ถึง 24 ของเดือนนี้","settings.langLabel":"ภาษา / Language","settings.save":"บันทึกการตั้งค่า","settings.changelog":"🆕 ประวัติอัปเดต","settings.clearData":"🗑️ ล้างข้อมูลทั้งหมด","settings.signout":"🚪 ออกจากระบบ","upgrade.title":"⭐ อัปเกรดเป็น Pro","upgrade.free":"Free","upgrade.freePrice":"ฟรี","upgrade.recommended":"แนะนำ","upgrade.pro":"Pro","upgrade.proPrice":"79 ฿/เดือน","upgrade.pay":"ชำระเงิน 79 ฿/เดือน","upgrade.note":"ยกเลิกได้ทุกเมื่อ · ชำระผ่านบัตรเครดิต / PromptPay","bnav.dashboard":"ภาพรวม","bnav.transactions":"รายการ","bnav.analytics":"หมวดหมู่","bnav.trends":"แนวโน้ม","changelog.title":"ประวัติอัปเดต","cl.new":"ใหม่","cl.fix":"แก้ไข","cl.improve":"ปรับปรุง","loading.default":"กำลังโหลด...","loading.signingIn":"กำลังเข้าสู่ระบบ...","loading.payment":"กำลังประมวลผลการชำระเงิน...","loading.deleting":"กำลังลบ...","loading.clearing":"กำลังล้างข้อมูล...","toast.signInError":"เข้าสู่ระบบไม่สำเร็จ: ","toast.saved":"✅ บันทึกแล้ว","toast.editSaved":"✅ บันทึกการแก้ไขแล้ว","toast.deleted":"🗑️ ลบรายการแล้ว","toast.deleteError":"❌ ลบไม่สำเร็จ: ","toast.fieldRequired":"กรุณากรอกข้อมูลให้ครบถ้วน","toast.scanSuccess":"✅ สแกนสำเร็จโดย Gemini 2.5 Flash","toast.scanNoAmount":"⚠️ AI ไม่พบยอดเงินในสลิปนี้","toast.scanError":"⚠️ สแกนไม่ได้: {msg} — รูปยังแนบอยู่","toast.paymentSoon":"ระบบชำระเงินกำลังเปิดใช้งาน เร็วๆ นี้","toast.paymentSuccess":"🎉 อัปเกรดเป็น Pro สำเร็จ!","toast.paymentFail":"❌ ชำระเงินไม่สำเร็จ: ","toast.settingsSaved":"บันทึกตั้งค่าแล้ว ✅","toast.settingsLocal":"บันทึกในเครื่องแล้ว (ซิงค์ไม่ได้)","toast.clearAll":"🗑️ ล้างข้อมูลทั้งหมดแล้ว","toast.clearNone":"ไม่มีข้อมูลให้ล้าง","toast.langChanged":"🌐 เปลี่ยนภาษาแล้ว","toast.cutoffError":"กรุณากรอกวันที่ระหว่าง 1-31","confirm.clearAll":"ต้องการล้างข้อมูลทั้งหมดหรือไม่?","scan.pro":"Pro — สแกนสลิปได้ไม่จำกัด ⭐","scan.free.left":"Free — เหลือ {left}/{total} ครั้งวันนี้","scan.free.exhausted":"หมดแล้ววันนี้ — อัปเกรด Pro เพื่อสแกนต่อ","scan.limit.upgrade":`ใช้ครบ {total} ครั้งสแกนฟรีวันนี้แล้ว
อัปเกรดเป็น Pro เพื่อสแกนไม่จำกัด`,"slip.viewSlip":"ดูสลิป ↗","slip.viewBtn":"ดูสลิป","cat.salary":"เงินเดือน","cat.freelance":"ฟรีแลนซ์","cat.investment":"การลงทุน","cat.gift":"ของขวัญ/โบนัส","cat.other_in":"รายรับอื่นๆ","cat.food":"อาหาร","cat.transport":"เดินทาง","cat.shopping":"ช้อปปิ้ง","cat.utilities":"ค่าสาธารณูปโภค","cat.health":"สุขภาพ","cat.entertainment":"บันเทิง","cat.education":"การศึกษา","cat.rent":"ค่าเช่า/บ้าน","cat.other_ex":"รายจ่ายอื่นๆ","dev.switchFree":"🔧 Dev: Pro → สลับ Free","dev.switchPro":"🔧 Dev: Free → สลับ Pro","dev.toasted":"🔧 Dev: สลับเป็น "},en:{locale:"en-US","login.subtitle":`Track your personal income & expenses.
Your data, visible only to you.`,"login.google":"Sign in with Google","login.note":`All data stored in your Google account.
Free · Secure · All devices`,"sync.online":"Online","sync.offline":"Offline","sync.syncing":"Syncing...","nav.dashboard":"Overview","nav.transactions":"Transactions","nav.analytics":"Categories","nav.trends":"Trends","page.dashboard":"Overview","page.transactions":"All Transactions","page.analytics":"Category Analysis","page.trends":"Daily Trends","sidebar.upgrade":"⭐ Upgrade to Pro","sidebar.signout":"Sign Out","topbar.add":"+ Add","topbar.add.text":"Add","dash.balance":"Balance","dash.income":"Income","dash.expense":"Expenses","dash.expenseRatio":"Expense Ratio","dash.recent":"Recent Transactions","dash.seeAll":"See all →","dash.empty":`No transactions yet.
Press "Add" to get started.`,"dash.balance.positive":"↑ You have money left over","dash.balance.negative":"↓ Expenses exceed income","dash.balance.zero":"Income equals expenses","dash.ratio.income":"Income","dash.ratio.expense":"Expense","tx.title":"All Transactions","tx.viewList":"☰ List","tx.viewSplit":"⊞ Split","tx.rangeAll":"All","tx.rangeCycle":"Cycle","tx.filterAllTypes":"All Types","tx.filterIncome":"Income","tx.filterExpense":"Expense","tx.filterAllCats":"All Categories","tx.noResults":"No matching transactions","tx.noItems":"No transactions","tx.scale.income":"Income","tx.scale.expense":"Expenses","tx.scale.noItems":"No transactions yet","tx.scale.equal":"Perfectly balanced","tx.split.income":"💰 Income","tx.split.expense":"💸 Expenses","tx.split.emptyIncome":"No income yet","tx.split.emptyExpense":"No expenses yet","trends.titleFull":"Daily Trend ({start} – {end})","trends.freeNotice":"📊 Free plan: view up to 30 days — ","trends.upgradeBtn":"Upgrade to Pro ↗","trends.chart.income":"Income","trends.chart.expense":"Expenses","analytics.expenseTitle":"Expenses by Category","analytics.incomeTitle":"Income by Category","analytics.noData":"No data yet","modal.addTitle":"Add New Transaction","modal.editTitle":"Edit Transaction","modal.scan":"📸 Scan Slip / Attach Image","modal.prepareImg":"Preparing image...","modal.analyzing":"Analyzing...","modal.scanning":"Scanning...","modal.type.income":"↑ Income","modal.type.expense":"↓ Expense","modal.amountLabel":"Amount (฿)","modal.amountPlaceholder":"0.00","modal.descLabel":"Description","modal.descPlaceholder":"e.g. Lunch","modal.catLabel":"Category","modal.dateLabel":"Date & Time","modal.continueLabel":"Save and add another","modal.addBtn":"Add Transaction","modal.editBtn":"Save Changes","delete.title":"Confirm Delete","delete.confirm":"Are you sure you want to delete this transaction?","delete.cancel":"Cancel","delete.delete":"Delete","settings.title":"Settings","settings.cutoffLabel":"Monthly Billing Cutoff Day (1–31)","settings.cutoffHelp":"Example: Set to 25 → cycle runs from the 25th of last month to the 24th of this month","settings.langLabel":"Language / ภาษา","settings.save":"Save Settings","settings.changelog":"🆕 Update History","settings.clearData":"🗑️ Clear All Data","settings.signout":"🚪 Sign Out","upgrade.title":"⭐ Upgrade to Pro","upgrade.free":"Free","upgrade.freePrice":"Free","upgrade.recommended":"Recommended","upgrade.pro":"Pro","upgrade.proPrice":"฿79/month","upgrade.pay":"Pay ฿79/month","upgrade.note":"Cancel anytime · Pay by credit card / PromptPay","bnav.dashboard":"Overview","bnav.transactions":"Transactions","bnav.analytics":"Categories","bnav.trends":"Trends","changelog.title":"Update History","cl.new":"New","cl.fix":"Fix","cl.improve":"Improve","loading.default":"Loading...","loading.signingIn":"Signing in...","loading.payment":"Processing payment...","loading.deleting":"Deleting...","loading.clearing":"Clearing data...","toast.signInError":"Sign-in failed: ","toast.saved":"✅ Saved","toast.editSaved":"✅ Changes saved","toast.deleted":"🗑️ Transaction deleted","toast.deleteError":"❌ Delete failed: ","toast.fieldRequired":"Please fill in all fields","toast.scanSuccess":"✅ Scanned by Gemini 2.5 Flash","toast.scanNoAmount":"⚠️ AI did not find an amount in this slip","toast.scanError":"⚠️ Scan failed: {msg} — image still attached","toast.paymentSoon":"Payment system coming soon","toast.paymentSuccess":"🎉 Upgraded to Pro successfully!","toast.paymentFail":"❌ Payment failed: ","toast.settingsSaved":"Settings saved ✅","toast.settingsLocal":"Saved locally (sync failed)","toast.clearAll":"🗑️ All data cleared","toast.clearNone":"No data to clear","toast.langChanged":"🌐 Language changed","toast.cutoffError":"Please enter a day between 1 and 31","confirm.clearAll":"Clear all transaction data?","scan.pro":"Pro — Unlimited slip scans ⭐","scan.free.left":"Free — {left}/{total} scans remaining today","scan.free.exhausted":"No scans left today — upgrade to Pro","scan.limit.upgrade":`Used all {total} free scans today.
Upgrade to Pro for unlimited scanning.`,"slip.viewSlip":"View slip ↗","slip.viewBtn":"View slip","cat.salary":"Salary","cat.freelance":"Freelance","cat.investment":"Investment","cat.gift":"Gift/Bonus","cat.other_in":"Other Income","cat.food":"Food","cat.transport":"Transport","cat.shopping":"Shopping","cat.utilities":"Utilities","cat.health":"Health","cat.entertainment":"Entertainment","cat.education":"Education","cat.rent":"Rent/Home","cat.other_ex":"Other Expense","dev.switchFree":"🔧 Dev: Pro → Switch Free","dev.switchPro":"🔧 Dev: Free → Switch Pro","dev.toasted":"🔧 Dev: Switched to "}};let Ni=(()=>{const n=localStorage.getItem("mf_lang");return n==="th"||n==="en"?n:navigator.language?.toLowerCase().startsWith("th")?"th":"en"})();function To(){return Ni}function wI(n){n!=="th"&&n!=="en"||(Ni=n,localStorage.setItem("mf_lang",n))}function x(n,e){let t=Cu[Ni]?.[n]??Cu.th[n]??n;if(e)for(const[r,s]of Object.entries(e))t=t.replaceAll(`{${r}}`,s);return t}function Gt(){return x("locale")}function ku(){document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=x(e.dataset.i18n)}),document.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=x(e.dataset.i18nHtml).replace(/\n/g,"<br>")}),document.querySelectorAll("[data-i18n-ph]").forEach(e=>{e.placeholder=x(e.dataset.i18nPh)});const n=document.getElementById("select-language");n&&(n.value=Ni)}const mn={income:[{id:"salary",emoji:"💼"},{id:"freelance",emoji:"💻"},{id:"investment",emoji:"📈"},{id:"gift",emoji:"🎁"},{id:"other_in",emoji:"💰"}],expense:[{id:"food",emoji:"🍜"},{id:"transport",emoji:"🚗"},{id:"shopping",emoji:"🛍️"},{id:"utilities",emoji:"💡"},{id:"health",emoji:"🏥"},{id:"entertainment",emoji:"🎮"},{id:"education",emoji:"📚"},{id:"rent",emoji:"🏠"},{id:"other_ex",emoji:"📦"}]};function rs(n){return x(`cat.${n}`)||n}const AI={income:["#22c55e","#16a34a","#86efac","#4ade80","#bbf7d0"],expense:["#f43f5e","#e11d48","#fb7185","#f97316","#fb923c","#fbbf24","#a855f7","#8b5cf6","#6366f1"]},bI=new Map([...mn.income,...mn.expense].map(n=>[n.id,n]));function SI(n){const e=bI.get(n);return e?{...e,label:rs(n)}:{label:n,emoji:"📌"}}const Du="pkey_test_YOUR_OMISE_PUBLIC_KEY",jn=5,Sr=["nunmongss@gmail.com"];let Rr=localStorage.getItem("mf_dev_plan")||"pro",oe=JSON.parse(localStorage.getItem("mf_cache_tx")||"[]"),Vi="income",Us=null,Pr=null,vr="dashboard",ft=parseInt(localStorage.getItem("mf_cutoff_day"))||1,_f="cycle",Ef="",vf=null,If=null,ai=null,ct=null,Wt={},de={enabled:!0,notifyNear:!0,notifyOver:!0,nearThreshold:80,notifyMode:"always"},Ps={},ze=[],wo=new Set,Vn=null,ci=null,Cr=null,Ne=null,Cs=null,ye=null,te="free",Li=0,xi="",mt=null;const ss=()=>ef(Di,"users",ye.uid,"transactions"),Oi=()=>Jt(Di,"users",ye.uid),Fr=()=>ef(Di,"users",ye.uid,"recurring"),RI=oe.length>0;RI&&(Tf(),gt("syncing"),pn());Fp(Ya,n=>{if(n)ye=n,Tf(),kI(),Za(),gt("syncing"),oe.length>0&&pn(),VI(),DI();else{ye=null,mt&&(mt(),mt=null),Vn&&(Vn(),Vn=null),oe=[],ze=[],Wt={},te="free";const e=document.getElementById("btn-dev-toggle");e&&(e.style.display="none"),PI()}});function PI(){document.getElementById("login-screen").style.display="flex",document.getElementById("app-wrapper").style.display="none",gn()}function Tf(){document.getElementById("login-screen").style.display="none",document.getElementById("app-wrapper").style.display=""}async function CI(){try{li(x("loading.signingIn")),await oy(Ya,vI)}catch(n){gn(),z(x("toast.signInError")+n.message,"error")}}async function Nu(){mt&&(mt(),mt=null),await Up(Ya),localStorage.removeItem("mf_cache_tx")}function kI(){if(!ye)return;const n=document.getElementById("user-avatar"),e=document.getElementById("user-name");n&&(n.src=ye.photoURL||""),e&&(e.textContent=ye.displayName||ye.email||"");const t=document.getElementById("mobile-avatar"),r=document.getElementById("mobile-user-name");t&&(t.src=ye.photoURL||""),r&&(r.textContent=ye.displayName||ye.email||"")}function DI(){mt&&mt();const n=fI(ss(),mI("date","desc"));gt("syncing"),mt=Pu(n,e=>{oe=e.docs.map(t=>({id:t.id,...t.data()})),NI(),OI(),pn(),gt("online"),gn()},e=>{console.error("[Firestore] snapshot error:",e),gt("offline"),gn(),z("⚠️ Firestore error: "+e.message,"error",8e3)}),Vn&&Vn(),Vn=Pu(Fr(),e=>{ze=e.docs.map(t=>({id:t.id,...t.data()})),Cf(),nT()})}function NI(){const n=new Date;n.setDate(n.getDate()-90),oe.forEach(e=>{e.imageData&&new Date(e.createdAt)<n&&(e.imageData="",Af(e.id,{imageData:""}).catch(()=>{}))})}async function VI(){try{const n=await Qa(Oi());if(n.exists()){const e=n.data();e.cutoff_day&&(ft=parseInt(e.cutoff_day)||1,localStorage.setItem("mf_cutoff_day",ft)),Li=e.scan_count||0,xi=e.scan_date||"",te=Sr.includes(ye?.email)?Rr:e.plan||"free",Wt=e.budgets||{},de=Object.assign({enabled:!0,notifyNear:!0,notifyOver:!0,nearThreshold:80,notifyMode:"always"},e.budgetSettings||{}),Ne=e.savingsGoal||null}else Sr.includes(ye?.email)&&(te=Rr);is(),JI(),Sr.includes(ye?.email)&&Za()}catch(n){console.error("loadUserMeta error:",n)}}async function Bt(n){await yI(Oi(),n,{merge:!0})}function is(){const n=document.getElementById("plan-badge");n&&(n.textContent=te==="pro"?"⭐ Pro":"Free",n.className="plan-badge "+te);const e=document.getElementById("mobile-plan-badge");e&&(e.textContent=te==="pro"?"⭐ Pro":"Free",e.className="plan-badge mobile-plan-badge "+te);const t=document.getElementById("mobile-btn-updates");t&&(t.style.display=te==="pro"?"none":"");const r=document.getElementById("btn-upgrade");r&&(r.style.display=te==="pro"?"none":"");const s=document.getElementById("scan-info");if(s)if(te==="pro")s.textContent=x("scan.pro"),s.className="scan-info-row pro";else{const a=new Date().toLocaleDateString("sv"),u=jn-(xi===a?Li:0);s.textContent=u>0?x("scan.free.left",{left:u,total:jn}):x("scan.free.exhausted");const d=u<=0?"exhausted":u===1?"danger":u<=3?"warning":"";s.className=`scan-info-row${d?" "+d:""}`}const i=document.getElementById("btn-export-pdf");i&&(i.style.display=te==="pro"?"":"none")}async function wf(n){gt("syncing"),await gf(ss(),n)}async function Af(n,e){gt("syncing"),await Ja(Jt(ss(),n),e)}async function LI(n){gt("syncing"),await mf(Jt(ss(),n))}async function xI(){if(te==="pro")return!0;const n=new Date().toLocaleDateString("sv"),e=await Qa(Oi()),t=e.exists()?e.data():{},s=t.scan_date===n&&t.scan_count||0;if(s>=jn)return Ur(x("scan.limit.upgrade",{total:jn})),!1;const i=s+1;return await Bt({scan_count:i,scan_date:n}),Li=i,xi=n,is(),!0}function li(n){n===void 0&&(n=x("loading.default")),document.getElementById("loading-text").textContent=n,document.getElementById("loading-overlay").classList.add("active")}function gn(){document.getElementById("loading-overlay").classList.remove("active")}function gt(n){const e=document.getElementById("sync-badge"),t=document.getElementById("sync-label");e.className="sync-badge "+n,t.textContent=x(`sync.${n}`)||n}function OI(){localStorage.setItem("mf_cache_tx",JSON.stringify(oe))}function ie(n){return"฿"+Number(n).toLocaleString("th-TH",{minimumFractionDigits:2,maximumFractionDigits:2})}function bf(n){const e=new Date(n);if(isNaN(e.getTime()))return n;const t=Gt();return e.toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"})+" · "+e.toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}function Qe(n,e){return SI(e)}function at(n){const e=document.createElement("div");return e.appendChild(document.createTextNode(n)),e.innerHTML}function Vu(n,e,t){const r=new Date(n,e+1,0).getDate();return new Date(n,e,Math.min(t,r))}function Yn(){const n=new Date,e=n.getFullYear(),t=n.getMonth();let r=Vu(e,t,ft);if(n.getDate()<ft){const i=t===0?11:t-1,a=t===0?e-1:e;r=Vu(a,i,ft)}const s=new Date(r);return s.setMonth(s.getMonth()+1),{start:r,end:s}}function os(n){if(!n)return!1;const e=new Date(n);if(isNaN(e.getTime()))return!1;const{start:t,end:r}=Yn();return e>=t&&e<r}function MI(){let n=0,e=0;const{start:t,end:r}=Yn();oe.forEach(i=>{if(!i.date)return;const a=new Date(i.date);isNaN(a.getTime())||a<t||a>=r||(i.type==="income"?n+=Number(i.amount):e+=Number(i.amount))});const s=i=>Math.round(i*100)/100;return{income:s(n),expense:s(e),balance:s(n-e)}}let Lu;function z(n,e="success",t=3500){const r=document.getElementById("toast");r.textContent=n,r.className=`toast show ${e}`,clearTimeout(Lu),Lu=setTimeout(()=>{r.className="toast"},t)}function Ao(n){vr=n,document.querySelectorAll(".view").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".bottom-nav-item").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`view-${n}`);e&&e.classList.add("active");const t=document.getElementById(`nav-${n}`);t&&t.classList.add("active"),document.querySelectorAll(`.bottom-nav-item[data-view="${n}"]`).forEach(r=>r.classList.add("active")),document.getElementById("page-title").textContent=x(`page.${n}`)||n,pn(),window.innerWidth<=900&&document.getElementById("sidebar").classList.remove("open")}function ea(n){const e=document.getElementById("input-category");e.innerHTML="",mn[n].forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.emoji} ${rs(t.id)}`,e.appendChild(r)})}function xu(){const n=document.getElementById("filter-category");n.innerHTML=`<option value="all">${x("tx.filterAllCats")}</option>`,[...mn.income,...mn.expense].forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=`${e.emoji} ${rs(e.id)}`,n.appendChild(t)})}function Ou(){const n=document.getElementById("current-date");n&&(n.textContent=new Date().toLocaleDateString(Gt(),{weekday:"short",year:"numeric",month:"short",day:"numeric"}))}function BI(){const{income:n,expense:e,balance:t}=MI();document.getElementById("total-balance").textContent=ie(t),document.getElementById("total-income").textContent=ie(n),document.getElementById("total-expense").textContent=ie(e);const r=n>0?Math.min(e/n*100,100):e>0?100:0,s=Math.max(0,Math.round(100-r)),i=document.getElementById("chibi-frame");i?.contentWindow&&i.contentWindow.postMessage({type:"setHp",hp:s},"*");const a=document.getElementById("balance-trend");t>0?a.textContent=x("dash.balance.positive"):t<0?a.textContent=x("dash.balance.negative"):a.textContent=x("dash.balance.zero");const l=window.innerWidth<=900,u=[...oe].sort((d,f)=>new Date(f.date)-new Date(d.date)).slice(0,l?3:5);FI("recent-list",u,"empty-recent"),ta()}function FI(n,e,t){const r=document.getElementById(n);if(r.innerHTML="",e.length===0){const s=document.getElementById(t);s&&r.appendChild(s.cloneNode(!0));return}e.forEach(s=>{const i=Qe(s.type,s.category),a=!!s.imageData,l=document.createElement("div");l.className="transaction-item",l.innerHTML=`
      <div class="tx-emoji">${i.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${at(s.description)}
          ${a?`<button class="tx-image-btn" data-id="${s.id}" title="ดูสลิป">📷</button>`:""}
        </div>
        <div class="tx-meta">${i.label} · ${bf(s.date)}</div>
      </div>
      <div class="tx-amount ${s.type}">
        ${s.type==="income"?"+":"-"}${ie(s.amount)}
      </div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${s.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${s.id}" title="ลบ">🗑️</button>
      </div>`,r.appendChild(l)}),r.querySelectorAll(".tx-btn-edit").forEach(s=>s.addEventListener("click",()=>Nf(s.dataset.id))),r.querySelectorAll(".tx-btn-delete").forEach(s=>s.addEventListener("click",()=>Vf(s.dataset.id))),r.querySelectorAll(".tx-image-btn").forEach(s=>s.addEventListener("click",()=>Sf(s.dataset.id)))}function Sf(n){const e=oe.find(r=>r.id===n);if(!e?.imageData)return;const t=document.getElementById("slip-lightbox");document.getElementById("slip-lightbox-img").src=e.imageData,t.classList.add("active")}function UI(n){Ln()}function Mu(n){_f=n,document.getElementById("btn-range-all").classList.toggle("active",n==="all"),document.getElementById("btn-range-cycle").classList.toggle("active",n==="cycle"),Ln()}function $I(n){return _f!=="cycle"?n:n.filter(e=>os(e.date))}function jI(n){const e=Ef.trim().toLowerCase();return e?n.filter(t=>{const r=Qe(t.type,t.category);return(t.description||"").toLowerCase().includes(e)||String(t.amount).includes(e)||(r.label||"").toLowerCase().includes(e)}):n}function Ln(){const n=document.getElementById("filter-type").value,e=document.getElementById("filter-category").value;let t=$I([...oe]).sort((r,s)=>new Date(s.date)-new Date(r.date));n!=="all"&&(t=t.filter(r=>r.type===n)),e!=="all"&&(t=t.filter(r=>r.category===e)),t=jI(t),qI("all-list",t,"empty-all")}function qI(n,e,t){const r=document.getElementById(n);if(!r)return;if(r.innerHTML="",e.length===0){const i=document.getElementById(t);i?r.appendChild(i.cloneNode(!0)):r.innerHTML=`<div class="empty-state"><div class="empty-icon">📋</div><p>${x("tx.noItems")}</p></div>`;return}let s=null;e.forEach(i=>{const a=i.date?i.date.slice(0,10):"";if(a!==s){s=a;const g=document.createElement("div");g.className="timeline-date-header";const T=new Date(a+"T00:00:00");g.textContent=isNaN(T)?a:T.toLocaleDateString(Gt(),{weekday:"short",year:"numeric",month:"short",day:"numeric"}),r.appendChild(g)}const l=Qe(i.type,i.category),u=document.createElement("div");u.className="transaction-item";const d=!!i.imageData,f=te==="pro"&&d;u.innerHTML=`
      <div class="tx-emoji">${l.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${at(i.description)}
          ${d?`<button class="tx-image-btn" data-id="${i.id}" title="${x("slip.viewBtn")}">📷</button>`:""}
        </div>
        <div class="tx-meta">${l.label} · ${bf(i.date)}</div>
        ${f?`<button class="tx-slip-link" data-id="${i.id}"><img src="${i.imageData}" alt="slip" class="tx-slip-thumb" loading="lazy">${x("slip.viewSlip")}</button>`:""}
      </div>
      <div class="tx-amount ${i.type}">${i.type==="income"?"+":"-"}${ie(i.amount)}</div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${i.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${i.id}" title="ลบ">🗑️</button>
      </div>`,r.appendChild(u)}),r.querySelectorAll(".tx-btn-edit").forEach(i=>i.addEventListener("click",()=>Nf(i.dataset.id))),r.querySelectorAll(".tx-btn-delete").forEach(i=>i.addEventListener("click",()=>Vf(i.dataset.id))),r.querySelectorAll(".tx-image-btn, .tx-slip-link").forEach(i=>i.addEventListener("click",()=>Sf(i.dataset.id)))}function HI(){Bu("expense","category-breakdown"),Bu("income","income-breakdown")}function zI(){const n=document.getElementById("dailyTrendChart");if(!n)return;let e,t;const r=document.getElementById("trends-free-notice"),s=document.getElementById("trends-title"),i=new Date;i.setHours(23,59,59,999);const a=Yn(),l=new Date(a.end);l.setDate(l.getDate()-1);const u=Gt(),d=a.start.toLocaleDateString(u,{day:"numeric",month:"short"}),f=l.toLocaleDateString(u,{day:"numeric",month:"short"});if(te==="pro")e=a.start,t=a.end>i?i:a.end,r&&(r.style.display="none"),s&&(s.textContent=x("trends.titleFull",{start:d,end:f}));else{t=new Date(i);const C=new Date(i);C.setDate(C.getDate()-29),C.setHours(0,0,0,0),e=a.start>=C?a.start:C,r&&(r.style.display=""),s&&(s.textContent=x("trends.titleFull",{start:d,end:f}))}const g=[],T=[],R=[],k=new Map;oe.forEach(C=>{const j=C.date?C.date.slice(0,10):null;if(!j)return;k.has(j)||k.set(j,{income:0,expense:0});const K=k.get(j);C.type==="income"?K.income+=Number(C.amount):K.expense+=Number(C.amount)});const N=new Date(e);for(;N<t;){const C=`${N.getFullYear()}-${String(N.getMonth()+1).padStart(2,"0")}-${String(N.getDate()).padStart(2,"0")}`;g.push(N.toLocaleDateString(Gt(),{day:"numeric",month:"short"}));const j=k.get(C)||{income:0,expense:0};T.push(j.income),R.push(j.expense),N.setDate(N.getDate()+1)}if(ct)if(ct.data.labels.length!==g.length)ct.destroy(),ct=null;else{ct.data.labels=g,ct.data.datasets[0].data=T,ct.data.datasets[1].data=R,ct.update("none");return}ct=new Chart(n,{type:"bar",data:{labels:g,datasets:[{label:x("trends.chart.income"),data:T,backgroundColor:"#16A34A",borderRadius:6},{label:x("trends.chart.expense"),data:R,backgroundColor:"#EF4444",borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:"#64748B",font:{family:"Noto Sans Thai",size:12}}},tooltip:{mode:"index",intersect:!1}},scales:{x:{grid:{display:!1},ticks:{color:"#64748B",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0,0,0,0.05)"},ticks:{color:"#64748B",font:{size:11},callback:C=>"฿"+C.toLocaleString()}}}}})}function GI(){const n=document.getElementById("spending-insights-content");if(!n)return;const{start:e,end:t}=Yn(),r=new Date,s=oe.filter(M=>os(M.date)),i=s.filter(M=>M.type==="expense"),a=s.filter(M=>M.type==="income"),l=i.reduce((M,E)=>M+Number(E.amount),0),u=a.reduce((M,E)=>M+Number(E.amount),0);if(s.length===0){n.innerHTML='<div class="empty-state"><div class="empty-icon">💡</div><p>ยังไม่มีข้อมูลในรอบบิลนี้</p></div>';return}const d=e,f=Math.max(1,Math.floor((Math.min(r,t)-d)/864e5)+1),g=l/f,T={};i.forEach(M=>{T[M.category]=(T[M.category]||0)+Number(M.amount)});const R=Object.entries(T).sort((M,E)=>E[1]-M[1])[0];let k="—";if(R){const M=Qe("expense",R[0]);k=`${M.emoji} ${M.label}: ${ie(R[1])}`}let N="ไม่มีรายรับ";u>0&&(N=`${((u-l)/u*100).toFixed(1)}%`);const C=Object.entries(Wt).filter(([M,E])=>E?(T[M]||0)>=E:!1),j=new Date(d),K=new Date(d);K.setMonth(K.getMonth()-1);const Z=oe.filter(M=>M.type==="expense"&&M.date).filter(M=>{const E=new Date(M.date);return E>=K&&E<j}).reduce((M,E)=>M+Number(E.amount),0);let Ie="";if(Z>0){const M=l-Z,E=Math.abs(M/Z*100).toFixed(1),p=M<0?"less":"more",_=M<0?`ใช้จ่ายน้อยกว่ารอบที่แล้ว <span class="comparison-value">${E}%</span>! 🎉`:`ใช้จ่ายมากกว่ารอบที่แล้ว <span class="comparison-value">${E}%</span>`;Ie=`<div class="insight-comparison ${p}">📊 ${_}</div>`}const Be=Object.keys(Wt).length>0?C.length>0?`<span style="color:var(--red)">${C.length} หมวดเกิน Budget</span>`:'<span style="color:var(--green)">ทุกหมวดอยู่ในงบ ✓</span>':"ยังไม่ได้ตั้ง Budget";n.innerHTML=`
    <div class="insights-grid">
      <div class="insight-card">
        <div class="insight-card-label">📅 เฉลี่ยต่อวัน</div>
        <div class="insight-card-value">${ie(g)}</div>
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
    ${Ie}`}function Bu(n,e){const t=document.getElementById(e),r=oe.filter(u=>u.type===n&&os(u.date));if(r.length===0){t.innerHTML=`<div class="empty-state"><div class="empty-icon">${n==="expense"?"📊":"💵"}</div><p>${x("analytics.noData")}</p></div>`;return}const s={};r.forEach(u=>{s[u.category]=(s[u.category]||0)+Number(u.amount)});const i=Object.entries(s).sort((u,d)=>d[1]-u[1]),a=i[0][1],l=AI[n];t.innerHTML="",i.forEach(([u,d],f)=>{const g=Qe(n,u),T=(d/a*100).toFixed(1),R=document.createElement("div");R.className="cat-item";const k=n==="expense"&&Wt[u]||0;let N="";if(k>0){const C=d/k,j=Math.min(C*100,100).toFixed(1),K=C>=1?"over":C>=.7?"warn":"ok",Z=d>k?d-k:0;N=`
        <div class="budget-progress-wrap">
          <div class="budget-bar-track"><div class="budget-bar-fill ${K}" style="width:${j}%"></div></div>
          <div class="budget-bar-text">
            <span>${ie(d)} / ${ie(k)}</span>
            ${Z>0?`<span class="over-label">เกิน ${ie(Z)}</span>`:""}
          </div>
        </div>`}R.innerHTML=`
      <div class="cat-emoji">${g.emoji}</div>
      <div class="cat-info">
        <div class="cat-name">${g.label}</div>
        <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${T}%;background:${l[f%l.length]};"></div></div>
        ${N}
      </div>
      <div class="cat-amount" style="color:${l[f%l.length]}">${ie(d)}</div>`,t.appendChild(R)})}function pn(){vr==="dashboard"?BI():vr==="transactions"?Ln():vr==="analytics"?(HI(),Cf()):vr==="trends"&&(zI(),GI(),Rf())}function ta(){const n=document.getElementById("savings-goal-card");if(!n)return;if(te!=="pro"){n.style.display="none";return}n.style.display="";const e=document.getElementById("savings-goal-content");if(!Ne||!Ne.targetAmount){e.innerHTML='<p class="form-help" style="text-align:center;padding:12px">ยังไม่ได้ตั้งเป้าหมาย กด "ตั้งค่า ✏️" เพื่อเริ่ม</p>';return}const t=oe.filter(u=>u.type==="income").reduce((u,d)=>u+Number(d.amount),0),r=oe.filter(u=>u.type==="expense").reduce((u,d)=>u+Number(d.amount),0),s=Math.max(0,t-r),i=Math.min(100,s/Ne.targetAmount*100),a=i>=100?"#16a34a":i>=60?"#d97706":"var(--indigo)",l=Ne.deadline?` · ภายใน ${Ne.deadline}`:"";e.innerHTML=`
    <div class="savings-goal-info">
      <span>${at(Ne.name||"เป้าหมายการออม")}</span>
      <span>${ie(s)} / ${ie(Ne.targetAmount)}${l}</span>
    </div>
    <div class="savings-goal-track">
      <div class="savings-goal-fill" style="width:${i.toFixed(1)}%;background:${a}"></div>
    </div>
    <div class="savings-goal-pct" style="color:${a}">${i>=100?"🎉 บรรลุเป้าหมายแล้ว!":i.toFixed(1)+"%"}</div>`}function Rf(){const n=document.getElementById("monthly-compare-card");if(!n)return;if(te!=="pro"){n.style.display="none";return}n.style.display="";const e=parseInt(document.getElementById("monthly-range-select")?.value||"6"),t=[],r=[],s=[],i=new Date;for(let l=e-1;l>=0;l--){const u=new Date(i.getFullYear(),i.getMonth()-l,1),d=`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}`;t.push(u.toLocaleDateString(Gt(),{month:"short",year:"2-digit"}));const f=oe.filter(g=>g.date&&g.date.startsWith(d));r.push(f.filter(g=>g.type==="income").reduce((g,T)=>g+Number(T.amount),0)),s.push(f.filter(g=>g.type==="expense").reduce((g,T)=>g+Number(T.amount),0))}const a=document.getElementById("monthlyCompareChart");a&&(Cs&&(Cs.destroy(),Cs=null),Cs=new Chart(a,{type:"bar",data:{labels:t,datasets:[{label:"รายรับ",data:r,backgroundColor:"#16A34A",borderRadius:4},{label:"รายจ่าย",data:s,backgroundColor:"#EF4444",borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:"#64748B",font:{family:"Noto Sans Thai",size:12}}},tooltip:{mode:"index",intersect:!1}},scales:{x:{grid:{display:!1},ticks:{color:"#64748B",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0,0,0,0.05)"},ticks:{color:"#64748B",font:{size:11},callback:l=>"฿"+l.toLocaleString()}}}}}))}function WI(){if(te!=="pro"){Ur("Export PDF");return}const n=new Date,e=Yn(),t=Gt(),r=oe.filter(f=>os(f.date)),s=r.filter(f=>f.type==="income").reduce((f,g)=>f+Number(g.amount),0),i=r.filter(f=>f.type==="expense").reduce((f,g)=>f+Number(g.amount),0);document.getElementById("pdf-date-range").textContent=`${e.start.toLocaleDateString(t,{day:"numeric",month:"long",year:"numeric"})} — ${n.toLocaleDateString(t,{day:"numeric",month:"long",year:"numeric"})}`,document.getElementById("pdf-summary").innerHTML=`
    <div class="pdf-card"><div class="pdf-card-label">รายรับ</div><div class="pdf-card-val income">+${ie(s)}</div></div>
    <div class="pdf-card"><div class="pdf-card-label">รายจ่าย</div><div class="pdf-card-val expense">-${ie(i)}</div></div>
    <div class="pdf-card"><div class="pdf-card-label">คงเหลือ</div><div class="pdf-card-val">${ie(s-i)}</div></div>`;const a={};r.filter(f=>f.type==="expense").forEach(f=>{a[f.category]=(a[f.category]||0)+Number(f.amount)}),document.getElementById("pdf-categories").innerHTML=Object.entries(a).sort((f,g)=>g[1]-f[1]).map(([f,g])=>{const T=Qe("expense",f);return`<div class="pdf-cat-row"><span>${T.emoji} ${T.label}</span><span>${ie(g)}</span></div>`}).join("")||"<p>ไม่มีรายจ่าย</p>";const u=[...r].sort((f,g)=>new Date(g.date)-new Date(f.date)).map(f=>{const g=Qe(f.type,f.category),T=new Date(f.date);return`<tr>
      <td>${isNaN(T)?f.date:T.toLocaleDateString(t,{day:"numeric",month:"short"})}</td>
      <td>${g.emoji} ${g.label}</td>
      <td>${at(f.description)}</td>
      <td class="${f.type}">${f.type==="income"?"+":"-"}${ie(f.amount)}</td>
    </tr>`}).join("");document.getElementById("pdf-transactions").innerHTML=`<thead><tr><th>วันที่</th><th>หมวดหมู่</th><th>รายละเอียด</th><th>จำนวนเงิน</th></tr></thead><tbody>${u}</tbody>`;const d=document.getElementById("pdf-report");d.style.display="block",Y("settings-modal-overlay"),setTimeout(()=>{window.print(),setTimeout(()=>{d.style.display="none"},500)},300)}function KI(){const n=document.getElementById("budget-form-rows");n.innerHTML="",mn.expense.forEach(e=>{const t=rs(e.id),r=Wt[e.id]||"",s=document.createElement("div");s.className="budget-row",s.innerHTML=`
      <div class="budget-row-emoji">${e.emoji}</div>
      <div class="budget-row-label">${t}</div>
      <input type="number" min="0" step="1" placeholder="ไม่จำกัด"
             data-cat="${e.id}" value="${r}" />`,n.appendChild(s)}),rt("budget-modal-overlay")}async function QI(){const n=document.querySelectorAll("#budget-form-rows input[data-cat]"),e={};n.forEach(t=>{const r=parseFloat(t.value);t.value.trim()!==""&&!isNaN(r)&&r>0&&(e[t.dataset.cat]=r)}),Wt=e;try{await Bt({budgets:e}),z("💰 บันทึก Budget สำเร็จ","success"),Y("budget-modal-overlay"),pn()}catch(t){z("❌ "+t.message,"error")}}function Fu(n){if(!de.enabled)return;const e=Wt[n];if(!e)return;const{start:t}=Yn(),r=t.toISOString().slice(0,10),s=oe.filter(u=>u.type==="expense"&&u.category===n&&os(u.date)).reduce((u,d)=>u+Number(d.amount),0),i=Qe("expense",n),a=`${n}_${r}_near`,l=`${n}_${r}_over`;if(s>=e&&de.notifyOver){if(de.notifyMode==="once"&&Ps[l])return;Ps[l]=!0,z(`⚠️ ${i.emoji}${i.label} เกิน Budget แล้ว! (${ie(s)} / ${ie(e)})`,"error",5e3)}else if(s>=e*(de.nearThreshold/100)&&de.notifyNear){if(de.notifyMode==="once"&&Ps[a])return;Ps[a]=!0,z(`🔔 ${i.emoji}${i.label} ใกล้เกิน Budget (${ie(s)} / ${ie(e)})`,"warning",4e3)}}function JI(){const n=document.getElementById("toggle-budget-notify"),e=document.getElementById("budget-notify-sub"),t=document.getElementById("toggle-notify-near"),r=document.getElementById("toggle-notify-over"),s=document.getElementById("notify-mode-once"),i=document.getElementById("notify-mode-always");n&&(n.checked=!!de.enabled,e&&(e.style.display=de.enabled?"":"none"),t&&(t.checked=!!de.notifyNear),r&&(r.checked=!!de.notifyOver),s&&(s.checked=de.notifyMode==="once"),i&&(i.checked=de.notifyMode!=="once"))}async function gr(){try{await Bt({budgetSettings:de})}catch(n){console.error("saveBudgetSettings error:",n)}}function YI(){const n=new Date,e=te==="pro"?365:30,t=n.getTime()-e*864e5,r=oe.filter(g=>g.date?new Date(g.date).getTime()>=t:!1).sort((g,T)=>new Date(g.date)-new Date(T.date)),s="\uFEFF",i="วันที่,ประเภท,หมวดหมู่,รายละเอียด,จำนวนเงิน",a=r.map(g=>{const T=Qe(g.type,g.category),R=g.type==="income"?"รายรับ":"รายจ่าย",k=new Date(g.date).toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),N=`"${(g.description||"").replace(/"/g,'""')}"`;return[k,R,T.label,N,g.amount].join(",")}),l=s+[i,...a].join(`\r
`),u=new Blob([l],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(u),f=document.createElement("a");f.href=d,f.download="moneyflow_export.csv",document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d),z(`📥 Export สำเร็จ (${r.length} รายการ)`,"success")}function Pf(){const n=document.getElementById("recurring-category");n&&(n.innerHTML="",mn.expense.forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=`${e.emoji} ${rs(e.id)}`,n.appendChild(t)}))}function XI(){ci=null,document.getElementById("recurring-modal-title").textContent="🔄 เพิ่มรายการประจำ",document.getElementById("recurring-form").reset(),document.getElementById("recurring-edit-id").value="",Pf(),rt("recurring-modal-overlay")}function ZI(n){ci=n.id,document.getElementById("recurring-modal-title").textContent="✏️ แก้ไขรายการประจำ",document.getElementById("recurring-edit-id").value=n.id,document.getElementById("recurring-desc").value=n.description||"",document.getElementById("recurring-amount").value=n.amount||"",document.getElementById("recurring-day").value=n.dayOfMonth||"",document.getElementById("recurring-installments").value=n.installments||"",document.getElementById("recurring-note").value=n.note||"",Pf(),setTimeout(()=>{document.getElementById("recurring-category").value=n.category},0),rt("recurring-modal-overlay")}async function eT(n){n.preventDefault();const e=document.getElementById("recurring-desc").value.trim(),t=parseFloat(document.getElementById("recurring-amount").value),r=document.getElementById("recurring-category").value,s=parseInt(document.getElementById("recurring-day").value),i=document.getElementById("recurring-installments").value.trim(),a=i?parseInt(i):null,l=document.getElementById("recurring-note").value.trim();if(!e||!t||!r||!s){z("กรุณากรอกข้อมูลให้ครบ","error");return}const u={description:e,amount:t,category:r,type:"expense",dayOfMonth:s,installments:a,note:l,active:!0,paidCount:0,lastPaidDate:"",createdAt:new Date().toISOString()};try{if(ci){const{createdAt:d,paidCount:f,lastPaidDate:g,...T}=u;await Ja(Jt(Fr(),ci),T),z("✅ แก้ไขรายการประจำสำเร็จ","success")}else await gf(Fr(),u),z("✅ เพิ่มรายการประจำสำเร็จ","success");Y("recurring-modal-overlay")}catch(d){z("❌ "+d.message,"error")}}async function tT(n){if(confirm("ลบรายการประจำนี้?"))try{await mf(Jt(Fr(),n)),z("🗑️ ลบรายการประจำสำเร็จ","success")}catch(e){z("❌ "+e.message,"error")}}function $s(n){const e=new Date,t=e.getDate(),r=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`,s=n.installments&&(n.paidCount||0)>=n.installments,i=n.lastPaidDate&&n.lastPaidDate.startsWith(r),a=!n.paidCount&&!n.lastPaidDate;if(s)return{key:"done",label:"✅ ครบทุกงวดแล้ว",canPay:!1};if(i)return{key:"paid",label:"✅ จ่ายแล้วเดือนนี้",canPay:!1};const l=n.dayOfMonth-t;if(a&&l<0){const u=new Date(e.getFullYear(),e.getMonth()+1,n.dayOfMonth),d=Math.ceil((u-e)/864e5),f=String(e.getMonth()+2).padStart(2,"0");return{key:"pending",label:`⏳ ครั้งแรก วันที่ ${n.dayOfMonth}/${f} (อีก ${d} วัน)`,canPay:!1}}return l<0?{key:"overdue",label:"🔴 เลยกำหนดแล้ว ยังไม่ได้จ่าย",canPay:!0}:l===0?{key:"overdue",label:"🔴 ถึงกำหนดวันนี้!",canPay:!0}:l<=3?{key:"soon",label:`🟡 อีก ${l} วัน`,canPay:!0}:{key:"pending",label:`⏳ อีก ${l} วัน`,canPay:!1}}function Cf(){const n=document.getElementById("recurring-list");if(!n)return;if(ze.length===0){n.innerHTML='<div class="empty-state"><div class="empty-icon">🔄</div><p>ยังไม่มีรายการประจำ<br><small style="color:var(--text-3)">กด "+ เพิ่มรายการประจำ" เพื่อเริ่ม</small></p></div>';return}n.innerHTML="";const e={overdue:0,soon:1,pending:2,paid:3,done:4};[...ze].sort((r,s)=>{const i=$s(r).key,a=$s(s).key;return(e[i]??5)-(e[a]??5)}).forEach(r=>{const s=Qe("expense",r.category),i=$s(r),a=r.installments?r.installments-(r.paidCount||0):null,l=a!==null?`${a} งวดคงเหลือ`:"∞",u=document.createElement("div");u.className=`recurring-item${i.key==="overdue"?" rec-overdue":i.key==="soon"?" rec-soon":""}`,u.innerHTML=`
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
      </div>`,n.appendChild(u),u.querySelectorAll(".btn-add-from-recurring").forEach(d=>d.addEventListener("click",()=>{const f=ze.find(g=>g.id===d.dataset.id);f&&(na(),setTimeout(()=>kf(f),60))})),u.querySelectorAll(".tx-btn-edit").forEach(d=>d.addEventListener("click",()=>{const f=ze.find(g=>g.id===d.dataset.id);f&&ZI(f)})),u.querySelectorAll(".tx-btn-delete").forEach(d=>d.addEventListener("click",()=>tT(d.dataset.id)))})}function kf(n){Cr=n.id,qn("expense"),setTimeout(()=>{document.getElementById("input-amount").value=n.amount,document.getElementById("input-description").value=n.description,setTimeout(()=>{document.getElementById("input-category").value=n.category},30)},30),document.querySelectorAll(".recurring-chip").forEach(t=>t.classList.remove("selected"));const e=document.querySelector(`.recurring-chip[data-id="${n.id}"]`);e&&e.classList.add("selected")}function nT(){const n=new Date,e=n.getDate(),t=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`;ze.forEach(r=>{!r.active||r.installments&&(r.paidCount||0)>=r.installments||r.lastPaidDate&&r.lastPaidDate.startsWith(t)||r.dayOfMonth<=e&&!wo.has(r.id)&&(wo.add(r.id),setTimeout(()=>{z(`🔔 ${r.description} ครบกำหนดชำระวันนี้!`,"warning",5e3)},1e3+wo.size*1500))})}function na(){Pr=null,Cr=null,document.getElementById("modal-title").textContent=x("modal.addTitle"),document.getElementById("submit-label").textContent=x("modal.addBtn"),document.getElementById("transaction-form").reset(),document.getElementById("edit-id").value="";const n=new Date;document.getElementById("input-date").value=new Date(n-n.getTimezoneOffset()*6e4).toISOString().slice(0,16),Mi(),qn("income"),rT(),rt("modal-overlay")}function Df(n){const e=document.getElementById("recurring-shortcuts-wrap");if(!e)return;if(n!=="expense"||!ze.length){e.innerHTML="",e.style.display="none";return}const t=[],r=[];if(ze.forEach(a=>{if(!a.active)return;const l=$s(a);l.key==="done"||l.key==="paid"||(l.key==="overdue"||l.key==="soon"?t.push({item:a,s:l}):r.push({item:a,s:l}))}),!t.length&&!r.length){e.innerHTML="",e.style.display="none";return}const s=({item:a,s:l})=>{const u=Qe("expense",a.category);return`<button class="recurring-chip ${l.key}" data-id="${a.id}">
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
    </div>`}e.innerHTML=i,e.style.display="",e.querySelectorAll(".recurring-chip").forEach(a=>{a.addEventListener("click",()=>{const l=ze.find(u=>u.id===a.dataset.id);l&&kf(l)})})}function rT(){Df(Vi)}function Nf(n){const e=oe.find(t=>t.id===n);e&&(Pr=n,document.getElementById("modal-title").textContent=x("modal.editTitle"),document.getElementById("submit-label").textContent=x("modal.editBtn"),document.getElementById("edit-id").value=n,document.getElementById("input-amount").value=e.amount,document.getElementById("input-description").value=e.description,document.getElementById("input-date").value=e.date,Mi(),qn(e.type),setTimeout(()=>{document.getElementById("input-category").value=e.category},0),rt("modal-overlay"))}function qn(n){Vi=n,document.getElementById("type-income").classList.toggle("active",n==="income"),document.getElementById("type-expense").classList.toggle("active",n==="expense"),ea(n),Df(n)}function rt(n){document.getElementById(n).classList.add("open")}function Y(n){document.getElementById(n).classList.remove("open")}function Vf(n){Us=n,rt("delete-overlay")}function Ur(n=""){document.getElementById("upgrade-reason").textContent=n,rt("upgrade-modal-overlay")}async function sT(n){n.preventDefault();const e=parseFloat(document.getElementById("input-amount").value),t=document.getElementById("input-description").value.trim(),r=document.getElementById("input-category").value,s=document.getElementById("input-date").value;if(!e||e<=0||!t||!r||!s){z(x("toast.fieldRequired"),"error");return}const i=!!Pr,a=document.getElementById("check-continue").checked,l=document.getElementById("btn-submit");l.disabled=!0;try{const u={type:Vi,amount:e,description:t,category:r,date:s,createdAt:new Date().toISOString(),imageData:te==="pro"&&ai?ai:""};if(i)await Af(Pr,u),Pr=null,z(x("toast.editSaved")),Y("modal-overlay"),u.type==="expense"&&setTimeout(()=>Fu(u.category),500);else{if(await wf(u),Cr){const d=ze.find(f=>f.id===Cr);if(d){const f=new Date().toLocaleDateString("sv");Ja(Jt(Fr(),d.id),{paidCount:(d.paidCount||0)+1,lastPaidDate:f}).catch(()=>{})}Cr=null}if(z(x("toast.saved")),u.type==="expense"&&setTimeout(()=>Fu(u.category),500),a){document.getElementById("input-amount").value="",document.getElementById("input-description").value="",Mi();const d=new Date;document.getElementById("input-date").value=new Date(d-d.getTimezoneOffset()*6e4).toISOString().slice(0,16),document.getElementById("input-amount").focus()}else Y("modal-overlay")}}catch(u){z("❌ "+u.message,"error")}finally{l.disabled=!1}}function Mi(){vf=null,If=null,ai=null;const n=document.getElementById("image-preview-container"),e=document.getElementById("image-preview");e.src="",n.style.display="none",document.getElementById("input-slip").value=""}function Lf(n,e,t=800,r=.72){return new Promise(s=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;(a>t||l>t)&&(a>l?(l=Math.round(l*t/a),a=t):(a=Math.round(a*t/l),l=t));const u=document.createElement("canvas");u.width=a,u.height=l,u.getContext("2d").drawImage(i,0,0,a,l),s(u.toDataURL("image/jpeg",r))},i.onerror=()=>s(`data:${e};base64,${n}`),i.src=`data:${e};base64,${n}`})}async function iT(n){const e=n.target.files[0];if(!e)return;const t=document.getElementById("scan-progress"),r=t.querySelector(".progress-bar"),s=t.querySelector(".progress-text");t.classList.add("active"),s.textContent=x("modal.prepareImg"),r.style.setProperty("--progress","10%");try{if(!await xI()){t.classList.remove("active"),document.getElementById("input-slip").value="";return}const a=await xf(e),l=e.type||"image/jpeg";vf=a,If=l,ai=te==="pro"?await Lf(a,l,1200,.82):null;const u=document.getElementById("image-preview-container"),d=document.getElementById("image-preview");d.src=`data:${l};base64,${a}`,u.style.display="block",s.textContent=x("modal.analyzing"),r.style.setProperty("--progress","40%");const f=await fetch("/api/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base64Data:a,mimeType:l})});if(!f.ok){const T=await f.json().catch(()=>({}));throw new Error(T.error||`Server Error ${f.status}`)}const g=await f.json();r.style.setProperty("--progress","90%"),g.amount?(document.getElementById("input-amount").value=g.amount,g.description&&(document.getElementById("input-description").value=g.description),z(x("toast.scanSuccess"))):z(x("toast.scanNoAmount"),"error"),qn("expense"),r.style.setProperty("--progress","100%")}catch(i){console.error("Scan error:",i),z(x("toast.scanError",{msg:i.message}),"error",6e3)}finally{document.getElementById("input-slip").value="",setTimeout(()=>t.classList.remove("active"),500)}}function xf(n){return new Promise((e,t)=>{const r=new FileReader;r.readAsDataURL(n),r.onload=()=>e(r.result.split(",")[1]),r.onerror=t})}const bo=10,oT=3;let Ve=[];const H={jobs:[],isActive:!1,total:0,completed:0,succeeded:0,failed:0,expanded:!1};function aT(){Y("modal-overlay"),document.getElementById("batch-scan-modal-overlay").classList.add("active"),Ve=[],Xa()}function js(){document.getElementById("batch-scan-modal-overlay").classList.remove("active"),Ve=[],document.getElementById("batch-scan-input").value=""}function cT(n){const e=Array.from(n.target.files||[]);if(n.target.value="",e.length===0)return;const t=[...Ve,...e];t.length>bo?(z(`เลือกได้สูงสุด ${bo} ใบต่อครั้ง`,"error"),Ve=t.slice(0,bo)):Ve=t,Xa()}function Xa(){const n=document.getElementById("batch-scan-file-list"),e=document.getElementById("batch-scan-summary"),t=document.getElementById("batch-scan-count"),r=document.getElementById("batch-scan-start");if(Ve.length===0){n.innerHTML="",e.style.display="none",r.disabled=!0;return}e.style.display="",t.textContent=Ve.length,r.disabled=!1,n.innerHTML=Ve.map((s,i)=>`
    <div class="batch-file-item">
      <span class="batch-file-item-name">${at(s.name)}</span>
      <span class="batch-file-item-size">${(s.size/1024).toFixed(0)} KB</span>
      <button class="batch-file-item-remove" data-idx="${i}" title="ลบออก">✕</button>
    </div>
  `).join(""),n.querySelectorAll(".batch-file-item-remove").forEach(s=>{s.addEventListener("click",()=>{Ve.splice(+s.dataset.idx,1),Xa()})})}async function lT(){if(Ve.length===0)return;let n=Ve.length;if(te!=="pro"){const s=new Date().toLocaleDateString("sv"),i=await Qa(Oi()),a=i.exists()?i.data():{},u=a.scan_date===s&&a.scan_count||0,d=jn-u;if(d<=0){Ur(x("scan.limit.upgrade",{total:jn}));return}n=Math.min(Ve.length,d),n<Ve.length&&z(`โควต้าเหลือ ${d} ใบ จะสแกนแค่ ${n} ใบแรก`,"error",4e3);const f=u+n;await Bt({scan_count:f,scan_date:s}),Li=f,xi=s,is()}const e=Ve.slice(0,n),t=Ve.slice(n),r=Date.now();H.jobs=[...e.map((s,i)=>({id:`job_${r}_${i}`,file:s,status:"pending",result:null,error:null})),...t.map((s,i)=>({id:`job_skip_${r}_${i}`,file:s,status:"error",result:null,error:"หมดโควต้าวันนี้"}))],H.isActive=!0,H.total=H.jobs.length,H.completed=t.length,H.succeeded=0,H.failed=t.length,js(),hT(),Of()}function Of(){const n=H.jobs.filter(r=>r.status==="scanning").length,e=H.jobs.filter(r=>r.status==="pending"),t=oT-n;for(let r=0;r<t&&r<e.length;r++){const s=e[r];s.status="scanning",uT(s)}$r()}async function uT(n){try{const e=await xf(n.file),t=n.file.type||"image/jpeg",r=await fetch("/api/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base64Data:e,mimeType:t})});if(!r.ok){const l=await r.json().catch(()=>({}));throw new Error(l.error||`Server Error ${r.status}`)}const s=await r.json();if(!s.amount)throw new Error("AI อ่านยอดไม่ได้");let i="";if(te==="pro")try{i=await Lf(e,t,1200,.82)}catch{}const a={type:"expense",amount:parseFloat(s.amount),description:s.description||"รายการจากสลิป",category:"other_ex",date:new Date().toISOString(),createdAt:new Date().toISOString(),imageData:i};await wf(a),n.status="done",n.result=a}catch(e){n.status="error",n.error=e.message||String(e)}finally{H.completed++,n.status==="done"?H.succeeded++:H.failed++,$r(),H.completed<H.total?Of():(H.isActive=!1,$r())}}function hT(){document.getElementById("bg-scan-popup").classList.add("active"),$r()}function $r(){const n=document.getElementById("bg-scan-title"),e=document.getElementById("bg-scan-progress-bar"),t=document.getElementById("bg-scan-stats"),r=document.getElementById("bg-scan-actions"),s=document.getElementById("bg-scan-list");H.isActive?(n.textContent=`🔄 สแกนสลิป ${H.completed}/${H.total}`,r.hidden=!0):(n.textContent=`✅ เสร็จ! เพิ่ม ${H.succeeded} รายการ${H.failed?` (ล้มเหลว ${H.failed})`:""}`,r.hidden=!1);const i=H.total-H.completed;t.textContent=`✓ ${H.succeeded}  ✕ ${H.failed}  ⏳ ${i}`;const a=H.total>0?H.completed/H.total*100:0;e.style.width=a+"%",H.expanded?(s.hidden=!1,s.innerHTML=H.jobs.map(l=>{const u=l.status==="done"?"✓":l.status==="error"?"✕":l.status==="scanning"?"⏳":"⋯",d=l.status==="done"?`฿${l.result?.amount?.toFixed(2)??""}`:l.status==="error"?l.error||"ผิดพลาด":l.file.name;return`<div class="bg-scan-list-item">
        <span class="status-icon">${u}</span>
        <span class="file-name">${at(l.file.name)}</span>
        <span style="color:var(--text-2);font-size:11px;">${at(d)}</span>
      </div>`}).join("")):s.hidden=!0}function dT(){H.expanded=!H.expanded,document.getElementById("bg-scan-toggle").textContent=H.expanded?"▴":"▾",$r()}function Uu(){if(H.isActive){z("ยังสแกนไม่เสร็จ — รอให้เสร็จก่อนปิด","error");return}document.getElementById("bg-scan-popup").classList.remove("active"),H.jobs=[],H.total=0,H.completed=0,H.succeeded=0,H.failed=0,H.expanded=!1,document.getElementById("bg-scan-toggle").textContent="▾"}function Za(){const n=document.getElementById("btn-dev-toggle");if(!n)return;const e=Sr.includes(ye?.email);n.style.display=e?"":"none",n.textContent=x(te==="pro"?"dev.switchFree":"dev.switchPro")}function fT(){Sr.includes(ye?.email)&&(Rr=te==="pro"?"free":"pro",localStorage.setItem("mf_dev_plan",Rr),te=Rr,is(),Za(),z(x("dev.toasted")+(te==="pro"?"Pro ⭐":"Free")))}async function mT(){if(Du.includes("YOUR_OMISE")){z(x("toast.paymentSoon"),"error",4e3);return}window.OmiseCard||await new Promise((n,e)=>{const t=document.createElement("script");t.src="https://cdn.omise.co/omise.js",t.onload=n,t.onerror=e,document.head.appendChild(t)}),window.OmiseCard.configure({publicKey:Du}),window.OmiseCard.open({frameLabel:"MoneyFlow Pro",submitLabel:x("upgrade.pay"),currency:"THB",amount:7900,onCreateTokenSuccess:async n=>{try{li(x("loading.payment")),Y("upgrade-modal-overlay");const t=await(await fetch("/api/payment-create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,uid:ye.uid,email:ye.email})})).json();t.success?(te="pro",await Bt({plan:"pro",pro_until:t.pro_until}),is(),z(x("toast.paymentSuccess"),"success",5e3)):z(x("toast.paymentFail")+(t.error||""),"error")}catch(e){z("❌ "+e.message,"error")}finally{gn()}},onFormClosed:()=>{}})}function $u(){const n=document.getElementById("changelog-body"),e={new:"✨",fix:"🐛",improve:"⚡"},t=Gt();n.innerHTML=TI.map(r=>`
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
    </div>`).join(""),document.getElementById("changelog-overlay").classList.add("open"),Y("settings-modal-overlay")}function gT(){ku(),Ou(),ea("income"),xu();const n=document.getElementById("app-version");n&&(n.textContent="v"+II),document.getElementById("btn-google-signin").addEventListener("click",CI),document.querySelectorAll(".nav-item, .bottom-nav-item").forEach(i=>i.addEventListener("click",()=>{Ao(i.dataset.view),document.getElementById("sidebar").classList.remove("open")})),document.getElementById("see-all-btn").addEventListener("click",()=>Ao("transactions")),document.getElementById("menu-toggle").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open")),document.addEventListener("click",i=>{const a=document.getElementById("sidebar"),l=document.getElementById("menu-toggle");window.innerWidth<=900&&a.classList.contains("open")&&!a.contains(i.target)&&i.target!==l&&a.classList.remove("open")}),document.getElementById("btn-open-modal").addEventListener("click",na),document.getElementById("mobile-fab")?.addEventListener("click",na),document.getElementById("type-income").addEventListener("click",()=>qn("income")),document.getElementById("type-expense").addEventListener("click",()=>qn("expense")),document.getElementById("modal-close").addEventListener("click",()=>Y("modal-overlay")),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("modal-overlay")}),document.getElementById("transaction-form").addEventListener("submit",sT),document.getElementById("delete-confirm").addEventListener("click",async()=>{if(!Us)return;const i=Us;Us=null,Y("delete-overlay");try{li(x("loading.deleting")),await LI(i),z(x("toast.deleted"))}catch(a){z(x("toast.deleteError")+a.message,"error")}finally{gn()}}),document.getElementById("delete-cancel").addEventListener("click",()=>Y("delete-overlay")),document.getElementById("delete-cancel-x").addEventListener("click",()=>Y("delete-overlay")),document.getElementById("delete-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("delete-overlay")}),document.getElementById("btn-clear-all").addEventListener("click",async()=>{if(oe.length===0){z(x("toast.clearNone"),"error");return}if(confirm(x("confirm.clearAll"))){Y("settings-modal-overlay");try{li(x("loading.clearing"));const i=_I(Di);oe.forEach(a=>i.delete(Jt(ss(),a.id))),await i.commit(),z(x("toast.clearAll"))}catch(i){z("❌ "+i.message,"error")}finally{gn()}}}),document.getElementById("filter-type").addEventListener("change",Ln),document.getElementById("filter-category").addEventListener("change",Ln),document.getElementById("tx-search").addEventListener("input",i=>{Ef=i.target.value,Ln()}),document.getElementById("btn-remove-image").addEventListener("click",Mi),document.getElementById("btn-open-settings").addEventListener("click",()=>{document.getElementById("input-cutoff-day").value=ft,document.getElementById("select-language").value=To(),rt("settings-modal-overlay")}),document.getElementById("settings-modal-close").addEventListener("click",()=>Y("settings-modal-overlay")),document.getElementById("settings-modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("settings-modal-overlay")}),document.getElementById("btn-save-settings").addEventListener("click",async()=>{const i=parseInt(document.getElementById("input-cutoff-day").value),a=document.getElementById("select-language").value;if(i<1||i>31||isNaN(i)){z(x("toast.cutoffError"),"error");return}a!==To()&&(wI(a),ku(),ea(Vi),xu(),gt(document.getElementById("sync-badge").className.replace("sync-badge ","").trim()||"offline"),Ou()),ft=i,localStorage.setItem("mf_cutoff_day",ft);try{await Bt({cutoff_day:i}),z(x("toast.settingsSaved"))}catch{z(x("toast.settingsLocal"),"error")}Y("settings-modal-overlay"),pn()}),document.getElementById("btn-upgrade").addEventListener("click",()=>Ur()),document.getElementById("btn-trends-upgrade")?.addEventListener("click",()=>Ur(x("trends.upgradeBtn"))),document.getElementById("upgrade-modal-close").addEventListener("click",()=>Y("upgrade-modal-overlay")),document.getElementById("upgrade-modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("upgrade-modal-overlay")}),document.getElementById("btn-pay-omise").addEventListener("click",mT),document.getElementById("btn-view-list")?.addEventListener("click",()=>UI()),document.getElementById("btn-range-all")?.addEventListener("click",()=>Mu("all")),document.getElementById("btn-range-cycle")?.addEventListener("click",()=>Mu("cycle"));const e=document.getElementById("btn-dev-toggle");e&&e.addEventListener("click",fT),document.getElementById("btn-signout").addEventListener("click",Nu),document.getElementById("btn-signout-settings")?.addEventListener("click",Nu),document.getElementById("mobile-btn-updates")?.addEventListener("click",$u),document.getElementById("mobile-btn-settings")?.addEventListener("click",()=>{document.getElementById("input-cutoff-day").value=ft,document.getElementById("select-language").value=To(),rt("settings-modal-overlay")}),document.getElementById("btn-changelog").addEventListener("click",$u),document.getElementById("changelog-close").addEventListener("click",()=>Y("changelog-overlay")),document.getElementById("changelog-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Y("changelog-overlay")});const t=()=>document.getElementById("slip-lightbox").classList.remove("active");document.getElementById("slip-lightbox-close").addEventListener("click",t),document.getElementById("slip-lightbox-backdrop").addEventListener("click",t),document.getElementById("btn-scan").addEventListener("click",()=>document.getElementById("input-slip").click()),document.getElementById("input-slip").addEventListener("change",iT),document.getElementById("btn-scan-batch")?.addEventListener("click",aT),document.getElementById("batch-scan-modal-close")?.addEventListener("click",js),document.getElementById("batch-scan-cancel")?.addEventListener("click",js),document.getElementById("batch-scan-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&js()}),document.getElementById("batch-scan-pick")?.addEventListener("click",()=>document.getElementById("batch-scan-input").click()),document.getElementById("batch-scan-input")?.addEventListener("change",cT),document.getElementById("batch-scan-start")?.addEventListener("click",lT),document.getElementById("bg-scan-toggle")?.addEventListener("click",dT),document.getElementById("bg-scan-close")?.addEventListener("click",Uu),document.getElementById("bg-scan-view-list")?.addEventListener("click",()=>{Ao("transactions"),Uu()}),document.getElementById("btn-open-budget")?.addEventListener("click",KI),document.getElementById("budget-modal-close")?.addEventListener("click",()=>Y("budget-modal-overlay")),document.getElementById("budget-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&Y("budget-modal-overlay")}),document.getElementById("btn-save-budget")?.addEventListener("click",QI),document.getElementById("btn-cancel-budget")?.addEventListener("click",()=>Y("budget-modal-overlay")),document.getElementById("btn-add-recurring")?.addEventListener("click",XI),document.getElementById("recurring-modal-close")?.addEventListener("click",()=>Y("recurring-modal-overlay")),document.getElementById("recurring-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&Y("recurring-modal-overlay")}),document.getElementById("recurring-form")?.addEventListener("submit",eT),document.getElementById("btn-cancel-recurring")?.addEventListener("click",()=>Y("recurring-modal-overlay")),document.getElementById("btn-export-csv")?.addEventListener("click",YI),document.getElementById("btn-export-pdf")?.addEventListener("click",WI),document.getElementById("monthly-range-select")?.addEventListener("change",Rf),document.getElementById("btn-edit-savings-goal")?.addEventListener("click",()=>{Ne?(document.getElementById("savings-goal-name").value=Ne.name||"",document.getElementById("savings-goal-amount").value=Ne.targetAmount||"",document.getElementById("savings-goal-deadline").value=Ne.deadline||""):(document.getElementById("savings-goal-name").value="",document.getElementById("savings-goal-amount").value="",document.getElementById("savings-goal-deadline").value=""),rt("savings-goal-modal-overlay")}),document.getElementById("savings-goal-modal-close")?.addEventListener("click",()=>Y("savings-goal-modal-overlay")),document.getElementById("savings-goal-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&Y("savings-goal-modal-overlay")}),document.getElementById("btn-save-savings-goal")?.addEventListener("click",async()=>{const i=document.getElementById("savings-goal-name").value.trim(),a=parseFloat(document.getElementById("savings-goal-amount").value),l=document.getElementById("savings-goal-deadline").value;if(!a||a<=0){z("กรุณาใส่จำนวนเงินเป้าหมาย","error");return}Ne={name:i,targetAmount:a,deadline:l},await Bt({savingsGoal:Ne}),Y("savings-goal-modal-overlay"),ta(),z("🎯 บันทึกเป้าหมายสำเร็จ")}),document.getElementById("btn-clear-savings-goal")?.addEventListener("click",async()=>{confirm("ลบเป้าหมายการออม?")&&(Ne=null,await Bt({savingsGoal:null}),Y("savings-goal-modal-overlay"),ta(),z("ลบเป้าหมายแล้ว","warning"))});const r=document.getElementById("toggle-budget-notify"),s=document.getElementById("budget-notify-sub");r?.addEventListener("change",()=>{de.enabled=r.checked,s&&(s.style.display=de.enabled?"":"none"),gr()}),document.getElementById("toggle-notify-near")?.addEventListener("change",i=>{de.notifyNear=i.target.checked,gr()}),document.getElementById("toggle-notify-over")?.addEventListener("change",i=>{de.notifyOver=i.target.checked,gr()}),document.getElementById("notify-mode-once")?.addEventListener("change",i=>{i.target.checked&&(de.notifyMode="once",gr())}),document.getElementById("notify-mode-always")?.addEventListener("change",i=>{i.target.checked&&(de.notifyMode="always",gr())}),oe.length>0&&pn()}gT();
