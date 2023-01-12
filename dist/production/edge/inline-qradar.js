(()=>{"use strict";var e={7838:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isDate=t.isAllowedProtocol=t.isNumberInString=t.isNotEmpty=t.isString=void 0;const n=r(9068),o=r(412);t.isString=e=>"string"==typeof e;t.isNotEmpty=e=>!!(0,t.isString)(e)&&""!==e.trim();t.isNumberInString=e=>{if("number"==typeof e)return!0;if("string"!=typeof e)return!1;const t=e.trim();return!(!/^[.0-9]*$/.test(t)||(0,o.indexOfAll)(t,".").length>1)&&!Number.isNaN(parseFloat(t))};t.isAllowedProtocol=(e,t)=>{if(t===n.Mode.development)return!0;const r=e.trim().toLowerCase();return"https:"===r||"https"===r};t.isDate=e=>new Date("string"==typeof e&&(0,t.isNumberInString)(e)?parseInt(e):e).getTime()>5679828e5},412:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.indexOfAll=t.sortNumbers=t.debounce=t.formatDate=t.formatBinaryDate=t.createNonDuplicateValue=t.capitalizeFirstLetter=t.formatString=t.deduplicateArray=t.parseJSONSafe=t.splitByLines=t.clearLineBreaks=t.clearExtraSpaces=t.uuid=t.isFlatObjectsEqual=void 0;t.isFlatObjectsEqual=(e,t)=>{const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&!r.some((r=>e[r]!==t[r]))};t.uuid=()=>Math.random().toString(36).substring(5)+Date.now().toString(36)+Math.random().toString(36).substring(5);t.clearExtraSpaces=e=>e.replace(/ +/g," ");t.clearLineBreaks=e=>e.trim().replace(/(\r\n|\n|\r)/gm," ");t.splitByLines=(e,t=!1)=>{const r=new RegExp(/(\r\n|\n|\r)/,"gm");let n=e.split(r);return t&&(n=n.filter((e=>e&&"\r\n"!==e&&"\n"!==e&&"\r"!==e))),n};t.parseJSONSafe=(e,t)=>{try{return JSON.parse(e)}catch(e){return t}};t.deduplicateArray=e=>[...Array.from(new Set([...e]))];t.formatString=(e,t,r)=>Object.keys(t||{}).map((e=>({value:t[e],key:r?r(e):`%${e}`}))).reduce(((e,t)=>e.replace(new RegExp(t.key,"g"),t.value)),e)||e;t.capitalizeFirstLetter=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`;t.createNonDuplicateValue=(e,t)=>{if(!t.includes(e))return e;let r=1,n=e,o=n.slice(0,n.length-1);for(;t.includes(o);)n=o,o=o.slice(0,o.length-1);for(;t.includes(`${n}${r}`);)r++;return`${n}${r}`};t.formatBinaryDate=e=>{const t="string"==typeof e?e:String(e);return t.length>1?t:`0${t}`};t.formatDate=(e,r)=>(0,t.formatString)(e,{Y:String(r.getFullYear()),M:(0,t.formatBinaryDate)(r.getMonth()+1),m:(0,t.formatBinaryDate)(r.getMinutes()),s:(0,t.formatBinaryDate)(r.getSeconds()),ms:(0,t.formatBinaryDate)(r.getMilliseconds()),d:(0,t.formatBinaryDate)(r.getDate()),h:(0,t.formatBinaryDate)(r.getHours())});t.debounce=(e,t)=>{let r;return function(...n){const o=this;clearTimeout(r),r=setTimeout((()=>e.apply(o,n)),t)}};t.sortNumbers=(e,t)=>e>t?1:e<t?-1:0;t.indexOfAll=(e,t)=>{const r=[];let n=-1;for(;(n=e.indexOf(t,n+1))>=0;)r.push(n);return r}},9068:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mapType=t.LogLevel=t.Mode=void 0,function(e){e.production="production",e.development="development"}(t.Mode||(t.Mode={})),function(e){e.info="info",e.debug="debug",e.error="error",e.warn="warn"}(t.LogLevel||(t.LogLevel={}));t.mapType=e=>e},8401:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.boundedResourcesTypeIDs=t.BoundedResourceTypeID=void 0,function(e){e.Accounts="Accounts",e.Assets="Assets"}(r=t.BoundedResourceTypeID||(t.BoundedResourceTypeID={})),t.boundedResourcesTypeIDs=Object.keys(r)},5099:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isRuntimeGetUrlSupported=t.isTabsSendMessageSupported=t.isTabsQuerySupported=t.isOnBeforeSendHeadersSupported=t.isOnBeforeRequestSupported=t.isBrowserActionOnClickedSupported=t.isActionOnClickedSupported=t.isTabsOnRemovedSupported=t.isRuntimeOnMessageExternalSupported=t.isRuntimeOnMessageSupported=t.isRuntimeSendMessageSupported=t.isAddEventListenerSupported=t.isPostMessageSupported=void 0;const n=r(1393),o=r(5482).loggers.addPrefix("api-support");t.isPostMessageSupported=(...e)=>!!(null===window||void 0===window?void 0:window.postMessage)||(o.warn().log("API window.postMessage is not supported",...e),!1);t.isAddEventListenerSupported=(...e)=>!!(null===window||void 0===window?void 0:window.addEventListener)||(o.warn().log("API window.addEventListener is not supported",...e),!1);t.isRuntimeSendMessageSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.runtime)||void 0===r?void 0:r.sendMessage)||(o.warn().log("API runtime.sendMessage is not supported",...e),!1)};t.isRuntimeOnMessageSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,n.getBrowserContext)().runtime)||void 0===t?void 0:t.onMessage)||void 0===r?void 0:r.addListener)||(o.warn().log("API runtime.onMessage.addListener is not supported",...e),!1)};t.isRuntimeOnMessageExternalSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,n.getBrowserContext)().runtime)||void 0===t?void 0:t.onMessageExternal)||void 0===r?void 0:r.addListener)||(o.warn().log("API runtime.onMessageExternal.addListener is not supported",...e),!1)};t.isTabsOnRemovedSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,n.getBrowserContext)().tabs)||void 0===t?void 0:t.onRemoved)||void 0===r?void 0:r.addListener)||(o.warn().log("API tabs.onRemoved.addListener is not supported",...e),!1)};t.isActionOnClickedSupported=(...e)=>{var t,r,s;return!!(null===(s=null===(r=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.action)||void 0===r?void 0:r.onClicked)||void 0===s?void 0:s.addListener)||(o.warn().log("API action.onClicked.addListener is not supported",...e),!1)};t.isBrowserActionOnClickedSupported=(...e)=>{var t,r,s;return!!(null===(s=null===(r=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.browserAction)||void 0===r?void 0:r.onClicked)||void 0===s?void 0:s.addListener)||(o.warn().log("API browserAction.onClicked.addListener is not supported",...e),!1)};t.isOnBeforeRequestSupported=(...e)=>{var t,r,s;return!!(null===(s=null===(r=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.webRequest)||void 0===r?void 0:r.onBeforeRequest)||void 0===s?void 0:s.addListener)||(o.warn().log("API webRequest.onBeforeRequest is not supported",...e),!1)};t.isOnBeforeSendHeadersSupported=(...e)=>{var t,r,s;return!!(null===(s=null===(r=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.webRequest)||void 0===r?void 0:r.onBeforeSendHeaders)||void 0===s?void 0:s.addListener)||(o.warn().log("API webRequest.onBeforeSendHeaders is not supported",...e),!1)};t.isTabsQuerySupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.tabs)||void 0===r?void 0:r.query)||(o.warn().log("API tabs.query is not supported",...e),!1)};t.isTabsSendMessageSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.tabs)||void 0===r?void 0:r.sendMessage)||(o.warn().log("API tabs.sendMessage is not supported",...e),!1)};t.isRuntimeGetUrlSupported=(...e)=>{var t,r;return!!(null===(r=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.runtime)||void 0===r?void 0:r.getURL)||(o.warn().log("API runtime.getURL is not supported",...e),!1)}},1393:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getExecutingContextByMessageType=t.getWebAccessibleUrl=t.getBrowserContext=void 0;const n=r(5099);t.getBrowserContext=()=>"undefined"!=typeof browser?browser:chrome;t.getWebAccessibleUrl=e=>(0,n.isRuntimeGetUrlSupported)(e)?(0,t.getBrowserContext)().runtime.getURL(e):"";t.getExecutingContextByMessageType=e=>{let t=e.slice(0,3).toLowerCase();return"app"===t?"app":(t=t.slice(0,2),"bg"===t?"background":"cs"===t?"content":"is"===t?"inline":"unknown")}},332:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{d(n.next(e))}catch(e){s(e)}}function a(e){try{d(n.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.createFormDataString=t.compareVersions=t.getVersionFromString=t.removeDoubleQuotesAround=t.removeQuotesAround=t.removeBracketsAround=t.buildQueryParts=t.getElementsUnderCursor=t.downloadFile=t.copyToClipboard=t.createClassName=t.waitHTMLElement=t.isInsideIframe=t.mountHTMLElement=t.cssObjectToString=void 0;t.cssObjectToString=e=>Object.keys(e).reduce(((t,r)=>t+`${r}:${e[r]};`),"");t.mountHTMLElement=(e,r,n)=>{const o=document.createElement(e);return(null==n?void 0:n.attributes)&&Object.keys(n.attributes).forEach((e=>{var r;o.setAttribute(e,"style"===e?(0,t.cssObjectToString)(n.attributes[e]):(null===(r=n.attributes)||void 0===r?void 0:r[e])||"")})),(null==n?void 0:n.innerHtml)&&(o.innerHTML=n.innerHtml),(null==n?void 0:n.innerText)&&(o.innerText=n.innerText),r&&r.append(o),o};t.isInsideIframe=()=>{try{return window.self!==window.top}catch(e){return!0}};t.waitHTMLElement=(e,t=document)=>r(void 0,void 0,void 0,(function*(){return new Promise((r=>{new MutationObserver(((n,o)=>{const s=t.querySelector(e);s&&(o.disconnect(),r(s))})).observe(t,{childList:!0,subtree:!0})}))}));t.createClassName=e=>e.filter(Boolean).join(" ");t.copyToClipboard=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-99999px",t.style.top="-99999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};t.downloadFile=(e,t,r)=>{const n=document.createElement("a");n.setAttribute("href",encodeURI(`data:text/csv;charset=utf-8,${t}`)),n.setAttribute("download",`${r}.csv`),document.body.appendChild(n),n.click(),document.body.removeChild(n)};t.getElementsUnderCursor=(e,t)=>{const r=e.clientX,n=e.clientY,o=[],s=[];let i=document.elementFromPoint(r,n);for(;"HTML"!==i.tagName;){const e=i.style.pointerEvents;if(!i)break;(!t||t&&t(i))&&o.push(i),s.push({savedPointerEvents:e,element:i}),i.style.pointerEvents="none",i=document.elementFromPoint(r,n)}return s.forEach((({element:e,savedPointerEvents:t})=>{t?e.style.pointerEvents=t:e.style.removeProperty("pointer-events"),e.getAttribute("style")||e.removeAttribute("style")})),o};t.buildQueryParts=(e,t,r,n,o,s)=>{const i=[];Object.keys(e).forEach((n=>{i.push(e[n].map((e=>`${o.leftOperand(n)}${t(n,e)}${o.rightOperand(e)}`)).join(r))}));const a=i.join(n);return s?`${s} ${a}`:a};t.removeBracketsAround=e=>{let t=e;return"("===e[0]&&(t=t.slice(1)),")"===e[e.length-1]&&(t=t.slice(0,e.length-2)),t};t.removeQuotesAround=e=>{let t=e;return'"'!==e[0]&&"'"!==e[0]||(t=t.slice(1)),'"'!==e[e.length-1]&&"'"!==e[e.length-1]||(t=t.slice(0,e.length-2)),t};t.removeDoubleQuotesAround=e=>{let t=e;return'"'===e[0]&&(t=t.slice(1)),'"'===e[e.length-1]&&(t=t.slice(0,e.length-2)),t};t.getVersionFromString=e=>{if("string"!=typeof e||!/^[.0-9]+$/.test(e))return 0;const t=parseInt(e.replace(/\./g,""));return isNaN(t)?0:t};t.compareVersions=(e,r)=>{const n=(0,t.getVersionFromString)(e),o=(0,t.getVersionFromString)(r);return n===o?"equal":n>o?"greater":"less"};t.createFormDataString=e=>{const t=[];for(const[r,n]of Object.entries(e))t.push(`${encodeURIComponent(r)}=${encodeURIComponent(n)}`);return t.join("&").replace(/%20/g,"+")}},3799:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isMessageMatched=void 0;const n=r(5482);t.isMessageMatched=(e,t,...r)=>!!e()&&(n.loggers.debug().log(`got ${t.type} message`,t,...r),!0)},1595:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.version=t.logLevel=t.mode=t.backgroundPlatformIDFromENV=t.contentPlatformIDFromENV=void 0;const n=r(3319),o=r(9068);t.contentPlatformIDFromENV=(Object.values(n.PlatformID).includes(null),null),t.backgroundPlatformIDFromENV=(Object.values(n.PlatformID).includes(null),null),t.mode="production"===o.Mode.production?o.Mode.production:o.Mode.development,t.logLevel=Object.keys(o.LogLevel).includes("info")?"info":o.LogLevel.info,t.version="1.1.2"},5482:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Loggers=t.stopLogging=t.startLogging=t.loggers=void 0;const n=r(9068),o=r(1595);let s=!0;t.startLogging=()=>s=!0;t.stopLogging=()=>s=!1;class i{constructor(e="",t=n.LogLevel.info){this.prefix="",this.level=n.LogLevel.info,this.prefix=e,this.level=t}createInstance(e="",t=n.LogLevel.info){return new i(e,t)}log(...e){s&&(o.mode===n.Mode.production&&this.level===n.LogLevel.debug&&o.logLevel!==n.LogLevel.debug||o.mode!==n.Mode.production&&console[this.level===n.LogLevel.error?"error":this.level===n.LogLevel.warn?"warn":"log"](this.prefix||"==>",...e))}error(){return this.createInstance(`ERROR: ${this.prefix}`,n.LogLevel.error)}warn(){return this.createInstance(`WARN: ${this.prefix}`,n.LogLevel.warn)}info(){return this.createInstance(`INFO: ${this.prefix}`,n.LogLevel.info)}debug(){return this.createInstance(`DEBUG: ${this.prefix}`,n.LogLevel.debug)}addPrefix(e){return this.createInstance([this.prefix,e].join(" "),this.level)}setLevel(e){return this.createInstance(this.prefix,e)}setPrefix(e){return t.loggers=this.addPrefix(e),t.loggers}}t.Loggers=i,t.loggers=new i},1846:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DebugID=t.getDebugPrefix=void 0;const n=r(9068);t.getDebugPrefix=e=>"background"===e?"bg ==>":"content"===e?"cs ==>":"inline"===e?"is ==>":"app"===e?"app ==>":"unknown ==>";const o=(0,n.mapType)("debug-external-der3edc3op3e4dde44rt");!function(e){e[e.debugIDExternal=o]="debugIDExternal"}(t.DebugID||(t.DebugID={}))},3319:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlatformName=t.PlatformID=t.Browser=void 0,function(e){e.chrome="chrome",e.firefox="firefox",e.edge="edge"}(t.Browser||(t.Browser={})),function(e){e.MicrosoftSentinel="MicrosoftSentinel",e.MicrosoftDefender="MicrosoftDefender",e.Splunk="Splunk",e.QRadar="QRadar",e.Elastic="Elastic",e.ArcSight="ArcSight"}(t.PlatformID||(t.PlatformID={})),function(e){e.MicrosoftSentinel="Microsoft Sentinel",e.MicrosoftDefender="Microsoft Defender For Endpoint",e.Splunk="Splunk",e.QRadar="IBM QRadar",e.Elastic="Elastic",e.ArcSight="ArcSight"}(t.PlatformName||(t.PlatformName={}))},5813:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{d(n.next(e))}catch(e){s(e)}}function a(e){try{d(n.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.QRadarPlatform=void 0;const o=r(5404),s=r(3319),i=r(8401),a=r(332),d=r(7838),l=r(7281),u=r(3799),c=r(8312),p=r(6994),g=r(4689),f=r(770),m=r(1393);let v;class y{constructor(){this.defaultWatchers={[i.BoundedResourceTypeID.Accounts]:["Account Name","Recipients","Sender","Target Username","Username"],[i.BoundedResourceTypeID.Assets]:["Client Hostname","Destination Hostname","Destination IP","Hostname","Machine Identifier","Recipient Host","Sender Host","Source Hostname","Source Workstation","Source IP","Source Asset Name","Destination Asset Name"]},this.extensionDefaultPosition=y.extensionDefaultPosition}static normalizedValue(e){const t=(0,d.isNumberInString)(e)?parseFloat(e):e;return"number"==typeof t?t:`'${t}'`}buildQueryParts(e,t,r=!1){return(0,a.buildQueryParts)(t,(()=>"exclude"===e?" != ":" == "),"exclude"===e?" AND ":" OR ","exclude"===e?" AND ":" OR ",{leftOperand:e=>`"${e}"`,rightOperand:e=>y.normalizedValue(e)},r?"where":void 0)}connect(){y.setListeners(),v.debug().log("connected")}static setListeners(){l.addListener(o.ListenerType.OnMessage,(e=>n(this,void 0,void 0,(function*(){if(!document.querySelector("#aceEditor"))return;const t=`script[src$="${f.qRadarInline}"]`;document.querySelector(t)||(y.connectInlineListener(),yield(0,a.waitHTMLElement)(t)),(0,u.isMessageMatched)((()=>c.MessageToContent.CSModifyQuery===e.type),e)&&(0,p.sendMessageFromContent)(Object.assign(Object.assign({},e),{id:`${e.id}--content-modify-query`,type:g.MessageToInline.ISModifyQuery}),!1)}))))}static connectInlineListener(){(0,a.mountHTMLElement)("script",document.body,{attributes:{src:(0,m.getWebAccessibleUrl)(f.qRadarInline),type:"text/javascript","data-type":"inline-listener"}})}getID(){return s.PlatformID.QRadar}getName(){return s.PlatformName.QRadar}}t.QRadarPlatform=y,y.extensionDefaultPosition={top:0,left:0,width:500,height:400},y.id=s.PlatformID.QRadar,v=r(5482).loggers.addPrefix(y.id)},7281:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addListener=void 0;const n=r(5404),o=r(1846),s=r(5099),i=r(1393),a={};t.addListener=(e,t,...r)=>{var n;null===(n=a[e])||void 0===n||n.call(a,((...e)=>{t(...e)}),...r)};const d=[];a[n.ListenerType.OnMessage]=(e,...t)=>{if((0,s.isRuntimeOnMessageSupported)()){const r=(0,i.getBrowserContext)().runtime.onMessage;d.push((()=>{r.removeListener(e)})),r.addListener(((...t)=>{e(...t)}),...t)}if(!(0,s.isAddEventListenerSupported)())return;const r=r=>{const n=r.data;r.origin===window.location.origin&&n.externalType===o.DebugID.debugIDExternal&&e(r.data,...t)};d.push((()=>{window.removeEventListener("message",r)})),window.addEventListener("message",r)}},6994:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sendMessageFromApp=t.sendMessageFromContent=t.sendMessage=void 0;const n=r(412),o=r(5099),s=r(1393),i=r(5482).loggers.addPrefix("services");t.sendMessage=(e,t,r=!0)=>{var i;t.id=`${t.id?`${t.id}--`:""}${(0,n.uuid)()}`;const a="sendMessage";try{if(!r&&!(0,o.isPostMessageSupported)(t))return;if(!r)return window.postMessage(t),e.debug().log("postMessage",t);if(!(0,o.isRuntimeSendMessageSupported)())return;null===(i=(0,s.getBrowserContext)().runtime.sendMessage(t))||void 0===i||i.catch((r=>e.error().addPrefix(a).log(r,t))),e.debug().addPrefix(a).log(t)}catch(r){e.error().addPrefix(a).log(r,t)}};t.sendMessageFromContent=(e,r=!0)=>(0,t.sendMessage)(i.addPrefix("message-from-content"),e,r);t.sendMessageFromApp=(e,r=!0)=>(0,t.sendMessage)(i.addPrefix("message-from-app"),e,r)},5404:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ListenerType=void 0,function(e){e.OnMessage="OnMessage"}(t.ListenerType||(t.ListenerType={}))},8312:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageToContent=void 0;const n=r(1393);var o;!function(e){e.CSModifyQuery="CSModifyQuery",e.CSConnectPlatform="CSConnectPlatform"}(o=t.MessageToContent||(t.MessageToContent={})),Object.values(o).forEach((e=>{if("content"!==(0,n.getExecutingContextByMessageType)(e))throw new Error(`Wrong content message type "${e}"`)}))},6459:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildNewQuery=t.getEditor=void 0;const n=r(412);t.getEditor=e=>{try{return ace.edit(e)}catch(e){return null}};t.buildNewQuery=(e,t,r)=>{var o;const s=`${"show all"===r?(null===(o=e.split("|").shift())||void 0===o?void 0:o.trim())||"<unknown>":e} ${t}`;return(0,n.clearExtraSpaces)(s)}},9499:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildNewQuery=t.addWhere=t.parseQueryString=void 0;const n=r(412);t.parseQueryString=e=>{const t=(0,n.clearExtraSpaces)((0,n.clearLineBreaks)(e)).trim(),{indexes:r,mappedIndexes:o}=["select","where","from","last","start","stop","limit","like","order by","group by","having","ilike"].reduce(((e,r)=>{const n=t.search(new RegExp(`${"select"===r?"^":"(\\s|\\t)"}${r}(\\s|\\t)`,"gi"));return n>-1&&(e.indexes.add(n),e.mappedIndexes.set(n,r)),e}),{indexes:new Set,mappedIndexes:new Map}),s=Array.from(r).sort(n.sortNumbers);return s.reduce(((e,r,n)=>{const i=o.get(r),a=r,d=s[n+1]||t.length;return e[i]=t.substring(a,d).replace(new RegExp(i,"gi"),"").trim(),e}),{})};t.addWhere=(e,t,r)=>e.length<1?t:`(${e}) ${r} ${t}`;t.buildNewQuery=e=>{let t=`SELECT ${e.select}`;return e.from&&(t+=` FROM ${e.from}`),e.where&&(t+=` WHERE ${e.where}`),e["group by"]&&(t+=` GROUP BY ${e["group by"]}`),e.having&&(t+=` HAVING ${e.having}`),e["order by"]&&(t+=` ORDER BY ${e["order by"]}`),e.like&&(t+=` LIKE ${e.like}`),e.ilike&&(t+=` ILIKE ${e.ilike}`),e.limit&&(t+=` LIMIT ${e.limit}`),e.last&&(t+=` LAST ${e.last}`),e.start&&(t+=` START ${e.start}`),e.stop&&(t+=` STOP ${e.stop}`),t}},4689:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageToInline=void 0;const n=r(1393);var o;!function(e){e.ISModifyQuery="ISModifyQuery"}(o=t.MessageToInline||(t.MessageToInline={})),Object.values(o).forEach((e=>{if("inline"!==(0,n.getExecutingContextByMessageType)(e))throw new Error(`Wrong inline message type "${e}"`)}))},770:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.accessibleResources=t.arcSightInline=t.elasticInline=t.qRadarInline=t.splunkInline=t.microsoftDefenderInline=t.microsoftSentinelInline=t.appStyles=void 0;const n=r(3319);t.appStyles="app-styles.css",t.microsoftSentinelInline="inline-microsoft-sentinel.js",t.microsoftDefenderInline="inline-microsoft-defender.js",t.splunkInline="inline-splunk.js",t.qRadarInline="inline-qradar.js",t.elasticInline="inline-elastic.js",t.arcSightInline="inline-arcsight.js",t.accessibleResources={[n.PlatformID.MicrosoftSentinel]:[t.microsoftSentinelInline],[n.PlatformID.MicrosoftDefender]:[t.microsoftDefenderInline],[n.PlatformID.Splunk]:[t.splunkInline],[n.PlatformID.QRadar]:[t.qRadarInline],[n.PlatformID.Elastic]:[t.elasticInline],[n.PlatformID.ArcSight]:[t.arcSightInline],app:[t.appStyles]}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{const e=r(1846);r(5482).loggers.setPrefix((0,e.getDebugPrefix)("inline"))})(),(()=>{const e=r(5813),t=r(3799),n=r(4689),o=r(6459),s=r(9499),i=new e.QRadarPlatform,a=r(5482).loggers.addPrefix(i.getID());window.addEventListener("message",(e=>{const r=e.data;if((0,t.isMessageMatched)((()=>n.MessageToInline.ISModifyQuery===r.type),r,e)){const e=document.querySelector("#aceEditor"),t=(0,o.getEditor)(e);if(!t)return a.error().log("editor not found",ace);const{resources:n,modifyType:d}=r.payload;let l=(0,s.parseQueryString)(t.getValue());"show all"===d&&(l={select:l.select,from:l.from}),l.where=(0,s.addWhere)(l.where||"",i.buildQueryParts(d,n),"AND"),t.setValue((0,s.buildNewQuery)(l))}})),a.debug().log("mounted")})()})();