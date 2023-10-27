"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[855],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),m=s,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7793:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=t(7462),s=(t(7294),t(3905));const o={sidebar_position:3},i="End Session",a={unversionedId:"tutorials/sessions/end-session",id:"tutorials/sessions/end-session",title:"End Session",description:"A session ends when it expires or when commanded by SH_END.",source:"@site/docs/tutorials/sessions/end-session.md",sourceDirName:"tutorials/sessions",slug:"/tutorials/sessions/end-session",permalink:"/tutorials/sessions/end-session",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create Session",permalink:"/tutorials/sessions/create-session"},next:{title:"Shared Session",permalink:"/tutorials/sessions/shared-sessions"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"end-session"},"End Session"),(0,s.kt)("p",null,"A session ends when it expires or when commanded by ",(0,s.kt)("inlineCode",{parentName:"p"},"SH_END"),"."),(0,s.kt)("p",null,"When using ",(0,s.kt)("inlineCode",{parentName:"p"},"SH_END")," the session is deleted (including its data). When a session expires, there is a flag which controls if the session is deleted."),(0,s.kt)("p",null,"By deleting the data you are releasing server memory for other sessions."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="End Session"',title:'"End','Session"':!0},'{\n  "SH_END":\n  {\n    "tkn":"8467384731478681233"\n  }\n}\n')),(0,s.kt)("p",null,"The server confirms:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="End Session"',title:'"End','Session"':!0},'{\n  "SH_END_RSP":\n  {\n    "st":1,\n    "tkn":"8467384731478681233"\n  }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"st")," is the status, ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),' means "Ok".'))}d.isMDXComponent=!0}}]);