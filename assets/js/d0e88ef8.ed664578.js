"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[5458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,c=d["".concat(o,".").concat(m)]||d[m]||k[m]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:57},i="KV_UPDATE",p={unversionedId:"api/kv/kv-update",id:"api/kv/kv-update",title:"KV_UPDATE",description:"This updates a value inside an object or array, using a JSON path to identify the element to update.",source:"@site/docs/api/kv/kv-update.md",sourceDirName:"api/kv",slug:"/api/kv/kv-update",permalink:"/api/kv/kv-update",draft:!1,tags:[],version:"current",sidebarPosition:57,frontMatter:{sidebar_position:57},sidebar:"apiSidebar",previous:{title:"KV_FIND",permalink:"/api/kv/kv-find"},next:{title:"KV_CONTAINS",permalink:"/api/kv/kv-contains"}},o={},s=[{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kv_update"},"KV_UPDATE"),(0,r.kt)("p",null,"This updates a value inside an object or array, using a JSON path to identify the element to update."),(0,r.kt)("p",null,"This differs from ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_SET")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_SET")," overwrites the entire key's value."),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session token"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key containing the value to update"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON path which returns an element to update"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"various"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This value will be assigned to the element returned by ",(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("p",null,"For example, if we store this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_SET":\n  {\n    "tkn":3241497441754231528,\n    "keys":\n    {\n      "profile":\n      {\n        "address":\n        {\n          "city":"London"\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"We want to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"city"),". We could either overwrite the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," key with ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_SET")," or just update the ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_UPDATE":\n  {\n    "tkn":3241497441754231528,\n    "key":"profile",\n    "path":"$.address.city",\n    "value":"Paris"\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"KV_UPDATE_RSP")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The same key as in the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cnt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of values updated")))),(0,r.kt)("p",null,"Possible status values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ok"),(0,r.kt)("li",{parentName:"ul"},"KeyNotExist"),(0,r.kt)("li",{parentName:"ul"},"ParamMissing"),(0,r.kt)("li",{parentName:"ul"},"ValueTypeInvalid")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," page for status values."),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"We are storing access permissions for a building. We use an ",(0,r.kt)("inlineCode",{parentName:"p"},"access")," array to store information for each area:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_SET":\n  {\n    "tkn":3241497441754231528,\n    "keys":\n    {\n      "user":\n      {\n        "access":\n        [\n          {\n            "name":"Super Secret Lab",\n            "permit":true,\n            "level":4\n          },\n          {\n            "name":"Helipad",\n            "permit":true,\n            "level":3\n          },\n          {\n            "name":"Normal Lab",\n            "permit":true,\n            "level":2\n          },          \n          {\n            "name":"Cafe",\n            "permit":true,\n            "level":1\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This user has level 4 access, but now they are downgraded to level 2, so we need to adjust these permissions."),(0,r.kt)("p",null,"We could use ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_SET")," to overwrite the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," key but that would be wasteful for a larger object and requires us to have all the data."),(0,r.kt)("p",null,"So we use an update:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_UPDATE":\n  {\n    "tkn":3241497441754231528,\n    "key":"user",\n    "path":"$.access[?(@.level > 2)].permit",\n    "value":false\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tkn")," the session token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," the key containing the value to update"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," a JSON path to find the value we wish to update"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," the new value")),(0,r.kt)("p",null,'The path says: "find all items in the ',(0,r.kt)("inlineCode",{parentName:"p"},"access")," array with a level above 2 and return ",(0,r.kt)("inlineCode",{parentName:"p"},"permit"),'". '),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," is then assigned to the returned path (i.e. we set ",(0,r.kt)("inlineCode",{parentName:"p"},"permit")," to false for areas with an access level > 2)."))}k.isMDXComponent=!0}}]);