(()=>{"use strict";var e,t={8667:(e,t,n)=>{var r,o;n.d(t,{AR:()=>r,in:()=>o,mr:()=>s}),function(e){e.production="production",e.development="development"}(r||(r={})),function(e){e.info="info",e.debug="debug",e.error="error",e.warn="warn"}(o||(o={}));const s=e=>e},6478:(e,t,n)=>{n.d(t,{hw:()=>i,xJ:()=>s});var r=n(7131),o=n(8667);Object.values(r.WM).includes(null),Object.values(r.WM).includes(null);const s="production"===o.AR.production?o.AR.production:o.AR.development,i=Object.keys(o.in).includes("info")?"info":o.in.info},2224:(e,t,n)=>{n.d(t,{Et:()=>s,yD:()=>a});var r=n(8667),o=n(6478);let s,i=o.xJ===r.AR.development||o.hw===r.in.debug;const a=e=>{i=e};class c{prefix="";level=r.in.info;createInstance(e="",t=r.in.info){return new c(e,t)}constructor(e="",t=r.in.info){this.prefix=e,this.level=t}log(...e){(this.level!==r.in.debug||i)&&console[this.level===r.in.error?"error":this.level===r.in.warn?"warn":"log"](this.prefix||"==>",...e)}error(){return this.createInstance(`ERROR: ${this.prefix}`,r.in.error)}warn(){return this.createInstance(`WARN: ${this.prefix}`,r.in.warn)}info(){return this.createInstance(`INFO: ${this.prefix}`,r.in.info)}debug(){return this.createInstance(`DEBUG: ${this.prefix}`,r.in.debug)}addPrefix(e){return this.createInstance([this.prefix,e].join(" "),this.level)}setLevel(e){return this.createInstance(this.prefix,e)}setPrefix(e){return s=this.addPrefix(e),s}}s=new c},6421:(e,t,n)=>{n.d(t,{k$:()=>o,kW:()=>r,qK:()=>s});const r=e=>"background"===e?"bg ==>":"content"===e?"cs ==>":"inline"===e?"is ==>":"app"===e?"app ==>":"unknown ==>",o=e=>{let t=(e||"").slice(0,3).toLowerCase();return"app"===t?"app":(t=t.slice(0,2),"bg"===t?"background":"cs"===t?"content":"is"===t?"inline":"unknown")},s="debug-external-der3edc3op3e4dde44rt"},7131:(e,t,n)=>{var r,o,s,i,a;n.d(t,{S9:()=>i,WM:()=>o,if:()=>a}),function(e){e.chrome="chrome",e.firefox="firefox",e.edge="edge"}(r||(r={})),function(e){e.MicrosoftSentinel="MicrosoftSentinel",e.MicrosoftDefender="MicrosoftDefender",e.Splunk="Splunk",e.QRadar="QRadar",e.Elastic="Elastic",e.OpenSearch="OpenSearch",e.ArcSight="ArcSight",e.Athena="Athena",e.LogScale="LogScale",e.Chronicle="Chronicle"}(o||(o={})),function(e){e.ElasticEQl="ElasticEql"}(s||(s={})),function(e){e.Sentinel="ala",e.Defender="mdatp",e.Splunk="splunk",e.Qradar="qradar",e.ElasticEQL="es-eql",e.ElasticLucene="elasticsearch",e.ArcSight="arcsight-keyword",e.Athena="athena",e.LogScale="humio",e.Chronicle="chronicle-query",e.OpenSearch="opendistro-query"}(i||(i={})),function(e){e.MicrosoftSentinel="Microsoft Sentinel",e.MicrosoftDefender="Microsoft Defender For Endpoint",e.Splunk="Splunk",e.QRadar="IBM QRadar",e.Elastic="Elastic",e.OpenSearch="OpenSearch",e.ArcSight="ArcSight",e.Athena="Amazon Athena",e.LogScale="Falcon LogScale",e.Chronicle="Chronicle"}(a||(a={}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=r(6421),r(2224).Et.setPrefix((0,e.kW)("inline")),(()=>{var e,t=r(6421);!function(e){e.ISModifyQuery="ISModifyQuery",e.ISSetQuery="ISSetQuery",e.ISGetQuery="ISGetQuery",e.ISSetDebugMode="ISSetDebugMode",e.ISRemoveHash="ISRemoveHash",e.ISRemoveFieldSpecification="ISRemoveFieldSpecification"}(e||(e={})),Object.values(e).forEach((e=>{if("inline"!==(0,t.k$)(e))throw new Error(`Wrong inline message type "${e}"`)}));var n=r(2224);const o=(e,t,...r)=>!!e()&&(n.Et.debug().log(`got ${t.type} message`,t,...r),!0);var s=r(8667);const i=()=>Math.random().toString(36).substring(5)+Date.now().toString(36)+Math.random().toString(36).substring(5),a=e=>e.replace(/ +/g," ");var c;!function(e){e.CSConnectPlatform="CSConnectPlatform",e.CSSetDebugMode="CSSetDebugMode",e.CSDirectMessageToApp="CSDirectMessageToApp",e.CSDirectMessageToInline="CSDirectMessageToInline"}(c||(c={})),Object.values(c).forEach((e=>{if("content"!==(0,t.k$)(e))throw new Error(`Wrong content message type "${e}"`)}));const l=()=>"undefined"!=typeof browser?browser:chrome,p=r(2224).Et.addPrefix("api-support"),d=(...e)=>!!l()?.runtime?.getURL||(p.warn().log("API runtime.getURL is not supported",...e),!1),u=r(2224).Et.addPrefix("services"),g=(e,t,n=!0)=>{t.id=`${t.id?`${t.id}--`:""}${i()}`;const r="sendMessage";try{return n||((...e)=>!!window?.postMessage||(p.warn().log("API window.postMessage is not supported",...e),!1))(t)?n?((...e)=>!!l()?.runtime?.sendMessage||(p.warn().log("API runtime.sendMessage is not supported",...e),!1))()?(l().runtime.sendMessage(t)?.catch((n=>e.error().addPrefix(r).log(n,t))),e.debug().addPrefix(r).log(t),t):t:(window.postMessage(t),e.debug().log("postMessage",t),t):t}catch(n){return e.error().addPrefix(r).log(n,t),t}},f=(e,t=!0)=>g(u.addPrefix("message-from-content"),e,t);var h;!function(e){e.BGDirectMessageToApp="BGDirectMessageToApp",e.BGDirectMessageToInline="BGDirectMessageToInline",e.BGSetWatchers="BGSetWatchers",e.BGRegisterPlatformTab="BGRegisterPlatformTab",e.BGToggleShowExtension="BGToggleShowExtension",e.BGSetDebugMode="BGSetDebugMode",e.BGTakeCallbackMessage="BGTakeCallbackMessage"}(h||(h={})),Object.values(h).forEach((e=>{if("background"!==(0,t.k$)(e))throw new Error(`Wrong background message type "${e}"`)}));class S{fields=new Set;static processInlineListeners(t){if(o((()=>c.CSSetDebugMode===t.type),t)){const{debugMode:n}=t.payload;r(2224).yD(n),f({...t,id:`${t.id}--${t.type}`,type:e.ISSetDebugMode},!1)}if(o((()=>c.CSDirectMessageToApp===t.type),t)&&f({id:`${t.id}--${t.type}`,type:h.BGDirectMessageToApp,payload:t.payload}),o((()=>c.CSDirectMessageToInline===t.type),t)){const{type:e,payload:n}=t.payload;f({id:`${t.id}--${t.type}`,type:e,payload:n},!1)}}}var y,M=r(7131);!function(e){e.Accounts="Accounts",e.Assets="Assets"}(y||(y={}));Object.keys(y);var m,w;!function(e){e.OnMessage="OnMessage"}(m||(m={})),function(e){e[e.debugIDExternal=(0,s.mr)(t.qK)]="debugIDExternal"}(w||(w={}));const A={},b=[];A[m.OnMessage]=(e,...n)=>{if(((...e)=>!!l().runtime?.onMessage?.addListener||(p.warn().log("API runtime.onMessage.addListener is not supported",...e),!1))()){const t=l().runtime.onMessage;b.push((()=>{t.removeListener(e)})),t.addListener(((...t)=>{e(...t)}),...n)}if(!((...e)=>!!window?.addEventListener||(p.warn().log("API window.addEventListener is not supported",...e),!1))())return;const r=r=>{const o=r.data;r.origin!==window.location.origin||"content"!==(0,t.k$)(o.type)&&o.externalType!==w.debugIDExternal||e(r.data,...n)};b.push((()=>{window.removeEventListener("message",r)})),window.addEventListener("message",r)};const v=(e,t,n)=>{const r=document.createElement(e);return n?.attributes&&Object.keys(n.attributes).forEach((e=>{var t;r.setAttribute(e,"style"===e?(t=n.attributes[e],Object.keys(t).reduce(((e,n)=>e+`${n}:${t[n]};`),"")):n.attributes?.[e]||"")})),n?.innerHtml&&(r.innerHTML=n.innerHtml),n?.innerText&&(r.innerText=n.innerText),t&&t.append(r),r},D="inline-chronicle.js";M.WM.MicrosoftSentinel,M.WM.MicrosoftDefender,M.WM.Splunk,M.WM.QRadar,M.WM.Elastic,M.WM.ArcSight,M.WM.Athena,M.WM.OpenSearch,M.WM.LogScale,M.WM.Chronicle;let x;class k extends S{static id=M.WM.Chronicle;static platformName=M.if.Chronicle;defaultWatchers={[y.Accounts]:["user","principal.user.userid","target.user.userid","source.user.userid"],[y.Assets]:["hostname","IP","src.ip","dst.ip","target.asset.hostname","target.hostname","source.hostname","source.asset.hostname","principal.ip"]};static extensionDefaultPosition={top:0,left:0,width:480,height:480};extensionDefaultPosition=k.extensionDefaultPosition;static normalizedValue=e=>`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`;static buildQueryParts(e,t,n=!1){let r="include"===e?"AND (":"AND";return"show all"===e&&(r=""),`${((e,t,n,r,o,s)=>{const i=[];Object.keys(e).forEach((r=>{i.push(e[r].map((e=>`${o.leftOperand(r)}${t(r,e)}${o.rightOperand(e)}`)).join(n))}));const a=i.join(r);return s?`${s} ${a}`:a})(t,(()=>"exclude"===e?" != ":" = "),"exclude"===e?" AND ":" OR ","exclude"===e?" AND ":") AND (",{leftOperand:e=>e,rightOperand:e=>k.normalizedValue(e)},n?r:void 0)} ${"exclude"===e?"":")"}`}buildQueryParts(e,t,n){return k.buildQueryParts(e,t,n)}static connectInlineListener(){var e;v("script",document.body,{attributes:{src:(e=D,d(e)?l().runtime.getURL(e):""),type:"text/javascript","data-type":"inline-listener"}})}static setListeners(){((e,t,...n)=>{A[e]?.(((...e)=>{t(...e)}),...n)})(m.OnMessage,(async e=>{S.processInlineListeners(e)})),x.debug().log("listeners were set")}connect(){k.setListeners(),k.connectInlineListener(),x.debug().log("connected")}getID(){return k.id}getName(){return k.platformName}getType(){return M.S9.Chronicle}}var E;x=r(2224).Et.addPrefix(k.id),function(e){e.AppShowExtension="AppShowExtension",e.AppTakeResourceData="AppTakeResourceData",e.AppTakeNewResourceData="AppTakeNewResourceData",e.AppSyncWatchers="AppSyncWatchers",e.AppQueryHasHash="AppQueryHasHash",e.AppQueryHasSpecifyFields="AppQueryHasSpecifyFields",e.AppSetLoadingState="AppSetLoadingState",e.AppToggleShowExtension="AppToggleShowExtension",e.AppSendToBackground="AppSendToBackground",e.AppSendMessageOutside="AppSendMessageOutside",e.AppTakeQuery="AppTakeQuery",e.AppSetDebugMode="AppSetDebugMode",e.AppTakeCallbackMessageResult="AppTakeCallbackMessageResult"}(E||(E={})),Object.values(E).forEach((e=>{if("app"!==(0,t.k$)(e))throw new Error(`Wrong app message type "${e}"`)}));const I=new k,$=r(2224).Et.addPrefix(I.getID()),T=()=>void 0===monaco?.editor?.getModels?($.error().log("monaco not found",monaco),{}):{editor:monaco.editor.getModels()[0]},L=e=>e.replace(/\( /g,"(").replace(/ \)/g,")");window.addEventListener("message",(t=>{const n=t.data;if(o((()=>e.ISModifyQuery===n.type),n,t)){const{editor:e}=T();if(!e)return;const{resources:t,modifyType:r}=n.payload,o=I.buildQueryParts(r,t,!0),s=((e,t,n,r=!0)=>{let o="";const s=e.getLinesContent(),i=(e=>{const t=[];for(let n=1;n<=e.getLineCount();n++)e.getLineDecorations(n).some((e=>e.options.className))&&""!==e.getLineContent(n)?.trim()&&t.push(n);return t})(e);if("show all"===n&&i.length<1){const e=s.map((e=>e.split("|").shift())).filter(Boolean).pop()||"<unknown>";o=`${r?`${e} `:""}${t}`}if("show all"===n&&i.length>=1){const e=s[i[0]-1].split("|").shift();s.splice(i[0]-1,i.length,`${r?`${e} `:""}${t}`),o=s.join("\n")}if("show all"!==n){const n=i.length>0?i[i.length-1]:(e=>{const t=e.getLinesContent();for(;""===t[t.length-1]?.trim();)t.splice(t.length-1);return t.length>0?t.length:1})(e),r=e.getLineContent(n)||"<unknown>";s[n-1]=`${r} ${t}`,o=s.join("\n")}return a(o)})(e,o,r).replace("<unknown> AND ","");if("show all"!==r){const t=s.split(o)[0];let n=t.trim();return"("!==n[0]&&(n=`(${n})`),void e.setValue(L(a(s.replace(t,`${n} `))))}e.setValue(L(a(`(${o}`)))}if(o((()=>e.ISSetQuery===n.type),n,t)){const{editor:e}=T();if(!e)return;const{value:t}=n.payload;e.setValue(t)}if(o((()=>e.ISGetQuery===n.type),n,t)){const{editor:e}=T();if(!e)return;((s=e.getValue())||l)&&window.postMessage({id:i(),type:c.CSDirectMessageToApp,payload:{type:E.AppTakeQuery,payload:{queryValue:s,queryMeta:l}}})}var s,l;if(o((()=>e.ISSetDebugMode===n.type),n,t)){const{debugMode:e}=n.payload;r(2224).yD(e)}})),$.debug().log("mounted")})()})();