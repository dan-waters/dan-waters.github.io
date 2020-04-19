(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ca=ba(this); 
function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}} 
da("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");void 0===c&&(c=this.length);c=Math.max(0,Math.min(c|0,this.length));for(var d=b.length;0<d&&0<c;)if(this[--c]!=b[--d])return!1;return 0>=d}}); 
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});var k=this||self,ea=/^[\w+/_-]+[=]{0,2}$/,n=null;function p(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};function fa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var ia=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function q(a,b){this.b=a===ja&&b||"";this.a=ka}var ka={},ja={};var r;a:{var la=k.navigator;if(la){var ma=la.userAgent;if(ma){r=ma;break a}}r=""};function na(a,b){a.src=b instanceof q&&b.constructor===q&&b.a===ka?b.b:"type_error:TrustedResourceUrl";if(null===n)b:{b=k.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&ea.test(b)){n=b;break b}n=""}b=n;b&&a.setAttribute("nonce",b)};function t(a){t[" "](a);return a}t[" "]=function(){};function x(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};var oa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function pa(a){var b=a.match(oa);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}function y(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var z=/#|$/; 
function A(a,b){var c=a.search(z),d=y(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}var qa=/[?&]($|#)/; 
function B(a,b,c){for(var d=a.search(z),e=0,f,g=[];0<=(f=y(a,e,b,d));)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.substr(e));a=g.join("").replace(qa,"$1");c=null!=c?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),0>c&&(c=a.length),d=a.indexOf("?"),0>d||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.substr(0,d),e,a.substr(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};function ra(){if(!k.crypto)return Math.random();try{var a=new Uint32Array(1);k.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}}function sa(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var ua=fa(function(){return ia(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],ta)||1E-4>Math.random()}),va=fa(function(){return-1!=r.indexOf("MSIE")});function ta(a){return-1!=r.indexOf(a)} 
function C(a){return/^true$/.test(a)};var wa=p("0.20"),xa=p("0.002"),ya=p("0.00"),za=p("0.00"),Aa=p("1"),Ba=C("true"),Ca=C("true"),Da=C("true"),Ea=C("true");var Fa={},D=null; 
function Ga(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=4;void 0===a&&(a=0);if(!D)for(D={},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Fa[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===D[h]&&(D[h]=g)}}a=Fa[a];c=[];for(d=0;d<b.length;d+=3){var l=b[d],m=(e=d+1<b.length)?b[d+1]:0;h=(f=d+2<b.length)?b[d+2]:0;g=l>>2;l=(l&3)<<4|m>>4; 
m=(m&15)<<2|h>>6;h&=63;f||(h=64,e||(m=64));c.push(a[g],a[l],a[m]||"",a[h]||"")}return c.join("")};var E=null;function Ha(){if(null===E){E="";try{var a="";try{a=k.top.location.hash}catch(c){a=k.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);E=b?b[1]:""}}catch(c){}}return E}function Ia(a,b){var c;c=(c=Ha())?(c=c.match(new RegExp("\\b("+a.join("|")+")\\b")))?c[0]:null:null;if(c)a=c;else a:{if(!va()&&!ua()&&(c=Math.random(),c<b)){c=ra();a=a[Math.floor(c*a.length)];break a}a=null}return a}function F(a,b,c){""!=b&&(c?a.a.hasOwnProperty(c)&&(a.a[c]=b):a.b[b]=!0)} 
function G(a,b,c){var d=H;(c?d.a.hasOwnProperty(c)&&""==d.a[c]:1)&&(a=Ia(a,b))&&F(d,a,c)}function I(a){var b=H;return b.a.hasOwnProperty(a)?b.a[a]:""}function Ja(){var a=H,b=[];sa(a.b,function(c,d){b.push(d)});sa(a.a,function(c){""!=c&&b.push(c)});return b};var Ka={s:2,C:13,B:14,v:16,u:17},H=null;function La(){if(H){var a=Ia(["910057690","910057691"],Aa);a?F(H,a,17):F(H,"910057692",17)}}function J(){return!!H&&"592230571"==I(16)};var K=window,Ma=document;function Na(a,b){if(Array.prototype.indexOf)return a=a.indexOf(b),"number"==typeof a?a:-1;for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1}function Oa(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};var L=[];function M(){var a={};var b=K.google_tag_data;K.google_tag_data=void 0===b?a:b;a=K.google_tag_data;a.ics||(a.ics={entries:{},set:Pa,update:Qa,addListener:Ra,notifyListeners:Sa,active:!1});return a.ics}function Pa(a,b,c,d,e){var f=M();f.active=!0;if(void 0!=b){f=f.entries;var g=f[a]||{},h=g.region;c=c&&"string"==typeof c?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();c!==e&&(c===d?h===e:c||h)||(f[a]={region:c,initial:"granted"===b,update:g.update})}} 
function Qa(a,b){var c=M();c.active=!0;if(void 0!=b){var d=N(a);c=c.entries;c[a]=c[a]||{};c[a].update="granted"===b;if(N(a)!==d)for(b=0;b<L.length;++b)d=L[b],"[object Array]"==Object.prototype.toString.call(Object(d.g))&&-1!==d.g.indexOf(a)&&(d.h=!0)}}function Ra(a,b){L.push({g:a,i:b})}function Sa(){for(var a=0;a<L.length;++a){var b=L[a];if(b.h){b.h=!1;try{b.i.call()}catch(c){}}}}function N(a){a=M().entries[a]||{};return void 0!==a.update?a.update:void 0!==a.initial?a.initial:void 0} 
function Ta(a){if(!1===N("ad_storage")){var b=!1;M().addListener(["ad_storage"],function(){!b&&N("ad_storage")&&(a(),b=!0)})}};var O={};function Ua(){O.TAGGING=O.TAGGING||[];O.TAGGING[1]=!0};var P=/:[0-9]+$/;function Va(a,b){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(decodeURIComponent(d[0]).replace(/\+/g," ")===b)return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g," ")}} 
function Wa(a,b){var c="query";if("protocol"===c||"port"===c)a.protocol=Xa(a.protocol)||Xa(K.location.protocol);"port"===c?a.port=String(Number(a.hostname?a.port:K.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===c&&(a.hostname=(a.hostname||K.location.hostname).replace(P,"").toLowerCase());var d=Xa(a.protocol);c&&(c=String(c).toLowerCase());switch(c){case "url_no_fragment":b="";a&&a.href&&(b=a.href.indexOf("#"),b=0>b?a.href:a.href.substr(0,b));a=b;break;case "protocol":a= 
d;break;case "host":a=a.hostname.replace(P,"").toLowerCase();break;case "port":a=String(Number(a.port)||("http"==d?80:"https"==d?443:""));break;case "path":a.pathname||a.hostname||Ua();a="/"==a.pathname.charAt(0)?a.pathname:"/"+a.pathname;a=a.split("/");0<=Na([],a[a.length-1])&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?","");b&&(a=Va(a,b));break;case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#", 
"");break;default:a=a&&a.href}return a}function Xa(a){return a?a.replace(":","").toLowerCase():""};var Ya={};function Za(a){return void 0==Ya[a]?!1:Ya[a]};function $a(a,b,c,d){if(ab(d)){d=[];b=String(b||document.cookie).split(";");for(var e=0;e<b.length;e++){var f=b[e].split("="),g=f[0].replace(/^\s*|\s*$/g,"");g&&g==a&&((f=f.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&c&&(f=decodeURIComponent(f)),d.push(f))}a=d}else a=[];return a}function bb(a,b,c,d){var e=document.cookie;document.cookie=a;a=document.cookie;return e!=a||void 0!=c&&0<=$a(b,a,!1,d).indexOf(c)} 
function cb(a,b,c){function d(u,v,ha){if(null==ha)return delete g[v],u;g[v]=ha;return u+"; "+v+"="+ha}function e(u,v){if(null==v)return delete g[v],u;g[v]=!0;return u+"; "+v}if(ab(c.c)){if(void 0==b)var f=a+"=deleted; expires="+(new Date(0)).toUTCString();else c.encode&&(b=encodeURIComponent(b)),b=db(b),f=a+"="+b;var g={};f=d(f,"path",c.path);if(c.expires instanceof Date)var h=c.expires.toUTCString();else null!=c.expires&&(h=c.expires);f=d(f,"expires",h);f=d(f,"max-age",c.F);f=d(f,"samesite",c.G); 
c.H&&(f=e(f,"secure"));f=e(f,c.flags);h=c.domain;if("auto"===h){h=eb();for(var l=0;l<h.length;++l){var m="none"!==h[l]?h[l]:void 0,w=d(f,"domain",m);if(!fb(m,c.path)&&bb(w,a,b,c.c))break}}else h&&"none"!==h&&(f=d(f,"domain",h)),fb(h,c.path)||bb(f,a,b,c.c)}}function db(a){a&&1200<a.length&&(a=a.substring(0,1200));return a}var gb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,hb=/(^|\.)doubleclick\.net$/i;function fb(a,b){return hb.test(document.location.hostname)||"/"===b&&gb.test(a)} 
function eb(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));b=document.location.hostname;hb.test(b)||gb.test(b)||a.push("none");return a}function ab(a){if(!Za("gtag_cs_api")||!a||!M().active)return!0;a=N(a);return null==a?!0:!!a};function ib(a,b){var c,d=a.D;null==d&&(d=7776E3);0!==d&&(c=new Date((b||(new Date).getTime())+1E3*d));return{path:a.path,domain:a.domain,flags:a.flags,encode:!0,expires:c}};var jb=/^\w+$/,kb=/^[\w-]+$/,lb=/^~?[\w-]+$/,mb={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function nb(){if(!Za("gtag_cs_api")||!M().active)return!0;var a=N("ad_storage");return null==a?!0:!!a}function ob(a){nb()?a():Ta(a)}function pb(a,b){var c=[];if(!a.cookie)return c;a=$a(b,a.cookie,void 0,"ad_storage");if(!a||0==a.length)return c;for(b=0;b<a.length;b++){var d=qb(a[b]);d&&-1===Na(c,d)&&c.push(d)}return rb(c)}function sb(a){return a&&"string"==typeof a&&a.match(jb)?a:"_gcl"} 
function tb(){var a=K.location.href,b=Ma.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Ua(),c="/"+c);a=b.hostname.replace(P,"");var d={href:b.href,protocol:b.protocol,host:b.host,hostname:a,pathname:c,search:b.search,hash:b.hash,port:b.port};b=Wa(d,"gclid");c=Wa(d,"gclsrc");a=Wa(d,"dclid");b&&c||(d=d.hash.replace("#",""),b=b||Va(d,"gclid"),c=c||Va(d,"gclsrc"));return ub(b,c,a)} 
function ub(a,b,c){function d(f,g){e[g]||(e[g]=[]);e[g].push(f)}var e={};e.gclid=a;e.gclsrc=b;e.dclid=c;if(void 0!==a&&a.match(kb))switch(b){case void 0:d(a,"aw");break;case "aw.ds":d(a,"aw");d(a,"dc");break;case "ds":d(a,"dc");break;case "3p.ds":Za("gtm_3pds")&&d(a,"dc");break;case "gf":d(a,"gf");break;case "ha":d(a,"ha");break;case "gp":d(a,"gp")}c&&d(c,"dc");return e}function vb(){var a={},b=tb();ob(function(){return wb(b,a)})} 
function wb(a,b,c){function d(m){return["GCL",l,m].join(".")}function e(m,w){m=mb[m];m=void 0!==m?f+m:void 0;m&&(null==g.path&&(g.path="/"),g.domain||(g.domain="auto"),cb(m,w,g),h=!0)}b=b||{};var f=sb(b.prefix);c=c||(new Date).getTime();var g=ib(b,c);g.c="ad_storage";var h=!1,l=Math.round(c/1E3);a.aw&&(!0===b.I?e("aw",d("~"+a.aw[0])):e("aw",d(a.aw[0])));a.dc&&e("dc",d(a.dc[0]));a.gf&&e("gf",d(a.gf[0]));a.ha&&e("ha",d(a.ha[0]));a.gp&&e("gp",d(a.gp[0]));return h} 
function qb(a){a=a.split(".");if(3==a.length&&"GCL"==a[0]&&a[1])return a[2]}function rb(a){return a.filter(function(b){return lb.test(b)})}function xb(){for(var a=["aw"],b={},c=sb(b.prefix),d={},e=0;e<a.length;e++)mb[a[e]]&&(d[a[e]]=mb[a[e]]);ob(function(){Oa(d,function(f,g){g=$a(c+g,Ma.cookie,void 0,"ad_storage");if(g.length){g=g[0];var h=g.split(".");h=3!==h.length||"GCL"!==h[0]?0:1E3*(Number(h[1])||0);var l={};l[f]=[qb(g)];wb(l,b,h)}})})};var yb=/^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,zb=/^~?[\w-]+(?:\.~?[\w-]+)*$/,Ab=/^\d+\.fls\.doubleclick\.net$/,Bb=/;gac=([^;?]+)/,Cb=/;gclaw=([^;?]+)/;function Db(a,b){if(Ab.test(a.location.host)){if((a=a.location.href.match(Cb))&&2==a.length&&a[1].match(zb))return a[1]}else if(a=pb(a,(b||"_gcl")+"_aw"),0<a.length)return a.join(".");return""}function Eb(a){0!==pb(document,"_gcl_aw").length||a&&0!==pb(document,a+"_aw").length||(vb(),xb())};function Fb(a){var b=k.performance;return b&&b.timing&&b.timing[a]||0};var Gb={w:0,l:1,A:2,o:3,m:4};function Q(){this.a={}}function R(a,b,c){"number"===typeof c&&0<c&&(a.a[b]=Math.round(c))}function Hb(a){var b=Q.a();var c=void 0===c?k:c;c=c.performance;R(b,a,c&&c.now?c.now():null)}function Ib(){function a(){return R(b,0,Fb("loadEventStart")-Fb("navigationStart"))}var b=Q.a();0!=Fb("loadEventStart")?a():window.addEventListener("load",a)}function Jb(a,b){b.google_tag_manager&&b.google_tag_manager._li&&(b=b.google_tag_manager._li,R(a,4,b.cbt),R(a,3,b.cst))} 
function Kb(){var a=Q.a();return Object.values(Gb).map(function(b){return[b,a.a[b]||0]})}Q.b=void 0;Q.a=function(){return Q.b?Q.b:Q.b=new Q};function Lb(a,b,c){a=Mb(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0}function Mb(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};function Nb(a,b,c,d){var e=A(c,"fmt");if(d){var f=A(c,"random"),g=A(c,"label")||"";if(!f)return!1;f=Ga(decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," ")));if(!Lb(a,f,d))return!1}e&&4!=e&&(c=B(c,"rfmt",e));c=B(c,"fmt",4);e=x("SCRIPT");na(e,new q(ja,c));e.onload=function(){a.google_noFurtherRedirects&&d&&d.call&&(a.google_noFurtherRedirects=null,d())};b.getElementsByTagName("script")[0].parentElement.appendChild(e);return!0};var Ob=C("true");function Pb(){if("function"==typeof K.__uspapi){var a="";try{K.__uspapi("getUSPData",1,function(b,c){c&&b&&(b=b.uspString)&&/^[\da-zA-Z-]{1,20}$/.test(b)&&(a=b)})}catch(b){}return a}};var Qb={id:!0,origin:!0,destination:!0,start_date:!0,end_date:!0,location_id:!0},Rb="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_evaluemrc google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_disable_merchant_reported_conversions google_additional_conversion_params google_transport_url".split(" "); 
function Sb(a,b){var c=a;return function(){--c;0>=c&&b()}}function S(a){return null!=a?encodeURIComponent(String(a)):""}function Tb(a){if(null!=a){a=String(a).substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""}function T(a,b){b=S(b);return""!=b&&(a=S(a),""!=a)?"&".concat(a,"=",b):""}function Ub(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")} 
function Vb(a){if(!a||"object"!=typeof a||"function"==typeof a.join)return"";var b=[],c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(d&&"function"==typeof d.join){for(var e=[],f=0;f<d.length;++f){var g=Ub(d[f]);null!=g&&e.push(g)}d=0==e.length?null:e.join(",")}else d=Ub(d);(e=Ub(c))&&null!=d&&b.push(e+"="+d)}return b.join(";")} 
function Wb(a,b){b=void 0===b?null:b;a=Vb(a.google_custom_params);b=Vb(b);b=a.concat(0<a.length&&0<b.length?";":"",b);return""==b?"":"&".concat("data=",encodeURIComponent(b))}function Xb(a){return null==a||0!=a&&1!=a?"":T("tfcd",a)}function Yb(a){return null==a||0!=a&&1!=a?"":T("tfua",a)}function Zb(a){return!1===a?T("npa",1):!0===a?T("npa",0):""}function $b(a){return Da?!0===a?T("rdp",1):!1===a?T("rdp",0):"":""} 
function ac(a){if(null!=a){a=a.toString();if(2==a.length)return T("hl",a);if(5==a.length)return T("hl",a.substring(0,2))+T("gl",a.substring(3,5))}return""}function U(a){return"number"!=typeof a&&"string"!=typeof a?"":S(a.toString())} 
function bc(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=[];e&&(f.push(U(e.value)),f.push(U(e.quantity)),f.push(U(e.item_id)),f.push(U(e.start_date)),f.push(U(e.end_date)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""} 
function cc(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain&&(!b.google_gcl_cookie_prefix||!/^_ycl/.test(b.google_gcl_cookie_prefix)))return"";var c="";if(b.google_gcl_cookie_prefix&&/^[a-zA-Z0-9_]+$/.test(b.google_gcl_cookie_prefix)&&"_gcl"!=b.google_gcl_cookie_prefix)return c=Db(a,b.google_gcl_cookie_prefix),T("gclaw",c);(b=Db(a))&&(c=T("gclaw",b));if(Ab.test(a.location.host))var d=(d=a.location.href.match(Bb))&&2==d.length&&d[1].match(yb)?decodeURIComponent(d[1]): 
"";else{if(nb()){b=[];a=a.cookie.split(";");for(var e=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,f=0;f<a.length;f++){var g=a[f].match(e);g&&b.push({f:g[1],value:g[2]})}a={};if(b&&b.length)for(e=0;e<b.length;e++)f=b[e].value.split("."),"1"==f[0]&&3==f.length&&f[1]&&(a[b[e].f]||(a[b[e].f]=[]),a[b[e].f].push({timestamp:f[1],j:f[2]}));b=a}else b={};a=[];for(d in b){e=[];f=b[d];for(g=0;g<f.length;g++)e.push(f[g].j);a.push(d+":"+e.join(","))}d=0<a.length?a.join(";"):""}return c+(d?T("gac",d):"")} 
function dc(a,b,c){var d=[];if(a){var e=a.screen;e&&(d.push(T("u_h",e.height)),d.push(T("u_w",e.width)),d.push(T("u_ah",e.availHeight)),d.push(T("u_aw",e.availWidth)),d.push(T("u_cd",e.colorDepth)));a.history&&d.push(T("u_his",a.history.length))}c&&"function"==typeof c.getTimezoneOffset&&d.push(T("u_tz",-c.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&d.push(T("u_java",b.javaEnabled())),b.plugins&&d.push(T("u_nplug",b.plugins.length)),b.mimeTypes&&d.push(T("u_nmime",b.mimeTypes.length))); 
return d.join("")}function ec(a){function b(d){try{return decodeURIComponent(d),!0}catch(e){return!1}}a=a?a.title:"";if(void 0==a||""==a)return"";a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)} 
function fc(a,b,c,d){var e="";if(b){if(a.top==a)var f=0;else{var g=a.location.ancestorOrigins;if(g)f=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{var h;if(h=!!g&&null!=g.location.href)c:{try{t(g.foo);h=!0;break c}catch(l){}h=!1}f=h}catch(l){f=!1}f=f?1:2}}a=c?c:1==f?a.top.location.href:a.location.href;e+=T("frm",f);e+=T("url",Tb(a));e+=T("ref",Tb(d||b.referrer))}return e} 
function V(a,b,c,d,e,f){f=void 0===f?null:f;var g="https://",h="landing"===d.google_conversion_type?"/extclk":"/";switch(e){default:return"";case 2:case 3:var l="googleads.g.doubleclick.net/";var m="pagead/viewthroughconversion/";break;case 1:l="www.google.com/";m="pagead/1p-conversion/";break;case 0:l=d.google_conversion_domain||"www.googleadservices.com/",m="pagead/conversion/"}Ba&&d.google_transport_url&&(l=d.google_transport_url);"/"!==l[l.length-1]&&(l+="/");if(0===l.indexOf("http://")||0=== 
l.indexOf("https://"))g="";g=[g,l,m,S(d.google_conversion_id),h,"?random=",S(d.google_conversion_time)].join("");f=void 0===f?null:f;a=[T("cv",d.google_conversion_js_version),T("fst",d.google_conversion_first_time),T("num",d.google_conversion_snippets),T("fmt",d.google_conversion_format),d.google_remarketing_only?T("userId",d.google_user_id):"",Xb(d.google_tag_for_child_directed_treatment),Yb(d.google_tag_for_under_age_of_consent),Zb(d.google_allow_ad_personalization_signals),$b(d.google_restricted_data_processing), 
T("value",d.google_conversion_value),T("evaluemrc",d.google_conversion_evaluemrc),T("currency_code",d.google_conversion_currency),T("label",d.google_conversion_label),T("oid",d.google_conversion_order_id),T("bg",d.google_conversion_color),ac(d.google_conversion_language),T("guid","ON"),!d.google_conversion_domain&&"GooglemKTybQhCsO"in k&&"function"==typeof k.GooglemKTybQhCsO?T("resp","GooglemKTybQhCsO"):"",T("disvt",d.google_disable_viewthrough),T("eid",Ja().join()),dc(a,b,d.google_conversion_date), 
T("gtm",d.google_gtm),b&&b.sendBeacon?T("sendb","1"):"",gc(),T("ig",/googleadservices\.com/.test("www.google.com")?1:0),Wb(d,f),cc(c,d),fc(a,c,d.google_conversion_page_url,d.google_conversion_referrer_url),ec(c),d.google_remarketing_only||!d.google_additional_conversion_params?"":hc(d.google_additional_conversion_params),"&hn="+S("www.google.com")].join("");b=Ha();a+=0<b.length?"&debug_experiment_id="+b:"";d.google_remarketing_only||d.google_conversion_domain?d=a:(ic(d)&&!d.google_basket_transaction_type&& 
(d.google_basket_transaction_type="mrc"),b=[T("mid",d.google_conversion_merchant_id),T("fcntr",d.google_basket_feed_country),T("flng",d.google_basket_feed_language),T("dscnt",d.google_basket_discount),T("bttype",d.google_basket_transaction_type)].join(""),d=[a,b,bc(d)].join(""),d=4E3<d.length?[a,T("item","elngth")].join(""):d);g+=d;1===e?g+=[T("gcp",1),T("sscte",1),T("ct_cookie_present",1)].join(""):3==e&&(g+=T("gcp",1),g+=T("ct_cookie_present",1));Ca&&(e=Pb(),void 0!==e&&(g+=T("us_privacy",e||"error"))); 
return g}function jc(a){if(!Ob){var b=x("IFRAME");b.style.display="none";b.src="https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";a.body.appendChild(b)}}function kc(){return new Image}function W(a,b,c,d){var e=c.onload_callback,f;e&&e.call?f=e:f=function(){};d+=T("async","1");var g=(e=c.opt_image_generator)&&e.call,h;if(!(h=g||!1)){if(c.google_conversion_domain)var l=!1;else try{l=Nb(a,b,d,f)}catch(m){l=!1}h=!l}h&&(a=kc,g&&(a=e),a=a(),a.src=d,a.onload=f)} 
function lc(a){for(var b=x("IFRAME"),c=[],d=[],e=0;e<a.google_conversion_items.length;e++){var f=a.google_conversion_items[e];f&&f.quantity&&(f.sku||f.item_id)&&(c.push(f.sku||f.item_id),d.push(f.quantity))}e="";null!=a.google_basket_feed_language&&null!=a.google_basket_feed_country?e="&mrc_language="+a.google_basket_feed_language.toString()+"&mrc_country="+a.google_basket_feed_country.toString():null!=a.google_conversion_language&&(f=a.google_conversion_language.toString(),5==f.length&&(e="&mrc_language="+ 
f.substring(0,2)+"&mrc_country="+f.substring(3,5)));b.src="https://www.google.com/ads/mrc?sku="+c.join(",")+"&qty="+d.join(",")+"&oid="+a.google_conversion_order_id+"&mcid="+a.google_conversion_merchant_id+e;b.style.width="1px";b.style.height="1px";b.style.display="none";return b}function mc(a,b,c){function d(){c.documentElement.appendChild(lc(b))}"complete"===c.readyState?d():a.addEventListener?a.addEventListener("load",d):a.attachEvent("onload",d)} 
function nc(a,b){H&&"376635471"==I(2)&&("complete"===b.readyState?jc(b):a.addEventListener?a.addEventListener("load",function(){jc(b)}):a.attachEvent("onload",function(){jc(b)}))}function ic(a){return!a.google_disable_merchant_reported_conversions&&!!a.google_conversion_merchant_id&&!!a.google_conversion_order_id&&!!a.google_conversion_items} 
function oc(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version= 
"9";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=3);!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0);return!0}function pc(a,b){function c(f){d[f]=b&&null!=b[f]?b[f]:a[f]}for(var d={},e=0;e<Rb.length;e++)c(Rb[e]);c("onload_callback");return d} 
function qc(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=void 0;d.hasOwnProperty("google_business_vertical")?(e=d.google_business_vertical,b[e]=b[e]||{google_business_vertical:e}):(e="",Object.prototype.hasOwnProperty.call(b,e)||(b[e]={}));e=b[e];for(var f=Object.keys(d).filter(function(l){return Qb.hasOwnProperty(l)}),g=0;g<f.length;g++){var h=f[g];h in e||(e[h]=[]);e[h].push(d[h])}}return Object.values(b)} 
function gc(){var a="";J()&&(a=Kb().map(function(b){return b.join("-")}).join("_"));return T("li",a)}function hc(a){var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=T(c,a[c]));return b};function rc(a,b,c,d){J()&&(Hb(2),d.google_gtm&&Jb(Q.a(),a));var e=!1;if(!d||3!=d.google_conversion_format)return!1;try{if(oc(d)){d.google_remarketing_only&&d.google_enable_display_cookie_match&&!Ob&&H&&G(["376635470","376635471"],wa,2);d.google_remarketing_only&&!d.google_conversion_domain&&H&&G(["759238990","759238991"],za,13);!d.google_remarketing_only||d.google_conversion_domain||H&&("759248991"==I(14)||"759248990"==I(14))||H&&G(["759248990","759248991"],ya,14);!1===d.google_conversion_linker|| 
d.google_gtm||Eb(d.google_gcl_cookie_prefix);if(1==d.google_remarketing_only&&null!=d.google_gtag_event_data&&null!=d.google_gtag_event_data.items&&d.google_gtag_event_data.items.constructor===Array&&0<d.google_gtag_event_data.items.length)sc(a,b,c,d);else{var f=!1;!d.google_remarketing_only&&"www.google.com".endsWith("google.com")&&(Ea?f=!0:(La(),f=!!H&&"910057691"==I(17)));f?(d.onload_callback&&"function"==typeof d.onload_callback.call?d.onload_callback=Sb(2,d.onload_callback):d.onload_callback= 
function(){},W(a,c,d,V(a,b,c,d,1)),W(a,c,d,V(a,b,c,d,3))):W(a,c,d,V(a,b,c,d,d.google_remarketing_only?2:0))}d.google_remarketing_only&&d.google_enable_display_cookie_match&&nc(a,c);e=!0}ic(d)&&(mc(a,d,c),e=!0)}catch(g){}return e} 
function sc(a,b,c,d){var e=qc(d.google_gtag_event_data.items);d.onload_callback&&"function"==typeof d.onload_callback.call?d.onload_callback=Sb(e.length,d.onload_callback):d.onload_callback=function(){};for(var f=0;f<e.length;f++)W(a,c,d,V(a,b,c,d,2,e[f])),d.google_conversion_time=d.google_conversion_time+1};H=new function(){var a=[],b=0,c;for(c in Ka)a[b++]=Ka[c];this.b={};this.a={};a=a||[];b=0;for(c=a.length;b<c;++b)this.a[a[b]]=""};G(["592230570","592230571"],xa,16);J()&&(Hb(1),Ib()); 
function tc(a,b,c){function d(m,w){var u=new Image;u.onload=m;u.src=w}function e(){--f;if(0>=f){var m=Mb(a,!1),w=m[b];w&&(delete m[b],(m=w[0])&&m.call&&m())}}var f=c.length+1;if(2==c.length){var g=c[0],h=c[1];0<=y(g,0,"rmt_tld",g.search(z))&&0<=y(g,0,"ipr",g.search(z))&&!h.match(oa)[6]&&(h+=pa(g),c[1]=B(h,"rmt_tld","1"))}for(g=0;g<c.length;g++){h=c[g];var l=A(h,"fmt");switch(parseInt(l,10)){case 1:case 2:(l=a.document.getElementById("goog_conv_iframe"))&&!l.src?(l.onload=e,l.src=h):d(e,h);break;case 4:Nb(a, 
a.document,h,e);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(h,"")){e();break}else h=B(h,"sendb",2);h=B(h,"fmt",3);default:d(e,h)}}e()}var X=["GooglemKTybQhCsO"],Y=k;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===tc?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=tc; 
window.google_trackConversion=function(a){var b=window,c=navigator,d=document;a=pc(b,a);a.google_conversion_format=3;Ya.gtag_cs_api=!!a.google_gtm;return rc(b,c,d,a)};}).call(this);
