(window.webpackJsonp=window.webpackJsonp||[]).push([[803],{1348:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),s=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),i=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=i(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,b=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,O=m["".concat(b,".").concat(d)]||m[d]||o[d]||n;return a?s.a.createElement(O,c(c({ref:t},l),{},{components:a})):s.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,b=new Array(n);b[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var l=2;l<n;l++)b[l]=a[l];return s.a.createElement.apply(null,b)}return s.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},873:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return i}));var r=a(3),s=a(7),n=(a(0),a(1348)),b={id:"src_services_sms_sms_class.sms",title:"Class: Sms",sidebar_label:"Sms",custom_edit_url:null,hide_title:!0},c={unversionedId:"docs-server/classes/src_services_sms_sms_class.sms",id:"docs-server/classes/src_services_sms_sms_class.sms",isDocsHomePage:!1,title:"Class: Sms",description:"Class: Sms",source:"@site/docs/docs-server/classes/src_services_sms_sms_class.sms.md",slug:"/docs-server/classes/src_services_sms_sms_class.sms",permalink:"/docs/docs-server/classes/src_services_sms_sms_class.sms",editUrl:null,version:"current",sidebar_label:"Sms",sidebar:"sidebar",previous:{title:"Class: Seat",permalink:"/docs/docs-server/classes/src_services_seat_seat_class.seat"},next:{title:"Class: StaticResourceType",permalink:"/docs/docs-server/classes/src_services_static_resource_type_static_resource_type_class.staticresourcetype"}},p=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"app",id:"app",children:[]},{value:"docs",id:"docs",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"find",id:"find",children:[]},{value:"get",id:"get",children:[]},{value:"patch",id:"patch",children:[]},{value:"remove",id:"remove",children:[]},{value:"update",id:"update",children:[]}]}],l={toc:p};function i(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-sms"},"Class: Sms"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docs/docs-server/modules/src_services_sms_sms_class"},"src/services/sms/sms.class"),".Sms"),Object(n.b)("p",null,"A class for Sms service"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),Object(n.b)("h2",{id:"implements"},"Implements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"ServiceMethods"),"<Data",">")),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new Sms"),"(",Object(n.b)("inlineCode",{parentName:"p"},"options?"),": ServiceOptions, ",Object(n.b)("inlineCode",{parentName:"p"},"app"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/docs-server/modules/src_declarations#application"},Object(n.b)("em",{parentName:"a"},"Application")),"): ",Object(n.b)("a",{parentName:"p",href:"/docs/docs-server/classes/src_services_sms_sms_class.sms"},Object(n.b)("em",{parentName:"a"},"Sms"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"options")),Object(n.b)("td",{parentName:"tr",align:"left"},"ServiceOptions")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"app")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/docs-server/modules/src_declarations#application"},Object(n.b)("em",{parentName:"a"},"Application")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/docs-server/classes/src_services_sms_sms_class.sms"},Object(n.b)("em",{parentName:"a"},"Sms"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L17"},"packages/server/src/services/sms/sms.class.ts:17")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"app"},"app"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"app"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/docs-server/modules/src_declarations#application"},Object(n.b)("em",{parentName:"a"},"Application"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L15"},"packages/server/src/services/sms/sms.class.ts:15")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"docs"},"docs"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"docs"),": ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L17"},"packages/server/src/services/sms/sms.class.ts:17")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"options"},"options"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"options"),": ServiceOptions"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L16"},"packages/server/src/services/sms/sms.class.ts:16")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"create"},"create"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"create"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("em",{parentName:"p"},"any"),", ",Object(n.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"any"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"params?")),Object(n.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("p",null,"Implementation of: void"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L34"},"packages/server/src/services/sms/sms.class.ts:34")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"find"},"find"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"find"),"(",Object(n.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data[] ","|"," Paginated<Data",">",">"),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"params?")),Object(n.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data[] ","|"," Paginated<Data",">",">"),Object(n.b)("p",null,"Implementation of: void"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L24"},"packages/server/src/services/sms/sms.class.ts:24")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"get"},"get"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"get"),"(",Object(n.b)("inlineCode",{parentName:"p"},"id"),": Id, ",Object(n.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"id")),Object(n.b)("td",{parentName:"tr",align:"left"},"Id")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"params?")),Object(n.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("p",null,"Implementation of: void"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L28"},"packages/server/src/services/sms/sms.class.ts:28")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"patch"},"patch"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"patch"),"(",Object(n.b)("inlineCode",{parentName:"p"},"id"),": Id, ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Data, ",Object(n.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"id")),Object(n.b)("td",{parentName:"tr",align:"left"},"Id")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",{parentName:"tr",align:"left"},"Data")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"params?")),Object(n.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("p",null,"Implementation of: void"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L47"},"packages/server/src/services/sms/sms.class.ts:47")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"remove"},"remove"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"remove"),"(",Object(n.b)("inlineCode",{parentName:"p"},"id"),": Id, ",Object(n.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"id")),Object(n.b)("td",{parentName:"tr",align:"left"},"Id")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"params?")),Object(n.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("p",null,"Implementation of: void"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L51"},"packages/server/src/services/sms/sms.class.ts:51")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"update"},"update"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"update"),"(",Object(n.b)("inlineCode",{parentName:"p"},"id"),": Id, ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Data, ",Object(n.b)("inlineCode",{parentName:"p"},"params?"),": Params): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"id")),Object(n.b)("td",{parentName:"tr",align:"left"},"Id")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",{parentName:"tr",align:"left"},"Data")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"params?")),Object(n.b)("td",{parentName:"tr",align:"left"},"Params")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<Data",">"),Object(n.b)("p",null,"Implementation of: void"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/7650c2bea/packages/server/src/services/sms/sms.class.ts#L43"},"packages/server/src/services/sms/sms.class.ts:43")))}i.isMDXComponent=!0}}]);