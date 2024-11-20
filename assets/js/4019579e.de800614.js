"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[8421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=p(n),c=a,u=f["".concat(l,".").concat(c)]||f[c]||m[c]||i;return n?r.createElement(u,s(s({ref:t},d),{},{components:n})):r.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[f]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5,displayed_sidebar:"clientApisSidebar",sidebar_label:"session_info"},s="session_info",o={unversionedId:"client_apis/python/sessions/Info",id:"client_apis/python/sessions/Info",title:"session_info",description:"Returns information for a session.",source:"@site/docs/client_apis/python/sessions/Info.md",sourceDirName:"client_apis/python/sessions",slug:"/client_apis/python/sessions/Info",permalink:"/client_apis/python/sessions/Info",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"clientApisSidebar",sidebar_label:"session_info"},sidebar:"clientApisSidebar",previous:{title:"session_exists",permalink:"/client_apis/python/sessions/Exists"},next:{title:"session_info_all",permalink:"/client_apis/python/sessions/Info_All"}},l={},p=[{value:"Returns",id:"returns",level:2}],d={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"session_info"},"session_info"),(0,a.kt)("p",null,"Returns information for a session."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tuple(bool, dict)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool")," : ",(0,a.kt)("inlineCode",{parentName:"li"},"True")," is the command was successful, otherwise ",(0,a.kt)("inlineCode",{parentName:"li"},"False")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dict")," : information. See table below")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"keyCnt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of keys in the session")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"shared"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Indicates if the session is shared")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"expires"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true if the session expires, false if it never expires")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"expiry"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Expiry information, only present if ",(0,a.kt)("inlineCode",{parentName:"td"},"expires")," is ",(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expiry"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,a.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Duration, in seconds, before expiring")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"remaining"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Duration, in seconds, remaining until the session expires. Note, this can be negative because the session can expire before the session monitor has checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"deleteSession"),(0,a.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If true, the session is deleted when the session expires. If false, only the data is deleted")))))}m.isMDXComponent=!0}}]);