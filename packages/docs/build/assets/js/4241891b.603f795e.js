(window.webpackJsonp=window.webpackJsonp||[]).push([[696],{2722:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.a.createElement(u,b(b({ref:t},c),{},{components:r})):n.a.createElement(u,b({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<i;c++)l[c]=r[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},766:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),i=(r(0),r(2722)),l={id:"renderer_postprocessing_materials_bokehmaterial.bokehmaterial",title:"Class: BokehMaterial",sidebar_label:"BokehMaterial",custom_edit_url:null,hide_title:!0},b={unversionedId:"docs-engine/classes/renderer_postprocessing_materials_bokehmaterial.bokehmaterial",id:"docs-engine/classes/renderer_postprocessing_materials_bokehmaterial.bokehmaterial",isDocsHomePage:!1,title:"Class: BokehMaterial",description:"Class: BokehMaterial",source:"@site/docs/docs-engine/classes/renderer_postprocessing_materials_bokehmaterial.bokehmaterial.md",slug:"/docs-engine/classes/renderer_postprocessing_materials_bokehmaterial.bokehmaterial",permalink:"/docs/docs-engine/classes/renderer_postprocessing_materials_bokehmaterial.bokehmaterial",editUrl:null,version:"current",sidebar_label:"BokehMaterial",sidebar:"sidebar",previous:{title:"Class: AdaptiveLuminanceMaterial",permalink:"/docs/docs-engine/classes/renderer_postprocessing_materials_adaptiveluminancematerial.adaptiveluminancematerial"},next:{title:"Class: CircleOfConfusionMaterial",permalink:"/docs/docs-engine/classes/renderer_postprocessing_materials_circleofconfusionmaterial.circleofconfusionmaterial"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"generateKernel",id:"generatekernel",children:[]},{value:"setTexelSize",id:"settexelsize",children:[]}]}],c={toc:o};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"class-bokehmaterial"},"Class: BokehMaterial"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/docs-engine/modules/renderer_postprocessing_materials_bokehmaterial"},"renderer/postprocessing/materials/BokehMaterial"),".BokehMaterial"),Object(i.b)("p",null,"A bokeh blur material."),Object(i.b)("p",null,"This material should be applied twice in a row, with ",Object(i.b)("inlineCode",{parentName:"p"},"fill")," mode enabled for\nthe second pass."),Object(i.b)("p",null,"Enabling the ",Object(i.b)("inlineCode",{parentName:"p"},"foreground")," option causes the shader to combine the near and\nfar CoC values around foreground objects."),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"ShaderMaterial")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("strong",{parentName:"p"},"BokehMaterial")))),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new BokehMaterial"),"(",Object(i.b)("inlineCode",{parentName:"p"},"fill?"),": ",Object(i.b)("em",{parentName:"p"},"boolean"),", ",Object(i.b)("inlineCode",{parentName:"p"},"foreground?"),": ",Object(i.b)("em",{parentName:"p"},"boolean"),"): ",Object(i.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_materials_bokehmaterial.bokehmaterial"},Object(i.b)("em",{parentName:"a"},"BokehMaterial"))),Object(i.b)("p",null,"Constructs a new bokeh material."),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"fill")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"boolean")),Object(i.b)("td",{parentName:"tr",align:"left"},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"foreground")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"boolean")),Object(i.b)("td",{parentName:"tr",align:"left"},"false")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_materials_bokehmaterial.bokehmaterial"},Object(i.b)("em",{parentName:"a"},"BokehMaterial"))),Object(i.b)("p",null,"Overrides: void"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/materials/BokehMaterial.ts#L16"},"packages/engine/src/renderer/postprocessing/materials/BokehMaterial.ts:16")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"generatekernel"},"generateKernel"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("inlineCode",{parentName:"p"},"Private"),Object(i.b)("strong",{parentName:"p"},"generateKernel"),"(): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Generates the blur kernels; one big one and a small one for highlights."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/materials/BokehMaterial.ts#L66"},"packages/engine/src/renderer/postprocessing/materials/BokehMaterial.ts:66")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"settexelsize"},"setTexelSize"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"setTexelSize"),"(",Object(i.b)("inlineCode",{parentName:"p"},"x"),": ",Object(i.b)("em",{parentName:"p"},"any"),", ",Object(i.b)("inlineCode",{parentName:"p"},"y"),": ",Object(i.b)("em",{parentName:"p"},"any"),"): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Sets the texel size."),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"x")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"any")),Object(i.b)("td",{parentName:"tr",align:"left"},"The texel width.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"y")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"any")),Object(i.b)("td",{parentName:"tr",align:"left"},"The texel height.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/materials/BokehMaterial.ts#L95"},"packages/engine/src/renderer/postprocessing/materials/BokehMaterial.ts:95")))}s.isMDXComponent=!0}}]);