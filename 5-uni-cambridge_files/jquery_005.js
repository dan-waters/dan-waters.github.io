!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):"undefined"!=typeof module&&module.exports?module.exports=factory(require("jquery")):factory(jQuery)}(function($){var _previousResizeWidth=-1,_updateTimeout=-1,_parse=function(value){return parseFloat(value)||0},_rows=function(elements){var tolerance=1,$elements=$(elements),lastTop=null,rows=[];return $elements.each(function(){var $that=$(this),top=$that.offset().top-_parse($that.css("margin-top")),lastRow=rows.length>0?rows[rows.length-1]:null;null===lastRow?rows.push($that):Math.floor(Math.abs(lastTop-top))<=tolerance?rows[rows.length-1]=lastRow.add($that):rows.push($that),lastTop=top}),rows},_parseOptions=function(options){var opts={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof options?$.extend(opts,options):("boolean"==typeof options?opts.byRow=options:"remove"===options&&(opts.remove=!0),opts)},matchHeight=$.fn.matchHeight=function(options){var opts=_parseOptions(options);if(opts.remove){var that=this;return this.css(opts.property,""),$.each(matchHeight._groups,function(key,group){group.elements=group.elements.not(that)}),this}return this.length<=1&&!opts.target?this:(matchHeight._groups.push({elements:this,options:opts}),matchHeight._apply(this,opts),this)};matchHeight.version="master",matchHeight._groups=[],matchHeight._throttle=80,matchHeight._maintainScroll=!1,matchHeight._beforeUpdate=null,matchHeight._afterUpdate=null,matchHeight._rows=_rows,matchHeight._parse=_parse,matchHeight._parseOptions=_parseOptions,matchHeight._apply=function(elements,options){var opts=_parseOptions(options),$elements=$(elements),rows=[$elements],scrollTop=$(window).scrollTop(),htmlHeight=$("html").outerHeight(!0),$hiddenParents=$elements.parents().filter(":hidden");return $hiddenParents.each(function(){var $that=$(this);$that.data("style-cache",$that.attr("style"))}),$hiddenParents.css("display","block"),opts.byRow&&!opts.target&&($elements.each(function(){var $that=$(this),display=$that.css("display");"inline-block"!==display&&"flex"!==display&&"inline-flex"!==display&&(display="block"),$that.data("style-cache",$that.attr("style")),$that.css({display:display,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),rows=_rows($elements),$elements.each(function(){var $that=$(this);$that.attr("style",$that.data("style-cache")||"")})),$.each(rows,function(key,row){var $row=$(row),targetHeight=0;if(opts.target)targetHeight=opts.target.outerHeight(!1);else{if(opts.byRow&&$row.length<=1)return void $row.css(opts.property,"");$row.each(function(){var $that=$(this),display=$that.css("display");"inline-block"!==display&&"flex"!==display&&"inline-flex"!==display&&(display="block");var css={display:display};css[opts.property]="",$that.css(css),$that.outerHeight(!1)>targetHeight&&(targetHeight=$that.outerHeight(!1)),$that.css("display","")})}$row.each(function(){var $that=$(this),verticalPadding=0;opts.target&&$that.is(opts.target)||("border-box"!==$that.css("box-sizing")&&(verticalPadding+=_parse($that.css("border-top-width"))+_parse($that.css("border-bottom-width")),verticalPadding+=_parse($that.css("padding-top"))+_parse($that.css("padding-bottom"))),$that.css(opts.property,targetHeight-verticalPadding+"px"))})}),$hiddenParents.each(function(){var $that=$(this);$that.attr("style",$that.data("style-cache")||null)}),matchHeight._maintainScroll&&$(window).scrollTop(scrollTop/htmlHeight*$("html").outerHeight(!0)),this},matchHeight._applyDataApi=function(){var groups={};$("[data-match-height], [data-mh]").each(function(){var $this=$(this),groupId=$this.attr("data-mh")||$this.attr("data-match-height");groupId in groups?groups[groupId]=groups[groupId].add($this):groups[groupId]=$this}),$.each(groups,function(){this.matchHeight(!0)})};var _update=function(event){matchHeight._beforeUpdate&&matchHeight._beforeUpdate(event,matchHeight._groups),$.each(matchHeight._groups,function(){matchHeight._apply(this.elements,this.options)}),matchHeight._afterUpdate&&matchHeight._afterUpdate(event,matchHeight._groups)};matchHeight._update=function(throttle,event){if(event&&"resize"===event.type){var windowWidth=$(window).width();if(windowWidth===_previousResizeWidth)return;_previousResizeWidth=windowWidth}throttle?_updateTimeout===-1&&(_updateTimeout=setTimeout(function(){_update(event),_updateTimeout=-1},matchHeight._throttle)):_update(event)},$(matchHeight._applyDataApi),$(window).bind("load",function(event){matchHeight._update(!1,event)}),$(window).bind("resize orientationchange",function(event){matchHeight._update(!0,event)})});