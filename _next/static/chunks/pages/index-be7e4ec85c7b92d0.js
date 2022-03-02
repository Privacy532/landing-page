(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=s.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},4735:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(9499),s=n(4184),a=n.n(s),i=n(7294),c=n(4730),o=n(7472),l=n.n(o),d=n(5893),u=["isOpened","children","keepChildren"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=e.isOpened,n=e.children,r=e.keepChildren,s=void 0===r||r,a=(0,c.Z)(e,u),o=(0,i.useRef)(null),h=(0,i.useState)(t?"auto":"0px"),v=h[0],x=h[1],f=(0,i.useState)(!1),j=f[0],p=f[1],b=(0,i.useRef)(null);return(0,i.useEffect)((function(){b.current=t})),(0,i.useLayoutEffect)((function(){if(t){var e=o.current;if(e&&null!==b.current){var n=e.scrollHeight;x("".concat(n,"px")),j&&p(!1);var r=function(e){x("auto")};return e.addEventListener("transitionend",r),function(){e.removeEventListener("transitionend",r)}}}else{var s=o.current;if(s&&(!0===b.current||j)){if(!0===b.current){var a=s.scrollHeight,i=s.style.transition;s.style.transition="",x("".concat(a,"px"));var c=requestAnimationFrame((function(){s.style.transition=i,p(!0)}));return function(){cancelAnimationFrame(c)}}if(j){var l=function(e){p(!1)};s.addEventListener("transitionend",l);var d=requestAnimationFrame((function(){x("0px")}));return function(){s.removeEventListener("transitionend",l),cancelAnimationFrame(d)}}}}}),[t,j]),(0,d.jsx)("div",m(m({className:l().collapse,ref:o,style:{height:v}},a),{},{children:s||t||j||b.current&&!t&&!j?n:null}))}var x=n(6446),f=n.n(x);function j(e){var t=e.sections,n=e.hx,r=e.isDark,s=void 0!==r&&r,a=e.nRendered,c=e.rdfa,o=a?t.slice(0,a):t,l=(0,i.useState)(null),u=l[0],h=l[1];return(0,i.useEffect)((function(){h(Math.max(o.findIndex((function(e){return e.key===window.location.hash.substring(1)})),0))}),[o]),(0,d.jsx)("div",{vocab:c?"https://schema.org/":void 0,typeof:c?"FAQPage":void 0,children:o.map((function(e,t){var r=e.key,a=e.data.title,i=e.html;return(0,d.jsx)(p,{rdfa:c,id:r,title:a,html:i,hx:n,isDark:s,isOpened:u===t},"".concat(r,"-").concat(u))}))})}function p(e){var t=e.id,n=e.title,s=e.html,c=e.isDark,o=e.isOpened,l=void 0!==o&&o,u=e.hx,h=void 0===u?"h2":u,m=e.rdfa,x=(0,i.useState)(l),j=x[0],p=x[1];return(0,d.jsx)("div",{property:m?"mainEntity":void 0,typeof:m?"Question":void 0,children:(0,d.jsxs)("section",{id:t,className:"mt-2",children:[(0,d.jsx)("header",{className:a()(f().header,(0,r.Z)({},f().dark,c)),property:m?"name":void 0,children:(0,d.jsxs)("a",{className:a()("px-4",(0,r.Z)({},f().active,j)),href:"#".concat(t),onClick:function(e){e.preventDefault(),p(!j)},children:[(0,d.jsx)(h,{children:n}),(0,d.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})})]})}),(0,d.jsx)(v,{isOpened:j,property:m?"acceptedAnswer":void 0,typeof:m?"Answer":void 0,children:(0,d.jsx)("div",{property:m?"text":void 0,className:"".concat(f().content," px-4 pt-4"),dangerouslySetInnerHTML:{__html:s}})})]})})}},8287:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(3887),s=n.n(r),a=n(5893);function i(e){var t=e.entries.filter((function(e){return null!=e.isFeaturedIndex})).slice(0,4).sort((function(e,t){return e.isFeaturedIndex-t.isFeaturedIndex}));return(0,a.jsx)("ul",{className:s().list,children:t.map((function(e){var t=e.contentUrl,n=e.source,r=e.title,s=e.img;return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:t,children:[(0,a.jsx)("span",{children:(0,a.jsx)("img",{src:"".concat("").concat(s),alt:"logo for ".concat(n)})}),(0,a.jsxs)("span",{children:[(0,a.jsx)("span",{children:r}),(0,a.jsx)("span",{children:n})]})]})},t)}))})}},4747:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},default:function(){return R}});var r=n(7507),s=n(1664),a=n(2905),i=n(9499),c=n(4730),o=n(7294),l=n(4184),d=n.n(l),u=n(6891),h=n.n(u),m=n(5893),v=["as","children","className","variant"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=(0,o.forwardRef)((function(e,t){var n,r=e.as,s=void 0===r?"button":r,a=e.children,o=e.className,l=e.variant,u=(0,c.Z)(e,v);return(0,m.jsx)(s,f(f({ref:t,className:d()(o,h().button,(n={},(0,i.Z)(n,h().primary,"primary"===l||"primaryInverted"===l),(0,i.Z)(n,h().primaryInverted,"primaryInverted"===l),(0,i.Z)(n,h().secondary,"secondary"===l||"secondaryInverted"===l),(0,i.Z)(n,h().secondaryInverted,"secondaryInverted"===l),n))},u),{},{children:a}))})),p=n(4735),b=n(8287),g=n(6632),_=n(6967),N=n.n(_),w=o.createContext(null);function y(e){var t=e.id,n=e.className,r=e.step,s=e.onChange,a=e.children,c=e.offset,l=void 0===c?0:c,u=e.threshold,h=void 0===u?.05:u,v=(0,o.useRef)(),x=(0,o.useRef)(!1),f=(0,o.useRef)(r);(0,o.useEffect)((function(){f.current=r}));var j=o.Children.count(a),p=(0,o.useState)(null),b=p[0],g=p[1],_=(0,o.useState)(0),y=_[0],k=_[1],T=(0,o.useState)(!1),O=T[0],D=T[1],E=(0,o.useState)(0),L=E[0],G=E[1];(0,o.useEffect)((function(){var e=function(){var e=v.current.offsetWidth;e!==L&&G(e)};return v.current&&e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[v,L]),(0,o.useEffect)((function(){function e(e){switch(e.key){case"ArrowLeft":r>0&&s(r-1);break;case"ArrowRight":r<j-1&&s(r+1)}}return window.addEventListener("keydown",e,!1),function(){window.removeEventListener("keydown",e,!1)}}),[j,s,r]);var S=(0,o.useCallback)((function(e){e.touches&&e.touches.length>1?event.preventDefault():j<=1||(g(C(e)),D(!0),x.current=!0)}),[j]),I=(0,o.useCallback)((function(e){if(e.touches&&e.touches.length>1)event.preventDefault();else if(O){var t=C(e)-b;if(0===r){if(t>0)return}else if(r===j-1&&t<0)return;k(t)}}),[O,b,j,r]),Z=(0,o.useCallback)((function(e){if(O){var t=C(e);if(!Number.isNaN(t)){var n=t-b,a=n>0?r-1:r+1,i=Math.abs(n)/L;a>=0&&a<j&&i>h&&s(a)}D(!1),g(null),k(0)}}),[O,r,b,L,s,j,h]);return(0,o.useEffect)((function(){return window.addEventListener("mouseup",Z,!1),window.addEventListener("touchend",Z,!1),function(){window.removeEventListener("mouseup",Z,!1),window.removeEventListener("touchend",Z,!1)}}),[Z]),(0,o.useEffect)((function(){function e(e){O&&e.preventDefault()}return window.addEventListener("touchmove",e,{passive:!1}),function(){window.removeEventListener("touchmove",e,{passive:!1})}}),[O]),(0,m.jsx)(w.Provider,{value:100*(1-2*l)/j,children:(0,m.jsx)("div",{id:t,className:d()(n,N().wrapper),ref:v,children:(0,m.jsx)("div",{className:d()(N().slider,(0,i.Z)({},N().noTransition,O||!x.current&&f.current===r)),style:{transform:"translate(".concat(P(r,L,l)+y,"px)"),width:"".concat(100*j,"%")},onTouchStart:S,onTouchMove:I,onTouchEnd:Z,onMouseDown:S,onMouseMove:I,onMouseUp:Z,children:a})})})}function C(e){var t;return e&&e&&(e=e.changedTouches?e.changedTouches[0]:e)&&(t=e.clientX),t}function P(e,t,n){return-1*(e*((1-2*n)*t)-n*t)}function k(e){var t=e.children,n=(0,o.useContext)(w);return(0,m.jsx)("div",{className:N().slide,style:{width:"".concat(n,"%")},children:t})}var T=n(8033),O=n.n(T);function D(e){var t=e.initialStep,n=void 0===t?0:t,r=e.items,s=(0,o.useState)(n),a=s[0],i=s[1];return(0,m.jsxs)("div",{className:O().carousel,children:[(0,m.jsx)(y,{step:a,onChange:i,children:r.map((function(e){return(0,m.jsx)(k,{children:(0,m.jsxs)("figure",{children:[(0,m.jsx)("blockquote",{cite:e.url,children:(0,m.jsxs)("p",{className:" ".concat(O().sectionTitle),children:["\u201c",e.quote,"\u201d"]})}),(0,m.jsx)("figcaption",{children:(0,m.jsxs)("a",{href:e.url,children:[(0,m.jsx)("img",{className:"rounded-circle py-5",src:e.img,alt:e.imgAlt}),(0,m.jsx)("p",{className:"mb-0",children:(0,m.jsx)("strong",{children:e.name})}),(0,m.jsx)("p",{children:(0,m.jsx)("i",{children:e.position})})]})})]})},e.url)}))}),(0,m.jsx)("div",{className:O().controls,children:(0,m.jsx)("ul",{children:r.map((function(e,t){return(0,m.jsx)("li",{children:(0,m.jsx)("button",{className:a===t?O().active:void 0,onClick:function(){return i(t)},children:(0,m.jsxs)(g.Z,{children:["Got to slide ",t]})})},e.url)}))})})]})}var E=n(8129),L=n.n(E),G=n(3620),S=n.n(G);function I(e){var t=e.entries.filter((function(e){return null!=e.isFeaturedIndex})).sort((function(e,t){return e.isFeaturedIndex-t.isFeaturedIndex}));return(0,m.jsx)("div",{className:"orgs__list row row-cols-2 row-cols-md-4 align-items-stretch justify-content-center",children:t.map((function(e){var t=e.url,n=e.img,r=e.name;return(0,m.jsx)("div",{className:"col text-center",children:(0,m.jsx)("a",{href:t,className:S().orgLogo,children:(0,m.jsx)("img",{src:"".concat("").concat(n),alt:"".concat(r," logo")})})},r)}))})}function Z(e){var t=e.pressData,n=e.faqData,r=e.orgsData,i=e.downloadsData,c=e.testimonialsData;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("section",{className:L().heroBackground,children:[(0,m.jsx)("header",{className:"container",children:(0,m.jsx)(a.Z,{isLarge:!0})}),(0,m.jsx)("div",{className:L().hero,children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-12 col-lg-7",children:[(0,m.jsx)("h1",{className:L().heroTitle,children:"Take control of your privacy."}),(0,m.jsx)("p",{className:L().heroText,children:"Online privacy should be accessible to everyone. It starts with a simpler way to exercise your rights."}),(0,m.jsxs)("div",{className:"row ".concat(L().heroBtns),children:[(0,m.jsx)("div",{className:"col-sm-12 col-md-6 mb-5 mb-lg-0",children:(0,m.jsx)(s.default,{href:"/#download",passHref:!0,children:(0,m.jsx)(j,{as:"a",variant:"primaryInverted",className:"d-block",children:"Get Started"})})}),(0,m.jsx)("div",{className:"col-sm-12 col-md-6",children:(0,m.jsx)(s.default,{href:"/#contact",passHref:!0,children:(0,m.jsx)(j,{as:"a",variant:"secondaryInverted",className:"d-block",children:"Get Involved"})})})]})]}),(0,m.jsx)("div",{className:"d-none d-lg-block col-lg-5",children:(0,m.jsx)("img",{src:"".concat("","/img/person-with-computer.svg"),id:"hero-illustration",className:"ml-5 img-fluid",alt:"man sitting at a computer"})})]})})})]}),(0,m.jsx)("section",{className:"".concat(L().news," py-5 px-3 px-sm-4"),children:(0,m.jsx)("div",{className:L().newsAnnouncement,children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row justify-content-center align-items-center",children:[(0,m.jsx)("span",{className:"p-3",children:(0,m.jsx)("svg",{width:"39",height:"28",viewBox:"0 0 39 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.556 0.18225C22.8823 -0.0216922 23.2902 -0.0624807 23.6165 0.100673C23.9428 0.304616 24.1468 0.630924 24.1876 0.99802V25.2264C24.1876 25.5935 23.9428 25.9606 23.6165 26.1237C23.4942 26.2053 23.331 26.2461 23.1679 26.2461C22.9639 26.2461 22.7192 26.1645 22.556 26.0422L12.7668 18.6594H10.034L11.4616 26.8171C11.5431 27.1027 11.4616 27.3882 11.2576 27.6329C11.0537 27.8776 10.7682 28 10.4826 28H6.56695C6.07748 28 5.6696 27.6329 5.58802 27.1434L4.11964 18.6594H2.93677C1.30523 18.6594 0 17.3542 0 15.7227V10.5017C0 8.8702 1.30523 7.56497 2.93677 7.56497H12.7668L22.556 0.18225ZM33.9359 2.34379C33.2833 1.73197 32.2636 1.81354 31.6517 2.46616C31.0399 3.11878 31.1215 4.13849 31.7741 4.75031C34.1806 6.87132 35.5266 9.93045 35.5266 13.1527C35.5266 16.3342 34.1398 19.3934 31.7741 21.5552C31.1215 22.167 31.0399 23.1867 31.6517 23.8393C31.978 24.2064 32.4267 24.3696 32.8346 24.3696C33.2017 24.3696 33.6096 24.2472 33.8951 23.9617C36.9542 21.2289 38.7081 17.2724 38.7081 13.1527C38.7489 9.0739 36.995 5.11741 33.9359 2.34379ZM30.2231 6.95259C29.5705 6.34077 28.5507 6.34077 27.9389 6.99338C27.3271 7.646 27.3271 8.66571 27.9797 9.27754C29.0402 10.2972 29.6112 11.6433 29.6112 13.1117C29.6112 14.58 29.0402 15.9261 27.9797 16.9458C27.3271 17.5576 27.3271 18.5773 27.9389 19.2299C28.2652 19.5562 28.6731 19.7194 29.1218 19.7194C29.5297 19.7194 29.9376 19.5562 30.2231 19.2707C31.9362 17.6392 32.8335 15.4366 32.8335 13.1117C32.8335 10.7867 31.8954 8.58413 30.2231 6.95259Z",fill:"white"})})}),(0,m.jsxs)("p",{className:"mb-0 py-3 text-center",children:[(0,m.jsx)(s.default,{href:"/press-release/20210128",children:(0,m.jsx)("a",{children:"Read the Latest Press Release"})})," ","and"," ",(0,m.jsx)("a",{href:"https://twitter.com/globalprivctrl",target:"_blank",rel:"noopener noreferrer",children:"Follow @globalprivctrl on Twitter"}),"."]})]})})})}),(0,m.jsxs)("section",{id:"about",className:L().about,children:[(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"".concat(L().aboutCards," row row-cols-1 row-cols-lg-3"),children:[(0,m.jsx)("div",{className:"col",children:(0,m.jsxs)("div",{className:"card ".concat(L().aboutCard," h-100 text-center border-0"),children:[(0,m.jsx)("img",{src:"".concat("","/img/turn-on-gpc.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)("h2",{className:"card-title",children:["Turn On ",(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})]}),(0,m.jsx)("p",{className:"card-text",children:"Enable Global Privacy Control to communicate your privacy preference."})]})]})}),(0,m.jsx)("div",{className:"col",children:(0,m.jsxs)("div",{className:"card ".concat(L().aboutCard," h-100 text-center border-0"),children:[(0,m.jsx)("img",{src:"".concat("","/img/browser-fights-for-you.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsx)("h2",{className:"card-title",children:"Send the Signal"}),(0,m.jsxs)("p",{className:"card-text",children:["Your browser will send the"," ",(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal to websites you visit."]})]})]})}),(0,m.jsx)("div",{className:"col",children:(0,m.jsxs)("div",{className:"card ".concat(L().aboutCard," h-100 text-center border-0"),children:[(0,m.jsx)("img",{src:"".concat("","/img/live-more-privately.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsx)("h2",{className:"card-title",children:"Exercise Your Rights"}),(0,m.jsx)("p",{className:"card-text",children:"Participating websites can respect your privacy rights accordingly."})]})]})})]})}),(0,m.jsx)("div",{className:L().aboutSec2,children:(0,m.jsx)("img",{src:"".concat("","/img/divider-lines.svg"),alt:"dividing placeholder"})}),(0,m.jsx)("div",{className:"about-sec-3",children:(0,m.jsx)("div",{className:"container text-lg-center",children:(0,m.jsx)("div",{className:"row justify-content-center",children:(0,m.jsx)("div",{className:"col-lg-8",children:(0,m.jsxs)("div",{className:"".concat(L().aboutText," ").concat(L().sectionText),children:[(0,m.jsx)("p",{children:"You may have noticed \u201cDo Not Sell\u201d and \u201cObject To Processing\u201d links around the web from companies complying with privacy regulations. To opt out of websites selling or sharing your personal information, you need to click these links for every site you visit."}),(0,m.jsxs)("p",{children:["Now you can exercise your legal privacy rights in one step via Global Privacy Control (",(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"}),"), required under the California Consumer Protection Act (CCPA) and Europe\u2019s Global Data Protection Regulation (GDPR)."]}),(0,m.jsxs)("p",{className:"font-weight-bolder",children:["Together, over a dozen organizations are developing the"," ",(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," ","specification."," ",(0,m.jsx)("a",{href:"#contact",children:(0,m.jsx)("u",{children:"Get Involved"})})]})]})})})})})]}),(0,m.jsx)("section",{id:"gpc-spec",className:"".concat(L().section," ").concat(L().sectionDark),children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-12 col-lg-5",children:[(0,m.jsxs)("h2",{className:L().sectionTitle,children:[(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," lets users signal their desired privacy, just by browsing."]}),(0,m.jsx)("div",{className:L().sectionText,children:(0,m.jsxs)("p",{children:[(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," is available as part of several major browsers, extensions, and websites."]})}),(0,m.jsxs)("div",{children:[(0,m.jsx)(j,{as:"a",variant:"primary",className:"d-block",href:"https://globalprivacycontrol.github.io/gpc-spec/",children:"View Full Spec"}),(0,m.jsx)(j,{as:"a",variant:"secondary",className:"d-block mt-4",href:"https://global-privacy-control.glitch.me/",children:"Test against the reference server"})]}),(0,m.jsx)("p",{className:L().finePrint,children:(0,m.jsxs)("small",{children:["The ",(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal will be intended to communicate a Do Not Sell request from a global privacy control, as per"," ",(0,m.jsx)("a",{className:"font-weight-bold",href:"https://www.oag.ca.gov/sites/all/files/agweb/pdfs/privacy/oal-sub-final-text-of-regs.pdf",children:(0,m.jsx)("u",{children:"CCPA-REGULATIONS \xa7999.315"})})," ","for that browser or device, or, if known, the consumer. Under the GDPR, the intent of the"," ",(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal is to convey a general request that data controllers limit the sale or sharing of the user\u2019s personal data to other data controllers (",(0,m.jsx)("a",{className:"font-weight-bold",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679",children:(0,m.jsx)("u",{children:"GDPR Articles 7 & 21"})}),"). Over time, the"," ",(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal may be intended to communicate rights in other jurisdictions."]})})]}),(0,m.jsx)("div",{className:"d-none d-lg-block offset-lg-1 col",children:(0,m.jsx)("img",{src:"".concat("","/img/wifi.svg"),className:"img-fluid desktop-illustration",alt:"placeholder"})})]})})}),(0,m.jsx)("section",{id:"testimonials",className:L().section,children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-lg-12",children:(0,m.jsx)("div",{className:L().carouselWrapper,children:(0,m.jsx)(D,{items:c.data.entries})})})})})}),(0,m.jsx)("section",{id:"download",className:"".concat(L().section," ").concat(L().sectionDark),children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-12 col-lg-5",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{className:L().sectionTitle,children:i.data.title}),(0,m.jsx)("div",{className:" ".concat(L().sectionText," mb-5"),dangerouslySetInnerHTML:{__html:i.html}})]}),(0,m.jsx)("div",{className:"d-flex mt-0 mb-4",children:(0,m.jsx)(s.default,{href:"/orgs",passHref:!0,children:(0,m.jsx)(j,{as:"a",variant:"primary",className:L().bottomButton,children:"View All Downloads"})})})]}),(0,m.jsx)("div",{className:"offset-lg-1 col-12 col-lg-6",children:(0,m.jsx)("ul",{className:L().downloadTable,children:i.data.entries.map((function(e){var t=e.name,n=e.url,r=e.img;return(0,m.jsxs)("li",{className:"position-relative",children:[(0,m.jsx)("div",{className:L().tableLogo,children:(0,m.jsx)("img",{src:"".concat("").concat(r),alt:"".concat(t," logo")})}),(0,m.jsx)("div",{className:L().tableDesc,children:t}),(0,m.jsx)("div",{className:L().tableLink,children:(0,m.jsxs)("a",{className:" ".concat(L().tableLink," stretched-link"),href:n,children:["LEARN MORE ",(0,m.jsxs)(g.Z,{children:["about ",t]})]})})]},t)}))})})]})})}),(0,m.jsx)("section",{id:"orgs",className:" ".concat(L().section," "),children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h2",{className:"".concat(L().sectionTitle," text-center"),children:r.data.title}),(0,m.jsx)("div",{className:"".concat(L().sectionText," text-center mb-5"),dangerouslySetInnerHTML:{__html:r.html}}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)(I,{entries:r.data.entries})})}),(0,m.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,m.jsx)(s.default,{href:"/orgs#Business",passHref:!0,children:(0,m.jsx)(j,{as:"a",variant:"primary",className:L().bottomButton,children:"View All Organizations"})})})]})}),(0,m.jsx)("section",{className:" ".concat(L().section," ").concat(L().sectionDark),children:(0,m.jsxs)("div",{id:"press",className:"container",children:[(0,m.jsx)("h2",{className:"".concat(L().sectionTitle," text-center"),children:"Featured Press & Announcements"}),(0,m.jsx)("div",{className:"row justify-content-center mt-5",children:(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)(b.Z,{entries:t.data.entries})})}),(0,m.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,m.jsx)(s.default,{href:"/press",passHref:!0,children:(0,m.jsx)(j,{as:"a",variant:"primary",className:L().bottomButton,children:"View More Press"})})})]})}),(0,m.jsx)("section",{className:"".concat(L().section),children:(0,m.jsxs)("div",{id:"faq",className:"container",children:[(0,m.jsx)("h2",{className:"".concat(L().sectionTitle," text-center"),children:n.data.title}),(0,m.jsx)("div",{className:"row justify-content-center mt-5",children:(0,m.jsx)("div",{className:"col-12 col-lg-8",children:(0,m.jsx)(p.Z,{hx:"h3",sections:n.sections,isDark:!0,nRendered:6})})}),(0,m.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,m.jsx)(s.default,{href:"/faq",passHref:!0,children:(0,m.jsxs)(j,{as:"a",variant:"primary",className:L().bottomButton,children:["View All ",(0,m.jsx)("abbr",{title:"frequently asked questions",children:"FAQ"}),(0,m.jsx)("span",{style:{textTransform:"lowercase"},children:"s"})]})})})]})})]})}var A=!0;function R(e){var t=e.pressData,n=e.faqData,s=e.orgsData,a=e.downloadsData,i=e.testimonialsData;return(0,m.jsx)(r.Z,{header:!1,children:(0,m.jsx)(Z,{pressData:t,faqData:n,orgsData:s,downloadsData:a,testimonialsData:i})})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4747)}])},6891:function(e){e.exports={button:"button_button__vb2XZ",primary:"button_primary__zdW2F",primaryInverted:"button_primaryInverted__DGGWk",secondary:"button_secondary__ZCbKB",secondaryInverted:"button_secondaryInverted__NHO5m"}},8033:function(e){e.exports={carousel:"carousel_carousel__d9SJ4",controls:"carousel_controls__9C6w_",active:"carousel_active__Nc_iO",sectionTitle:"carousel_sectionTitle__QiV_8",sectionText:"carousel_sectionText__fRlJs"}},7472:function(e){e.exports={collapse:"collapse_collapse__GonC8"}},6446:function(e){e.exports={header:"faq-list_header__tIZ6j",dark:"faq-list_dark__EkmGv",active:"faq-list_active__lbEsE",content:"faq-list_content__wNDfZ"}},3887:function(e){e.exports={list:"featured-articles_list__MrhXE"}},3620:function(e){e.exports={orgLogo:"featured-organizations_orgLogo__tILTN"}},8129:function(e){e.exports={tableLogo:"home_tableLogo__4pG0Q",tableDesc:"home_tableDesc__PfKMI",tableLink:"home_tableLink___l9GH",tableDate:"home_tableDate__r6Y1Y",section:"home_section__93Xkk",sectionDark:"home_sectionDark__tbODq",sectionTitle:"home_sectionTitle__0QWBh",sectionText:"home_sectionText__vzvRe",finePrint:"home_finePrint__U_9j0",heroBackground:"home_heroBackground__23QMS",hero:"home_hero__xngNk",heroTitle:"home_heroTitle__unWZj",heroText:"home_heroText__ncIjJ",heroBtns:"home_heroBtns__OMo0w",news:"home_news__vgMb1",newsAnnouncement:"home_newsAnnouncement__9hZ8B",about:"home_about__WJh8Q",aboutCards:"home_aboutCards__GXLi9",aboutText:"home_aboutText__v9LO6",aboutCard:"home_aboutCard__4QR1J",aboutSec2:"home_aboutSec2__NIRgo",orgLogo:"home_orgLogo__QV78x",downloadTable:"home_downloadTable___oBu4",bottomButton:"home_bottomButton__yACRZ",carouselWrapper:"home_carouselWrapper__dp1jk"}},6967:function(e){e.exports={wrapper:"slider_wrapper__wH6DQ",slider:"slider_slider__dHoAE",noTransition:"slider_noTransition__4HNjT",slide:"slider_slide__uzHq0"}}},function(e){e.O(0,[507,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);