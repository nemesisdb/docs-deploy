"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[4411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:40,displayed_sidebar:"clientApisSidebar"},s="sh_add",o={unversionedId:"client_apis/python/sh/sh_add",id:"client_apis/python/sh/sh_add",title:"sh_add",description:"Stores keys but does not overwrite if it already exists.",source:"@site/docs/client_apis/python/sh/sh_add.md",sourceDirName:"client_apis/python/sh",slug:"/client_apis/python/sh/sh_add",permalink:"/client_apis/python/sh/sh_add",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,displayed_sidebar:"clientApisSidebar"},sidebar:"clientApisSidebar",previous:{title:"sh_get",permalink:"/client_apis/python/sh/sh_get"},next:{title:"sh_rmv",permalink:"/client_apis/python/sh/sh_rmv"}},l={},p=[{value:"Raises",id:"raises",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sh_add"},"sh_add"),(0,a.kt)("p",null,"Stores keys but does not overwrite if it already exists."),(0,a.kt)("p",null,"To overwrite an existing key, use ",(0,a.kt)("a",{parentName:"p",href:"./sh_set"},"sh_set"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"sh_add(tkn: int, keys: dict) -> None\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keys"),(0,a.kt)("td",{parentName:"tr",align:null},"Keys to store. If a key already exists, it does not overwrite")))),(0,a.kt)("h2",{id:"raises"},"Raises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResponseError")," if query fails")))}u.isMDXComponent=!0}}]);