"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,displayed_sidebar:"apiSidebar"},s="Overview",o={unversionedId:"api/Overview",id:"api/Overview",title:"Overview",description:"There are two APIs: Session and KeyValue.",source:"@site/docs/api/Overview.md",sourceDirName:"api",slug:"/api/Overview",permalink:"/api/Overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",next:{title:"Response Status Values",permalink:"/api/Statuses"}},l={},p=[{value:"Session",id:"session",level:2},{value:"KV",id:"kv",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"There are two APIs: Session and KeyValue."),(0,a.kt)("p",null,"Important points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All commands must be in upper case and all parameters are in lower case unless the docs say otherwise (i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"SH_NEW")," has a ",(0,a.kt)("inlineCode",{parentName:"li"},"deleteSession")," parameter)."),(0,a.kt)("li",{parentName:"ul"},"All commands are a JSON object, i.e. for ",(0,a.kt)("inlineCode",{parentName:"li"},"SH_NEW"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_NEW": {\n    "name":"session1"\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Many commands return a response that contains a status (",(0,a.kt)("inlineCode",{parentName:"li"},"st"),") which is an unsigned integer. Possible values are listed ",(0,a.kt)("a",{parentName:"li",href:"./Statuses"},"here"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Command names must be uppercase."),(0,a.kt)("p",{parentName:"admonition"},"Parameters are case-sensitive.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"session"},"Session"),(0,a.kt)("p",null,"Beginning with ",(0,a.kt)("inlineCode",{parentName:"p"},"SH_"),", these commands create, open, end and return session information. "),(0,a.kt)("p",null,"A session does not belong to a particular client and a client can create multiple sessions, accessing their data as required by using the appropriate session token."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"kv"},"KV"),(0,a.kt)("p",null,"These store, update, find and retrieve session data. They start ",(0,a.kt)("inlineCode",{parentName:"p"},"KV_"),"."),(0,a.kt)("p",null,"The commands require a session token which is typically returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"SH_NEW")," but may also be returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"SH_OPEN")," if using a shared session."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"how-to-use-the-apis"},"How to Use the APIs"),(0,a.kt)("p",null,"A good place to start is the ",(0,a.kt)("a",{parentName:"p",href:"../tutorials/first-steps/setup"},"First Steps")," which shows how to create a session and store/get data."))}d.isMDXComponent=!0}}]);