(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{2722:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=b(n),f=r,d=l["".concat(o,".").concat(f)]||l[f]||u[f]||c;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},407:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(2722)),o={id:"state.statecontext",title:"Interface: StateContext",sidebar_label:"StateContext",custom_edit_url:null,hide_title:!0},s={unversionedId:"docs-nft/interfaces/state.statecontext",id:"docs-nft/interfaces/state.statecontext",isDocsHomePage:!1,title:"Interface: StateContext",description:"Interface: StateContext",source:"@site/docs/docs-nft/interfaces/state.statecontext.md",slug:"/docs-nft/interfaces/state.statecontext",permalink:"/docs/docs-nft/interfaces/state.statecontext",editUrl:null,version:"current",sidebar_label:"StateContext",sidebar:"sidebar",previous:{title:"Enumeration: ActionType",permalink:"/docs/docs-nft/enums/reducer.actiontype"},next:{title:"Interface: Store",permalink:"/docs/docs-nft/interfaces/state.store"}},i=[{value:"Properties",id:"properties",children:[{value:"contract",id:"contract",children:[]},{value:"ethPrice",id:"ethprice",children:[]},{value:"isAuthenticated",id:"isauthenticated",children:[]},{value:"tokensOnSale",id:"tokensonsale",children:[]},{value:"user",id:"user",children:[]}]}],p={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-statecontext"},"Interface: StateContext"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/docs-nft/modules/state"},"state"),".StateContext"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"contract"},"contract"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"contract"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/docs-nft/modules/types#contractprops"},Object(c.b)("em",{parentName:"a"},"ContractProps"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/nft/src/state.tsx#L9"},"packages/nft/src/state.tsx:9")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"ethprice"},"ethPrice"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"ethPrice"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/nft/src/state.tsx#L12"},"packages/nft/src/state.tsx:12")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isauthenticated"},"isAuthenticated"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"isAuthenticated"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/nft/src/state.tsx#L8"},"packages/nft/src/state.tsx:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"tokensonsale"},"tokensOnSale"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"tokensOnSale"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/docs-nft/modules/components_token#tokenprops"},Object(c.b)("em",{parentName:"a"},"TokenProps")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/nft/src/state.tsx#L11"},"packages/nft/src/state.tsx:11")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"user"},"user"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"user"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/docs-nft/modules/types#userprops"},Object(c.b)("em",{parentName:"a"},"UserProps"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/nft/src/state.tsx#L10"},"packages/nft/src/state.tsx:10")))}b.isMDXComponent=!0}}]);