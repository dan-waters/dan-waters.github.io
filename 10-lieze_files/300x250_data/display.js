(function(e,t){"use strict";function s(){var e=location.href.split("#")[1]||"";/^\{%22/.test(e)&&(e=decodeURIComponent(e));try{return $.parseJSON(e)}catch(t){return{}}}e.ados_results=e.ados_results||null;var n=e.ADS_GLOBALS.network,r=e.ADS_GLOBALS.site,i={main:5,sponsorship:8},o=s();if(e.SKIP_AD_PROBABILITY&&Math.random()<=e.SKIP_AD_PROBABILITY){var u=o.keywords?o.keywords:[],a=!1;if(e.SKIP_AD_KEYWORDS&&u)for(var f=0;f<u.length;f++)if($.inArray(u[f],e.SKIP_AD_KEYWORDS)!==-1){a=!0;break}if(a){var l=document.getElementById("main"),c=document.createElement("img"),h=Math.floor(Math.random()*e.SKIP_AD_IMAGES.length);c.height=250,c.width=300,c.src=e.SKIP_AD_IMAGES[h],l.appendChild(c);return}}ados.run.push(function(){ados.isAsync=!0;if(o.placements){var t=o.placements.split(",");for(var s=0;s<t.length;s++){var u=t[s].split(":"),a=u[0],f=u[1];ados_add_placement(n,r,a,i[a]).setFlightCreativeId(f)}}else for(var a in i)ados_add_placement(n,r,a,i[a]);ados_setWriteResults(!0),o.keywords&&ados_setKeywords(o.keywords),ados_load();var l=0,c=setInterval(function(){l++,e.ados_results&&(clearInterval(c),e.ados_results.sponsorship&&(e.postMessage?e.parent.postMessage("ados.createAdFrame:sponsorship",o.origin):(iframe=document.createElement("iframe"),iframe.src="/static/createadframe.html",iframe.style.display="none",document.documentElement.appendChild(iframe))))},50)})})(this);
/*
     FILE ARCHIVED ON 09:47:40 Feb 14, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:42:57 Apr 19, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 100.941 (3)
  esindex: 0.022
  captures_list: 501.682
  CDXLines.iter: 47.246 (3)
  exclusion.robots: 0.432
  PetaboxLoader3.resolve: 161.838 (2)
  PetaboxLoader3.datanode: 121.96 (5)
  load_resource: 199.853
  exclusion.robots.policy: 0.409
  RedisCDXSource: 2.863
*/