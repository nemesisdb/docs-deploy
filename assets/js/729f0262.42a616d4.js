"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[2502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),k=r,c=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7012:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:120},i="KV_LOAD",o={unversionedId:"api/kv/kv-load",id:"api/kv/kv-load",title:"KV_LOAD",description:'This command is only available when the server mode is "kv". If the server mode is "kvsessions", use SHLOAD.',source:"@site/docs/api/kv/kv-load.md",sourceDirName:"api/kv",slug:"/api/kv/kv-load",permalink:"/api/kv/kv-load",draft:!1,tags:[],version:"current",sidebarPosition:120,frontMatter:{sidebar_position:120},sidebar:"apiSidebar",previous:{title:"KV_SAVE",permalink:"/api/kv/kv-save"}},s={},p=[{value:"Response",id:"response",level:2},{value:"Example",id:"example",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kv_load"},"KV_LOAD"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This command is only available when the server mode is ",(0,r.kt)("inlineCode",{parentName:"p"},'"kv"'),". If the server mode is ",(0,r.kt)("inlineCode",{parentName:"p"},'"kv_sessions"'),", use ",(0,r.kt)("a",{parentName:"p",href:"../sessions/sh-load"},(0,r.kt)("inlineCode",{parentName:"a"},"SH_LOAD")),".")),(0,r.kt)("p",null,"Loads data from the filesystem at runtime."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This command is available even if ",(0,r.kt)("inlineCode",{parentName:"li"},"kv::save::enabled")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"The data is read from the ",(0,r.kt)("inlineCode",{parentName:"li"},"kv::save::path")," set in the config file")),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data set name, previously used in ",(0,r.kt)("inlineCode",{parentName:"td"},"KV_SAVE")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"st"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Dataset name, as used in the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of keys loaded")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Possible values for ",(0,r.kt)("inlineCode",{parentName:"p"},"st"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LoadError"),(0,r.kt)("li",{parentName:"ul"},"LoadComplete"),(0,r.kt)("li",{parentName:"ul"},"CommandSyntax "),(0,r.kt)("li",{parentName:"ul"},"ValueTypeInvalid")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," for status values."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Save data with ",(0,r.kt)("a",{parentName:"p",href:"./kv-save"},(0,r.kt)("inlineCode",{parentName:"a"},"KV_SAVE")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Save data"',title:'"Save','data"':!0},'{\n  "KV_SAVE":\n  {\n    "name":"users"\n  }\n}\n')),(0,r.kt)("p",null,"If the data is deleted or the server is restarted it can be restored:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Load Request"',title:'"Load','Request"':!0},'{\n  "KV_LOAD":\n  {\n    "name":"dump1"\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Load Response"',title:'"Load','Response"':!0},'{\n  "KV_LOAD_RSP":\n  {\n    "st": 141,\n    "name":"dump1",\n    "keys": 50\n  }\n}\n')))}u.isMDXComponent=!0}}]);