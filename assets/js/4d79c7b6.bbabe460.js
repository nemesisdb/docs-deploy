"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[2014],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:6,displayed_sidebar:"clientApisSidebar",sidebar_label:"kv_clear"},i="kv_clear",o={unversionedId:"client_apis/python/kv/Clear",id:"client_apis/python/kv/Clear",title:"kv_clear",description:"Deletes all keys.",source:"@site/docs/client_apis/python/kv/Clear.md",sourceDirName:"client_apis/python/kv",slug:"/client_apis/python/kv/Clear",permalink:"/client_apis/python/kv/Clear",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,displayed_sidebar:"clientApisSidebar",sidebar_label:"kv_clear"},sidebar:"clientApisSidebar",previous:{title:"kv_rmv",permalink:"/client_apis/python/kv/Rmv"},next:{title:"kv_clear_set",permalink:"/client_apis/python/kv/Clear_Set"}},s={},p=[{value:"Raises",id:"raises",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kv_clear"},"kv_clear"),(0,a.kt)("p",null,"Deletes ",(0,a.kt)("em",{parentName:"p"},"all")," keys."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To delete select key(s) use ",(0,a.kt)("a",{parentName:"li",href:"./Rmv"},"kv_rmv")),(0,a.kt)("li",{parentName:"ul"},"To delete all keys and set new keys in a single call, use ",(0,a.kt)("a",{parentName:"li",href:"./Clear_Set"},"kv_clear_set"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"kv_clear() -> int\n")),(0,a.kt)("h1",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The number of keys deleted"),(0,a.kt)("h2",{id:"raises"},"Raises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResponseError")," if query fails"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValueError")," if keys is empty")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"count = await client.kv_clear()\nprint(f'Cleared {count} keys')\n")))}m.isMDXComponent=!0}}]);