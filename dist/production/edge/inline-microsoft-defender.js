(()=>{"use strict";var e={7838:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isNumberInString=t.isNotEmpty=t.isString=void 0;t.isString=e=>"string"==typeof e;t.isNotEmpty=e=>!!(0,t.isString)(e)&&""!==e.trim();t.isNumberInString=e=>{if("string"!=typeof e)return!1;const t=e.trim();return!!/^[.0-9]*$/.test(t)&&!Number.isNaN(parseFloat(t))}},412:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.capitalizeFirstLetter=t.formatString=t.deduplicateArray=t.parseJSONSafe=t.clearExtraSpaces=t.uuid=t.isFlatObjectsEqual=void 0;t.isFlatObjectsEqual=(e,t)=>{const o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&!o.some((o=>e[o]!==t[o]))};t.uuid=()=>Math.random().toString(36).substring(5)+Date.now().toString(36)+Math.random().toString(36).substring(5);t.clearExtraSpaces=e=>e.replace(/ +/g," ");t.parseJSONSafe=(e,t)=>{try{return JSON.parse(e)}catch(e){return t}};t.deduplicateArray=e=>[...Array.from(new Set([...e]))];t.formatString=(e,t,o)=>Object.keys(t||{}).map((e=>({value:t[e],key:o?o(e):`%${e}`}))).reduce(((e,t)=>e.replace(new RegExp(t.key,"g"),t.value)),e)||e;t.capitalizeFirstLetter=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`},9068:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mapType=t.LogLevel=t.Mode=void 0,function(e){e.production="production",e.development="development"}(t.Mode||(t.Mode={})),function(e){e.info="info",e.debug="debug",e.error="error",e.warn="warn"}(t.LogLevel||(t.LogLevel={}));t.mapType=e=>e},5099:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isRuntimeGetUrlSupported=t.isTabsSendMessageSupported=t.isTabsQuerySupported=t.isOnBeforeSendHeadersSupported=t.isOnBeforeRequestSupported=t.isBrowserActionOnClickedSupported=t.isActionOnClickedSupported=t.isTabsOnRemovedSupported=t.isRuntimeOnMessageExternalSupported=t.isRuntimeOnMessageSupported=t.isRuntimeSendMessageSupported=t.isAddEventListenerSupported=t.isPostMessageSupported=void 0;const n=o(332),r=o(5482).loggers.addPrefix("api-support");t.isPostMessageSupported=(...e)=>!!(null===window||void 0===window?void 0:window.postMessage)||(r.warn().log("API window.postMessage is not supported",...e),!1);t.isAddEventListenerSupported=(...e)=>!!(null===window||void 0===window?void 0:window.addEventListener)||(r.warn().log("API window.addEventListener is not supported",...e),!1);t.isRuntimeSendMessageSupported=(...e)=>{var t,o;return!!(null===(o=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.runtime)||void 0===o?void 0:o.sendMessage)||(r.warn().log("API runtime.sendMessage is not supported",...e),!1)};t.isRuntimeOnMessageSupported=(...e)=>{var t,o;return!!(null===(o=null===(t=(0,n.getBrowserContext)().runtime)||void 0===t?void 0:t.onMessage)||void 0===o?void 0:o.addListener)||(r.warn().log("API runtime.onMessage.addListener is not supported",...e),!1)};t.isRuntimeOnMessageExternalSupported=(...e)=>{var t,o;return!!(null===(o=null===(t=(0,n.getBrowserContext)().runtime)||void 0===t?void 0:t.onMessageExternal)||void 0===o?void 0:o.addListener)||(r.warn().log("API runtime.onMessageExternal.addListener is not supported",...e),!1)};t.isTabsOnRemovedSupported=(...e)=>{var t,o;return!!(null===(o=null===(t=(0,n.getBrowserContext)().tabs)||void 0===t?void 0:t.onRemoved)||void 0===o?void 0:o.addListener)||(r.warn().log("API tabs.onRemoved.addListener is not supported",...e),!1)};t.isActionOnClickedSupported=(...e)=>{var t,o,i;return!!(null===(i=null===(o=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.action)||void 0===o?void 0:o.onClicked)||void 0===i?void 0:i.addListener)||(r.warn().log("API action.onClicked.addListener is not supported",...e),!1)};t.isBrowserActionOnClickedSupported=(...e)=>{var t,o,i;return!!(null===(i=null===(o=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.browserAction)||void 0===o?void 0:o.onClicked)||void 0===i?void 0:i.addListener)||(r.warn().log("API browserAction.onClicked.addListener is not supported",...e),!1)};t.isOnBeforeRequestSupported=(...e)=>{var t,o,i;return!!(null===(i=null===(o=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.webRequest)||void 0===o?void 0:o.onBeforeRequest)||void 0===i?void 0:i.addListener)||(r.warn().log("API webRequest.onBeforeRequest is not supported",...e),!1)};t.isOnBeforeSendHeadersSupported=(...e)=>{var t,o,i;return!!(null===(i=null===(o=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.webRequest)||void 0===o?void 0:o.onBeforeSendHeaders)||void 0===i?void 0:i.addListener)||(r.warn().log("API webRequest.onBeforeSendHeaders is not supported",...e),!1)};t.isTabsQuerySupported=(...e)=>{var t,o;return!!(null===(o=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.tabs)||void 0===o?void 0:o.query)||(r.warn().log("API tabs.query is not supported",...e),!1)};t.isTabsSendMessageSupported=(...e)=>{var t,o;return!!(null===(o=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.tabs)||void 0===o?void 0:o.sendMessage)||(r.warn().log("API tabs.sendMessage is not supported",...e),!1)};t.isRuntimeGetUrlSupported=(...e)=>{var t,o;return!!(null===(o=null===(t=(0,n.getBrowserContext)())||void 0===t?void 0:t.runtime)||void 0===o?void 0:o.getURL)||(r.warn().log("API runtime.getURL is not supported",...e),!1)}},332:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function d(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,d)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.removeDoubleQuotesAround=t.buildQueryParts=t.getElementsUnderCursor=t.downloadFile=t.copyToClipboard=t.createClassName=t.waitHTMLElement=t.isInsideIframe=t.mountHTMLElement=t.cssObjectToString=t.getExecutingContextByMessageType=t.getPlatformNameByID=t.getWebAccessibleUrl=t.getBrowserContext=void 0;const r=o(3319),i=o(5099);t.getBrowserContext=()=>"undefined"!=typeof browser?browser:chrome;t.getWebAccessibleUrl=e=>(0,i.isRuntimeGetUrlSupported)(e)?(0,t.getBrowserContext)().runtime.getURL(e):"";t.getPlatformNameByID=e=>e===r.PlatformID.MicrosoftSentinel?"Microsoft Sentinel":e===r.PlatformID.MicrosoftDefender?"Microsoft Defender For Endpoint":"Unknown Platform";t.getExecutingContextByMessageType=e=>{let t=e.slice(0,3).toLowerCase();return"app"===t?"app":(t=t.slice(0,2),"bg"===t?"background":"cs"===t?"content":"is"===t?"inline":"unknown")};t.cssObjectToString=e=>Object.keys(e).reduce(((t,o)=>t+`${o}:${e[o]};`),"");t.mountHTMLElement=(e,o,n)=>{const r=document.createElement(e);return(null==n?void 0:n.attributes)&&Object.keys(n.attributes).forEach((e=>{var o;r.setAttribute(e,"style"===e?(0,t.cssObjectToString)(n.attributes[e]):(null===(o=n.attributes)||void 0===o?void 0:o[e])||"")})),(null==n?void 0:n.innerHtml)&&(r.innerHTML=n.innerHtml),(null==n?void 0:n.innerText)&&(r.innerText=n.innerText),o&&o.append(r),r};t.isInsideIframe=()=>{try{return window.self!==window.top}catch(e){return!0}};t.waitHTMLElement=(e,t=document)=>n(void 0,void 0,void 0,(function*(){return new Promise((o=>{new MutationObserver(((n,r)=>{const i=t.querySelector(e);i&&(r.disconnect(),o(i))})).observe(t,{childList:!0,subtree:!0})}))}));t.createClassName=e=>e.filter(Boolean).join(" ");t.copyToClipboard=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-99999px",t.style.top="-99999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};t.downloadFile=(e,t)=>{const o=document.createElement("a");o.setAttribute("href",encodeURI(`data:text/csv;charset=utf-8,${t}`)),o.setAttribute("download","extension-resources.csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)};t.getElementsUnderCursor=(e,t)=>{const o=e.clientX,n=e.clientY,r=[],i=[];let s=document.elementFromPoint(o,n);for(;"HTML"!==s.tagName;){const e=s.style.pointerEvents;if(!s)break;(!t||t&&t(s))&&r.push(s),i.push({savedPointerEvents:e,element:s}),s.style.pointerEvents="none",s=document.elementFromPoint(o,n)}return i.forEach((({element:e,savedPointerEvents:t})=>{t?e.style.pointerEvents=t:e.style.removeProperty("pointer-events"),e.getAttribute("style")||e.removeAttribute("style")})),r};t.buildQueryParts=(e,t,o,n)=>Object.keys(e).reduce(((r,i)=>(r.push(e[i].map((e=>`${n.leftOperand(i)} ${t} ${n.rightOperand(e)}`)).join(o)),r)),[]).join(o);t.removeDoubleQuotesAround=e=>{let t=e;return'"'===e[0]&&(t=t.slice(1)),'"'===e[e.length-1]&&(t=t.slice(0,e.length-2)),t}},3799:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isMessageMatched=void 0;const n=o(5482),r=o(1846),i=o(332);t.isMessageMatched=(e,t,...o)=>!!e()&&(n.loggers.debug().addPrefix((0,r.getDebugPrefix)((0,i.getExecutingContextByMessageType)(t.type))).log(`got ${t.type} message`,t,...o),!0)},1595:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.logLevel=t.mode=t.backgroundPlatformIDFromENV=t.contentPlatformIDFromENV=void 0;const n=o(3319),r=o(9068);t.contentPlatformIDFromENV=(Object.values(n.PlatformID).includes(null),null),t.backgroundPlatformIDFromENV=(Object.values(n.PlatformID).includes(null),null),t.mode="production"===r.Mode.production?r.Mode.production:r.Mode.development,t.logLevel=Object.keys(r.LogLevel).includes("info")?"info":r.LogLevel.info},5482:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loggers=t.Loggers=t.stopLogging=t.startLogging=void 0;const n=o(9068),r=o(1595);let i=!0;t.startLogging=()=>i=!0;t.stopLogging=()=>i=!1;class s{constructor(e="",t=n.LogLevel.info){this.prefix="",this.level=n.LogLevel.info,this.prefix=e,this.level=t}createInstance(e="",t=n.LogLevel.info){return new s(e,t)}log(...e){var t;i&&(r.mode===n.Mode.production&&this.level===n.LogLevel.debug&&r.logLevel!==n.LogLevel.debug||r.mode!==n.Mode.production&&(null===(t=null===console||void 0===console?void 0:console[this.level===n.LogLevel.error?"error":this.level===n.LogLevel.warn?"warn":"log"])||void 0===t||t.call(console,this.prefix||"==>",...e)))}error(){return this.createInstance(`ERROR: ${this.prefix}`,n.LogLevel.error)}warn(){return this.createInstance(`WARN: ${this.prefix}`,n.LogLevel.warn)}info(){return this.createInstance(`INFO: ${this.prefix}`,n.LogLevel.info)}debug(){return this.createInstance(`DEBUG: ${this.prefix}`,n.LogLevel.debug)}addPrefix(e){return this.createInstance([this.prefix,e].join(" "),this.level)}setLevel(e){return this.createInstance(this.prefix,e)}}t.Loggers=s,t.loggers=new s},1846:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DebugID=t.getDebugPrefix=void 0;const n=o(9068);t.getDebugPrefix=e=>"background"===e?"bg ==>":"content"===e?"cs ==>":"inline"===e?"is ==>":"app"===e?"app ==>":"unknown ==>";const r=(0,n.mapType)("debug-external-der3edc3op3e4dde44rt");!function(e){e[e.debugIDExternal=r]="debugIDExternal"}(t.DebugID||(t.DebugID={}))},3319:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlatformID=t.Browser=void 0,function(e){e.chrome="chrome",e.firefox="firefox",e.edge="edge"}(t.Browser||(t.Browser={})),function(e){e.MicrosoftSentinel="MicrosoftSentinel",e.MicrosoftDefender="MicrosoftDefender"}(t.PlatformID||(t.PlatformID={}))},6926:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildMicrosoftDefenderQueryParts=t.normalizedValue=void 0;const n=o(332),r=o(7838);t.normalizedValue=e=>{const t=(0,r.isNumberInString)(e)?parseFloat(e):e;return"number"==typeof t?t:`"${t.replace(/\\/g,"\\\\")}"`};t.buildMicrosoftDefenderQueryParts=(e,o)=>(0,n.buildQueryParts)(o,"exclude"===e?"!=":"==","exclude"===e?" and ":" or ",{leftOperand:e=>e,rightOperand:e=>(0,t.normalizedValue)(e)})},6474:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buildNewQuery=t.buildNewJsonQuery=t.getEditorIndexByFormattedUri=t.getLastContentLine=t.getContentFocusedLines=t.checkEditorExists=t.getEditorByIndex=void 0;const n=o(412);t.getEditorByIndex=e=>monaco.editor.getModels()[e];t.checkEditorExists=()=>{var e,t;return!!(null===(t=null===(e=null===monaco||void 0===monaco?void 0:monaco.editor)||void 0===e?void 0:e.getModels)||void 0===t?void 0:t.call(e))};t.getContentFocusedLines=e=>{var o;const n=(0,t.getEditorByIndex)(e),r=[];for(let e=1;e<=n.getLineCount();e++)n.getLineDecorations(e).some((e=>e.options.className))&&""!==(null===(o=n.getLineContent(e))||void 0===o?void 0:o.trim())&&r.push(e);return r};t.getLastContentLine=e=>{var o;const n=(0,t.getEditorByIndex)(e).getLinesContent();for(;""===(null===(o=n[n.length-1])||void 0===o?void 0:o.trim());)n.splice(n.length-1);return n.length>0?n.length:1};t.getEditorIndexByFormattedUri=e=>monaco.editor.getModels().findIndex((t=>t.uri._formatted===e));t.buildNewJsonQuery=(e,o,r)=>{var i;const s=(0,t.getEditorByIndex)(e),d=(0,n.parseJSONSafe)(s.getValue(),null),l=d&&d.Query?d.Query:"",u=`${"show all"===r?(null===(i=l.split("|").shift())||void 0===i?void 0:i.trim())||"<unknown>":l} ${o}`;return JSON.stringify({Query:u},null,3)};t.buildNewQuery=(e,o,r)=>{let i="";const s=(0,t.getEditorByIndex)(e),d=s.getLinesContent(),l=(0,t.getContentFocusedLines)(e);if("show all"===r&&l.length<1){i=`${d.map((e=>e.split("|").shift())).filter(Boolean).pop()||"<unknown>"} ${o}`}if("show all"===r&&l.length>=1){const e=d[l[0]-1].split("|").shift();d.splice(l[0]-1,l.length,`${e} ${o}`),i=d.join("\n")}if("show all"!==r){const n=l.length>0?l[l.length-1]:(0,t.getLastContentLine)(e),r=s.getLineContent(n)||"<unknown>";d[n-1]=`${r} ${o}`,i=d.join("\n")}return(0,n.clearExtraSpaces)(i)}},4689:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageToInline=void 0;const n=o(332);var r;!function(e){e.ISModifyQuery="ISModifyQuery"}(r=t.MessageToInline||(t.MessageToInline={})),Object.values(r).forEach((e=>{if("inline"!==(0,n.getExecutingContextByMessageType)(e))throw new Error(`Wrong inline message type "${e}"`)}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}(()=>{const e=o(4689),t=o(1846),n=o(3319),r=o(3799),i=o(6926),s=o(6474),d=o(5482).loggers.addPrefix((0,t.getDebugPrefix)("inline")).addPrefix(n.PlatformID.MicrosoftDefender);let l=2;window.addEventListener("message",(t=>{const o=t.data;if((0,r.isMessageMatched)((()=>e.MessageToInline.ISModifyQuery===o.type),o,t)){if(!(0,s.checkEditorExists)())return d.error().log("editor not found",monaco);if(null===(n=(()=>{let e=Array.from(document.querySelectorAll('.response-editor .monaco-editor[data-uri^="inmemory:"]')).filter((e=>e.scrollWidth>5));const t=Array.from(document.querySelectorAll('.monaco-editor[data-uri^="inmemory:"]')).filter((e=>e.scrollWidth>5)).filter((t=>!e.includes(t)))[0];if(!t)return null;const o=t.getAttribute("data-uri")||"#failed",n=(0,s.getEditorIndexByFormattedUri)(o);return"number"==typeof n&&n>-1?n:null})())||(l!==n&&(l=n,d.debug().log("The editor index is set to",n)),0))return d.info().log("Can not determine the editor index");const{resources:e,modifyType:t}=o.payload,{href:r}=document.location,u=` | where ${(0,i.buildMicrosoftDefenderQueryParts)(t,e)}`,a=(0,s.getEditorByIndex)(l),c=r.indexOf("security.microsoft.com/v2/advanced-hunting")>-1?(0,s.buildNewQuery)(l,u,t):(0,s.buildNewJsonQuery)(l,u,t);a.setValue(c)}var n})),d.debug().log("mounted")})()})();