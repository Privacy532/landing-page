(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=s.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},1621:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),s=n(6156),a=n(4184),i=n.n(a),c=n(7294),o=n(7375),l=n(4257),d=n.n(l);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=e.isOpened,n=e.children,s=e.keepChildren,a=void 0===s||s,i=(0,o.Z)(e,["isOpened","children","keepChildren"]),l=(0,c.useRef)(null),u=(0,c.useState)(t?"auto":"0px"),m=u[0],v=u[1],x=(0,c.useState)(!1),f=x[0],p=x[1],j=(0,c.useRef)(null);return(0,c.useEffect)((function(){j.current=t})),(0,c.useLayoutEffect)((function(){if(t){var e=l.current;if(e&&null!==j.current){var n=e.scrollHeight;v("".concat(n,"px")),f&&p(!1);var r=function(e){v("auto")};return e.addEventListener("transitionend",r),function(){e.removeEventListener("transitionend",r)}}}else{var s=l.current;if(s&&(!0===j.current||f)){if(!0===j.current){var a=s.scrollHeight,i=s.style.transition;s.style.transition="",v("".concat(a,"px"));var c=requestAnimationFrame((function(){s.style.transition=i,p(!0)}));return function(){cancelAnimationFrame(c)}}if(f){var o=function(e){p(!1)};s.addEventListener("transitionend",o);var d=requestAnimationFrame((function(){v("0px")}));return function(){s.removeEventListener("transitionend",o),cancelAnimationFrame(d)}}}}}),[t,f]),(0,r.jsx)("div",h(h({className:d().collapse,ref:l,style:{height:m}},i),{},{children:a||t||f||j.current&&!t&&!f?n:null}))}var v=n(9101),x=n.n(v);function f(e){var t=e.sections,n=e.hx,s=e.isDark,a=void 0!==s&&s,i=e.nRendered,o=e.rdfa,l=i?t.slice(0,i):t,d=(0,c.useState)(null),u=d[0],h=d[1];return(0,c.useEffect)((function(){h(Math.max(l.findIndex((function(e){return e.key===window.location.hash.substring(1)})),0))}),[l]),(0,r.jsx)("div",{vocab:o?"https://schema.org/":void 0,typeof:o?"FAQPage":void 0,children:l.map((function(e,t){var s=e.key,i=e.data.title,c=e.html;return(0,r.jsx)(p,{rdfa:o,id:s,title:i,html:c,hx:n,isDark:a,isOpened:u===t},"".concat(s,"-").concat(u))}))})}function p(e){var t=e.id,n=e.title,a=e.html,o=e.isDark,l=e.isOpened,d=void 0!==l&&l,u=e.hx,h=void 0===u?"h2":u,v=e.rdfa,f=(0,c.useState)(d),p=f[0],j=f[1];return(0,r.jsx)("div",{property:v?"mainEntity":void 0,typeof:v?"Question":void 0,children:(0,r.jsxs)("section",{id:t,className:"mt-2",children:[(0,r.jsx)("header",{className:i()(x().header,(0,s.Z)({},x().dark,o)),property:v?"name":void 0,children:(0,r.jsxs)("a",{className:i()("px-4",(0,s.Z)({},x().active,p)),href:"#".concat(t),onClick:function(e){e.preventDefault(),j(!p)},children:[(0,r.jsx)(h,{children:n}),(0,r.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})})]})}),(0,r.jsx)(m,{isOpened:p,property:v?"acceptedAnswer":void 0,typeof:v?"Answer":void 0,children:(0,r.jsx)("div",{property:v?"text":void 0,className:"".concat(x().content," px-4 pt-4"),dangerouslySetInnerHTML:{__html:a}})})]})})}},6220:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),s=n(2409),a=n.n(s);function i(e){var t=e.entries.filter((function(e){return null!=e.isFeaturedIndex})).slice(0,4).sort((function(e,t){return e.isFeaturedIndex-t.isFeaturedIndex}));return(0,r.jsx)("ul",{className:a().list,children:t.map((function(e){var t=e.contentUrl,n=e.source,s=e.title,a=e.img;return(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:t,children:[(0,r.jsx)("span",{children:(0,r.jsx)("img",{src:"".concat("").concat(a),alt:"logo for ".concat(n)})}),(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{children:s}),(0,r.jsx)("span",{children:n})]})]})},t)}))})}},1788:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},default:function(){return Z}});var r=n(5893),s=n(9003),a=n(1664),i=n(106),c=n(6156),o=n(7375),l=n(7294),d=n(4184),u=n.n(d),h=n(8779),m=n.n(h);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=(0,l.forwardRef)((function(e,t){var n,s=e.as,a=void 0===s?"button":s,i=e.children,l=e.className,d=e.variant,h=(0,o.Z)(e,["as","children","className","variant"]);return(0,r.jsx)(a,x(x({ref:t,className:u()(l,m().button,(n={},(0,c.Z)(n,m().primary,"primary"===d||"primaryInverted"===d),(0,c.Z)(n,m().primaryInverted,"primaryInverted"===d),(0,c.Z)(n,m().secondary,"secondary"===d||"secondaryInverted"===d),(0,c.Z)(n,m().secondaryInverted,"secondaryInverted"===d),n))},h),{},{children:i}))})),p=n(1621),j=n(6220),b=n(2695),g=n(5887),_=n.n(g),y=l.createContext(null);function N(e){var t=e.id,n=e.className,s=e.step,a=e.onChange,i=e.children,o=e.offset,d=void 0===o?0:o,h=e.threshold,m=void 0===h?.05:h,v=(0,l.useRef)(),x=(0,l.useRef)(!1),f=(0,l.useRef)(s);(0,l.useEffect)((function(){f.current=s}));var p=l.Children.count(i),j=(0,l.useState)(null),b=j[0],g=j[1],N=(0,l.useState)(0),P=N[0],T=N[1],k=(0,l.useState)(!1),O=k[0],D=k[1],E=(0,l.useState)(0),L=E[0],S=E[1];(0,l.useEffect)((function(){var e=function(){var e=v.current.offsetWidth;e!==L&&S(e)};return v.current&&e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[v,L]),(0,l.useEffect)((function(){function e(e){switch(e.key){case"ArrowLeft":s>0&&a(s-1);break;case"ArrowRight":s<p-1&&a(s+1)}}return window.addEventListener("keydown",e,!1),function(){window.removeEventListener("keydown",e,!1)}}),[p,a,s]);var G=(0,l.useCallback)((function(e){e.touches&&e.touches.length>1?event.preventDefault():p<=1||(g(w(e)),D(!0),x.current=!0)}),[p]),I=(0,l.useCallback)((function(e){if(e.touches&&e.touches.length>1)event.preventDefault();else if(O){var t=w(e)-b;if(0===s){if(t>0)return}else if(s===p-1&&t<0)return;T(t)}}),[O,b,p,s]),A=(0,l.useCallback)((function(e){if(O){var t=w(e);if(!Number.isNaN(t)){var n=t-b,r=n>0?s-1:s+1,i=Math.abs(n)/L;r>=0&&r<p&&i>m&&a(r)}D(!1),g(null),T(0)}}),[O,s,b,L,a,p,m]);return(0,l.useEffect)((function(){return window.addEventListener("mouseup",A,!1),window.addEventListener("touchend",A,!1),function(){window.removeEventListener("mouseup",A,!1),window.removeEventListener("touchend",A,!1)}}),[A]),(0,l.useEffect)((function(){function e(e){O&&e.preventDefault()}return window.addEventListener("touchmove",e,{passive:!1}),function(){window.removeEventListener("touchmove",e,{passive:!1})}}),[O]),(0,r.jsx)(y.Provider,{value:100*(1-2*d)/p,children:(0,r.jsx)("div",{id:t,className:u()(n,_().wrapper),ref:v,children:(0,r.jsx)("div",{className:u()(_().slider,(0,c.Z)({},_().noTransition,O||!x.current&&f.current===s)),style:{transform:"translate(".concat(C(s,L,d)+P,"px)"),width:"".concat(100*p,"%")},onTouchStart:G,onTouchMove:I,onTouchEnd:A,onMouseDown:G,onMouseMove:I,onMouseUp:A,children:i})})})}function w(e){var t;return e&&e&&(e=e.changedTouches?e.changedTouches[0]:e)&&(t=e.clientX),t}function C(e,t,n){return-1*(e*((1-2*n)*t)-n*t)}function P(e){var t=e.children,n=(0,l.useContext)(y);return(0,r.jsx)("div",{className:_().slide,style:{width:"".concat(n,"%")},children:t})}var T=n(3318),k=n.n(T);function O(e){var t=e.initialStep,n=void 0===t?0:t,s=e.items,a=(0,l.useState)(n),i=a[0],c=a[1];return(0,r.jsxs)("div",{className:k().carousel,children:[(0,r.jsx)(N,{step:i,onChange:c,children:s.map((function(e){return(0,r.jsx)(P,{children:(0,r.jsxs)("figure",{children:[(0,r.jsx)("blockquote",{cite:e.url,children:(0,r.jsxs)("p",{className:" ".concat(k().sectionTitle),children:['"',e.quote,'"']})}),(0,r.jsx)("figcaption",{children:(0,r.jsxs)("a",{href:e.url,children:[(0,r.jsx)("img",{className:"rounded-circle py-5",src:e.img}),(0,r.jsx)("p",{className:"mb-0",children:(0,r.jsx)("strong",{children:e.name})}),(0,r.jsx)("p",{children:(0,r.jsx)("i",{children:e.position})})]})})]})},e.url)}))}),(0,r.jsx)("div",{className:k().controls,children:(0,r.jsx)("ul",{children:s.map((function(e,t){return(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:i===t?k().active:void 0,onClick:function(){return c(t)},children:(0,r.jsxs)(b.Z,{children:["Got to slide ",t]})})},e.url)}))})})]})}var D=n(5126),E=n.n(D),L=n(7881),S=n.n(L);function G(e){var t=e.entries.filter((function(e){return null!=e.isFeaturedIndex})).sort((function(e,t){return e.isFeaturedIndex-t.isFeaturedIndex}));return(0,r.jsx)("div",{className:"orgs__list row row-cols-2 row-cols-md-4 align-items-stretch justify-content-center",children:t.map((function(e){var t=e.url,n=e.img,s=e.name;return(0,r.jsx)("div",{className:"col text-center",children:(0,r.jsx)("a",{href:t,className:S().orgLogo,children:(0,r.jsx)("img",{src:"".concat("").concat(n),alt:"".concat(s," logo")})})},s)}))})}function I(e){var t=e.pressData,n=e.faqData,s=e.orgsData,c=e.downloadsData,o=e.testimonialsData;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{className:E().heroBackground,children:[(0,r.jsx)("header",{className:"container",children:(0,r.jsx)(i.Z,{isLarge:!0})}),(0,r.jsx)("div",{className:E().hero,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-12 col-lg-7",children:[(0,r.jsx)("h1",{className:E().heroTitle,children:"Take control of your privacy."}),(0,r.jsx)("p",{className:E().heroText,children:"Online privacy should be accessible to everyone. It starts with a simpler way to exercise your rights."}),(0,r.jsxs)("div",{className:"row ".concat(E().heroBtns),children:[(0,r.jsx)("div",{className:"col-sm-12 col-md-6 mb-5 mb-lg-0",children:(0,r.jsx)(a.default,{href:"/#download",passHref:!0,children:(0,r.jsx)(f,{as:"a",variant:"primaryInverted",className:"d-block",children:"Get Started"})})}),(0,r.jsx)("div",{className:"col-sm-12 col-md-6",children:(0,r.jsx)(a.default,{href:"/#contact",passHref:!0,children:(0,r.jsx)(f,{as:"a",variant:"secondaryInverted",className:"d-block",children:"Get Involved"})})})]})]}),(0,r.jsx)("div",{className:"d-none d-lg-block col-lg-5",children:(0,r.jsx)("img",{src:"".concat("","/img/person-with-computer.svg"),id:"hero-illustration",className:"ml-5 img-fluid",alt:"man sitting at a computer"})})]})})})]}),(0,r.jsx)("section",{className:"".concat(E().news," py-5 px-3 px-sm-4"),children:(0,r.jsx)("div",{className:E().newsAnnouncement,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row justify-content-center align-items-center",children:[(0,r.jsx)("span",{className:"p-3",children:(0,r.jsx)("svg",{width:"39",height:"28",viewBox:"0 0 39 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.556 0.18225C22.8823 -0.0216922 23.2902 -0.0624807 23.6165 0.100673C23.9428 0.304616 24.1468 0.630924 24.1876 0.99802V25.2264C24.1876 25.5935 23.9428 25.9606 23.6165 26.1237C23.4942 26.2053 23.331 26.2461 23.1679 26.2461C22.9639 26.2461 22.7192 26.1645 22.556 26.0422L12.7668 18.6594H10.034L11.4616 26.8171C11.5431 27.1027 11.4616 27.3882 11.2576 27.6329C11.0537 27.8776 10.7682 28 10.4826 28H6.56695C6.07748 28 5.6696 27.6329 5.58802 27.1434L4.11964 18.6594H2.93677C1.30523 18.6594 0 17.3542 0 15.7227V10.5017C0 8.8702 1.30523 7.56497 2.93677 7.56497H12.7668L22.556 0.18225ZM33.9359 2.34379C33.2833 1.73197 32.2636 1.81354 31.6517 2.46616C31.0399 3.11878 31.1215 4.13849 31.7741 4.75031C34.1806 6.87132 35.5266 9.93045 35.5266 13.1527C35.5266 16.3342 34.1398 19.3934 31.7741 21.5552C31.1215 22.167 31.0399 23.1867 31.6517 23.8393C31.978 24.2064 32.4267 24.3696 32.8346 24.3696C33.2017 24.3696 33.6096 24.2472 33.8951 23.9617C36.9542 21.2289 38.7081 17.2724 38.7081 13.1527C38.7489 9.0739 36.995 5.11741 33.9359 2.34379ZM30.2231 6.95259C29.5705 6.34077 28.5507 6.34077 27.9389 6.99338C27.3271 7.646 27.3271 8.66571 27.9797 9.27754C29.0402 10.2972 29.6112 11.6433 29.6112 13.1117C29.6112 14.58 29.0402 15.9261 27.9797 16.9458C27.3271 17.5576 27.3271 18.5773 27.9389 19.2299C28.2652 19.5562 28.6731 19.7194 29.1218 19.7194C29.5297 19.7194 29.9376 19.5562 30.2231 19.2707C31.9362 17.6392 32.8335 15.4366 32.8335 13.1117C32.8335 10.7867 31.8954 8.58413 30.2231 6.95259Z",fill:"white"})})}),(0,r.jsxs)("p",{className:"mb-0 py-3 text-center",children:[(0,r.jsx)(a.default,{href:"/press-release/20210128",children:(0,r.jsx)("a",{children:"Read the Latest Press Release"})})," ","and"," ",(0,r.jsx)("a",{href:"https://twitter.com/globalprivctrl",target:"_blank",rel:"noopener noreferrer",children:"Follow @globalprivctrl on Twitter"}),"."]})]})})})}),(0,r.jsxs)("section",{id:"about",className:E().about,children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"".concat(E().aboutCards," row row-cols-1 row-cols-lg-3"),children:[(0,r.jsx)("div",{className:"col",children:(0,r.jsxs)("div",{className:"card ".concat(E().aboutCard," h-100 text-center border-0"),children:[(0,r.jsx)("img",{src:"".concat("","/img/turn-on-gpc.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:["Turn On ",(0,r.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})]}),(0,r.jsx)("p",{className:"card-text",children:"Enable Global Privacy Control to communicate your privacy preference."})]})]})}),(0,r.jsx)("div",{className:"col",children:(0,r.jsxs)("div",{className:"card ".concat(E().aboutCard," h-100 text-center border-0"),children:[(0,r.jsx)("img",{src:"".concat("","/img/browser-fights-for-you.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h2",{className:"card-title",children:"Send the Signal"}),(0,r.jsxs)("p",{className:"card-text",children:["Your browser will send the"," ",(0,r.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal to websites you visit."]})]})]})}),(0,r.jsx)("div",{className:"col",children:(0,r.jsxs)("div",{className:"card ".concat(E().aboutCard," h-100 text-center border-0"),children:[(0,r.jsx)("img",{src:"".concat("","/img/live-more-privately.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h2",{className:"card-title",children:"Exercise Your Rights"}),(0,r.jsx)("p",{className:"card-text",children:"Participating websites can respect your privacy rights accordingly."})]})]})})]})}),(0,r.jsx)("div",{className:E().aboutSec2,children:(0,r.jsx)("img",{src:"".concat("","/img/divider-lines.svg"),alt:"dividing placeholder"})}),(0,r.jsx)("div",{className:"about-sec-3",children:(0,r.jsx)("div",{className:"container text-lg-center",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-lg-8",children:(0,r.jsxs)("div",{className:"".concat(E().aboutText," ").concat(E().sectionText),children:[(0,r.jsx)("p",{children:"You may have noticed \u201cDo Not Sell\u201d and \u201cObject To Processing\u201d links around the web from companies complying with privacy regulations. To opt out of websites selling or sharing your personal information, you need to click these links for every site you visit."}),(0,r.jsxs)("p",{children:["Now you can exercise your legal privacy rights in one step via Global Privacy Control (",(0,r.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"}),"), required under the California Consumer Protection Act (CCPA) and Europe\u2019s Global Data Protection Regulation (GDPR)."]}),(0,r.jsxs)("p",{className:"font-weight-bolder",children:["Together, over a dozen organizations are developing the"," ",(0,r.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," ","specification."," ",(0,r.jsx)("a",{href:"#contact",children:(0,r.jsx)("u",{children:"Get Involved"})})]})]})})})})})]}),(0,r.jsx)("section",{id:"gpc-spec",className:"".concat(E().section," ").concat(E().sectionDark),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-12 col-lg-5",children:[(0,r.jsxs)("h2",{className:E().sectionTitle,children:[(0,r.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," lets users signal their desired privacy, just by browsing."]}),(0,r.jsx)("div",{className:E().sectionText,children:(0,r.jsxs)("p",{children:[(0,r.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," is available as part of several major browsers, extensions, and websites."]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{as:"a",variant:"primary",className:"d-block",href:"https://globalprivacycontrol.github.io/gpc-spec/",children:"View Full Spec"}),(0,r.jsx)(f,{as:"a",variant:"secondary",className:"d-block mt-4",href:"https://global-privacy-control.glitch.me/",children:"Test against the reference server"})]}),(0,r.jsx)("p",{className:E().finePrint,children:(0,r.jsxs)("small",{children:["The ",(0,r.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal will be intended to communicate a Do Not Sell request from a global privacy control, as per"," ",(0,r.jsx)("a",{className:"font-weight-bold",href:"https://www.oag.ca.gov/sites/all/files/agweb/pdfs/privacy/oal-sub-final-text-of-regs.pdf",children:(0,r.jsx)("u",{children:"CCPA-REGULATIONS \xa7999.315"})})," ","for that browser or device, or, if known, the consumer. Under the GDPR, the intent of the"," ",(0,r.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal is to convey a general request that data controllers limit the sale or sharing of the user\u2019s personal data to other data controllers (",(0,r.jsx)("a",{className:"font-weight-bold",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679",children:(0,r.jsx)("u",{children:"GDPR Articles 7 & 21"})}),"). Over time, the"," ",(0,r.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal may be intended to communicate rights in other jurisdictions."]})})]}),(0,r.jsx)("div",{className:"d-none d-lg-block offset-lg-1 col",children:(0,r.jsx)("img",{src:"".concat("","/img/wifi.svg"),className:"img-fluid desktop-illustration",alt:"placeholder"})})]})})}),(0,r.jsx)("section",{id:"testimonials",className:E().section,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-12",children:(0,r.jsx)("div",{className:E().carouselWrapper,children:(0,r.jsx)(O,{items:o.data.entries})})})})})}),(0,r.jsx)("section",{id:"download",className:"".concat(E().section," ").concat(E().sectionDark),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-12 col-lg-5",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:E().sectionTitle,children:c.data.title}),(0,r.jsx)("div",{className:" ".concat(E().sectionText," mb-5"),dangerouslySetInnerHTML:{__html:c.html}})]}),(0,r.jsx)("div",{className:"d-flex mt-0 mb-4",children:(0,r.jsx)(a.default,{href:"/orgs",passHref:!0,children:(0,r.jsx)(f,{as:"a",variant:"primary",className:E().bottomButton,children:"View All Downloads"})})})]}),(0,r.jsx)("div",{className:"offset-lg-1 col-12 col-lg-6",children:(0,r.jsx)("ul",{className:E().downloadTable,children:c.data.entries.map((function(e){var t=e.name,n=e.url,s=e.img;return(0,r.jsxs)("li",{className:"position-relative",children:[(0,r.jsx)("div",{className:E().tableLogo,children:(0,r.jsx)("img",{src:"".concat("").concat(s),alt:"".concat(t," logo")})}),(0,r.jsx)("div",{className:E().tableDesc,children:t}),(0,r.jsx)("div",{className:E().tableLink,children:(0,r.jsxs)("a",{className:" ".concat(E().tableLink," stretched-link"),href:n,children:["LEARN MORE ",(0,r.jsxs)(b.Z,{children:["about ",t]})]})})]},t)}))})})]})})}),(0,r.jsx)("section",{id:"orgs",className:" ".concat(E().section," "),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h2",{className:"".concat(E().sectionTitle," text-center"),children:s.data.title}),(0,r.jsx)("div",{className:"".concat(E().sectionText," text-center mb-5"),dangerouslySetInnerHTML:{__html:s.html}}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)(G,{entries:s.data.entries})})}),(0,r.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,r.jsx)(a.default,{href:"/orgs#Business",passHref:!0,children:(0,r.jsx)(f,{as:"a",variant:"primary",className:E().bottomButton,children:"View All Organizations"})})})]})}),(0,r.jsx)("section",{className:" ".concat(E().section," ").concat(E().sectionDark),children:(0,r.jsxs)("div",{id:"press",className:"container",children:[(0,r.jsx)("h2",{className:"".concat(E().sectionTitle," text-center"),children:"Featured Press & Announcements"}),(0,r.jsx)("div",{className:"row justify-content-center mt-5",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)(j.Z,{entries:t.data.entries})})}),(0,r.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,r.jsx)(a.default,{href:"/press",passHref:!0,children:(0,r.jsx)(f,{as:"a",variant:"primary",className:E().bottomButton,children:"View More Press"})})})]})}),(0,r.jsx)("section",{className:"".concat(E().section),children:(0,r.jsxs)("div",{id:"faq",className:"container",children:[(0,r.jsx)("h2",{className:"".concat(E().sectionTitle," text-center"),children:n.data.title}),(0,r.jsx)("div",{className:"row justify-content-center mt-5",children:(0,r.jsx)("div",{className:"col-12 col-lg-8",children:(0,r.jsx)(p.Z,{hx:"h3",sections:n.sections,isDark:!0,nRendered:6})})}),(0,r.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,r.jsx)(a.default,{href:"/faq",passHref:!0,children:(0,r.jsxs)(f,{as:"a",variant:"primary",className:E().bottomButton,children:["View All ",(0,r.jsx)("abbr",{title:"frequently asked questions",children:"FAQ"}),(0,r.jsx)("span",{style:{textTransform:"lowercase"},children:"s"})]})})})]})})]})}var A=!0;function Z(e){var t=e.pressData,n=e.faqData,a=e.orgsData,i=e.downloadsData,c=e.testimonialsData;return(0,r.jsx)(s.Z,{header:!1,children:(0,r.jsx)(I,{pressData:t,faqData:n,orgsData:a,downloadsData:i,testimonialsData:c})})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1788)}])},8779:function(e){e.exports={button:"button_button__1q3q5",primary:"button_primary__14ICP",primaryInverted:"button_primaryInverted__3e-bV",secondary:"button_secondary__1Ij9Y",secondaryInverted:"button_secondaryInverted__3SvIy"}},3318:function(e){e.exports={carousel:"carousel_carousel__3fs30",controls:"carousel_controls__18qXK",active:"carousel_active__3tRWD",sectionTitle:"carousel_sectionTitle__auG1o",sectionText:"carousel_sectionText__2y6d4"}},4257:function(e){e.exports={collapse:"collapse_collapse__1Vu4x"}},9101:function(e){e.exports={header:"faq-list_header__ZBQl0",dark:"faq-list_dark__1lfEw",active:"faq-list_active__2RyOW",content:"faq-list_content__2zpWB"}},2409:function(e){e.exports={list:"featured-articles_list__24MbM"}},7881:function(e){e.exports={orgLogo:"featured-organizations_orgLogo__Sd3vS"}},5126:function(e){e.exports={tableLogo:"home_tableLogo__2gyjh",tableDesc:"home_tableDesc__wVC0Z",tableLink:"home_tableLink__2xmcE",tableDate:"home_tableDate__2MVKH",section:"home_section__27ano",sectionDark:"home_sectionDark__3WfvA",sectionTitle:"home_sectionTitle__3X4gs",sectionText:"home_sectionText__1Bg5E",finePrint:"home_finePrint__1ntZK",heroBackground:"home_heroBackground__7-PMe",hero:"home_hero__12UMv",heroTitle:"home_heroTitle__1kVMI",heroText:"home_heroText__2SCFX",heroBtns:"home_heroBtns__179jo",news:"home_news__3UPP_",newsAnnouncement:"home_newsAnnouncement__3bL7K",about:"home_about__jcp60",aboutCards:"home_aboutCards__7Qtry",aboutText:"home_aboutText__1ZzRp",aboutCard:"home_aboutCard__2fXDm",aboutSec2:"home_aboutSec2__39yij",orgLogo:"home_orgLogo__1vax3",downloadTable:"home_downloadTable__3wA4K",bottomButton:"home_bottomButton__2QHv4",carouselWrapper:"home_carouselWrapper__2horF"}},5887:function(e){e.exports={wrapper:"slider_wrapper__2K8iB",slider:"slider_slider__1tQTm",noTransition:"slider_noTransition__2mIk9",slide:"slider_slide__1nBx3"}}},function(e){e.O(0,[774,351,3],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);