"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[4891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=s,k=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const i={sidebar_position:2,displayed_sidebar:"tutorialSidebar"},r="Create Session",o={unversionedId:"tutorials/first-steps/new-session",id:"tutorials/first-steps/new-session",title:"Create Session",description:"This shows how to create a session, store data and then get that data.",source:"@site/docs/tutorials/first-steps/new-session.md",sourceDirName:"tutorials/first-steps",slug:"/tutorials/first-steps/new-session",permalink:"/tutorials/first-steps/new-session",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/tutorials/first-steps/setup"},next:{title:"Set and Get",permalink:"/tutorials/first-steps/setandget"}},l={},p=[{value:"All Session Info",id:"all-session-info",level:2},{value:"Create Session",id:"create-session-1",level:2},{value:"Session Info",id:"session-info",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...i}=e;return(0,s.kt)(m,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-session"},"Create Session"),(0,s.kt)("p",null,"This shows how to create a session, store data and then get that data."),(0,s.kt)("h2",{id:"all-session-info"},"All Session Info"),(0,s.kt)("p",null,"Start by confirming there are no sessions - there can't because we're starting from an empty database, but the command may be useful later."),(0,s.kt)("p",null,'Paste this into the "Compose message" box and press Send:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_INFO_ALL":{}\n}\n')),(0,s.kt)("p",null,"The 'Response' pane shows our request and the response:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3015).Z,width:"781",height:"235"})),(0,s.kt)("p",null,"The response confirms we have no sessions or keys."),(0,s.kt)("h2",{id:"create-session-1"},"Create Session"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SH_NEW")," is used to create a session. Paste and send this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Session without expiry"',title:'"Session',without:!0,'expiry"':!0},'{\n  "SH_NEW":\n  {\n    "name":"user1"\n  }\n}\n')),(0,s.kt)("p",null,"The response will be similar to the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_NEW_RSP": {\n    "st": 1,\n    "name": "user1",\n    "tkn": 14247375118774737462\n  }\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"st")," is the status. 1 means Ok/Success"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," is the same name as in the request"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"tkn")," is the session token (you'll have a different value)")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Keep the token safe, you'll need this in subsequent steps.")),(0,s.kt)("h2",{id:"session-info"},"Session Info"),(0,s.kt)("p",null,"To get information for a particular session we use ",(0,s.kt)("inlineCode",{parentName:"p"},"SH_INFO"),"."),(0,s.kt)("p",null,"Send the following, ",(0,s.kt)("strong",{parentName:"p"},"replacing")," ",(0,s.kt)("inlineCode",{parentName:"p"},"tkn")," with your token:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_INFO": {\n    "tkn": 14247375118774737462\n  }\n}\n')),(0,s.kt)("p",null,"The response will be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_INFO_RSP": {\n    "st": 1,\n    "tkn": 14247375118774737462,\n    "shared": false,\n    "keyCnt": 0,\n    "expiry": {\n      "expires": false,\n      "duration": 0,\n      "time": 0,\n      "deleteSession": false\n    }\n  }\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"st")," is the status"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"tkn")," the token"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"shared")," is false because this is not a shared session"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"keyCnt")," is the key count"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expiry")," contains expiry information. ",(0,s.kt)("inlineCode",{parentName:"li"},"expires")," is false so other params can be ignored")),(0,s.kt)("admonition",{title:"Status not Ok",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"If your ",(0,s.kt)("inlineCode",{parentName:"p"},"st")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"100"),", it's because you forgot to change the ",(0,s.kt)("inlineCode",{parentName:"p"},"tkn"),"."),(0,s.kt)("p",{parentName:"admonition"},"It should be the same value as received in ",(0,s.kt)("inlineCode",{parentName:"p"},"SH_NEW_RSP")," above.")),(0,s.kt)("p",null,"We're ready to store data now."),(0,s.kt)("admonition",{title:"Postman",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Tabs"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"You can open new connections in their own tab"),(0,s.kt)("li",{parentName:"ul"},'Press the "+" symbol beside a tab to create a new tab (or ',(0,s.kt)("inlineCode",{parentName:"li"},"File->New Tab")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"ctrl+t"),")")),(0,s.kt)("p",{parentName:"admonition"},"Enable Dark Theme"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"File->Settings")),(0,s.kt)("li",{parentName:"ul"},'"Theme" tab'))))}d.isMDXComponent=!0},3015:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-shinfoall-262c25db2a60f8b21976b3149c034d00.png"}}]);