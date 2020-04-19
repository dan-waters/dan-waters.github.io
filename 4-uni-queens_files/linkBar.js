define("linkBar",["lodash","coreUtils","santa-components","componentsCore","prop-types","skins"],function(i,e,t,n,s,o){return function(i){var e={};function t(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return i[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=i,t.c=e,t.d=function(i,e,n){t.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:n})},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,e){if(1&e&&(i=t(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var s in i)t.d(n,s,function(e){return i[e]}.bind(null,s));return n},t.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(e,"a",e),e},t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},t.p="",t(t.s=887)}({0:function(e,t){e.exports=i},1:function(i,t){i.exports=e},2:function(i,e){i.exports=t},254:function(i,e,t){var n,s;n=[t(0),t(3),t(1),t(4),t(2)],void 0===(s=function(i,e,t,n,s){"use strict";var o=t.linkRenderer;function r(e){return i.assign({},e,{alt:e.title})}return{displayName:"LinkBarItem",mixins:[e.mixins.skinBasedComp,e.mixins.createChildComponentMixin],propTypes:i.assign({linkRenderInfo:s.santaTypesDefinitions.Link.renderInfo.isRequired,rootNavigationInfo:s.santaTypesDefinitions.Component.rootNavigationInfo.isRequired,compData:s.santaTypesDefinitions.Component.compData.isRequired,compProp:s.santaTypesDefinitions.Component.compProp.isRequired,style:n.object,id:s.santaTypesDefinitions.Component.id.isRequired,isExperimentOpen:s.santaTypesDefinitions.isExperimentOpen.isRequired,parentId:n.string,itemStyle:n.object},s.utils.santaTypesUtils.getSantaTypesFromPropTypes(s.components.Image.propTypes)),getSkinProperties:function(){var e=this.props.compData,t=this.props.compProp,n=t.iconSize,s={link:e.link?o.renderLink(e.link,this.props.linkRenderInfo,this.props.rootNavigationInfo):{style:{cursor:"default"}},image:this.createChildComponent(e,"core.components.Image","image",{id:"".concat(this.props.id,"image"),ref:"image",imageData:r(e),containerWidth:n,containerHeight:n,displayMode:"fill",autoLayout:!0,wixImageLayout:this.props.isExperimentOpen("bv_wixImage"),containerId:this.props.parentId,style:i.assign({},this.props.style,{position:"absolute",width:n,height:n})})};return s[""]={tagName:"li",style:{width:t.iconSize,height:t.iconSize,marginBottom:this.props.itemStyle.marginBottom,marginRight:this.props.itemStyle.marginRight,display:this.props.itemStyle.display}},s}}}.apply(e,n))||(i.exports=s)},3:function(i,e){i.exports=n},4:function(i,e){i.exports=s},5:function(i,e){i.exports=o},887:function(i,e,t){var n,s;n=[t(888),t(254),t(5),t(889),t(3)],void 0===(s=function(i,e,t,n,s){"use strict";var o={linkBar:i,linkBarItem:e};return s.compRegistrar.register("wysiwyg.viewer.components.LinkBar",o.linkBar).register("wysiwyg.viewer.components.LinkBarItem",o.linkBarItem),t.skinsMap.addBatch(n),o}.apply(e,n))||(i.exports=s)},888:function(i,e,t){var n,s;n=[t(2),t(0),t(3),t(254)],void 0===(s=function(i,e,t,n){"use strict";var s={HORIZ:"HORIZ",VERTICAL:"VERTICAL"};var o=function(i){var e=i.compData,t=i.compProp,n=i.isMobileView,o=e.items.length,r=t.iconSize,a=t.spacing,p=o*(r+a)-a,l=t.orientation===s.HORIZ;return n?function(i,e,t,n,s){if(0===i)return{width:5,height:e};var o,r,a,p=e+t;return n?(o=Math.min(s,300),a=Math.floor((o+t)/p),r=Math.ceil(i/a)*e):(o=e,r=s),{width:o,height:r}}(o,r,a,l,p):0!==o?{width:l?p:r,height:l?r:p}:void 0};return{displayName:"LinkBar",mixins:[t.mixins.skinBasedComp,t.mixins.createChildComponentMixin],propTypes:e.assign({compData:i.santaTypesDefinitions.Component.compData.isRequired,isMobileView:i.santaTypesDefinitions.isMobileView,isResponsive:i.santaTypesDefinitions.RendererModel.isResponsive,compProp:i.santaTypesDefinitions.Component.compProp.isRequired,getTranslatedAriaLabel:i.santaTypesDefinitions.Accessibility.getTranslatedAriaLabel},i.utils.santaTypesUtils.getSantaTypesByDefinition(n)),getInitialState:function(){var i={};return this.props.isMobileView&&(i.$mobile="mobileView"),i},getChildren:function(){return e.map(this.props.compData.items,function(i,t){return this.createChildComponent(i,"wysiwyg.viewer.components.LinkBarItem","imageItem",{itemStyle:(n=this.props,o=n.compProp,r=n.isResponsive,a=o.orientation===s.HORIZ,p=o.spacing,l={marginRight:a?p:0,marginBottom:a?0:p},r?l:e.assign({display:a?"inline-block":"block"},l)),ref:t,id:"".concat(this.props.id+t,"image"),parentId:this.props.id});var n,o,r,a,p,l}.bind(this))},getItemsContainerStyle:function(){return this.props.isResponsive?{flexDirection:this.props.compProp.orientation===s.HORIZ?"row":"column"}:{}},getRootStyles:function(){return this.props.isResponsive?{}:o(this.props)},getSkinProperties:function(){return{"":e.assign({"data-is-responsive":this.props.isResponsive,style:this.getRootStyles()},!this.props.isResponsive&&{"data-hide-prejs":!0}),itemsContainer:{"aria-label":this.props.getTranslatedAriaLabel("AriaLabels","LinkBar_AriaLabel_SocialBarContainer","Social bar"),style:this.getItemsContainerStyle(),children:this.getChildren()}}}}}.apply(e,n))||(i.exports=s)},889:function(i,e,t){var n,s,o;"undefined"!=typeof self&&self,s=[],void 0===(o="function"==typeof(n=function(){"use strict";var i={"wysiwyg.viewer.skins.displayers.LinkBarItemNoBGSkin":{react:[["a","link",[],{},["div","image",[],{}]]],exports:{image:{skin:"skins.core.ImageSkin"}},css:{"%link":"cursor:pointer;"}},"wysiwyg.viewer.skins.displayers.LinkBarItemSkin":{react:[["a","link",[],{},["span","image",[],{}]]],exports:{image:{skin:"skins.core.ImageSkin"}},params:{bg:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",bgh:"BG_COLOR_ALPHA"},paramsDefaults:{bg:"color_11",rd:"100%",bgh:"color_11"},css:{"%link":"cursor:pointer;","%image":"z-index:10;","%imageBG":"overflow:hidden;background-color:[bg];[rd]  position:relative !important;top:0;left:0;","%imageBG:hover":"background-color:[bgh];"}},"wysiwyg.viewer.skins.LinkBarNoBGSkin":{react:[["ul","itemsContainer",[],{}]],exports:{imageItem:{skin:"wysiwyg.viewer.skins.displayers.LinkBarItemNoBGSkin",styleGroup:"displayer"}},css:{'%[data-is-responsive~="false"] %itemsContainer':"position:absolute;width:100%;height:100%;white-space:nowrap;",'%[data-is-responsive~="false"][data-state~="mobileView"] %itemsContainer':"position:absolute;width:100%;height:100%;white-space:normal;",'%[data-is-responsive~="true"]':"display:table;",'%[data-is-responsive~="true"] %itemsContainer':"display:-webkit-box;display:-webkit-flex;display:flex;","%itemsContainer > li:last-child":"margin:0 !important;","% a":"display:block;height:100%;"}}};return i})?n.apply(e,s):n)||(i.exports=o)}})});
//# sourceMappingURL=linkBar.min.js.map