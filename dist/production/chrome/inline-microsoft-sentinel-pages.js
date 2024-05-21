(()=>{"use strict";var e,t={5673:(e,t,r)=>{var n,o;r.d(t,{$b:()=>o,Kt:()=>n}),function(e){e.production="production",e.development="development"}(n||(n={})),function(e){e.info="info",e.debug="debug",e.error="error",e.warn="warn"}(o||(o={}))},9896:(e,t,r)=>{r.d(t,{Mq:()=>a,dm:()=>i});var n=r(2167),o=r(5673);Object.values(n.bA).includes(null),Object.values(n.bA).includes(null);const a="production"===o.Kt.production?o.Kt.production:o.Kt.development,i=Object.keys(o.$b).includes("info")?"info":o.$b.info},5656:(e,t,r)=>{r.d(t,{C$:()=>a});var n=r(5673),o=r(9896);let a,i=o.Mq===n.Kt.development||o.dm===n.$b.debug;class s{prefix="";level=n.$b.info;createInstance(e="",t=n.$b.info){return new s(e,t)}constructor(e="",t=n.$b.info){this.prefix=e,this.level=t}log(...e){(this.level!==n.$b.debug||i)&&console[this.level===n.$b.error?"error":this.level===n.$b.warn?"warn":"log"](this.prefix||"==>",...e)}error(){return this.createInstance(`ERROR: ${this.prefix}`,n.$b.error)}warn(){return this.createInstance(`WARN: ${this.prefix}`,n.$b.warn)}info(){return this.createInstance(`INFO: ${this.prefix}`,n.$b.info)}debug(){return this.createInstance(`DEBUG: ${this.prefix}`,n.$b.debug)}addPrefix(e){return this.createInstance([this.prefix,e].join(" "),this.level)}setLevel(e){return this.createInstance(this.prefix,e)}setPrefix(e){return a=this.addPrefix(e),a}}a=new s},5745:(e,t,r)=>{r.d(t,{a9:()=>n,oZ:()=>o});const n=e=>"background"===e?"bg ==>":"content"===e?"cs ==>":"inline"===e?"is ==>":"app"===e?"app ==>":"unknown ==>",o=e=>{let t=(e||"").slice(0,3).toLowerCase();return"app"===t?"app":(t=t.slice(0,2),"bg"===t?"background":"cs"===t?"content":"is"===t?"inline":"unknown")}},2167:(e,t,r)=>{var n,o,a,i,s;r.d(t,{bA:()=>o}),function(e){e.chrome="chrome",e.firefox="firefox",e.edge="edge"}(n||(n={})),function(e){e.MicrosoftSentinel="MicrosoftSentinel",e.MicrosoftDefender="MicrosoftDefender",e.Splunk="Splunk",e.QRadar="QRadar",e.Elastic="Elastic",e.OpenSearch="OpenSearch",e.ArcSight="ArcSight",e.Athena="Athena",e.LogScale="LogScale",e.Chronicle="Chronicle"}(o||(o={})),function(e){e.ElasticEQl="ElasticEql"}(a||(a={})),function(e){e.Sentinel="ala",e.Defender="mdatp",e.Splunk="splunk",e.Qradar="qradar",e.ElasticEQL="es-eql",e.ElasticLucene="elasticsearch",e.ArcSight="arcsight-keyword",e.Athena="athena",e.LogScale="humio",e.Chronicle="chronicle-query",e.OpenSearch="opendistro-query"}(i||(i={})),function(e){e.MicrosoftSentinel="Microsoft Sentinel",e.MicrosoftDefender="Microsoft Defender For Endpoint",e.Splunk="Splunk",e.QRadar="IBM QRadar",e.Elastic="Elastic",e.OpenSearch="OpenSearch",e.ArcSight="ArcSight",e.Athena="Amazon Athena",e.LogScale="Falcon LogScale",e.Chronicle="Chronicle"}(s||(s={}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=n(5745),n(5656).C$.setPrefix((0,e.a9)("inline")),(()=>{var e=n(2167),t=n(5656);var r,o=n(5745);!function(e){e.ISModifyQuery="ISModifyQuery",e.ISSetQuery="ISSetQuery",e.ISGetQuery="ISGetQuery",e.ISSetDebugMode="ISSetDebugMode",e.ISRemoveHash="ISRemoveHash",e.ISRemoveFieldSpecification="ISRemoveFieldSpecification"}(r||(r={})),Object.values(r).forEach((e=>{if("inline"!==(0,o.oZ)(e))throw new Error(`Wrong inline message type "${e}"`)}));n(5673);const a=()=>Math.random().toString(36).substring(5)+Date.now().toString(36)+Math.random().toString(36).substring(5);var i,s;!function(e){e.CSConnectPlatform="CSConnectPlatform",e.CSSetDebugMode="CSSetDebugMode",e.CSDirectMessageToApp="CSDirectMessageToApp",e.CSDirectMessageToInline="CSDirectMessageToInline"}(i||(i={})),Object.values(i).forEach((e=>{if("content"!==(0,o.oZ)(e))throw new Error(`Wrong content message type "${e}"`)})),function(e){e.AppShowExtension="AppShowExtension",e.AppTakeResourceData="AppTakeResourceData",e.AppTakeNewResourceData="AppTakeNewResourceData",e.AppSyncWatchers="AppSyncWatchers",e.AppQueryHasHash="AppQueryHasHash",e.AppQueryHasSpecifyFields="AppQueryHasSpecifyFields",e.AppSetLoadingState="AppSetLoadingState",e.AppToggleShowExtension="AppToggleShowExtension",e.AppSendToBackground="AppSendToBackground",e.AppSendMessageOutside="AppSendMessageOutside",e.AppTakeQuery="AppTakeQuery",e.AppSetDebugMode="AppSetDebugMode",e.AppTakeCallbackMessageResult="AppTakeCallbackMessageResult"}(s||(s={})),Object.values(s).forEach((e=>{if("app"!==(0,o.oZ)(e))throw new Error(`Wrong app message type "${e}"`)}));const c=(e,t)=>{(e||t)&&window.postMessage({id:a(),type:i.CSDirectMessageToApp,payload:{type:s.AppTakeQuery,payload:{queryValue:e,queryMeta:t}}})},p=e=>{let t="";const r=Array.from(document.querySelectorAll('label[data-testid="DetailsPanelBodyItemTitle"]')||[]).filter((t=>t.innerText===e));return r.length<1?"":(r.forEach((e=>{const r=e.nextSibling.innerText?.trim?.();r&&r.length>0&&(t=r)})),t)},l=n(5656).C$.addPrefix(e.bA.MicrosoftSentinel).addPrefix("pages");window.addEventListener("message",(e=>{const n=e.data;if(((e,r,...n)=>!!e()&&(t.C$.debug().log(`got ${r.type} message`,r,...n),!0))((()=>r.ISGetQuery===n.type),n,e)){let e="";const{meta:t}=n.payload;if(!e&&"EditMigrationRule"===t?.type)return e=p("Source Query"),void c(e);e||(e=p("Rule query")),e||(e=p("Source Query")),e||(e=(()=>{let e="";return Array.from(document.querySelectorAll(".react-monaco-editor-container")).forEach((t=>{const r=t.innerText?.trim?.();r&&r.length>0&&(e=r)})),e})()),c(e)}})),l.debug().log("mounted")})()})();