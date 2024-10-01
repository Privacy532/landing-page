(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{8520:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(8307),a=n(4730),s=n(506),c=n.n(s),i=n(5893),o=["title","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){var t=e.title,n=e.children,r=(0,a.Z)(e,o);return(0,i.jsx)("article",d(d({className:c().articleWrapper},r),{},{children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:c().article,children:[(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-10",children:(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("h1",{className:"mb-4",children:t})})})}),(0,i.jsx)("div",{className:"row justify-content-center",children:n})]})})}))}},9666:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7443),a=n.n(r),s=n(5893);function c(e){var t=e.entries.filter(function(e){return null!=e.isFeaturedIndex}).slice(0,4).sort(function(e,t){return e.isFeaturedIndex-t.isFeaturedIndex});return(0,s.jsx)("ul",{className:a().list,children:t.map(function(e){var t=e.contentUrl,n=e.source,r=e.title,a=e.img;return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:t,children:[(0,s.jsx)("span",{children:(0,s.jsx)("img",{src:"".concat("").concat(a),alt:"logo for ".concat(n)})}),(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:r}),(0,s.jsx)("span",{children:n})]})]})},t)})})}},7573:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(1163),a=n(9008),s=n.n(a),c=n(9493),i=n.n(c),o=n(7911),l=n(7294),d=n(1664),u=n.n(d),h=n(6332),p=n.n(h),m=n(5893);function x(){var e=(0,l.useState)(void 0),t=e[0],n=e[1];return((0,l.useEffect)(function(){var e=setTimeout(function(){n(!!navigator.globalPrivacyControl)},50);return function(){clearTimeout(e)}},[]),void 0===t)?null:(0,m.jsx)("div",{className:"".concat(p().statusBar," py-1 px-3 px-sm-4"),children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row justify-content-center align-items-center py-3",children:(0,m.jsxs)("div",{className:"text-center",children:[(0,m.jsx)("span",{className:"".concat(p().dot," ").concat(t?p().dotGreen:p().dotRed," d-inline-block status-dot rounded-circle mr-2"),style:{backgroundColor:t?"#058A5E":"#de0000"}}),(0,m.jsx)("span",{className:"mb-0 text-center",children:t?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{className:"".concat(p().statusText),children:"GPC signal detected."}),(0,m.jsxs)("span",{className:"".concat(p().statusCheck),children:["Test against the",(0,m.jsx)("a",{href:"https://global-privacy-control.glitch.me",children:"reference server"}),"."]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{className:"".concat(p().statusText),children:"GPC signal not detected."}),(0,m.jsxs)("span",{className:"".concat(p().statusText),children:["Please",(0,m.jsx)(u(),{href:"/#download",children:"download a browser/extension"}),"that supports it."]})]})})]})})})})}function j(e){var t=e.title,n=void 0===t?"Global Privacy Control — Take Control Of Your Privacy":t,a=e.description,c=void 0===a?"Exercise your privacy rights in one step via the “Global Privacy Control” (GPC) signal, a proposed specification backed by over a dozen organizations.":a,l=e.children,d=e.header,u=(0,r.useRouter)();return(0,m.jsxs)("div",{children:[(0,m.jsxs)(s(),{children:[(0,m.jsx)("title",{children:n}),(0,m.jsx)("meta",{name:"title",content:n}),(0,m.jsx)("meta",{name:"description",content:c}),(0,m.jsx)("link",{rel:"canonical",href:"".concat("https://globalprivacycontrol.org").concat(u.pathname)}),(0,m.jsx)("meta",{property:"og:type",content:"website"}),(0,m.jsx)("meta",{property:"og:url",content:"".concat("https://globalprivacycontrol.org").concat(u.pathname)}),(0,m.jsx)("meta",{property:"og:title",content:n}),(0,m.jsx)("meta",{property:"og:description",content:c}),(0,m.jsx)("meta",{property:"og:image",content:"".concat("https://globalprivacycontrol.org","/img/gpc-social-big.jpg")}),(0,m.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,m.jsx)("meta",{name:"twitter:url",content:"".concat("https://globalprivacycontrol.org").concat(u.pathname)}),(0,m.jsx)("meta",{name:"twitter:title",content:"Global Privacy Control — Take Control Of Your Privacy"}),(0,m.jsx)("meta",{name:"twitter:description",content:c}),(0,m.jsx)("meta",{name:"twitter:image",content:"".concat("https://globalprivacycontrol.org","/img/gpc-social-big.jpg")}),(0,m.jsx)("meta",{name:"twitter:site",content:"@globalprivcntrl"}),(0,m.jsx)("meta",{name:"twitter:creator",content:"@globalprivcntrl"})]}),(0,m.jsx)("aside",{children:(0,m.jsx)(x,{})}),(void 0===d||d)&&(0,m.jsx)("header",{className:i().header,children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row no-gutters justify-content-center",children:(0,m.jsx)("div",{className:"col-12 ".concat(i().navWrapper),children:(0,m.jsx)(o.Z,{})})})})}),(0,m.jsx)("main",{children:l}),(0,m.jsx)("section",{id:"contact",className:"".concat(i().contact," text-center"),children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row justify-content-center",children:(0,m.jsxs)("div",{className:"col-12 col-lg-6",children:[(0,m.jsx)("h1",{children:"Get Involved"}),(0,m.jsxs)("p",{children:["Contact us to learn more about supporting"," ",(0,m.jsx)("abbr",{title:"Global Privacy Control",children:"GPC"})," in your browser, app, or website."]}),(0,m.jsx)("p",{children:(0,m.jsx)("a",{href:"https://twitter.com/globalprivctrl",target:"_blank",rel:"noopener noreferrer",children:"@globalprivctrl"})})]})})})}),(0,m.jsx)("footer",{className:i().footer,children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row text-center",children:(0,m.jsxs)("div",{className:"col",children:[(0,m.jsxs)("p",{className:"mb-0",children:["This site is hosted by ",(0,m.jsx)("a",{href:"https://github.com",children:"GitHub"})," ","and is subject to its"," ",(0,m.jsx)("a",{href:"https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement",children:"Privacy Policy"})," ","and"," ",(0,m.jsx)("a",{href:"https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-terms-of-service",children:"Terms of Service"}),"."]}),(0,m.jsx)("p",{className:"mb-0",children:"Content on this site is licensed under a Creative Commons Attribution 4.0 International license. This license does not apply to any logos or marks on this site."})]})})})})]})}},7911:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(1664),s=n.n(a),c=n(5738),i=n.n(c),o=n(8032),l=n(5893);function d(e){var t=e.isLarge,n=void 0!==t&&t,a=(0,r.useState)(!1),c=a[0],d=a[1];return(0,l.jsxs)("nav",{className:"".concat(i().navbar," navbar navbar-expand-md"),children:[(0,l.jsx)("div",{className:"navbar__logos",children:(0,l.jsxs)(s(),{href:"/",children:[(0,l.jsx)(o.Z,{children:"Home"}),(0,l.jsx)("img",{className:"d-lg-none",src:"".concat("","/img/gpc-logo-mobile.svg"),alt:"global privacy control logo",id:"hero-logo"}),(0,l.jsx)("img",{className:"d-none d-lg-block ".concat(n?i().headerLogoLarge:i().headerLogoSmall),src:"".concat("","/img/").concat(n?"gpc-logo.svg":"gpc-logo-small.svg"),alt:"global privacy control logo",id:"hero-logo"})]})}),(0,l.jsx)("button",{className:"d-md-none bg-transparent border-0",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-label":c?"Close main menu":"Main menu","aria-expanded":c,onClick:function(){return d(!c)},children:(0,l.jsx)("svg",{width:"22",height:"12",viewBox:"0 0 22 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1ZM0 6C0 5.44772 0.447715 5 1 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H1C0.447716 7 0 6.55228 0 6ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447716 12 1 12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H1Z",fill:"white"})})}),(0,l.jsx)("div",{className:"d-none d-md-block ml-auto text-nowrap",children:(0,l.jsx)(u,{})}),(0,l.jsx)("div",{className:"w-100 d-md-none overflow-hidden ".concat(i().mobileMenu," ").concat(c?i().open:""),id:"navbarSupportedContent",children:(0,l.jsx)("div",{className:"mt-4 d-flex",children:(0,l.jsx)(u,{})})})]})}function u(){return(0,l.jsxs)("ul",{className:"navbar-nav ".concat(i().linkList),children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(s(),{href:"/#about",className:"nav-link text-uppercase",children:"About"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(s(),{href:"/#gpc-spec",className:"nav-link text-uppercase",children:"Spec"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(s(),{href:"/implementation",className:"nav-link text-uppercase",children:"Implementation"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(s(),{href:"/#download",className:"nav-link text-uppercase",children:"Download"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(s(),{href:"/#orgs",className:"nav-link text-uppercase",children:"Organizations"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(s(),{href:"/#press",className:"nav-link text-uppercase",children:"Press"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(s(),{href:"/#faq",className:"nav-link text-uppercase",children:"FAQ"})})]})}},8032:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(8307),a=n(4730);n(7294);var s=n(8820),c=n.n(s),i=n(5893),o=["children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){var t=e.children,n=(0,a.Z)(e,o);return(0,i.jsx)("span",d(d({className:c().hidden},n),{},{children:t}))}},8599:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return p}});var r=n(7573),a=n(8520),s=n(2230),c=n.n(s),i=n(5893);function o(e){var t=e.entries;return(0,i.jsx)("ul",{className:"".concat(c().list),children:t.map(function(e){var t=e.datePublished,n=e.title,r=e.contentUrl,a=e.source;return(0,i.jsxs)("li",{className:"position-relative text-nowrap",children:[(0,i.jsx)("div",{className:"".concat(c().left," text-left pl-0"),children:t}),(0,i.jsx)("div",{className:"".concat(c().desc," text-truncate"),children:(0,i.jsx)("a",{className:"stretched-link",href:r,children:n})}),(0,i.jsx)("div",{className:"".concat(c().date," text-right pr-0"),children:a})]},r)})})}var l=n(9666),d=n(4169),u=n.n(d),h=!0;function p(e){var t=e.data,n=void 0===t?{}:t,s=n.title,c=n.entries;return(0,i.jsx)(r.Z,{title:"Press & Announcements | Global Privacy Control",children:(0,i.jsxs)(a.Z,{title:s,children:[(0,i.jsxs)("section",{className:"".concat(u().featured," col-10"),children:[(0,i.jsx)("header",{children:(0,i.jsx)("h2",{children:"Featured Articles"})}),(0,i.jsx)(l.Z,{entries:c})]}),(0,i.jsx)("section",{className:"col-10",children:(0,i.jsx)(o,{entries:c})})]})})}},8923:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/press",function(){return n(8599)}])},506:function(e){e.exports={articleWrapper:"article_articleWrapper__8gQb0",article:"article_article__GEzIS"}},7443:function(e){e.exports={list:"featured-articles_list__grtog"}},9493:function(e){e.exports={header:"layout_header__kmos1",navWrapper:"layout_navWrapper__T5iiL",contact:"layout_contact__8hGrR",footer:"layout_footer__agPsP"}},5738:function(e){e.exports={navbar:"navbar_navbar__iQJkt",headerLogoLarge:"navbar_headerLogoLarge__7SqtW",headerLogoSmall:"navbar_headerLogoSmall__Dp52K",mobileMenu:"navbar_mobileMenu__kZxA7",open:"navbar_open__Wby4m",linkList:"navbar_linkList__c2Lqv"}},2230:function(e){e.exports={list:"press-list_list__jXyS4",left:"press-list_left__dL14B",desc:"press-list_desc__xmVTE",date:"press-list_date___QJqr"}},6332:function(e){e.exports={statusBar:"status-bar_statusBar__U3heg",dot:"status-bar_dot__RWLir",dotGreen:"status-bar_dotGreen__QTeVn",dotRed:"status-bar_dotRed__gsdFc",statusText:"status-bar_statusText__8TQfO",statusCheck:"status-bar_statusCheck__ZPN7O"}},8820:function(e){e.exports={hidden:"visually-hidden_hidden__pVHwT"}},4169:function(e){e.exports={featured:"press_featured__2xp0x"}}},function(e){e.O(0,[500,888,774,179],function(){return e(e.s=8923)}),_N_E=e.O()}]);