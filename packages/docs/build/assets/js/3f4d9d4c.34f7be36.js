(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1348:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,m=p["".concat(s,".").concat(u)]||p[u]||b[u]||a;return r?o.a.createElement(m,c(c({ref:t},d),{},{components:r})):o.a.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var d=2;d<a;d++)s[d]=r[d];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},406:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(1348)),s={id:"src_hooks_add_associations",title:"Module: src/hooks/add-associations",sidebar_label:"src/hooks/add-associations",custom_edit_url:null,hide_title:!0},c={unversionedId:"docs-server/modules/src_hooks_add_associations",id:"docs-server/modules/src_hooks_add_associations",isDocsHomePage:!1,title:"Module: src/hooks/add-associations",description:"Module: src/hooks/add-associations",source:"@site/docs/docs-server/modules/src_hooks_add_associations.md",slug:"/docs-server/modules/src_hooks_add_associations",permalink:"/docs/docs-server/modules/src_hooks_add_associations",editUrl:null,version:"current",sidebar_label:"src/hooks/add-associations",sidebar:"sidebar",previous:{title:"Module: src/gameserver/transports/config",permalink:"/docs/docs-server/modules/src_gameserver_transports_config"},next:{title:"Module: src/hooks/add-attribution",permalink:"/docs/docs-server/modules/src_hooks_add_attribution"}},i=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],d={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"module-srchooksadd-associations"},"Module: src/hooks/add-associations"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"default"},"default"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"default"),": (",Object(a.b)("inlineCode",{parentName:"p"},"options"),": {}) => ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(a.b)("p",null,"\u25b8 (",Object(a.b)("inlineCode",{parentName:"p"},"options?"),": {}): ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Name"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("inlineCode",{parentName:"td"},"options")),Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("em",{parentName:"td"},"object"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/hooks/add-associations.ts#L14"},"packages/server/src/hooks/add-associations.ts:14")))}l.isMDXComponent=!0}}]);