"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[6802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,u=m["".concat(p,".").concat(c)]||m[c]||k[c]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10,displayed_sidebar:"homeSidebar"},l="Configure",o={unversionedId:"home/config",id:"home/config",title:"Configure",description:"The configuration has settings:",source:"@site/docs/home/config.md",sourceDirName:"home",slug:"/home/config",permalink:"/home/config",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Run",permalink:"/home/run"},next:{title:"Key Values",permalink:"/home/keyvalues"}},p={},d=[{value:"<code>session::save</code>",id:"sessionsave",level:2},{value:"Default Config",id:"default-config",level:2}],s={toc:d},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure"},"Configure"),(0,r.kt)("p",null,"The configuration has settings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"version"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Must be 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"kv" for key-value, "ts" for timeseries')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kv"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Settings for key-value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Settings for timeseries")))),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"kv"},(0,r.kt)("inlineCode",{parentName:"h1"},"kv")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IP address of the WebSocket server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"port"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port of the WebSocket server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxPayload"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max bytes per query. A query larger than this will be rejected.",(0,r.kt)("br",null),"Absolute min/max are 64 bytes and 2MB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"session"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Settings for session saving (details below)")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"sessionsave"},(0,r.kt)("inlineCode",{parentName:"h2"},"session::save")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"),": the ",(0,r.kt)("inlineCode",{parentName:"td"},"SH_SAVE")," command is available and ",(0,r.kt)("inlineCode",{parentName:"td"},"path")," must exist. ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"false"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"SH_SAVE")," not available, and ",(0,r.kt)("inlineCode",{parentName:"td"},"path")," is not checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the directory where data is stored. Must be a directory.",(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"enabled")," is true, this path must exist")))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../api/sessions/sh-save"},"SH_SAVE")," for more."),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"ts"},(0,r.kt)("inlineCode",{parentName:"h1"},"ts")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ip"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IP address of the WebSocket server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"port"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port of the WebSocket server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxPayload"),(0,r.kt)("td",{parentName:"tr",align:"center"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max bytes per query. A query larger than this will be rejected.",(0,r.kt)("br",null),"Absolute min/max are 64 bytes and 2MB.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"default-config"},"Default Config"),(0,r.kt)("p",null,"There is a default configuration included in the install package and Docker image. "),(0,r.kt)("p",null,"Default settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"KV mode"),(0,r.kt)("li",{parentName:"ul"},"Listen on ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1:1987")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SH_SAVE")," disabled (",(0,r.kt)("inlineCode",{parentName:"li"},"kv:save::session::path")," does not need to exist)")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="default.json"',title:'"default.json"'},'{\n  "version":2,\n  "mode":"kv",\n  "kv":\n  {\n    "ip":"127.0.0.1",\n    "port":1987,\n    "maxPayload":1024,\n    "session":\n    {\n      "save":\n      {\n        "enabled":false,\n        "path":"./data"\n      }\n    }\n  },\n  "ts":\n  {\n    "ip":"127.0.0.1",\n    "port":1987,\n    "maxPayload":1024\n  }\n}\n\n')))}k.isMDXComponent=!0}}]);