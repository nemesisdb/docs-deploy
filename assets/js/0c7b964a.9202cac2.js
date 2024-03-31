"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[1675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,f=d["".concat(o,".").concat(k)]||d[k]||u[k]||s;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:30},i="SH_LOAD",l={unversionedId:"api/sessions/sh-load",id:"api/sessions/sh-load",title:"SH_LOAD",description:'This command is only available when the server mode is "kvsessions". If the server mode is "kv", use KVLOAD.',source:"@site/docs/api/sessions/sh-load.md",sourceDirName:"api/sessions",slug:"/api/sessions/sh-load",permalink:"/api/sessions/sh-load",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"apiSidebar",previous:{title:"SH_SAVE",permalink:"/api/sessions/sh-save"},next:{title:"Key Value",permalink:"/category/key-value"}},o={},p=[{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sh_load"},"SH_LOAD"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This command is only available when the server mode is ",(0,r.kt)("inlineCode",{parentName:"p"},'"kv_sessions"'),". If the server mode is ",(0,r.kt)("inlineCode",{parentName:"p"},'"kv"'),", use ",(0,r.kt)("a",{parentName:"p",href:"../kv/kv-load"},(0,r.kt)("inlineCode",{parentName:"a"},"KV_LOAD")),".")),(0,r.kt)("p",null,"Loads data from the filesystem at runtime as an alternative to loading data at startup."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data is read from the ",(0,r.kt)("inlineCode",{parentName:"li"},"session::save::path")," set in the config file"),(0,r.kt)("li",{parentName:"ul"},"This command is available even if ",(0,r.kt)("inlineCode",{parentName:"li"},"session::save::enabled")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"Restored sessions retain their shared and expiry settings. If a session has expiry settings, the expiry time is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"now + duration"),"."),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data set name, previously used in ",(0,r.kt)("inlineCode",{parentName:"td"},"SH_SAVE")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If a session is loaded that already exists, the existing session is not changed.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"st"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Dataset name, as used in the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sessions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of sessions loaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of keys loaded")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Possible values for ",(0,r.kt)("inlineCode",{parentName:"p"},"st"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LoadError"),(0,r.kt)("li",{parentName:"ul"},"LoadComplete"),(0,r.kt)("li",{parentName:"ul"},"CommandSyntax "),(0,r.kt)("li",{parentName:"ul"},"ValueTypeInvalid")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," for status values."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Save data (see ",(0,r.kt)("a",{parentName:"p",href:"./sh-save"},(0,r.kt)("inlineCode",{parentName:"a"},"SH_SAVE")),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Save all sessions"',title:'"Save',all:!0,'sessions"':!0},'{\n  "SH_SAVE":\n  {\n    "name":"dump1"\n  }\n}\n')),(0,r.kt)("p",null,"To restore:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Request"',title:'"Request"'},'{\n  "SH_LOAD":\n  {\n    "name":"dump1"\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n  "SH_LOAD_RSP":\n  {\n    "name":"dump1",\n    "st": 141,\n    "sessions": 10,\n    "keys": 50\n  }\n}\n')))}u.isMDXComponent=!0}}]);