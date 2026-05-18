(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const nm=()=>{};var zc={};/**
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
 */const Nu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Lu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let T=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(T=64)),r.push(t[m],t[p],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Nu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||p==null)throw new sm;const T=i<<2|l>>4;if(r.push(T),d!==64){const R=l<<4&240|d>>2;if(r.push(R),p!==64){const D=d<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const im=function(n){const e=Nu(n);return Lu.encodeByteArray(e,!0)},Ds=function(n){return im(n).replace(/\./g,"")},xu=function(n){try{return Lu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function om(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const am=()=>om().__FIREBASE_DEFAULTS__,cm=()=>{if(typeof process>"u"||typeof zc>"u")return;const n=zc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xu(n[1]);return e&&JSON.parse(e)},Zs=()=>{try{return nm()||am()||cm()||lm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ou=n=>Zs()?.emulatorHosts?.[n],um=n=>{const e=Ou(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Mu=()=>Zs()?.config,Fu=n=>Zs()?.[`_${n}`];/**
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
 */class hm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function dm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ds(JSON.stringify(t)),Ds(JSON.stringify(a)),""].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function mm(){const n=Zs()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ym(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _m(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Em(){return!mm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vm(){try{return typeof indexedDB=="object"}catch{return!1}}function Im(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Tm="FirebaseError";class pt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Tm,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vr.prototype.create)}}class Vr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?wm(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new pt(s,l,r)}}function wm(n,e){return n.replace(Am,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Am=/\{\$([^}]+)}/g;function bm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Hc(i)&&Hc(a)){if(!nn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Hc(n){return n!==null&&typeof n=="object"}/**
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
 */function Nr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sm(n,e){const t=new Rm(n,e);return t.subscribe.bind(t)}class Rm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Qi),s.error===void 0&&(s.error=Qi),s.complete===void 0&&(s.complete=Qi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qi(){}/**
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
 */function me(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Lr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bu(n){return(await fetch(n,{credentials:"include"})).ok}class rn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class Pm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(km(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dm(n){return n===Jt?void 0:n}function km(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Nm={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Lm=W.INFO,xm={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Om=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=xm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zo{constructor(e){this.name=e,this._logLevel=Lm,this._logHandler=Om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Mm=(n,e)=>e.some(t=>n instanceof t);let Gc,Wc;function Fm(){return Gc||(Gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bm(){return Wc||(Wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uu=new WeakMap,mo=new WeakMap,$u=new WeakMap,Ji=new WeakMap,Ho=new WeakMap;function Um(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(St(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Uu.set(t,n)}).catch(()=>{}),Ho.set(e,n),e}function $m(n){if(mo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});mo.set(n,e)}let po={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return mo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$u.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jm(n){po=n(po)}function qm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Yi(this),e,...t);return $u.set(r,e.sort?e.sort():[e]),St(r)}:Bm().includes(n)?function(...e){return n.apply(Yi(this),e),St(Uu.get(this))}:function(...e){return St(n.apply(Yi(this),e))}}function zm(n){return typeof n=="function"?qm(n):(n instanceof IDBTransaction&&$m(n),Mm(n,Fm())?new Proxy(n,po):n)}function St(n){if(n instanceof IDBRequest)return Um(n);if(Ji.has(n))return Ji.get(n);const e=zm(n);return e!==n&&(Ji.set(n,e),Ho.set(e,n)),e}const Yi=n=>Ho.get(n);function Hm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=St(a);return r&&a.addEventListener("upgradeneeded",u=>{r(St(a.result),u.oldVersion,u.newVersion,St(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Gm=["get","getKey","getAll","getAllKeys","count"],Wm=["put","add","delete","clear"],Xi=new Map;function Kc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xi.get(e))return Xi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Wm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gm.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return Xi.set(e,i),i}jm(n=>({...n,get:(e,t,r)=>Kc(e,t)||n.get(e,t,r),has:(e,t)=>!!Kc(e,t)||n.has(e,t)}));/**
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
 */class Km{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qm(n){return n.getComponent()?.type==="VERSION"}const go="@firebase/app",Qc="0.14.12";/**
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
 */const lt=new zo("@firebase/app"),Jm="@firebase/app-compat",Ym="@firebase/analytics-compat",Xm="@firebase/analytics",Zm="@firebase/app-check-compat",ep="@firebase/app-check",tp="@firebase/auth",np="@firebase/auth-compat",rp="@firebase/database",sp="@firebase/data-connect",ip="@firebase/database-compat",op="@firebase/functions",ap="@firebase/functions-compat",cp="@firebase/installations",lp="@firebase/installations-compat",up="@firebase/messaging",hp="@firebase/messaging-compat",dp="@firebase/performance",fp="@firebase/performance-compat",mp="@firebase/remote-config",pp="@firebase/remote-config-compat",gp="@firebase/storage",yp="@firebase/storage-compat",_p="@firebase/firestore",Ep="@firebase/ai",vp="@firebase/firestore-compat",Ip="firebase",Tp="12.13.0";/**
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
 */const yo="[DEFAULT]",wp={[go]:"fire-core",[Jm]:"fire-core-compat",[Xm]:"fire-analytics",[Ym]:"fire-analytics-compat",[ep]:"fire-app-check",[Zm]:"fire-app-check-compat",[tp]:"fire-auth",[np]:"fire-auth-compat",[rp]:"fire-rtdb",[sp]:"fire-data-connect",[ip]:"fire-rtdb-compat",[op]:"fire-fn",[ap]:"fire-fn-compat",[cp]:"fire-iid",[lp]:"fire-iid-compat",[up]:"fire-fcm",[hp]:"fire-fcm-compat",[dp]:"fire-perf",[fp]:"fire-perf-compat",[mp]:"fire-rc",[pp]:"fire-rc-compat",[gp]:"fire-gcs",[yp]:"fire-gcs-compat",[_p]:"fire-fst",[vp]:"fire-fst-compat",[Ep]:"fire-vertex","fire-js":"fire-js",[Ip]:"fire-js-all"};/**
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
 */const ks=new Map,Ap=new Map,_o=new Map;function Jc(n,e){try{n.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pn(n){const e=n.name;if(_o.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;_o.set(e,n);for(const t of ks.values())Jc(t,n);for(const t of Ap.values())Jc(t,n);return!0}function Go(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n==null?!1:n.settings!==void 0}/**
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
 */const bp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new Vr("app","Firebase",bp);/**
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
 */class Sp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const Mn=Tp;function ju(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:yo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(t||(t=Mu()),!t)throw Rt.create("no-options");const i=ks.get(s);if(i){if(nn(t,i.options)&&nn(r,i.config))return i;throw Rt.create("duplicate-app",{appName:s})}const a=new Vm(s);for(const u of _o.values())a.addComponent(u);const l=new Sp(t,r,a);return ks.set(s,l),l}function qu(n=yo){const e=ks.get(n);if(!e&&n===yo&&Mu())return ju();if(!e)throw Rt.create("no-app",{appName:n});return e}function Ct(n,e,t){let r=wp[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(a.join(" "));return}Pn(new rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Rp="firebase-heartbeat-database",Cp=1,Ir="firebase-heartbeat-store";let Zi=null;function zu(){return Zi||(Zi=Hm(Rp,Cp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ir)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),Zi}async function Pp(n){try{const t=(await zu()).transaction(Ir),r=await t.objectStore(Ir).get(Hu(n));return await t.done,r}catch(e){if(e instanceof pt)lt.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e?.message});lt.warn(t.message)}}}async function Yc(n,e){try{const r=(await zu()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,Hu(n)),await r.done}catch(t){if(t instanceof pt)lt.warn(t.message);else{const r=Rt.create("idb-set",{originalErrorMessage:t?.message});lt.warn(r.message)}}}function Hu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Dp=1024,kp=30;class Vp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>kp){const s=xp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){lt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xc(),{heartbeatsToSend:t,unsentEntries:r}=Np(this._heartbeatsCache.heartbeats),s=Ds(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return lt.warn(e),""}}}function Xc(){return new Date().toISOString().substring(0,10)}function Np(n,e=Dp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Zc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Zc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Lp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vm()?Im().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zc(n){return Ds(JSON.stringify({version:2,heartbeats:n})).length}function xp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Op(n){Pn(new rn("platform-logger",e=>new Km(e),"PRIVATE")),Pn(new rn("heartbeat",e=>new Vp(e),"PRIVATE")),Ct(go,Qc,n),Ct(go,Qc,"esm2020"),Ct("fire-js","")}Op("");var Mp="firebase",Fp="12.13.0";/**
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
 */Ct(Mp,Fp,"app");function Gu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bp=Gu,Wu=new Vr("auth","Firebase",Gu());/**
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
 */const Vs=new zo("@firebase/auth");function Up(n,...e){Vs.logLevel<=W.WARN&&Vs.warn(`Auth (${Mn}): ${n}`,...e)}function Es(n,...e){Vs.logLevel<=W.ERROR&&Vs.error(`Auth (${Mn}): ${n}`,...e)}/**
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
 */function Xe(n,...e){throw Ko(n,...e)}function je(n,...e){return Ko(n,...e)}function Wo(n,e,t){const r={...Bp(),[e]:t};return new Vr("auth","Firebase",r).create(e,{appName:n.name})}function en(n){return Wo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $p(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xe(n,"argument-error"),Wo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ko(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Wu.create(n,...e)}function B(n,e,...t){if(!n)throw Ko(e,...t)}function rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Es(e),new Error(e)}function ut(n,e){n||rt(e)}/**
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
 */function Eo(){return typeof self<"u"&&self.location?.href||""}function jp(){return el()==="http:"||el()==="https:"}function el(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function qp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jp()||gm()||"connection"in navigator)?navigator.onLine:!0}function zp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class xr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=fm()||ym()}get(){return qp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qo(n,e){ut(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ku{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Hp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Gp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wp=new xr(3e4,6e4);function Jo(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Fn(n,e,t,r,s={}){return Qu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Nr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return pm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Lr(n.emulatorConfig.host)&&(d.credentials="include"),Ku.fetch()(await Ju(n,n.config.apiHost,t,l),d)})}async function Qu(n,e,t){n._canInitEmulator=!1;const r={...Hp,...e};try{const s=new Qp(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ds(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ds(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ds(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Wo(n,m,d);Xe(n,m)}}catch(s){if(s instanceof pt)throw s;Xe(n,"network-request-failed",{message:String(s)})}}async function Kp(n,e,t,r,s={}){const i=await Fn(n,e,t,r,s);return"mfaPendingCredential"in i&&Xe(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ju(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Qo(n.config,s):`${n.config.apiScheme}://${s}`;return Gp.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Qp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),Wp.get())})}}function ds(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=je(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Jp(n,e){return Fn(n,"POST","/v1/accounts:delete",e)}async function Ns(n,e){return Fn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yp(n,e=!1){const t=me(n),r=await t.getIdToken(e),s=Yo(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:fr(eo(s.auth_time)),issuedAtTime:fr(eo(s.iat)),expirationTime:fr(eo(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function eo(n){return Number(n)*1e3}function Yo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Es("JWT malformed, contained fewer than 3 sections"),null;try{const s=xu(t);return s?JSON.parse(s):(Es("Failed to decode base64 JWT payload"),null)}catch(s){return Es("Caught error parsing JWT payload as JSON",s?.toString()),null}}function tl(n){const e=Yo(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pt&&Xp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Xp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Zp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ls(n){const e=n.auth,t=await n.getIdToken(),r=await Tr(n,Ns(e,{idToken:t}));B(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?Yu(s.providerUserInfo):[],a=tg(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function eg(n){const e=me(n);await Ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yu(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ng(n,e){const t=await Qu(n,{},async()=>{const r=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Ju(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Lr(n.emulatorConfig.host)&&(u.credentials="include"),Ku.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rg(n,e){return Fn(n,"POST","/v2/accounts:revokeToken",Jo(n,e))}/**
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
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=tl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ng(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new In;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function Tt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $e{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Zp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yp(this,e)}reload(){return eg(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $e({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await Tr(this,Jp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:T,isAnonymous:R,providerData:D,stsTokenManager:V}=t;B(p&&V,e,"internal-error");const P=In.fromJSON(this.name,V);B(typeof p=="string",e,"internal-error"),Tt(r,e.name),Tt(s,e.name),B(typeof T=="boolean",e,"internal-error"),B(typeof R=="boolean",e,"internal-error"),Tt(i,e.name),Tt(a,e.name),Tt(l,e.name),Tt(u,e.name),Tt(d,e.name),Tt(m,e.name);const j=new $e({uid:p,auth:e,email:s,emailVerified:T,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:d,lastLoginAt:m});return D&&Array.isArray(D)&&(j.providerData=D.map(G=>({...G}))),u&&(j._redirectEventId=u),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new In;s.updateFromServerResponse(t);const i=new $e({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ls(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new In;l.updateFromIdToken(r);const u=new $e({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
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
 */const nl=new Map;function st(n){ut(n instanceof Function,"Expected a class definition");let e=nl.get(n);return e?(ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nl.set(n,e),e)}/**
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
 */class Xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xu.type="NONE";const rl=Xu;/**
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
 */function vs(n,e,t){return`firebase:${n}:${e}:${t}`}class Tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vs(this.userKey,s.apiKey,i),this.fullPersistenceKey=vs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ns(this.auth,{idToken:e}).catch(()=>{});return t?$e._fromGetAccountInfoResponse(this.auth,t,e):null}return $e._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Tn(st(rl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||st(rl);const a=vs(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){let p;if(typeof m=="string"){const T=await Ns(e,{idToken:m}).catch(()=>{});if(!T)break;p=await $e._fromGetAccountInfoResponse(e,T,m)}else p=$e._fromJSON(e,m);d!==i&&(l=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Tn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Tn(i,e,r))}}/**
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
 */function sl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sh(e))return"Blackberry";if(ih(e))return"Webos";if(eh(e))return"Safari";if((e.includes("chrome/")||th(e))&&!e.includes("edge/"))return"Chrome";if(rh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Zu(n=Ce()){return/firefox\//i.test(n)}function eh(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function th(n=Ce()){return/crios\//i.test(n)}function nh(n=Ce()){return/iemobile/i.test(n)}function rh(n=Ce()){return/android/i.test(n)}function sh(n=Ce()){return/blackberry/i.test(n)}function ih(n=Ce()){return/webos/i.test(n)}function Xo(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sg(n=Ce()){return Xo(n)&&!!window.navigator?.standalone}function ig(){return _m()&&document.documentMode===10}function oh(n=Ce()){return Xo(n)||rh(n)||ih(n)||sh(n)||/windows phone/i.test(n)||nh(n)}/**
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
 */function ah(n,e=[]){let t;switch(n){case"Browser":t=sl(Ce());break;case"Worker":t=`${sl(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mn}/${r}`}/**
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
 */class og{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function ag(n,e={}){return Fn(n,"GET","/v2/passwordPolicy",Jo(n,e))}/**
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
 */const cg=6;class lg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??cg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ug{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new il(this),this.idTokenSubscription=new il(this),this.beforeStateQueue=new og(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=st(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Tn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ns(this,{idToken:e}),r=await $e._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ue(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ls(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(en(this));const t=e?me(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ag(this),t=new lg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await rg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&st(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[st(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ah(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Up(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ei(n){return me(n)}class il{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sm(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hg(n){Zo=n}function dg(n){return Zo.loadJS(n)}function fg(){return Zo.gapiScript}function mg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function pg(n,e){const t=Go(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(nn(i,e??{}))return s;Xe(s,"already-initialized")}return t.initialize({options:e})}function gg(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(st);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function yg(n,e,t){const r=ei(n);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ch(e),{host:a,port:l}=_g(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(nn(d,r.config.emulator)&&nn(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Lr(a)?Bu(`${i}//${a}${u}`):Eg()}function ch(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _g(n){const e=ch(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ol(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ol(a)}}}function ol(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Eg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class lh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,t){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}/**
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
 */async function wn(n,e){return Kp(n,"POST","/v1/accounts:signInWithIdp",Jo(n,e))}/**
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
 */const vg="http://localhost";class sn extends lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new sn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return wn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wn(e,t)}buildRequest(){const e={requestUri:vg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nr(t)}return e}}/**
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
 */class ea{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Or extends ea{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends Or{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class nt extends Or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sn._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return nt.credential(t,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class At extends Or{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
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
 */class bt extends Or{constructor(){super("twitter.com")}static credential(e,t){return sn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return bt.credential(t,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
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
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await $e._fromIdTokenResponse(e,r,s),a=al(r);return new Dn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=al(r);return new Dn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function al(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class xs extends pt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new xs(e,t,r,s)}}function uh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xs._fromErrorAndOperation(n,i,e,r):i})}async function Ig(n,e,t=!1){const r=await Tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dn._forOperation(n,"link",r)}/**
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
 */async function Tg(n,e,t=!1){const{auth:r}=n;if(Ue(r.app))return Promise.reject(en(r));const s="reauthenticate";try{const i=await Tr(n,uh(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=Yo(i.idToken);B(a,r,"internal-error");const{sub:l}=a;return B(n.uid===l,r,"user-mismatch"),Dn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Xe(r,"user-mismatch"),i}}/**
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
 */async function wg(n,e,t=!1){if(Ue(n.app))return Promise.reject(en(n));const r="signIn",s=await uh(n,r,e),i=await Dn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Ag(n,e,t,r){return me(n).onIdTokenChanged(e,t,r)}function bg(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function Sg(n,e,t,r){return me(n).onAuthStateChanged(e,t,r)}function Rg(n){return me(n).signOut()}const Os="__sak";/**
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
 */class hh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Cg=1e3,Pg=10;class dh extends hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);ig()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Pg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dh.type="LOCAL";const Dg=dh;/**
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
 */class fh extends hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fh.type="SESSION";const mh=fh;/**
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
 */function kg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ti{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ti(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await kg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ti.receivers=[];/**
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
 */function ta(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Vg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=ta("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const T=p;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(T.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ke(){return window}function Ng(n){Ke().location.href=n}/**
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
 */function ph(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Lg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xg(){return navigator?.serviceWorker?.controller||null}function Og(){return ph()?self:null}/**
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
 */const gh="firebaseLocalStorageDb",Mg=1,Ms="firebaseLocalStorage",yh="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ni(n,e){return n.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function Fg(){const n=indexedDB.deleteDatabase(gh);return new Mr(n).toPromise()}function Io(){const n=indexedDB.open(gh,Mg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ms,{keyPath:yh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ms)?e(r):(r.close(),await Fg(),e(await Io()))})})}async function cl(n,e,t){const r=ni(n,!0).put({[yh]:e,value:t});return new Mr(r).toPromise()}async function Bg(n,e){const t=ni(n,!1).get(e),r=await new Mr(t).toPromise();return r===void 0?null:r.value}function ll(n,e){const t=ni(n,!0).delete(e);return new Mr(t).toPromise()}const Ug=800,$g=3;class _h{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Io(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>$g)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ph()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ti._getInstance(Og()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Lg(),!this.activeServiceWorker)return;this.sender=new Vg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Io();return await cl(e,Os,"1"),await ll(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Bg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ll(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ni(s,!1).getAll();return new Mr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_h.type="LOCAL";const jg=_h;new xr(3e4,6e4);/**
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
 */function Eh(n,e){return e?st(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class na extends lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qg(n){return wg(n.auth,new na(n),n.bypassAuthState)}function zg(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Tg(t,new na(n),n.bypassAuthState)}async function Hg(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Ig(t,new na(n),n.bypassAuthState)}/**
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
 */class vh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qg;case"linkViaPopup":case"linkViaRedirect":return Hg;case"reauthViaPopup":case"reauthViaRedirect":return zg;default:Xe(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gg=new xr(2e3,1e4);async function Wg(n,e,t){if(Ue(n.app))return Promise.reject(je(n,"operation-not-supported-in-this-environment"));const r=ei(n);$p(n,e,ea);const s=Eh(r,t);return new Yt(r,"signInViaPopup",e,s).executeNotNull()}class Yt extends vh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gg.get())};e()}}Yt.currentPopupAction=null;/**
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
 */const Kg="pendingRedirect",Is=new Map;class Qg extends vh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Is.get(this.auth._key());if(!e){try{const r=await Jg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Is.set(this.auth._key(),e)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jg(n,e){const t=Zg(e),r=Xg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Yg(n,e){Is.set(n._key(),e)}function Xg(n){return st(n._redirectPersistence)}function Zg(n){return vs(Kg,n.config.apiKey,n.name)}async function ey(n,e,t=!1){if(Ue(n.app))return Promise.reject(en(n));const r=ei(n),s=Eh(r,e),a=await new Qg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const ty=10*60*1e3;class ny{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ry(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Ih(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(je(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ty&&this.cachedEventUids.clear(),this.cachedEventUids.has(ul(e))}saveEventToCache(e){this.cachedEventUids.add(ul(e)),this.lastProcessedEventTime=Date.now()}}function ul(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ih({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function ry(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ih(n);default:return!1}}/**
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
 */async function sy(n,e={}){return Fn(n,"GET","/v1/projects",e)}/**
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
 */const iy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oy=/^https?/;async function ay(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sy(n);for(const t of e)try{if(cy(t))return}catch{}Xe(n,"unauthorized-domain")}function cy(n){const e=Eo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!oy.test(t))return!1;if(iy.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ly=new xr(3e4,6e4);function hl(){const n=Ke().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function uy(n){return new Promise((e,t)=>{function r(){hl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hl(),t(je(n,"network-request-failed"))},timeout:ly.get()})}if(Ke().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ke().gapi?.load)r();else{const s=mg("iframefcb");return Ke()[s]=()=>{gapi.load?r():t(je(n,"network-request-failed"))},dg(`${fg()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Ts=null,e})}let Ts=null;function hy(n){return Ts=Ts||uy(n),Ts}/**
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
 */const dy=new xr(5e3,15e3),fy="__/auth/iframe",my="emulator/auth/iframe",py={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yy(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qo(e,my):`https://${n.config.authDomain}/${fy}`,r={apiKey:e.apiKey,appName:n.name,v:Mn},s=gy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Nr(r).slice(1)}`}async function _y(n){const e=await hy(n),t=Ke().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:yy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:py,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=je(n,"network-request-failed"),l=Ke().setTimeout(()=>{i(a)},dy.get());function u(){Ke().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Ey={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vy=500,Iy=600,Ty="_blank",wy="http://localhost";class dl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ay(n,e,t,r=vy,s=Iy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Ey,width:r.toString(),height:s.toString(),top:i,left:a},d=Ce().toLowerCase();t&&(l=th(d)?Ty:t),Zu(d)&&(e=e||wy,u.scrollbars="yes");const m=Object.entries(u).reduce((T,[R,D])=>`${T}${R}=${D},`,"");if(sg(d)&&l!=="_self")return by(e||"",l),new dl(null);const p=window.open(e||"",l,m);B(p,n,"popup-blocked");try{p.focus()}catch{}return new dl(p)}function by(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Sy="__/auth/handler",Ry="emulator/auth/handler",Cy=encodeURIComponent("fac");async function fl(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mn,eventId:s};if(e instanceof ea){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",bm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))a[m]=p}if(e instanceof Or){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),d=u?`#${Cy}=${encodeURIComponent(u)}`:"";return`${Py(n)}?${Nr(l).slice(1)}${d}`}function Py({config:n}){return n.emulator?Qo(n,Ry):`https://${n.authDomain}/${Sy}`}/**
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
 */const to="webStorageSupport";class Dy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mh,this._completeRedirectFn=ey,this._overrideRedirectResult=Yg}async _openPopup(e,t,r,s){ut(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await fl(e,t,r,Eo(),s);return Ay(e,i,ta())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await fl(e,t,r,Eo(),s);return Ng(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await _y(e),r=new ny(e);return t.register("authEvent",s=>(B(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(to,{type:to},s=>{const i=s?.[0]?.[to];i!==void 0&&t(!!i),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ay(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oh()||eh()||Xo()}}const ky=Dy;var ml="@firebase/auth",pl="1.13.1";/**
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
 */class Vy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ny(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ly(n){Pn(new rn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ah(n)},d=new ug(r,s,i,u);return gg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new rn("auth-internal",e=>{const t=ei(e.getProvider("auth").getImmediate());return(r=>new Vy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(ml,pl,Ny(n)),Ct(ml,pl,"esm2020")}/**
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
 */const xy=5*60,Oy=Fu("authIdTokenMaxAge")||xy;let gl=null;const My=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Oy)return;const s=t?.token;gl!==s&&(gl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fy(n=qu()){const e=Go(n,"auth");if(e.isInitialized())return e.getImmediate();const t=pg(n,{popupRedirectResolver:ky,persistence:[jg,Dg,mh]}),r=Fu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=My(i.toString());bg(t,a,()=>a(t.currentUser)),Ag(t,l=>a(l))}}const s=Ou("auth");return s&&yg(t,`http://${s}`),t}function By(){return document.getElementsByTagName("head")?.[0]??document}hg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=je("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",By().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ly("Browser");var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pt,Th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.F=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(I,v,A){for(var y=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)y[Ve-2]=arguments[Ve];return g.prototype[v].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,_){_||(_=0);const I=Array(16);if(typeof g=="string")for(var v=0;v<16;++v)I[v]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(v=0;v<16;++v)I[v]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],v=E.g[2];let A=E.g[3],y;y=g+(A^_&(v^A))+I[0]+3614090360&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(v^g&(_^v))+I[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=v+(_^A&(g^_))+I[2]+606105819&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(g^v&(A^g))+I[3]+3250441966&4294967295,_=v+(y<<22&4294967295|y>>>10),y=g+(A^_&(v^A))+I[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(v^g&(_^v))+I[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=v+(_^A&(g^_))+I[6]+2821735955&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(g^v&(A^g))+I[7]+4249261313&4294967295,_=v+(y<<22&4294967295|y>>>10),y=g+(A^_&(v^A))+I[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(v^g&(_^v))+I[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=v+(_^A&(g^_))+I[10]+4294925233&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(g^v&(A^g))+I[11]+2304563134&4294967295,_=v+(y<<22&4294967295|y>>>10),y=g+(A^_&(v^A))+I[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=A+(v^g&(_^v))+I[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=v+(_^A&(g^_))+I[14]+2792965006&4294967295,v=A+(y<<17&4294967295|y>>>15),y=_+(g^v&(A^g))+I[15]+1236535329&4294967295,_=v+(y<<22&4294967295|y>>>10),y=g+(v^A&(_^v))+I[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(g^_))+I[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=v+(g^_&(A^g))+I[11]+643717713&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(v^A))+I[0]+3921069994&4294967295,_=v+(y<<20&4294967295|y>>>12),y=g+(v^A&(_^v))+I[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(g^_))+I[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=v+(g^_&(A^g))+I[15]+3634488961&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(v^A))+I[4]+3889429448&4294967295,_=v+(y<<20&4294967295|y>>>12),y=g+(v^A&(_^v))+I[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(g^_))+I[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=v+(g^_&(A^g))+I[3]+4107603335&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(v^A))+I[8]+1163531501&4294967295,_=v+(y<<20&4294967295|y>>>12),y=g+(v^A&(_^v))+I[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=A+(_^v&(g^_))+I[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=v+(g^_&(A^g))+I[7]+1735328473&4294967295,v=A+(y<<14&4294967295|y>>>18),y=_+(A^g&(v^A))+I[12]+2368359562&4294967295,_=v+(y<<20&4294967295|y>>>12),y=g+(_^v^A)+I[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^v)+I[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=v+(A^g^_)+I[11]+1839030562&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^g)+I[14]+4259657740&4294967295,_=v+(y<<23&4294967295|y>>>9),y=g+(_^v^A)+I[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^v)+I[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=v+(A^g^_)+I[7]+4139469664&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^g)+I[10]+3200236656&4294967295,_=v+(y<<23&4294967295|y>>>9),y=g+(_^v^A)+I[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^v)+I[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=v+(A^g^_)+I[3]+3572445317&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^g)+I[6]+76029189&4294967295,_=v+(y<<23&4294967295|y>>>9),y=g+(_^v^A)+I[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=A+(g^_^v)+I[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=v+(A^g^_)+I[15]+530742520&4294967295,v=A+(y<<16&4294967295|y>>>16),y=_+(v^A^g)+I[2]+3299628645&4294967295,_=v+(y<<23&4294967295|y>>>9),y=g+(v^(_|~A))+I[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~v))+I[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=v+(g^(A|~_))+I[14]+2878612391&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~g))+I[5]+4237533241&4294967295,_=v+(y<<21&4294967295|y>>>11),y=g+(v^(_|~A))+I[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~v))+I[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=v+(g^(A|~_))+I[10]+4293915773&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~g))+I[1]+2240044497&4294967295,_=v+(y<<21&4294967295|y>>>11),y=g+(v^(_|~A))+I[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~v))+I[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=v+(g^(A|~_))+I[6]+2734768916&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~g))+I[13]+1309151649&4294967295,_=v+(y<<21&4294967295|y>>>11),y=g+(v^(_|~A))+I[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=A+(_^(g|~v))+I[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=v+(g^(A|~_))+I[2]+718787259&4294967295,v=A+(y<<15&4294967295|y>>>17),y=_+(A^(v|~g))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.v=function(E,g){g===void 0&&(g=E.length);const _=g-this.blockSize,I=this.C;let v=this.h,A=0;for(;A<g;){if(v==0)for(;A<=_;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(I[v++]=E.charCodeAt(A++),v==this.blockSize){s(this,I),v=0;break}}else for(;A<g;)if(I[v++]=E[A++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=g},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)E[g++]=this.g[_]>>>I&255;return E};function i(E,g){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;const _=[];let I=!0;for(let v=E.length-1;v>=0;v--){const A=E[v]|0;I&&A==g||(_[v]=A,I=!1)}this.g=_}var l={};function u(E){return-128<=E&&E<128?i(E,function(g){return new a([g|0],g<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return P(d(-E));const g=[];let _=1;for(let I=0;E>=_;I++)g[I]=E/_|0,_*=4294967296;return new a(g,0)}function m(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return P(m(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let I=p;for(let A=0;A<E.length;A+=8){var v=Math.min(8,E.length-A);const y=parseInt(E.substring(A,A+v),g);v<8?(v=d(Math.pow(g,v)),I=I.j(v).add(d(y))):(I=I.j(_),I=I.add(d(y)))}return I}var p=u(0),T=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-P(this).m();let E=0,g=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);E+=(I>=0?I:4294967296+I)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(V(this))return"-"+P(this).toString(E);const g=d(Math.pow(E,6));var _=this;let I="";for(;;){const v=ve(_,g).g;_=j(_,v.j(g));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=v,D(_))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=j(this,E),V(E)?-1:D(E)?0:1};function P(E){const g=E.g.length,_=[];for(let I=0;I<g;I++)_[I]=~E.g[I];return new a(_,~E.h).add(T)}n.abs=function(){return V(this)?P(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),_=[];let I=0;for(let v=0;v<=g;v++){let A=I+(this.i(v)&65535)+(E.i(v)&65535),y=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);I=y>>>16,A&=65535,y&=65535,_[v]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(E,g){return E.add(P(g))}n.j=function(E){if(D(this)||D(E))return p;if(V(this))return V(E)?P(this).j(P(E)):P(P(this).j(E));if(V(E))return P(this.j(P(E)));if(this.l(R)<0&&E.l(R)<0)return d(this.m()*E.m());const g=this.g.length+E.g.length,_=[];for(var I=0;I<2*g;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<E.g.length;v++){const A=this.i(I)>>>16,y=this.i(I)&65535,Ve=E.i(v)>>>16,zt=E.i(v)&65535;_[2*I+2*v]+=y*zt,G(_,2*I+2*v),_[2*I+2*v+1]+=A*zt,G(_,2*I+2*v+1),_[2*I+2*v+1]+=y*Ve,G(_,2*I+2*v+1),_[2*I+2*v+2]+=A*Ve,G(_,2*I+2*v+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new a(_,0)};function G(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function Y(E,g){this.g=E,this.h=g}function ve(E,g){if(D(g))throw Error("division by zero");if(D(E))return new Y(p,p);if(V(E))return g=ve(P(E),g),new Y(P(g.g),P(g.h));if(V(g))return g=ve(E,P(g)),new Y(P(g.g),g.h);if(E.g.length>30){if(V(E)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var _=T,I=g;I.l(E)<=0;)_=xe(_),I=xe(I);var v=M(_,1),A=M(I,1);for(I=M(I,2),_=M(_,2);!D(I);){var y=A.add(I);y.l(E)<=0&&(v=v.add(_),A=y),I=M(I,1),_=M(_,1)}return g=j(E,v.j(g)),new Y(v,g)}for(v=p;E.l(g)>=0;){for(_=Math.max(1,Math.floor(E.m()/g.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(_),y=A.j(g);V(y)||y.l(E)>0;)_-=I,A=d(_),y=A.j(g);D(A)&&(A=T),v=v.add(A),E=j(E,y)}return new Y(v,E)}n.B=function(E){return ve(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)&E.i(I);return new a(_,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)|E.i(I);return new a(_,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)^E.i(I);return new a(_,this.h^E.h)};function xe(E){const g=E.g.length+1,_=[];for(let I=0;I<g;I++)_[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(_,E.h)}function M(E,g){const _=g>>5;g%=32;const I=E.g.length-_,v=[];for(let A=0;A<I;A++)v[A]=g>0?E.i(A+_)>>>g|E.i(A+_+1)<<32-g:E.i(A+_);return new a(v,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Th=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Pt=a}).apply(typeof yl<"u"?yl:typeof self<"u"?self:typeof window<"u"?window:{});var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wh,cr,Ah,ws,To,bh,Sh,Rh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fs=="object"&&fs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break e;h=h[w]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function m(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function p(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,w,b){for(var k=Array(arguments.length-2),q=2;q<arguments.length;q++)k[q-2]=arguments[q];return c.prototype[w].apply(f,k)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function D(o,c){for(let f=1;f<arguments.length;f++){const w=arguments[f];var h=typeof w;if(h=h!="object"?h:w?Array.isArray(w)?"array":h:"null",h=="array"||h=="object"&&typeof w.length=="number"){h=o.length||0;const b=w.length||0;o.length=h+b;for(let k=0;k<b;k++)o[h+k]=w[k]}else o.push(w)}}class V{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function P(o){a.setTimeout(()=>{throw o},0)}function j(){var o=E;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class G{constructor(){this.h=this.g=null}add(c,h){const f=Y.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Y=new V(()=>new ve,o=>o.reset());class ve{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,M=!1,E=new G,g=()=>{const o=Promise.resolve(void 0);xe=()=>{o.then(_)}};function _(){for(var o;o=j();){try{o.h.call(o.g)}catch(h){P(h)}var c=Y;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}M=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function Ve(o,c){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(Ve,v),Ve.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ve.Z.h.call(this)},Ve.prototype.h=function(){Ve.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zt="closure_listenable_"+(Math.random()*1e6|0),Af=0;function bf(o,c,h,f,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=w,this.key=++Af,this.da=this.fa=!1}function Yr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xr(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function Sf(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function qa(o){const c={};for(const h in o)c[h]=o[h];return c}const za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ha(o,c){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let b=0;b<za.length;b++)h=za[b],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Zr(o){this.src=o,this.g={},this.h=0}Zr.prototype.add=function(o,c,h,f,w){const b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);const k=Si(o,c,f,w);return k>-1?(c=o[k],h||(c.fa=!1)):(c=new bf(c,this.src,b,!!f,w),c.fa=h,o.push(c)),c};function bi(o,c){const h=c.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,c,void 0),b;(b=w>=0)&&Array.prototype.splice.call(f,w,1),b&&(Yr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Si(o,c,h,f){for(let w=0;w<o.length;++w){const b=o[w];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==f)return w}return-1}var Ri="closure_lm_"+(Math.random()*1e6|0),Ci={};function Ga(o,c,h,f,w){if(Array.isArray(c)){for(let b=0;b<c.length;b++)Ga(o,c[b],h,f,w);return null}return h=Qa(h),o&&o[zt]?o.J(c,h,l(f)?!!f.capture:!1,w):Rf(o,c,h,!1,f,w)}function Rf(o,c,h,f,w,b){if(!c)throw Error("Invalid event type");const k=l(w)?!!w.capture:!!w;let q=Di(o);if(q||(o[Ri]=q=new Zr(o)),h=q.add(c,h,f,k,b),h.proxy)return h;if(f=Cf(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)A||(w=k),w===void 0&&(w=!1),o.addEventListener(c.toString(),f,w);else if(o.attachEvent)o.attachEvent(Ka(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Cf(){function o(h){return c.call(o.src,o.listener,h)}const c=Pf;return o}function Wa(o,c,h,f,w){if(Array.isArray(c))for(var b=0;b<c.length;b++)Wa(o,c[b],h,f,w);else f=l(f)?!!f.capture:!!f,h=Qa(h),o&&o[zt]?(o=o.i,b=String(c).toString(),b in o.g&&(c=o.g[b],h=Si(c,h,f,w),h>-1&&(Yr(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[b],o.h--)))):o&&(o=Di(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Si(c,h,f,w)),(h=o>-1?c[o]:null)&&Pi(h))}function Pi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[zt])bi(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Ka(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Di(c))?(bi(h,o),h.h==0&&(h.src=null,c[Ri]=null)):Yr(o)}}}function Ka(o){return o in Ci?Ci[o]:Ci[o]="on"+o}function Pf(o,c){if(o.da)o=!0;else{c=new Ve(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&Pi(o),o=h.call(f,c)}return o}function Di(o){return o=o[Ri],o instanceof Zr?o:null}var ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qa(o){return typeof o=="function"?o:(o[ki]||(o[ki]=function(c){return o.handleEvent(c)}),o[ki])}function Ae(){I.call(this),this.i=new Zr(this),this.M=this,this.G=null}p(Ae,I),Ae.prototype[zt]=!0,Ae.prototype.removeEventListener=function(o,c,h,f){Wa(this,o,c,h,f)};function Pe(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new v(c,o);else if(c instanceof v)c.target=c.target||o;else{var w=c;c=new v(f,o),Ha(c,w)}w=!0;let b,k;if(h)for(k=h.length-1;k>=0;k--)b=c.g=h[k],w=es(b,f,!0,c)&&w;if(b=c.g=o,w=es(b,f,!0,c)&&w,w=es(b,f,!1,c)&&w,h)for(k=0;k<h.length;k++)b=c.g=h[k],w=es(b,f,!1,c)&&w}Ae.prototype.N=function(){if(Ae.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)Yr(h[f]);delete o.g[c],o.h--}}this.G=null},Ae.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Ae.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function es(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let b=0;b<c.length;++b){const k=c[b];if(k&&!k.da&&k.capture==h){const q=k.listener,pe=k.ha||k.src;k.fa&&bi(o.i,k),w=q.call(pe,f)!==!1&&w}}return w&&!f.defaultPrevented}function Df(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Ja(o){o.g=Df(()=>{o.g=null,o.i&&(o.i=!1,Ja(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class kf extends I{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ja(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zn(o){I.call(this),this.h=o,this.g={}}p(zn,I);var Ya=[];function Xa(o){Xr(o.g,function(c,h){this.g.hasOwnProperty(h)&&Pi(c)},o),o.g={}}zn.prototype.N=function(){zn.Z.N.call(this),Xa(this)},zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vi=a.JSON.stringify,Vf=a.JSON.parse,Nf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Za(){}function ec(){}var Hn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ni(){v.call(this,"d")}p(Ni,v);function Li(){v.call(this,"c")}p(Li,v);var Ht={},tc=null;function ts(){return tc=tc||new Ae}Ht.Ia="serverreachability";function nc(o){v.call(this,Ht.Ia,o)}p(nc,v);function Gn(o){const c=ts();Pe(c,new nc(c))}Ht.STAT_EVENT="statevent";function rc(o,c){v.call(this,Ht.STAT_EVENT,o),this.stat=c}p(rc,v);function De(o){const c=ts();Pe(c,new rc(c,o))}Ht.Ja="timingevent";function sc(o,c){v.call(this,Ht.Ja,o),this.size=c}p(sc,v);function Wn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Kn(){this.g=!0}Kn.prototype.ua=function(){this.g=!1};function Lf(o,c,h,f,w,b){o.info(function(){if(o.g)if(b){var k="",q=b.split("&");for(let X=0;X<q.length;X++){var pe=q[X].split("=");if(pe.length>1){const _e=pe[0];pe=pe[1];const Ge=_e.split("_");k=Ge.length>=2&&Ge[1]=="type"?k+(_e+"="+pe+"&"):k+(_e+"=redacted&")}}}else k=null;else k=b;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+h+`
`+k})}function xf(o,c,h,f,w,b,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+h+`
`+b+" "+k})}function mn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Mf(o,h)+(f?" "+f:"")})}function Of(o,c){o.info(function(){return"TIMEOUT: "+c})}Kn.prototype.info=function(){};function Mf(o,c){if(!o.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(o=0;o<b.length;o++)if(Array.isArray(b[o])){var h=b[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let k=1;k<f.length;k++)f[k]=""}}}}return Vi(b)}catch{return c}}var ns={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ic={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},oc;function xi(){}p(xi,Za),xi.prototype.g=function(){return new XMLHttpRequest},oc=new xi;function Qn(o){return encodeURIComponent(String(o))}function Ff(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function gt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new zn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ac}function ac(){this.i=null,this.g="",this.h=!1}var cc={},Oi={};function Mi(o,c,h){o.M=1,o.A=ss(He(c)),o.u=h,o.R=!0,lc(o,null)}function lc(o,c){o.F=Date.now(),rs(o),o.B=He(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),Tc(h.i,"t",f),o.C=0,h=o.j.L,o.h=new ac,o.g=Uc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new kf(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var w="readystatechange";Array.isArray(w)||(w&&(Ya[0]=w.toString()),w=Ya);for(let b=0;b<w.length;b++){const k=Ga(h,w[b],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.J?qa(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Gn(),Lf(o.i,o.v,o.B,o.l,o.S,o.u)}gt.prototype.ba=function(o){o=o.target;const c=this.O;c&&Et(o)==3?c.j():this.Y(o)},gt.prototype.Y=function(o){try{if(o==this.g)e:{const q=Et(this.g),pe=this.g.ya(),X=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||Pc(this.g)))){this.K||q!=4||pe==7||(pe==8||X<=0?Gn(3):Gn(2)),Fi(this);var c=this.g.ca();this.X=c;var h=Bf(this);if(this.o=c==200,xf(this.i,this.v,this.B,this.l,this.S,q,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(f)){var b=f;break t}}b=null}if(o=b)mn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Bi(this,o);else{this.o=!1,this.m=3,De(12),Gt(this),Jn(this);break e}}if(this.R){o=!0;let _e;for(;!this.K&&this.C<h.length;)if(_e=Uf(this,h),_e==Oi){q==4&&(this.m=4,De(14),o=!1),mn(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==cc){this.m=4,De(15),mn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else mn(this.i,this.l,_e,null),Bi(this,_e);if(uc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||h.length!=0||this.h.h||(this.m=1,De(16),o=!1),this.o=this.o&&o,!o)mn(this.i,this.l,h,"[Invalid Chunked Response]"),Gt(this),Jn(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Wi(k),k.P=!0,De(11))}}else mn(this.i,this.l,h,null),Bi(this,h);q==4&&Gt(this),this.o&&!this.K&&(q==4?Oc(this.j,this):(this.o=!1,rs(this)))}else em(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,De(12)):(this.m=0,De(13)),Gt(this),Jn(this)}}}catch{}finally{}};function Bf(o){if(!uc(o))return o.g.la();const c=Pc(o.g);if(c==="")return"";let h="";const f=c.length,w=Et(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Gt(o),Jn(o),"";o.h.i=new a.TextDecoder}for(let b=0;b<f;b++)o.h.h=!0,h+=o.h.i.decode(c[b],{stream:!(w&&b==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function uc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Uf(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Oi:(h=Number(c.substring(h,f)),isNaN(h)?cc:(f+=1,f+h>c.length?Oi:(c=c.slice(f,f+h),o.C=f+h,c)))}gt.prototype.cancel=function(){this.K=!0,Gt(this)};function rs(o){o.T=Date.now()+o.H,hc(o,o.H)}function hc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Wn(d(o.aa,o),c)}function Fi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}gt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Of(this.i,this.B),this.M!=2&&(Gn(),De(17)),Gt(this),this.m=2,Jn(this)):hc(this,this.T-o)};function Jn(o){o.j.I==0||o.K||Oc(o.j,o)}function Gt(o){Fi(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Xa(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Bi(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||Ui(h.h,o))){if(!o.L&&Ui(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)ls(h),as(h);else break e;Gi(h),De(18)}}else h.xa=w[1],0<h.xa-h.K&&w[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Wn(d(h.Va,h),6e3));mc(h.h)<=1&&h.ta&&(h.ta=void 0)}else Kt(h,11)}else if((o.L||h.g==o)&&ls(h),!y(c))for(w=h.Ba.g.parse(c),c=0;c<w.length;c++){let X=w[c];const _e=X[0];if(!(_e<=h.K))if(h.K=_e,X=X[1],h.I==2)if(X[0]=="c"){h.M=X[1],h.ba=X[2];const Ge=X[3];Ge!=null&&(h.ka=Ge,h.j.info("VER="+h.ka));const Qt=X[4];Qt!=null&&(h.za=Qt,h.j.info("SVER="+h.za));const vt=X[5];vt!=null&&typeof vt=="number"&&vt>0&&(f=1.5*vt,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const It=o.g;if(It){const hs=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hs){var b=f.h;b.g||hs.indexOf("spdy")==-1&&hs.indexOf("quic")==-1&&hs.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&($i(b,b.h),b.h=null))}if(f.G){const Ki=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Ki&&(f.wa=Ki,te(f.J,f.G,Ki))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var k=o;if(f.na=Bc(f,f.L?f.ba:null,f.W),k.L){pc(f.h,k);var q=k,pe=f.O;pe&&(q.H=pe),q.D&&(Fi(q),rs(q)),f.g=k}else Lc(f);h.i.length>0&&cs(h)}else X[0]!="stop"&&X[0]!="close"||Kt(h,7);else h.I==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Kt(h,7):Hi(h):X[0]!="noop"&&h.l&&h.l.qa(X),h.A=0)}}Gn(4)}catch{}}var $f=class{constructor(o,c){this.g=o,this.map=c}};function dc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function mc(o){return o.h?1:o.g?o.g.size:0}function Ui(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function $i(o,c){o.g?o.g.add(c):o.h=c}function pc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}dc.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function gc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return R(o.i)}var yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let w,b=null;f>=0?(w=o[h].substring(0,f),b=o[h].substring(f+1)):w=o[h],c(w,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function yt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof yt?(this.l=o.l,Yn(this,o.j),this.o=o.o,this.g=o.g,Xn(this,o.u),this.h=o.h,ji(this,wc(o.i)),this.m=o.m):o&&(c=String(o).match(yc))?(this.l=!1,Yn(this,c[1]||"",!0),this.o=Zn(c[2]||""),this.g=Zn(c[3]||"",!0),Xn(this,c[4]),this.h=Zn(c[5]||"",!0),ji(this,c[6]||"",!0),this.m=Zn(c[7]||"")):(this.l=!1,this.i=new tr(null,this.l))}yt.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(er(c,_c,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(er(c,_c,!0),"@"),o.push(Qn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(er(h,h.charAt(0)=="/"?Hf:zf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",er(h,Wf)),o.join("")},yt.prototype.resolve=function(o){const c=He(this);let h=!!o.j;h?Yn(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)Xn(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=c.h.lastIndexOf("/");w!=-1&&(f=c.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const b=[];for(let k=0;k<w.length;){const q=w[k++];q=="."?f&&k==w.length&&b.push(""):q==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),f&&k==w.length&&b.push("")):(b.push(q),f=!0)}f=b.join("/")}else f=w}return h?c.h=f:h=o.i.toString()!=="",h?ji(c,wc(o.i)):h=!!o.m,h&&(c.m=o.m),c};function He(o){return new yt(o)}function Yn(o,c,h){o.j=h?Zn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Xn(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function ji(o,c,h){c instanceof tr?(o.i=c,Kf(o.i,o.l)):(h||(c=er(c,Gf)),o.i=new tr(c,o.l))}function te(o,c,h){o.i.set(c,h)}function ss(o){return te(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Zn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function er(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,qf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function qf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _c=/[#\/\?@]/g,zf=/[#\?:]/g,Hf=/[#\?]/g,Gf=/[#\?@]/g,Wf=/#/g;function tr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Wt(o){o.g||(o.g=new Map,o.h=0,o.i&&jf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=tr.prototype,n.add=function(o,c){Wt(this),this.i=null,o=pn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Ec(o,c){Wt(o),c=pn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function vc(o,c){return Wt(o),c=pn(o,c),o.g.has(c)}n.forEach=function(o,c){Wt(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(c,w,f,this)},this)},this)};function Ic(o,c){Wt(o);let h=[];if(typeof c=="string")vc(o,c)&&(h=h.concat(o.g.get(pn(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return Wt(this),this.i=null,o=pn(this,o),vc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=Ic(this,o),o.length>0?String(o[0]):c):c};function Tc(o,c,h){Ec(o,c),h.length>0&&(o.i=null,o.g.set(pn(o,c),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const w=Qn(h);h=Ic(this,h);for(let b=0;b<h.length;b++){let k=w;h[b]!==""&&(k+="="+Qn(h[b])),o.push(k)}}return this.i=o.join("&")};function wc(o){const c=new tr;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function pn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Kf(o,c){c&&!o.j&&(Wt(o),o.i=null,o.g.forEach(function(h,f){const w=f.toLowerCase();f!=w&&(Ec(this,f),Tc(this,w,h))},o)),o.j=c}function Qf(o,c){const h=new Kn;if(a.Image){const f=new Image;f.onload=m(_t,h,"TestLoadImage: loaded",!0,c,f),f.onerror=m(_t,h,"TestLoadImage: error",!1,c,f),f.onabort=m(_t,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(_t,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Jf(o,c){const h=new Kn,f=new AbortController,w=setTimeout(()=>{f.abort(),_t(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(b=>{clearTimeout(w),b.ok?_t(h,"TestPingServer: ok",!0,c):_t(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),_t(h,"TestPingServer: error",!1,c)})}function _t(o,c,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function Yf(){this.g=new Nf}function qi(o){this.i=o.Sb||null,this.h=o.ab||!1}p(qi,Za),qi.prototype.g=function(){return new is(this.i,this.h)};function is(o,c){Ae.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(is,Ae),n=is.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,rr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,nr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ac(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ac(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?nr(this):rr(this),this.readyState==3&&Ac(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,nr(this))},n.Na=function(o){this.g&&(this.response=o,nr(this))},n.ga=function(){this.g&&nr(this)};function nr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,rr(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function rr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function bc(o){let c="";return Xr(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function zi(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=bc(h),typeof o=="string"?h!=null&&Qn(h):te(o,c,h))}function se(o){Ae.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(se,Ae);var Xf=/^https?$/i,Zf=["POST","PUT"];n=se.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():oc.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(b){Sc(this,b);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),w=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Zf,c,void 0)>=0)||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of h)this.g.setRequestHeader(b,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(b){Sc(this,b)}};function Sc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Rc(o),os(o)}function Rc(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Pe(this,"complete"),Pe(this,"abort"),os(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),os(this,!0)),se.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Cc(this):this.Xa())},n.Xa=function(){Cc(this)};function Cc(o){if(o.h&&typeof i<"u"){if(o.v&&Et(o)==4)setTimeout(o.Ca.bind(o),0);else if(Pe(o,"readystatechange"),Et(o)==4){o.h=!1;try{const b=o.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=b===0){let k=String(o.D).match(yc)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),f=!Xf.test(k?k.toLowerCase():"")}h=f}if(h)Pe(o,"complete"),Pe(o,"success");else{o.o=6;try{var w=Et(o)>2?o.g.statusText:""}catch{w=""}o.l=w+" ["+o.ca()+"]",Rc(o)}}finally{os(o)}}}}function os(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Pe(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Et(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Et(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Vf(c)}};function Pc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function em(o){const c={};o=(o.g&&Et(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(y(o[f]))continue;var h=Ff(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[w]||[];c[w]=b,b.push(h)}Sf(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Dc(o){this.za=0,this.i=[],this.j=new Kn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=sr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=sr("baseRetryDelayMs",5e3,o),this.Za=sr("retryDelaySeedMs",1e4,o),this.Ta=sr("forwardChannelMaxRetries",2,o),this.va=sr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new dc(o&&o.concurrentRequestLimit),this.Ba=new Yf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Dc.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,f){De(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=Bc(this,null,this.W),cs(this)};function Hi(o){if(kc(o),o.I==3){var c=o.V++,h=He(o.J);if(te(h,"SID",o.M),te(h,"RID",c),te(h,"TYPE","terminate"),ir(o,h),c=new gt(o,o.j,c),c.M=2,c.A=ss(He(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Uc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),rs(c)}Fc(o)}function as(o){o.g&&(Wi(o),o.g.cancel(),o.g=null)}function kc(o){as(o),o.v&&(a.clearTimeout(o.v),o.v=null),ls(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function cs(o){if(!fc(o.h)&&!o.m){o.m=!0;var c=o.Ea;xe||g(),M||(xe(),M=!0),E.add(c,o),o.D=0}}function tm(o,c){return mc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Wn(d(o.Ea,o,c),Mc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const w=new gt(this,this.j,o);let b=this.o;if(this.U&&(b?(b=qa(b),Ha(b,this.U)):b=this.U),this.u!==null||this.R||(w.J=b,b=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Nc(this,w,c),h=He(this.J),te(h,"RID",o),te(h,"CVER",22),this.G&&te(h,"X-HTTP-Session-Id",this.G),ir(this,h),b&&(this.R?c="headers="+Qn(bc(b))+"&"+c:this.u&&zi(h,this.u,b)),$i(this.h,w),this.Ra&&te(h,"TYPE","init"),this.S?(te(h,"$req",c),te(h,"SID","null"),w.U=!0,Mi(w,h,null)):Mi(w,h,c),this.I=2}}else this.I==3&&(o?Vc(this,o):this.i.length==0||fc(this.h)||Vc(this))};function Vc(o,c){var h;c?h=c.l:h=o.V++;const f=He(o.J);te(f,"SID",o.M),te(f,"RID",h),te(f,"AID",o.K),ir(o,f),o.u&&o.o&&zi(f,o.u,o.o),h=new gt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=Nc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),$i(o.h,h),Mi(h,f,c)}function ir(o,c){o.H&&Xr(o.H,function(h,f){te(c,f,h)}),o.l&&Xr({},function(h,f){te(c,f,h)})}function Nc(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var w=o.i;let q=-1;for(;;){const pe=["count="+h];q==-1?h>0?(q=w[0].g,pe.push("ofs="+q)):q=0:pe.push("ofs="+q);let X=!0;for(let _e=0;_e<h;_e++){var b=w[_e].g;const Ge=w[_e].map;if(b-=q,b<0)q=Math.max(0,w[_e].g-100),X=!1;else try{b="req"+b+"_"||"";try{var k=Ge instanceof Map?Ge:Object.entries(Ge);for(const[Qt,vt]of k){let It=vt;l(vt)&&(It=Vi(vt)),pe.push(b+Qt+"="+encodeURIComponent(It))}}catch(Qt){throw pe.push(b+"type="+encodeURIComponent("_badmap")),Qt}}catch{f&&f(Ge)}}if(X){k=pe.join("&");break e}}k=void 0}return o=o.i.splice(0,h),c.G=o,k}function Lc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;xe||g(),M||(xe(),M=!0),E.add(c,o),o.A=0}}function Gi(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Wn(d(o.Da,o),Mc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,xc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Wn(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,De(10),as(this),xc(this))};function Wi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function xc(o){o.g=new gt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=He(o.na);te(c,"RID","rpc"),te(c,"SID",o.M),te(c,"AID",o.K),te(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&te(c,"TO",o.ia),te(c,"TYPE","xmlhttp"),ir(o,c),o.u&&o.o&&zi(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ss(He(c)),h.u=null,h.R=!0,lc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,as(this),Gi(this),De(19))};function ls(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Oc(o,c){var h=null;if(o.g==c){ls(o),Wi(o),o.g=null;var f=2}else if(Ui(o.h,c))h=c.G,pc(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var w=o.D;f=ts(),Pe(f,new sc(f,h)),cs(o)}else Lc(o);else if(w=c.m,w==3||w==0&&c.X>0||!(f==1&&tm(o,c)||f==2&&Gi(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),w){case 1:Kt(o,5);break;case 4:Kt(o,10);break;case 3:Kt(o,6);break;default:Kt(o,2)}}}function Mc(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function Kt(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const w=!f;f=new yt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Yn(f,"https"),ss(f),w?Qf(f.toString(),h):Jf(f.toString(),h)}else De(2);o.I=0,o.l&&o.l.pa(c),Fc(o),kc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Fc(o){if(o.I=0,o.ja=[],o.l){const c=gc(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ja,c),D(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function Bc(o,c,h){var f=h instanceof yt?He(h):new yt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Xn(f,f.u);else{var w=a.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const b=new yt(null);f&&Yn(b,f),c&&(b.g=c),w&&Xn(b,w),h&&(b.h=h),f=b}return h=o.G,c=o.wa,h&&c&&te(f,h,c),te(f,"VER",o.ka),ir(o,f),f}function Uc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new se(new qi({ab:h})):new se(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $c(){}n=$c.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function us(){}us.prototype.g=function(o,c){return new Oe(o,c)};function Oe(o,c){Ae.call(this),this.g=new Dc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!y(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new gn(this)}p(Oe,Ae),Oe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Hi(this.g)},Oe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Vi(o),o=h);c.i.push(new $f(c.Ya++,o)),c.I==3&&cs(c)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Hi(this.g),delete this.g,Oe.Z.N.call(this)};function jc(o){Ni.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(jc,Ni);function qc(){Li.call(this),this.status=1}p(qc,Li);function gn(o){this.g=o}p(gn,$c),gn.prototype.ra=function(){Pe(this.g,"a")},gn.prototype.qa=function(o){Pe(this.g,new jc(o))},gn.prototype.pa=function(o){Pe(this.g,new qc)},gn.prototype.oa=function(){Pe(this.g,"b")},us.prototype.createWebChannel=us.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,Rh=function(){return new us},Sh=function(){return ts()},bh=Ht,To={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ns.NO_ERROR=0,ns.TIMEOUT=8,ns.HTTP_ERROR=6,ws=ns,ic.COMPLETE="complete",Ah=ic,ec.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.J,cr=ec,se.prototype.listenOnce=se.prototype.K,se.prototype.getLastError=se.prototype.Ha,se.prototype.getLastErrorCode=se.prototype.ya,se.prototype.getStatus=se.prototype.ca,se.prototype.getResponseJson=se.prototype.La,se.prototype.getResponseText=se.prototype.la,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Fa,wh=se}).apply(typeof fs<"u"?fs:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
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
 */let Bn="12.13.0";function Uy(n){Bn=n}/**
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
 */const on=new zo("@firebase/firestore");function yn(){return on.logLevel}function L(n,...e){if(on.logLevel<=W.DEBUG){const t=e.map(ra);on.debug(`Firestore (${Bn}): ${n}`,...t)}}function ht(n,...e){if(on.logLevel<=W.ERROR){const t=e.map(ra);on.error(`Firestore (${Bn}): ${n}`,...t)}}function an(n,...e){if(on.logLevel<=W.WARN){const t=e.map(ra);on.warn(`Firestore (${Bn}): ${n}`,...t)}}function ra(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ch(n,r,t)}function Ch(n,e,t){let r=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ht(r),new Error(r)}function J(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ch(e,s,r)}function $(n,e){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ph{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $y{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class jy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qy{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Ph(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class zy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Hy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new zy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _l{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _l(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new _l(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Wy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class sa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Wy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function z(n,e){return n<e?-1:n>e?1:0}function wo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return no(s)===no(i)?z(s,i):no(s)?1:-1}return z(n.length,e.length)}const Ky=55296,Qy=57343;function no(n){const e=n.charCodeAt(0);return e>=Ky&&e<=Qy}function kn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const El="__name__";class We{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return We.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof We?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=We.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return z(e.length,t.length)}static compareSegments(e,t){const r=We.isNumericId(e),s=We.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?We.extractNumericId(e).compare(We.extractNumericId(t)):wo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pt.fromString(e.substring(4,e.length-2))}}class ee extends We{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const Jy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends We{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return Jy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===El}static keyField(){return new Te([El])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ee.fromString(e))}static fromName(e){return new O(ee.fromString(e).popFirst(5))}static empty(){return new O(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ee(e.slice()))}}/**
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
 */function Dh(n,e,t){if(!t)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Yy(n,e,t,r){if(e===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vl(n){if(!O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Il(n){if(O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function kh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ri(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Fe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ri(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function Fr(n,e){if(!kh(n))throw new N(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new N(S.INVALID_ARGUMENT,t);return!0}/**
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
 */const Tl=-62135596800,wl=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*wl);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Tl)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wl}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fr(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:de("string",ne._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ne(0,0))}static max(){return new U(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const wr=-1;function Xy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new Vt(s,O.empty(),e)}function Zy(n){return new Vt(n.readTime,n.key,wr)}class Vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vt(U.min(),O.empty(),wr)}static max(){return new Vt(U.max(),O.empty(),wr)}}function e_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
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
 */const t_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class n_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Un(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==t_)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++l,l===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new C((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function r_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $n(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class si{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}si.ce=-1;/**
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
 */const ia=-1;function ii(n){return n==null}function Fs(n){return n===0&&1/n==-1/0}function s_(n){return typeof n=="number"&&Number.isInteger(n)&&!Fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Vh="";function i_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Al(e)),e=o_(n.get(t),e);return Al(e)}function o_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Vh:t+="";break;default:t+=i}}return t}function Al(n){return n+Vh+""}/**
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
 */function bl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ut(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Nh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ms(this.root,e,this.comparator,!0)}}class ms{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ie.RED,this.left=s??Ie.EMPTY,this.right=i??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ie(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ie.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sl(this.data.getIterator())}getIteratorFrom(e){return new Sl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Sl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Me{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Me([])}unionWith(e){let t=new ye(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lh("Invalid base64 string: "+i):i}}(e);return new we(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const a_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=a_.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
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
 */const xh="server_timestamp",Oh="__type__",Mh="__previous_value__",Fh="__local_write_time__";function oa(n){return(n?.mapValue?.fields||{})[Oh]?.stringValue===xh}function oi(n){const e=n.mapValue.fields[Mh];return oa(e)?oi(e):e}function Ar(n){const e=Nt(n.mapValue.fields[Fh].timestampValue);return new ne(e.seconds,e.nanos)}/**
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
 */class c_{constructor(e,t,r,s,i,a,l,u,d,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=p}}const Ao="(default)";class br{constructor(e,t){this.projectId=e,this.database=t||Ao}static empty(){return new br("","")}get isDefaultDatabase(){return this.database===Ao}isEqual(e){return e instanceof br&&e.projectId===this.projectId&&e.database===this.database}}function l_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new br(n.options.projectId,e)}/**
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
 */const Bh="__type__",u_="__max__",ps={mapValue:{}},Uh="__vector__",Bs="value";function xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oa(n)?4:d_(n)?9007199254740991:h_(n)?10:11:F(28295,{value:n})}function Ze(n,e){if(n===e)return!0;const t=xt(n);if(t!==xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ar(n).isEqual(Ar(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Nt(s.timestampValue),l=Nt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Lt(s.bytesValue).isEqual(Lt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ae(s.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ae(s.integerValue)===ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ae(s.doubleValue),l=ae(i.doubleValue);return a===l?Fs(a)===Fs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return kn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(bl(a)!==bl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ze(a[u],l[u])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function Sr(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function Vn(n,e){if(n===e)return 0;const t=xt(n),r=xt(e);if(t!==r)return z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ae(i.integerValue||i.doubleValue),u=ae(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Rl(n.timestampValue,e.timestampValue);case 4:return Rl(Ar(n),Ar(e));case 5:return wo(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Lt(i),u=Lt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=z(l[d],u[d]);if(m!==0)return m}return z(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=z(ae(i.latitude),ae(a.latitude));return l!==0?l:z(ae(i.longitude),ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Cl(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},u=a.fields||{},d=l[Bs]?.arrayValue,m=u[Bs]?.arrayValue,p=z(d?.values?.length||0,m?.values?.length||0);return p!==0?p:Cl(d,m)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ps.mapValue&&a===ps.mapValue)return 0;if(i===ps.mapValue)return 1;if(a===ps.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let p=0;p<u.length&&p<m.length;++p){const T=wo(u[p],m[p]);if(T!==0)return T;const R=Vn(l[u[p]],d[m[p]]);if(R!==0)return R}return z(u.length,m.length)}(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function Rl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=Nt(n),r=Nt(e),s=z(t.seconds,r.seconds);return s!==0?s:z(t.nanos,r.nanos)}function Cl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Vn(t[s],r[s]);if(i)return i}return z(t.length,r.length)}function Nn(n){return bo(n)}function bo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Nt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Lt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=bo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${bo(t.fields[a])}`;return s+"}"}(n.mapValue):F(61005,{value:n})}function As(n){switch(xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oi(n);return e?16+As(e):16;case 5:return 2*n.stringValue.length;case 6:return Lt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+As(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ut(r.fields,(i,a)=>{s+=i.length+As(a)}),s}(n.mapValue);default:throw F(13486,{value:n})}}function Pl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function So(n){return!!n&&"integerValue"in n}function aa(n){return!!n&&"arrayValue"in n}function Dl(n){return!!n&&"nullValue"in n}function kl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bs(n){return!!n&&"mapValue"in n}function h_(n){return(n?.mapValue?.fields||{})[Bh]?.stringValue===Uh}function mr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ut(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=mr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=mr(n.arrayValue.values[t]);return e}return{...n}}function d_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===u_}/**
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
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mr(t)}setAll(e){let t=Te.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=mr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());bs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];bs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ut(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Le(mr(this.value))}}function $h(n){const e=[];return Ut(n.fields,(t,r)=>{const s=new Te([t]);if(bs(r)){const i=$h(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Me(e)}/**
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
 */class Re{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Re(e,0,U.min(),U.min(),U.min(),Le.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,U.min(),U.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,U.min(),U.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Us{constructor(e,t){this.position=e,this.inclusive=t}}function Vl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=Vn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Rr{constructor(e,t="asc"){this.field=e,this.dir=t}}function f_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class jh{}class he extends jh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new p_(e,t,r):t==="array-contains"?new __(e,r):t==="in"?new E_(e,r):t==="not-in"?new v_(e,r):t==="array-contains-any"?new I_(e,r):new he(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new g_(e,r):new y_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vn(t,this.value)):t!==null&&xt(this.value)===xt(t)&&this.matchesComparison(Vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ze extends jh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ze(e,t)}matches(e){return qh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qh(n){return n.op==="and"}function zh(n){return m_(n)&&qh(n)}function m_(n){for(const e of n.filters)if(e instanceof ze)return!1;return!0}function Ro(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Nn(n.value);if(zh(n))return n.filters.map(e=>Ro(e)).join(",");{const e=n.filters.map(t=>Ro(t)).join(",");return`${n.op}(${e})`}}function Hh(n,e){return n instanceof he?function(r,s){return s instanceof he&&r.op===s.op&&r.field.isEqual(s.field)&&Ze(r.value,s.value)}(n,e):n instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Hh(a,s.filters[l]),!0):!1}(n,e):void F(19439)}function Gh(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${Nn(t.value)}`}(n):n instanceof ze?function(t){return t.op.toString()+" {"+t.getFilters().map(Gh).join(" ,")+"}"}(n):"Filter"}class p_ extends he{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class g_ extends he{constructor(e,t){super(e,"in",t),this.keys=Wh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class y_ extends he{constructor(e,t){super(e,"not-in",t),this.keys=Wh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Wh(n,e){return(e.arrayValue?.values||[]).map(t=>O.fromName(t.referenceValue))}class __ extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return aa(t)&&Sr(t.arrayValue,this.value)}}class E_ extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Sr(this.value.arrayValue,t)}}class v_ extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(Sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Sr(this.value.arrayValue,t)}}class I_ extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!aa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Sr(this.value.arrayValue,r))}}/**
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
 */class T_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Ll(n,e=null,t=[],r=[],s=null,i=null,a=null){return new T_(n,e,t,r,s,i,a)}function ca(n){const e=$(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ro(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ii(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Nn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Nn(r)).join(",")),e.Te=t}return e.Te}function la(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!f_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nl(n.startAt,e.startAt)&&Nl(n.endAt,e.endAt)}function Co(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class jn{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function w_(n,e,t,r,s,i,a,l){return new jn(n,e,t,r,s,i,a,l)}function ai(n){return new jn(n)}function xl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function A_(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Kh(n){return n.collectionGroup!==null}function pr(n){const e=$(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ye(Te.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Rr(i,r))}),t.has(Te.keyField().canonicalString())||e.Ie.push(new Rr(Te.keyField(),r))}return e.Ie}function Qe(n){const e=$(n);return e.Ee||(e.Ee=b_(e,pr(n))),e.Ee}function b_(n,e){if(n.limitType==="F")return Ll(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Rr(s.field,i)});const t=n.endAt?new Us(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Us(n.startAt.position,n.startAt.inclusive):null;return Ll(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Po(n,e){const t=n.filters.concat([e]);return new jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function S_(n,e){const t=n.explicitOrderBy.concat([e]);return new jn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Do(n,e,t){return new jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ci(n,e){return la(Qe(n),Qe(e))&&n.limitType===e.limitType}function Qh(n){return`${ca(Qe(n))}|lt:${n.limitType}`}function _n(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gh(s)).join(", ")}]`),ii(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Nn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Nn(s)).join(",")),`Target(${r})`}(Qe(n))}; limitType=${n.limitType})`}function li(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of pr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=Vl(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,pr(r),s)||r.endAt&&!function(a,l,u){const d=Vl(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,pr(r),s))}(n,e)}function R_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jh(n){return(e,t)=>{let r=!1;for(const s of pr(n)){const i=C_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function C_(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Vn(u,d):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
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
 */class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ut(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Nh(this.inner)}size(){return this.innerSize}}/**
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
 */const P_=new re(O.comparator);function dt(){return P_}const Yh=new re(O.comparator);function lr(...n){let e=Yh;for(const t of n)e=e.insert(t.key,t);return e}function Xh(n){let e=Yh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xt(){return gr()}function Zh(){return gr()}function gr(){return new hn(n=>n.toString(),(n,e)=>n.isEqual(e))}const D_=new re(O.comparator),k_=new ye(O.comparator);function H(...n){let e=k_;for(const t of n)e=e.add(t);return e}const V_=new ye(z);function N_(){return V_}/**
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
 */function ua(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fs(e)?"-0":e}}function ed(n){return{integerValue:""+n}}function L_(n,e){return s_(e)?ed(e):ua(n,e)}/**
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
 */class ui{constructor(){this._=void 0}}function x_(n,e,t){return n instanceof $s?function(s,i){const a={fields:{[Oh]:{stringValue:xh},[Fh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&oa(i)&&(i=oi(i)),i&&(a.fields[Mh]=i),{mapValue:a}}(t,e):n instanceof Cr?nd(n,e):n instanceof Pr?rd(n,e):function(s,i){const a=td(s,i),l=Ol(a)+Ol(s.Ae);return So(a)&&So(s.Ae)?ed(l):ua(s.serializer,l)}(n,e)}function O_(n,e,t){return n instanceof Cr?nd(n,e):n instanceof Pr?rd(n,e):t}function td(n,e){return n instanceof js?function(r){return So(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $s extends ui{}class Cr extends ui{constructor(e){super(),this.elements=e}}function nd(n,e){const t=sd(e);for(const r of n.elements)t.some(s=>Ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class Pr extends ui{constructor(e){super(),this.elements=e}}function rd(n,e){let t=sd(e);for(const r of n.elements)t=t.filter(s=>!Ze(s,r));return{arrayValue:{values:t}}}class js extends ui{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ol(n){return ae(n.integerValue||n.doubleValue)}function sd(n){return aa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function M_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Cr&&s instanceof Cr||r instanceof Pr&&s instanceof Pr?kn(r.elements,s.elements,Ze):r instanceof js&&s instanceof js?Ze(r.Ae,s.Ae):r instanceof $s&&s instanceof $s}(n.transform,e.transform)}class F_{constructor(e,t){this.version=e,this.transformResults=t}}class ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ss(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class hi{}function id(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new di(n.key,ke.none()):new Br(n.key,n.data,ke.none());{const t=n.data,r=Le.empty();let s=new ye(Te.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new $t(n.key,r,new Me(s.toArray()),ke.none())}}function B_(n,e,t){n instanceof Br?function(s,i,a){const l=s.value.clone(),u=Fl(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof $t?function(s,i,a){if(!Ss(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Fl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(od(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function yr(n,e,t,r){return n instanceof Br?function(i,a,l,u){if(!Ss(i.precondition,a))return l;const d=i.value.clone(),m=Bl(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof $t?function(i,a,l,u){if(!Ss(i.precondition,a))return l;const d=Bl(i.fieldTransforms,u,a),m=a.data;return m.setAll(od(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return Ss(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function U_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=td(r.transform,s||null);i!=null&&(t===null&&(t=Le.empty()),t.set(r.field,i))}return t||null}function Ml(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&kn(r,s,(i,a)=>M_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Br extends hi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $t extends hi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function od(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Fl(n,e,t){const r=new Map;J(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,O_(a,l,t[s]))}return r}function Bl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,x_(i,a,e))}return r}class di extends hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $_ extends hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class j_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&B_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=id(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&kn(this.mutations,e.mutations,(t,r)=>Ml(t,r))&&kn(this.baseMutations,e.baseMutations,(t,r)=>Ml(t,r))}}class ha{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return D_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ha(e,t,r,s)}}/**
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
 */class q_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class z_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var le,Q;function H_(n){switch(n){case S.OK:return F(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function ad(n){if(n===void 0)return ht("GRPC error has no .code"),S.UNKNOWN;switch(n){case le.OK:return S.OK;case le.CANCELLED:return S.CANCELLED;case le.UNKNOWN:return S.UNKNOWN;case le.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case le.INTERNAL:return S.INTERNAL;case le.UNAVAILABLE:return S.UNAVAILABLE;case le.UNAUTHENTICATED:return S.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case le.NOT_FOUND:return S.NOT_FOUND;case le.ALREADY_EXISTS:return S.ALREADY_EXISTS;case le.PERMISSION_DENIED:return S.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case le.ABORTED:return S.ABORTED;case le.OUT_OF_RANGE:return S.OUT_OF_RANGE;case le.UNIMPLEMENTED:return S.UNIMPLEMENTED;case le.DATA_LOSS:return S.DATA_LOSS;default:return F(39323,{code:n})}}(Q=le||(le={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function G_(){return new TextEncoder}/**
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
 */const W_=new Pt([4294967295,4294967295],0);function Ul(n){const e=G_().encode(n),t=new Th;return t.update(e),new Uint8Array(t.digest())}function $l(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pt([t,r],0),new Pt([s,i],0)]}class da{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ur(`Invalid padding: ${t}`);if(r<0)throw new ur(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ur(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ur(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Pt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Pt.fromNumber(r)));return s.compare(W_)===1&&(s=new Pt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ul(e),[r,s]=$l(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new da(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Ul(e),[r,s]=$l(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ur{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,$r.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ur(U.min(),s,new re(z),dt(),H())}}class $r{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $r(r,t,H(),H(),H())}}/**
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
 */class Rs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class cd{constructor(e,t){this.targetId=e,this.Ce=t}}class ld{constructor(e,t,r=we.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class jl{constructor(){this.ve=0,this.Fe=ql(),this.Me=we.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=H(),t=H(),r=H();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:i})}}),new $r(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=ql()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class K_{constructor(e){this.Ge=e,this.ze=new Map,this.je=dt(),this.Je=gs(),this.He=gs(),this.Ze=new re(z)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Co(i))if(r===0){const a=new O(i.path);this.et(t,a,Re.newNoDocument(a,U.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Lt(r).toUint8Array()}catch(u){if(u instanceof Lh)return an("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new da(a,s,i)}catch(u){return an(u instanceof ur?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Co(l.target)){const u=new O(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Re.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=H();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Ur(e,t,this.Ze,this.je,r);return this.je=dt(),this.Je=gs(),this.He=gs(),this.Ze=new re(z),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new jl,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ye(z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ye(z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new jl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function gs(){return new re(O.comparator)}function ql(){return new re(O.comparator)}const Q_={asc:"ASCENDING",desc:"DESCENDING"},J_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Y_={and:"AND",or:"OR"};class X_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ko(n,e){return n.useProto3Json||ii(e)?e:{value:e}}function qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ud(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Z_(n,e){return qs(n,e.toTimestamp())}function Je(n){return J(!!n,49232),U.fromTimestamp(function(t){const r=Nt(t);return new ne(r.seconds,r.nanos)}(n))}function fa(n,e){return Vo(n,e).canonicalString()}function Vo(n,e){const t=function(s){return new ee(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hd(n){const e=ee.fromString(n);return J(gd(e),10190,{key:e.toString()}),e}function No(n,e){return fa(n.databaseId,e.path)}function ro(n,e){const t=hd(e);if(t.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(fd(t))}function dd(n,e){return fa(n.databaseId,e)}function eE(n){const e=hd(n);return e.length===4?ee.emptyPath():fd(e)}function Lo(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fd(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function zl(n,e,t){return{name:No(n,e),fields:t.value.mapValue.fields}}function tE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(J(m===void 0||typeof m=="string",58123),we.fromBase64String(m||"")):(J(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),we.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const m=d.code===void 0?S.UNKNOWN:ad(d.code);return new N(m,d.message||"")}(a);t=new ld(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ro(n,r.document.name),i=Je(r.document.updateTime),a=r.document.createTime?Je(r.document.createTime):U.min(),l=new Le({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];t=new Rs(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ro(n,r.document),i=r.readTime?Je(r.readTime):U.min(),a=Re.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Rs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ro(n,r.document),i=r.removedTargetIds||[];t=new Rs([],i,s,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new z_(s,i),l=r.targetId;t=new cd(l,a)}}return t}function nE(n,e){let t;if(e instanceof Br)t={update:zl(n,e.key,e.value)};else if(e instanceof di)t={delete:No(n,e.key)};else if(e instanceof $t)t={update:zl(n,e.key,e.data),updateMask:hE(e.fieldMask)};else{if(!(e instanceof $_))return F(16599,{dt:e.type});t={verify:No(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof $s)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Cr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof js)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw F(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Z_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)}(n,e.precondition)),t}function rE(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Je(s.updateTime):Je(i);return a.isEqual(U.min())&&(a=Je(i)),new F_(a,s.transformResults||[])}(t,e))):[]}function sE(n,e){return{documents:[dd(n,e.path)]}}function iE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=dd(n,s);const i=function(d){if(d.length!==0)return pd(ze.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(T){return{field:En(T.field),direction:cE(T.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ko(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function oE(n){let e=eE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(p){const T=md(p);return T instanceof ze&&zh(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(T=>function(D){return new Rr(vn(D.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(T))}(t.orderBy));let l=null;t.limit&&(l=function(p){let T;return T=typeof p=="object"?p.value:p,ii(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(p){const T=!!p.before,R=p.values||[];return new Us(R,T)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const T=!p.before,R=p.values||[];return new Us(R,T)}(t.endAt)),w_(e,s,a,i,l,"F",u,d)}function aE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function md(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=vn(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vn(t.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vn(t.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=vn(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return he.create(vn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ze.create(t.compositeFilter.filters.map(r=>md(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function cE(n){return Q_[n]}function lE(n){return J_[n]}function uE(n){return Y_[n]}function En(n){return{fieldPath:n.canonicalString()}}function vn(n){return Te.fromServerFormat(n.fieldPath)}function pd(n){return n instanceof he?function(t){if(t.op==="=="){if(kl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(Dl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(kl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(Dl(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:lE(t.op),value:t.value}}}(n):n instanceof ze?function(t){const r=t.getFilters().map(s=>pd(s));return r.length===1?r[0]:{compositeFilter:{op:uE(t.op),filters:r}}}(n):F(54877,{filter:n})}function hE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function yd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class it{constructor(e,t,r,s,i=U.min(),a=U.min(),l=we.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new it(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dE{constructor(e){this.yt=e}}function fE(n){const e=oE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Do(e,e.limit,"L"):e}/**
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
 */class mE{constructor(){this.bn=new pE}addToCollectionParentIndex(e,t){return this.bn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Vt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class pE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ye(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ye(ee.comparator)).toArray()}}/**
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
 */const Hl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_d=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(_d,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
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
 */class Ot{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ot(0)}static ar(){return new Ot(-1)}}/**
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
 */const Gl="LruGarbageCollector",gE=1048576;function Wl([n,e],[t,r]){const s=z(n,t);return s===0?z(e,r):s}class yE{constructor(e){this.Pr=e,this.buffer=new ye(Wl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Wl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _E{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){L(Gl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$n(t)?L(Gl,"Ignoring IndexedDB error during garbage collection: ",t):await Un(t)}await this.Ar(3e5)})}}class EE{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(si.ce);const r=new yE(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Hl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hl):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),yn()<=W.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function vE(n,e){return new EE(n,e)}/**
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
 */class IE{constructor(){this.changes=new hn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class wE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&yr(r.mutation,s,Me.empty(),ne.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,t,r=H()){const s=Xt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=lr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Xt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,H()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=dt();const a=gr(),l=function(){return gr()}();return t.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof $t)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),yr(m.mutation,d,m.mutation.getFieldMask(),ne.now())):a.set(d.key,Me.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>l.set(d,new TE(m,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=gr();let s=new re((a,l)=>a-l),i=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Me.empty();m=l.applyToLocalView(d,m),r.set(u,m);const p=(s.get(l.batchId)||H()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,p=Zh();m.forEach(T=>{if(!i.has(T)){const R=id(t.get(T),r.get(T));R!==null&&p.set(T,R),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return A_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(Xt());let l=wr,u=i;return a.next(d=>C.forEach(d,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?C.resolve():this.remoteDocumentCache.getEntry(e,m).next(T=>{u=u.insert(m,T)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,H())).next(m=>({batchId:l,changes:Xh(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=lr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=lr();return this.indexManager.getCollectionParents(e,i).next(l=>C.forEach(l,u=>{const d=function(p,T){return new jn(T,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((p,T)=>{a=a.insert(p,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Re.newInvalidDocument(m)))});let l=lr();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&yr(m.mutation,d,Me.empty(),ne.now()),li(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class AE{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return C.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Je(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:fE(s.bundledQuery),readTime:Je(s.readTime)}}(t)),C.resolve()}}/**
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
 */class bE{constructor(){this.overlays=new re(O.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xt();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=Xt(),i=t.length+1,a=new O(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new re((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Xt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Xt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return C.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new q_(t,r));let i=this.Lr.get(t);i===void 0&&(i=H(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class SE{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class ma{constructor(){this.kr=new ye(Ee.Kr),this.qr=new ye(Ee.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ee(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ee(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new O(new ee([])),r=new Ee(t,e),s=new Ee(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new O(new ee([])),r=new Ee(t,e),s=new Ee(t,e+1);let i=H();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ee(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return O.comparator(e.key,t.key)||z(e.Jr,t.Jr)}static Ur(e,t){return z(e.Jr,t.Jr)||O.comparator(e.key,t.key)}}/**
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
 */class RE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ye(Ee.Kr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new j_(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new Ee(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?ia:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ee(t,0),s=new Ee(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const l=this.Zr(a.Jr);i.push(l)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(z);return t.forEach(s=>{const i=new Ee(s,0),a=new Ee(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],l=>{r=r.add(l.Jr)})}),C.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const a=new Ee(new O(i),0);let l=new ye(z);return this.Hr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Jr)),!0)},a),C.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return C.forEach(t.mutations,s=>{const i=new Ee(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new Ee(t,0),s=this.Hr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class CE{constructor(e){this.ti=e,this.docs=function(){return new re(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=dt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=dt();const a=t.path,l=new O(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||e_(Zy(m),r)<=0||(s.has(m.key)||li(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){F(9500)}ni(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new PE(this)}getSize(e){return C.resolve(this.size)}}class PE extends IE{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class DE{constructor(e){this.persistence=e,this.ri=new hn(t=>ca(t),la),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new ma,this.targetCount=0,this.oi=Ot._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ot(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
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
 */class Ed{constructor(e,t){this._i={},this.overlays={},this.ai=new si(0),this.ui=!1,this.ui=!0,this.ci=new SE,this.referenceDelegate=e(this),this.li=new DE(this),this.indexManager=new mE,this.remoteDocumentCache=function(s){return new CE(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new dE(t),this.Pi=new AE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new RE(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new kE(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return C.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class kE extends n_{constructor(e){super(),this.currentSequenceNumber=e}}class pa{constructor(e){this.persistence=e,this.Ri=new ma,this.Ai=null}static Vi(e){return new pa(e)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,r=>{const s=O.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,U.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class zs{constructor(e,t){this.persistence=e,this.fi=new hn(r=>i_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vE(this,t)}static Vi(e,t){return new zs(e,t)}Ti(){}Ii(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return C.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?C.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=As(e.data.value)),t}wr(e,t,r){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ga{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=H(),s=H();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ga(e,t.fromCache,r,s)}}/**
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
 */class VE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NE{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Em()?8:r_(Ce())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new VE;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(yn()<=W.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",_n(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(yn()<=W.DEBUG&&L("QueryEngine","Query:",_n(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(yn()<=W.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",_n(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):C.resolve())}gs(e,t){if(xl(t))return C.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Do(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=H(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ss(t,l);return this.bs(t,d,a,u.readTime)?this.gs(e,Do(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,r,s){return xl(t)||s.isEqual(U.min())?C.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,r,s)?C.resolve(null):(yn()<=W.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_n(t)),this.Ds(e,a,t,Xy(s,wr)).next(l=>l))})}Ss(e,t){let r=new ye(Jh(e));return t.forEach((s,i)=>{li(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return yn()<=W.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",_n(t)),this.fs.getDocumentsMatchingQuery(e,t,Vt.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ya="LocalStore",LE=3e8;class xE{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new re(z),this.Fs=new hn(i=>ca(i),la),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wE(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function OE(n,e,t,r){return new xE(n,e,t,r)}async function vd(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=H();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function ME(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const p=d.batch,T=p.keys();let R=C.resolve();return T.forEach(D=>{R=R.next(()=>m.getEntry(u,D)).next(V=>{const P=d.docVersions.get(D);J(P!==null,48541),V.version.compareTo(P)<0&&(p.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),m.addEntry(V)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=H();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Id(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function FE(n,e){const t=$(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((m,p)=>{const T=s.get(p);if(!T)return;l.push(t.li.removeMatchingKeys(i,m.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,m.addedDocuments,p)));let R=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(we.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(p,R),function(V,P,j){return V.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=LE?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(T,R,m)&&l.push(t.li.updateTargetData(i,R))});let u=dt(),d=H();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(BE(i,a,e.documentUpdates).next(m=>{u=m.Bs,d=m.Ls})),!r.isEqual(U.min())){const m=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return C.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.vs=s,i))}function BE(n,e,t){let r=H(),s=H();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=dt();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):L(ya,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function UE(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ia),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $E(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new it(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function xo(n,e,t){const r=$(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!$n(a))throw a;L(ya,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Kl(n,e,t){const r=$(n);let s=U.min(),i=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const p=$(u),T=p.Fs.get(m);return T!==void 0?C.resolve(p.vs.get(T)):p.li.getTargetData(d,m)}(r,a,Qe(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:H())).next(l=>(jE(r,R_(e),l),{documents:l,ks:i})))}function jE(n,e,t){let r=n.Ms.get(e)||U.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class Ql{constructor(){this.activeTargetIds=N_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qE{constructor(){this.vo=new Ql,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ql,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zE{Mo(e){}shutdown(){}}/**
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
 */const Jl="ConnectivityMonitor";class Yl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){L(Jl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){L(Jl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ys=null;function Oo(){return ys===null?ys=function(){return 268435456+Math.round(2147483648*Math.random())}():ys++,"0x"+ys.toString(16)}/**
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
 */const so="RestConnection",HE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class GE{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Ao?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Oo(),l=this.Qo(e,t.toUriEncodedString());L(so,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:d}=new URL(l),m=Lr(d);return this.zo(e,l,u,r,m).then(p=>(L(so,`Received RPC '${e}' ${a}: `,p),p),p=>{throw an(so,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=HE[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class WE{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const be="WebChannelConnection",or=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class An extends GE{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!An.c_){const e=Sh();or(e,bh.STAT_EVENT,t=>{t.stat===To.PROXY?L(be,"STAT_EVENT: detected buffering proxy"):t.stat===To.NOPROXY&&L(be,"STAT_EVENT: detected no buffering proxy")}),An.c_=!0}}zo(e,t,r,s,i){const a=Oo();return new Promise((l,u)=>{const d=new wh;d.setWithCredentials(!0),d.listenOnce(Ah.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ws.NO_ERROR:const p=d.getResponseJson();L(be,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case ws.TIMEOUT:L(be,`RPC '${e}' ${a} timed out`),u(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case ws.HTTP_ERROR:const T=d.getStatus();if(L(be,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const D=R?.error;if(D&&D.status&&D.message){const V=function(j){const G=j.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN}(D.status);u(new N(V,D.message))}else u(new N(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new N(S.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(be,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);L(be,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)})}T_(e,t,r){const s=Oo(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");L(be,`Creating RPC '${e}' stream ${s}: ${d}`,l);const m=a.createWebChannel(d,l);this.I_(m);let p=!1,T=!1;const R=new WE({Jo:D=>{T?L(be,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(p||(L(be,`Opening RPC '${e}' stream ${s} transport.`),m.open(),p=!0),L(be,`RPC '${e}' stream ${s} sending:`,D),m.send(D))},Ho:()=>m.close()});return or(m,cr.EventType.OPEN,()=>{T||(L(be,`RPC '${e}' stream ${s} transport opened.`),R.i_())}),or(m,cr.EventType.CLOSE,()=>{T||(T=!0,L(be,`RPC '${e}' stream ${s} transport closed`),R.o_(),this.E_(m))}),or(m,cr.EventType.ERROR,D=>{T||(T=!0,an(be,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),R.o_(new N(S.UNAVAILABLE,"The operation could not be completed")))}),or(m,cr.EventType.MESSAGE,D=>{if(!T){const V=D.data[0];J(!!V,16349);const P=V,j=P?.error||P[0]?.error;if(j){L(be,`RPC '${e}' stream ${s} received error:`,j);const G=j.status;let Y=function(M){const E=le[M];if(E!==void 0)return ad(E)}(G),ve=j.message;G==="NOT_FOUND"&&ve.includes("database")&&ve.includes("does not exist")&&ve.includes(this.databaseId.database)&&an(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Y===void 0&&(Y=S.INTERNAL,ve="Unknown error status: "+G+" with message "+j.message),T=!0,R.o_(new N(Y,ve)),m.close()}else L(be,`RPC '${e}' stream ${s} received:`,V),R.__(V)}}),An.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Rh()}}/**
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
 */function KE(n){return new An(n)}function io(){return typeof document<"u"?document:null}/**
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
 */function fi(n){return new X_(n,!0)}/**
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
 */An.c_=!1;class Td{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Xl="PersistentStream";class wd{constructor(e,t,r,s,i,a,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Td(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(ht(t.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return L(Xl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(L(Xl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QE extends wd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=tE(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Je(a.readTime):U.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Lo(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Co(u)?{documents:sE(i,u)}:{query:iE(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ud(i,a.resumeToken);const d=ko(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=qs(i,a.snapshotVersion.toTimestamp());const d=ko(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=aE(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Lo(this.serializer),t.removeTarget=e,this.K_(t)}}class JE extends wd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=rE(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Lo(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>nE(this.serializer,r))};this.K_(t)}}/**
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
 */class YE{}class XE extends YE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Vo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(S.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Vo(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function ZE(n,e,t,r){return new XE(n,e,t,r)}class ev{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ht(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const et="RemoteStore";class tv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Ot(1e3),this.Va=new Ot(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{dn(this)&&(L(et,"Restarting streams for network reachability change."),await async function(u){const d=$(u);d.da.add(4),await jr(d),d.ga.set("Unknown"),d.da.delete(4),await mi(d)}(this))})}),this.ga=new ev(r,s)}}async function mi(n){if(dn(n))for(const e of n.ma)await e(!0)}async function jr(n){for(const e of n.ma)await e(!1)}function Mo(n,e){return n.Ea.get(e)||void 0}function Ad(n,e){const t=$(n),r=Mo(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=function(l,u){const d=Mo(l,u);d!==void 0&&l.Ra.delete(d);const m=function(T,R){return R%2!=0?T.Va.next():T.Aa.next()}(l,u);return l.Ea.set(u,m),l.Ra.set(m,u),m}(t,e.targetId);L(et,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new it(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),Ia(t)?va(t):qn(t).O_()&&Ea(t,i)}function _a(n,e){const t=$(n),r=qn(t),s=Mo(t,e);L(et,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&bd(t,s),t.Ia.size===0&&(r.O_()?r.L_():dn(t)&&t.ga.set("Unknown"))}function Ea(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void L(et,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}qn(n).Z_(e)}function bd(n,e){n.pa.$e(e),qn(n).X_(e)}function va(n){n.pa=new K_({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):H()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),qn(n).start(),n.ga.ua()}function Ia(n){return dn(n)&&!qn(n).x_()&&n.Ia.size>0}function dn(n){return $(n).da.size===0}function Sd(n){n.pa=void 0}async function nv(n){n.ga.set("Online")}async function rv(n){n.Ia.forEach((e,t)=>{Ea(n,e)})}async function sv(n,e){Sd(n),Ia(n)?(n.ga.ha(e),va(n)):n.ga.set("Unknown")}async function iv(n,e,t){if(n.ga.set("Online"),e instanceof ld&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(n,e)}catch(r){L(et,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hs(n,r)}else if(e instanceof Rs?n.pa.Xe(e):e instanceof cd?n.pa.st(e):n.pa.tt(e),!t.isEqual(U.min()))try{const r=await Id(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.pa.Tt(a);l.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const p=i.Ia.get(m);p&&i.Ia.set(m,p.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,m)=>{const p=i.Ia.get(d);if(!p)return;i.Ia.set(d,p.withResumeToken(we.EMPTY_BYTE_STRING,p.snapshotVersion)),bd(i,d);const T=new it(p.target,d,m,p.sequenceNumber);Ea(i,T)});const u=function(m,p){const T=new Map;p.targetChanges.forEach((D,V)=>{const P=m.Ra.get(V);P!==void 0&&T.set(P,D)});let R=new re(z);return p.targetMismatches.forEach((D,V)=>{const P=m.Ra.get(D);P!==void 0&&(R=R.insert(P,V))}),new Ur(p.snapshotVersion,T,R,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){L(et,"Failed to raise snapshot:",r),await Hs(n,r)}}async function Hs(n,e,t){if(!$n(e))throw e;n.da.add(1),await jr(n),n.ga.set("Offline"),t||(t=()=>Id(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(et,"Retrying IndexedDB access"),await t(),n.da.delete(1),await mi(n)})}function Rd(n,e){return e().catch(t=>Hs(n,t,e))}async function pi(n){const e=$(n),t=Mt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ia;for(;ov(e);)try{const s=await UE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,av(e,s)}catch(s){await Hs(e,s)}Cd(e)&&Pd(e)}function ov(n){return dn(n)&&n.Ta.length<10}function av(n,e){n.Ta.push(e);const t=Mt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Cd(n){return dn(n)&&!Mt(n).x_()&&n.Ta.length>0}function Pd(n){Mt(n).start()}async function cv(n){Mt(n).ra()}async function lv(n){const e=Mt(n);for(const t of n.Ta)e.ea(t.mutations)}async function uv(n,e,t){const r=n.Ta.shift(),s=ha.from(r,e,t);await Rd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await pi(n)}async function hv(n,e){e&&Mt(n).Y_&&await async function(r,s){if(function(a){return H_(a)&&a!==S.ABORTED}(s.code)){const i=r.Ta.shift();Mt(r).B_(),await Rd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pi(r)}}(n,e),Cd(n)&&Pd(n)}async function Zl(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),L(et,"RemoteStore received new credentials");const r=dn(t);t.da.add(3),await jr(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await mi(t)}async function dv(n,e){const t=$(n);e?(t.da.delete(2),await mi(t)):e||(t.da.add(2),await jr(t),t.ga.set("Unknown"))}function qn(n){return n.ya||(n.ya=function(t,r,s){const i=$(t);return i.sa(),new QE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:nv.bind(null,n),Yo:rv.bind(null,n),t_:sv.bind(null,n),H_:iv.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),Ia(n)?va(n):n.ga.set("Unknown")):(await n.ya.stop(),Sd(n))})),n.ya}function Mt(n){return n.wa||(n.wa=function(t,r,s){const i=$(t);return i.sa(),new JE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:cv.bind(null,n),t_:hv.bind(null,n),ta:lv.bind(null,n),na:uv.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await pi(n)):(await n.wa.stop(),n.Ta.length>0&&(L(et,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
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
 */class Ta{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Ta(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(n,e){if(ht("AsyncQueue",`${e}: ${n}`),$n(n))return new N(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class bn{static emptySet(e){return new bn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=lr(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new bn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class eu{constructor(){this.Sa=new re(O.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ln{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Ln(e,t,bn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ci(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fv{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class mv{constructor(){this.queries=tu(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=tu(),i.forEach((a,l)=>{for(const u of l.va)u.onError(r)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function tu(){return new hn(n=>Qh(n),ci)}async function Dd(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new fv,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=wa(a,`Initialization of query '${_n(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&Aa(t)}async function kd(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function pv(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.va)l.Na(s)&&(r=!0);a.Ca=s}}r&&Aa(t)}function gv(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function Aa(n){n.xa.forEach(e=>{e.next()})}var Fo,nu;(nu=Fo||(Fo={})).Ba="default",nu.Cache="cache";class Vd{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ln(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=Ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Fo.Cache}}/**
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
 */class Nd{constructor(e){this.key=e}}class Ld{constructor(e){this.key=e}}class yv{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=H(),this.mutatedKeys=H(),this.iu=Jh(e),this.su=new bn(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new eu,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const T=s.get(m),R=li(this.query,p)?p:null,D=!!T&&this.mutatedKeys.has(T.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;T&&R?T.data.isEqual(R.data)?D!==V&&(r.track({type:3,doc:R}),P=!0):this.uu(T,R)||(r.track({type:2,doc:R}),P=!0,(u&&this.iu(R,u)>0||d&&this.iu(R,d)<0)&&(l=!0)):!T&&R?(r.track({type:0,doc:R}),P=!0):T&&!R&&(r.track({type:1,doc:T}),P=!0,(u||d)&&(l=!0)),P&&(R?(a=a.add(R),i=V?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{su:a,au:r,bs:l,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((m,p)=>function(R,D){const V=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:P})}};return V(R)-V(D)}(m.type,p.type)||this.iu(m.doc,p.doc)),this.cu(r),s=s??!1;const l=t&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,d=u!==this.nu;return this.nu=u,a.length!==0||d?{snapshot:new Ln(this.query,e.su,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new eu,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=H(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const t=[];return e.forEach(r=>{this.ru.has(r)||t.push(new Ld(r))}),this.ru.forEach(r=>{e.has(r)||t.push(new Nd(r))}),t}Tu(e){this.tu=e.ks,this.ru=H();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return Ln.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ba="SyncEngine";class _v{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ev{constructor(e){this.key=e,this.Eu=!1}}class vv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new hn(l=>Qh(l),ci),this.Vu=new Map,this.du=new Set,this.mu=new re(O.comparator),this.fu=new Map,this.gu=new ma,this.pu={},this.yu=new Map,this.wu=Ot.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Iv(n,e,t=!0){const r=Ud(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await xd(r,e,t,!0),s}async function Tv(n,e){const t=Ud(n);await xd(t,e,!0,!1)}async function xd(n,e,t,r){const s=await $E(n.localStore,Qe(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await wv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ad(n.remoteStore,s),l}async function wv(n,e,t,r,s){n.bu=(p,T,R)=>async function(V,P,j,G){let Y=P.view._u(j);Y.bs&&(Y=await Kl(V.localStore,P.query,!1).then(({documents:E})=>P.view._u(E,Y)));const ve=G&&G.targetChanges.get(P.targetId),xe=G&&G.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(Y,V.isPrimaryClient,ve,xe);return su(V,P.targetId,M.hu),M.snapshot}(n,p,T,R);const i=await Kl(n.localStore,e,!0),a=new yv(e,i.ks),l=a._u(i.documents),u=$r.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);su(n,t,d.hu);const m=new _v(e,t,a);return n.Au.set(e,m),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),d.snapshot}async function Av(n,e,t){const r=$(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(a=>!ci(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&_a(r.remoteStore,s.targetId),Bo(r,s.targetId)}).catch(Un)):(Bo(r,s.targetId),await xo(r.localStore,s.targetId,!0))}async function bv(n,e){const t=$(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),_a(t.remoteStore,r.targetId))}async function Sv(n,e,t){const r=Nv(n);try{const s=await function(a,l){const u=$(a),d=ne.now(),m=l.reduce((R,D)=>R.add(D.key),H());let p,T;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=dt(),V=H();return u.xs.getEntries(R,m).next(P=>{D=P,D.forEach((j,G)=>{G.isValidDocument()||(V=V.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,D)).next(P=>{p=P;const j=[];for(const G of l){const Y=U_(G,p.get(G.key).overlayedDocument);Y!=null&&j.push(new $t(G.key,Y,$h(Y.value.mapValue),ke.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,j,l)}).next(P=>{T=P;const j=P.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(R,P.batchId,j)})}).then(()=>({batchId:T.batchId,changes:Xh(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.pu[a.currentUser.toKey()];d||(d=new re(z)),d=d.insert(l,u),a.pu[a.currentUser.toKey()]=d}(r,s.batchId,t),await qr(r,s.changes),await pi(r.remoteStore)}catch(s){const i=wa(s,"Failed to persist write");t.reject(i)}}async function Od(n,e){const t=$(n);try{const r=await FE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.fu.get(i);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Eu=!0:s.modifiedDocuments.size>0?J(a.Eu,14607):s.removedDocuments.size>0&&(J(a.Eu,42227),a.Eu=!1))}),await qr(t,r,e)}catch(r){await Un(r)}}function ru(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach((i,a)=>{const l=a.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=$(a);u.onlineState=l;let d=!1;u.queries.forEach((m,p)=>{for(const T of p.va)T.Oa(l)&&(d=!0)}),d&&Aa(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rv(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let a=new re(O.comparator);a=a.insert(i,Re.newNoDocument(i,U.min()));const l=H().add(i),u=new Ur(U.min(),new Map,new re(z),a,l);await Od(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Sa(r)}else await xo(r.localStore,e,!1).then(()=>Bo(r,e,t)).catch(Un)}async function Cv(n,e){const t=$(n),r=e.batch.batchId;try{const s=await ME(t.localStore,e);Fd(t,r,null),Md(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qr(t,s)}catch(s){await Un(s)}}async function Pv(n,e,t){const r=$(n);try{const s=await function(a,l){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(J(p!==null,37113),m=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);Fd(r,e,t),Md(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qr(r,s)}catch(s){await Un(s)}}function Md(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function Fd(n,e,t){const r=$(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Bo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(r=>{n.gu.containsKey(r)||Bd(n,r)})}function Bd(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(_a(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),Sa(n))}function su(n,e,t){for(const r of t)r instanceof Nd?(n.gu.addReference(r.key,e),Dv(n,r)):r instanceof Ld?(L(ba,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||Bd(n,r.key)):F(19791,{Cu:r})}function Dv(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(L(ba,"New document in limbo: "+t),n.du.add(r),Sa(n))}function Sa(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new O(ee.fromString(e)),r=n.wu.next();n.fu.set(r,new Ev(t)),n.mu=n.mu.insert(t,r),Ad(n.remoteStore,new it(Qe(ai(t.path)),r,"TargetPurposeLimboResolution",si.ce))}}async function qr(n,e,t){const r=$(n),s=[],i=[],a=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{a.push(r.bu(u,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=ga.Es(u.targetId,d);i.push(m)}}))}),await Promise.all(a),r.Ru.H_(s),await async function(u,d){const m=$(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(d,T=>C.forEach(T.Ts,R=>m.persistence.referenceDelegate.addReference(p,T.targetId,R)).next(()=>C.forEach(T.Is,R=>m.persistence.referenceDelegate.removeReference(p,T.targetId,R)))))}catch(p){if(!$n(p))throw p;L(ya,"Failed to update sequence numbers: "+p)}for(const p of d){const T=p.targetId;if(!p.fromCache){const R=m.vs.get(T),D=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(D);m.vs=m.vs.insert(T,V)}}}(r.localStore,i))}async function kv(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){L(ba,"User change. New user:",e.toKey());const r=await vd(t.localStore,e);t.currentUser=e,function(i,a){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new N(S.CANCELLED,a))})}),i.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qr(t,r.Ns)}}function Vv(n,e){const t=$(n),r=t.fu.get(e);if(r&&r.Eu)return H().add(r.key);{let s=H();const i=t.Vu.get(e);if(!i)return s;for(const a of i){const l=t.Au.get(a);s=s.unionWith(l.view.ou)}return s}}function Ud(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Od.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rv.bind(null,e),e.Ru.H_=pv.bind(null,e.eventManager),e.Ru.Du=gv.bind(null,e.eventManager),e}function Nv(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pv.bind(null,e),e}class Gs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fi(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return OE(this.persistence,new NE,e.initialUser,this.serializer)}xu(e){return new Ed(pa.Vi,this.serializer)}Mu(e){return new qE}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gs.provider={build:()=>new Gs};class Lv extends Gs{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){J(this.persistence.referenceDelegate instanceof zs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _E(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new Ed(r=>zs.Vi(r,t),this.serializer)}}class Uo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ru(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kv.bind(null,this.syncEngine),await dv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mv}()}createDatastore(e){const t=fi(e.databaseInfo.databaseId),r=KE(e.databaseInfo);return ZE(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new tv(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ru(this.syncEngine,t,0),function(){return Yl.v()?new Yl:new zE}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,m){const p=new vv(s,i,a,l,u,d);return m&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=$(t);L(et,"RemoteStore shutting down."),r.da.add(5),await jr(r),r.fa.shutdown(),r.ga.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Uo.provider={build:()=>new Uo};/**
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
 */class $d{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ft="FirestoreClient";class xv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=sa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(Ft,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(Ft,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oo(n,e){n.asyncQueue.verifyOperationInProgress(),L(Ft,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function iu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ov(n);L(Ft,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Zl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Zl(e.remoteStore,s)),n._onlineComponents=e}async function Ov(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(Ft,"Using user provided OfflineComponentProvider");try{await oo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;an("Error using user provided cache. Falling back to memory cache: "+t),await oo(n,new Gs)}}else L(Ft,"Using default OfflineComponentProvider"),await oo(n,new Lv(void 0));return n._offlineComponents}async function jd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(Ft,"Using user provided OnlineComponentProvider"),await iu(n,n._uninitializedComponentsProvider._online)):(L(Ft,"Using default OnlineComponentProvider"),await iu(n,new Uo))),n._onlineComponents}function Mv(n){return jd(n).then(e=>e.syncEngine)}async function $o(n){const e=await jd(n),t=e.eventManager;return t.onListen=Iv.bind(null,e.syncEngine),t.onUnlisten=Av.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Tv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bv.bind(null,e.syncEngine),t}function Fv(n,e,t,r){const s=new $d(r),i=new Vd(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>Dd(await $o(n),i)),()=>{s.Ku(),n.asyncQueue.enqueueAndForget(async()=>kd(await $o(n),i))}}function Bv(n,e,t={}){const r=new Dt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const m=new $d({next:T=>{m.Ku(),a.enqueueAndForget(()=>kd(i,p));const R=T.docs.has(l);!R&&T.fromCache?d.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&u&&u.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),p=new Vd(ai(l.path),m,{includeMetadataChanges:!0,Wa:!0});return Dd(i,p)}(await $o(n),n.asyncQueue,e,t,r)),r.promise}function Uv(n,e){const t=new Dt;return n.asyncQueue.enqueueAndForget(async()=>Sv(await Mv(n),e,t)),t.promise}/**
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
 */function qd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const $v="ComponentProvider",ou=new Map;function jv(n,e,t,r,s){return new c_(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,qd(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const zd="firestore.googleapis.com",au=!0;class cu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zd,this.ssl=au}else this.host=e.host,this.ssl=e.ssl??au;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_d;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gE)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $y;switch(r.type){case"firstParty":return new Hy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ou.get(t);r&&(L($v,"Removing Datastore"),ou.delete(t),r.terminate())}(this),Promise.resolve()}}function qv(n,e,t,r={}){n=Fe(n,gi);const s=Lr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Bu(`https://${l}`),i.host!==zd&&i.host!==l&&an("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!nn(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Se.MOCK_USER;else{d=dm(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Se(p)}n._authCredentials=new jy(new Ph(d,m))}}/**
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
 */class fn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fn(this.firestore,e,this._query)}}class ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ie(this.firestore,e,this._key)}toJSON(){return{type:ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Fr(t,ie._jsonSchema))return new ie(e,r||null,new O(ee.fromString(t.referencePath)))}}ie._jsonSchemaVersion="firestore/documentReference/1.0",ie._jsonSchema={type:de("string",ie._jsonSchemaVersion),referencePath:de("string")};class kt extends fn{constructor(e,t,r){super(e,t,ai(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ie(this.firestore,null,new O(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function Hd(n,e,...t){if(n=me(n),Dh("collection","path",e),n instanceof gi){const r=ee.fromString(e,...t);return Il(r),new kt(n,null,r)}{if(!(n instanceof ie||n instanceof kt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return Il(r),new kt(n.firestore,null,r)}}function jt(n,e,...t){if(n=me(n),arguments.length===1&&(e=sa.newId()),Dh("doc","path",e),n instanceof gi){const r=ee.fromString(e,...t);return vl(r),new ie(n,null,new O(r))}{if(!(n instanceof ie||n instanceof kt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return vl(r),new ie(n.firestore,n instanceof kt?n.converter:null,new O(r))}}/**
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
 */const lu="AsyncQueue";class uu{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Td(this,"async_queue_retry"),this.lc=()=>{const r=io();r&&L(lu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new Dt;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!$n(e))throw e;L(lu,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,ht("INTERNAL UNHANDLED ERROR: ",hu(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=Ta.createAndSchedule(this,e,t,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&F(47125,{Rc:hu(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function hu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ft extends gi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new uu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uu(e),this._firestoreClient=void 0,await e}}}function zv(n,e){const t=typeof n=="object"?n:qu(),r=typeof n=="string"?n:e,s=Go(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=um("firestore");i&&qv(s,...i)}return s}function yi(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Hv(n),n._firestoreClient}function Hv(n){const e=n._freezeSettings(),t=jv(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new xv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(we.fromBase64String(e))}catch(t){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fr(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:de("string",Be._jsonSchemaVersion),bytes:de("string")};/**
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
 */class _i{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ra{constructor(e){this._methodName=e}}/**
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
 */class Ye{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ye._jsonSchemaVersion}}static fromJSON(e){if(Fr(e,Ye._jsonSchema))return new Ye(e.latitude,e.longitude)}}Ye._jsonSchemaVersion="firestore/geoPoint/1.0",Ye._jsonSchema={type:de("string",Ye._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class qe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fr(e,qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new qe(e.vectorValues);throw new N(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:de("string",qe._jsonSchemaVersion),vectorValues:de("object")};/**
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
 */const Gv=/^__.*__$/;class Wv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,t,this.fieldTransforms):new Br(e,this.data,t,this.fieldTransforms)}}class Gd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new $t(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Wd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class Ca{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ca({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ws(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Wd(this.dataSource)&&Gv.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Kv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fi(e)}V(e,t,r,s=!1){return new Ca({dataSource:e,methodName:t,targetDoc:r,path:Te.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zr(n){const e=n._freezeSettings(),t=fi(n._databaseId);return new Kv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Pa(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);Da("Data must be an object, but it was:",a,r);const l=Jd(r,a);let u,d;if(i.merge)u=new Me(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const T=xn(e,p,t);if(!a.contains(T))throw new N(S.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Zd(m,T)||m.push(T)}u=new Me(m),d=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=a.fieldTransforms;return new Wv(new Le(l),u,d)}class Ei extends Ra{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ei}}function Kd(n,e,t,r){const s=n.V(1,e,t);Da("Data must be an object, but it was:",s,r);const i=[],a=Le.empty();Ut(r,(u,d)=>{const m=Xd(e,u,t);d=me(d);const p=s.Sc(m);if(d instanceof Ei)i.push(m);else{const T=Hr(d,p);T!=null&&(i.push(m),a.set(m,T))}});const l=new Me(i);return new Gd(a,l,s.fieldTransforms)}function Qd(n,e,t,r,s,i){const a=n.V(1,e,t),l=[xn(e,r,t)],u=[s];if(i.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)l.push(xn(e,i[T])),u.push(i[T+1]);const d=[],m=Le.empty();for(let T=l.length-1;T>=0;--T)if(!Zd(d,l[T])){const R=l[T];let D=u[T];D=me(D);const V=a.Sc(R);if(D instanceof Ei)d.push(R);else{const P=Hr(D,V);P!=null&&(d.push(R),m.set(R,P))}}const p=new Me(d);return new Gd(m,p,a.fieldTransforms)}function Qv(n,e,t,r=!1){return Hr(t,n.V(r?4:3,e))}function Hr(n,e){if(Yd(n=me(n)))return Da("Unsupported field value:",e,n),Jd(n,e);if(n instanceof Ra)return function(r,s){if(!Wd(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Hr(l,s.bc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return L_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ne.fromDate(r);return{timestampValue:qs(s.serializer,i)}}if(r instanceof ne){const i=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qs(s.serializer,i)}}if(r instanceof Ye)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:ud(s.serializer,r._byteString)};if(r instanceof ie){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qe)return function(a,l){const u=a instanceof qe?a.toArray():a;return{mapValue:{fields:{[Bh]:{stringValue:Uh},[Bs]:{arrayValue:{values:u.map(m=>{if(typeof m!="number")throw l.Dc("VectorValues must only contain numeric values.");return ua(l.serializer,m)})}}}}}}(r,s);if(yd(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${ri(r)}`)}(n,e)}function Jd(n,e){const t={};return Nh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ut(n,(r,s)=>{const i=Hr(s,e.yc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Yd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof Ye||n instanceof Be||n instanceof ie||n instanceof Ra||n instanceof qe||yd(n))}function Da(n,e,t){if(!Yd(t)||!kh(t)){const r=ri(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function xn(n,e,t){if((e=me(e))instanceof _i)return e._internalPath;if(typeof e=="string")return Xd(n,e);throw Ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const Jv=new RegExp("[~\\*/\\[\\]]");function Xd(n,e,t){if(e.search(Jv)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _i(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ws(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new N(S.INVALID_ARGUMENT,l+n+u)}function Zd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Yv{convertValue(e,t="none"){switch(xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ut(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[Bs].arrayValue?.values?.map(r=>ae(r.doubleValue));return new qe(t)}convertGeoPoint(e){return new Ye(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=oi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ar(e));default:return null}}convertTimestamp(e){const t=Nt(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);J(gd(r),9688,{name:e});const s=new br(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||ht(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class ef extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,t)}}const du="@firebase/firestore",fu="4.14.1";/**
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
 */function mu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class tf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Xv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(xn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Xv extends tf{data(){return super.data()}}/**
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
 */function Zv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ka{}class nf extends ka{}function eI(n,e,...t){let r=[];e instanceof ka&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Na).length,l=i.filter(u=>u instanceof Va).length;if(a>1||a>0&&l>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Va extends nf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Va(e,t,r)}_apply(e){const t=this._parse(e);return rf(e._query,t),new fn(e.firestore,e.converter,Po(e._query,t))}_parse(e){const t=zr(e.firestore);return function(i,a,l,u,d,m,p){let T;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){gu(p,m);const D=[];for(const V of p)D.push(pu(u,i,V));T={arrayValue:{values:D}}}else T=pu(u,i,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||gu(p,m),T=Qv(l,a,p,m==="in"||m==="not-in");return he.create(d,m,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Na extends ka{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Na(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ze.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)rf(a,u),a=Po(a,u)}(e._query,t),new fn(e.firestore,e.converter,Po(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class La extends nf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new La(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rr(i,a)}(e._query,this._field,this._direction);return new fn(e.firestore,e.converter,S_(e._query,t))}}function tI(n,e="asc"){const t=e,r=xn("orderBy",n);return La._create(r,t)}function pu(n,e,t){if(typeof(t=me(t))=="string"){if(t==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kh(e)&&t.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!O.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pl(n,new O(r))}if(t instanceof ie)return Pl(n,t._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ri(t)}.`)}function gu(n,e){if(!Array.isArray(n)||n.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rf(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function xa(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class hr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tn extends tf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(xn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=tn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}tn._jsonSchemaVersion="firestore/documentSnapshot/1.0",tn._jsonSchema={type:de("string",tn._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class Cs extends tn{data(e={}){return super.data(e)}}class Sn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new hr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Cs(this._firestore,this._userDataWriter,r.key,r,new hr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Cs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Cs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:nI(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Sn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
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
 */Sn._jsonSchemaVersion="firestore/querySnapshot/1.0",Sn._jsonSchema={type:de("string",Sn._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};/**
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
 */class rI{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=zr(e)}set(e,t,r){this._verifyNotCommitted();const s=ao(e,this._firestore),i=xa(s.converter,t,r),a=Pa(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,ke.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=ao(e,this._firestore);let a;return a=typeof(t=me(t))=="string"||t instanceof _i?Qd(this._dataReader,"WriteBatch.update",i._key,t,r,s):Kd(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ao(e,this._firestore);return this._mutations=this._mutations.concat(new di(t._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ao(n,e){if((n=me(n)).firestore!==e)throw new N(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function sf(n){n=Fe(n,ie);const e=Fe(n.firestore,ft),t=yi(e);return Bv(t,n._key).then(r=>cf(e,n,r))}function sI(n,e,t){n=Fe(n,ie);const r=Fe(n.firestore,ft),s=xa(n.converter,e,t),i=zr(r);return Gr(r,[Pa(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ke.none())])}function Oa(n,e,t,...r){n=Fe(n,ie);const s=Fe(n.firestore,ft),i=zr(s);let a;return a=typeof(e=me(e))=="string"||e instanceof _i?Qd(i,"updateDoc",n._key,e,t,r):Kd(i,"updateDoc",n._key,e),Gr(s,[a.toMutation(n._key,ke.exists(!0))])}function of(n){return Gr(Fe(n.firestore,ft),[new di(n._key,ke.none())])}function af(n,e){const t=Fe(n.firestore,ft),r=jt(n),s=xa(n.converter,e),i=zr(n.firestore);return Gr(t,[Pa(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ke.exists(!1))]).then(()=>r)}function yu(n,...e){n=me(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||mu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(mu(e[r])){const d=e[r];e[r]=d.next?.bind(d),e[r+1]=d.error?.bind(d),e[r+2]=d.complete?.bind(d)}let i,a,l;if(n instanceof ie)a=Fe(n.firestore,ft),l=ai(n._key.path),i={next:d=>{e[r]&&e[r](cf(a,n,d))},error:e[r+1],complete:e[r+2]};else{const d=Fe(n,fn);a=Fe(d.firestore,ft),l=d._query;const m=new ef(a);i={next:p=>{e[r]&&e[r](new Sn(a,m,d,p))},error:e[r+1],complete:e[r+2]},Zv(n._query)}const u=yi(a);return Fv(u,l,s,i)}function Gr(n,e){const t=yi(n);return Uv(t,e)}function cf(n,e,t){const r=t.docs.get(e._key),s=new ef(n);return new tn(n,s,e._key,r,new hr(t.hasPendingWrites,t.fromCache),e.converter)}function iI(n){return n=Fe(n,ft),yi(n),new rI(n,e=>Gr(n,e))}(function(e,t=!0){Uy(Mn),Pn(new rn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ft(new qy(r.getProvider("auth-internal")),new Gy(a,r.getProvider("app-check-internal")),l_(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ct(du,fu,e),Ct(du,fu,"esm2020")})();const oI={apiKey:"AIzaSyBTz4iLKtBiZwHk-5pjNU1AFQF1zDhyTHI",authDomain:"gen-lang-client-0019812834.firebaseapp.com",projectId:"gen-lang-client-0019812834",storageBucket:"gen-lang-client-0019812834.firebasestorage.app",messagingSenderId:"677554753890",appId:"1:677554753890:web:2c13f2a2b0e019e5471c3b",measurementId:"G-ZMRMRWXQNV"},lf=ju(oI),Ma=Fy(lf),vi=zv(lf,"money"),aI=new nt,cI="1.1.0",lI=[{version:"1.1.0",date:"2026-05-18",label:"ฟีเจอร์ใหม่ + ปรับปรุง",changes:[{type:"new",text:'มุมมอง "แยก" ในรายการทั้งหมด — รายรับซ้าย รายจ่ายขวา พร้อมตาชั่งบอกว่าฝั่งไหนหนักกว่า'},{type:"new",text:"Timeline วันต่อวัน — รายการจัดกลุ่มตามวันที่ อ่านง่ายขึ้น"},{type:"new",text:'สลับดู "รอบบิล" กับ "ทั้งหมด" ในหน้ารายการ'},{type:"new",text:"Pro — เก็บรูปสลิปไว้ 3 เดือน คลิก 📷 ดูภาพย้อนหลังได้ทุกเมื่อ"},{type:"new",text:"แนวโน้มรายวัน — ช่วงวันที่แสดงตามรอบบิลที่ตั้งไว้ (วันตัดรอบ 1–31)"},{type:"new",text:"แสดงจำนวนสแกนที่เหลือวันนี้ — เปลี่ยนสีเตือนเมื่อใกล้หมด"},{type:"fix",text:"แก้ข้อมูลไม่บันทึก เพราะแอปต่อ Firestore ผิด database"},{type:"fix",text:"แก้หน้า login ไม่โชว์หลัง deploy ครั้งแรก"},{type:"fix",text:"แก้เพิ่มรายการต่อเนื่องไม่ได้ — หน้าจอค้างทำให้พิมพ์ไม่ได้"},{type:"fix",text:"แก้จำนวนสแกนที่เหลือแสดงผิดหลังรีเฟรชหน้า"},{type:"improve",text:"เปิดแอปครั้งถัดไปข้อมูลโชว์เกือบทันที — ไม่ต้องรอโหลดนาน"},{type:"improve",text:"กราฟแนวโน้มไม่แสดงแท่งว่างของวันในอนาคต"}]},{version:"1.0.0",date:"2026-05-17",label:"เปิดตัว",changes:[{type:"new",text:"Login ด้วย Google — ข้อมูลแยกต่อคน sync ทุกอุปกรณ์"},{type:"new",text:"UI ใหม่ทั้งหมด — light theme, clean layout"},{type:"new",text:"สแกนสลิปด้วย Gemini 2.5 Flash AI"},{type:"new",text:"Free plan — สแกนสลิปฟรี 5 ครั้ง/วัน"},{type:"new",text:"Pro plan — สแกนไม่จำกัด + เก็บรูปสลิป"},{type:"new",text:"แนวโน้มรายวันตามรอบบิลที่ตั้งไว้"}]}],_u={th:{locale:"th-TH","login.subtitle":`บันทึกรายรับ-รายจ่ายส่วนตัว
ข้อมูลของคุณ เห็นแค่คุณคนเดียว`,"login.google":"เข้าสู่ระบบด้วย Google","login.note":`ข้อมูลทั้งหมดเก็บในบัญชี Google ของคุณ
ไม่มีค่าใช้จ่าย · ปลอดภัย · ใช้ได้ทุกอุปกรณ์`,"sync.online":"ออนไลน์","sync.offline":"ออฟไลน์","sync.syncing":"กำลังซิงค์...","nav.dashboard":"ภาพรวม","nav.transactions":"รายการทั้งหมด","nav.analytics":"หมวดหมู่","nav.trends":"แนวโน้ม","page.dashboard":"ภาพรวม","page.transactions":"รายการทั้งหมด","page.analytics":"วิเคราะห์ตามหมวดหมู่","page.trends":"แนวโน้มรายวัน","sidebar.upgrade":"⭐ อัปเกรดเป็น Pro","sidebar.signout":"ออกจากระบบ","topbar.add":"+ เพิ่มรายการ","topbar.add.text":"เพิ่มรายการ","dash.balance":"ยอดคงเหลือ","dash.income":"รายรับ","dash.expense":"รายจ่าย","dash.expenseRatio":"สัดส่วนรายจ่าย","dash.recent":"รายการล่าสุด","dash.seeAll":"ดูทั้งหมด →","dash.empty":`ยังไม่มีรายการ
กด "เพิ่มรายการ" เพื่อเริ่มต้น`,"dash.balance.positive":"↑ คุณมีเงินเหลือ","dash.balance.negative":"↓ รายจ่ายเกินรายรับ","dash.balance.zero":"รายรับเท่ากับรายจ่าย","dash.ratio.income":"รายรับ","dash.ratio.expense":"รายจ่าย","tx.title":"รายการทั้งหมด","tx.viewList":"☰ รายการ","tx.viewSplit":"⊞ แยก","tx.rangeAll":"ทั้งหมด","tx.rangeCycle":"รอบบิล","tx.filterAllTypes":"ทุกประเภท","tx.filterIncome":"รายรับ","tx.filterExpense":"รายจ่าย","tx.filterAllCats":"ทุกหมวดหมู่","tx.noResults":"ไม่มีรายการที่ตรงกับเงื่อนไข","tx.noItems":"ไม่มีรายการ","tx.scale.income":"รายรับ","tx.scale.expense":"รายจ่าย","tx.scale.noItems":"ยังไม่มีรายการ","tx.scale.equal":"เท่ากันพอดี","tx.split.income":"💰 รายรับ","tx.split.expense":"💸 รายจ่าย","tx.split.emptyIncome":"ยังไม่มีรายรับ","tx.split.emptyExpense":"ยังไม่มีรายจ่าย","trends.titleFull":"แนวโน้มรายวัน ({start} – {end})","trends.freeNotice":"📊 Free plan ดูย้อนหลังได้สูงสุด 30 วัน — ","trends.upgradeBtn":"อัปเกรดเป็น Pro ↗","trends.chart.income":"รายรับ","trends.chart.expense":"รายจ่าย","analytics.expenseTitle":"รายจ่ายแยกตามหมวดหมู่","analytics.incomeTitle":"รายรับแยกตามหมวดหมู่","analytics.noData":"ยังไม่มีข้อมูล","modal.addTitle":"เพิ่มรายการใหม่","modal.editTitle":"แก้ไขรายการ","modal.scan":"📸 สแกนสลิป / แนบรูปภาพ","modal.prepareImg":"กำลังเตรียมรูปภาพ...","modal.analyzing":"กำลังวิเคราะห์...","modal.scanning":"กำลังสแกน...","modal.type.income":"↑ รายรับ","modal.type.expense":"↓ รายจ่าย","modal.amountLabel":"จำนวนเงิน (฿)","modal.amountPlaceholder":"0.00","modal.descLabel":"รายละเอียด","modal.descPlaceholder":"เช่น ค่าอาหารกลางวัน","modal.catLabel":"หมวดหมู่","modal.dateLabel":"วันและเวลา","modal.continueLabel":"บันทึกและเพิ่มรายการต่อไป","modal.addBtn":"เพิ่มรายการ","modal.editBtn":"บันทึกการแก้ไข","delete.title":"ยืนยันการลบ","delete.confirm":"คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?","delete.cancel":"ยกเลิก","delete.delete":"ลบ","settings.title":"ตั้งค่าระบบ","settings.cutoffLabel":"วันที่ตัดรอบบิลรายเดือน (1–31)","settings.cutoffHelp":"ตัวอย่าง: ตั้งเป็นวันที่ 25 → รอบนับตั้งแต่ 25 ของเดือนก่อน ถึง 24 ของเดือนนี้","settings.langLabel":"ภาษา / Language","settings.save":"บันทึกการตั้งค่า","settings.changelog":"🆕 ประวัติอัปเดต","settings.clearData":"🗑️ ล้างข้อมูลทั้งหมด","settings.signout":"🚪 ออกจากระบบ","upgrade.title":"⭐ อัปเกรดเป็น Pro","upgrade.free":"Free","upgrade.freePrice":"ฟรี","upgrade.recommended":"แนะนำ","upgrade.pro":"Pro","upgrade.proPrice":"79 ฿/เดือน","upgrade.pay":"ชำระเงิน 79 ฿/เดือน","upgrade.note":"ยกเลิกได้ทุกเมื่อ · ชำระผ่านบัตรเครดิต / PromptPay","bnav.dashboard":"ภาพรวม","bnav.transactions":"รายการ","bnav.analytics":"หมวดหมู่","bnav.trends":"แนวโน้ม","changelog.title":"ประวัติอัปเดต","cl.new":"ใหม่","cl.fix":"แก้ไข","cl.improve":"ปรับปรุง","loading.default":"กำลังโหลด...","loading.signingIn":"กำลังเข้าสู่ระบบ...","loading.payment":"กำลังประมวลผลการชำระเงิน...","loading.deleting":"กำลังลบ...","loading.clearing":"กำลังล้างข้อมูล...","toast.signInError":"เข้าสู่ระบบไม่สำเร็จ: ","toast.saved":"✅ บันทึกแล้ว","toast.editSaved":"✅ บันทึกการแก้ไขแล้ว","toast.deleted":"🗑️ ลบรายการแล้ว","toast.deleteError":"❌ ลบไม่สำเร็จ: ","toast.fieldRequired":"กรุณากรอกข้อมูลให้ครบถ้วน","toast.scanSuccess":"✅ สแกนสำเร็จโดย Gemini 2.5 Flash","toast.scanNoAmount":"⚠️ AI ไม่พบยอดเงินในสลิปนี้","toast.scanError":"⚠️ สแกนไม่ได้: {msg} — รูปยังแนบอยู่","toast.paymentSoon":"ระบบชำระเงินกำลังเปิดใช้งาน เร็วๆ นี้","toast.paymentSuccess":"🎉 อัปเกรดเป็น Pro สำเร็จ!","toast.paymentFail":"❌ ชำระเงินไม่สำเร็จ: ","toast.settingsSaved":"บันทึกตั้งค่าแล้ว ✅","toast.settingsLocal":"บันทึกในเครื่องแล้ว (ซิงค์ไม่ได้)","toast.clearAll":"🗑️ ล้างข้อมูลทั้งหมดแล้ว","toast.clearNone":"ไม่มีข้อมูลให้ล้าง","toast.langChanged":"🌐 เปลี่ยนภาษาแล้ว","toast.cutoffError":"กรุณากรอกวันที่ระหว่าง 1-31","confirm.clearAll":"ต้องการล้างข้อมูลทั้งหมดหรือไม่?","scan.pro":"Pro — สแกนสลิปได้ไม่จำกัด ⭐","scan.free.left":"Free — เหลือ {left}/{total} ครั้งวันนี้","scan.free.exhausted":"หมดแล้ววันนี้ — อัปเกรด Pro เพื่อสแกนต่อ","scan.limit.upgrade":`ใช้ครบ {total} ครั้งสแกนฟรีวันนี้แล้ว
อัปเกรดเป็น Pro เพื่อสแกนไม่จำกัด`,"slip.viewSlip":"ดูสลิป ↗","slip.viewBtn":"ดูสลิป","cat.salary":"เงินเดือน","cat.freelance":"ฟรีแลนซ์","cat.investment":"การลงทุน","cat.gift":"ของขวัญ/โบนัส","cat.other_in":"รายรับอื่นๆ","cat.food":"อาหาร","cat.transport":"เดินทาง","cat.shopping":"ช้อปปิ้ง","cat.utilities":"ค่าสาธารณูปโภค","cat.health":"สุขภาพ","cat.entertainment":"บันเทิง","cat.education":"การศึกษา","cat.rent":"ค่าเช่า/บ้าน","cat.other_ex":"รายจ่ายอื่นๆ","dev.switchFree":"🔧 Dev: Pro → สลับ Free","dev.switchPro":"🔧 Dev: Free → สลับ Pro","dev.toasted":"🔧 Dev: สลับเป็น "},en:{locale:"en-US","login.subtitle":`Track your personal income & expenses.
Your data, visible only to you.`,"login.google":"Sign in with Google","login.note":`All data stored in your Google account.
Free · Secure · All devices`,"sync.online":"Online","sync.offline":"Offline","sync.syncing":"Syncing...","nav.dashboard":"Overview","nav.transactions":"Transactions","nav.analytics":"Categories","nav.trends":"Trends","page.dashboard":"Overview","page.transactions":"All Transactions","page.analytics":"Category Analysis","page.trends":"Daily Trends","sidebar.upgrade":"⭐ Upgrade to Pro","sidebar.signout":"Sign Out","topbar.add":"+ Add","topbar.add.text":"Add","dash.balance":"Balance","dash.income":"Income","dash.expense":"Expenses","dash.expenseRatio":"Expense Ratio","dash.recent":"Recent Transactions","dash.seeAll":"See all →","dash.empty":`No transactions yet.
Press "Add" to get started.`,"dash.balance.positive":"↑ You have money left over","dash.balance.negative":"↓ Expenses exceed income","dash.balance.zero":"Income equals expenses","dash.ratio.income":"Income","dash.ratio.expense":"Expense","tx.title":"All Transactions","tx.viewList":"☰ List","tx.viewSplit":"⊞ Split","tx.rangeAll":"All","tx.rangeCycle":"Cycle","tx.filterAllTypes":"All Types","tx.filterIncome":"Income","tx.filterExpense":"Expense","tx.filterAllCats":"All Categories","tx.noResults":"No matching transactions","tx.noItems":"No transactions","tx.scale.income":"Income","tx.scale.expense":"Expenses","tx.scale.noItems":"No transactions yet","tx.scale.equal":"Perfectly balanced","tx.split.income":"💰 Income","tx.split.expense":"💸 Expenses","tx.split.emptyIncome":"No income yet","tx.split.emptyExpense":"No expenses yet","trends.titleFull":"Daily Trend ({start} – {end})","trends.freeNotice":"📊 Free plan: view up to 30 days — ","trends.upgradeBtn":"Upgrade to Pro ↗","trends.chart.income":"Income","trends.chart.expense":"Expenses","analytics.expenseTitle":"Expenses by Category","analytics.incomeTitle":"Income by Category","analytics.noData":"No data yet","modal.addTitle":"Add New Transaction","modal.editTitle":"Edit Transaction","modal.scan":"📸 Scan Slip / Attach Image","modal.prepareImg":"Preparing image...","modal.analyzing":"Analyzing...","modal.scanning":"Scanning...","modal.type.income":"↑ Income","modal.type.expense":"↓ Expense","modal.amountLabel":"Amount (฿)","modal.amountPlaceholder":"0.00","modal.descLabel":"Description","modal.descPlaceholder":"e.g. Lunch","modal.catLabel":"Category","modal.dateLabel":"Date & Time","modal.continueLabel":"Save and add another","modal.addBtn":"Add Transaction","modal.editBtn":"Save Changes","delete.title":"Confirm Delete","delete.confirm":"Are you sure you want to delete this transaction?","delete.cancel":"Cancel","delete.delete":"Delete","settings.title":"Settings","settings.cutoffLabel":"Monthly Billing Cutoff Day (1–31)","settings.cutoffHelp":"Example: Set to 25 → cycle runs from the 25th of last month to the 24th of this month","settings.langLabel":"Language / ภาษา","settings.save":"Save Settings","settings.changelog":"🆕 Update History","settings.clearData":"🗑️ Clear All Data","settings.signout":"🚪 Sign Out","upgrade.title":"⭐ Upgrade to Pro","upgrade.free":"Free","upgrade.freePrice":"Free","upgrade.recommended":"Recommended","upgrade.pro":"Pro","upgrade.proPrice":"฿79/month","upgrade.pay":"Pay ฿79/month","upgrade.note":"Cancel anytime · Pay by credit card / PromptPay","bnav.dashboard":"Overview","bnav.transactions":"Transactions","bnav.analytics":"Categories","bnav.trends":"Trends","changelog.title":"Update History","cl.new":"New","cl.fix":"Fix","cl.improve":"Improve","loading.default":"Loading...","loading.signingIn":"Signing in...","loading.payment":"Processing payment...","loading.deleting":"Deleting...","loading.clearing":"Clearing data...","toast.signInError":"Sign-in failed: ","toast.saved":"✅ Saved","toast.editSaved":"✅ Changes saved","toast.deleted":"🗑️ Transaction deleted","toast.deleteError":"❌ Delete failed: ","toast.fieldRequired":"Please fill in all fields","toast.scanSuccess":"✅ Scanned by Gemini 2.5 Flash","toast.scanNoAmount":"⚠️ AI did not find an amount in this slip","toast.scanError":"⚠️ Scan failed: {msg} — image still attached","toast.paymentSoon":"Payment system coming soon","toast.paymentSuccess":"🎉 Upgraded to Pro successfully!","toast.paymentFail":"❌ Payment failed: ","toast.settingsSaved":"Settings saved ✅","toast.settingsLocal":"Saved locally (sync failed)","toast.clearAll":"🗑️ All data cleared","toast.clearNone":"No data to clear","toast.langChanged":"🌐 Language changed","toast.cutoffError":"Please enter a day between 1 and 31","confirm.clearAll":"Clear all transaction data?","scan.pro":"Pro — Unlimited slip scans ⭐","scan.free.left":"Free — {left}/{total} scans remaining today","scan.free.exhausted":"No scans left today — upgrade to Pro","scan.limit.upgrade":`Used all {total} free scans today.
Upgrade to Pro for unlimited scanning.`,"slip.viewSlip":"View slip ↗","slip.viewBtn":"View slip","cat.salary":"Salary","cat.freelance":"Freelance","cat.investment":"Investment","cat.gift":"Gift/Bonus","cat.other_in":"Other Income","cat.food":"Food","cat.transport":"Transport","cat.shopping":"Shopping","cat.utilities":"Utilities","cat.health":"Health","cat.entertainment":"Entertainment","cat.education":"Education","cat.rent":"Rent/Home","cat.other_ex":"Other Expense","dev.switchFree":"🔧 Dev: Pro → Switch Free","dev.switchPro":"🔧 Dev: Free → Switch Pro","dev.toasted":"🔧 Dev: Switched to "}};let Ii=(()=>{const n=localStorage.getItem("mf_lang");return n==="th"||n==="en"?n:navigator.language?.toLowerCase().startsWith("th")?"th":"en"})();function co(){return Ii}function uI(n){n!=="th"&&n!=="en"||(Ii=n,localStorage.setItem("mf_lang",n))}function x(n,e){let t=_u[Ii]?.[n]??_u.th[n]??n;if(e)for(const[r,s]of Object.entries(e))t=t.replaceAll(`{${r}}`,s);return t}function On(){return x("locale")}function Eu(){document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=x(e.dataset.i18n)}),document.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=x(e.dataset.i18nHtml).replace(/\n/g,"<br>")}),document.querySelectorAll("[data-i18n-ph]").forEach(e=>{e.placeholder=x(e.dataset.i18nPh)});const n=document.getElementById("select-language");n&&(n.value=Ii)}const cn={income:[{id:"salary",emoji:"💼"},{id:"freelance",emoji:"💻"},{id:"investment",emoji:"📈"},{id:"gift",emoji:"🎁"},{id:"other_in",emoji:"💰"}],expense:[{id:"food",emoji:"🍜"},{id:"transport",emoji:"🚗"},{id:"shopping",emoji:"🛍️"},{id:"utilities",emoji:"💡"},{id:"health",emoji:"🏥"},{id:"entertainment",emoji:"🎮"},{id:"education",emoji:"📚"},{id:"rent",emoji:"🏠"},{id:"other_ex",emoji:"📦"}]};function Wr(n){return x(`cat.${n}`)||n}const hI={income:["#22c55e","#16a34a","#86efac","#4ade80","#bbf7d0"],expense:["#f43f5e","#e11d48","#fb7185","#f97316","#fb923c","#fbbf24","#a855f7","#8b5cf6","#6366f1"]},dI=new Map([...cn.income,...cn.expense].map(n=>[n.id,n]));function fI(n){const e=dI.get(n);return e?{...e,label:Wr(n)}:{label:n,emoji:"📌"}}const vu="pkey_test_YOUR_OMISE_PUBLIC_KEY",Ks=5,_r=["nunmongss@gmail.com"];let Er=localStorage.getItem("mf_dev_plan")||"pro",oe=JSON.parse(localStorage.getItem("mf_cache_tx")||"[]"),Fa="income",Ps=null,vr=null,dr="dashboard",ot=parseInt(localStorage.getItem("mf_cutoff_day"))||1,uf="list",hf="cycle",df="",ff=null,mf=null,Qs=null,tt=null,Bt={},ue={enabled:!0,notifyNear:!0,notifyOver:!0,nearThreshold:80,notifyMode:"always"},_s={},Zt=[],lo=new Set,Rn=null,Js=null,ge=null,ce="free",Ba=0,Ua="",at=null;const Kr=()=>Hd(vi,"users",ge.uid,"transactions"),$a=()=>jt(vi,"users",ge.uid),Dr=()=>Hd(vi,"users",ge.uid,"recurring"),mI=oe.length>0;mI&&(pf(),ct("syncing"),un());Sg(Ma,n=>{if(n)ge=n,pf(),yI(),ja(),ct("syncing"),oe.length>0&&un(),vI(),_I();else{ge=null,at&&(at(),at=null),Rn&&(Rn(),Rn=null),oe=[],Zt=[],Bt={},ce="free";const e=document.getElementById("btn-dev-toggle");e&&(e.style.display="none"),pI()}});function pI(){document.getElementById("login-screen").style.display="flex",document.getElementById("app-wrapper").style.display="none",ln()}function pf(){document.getElementById("login-screen").style.display="none",document.getElementById("app-wrapper").style.display=""}async function gI(){try{Ys(x("loading.signingIn")),await Wg(Ma,aI)}catch(n){ln(),K(x("toast.signInError")+n.message,"error")}}async function Iu(){at&&(at(),at=null),await Rg(Ma),localStorage.removeItem("mf_cache_tx")}function yI(){if(!ge)return;const n=document.getElementById("user-avatar"),e=document.getElementById("user-name");n&&(n.src=ge.photoURL||""),e&&(e.textContent=ge.displayName||ge.email||"");const t=document.getElementById("mobile-avatar"),r=document.getElementById("mobile-user-name");t&&(t.src=ge.photoURL||""),r&&(r.textContent=ge.displayName||ge.email||"")}function _I(){at&&at();const n=eI(Kr(),tI("date","desc"));ct("syncing"),at=yu(n,e=>{oe=e.docs.map(t=>({id:t.id,...t.data()})),EI(),wI(),un(),ct("online"),ln()},e=>{console.error("[Firestore] snapshot error:",e),ct("offline"),ln(),K("⚠️ Firestore error: "+e.message,"error",8e3)}),Rn&&Rn(),Rn=yu(Dr(),e=>{Zt=e.docs.map(t=>({id:t.id,...t.data()})),If(),UI()})}function EI(){const n=new Date;n.setDate(n.getDate()-90),oe.forEach(e=>{e.imageData&&new Date(e.createdAt)<n&&(e.imageData="",yf(e.id,{imageData:""}).catch(()=>{}))})}async function vI(){try{const n=await sf($a());if(n.exists()){const e=n.data();e.cutoff_day&&(ot=parseInt(e.cutoff_day)||1,localStorage.setItem("mf_cutoff_day",ot)),Ba=e.scan_count||0,Ua=e.scan_date||"",ce=_r.includes(ge?.email)?Er:e.plan||"free",Bt=e.budgets||{},ue=Object.assign({enabled:!0,notifyNear:!0,notifyOver:!0,nearThreshold:80,notifyMode:"always"},e.budgetSettings||{})}else _r.includes(ge?.email)&&(ce=Er);Ti(),NI(),_r.includes(ge?.email)&&ja()}catch(n){console.error("loadUserMeta error:",n)}}async function Qr(n){await sI($a(),n,{merge:!0})}function Ti(){const n=document.getElementById("plan-badge");n&&(n.textContent=ce==="pro"?"⭐ Pro":"Free",n.className="plan-badge "+ce);const e=document.getElementById("mobile-plan-badge");e&&(e.textContent=ce==="pro"?"⭐ Pro":"Free",e.className="plan-badge mobile-plan-badge "+ce);const t=document.getElementById("mobile-btn-updates");t&&(t.style.display=ce==="pro"?"none":"");const r=document.getElementById("btn-upgrade");r&&(r.style.display=ce==="pro"?"none":"");const s=document.getElementById("scan-info");if(s)if(ce==="pro")s.textContent=x("scan.pro"),s.className="scan-info-row pro";else{const i=new Date().toLocaleDateString("sv"),l=Ks-(Ua===i?Ba:0);s.textContent=l>0?x("scan.free.left",{left:l,total:Ks}):x("scan.free.exhausted");const u=l<=0?"exhausted":l===1?"danger":l<=3?"warning":"";s.className=`scan-info-row${u?" "+u:""}`}}async function gf(n){ct("syncing"),await af(Kr(),n)}async function yf(n,e){ct("syncing"),await Oa(jt(Kr(),n),e)}async function II(n){ct("syncing"),await of(jt(Kr(),n))}async function TI(){if(ce==="pro")return!0;const n=new Date().toLocaleDateString("sv"),e=await sf($a()),t=e.exists()?e.data():{},s=t.scan_date===n&&t.scan_count||0;if(s>=Ks)return qo(x("scan.limit.upgrade",{total:Ks})),!1;const i=s+1;return await Qr({scan_count:i,scan_date:n}),Ba=i,Ua=n,Ti(),!0}function Ys(n){n===void 0&&(n=x("loading.default")),document.getElementById("loading-text").textContent=n,document.getElementById("loading-overlay").classList.add("active")}function ln(){document.getElementById("loading-overlay").classList.remove("active")}function ct(n){const e=document.getElementById("sync-badge"),t=document.getElementById("sync-label");e.className="sync-badge "+n,t.textContent=x(`sync.${n}`)||n}function wI(){localStorage.setItem("mf_cache_tx",JSON.stringify(oe))}function fe(n){return"฿"+Number(n).toLocaleString("th-TH",{minimumFractionDigits:2,maximumFractionDigits:2})}function _f(n){const e=new Date(n);if(isNaN(e.getTime()))return n;const t=On();return e.toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"})+" · "+e.toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}function qt(n,e){return fI(e)}function Xs(n){const e=document.createElement("div");return e.appendChild(document.createTextNode(n)),e.innerHTML}function Tu(n,e,t){const r=new Date(n,e+1,0).getDate();return new Date(n,e,Math.min(t,r))}function Jr(){const n=new Date,e=n.getFullYear(),t=n.getMonth();let r=Tu(e,t,ot);if(n.getDate()<ot){const i=t===0?11:t-1,a=t===0?e-1:e;r=Tu(a,i,ot)}const s=new Date(r);return s.setMonth(s.getMonth()+1),{start:r,end:s}}function wi(n){if(!n)return!1;const e=new Date(n);if(isNaN(e.getTime()))return!1;const{start:t,end:r}=Jr();return e>=t&&e<r}function AI(){let n=0,e=0;const{start:t,end:r}=Jr();oe.forEach(i=>{if(!i.date)return;const a=new Date(i.date);isNaN(a.getTime())||a<t||a>=r||(i.type==="income"?n+=Number(i.amount):e+=Number(i.amount))});const s=i=>Math.round(i*100)/100;return{income:s(n),expense:s(e),balance:s(n-e)}}let wu;function K(n,e="success",t=3500){const r=document.getElementById("toast");r.textContent=n,r.className=`toast show ${e}`,clearTimeout(wu),wu=setTimeout(()=>{r.className="toast"},t)}function Au(n){dr=n,document.querySelectorAll(".view").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".bottom-nav-item").forEach(r=>r.classList.remove("active"));const e=document.getElementById(`view-${n}`);e&&e.classList.add("active");const t=document.getElementById(`nav-${n}`);t&&t.classList.add("active"),document.querySelectorAll(`.bottom-nav-item[data-view="${n}"]`).forEach(r=>r.classList.add("active")),document.getElementById("page-title").textContent=x(`page.${n}`)||n,un(),window.innerWidth<=900&&document.getElementById("sidebar").classList.remove("open")}function jo(n){const e=document.getElementById("input-category");e.innerHTML="",cn[n].forEach(t=>{const r=document.createElement("option");r.value=t.id,r.textContent=`${t.emoji} ${Wr(t.id)}`,e.appendChild(r)})}function bu(){const n=document.getElementById("filter-category");n.innerHTML=`<option value="all">${x("tx.filterAllCats")}</option>`,[...cn.income,...cn.expense].forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=`${e.emoji} ${Wr(e.id)}`,n.appendChild(t)})}function bI(){const{income:n,expense:e,balance:t}=AI();document.getElementById("total-balance").textContent=fe(t),document.getElementById("total-income").textContent=fe(n),document.getElementById("total-expense").textContent=fe(e);const r=n+e,s=r>0?e/r*100:0;document.getElementById("ratio-fill").style.width=s+"%",document.getElementById("ratio-income-label").textContent=`${x("dash.ratio.income")} ${(100-s).toFixed(0)}%`,document.getElementById("ratio-expense-label").textContent=`${x("dash.ratio.expense")} ${s.toFixed(0)}%`;const i=document.getElementById("balance-trend");t>0?i.textContent=x("dash.balance.positive"):t<0?i.textContent=x("dash.balance.negative"):i.textContent=x("dash.balance.zero");const a=[...oe].sort((l,u)=>new Date(u.date)-new Date(l.date)).slice(0,5);SI("recent-list",a,"empty-recent")}function SI(n,e,t){const r=document.getElementById(n);if(r.innerHTML="",e.length===0){const s=document.getElementById(t);s&&r.appendChild(s.cloneNode(!0));return}e.forEach(s=>{const i=qt(s.type,s.category),a=!!s.imageData,l=document.createElement("div");l.className="transaction-item",l.innerHTML=`
      <div class="tx-emoji">${i.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${Xs(s.description)}
          ${a?`<button class="tx-image-btn" data-id="${s.id}" title="ดูสลิป">📷</button>`:""}
        </div>
        <div class="tx-meta">${i.label} · ${_f(s.date)}</div>
      </div>
      <div class="tx-amount ${s.type}">
        ${s.type==="income"?"+":"-"}${fe(s.amount)}
      </div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${s.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${s.id}" title="ลบ">🗑️</button>
      </div>`,r.appendChild(l)}),r.querySelectorAll(".tx-btn-edit").forEach(s=>s.addEventListener("click",()=>Tf(s.dataset.id))),r.querySelectorAll(".tx-btn-delete").forEach(s=>s.addEventListener("click",()=>wf(s.dataset.id))),r.querySelectorAll(".tx-image-btn").forEach(s=>s.addEventListener("click",()=>Ef(s.dataset.id)))}function Ef(n){const e=oe.find(r=>r.id===n);if(!e?.imageData)return;const t=document.getElementById("slip-lightbox");document.getElementById("slip-lightbox-img").src=e.imageData,t.classList.add("active")}function Su(n){uf=n;const e=n==="split";document.getElementById("tx-list-view").style.display=e?"none":"",document.getElementById("tx-split-view").style.display=e?"":"none",document.getElementById("filter-type").style.display=e?"none":"",document.getElementById("btn-view-list").classList.toggle("active",!e),document.getElementById("btn-view-split").classList.toggle("active",e),Cn()}function RI(n,e){const t=document.getElementById("scale-beam"),r=document.getElementById("scale-pan-left"),s=document.getElementById("scale-pan-right"),i=document.getElementById("scale-verdict"),a=document.getElementById("scale-income-total"),l=document.getElementById("scale-expense-total");if(!t)return;const u=n.reduce((p,T)=>p+Number(T.amount),0),d=e.reduce((p,T)=>p+Number(T.amount),0),m=u+d;if(m===0)t.classList.add("idle"),r.classList.add("idle-left"),s.classList.add("idle-right"),t.style.transform="",r.style.transform="",s.style.transform="";else{t.classList.remove("idle"),r.classList.remove("idle-left"),s.classList.remove("idle-right");const p=(d-u)/m*22;t.style.transform=`rotate(${p}deg)`,r.style.transform=`rotate(${-p}deg)`,s.style.transform=`rotate(${-p}deg)`}if(r.classList.toggle("heavy",u>d),s.classList.toggle("heavy",d>u),a&&(a.textContent=fe(u)),l&&(l.textContent=fe(d)),i){const p=Math.abs(u-d);m===0?(i.textContent=x("tx.scale.noItems"),i.className="scale-verdict"):u>d?(i.textContent=`+${fe(p)}`,i.className="scale-verdict positive"):d>u?(i.textContent=`-${fe(p)}`,i.className="scale-verdict negative"):(i.textContent=x("tx.scale.equal"),i.className="scale-verdict")}}function Ru(n){hf=n,document.getElementById("btn-range-all").classList.toggle("active",n==="all"),document.getElementById("btn-range-cycle").classList.toggle("active",n==="cycle"),Cn()}function uo(n){return hf!=="cycle"?n:n.filter(e=>wi(e.date))}function ho(n){const e=df.trim().toLowerCase();return e?n.filter(t=>{const r=qt(t.type,t.category);return(t.description||"").toLowerCase().includes(e)||String(t.amount).includes(e)||(r.label||"").toLowerCase().includes(e)}):n}function Cn(){const n=document.getElementById("filter-category").value;if(uf==="split"){let e=uo(oe.filter(r=>r.type==="income")).sort((r,s)=>new Date(s.date)-new Date(r.date)),t=uo(oe.filter(r=>r.type==="expense")).sort((r,s)=>new Date(s.date)-new Date(r.date));n!=="all"&&(e=e.filter(r=>r.category===n),t=t.filter(r=>r.category===n)),e=ho(e),t=ho(t),RI(e,t),fo("split-income-list",e,"empty-split-income"),fo("split-expense-list",t,"empty-split-expense")}else{const e=document.getElementById("filter-type").value;let t=uo([...oe]).sort((r,s)=>new Date(s.date)-new Date(r.date));e!=="all"&&(t=t.filter(r=>r.type===e)),n!=="all"&&(t=t.filter(r=>r.category===n)),t=ho(t),fo("all-list",t,"empty-all")}}function fo(n,e,t){const r=document.getElementById(n);if(!r)return;if(r.innerHTML="",e.length===0){const i=document.getElementById(t);i?r.appendChild(i.cloneNode(!0)):r.innerHTML=`<div class="empty-state"><div class="empty-icon">📋</div><p>${x("tx.noItems")}</p></div>`;return}let s=null;e.forEach(i=>{const a=i.date?i.date.slice(0,10):"";if(a!==s){s=a;const p=document.createElement("div");p.className="timeline-date-header";const T=new Date(a+"T00:00:00");p.textContent=isNaN(T)?a:T.toLocaleDateString(On(),{weekday:"short",year:"numeric",month:"short",day:"numeric"}),r.appendChild(p)}const l=qt(i.type,i.category),u=document.createElement("div");u.className="transaction-item";const d=!!i.imageData,m=ce==="pro"&&d;u.innerHTML=`
      <div class="tx-emoji">${l.emoji}</div>
      <div class="tx-info">
        <div class="tx-desc">
          ${Xs(i.description)}
          ${d?`<button class="tx-image-btn" data-id="${i.id}" title="${x("slip.viewBtn")}">📷</button>`:""}
        </div>
        <div class="tx-meta">${l.label} · ${_f(i.date)}</div>
        ${m?`<button class="tx-slip-link" data-id="${i.id}"><img src="${i.imageData}" alt="slip" class="tx-slip-thumb" loading="lazy">${x("slip.viewSlip")}</button>`:""}
      </div>
      <div class="tx-amount ${i.type}">${i.type==="income"?"+":"-"}${fe(i.amount)}</div>
      <div class="tx-actions">
        <button class="tx-btn tx-btn-edit"   data-id="${i.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${i.id}" title="ลบ">🗑️</button>
      </div>`,r.appendChild(u)}),r.querySelectorAll(".tx-btn-edit").forEach(i=>i.addEventListener("click",()=>Tf(i.dataset.id))),r.querySelectorAll(".tx-btn-delete").forEach(i=>i.addEventListener("click",()=>wf(i.dataset.id))),r.querySelectorAll(".tx-image-btn, .tx-slip-link").forEach(i=>i.addEventListener("click",()=>Ef(i.dataset.id)))}function CI(){Cu("expense","category-breakdown"),Cu("income","income-breakdown")}function PI(){const n=document.getElementById("dailyTrendChart");if(!n)return;let e,t;const r=document.getElementById("trends-free-notice"),s=document.getElementById("trends-title"),i=new Date;i.setHours(23,59,59,999);const a=Jr(),l=new Date(a.end);l.setDate(l.getDate()-1);const u=On(),d=a.start.toLocaleDateString(u,{day:"numeric",month:"short"}),m=l.toLocaleDateString(u,{day:"numeric",month:"short"});if(ce==="pro")e=a.start,t=a.end>i?i:a.end,r&&(r.style.display="none"),s&&(s.textContent=x("trends.titleFull",{start:d,end:m}));else{t=new Date(i);const P=new Date(i);P.setDate(P.getDate()-29),P.setHours(0,0,0,0),e=a.start>=P?a.start:P,r&&(r.style.display=""),s&&(s.textContent=x("trends.titleFull",{start:d,end:m}))}const p=[],T=[],R=[],D=new Map;oe.forEach(P=>{const j=P.date?P.date.slice(0,10):null;if(!j)return;D.has(j)||D.set(j,{income:0,expense:0});const G=D.get(j);P.type==="income"?G.income+=Number(P.amount):G.expense+=Number(P.amount)});const V=new Date(e);for(;V<t;){const P=`${V.getFullYear()}-${String(V.getMonth()+1).padStart(2,"0")}-${String(V.getDate()).padStart(2,"0")}`;p.push(V.toLocaleDateString(On(),{day:"numeric",month:"short"}));const j=D.get(P)||{income:0,expense:0};T.push(j.income),R.push(j.expense),V.setDate(V.getDate()+1)}if(tt)if(tt.data.labels.length!==p.length)tt.destroy(),tt=null;else{tt.data.labels=p,tt.data.datasets[0].data=T,tt.data.datasets[1].data=R,tt.update("none");return}tt=new Chart(n,{type:"bar",data:{labels:p,datasets:[{label:x("trends.chart.income"),data:T,backgroundColor:"#16A34A",borderRadius:6},{label:x("trends.chart.expense"),data:R,backgroundColor:"#EF4444",borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,labels:{color:"#64748B",font:{family:"Noto Sans Thai",size:12}}},tooltip:{mode:"index",intersect:!1}},scales:{x:{grid:{display:!1},ticks:{color:"#64748B",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0,0,0,0.05)"},ticks:{color:"#64748B",font:{size:11},callback:P=>"฿"+P.toLocaleString()}}}}})}function DI(){const n=document.getElementById("spending-insights-content");if(!n)return;const{start:e,end:t}=Jr(),r=new Date,s=oe.filter(M=>wi(M.date)),i=s.filter(M=>M.type==="expense"),a=s.filter(M=>M.type==="income"),l=i.reduce((M,E)=>M+Number(E.amount),0),u=a.reduce((M,E)=>M+Number(E.amount),0);if(s.length===0){n.innerHTML='<div class="empty-state"><div class="empty-icon">💡</div><p>ยังไม่มีข้อมูลในรอบบิลนี้</p></div>';return}const d=e,m=Math.max(1,Math.floor((Math.min(r,t)-d)/864e5)+1),p=l/m,T={};i.forEach(M=>{T[M.category]=(T[M.category]||0)+Number(M.amount)});const R=Object.entries(T).sort((M,E)=>E[1]-M[1])[0];let D="—";if(R){const M=qt("expense",R[0]);D=`${M.emoji} ${M.label}: ${fe(R[1])}`}let V="ไม่มีรายรับ";u>0&&(V=`${((u-l)/u*100).toFixed(1)}%`);const P=Object.entries(Bt).filter(([M,E])=>E?(T[M]||0)>=E:!1),j=new Date(d),G=new Date(d);G.setMonth(G.getMonth()-1);const Y=oe.filter(M=>M.type==="expense"&&M.date).filter(M=>{const E=new Date(M.date);return E>=G&&E<j}).reduce((M,E)=>M+Number(E.amount),0);let ve="";if(Y>0){const M=l-Y,E=Math.abs(M/Y*100).toFixed(1),g=M<0?"less":"more",_=M<0?`ใช้จ่ายน้อยกว่ารอบที่แล้ว <span class="comparison-value">${E}%</span>! 🎉`:`ใช้จ่ายมากกว่ารอบที่แล้ว <span class="comparison-value">${E}%</span>`;ve=`<div class="insight-comparison ${g}">📊 ${_}</div>`}const xe=Object.keys(Bt).length>0?P.length>0?`<span style="color:var(--red)">${P.length} หมวดเกิน Budget</span>`:'<span style="color:var(--green)">ทุกหมวดอยู่ในงบ ✓</span>':"ยังไม่ได้ตั้ง Budget";n.innerHTML=`
    <div class="insights-grid">
      <div class="insight-card">
        <div class="insight-card-label">📅 เฉลี่ยต่อวัน</div>
        <div class="insight-card-value">${fe(p)}</div>
        <div class="insight-card-sub">(${m} วันที่ผ่านมา)</div>
      </div>
      <div class="insight-card">
        <div class="insight-card-label">🏆 หมวดใช้จ่ายสูงสุด</div>
        <div class="insight-card-value" style="font-size:14px;">${D}</div>
      </div>
      <div class="insight-card ${u>0?u>l?"positive":"negative":""}">
        <div class="insight-card-label">💚 อัตราออม</div>
        <div class="insight-card-value">${V}</div>
      </div>
      <div class="insight-card">
        <div class="insight-card-label">💰 Budget</div>
        <div class="insight-card-value" style="font-size:13px;">${xe}</div>
      </div>
    </div>
    ${ve}`}function Cu(n,e){const t=document.getElementById(e),r=oe.filter(u=>u.type===n&&wi(u.date));if(r.length===0){t.innerHTML=`<div class="empty-state"><div class="empty-icon">${n==="expense"?"📊":"💵"}</div><p>${x("analytics.noData")}</p></div>`;return}const s={};r.forEach(u=>{s[u.category]=(s[u.category]||0)+Number(u.amount)});const i=Object.entries(s).sort((u,d)=>d[1]-u[1]),a=i[0][1],l=hI[n];t.innerHTML="",i.forEach(([u,d],m)=>{const p=qt(n,u),T=(d/a*100).toFixed(1),R=document.createElement("div");R.className="cat-item";const D=n==="expense"&&Bt[u]||0;let V="";if(D>0){const P=d/D,j=Math.min(P*100,100).toFixed(1),G=P>=1?"over":P>=.7?"warn":"ok",Y=d>D?d-D:0;V=`
        <div class="budget-progress-wrap">
          <div class="budget-bar-track"><div class="budget-bar-fill ${G}" style="width:${j}%"></div></div>
          <div class="budget-bar-text">
            <span>${fe(d)} / ${fe(D)}</span>
            ${Y>0?`<span class="over-label">เกิน ${fe(Y)}</span>`:""}
          </div>
        </div>`}R.innerHTML=`
      <div class="cat-emoji">${p.emoji}</div>
      <div class="cat-info">
        <div class="cat-name">${p.label}</div>
        <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${T}%;background:${l[m%l.length]};"></div></div>
        ${V}
      </div>
      <div class="cat-amount" style="color:${l[m%l.length]}">${fe(d)}</div>`,t.appendChild(R)})}function un(){dr==="dashboard"?bI():dr==="transactions"?Cn():dr==="analytics"?(CI(),If()):dr==="trends"&&(PI(),DI())}function kI(){const n=document.getElementById("budget-form-rows");n.innerHTML="",cn.expense.forEach(e=>{const t=Wr(e.id),r=Bt[e.id]||"",s=document.createElement("div");s.className="budget-row",s.innerHTML=`
      <div class="budget-row-emoji">${e.emoji}</div>
      <div class="budget-row-label">${t}</div>
      <input type="number" min="0" step="1" placeholder="ไม่จำกัด"
             data-cat="${e.id}" value="${r}" />`,n.appendChild(s)}),mt("budget-modal-overlay")}async function VI(){const n=document.querySelectorAll("#budget-form-rows input[data-cat]"),e={};n.forEach(t=>{const r=parseFloat(t.value);t.value.trim()!==""&&!isNaN(r)&&r>0&&(e[t.dataset.cat]=r)}),Bt=e;try{await Qr({budgets:e}),K("💰 บันทึก Budget สำเร็จ","success"),Z("budget-modal-overlay"),un()}catch(t){K("❌ "+t.message,"error")}}function Pu(n){if(!ue.enabled)return;const e=Bt[n];if(!e)return;const{start:t}=Jr(),r=t.toISOString().slice(0,10),s=oe.filter(u=>u.type==="expense"&&u.category===n&&wi(u.date)).reduce((u,d)=>u+Number(d.amount),0),i=qt("expense",n),a=`${n}_${r}_near`,l=`${n}_${r}_over`;if(s>=e&&ue.notifyOver){if(ue.notifyMode==="once"&&_s[l])return;_s[l]=!0,K(`⚠️ ${i.emoji}${i.label} เกิน Budget แล้ว! (${fe(s)} / ${fe(e)})`,"error",5e3)}else if(s>=e*(ue.nearThreshold/100)&&ue.notifyNear){if(ue.notifyMode==="once"&&_s[a])return;_s[a]=!0,K(`🔔 ${i.emoji}${i.label} ใกล้เกิน Budget (${fe(s)} / ${fe(e)})`,"warning",4e3)}}function NI(){const n=document.getElementById("toggle-budget-notify"),e=document.getElementById("budget-notify-sub"),t=document.getElementById("toggle-notify-near"),r=document.getElementById("toggle-notify-over"),s=document.getElementById("notify-mode-once"),i=document.getElementById("notify-mode-always");n&&(n.checked=!!ue.enabled,e&&(e.style.display=ue.enabled?"":"none"),t&&(t.checked=!!ue.notifyNear),r&&(r.checked=!!ue.notifyOver),s&&(s.checked=ue.notifyMode==="once"),i&&(i.checked=ue.notifyMode!=="once"))}async function ar(){try{await Qr({budgetSettings:ue})}catch(n){console.error("saveBudgetSettings error:",n)}}function LI(){const n=new Date,e=ce==="pro"?365:30,t=n.getTime()-e*864e5,r=oe.filter(p=>p.date?new Date(p.date).getTime()>=t:!1).sort((p,T)=>new Date(p.date)-new Date(T.date)),s="\uFEFF",i="วันที่,ประเภท,หมวดหมู่,รายละเอียด,จำนวนเงิน",a=r.map(p=>{const T=qt(p.type,p.category),R=p.type==="income"?"รายรับ":"รายจ่าย",D=new Date(p.date).toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}),V=`"${(p.description||"").replace(/"/g,'""')}"`;return[D,R,T.label,V,p.amount].join(",")}),l=s+[i,...a].join(`\r
`),u=new Blob([l],{type:"text/csv;charset=utf-8;"}),d=URL.createObjectURL(u),m=document.createElement("a");m.href=d,m.download="moneyflow_export.csv",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(d),K(`📥 Export สำเร็จ (${r.length} รายการ)`,"success")}function vf(){const n=document.getElementById("recurring-category");n&&(n.innerHTML="",cn.expense.forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=`${e.emoji} ${Wr(e.id)}`,n.appendChild(t)}))}function xI(){Js=null,document.getElementById("recurring-modal-title").textContent="🔄 เพิ่มรายการประจำ",document.getElementById("recurring-form").reset(),document.getElementById("recurring-edit-id").value="",vf(),mt("recurring-modal-overlay")}function OI(n){Js=n.id,document.getElementById("recurring-modal-title").textContent="✏️ แก้ไขรายการประจำ",document.getElementById("recurring-edit-id").value=n.id,document.getElementById("recurring-desc").value=n.description||"",document.getElementById("recurring-amount").value=n.amount||"",document.getElementById("recurring-day").value=n.dayOfMonth||"",document.getElementById("recurring-installments").value=n.installments||"",document.getElementById("recurring-note").value=n.note||"",vf(),setTimeout(()=>{document.getElementById("recurring-category").value=n.category},0),mt("recurring-modal-overlay")}async function MI(n){n.preventDefault();const e=document.getElementById("recurring-desc").value.trim(),t=parseFloat(document.getElementById("recurring-amount").value),r=document.getElementById("recurring-category").value,s=parseInt(document.getElementById("recurring-day").value),i=document.getElementById("recurring-installments").value.trim(),a=i?parseInt(i):null,l=document.getElementById("recurring-note").value.trim();if(!e||!t||!r||!s){K("กรุณากรอกข้อมูลให้ครบ","error");return}const u={description:e,amount:t,category:r,type:"expense",dayOfMonth:s,installments:a,note:l,active:!0,paidCount:0,lastPaidDate:"",createdAt:new Date().toISOString()};try{if(Js){const{createdAt:d,paidCount:m,lastPaidDate:p,...T}=u;await Oa(jt(Dr(),Js),T),K("✅ แก้ไขรายการประจำสำเร็จ","success")}else await af(Dr(),u),K("✅ เพิ่มรายการประจำสำเร็จ","success");Z("recurring-modal-overlay")}catch(d){K("❌ "+d.message,"error")}}async function FI(n){const e=new Date,t=e.toISOString().slice(0,10),r=e.toISOString().slice(0,16);try{await gf({type:"expense",amount:n.amount,description:n.description,category:n.category,date:r,createdAt:e.toISOString(),imageData:""}),await Oa(jt(Dr(),n.id),{paidCount:(n.paidCount||0)+1,lastPaidDate:t}),K(`✅ บันทึก "${n.description}" สำเร็จ`,"success")}catch(s){K("❌ "+s.message,"error")}}async function BI(n){if(confirm("ลบรายการประจำนี้?"))try{await of(jt(Dr(),n)),K("🗑️ ลบรายการประจำสำเร็จ","success")}catch(e){K("❌ "+e.message,"error")}}function If(){const n=document.getElementById("recurring-list");if(n){if(Zt.length===0){n.innerHTML='<div class="empty-state"><div class="empty-icon">🔄</div><p>ยังไม่มีรายการประจำ</p></div>';return}n.innerHTML="",Zt.forEach(e=>{const t=qt("expense",e.category),r=e.installments&&(e.paidCount||0)>=e.installments,s=new Date,i=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`,a=e.lastPaidDate&&e.lastPaidDate.startsWith(i),l=e.installments?e.installments-(e.paidCount||0):null,u=l!==null?`${l} งวดคงเหลือ`:"∞",d=document.createElement("div");d.className="recurring-item",d.innerHTML=`
      <div class="tx-emoji">${t.emoji}</div>
      <div class="recurring-item-info">
        <div class="recurring-item-title">${Xs(e.description)} ${fe(e.amount)}</div>
        <div class="recurring-item-meta">ทุกวันที่ ${e.dayOfMonth} · ${u}${e.note?" · "+Xs(e.note):""}</div>
      </div>
      <div class="recurring-item-actions">
        ${r?'<span class="recurring-done-tag">ครบแล้ว</span>':a?'<span class="recurring-done-tag">จ่ายแล้วเดือนนี้</span>':`<button class="btn-pay-recurring" data-id="${e.id}">✅ จ่ายแล้ว</button>`}
        <button class="tx-btn tx-btn-edit" data-id="${e.id}" title="แก้ไข">✏️</button>
        <button class="tx-btn tx-btn-delete" data-id="${e.id}" title="ลบ">🗑️</button>
      </div>`,n.appendChild(d),d.querySelectorAll(".btn-pay-recurring").forEach(m=>m.addEventListener("click",()=>{const p=Zt.find(T=>T.id===m.dataset.id);p&&FI(p)})),d.querySelectorAll(".tx-btn-edit").forEach(m=>m.addEventListener("click",()=>{const p=Zt.find(T=>T.id===m.dataset.id);p&&OI(p)})),d.querySelectorAll(".tx-btn-delete").forEach(m=>m.addEventListener("click",()=>BI(m.dataset.id)))})}}function UI(){const n=new Date,e=n.getDate(),t=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`;Zt.forEach(r=>{!r.active||r.installments&&(r.paidCount||0)>=r.installments||r.lastPaidDate&&r.lastPaidDate.startsWith(t)||r.dayOfMonth<=e&&!lo.has(r.id)&&(lo.add(r.id),setTimeout(()=>{K(`🔔 ${r.description} ครบกำหนดชำระวันนี้!`,"warning",5e3)},1e3+lo.size*1500))})}function Du(){vr=null,document.getElementById("modal-title").textContent=x("modal.addTitle"),document.getElementById("submit-label").textContent=x("modal.addBtn"),document.getElementById("transaction-form").reset(),document.getElementById("edit-id").value="";const n=new Date;document.getElementById("input-date").value=new Date(n-n.getTimezoneOffset()*6e4).toISOString().slice(0,16),Ai(),kr("income"),mt("modal-overlay")}function Tf(n){const e=oe.find(t=>t.id===n);e&&(vr=n,document.getElementById("modal-title").textContent=x("modal.editTitle"),document.getElementById("submit-label").textContent=x("modal.editBtn"),document.getElementById("edit-id").value=n,document.getElementById("input-amount").value=e.amount,document.getElementById("input-description").value=e.description,document.getElementById("input-date").value=e.date,Ai(),kr(e.type),setTimeout(()=>{document.getElementById("input-category").value=e.category},0),mt("modal-overlay"))}function kr(n){Fa=n,document.getElementById("type-income").classList.toggle("active",n==="income"),document.getElementById("type-expense").classList.toggle("active",n==="expense"),jo(n)}function mt(n){document.getElementById(n).classList.add("open")}function Z(n){document.getElementById(n).classList.remove("open")}function wf(n){Ps=n,mt("delete-overlay")}function qo(n=""){document.getElementById("upgrade-reason").textContent=n,mt("upgrade-modal-overlay")}async function $I(n){n.preventDefault();const e=parseFloat(document.getElementById("input-amount").value),t=document.getElementById("input-description").value.trim(),r=document.getElementById("input-category").value,s=document.getElementById("input-date").value;if(!e||e<=0||!t||!r||!s){K(x("toast.fieldRequired"),"error");return}const i=!!vr,a=document.getElementById("check-continue").checked,l=document.getElementById("btn-submit");l.disabled=!0;try{const u={type:Fa,amount:e,description:t,category:r,date:s,createdAt:new Date().toISOString(),imageData:ce==="pro"&&Qs?Qs:""};if(i)await yf(vr,u),vr=null,K(x("toast.editSaved")),Z("modal-overlay"),u.type==="expense"&&setTimeout(()=>Pu(u.category),500);else if(await gf(u),K(x("toast.saved")),u.type==="expense"&&setTimeout(()=>Pu(u.category),500),a){document.getElementById("input-amount").value="",document.getElementById("input-description").value="",Ai();const d=new Date;document.getElementById("input-date").value=new Date(d-d.getTimezoneOffset()*6e4).toISOString().slice(0,16),document.getElementById("input-amount").focus()}else Z("modal-overlay")}catch(u){K("❌ "+u.message,"error")}finally{l.disabled=!1}}function ku(){document.getElementById("current-date").textContent=new Date().toLocaleDateString(On(),{weekday:"short",year:"numeric",month:"short",day:"numeric"})}function Ai(){ff=null,mf=null,Qs=null;const n=document.getElementById("image-preview-container"),e=document.getElementById("image-preview");e.src="",n.style.display="none",document.getElementById("input-slip").value=""}function jI(n,e,t=800,r=.72){return new Promise(s=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;(a>t||l>t)&&(a>l?(l=Math.round(l*t/a),a=t):(a=Math.round(a*t/l),l=t));const u=document.createElement("canvas");u.width=a,u.height=l,u.getContext("2d").drawImage(i,0,0,a,l),s(u.toDataURL("image/jpeg",r))},i.onerror=()=>s(`data:${e};base64,${n}`),i.src=`data:${e};base64,${n}`})}async function qI(n){const e=n.target.files[0];if(!e)return;const t=document.getElementById("scan-progress"),r=t.querySelector(".progress-bar"),s=t.querySelector(".progress-text");t.classList.add("active"),s.textContent=x("modal.prepareImg"),r.style.setProperty("--progress","10%");try{if(!await TI()){t.classList.remove("active"),document.getElementById("input-slip").value="";return}const a=await zI(e),l=e.type||"image/jpeg";ff=a,mf=l,Qs=ce==="pro"?await jI(a,l,1200,.82):null;const u=document.getElementById("image-preview-container"),d=document.getElementById("image-preview");d.src=`data:${l};base64,${a}`,u.style.display="block",s.textContent=x("modal.analyzing"),r.style.setProperty("--progress","40%");const m=await fetch("/api/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base64Data:a,mimeType:l})});if(!m.ok){const T=await m.json().catch(()=>({}));throw new Error(T.error||`Server Error ${m.status}`)}const p=await m.json();r.style.setProperty("--progress","90%"),p.amount?(document.getElementById("input-amount").value=p.amount,p.description&&(document.getElementById("input-description").value=p.description),K(x("toast.scanSuccess"))):K(x("toast.scanNoAmount"),"error"),kr("expense"),r.style.setProperty("--progress","100%")}catch(i){console.error("Scan error:",i),K(x("toast.scanError",{msg:i.message}),"error",6e3)}finally{document.getElementById("input-slip").value="",setTimeout(()=>t.classList.remove("active"),500)}}function zI(n){return new Promise((e,t)=>{const r=new FileReader;r.readAsDataURL(n),r.onload=()=>e(r.result.split(",")[1]),r.onerror=t})}function ja(){const n=document.getElementById("btn-dev-toggle");if(!n)return;const e=_r.includes(ge?.email);n.style.display=e?"":"none",n.textContent=x(ce==="pro"?"dev.switchFree":"dev.switchPro")}function HI(){_r.includes(ge?.email)&&(Er=ce==="pro"?"free":"pro",localStorage.setItem("mf_dev_plan",Er),ce=Er,Ti(),ja(),K(x("dev.toasted")+(ce==="pro"?"Pro ⭐":"Free")))}async function GI(){if(vu.includes("YOUR_OMISE")){K(x("toast.paymentSoon"),"error",4e3);return}window.OmiseCard||await new Promise((n,e)=>{const t=document.createElement("script");t.src="https://cdn.omise.co/omise.js",t.onload=n,t.onerror=e,document.head.appendChild(t)}),window.OmiseCard.configure({publicKey:vu}),window.OmiseCard.open({frameLabel:"MoneyFlow Pro",submitLabel:x("upgrade.pay"),currency:"THB",amount:7900,onCreateTokenSuccess:async n=>{try{Ys(x("loading.payment")),Z("upgrade-modal-overlay");const t=await(await fetch("/api/payment-create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,uid:ge.uid,email:ge.email})})).json();t.success?(ce="pro",await Qr({plan:"pro",pro_until:t.pro_until}),Ti(),K(x("toast.paymentSuccess"),"success",5e3)):K(x("toast.paymentFail")+(t.error||""),"error")}catch(e){K("❌ "+e.message,"error")}finally{ln()}},onFormClosed:()=>{}})}function Vu(){const n=document.getElementById("changelog-body"),e={new:"✨",fix:"🐛",improve:"⚡"},t=On();n.innerHTML=lI.map(r=>`
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
    </div>`).join(""),document.getElementById("changelog-overlay").classList.add("open"),Z("settings-modal-overlay")}function WI(){Eu(),ku(),jo("income"),bu();const n=document.getElementById("app-version");n&&(n.textContent="v"+cI),document.getElementById("btn-google-signin").addEventListener("click",gI),document.querySelectorAll(".nav-item, .bottom-nav-item").forEach(i=>i.addEventListener("click",()=>{Au(i.dataset.view),document.getElementById("sidebar").classList.remove("open")})),document.getElementById("see-all-btn").addEventListener("click",()=>Au("transactions")),document.getElementById("menu-toggle").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open")),document.addEventListener("click",i=>{const a=document.getElementById("sidebar"),l=document.getElementById("menu-toggle");window.innerWidth<=900&&a.classList.contains("open")&&!a.contains(i.target)&&i.target!==l&&a.classList.remove("open")}),document.getElementById("btn-open-modal").addEventListener("click",Du),document.getElementById("mobile-fab")?.addEventListener("click",Du),document.getElementById("type-income").addEventListener("click",()=>kr("income")),document.getElementById("type-expense").addEventListener("click",()=>kr("expense")),document.getElementById("modal-close").addEventListener("click",()=>Z("modal-overlay")),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Z("modal-overlay")}),document.getElementById("transaction-form").addEventListener("submit",$I),document.getElementById("delete-confirm").addEventListener("click",async()=>{if(!Ps)return;const i=Ps;Ps=null,Z("delete-overlay");try{Ys(x("loading.deleting")),await II(i),K(x("toast.deleted"))}catch(a){K(x("toast.deleteError")+a.message,"error")}finally{ln()}}),document.getElementById("delete-cancel").addEventListener("click",()=>Z("delete-overlay")),document.getElementById("delete-cancel-x").addEventListener("click",()=>Z("delete-overlay")),document.getElementById("delete-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Z("delete-overlay")}),document.getElementById("btn-clear-all").addEventListener("click",async()=>{if(oe.length===0){K(x("toast.clearNone"),"error");return}if(confirm(x("confirm.clearAll"))){Z("settings-modal-overlay");try{Ys(x("loading.clearing"));const i=iI(vi);oe.forEach(a=>i.delete(jt(Kr(),a.id))),await i.commit(),K(x("toast.clearAll"))}catch(i){K("❌ "+i.message,"error")}finally{ln()}}}),document.getElementById("filter-type").addEventListener("change",Cn),document.getElementById("filter-category").addEventListener("change",Cn),document.getElementById("tx-search").addEventListener("input",i=>{df=i.target.value,Cn()}),document.getElementById("btn-remove-image").addEventListener("click",Ai),document.getElementById("btn-open-settings").addEventListener("click",()=>{document.getElementById("input-cutoff-day").value=ot,document.getElementById("select-language").value=co(),mt("settings-modal-overlay")}),document.getElementById("settings-modal-close").addEventListener("click",()=>Z("settings-modal-overlay")),document.getElementById("settings-modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Z("settings-modal-overlay")}),document.getElementById("btn-save-settings").addEventListener("click",async()=>{const i=parseInt(document.getElementById("input-cutoff-day").value),a=document.getElementById("select-language").value;if(i<1||i>31||isNaN(i)){K(x("toast.cutoffError"),"error");return}a!==co()&&(uI(a),Eu(),ku(),jo(Fa),bu(),ct(document.getElementById("sync-badge").className.replace("sync-badge ","").trim()||"offline")),ot=i,localStorage.setItem("mf_cutoff_day",ot);try{await Qr({cutoff_day:i}),K(x("toast.settingsSaved"))}catch{K(x("toast.settingsLocal"),"error")}Z("settings-modal-overlay"),un()}),document.getElementById("btn-upgrade").addEventListener("click",()=>qo()),document.getElementById("btn-trends-upgrade")?.addEventListener("click",()=>qo(x("trends.upgradeBtn"))),document.getElementById("upgrade-modal-close").addEventListener("click",()=>Z("upgrade-modal-overlay")),document.getElementById("upgrade-modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Z("upgrade-modal-overlay")}),document.getElementById("btn-pay-omise").addEventListener("click",GI),document.getElementById("btn-view-list")?.addEventListener("click",()=>Su("list")),document.getElementById("btn-view-split")?.addEventListener("click",()=>Su("split")),document.getElementById("btn-range-all")?.addEventListener("click",()=>Ru("all")),document.getElementById("btn-range-cycle")?.addEventListener("click",()=>Ru("cycle"));const e=document.getElementById("btn-dev-toggle");e&&e.addEventListener("click",HI),document.getElementById("btn-signout").addEventListener("click",Iu),document.getElementById("btn-signout-settings")?.addEventListener("click",Iu),document.getElementById("mobile-btn-updates")?.addEventListener("click",Vu),document.getElementById("mobile-btn-settings")?.addEventListener("click",()=>{document.getElementById("input-cutoff-day").value=ot,document.getElementById("select-language").value=co(),mt("settings-modal-overlay")}),document.getElementById("btn-changelog").addEventListener("click",Vu),document.getElementById("changelog-close").addEventListener("click",()=>Z("changelog-overlay")),document.getElementById("changelog-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&Z("changelog-overlay")});const t=()=>document.getElementById("slip-lightbox").classList.remove("active");document.getElementById("slip-lightbox-close").addEventListener("click",t),document.getElementById("slip-lightbox-backdrop").addEventListener("click",t),document.getElementById("btn-scan").addEventListener("click",()=>document.getElementById("input-slip").click()),document.getElementById("input-slip").addEventListener("change",qI),document.getElementById("btn-open-budget")?.addEventListener("click",kI),document.getElementById("budget-modal-close")?.addEventListener("click",()=>Z("budget-modal-overlay")),document.getElementById("budget-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&Z("budget-modal-overlay")}),document.getElementById("btn-save-budget")?.addEventListener("click",VI),document.getElementById("btn-cancel-budget")?.addEventListener("click",()=>Z("budget-modal-overlay")),document.getElementById("btn-add-recurring")?.addEventListener("click",xI),document.getElementById("recurring-modal-close")?.addEventListener("click",()=>Z("recurring-modal-overlay")),document.getElementById("recurring-modal-overlay")?.addEventListener("click",i=>{i.target===i.currentTarget&&Z("recurring-modal-overlay")}),document.getElementById("recurring-form")?.addEventListener("submit",MI),document.getElementById("btn-cancel-recurring")?.addEventListener("click",()=>Z("recurring-modal-overlay")),document.getElementById("btn-export-csv")?.addEventListener("click",LI);const r=document.getElementById("toggle-budget-notify"),s=document.getElementById("budget-notify-sub");r?.addEventListener("change",()=>{ue.enabled=r.checked,s&&(s.style.display=ue.enabled?"":"none"),ar()}),document.getElementById("toggle-notify-near")?.addEventListener("change",i=>{ue.notifyNear=i.target.checked,ar()}),document.getElementById("toggle-notify-over")?.addEventListener("change",i=>{ue.notifyOver=i.target.checked,ar()}),document.getElementById("notify-mode-once")?.addEventListener("change",i=>{i.target.checked&&(ue.notifyMode="once",ar())}),document.getElementById("notify-mode-always")?.addEventListener("change",i=>{i.target.checked&&(ue.notifyMode="always",ar())}),oe.length>0&&un()}WI();
