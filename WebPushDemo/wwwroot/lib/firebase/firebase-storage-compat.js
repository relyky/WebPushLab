!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,function(Ke,Je){"use strict";try{!function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(Ke);function r(r){const s=[];let n=0;for(let t=0;t<r.length;t++){let e=r.charCodeAt(t);e<128?s[n++]=e:(e<2048?s[n++]=e>>6|192:(55296==(64512&e)&&t+1<r.length&&56320==(64512&r.charCodeAt(t+1))?(e=65536+((1023&e)<<10)+(1023&r.charCodeAt(++t)),s[n++]=e>>18|240,s[n++]=e>>12&63|128):s[n++]=e>>12|224,s[n++]=e>>6&63|128),s[n++]=63&e|128)}return s}function n(e){return i(e).replace(/\./g,"")}const s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_;const i=[];for(let r=0;r<s.length;r+=3){var o=s[r],a=r+1<s.length,h=a?s[r+1]:0,l=r+2<s.length,c=l?s[r+2]:0;let e=(15&h)<<2|c>>6,t=63&c;l||(t=64,a||(e=64)),i.push(n[o>>2],n[(3&o)<<4|h>>4],n[e],n[t])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,s=0;for(;r<e.length;){var n,i,o=e[r++];o<128?t[s++]=String.fromCharCode(o):191<o&&o<224?(n=e[r++],t[s++]=String.fromCharCode((31&o)<<6|63&n)):239<o&&o<365?(i=((7&o)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536,t[s++]=String.fromCharCode(55296+(i>>10)),t[s++]=String.fromCharCode(56320+(1023&i))):(n=e[r++],i=e[r++],t[s++]=String.fromCharCode((15&o)<<12|(63&n)<<6|63&i))}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(t,e){this.init_();var r=e?this.charToByteMapWebSafe_:this.charToByteMap_;const s=[];for(let e=0;e<t.length;){var n=r[t.charAt(e++)],i=e<t.length?r[t.charAt(e)]:0;++e;var o=e<t.length?r[t.charAt(e)]:64;++e;var a=e<t.length?r[t.charAt(e)]:64;if(++e,null==n||null==i||null==o||null==a)throw Error();s.push(n<<2|i>>4),64!==o&&(s.push(i<<4&240|o>>2),64!==a&&s.push(o<<6&192|a))}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){e=r(e);return s.encodeByteArray(e,!0)};class o extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a.prototype.create)}}class a{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var s,r=t[0]||{},t=`${this.service}/${e}`,e=this.errors[e],e=e?(s=r,e.replace(h,(e,t)=>{var r=s[t];return null!=r?String(r):`<${t}?>`})):"Error",e=`${this.serviceName}: ${e} (${t}).`;return new o(t,e,r)}}const h=/\{\$([^}]+)}/g;function l(e){return e&&e._delegate?e._delegate:e}var c,u,d,_,p=(f.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},f.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},f.prototype.setServiceProps=function(e){return this.serviceProps=e,this},f.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},f);function f(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}(u=c=c||{})[u.NO_ERROR=0]="NO_ERROR",u[u.NETWORK_ERROR=1]="NETWORK_ERROR",u[u.ABORT=2]="ABORT";const g="firebasestorage.googleapis.com",m="storageBucket";class b extends o{constructor(e,t){super(v(e),`Firebase Storage: ${t} (${v(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,b.prototype)}_codeEquals(e){return v(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function v(e){return"storage/"+e}function w(){return new b("unknown","An unknown error occurred, please check the error payload for server response.")}function y(){return new b("canceled","User canceled the upload/download.")}function T(){return new b("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function R(e){return new b("invalid-argument",e)}function k(){return new b("app-deleted","The Firebase app was deleted.")}function S(e){return new b("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function C(e,t){return new b("invalid-format","String does not match format '"+e+"': "+t)}function E(e){throw new b("internal-error","Internal error: "+e)}class A{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=c.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=c.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=c.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw E("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==s)for(const n in s)s.hasOwnProperty(n)&&this.xhr_.setRequestHeader(n,s[n].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw E("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw E("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw E("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class x{createConnection(){return new A}}class U{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=U.makeFromUrl(t,e)}catch(e){return new U(t,"")}if(""===r.path)return r;throw t=t,new b("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let r=null;var s="([A-Za-z0-9.\\-_]+)";var n=new RegExp("^gs://"+s+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}var o=e.replace(/[.]/g,"\\."),o=new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),e=e===g?"(?:storage.googleapis.com|storage.cloud.google.com)":e,a=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:o,indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${e}/${s}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let e=0;e<a.length;e++){const c=a[e];var h=c.regex.exec(t);if(h){var l=h[c.indices.bucket];let e=h[c.indices.path];e=e||"",r=new U(l,e),c.postModify(r);break}}if(null==r)throw s=t,new b("invalid-url","Invalid URL '"+s+"'.");return r}}class O{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=0){}}function P(e){return"string"==typeof e||e instanceof String}function I(e){return M()&&e instanceof Blob}function M(){return"undefined"!=typeof Blob}function B(e,t,r,s){if(s<t)throw R(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r<s)throw R(`Invalid value for '${e}'. Expected ${r} or less.`)}function N(e,t,r){let s=null==r?`https://${t}`:t;return`${r}://${s}/v0${e}`}function D(e){const t=encodeURIComponent;let r="?";for(const n in e){var s;e.hasOwnProperty(n)&&(s=t(n)+"="+t(e[n]),r=r+s+"&")}return r=r.slice(0,-1),r}class L{constructor(e,t,r,s,n,i,o,a,h,l,c){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=n,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=h,this.progressCallback_=l,this.pool_=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){var e=(s,e)=>{if(e)s(!1,new q(!1,null,!0));else{const n=this.pool_.createConnection();this.pendingConnection_=n;const i=e=>{var t=e.loaded,e=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,e)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;var e,t=n.getErrorCode()===c.NO_ERROR,r=n.getStatus();t&&!this.isRetryStatusCode_(r)?(e=-1!==this.successCodes_.indexOf(r),s(!0,new q(e,n))):(e=n.getErrorCode()===c.ABORT,s(!1,new q(!1,null,e)))})}},t=(e,t)=>{const r=this.resolve_,s=this.reject_,n=t.connection;if(t.wasSuccessCode)try{var i=this.callback_(n,n.getResponseText());void 0!==i?r(i):r()}catch(e){s(e)}else if(null!==n){const a=w();a.serverResponse=n.getResponseText(),this.errorCallback_?s(this.errorCallback_(n,a)):s(a)}else{var o;t.canceled?(o=(this.appDelete_?k:y)(),s(o)):(o=new b("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),s(o))}};this.canceled_?t(0,new q(!1,null,!0)):this.backoffId_=function(t,r,e){let s=1,n=null,i=!1,o=0;function a(){return 2===o}let h=!1;function l(...e){h||(h=!0,r.apply(null,e))}function c(e){n=setTimeout(()=>{n=null,t(u,a())},e)}function u(e,...t){if(!h)if(e)l.call(null,e,...t);else if(a()||i)l.call(null,e,...t);else{s<64&&(s*=2);let e;e=1===o?(o=2,0):1e3*(s+Math.random()),c(e)}}let d=!1;function _(e){d||(d=!0,h||(null!==n?(e||(o=2),clearTimeout(n),c(0)):e||(o=1)))}return c(0),setTimeout(()=>{_(i=!0)},e),_}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){var t=500<=e&&e<600,r=-1!==[408,429].indexOf(e),e=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||e}}class q{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function F(...t){const e="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==e){const r=new e;for(let e=0;e<t.length;e++)r.append(t[e]);return r.getBlob()}if(M())return new Blob(t);throw new b("unsupported-environment","This browser doesn't seem to support creating Blobs")}const j={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class z{constructor(e,t){this.data=e,this.contentType=t||null}}function H(e,t){switch(e){case j.RAW:return new z($(t));case j.BASE64:case j.BASE64URL:return new z(W(e,t));case j.DATA_URL:return new z(function(e){e=new V(e);return e.base64?W(j.BASE64,e.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw C(j.DATA_URL,"Malformed data URL.")}return $(t)}(e.rest)}(t),function(e){e=new V(e);return e.contentType}(t))}throw w()}function $(r){const s=[];for(let t=0;t<r.length;t++){let e=r.charCodeAt(t);var n,i;e<=127?s.push(e):e<=2047?s.push(192|e>>6,128|63&e):55296==(64512&e)?t<r.length-1&&56320==(64512&r.charCodeAt(t+1))?(n=e,i=r.charCodeAt(++t),e=65536|(1023&n)<<10|1023&i,s.push(240|e>>18,128|e>>12&63,128|e>>6&63,128|63&e)):s.push(239,191,189):56320==(64512&e)?s.push(239,191,189):s.push(224|e>>12,128|e>>6&63,128|63&e)}return new Uint8Array(s)}function W(t,e){switch(t){case j.BASE64:var r=-1!==e.indexOf("-"),s=-1!==e.indexOf("_");if(r||s)throw C(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case j.BASE64URL:s=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(s||r)throw C(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}let n;try{n=atob(e)}catch(e){throw C(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let e=0;e<n.length;e++)i[e]=n.charCodeAt(e);return i}class V{constructor(e){this.base64=!1,this.contentType=null;var t,r=e.match(/^data:([^,]+)?,/);if(null===r)throw C(j.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=r[1]||null;null!=s&&(this.base64=(t=s,r=";base64",t.length>=r.length&&t.substring(t.length-r.length)===r),this.contentType=this.base64?s.substring(0,s.length-";base64".length):s),this.rest=e.substring(e.indexOf(",")+1)}}class G{constructor(e,t){let r=0,s="";I(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(I(this.data_)){var r=this.data_,s=(n=e,s=t,(r=r).webkitSlice?r.webkitSlice(n,s):r.mozSlice?r.mozSlice(n,s):r.slice?r.slice(n,s):null);return null===s?null:new G(s)}var n,s,e=new Uint8Array(this.data_.buffer,e,t-e);return new G(e,!0)}static getBlob(...e){if(M()){var t=e.map(e=>e instanceof G?e.data_:e);return new G(F.apply(null,t))}{const s=e.map(e=>P(e)?H(j.RAW,e).data:e.data_);let t=0;s.forEach(e=>{t+=e.byteLength});const n=new Uint8Array(t);let r=0;return s.forEach(t=>{for(let e=0;e<t.length;e++)n[r++]=t[e]}),new G(n,!0)}}uploadData(){return this.data_}}function X(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(e=t)||Array.isArray(e)?null:t}function K(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function J(e,t){return t}class Z{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||J}}let Y=null;function Q(){if(Y)return Y;const e=[];e.push(new Z("bucket")),e.push(new Z("generation")),e.push(new Z("metageneration")),e.push(new Z("name","fullPath",!0));const t=new Z("name");t.xform=function(e,t){return!P(t=t)||t.length<2?t:K(t)},e.push(t);const r=new Z("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new Z("timeCreated")),e.push(new Z("updated")),e.push(new Z("md5Hash",null,!0)),e.push(new Z("cacheControl",null,!0)),e.push(new Z("contentDisposition",null,!0)),e.push(new Z("contentEncoding",null,!0)),e.push(new Z("contentLanguage",null,!0)),e.push(new Z("contentType",null,!0)),e.push(new Z("metadata","customMetadata",!0)),Y=e,Y}function ee(r,s){Object.defineProperty(r,"ref",{get:function(){var e=r.bucket,t=r.fullPath,t=new U(e,t);return s._makeStorageReference(t)}})}function te(e,t,r){t=X(t);return null===t?null:function(e,t,r){const s={type:"file"};var n=r.length;for(let e=0;e<n;e++){const i=r[e];s[i.local]=i.xform(s,t[i.server])}return ee(s,e),s}(e,t,r)}function re(t,r){const s={};var n=r.length;for(let e=0;e<n;e++){var i=r[e];i.writable&&(s[i.server]=t[i.local])}return JSON.stringify(s)}const se="prefixes";function ne(e,t,r){r=X(r);return null===r?null:function(e,t,r){const s={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[se])for(const o of r[se]){var n=o.replace(/\/$/,""),n=e._makeStorageReference(new U(t,n));s.prefixes.push(n)}if(r.items)for(const a of r.items){var i=e._makeStorageReference(new U(t,a.name));s.items.push(i)}return s}(e,t,r)}class ie{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function oe(e){if(!e)throw w()}function ae(r,s){return function(e,t){return oe(null!==(t=te(r,t,s))),t}}function he(r,s){return function(e,t){return oe(null!==(t=ne(r,s,t))),t}}function le(s,n){return function(e,t){var r=te(s,t,n);return oe(null!==r),function(s,e,n,i){if(null===(e=X(e)))return null;if(!P(e.downloadTokens))return null;const t=e.downloadTokens;if(0===t.length)return null;const o=encodeURIComponent,r=t.split(",");return r.map(e=>{var t=s.bucket,r=s.fullPath;return N("/b/"+o(t)+"/o/"+o(r),n,i)+D({alt:"media",token:e})})[0]}(r,t,s.host,s._protocol)}}function ce(n){return function(e,t){let r;var s;return r=401===e.getStatus()?e.getResponseText().includes("Firebase App Check token is invalid")?new b("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new b("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(s=n.bucket,new b("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(e=n.path,new b("unauthorized","User does not have permission to access '"+e+"'.")):t,r.serverResponse=t.serverResponse,r}}function ue(s){const n=ce(s);return function(e,t){let r=n(e,t);return 404===e.getStatus()&&(r=(e=s.path,new b("object-not-found","Object '"+e+"' does not exist."))),r.serverResponse=t.serverResponse,r}}function de(e,t,r){var s=N(t.fullServerUrl(),e.host,e._protocol),n=e.maxOperationRetryTime;const i=new ie(s,"GET",ae(e,r),n);return i.errorHandler=ue(t),i}function _e(e,t,r){const s=Object.assign({},r);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=(e=t,(t=null)&&t.contentType||e&&e.type()||"application/octet-stream")),s}function pe(e,t,r,s,n){var i=t.bucketOnlyServerUrl();const o={"X-Goog-Upload-Protocol":"multipart"};var a=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();o["Content-Type"]="multipart/related; boundary="+a;var h=_e(t,s,n),n="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+re(h,r)+"\r\n--"+a+"\r\nContent-Type: "+h.contentType+"\r\n\r\n",a="\r\n--"+a+"--";const l=G.getBlob(n,s,a);if(null===l)throw T();a={name:h.fullPath},h=N(i,e.host,e._protocol),i=e.maxUploadRetryTime;const c=new ie(h,"POST",ae(e,r),i);return c.urlParams=a,c.headers=o,c.body=l.uploadData(),c.errorHandler=ce(t),c}class fe{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function ge(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){oe(!1)}const s=t||["active"];return oe(!!r&&-1!==s.indexOf(r)),r}function me(e,t,r,s,n){var i=t.bucketOnlyServerUrl(),o=_e(t,s,n),n={name:o.fullPath},i=N(i,e.host,e._protocol),s={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},r=re(o,r),e=e.maxUploadRetryTime;const a=new ie(i,"POST",function(e){ge(e);let t;try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){oe(!1)}return oe(P(t)),t},e);return a.urlParams=n,a.headers=s,a.body=r,a.errorHandler=ce(t),a}function be(e,t,r,s){e=e.maxUploadRetryTime;const n=new ie(r,"POST",function(e){var t=ge(e,["active","final"]);let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){oe(!1)}return r||oe(!1),e=Number(r),oe(!isNaN(e)),new fe(e,s.size(),"final"===t)},e);return n.headers={"X-Goog-Upload-Command":"query"},n.errorHandler=ce(t),n}function ve(e,o,t,a,r,h,s,n){const l=new fe(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=a.size()),a.size()!==l.total)throw new b("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var i=l.total-l.current;let c=i;0<r&&(c=Math.min(c,r));s=l.current,r=s+c,i={"X-Goog-Upload-Command":c===i?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`};const u=a.slice(s,r);if(null===u)throw T();r=o.maxUploadRetryTime;const d=new ie(t,"POST",function(e,t){var r=ge(e,["active","final"]),s=l.current+c,n=a.size();let i;return i="final"===r?ae(o,h)(e,t):null,new fe(s,n,"final"===r,i)},r);return d.headers=i,d.body=u.uploadData(),d.progressCallback=n||null,d.errorHandler=ce(e),d}const we={STATE_CHANGED:"state_changed"},ye={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Te(e){switch(e){case"running":case"pausing":case"canceling":return ye.RUNNING;case"paused":return ye.PAUSED;case"success":return ye.SUCCESS;case"canceled":return ye.CANCELED;default:return ye.ERROR}}class Re{constructor(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=(e=e).next,this.error=e.error,this.complete=e.complete)}}function ke(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Se{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Q(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(e){return 262144<e.size()}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(r){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,t])=>{switch(this._state){case"running":r(e,t);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{var r=me(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata);const s=this._ref.storage._makeRequest(r,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const n=this._uploadUrl;this._resolveToken((e,t)=>{var r=be(this._ref.storage,this._ref._location,n,this._blob);const s=this._ref.storage._makeRequest(r,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const n=262144*this._chunkMultiplier,i=new fe(this._transferred,this._blob.size()),o=this._uploadUrl;this._resolveToken((e,t)=>{let r;try{r=ve(this._ref._location,this._ref.storage,o,this._blob,n,this._mappings,i,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const s=this._ref.storage._makeRequest(r,e,t);this._request=s,s.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){262144*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{var r=de(this._ref.storage,this._ref._location,this._mappings);const s=this._ref.storage._makeRequest(r,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{var r=pe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata);const s=this._ref.storage._makeRequest(r,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":var t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=y(),this._state=e,this._notifyObservers();break;case"error":case"success":this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){var e=Te(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const n=new Re(t||void 0,r||void 0,s||void 0);return this._addObserver(n),()=>{this._removeObserver(n)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){e=this._observers.indexOf(e);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Te(this._state)){case ye.SUCCESS:ke(this._resolve.bind(null,this.snapshot))();break;case ye.CANCELED:case ye.ERROR:const t=this._reject;ke(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Te(this._state)){case ye.RUNNING:case ye.PAUSED:e.next&&ke(e.next.bind(e,this.snapshot))();break;case ye.SUCCESS:e.complete&&ke(e.complete.bind(e))();break;case ye.CANCELED:case ye.ERROR:default:e.error&&ke(e.error.bind(e,this._error))()}}resume(){var e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){var e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){var e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class Ce{constructor(e,t){this._service=e,t instanceof U?this._location=t:this._location=U.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ce(e,t)}get root(){var e=new U(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return K(this._location.path)}get storage(){return this._service}get parent(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;e=new U(this._location.bucket,e);return new Ce(this._service,e)}_throwIfRoot(e){if(""===this._location.path)throw S(e)}}function Ee(e){const t={prefixes:[],items:[]};return async function e(t,r,s){const n={pageToken:s};const i=await Ae(t,n);r.prefixes.push(...i.prefixes);r.items.push(...i.items);null!=i.nextPageToken&&await e(t,r,i.nextPageToken)}(e,t).then(()=>t)}async function Ae(e,t){null!=t&&"number"==typeof t.maxResults&&B("options.maxResults",1,1e3,t.maxResults);t=t||{},t=function(e,t,r,s,n){const i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&0<r.length&&(i.delimiter=r),s&&(i.pageToken=s),n&&(i.maxResults=n),s=N(t.bucketOnlyServerUrl(),e.host,e._protocol),n=e.maxOperationRetryTime;const o=new ie(s,"GET",he(e,t.bucket),n);return o.urlParams=i,o.errorHandler=ce(t),o}(e.storage,e._location,"/",t.pageToken,t.maxResults);return(await e.storage.makeRequestWithTokens(t)).getPromise()}async function xe(e,t){e._throwIfRoot("updateMetadata");t=function(e,t,r,s){var n=N(t.fullServerUrl(),e.host,e._protocol),i=re(r,s),r=e.maxOperationRetryTime;const o=new ie(n,"PATCH",ae(e,s),r);return o.headers={"Content-Type":"application/json; charset=utf-8"},o.body=i,o.errorHandler=ue(t),o}(e.storage,e._location,t,Q());return(await e.storage.makeRequestWithTokens(t)).getPromise()}async function Ue(e){e._throwIfRoot("getDownloadURL");var t=function(e,t,r){var s=N(t.fullServerUrl(),e.host,e._protocol),n=e.maxOperationRetryTime;const i=new ie(s,"GET",le(e,r),n);return i.errorHandler=ue(t),i}(e.storage,e._location,Q());return(await e.storage.makeRequestWithTokens(t)).getPromise().then(e=>{if(null===e)throw new b("no-download-url","The given file does not have any download URLs.");return e})}async function Oe(e){e._throwIfRoot("deleteObject");var t=function(e,t){var r=N(t.fullServerUrl(),e.host,e._protocol),e=e.maxOperationRetryTime;const s=new ie(r,"DELETE",function(e,t){},e);return s.successCodes=[200,204],s.errorHandler=ue(t),s}(e.storage,e._location);return(await e.storage.makeRequestWithTokens(t)).getPromise()}function Pe(e,t){var r,t=(r=e._location.path,t=(t=t).split("/").filter(e=>0<e.length).join("/"),0===r.length?t:r+"/"+t),t=new U(e._location.bucket,t);return new Ce(e.storage,t)}function Ie(e,t){if(e instanceof De){var r=e;if(null==r._bucket)throw new b("no-default-bucket","No default bucket found. Did you set the '"+m+"' property when initializing the app?");r=new Ce(r,r._bucket);return null!=t?Ie(r,t):r}return void 0!==t?Pe(e,t):e}function Me(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof De)return r=e,s=t,new Ce(r,s);throw R("To use ref(service, url), the first argument must be a Storage instance.")}return Ie(e,t);var r,s}function Be(e,t){t=null==t?void 0:t[m];return null==t?null:U.makeFromBucketSpec(t,e)}function Ne(e,t,r,s={}){e.host=`${t}:${r}`,e._protocol="http";var s=s["mockUserToken"];s&&(e._overrideAuthToken="string"==typeof s?s:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var r=t||"demo-project",s=e.iat||0;if(!(t=e.sub||e.user_id))throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");return e=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:t,user_id:t,firebase:{sign_in_provider:"custom",identities:{}}},e),[n(JSON.stringify({alg:"none",type:"JWT"})),n(JSON.stringify(e)),""].join(".")}(s,e.app.options.projectId))}class De{constructor(e,t,r,s,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._pool=s,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=g,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=n?U.makeFromBucketSpec(n,this._host):Be(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=U.makeFromBucketSpec(this._url,e):this._bucket=Be(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){B("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){B("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){var t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ce(this,e)}_makeRequest(e,t,r){if(this._deleted)return new O(k());{const l=(s=e,n=this._appId,i=t,o=r,a=this._pool,h=this._firebaseVersion,e=D(s.urlParams),t=s.url+e,r=Object.assign({},s.headers),e=r,(n=n)&&(e["X-Firebase-GMPID"]=n),n=r,null!==(i=i)&&0<i.length&&(n.Authorization="Firebase "+i),h=h,r["X-Firebase-Storage-Version"]="webjs/"+(null!=h?h:"AppManager"),h=r,null!==(o=o)&&(h["X-Firebase-AppCheck"]=o),new L(t,s.method,r,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,a));return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}var s,n,i,o,a,h}async makeRequestWithTokens(e){var[t,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r)}}function Le(e,t,r){return e=l(e),t=t,r=r,(e=e)._throwIfRoot("uploadBytesResumable"),new Se(e,new G(t),r)}function qe(e){return async function(e){e._throwIfRoot("getMetadata");var t=de(e.storage,e._location,Q());return(await e.storage.makeRequestWithTokens(t)).getPromise()}(e=l(e))}function Fe(e,t){return Me(e=l(e),t)}function je(e,{instanceIdentifier:t}){var r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),e=e.getProvider("app-check-internal");return new De(r,s,e,new x,t,Je.SDK_VERSION)}Je._registerComponent(new p("storage",je,"PUBLIC").setMultipleInstances(!0)),Je.registerVersion("@firebase/storage","0.8.3");class ze{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}class He{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new ze(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then(e=>{if(t)return t(new ze(e,this,this._ref))},e)}on(e,t,r,s){let n=void 0;return t&&(n="function"==typeof t?e=>t(new ze(e,this,this._ref)):{next:t.next?e=>t.next(new ze(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,n,r||void 0,s||void 0)}}class $e{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new We(e,this._service))}get items(){return this._delegate.items.map(e=>new We(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}class We{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){e=Pe(this._delegate,e);return new We(e,this.storage)}get root(){return new We(this._delegate.root,this.storage)}get parent(){var e=this._delegate.parent;return null==e?null:new We(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new He(Le(this._delegate,e,t),this)}putString(e,t=j.RAW,r){this._throwIfRoot("putString");e=H(t,e);const s=Object.assign({},r);return null==s.contentType&&null!=e.contentType&&(s.contentType=e.contentType),new He(new Se(this._delegate,new G(e.data,!0),s),this)}listAll(){return Ee(l(this._delegate)).then(e=>new $e(e,this.storage))}list(e){return t=this._delegate,e=e||void 0,Ae(t=l(t),e).then(e=>new $e(e,this.storage));var t}getMetadata(){return qe(this._delegate)}updateMetadata(e){return xe(l(this._delegate),e)}getDownloadURL(){return Ue(l(this._delegate))}delete(){return this._throwIfRoot("delete"),Oe(l(this._delegate))}_throwIfRoot(e){if(""===this._delegate._location.path)throw S(e)}}class Ve{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Ge(e))throw R("ref() expected a child path but got a URL, use refFromURL instead.");return new We(Fe(this._delegate,e),this)}refFromURL(e){if(!Ge(e))throw R("refFromURL() expected a full URL but got a child path, use ref() instead.");try{U.makeFromUrl(e,this._delegate.host)}catch(e){throw R("refFromUrl() expected a valid full URL but got an invalid one.")}return new We(Fe(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){var s;[s,e,t,r={}]=[this._delegate,e,t,r],Ne(s,e,t,r)}}function Ge(e){return/^[A-Za-z]+:\/\//.test(e)}function Xe(e,{instanceIdentifier:t}){var r=e.getProvider("app-compat").getImmediate(),t=e.getProvider("storage").getImmediate({identifier:t});return new Ve(r,t)}d=t.default,_={TaskState:ye,TaskEvent:we,StringFormat:j,Storage:Ve,Reference:We},d.INTERNAL.registerComponent(new p("storage-compat",Xe,"PUBLIC").setServiceProps(_).setMultipleInstances(!0)),d.registerVersion("@firebase/storage-compat","0.1.3")}.apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-storage-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-storage-compat.js.map
