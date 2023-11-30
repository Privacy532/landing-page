(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,s){var t;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function classNames(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var n=typeof t;if("string"===n||"number"===n)e.push(t);else if(Array.isArray(t)){if(t.length){var a=classNames.apply(null,t);a&&e.push(a)}}else if("object"===n){if(t.toString===Object.prototype.toString)for(var i in t)r.call(t,i)&&t[i]&&e.push(i);else e.push(t.toString())}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(t=(function(){return classNames}).apply(s,[]))&&(e.exports=t)}()},1138:function(e,s,t){"use strict";var r=t(9499),n=t(4730),a=t(7294),i=t(4184),c=t.n(i),o=t(902),l=t.n(o),d=t(5893),h=["as","children","className","variant"];function ownKeys(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function _objectSpread(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?ownKeys(Object(t),!0).forEach(function(s){(0,r.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}var u=(0,a.forwardRef)(function(e,s){var t,a=e.as,i=void 0===a?"button":a,o=e.children,u=e.className,m=e.variant,x=(0,n.Z)(e,h);return(0,d.jsx)(i,_objectSpread(_objectSpread({ref:s,className:c()(u,l().button,(t={},(0,r.Z)(t,l().primary,"primary"===m||"primaryInverted"===m),(0,r.Z)(t,l().primaryInverted,"primaryInverted"===m),(0,r.Z)(t,l().secondary,"secondary"===m||"secondaryInverted"===m),(0,r.Z)(t,l().secondaryInverted,"secondaryInverted"===m),t))},x),{},{children:o}))});s.Z=u},596:function(e,s,t){"use strict";t.d(s,{Z:function(){return FeaturedArticles}});var r=t(1473),n=t.n(r),a=t(5893);function FeaturedArticles(e){var s=e.entries.filter(function(e){return null!=e.isFeaturedIndex}).slice(0,4).sort(function(e,s){return e.isFeaturedIndex-s.isFeaturedIndex});return(0,a.jsx)("ul",{className:n().list,children:s.map(function(e){var s=e.contentUrl,t=e.source,r=e.title,n=e.img;return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:s,children:[(0,a.jsx)("span",{children:(0,a.jsx)("img",{src:"".concat("").concat(n),alt:"logo for ".concat(t)})}),(0,a.jsxs)("span",{children:[(0,a.jsx)("span",{children:r}),(0,a.jsx)("span",{children:t})]})]})},s)})})}},4083:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return C},default:function(){return HomePage}});var r=t(5655),n=t(1664),a=t.n(n),i=t(6533),c=t(1138),o=t(1590),l=t(596),d=t(2064),h=t(7294),u=t(9499),m=t(4184),x=t.n(m),v=t(1538),j=t.n(v),f=t(5893),p=h.createContext(null);function Slider(e){var s=e.id,t=e.className,r=e.step,n=e.onChange,a=e.children,i=e.offset,c=void 0===i?0:i,o=e.threshold,l=void 0===o?.05:o,d=(0,h.useRef)(),m=(0,h.useRef)(!1),v=(0,h.useRef)(r);(0,h.useEffect)(function(){v.current=r});var g=h.Children.count(a),b=(0,h.useState)(null),_=b[0],N=b[1],w=(0,h.useState)(0),y=w[0],C=w[1],T=(0,h.useState)(!1),P=T[0],D=T[1],k=(0,h.useState)(0),S=k[0],L=k[1];(0,h.useEffect)(function(){var handleResize=function(){var e=d.current.offsetWidth;e!==S&&L(e)};return d.current&&handleResize(),window.addEventListener("resize",handleResize),function(){window.removeEventListener("resize",handleResize)}},[d,S]),(0,h.useEffect)(function(){function handleKeydown(e){switch(e.key){case"ArrowLeft":r>0&&n(r-1);break;case"ArrowRight":r<g-1&&n(r+1)}}return window.addEventListener("keydown",handleKeydown,!1),function(){window.removeEventListener("keydown",handleKeydown,!1)}},[g,n,r]);var G=(0,h.useCallback)(function(e){if(e.touches&&e.touches.length>1){event.preventDefault();return}g<=1||(N(getClientX(e)),D(!0),m.current=!0)},[g]),O=(0,h.useCallback)(function(e){if(e.touches&&e.touches.length>1){event.preventDefault();return}if(P){var s=getClientX(e)-_;if(0===r){if(s>0)return}else if(r===g-1&&s<0)return;C(s)}},[P,_,g,r]),E=(0,h.useCallback)(function(e){if(P){var s=getClientX(e);if(!Number.isNaN(s)){var t=s-_,a=t>0?r-1:r+1,i=Math.abs(t)/S;a>=0&&a<g&&i>l&&n(a)}D(!1),N(null),C(0)}},[P,r,_,S,n,g,l]);return(0,h.useEffect)(function(){return window.addEventListener("mouseup",E,!1),window.addEventListener("touchend",E,!1),function(){window.removeEventListener("mouseup",E,!1),window.removeEventListener("touchend",E,!1)}},[E]),(0,h.useEffect)(function(){function preventWindowDrag(e){P&&e.preventDefault()}return window.addEventListener("touchmove",preventWindowDrag,{passive:!1}),function(){window.removeEventListener("touchmove",preventWindowDrag,{passive:!1})}},[P]),(0,f.jsx)(p.Provider,{value:(1-2*c)*100/g,children:(0,f.jsx)("div",{id:s,className:x()(t,j().wrapper),ref:d,children:(0,f.jsx)("div",{className:x()(j().slider,(0,u.Z)({},j().noTransition,P||!m.current&&v.current===r)),style:{transform:"translate(".concat(-1*(r*((1-2*c)*S)-c*S)+y,"px)"),width:"".concat(100*g,"%")},onTouchStart:G,onTouchMove:O,onTouchEnd:E,onMouseDown:G,onMouseMove:O,onMouseUp:E,children:a})})})}function getClientX(e){var s;return e&&e&&(e=e.changedTouches?e.changedTouches[0]:e)&&(s=e.clientX),s}function Slide(e){var s=e.children,t=(0,h.useContext)(p);return(0,f.jsx)("div",{className:j().slide,style:{width:"".concat(t,"%")},children:s})}var g=t(6163),b=t.n(g);function Carousel(e){var s=e.initialStep,t=e.items,r=(0,h.useState)(void 0===s?0:s),n=r[0],a=r[1];return(0,f.jsxs)("div",{className:b().carousel,children:[(0,f.jsx)(Slider,{step:n,onChange:a,children:t.map(function(e){return(0,f.jsx)(Slide,{children:(0,f.jsxs)("figure",{children:[(0,f.jsx)("blockquote",{cite:e.url,children:(0,f.jsxs)("p",{className:" ".concat(b().sectionTitle),children:["“",e.quote,"”"]})}),(0,f.jsx)("figcaption",{children:(0,f.jsxs)("a",{href:e.url,children:[(0,f.jsx)("img",{className:"rounded-circle py-5",src:e.img,alt:e.imgAlt}),(0,f.jsx)("p",{className:"mb-0",children:(0,f.jsx)("strong",{children:e.name})}),(0,f.jsx)("p",{children:(0,f.jsx)("i",{children:e.position})})]})})]})},e.url)})}),(0,f.jsx)("div",{className:b().controls,children:(0,f.jsx)("ul",{children:t.map(function(e,s){return(0,f.jsx)("li",{children:(0,f.jsx)("button",{className:n===s?b().active:void 0,onClick:function(){return a(s)},children:(0,f.jsxs)(d.Z,{children:["Got to slide ",s]})})},e.url)})})})]})}var _=t(6749),N=t.n(_),w=t(8693),y=t.n(w);function FeaturedOrganizations(e){var s=e.entries.filter(function(e){return null!=e.isFeaturedIndex}).sort(function(e,s){return e.isFeaturedIndex-s.isFeaturedIndex});return(0,f.jsx)("div",{className:"orgs__list row row-cols-2 row-cols-md-4 align-items-stretch justify-content-center",children:s.map(function(e){var s=e.url,t=e.img,r=e.name;return(0,f.jsx)("div",{className:"col text-center",children:(0,f.jsx)("a",{href:s,className:y().orgLogo,children:(0,f.jsx)("img",{src:"".concat("").concat(t),alt:"".concat(r," logo")})})},r)})})}function Home(e){var s=e.pressData,t=e.faqData,r=e.orgsData,n=e.downloadsData,h=e.testimonialsData;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("section",{className:N().heroBackground,children:[(0,f.jsx)("header",{className:"container",children:(0,f.jsx)(i.Z,{isLarge:!0})}),(0,f.jsx)("div",{className:N().hero,children:(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-12 col-lg-7",children:[(0,f.jsx)("h1",{className:N().heroTitle,children:"Take control of your privacy."}),(0,f.jsx)("p",{className:N().heroText,children:"Online privacy should be accessible to everyone. It starts with a simpler way to exercise your rights."}),(0,f.jsxs)("div",{className:"row ".concat(N().heroBtns),children:[(0,f.jsx)("div",{className:"col-sm-12 col-md-6 mb-5 mb-lg-0",children:(0,f.jsx)(a(),{href:"/#download",passHref:!0,legacyBehavior:!0,children:(0,f.jsx)(c.Z,{as:"a",variant:"primaryInverted",className:"d-block",children:"Get Started"})})}),(0,f.jsx)("div",{className:"col-sm-12 col-md-6",children:(0,f.jsx)(a(),{href:"/#contact",passHref:!0,legacyBehavior:!0,children:(0,f.jsx)(c.Z,{as:"a",variant:"secondaryInverted",className:"d-block",children:"Get Involved"})})})]})]}),(0,f.jsx)("div",{className:"d-none d-lg-block col-lg-5",children:(0,f.jsx)("img",{src:"".concat("","/img/person-with-computer.svg"),id:"hero-illustration",className:"ml-5 img-fluid",alt:"man sitting at a computer"})})]})})})]}),(0,f.jsx)("section",{className:"".concat(N().news," py-5 px-3 px-sm-4"),children:(0,f.jsx)("div",{className:N().newsAnnouncement,children:(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)("div",{className:"row justify-content-center align-items-center",children:[(0,f.jsx)("span",{className:"p-3",children:(0,f.jsx)("svg",{width:"39",height:"28",viewBox:"0 0 39 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.556 0.18225C22.8823 -0.0216922 23.2902 -0.0624807 23.6165 0.100673C23.9428 0.304616 24.1468 0.630924 24.1876 0.99802V25.2264C24.1876 25.5935 23.9428 25.9606 23.6165 26.1237C23.4942 26.2053 23.331 26.2461 23.1679 26.2461C22.9639 26.2461 22.7192 26.1645 22.556 26.0422L12.7668 18.6594H10.034L11.4616 26.8171C11.5431 27.1027 11.4616 27.3882 11.2576 27.6329C11.0537 27.8776 10.7682 28 10.4826 28H6.56695C6.07748 28 5.6696 27.6329 5.58802 27.1434L4.11964 18.6594H2.93677C1.30523 18.6594 0 17.3542 0 15.7227V10.5017C0 8.8702 1.30523 7.56497 2.93677 7.56497H12.7668L22.556 0.18225ZM33.9359 2.34379C33.2833 1.73197 32.2636 1.81354 31.6517 2.46616C31.0399 3.11878 31.1215 4.13849 31.7741 4.75031C34.1806 6.87132 35.5266 9.93045 35.5266 13.1527C35.5266 16.3342 34.1398 19.3934 31.7741 21.5552C31.1215 22.167 31.0399 23.1867 31.6517 23.8393C31.978 24.2064 32.4267 24.3696 32.8346 24.3696C33.2017 24.3696 33.6096 24.2472 33.8951 23.9617C36.9542 21.2289 38.7081 17.2724 38.7081 13.1527C38.7489 9.0739 36.995 5.11741 33.9359 2.34379ZM30.2231 6.95259C29.5705 6.34077 28.5507 6.34077 27.9389 6.99338C27.3271 7.646 27.3271 8.66571 27.9797 9.27754C29.0402 10.2972 29.6112 11.6433 29.6112 13.1117C29.6112 14.58 29.0402 15.9261 27.9797 16.9458C27.3271 17.5576 27.3271 18.5773 27.9389 19.2299C28.2652 19.5562 28.6731 19.7194 29.1218 19.7194C29.5297 19.7194 29.9376 19.5562 30.2231 19.2707C31.9362 17.6392 32.8335 15.4366 32.8335 13.1117C32.8335 10.7867 31.8954 8.58413 30.2231 6.95259Z",fill:"white"})})}),(0,f.jsxs)("p",{className:"mb-0 py-3 text-center",children:[(0,f.jsx)(a(),{href:"/press-release/20210128",children:"Read the Latest Press Release"})," ","and"," ",(0,f.jsx)("a",{href:"https://twitter.com/globalprivctrl",target:"_blank",rel:"noopener noreferrer",children:"Follow @globalprivctrl on Twitter"}),"."]})]})})})}),(0,f.jsxs)("section",{id:"about",className:N().about,children:[(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)("div",{className:"".concat(N().aboutCards," row row-cols-1 row-cols-lg-3"),children:[(0,f.jsx)("div",{className:"col",children:(0,f.jsxs)("div",{className:"card ".concat(N().aboutCard," h-100 text-center border-0"),children:[(0,f.jsx)("img",{src:"".concat("","/img/turn-on-gpc.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,f.jsxs)("div",{className:"card-body",children:[(0,f.jsxs)("h2",{className:"card-title",children:["Turn On ",(0,f.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})]}),(0,f.jsx)("p",{className:"card-text",children:"Enable Global Privacy Control to communicate your privacy preference."})]})]})}),(0,f.jsx)("div",{className:"col",children:(0,f.jsxs)("div",{className:"card ".concat(N().aboutCard," h-100 text-center border-0"),children:[(0,f.jsx)("img",{src:"".concat("","/img/browser-fights-for-you.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,f.jsxs)("div",{className:"card-body",children:[(0,f.jsx)("h2",{className:"card-title",children:"Send the Signal"}),(0,f.jsxs)("p",{className:"card-text",children:["Your browser will send the"," ",(0,f.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal to websites you visit."]})]})]})}),(0,f.jsx)("div",{className:"col",children:(0,f.jsxs)("div",{className:"card ".concat(N().aboutCard," h-100 text-center border-0"),children:[(0,f.jsx)("img",{src:"".concat("","/img/live-more-privately.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,f.jsxs)("div",{className:"card-body",children:[(0,f.jsx)("h2",{className:"card-title",children:"Exercise Your Rights"}),(0,f.jsx)("p",{className:"card-text",children:"Participating websites can respect your privacy rights accordingly."})]})]})})]})}),(0,f.jsx)("div",{className:N().aboutSec2,children:(0,f.jsx)("img",{src:"".concat("","/img/divider-lines.svg"),alt:"dividing placeholder"})}),(0,f.jsx)("div",{className:"about-sec-3",children:(0,f.jsx)("div",{className:"container text-lg-center",children:(0,f.jsx)("div",{className:"row justify-content-center",children:(0,f.jsx)("div",{className:"col-lg-8",children:(0,f.jsxs)("div",{className:"".concat(N().aboutText," ").concat(N().sectionText),children:[(0,f.jsx)("p",{children:"You may have noticed “Do Not Sell” and “Object To Processing” links around the web from companies complying with privacy regulations. To opt out of websites selling or sharing your personal information, you need to click these links for every site you visit."}),(0,f.jsxs)("p",{children:["Now you can exercise your legal privacy rights in one step via Global Privacy Control (",(0,f.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"}),"), required under the California Consumer Protection Act (CCPA)."]}),(0,f.jsxs)("p",{className:"font-weight-bolder",children:["Together, over a dozen organizations are developing the"," ",(0,f.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," ","specification."," ",(0,f.jsx)("a",{href:"#contact",children:(0,f.jsx)("u",{children:"Get Involved"})})]})]})})})})})]}),(0,f.jsx)("section",{id:"gpc-spec",className:"".concat(N().section," ").concat(N().sectionDark),children:(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-12 col-lg-5",children:[(0,f.jsxs)("h2",{className:N().sectionTitle,children:[(0,f.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," lets users signal their desired privacy, just by browsing."]}),(0,f.jsx)("div",{className:N().sectionText,children:(0,f.jsxs)("p",{children:[(0,f.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," is available as part of several major browsers, extensions, and websites."]})}),(0,f.jsxs)("div",{children:[(0,f.jsx)(c.Z,{as:"a",variant:"primary",className:"d-block",href:"https://privacycg.github.io/gpc-spec/",children:"View Full Spec"}),(0,f.jsx)(c.Z,{as:"a",variant:"secondary",className:"d-block mt-4",href:"https://global-privacy-control.glitch.me/",children:"Test against the reference server"})]}),(0,f.jsx)("p",{className:N().finePrint,children:(0,f.jsxs)("small",{children:["The ",(0,f.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal will be intended to communicate a Do Not Sell request from a global privacy control, as per"," ",(0,f.jsx)("a",{className:"font-weight-bold",href:"https://www.oag.ca.gov/sites/all/files/agweb/pdfs/privacy/oal-sub-final-text-of-regs.pdf",children:(0,f.jsx)("u",{children:"CCPA-REGULATIONS \xa7999.315"})})," ","for that browser or device, or, if known, the consumer. Under the GDPR, the intent of the"," ",(0,f.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal is to convey a general request that data controllers limit the sale or sharing of the user’s personal data to other data controllers (",(0,f.jsx)("a",{className:"font-weight-bold",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679",children:(0,f.jsx)("u",{children:"GDPR Articles 7 & 21"})}),"). Over time, the"," ",(0,f.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal may be intended to communicate rights in other jurisdictions."]})})]}),(0,f.jsx)("div",{className:"d-none d-lg-block offset-lg-1 col",children:(0,f.jsx)("img",{src:"".concat("","/img/wifi.svg"),className:"img-fluid desktop-illustration",alt:"placeholder"})})]})})}),(0,f.jsx)("section",{id:"testimonials",className:N().section,children:(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("div",{className:"row",children:(0,f.jsx)("div",{className:"col-lg-12",children:(0,f.jsx)("div",{className:N().carouselWrapper,children:(0,f.jsx)(Carousel,{items:h.data.entries})})})})})}),(0,f.jsx)("section",{id:"download",className:"".concat(N().section," ").concat(N().sectionDark),children:(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-12 col-lg-5",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:N().sectionTitle,children:n.data.title}),(0,f.jsx)("div",{className:" ".concat(N().sectionText," mb-5"),dangerouslySetInnerHTML:{__html:n.html}})]}),(0,f.jsx)("div",{className:"d-flex mt-0 mb-4",children:(0,f.jsx)(a(),{href:"/orgs",passHref:!0,legacyBehavior:!0,children:(0,f.jsx)(c.Z,{as:"a",variant:"primary",className:N().bottomButton,children:"View All Downloads"})})})]}),(0,f.jsx)("div",{className:"offset-lg-1 col-12 col-lg-6",children:(0,f.jsx)("ul",{className:N().downloadTable,children:n.data.entries.map(function(e){var s=e.name,t=e.url,r=e.img;return(0,f.jsxs)("li",{className:"position-relative",children:[(0,f.jsx)("div",{className:N().tableLogo,children:(0,f.jsx)("img",{src:"".concat("").concat(r),alt:"".concat(s," logo")})}),(0,f.jsx)("div",{className:N().tableDesc,children:s}),(0,f.jsx)("div",{className:N().tableLink,children:(0,f.jsxs)("a",{className:" ".concat(N().tableLink," stretched-link"),href:t,children:["LEARN MORE ",(0,f.jsxs)(d.Z,{children:["about ",s]})]})})]},s)})})})]})})}),(0,f.jsx)("section",{id:"orgs",className:" ".concat(N().section," "),children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("h2",{className:"".concat(N().sectionTitle," text-center"),children:r.data.title}),(0,f.jsx)("div",{className:"".concat(N().sectionText," text-center mb-5"),dangerouslySetInnerHTML:{__html:r.html}}),(0,f.jsx)("div",{className:"row",children:(0,f.jsx)("div",{className:"col-12",children:(0,f.jsx)(FeaturedOrganizations,{entries:r.data.entries})})}),(0,f.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,f.jsx)(a(),{href:"/orgs#Business",passHref:!0,legacyBehavior:!0,children:(0,f.jsx)(c.Z,{as:"a",variant:"primary",className:N().bottomButton,children:"View All Organizations"})})})]})}),(0,f.jsx)("section",{className:" ".concat(N().section," ").concat(N().sectionDark),children:(0,f.jsxs)("div",{id:"press",className:"container",children:[(0,f.jsx)("h2",{className:"".concat(N().sectionTitle," text-center"),children:"Featured Press & Announcements"}),(0,f.jsx)("div",{className:"row justify-content-center mt-5",children:(0,f.jsx)("div",{className:"col-12",children:(0,f.jsx)(l.Z,{entries:s.data.entries})})}),(0,f.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,f.jsx)(a(),{href:"/press",passHref:!0,legacyBehavior:!0,children:(0,f.jsx)(c.Z,{as:"a",variant:"primary",className:N().bottomButton,children:"View More Press"})})})]})}),(0,f.jsx)("section",{className:"".concat(N().section),children:(0,f.jsxs)("div",{id:"faq",className:"container",children:[(0,f.jsx)("h2",{className:"".concat(N().sectionTitle," text-center"),children:t.data.title}),(0,f.jsx)("div",{className:"row justify-content-center mt-5",children:(0,f.jsx)("div",{className:"col-12 col-lg-8",children:(0,f.jsx)(o.Z,{hx:"h3",sections:t.sections,isDark:!0,nRendered:6})})}),(0,f.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,f.jsx)(a(),{href:"/faq",passHref:!0,legacyBehavior:!0,children:(0,f.jsxs)(c.Z,{as:"a",variant:"primary",className:N().bottomButton,children:["View All ",(0,f.jsx)("abbr",{title:"frequently asked questions",children:"FAQ"}),(0,f.jsx)("span",{style:{textTransform:"lowercase"},children:"s"})]})})})]})})]})}var C=!0;function HomePage(e){var s=e.pressData,t=e.faqData,n=e.orgsData,a=e.downloadsData,i=e.testimonialsData;return(0,f.jsx)(r.Z,{header:!1,children:(0,f.jsx)(Home,{pressData:s,faqData:t,orgsData:n,downloadsData:a,testimonialsData:i})})}},5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4083)}])},902:function(e){e.exports={button:"button_button__XtUFt",primary:"button_primary__T5mn6",primaryInverted:"button_primaryInverted__A9my0",secondary:"button_secondary__iezMZ",secondaryInverted:"button_secondaryInverted__3w4_k"}},6163:function(e){e.exports={carousel:"carousel_carousel__PxPRp",controls:"carousel_controls__suQhl",active:"carousel_active__w_ftY",sectionTitle:"carousel_sectionTitle__biSM6",sectionText:"carousel_sectionText__jUOFq"}},1473:function(e){e.exports={list:"featured-articles_list__grtog"}},8693:function(e){e.exports={orgLogo:"featured-organizations_orgLogo__D4aQb"}},6749:function(e){e.exports={tableLogo:"home_tableLogo__MFc4u",tableDesc:"home_tableDesc__Biw9m",tableLink:"home_tableLink__Lai9s",tableDate:"home_tableDate__nAWgD",section:"home_section__Caft4",sectionDark:"home_sectionDark__jGqR2",sectionTitle:"home_sectionTitle__ClRY6",sectionText:"home_sectionText__dnYBj",finePrint:"home_finePrint__rF7S2",heroBackground:"home_heroBackground__eHyXC",hero:"home_hero__d6HXj",heroTitle:"home_heroTitle__juCN6",heroText:"home_heroText__YfzBU",heroBtns:"home_heroBtns__Dr7iz",news:"home_news__ZJqLj",newsAnnouncement:"home_newsAnnouncement__13bM3",about:"home_about__cjp2u",aboutCards:"home_aboutCards__x6IDh",aboutText:"home_aboutText__ZaNF6",aboutCard:"home_aboutCard__l3HDI",aboutSec2:"home_aboutSec2__3mYNx",orgLogo:"home_orgLogo__y8IBZ",downloadTable:"home_downloadTable__NQGgY",bottomButton:"home_bottomButton__BMeg_",carouselWrapper:"home_carouselWrapper__PgXG7"}},1538:function(e){e.exports={wrapper:"slider_wrapper__5I3xf",slider:"slider_slider__8GAJ6",noTransition:"slider_noTransition__nzbZS",slide:"slider_slide__0Sxii"}}},function(e){e.O(0,[500,186,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);