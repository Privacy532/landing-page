(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var s;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s)){if(s.length){var c=r.apply(null,s);c&&e.push(c)}}else if("object"===a)if(s.toString===Object.prototype.toString)for(var i in s)n.call(s,i)&&s[i]&&e.push(i);else e.push(s.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(s=function(){return r}.apply(t,[]))||(e.exports=s)}()},7942:function(e,t,s){"use strict";var n=s(5696);t.default=void 0;var r,a=(r=s(7294))&&r.__esModule?r:{default:r},c=s(4957),i=s(9898),o=s(639);var l={};function d(e,t,s,n){if(e&&c.isLocalURL(t)){e.prefetch(t,s,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+s+(r?"%"+r:"")]=!0}}var u=function(e){var t,s=!1!==e.prefetch,r=i.useRouter(),u=a.default.useMemo((function(){var t=c.resolveHref(r,e.href,!0),s=n(t,2),a=s[0],i=s[1];return{href:a,as:e.as?c.resolveHref(r,e.as):i||a}}),[r,e.href,e.as]),h=u.href,f=u.as,m=e.children,v=e.replace,x=e.shallow,j=e.scroll,p=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var g=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,b=o.useIntersection({rootMargin:"200px"}),_=n(b,2),N=_[0],w=_[1],y=a.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);a.default.useEffect((function(){var e=w&&s&&c.isLocalURL(h),t="undefined"!==typeof p?p:r&&r.locale,n=l[h+"%"+f+(t?"%"+t:"")];e&&!n&&d(r,h,f,{locale:t})}),[f,h,w,p,s,r]);var C={ref:y,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,s,n,r,a,i,o){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(s))&&(e.preventDefault(),t[r?"replace":"push"](s,n,{shallow:a,locale:o,scroll:i}))}(e,r,h,f,v,x,j,p)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(h)&&d(r,h,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof p?p:r&&r.locale,k=r&&r.isLocaleDomain&&c.getDomainLocale(f,T,r&&r.locales,r&&r.domainLocales);C.href=k||c.addBasePath(c.addLocale(f,T,r&&r.defaultLocale))}return a.default.cloneElement(t,C)};t.default=u},639:function(e,t,s){"use strict";var n=s(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,s=e.rootMargin,l=e.disabled||!c,d=r.useRef(),u=r.useState(!1),h=n(u,2),f=h[0],m=h[1],v=r.useState(t?t.current:null),x=n(v,2),j=x[0],p=x[1],g=r.useCallback((function(e){d.current&&(d.current(),d.current=void 0),l||f||e&&e.tagName&&(d.current=function(e,t,s){var n=function(e){var t,s={root:e.root||null,margin:e.rootMargin||""},n=o.find((function(e){return e.root===s.root&&e.margin===s.margin}));n?t=i.get(n):(t=i.get(s),o.push(s));if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;t&&s&&t(s)}))}),e);return i.set(s,t={id:s,observer:a,elements:r}),t}(s),r=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),i.delete(r);var t=o.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&o.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:j,rootMargin:s}))}),[l,j,s,f]);return r.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),r.useEffect((function(){t&&p(t.current)}),[t]),[g,f]};var r=s(7294),a=s(6286),c="undefined"!==typeof IntersectionObserver;var i=new Map,o=[]},8287:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var n=s(3887),r=s.n(n),a=s(5893);function c(e){var t=e.entries.filter((function(e){return null!=e.isFeaturedIndex})).slice(0,4).sort((function(e,t){return e.isFeaturedIndex-t.isFeaturedIndex}));return(0,a.jsx)("ul",{className:r().list,children:t.map((function(e){var t=e.contentUrl,s=e.source,n=e.title,r=e.img;return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:t,children:[(0,a.jsx)("span",{children:(0,a.jsx)("img",{src:"".concat("").concat(r),alt:"logo for ".concat(s)})}),(0,a.jsxs)("span",{children:[(0,a.jsx)("span",{children:n}),(0,a.jsx)("span",{children:s})]})]})},t)}))})}},1852:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return D},default:function(){return G}});var n=s(7507),r=s(1664),a=s(2905),c=s(2056),i=s(4735),o=s(8287),l=s(6632),d=s(7294),u=s(9499),h=s(4184),f=s.n(h),m=s(6967),v=s.n(m),x=s(5893),j=d.createContext(null);function p(e){var t=e.id,s=e.className,n=e.step,r=e.onChange,a=e.children,c=e.offset,i=void 0===c?0:c,o=e.threshold,l=void 0===o?.05:o,h=(0,d.useRef)(),m=(0,d.useRef)(!1),p=(0,d.useRef)(n);(0,d.useEffect)((function(){p.current=n}));var _=d.Children.count(a),N=(0,d.useState)(null),w=N[0],y=N[1],C=(0,d.useState)(0),T=C[0],k=C[1],L=(0,d.useState)(!1),P=L[0],E=L[1],D=(0,d.useState)(0),G=D[0],M=D[1];(0,d.useEffect)((function(){var e=function(){var e=h.current.offsetWidth;e!==G&&M(e)};return h.current&&e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[h,G]),(0,d.useEffect)((function(){function e(e){switch(e.key){case"ArrowLeft":n>0&&r(n-1);break;case"ArrowRight":n<_-1&&r(n+1)}}return window.addEventListener("keydown",e,!1),function(){window.removeEventListener("keydown",e,!1)}}),[_,r,n]);var S=(0,d.useCallback)((function(e){e.touches&&e.touches.length>1?event.preventDefault():_<=1||(y(g(e)),E(!0),m.current=!0)}),[_]),O=(0,d.useCallback)((function(e){if(e.touches&&e.touches.length>1)event.preventDefault();else if(P){var t=g(e)-w;if(0===n){if(t>0)return}else if(n===_-1&&t<0)return;k(t)}}),[P,w,_,n]),R=(0,d.useCallback)((function(e){if(P){var t=g(e);if(!Number.isNaN(t)){var s=t-w,a=s>0?n-1:n+1,c=Math.abs(s)/G;a>=0&&a<_&&c>l&&r(a)}E(!1),y(null),k(0)}}),[P,n,w,G,r,_,l]);return(0,d.useEffect)((function(){return window.addEventListener("mouseup",R,!1),window.addEventListener("touchend",R,!1),function(){window.removeEventListener("mouseup",R,!1),window.removeEventListener("touchend",R,!1)}}),[R]),(0,d.useEffect)((function(){function e(e){P&&e.preventDefault()}return window.addEventListener("touchmove",e,{passive:!1}),function(){window.removeEventListener("touchmove",e,{passive:!1})}}),[P]),(0,x.jsx)(j.Provider,{value:100*(1-2*i)/_,children:(0,x.jsx)("div",{id:t,className:f()(s,v().wrapper),ref:h,children:(0,x.jsx)("div",{className:f()(v().slider,(0,u.Z)({},v().noTransition,P||!m.current&&p.current===n)),style:{transform:"translate(".concat(b(n,G,i)+T,"px)"),width:"".concat(100*_,"%")},onTouchStart:S,onTouchMove:O,onTouchEnd:R,onMouseDown:S,onMouseMove:O,onMouseUp:R,children:a})})})}function g(e){var t;return e&&e&&(e=e.changedTouches?e.changedTouches[0]:e)&&(t=e.clientX),t}function b(e,t,s){return-1*(e*((1-2*s)*t)-s*t)}function _(e){var t=e.children,s=(0,d.useContext)(j);return(0,x.jsx)("div",{className:v().slide,style:{width:"".concat(s,"%")},children:t})}var N=s(8033),w=s.n(N);function y(e){var t=e.initialStep,s=void 0===t?0:t,n=e.items,r=(0,d.useState)(s),a=r[0],c=r[1];return(0,x.jsxs)("div",{className:w().carousel,children:[(0,x.jsx)(p,{step:a,onChange:c,children:n.map((function(e){return(0,x.jsx)(_,{children:(0,x.jsxs)("figure",{children:[(0,x.jsx)("blockquote",{cite:e.url,children:(0,x.jsxs)("p",{className:" ".concat(w().sectionTitle),children:["\u201c",e.quote,"\u201d"]})}),(0,x.jsx)("figcaption",{children:(0,x.jsxs)("a",{href:e.url,children:[(0,x.jsx)("img",{className:"rounded-circle py-5",src:e.img,alt:e.imgAlt}),(0,x.jsx)("p",{className:"mb-0",children:(0,x.jsx)("strong",{children:e.name})}),(0,x.jsx)("p",{children:(0,x.jsx)("i",{children:e.position})})]})})]})},e.url)}))}),(0,x.jsx)("div",{className:w().controls,children:(0,x.jsx)("ul",{children:n.map((function(e,t){return(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:a===t?w().active:void 0,onClick:function(){return c(t)},children:(0,x.jsxs)(l.Z,{children:["Got to slide ",t]})})},e.url)}))})})]})}var C=s(8129),T=s.n(C),k=s(3620),L=s.n(k);function P(e){var t=e.entries.filter((function(e){return null!=e.isFeaturedIndex})).sort((function(e,t){return e.isFeaturedIndex-t.isFeaturedIndex}));return(0,x.jsx)("div",{className:"orgs__list row row-cols-2 row-cols-md-4 align-items-stretch justify-content-center",children:t.map((function(e){var t=e.url,s=e.img,n=e.name;return(0,x.jsx)("div",{className:"col text-center",children:(0,x.jsx)("a",{href:t,className:L().orgLogo,children:(0,x.jsx)("img",{src:"".concat("").concat(s),alt:"".concat(n," logo")})})},n)}))})}function E(e){var t=e.pressData,s=e.faqData,n=e.orgsData,d=e.downloadsData,u=e.testimonialsData;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("section",{className:T().heroBackground,children:[(0,x.jsx)("header",{className:"container",children:(0,x.jsx)(a.Z,{isLarge:!0})}),(0,x.jsx)("div",{className:T().hero,children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-12 col-lg-7",children:[(0,x.jsx)("h1",{className:T().heroTitle,children:"Take control of your privacy."}),(0,x.jsx)("p",{className:T().heroText,children:"Online privacy should be accessible to everyone. It starts with a simpler way to exercise your rights."}),(0,x.jsxs)("div",{className:"row ".concat(T().heroBtns),children:[(0,x.jsx)("div",{className:"col-sm-12 col-md-6 mb-5 mb-lg-0",children:(0,x.jsx)(r.default,{href:"/#download",passHref:!0,children:(0,x.jsx)(c.Z,{as:"a",variant:"primaryInverted",className:"d-block",children:"Get Started"})})}),(0,x.jsx)("div",{className:"col-sm-12 col-md-6",children:(0,x.jsx)(r.default,{href:"/#contact",passHref:!0,children:(0,x.jsx)(c.Z,{as:"a",variant:"secondaryInverted",className:"d-block",children:"Get Involved"})})})]})]}),(0,x.jsx)("div",{className:"d-none d-lg-block col-lg-5",children:(0,x.jsx)("img",{src:"".concat("","/img/person-with-computer.svg"),id:"hero-illustration",className:"ml-5 img-fluid",alt:"man sitting at a computer"})})]})})})]}),(0,x.jsx)("section",{className:"".concat(T().news," py-5 px-3 px-sm-4"),children:(0,x.jsx)("div",{className:T().newsAnnouncement,children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row justify-content-center align-items-center",children:[(0,x.jsx)("span",{className:"p-3",children:(0,x.jsx)("svg",{width:"39",height:"28",viewBox:"0 0 39 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.556 0.18225C22.8823 -0.0216922 23.2902 -0.0624807 23.6165 0.100673C23.9428 0.304616 24.1468 0.630924 24.1876 0.99802V25.2264C24.1876 25.5935 23.9428 25.9606 23.6165 26.1237C23.4942 26.2053 23.331 26.2461 23.1679 26.2461C22.9639 26.2461 22.7192 26.1645 22.556 26.0422L12.7668 18.6594H10.034L11.4616 26.8171C11.5431 27.1027 11.4616 27.3882 11.2576 27.6329C11.0537 27.8776 10.7682 28 10.4826 28H6.56695C6.07748 28 5.6696 27.6329 5.58802 27.1434L4.11964 18.6594H2.93677C1.30523 18.6594 0 17.3542 0 15.7227V10.5017C0 8.8702 1.30523 7.56497 2.93677 7.56497H12.7668L22.556 0.18225ZM33.9359 2.34379C33.2833 1.73197 32.2636 1.81354 31.6517 2.46616C31.0399 3.11878 31.1215 4.13849 31.7741 4.75031C34.1806 6.87132 35.5266 9.93045 35.5266 13.1527C35.5266 16.3342 34.1398 19.3934 31.7741 21.5552C31.1215 22.167 31.0399 23.1867 31.6517 23.8393C31.978 24.2064 32.4267 24.3696 32.8346 24.3696C33.2017 24.3696 33.6096 24.2472 33.8951 23.9617C36.9542 21.2289 38.7081 17.2724 38.7081 13.1527C38.7489 9.0739 36.995 5.11741 33.9359 2.34379ZM30.2231 6.95259C29.5705 6.34077 28.5507 6.34077 27.9389 6.99338C27.3271 7.646 27.3271 8.66571 27.9797 9.27754C29.0402 10.2972 29.6112 11.6433 29.6112 13.1117C29.6112 14.58 29.0402 15.9261 27.9797 16.9458C27.3271 17.5576 27.3271 18.5773 27.9389 19.2299C28.2652 19.5562 28.6731 19.7194 29.1218 19.7194C29.5297 19.7194 29.9376 19.5562 30.2231 19.2707C31.9362 17.6392 32.8335 15.4366 32.8335 13.1117C32.8335 10.7867 31.8954 8.58413 30.2231 6.95259Z",fill:"white"})})}),(0,x.jsxs)("p",{className:"mb-0 py-3 text-center",children:[(0,x.jsx)(r.default,{href:"/press-release/20210128",children:(0,x.jsx)("a",{children:"Read the Latest Press Release"})})," ","and"," ",(0,x.jsx)("a",{href:"https://twitter.com/globalprivctrl",target:"_blank",rel:"noopener noreferrer",children:"Follow @globalprivctrl on Twitter"}),"."]})]})})})}),(0,x.jsxs)("section",{id:"about",className:T().about,children:[(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"".concat(T().aboutCards," row row-cols-1 row-cols-lg-3"),children:[(0,x.jsx)("div",{className:"col",children:(0,x.jsxs)("div",{className:"card ".concat(T().aboutCard," h-100 text-center border-0"),children:[(0,x.jsx)("img",{src:"".concat("","/img/turn-on-gpc.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsxs)("h2",{className:"card-title",children:["Turn On ",(0,x.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})]}),(0,x.jsx)("p",{className:"card-text",children:"Enable Global Privacy Control to communicate your privacy preference."})]})]})}),(0,x.jsx)("div",{className:"col",children:(0,x.jsxs)("div",{className:"card ".concat(T().aboutCard," h-100 text-center border-0"),children:[(0,x.jsx)("img",{src:"".concat("","/img/browser-fights-for-you.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("h2",{className:"card-title",children:"Send the Signal"}),(0,x.jsxs)("p",{className:"card-text",children:["Your browser will send the"," ",(0,x.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal to websites you visit."]})]})]})}),(0,x.jsx)("div",{className:"col",children:(0,x.jsxs)("div",{className:"card ".concat(T().aboutCard," h-100 text-center border-0"),children:[(0,x.jsx)("img",{src:"".concat("","/img/live-more-privately.svg"),className:"card-img-top",alt:"Turn On GPC placeholder"}),(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("h2",{className:"card-title",children:"Exercise Your Rights"}),(0,x.jsx)("p",{className:"card-text",children:"Participating websites can respect your privacy rights accordingly."})]})]})})]})}),(0,x.jsx)("div",{className:T().aboutSec2,children:(0,x.jsx)("img",{src:"".concat("","/img/divider-lines.svg"),alt:"dividing placeholder"})}),(0,x.jsx)("div",{className:"about-sec-3",children:(0,x.jsx)("div",{className:"container text-lg-center",children:(0,x.jsx)("div",{className:"row justify-content-center",children:(0,x.jsx)("div",{className:"col-lg-8",children:(0,x.jsxs)("div",{className:"".concat(T().aboutText," ").concat(T().sectionText),children:[(0,x.jsx)("p",{children:"You may have noticed \u201cDo Not Sell\u201d and \u201cObject To Processing\u201d links around the web from companies complying with privacy regulations. To opt out of websites selling or sharing your personal information, you need to click these links for every site you visit."}),(0,x.jsxs)("p",{children:["Now you can exercise your legal privacy rights in one step via Global Privacy Control (",(0,x.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"}),"), required under the California Consumer Protection Act (CCPA)."]}),(0,x.jsxs)("p",{className:"font-weight-bolder",children:["Together, over a dozen organizations are developing the"," ",(0,x.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," ","specification."," ",(0,x.jsx)("a",{href:"#contact",children:(0,x.jsx)("u",{children:"Get Involved"})})]})]})})})})})]}),(0,x.jsx)("section",{id:"gpc-spec",className:"".concat(T().section," ").concat(T().sectionDark),children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-12 col-lg-5",children:[(0,x.jsxs)("h2",{className:T().sectionTitle,children:[(0,x.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," lets users signal their desired privacy, just by browsing."]}),(0,x.jsx)("div",{className:T().sectionText,children:(0,x.jsxs)("p",{children:[(0,x.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," is available as part of several major browsers, extensions, and websites."]})}),(0,x.jsxs)("div",{children:[(0,x.jsx)(c.Z,{as:"a",variant:"primary",className:"d-block",href:"https://privacycg.github.io/gpc-spec/",children:"View Full Spec"}),(0,x.jsx)(c.Z,{as:"a",variant:"secondary",className:"d-block mt-4",href:"https://global-privacy-control.glitch.me/",children:"Test against the reference server"})]}),(0,x.jsx)("p",{className:T().finePrint,children:(0,x.jsxs)("small",{children:["The ",(0,x.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal will be intended to communicate a Do Not Sell request from a global privacy control, as per"," ",(0,x.jsx)("a",{className:"font-weight-bold",href:"https://www.oag.ca.gov/sites/all/files/agweb/pdfs/privacy/oal-sub-final-text-of-regs.pdf",children:(0,x.jsx)("u",{children:"CCPA-REGULATIONS \xa7999.315"})})," ","for that browser or device, or, if known, the consumer. Under the GDPR, the intent of the"," ",(0,x.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal is to convey a general request that data controllers limit the sale or sharing of the user\u2019s personal data to other data controllers (",(0,x.jsx)("a",{className:"font-weight-bold",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679",children:(0,x.jsx)("u",{children:"GDPR Articles 7 & 21"})}),"). Over time, the"," ",(0,x.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," signal may be intended to communicate rights in other jurisdictions."]})})]}),(0,x.jsx)("div",{className:"d-none d-lg-block offset-lg-1 col",children:(0,x.jsx)("img",{src:"".concat("","/img/wifi.svg"),className:"img-fluid desktop-illustration",alt:"placeholder"})})]})})}),(0,x.jsx)("section",{id:"testimonials",className:T().section,children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-12",children:(0,x.jsx)("div",{className:T().carouselWrapper,children:(0,x.jsx)(y,{items:u.data.entries})})})})})}),(0,x.jsx)("section",{id:"download",className:"".concat(T().section," ").concat(T().sectionDark),children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-12 col-lg-5",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{className:T().sectionTitle,children:d.data.title}),(0,x.jsx)("div",{className:" ".concat(T().sectionText," mb-5"),dangerouslySetInnerHTML:{__html:d.html}})]}),(0,x.jsx)("div",{className:"d-flex mt-0 mb-4",children:(0,x.jsx)(r.default,{href:"/orgs",passHref:!0,children:(0,x.jsx)(c.Z,{as:"a",variant:"primary",className:T().bottomButton,children:"View All Downloads"})})})]}),(0,x.jsx)("div",{className:"offset-lg-1 col-12 col-lg-6",children:(0,x.jsx)("ul",{className:T().downloadTable,children:d.data.entries.map((function(e){var t=e.name,s=e.url,n=e.img;return(0,x.jsxs)("li",{className:"position-relative",children:[(0,x.jsx)("div",{className:T().tableLogo,children:(0,x.jsx)("img",{src:"".concat("").concat(n),alt:"".concat(t," logo")})}),(0,x.jsx)("div",{className:T().tableDesc,children:t}),(0,x.jsx)("div",{className:T().tableLink,children:(0,x.jsxs)("a",{className:" ".concat(T().tableLink," stretched-link"),href:s,children:["LEARN MORE ",(0,x.jsxs)(l.Z,{children:["about ",t]})]})})]},t)}))})})]})})}),(0,x.jsx)("section",{id:"orgs",className:" ".concat(T().section," "),children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h2",{className:"".concat(T().sectionTitle," text-center"),children:n.data.title}),(0,x.jsx)("div",{className:"".concat(T().sectionText," text-center mb-5"),dangerouslySetInnerHTML:{__html:n.html}}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(P,{entries:n.data.entries})})}),(0,x.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,x.jsx)(r.default,{href:"/orgs#Business",passHref:!0,children:(0,x.jsx)(c.Z,{as:"a",variant:"primary",className:T().bottomButton,children:"View All Organizations"})})})]})}),(0,x.jsx)("section",{className:" ".concat(T().section," ").concat(T().sectionDark),children:(0,x.jsxs)("div",{id:"press",className:"container",children:[(0,x.jsx)("h2",{className:"".concat(T().sectionTitle," text-center"),children:"Featured Press & Announcements"}),(0,x.jsx)("div",{className:"row justify-content-center mt-5",children:(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(o.Z,{entries:t.data.entries})})}),(0,x.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,x.jsx)(r.default,{href:"/press",passHref:!0,children:(0,x.jsx)(c.Z,{as:"a",variant:"primary",className:T().bottomButton,children:"View More Press"})})})]})}),(0,x.jsx)("section",{className:"".concat(T().section),children:(0,x.jsxs)("div",{id:"faq",className:"container",children:[(0,x.jsx)("h2",{className:"".concat(T().sectionTitle," text-center"),children:s.data.title}),(0,x.jsx)("div",{className:"row justify-content-center mt-5",children:(0,x.jsx)("div",{className:"col-12 col-lg-8",children:(0,x.jsx)(i.Z,{hx:"h3",sections:s.sections,isDark:!0,nRendered:6})})}),(0,x.jsx)("div",{className:"d-flex justify-content-center mt-5",children:(0,x.jsx)(r.default,{href:"/faq",passHref:!0,children:(0,x.jsxs)(c.Z,{as:"a",variant:"primary",className:T().bottomButton,children:["View All ",(0,x.jsx)("abbr",{title:"frequently asked questions",children:"FAQ"}),(0,x.jsx)("span",{style:{textTransform:"lowercase"},children:"s"})]})})})]})})]})}var D=!0;function G(e){var t=e.pressData,s=e.faqData,r=e.orgsData,a=e.downloadsData,c=e.testimonialsData;return(0,x.jsx)(n.Z,{header:!1,children:(0,x.jsx)(E,{pressData:t,faqData:s,orgsData:r,downloadsData:a,testimonialsData:c})})}},8581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1852)}])},8033:function(e){e.exports={carousel:"carousel_carousel__d9SJ4",controls:"carousel_controls__9C6w_",active:"carousel_active__Nc_iO",sectionTitle:"carousel_sectionTitle__QiV_8",sectionText:"carousel_sectionText__fRlJs"}},3887:function(e){e.exports={list:"featured-articles_list__MrhXE"}},3620:function(e){e.exports={orgLogo:"featured-organizations_orgLogo__tILTN"}},8129:function(e){e.exports={tableLogo:"home_tableLogo__4pG0Q",tableDesc:"home_tableDesc__PfKMI",tableLink:"home_tableLink___l9GH",tableDate:"home_tableDate__r6Y1Y",section:"home_section__93Xkk",sectionDark:"home_sectionDark__tbODq",sectionTitle:"home_sectionTitle__0QWBh",sectionText:"home_sectionText__vzvRe",finePrint:"home_finePrint__U_9j0",heroBackground:"home_heroBackground__23QMS",hero:"home_hero__xngNk",heroTitle:"home_heroTitle__unWZj",heroText:"home_heroText__ncIjJ",heroBtns:"home_heroBtns__OMo0w",news:"home_news__vgMb1",newsAnnouncement:"home_newsAnnouncement__9hZ8B",about:"home_about__WJh8Q",aboutCards:"home_aboutCards__GXLi9",aboutText:"home_aboutText__v9LO6",aboutCard:"home_aboutCard__4QR1J",aboutSec2:"home_aboutSec2__NIRgo",orgLogo:"home_orgLogo__QV78x",downloadTable:"home_downloadTable___oBu4",bottomButton:"home_bottomButton__yACRZ",carouselWrapper:"home_carouselWrapper__dp1jk"}},6967:function(e){e.exports={wrapper:"slider_wrapper__wH6DQ",slider:"slider_slider__dHoAE",noTransition:"slider_noTransition__4HNjT",slide:"slider_slide__uzHq0"}},1664:function(e,t,s){e.exports=s(7942)},1163:function(e,t,s){e.exports=s(9898)},4730:function(e,t,s){"use strict";function n(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}s.d(t,{Z:function(){return n}})}},function(e){e.O(0,[725,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);