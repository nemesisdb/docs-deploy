"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[1613],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>m});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(s),u=r,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return s?n.createElement(m,a(a({ref:t},c),{},{components:s})):n.createElement(m,a({ref:t},c))}));function m(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=s.length,a=new Array(i);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:r,a[1]=o;for(var d=2;d<i;d++)a[d]=s[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},4793:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=s(7462),r=(s(7294),s(3905));const i={sidebar_position:4},a="Shared Session",o={unversionedId:"tutorials/sessions/shared-sessions",id:"tutorials/sessions/shared-sessions",title:"Shared Session",description:"Shared sessions let different services access the same session without knowing the token. This is useful if there are multiple independent backend services that require access to the same session, whilst avoiding having to distribute the session token to each service.",source:"@site/docs/tutorials/sessions/shared-sessions.md",sourceDirName:"tutorials/sessions",slug:"/tutorials/sessions/shared-sessions",permalink:"/tutorials/sessions/shared-sessions",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"End Session",permalink:"/tutorials/sessions/end-session"},next:{title:"First Steps",permalink:"/category/first-steps"}},l={},d=[{value:"Shared Session Use Case",id:"shared-session-use-case",level:2},{value:"Shared Session Token Generation",id:"shared-session-token-generation",level:2}],c={toc:d},h="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shared-session"},"Shared Session"),(0,r.kt)("p",null,"Shared sessions let different services access the same session without knowing the token. This is useful if there are multiple independent backend services that require access to the same session, whilst avoiding having to distribute the session token to each service. "),(0,r.kt)("p",null,"A normal (non-shared) session token is randomly generated, so if two clients create a session with the same name, they will receive a different token."),(0,r.kt)("p",null,"But with a shared session, the name is used to generate the token which lets ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_OPEN")," generate the same token if the name is the same ",(0,r.kt)("strong",{parentName:"p"},"and")," the session is shared."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_OPEN")," attempts to open a session that isn't shared, it will fail."),(0,r.kt)("h2",{id:"shared-session-use-case"},"Shared Session Use Case"),(0,r.kt)("p",null,"We have a platform that has web and mobile app users. We need default settings for both types in a session that never expires. The backend services that handle web and mobile users are completely separate, perhaps different micro services. We need a practical way to access default data without bothering the primary database, hardcoding values or using config files."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On initial deployment we use ",(0,r.kt)("inlineCode",{parentName:"li"},"SH_NEW")," to create a shared session that never expires")),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SH_NEW",src:s(6055).Z,width:"415",height:"234"}))),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Services that require access use ",(0,r.kt)("inlineCode",{parentName:"li"},"SH_OPEN")," with the session name")),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SH_NEW",src:s(8808).Z,width:"452",height:"229"}))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Clients have the shared session's token which they use in subsequent commands")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"shared-session-token-generation"},"Shared Session Token Generation"),(0,r.kt)("p",null,"When a shared session is created with ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_NEW")," the token is generated from the session name. This ensures when ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_OPEN")," is used with the same name, the same token is returned."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"A session opened with ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_OPEN")," is not restricted - i.e. data be deleted or update by any client with the token."),(0,r.kt)("p",{parentName:"admonition"},"This is because NemesisDB doesn't authenticate users yet, which is required to determine if a client has permission to perform an action.")))}p.isMDXComponent=!0},6055:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/shared_shnew-23d4cdb6f2e26d8e320990106d55a64e.png"},8808:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/shared_shopen-046dba4e337b4486f0462f43fb889283.png"}}]);