!function(){"use strict";function e(){return document.currentScript?document.currentScript:document.querySelector("script[jv-id]")||document.querySelector("script[data-jv-id]")}function t(e){return e&&e.match(/https?:\/\/(\S+(\.com|\.ru|\.tech))\/(widget\.js|widget\/[A-Za-z0-9]+)/)}function n(e){return e&&e.match(/^https?:\/\/(\S+)\/script\/widget\/([A-Za-z0-9]+)/)}function o(e){return e&&e.match(/https?:\/\/(\S+)\/script\/geo-widget\/([A-Za-z0-9]+)/)}function r(){var e=window.location&&window.location.protocol;return-1===["http","https"].indexOf(e||"")&&(e="https:"),e}function i(){return window.jivo_config&&window.jivo_config.shard_id||"main"}function a(){return window.jivo_config&&window.jivo_config.telemetry_host||null}function d(e,t,n){var o;e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(e.attachEvent("on"+t,(o=e,function(){n.call(o,window.event)})),e=null)}function s(e){try{d(window,"scroll",e),d(document.body,"mousemove",e)}catch(t){e&&e()}}function l(e,t,n){if(window.removeEventListener)e.removeEventListener(t,n,!1);else{if(!window.detachEvent)return!1;e.detachEvent("on"+t,(function(){n.call(e)}))}}function c(e){try{l(window,"scroll",e),l(document.body,"mousemove",e)}catch(e){console.warn(e)}}function u(){var e=navigator.userAgent.toLowerCase();return-1==e.search(/google/gi)&&-1==e.search(/\+http:\/\/yandex\.com\/bots/gi)&&-1==e.search(/\+http:\/\/www\.cloudflare\.com\/always-online/gi)&&-1==e.search(/linespider\//gi)}function g(e,t,n,o,r){r&&r.error&&(r=r.error),r&&r instanceof Error||(r={}),r.stack=r.stack||"empty",r.message="Bundle init error: "+e+" error.message: "+r.message,r.columnNumber=o,r.lineNumber=n,r.url=t,window.parent.__jivoOnError(r)}var f="loader_loaded",v="no_widget_id_or_confighost",m="error_code_1015",p="widget_deleted",h=Boolean(!1);window.__jivoOnError=function(e){if(u())try{var t=window.jivo_config&&window.jivo_config.err_host?"//"+window.jivo_config.err_host+"/widget":"//err.jivosite.com/widget",n={widget:"true",widget_version:window.jivo_version,level:2,url:(o=window.location,o.protocol+"//"+o.host+o.pathname),lineNumber:e&&e.lineNumber,fileName:e&&e.fileName,column:e&&e.columnNumber,full_message:e&&e.stack,short_message:e&&e.message,shard:i()};window.navigator&&window.navigator.sendBeacon&&navigator.sendBeacon(r()+t,JSON.stringify(n))}catch(e){}var o},function(){var l=.1;window.__hasStorage=!1;try{localStorage.setItem("testLocalStorage","ok"),localStorage.removeItem("testLocalStorage"),window.__hasStorage=!0}catch(e){}function w(l,w,_,b){var y=l.console;if(y||(y={log:function(){},error:function(){}}),function(){if(l.google&&l.google.translate&&0==l.location.href.search(/(http(s?)).+\.translate\.goog/gi))return!1;return!!l.WebSocket}()){if(void 0===l.jivo_magic_var){l.jivo_magic_var=!0;var S,j,C,I,L,E,T,N,O,B,A,k={hasStorage:l.__hasStorage,jivoLoaderVersion:_,loadScript:function(e,t){var n=t||w,o=n.getElementsByTagName("script")[0],r=n.createElement("script");_e(r),o.parentNode.insertBefore(r,o).src=e},currentLoaderVersionCache:b,scriptSrc:null},W=navigator.userAgent.toLowerCase(),x=/iPhone|iPad|iPod|Android|Windows Phone/i.test(W),M=w.createElement("iframe"),H=w.createElement("div"),R=0,D=0,U=0,J=[],q=!1,P=se(),z=JSON.parse('["AF","CG","CF","GW","ER","IR","IQ","KP","LR","LB","LY","ML","CU","PS","SO","SD","SY","ZW","YE"]')||null,G=JSON.parse('["127-129-12k-12i-12c-12h","12e-12i-12e-124-12c-12h","131-12e-12l-12m-124-12b-12c","124-12g-12o-129-12m-124-12g-12c-12h","127-124-12s-12c-12s","12g-124-12k-12c-12p-12n-124-12h-124","3n-12j-124-12d-12l","12g-129-12o-129-128-12k-12i-12h"]')||null,V=!1,X=!0;je("Initialization"),l.__jivoBundleOnLoad=function(e){clearTimeout(L),E=e;var t=((new Date).getTime()-T)/1e3;t>6&&le("loadTime",t);le("bundleLoaded",!0),le("buildNumber",S.build_number),je("Bundle is loaded"),function(){I=w.body.lastChild,H.style&&(H.style.opacity="0",H.style.visibility="hidden",H.style.width=0,H.style.height=0,H.style.overflow="hidden");H.setAttribute("id","jivo-iframe-container"),H.appendChild(M),I?I.parentNode.insertBefore(H,I.nextSibling):w.body.appendChild(H);de()}()},l.__jivoBundleInit=function(e){e.loaderContext=k,function(){E=null;var e=function(e){if(e){var t=e.querySelectorAll&&e.querySelectorAll(".js-jivo-bundle");return t&&t.length>0?t:e.getElementsByClassName("js-jivo-bundle")}}(Ce());if(!e)throw y.error("Cannot get bundle script element"),new Error("Cannot get bundle script element");for(var t=0;t<e.length;t++)e[t].parentNode&&e[t].parentNode.removeChild(e[t]);e=null}()},l.jivo_init=function(){if(X)return;R=0;var e=w.createEvent("Event");e.initEvent("jBeforeunload",!0,!0),l.dispatchEvent(e),ie()},l.jivo_destroy=function(){R=0;var e=w.createEvent("Event");e.initEvent("jBeforeunload",!0,!0),l.dispatchEvent(e),delete l.jivo_magic_var,H&&H.parentNode&&H.parentNode.removeChild(H)},k.getHostURL=Se,k.store=P,k.setInStore=le;var F,Z=!1,Y=function(e){try{e.blockedURI&&-1!==e.blockedURI.indexOf("jivosite")&&(Z=!0,w.removeEventListener("securitypolicyviolation",Y))}catch(e){}}.bind(this);try{d(w,"securitypolicyviolation",Y)}catch(e){}fe(),!(!(F=O)||!/^\d+$/.test(F)&&10!=F.length)||(O=null,N=null,y.error("Widget id is not valid.")),te(f,5),function(){(P=se()).geoWidgetInfo.widgetId&&(O=P.geoWidgetInfo.widgetId,P=se(),N=P.configHost);le("isNewCode",q),k.store=P}();var $=null,K=!1;B&&(A=B.nonce||B.getAttribute("nonce"))&&(l.jivo_cspNonce=A),O&&N?(je("widgetId:",O,"configHost:",N),Q(ge())):O&&N||(te(v,5),y.error("Failed to evaluate the widgetId or configHost"))}}else y.log("Not supported browser");function Q(e,t){if(J.push(e),++U>4){je("Config load limit is exceeded"),k.hasStorage&&localStorage.removeItem("jv_loader_info_"+O);var n=new Error("Config load limit is exceeded"),o="Config urls: "+J.join(";\r\n");try{n.stack=o}catch(e){n=new Error("Config load limit is exceeded. "+o)}l.__jivoOnError(n)}else if(je("Loading config from",e),P.deletedInfo.widgetId&&P.deletedInfo.widgetId===O&&P.deletedInfo.resolveTime&&parseInt(P.deletedInfo.resolveTime)>=(new Date).getTime())y.error("This widget is permanently removed");else{var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){var e=Te(be(i));e?(je("Config is loaded",e),e.isDeleted?pe():t?(e.chat_mode=t.chat_mode,e.options=t.options,e.botmode=t.botmode,e.geoip=t.geoip,e.maintenance=!!t.maintenance,ne(e,null)):(e.disable_loader_void&&(V=!0),function(e,t){var n=new XMLHttpRequest;function o(){return!1}n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var o=Te(be(n));if(!o)throw new Error("Load widget status error");var r=n.getResponseHeader("X-BotMode"),i=n.getResponseHeader("X-GeoIP"),a=o.agents&&o.agents.length;je("Status is loaded",o,r,i,a),e.lastStatus=o,e.botmode="yes"===r?"yes":null,e.geoip=i||";;;",e.chat_mode=a?"online":"offline",e.options=o.premium?888:0,o.bots&&o.bots.length&&(e.bots=o.bots),e.maintenance=!!o.maintenance,t(o.config_updated_ts)}else if(0!==n.status){if(404==n.status)return void pe();throw e.botmode=null,e.geoip=";;;",e.chat_mode="offline",e.options=0,t(null),480==n.status&&je("Site is under maintenance, try again later."),new Error("Load widget status error: "+n.status)}};var i="/configs/development/status.json",a=o()?i:r()+"//"+e.chat_host+"/widget/status/"+e.site_id+"/"+e.widget_id+"?rnd="+Math.random();n.open("GET",a,!0),n.send(null)}(e,(function(t){ne(e,t)})))):he(!0)}else 0!==i.status&&he()},i.open("GET",e,!0),i.send(null)}}function ee(e){var t={event:e,widget_id:O,t:(new Date).getTime(),param1:"111.10.0",shard:i()};if(u()&&l.navigator&&l.navigator.sendBeacon)try{var n=a(),o=r();o+=n?"//"+n+"/w":"//telemetry.jivosite.com/w",l.navigator.sendBeacon&&navigator.sendBeacon(o,JSON.stringify(t))}catch(e){}}function te(e,t){Math.random()<=.01*t&&ee(e)}function ne(e,t){if(je("checkConfig",e.config_updated_ts,t),e.isDeleted)pe();else if(function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")}())je("ie11 blocked");else{if(t&&e.config_updated_ts&&e.config_updated_ts!=t)return je("update configUpdatedTs in store",t),le("configUpdatedTs",t),Q(ge(),e);if(e.regions&&!P.isChatStarted){var n=function(e){var t,n,o=e.regions,r=me(e.geoip);if(o){for(var i=Object.keys(o),a=0;a<i.length;a++)for(var d=o[i[a]],s=0;s<d.length;s++)if(1!=d.length||"default"!==d[s]){var l=me(d[s]);if(r.country===l.country){if(r.region===l.region)return ve(i[a],d[s],e.geoip);n||l.region||(n=ve(i[a],d[s],e.geoip))}}else t=i[a];if(n)return n;if(t)return ve(t,"default",e.geoip)}}(e);if(n.widgetId!==O)return je("Wrong geo-widget widgetId",O),le("geoWidgetInfo",n),O=n.widgetId,void Q(ge())}if(($=e.ab_segment)&&$.name&&$.host&&$.staticHost&&1!==e.site_id)if(je("AB-testing segmentation is enabled in config"),K=function(e,t){var n=P.abTesting,o=!1;o=n&&n.name===e.name?n.match:function(e,t){if(je('Check for criteria match of test "'+e.name+'"'),e.device){if(!function(e){if("desktop"===e)return Le()&&!Ee();if("mobile"===e)return Ee();if("all"===e)return Le()||Ee();return!1}(e.device))return je('Segment "'+e.name+'" is NOT matched. Criteria: device'),!1}if(e.locale){if(!(e.locale===t.locale))return je('Segment "'+e.name+'" is NOT matched. Criteria: locale'),!1}if(e.percentage){if(!(n=e.percentage,Math.random()<=.01*n))return je('Segment "'+e.name+'" is NOT matched. Criteria: percentage'),!1}var n;return je('Segment "'+e.name+'" is matched!'),!0}(e,t);return le("abTesting",{name:e.name,match:o}),o}($,e),K){je("Ab-testing segment match! Segment:",$.name);var o="//"+$.host;je('Setting new base_url. Was: "'+e.base_url+'". New: "'+o+'".'),e.base_url=o}else je("Ab-testing segment is NOT matched");else le("abTesting",null),je("AB-testing segmentation is NOT enabled in config"),le("configHost",N);!function(e){if(le("log",!!e.logs),l.jivo_config=S=e,function(){if(S.host_blacklist)for(var e=S.host_blacklist.split(","),t=0;t<e.length;t++)if(l.location.host.indexOf(e[t].replace(" ",""))>=0)return!0;return!1}())throw je("Host is blacklisted",l.location.host),new Error("Placing widget is forbidden on "+l.top.location.host);if(t=S.geoip.split(";")[0],z.indexOf(t)>=0)return y.log("[Jivo]: Service unavailable for country");if(!e.disable_stop_words&&function(){var e=!1,t=(d=G,d.map((function(e){return e.split("-").map((function(e){return String.fromCharCode(parseInt(e,32)-20)})).join("")}))),n=w.querySelector('meta[name="description"]'),o=w.querySelector('meta[name="keywords"]'),r=w.title,i=n&&n.content?n.content:"",a=o&&o.content?o.content:"";var d;(ye(r,t)||ye(i,t)||ye(a,t))&&(e=!0);return e}())return ee(m),void je("Init error, code 1015.");if(x&&S.disable_mobile)return void je("Mobile widget is disabled");var t;"complete"==w.readyState?(je("DOM Ready Complete."),oe()):P.bundleLoaded&&P.buildNumber==S.build_number?(je("DOM Ready is not complete. Bundle loaded and BuildNumber is correct."),"interactive"==w.readyState?(je("DOM Ready is interactive. Bundle loaded and BuildNumber is correct."),oe()):(je("DOM Ready is not interactive. Bundle loaded and BuildNumber is correct. Add listener on DOMContentLoaded."),d(l,"DOMContentLoaded",oe))):(je("DOM Ready is not complete. Bundle is not loaded. Add listener on window.onload"),le("bundleLoaded",!1),d(l,"load",oe))}(e)}}function oe(){je("Widget initialization"),function(){je("Iframe initialization"),M.src=V?"":"javascript:void(0)",M.role="presentation",M.allow="autoplay",M.title="Jivochat",M.setAttribute("name","jivo_container"),M.setAttribute("id","jivo_container"),M.setAttribute("frameborder","no"),A&&M.setAttribute("nonce",A);l.atob&&"complete"!==w.readyState?d(l,"load",ie):ie();d(l,"message",(function(e){if(e&&e.data&&"object"==typeof e.data){var t=e.data;"in_node_webkit"==t.name&&(l.jivo_cobrowse={source:e.source,origin:e.origin}),"iframe_url_changed"!=t.name&&"iframe_url_changed"!=t||de()}else S&&1===S.logs&&y&&y.log&&y.log("Error receive postMessage, window message event is empty.")}))}()}function re(){var e=Se();je("loadBundleAfterWait",e,k),c(re),ae(e)}function ie(){var e=Se();if(!k.store.isChatStarted&&S.enable_bundle_wait){je("addWaitActions");try{s(re),setTimeout((function(){je("5s load",k.store),l.jivo_api||re()}),5e3)}catch(t){ae(e)}}else je("startLoadBundle",e),ae(e)}function ae(e){je("Insertion of bundle code from",e);var t=Ce(),n=w.createElement("script"),o=function(e){return e+"/js/bundle_"+S.locale+".js?rand="+S.build_number}(e);T=(new Date).getTime(),_e(n),n.className="js-jivo-bundle",n.src=r()+o,k.bundleSrc=o,n.onerror=function(){je("loadBundle errorBundle",e),w.getElementById("jcont")&&function(e,t,n){if(clearTimeout(L),++D>=3){if(je("Bundle load retries count is exceeded"),Z)return void y.error("Widget not loaded due CSP security policy.");var o=new Error("Bundle NOT loaded. Type: "+e+(t?". Host: "+t:"")+(n?". Status code: "+n:""));return void l.__jivoOnError(o)}ie()}("errorBundle",e)},t.appendChild(n),X=!1}function de(){if(!(R++>3)){if(!E)return R--,ie();try{C=M.contentWindow.document}catch(e){j=w.domain,M.src=V?"":"javascript:var d=document.open();d.domain='"+j+"';void(0);",C=M.contentWindow.document}var e='<meta name="google" content="notranslate"><meta http-equiv="X-UA-Compatible" content="IE=edge" />',t="";try{t="window.onerror = "+g.toString()+";"}catch(e){}var n=(S&&!S.disable_error_reporting?t:"")+E,o=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;if(!C.head||!C.body||o&&V){var r='<body class="notranslate"></body>',i='<script type="text/javascript"'+(A?'nonce="'+A+'"':"")+">"+n+"<\/script>",a="<head>"+e+i+"</head>";C.write("<!doctype HTML>"+a+r),i=null,r=null,a=null}else{C.body.class="notranslate",C.head.innerHTML=e;var d=w.createElement("script");d.type="text/javascript",A&&d.setAttribute("nonce",A),d.innerHTML=n,C.head.appendChild(d)}C.close(),n=null}}function se(){var e={isChatStarted:null,geoWidgetInfo:{widgetId:null,clientLocation:null,region:null},configHost:null,deletedInfo:{widgetId:null,resolveTime:null},abTesting:null,buildNumber:null,bundleLoaded:null,isNewCode:null,loadTime:null,log:null,configUpdatedTs:null};if(k.hasStorage&&(localStorage.removeItem("jv_loader_info"),O)){var t=Te(localStorage.getItem("jv_loader_info_"+O));t&&ce(t,e)}return e}function le(e,t){if(P[e]=t,k.hasStorage&&O){var n={};ce(P,n),localStorage.setItem("jv_loader_info_"+O,(o=n,l.MooTools&&void 0===JSON.stringify?JSON.encode(o):JSON.stringify(o)))}var o}function ce(e,t){Object.keys(e).forEach((function(n){(function(e){if(ue(e))return!0;if("object"==typeof e){for(var t=Object.keys(e),n=0;n<t.length;n++)if(!ue(e[t[n]]))return!1;return!0}})(e[n])||(t[n]=e[n])}))}function ue(e){return null===e&&"object"==typeof e}function ge(){var e="";return je("getConfigUrl",P.configUpdatedTs),P.configUpdatedTs&&(e="?v="+P.configUpdatedTs),r()+N+"/script/widget/config/"+O+e}function fe(){var r=function(e){if(e)return e.src;try{throw new Error("Get script URL")}catch(e){var r=e.stack;if(r){var i=t(r),a=n(r),d=o(r);return i?i[0]:a?a[0]:d?d[0]:null}}}(B=e());if(k.scriptSrc=r,r&&r.match(/&lt;/))je("Invalid codeHost",r);else{var i,a=t(r),d=n(r),s=o(r);N||(a?(N="//"+a[1],q=!0):d?N="//"+d[1]:s&&(N="//"+s[1])),O||(d&&d[2]?(O=d[2],q=!1):s&&s[2]?(O=s[2],q=!1):(q=!0,B&&(O=B.getAttribute("jv-id")||B.getAttribute("data-jv-id")),O||(i=r&&r.match(/https?:\/\/\S+\/widget\/([A-Za-z0-9]+)/),O=i?i[1]:null))),h&&(N="//"+new URL(r).host),je("getWidgetIdAndConfigHost",O,N)}}function ve(e,t,n){return{widgetId:e,region:t,clientLocation:n}}function me(e){if("string"==typeof e&&""!==e){var t=e.split(";");return{country:t[0],region:t[1],city:t[2]}}}function pe(){je("Widget was removed",O),le("configHost",null),P.geoWidgetInfo.widgetId||P.isChatStarted?(le("geoWidgetInfo",ve(null,null,null)),le("isChatStarted",null),we()):(le("deletedInfo",{widgetId:O,resolveTime:((new Date).getTime()+864e5).toString()}),y.error("Widget "+O+" is permanently removed. Host: "+N),ee(p))}function he(e){je("Config loading error:",e?"parse":"request"),le("geoWidgetInfo",ve(null,null,null)),le("isChatStarted",null),le("configHost",null),e||we()}function we(){O=null,N=null,fe(),Q(ge())}function _e(e){if(e)return e.type="text/javascript",e.async=!0,e.charset="UTF-8",A&&e.setAttribute("nonce",A),e}function be(e){return e.responseType&&"text"!==e.responseType?"document"===e.responseType?e.responseXML:e.response:e.responseText}function ye(e,t){for(var n=!1,o=0;o<t.length;o++){var r=t[o].toLowerCase(),i=new RegExp("([, .]|^)"+r+"([, .]|$)","gi");if(e.toLowerCase().search(i)>-1){n=!0;break}}return n}function Se(){return S.base_url}function je(){if(P.log){var e=Array.prototype.slice.call(arguments||[]);e.unshift("Loader:"),y.log.apply(y,e)}}function Ce(){var e=w.head||w.getElementsByTagName("head")[0];if(!e)throw new Error("Cannot get document head element");return e}function Ie(e){return-1!==W.indexOf(e)}function Le(){return Ie("chrome")&&!Ie("opr/")&&"Google Inc."===l.navigator.vendor}function Ee(){return!Ie("windows")&&Ie("android")}function Te(e){try{return l.MooTools&&void 0===JSON.parse?JSON.decode(e):JSON.parse(e)}catch(e){return e.message="Config parse error: "+O+"\n\n"+e.message,l.__jivoOnError(e),null}}}var _=w,b=null;if(window.__hasStorage){try{b=JSON.parse(localStorage.getItem("__jivoLoader"))}catch(e){jivoLog("Loader cache parse error.")}b&&b.version>l&&(_=new Function("window","document","broswerCacheLoaderVersion","currentLoaderVersionCache","("+b.code+")(window, document, broswerCacheLoaderVersion, currentLoaderVersionCache)"))}try{_(window,document,l,b?b.version:l)}catch(e){e.message=e.message?"Loader error. "+e.message:"Loader error",window.__jivoOnError(e),delete window.jivo_magic_var,(_=w)(window,document,l,l)}}()}();