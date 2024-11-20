"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[5766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),c=r,u=k["".concat(o,".").concat(c)]||k[c]||d[c]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:58},i="KV_ARR_APPEND",p={unversionedId:"api/kv/kv-arr-append",id:"api/kv/kv-arr-append",title:"KV_ARR_APPEND",description:"Appends items to an array. The array can be the key's value, or if the value is an object, the array can be at the object root.",source:"@site/docs/api/kv/kv-arr-append.md",sourceDirName:"api/kv",slug:"/api/kv/kv-arr-append",permalink:"/api/kv/kv-arr-append",draft:!1,tags:[],version:"current",sidebarPosition:58,frontMatter:{sidebar_position:58},sidebar:"apiSidebar",previous:{title:"KV_UPDATE",permalink:"/api/kv/kv-update"},next:{title:"KV_CONTAINS",permalink:"/api/kv/kv-contains"}},o={},s=[{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2},{value:"Key is an array",id:"key-is-an-array",level:3},{value:"Key is an object",id:"key-is-an-object",level:3}],m={toc:s},k="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kv_arr_append"},"KV_ARR_APPEND"),(0,r.kt)("p",null,"Appends items to an array. The array can be the key's value, or if the value is an object, the array can be at the object root."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This command does not check for duplicate items.")),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key containing the value to update"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"items"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Items to append"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If the key's value is an array, the ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," must be omitted.",(0,r.kt)("br",null),"If the key's value is an object, ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," is the array's name."),(0,r.kt)("td",{parentName:"tr",align:"center"},"N")))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tkn"),' must be set when the server mode is "kv_sessions".')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"KV_ARR_APPEND_RSP")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"st"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status")))),(0,r.kt)("p",null,"Possible status values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ok"),(0,r.kt)("li",{parentName:"ul"},"KeyNotExist"),(0,r.kt)("li",{parentName:"ul"},"Unknown (",(0,r.kt)("inlineCode",{parentName:"li"},"key")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," not an array)")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," page for status values."),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"key-is-an-array"},"Key is an array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_SET":\n  {\n    "keys":\n    {\n      "user:1234:roles":\n      [\n        "Admin",\n        "Reporter"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"We can append two roles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_ARR_APPEND":\n  {\n    "key":"user:1234:roles",    \n    "items":["Developer", "Tester"]\n  }\n}\n')),(0,r.kt)("h3",{id:"key-is-an-object"},"Key is an object"),(0,r.kt)("p",null,"The key, ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," is an object which contains an array ",(0,r.kt)("inlineCode",{parentName:"p"},"teams"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_SET":\n  {\n    "keys":\n    {\n      "profile":\n      {\n        "teams":["Warriors", "Legends"]        \n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"We can append ",(0,r.kt)("inlineCode",{parentName:"p"},'"Saracens"')," to ",(0,r.kt)("inlineCode",{parentName:"p"},"teams"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_ARR_APPEND":\n  {    \n    "key":"profile",    \n    "name":"teams",\n    "items":["Saracens"]\n  }\n}\n')),(0,r.kt)("p",null,"We must set ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," because the key (",(0,r.kt)("inlineCode",{parentName:"p"},"profile"),") is an object containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"teams")," array."))}d.isMDXComponent=!0}}]);