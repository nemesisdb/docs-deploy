"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[844],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var s=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=s.createContext({}),p=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return t?s.createElement(f,o(o({ref:n},u),{},{components:t})):s.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<r;p++)o[p]=t[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var s=t(7462),i=(t(7294),t(3905));const r={sidebar_position:2},o="Create Session",a={unversionedId:"tutorials/sessions/create-session",id:"tutorials/sessions/create-session",title:"Create Session",description:"A session is created with the SH_NEW command.",source:"@site/docs/tutorials/sessions/create-session.md",sourceDirName:"tutorials/sessions",slug:"/tutorials/sessions/create-session",permalink:"/tutorials/sessions/create-session",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is a Session",permalink:"/tutorials/sessions/what-is-a-session"},next:{title:"End Session",permalink:"/tutorials/sessions/end-session"}},l={},p=[{value:"Expiring Session",id:"expiring-session",level:2},{value:"Expiring Session, Delete Data Only",id:"expiring-session-delete-data-only",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-session"},"Create Session"),(0,i.kt)("p",null,"A session is created with the ",(0,i.kt)("inlineCode",{parentName:"p"},"SH_NEW")," command."),(0,i.kt)("p",null,"The minimum required is a ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Session Never Expires"',title:'"Session',Never:!0,'Expires"':!0},'{\n  "SH_NEW":\n  {\n    "name":"session1"\n  }\n}\n')),(0,i.kt)("p",null,"Expiry settings aren't set so by default this session never expires."),(0,i.kt)("p",null,"The server responds with a ",(0,i.kt)("inlineCode",{parentName:"p"},"SH_NEW_RSP")," containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and the token, ",(0,i.kt)("inlineCode",{parentName:"p"},"tkn"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="New Session Response"',title:'"New',Session:!0,'Response"':!0},'{\n  "SH_NEW_RSP":\n  {\n    "name":"session1",\n    "tkn":"8467384731478681233"\n  }\n}\n')),(0,i.kt)("p",null,"The token is used in subsequent ",(0,i.kt)("inlineCode",{parentName:"p"},"KV_")," commands to access its data or with ",(0,i.kt)("inlineCode",{parentName:"p"},"SH_END")," to end the session."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"expiring-session"},"Expiring Session"),(0,i.kt)("p",null,"Session expiry is useful for controling when data is deleted, releasing memory."),(0,i.kt)("p",null,"We can create a session that expires after a minute by setting duration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",1:!0,className:"language-json",metastring:'title="Session Expires in 1 minute, deletes session"',title:'"Session',Expires:!0,in:!0,"minute,":!0,deletes:!0,'session"':!0},'{\n  "SH_NEW":\n  {\n    "name":"session2",\n    "expiry":\n    {\n      "duration": 60,\n      "deleteSession":true\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"deleteSession:true")," means the session is also deleted."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"expiring-session-delete-data-only"},"Expiring Session, Delete Data Only"),(0,i.kt)("p",null,"We create a session that expires after 10 minutes, but the session is not deleted, only its data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",10:!0,className:"language-json",metastring:'title="Session Expires in 10 minute, deletes data only"',title:'"Session',Expires:!0,in:!0,"minute,":!0,deletes:!0,data:!0,'only"':!0},'{\n  "SH_NEW":\n  {\n    "name":"session3",\n    "expiry":\n    {\n      "duration": 600,\n      "deleteSession":false\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);