"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,displayed_sidebar:"apiSidebar"},o="Overview",s={unversionedId:"api/Overview",id:"api/Overview",title:"Overview",description:"There are two APIs, Session and KeyValue.",source:"@site/docs/api/Overview.md",sourceDirName:"api",slug:"/api/Overview",permalink:"/docs/api/Overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",next:{title:"Response Status Values",permalink:"/docs/api/Statuses"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"There are two APIs, Session and KeyValue."),(0,a.kt)("p",null,"All commands must be in upper case and all parameters are in lower case unless the docs say otherwise (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"SH_NEW")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteSession")," parameter)."),(0,a.kt)("p",null,"Many commands return a response that contains a status (",(0,a.kt)("inlineCode",{parentName:"p"},"st"),") which is an unsigned integer. Possible values are listed ",(0,a.kt)("a",{parentName:"p",href:"./Statuses"},"here"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Command names and parameters are case-sensitive.")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Session")),(0,a.kt)("p",null,"Session commands to create, open, end and return session information. They begin with ",(0,a.kt)("inlineCode",{parentName:"p"},"SH_"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"KV")),(0,a.kt)("p",null,"These store, update, find and retrieve data session data. They start ",(0,a.kt)("inlineCode",{parentName:"p"},"KV_"),"."),(0,a.kt)("p",null,"The commands require a session token which is typically returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"SH_NEW")," but may also be returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"SH_OPEN")," if using a shared session."),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"how-to-use-the-apis"},"How to Use the APIs"),(0,a.kt)("p",null,"A good place to start is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SH_NEW")," - create a session, which returns the session token"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"KV_SET")," - store keys in the session, using the token from step 1"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"KV_GET")," - get keys from the cache"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SH_END")," - delete the session and its data")),(0,a.kt)("p",null,"After this you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"SH_NEW")," to create a session that expires, either deleting the session and data, or just its data."))}d.isMDXComponent=!0}}]);