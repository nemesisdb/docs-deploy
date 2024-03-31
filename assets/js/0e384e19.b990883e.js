"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={slug:"/",displayed_sidebar:"homeSidebar"},s="NemesisDB",l={unversionedId:"intro",id:"intro",title:"NemesisDB",description:"NemesisDB is an in-memory JSON key-value and timeseries database.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/",displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar"},o={},u=[{value:"Key Value",id:"key-value",level:2},{value:"Sessions Enabled",id:"sessions-enabled",level:3},{value:"Sessions Disabled",id:"sessions-disabled",level:3},{value:"Time Series",id:"time-series",level:2},{value:"Install",id:"install",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nemesisdb"},"NemesisDB"),(0,i.kt)("p",null,"NemesisDB is an in-memory JSON key-value and timeseries database."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The query interface is over a WebSocket using JSON"),(0,i.kt)("li",{parentName:"ul"},"Key Value can be with or without sessions"),(0,i.kt)("li",{parentName:"ul"},"Session and key value data can be persisted to the filesystem, then loaded on startup or at runtime with a command"),(0,i.kt)("li",{parentName:"ul"},"Time series is basic but will be extended in future versions (no data persistence yet)")),(0,i.kt)("h2",{id:"key-value"},"Key Value"),(0,i.kt)("h3",{id:"sessions-enabled"},"Sessions Enabled"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sessions are similar to Redis' hash sets: they group related data"),(0,i.kt)("li",{parentName:"ul"},"Each session has a dedicated map"),(0,i.kt)("li",{parentName:"ul"},"A session can expire, after which, the keys are deleted"),(0,i.kt)("li",{parentName:"ul"},"Sessions are created with the ",(0,i.kt)("inlineCode",{parentName:"li"},"SH_NEW")," command, which returns a session token"),(0,i.kt)("li",{parentName:"ul"},"The session token is used in key value commands to interact with data only in that session"),(0,i.kt)("li",{parentName:"ul"},"Session data can be persisted to the filesystem"),(0,i.kt)("li",{parentName:"ul"},"Session data can be restored from file at startup or with a command at runtime")),(0,i.kt)("h3",{id:"sessions-disabled"},"Sessions Disabled"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A single map contains all key values  "),(0,i.kt)("li",{parentName:"ul"},"Don't need to supply a session token with each command"),(0,i.kt)("li",{parentName:"ul"},"Lower memory usage and latency")),(0,i.kt)("h2",{id:"time-series"},"Time Series"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basic support to store, get, index and conditionally find"),(0,i.kt)("li",{parentName:"ul"},"No data persistence")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"NemesisDB is available as an x86 64-bit Debian package, Docker image or can be built for Linux from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nemesisdb/nemesisdb"},"source"),"."),(0,i.kt)("p",null,"The install includes a default config to start the server on ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1987"),". This can be changed in the ",(0,i.kt)("a",{parentName:"p",href:"./home/config"},"config")," file. "),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./home/install/package"},"Debian package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./home/install/docker/linux"},"Docker"))),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./home/install/docker/windows"},"Docker"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./home/tldr-kv"},"Key Value TLDR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./home/tldr-ts"},"Time Series TLDR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tutorials/first-steps-kv/setup"},"First Steps: KV without sessions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tutorials/first-steps/setup"},"First Steps: KV with sessions"))))}m.isMDXComponent=!0}}]);