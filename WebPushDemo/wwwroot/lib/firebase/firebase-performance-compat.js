!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).firebase,t.firebase.INTERNAL.modularAPIs)}(this,function(fe,de){"use strict";try{!function(){function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=t(fe);class i extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,r.prototype.create)}}class r{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){var r,n=e[0]||{},e=`${this.service}/${t}`,t=this.errors[t],t=t?(r=n,t.replace(o,(t,e)=>{var n=r[e];return null!=n?String(n):`<${e}?>`})):"Error",t=`${this.serviceName}: ${t} (${e}).`;return new i(e,t,n)}}const o=/\{\$([^}]+)}/g;var n,a=(s.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},s.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},s.prototype.setServiceProps=function(t){return this.serviceProps=t,this},s.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},s);function s(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}(T=n=n||{})[T.DEBUG=0]="DEBUG",T[T.VERBOSE=1]="VERBOSE",T[T.INFO=2]="INFO",T[T.WARN=3]="WARN",T[T.ERROR=4]="ERROR",T[T.SILENT=5]="SILENT";const c={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},u=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},p=(t,e,...n)=>{if(!(e<t.logLevel)){var r=(new Date).toISOString(),i=l[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)}};function f(n){return new Promise(function(t,e){n.onsuccess=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function d(n,r,i){var o,t=new Promise(function(t,e){f(o=n[r].apply(n,i)).then(t,e)});return t.request=o,t}function g(t,n,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[n][e]},set:function(t){this[n][e]=t}})})}function h(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return d(this[n],t,arguments)})})}function m(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return this[n][t].apply(this[n],arguments)})})}function v(t,r,e,n){n.forEach(function(n){n in e.prototype&&(t.prototype[n]=function(){return t=this[r],(e=d(t,n,arguments)).then(function(t){if(t)return new _(t,e.request)});var t,e})})}function b(t){this._index=t}function _(t,e){this._cursor=t,this._request=e}function y(t){this._store=t}function w(n){this._tx=n,this.complete=new Promise(function(t,e){n.oncomplete=function(){t()},n.onerror=function(){e(n.error)},n.onabort=function(){e(n.error)}})}function E(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new w(n)}function I(t){this._db=t}g(b,"_index",["name","keyPath","multiEntry","unique"]),h(b,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),v(b,"_index",IDBIndex,["openCursor","openKeyCursor"]),g(_,"_cursor",["direction","key","primaryKey","value"]),h(_,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(_.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),f(e._request).then(function(t){if(t)return new _(t,e._request)})})})}),y.prototype.createIndex=function(){return new b(this._store.createIndex.apply(this._store,arguments))},y.prototype.index=function(){return new b(this._store.index.apply(this._store,arguments))},g(y,"_store",["name","keyPath","indexNames","autoIncrement"]),h(y,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),v(y,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),m(y,"_store",IDBObjectStore,["deleteIndex"]),w.prototype.objectStore=function(){return new y(this._tx.objectStore.apply(this._tx,arguments))},g(w,"_tx",["objectStoreNames","mode"]),m(w,"_tx",IDBTransaction,["abort"]),E.prototype.createObjectStore=function(){return new y(this._db.createObjectStore.apply(this._db,arguments))},g(E,"_db",["name","version","objectStoreNames"]),m(E,"_db",IDBDatabase,["deleteObjectStore","close"]),I.prototype.transaction=function(){return new w(this._db.transaction.apply(this._db,arguments))},g(I,"_db",["name","version","objectStoreNames"]),m(I,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[y,b].forEach(function(t){i in t.prototype&&(t.prototype[i.replace("open","iterate")]=function(){var t=(n=arguments,Array.prototype.slice.call(n)),e=t[t.length-1],n=this._store||this._index,r=n[i].apply(n,t.slice(0,-1));r.onsuccess=function(){e(r.result)}})})}),[b,y].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,n){var r=this,i=[];return new Promise(function(e){r.iterateCursor(t,function(t){t?(i.push(t.value),void 0===n||i.length!=n?t.continue():e(i)):e(i)})})})});var T="0.5.1";const S=1e4,N=`w:${T}`,k="FIS_v2",A="https://firebaseinstallations.googleapis.com/v1",C=36e5;const O=new r("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function P(t){return t instanceof i&&t.code.includes("request-failed")}function R({projectId:t}){return`${A}/projects/${t}/installations`}function M(t){return{token:t.token,requestStatus:2,expiresIn:(t=t.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()}}async function j(t,e){e=(await e.json()).error;return O.create("request-failed",{requestName:t,serverCode:e.code,serverMessage:e.message,serverStatus:e.status})}function B({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function D(t,{refreshToken:e}){const n=B(t);return n.append("Authorization",(e=e,`${k} ${e}`)),n}async function L(t){var e=await t();return 500<=e.status&&e.status<600?t():e}function $(e){return new Promise(t=>{setTimeout(t,e)})}const U=/^[cdef][\w-]{21}$/,q="";function x(){try{const e=new Uint8Array(17),n=self.crypto||self.msCrypto;n.getRandomValues(e),e[0]=112+e[0]%16;var t=function(t){const e=function(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}(t);return e.substr(0,22)}(e);return U.test(t)?t:q}catch(t){return q}}function F(t){return`${t.appName}!${t.appId}`}const H=new Map;function V(t,e){t=F(t);K(t,e),function(t,e){const n=function(){!W&&"BroadcastChannel"in self&&(W=new BroadcastChannel("[Firebase] FID Change"),W.onmessage=t=>{K(t.data.key,t.data.fid)});return W}();n&&n.postMessage({key:t,fid:e});0===H.size&&W&&(W.close(),W=null)}(t,e)}function K(t,e){t=H.get(t);if(t)for(const n of t)n(e)}let W=null;const z="firebase-installations-store";let G=null;function J(){var t,e,n;return G=G||(t=1,e=t=>{0===t.oldVersion&&t.createObjectStore(z)},(n=(t=d(indexedDB,"open",["firebase-installations-database",t])).request)&&(n.onupgradeneeded=function(t){e&&e(new E(n.result,t.oldVersion,n.transaction))}),t.then(function(t){return new I(t)})),G}async function Y(t,e){var n=F(t);const r=await J(),i=r.transaction(z,"readwrite"),o=i.objectStore(z);var a=await o.get(n);return await o.put(e,n),await i.complete,a&&a.fid===e.fid||V(t,e.fid),e}async function Z(t){t=F(t);const e=await J(),n=e.transaction(z,"readwrite");await n.objectStore(z).delete(t),await n.complete}async function Q(t,e){var n=F(t);const r=await J(),i=r.transaction(z,"readwrite"),o=i.objectStore(z);var a=await o.get(n),e=e(a);return void 0===e?await o.delete(n):await o.put(e,n),await i.complete,!e||a&&a.fid===e.fid||V(t,e.fid),e}async function X(e){let n;var t=await Q(e,t=>{t=function(t){t=t||{fid:x(),registrationStatus:0};return et(t)}(t),t=function(t,e){{if(0!==e.registrationStatus)return 1===e.registrationStatus?{installationEntry:e,registrationPromise:async function(t){let e=await tt(t);for(;1===e.registrationStatus;)await $(100),e=await tt(t);if(0!==e.registrationStatus)return e;{var{installationEntry:n,registrationPromise:r}=await X(t);return r||n}}(t)}:{installationEntry:e};if(!navigator.onLine){var n=Promise.reject(O.create("app-offline"));return{installationEntry:e,registrationPromise:n}}e={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},t=async function(e,n){try{var t=await async function(t,{fid:e}){const n=R(t);var r=B(t),t={fid:e,authVersion:k,appId:t.appId,sdkVersion:N};const i={method:"POST",headers:r,body:JSON.stringify(t)},o=await L(()=>fetch(n,i));if(o.ok){t=await o.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:M(t.authToken)}}throw await j("Create Installation",o)}(e,n);return Y(e,t)}catch(t){throw P(t)&&409===t.customData.serverCode?await Z(e):await Y(e,{fid:n.fid,registrationStatus:0}),t}}(t,e);return{installationEntry:e,registrationPromise:t}}}(e,t);return n=t.registrationPromise,t.installationEntry});return t.fid===q?{installationEntry:await n}:{installationEntry:t,registrationPromise:n}}function tt(t){return Q(t,t=>{if(!t)throw O.create("installation-not-found");return et(t)})}function et(t){return 1===(e=t).registrationStatus&&e.registrationTime+S<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}async function nt({appConfig:t,platformLoggerProvider:e},n){const r=([i,o]=[t,n["fid"]],`${R(i)}/${o}/authTokens:generate`);var i,o;const a=D(t,n),s=e.getImmediate({optional:!0});s&&a.append("x-firebase-client",s.getPlatformInfoString());e={installation:{sdkVersion:N}};const c={method:"POST",headers:a,body:JSON.stringify(e)},u=await L(()=>fetch(r,c));if(u.ok)return M(await u.json());throw await j("Generate Auth Token",u)}async function rt(r,i=!1){let o;var t=await Q(r.appConfig,t=>{if(!ot(t))throw O.create("not-registered");var e,n=t.authToken;if(i||2!==(e=n).requestStatus||function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+C}(e)){if(1===n.requestStatus)return o=async function(t,e){let n=await it(t.appConfig);for(;1===n.authToken.requestStatus;)await $(100),n=await it(t.appConfig);var r=n.authToken;return 0===r.requestStatus?rt(t,e):r}(r,i),t;if(!navigator.onLine)throw O.create("app-offline");n=(e=t,n={requestStatus:1,requestTime:Date.now()},Object.assign(Object.assign({},e),{authToken:n}));return o=async function(e,n){try{var t=await nt(e,n),r=Object.assign(Object.assign({},n),{authToken:t});return await Y(e.appConfig,r),t}catch(t){throw!P(t)||401!==t.customData.serverCode&&404!==t.customData.serverCode?(n=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}),await Y(e.appConfig,n)):await Z(e.appConfig),t}}(r,n),n}return t});return o?await o:t.authToken}function it(t){return Q(t,t=>{if(!ot(t))throw O.create("not-registered");var e=t.authToken;return 1===(e=e).requestStatus&&e.requestTime+S<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}function ot(t){return void 0!==t&&2===t.registrationStatus}async function at(t,e=!1){var n=t;return await((t=(await X(t=n.appConfig)).registrationPromise)&&await t),(await rt(n,e)).token}function st(t){return O.create("missing-app-config-values",{valueName:t})}const ct="installations",ut=t=>{t=t.getProvider("app").getImmediate();return{app:t,appConfig:function(t){if(!t||!t.options)throw st("App Configuration");if(!t.name)throw st("App Name");for(const e of["projectId","apiKey","appId"])if(!t.options[e])throw st(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(t),platformLoggerProvider:de._getProvider(t,"platform-logger"),_delete:()=>Promise.resolve()}},lt=t=>{t=t.getProvider("app").getImmediate();const e=de._getProvider(t,ct).getImmediate();return{getId:()=>async function(t){const{installationEntry:e,registrationPromise:n}=await X(t.appConfig);return(n||rt(t)).catch(console.error),e.fid}(e),getToken:t=>at(e,t)}};de._registerComponent(new a(ct,ut,"PUBLIC")),de._registerComponent(new a("installations-internal",lt,"PRIVATE")),de.registerVersion("@firebase/installations",T);const pt="0.5.1",ft="FB-PERF-TRACE-MEASURE",dt="@firebase/performance/config",gt="@firebase/performance/configexpire";var ht,mt,T="Performance";const vt=new r("performance",T,{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."}),bt=new class{constructor(t){this.name=t,this._logLevel=u,this._logHandler=p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in n))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?c[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...t),this._logHandler(this,n.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...t),this._logHandler(this,n.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,n.INFO,...t),this._logHandler(this,n.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,n.WARN,...t),this._logHandler(this,n.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...t),this._logHandler(this,n.ERROR,...t)}}(T);bt.logLevel=n.INFO;let _t,yt;class wt{constructor(t){if(!(this.window=t))throw vt.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){this.performance&&this.performance.mark&&this.performance.mark(t)}measure(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&"undefined"!=typeof navigator&&navigator.cookieEnabled?"object"==typeof indexedDB||(bt.info("IndexedDB is not supported by current browswer"),!1):(bt.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(t,n){if(this.PerformanceObserver){const e=new this.PerformanceObserver(t=>{for(const e of t.getEntries())n(e)});e.observe({entryTypes:[t]})}}static getInstance(){return void 0===_t&&(_t=new wt(yt)),_t}}let Et;function It(e,n){var t=e.length-n.length;if(t<0||1<t)throw vt.create("invalid String merger input");const r=[];for(let t=0;t<e.length;t++)r.push(e.charAt(t)),n.length>t&&r.push(n.charAt(t));return r.join("")}let Tt;class St{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=It("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=It("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===Tt&&(Tt=new St),Tt}}(T=ht=ht||{})[T.UNKNOWN=0]="UNKNOWN",T[T.VISIBLE=1]="VISIBLE",T[T.HIDDEN=2]="HIDDEN";const Nt=["firebase_","google_","ga_"],kt=new RegExp("^[a-zA-Z]\\w*$");function At(){switch(wt.getInstance().document.visibilityState){case"visible":return ht.VISIBLE;case"hidden":return ht.HIDDEN;default:return ht.UNKNOWN}}function Ct(t){t=null===(t=t.options)||void 0===t?void 0:t.appId;if(!t)throw vt.create("no app id");return t}const Ot="0.0.1",Pt={loggingEnabled:!0},Rt="FIREBASE_INSTALLATIONS_AUTH";function Mt(t,e){var r,i,n=function(){const t=wt.getInstance().localStorage;if(t){var e=t.getItem(gt);if(e&&function(t){return Number(t)>Date.now()}(e)){e=t.getItem(dt);if(e)try{return JSON.parse(e)}catch(t){return}}}}();return n?(Bt(n),Promise.resolve()):(i=e,function(t){const e=t.getToken();return e.then(t=>{}),e}((r=t).installations).then(t=>{var e=function(t){if(!(t=null===(t=t.options)||void 0===t?void 0:t.projectId))throw vt.create("no project id");return t}(r.app),n=function(t){if(!(t=null===(t=t.options)||void 0===t?void 0:t.apiKey))throw vt.create("no api key");return t}(r.app),t=new Request(`https://firebaseremoteconfig.googleapis.com/v1/projects/${e}/namespaces/fireperf:fetch?key=${n}`,{method:"POST",headers:{Authorization:`${Rt} ${t}`},body:JSON.stringify({app_instance_id:i,app_instance_id_token:t,app_id:Ct(r.app),app_version:pt,sdk_version:Ot})});return fetch(t).then(t=>{if(t.ok)return t.json();throw vt.create("RC response not ok")})}).catch(()=>{bt.info(jt)}).then(Bt).then(t=>function(t){const e=wt.getInstance().localStorage;t&&e&&(e.setItem(dt,JSON.stringify(t)),e.setItem(gt,String(Date.now()+60*St.getInstance().configTimeToLive*60*1e3)))}(t),()=>{}))}const jt="Could not fetch config, will use default configs";function Bt(t){if(!t)return t;const e=St.getInstance();var n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=Pt.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=Dt(e.tracesSamplingRate),e.logNetworkAfterSampling=Dt(e.networkRequestsSamplingRate),t}function Dt(t){return Math.random()<=t}let Lt=1,$t;function Ut(t){var e;return Lt=2,$t=$t||(e=t,function(){const n=wt.getInstance().document;return new Promise(t=>{if(n&&"complete"!==n.readyState){const e=()=>{"complete"===n.readyState&&(n.removeEventListener("readystatechange",e),t())};n.addEventListener("readystatechange",e)}else t()})}().then(()=>function(t){const e=t.getId();return e.then(t=>{Et=t}),e}(e.installations)).then(t=>Mt(e,t)).then(()=>qt(),()=>qt())),$t}function qt(){Lt=3}const xt=1e4,Ft=3,Ht=1e3;let Vt=Ft,Kt=[],Wt=!1;function zt(t){setTimeout(()=>{if(0!==Vt)return Kt.length?void function(){const t=Kt.splice(0,Ht),e=t.map(t=>({source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:St.getInstance().logSource,log_event:e};!function(t,r){return function(t){var e=St.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}(t).then(t=>(t.ok||bt.info("Call to Firebase backend failed."),t.json())).then(t=>{var e=Number(t.nextRequestWaitMillis);let n=xt;isNaN(e)||(n=Math.max(e,n));t=t.logResponseDetails;Array.isArray(t)&&0<t.length&&"RETRY_REQUEST_LATER"===t[0].responseAction&&(Kt=[...r,...Kt],bt.info("Retry transport request later.")),Vt=Ft,zt(n)})}(n,t).catch(()=>{Kt=[...t,...Kt],Vt--,bt.info(`Tries left: ${Vt}.`),zt(xt)})}():zt(xt)},t)}function Gt(e){return(...t)=>{!function(t){if(!t.eventTime||!t.message)throw vt.create("invalid cc log");Kt=[...Kt,t]}({message:e(...t),eventTime:Date.now()})}}let Jt;function Yt(t,e){Jt=Jt||Gt(Xt),Jt(t,e)}function Zt(t){var e=St.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&wt.getInstance().requiredApisAvailable()&&(t.isAuto&&At()!==ht.VISIBLE||(3===Lt?Qt(t):Ut(t.performanceController).then(()=>Qt(t),()=>Qt(t))))}function Qt(t){var e;!Et||(e=St.getInstance()).loggingEnabled&&e.logTraceAfterSampling&&setTimeout(()=>Yt(t,1),0)}function Xt(t,e){return 0===e?(e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},e={application_info:te(t.performanceController.app),network_request_metric:e},JSON.stringify(e)):function(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);t={application_info:te(t.performanceController.app),trace_metric:e};return JSON.stringify(t)}(t)}function te(t){return{google_app_id:Ct(t),app_instance_id:Et,web_app_info:{sdk_version:pt,page_url:wt.getInstance().getUrl(),service_worker_status:"serviceWorker"in(t=wt.getInstance().navigator)?t.serviceWorker.controller?2:3:1,visibility_state:At(),effective_connection_type:function(){var t=wt.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}()},application_process_state:0}}const ee=["_fp","_fcp","_fid"];class ne{constructor(t,e,n=!1,r){this.performanceController=t,this.name=e,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=wt.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=r||`${ft}-${this.randomId}-${this.name}`,r&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw vt.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw vt.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Zt(this)}record(t,e,n){if(t<=0)throw vt.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw vt.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const r of Object.keys(n.metrics))isNaN(Number(n.metrics[r]))||(this.counters[r]=Number(Math.floor(n.metrics[r])));Zt(this)}incrementMetric(t,e=1){void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)}putMetric(t,e){if(n=t,r=this.name,0===n.length||100<n.length||!(r&&r.startsWith("_wt_")&&-1<ee.indexOf(n))&&n.startsWith("_"))throw vt.create("invalid custom metric name",{customMetricName:t});var n,r;this.counters[t]=(t=e,(e=Math.floor(t))<t&&bt.info(`Metric value should be an Integer, setting the value as : ${e}.`),e)}getMetric(t){return this.counters[t]||0}putAttribute(t,e){var n,r,i=!(0===(n=t).length||40<n.length)&&(!Nt.some(t=>n.startsWith(t))&&!!n.match(kt)),r=0!==(r=e).length&&r.length<=100;if(i&&r)this.customAttributes[t]=e;else{if(!i)throw vt.create("invalid attribute name",{attributeName:t});if(!r)throw vt.create("invalid attribute value",{attributeValue:e})}}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){var t=this.api.getEntriesByName(this.traceMeasure),t=t&&t[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor(1e3*(t.startTime+this.api.getTimeOrigin())))}static createOobTrace(t,e,n,r){var i=wt.getInstance().getUrl();if(i){const o=new ne(t,"_wt_"+i,!0);i=Math.floor(1e3*wt.getInstance().getTimeOrigin());o.setStartTime(i),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));n&&((e=n.find(t=>"first-paint"===t.name))&&e.startTime&&o.putMetric("_fp",Math.floor(1e3*e.startTime)),(n=n.find(t=>"first-contentful-paint"===t.name))&&n.startTime&&o.putMetric("_fcp",Math.floor(1e3*n.startTime)),r&&o.putMetric("_fid",Math.floor(1e3*r))),Zt(o)}}static createUserTimingTrace(t,e){Zt(new ne(t,e,!1,e))}}function re(t,e){const n=e;var r,i;n&&void 0!==n.responseStart&&(i=wt.getInstance().getTimeOrigin(),r=Math.floor(1e3*(n.startTime+i)),e=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,i=Math.floor(1e3*(n.responseEnd-n.startTime)),function(t){const e=St.getInstance();var n,r,i;e.instrumentationEnabled&&(n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0],n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(()=>Yt(t,0),0))}({performanceController:t,url:n.name&&n.name.split("?")[0],responsePayloadBytes:n.transferSize,startTimeUs:r,timeToResponseInitiatedUs:e,timeToResponseCompletedUs:i}))}const ie=5e3;function oe(t){Et&&(setTimeout(()=>function(n){const t=wt.getInstance(),r=t.getEntriesByType("navigation"),i=t.getEntriesByType("paint");if(t.onFirstInputDelay){let e=setTimeout(()=>{ne.createOobTrace(n,r,i),e=void 0},ie);t.onFirstInputDelay(t=>{e&&(clearTimeout(e),ne.createOobTrace(n,r,i,t))})}else ne.createOobTrace(n,r,i)}(t),0),setTimeout(()=>function(e){const t=wt.getInstance(),n=t.getEntriesByType("resource");for(const r of n)re(e,r);t.setupObserver("resource",t=>re(e,t))}(t),0),setTimeout(()=>function(e){const t=wt.getInstance(),n=t.getEntriesByType("measure");for(const r of n)ae(e,r);t.setupObserver("measure",t=>ae(e,t))}(t),0))}function ae(t,e){const n=e.name;n.substring(0,ft.length)!==ft&&ne.createUserTimingTrace(t,n)}class se{constructor(t,e){this.app=t,this.installations=e,this.initialized=!1}_init(t){this.initialized||(void 0!==(null==t?void 0:t.dataCollectionEnabled)&&(this.dataCollectionEnabled=t.dataCollectionEnabled),void 0!==(null==t?void 0:t.instrumentationEnabled)&&(this.instrumentationEnabled=t.instrumentationEnabled),wt.getInstance().requiredApisAvailable()?new Promise((e,n)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var t;n((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){n(t)}}).then(t=>{t&&(Wt||(zt(5500),Wt=!0),Ut(this).then(()=>oe(this),()=>oe(this)),this.initialized=!0)}).catch(t=>{bt.info(`Environment doesn't support IndexedDB: ${t}`)}):bt.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){St.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return St.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){St.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return St.getInstance().dataCollectionEnabled}}const ce="[DEFAULT]";const ue=(t,{options:e})=>{var n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if(n.name!==ce)throw vt.create("FB not default");if("undefined"==typeof window)throw vt.create("no window");t=window,yt=t;const i=new se(n,r);return i._init(e),i};de._registerComponent(new a("performance",ue,"PUBLIC")),de.registerVersion("@firebase/performance","0.5.1");class le{constructor(t,e){this.app=t,this._delegate=e}get instrumentationEnabled(){return this._delegate.instrumentationEnabled}set instrumentationEnabled(t){this._delegate.instrumentationEnabled=t}get dataCollectionEnabled(){return this._delegate.dataCollectionEnabled}set dataCollectionEnabled(t){this._delegate.dataCollectionEnabled=t}trace(t){return e=this._delegate,n=t,e=(t=e)&&t._delegate?t._delegate:t,new ne(e,n);var e,n}}function pe(t){var e=t.getProvider("app-compat").getImmediate(),t=t.getProvider("performance").getImmediate();return new le(e,t)}(mt=e.default).INTERNAL.registerComponent(new a("performance-compat",pe,"PUBLIC")),mt.registerVersion("@firebase/performance-compat","0.1.1")}.apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-performance-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-performance-compat.js.map
