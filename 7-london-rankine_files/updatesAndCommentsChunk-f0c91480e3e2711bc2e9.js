(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1208:function(e,t,n){"use strict";var r,i,a;i=[],void 0===(a="function"==typeof(r=function(){var e=/\s/,t=/<(\w*)>/g;return function(n,r){n=n||"";var i,a,o,s=0,l=0,c="",p="",d=!1;for("string"==typeof r?r=function(e){for(var n,r=[];null!==(n=t.exec(e));)r.push(n[1]);return 0!==r.length?r:null}(r):Array.isArray(r)||(r=null),i=0,a=n.length;i<a;i++)switch(o=n[i]){case"<":if(d)break;if(" "==n[i+1]){u(o);break}if(0==s){s=1,u(o);break}if(1==s){l++;break}u(o);break;case">":if(l){l--;break}if(d)break;if(1==s){d=s=0,r&&(p+=">",m());break}if(2==s){d=s=0,p="";break}if(3==s&&"-"==n[i-1]&&"-"==n[i-2]){d=s=0,p="";break}u(o);break;case'"':case"'":1==s&&(d==o?d=!1:d||(d=o)),u(o);break;case"!":if(1==s&&"<"==n[i-1]){s=2;break}u(o);break;case"-":if(2==s&&"-"==n[i-1]&&"!"==n[i-2]){s=3;break}u(o);break;case"E":case"e":if(2==s&&"doctype"==n.substr(i-6,7).toLowerCase()){s=1;break}u(o);break;default:u(o)}function u(e){0==s?c+=e:r&&1==s&&(p+=e)}function m(){var t,n,i,a="",o=!1;e:for(t=0,n=p.length;t<n;t++)switch(i=p[t].toLowerCase()){case"<":break;case">":break e;case"/":o=!0;break;default:if(i.match(e)){if(o)break e}else o=!0,a+=i}-1!==r.indexOf(a)&&(c+=p),p=""}return c}})?r.apply(t,i):r)||(e.exports=a)},1290:function(e,t,n){var r=n(1337),i=n(1160),a=n(455),o=n(1339),s=n(1341),l=r([[a("VICTORY"),i],[a("CLOSED"),i],[s,o("active")]]);e.exports={getPetitionStatusForTracking:l}},1291:function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(1290).getPetitionStatusForTracking;e.exports={getPetitionTrackingData:function(e){var t=e.petition,n=e.context,o=e.viewer;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({petition_id:"petition_".concat(t.id),petition_status:a(t.status),own_petition:!(!t.user||!o.user||t.user.id!==o.user.id),context:n},"petition_dashboard"===n?{view_context:"petitions_dashboard",source_location:"petition_dashboard"}:{})}}},1295:function(e,t,n){var r=n(0),i=n(1),a=n(1651),o=n(1656),s=function(e){var t=e.petition,n=e.viewer;return r.createElement(r.Fragment,null,r.createElement(a,{petition:t}),!t.hideSignees&&!t.country.hideSigneesFCM&&r.createElement(o,{petition:t,viewer:n}))};s.propTypes={petition:i.shape({id:i.string,slug:i.string,hideSignees:i.bool,country:i.shape({hideSigneesFCM:i.bool})}).isRequired,viewer:i.shape({loginState:i.string.isRequired}).isRequired},e.exports=s},1336:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=n(0),a=n(35),o=a.BorderBox,s=a.AspectRatioCoverImage,l=n(1),c=n(460),p=function(e){var t=e.aspectRatio,n=e.circle,r=e.url;return i.createElement(o,{border:0,borderRadius:n?2:0,overflow:"hidden"},i.createElement(s,{aspectRatio:t,coverBackgroundImage:"url('".concat(r,"')")}))};p.propTypes={aspectRatio:s.propTypes.aspectRatio.isRequired,circle:l.bool.isRequired,url:l.string.isRequired};e.exports=function(e){return i.createElement(c,r({},e,{readyState:p}))}},1337:function(e,t,n){var r=n(12)("cond",n(1338),n(40));r.placeholder=n(11),e.exports=r},1338:function(e,t,n){var r=n(202),i=n(78),a=n(49),o=n(203);e.exports=function(e){var t=null==e?0:e.length,n=a;return e=t?i(e,(function(e){if("function"!=typeof e[1])throw new TypeError("Expected a function");return[n(e[0]),e[1]]})):[],o((function(n){for(var i=-1;++i<t;){var a=e[i];if(r(a[0],this,n))return r(a[1],this,n)}}))}},1339:function(e,t,n){e.exports=n(1340)},1340:function(e,t,n){var r=n(12)("constant",n(480),n(40));r.placeholder=n(11),e.exports=r},1341:function(e,t,n){e.exports=n(1342)},1342:function(e,t,n){var r=n(12)("stubTrue",n(1343),n(40));r.placeholder=n(11),e.exports=r},1343:function(e,t){e.exports=function(){return!0}},1580:function(e,t,n){var r=n(213);e.exports=function(e,t,n,i){for(var a=e.length,o=i?a:-1;(i?o--:++o<a)&&t(e[o],o,e););return n?r(e,i?0:o,i?o+1:a):r(e,i?o+1:0,i?a:o)}},1581:function(e,t,n){var r=n(0),i=n(1),a=n(439).IntlContext,o=function(e){var t=e.time;return r.createElement(a.Consumer,null,(function(e){return e.formatRelativeTime()(new Date,t)}))};o.propTypes={time:i.instanceOf(Date).isRequired},e.exports=o},1651:function(e,t,n){function r(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query($petitionId: ID!, $first: Int!, $afterNonMilestoneUpdate: ID, $afterMilestoneUpdate: ID) {\n    petition: petitionById(id: $petitionId) {\n      id\n      createdAt\n      slug\n      signatureCount {\n        displayed\n        total\n      }\n      user {\n        id\n        displayName\n        photo {\n          id\n          userSmall {\n            url\n            processing\n          }\n        }\n      }\n      organization {\n        id\n        name\n        photo {\n          id\n          userSmall {\n            url\n            processing\n          }\n        }\n      }\n      nonMilestoneUpdatesConnection: petitionUpdatesConnection(\n        types: [STARTER, DM_RESPONSE, STAFF, FEATURED_NEWS]\n        first: $first\n        after: $afterNonMilestoneUpdate\n      ) {\n        nodes {\n          id\n          createdAt\n          ... on StarterPetitionUpdate {\n            title\n            description\n            ...MediaFields\n          }\n          ... on StaffPetitionUpdate {\n            title\n            description\n            ...MediaFields\n          }\n          ... on FeaturedNewsPetitionUpdate {\n            title\n            ...MediaFields\n          }\n          ... on DmResponsePetitionUpdate {\n            title\n            description\n            ...MediaFields\n            dmResponse {\n              id\n              decisionMaker {\n                id\n                displayName\n                photo {\n                  id\n                  userSmall {\n                    url\n                    processing\n                  }\n                }\n              }\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      milestoneUpdatesConnection: petitionUpdatesConnection(\n        types: [MILESTONE]\n        first: $first\n        after: $afterMilestoneUpdate\n      ) {\n        nodes {\n          id\n          createdAt\n          ... on MilestonePetitionUpdate {\n            signatureCount\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n\n  fragment MediaFields on PetitionUpdateWithMedia {\n    photo {\n      id\n      petitionMedium {\n        url\n        processing\n      }\n    }\n    video {\n      photo {\n        id\n        petitionMedium {\n          url\n          processing\n        }\n      }\n    }\n    embeddedMedia {\n      providerName\n      photoUrl\n      description\n    }\n  }\n"]);return r=function(){return e},e}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=n(0),s=n(28),l=n(50).Query,c=n(1),p=n(61),d=n(68),u=n(281).convert({cap:!1}),m=n(76),f=n(201),h=n(1293),g=n(1652),v=n(1654),b=n(265),E=n(67).Link,y=n(1189),x=n(1167),R=n(1188),N=n(116).I18nPhrase,k=n(439).IntlContext,w=n(479),q=n(1336),M=n(1132),C=n(471),U=n(1346),_=n(1581),S=n(66),T=c.shape({petitionMedium:c.shape({url:c.string,processing:c.bool})}),O=c.shape({userSmall:c.shape({url:c.string,processing:c.bool})}),P=c.shape({id:c.string,title:c.string,description:c.string,signatureCount:c.number,createdAt:c.string,dmResponse:c.shape({id:c.string,decisionMaker:c.shape({displayName:c.string,photo:O})}),photo:T,video:c.shape({photo:T}),embeddedMedia:c.shape({providerName:c.string,photoUrl:c.string,description:c.string})}),I=c.shape({displayName:c.string,photo:O}),A=c.shape({name:c.string,photo:O}),j=c.shape({slug:c.string,createdAt:c.string,user:I,organization:A}),D=function(e){var t=e.user,n=e.organization;return n?n.name:t.displayName},F=function(e){var t=e.user,n=e.organization;return n?o.createElement(U,m("photo.userSmall")(n)):o.createElement(C,m("photo.userSmall")(t))};F.defaultProps={organization:null},F.propTypes={user:I.isRequired,organization:A};var z=function(e){var t=e.photo,n=e.children,r=e.createdAt;return o.createElement("div",{className:"media-profile media-profile-base-height mts xs-mtxxs phm xs-phs mbm xs-mbs type-s"},o.createElement("div",{className:"media-profile-img"},t),o.createElement("div",{className:"media-profile-body"},o.createElement("strong",{className:"type-ellipsis"},n),o.createElement("div",{className:"type-weak type-ellipsis"},o.createElement(_,{time:new Date(r)}))))};z.propTypes={photo:c.node.isRequired,children:c.node.isRequired,createdAt:c.string.isRequired};var $=function(e){var t=e.updateUrl,n=e.children;return o.createElement(E,{to:t,className:"link-block border-a border-rounded bg-brighter border-none-a-xs hide-overflow"},n)};$.propTypes={updateUrl:c.string.isRequired,children:c.node.isRequired};var H=function(e){var t=e.update,n=e.fallback,r=function(e){return e.video?{url:e.video.photo.petitionMedium.url,processing:e.video.photo.petitionMedium.processing}:e.photo?{url:e.photo.petitionMedium.url,processing:e.photo.petitionMedium.processing}:e.embeddedMedia?{url:e.embeddedMedia.photoUrl,processing:!1}:null}(t);return r?o.createElement(q,a({aspectRatio:"16:9"},r)):n};H.defaultProps={fallback:null},H.propTypes={update:P.isRequired,fallback:c.node};var B=function(e){var t=e.name,n=e.children;if("a"===t)return o.createElement("span",null,x(n))},L=function(e){var t=e.title,n=e.description,r=y(n,{replace:B});return o.createElement("div",{className:"phm ptm xs-phs xs-pts"},o.createElement("div",{className:"hidden-xs"},o.createElement(R,{height:110,fixedHeight:!0},o.createElement("span",{className:"h4 link link-stealth mtn"},t),o.createElement("div",{className:"rte mtxs"},r))),o.createElement("div",{className:"visible-xs"},o.createElement(R,{height:140,fixedHeight:!0},o.createElement("span",{className:"h4 link link-stealth mtn"},t),o.createElement("div",{className:"rte mtxs"},r))))};L.propTypes={title:c.node.isRequired,description:c.node.isRequired};var Q=function(e){var t=e.children,n=e.relativeTime;return o.createElement("div",{className:"box box-basic type-s border-none-a-xs bg-default xs-bg-brighter phm xs-phs"},o.createElement("div",{className:"media mvn"},o.createElement("div",{className:"media-img-after txt-r"},n),o.createElement("div",{className:"media-body"},t)))};Q.propTypes={children:c.node.isRequired,relativeTime:c.node.isRequired};var W=function(e){var t=e.petition;return o.createElement(Q,{relativeTime:o.createElement(_,{time:new Date(t.createdAt)})},o.createElement(N,{phrase:"components.updates_feed.created_this_petition",petition_creator:D(t)}))};W.propTypes={petition:j.isRequired};var J=function(e){var t=e.update,n=t.createdAt,r=t.signatureCount;return o.createElement(Q,{relativeTime:o.createElement(_,{time:new Date(n)})},o.createElement(k.Consumer,null,(function(e){return o.createElement(N,{phrase:"components.updates_feed.signature_milestone_title",num:e.formatNumber()(r),count:r})})))};J.propTypes={update:P.isRequired};var V=function(e){var t=e.petition,n=e.update;return o.createElement($,{updateUrl:S.petitionUpdate({petition:t,update:n})},o.createElement(H,{update:n}),o.createElement(L,{title:n.title,description:n.description}),o.createElement(z,{photo:o.createElement(F,t),createdAt:n.createdAt},D(t)))};V.propTypes={petition:j.isRequired,update:P.isRequired};var Y=function(e){var t=e.petition,n=e.update;return o.createElement($,{updateUrl:S.petitionUpdate({petition:t,update:n})},o.createElement(H,{update:n}),o.createElement(L,{title:n.title,description:n.description}),o.createElement(z,{photo:o.createElement(M,{name:"c-alt",size:"xl",paddingLeft:"xs",branded:!0}),createdAt:n.createdAt},o.createElement(N,{phrase:"pages.sponsors.change_team"})))};Y.propTypes={petition:j.isRequired,update:P.isRequired};var G=function(e){var t=e.petition,n=e.update;return o.createElement($,{updateUrl:S.petitionResponseShow({petition:t,response:n.dmResponse})},o.createElement("div",{className:"type-s pts mhs pbs"},o.createElement(N,{phrase:"components.updates_feed.decision_maker_post_title"})),o.createElement(H,{update:n,fallback:o.createElement("hr",{className:"mvn"})}),o.createElement(L,{title:n.title,description:n.description}),o.createElement(z,{photo:o.createElement(C,m("photo.userSmall")(n.dmResponse.decisionMaker)),createdAt:n.createdAt},n.dmResponse.decisionMaker.displayName))};G.propTypes={petition:j.isRequired,update:P.isRequired};var K=function(e){var t=e.petition,n=e.update;return o.createElement($,{updateUrl:S.petitionUpdate({petition:t,update:n})},o.createElement(H,{update:n}),o.createElement(L,{title:n.title,description:n.embeddedMedia.description}),o.createElement(z,{photo:o.createElement("div",{className:"symbol symbol-news symbol-xxl type-weak","aria-hidden":"true"}),createdAt:n.createdAt},n.embeddedMedia.providerName))};K.propTypes={petition:j.isRequired,update:P.isRequired};var X={MilestonePetitionUpdate:J,StarterPetitionUpdate:V,StaffPetitionUpdate:Y,DmResponsePetitionUpdate:G,FeaturedNewsPetitionUpdate:K},Z=function(e){var t=e.petition,n=e.update,r=X[n.__typename];return o.createElement("div",{className:"mvm xs-mvs"},o.createElement(r,{petition:t,update:n}))};Z.propTypes={petition:j.isRequired,update:P.isRequired};var ee=function(e){var t=e.onRequestMoreUpdates;return o.createElement("button",{onClick:t,className:"display-block btn-full txt-l box box-basic type-s pbxxs mvn phm xs-phs bg-brighter border-none-a-xs",style:{cursor:"pointer"}},o.createElement("div",{className:"arrange"},o.createElement("div",{className:"arrange-fill"},o.createElement("strong",null,o.createElement(N,{phrase:"components.updates_feed.view_more_updates_button"}))),o.createElement("div",{className:"arrange-fit"},o.createElement(M,{name:"bracket-down",paddingBottom:"xxs",marginRight:"n",size:"inherit"}))))};ee.propTypes={onRequestMoreUpdates:c.func.isRequired};var te=function(e){var t=e.petition,n=e.canShowMoreUpdates,r=e.onRequestMoreUpdates;return n?o.createElement(ee,{onRequestMoreUpdates:r}):o.createElement(W,{petition:t})};te.propTypes={petition:j.isRequired,canShowMoreUpdates:c.bool.isRequired,onRequestMoreUpdates:c.func.isRequired};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.__typename;return"MilestonePetitionUpdate"===t},re=u((function(e,t,n){return t>0&&ne(e)&&ne(n[t-1])})),ie=function(e){var t=e.signatureCount,n=e.nonMilestoneUpdatesConnection,r=e.milestoneUpdatesConnection;return p(h("createdAt","desc"),u((function(e){return ne(e)&&(t.total!==t.displayed||e.signatureCount>t.displayed)})),(function(e){return b(n.nodes)?e:g(ne)(e)}),(function(e){return n.pageInfo.hasNextPage?v(ne)(e):e}),re)([].concat(i(n.nodes),i(r.nodes)))},ae=s(r()),oe=function(e){var t=e.petition.id;return o.createElement(o.Fragment,null,o.createElement("h3",{className:"mtn mbxl xs-mbl"},o.createElement(N,{phrase:"pages.petition_update.update_feed_title"})),o.createElement(l,{query:ae,variables:{petitionId:t,first:1},ssr:!1,notifyOnNetworkStatusChange:!0},(function(e){var t=e.loading,n=e.data,r=e.fetchMore,a=!b(m("petition.nonMilestoneUpdatesConnection")(n));return t&&!a?o.createElement(w,null):o.createElement(o.Fragment,null,p(ie,d((function(e){return o.createElement(Z,{petition:n.petition,update:e,key:e.id})})))(n.petition),t?o.createElement(w,null):o.createElement(te,{petition:n.petition,canShowMoreUpdates:n.petition.nonMilestoneUpdatesConnection.pageInfo.hasNextPage,onRequestMoreUpdates:function(){return r({variables:{first:10,afterNonMilestoneUpdate:n.petition.nonMilestoneUpdatesConnection.pageInfo.endCursor,afterMilestoneUpdate:n.petition.milestoneUpdatesConnection.pageInfo.endCursor},updateQuery:function(e,t){var n=t.fetchMoreResult;return p(f("petition.nonMilestoneUpdatesConnection.nodes",[].concat(i(e.petition.nonMilestoneUpdatesConnection.nodes),i(n.petition.nonMilestoneUpdatesConnection.nodes))),(function(t){return b(n.petition.milestoneUpdatesConnection.nodes)?f("petition.milestoneUpdatesConnection",e.petition.milestoneUpdatesConnection)(t):f("petition.milestoneUpdatesConnection.nodes",[].concat(i(e.petition.milestoneUpdatesConnection.nodes),i(n.petition.milestoneUpdatesConnection.nodes)))(t)}))(n)}})}}))})))};oe.propTypes={petition:c.shape({id:c.string}).isRequired},e.exports=oe},1652:function(e,t,n){var r=n(12)("dropWhile",n(1653));r.placeholder=n(11),e.exports=r},1653:function(e,t,n){var r=n(49),i=n(1580);e.exports=function(e,t){return e&&e.length?i(e,r(t,3),!0):[]}},1654:function(e,t,n){var r=n(12)("dropRightWhile",n(1655));r.placeholder=n(11),e.exports=r},1655:function(e,t,n){var r=n(49),i=n(1580);e.exports=function(e,t){return e&&e.length?i(e,r(t,3),!0,!0):[]}},1656:function(e,t,n){function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query($petitionId: ID!, $first: Int!, $after: ID) {\n    petition: petitionById(id: $petitionId) {\n      id\n      commentsConnection(first: $first, after: $after, sortBy: POPULAR) {\n        nodes {\n          id\n          comment\n          createdAt\n          likes\n          user {\n            id\n            displayName\n            photo {\n              id\n              userSmall {\n                url\n                processing\n              }\n            }\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n"]);return i=function(){return e},e}var a=n(0),o=n(1),s=n(68).convert({cap:!1}),l=n(76),c=n(1209),p=n(265),d=n(201),u=n(28),m=n(50).Query,f=n(67).Link,h=n(1208),g=n(116).I18nPhrase,v=n(66),b=n(471),E=n(1581),y=n(1145),x=n(1188),R=n(1344),N=n(1132),k=n(439).IntlContext,w=n(479),q=n(152).useEventTracker,M=n(1291).getPetitionTrackingData,C=o.shape({id:o.string,comment:o.string,createdAt:o.string,likes:o.number,user:o.shape({id:o.string,displayName:o.string,photo:o.shape({id:o.string,userSmall:o.shape({url:o.string,processing:o.bool})})})}),U=o.shape({slug:o.string}),_=function(e){var t=e.initialHeight,n=e.fixedHeight,r=e.readMore,i=e.children;return a.createElement(y,null,(function(e){var o=e.enabled,s=e.enable;return o?i:a.createElement(x,{height:t,fixedHeight:n,readMore:r(s)},i)}))};_.propTypes={initialHeight:o.number.isRequired,fixedHeight:o.bool,readMore:o.func,children:o.node.isRequired},_.defaultProps={fixedHeight:null,readMore:function(e){return a.createElement(a.Fragment,null,"…"," ",a.createElement("button",{className:"link type-weak",onClick:function(t){t.preventDefault(),e()}},a.createElement(g,{phrase:"pages.common.read_more"})))}};var S=function(e){var t,n=e.petition,r=e.comment,i=e.showSeparator,o=v.petitionCommentShow(n,r);return a.createElement("div",{className:"mtm xs-mvs mbxl bg-brighter border-rounded xs-pas"},a.createElement("div",{className:"media"},a.createElement("div",{className:"media-img mrs"},a.createElement(f,{className:"link-block",to:o},a.createElement("div",{className:"media-profile-base-height"},a.createElement("div",{className:"media-profile-img"},a.createElement(b,{url:l("user.photo.userSmall.url")(r),processing:l("user.photo.userSmall.processing")(r)}))))),a.createElement("div",{className:"media-body"},a.createElement("div",{className:"arrange"},a.createElement("div",{className:"arrange-fill"},a.createElement(f,{className:"link-block",to:o},a.createElement("div",{className:"type-s"},a.createElement("strong",null,r.user.displayName),a.createElement("span",{className:"type-weak"},a.createElement("span",{className:"mhxxs"},"·"),a.createElement(E,{time:new Date(r.createdAt)}))),a.createElement("div",{className:"mvxs"},a.createElement(_,{initialHeight:120},a.createElement("div",{dangerouslySetInnerHTML:{__html:(t=h(r.comment),c(t)?t.replace(/(\r\n|\n\r|\r|\n)/g,"<br />"):t)}})))),a.createElement("span",{className:"type-s"},a.createElement(f,{className:"link link-stealth type-faded",to:v.loginOrJoin({user_flow:"like_comment",redirect_to:v.petitionShow(n)})},a.createElement("span",{style:{position:"relative",top:-1}},a.createElement(N,{name:"heart-outline",size:"inherit"})),a.createElement(k.Consumer,null,(function(e){return e.formatNumber()(r.likes)}))),a.createElement("span",{className:"mhxs phxxxs"},"·"),a.createElement("div",{className:"display-inline-block"},a.createElement(R,{linkType:"stealth"},a.createElement(g,{phrase:"components.comments.report"}))))),a.createElement("div",{className:"arrange-fit position-relative",style:{top:-8}})),i&&a.createElement("hr",{className:"mtxl hidden-xs"}))))};S.propTypes={petition:U.isRequired,comment:C.isRequired,showSeparator:o.bool.isRequired};var T=function(e){var t=e.onRequestMoreComments;return a.createElement("button",{onClick:t,className:"display-block btn-full txt-l box box-basic type-s pbxxs mvn phm xs-phs bg-brighter border-none-a-xs",style:{cursor:"pointer"}},a.createElement("div",{className:"arrange"},a.createElement("div",{className:"arrange-fill"},a.createElement("strong",null,a.createElement(g,{phrase:"components.comments.view_all_reasons"}))),a.createElement("div",{className:"arrange-fit"},a.createElement(N,{name:"bracket-down",paddingBottom:"xxs",marginRight:"n",size:"inherit"}))))};T.propTypes={onRequestMoreComments:o.func.isRequired};var O=function(e){var t=e.petition,n=e.viewer,r=q();return a.createElement(f,{to:v.petitionCommentsIndex(t),className:"link-block btn-full txt-l box box-basic type-s pbxxs mvn phm xs-phs bg-brighter border-none-a-xs",onClick:function(){return r("click_view_more_comments",M({petition:t,context:"go_to_RFS_page",viewer:n}))}},a.createElement("div",{className:"arrange"},a.createElement("div",{className:"arrange-fill"},a.createElement("strong",null,a.createElement(g,{phrase:"components.comments.view_all_reasons"}))),a.createElement("div",{className:"arrange-fit"},a.createElement(N,{name:"bracket-right",paddingBottom:"xxs",marginRight:"n",size:"inherit"}))))};O.propTypes={petition:U.isRequired,viewer:o.shape({loginState:o.string.isRequired}).isRequired};var P=function(e){var t=e.loadCommentsInline,n=e.onRequestMoreComments,r=e.petition,i=e.viewer;return t?a.createElement(T,{onRequestMoreComments:n}):a.createElement(O,{petition:r,viewer:i})};P.propTypes={loadCommentsInline:o.bool.isRequired,onRequestMoreComments:o.func.isRequired,petition:U.isRequired,viewer:o.shape({loginState:o.string.isRequired}).isRequired};var I=u(i()),A=function(e){var t=e.petition,n=e.viewer,i=q();return a.createElement(a.Fragment,null,a.createElement("h3",{className:"mtxxxl mbxl xs-mbl"},a.createElement(g,{phrase:"components.comments.reasons_for_signing"})),a.createElement(m,{query:I,variables:{petitionId:t.id,first:2},ssr:!1,notifyOnNetworkStatusChange:!0},(function(e){var o=e.loading,c=e.data,u=e.fetchMore,m=l("petition.commentsConnection.nodes")(c),f=!p(m);if(o&&!f)return a.createElement(w,null);if(!f)return a.createElement("p",null,a.createElement(g,{phrase:"components.comments.sign_this_petition"}));var h=c.petition.commentsConnection.pageInfo;return a.createElement(a.Fragment,null,s((function(e,n,r){var i=r.length;return a.createElement(S,{key:e.id,petition:t,comment:e,showSeparator:n<i-1})}))(m),o?a.createElement(w,null):a.createElement(P,{petition:t,viewer:n,loadCommentsInline:h.hasNextPage&&m.length<=2,onRequestMoreComments:function(){return i("click_view_more_comments",M({petition:t,context:"expand_on_show_page",viewer:n})),u({variables:{after:h.endCursor,first:8},updateQuery:function(e,t){var n=t.fetchMoreResult;return d("petition.commentsConnection.nodes",[].concat(r(e.petition.commentsConnection.nodes),r(n.petition.commentsConnection.nodes)))(n)}})}}))})))};A.propTypes={petition:U.isRequired,viewer:o.shape({loginState:o.string.isRequired}).isRequired},e.exports=A}}]);
//# sourceMappingURL=updatesAndCommentsChunk-f0c91480e3e2711bc2e9.js.map