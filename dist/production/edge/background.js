(()=>{"use strict";var e={4470:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.http=t.Http=void 0;class r{request(e,t,r){const o=(null==r?void 0:r.onJSONSuccess)?"json":"text";fetch(e,t).then((e=>"json"===o?e.json():e.text())).then((e=>{var t,s;return"json"===o?null===(t=null==r?void 0:r.onJSONSuccess)||void 0===t?void 0:t.call(r,e):null===(s=null==r?void 0:r.onTextSuccess)||void 0===s?void 0:s.call(r,e)})).catch((e=>{var t;null===(t=null==r?void 0:r.onError)||void 0===t||t.call(r,e)}))}get(e,t){return this.request(e.url,{headers:(null==e?void 0:e.headers)||{},method:"GET"},t)}post(e,t){return this.request(e.url,{headers:(null==e?void 0:e.headers)||{},method:"POST",body:e.body||""},t)}}t.Http=r,t.http=new r},5747:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Register=void 0;t.Register=class{constructor(){this.storage=new Map}set(e,t){return this.storage.set(e,t),t}get(e){return this.storage.get(e)}remove(e){return!!this.storage.has(e)&&(this.storage.delete(e),!0)}has(e){return this.storage.has(e)}}},7838:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isNumberInString=t.isNotEmpty=t.isString=void 0;t.isString=e=>"string"==typeof e;t.isNotEmpty=e=>!!(0,t.isString)(e)&&""!==e.trim();t.isNumberInString=e=>{if("string"!=typeof e)return!1;const t=e.trim();return!!/^[.0-9]*$/.test(t)&&!Number.isNaN(parseFloat(t))}},412:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.capitalizeFirstLetter=t.formatString=t.deduplicateArray=t.parseJSONSafe=t.clearExtraSpaces=t.uuid=t.isFlatObjectsEqual=void 0;t.isFlatObjectsEqual=(e,t)=>{const r=Object.keys(e),o=Object.keys(t);return r.length===o.length&&!r.some((r=>e[r]!==t[r]))};t.uuid=()=>Math.random().toString(36).substring(5)+Date.now().toString(36)+Math.random().toString(36).substring(5);t.clearExtraSpaces=e=>e.replace(/ +/g," ");t.parseJSONSafe=(e,t)=>{try{return JSON.parse(e)}catch(e){return t}};t.deduplicateArray=e=>[...Array.from(new Set([...e]))];t.formatString=(e,t,r)=>Object.keys(t||{}).map((e=>({value:t[e],key:r?r(e):`%${e}`}))).reduce(((e,t)=>e.replace(new RegExp(t.key,"g"),t.value)),e)||e;t.capitalizeFirstLetter=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`},9068:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mapType=t.LogLevel=t.Mode=void 0,function(e){e.production="production",e.development="development"}(t.Mode||(t.Mode={})),function(e){e.info="info",e.debug="debug",e.error="error",e.warn="warn"}(t.LogLevel||(t.LogLevel={}));t.mapType=e=>e},7413:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingKey=void 0,function(e){e.resourcesAdding="resourcesAdding",e.fieldAdding="fieldAdding",e.fieldRemoving="fieldRemoving"}(t.LoadingKey||(t.LoadingKey={}))},2545:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageToApp=void 0;const o=r(332);var s;!function(e){e.AppShowExtension="AppShowExtension",e.AppTakeResourceData="AppTakeResourceData",e.AppTakeNewResourceData="AppTakeNewResourceData",e.AppClearResourceData="AppClearResourceData",e.AppAddFieldToWatch="AppAddFieldToWatch",e.AppSetLoadingState="AppSetLoadingState"}(s=t.MessageToApp||(t.MessageToApp={})),Object.values(s).forEach((e=>{if("app"!==(0,o.getExecutingContextByMessageType)(e))throw new Error(`Wrong app message type "${e}"`)}))},9273:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addListener=t.removeBGInterceptor=t.setBGInterceptor=t.isBGInterceptorMatched=t.interceptors=void 0;const o=r(926),s=r(332),n=r(9068),i=r(412),a=r(1846),d=r(5099),l=r(5482).loggers.addPrefix((0,a.getDebugPrefix)("background")).addPrefix("listeners"),c={};t.interceptors={},c[o.BGListenerType.OnMessage]=(e,...t)=>{if((0,d.isRuntimeOnMessageSupported)()&&(0,s.getBrowserContext)().runtime.onMessage.addListener(e,...t),!(0,d.isRuntimeOnMessageExternalSupported)())return;(0,s.getBrowserContext)().runtime.onMessageExternal.addListener(((...t)=>{const r=t[0],o=t[1];new URL(o.url).origin===o.origin&&r.externalType===a.DebugID.debugIDExternal&&e(...t)}))},c[o.BGListenerType.OnBrowserTabRemoved]=(e,...t)=>{(0,d.isTabsOnRemovedSupported)()&&(0,s.getBrowserContext)().tabs.onRemoved.addListener(e,...t)},c[o.BGListenerType.OnExtensionIconClicked]=(e,...t)=>{const r=(0,s.getBrowserContext)(),o=void 0!==r.action?"action":"browserAction";("action"!==o||(0,d.isActionOnClickedSupported)())&&("browserAction"!==o||(0,d.isBrowserActionOnClickedSupported)())&&r[o].onClicked.addListener(e,...t)},c[o.BGListenerType.OnBeforeRequest]=(e,...t)=>{(0,d.isOnBeforeRequestSupported)()&&(0,s.getBrowserContext)().webRequest.onBeforeRequest.addListener(e,...t)},c[o.BGListenerType.OnBeforeSendHeaders]=(e,...t)=>{(0,d.isOnBeforeSendHeadersSupported)()&&(0,s.getBrowserContext)().webRequest.onBeforeSendHeaders.addListener(e,...t)};t.isBGInterceptorMatched=(e,t,...r)=>!!t()&&(l.debug().log(`intercepted ${e}`,...r),!0);t.setBGInterceptor=(e,r)=>{const o=(0,n.mapType)(r);return o.id=(0,i.uuid)(),t.interceptors[e]=[...t.interceptors[e]||[],o],o.id};t.removeBGInterceptor=(e,r)=>{(r?[r]:Object.keys(t.interceptors)).forEach((r=>{t.interceptors[r]=t.interceptors[r].filter((t=>t.id!==e))}))};t.addListener=(e,r,...o)=>{var s;null===(s=c[e])||void 0===s||s.call(c,((...s)=>{(t.interceptors[e]||[]).forEach((n=>{n&&"function"==typeof n&&n(n.id,{listenerParams:s,createListenerParams:[r,...o]},((r,...o)=>(0,t.isBGInterceptorMatched)(e,r,...o)))})),r(...s)}),...o)}},6795:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(s,n){function i(e){try{d(o.next(e))}catch(e){n(e)}}function a(e){try{d(o.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.waitBGMessage=t.registerPlatformsOnOpenedTabs=t.unregisterPlatformTabs=t.registerPlatformTab=t.normalizeParsedResource=t.sendMessageFromBackground=void 0;const s=r(926),n=r(332),i=r(7217),a=r(7134),d=r(9273),l=r(1846),c=r(412),u=r(5099),g=r(5482).loggers.addPrefix((0,l.getDebugPrefix)("background")).addPrefix("services");t.sendMessageFromBackground=(e,t)=>{var r;const o=(0,n.getBrowserContext)();if(t.id=t.id||(0,c.uuid)(),!(0,u.isTabsSendMessageSupported)(t,e))return;const s="sendMessageFromBackground";try{null===(r=o.tabs.sendMessage(e,t))||void 0===r||r.catch((e=>g.error().addPrefix(s).log(e,t))),g.debug().addPrefix(s).log(t)}catch(e){g.error().addPrefix(s).log(e,t)}};t.normalizeParsedResource=e=>{const t={};return Object.keys(e||{}).forEach((r=>{t[r]=Array.from(e[r])})),t};const p=new Map;t.registerPlatformTab=(e,t)=>{if(!t)return g.warn().log("No tab id for register",e);const r=i.platformResolver.resolve(e),o=p.get(t);r&&o!==e&&(r.register(),p.set(t,e),g.debug().log("registered platform tab",e,t))};t.unregisterPlatformTabs=e=>{const t=(e||[]).reduce(((e,t)=>{if(!t)return g.warn().log("No tab id for unregister",t);const r=p.get(t);return r&&(e.add(r),p.delete(t),g.debug().log("unregistered platform tab",t)),e}),new Set);Array.from(t).forEach((e=>{if((e=>Array.from(p).some((([,t])=>t===e)))(e))return;const t=i.platformResolver.resolve(e);if(!t)return g.warn().log("can not resolve platform for unregister",e);t.unregister()})),p.size<1&&g.info().log("there are no platforms tabs left")};t.registerPlatformsOnOpenedTabs=()=>{const e=(0,n.getBrowserContext)();(0,u.isTabsQuerySupported)()&&e.tabs.query({},(e=>{e.forEach((e=>{if(!(null==e?void 0:e.url))return;const r=a.PlatformResolver.resolveByUrl(e.url);r&&(0,t.registerPlatformTab)(r.getID(),e.id)}))}))};t.waitBGMessage=e=>o(void 0,void 0,void 0,(function*(){return new Promise((t=>{(0,d.setBGInterceptor)(s.BGListenerType.OnMessage,((r,o,n)=>{const i=o.listenerParams[0];n((()=>i.type===e),i,o,r)&&(t(i.payload),(0,d.removeBGInterceptor)(r,s.BGListenerType.OnMessage))}))}))}))},6122:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractPlatform=void 0;const o=r(9273),s=r(6795),n=r(2545),i=r(4470);t.AbstractPlatform=class{constructor(){this.lastResponse=null,this.watchingResources={},this.emptyFieldValue="",this.interceptorsIDs=new Set}getResourceData(e,t,r){i.http.post({url:t.url,body:t.bodyBytes,headers:t.requestHeaders.reduce(((e,t)=>(e[t.name]=t.value,e)),{})},{onJSONSuccess:t=>{const o=this.parseResponse(t);(0,s.sendMessageFromBackground)(e,{type:n.MessageToApp.AppTakeNewResourceData,payload:{services:(0,s.normalizeParsedResource)(o.services),assets:(0,s.normalizeParsedResource)(o.assets),accounts:(0,s.normalizeParsedResource)(o.accounts)}}),this.lastResponse=t,r.onJSONSuccess(t)},onError:e=>{r.onError(e)}})}addValueToResource(e,t,r){var o;const s=e[t]||new Set,n="number"==typeof r?String(r):null===(o=null==r?void 0:r.trim)||void 0===o?void 0:o.call(r);n&&n!==this.emptyFieldValue&&s.add(n),s.size&&(e[t]=s)}unregister(){Array.from(this.interceptorsIDs).forEach((e=>{(0,o.removeBGInterceptor)(e),this.interceptorsIDs.delete(e)}))}setWatchers(e,t){if(this.watchingResources=e,!this.lastResponse)return;const r=this.parseResponse(this.lastResponse);(0,s.sendMessageFromBackground)(t,{type:n.MessageToApp.AppTakeResourceData,payload:{services:(0,s.normalizeParsedResource)(r.services),assets:(0,s.normalizeParsedResource)(r.assets),accounts:(0,s.normalizeParsedResource)(r.accounts)}})}}},7217:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.platformResolver=t.PlatformResolver=void 0;const o=r(5747),s=r(3319),n=r(5864),i=r(1595),a=r(3548);class d{constructor(){this.platforms=new o.Register}getPlatform(e){if(!this.platforms.has(e))switch(e){case s.PlatformID.MicrosoftSentinel:this.platforms.set(e,new n.MicrosoftSentinelPlatform);break;case s.PlatformID.MicrosoftDefender:this.platforms.set(e,new a.MicrosoftDefenderPlatform)}return this.platforms.get(e)}resolve(e){return i.backgroundPlatformIDFromENV?this.getPlatform(i.backgroundPlatformIDFromENV):this.getPlatform(e)}}t.PlatformResolver=d,t.platformResolver=new d},8222:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getNormalizedWatchers=t.removeFieldFromWatching=t.addFieldToWatch=void 0;const o=r(412);t.addFieldToWatch=(e,t,r)=>{const s=e[r]||[];return s.includes(t)||s.push(t),e[r]=(0,o.deduplicateArray)(s),e};t.removeFieldFromWatching=(e,t,r)=>(e[r]=(e[r]||[]).filter((e=>e!==t)),e);t.getNormalizedWatchers=e=>{const t=new Set,r=new Map;return Object.keys(e).forEach((o=>{e[o].forEach((e=>{t.add(e);const s=r.get(e)||[];s.push(o),r.set(e,s)}))})),{fieldsNames:t,mapFieldNameToType:r}}},3548:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MicrosoftDefenderPlatform=void 0;const o=r(6122),s=r(3319),n=r(1846),i=r(9273),a=r(926),d=r(1820),l=r(8222),c=r(6795),u=r(2545),g=r(7413),p=r(5482).loggers.addPrefix((0,n.getDebugPrefix)("background")).addPrefix(s.PlatformID.MicrosoftDefender);class f extends o.AbstractPlatform{constructor(){super(),this.watchingResources=d.microsoftDefenderWatchers,this.emptyFieldValue=""}getID(){return s.PlatformID.MicrosoftDefender}parseContent(){const e={assets:{},accounts:{},services:{}};return{accounts:e.accounts,assets:e.assets,services:e.services}}parseResponse(e){p.debug().log("started parse response...");const t={assets:{},accounts:{},services:{}},{mapFieldNameToType:r,fieldsNames:o}=(0,l.getNormalizedWatchers)(this.watchingResources);return((null==e?void 0:e.Results)||[]).forEach((e=>{Array.from(o).forEach((o=>{if(null==e?void 0:e[o]){r.get(o).forEach((r=>{this.addValueToResource(t[r],o,e[o])}))}}))})),p.debug().log("finished parse response"),{services:t.services,accounts:t.accounts,assets:t.assets}}register(){const e=new Set,t=new Map;this.interceptorsIDs.add((0,i.setBGInterceptor)(a.BGListenerType.OnBeforeRequest,((r,o,s)=>{const n=o.listenerParams[0],{href:i}=new URL(n.url);s((()=>{var t,r,o,s;return!(e.has(n.url)||"POST"!==n.method||!d.microsoftDefenderPostsUrls.some((e=>i.indexOf(e)>-1))||!(null===(s=null===(o=null===(r=null===(t=n.requestBody)||void 0===t?void 0:t.raw)||void 0===r?void 0:r[0])||void 0===o?void 0:o.bytes)||void 0===s?void 0:s.byteLength)||n.requestBody.raw[0].bytes.byteLength<5)}),o,r)&&t.set(n.url,n.requestBody.raw[0].bytes)}))),this.interceptorsIDs.add((0,i.setBGInterceptor)(a.BGListenerType.OnBeforeSendHeaders,((r,o,s)=>{const n=o.listenerParams[0],{href:i}=new URL(n.url);if(!s((()=>!(e.has(n.url)||"POST"!==n.method||!d.microsoftDefenderPostsUrls.some((e=>i.indexOf(e)>-1))||!t.has(n.url)||!n.requestHeaders)),o,r))return;const a=t.get(n.url),l=(new TextDecoder).decode(a);e.add(n.url);const f=()=>{e.delete(n.url),t.delete(n.url)};(0,c.sendMessageFromBackground)(n.tabId,{type:u.MessageToApp.AppSetLoadingState,payload:{loading:!0,key:g.LoadingKey.resourcesAdding}}),this.getResourceData(n.tabId,{bodyBytes:a,url:n.url,requestHeaders:n.requestHeaders},{onJSONSuccess:()=>{f()},onError:e=>{p.error().addPrefix("Failed webRequest post").log(e,n.method,n.url,l),f()}})}))),p.debug().log("registered")}unregister(){super.unregister(),p.debug().log("unregistered")}}t.MicrosoftDefenderPlatform=f},1820:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.microsoftDefenderPostsUrls=t.microsoftDefenderWatchers=void 0,t.microsoftDefenderWatchers={accounts:["AccountName"],assets:["DeviceName"],services:[]},t.microsoftDefenderPostsUrls=["https://api-eu.securitycenter.windows.com/api/","https://security.microsoft.com/apiproxy/mtp/huntingService/queryExecutor"]},5864:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MicrosoftSentinelPlatform=void 0;const o=r(926),s=r(3319),n=r(9273),i=r(1846),a=r(6122),d=r(9119),l=r(8222),c=r(6795),u=r(2545),g=r(7413),p=r(5482).loggers.addPrefix((0,i.getDebugPrefix)("background")).addPrefix(s.PlatformID.MicrosoftSentinel);class f extends a.AbstractPlatform{constructor(){super(),this.watchingResources=d.microsoftSentinelWatchers,this.emptyFieldValue="-"}getID(){return f.id}register(){const e=new Set,t=new Map;this.interceptorsIDs.add((0,n.setBGInterceptor)(o.BGListenerType.OnBeforeRequest,((r,o,s)=>{const n=o.listenerParams[0],{href:i}=new URL(n.url);s((()=>{var t,r,o,s,a;return!(e.has(n.url)||"POST"!==n.method||!d.microsoftSentinelPostsUrls.some((e=>i.indexOf(e)>-1))||!(null===(s=null===(o=null===(r=null===(t=n.requestBody)||void 0===t?void 0:t.raw)||void 0===r?void 0:r[0])||void 0===o?void 0:o.bytes)||void 0===s?void 0:s.byteLength)||(null===(a=n.requestBody)||void 0===a?void 0:a.raw[0].bytes.byteLength)<5)}),o,r)&&t.set(n.url,n.requestBody.raw[0].bytes)}))),this.interceptorsIDs.add((0,n.setBGInterceptor)(o.BGListenerType.OnBeforeSendHeaders,((r,o,s)=>{const n=o.listenerParams[0],{href:i}=new URL(n.url);if(!s((()=>!(e.has(n.url)||"POST"!==n.method||!d.microsoftSentinelPostsUrls.some((e=>i.indexOf(e)>-1))||!t.has(n.url)||!n.requestHeaders)),o,r))return;e.add(n.url);const a=()=>{e.delete(n.url),t.delete(n.url)},l=t.get(n.url),f=(new TextDecoder).decode(l);(0,c.sendMessageFromBackground)(n.tabId,{type:u.MessageToApp.AppSetLoadingState,payload:{loading:!0,key:g.LoadingKey.resourcesAdding}}),this.getResourceData(n.tabId,{bodyBytes:l,url:n.url,requestHeaders:n.requestHeaders},{onJSONSuccess:()=>{a()},onError:e=>{p.error().addPrefix("Failed webRequest post").log(e,n.method,n.url,f),a()}})}))),p.debug().log("registered")}unregister(){super.unregister(),p.debug().log("unregistered")}parseResponse(e){var t,r,o,s;p.debug().log("started parse response...");const n={assets:{},accounts:{},services:{}},{mapFieldNameToType:i,fieldsNames:a}=(0,l.getNormalizedWatchers)(this.watchingResources),d=((null===(r=null===(t=null==e?void 0:e.tables)||void 0===t?void 0:t[0])||void 0===r?void 0:r.columns)||[]).reduce(((e,t,r)=>(e.set(t.name,r),e)),new Map)||new Map;return((null===(s=null===(o=null==e?void 0:e.tables)||void 0===o?void 0:o[0])||void 0===s?void 0:s.rows)||[]).forEach((e=>{Array.from(a).forEach((t=>{if(d.has(t)){i.get(t).forEach((r=>{this.addValueToResource(n[r],t,e[d.get(t)])}))}}))})),p.debug().log("finished parse response"),{services:n.services,accounts:n.accounts,assets:n.assets}}parseContent(){const e={assets:{},accounts:{},services:{}};return{accounts:e.accounts,assets:e.assets,services:e.services}}}t.MicrosoftSentinelPlatform=f,f.id=s.PlatformID.MicrosoftSentinel},9119:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.microsoftSentinelPostsUrls=t.microsoftSentinelWatchers=void 0,t.microsoftSentinelWatchers={accounts:["UserName","Account","SubjectUserName","TargetUserName"],assets:["Computer"],services:[]},t.microsoftSentinelPostsUrls=["https://api.loganalytics.io"]},926:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BGListenerType=void 0,function(e){e.OnMessage="OnMessage",e.OnBeforeRequest="OnBeforeRequest",e.OnBrowserTabRemoved="OnBrowserTabRemoved",e.OnBeforeSendHeaders="OnBeforeSendHeaders",e.OnExtensionIconClicked="OnExtensionIconClicked"}(t.BGListenerType||(t.BGListenerType={}))},8918:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageToBackground=void 0;const o=r(332);var s;!function(e){e.BGRunClearData="BGRunClearData",e.BGModifyQuery="BGModifyQuery",e.BGSetWatchers="BGSetWatchers",e.BGRegisterPlatformTab="BGRegisterPlatformTab",e.BGAddFieldToWatch="BGAddFieldToWatch"}(s=t.MessageToBackground||(t.MessageToBackground={})),Object.values(s).forEach((e=>{if("background"!==(0,o.getExecutingContextByMessageType)(e))throw new Error(`Wrong background message type "${e}"`)}))},5099:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isRuntimeGetUrlSupported=t.isTabsSendMessageSupported=t.isTabsQuerySupported=t.isOnBeforeSendHeadersSupported=t.isOnBeforeRequestSupported=t.isBrowserActionOnClickedSupported=t.isActionOnClickedSupported=t.isTabsOnRemovedSupported=t.isRuntimeOnMessageExternalSupported=t.isRuntimeOnMessageSupported=t.isRuntimeSendMessageSupported=t.isAddEventListenerSupported=t.isPostMessageSupported=void 0;const o=r(332),s=r(5482).loggers.addPrefix("api-support");t.isPostMessageSupported=(...e)=>!!(null===window||void 0===window?void 0:window.postMessage)||(s.warn().log("API window.postMessage is not supported",...e),!1);t.isAddEventListenerSupported=(...e)=>!!(null===window||void 0===window?void 0:window.addEventListener)||(s.warn().log("API window.addEventListener is not supported",...e),!1);t.isRuntimeSendMessageSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,o.getBrowserContext)())||void 0===t?void 0:t.runtime)||void 0===r?void 0:r.sendMessage)||(s.warn().log("API runtime.sendMessage is not supported",...e),!1)};t.isRuntimeOnMessageSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,o.getBrowserContext)().runtime)||void 0===t?void 0:t.onMessage)||void 0===r?void 0:r.addListener)||(s.warn().log("API runtime.onMessage.addListener is not supported",...e),!1)};t.isRuntimeOnMessageExternalSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,o.getBrowserContext)().runtime)||void 0===t?void 0:t.onMessageExternal)||void 0===r?void 0:r.addListener)||(s.warn().log("API runtime.onMessageExternal.addListener is not supported",...e),!1)};t.isTabsOnRemovedSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,o.getBrowserContext)().tabs)||void 0===t?void 0:t.onRemoved)||void 0===r?void 0:r.addListener)||(s.warn().log("API tabs.onRemoved.addListener is not supported",...e),!1)};t.isActionOnClickedSupported=(...e)=>{var t,r,n;return!!(null===(n=null===(r=null===(t=(0,o.getBrowserContext)())||void 0===t?void 0:t.action)||void 0===r?void 0:r.onClicked)||void 0===n?void 0:n.addListener)||(s.warn().log("API action.onClicked.addListener is not supported",...e),!1)};t.isBrowserActionOnClickedSupported=(...e)=>{var t,r,n;return!!(null===(n=null===(r=null===(t=(0,o.getBrowserContext)())||void 0===t?void 0:t.browserAction)||void 0===r?void 0:r.onClicked)||void 0===n?void 0:n.addListener)||(s.warn().log("API browserAction.onClicked.addListener is not supported",...e),!1)};t.isOnBeforeRequestSupported=(...e)=>{var t,r,n;return!!(null===(n=null===(r=null===(t=(0,o.getBrowserContext)())||void 0===t?void 0:t.webRequest)||void 0===r?void 0:r.onBeforeRequest)||void 0===n?void 0:n.addListener)||(s.warn().log("API webRequest.onBeforeRequest is not supported",...e),!1)};t.isOnBeforeSendHeadersSupported=(...e)=>{var t,r,n;return!!(null===(n=null===(r=null===(t=(0,o.getBrowserContext)())||void 0===t?void 0:t.webRequest)||void 0===r?void 0:r.onBeforeSendHeaders)||void 0===n?void 0:n.addListener)||(s.warn().log("API webRequest.onBeforeSendHeaders is not supported",...e),!1)};t.isTabsQuerySupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,o.getBrowserContext)())||void 0===t?void 0:t.tabs)||void 0===r?void 0:r.query)||(s.warn().log("API tabs.query is not supported",...e),!1)};t.isTabsSendMessageSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,o.getBrowserContext)())||void 0===t?void 0:t.tabs)||void 0===r?void 0:r.sendMessage)||(s.warn().log("API tabs.sendMessage is not supported",...e),!1)};t.isRuntimeGetUrlSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,o.getBrowserContext)())||void 0===t?void 0:t.runtime)||void 0===r?void 0:r.getURL)||(s.warn().log("API runtime.getURL is not supported",...e),!1)}},332:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(s,n){function i(e){try{d(o.next(e))}catch(e){n(e)}}function a(e){try{d(o.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.removeDoubleQuotesAround=t.buildQueryParts=t.getElementsUnderCursor=t.downloadFile=t.copyToClipboard=t.createClassName=t.waitHTMLElement=t.isInsideIframe=t.mountHTMLElement=t.cssObjectToString=t.getExecutingContextByMessageType=t.getPlatformNameByID=t.getWebAccessibleUrl=t.getBrowserContext=void 0;const s=r(3319),n=r(5099);t.getBrowserContext=()=>"undefined"!=typeof browser?browser:chrome;t.getWebAccessibleUrl=e=>(0,n.isRuntimeGetUrlSupported)(e)?(0,t.getBrowserContext)().runtime.getURL(e):"";t.getPlatformNameByID=e=>e===s.PlatformID.MicrosoftSentinel?"Microsoft Sentinel":e===s.PlatformID.MicrosoftDefender?"Microsoft Defender For Endpoint":"Unknown Platform";t.getExecutingContextByMessageType=e=>{let t=e.slice(0,3).toLowerCase();return"app"===t?"app":(t=t.slice(0,2),"bg"===t?"background":"cs"===t?"content":"is"===t?"inline":"unknown")};t.cssObjectToString=e=>Object.keys(e).reduce(((t,r)=>t+`${r}:${e[r]};`),"");t.mountHTMLElement=(e,r,o)=>{const s=document.createElement(e);return(null==o?void 0:o.attributes)&&Object.keys(o.attributes).forEach((e=>{var r;s.setAttribute(e,"style"===e?(0,t.cssObjectToString)(o.attributes[e]):(null===(r=o.attributes)||void 0===r?void 0:r[e])||"")})),(null==o?void 0:o.innerHtml)&&(s.innerHTML=o.innerHtml),(null==o?void 0:o.innerText)&&(s.innerText=o.innerText),r&&r.append(s),s};t.isInsideIframe=()=>{try{return window.self!==window.top}catch(e){return!0}};t.waitHTMLElement=(e,t=document)=>o(void 0,void 0,void 0,(function*(){return new Promise((r=>{new MutationObserver(((o,s)=>{const n=t.querySelector(e);n&&(s.disconnect(),r(n))})).observe(t,{childList:!0,subtree:!0})}))}));t.createClassName=e=>e.filter(Boolean).join(" ");t.copyToClipboard=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-99999px",t.style.top="-99999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};t.downloadFile=(e,t)=>{const r=document.createElement("a");r.setAttribute("href",encodeURI(`data:text/csv;charset=utf-8,${t}`)),r.setAttribute("download","extension-resources.csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)};t.getElementsUnderCursor=(e,t)=>{const r=e.clientX,o=e.clientY,s=[],n=[];let i=document.elementFromPoint(r,o);for(;"HTML"!==i.tagName;){const e=i.style.pointerEvents;if(!i)break;(!t||t&&t(i))&&s.push(i),n.push({savedPointerEvents:e,element:i}),i.style.pointerEvents="none",i=document.elementFromPoint(r,o)}return n.forEach((({element:e,savedPointerEvents:t})=>{t?e.style.pointerEvents=t:e.style.removeProperty("pointer-events"),e.getAttribute("style")||e.removeAttribute("style")})),s};t.buildQueryParts=(e,t,r,o)=>Object.keys(e).reduce(((s,n)=>(s.push(e[n].map((e=>`${o.leftOperand(n)} ${t} ${o.rightOperand(e)}`)).join(r)),s)),[]).join(r);t.removeDoubleQuotesAround=e=>{let t=e;return'"'===e[0]&&(t=t.slice(1)),'"'===e[e.length-1]&&(t=t.slice(0,e.length-2)),t}},3799:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isMessageMatched=void 0;const o=r(5482),s=r(1846),n=r(332);t.isMessageMatched=(e,t,...r)=>!!e()&&(o.loggers.debug().addPrefix((0,s.getDebugPrefix)((0,n.getExecutingContextByMessageType)(t.type))).log(`got ${t.type} message`,t,...r),!0)},1595:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.logLevel=t.mode=t.backgroundPlatformIDFromENV=t.contentPlatformIDFromENV=void 0;const o=r(3319),s=r(9068);t.contentPlatformIDFromENV=(Object.values(o.PlatformID).includes(null),null),t.backgroundPlatformIDFromENV=(Object.values(o.PlatformID).includes(null),null),t.mode="production"===s.Mode.production?s.Mode.production:s.Mode.development,t.logLevel=Object.keys(s.LogLevel).includes("info")?"info":s.LogLevel.info},5482:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loggers=t.Loggers=t.stopLogging=t.startLogging=void 0;const o=r(9068),s=r(1595);let n=!0;t.startLogging=()=>n=!0;t.stopLogging=()=>n=!1;class i{constructor(e="",t=o.LogLevel.info){this.prefix="",this.level=o.LogLevel.info,this.prefix=e,this.level=t}createInstance(e="",t=o.LogLevel.info){return new i(e,t)}log(...e){var t;n&&(s.mode===o.Mode.production&&this.level===o.LogLevel.debug&&s.logLevel!==o.LogLevel.debug||s.mode!==o.Mode.production&&(null===(t=null===console||void 0===console?void 0:console[this.level===o.LogLevel.error?"error":this.level===o.LogLevel.warn?"warn":"log"])||void 0===t||t.call(console,this.prefix||"==>",...e)))}error(){return this.createInstance(`ERROR: ${this.prefix}`,o.LogLevel.error)}warn(){return this.createInstance(`WARN: ${this.prefix}`,o.LogLevel.warn)}info(){return this.createInstance(`INFO: ${this.prefix}`,o.LogLevel.info)}debug(){return this.createInstance(`DEBUG: ${this.prefix}`,o.LogLevel.debug)}addPrefix(e){return this.createInstance([this.prefix,e].join(" "),this.level)}setLevel(e){return this.createInstance(this.prefix,e)}}t.Loggers=i,t.loggers=new i},1846:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DebugID=t.getDebugPrefix=void 0;const o=r(9068);t.getDebugPrefix=e=>"background"===e?"bg ==>":"content"===e?"cs ==>":"inline"===e?"is ==>":"app"===e?"app ==>":"unknown ==>";const s=(0,o.mapType)("debug-external-der3edc3op3e4dde44rt");!function(e){e[e.debugIDExternal=s]="debugIDExternal"}(t.DebugID||(t.DebugID={}))},3319:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlatformID=t.Browser=void 0,function(e){e.chrome="chrome",e.firefox="firefox",e.edge="edge"}(t.Browser||(t.Browser={})),function(e){e.MicrosoftSentinel="MicrosoftSentinel",e.MicrosoftDefender="MicrosoftDefender"}(t.PlatformID||(t.PlatformID={}))},8740:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addListener=void 0;const o=r(5404),s=r(332),n=r(1846),i=r(5099),a=(0,s.getBrowserContext)(),d={};t.addListener=(e,t,...r)=>{var o;null===(o=d[e])||void 0===o||o.call(d,((...e)=>{t(...e)}),...r)};const l=[];d[o.ListenerType.OnMessage]=(e,...t)=>{if((0,i.isRuntimeOnMessageSupported)()){const r=a.runtime.onMessage;l.push((()=>{r.removeListener(e)})),r.addListener(((...t)=>{e(...t)}),...t)}if(!(0,i.isAddEventListenerSupported)())return;const r=r=>{const o=r.data;r.origin===window.location.origin&&o.externalType===n.DebugID.debugIDExternal&&e(r.data,...t)};l.push((()=>{window.removeEventListener("message",r)})),window.addEventListener("message",r)}},4661:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sendMessageFromApp=t.sendMessageFromContent=t.sendMessage=void 0;const o=r(332),s=r(1846),n=r(412),i=r(5099),a=r(5482).loggers.addPrefix("services"),d=(0,o.getBrowserContext)();t.sendMessage=(e,t,r=!0)=>{var o;t.id=t.id||(0,n.uuid)();const s="sendMessage";try{if(!r&&!(0,i.isPostMessageSupported)(t))return;if(!r)return window.postMessage(t),e.debug().log("postMessage",t);if(!(0,i.isRuntimeSendMessageSupported)())return;null===(o=d.runtime.sendMessage(t))||void 0===o||o.catch((r=>e.error().addPrefix(s).log(r,t))),e.debug().addPrefix(s).log(t)}catch(r){e.error().addPrefix(s).log(r,t)}};t.sendMessageFromContent=(e,r=!0)=>(0,t.sendMessage)(a.addPrefix((0,s.getDebugPrefix)("content")),e,r);t.sendMessageFromApp=(e,r=!0)=>(0,t.sendMessage)(a.addPrefix((0,s.getDebugPrefix)("app")),e,r)},7134:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlatformResolver=void 0;const o=r(5123),s=r(3319),n=r(1595),i=r(6212);class a{static getPlatform(e){switch(e){case s.PlatformID.MicrosoftSentinel:return new o.MicrosoftSentinelPlatform;case s.PlatformID.MicrosoftDefender:return new i.MicrosoftDefenderPlatform}}static resolveByUrl(e){const{host:t,protocol:r,href:o}=new URL(e);if("https:"===r)return/(portal.azure.com|reactblade.portal.azure.net|logsextension.hosting.portal.azure.net)$/.test(t)?a.getPlatform(s.PlatformID.MicrosoftSentinel):/(security.microsoft.com)/.test(o)?a.getPlatform(s.PlatformID.MicrosoftDefender):void 0}resolve(){return n.contentPlatformIDFromENV?a.getPlatform(n.contentPlatformIDFromENV):a.resolveByUrl(document.location.href)}}t.PlatformResolver=a},6212:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MicrosoftDefenderPlatform=void 0;const o=r(5404),s=r(1846),n=r(3319),i=r(8740),a=r(332),d=r(4661),l=r(8918),c=r(3799),u=r(8312),g=r(4689),p=r(770),f=r(5482).loggers.addPrefix((0,s.getDebugPrefix)("content")).addPrefix(n.PlatformID.MicrosoftDefender);class m{constructor(){this.extensionDefaultPosition=m.extensionDefaultPosition}getID(){return m.id}static setListeners(){i.addListener(o.ListenerType.OnMessage,(e=>{(0,c.isMessageMatched)((()=>u.MessageToContent.CSModifyQuery===e.type),e)&&(0,d.sendMessageFromContent)(Object.assign(Object.assign({},e),{type:g.MessageToInline.ISModifyQuery}),!1)}))}static connectMouseDown(){document.addEventListener("mousedown",(e=>{var t,r;if(!e.altKey)return;const o=(0,a.getElementsUnderCursor)(e,(e=>e.classList.contains("mtk20")||"SPAN"===e.tagName&&Array.from(e.classList).join(",").indexOf("cellName")>-1&&!!e.closest('[role="columnheader"]'))),s=o.length>1?null:(0,a.removeDoubleQuotesAround)((null===(r=null===(t=o[0])||void 0===t?void 0:t.innerText)||void 0===r?void 0:r.trim())||"");s&&(0,d.sendMessageFromContent)({type:l.MessageToBackground.BGAddFieldToWatch,payload:{fieldName:s}})})),f.debug().log("mousedown event was set successfully")}static connectInlineListener(){(0,a.mountHTMLElement)("script",document.body,{attributes:{src:(0,a.getWebAccessibleUrl)(p.microsoftDefenderInline),type:"text/javascript","data-type":"inline-listener"}})}connect(){m.setListeners(),m.connectMouseDown(),m.connectInlineListener(),f.debug().log("connected")}}t.MicrosoftDefenderPlatform=m,m.id=n.PlatformID.MicrosoftDefender,m.extensionDefaultPosition={top:0,left:0,width:480,height:480}},5123:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(s,n){function i(e){try{d(o.next(e))}catch(e){n(e)}}function a(e){try{d(o.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.MicrosoftSentinelPlatform=void 0;const s=r(8918),n=r(4661),i=r(3319),a=r(5404),d=r(8740),l=r(8312),c=r(332),u=r(4689),g=r(1846),p=r(3799),f=r(1595),m=r(770),v=r(7397),y=r(5482).loggers.addPrefix((0,g.getDebugPrefix)("content")).addPrefix(i.PlatformID.MicrosoftSentinel);class b{constructor(){this.extensionDefaultPosition=b.extensionDefaultPosition}getID(){return b.id}static connectMouseDown(){document.addEventListener("mousedown",(e=>{var t,r;if(!e.altKey)return;const o=(0,c.getElementsUnderCursor)(e,(e=>e.classList.contains("ag-header-cell-text")||e.classList.contains("ag-group-value"))),i=o.length>1?null:null===(r=null===(t=o[0])||void 0===t?void 0:t.innerText)||void 0===r?void 0:r.trim();i&&(0,n.sendMessageFromContent)({type:s.MessageToBackground.BGAddFieldToWatch,payload:{fieldName:(0,v.normalizeFieldValue)(i)}})})),y.debug().log("mousedown event was set successfully")}static connectInlineListener(){(0,c.mountHTMLElement)("script",document.body,{attributes:{src:(0,c.getWebAccessibleUrl)(m.microsoftSentinelInline),type:"text/javascript","data-type":"inline-listener"}})}static setListeners(){d.addListener(a.ListenerType.OnMessage,(e=>o(this,void 0,void 0,(function*(){if(!f.contentPlatformIDFromENV&&!document.querySelector("la-main-view"))return;const t=`script[src$="${m.microsoftSentinelInline}"]`;document.querySelector(t)||(b.connectInlineListener(),b.connectMouseDown(),yield(0,c.waitHTMLElement)(t)),(0,p.isMessageMatched)((()=>l.MessageToContent.CSModifyQuery===e.type),e)&&(0,n.sendMessageFromContent)(Object.assign(Object.assign({},e),{type:u.MessageToInline.ISModifyQuery}),!1)}))))}connect(){b.setListeners()}}t.MicrosoftSentinelPlatform=b,b.id=i.PlatformID.MicrosoftSentinel,b.extensionDefaultPosition={top:0,left:0,width:500,height:400}},7397:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildMicrosoftSentinelQueryParts=t.normalizedValue=t.normalizeFieldValue=void 0;const o=r(332),s=r(7838);t.normalizeFieldValue=e=>e.indexOf("[UTC]")>-1?e.split("[UTC]").shift().trim():e;t.normalizedValue=e=>{const t=(0,s.isNumberInString)(e)?parseFloat(e):e;return"number"==typeof t?t:`"${t.replace(/\\/g,"\\\\")}"`};t.buildMicrosoftSentinelQueryParts=(e,r)=>(0,o.buildQueryParts)(r,"exclude"===e?"!=":"==","exclude"===e?" and ":" or ",{leftOperand:e=>e,rightOperand:e=>(0,t.normalizedValue)(e)})},5404:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ListenerType=void 0,function(e){e.OnMessage="OnMessage"}(t.ListenerType||(t.ListenerType={}))},8312:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageToContent=void 0;const o=r(332);var s;!function(e){e.CSModifyQuery="CSModifyQuery"}(s=t.MessageToContent||(t.MessageToContent={})),Object.values(s).forEach((e=>{if("content"!==(0,o.getExecutingContextByMessageType)(e))throw new Error(`Wrong content message type "${e}"`)}))},4689:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageToInline=void 0;const o=r(332);var s;!function(e){e.ISModifyQuery="ISModifyQuery"}(s=t.MessageToInline||(t.MessageToInline={})),Object.values(s).forEach((e=>{if("inline"!==(0,o.getExecutingContextByMessageType)(e))throw new Error(`Wrong inline message type "${e}"`)}))},770:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.accessibleResources=t.microsoftDefenderInline=t.microsoftSentinelInline=t.appStyles=void 0;const o=r(3319);t.appStyles="app-styles.css",t.microsoftSentinelInline="inline-microsoft-sentinel.js",t.microsoftDefenderInline="inline-microsoft-defender.js",t.accessibleResources={[o.PlatformID.MicrosoftSentinel]:[t.microsoftSentinelInline],[o.PlatformID.MicrosoftDefender]:[t.microsoftDefenderInline],app:[t.appStyles]}}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}(()=>{const e=r(6795),t=r(8918),o=r(926),s=r(9273),n=r(2545),i=r(8312),a=r(1846),d=r(3799),l=r(7217),c=r(7413),u=r(5482).loggers.addPrefix((0,a.getDebugPrefix)("background"));s.addListener(o.BGListenerType.OnExtensionIconClicked,(t=>{if(!t.id)return u.error().log(`${o.BGListenerType.OnExtensionIconClicked}: there is no tab id`,t);(0,e.sendMessageFromBackground)(t.id,{type:n.MessageToApp.AppShowExtension})})),s.addListener(o.BGListenerType.OnBrowserTabRemoved,(t=>{(0,e.unregisterPlatformTabs)([t])})),s.addListener(o.BGListenerType.OnBeforeRequest,(()=>{}),{urls:["<all_urls>"]},["requestBody"]),s.addListener(o.BGListenerType.OnBeforeSendHeaders,(()=>{}),{urls:["<all_urls>"]},["requestHeaders"]),s.addListener(o.BGListenerType.OnMessage,((r,s)=>{var a,g;if(!(null===(a=s.tab)||void 0===a?void 0:a.id))return u.error().log(`${o.BGListenerType.OnMessage} ${r.type}: there is no tab id`,s,r);if((0,d.isMessageMatched)((()=>t.MessageToBackground.BGRunClearData===r.type),r,s)&&(0,e.sendMessageFromBackground)(s.tab.id,{type:n.MessageToApp.AppClearResourceData}),(0,d.isMessageMatched)((()=>t.MessageToBackground.BGModifyQuery===r.type),r,s)&&(0,e.sendMessageFromBackground)(s.tab.id,Object.assign(Object.assign({},r),{type:i.MessageToContent.CSModifyQuery})),(0,d.isMessageMatched)((()=>t.MessageToBackground.BGSetWatchers===r.type),r,s)){const{platformID:t,watchers:o,action:i}=r.payload;null===(g=l.platformResolver.resolve(t))||void 0===g||g.setWatchers(o,s.tab.id),(0,e.sendMessageFromBackground)(s.tab.id,{type:n.MessageToApp.AppSetLoadingState,payload:{loading:!1,key:"add"===i?c.LoadingKey.fieldAdding:c.LoadingKey.fieldRemoving}})}if((0,d.isMessageMatched)((()=>t.MessageToBackground.BGAddFieldToWatch===r.type),r,s)&&(0,e.sendMessageFromBackground)(s.tab.id,Object.assign(Object.assign({},r),{type:n.MessageToApp.AppAddFieldToWatch})),(0,d.isMessageMatched)((()=>t.MessageToBackground.BGRegisterPlatformTab===r.type),r,s)){const{platformID:t}=r.payload;(0,e.registerPlatformTab)(t,s.tab.id)}})),(0,e.registerPlatformsOnOpenedTabs)()})()})();