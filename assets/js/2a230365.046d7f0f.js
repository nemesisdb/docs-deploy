"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[2876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(f,s(s({ref:t},m),{},{components:n})):a.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10},s="SH_OPEN",o={unversionedId:"api/sessions/sh-open",id:"api/sessions/sh-open",title:"SH_OPEN",description:"Opens a shared session from the session name.",source:"@site/docs/api/sessions/sh-open.md",sourceDirName:"api/sessions",slug:"/api/sessions/sh-open",permalink:"/api/sessions/sh-open",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"apiSidebar",previous:{title:"SH_END",permalink:"/api/sessions/sh-end"},next:{title:"SH_INFO",permalink:"/api/sessions/sh-info"}},l={},p=[{value:"Response",id:"response",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sh_open"},"SH_OPEN"),(0,r.kt)("p",null,"Opens a shared session from the session name."),(0,r.kt)("p",null,"The session must have been created with ",(0,r.kt)("inlineCode",{parentName:"p"},'"shared":true')," for this command to succeed."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is the same as an existing session but the existing session is not shared, this command fails.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session name. Must be the same as the name used when created."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SH_OPEN_RSP")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," page for status values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session name as used in the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"st"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status")))),(0,r.kt)("p",null,"Possible statuses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ok"),(0,r.kt)("li",{parentName:"ul"},"SessionNotExist"),(0,r.kt)("li",{parentName:"ul"},"SessionOpenFail (",(0,r.kt)("inlineCode",{parentName:"li"},"name")," incorrect or session is not shared)"),(0,r.kt)("li",{parentName:"ul"},"ValueMissing (no ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),")"),(0,r.kt)("li",{parentName:"ul"},"ValueTypeInvalid (",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is wrong type)"),(0,r.kt)("li",{parentName:"ul"},"ValueSize (",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is empty)")))}d.isMDXComponent=!0}}]);