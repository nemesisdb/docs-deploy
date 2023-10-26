"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:90},i="KV_COUNT",o={unversionedId:"api/kv/kv-count",id:"api/kv/kv-count",title:"KV_COUNT",description:"Returns how many keys are in a session.",source:"@site/docs/api/kv/kv-count.md",sourceDirName:"api/kv",slug:"/api/kv/kv-count",permalink:"/docs-deploy/api/kv/kv-count",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"apiSidebar",previous:{title:"KV_CLEAR",permalink:"/docs-deploy/api/kv/kv-clear"},next:{title:"KV_APPEND",permalink:"/docs-deploy/api/kv/kv-append"}},p={},s=[{value:"Response",id:"response",level:2}],c={toc:s},k="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kv_count"},"KV_COUNT"),(0,a.kt)("p",null,"Returns how many keys are in a session."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Session token"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"KV_COUNT_RSP")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"st"),(0,a.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cnt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of keys in the session")))),(0,a.kt)("p",null,"Possible status values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ok"),(0,a.kt)("li",{parentName:"ul"},"CommandSyntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_COUNT":\n  {\n    "tkn":"16127334958516145570"\n  }\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Cleared session which contained two keys"',title:'"Cleared',session:!0,which:!0,contained:!0,two:!0,'keys"':!0},'{\n  "KV_COUNT_RSP": {\n    "st": 1,\n    "cnt": 3457,\n    "tkn": "16127334958516145570"\n  }\n}\n')))}u.isMDXComponent=!0}}]);