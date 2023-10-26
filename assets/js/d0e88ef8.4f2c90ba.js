"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:110},i="KV_UPDATE",p={unversionedId:"api/kv/kv-update",id:"api/kv/kv-update",title:"KV_UPDATE",description:"This updates a value inside an object or array.",source:"@site/docs/api/kv/kv-update.md",sourceDirName:"api/kv",slug:"/api/kv/kv-update",permalink:"/docs-deploy/api/kv/kv-update",draft:!1,tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"apiSidebar",previous:{title:"KV_APPEND",permalink:"/docs-deploy/api/kv/kv-append"}},o={},s=[{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kv_update"},"KV_UPDATE"),(0,r.kt)("p",null,"This updates a value inside an object or array."),(0,r.kt)("p",null,"This is different to ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_SET")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_SET")," would overwrite the entire object/array, whilst ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_UPDATE")," can update a value inside the object or a specific array item."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session token"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key containing the object to select the ",(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<path>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"various"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON Pointer, the value will replace the value selected by the path (see ",(0,r.kt)("a",{parentName:"td",href:"#examples"},"examples"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'JSON Pointer syntax requires an index when accessing arrays, you can\'t say "all", only a specific index.')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"KV_UPDATE_RSP")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key names with status for each: ",(0,r.kt)("inlineCode",{parentName:"td"},'"<keyname>":<status>'))))),(0,r.kt)("p",null,"Possible status values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ok"),(0,r.kt)("li",{parentName:"ul"},"KeyNotExist"),(0,r.kt)("li",{parentName:"ul"},"ParamMissing (",(0,r.kt)("inlineCode",{parentName:"li"},"key"),")"),(0,r.kt)("li",{parentName:"ul"},"ValueTypeInvalid (",(0,r.kt)("inlineCode",{parentName:"li"},"key")," not a string)")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," page for status values."),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Test data"',title:'"Test','data"':!0},'{\n  "KV_SET":\n  {\n    "tkn":"789794144062202656",\n    "keys":\n    {\n      "user":\n      {\n        "username":"Potato",\n        "email":"spud@email.com",\n        "avatar":"img1.png"\n      },\n      "access":\n      [\n        {"Reports":true},\n        {"Admin":false}\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,'We want to update the "avatar" but if we used ',(0,r.kt)("inlineCode",{parentName:"p"},"KV_SET")," we'd have to set the whole user object. But with ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_UPDATE")," we can just update avatar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Update avatar image"',title:'"Update',avatar:!0,'image"':!0},'{\n  "KV_UPDATE":\n  {\n    "tkn":"789794144062202656",\n    "key":"user",\n    "/avatar":"img2.png"\n  }\n}\n')),(0,r.kt)("p",null,"Update an item in array using the index:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Update Admin access"',title:'"Update',Admin:!0,'access"':!0},'{\n  "KV_UPDATE":\n  {\n    "tkn":"789794144062202656",\n    "key":"access",\n    "/1":{"Admin":true}\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"This is only to show how to update an array item. The ",(0,r.kt)("inlineCode",{parentName:"p"},"access")," data would be tidier as an object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_SET":\n  {\n    "tkn":"789794144062202656",\n    "keys":\n    {      \n      "access":\n      {\n        "Reports":true,\n        "Admin":false\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"And updated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_UPDATE":\n  {\n    "tkn":"789794144062202656",\n    "key":"access",\n    "/Admin":true\n  }\n}\n')))}m.isMDXComponent=!0}}]);