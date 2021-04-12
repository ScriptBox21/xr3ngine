(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{2722:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=a,u=b["".concat(p,".").concat(d)]||b[d]||m[d]||c;return r?n.a.createElement(u,o(o({ref:t},i),{},{components:r})):n.a.createElement(u,o({ref:t},i))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,p=new Array(c);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var i=2;i<c;i++)p[i]=r[i];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},292:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),c=(r(0),r(2722)),p={id:"types_sctpparameters",title:"Module: types/SctpParameters",sidebar_label:"types/SctpParameters",custom_edit_url:null,hide_title:!0},o={unversionedId:"docs-server-core/modules/types_sctpparameters",id:"docs-server-core/modules/types_sctpparameters",isDocsHomePage:!1,title:"Module: types/SctpParameters",description:"Module: types/SctpParameters",source:"@site/docs/docs-server-core/modules/types_sctpparameters.md",slug:"/docs-server-core/modules/types_sctpparameters",permalink:"/docs/docs-server-core/modules/types_sctpparameters",editUrl:null,version:"current",sidebar_label:"types/SctpParameters",sidebar:"sidebar",previous:{title:"Module: types/MediasoupClientTransportOptions",permalink:"/docs/docs-server-core/modules/types_mediasoupclienttransportoptions"},next:{title:"Module: types/WebRtcTransportParams",permalink:"/docs/docs-server-core/modules/types_webrtctransportparams"}},s=[{value:"Type aliases",id:"type-aliases",children:[{value:"SctpParameters",id:"sctpparameters",children:[]}]}],i={toc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-typessctpparameters"},"Module: types/SctpParameters"),Object(c.b)("h2",{id:"type-aliases"},"Type aliases"),Object(c.b)("h3",{id:"sctpparameters"},"SctpParameters"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"SctpParameters"),": ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"MIS")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"number")),Object(c.b)("td",{parentName:"tr",align:"left"},"Maximum number of incoming SCTP streams.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"OS")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"number")),Object(c.b)("td",{parentName:"tr",align:"left"},"Initially requested number of outgoing SCTP streams.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"maxMessageSize")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"number")),Object(c.b)("td",{parentName:"tr",align:"left"},"Maximum allowed size for SCTP messages.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"port")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"number")),Object(c.b)("td",{parentName:"tr",align:"left"},"Must always equal 5000.")))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/types/SctpParameters.ts#L3"},"packages/server-core/src/types/SctpParameters.ts:3")))}l.isMDXComponent=!0}}]);