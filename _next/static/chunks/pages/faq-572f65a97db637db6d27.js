_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"4Z+Z":function(e,t,n){e.exports={articleWrapper:"article_articleWrapper__3Qg3D",article:"article_article__1MtYz"}},"5Os2":function(e,t,n){e.exports={collapse:"collapse_collapse__1Vu4x"}},"6q6x":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("nKUr"),c=n("rePB"),i=n("TSYQ"),a=n.n(i),o=n("q1tI"),s=n("Ff2n"),l=n("5Os2"),u=n.n(l);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){var t=e.isOpened,n=e.children,c=e.keepChildren,i=void 0===c||c,a=Object(s.a)(e,["isOpened","children","keepChildren"]),l=Object(o.useRef)(null),d=Object(o.useState)(t?"auto":"0px"),p=d[0],j=d[1],O=Object(o.useState)(!1),b=O[0],h=O[1],v=Object(o.useRef)(null);return Object(o.useEffect)((function(){v.current=t})),(0,o.useLayoutEffect)((function(){if(t){var e=l.current;if(e&&null!==v.current){var n=e.scrollHeight;j("".concat(n,"px")),b&&h(!1);var r=function(e){j("auto")};return e.addEventListener("transitionend",r),function(){e.removeEventListener("transitionend",r)}}}else{var c=l.current;if(c&&(!0===v.current||b)){if(!0===v.current){var i=c.scrollHeight,a=c.style.transition;c.style.transition="",j("".concat(i,"px"));var o=requestAnimationFrame((function(){c.style.transition=a,h(!0)}));return function(){cancelAnimationFrame(o)}}if(b){var s=function(e){h(!1)};c.addEventListener("transitionend",s);var u=requestAnimationFrame((function(){j("0px")}));return function(){c.removeEventListener("transitionend",s),cancelAnimationFrame(u)}}}}}),[t,b]),Object(r.jsx)("div",f(f({className:u.a.collapse,ref:l,style:{height:p}},a),{},{children:i||t||b||v.current&&!t&&!b?n:null}))}var j=n("nb7d"),O=n.n(j);function b(e){var t=e.sections,n=e.hx,c=e.isDark,i=void 0!==c&&c,a=e.nRendered,s=e.rdfa,l=a?t.slice(0,a):t,u=Object(o.useState)(null),d=u[0],f=u[1];return Object(o.useEffect)((function(){f(Math.max(l.findIndex((function(e){return e.key===window.location.hash.substring(1)})),0))}),[l]),Object(r.jsx)("div",{vocab:s?"https://schema.org/":void 0,typeof:s?"FAQPage":void 0,children:l.map((function(e,t){var c=e.key,a=e.data.title,o=e.html;return Object(r.jsx)(h,{rdfa:s,id:c,title:a,html:o,hx:n,isDark:i,isOpened:d===t},"".concat(c,"-").concat(d))}))})}function h(e){var t=e.id,n=e.title,i=e.html,s=e.isDark,l=e.isOpened,u=void 0!==l&&l,d=e.hx,f=void 0===d?"h2":d,j=e.rdfa,b=Object(o.useState)(u),h=b[0],v=b[1];return Object(r.jsx)("div",{property:j?"mainEntity":void 0,typeof:j?"Question":void 0,children:Object(r.jsxs)("section",{id:t,className:"mt-2",children:[Object(r.jsx)("header",{className:a()(O.a.header,Object(c.a)({},O.a.dark,s)),property:j?"name":void 0,children:Object(r.jsxs)("a",{className:a()("px-4",Object(c.a)({},O.a.active,h)),href:"#".concat(t),onClick:function(e){e.preventDefault(),v(!h)},children:[Object(r.jsx)(f,{children:n}),Object(r.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})})]})}),Object(r.jsx)(p,{isOpened:h,property:j?"acceptedAnswer":void 0,typeof:j?"Answer":void 0,children:Object(r.jsx)("div",{property:j?"text":void 0,className:"".concat(O.a.content," px-4 pt-4"),dangerouslySetInnerHTML:{__html:i}})})]})})}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=c.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},"l//U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("zIjM")}])},nb7d:function(e,t,n){e.exports={header:"faq-list_header__ZBQl0",dark:"faq-list_dark__1lfEw",active:"faq-list_active__2RyOW",content:"faq-list_content__2zpWB"}},xHx8:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("rePB"),c=n("nKUr"),i=n("Ff2n"),a=n("4Z+Z"),o=n.n(a);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=e.title,n=e.children,r=Object(i.a)(e,["title","children"]);return Object(c.jsx)("article",l(l({className:o.a.articleWrapper},r),{},{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:o.a.article,children:[Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsx)("div",{className:"col-10",children:Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("h1",{className:"mb-4",children:t})})})}),Object(c.jsx)("div",{className:"row justify-content-center",children:n})]})})}))}},zIjM:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n("nKUr"),c=n("Bl7J"),i=n("xHx8"),a=n("6q6x"),o=!0;function s(e){e.data,e.html;var t=e.sections;return Object(r.jsx)(c.a,{title:"Frequently Asked Questions | Global Privacy Control",children:Object(r.jsx)(i.a,{title:"Frequently Asked Questions",children:Object(r.jsx)("div",{className:"col-11 col-lg-8",children:Object(r.jsx)(a.a,{sections:t,rdfa:!0})})})})}}},[["l//U",0,2,1,3]]]);