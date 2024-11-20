"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[3341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const s={sidebar_position:20,displayed_sidebar:"homeSidebar"},a="Client APIs",o={unversionedId:"home/client-apis",id:"home/client-apis",title:"Client APIs",description:"There is a Python API in the early stages of development.",source:"@site/docs/home/client-apis.md",sourceDirName:"home",slug:"/home/client-apis",permalink:"/home/client-apis",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Clients",permalink:"/home/clients"},next:{title:"Persist Data",permalink:"/home/persist"}},l={},c=[{value:"Clients",id:"clients",level:2},{value:"Sessions Disabled",id:"sessions-disabled",level:2},{value:"Sessions Enabled",id:"sessions-enabled",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-apis"},"Client APIs"),(0,i.kt)("p",null,"There is a Python API in the early stages of development."),(0,i.kt)("p",null,"If you have an API or plan to do so, feel free to contact via ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/nmsisdb"},"Twitter")," for questions, feedback or requests."),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The query interface is a WebSocket"),(0,i.kt)("li",{parentName:"ul"},"Only HTTP supported currently"),(0,i.kt)("li",{parentName:"ul"},"Client must support 64-bit integers for sessions")),(0,i.kt)("h2",{id:"sessions-disabled"},"Sessions Disabled"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A single map for all keys")),(0,i.kt)("h2",{id:"sessions-enabled"},"Sessions Enabled"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each session has a dedicated map"),(0,i.kt)("li",{parentName:"ul"},"A session is uniquely identified by a session token (64bit unsigned int)"),(0,i.kt)("li",{parentName:"ul"},"A client can create unlimited sessions (within memory limitations)"),(0,i.kt)("li",{parentName:"ul"},"A session doesn't belong to a particular client/user - if a client has a valid session token, it can access the data"),(0,i.kt)("li",{parentName:"ul"},"A session can expire. When a session expires the keys are always deleted, but optionally the session can also be deleted")))}d.isMDXComponent=!0}}]);