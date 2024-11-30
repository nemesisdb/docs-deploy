"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[2214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,m=c["".concat(o,".").concat(k)]||c[k]||d[k]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,displayed_sidebar:"tutorialSidebar"},s="Set and Get",l={unversionedId:"tutorials/first-steps/setandget",id:"tutorials/first-steps/setandget",title:"Set and Get",description:"We'll store data of different types. With data types part of the JSON syntax, we don't have to care about types, only that the JSON is valid.",source:"@site/docs/tutorials/first-steps/setandget.md",sourceDirName:"tutorials/first-steps",slug:"/tutorials/first-steps/setandget",permalink:"/tutorials/first-steps/setandget",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",previous:{title:"Create Session",permalink:"/tutorials/first-steps/new-session"},next:{title:"Learn Key Value",permalink:"/category/learn-key-value"}},o={},p=[{value:"String",id:"string",level:2},{value:"Array",id:"array",level:2},{value:"Multiple",id:"multiple",level:2},{value:"Get Data",id:"get-data",level:2},{value:"Clear Session Data",id:"clear-session-data",level:2},{value:"Object",id:"object",level:2},{value:"Get Object",id:"get-object",level:2},{value:"The End",id:"the-end",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-and-get"},"Set and Get"),(0,r.kt)("p",null,"We'll store data of different types. With data types part of the JSON syntax, we don't have to care about types, only that the JSON is valid."),(0,r.kt)("admonition",{title:"Token",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Remember to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"tkn")," with your token.")),(0,r.kt)("h2",{id:"string"},"String"),(0,r.kt)("p",null,"Send:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_SET":\n  {\n    "tkn":14247375118774737462,\n    "keys":\n    {\n      "username":"Spongebob"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The stores the key ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),' with string value "Spongebob".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"SH_SET_RSP")," response contains ",(0,r.kt)("inlineCode",{parentName:"li"},'"username": 20'),' which is the key and status. This confirms "username" was successfully set'),(0,r.kt)("li",{parentName:"ul"},"If you send the command again, the status will change to ",(0,r.kt)("inlineCode",{parentName:"li"},"21"),", which means an existing key has been overwritten (not an error)")),(0,r.kt)("h2",{id:"array"},"Array"),(0,r.kt)("p",null,"Send:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_SET":\n  {\n    "tkn":14247375118774737462,\n    "keys":\n    {\n      "friends":\n      [\n        "Crabs",\n        "Patrick"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This stores a key, ",(0,r.kt)("inlineCode",{parentName:"p"},"friends"),", which is an array."),(0,r.kt)("h2",{id:"multiple"},"Multiple"),(0,r.kt)("p",null,"You can store multiple keys per request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_SET":\n  {\n    "tkn":14247375118774737462,\n    "keys":\n    {\n      "email":"bob@thesea.com",\n      "age":10\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This stores two keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"email")," which is a string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"age")," which is a number")),(0,r.kt)("h2",{id:"get-data"},"Get Data"),(0,r.kt)("p",null,"To get keys use ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_GET"),", which can get multiple keys in one request so we'll get all four:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_GET":\n  {\n    "tkn":14247375118774737462,\n    "keys":["username", "email", "age", "friends"]\n  }\n}\n')),(0,r.kt)("p",null,"The response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_GET_RSP": {\n    "tkn": 14247375118774737462,\n    "keys": {\n      "username": "Spongebob",\n      "email": "bob@thesea.com",\n      "age": 10,\n      "friends":[\n        "Crabs",\n        "Patrick"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This is okay, but what if we want all this in a single key? We can use an object."),(0,r.kt)("h2",{id:"clear-session-data"},"Clear Session Data"),(0,r.kt)("p",null,"Let's clear our session data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_CLEAR":\n  {\n    "tkn":14247375118774737462\n  }\n}\n')),(0,r.kt)("p",null,"The reponse contains ",(0,r.kt)("inlineCode",{parentName:"p"},"cnt"),", confirming four keys were deleted."),(0,r.kt)("h2",{id:"object"},"Object"),(0,r.kt)("p",null,"We'll store the same data again but in an object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_SET":\n  {\n    "tkn":14247375118774737462,\n    "keys":\n    {\n      "profile":\n      {\n        "username": "Spongebob",\n        "friends": ["Crabs","Patrick"],\n        "email":"bob@thesea.com",\n        "age":10\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This stores a key, ",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),", which is an object. "),(0,r.kt)("h2",{id:"get-object"},"Get Object"),(0,r.kt)("p",null,"Now when we want the user's profile data, we just have to get one key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_GET":\n  {\n    "tkn":14247375118774737462,\n    "keys":["profile"]\n  }\n}\n')),(0,r.kt)("h2",{id:"the-end"},"The End"),(0,r.kt)("p",null,"That's the basics of setting and getting."),(0,r.kt)("p",null,"This guide shows one session for one user. This pattern works for many users, each with their own session. Clients just need to use the appropriate token to switch users."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SH_SET")," overwrites the key if it already exists. If you don't want this, you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"SH_ADD")," which won't overwrite"))))}d.isMDXComponent=!0}}]);