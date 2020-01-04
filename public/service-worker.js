try{self["workbox:core:5.0.0-rc.1"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.0.0-rc.1"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const r=e=>{const t=new URL(String(e),location.href);return t.origin===location.origin?t.pathname:t.href};class a{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;let n,{params:i,route:r}=this.findMatchingRoute({url:s,request:e,event:t}),a=r&&r.handler;if(!a&&this.s&&(a=this.s),a){try{n=a.handle({url:s,request:e,event:t,params:i})}catch(e){n=Promise.reject(e)}return n instanceof Promise&&this.i&&(n=n.catch(n=>this.i.handle({url:s,request:e,event:t}))),n}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n,r=i.match({url:e,request:t,event:s});if(r)return n=r,Array.isArray(r)&&0===r.length?n=void 0:r.constructor===Object&&0===Object.keys(r).length?n=void 0:"boolean"==typeof r&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let c;const o=()=>(c||(c=new a,c.addFetchListener(),c.addCacheListener()),c),h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[h.prefix,e,h.suffix].filter(e=>e&&e.length>0).join("-"),l=e=>e||u(h.precache),f=e=>e||u(h.runtime);function d(e){e.then(()=>{})}const w=new Set;class p{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.h=e,this.u=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.h,this.u);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(a,c)=>{const o=a.objectStore(e),h=t?o.index(t):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(r?e:e.value),i&&u.length>=i?c(u):e.continue()):c(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const r=this.o.transaction(e,t);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const r=s.objectStore(t),a=r[e].apply(r,n);a.onsuccess=()=>i(a.result)})}close(){this.o&&(this.o.close(),this.o=null)}}p.prototype.OPEN_TIMEOUT=2e3;const y={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(y))for(const s of t)s in IDBObjectStore.prototype&&(p.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.0.0-rc.1"]&&_()}catch(e){}const g=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class m{constructor(e){this.m=e,this.o=new p("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=g(e),timestamp:t,cacheName:this.m,id:this.q(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this.q(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&a>=t?r.push(s.value):a++),s.continue()}else n(r)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}q(e){return this.m+"|"+g(e)}}class v{constructor(e,t={}){this.R=!1,this.U=!1,this.L=t.maxEntries,this._=t.maxAgeSeconds,this.m=e,this.N=new m(e)}async expireEntries(){if(this.R)return void(this.U=!0);this.R=!0;const e=this._?Date.now()-1e3*this._:0,t=await this.N.expireEntries(e,this.L),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.R=!1,this.U&&(this.U=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.N.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._){return await this.N.getTimestamp(e)<Date.now()-1e3*this._}return!1}async delete(){this.U=!1,await this.N.expireEntries(1/0)}}const q=(e,t)=>e.filter(e=>t in e),R=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const r=await self.caches.open(e),a=await b({plugins:i,request:t,mode:"read"});let c=await r.match(a,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;c=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:a})}return c},x=async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,r=!1;for(let t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return r||(i=i&&200===i.status?i:void 0),i||null},b=async({request:e,mode:t,plugins:s=[]})=>{const n=q(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},U={put:async({cacheName:e,request:s,response:n,event:i,plugins:a=[],matchOptions:c})=>{const o=await b({plugins:a,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:r(o.url)});let h=await x({event:i,plugins:a,response:n,request:o});if(!h)return;const u=await self.caches.open(e),l=q(a,"cacheDidUpdate");let f=l.length>0?await R({cacheName:e,matchOptions:c,request:o}):null;try{await u.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(let t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:i,oldResponse:f,newResponse:h,request:o})},match:R},L=async({request:e,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=q(i,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(let t of i)if("requestWillFetch"in t){const s=t.requestWillFetch,i=e.clone();e=await s.call(t,{request:i,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}let c=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of i)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:c,response:t}));return t}catch(e){for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};try{self["workbox:strategies:5.0.0-rc.1"]&&_()}catch(e){}const N={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let E;async function O(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,r=function(){if(void 0===E){const e=new Response("");if("body"in e)try{new Response(e.body),E=!0}catch(e){E=!1}E=!1}return E}()?s.body:await s.blob();return new Response(r,i)}try{self["workbox:precaching:5.0.0-rc.1"]&&_()}catch(e){}function P(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class T{constructor(e){this.m=l(e),this.O=new Map,this.P=new Map,this.T=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=P(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.O.has(i)&&this.O.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.O.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.T.has(e)&&this.T.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.T.set(e,n.integrity)}if(this.O.set(i,e),this.P.set(i,r),s.length>0){const e="Workbox is precaching URLs without revision "+`info: ${s.join(", ")}\nThis is generally NOT safe. `+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),r=await i.keys(),a=new Set(r.map(e=>e.url));for(const[e,t]of this.O)a.has(t)?n.push(e):s.push({cacheKey:t,url:e});const c=s.map(({cacheKey:s,url:n})=>{const i=this.T.get(s),r=this.P.get(n);return this.K({cacheKey:s,cacheMode:r,event:e,integrity:i,plugins:t,url:n})});return await Promise.all(c),{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.O.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async K({cacheKey:e,url:s,cacheMode:n,event:i,plugins:r,integrity:a}){const c=new Request(s,{integrity:a,cache:n,credentials:"same-origin"});let o,h=await L({event:i,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:i,request:c,response:h}):h.status<400))throw new t("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await O(h)),await U.put({event:i,plugins:r,response:h,request:e===s?c:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.O}getCachedURLs(){return[...this.O.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.O.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s.url})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),i=new Request(e);return()=>n({request:i})}}let K;const M=()=>(K||(K=new T),K);const S=(e,t)=>{const s=M().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let D=!1;const I=e=>{D||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=l();self.addEventListener("fetch",r=>{const a=S(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!a)return;let c=self.caches.open(i).then(e=>e.match(a)).then(e=>e||fetch(a));r.respondWith(c)})})(e),D=!0)},A=[],C={get:()=>A,add(e){A.push(...e)}},j=e=>{const t=M(),s=C.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},W=e=>{const t=M();e.waitUntil(t.activate())};var k;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),k={},(e=>{M().addToCacheList(e),e.length>0&&(self.addEventListener("install",j),self.addEventListener("activate",W))})([{url:"_next/static/HAS4aOS6WYPIaOJuxc7Ex/pages/_app.js",revision:"efe40b9c631a9b9c2ca07b1ee622194d"},{url:"_next/static/HAS4aOS6WYPIaOJuxc7Ex/pages/_error.js",revision:"d1d4a359de96df7e674306ad7105d710"},{url:"_next/static/HAS4aOS6WYPIaOJuxc7Ex/pages/index.js",revision:"87a54a9807dc2d7cf6b2ce3b4749ec0d"},{url:"_next/static/chunks/commons.9e5f8265b70ddc0aad59.js",revision:"dc3af7ad1cb19f410afefd6a7e132ac3"},{url:"_next/static/runtime/main-63edd0b323acacd25f6c.js",revision:"2fc0942a5bcca326435193f9128b43e9"},{url:"_next/static/runtime/polyfills-510791b1bc66cc8557b9.js",revision:"51bb44a0f1182f5c92213eaf066504ae"},{url:"_next/static/runtime/webpack-08f7b238829422e3b9b2.js",revision:"f5e6e2fca3144cc944812cfa3547f475"}]),I(k),((e,s,r)=>{let a;if("string"==typeof e){const t=new URL(e,location.href);a=new n(({url:e})=>e.href===t.href,s,r)}else if(e instanceof RegExp)a=new i(e,s,r);else if("function"==typeof e)a=new n(e,s,r);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}o().registerRoute(a)})(/^https?.*/,new class{constructor(e={}){if(this.m=f(e.cacheName),e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this.M=t?e.plugins:[N,...e.plugins]}else this.M=[N];this.S=e.networkTimeoutSeconds||0,this.D=e.fetchOptions,this.I=e.matchOptions}async handle({event:e,request:s}){const n=[],i=[];let r;if(this.S){const{id:t,promise:a}=this.A({request:s,event:e,logs:n});r=t,i.push(a)}const a=this.C({timeoutId:r,request:s,event:e,logs:n});i.push(a);let c=await Promise.race(i);if(c||(c=await a),!c)throw new t("no-response",{url:s.url});return c}A({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.j({request:e,event:s}))},1e3*this.S)}),id:n}}async C({timeoutId:e,request:t,logs:s,event:n}){let i,r;try{r=await L({request:t,event:n,fetchOptions:this.D,plugins:this.M})}catch(e){i=e}if(e&&clearTimeout(e),i||!r)r=await this.j({request:t,event:n});else{const e=r.clone(),s=U.put({cacheName:this.m,request:t,response:e,event:n,plugins:this.M});if(n)try{n.waitUntil(s)}catch(e){}}return r}j({event:e,request:t}){return U.match({cacheName:this.m,request:t,event:e,matchOptions:this.I,plugins:this.M})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;let i=this.W(n);const r=this.k(s);d(r.expireEntries());const a=r.updateTimestamp(t.url);if(e)try{e.waitUntil(a)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.k(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.H=e,this._=e.maxAgeSeconds,this.B=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),w.add(t))}k(e){if(e===f())throw new t("expire-custom-caches-only");let s=this.B.get(e);return s||(s=new v(e,this.H),this.B.set(e,s)),s}W(e){if(!this._)return!0;const t=this.F(e);return null===t||t>=Date.now()-1e3*this._}F(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.B)await self.caches.delete(e),await t.delete();this.B=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=service-worker.js.map
