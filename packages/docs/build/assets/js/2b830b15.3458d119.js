(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{2722:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,u=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return n?a.a.createElement(u,i(i({ref:t},s),{},{components:n})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},544:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(2722)),c={id:"scene_behaviors_createtransformcomponent",title:"Module: scene/behaviors/createTransformComponent",sidebar_label:"scene/behaviors/createTransformComponent",custom_edit_url:null,hide_title:!0},i={unversionedId:"docs-engine/modules/scene_behaviors_createtransformcomponent",id:"docs-engine/modules/scene_behaviors_createtransformcomponent",isDocsHomePage:!1,title:"Module: scene/behaviors/createTransformComponent",description:"Module: scene/behaviors/createTransformComponent",source:"@site/docs/docs-engine/modules/scene_behaviors_createtransformcomponent.md",slug:"/docs-engine/modules/scene_behaviors_createtransformcomponent",permalink:"/docs/docs-engine/modules/scene_behaviors_createtransformcomponent",editUrl:null,version:"current",sidebar_label:"scene/behaviors/createTransformComponent",sidebar:"sidebar",previous:{title:"Module: scene/behaviors/createSkybox",permalink:"/docs/docs-engine/modules/scene_behaviors_createskybox"},next:{title:"Module: scene/behaviors/createTriggerVolume",permalink:"/docs/docs-engine/modules/scene_behaviors_createtriggervolume"}},b=[{value:"Functions",id:"functions",children:[{value:"createTransformComponent",id:"createtransformcomponent",children:[]}]}],s={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-scenebehaviorscreatetransformcomponent"},"Module: scene/behaviors/createTransformComponent"),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("h3",{id:"createtransformcomponent"},"createTransformComponent"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"createTransformComponent"),"(",Object(o.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/ecs_classes_entity.entity"},Object(o.b)("em",{parentName:"a"},"Entity")),", ",Object(o.b)("inlineCode",{parentName:"p"},"args"),": { ",Object(o.b)("inlineCode",{parentName:"p"},"objArgs"),": { ",Object(o.b)("inlineCode",{parentName:"p"},"position"),": XYZInterface ; ",Object(o.b)("inlineCode",{parentName:"p"},"rotation"),": XYZInterface ; ",Object(o.b)("inlineCode",{parentName:"p"},"scale"),": XYZInterface  }  }): ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"entity")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/docs/docs-engine/classes/ecs_classes_entity.entity"},Object(o.b)("em",{parentName:"a"},"Entity")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"args")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"object"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"args.objArgs")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"object"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"args.objArgs.position")),Object(o.b)("td",{parentName:"tr",align:"left"},"XYZInterface")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"args.objArgs.rotation")),Object(o.b)("td",{parentName:"tr",align:"left"},"XYZInterface")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"args.objArgs.scale")),Object(o.b)("td",{parentName:"tr",align:"left"},"XYZInterface")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/scene/behaviors/createTransformComponent.ts#L14"},"packages/engine/src/scene/behaviors/createTransformComponent.ts:14")))}p.isMDXComponent=!0}}]);