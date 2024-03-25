"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={slug:"/",displayed_sidebar:"homeSidebar"},l="NemesisDB",o={unversionedId:"intro",id:"intro",title:"NemesisDB",description:"NemesisDB is an in-memory JSON database.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/",displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar"},s={},u=[{value:"Install",id:"install",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nemesisdb"},"NemesisDB"),(0,a.kt)("p",null,"NemesisDB is an in-memory JSON database."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The query interface is WebSockets using JSON"),(0,a.kt)("li",{parentName:"ul"},"Data can be persisted to the filesystem"),(0,a.kt)("li",{parentName:"ul"},"Data can be restored from file at startup or with a command at any time")),(0,a.kt)("p",null,"NemesisDB is available as a 64-bit Debian package and Docker image for x86 (Intel/AMD) CPUs."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A session is identified with a 'session token' which is a 64-bit integer. Your client must handle 64-bit integers.")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"The install includes a default config to start the server on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1987"),". This can be changed in the ",(0,a.kt)("a",{parentName:"p",href:"./home/config"},"config")," file. "),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./home/install/package"},"Debian package")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./home/install/docker/linux"},"Docker"))),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./home/install/docker/windows"},"Docker"))),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"next-steps"},"Next Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./home/tldr"},"TLDR")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tutorials/sessions/what-is-a-session"},"Session Basics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/tutorials/first-steps/setup"},"First Steps"))))}m.isMDXComponent=!0}}]);