parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VRa1":[function(require,module,exports) {
"use strict";function e(e){return null==e?"":"string"==typeof e||e instanceof String?e:JSON.stringify(e)}function t(e){return Object.keys(e).length?{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}:{}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toCommandProperties=exports.toCommandValue=void 0,exports.toCommandValue=e,exports.toCommandProperties=t;
},{}],"opPA":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var s={};if(null!=r)for(var i in r)"default"!==i&&Object.hasOwnProperty.call(r,i)&&e(s,r,i);return t(s,r),s};Object.defineProperty(exports,"__esModule",{value:!0}),exports.issue=exports.issueCommand=void 0;const s=r(require("os")),i=require("./utils");function n(e,t,r){const i=new u(e,t,r);process.stdout.write(i.toString()+s.EOL)}function o(e,t=""){n(e,{},t)}exports.issueCommand=n,exports.issue=o;const c="::";class u{constructor(e,t,r){e||(e="missing.command"),this.command=e,this.properties=t,this.message=r}toString(){let e=c+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=!0;for(const r in this.properties)if(this.properties.hasOwnProperty(r)){const s=this.properties[r];s&&(t?t=!1:e+=",",e+=`${r}=${p(s)}`)}}return e+=`${c}${a(this.message)}`}}function a(e){return i.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function p(e){return i.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}
},{"./utils":"VRa1"}],"aaaf":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var r={};if(null!=n)for(var i in n)"default"!==i&&Object.hasOwnProperty.call(n,i)&&e(r,n,i);return t(r,n),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.issueCommand=void 0;const r=n(require("fs")),i=n(require("os")),o=require("./utils");function u(e,t){const n=process.env[`GITHUB_${e}`];if(!n)throw new Error(`Unable to find environment variable for file command ${e}`);if(!r.existsSync(n))throw new Error(`Missing file at path: ${n}`);r.appendFileSync(n,`${o.toCommandValue(t)}${i.EOL}`,{encoding:"utf8"})}exports.issueCommand=u;
},{"./utils":"VRa1"}],"X6hf":[function(require,module,exports) {
"use strict";function e(e){let r,o,p="https:"===e.protocol;return t(e)?r:((o=p?process.env.https_proxy||process.env.HTTPS_PROXY:process.env.http_proxy||process.env.HTTP_PROXY)&&(r=new URL(o)),r)}function t(e){if(!e.hostname)return!1;let t,r=process.env.no_proxy||process.env.NO_PROXY||"";if(!r)return!1;e.port?t=Number(e.port):"http:"===e.protocol?t=80:"https:"===e.protocol&&(t=443);let o=[e.hostname.toUpperCase()];"number"==typeof t&&o.push(`${o[0]}:${t}`);for(let p of r.split(",").map(e=>e.trim().toUpperCase()).filter(e=>e))if(o.some(e=>e===p))return!0;return!1}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getProxyUrl=e,exports.checkBypass=t;
},{}],"rrGv":[function(require,module,exports) {
"use strict";var e,t=require("net"),o=require("tls"),r=require("http"),s=require("https"),n=require("events"),c=require("assert"),i=require("util");function u(e){var t=new d(e);return t.request=r.request,t}function a(e){var t=new d(e);return t.request=r.request,t.createSocket=f,t.defaultPort=443,t}function p(e){var t=new d(e);return t.request=s.request,t}function l(e){var t=new d(e);return t.request=s.request,t.createSocket=f,t.defaultPort=443,t}function d(e){var t=this;t.options=e||{},t.proxyOptions=t.options.proxy||{},t.maxSockets=t.options.maxSockets||r.Agent.defaultMaxSockets,t.requests=[],t.sockets=[],t.on("free",function(e,o,r,s){for(var n=v(o,r,s),c=0,i=t.requests.length;c<i;++c){var u=t.requests[c];if(u.host===n.host&&u.port===n.port)return t.requests.splice(c,1),void u.request.onSocket(e)}e.destroy(),t.removeSocket(e)})}function f(e,t){var r=this;d.prototype.createSocket.call(r,e,function(s){var n=e.request.getHeader("host"),c=h({},r.options,{socket:s,servername:n?n.replace(/:.*$/,""):e.host}),i=o.connect(0,c);r.sockets[r.sockets.indexOf(s)]=i,t(i)})}function v(e,t,o){return"string"==typeof e?{host:e,port:t,localAddress:o}:e}function h(e){for(var t=1,o=arguments.length;t<o;++t){var r=arguments[t];if("object"==typeof r)for(var s=Object.keys(r),n=0,c=s.length;n<c;++n){var i=s[n];void 0!==r[i]&&(e[i]=r[i])}}return e}exports.httpOverHttp=u,exports.httpsOverHttp=a,exports.httpOverHttps=p,exports.httpsOverHttps=l,i.inherits(d,n.EventEmitter),d.prototype.addRequest=function(e,t,o,r){var s=this,n=h({request:e},s.options,v(t,o,r));s.sockets.length>=this.maxSockets?s.requests.push(n):s.createSocket(n,function(t){function o(){s.emit("free",t,n)}function r(e){s.removeSocket(t),t.removeListener("free",o),t.removeListener("close",r),t.removeListener("agentRemove",r)}t.on("free",o),t.on("close",r),t.on("agentRemove",r),e.onSocket(t)})},d.prototype.createSocket=function(t,o){var r=this,s={};r.sockets.push(s);var n=h({},r.proxyOptions,{method:"CONNECT",path:t.host+":"+t.port,agent:!1,headers:{host:t.host+":"+t.port}});t.localAddress&&(n.localAddress=t.localAddress),n.proxyAuth&&(n.headers=n.headers||{},n.headers["Proxy-Authorization"]="Basic "+new Buffer(n.proxyAuth).toString("base64")),e("making CONNECT request");var c=r.request(n);function i(n,i,u){var a;return c.removeAllListeners(),i.removeAllListeners(),200!==n.statusCode?(e("tunneling socket could not be established, statusCode=%d",n.statusCode),i.destroy(),(a=new Error("tunneling socket could not be established, statusCode="+n.statusCode)).code="ECONNRESET",t.request.emit("error",a),void r.removeSocket(s)):u.length>0?(e("got illegal response body from proxy"),i.destroy(),(a=new Error("got illegal response body from proxy")).code="ECONNRESET",t.request.emit("error",a),void r.removeSocket(s)):(e("tunneling connection has established"),r.sockets[r.sockets.indexOf(s)]=i,o(i))}c.useChunkedEncodingByDefault=!1,c.once("response",function(e){e.upgrade=!0}),c.once("upgrade",function(e,t,o){process.nextTick(function(){i(e,t,o)})}),c.once("connect",i),c.once("error",function(o){c.removeAllListeners(),e("tunneling socket could not be established, cause=%s\n",o.message,o.stack);var n=new Error("tunneling socket could not be established, cause="+o.message);n.code="ECONNRESET",t.request.emit("error",n),r.removeSocket(s)}),c.end()},d.prototype.removeSocket=function(e){var t=this.sockets.indexOf(e);if(-1!==t){this.sockets.splice(t,1);var o=this.requests.shift();o&&this.createSocket(o,function(e){o.request.onSocket(e)})}},e=process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments);"string"==typeof e[0]?e[0]="TUNNEL: "+e[0]:e.unshift("TUNNEL:"),console.error.apply(console,e)}:function(){},exports.debug=e;
},{}],"fEsN":[function(require,module,exports) {
module.exports=require("./lib/tunnel");
},{"./lib/tunnel":"rrGv"}],"Za8P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("http"),t=require("https"),s=require("./proxy");let r;var o,i,n;function a(e){let t=s.getProxyUrl(new URL(e));return t?t.href:""}!function(e){e[e.OK=200]="OK",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.ResourceMoved=302]="ResourceMoved",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.SwitchProxy=306]="SwitchProxy",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.TooManyRequests=429]="TooManyRequests",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout"}(o=exports.HttpCodes||(exports.HttpCodes={})),function(e){e.Accept="accept",e.ContentType="content-type"}(i=exports.Headers||(exports.Headers={})),function(e){e.ApplicationJson="application/json"}(n=exports.MediaTypes||(exports.MediaTypes={})),exports.getProxyUrl=a;const l=[o.MovedPermanently,o.ResourceMoved,o.SeeOther,o.TemporaryRedirect,o.PermanentRedirect],p=[o.BadGateway,o.ServiceUnavailable,o.GatewayTimeout],h=["OPTIONS","GET","DELETE","HEAD"],u=10,d=5;class c extends Error{constructor(e,t){super(e),this.name="HttpClientError",this.statusCode=t,Object.setPrototypeOf(this,c.prototype)}}exports.HttpClientError=c;class g{constructor(e){this.message=e}readBody(){return new Promise(async(e,t)=>{let s=Buffer.alloc(0);this.message.on("data",e=>{s=Buffer.concat([s,e])}),this.message.on("end",()=>{e(s.toString())})})}}function w(e){return"https:"===new URL(e).protocol}exports.HttpClientResponse=g,exports.isHttps=w;class m{constructor(e,t,s){this._ignoreSslError=!1,this._allowRedirects=!0,this._allowRedirectDowngrade=!1,this._maxRedirects=50,this._allowRetries=!1,this._maxRetries=1,this._keepAlive=!1,this._disposed=!1,this.userAgent=e,this.handlers=t||[],this.requestOptions=s,s&&(null!=s.ignoreSslError&&(this._ignoreSslError=s.ignoreSslError),this._socketTimeout=s.socketTimeout,null!=s.allowRedirects&&(this._allowRedirects=s.allowRedirects),null!=s.allowRedirectDowngrade&&(this._allowRedirectDowngrade=s.allowRedirectDowngrade),null!=s.maxRedirects&&(this._maxRedirects=Math.max(s.maxRedirects,0)),null!=s.keepAlive&&(this._keepAlive=s.keepAlive),null!=s.allowRetries&&(this._allowRetries=s.allowRetries),null!=s.maxRetries&&(this._maxRetries=s.maxRetries))}options(e,t){return this.request("OPTIONS",e,null,t||{})}get(e,t){return this.request("GET",e,null,t||{})}del(e,t){return this.request("DELETE",e,null,t||{})}post(e,t,s){return this.request("POST",e,t,s||{})}patch(e,t,s){return this.request("PATCH",e,t,s||{})}put(e,t,s){return this.request("PUT",e,t,s||{})}head(e,t){return this.request("HEAD",e,null,t||{})}sendStream(e,t,s,r){return this.request(e,t,s,r)}async getJson(e,t={}){t[i.Accept]=this._getExistingOrDefaultHeader(t,i.Accept,n.ApplicationJson);let s=await this.get(e,t);return this._processResponse(s,this.requestOptions)}async postJson(e,t,s={}){let r=JSON.stringify(t,null,2);s[i.Accept]=this._getExistingOrDefaultHeader(s,i.Accept,n.ApplicationJson),s[i.ContentType]=this._getExistingOrDefaultHeader(s,i.ContentType,n.ApplicationJson);let o=await this.post(e,r,s);return this._processResponse(o,this.requestOptions)}async putJson(e,t,s={}){let r=JSON.stringify(t,null,2);s[i.Accept]=this._getExistingOrDefaultHeader(s,i.Accept,n.ApplicationJson),s[i.ContentType]=this._getExistingOrDefaultHeader(s,i.ContentType,n.ApplicationJson);let o=await this.put(e,r,s);return this._processResponse(o,this.requestOptions)}async patchJson(e,t,s={}){let r=JSON.stringify(t,null,2);s[i.Accept]=this._getExistingOrDefaultHeader(s,i.Accept,n.ApplicationJson),s[i.ContentType]=this._getExistingOrDefaultHeader(s,i.ContentType,n.ApplicationJson);let o=await this.patch(e,r,s);return this._processResponse(o,this.requestOptions)}async request(e,t,s,r){if(this._disposed)throw new Error("Client has already been disposed.");let i,n=new URL(t),a=this._prepareRequest(e,n,r),u=this._allowRetries&&-1!=h.indexOf(e)?this._maxRetries+1:1,d=0;for(;d<u;){if((i=await this.requestRaw(a,s))&&i.message&&i.message.statusCode===o.Unauthorized){let e;for(let t=0;t<this.handlers.length;t++)if(this.handlers[t].canHandleAuthentication(i)){e=this.handlers[t];break}return e?e.handleAuthentication(this,a,s):i}let t=this._maxRedirects;for(;-1!=l.indexOf(i.message.statusCode)&&this._allowRedirects&&t>0;){const o=i.message.headers.location;if(!o)break;let l=new URL(o);if("https:"==n.protocol&&n.protocol!=l.protocol&&!this._allowRedirectDowngrade)throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");if(await i.readBody(),l.hostname!==n.hostname)for(let e in r)"authorization"===e.toLowerCase()&&delete r[e];a=this._prepareRequest(e,l,r),i=await this.requestRaw(a,s),t--}if(-1==p.indexOf(i.message.statusCode))return i;(d+=1)<u&&(await i.readBody(),await this._performExponentialBackoff(d))}return i}dispose(){this._agent&&this._agent.destroy(),this._disposed=!0}requestRaw(e,t){return new Promise((s,r)=>{this.requestRawWithCallback(e,t,function(e,t){e&&r(e),s(t)})})}requestRawWithCallback(e,t,s){let r;"string"==typeof t&&(e.options.headers["Content-Length"]=Buffer.byteLength(t,"utf8"));let o=!1,i=(e,t)=>{o||(o=!0,s(e,t))},n=e.httpModule.request(e.options,e=>{let t=new g(e);i(null,t)});n.on("socket",e=>{r=e}),n.setTimeout(this._socketTimeout||18e4,()=>{r&&r.end(),i(new Error("Request timeout: "+e.options.path),null)}),n.on("error",function(e){i(e,null)}),t&&"string"==typeof t&&n.write(t,"utf8"),t&&"string"!=typeof t?(t.on("close",function(){n.end()}),t.pipe(n)):n.end()}getAgent(e){let t=new URL(e);return this._getAgent(t)}_prepareRequest(s,r,o){const i={};i.parsedUrl=r;const n="https:"===i.parsedUrl.protocol;i.httpModule=n?t:e;const a=n?443:80;return i.options={},i.options.host=i.parsedUrl.hostname,i.options.port=i.parsedUrl.port?parseInt(i.parsedUrl.port):a,i.options.path=(i.parsedUrl.pathname||"")+(i.parsedUrl.search||""),i.options.method=s,i.options.headers=this._mergeHeaders(o),null!=this.userAgent&&(i.options.headers["user-agent"]=this.userAgent),i.options.agent=this._getAgent(i.parsedUrl),this.handlers&&this.handlers.forEach(e=>{e.prepareRequest(i.options)}),i}_mergeHeaders(e){const t=e=>Object.keys(e).reduce((t,s)=>(t[s.toLowerCase()]=e[s],t),{});return this.requestOptions&&this.requestOptions.headers?Object.assign({},t(this.requestOptions.headers),t(e)):t(e||{})}_getExistingOrDefaultHeader(e,t,s){let r;return this.requestOptions&&this.requestOptions.headers&&(r=(e=>Object.keys(e).reduce((t,s)=>(t[s.toLowerCase()]=e[s],t),{}))(this.requestOptions.headers)[t]),e[t]||r||s}_getAgent(o){let i,n=s.getProxyUrl(o),a=n&&n.hostname;if(this._keepAlive&&a&&(i=this._proxyAgent),this._keepAlive&&!a&&(i=this._agent),i)return i;const l="https:"===o.protocol;let p=100;if(this.requestOptions&&(p=this.requestOptions.maxSockets||e.globalAgent.maxSockets),a){r||(r=require("tunnel"));const e={maxSockets:p,keepAlive:this._keepAlive,proxy:{...(n.username||n.password)&&{proxyAuth:`${n.username}:${n.password}`},host:n.hostname,port:n.port}};let t;const s="https:"===n.protocol;i=(t=l?s?r.httpsOverHttps:r.httpsOverHttp:s?r.httpOverHttps:r.httpOverHttp)(e),this._proxyAgent=i}if(this._keepAlive&&!i){const s={keepAlive:this._keepAlive,maxSockets:p};i=l?new t.Agent(s):new e.Agent(s),this._agent=i}return i||(i=l?t.globalAgent:e.globalAgent),l&&this._ignoreSslError&&(i.options=Object.assign(i.options||{},{rejectUnauthorized:!1})),i}_performExponentialBackoff(e){e=Math.min(u,e);const t=d*Math.pow(2,e);return new Promise(e=>setTimeout(()=>e(),t))}static dateTimeDeserializer(e,t){if("string"==typeof t){let e=new Date(t);if(!isNaN(e.valueOf()))return e}return t}async _processResponse(e,t){return new Promise(async(s,r)=>{const i=e.message.statusCode,n={statusCode:i,result:null,headers:{}};let a,l;i==o.NotFound&&s(n);try{(l=await e.readBody())&&l.length>0&&(a=t&&t.deserializeDates?JSON.parse(l,m.dateTimeDeserializer):JSON.parse(l),n.result=a),n.headers=e.message.headers}catch(p){}if(i>299){let e;e=a&&a.message?a.message:l&&l.length>0?l:"Failed request: ("+i+")";let t=new c(e,i);t.result=n.result,r(t)}else s(n)})}}exports.HttpClient=m;
},{"./proxy":"X6hf","tunnel":"fEsN"}],"pJrO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class e{constructor(e,t){this.username=e,this.password=t}prepareRequest(e){e.headers.Authorization="Basic "+Buffer.from(this.username+":"+this.password).toString("base64")}canHandleAuthentication(e){return!1}handleAuthentication(e,t,r){return null}}exports.BasicCredentialHandler=e;class t{constructor(e){this.token=e}prepareRequest(e){e.headers.Authorization="Bearer "+this.token}canHandleAuthentication(e){return!1}handleAuthentication(e,t,r){return null}}exports.BearerCredentialHandler=t;class r{constructor(e){this.token=e}prepareRequest(e){e.headers.Authorization="Basic "+Buffer.from("PAT:"+this.token).toString("base64")}canHandleAuthentication(e){return!1}handleAuthentication(e,t,r){return null}}exports.PersonalAccessTokenCredentialHandler=r;
},{}],"Wz8E":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0}),exports.OidcClient=void 0;const t=require("@actions/http-client"),n=require("@actions/http-client/auth"),r=require("./core");class o{static createHttpClient(e=!0,r=10){const i={allowRetries:e,maxRetries:r};return new t.HttpClient("actions/oidc-client",[new n.BearerCredentialHandler(o.getRequestToken())],i)}static getRequestToken(){const e=process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;if(!e)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");return e}static getIDTokenUrl(){const e=process.env.ACTIONS_ID_TOKEN_REQUEST_URL;if(!e)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");return e}static getCall(t){var n;return e(this,void 0,void 0,function*(){const e=o.createHttpClient(),r=yield e.getJson(t).catch(e=>{throw new Error(`Failed to get ID Token. \n \n        Error Code : ${e.statusCode}\n \n        Error Message: ${e.result.message}`)}),i=null===(n=r.result)||void 0===n?void 0:n.value;if(!i)throw new Error("Response json body do not have ID Token field");return i})}static getIDToken(t){return e(this,void 0,void 0,function*(){try{let n=o.getIDTokenUrl();if(t){n=`${n}&audience=${encodeURIComponent(t)}`}r.debug(`ID token url is ${n}`);const i=yield o.getCall(n);return r.setSecret(i),i}catch(e){throw new Error(`Error message: ${e.message}`)}})}}exports.OidcClient=o;
},{"@actions/http-client":"Za8P","@actions/http-client/auth":"pJrO","./core":"RNev"}],"RNev":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(null!=o)for(var n in o)"default"!==n&&Object.hasOwnProperty.call(o,n)&&e(r,o,n);return t(r,o),r},r=this&&this.__awaiter||function(e,t,o,r){return new(o||(o=Promise))(function(n,s){function i(e){try{p(r.next(e))}catch(t){s(t)}}function u(e){try{p(r.throw(e))}catch(t){s(t)}}function p(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(i,u)}p((r=r.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getIDToken=exports.getState=exports.saveState=exports.group=exports.endGroup=exports.startGroup=exports.info=exports.notice=exports.warning=exports.error=exports.debug=exports.isDebug=exports.setFailed=exports.setCommandEcho=exports.setOutput=exports.getBooleanInput=exports.getMultilineInput=exports.getInput=exports.addPath=exports.setSecret=exports.exportVariable=exports.ExitCode=void 0;const n=require("./command"),s=require("./file-command"),i=require("./utils"),u=o(require("os")),p=o(require("path")),a=require("./oidc-utils");var c;function d(e,t){const o=i.toCommandValue(t);if(process.env[e]=o,process.env.GITHUB_ENV||""){const t="_GitHubActionsFileCommandDelimeter_",r=`${e}<<${t}${u.EOL}${o}${u.EOL}${t}`;s.issueCommand("ENV",r)}else n.issueCommand("set-env",{name:e},o)}function f(e){n.issueCommand("add-mask",{},e)}function l(e){process.env.GITHUB_PATH||""?s.issueCommand("PATH",e):n.issueCommand("add-path",{},e),process.env.PATH=`${e}${p.delimiter}${process.env.PATH}`}function m(e,t){const o=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!o)throw new Error(`Input required and not supplied: ${e}`);return t&&!1===t.trimWhitespace?o:o.trim()}function x(e,t){return m(e,t).split("\n").filter(e=>""!==e)}function g(e,t){const o=m(e,t);if(["true","True","TRUE"].includes(o))return!0;if(["false","False","FALSE"].includes(o))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+"Support boolean input list: `true | True | TRUE | false | False | FALSE`")}function v(e,t){process.stdout.write(u.EOL),n.issueCommand("set-output",{name:e},t)}function h(e){n.issue("echo",e?"on":"off")}function C(e){process.exitCode=c.Failure,b(e)}function E(){return"1"===process.env.RUNNER_DEBUG}function _(e){n.issueCommand("debug",{},e)}function b(e,t={}){n.issueCommand("error",i.toCommandProperties(t),e instanceof Error?e.toString():e)}function S(e,t={}){n.issueCommand("warning",i.toCommandProperties(t),e instanceof Error?e.toString():e)}function T(e,t={}){n.issueCommand("notice",i.toCommandProperties(t),e instanceof Error?e.toString():e)}function P(e){process.stdout.write(e+u.EOL)}function w(e){n.issue("group",e)}function I(){n.issue("endgroup")}function O(e,t){return r(this,void 0,void 0,function*(){let o;w(e);try{o=yield t()}finally{I()}return o})}function $(e,t){n.issueCommand("save-state",{name:e},t)}function y(e){return process.env[`STATE_${e}`]||""}function F(e){return r(this,void 0,void 0,function*(){return yield a.OidcClient.getIDToken(e)})}!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"}(c=exports.ExitCode||(exports.ExitCode={})),exports.exportVariable=d,exports.setSecret=f,exports.addPath=l,exports.getInput=m,exports.getMultilineInput=x,exports.getBooleanInput=g,exports.setOutput=v,exports.setCommandEcho=h,exports.setFailed=C,exports.isDebug=E,exports.debug=_,exports.error=b,exports.warning=S,exports.notice=T,exports.info=P,exports.startGroup=w,exports.endGroup=I,exports.group=O,exports.saveState=$,exports.getState=y,exports.getIDToken=F;
},{"./command":"opPA","./file-command":"aaaf","./utils":"VRa1","./oidc-utils":"Wz8E"}],"Focm":[function(require,module,exports) {
const e=require("fs"),r=require("@actions/core"),o=r.getInput("inputDir",{required:!0}).replace(/\/+$/g,""),t=r.getInput("outputDir",{required:!0}).replace(/\/+$/g,"");try{e.rmdirSync(t,{recursive:!0})}catch(i){console.log(`Unable to Delete ${t}`)}try{e.renameSync(o,t)}catch(i){console.error(`Unable to Rename ${o} to ${t} due to ${i}`),process.exit(1)}const s=[],a=async r=>{try{const t=await e.promises.readdir(r);for(const o of t){const t=`${r}/${o}`;(await e.promises.stat(t)).isDirectory()&&await a(t),o.startsWith("_")&&s.push({find:new RegExp(o,"g"),replace:o.replace(/^_*(?=(\w))/g,"")})}}catch(o){console.error("Error in Finding Underscore Replacements"),console.error(o),process.exit(1)}},c=async r=>{try{const t=await e.promises.readdir(r);for(const o of t){const t=`${r}/${o}`,a=await e.promises.stat(t);if(a.isFile()){let r=await e.promises.readFile(t,"utf-8");s.forEach(e=>{r=r.replace(e.find,e.replace)}),await e.promises.writeFile(t,r)}else a.isDirectory()&&await c(t);let i=o;s.forEach(e=>{i=i.replace(e.find,e.replace)}),await e.promises.rename(t,`${r}/${i}`)}}catch(o){console.error("Error in Replacing Underscore"),console.error(o),process.exit(1)}};!async function(){await a(t),console.log("Replacements:",s),await c(t),console.log("next-pages build successful 🤩")}();
},{"@actions/core":"RNev"}]},{},["Focm"], null)