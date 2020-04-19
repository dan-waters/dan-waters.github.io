if (self.CavalryLogger) { CavalryLogger.start_js(["DEFz0"]); }

__d("CometOnBlueHeroTracingBootstrap",["performanceNow","uuid"],(function(a,b,c,d,e,f){"use strict";var g,h=[],i=null;function a(a){var c,d=b("uuid")();c=(c=a.startTime)!=null?c:(g||(g=b("performanceNow")))();c={interactionID:d,startTime:c,tracePolicy:a.moduleID!=null?"comet_on_blue."+a.moduleID:null};if(i)return i(c);h.push(c);return d}function c(a){if(i)return;i=a;h.forEach(function(b){return a(b)})}e.exports={inject:c,startInteraction:a}}),null);
__d("LoadingMarker.react",["LoadingMarkerGated","React"],(function(a,b,c,d,e,f){"use strict";b("React");function a(a){return a.children}e.exports=b("LoadingMarkerGated").component||a}),null);
__d("joinClasses",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a||"",c=arguments.length<=1?0:arguments.length-1;for(var d=0;d<c;d++){var e=d+1<1||arguments.length<=d+1?void 0:arguments[d+1];e!=null&&e!==""&&(b=(b?b+" ":"")+e)}return b}e.exports=a}),null);
__d("ReactFbPropTypes",["FbtResultBase","warning"],(function(a,b,c,d,e,f){function a(a){var c=function(c,d,e,f,g,h,i){var j=d[e];if(j instanceof b("FbtResultBase"))return null;if(c)return a.isRequired(d,e,f,g,h,i);else return a(d,e,f,g,h,i)},d=c.bind(null,!1);d.isRequired=c.bind(null,!0);return d}f.wrapStringTypeChecker=a}),null);
__d("fbjs/lib/emptyFunction",["emptyFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=b("emptyFunction")}),null);
__d("fbjs/lib/invariant",["invariant"],(function(a,b,c,d,e,f){"use strict";e.exports=b("invariant")}),null);
__d("fbjs/lib/warning",["warning"],(function(a,b,c,d,e,f){"use strict";e.exports=b("warning")}),null);
__d("prop-types/lib/ReactPropTypesSecret",[],(function(a,b,c,d,e,f){"use strict";a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a}),null);
__d("prop-types/checkPropTypes",["fbjs/lib/invariant","fbjs/lib/warning","prop-types/lib/ReactPropTypesSecret"],(function(a,b,c,d,e,f){"use strict";var g;function a(a,b,c,d,e){}e.exports=a}),null);
__d("prop-types/prop-types",["prop-types/checkPropTypes","prop-types/lib/ReactPropTypesSecret","fbjs/lib/emptyFunction","fbjs/lib/invariant","fbjs/lib/warning"],(function(a,b,c,d,e,f){var g,h=function(){b("fbjs/lib/invariant")(0,1492)};a=function(){return h};h.isRequired=h;c={array:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:a,element:h,instanceOf:a,node:h,objectOf:a,oneOf:a,oneOfType:a,shape:a};c.checkPropTypes=b("fbjs/lib/emptyFunction");c.PropTypes=c;e.exports=c}),null);
__d("prop-types",["prop-types/prop-types","ReactFbPropTypes"],(function(a,b,c,d,e,f){e.exports=b("prop-types/prop-types")}),null);
__d("XUISpinner.react",["cx","fbt","BrowserSupport","LoadingMarker.react","React","UserAgent","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React"),j=b("BrowserSupport").hasCSSAnimations()&&!(b("UserAgent").isEngine("Trident < 6")||b("UserAgent").isEngine("Gecko < 39")||b("UserAgent").isBrowser("Safari < 6"));a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.showOnAsync,d=a.background,e=a.paused;a=babelHelpers.objectWithoutPropertiesLoose(a,["showOnAsync","background","paused"]);d="img _55ym"+(this.props.size=="small"?" _55yn":"")+(this.props.size=="large"?" _55yq":"")+(d=="light"?" _55yo":"")+(d=="dark"?" _55yp":"")+(c?" _5tqs":"")+(j?"":" _5d9-")+(j&&e?" _2y32":"");return i.jsx(b("LoadingMarker.react"),{children:i.jsx("span",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,d),role:"progressbar","aria-valuetext":h._("Loading..."),"aria-busy":"true","aria-valuemin":"0","aria-valuemax":"100"}))})};return c}(i.Component);a.propTypes={paused:b("prop-types").bool,showOnAsync:b("prop-types").bool,size:b("prop-types").oneOf(["small","large"]),background:b("prop-types").oneOf(["light","dark"])};a.defaultProps={showOnAsync:!1,size:"small",background:"light"};e.exports=a}),null);
__d("EventListenerImplForBlue",["Event","TimeSlice","emptyFunction","setImmediateAcrossTransitions"],(function(a,b,c,d,e,f){function g(a,c,d,e){var f=b("TimeSlice").guard(d,"EventListener capture "+c);if(a.addEventListener){a.addEventListener(c,f,e);return{remove:function(){a.removeEventListener(c,f,e)}}}else return{remove:b("emptyFunction")}}a={listen:function(a,c,d){return b("Event").listen(a,c,d)},capture:function(a,b,c){return g(a,b,c,!0)},captureWithPassiveFlag:function(a,b,c,d){return g(a,b,c,{passive:d,capture:!0})},bubbleWithPassiveFlag:function(a,b,c,d){return g(a,b,c,{passive:d,capture:!1})},registerDefault:function(a,c){var d,e=b("Event").listen(document.documentElement,a,f,b("Event").Priority._BUBBLE);function f(){g(),d=b("Event").listen(document,a,c),b("setImmediateAcrossTransitions")(g)}function g(){d&&d.remove(),d=null}return{remove:function(){g(),e&&e.remove(),e=null}}},suppress:function(a){b("Event").kill(a)}};e.exports=a}),null);
__d("WarningFilter",["CoreWarningGK","gkx"],(function(a,b,c,d,e,f){var g=21;b=a;function a(a){return{finalFormat:a,forceDialogImmediately:!1,monitorEvent:null,monitorListVersion:g,monitorSampleRate:1,suppressCompletely:!1,suppressDialog_LEGACY:!0}}e.exports={prepareWarning:b}}),null);
__d("warningBlue",["requireCond","Bootloader","SiteData","WarningFilter","cr:983844"],(function(a,b,c,d,e,f){c=b("WarningFilter").prepareWarning;function a(a,b){}d=a;e.exports=d}),null);
__d("XLynxAsyncCallbackController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/si/linkclick/ajax_callback/",{lynx_uri:{type:"String"}})}),null);
__d("FBLynxLogging",["AsyncRequest","BanzaiODS","XLynxAsyncCallbackController"],(function(a,b,c,d,e,f){"use strict";a={log:function(a){var c=b("XLynxAsyncCallbackController").getURIBuilder().getURI();new(b("AsyncRequest"))(c).setData({lynx_uri:a}).setErrorHandler(function(a){a=a.getError();b("BanzaiODS").bumpEntityKey(2966,"linkshim","click_log.post.fail."+a)}).setTransportErrorHandler(function(a){a=a.getError();b("BanzaiODS").bumpEntityKey(2966,"linkshim","click_log.post.transport_fail."+a)}).send()}};e.exports=a}),null);
__d("isLinkshimURI",["isFacebookURI","isMessengerDotComURI"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.getPath();return(c==="/l.php"||c.indexOf("/si/ajax/l/")===0||c.indexOf("/l/")===0||c.indexOf("l/")===0)&&(b("isFacebookURI")(a)||b("isMessengerDotComURI")(a))?!0:!1}e.exports=a}),null);
__d("FBLynxBase",["FBLynxLogging","LinkshimHandlerConfig","URI","$","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";var g;function h(a){if(!b("isLinkshimURI")(a))return null;a=a.getQueryData().u;return!a?null:a}var i={logAsyncClick:function(a){i.swapLinkWithUnshimmedLink(a);a=a.getAttribute("data-lynx-uri");if(!a)return;b("FBLynxLogging").log(a)},originReferrerPolicyClick:function(a){var c=b("$")("meta_referrer");c.content=b("LinkshimHandlerConfig").switched_meta_referrer_policy;i.logAsyncClick(a);setTimeout(function(){c.content=b("LinkshimHandlerConfig").default_meta_referrer_policy},100)},swapLinkWithUnshimmedLink:function(a){var c=a.href,d=h(new(g||(g=b("URI")))(c));if(!d)return;a.setAttribute("data-lynx-uri",c);a.href=d},revertSwapIfLynxURIPresent:function(a){var b=a.getAttribute("data-lynx-uri");if(!b)return;a.removeAttribute("data-lynx-uri");a.href=b}};e.exports=i}),null);
__d("FBLynx",["Base64","Event","FBLynxBase","LinkshimHandlerConfig","Parent","URI"],(function(a,b,c,d,e,f){"use strict";var g,h=(g||(g=b("URI"))).goURIOnWindow,i={alreadySetup:!1,setupDelegation:function(a){a===void 0&&(a=!1);if(document.body==null){if(a)return;setTimeout(function(){i.setupDelegation(!0)},100);return}if(i.alreadySetup)return;i.alreadySetup=!0;var c=function(a){var c=i.getMaybeLynxLink(a.target);if(!c)return;var d=c[0];c=c[1];var e=c,f=new(g||(g=b("URI")))(c.href),j;if(b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&(c.dataset&&c.dataset.attributes)){j=b("Base64").decodeObject(c.dataset.attributes);if(j&&j.open_link){var k;for(k in j)k!=="open_link"&&f.addQueryData(k,j[k]);k=c.cloneNode(!0);k.href=f.toString();e=k}}switch(d){case"async":case"asynclazy":b("FBLynxBase").logAsyncClick(e);break;case"origin":b("FBLynxBase").originReferrerPolicyClick(e);break;case"hover":i.hoverClick(e);break}b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&j&&j.open_link&&(a.preventDefault(),h(f,window.open("",e.target),!0))};b("Event").listen(document.body,"click",c);b("LinkshimHandlerConfig").middle_click_requires_event&&b("Event").listen(document.body,"mouseup",function(a){a.button==1&&c(a)});b("Event").listen(document.body,"mouseover",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"asynclazy":case"origin":case"hover":i.mouseover(a);break}});b("Event").listen(document.body,"contextmenu",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"hover":case"origin":i.contextmenu(a);break;case"asynclazy":break}})},getMaybeLynxLink:function(a){a=b("Parent").byAttribute(a,"data-lynx-mode");if(a instanceof HTMLAnchorElement){var c=a.getAttribute("data-lynx-mode");switch(c){case"async":case"asynclazy":case"hover":case"origin":return[c,a];default:return null}}return null},hoverClick:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)},mouseover:function(a){b("FBLynxBase").swapLinkWithUnshimmedLink(a)},contextmenu:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)}};e.exports=i}),null);
__d("AbstractLinkLynxMode",["FBLynx","LinkshimHandlerConfig"],(function(a,b,c,d,e,f){"use strict";a={getMode:function(a){return a?[b("LinkshimHandlerConfig").www_safe_js_mode,null]:["hover",null]},setupDelegation:function(){b("FBLynx").setupDelegation()}};e.exports=a}),null);
__d("unmountComponentOnTransition",["Arbiter","BanzaiODS","PageEvents","ReactDOM","emptyFunction","requestIdleCallbackAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";var g=[],h=null;function i(a){g.unshift(a),j()}function j(){if(h!==null)return;h=b("requestIdleCallbackAcrossTransitions")(function(a){h=null;while(g.length>0&&a.timeRemaining()>0)b("ReactDOM").unmountComponentAtNode(g.pop());g.length>0&&j()})}function k(a,c){b("BanzaiODS").bumpEntityKey(2966,"core.www.react_component_register_unmount",a+"."+c)}function a(a,c){function d(){a!=null&&Object.prototype.hasOwnProperty.call(a,"setState")&&(a.setState=b("emptyFunction"),a.shouldComponentUpdate=b("emptyFunction").thatReturnsFalse),i(c)}var e=!1;e?k("contextual_component","not_found_fallback"):k("arbiter","default");var f=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(a,b){a=b.canvasID;if(a!=="content"&&a!=="content_container")return;d();f.unsubscribe()})}e.exports=a}),null);
__d("unmountConcurrentComponentOnTransition",["Arbiter","PageEvents"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(b,e){b=e.canvasID;if(b!=="content"&&b!=="content_container")return;a.unmount(c);d.unsubscribe()})}e.exports=a}),null);
__d("getErrorSafe",["TAALOpcodes","err"],(function(a,b,c,d,e,f){"use strict";function a(a){if(a!=null&&typeof a==="object"&&typeof a.message==="string")if(Object.isExtensible&&Object.isExtensible(a))return a;else{var c=b("err")("Non-extensible thrown: %s",String(a.message));c.taalOpcodes=c.taalOpcodes||[];c.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);return c}else{c=b("err")("Non-object thrown: %s",String(a));c.taalOpcodes=c.taalOpcodes||[];c.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);return c}}e.exports=a}),null);
__d("ReactFiberErrorDialog",["requireCond","ErrorNormalizeUtils","ErrorPubSub","LogHistory","cr:895840","getErrorSafe"],(function(a,b,c,d,e,f){"use strict";var g;function a(a){var c=a.componentStack,d=a.errorBoundary,e=b("getErrorSafe")(a.error);e.componentStack=a.componentStack;if(d!=null&&d.hideErrorDialogIUnderstandThisWillMakeBugsHarderToFindAndFix)return!1;a=b("LogHistory").getInstance("react_fiber_error_logger");a.error("capturedError",JSON.stringify({componentStack:c,error:{name:e.name,message:e.message,stack:e.stack}}));d=b("ErrorNormalizeUtils").normalizeError(e);d.loggingSource="REACT_FIBER";(g||(g=b("ErrorPubSub"))).reportNormalizedError(d);if(b("cr:895840")){b("cr:895840").showReactErrorDialog(d);return!0}else return!1}e.exports={showErrorDialog:a}}),null);
__d("EventListener",["requireCond","cr:1353359"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1353359")}),null);
__d("LayerTogglerContext",["Toggler"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._root=this._layer.getRoot(),b("Toggler").createInstance(this._root).setSticky(!1)};c.disable=function(){b("Toggler").destroyInstance(this._root),this._root=null};return a}();e.exports=a}),null);
__d("DialogPosition",["Vector"],(function(a,b,c,d,e,f){var g=40,h;a={calculateTopMargin:function(a,c,d,e){d===void 0&&(d=null);e===void 0&&(e=!1);var f=b("Vector").getViewportDimensions(),i=!1;e&&d&&(i=d+c>f.y);if(d!=null&&!i)return d;if(h)return h;e=Math.floor((f.x+a)*(f.y-c)/(4*f.x));return Math.max(e,g)},setFixedTopMargin:function(a){h=a}};e.exports=a}),null);
__d("DialogX",["cx","fbt","Arbiter","CSS","DialogPosition","DOMQuery","Event","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerFormHooks","LayerRefocusOnHide","LayerTabIsolation","LayerTogglerContext","ModalLayer","Style","Vector","debounce","getOrCreateDOMID","goURI","shield"],(function(a,b,c,d,e,f,g,h){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d._configure=function(c,d){a.prototype._configure.call(this,c,d);d=this.getRoot();d!=null&&b("CSS").addClass(d,"_4-hy");if(c.autohide)var e=this.subscribe("show",function(){e.unsubscribe(),window.setTimeout(b("shield")(this.hide,this),c.autohide)}.bind(this));if(c.redirectURI)var f=this.subscribe("hide",function(){f.unsubscribe();var a=c.redirectURI;a!=null&&b("goURI")(a)});this._fixedTopPosition=c.fixedTopPosition;this._ignoreFixedTopInShortViewport=c.ignoreFixedTopInShortViewport};d._getDefaultBehaviors=function(){return a.prototype._getDefaultBehaviors.call(this).concat([i,b("ModalLayer"),b("LayerAutoFocus"),b("LayerButtons"),b("LayerFormHooks"),b("LayerTabIsolation"),b("LayerTogglerContext"),b("LayerRefocusOnHide")])};d._buildWrapper=function(a,c){var d=a.xui?"_4t2a":"_t",e=a.xui?"_59s7":"_1yv";this._innerContent=b("JSXDOM").div(null,c);c={className:e,role:"dialog"};if(a.labelledBy)c["aria-labelledby"]=a.labelledBy;else if(a.label)c["aria-label"]=a.label;else if(a.titleID)c["aria-labelledby"]=a.titleID;else if(a.titleClass){e=b("DOMQuery").scry(this._innerContent,a.titleClass);if(e.length){e=b("getOrCreateDOMID")(e[0]);c["aria-labelledby"]=e}else c["aria-label"]=this._getDefaultLabel()}else c["aria-label"]=this._getDefaultLabel();e={className:d};a["data-testid"]&&(e["data-testid"]=a["data-testid"]);this._wrapper=b("JSXDOM").div(c,b("JSXDOM").div(e,this._innerContent));a.width!=null&&this.setWidth(a.width);a.height!=null&&this.setHeight(a.height);return b("JSXDOM").div({className:"_10"},this._wrapper)};d._getDefaultLabel=function(){return h._("Dialog content")};d.getContentRoot=function(){return this._wrapper};d.getInnerContent=function(){return this._innerContent};d.updatePosition=function(){var a=b("Vector").getElementDimensions(this._wrapper);a=b("DialogPosition").calculateTopMargin(a.x,a.y,this._fixedTopPosition,(a=this._ignoreFixedTopInShortViewport)!=null?a:!1);b("Style").set(this._wrapper,"margin-top",a+"px");this.inform("update_position",{type:"DialogX",top:a});return!0};d.setWidth=function(a){a=Math.floor(a);if(a===this._width)return;this._width=a;b("Style").set(this._wrapper,"width",a+"px")};d.getWidth=function(){return this._width};d.setHeight=function(a){a=Math.floor(a);if(a===this._height)return;this._height=a;b("Style").set(this._wrapper,"height",a+"px")};d.getFixedTopPosition=function(){return this._fixedTopPosition};d.shouldIgnoreFixedTopInShortViewport=function(){return this._ignoreFixedTopInShortViewport};return c}(b("Layer"));var i=function(){"use strict";function a(a){this._subscription=null,this._resize=null,this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe(["show","hide"],function(a){a==="show"?(this._attach(),b("Arbiter").inform("layer_shown",{type:"DialogX"})):(this._detach(),b("Arbiter").inform("layer_hidden",{type:"DialogX"}))}.bind(this))};c.disable=function(){var a;(a=this._subscription)==null?void 0:a.unsubscribe();this._subscription=null;this._resize&&this._detach()};c._attach=function(){this._layer.updatePosition(),this._resize=b("Event").listen(window,"resize",b("debounce")(this._layer.updatePosition.bind(this._layer)))};c._detach=function(){var a;(a=this._resize)==null?void 0:a.remove();this._resize=null};return a}();e.exports=a}),null);
__d("LynxGeneration",["LinkshimHandlerConfig","URI"],(function(a,b,c,d,e,f){var g,h=new(g||(g=b("URI")))("/l.php").setDomain(b("LinkshimHandlerConfig").linkshim_host),i={getShimURI:function(){return new(g||(g=b("URI")))(h)},getLynxURIProtocol:function(a){return b("LinkshimHandlerConfig").always_use_https?"https":a.getProtocol()==="http"?"http":"https"},getShimmedHref:function(a,c,d){a=new(g||(g=b("URI")))(a);var e=i.getLynxURIProtocol(a);a=i.getShimURI().setQueryData({u:a.toStringRawQuery(),h:c}).setProtocol(e);c=d==null?void 0:d.trackingNodes;e=d==null?void 0:d.callbacks;c&&c.length&&(a=a.addQueryData("__tn__",c.join("")));e&&e.length&&(a=a.addQueryData("c",e));return a}};e.exports=i}),null);
__d("NonFBLinkReferrerProtector",["Event","LinkshimHandlerConfig","Parent","URI","$","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g,h=(g||(g=b("URI"))).goURIOnWindow,i={alreadySetup:!1,originReferrerPolicyClickWithoutLog:function(a){var c=b("$")("meta_referrer");c.content=b("LinkshimHandlerConfig").switched_meta_referrer_policy;b("setTimeout")(function(){c.content=b("LinkshimHandlerConfig").default_meta_referrer_policy},100)},setupDelegation:function(a){a===void 0&&(a=!1);if(document.body==null){if(a)return;b("setTimeout")(function(){i.setupDelegation(!0)},100);return}if(i.alreadySetup)return;i.alreadySetup=!0;a=function(a){var c=i.getMaybeNonFBLinkReferrerJSMode(a.target);if(!c)return;var d=c[0];c=c[1];switch(d){case"origin":i.originReferrerPolicyClickWithoutLog(c);break;case"ie":d=new(g||(g=b("URI")))(c.href);a.preventDefault();h(d,window.open("",c.target),!0);break}};b("Event").listen(document.body,"click",a)},getMaybeNonFBLinkReferrerJSMode:function(a){a=b("Parent").byAttribute(a,"data-lnfb-mode");if(a instanceof HTMLAnchorElement){var c=a.getAttribute("data-lnfb-mode");switch(c){case"ie":case"origin":return[c,a];default:return null}}return null}};e.exports=i}),null);
__d("AbstractLink.react",["AbstractLinkLynxMode","LynxGeneration","NonFBLinkReferrerProtector","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.props.dataLnfbMode!==null?b("NonFBLinkReferrerProtector").setupDelegation():this.props.isLinkshimSupported&&b("AbstractLinkLynxMode").setupDelegation()};d.render=function(){var a=this.props,c=a.href,d=a.linkRef,e=a.shimhash,f=a.nofollow,h=a.noopener,i=a.rel,j=a.isSafeToSkipShim,k=a.dataLnfbMode;a.isLinkshimSupported;a=babelHelpers.objectWithoutPropertiesLoose(a,["href","linkRef","shimhash","nofollow","noopener","rel","isSafeToSkipShim","dataLnfbMode","isLinkshimSupported"]);var l=c;i=i;var m=null,n=null,o=null;if(e!==null){l=b("LynxGeneration").getShimmedHref(c,e||"");c=b("AbstractLinkLynxMode").getMode(j);n=c[0];m=c[1]}f&&(i=i?i+" nofollow":"nofollow");h&&(i=i?i+" noopener":"noopener");k&&(o=k);return g.jsx("a",babelHelpers["extends"]({},a,{href:l.toString(),rel:i,ref:d,"data-sigil":m,"data-lynx-mode":n,"data-lnfb-mode":o}))};return c}(g.Component);e.exports=a}),null);
__d("first",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;return d}return null}e.exports=a}),null);
__d("ClickIDParameterUtils",["URI","compactArray","first","isCdnURI","isClickIDBlacklistSVDomainURI","isFacebookSVDomainURI","isFacebookURI","isFbDotComURI"],(function(a,b,c,d,e,f){"use strict";var g,h=new Set(["http","https"]);function i(a){return h.has(a.getProtocol())}var j="fbclid";c="doubleclick.net";var k=(d={},d[c]=[{extractor:function(a){a=a.getQueryString();return a!=null&&a.startsWith("http")?new(g||(g=b("URI")))(a):null},injector:function(a,b,c){b=b.addQueryData(j,c);return a.setQueryString(b.toString())}}],d);function l(a){var b=a.getProtocol(),c=a.getDomain();a=a.getPort();return b!==null&&b.length>0||c!==null&&c.length>0||a!==null}function m(a){var c=b("first")(Object.keys(k).filter(function(b){return a.getDomain().endsWith(b)}));c=c!=null?k[c]:null;return c==null?null:b("first")(b("compactArray")(c.map(function(b){var c=b.extractor(a);return c==null?null:{injector:b.injector,uri:c}})))}function n(a){return!b("isFacebookURI")(a)&&!b("isFacebookSVDomainURI")(a)&&!b("isCdnURI")(a)&&!b("isFbDotComURI")(a)&&l(a)&&i(a)&&!o(a)}function o(a){var c=b("isClickIDBlacklistSVDomainURI")(a);if(c)return!0;c=m(a);return c!=null?o(c.uri):!1}function p(a,b){var c=m(a);return c!=null?c.injector(a,c.uri,b):a.addQueryData(j,b)}function a(a,b){return n(a)?p(a,b):a}e.exports={QUERY_PARAM:j,appendClickIDQueryParam:a}}),null);
__d("Link.react",["AbstractLink.react","ClickIDParameterUtils","LinkshimHandlerConfig","Random","React","URI","isFacebookURI","isInternalFBURI","isLinkshimURI","isMessengerDotComURI","isWorkplaceDotComURI","killswitch"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function i(){return/(^|\.)workplace\.com$/.test(b("LinkshimHandlerConfig").current_domain)}function j(){return/(^|\.)internalfb\.com$/.test(b("LinkshimHandlerConfig").current_domain)}function k(a){return b("isFacebookURI")(a)||b("isMessengerDotComURI")(a)}function l(a){return a.getDomain().endsWith(".onion")}function m(a){if(i())return n(a);return j()?b("isInternalFBURI")(a)||k(a):k(a)}function n(a){return b("isWorkplaceDotComURI")(a)}var o=/^(#|\/\w)/;function p(a){if(o.test(a.toString()))return!1;var b=a.getProtocol();return b!=="http"&&b!=="https"?!1:!m(a)}function q(a){var c="#",d=null;a instanceof(g||(g=b("URI")))?c=a.toString():typeof a==="string"&&a!==""&&a!=="#"?c=a:typeof a==="object"&&a!==null?(c=a.url.toString(),d=a.shimhash?a.shimhash.toString():d):(c="#",d=null);return(g||(g=b("URI"))).isValidURI(c)?[new(g||(g=b("URI")))(c),d]:[null,d]}var r=new RegExp("^(l|lm|h)\\..*$","i");function s(a){if(b("killswitch")("LINK_UPGRADE_UNSHIMMED_JS"))return null;if(a.getProtocol()!=="http")return null;if(!m(a))return null;return r.test(a.getDomain())?null:a.setProtocol("https")}function t(a){return a.getProtocol()===""||a.getDomain()===""&&a.getPort()===""?!1:!0}function u(a){if(!t(a))return!1;var c=b("LinkshimHandlerConfig").current_domain;if(c===""){c="."+c;return a.getDomain().endsWith(c)}return!0}function v(a,c){var d=null,e=!1;a=a!==null&&a instanceof(g||(g=b("URI")))?a:new(g||(g=b("URI")))("#");var f=u(a),h=f===!0;c=c||(f===!0?"_blank":null);var i=b("LinkshimHandlerConfig").use_rel_no_opener&&c==="_blank";return[a,h,i,c,d,e,f]}function w(a,c,d,e){if(a!==null&&a instanceof(g||(g=b("URI")))){if(!b("killswitch")("LINK_PARSES_SHIMHASH_FROM_LINKSHIM")&&b("isLinkshimURI")(a)){var f=a.getQueryData(),h=f.u;f=f.h;(g||(g=b("URI"))).isValidURI(h)&&(a=new(g||(g=b("URI")))(h),c==null&&(c=f))}h=b("LinkshimHandlerConfig").click_ids;if(!b("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM")&&h!=null&&h.length>0){f=Math.floor(b("Random").random()*h.length);h=h[f];a=b("ClickIDParameterUtils").appendClickIDQueryParam(a,h)}}else a=new(g||(g=b("URI")))("#");c==null&&p(a)&&(c=b("LinkshimHandlerConfig").link_react_default_hash);f=s(a);f!=null&&(a=f);h=c!=null;f=d||(c!==null?"_blank":null);d=!!e;b("LinkshimHandlerConfig").onion_always_shim&&l(a)&&(d=!1);e=b("LinkshimHandlerConfig").use_rel_no_opener&&c!==null&&f==="_blank";var i=u(a);return[a,h,e,f,c,d,i]}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props;a.allowunsafehref;var c=a.s,d=a.href,e=a.linkRef;a.target;a=babelHelpers.objectWithoutPropertiesLoose(a,["allowunsafehref","s","href","linkRef","target"]);d=q(d);var f=d[0];d=d[1];d=b("LinkshimHandlerConfig").is_linkshim_supported?w(f,d,this.props.target,c):v(f,this.props.target);c=d[0];f=d[1];var g=d[2],i=d[3],j=d[4],k=d[5];d=d[6];var l=null;!b("LinkshimHandlerConfig").is_linkshim_supported&&d&&(l=b("LinkshimHandlerConfig").non_linkshim_lnfb_mode);return h.jsx(b("AbstractLink.react"),babelHelpers["extends"]({},a,{href:c,linkRef:e,nofollow:f,noopener:g,shimhash:j,target:i,isSafeToSkipShim:k,dataLnfbMode:l,isLinkshimSupported:b("LinkshimHandlerConfig").is_linkshim_supported}))};return c}(h.Component);e.exports=a}),null);
__d("keyMirrorRecursive",["invariant","isTruthy"],(function(a,b,c,d,e,f,g){"use strict";a=function a(c,d){var e={};h(c)||g(0,580);for(var f in c){if(!Object.prototype.hasOwnProperty.call(c,f))continue;var i=c[f],j=b("isTruthy")(d)?d+"."+f:f;h(i)?i=a(i,j):i=j;e[f]=i}return e};function h(a){return a instanceof Object&&!Array.isArray(a)}e.exports=a}),null);
__d("ReactXHPContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("ReactRenderer",["invariant","CometOnBlueHeroTracingBootstrap","React","ReactDOM","ReactXHPContext","$","gkx","nullthrows","unmountComponentOnTransition","unmountConcurrentComponentOnTransition"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=8;function j(a,c,d){a=b("ReactDOM").render(a,c,d);b("unmountComponentOnTransition")(a,c);return a}function k(a,c,d){c=b("ReactDOM").createRoot(c);a=c.render(a,d);b("unmountConcurrentComponentOnTransition")(c);return a}function l(a,c,d){c=b("ReactDOM").createRoot(c);return c.render(a,d)}function m(a,b,c,d){a=h.createElement(a,b);return j(a,c,d)}function n(a,b,c,d){a=h.createElement(a,b);return o(a,c,d)}function o(a,c,d){return b("ReactDOM").render(a,c,d)}function a(a,c,d,e){return m(a,c,b("$")(d),e)}function c(a,c,d,e){return n(a,c,b("$")(d),e)}function p(a,c,d,e,f,g,i,m,n){i=f?f.getContextProvider():null;var p=null;b("gkx")("1223330")&&(p=b("CometOnBlueHeroTracingBootstrap").startInteraction({moduleID:n,startTime:g?void 0:0}));n=h.jsx(b("ReactXHPContext").Provider,{value:{interactionID:p,bigPipeContext:g},children:a});i&&(n=h.jsx(i,{value:f,children:n}));p=m===!0?d?l:k:d?o:j;if(e){g=b("nullthrows")(c.parentNode,"Error: container doesn't have a parent");return p(n,g)}a=document.createComment(" react-mount-point-unstable ");q(c,a);return p(n,a)}function d(a){var b=a.concurrent_UNSTABLE,c=a.constructor,d=a.props,e=a.dummyElem,f=a.acrossTransitions,g=a.clobberSiblings,i=a.preloader,j=a.bigPipeContext,k=a.lid;a=a.moduleID;return p(h.createElement(c,d),e,f,g,i,j,k,b,a)}function q(a,c){a.tagName==="NOSCRIPT"||g(0,3540);var d=b("nullthrows")(a.parentNode,"Error: container doesn't have a parent"),e=a.previousSibling;if(e&&e.nodeType===i&&e.nodeValue===" end-react-placeholder "){do d.removeChild(e),e=b("nullthrows")(a.previousSibling,"Error: malformed placeholder");while(!(e.nodeType===i&&e.nodeValue===" begin-react-placeholder "));d.removeChild(e)}d.replaceChild(c,a)}e.exports={renderComponent:j,constructAndRenderComponent:m,constructAndRenderComponentByID:a,constructAndRenderComponentAcrossTransitions:n,constructAndRenderComponentByIDAcrossTransitions:c,constructAndRenderComponentIntoComment_DO_NOT_USE:d,constructAndRenderElementIntoComment_DO_NOT_USE:p,constructAndRenderComponent_DEPRECATED:n,constructAndRenderComponentByID_DEPRECATED:c}}),null);
__d("object-assign",[],(function(a,b,c,d,e,f){e.exports=Object.assign}),null);
__d("scheduler",["SchedulerFb-Internals_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SchedulerFb-Internals_DO_NOT_USE")}),null);
__d("ReactFeatureFlags",["TrustedTypesConfig","gkx"],(function(a,b,c,d,e,f){"use strict";c={enableFilterEmptyStringAttributesDOM:(a=b("gkx"))("1399218"),debugRenderPhaseSideEffectsForStrictMode:a("729630"),deferPassiveEffectCleanupDuringUnmount:a("1283383"),runAllPassiveEffectDestroysBeforeCreates:a("1292300"),disableModulePatternComponents:a("1381768"),disableInputAttributeSyncing:a("729631"),enableTrustedTypesIntegration:b("TrustedTypesConfig").useTrustedTypes,warnAboutShorthandPropertyCollision:a("1281505"),disableSchedulerTimeoutBasedOnReactExpirationTime:a("1291023"),warnAboutSpreadingKeyToJSX:a("1294182"),enableModernEventSystem:a("1334669"),enableLegacyFBSupport:a("1401060"),enableComponentStackLocations:a("1405113")};e.exports=c}),null);
__d("SchedulerTracing-dev.classic",["ReactFeatureFlags"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("SchedulerTracing",["requireCond","SchedulerTracing-dev.classic","cr:1292369"],(function(a,b,c,d,e,f){"use strict";a=b("cr:1292369");e.exports=a}),null);
__d("scheduler/tracing",["SchedulerTracing"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SchedulerTracing")}),null);
__d("ReactCurrentOwner",[],(function(a,b,c,d,e,f){"use strict";a={current:null};e.exports=a}),null);
__d("ReactDOM.classic",["requireCond","cr:1344485"],(function(a,b,c,d,e,f){e.exports=b("cr:1344485")}),null);
__d("ReactDOM.classic.prod-or-profiling",["requireCond","cr:1344486"],(function(a,b,c,d,e,f){e.exports=b("cr:1344486")}),null);
__d("ReactFbErrorUtils",["ErrorGuard","TimeSlice"],(function(a,b,c,d,e,f){var g;function a(a,c,d,e,f,h,i,j,k){var l=Array.prototype.slice.call(arguments,3),m=this.onError;try{(g||(g=b("ErrorGuard"))).applyWithGuard(c,d,l,{onError:m,name:a})}catch(a){m(a)}}f.invokeGuardedCallback=a;function c(a,c){return b("TimeSlice").guard(c,a)}f.wrapEventListener=c}),null);
__d("RelayFBDefaultEnvironment",["requireCond","RelayFBHandlerProvider","RelayFBOperationLoader","RelayRuntime","getRelayFBMissingFieldHandlers","relayFBGetDataID","resolveImmediate","cr:1121434","RelayFBNetwork"],(function(a,b,c,d,e,f){"use strict";a=b("RelayRuntime").Environment;c=b("RelayRuntime").RecordSource;d=b("RelayRuntime").Store;f=new c();c=new d(f,{UNSTABLE_DO_NOT_USE_getDataID:b("relayFBGetDataID"),gcReleaseBufferSize:10,gcScheduler:b("resolveImmediate"),operationLoader:b("RelayFBOperationLoader"),queryCacheExpirationTime:5*60*1e3});d=new a({configName:"RelayFBDefaultEnvironment",handlerProvider:b("RelayFBHandlerProvider"),log:b("cr:1121434")!=null?b("cr:1121434")():null,network:b("RelayFBNetwork"),operationLoader:b("RelayFBOperationLoader"),store:c,missingFieldHandlers:b("getRelayFBMissingFieldHandlers")(),UNSTABLE_DO_NOT_USE_getDataID:b("relayFBGetDataID")});e.exports=d}),null);