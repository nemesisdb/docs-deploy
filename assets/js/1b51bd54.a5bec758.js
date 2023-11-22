"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[6915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),u=o(n),c=a,d=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?r.createElement(d,i(i({ref:t},k),{},{components:n})):r.createElement(d,i({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:100},i="KV_KEYS",s={unversionedId:"api/kv/kv-keys",id:"api/kv/kv-keys",title:"KV_KEYS",description:"Returns all the key names in the session.",source:"@site/docs/api/kv/kv-keys.md",sourceDirName:"api/kv",slug:"/api/kv/kv-keys",permalink:"/api/kv/kv-keys",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"apiSidebar",previous:{title:"KV_COUNT",permalink:"/api/kv/kv-count"}},p={},o=[{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2},{value:"No Keys",id:"no-keys",level:3},{value:"Keys Exist",id:"keys-exist",level:3}],k={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kv_keys"},"KV_KEYS"),(0,a.kt)("p",null,"Returns all the key names in the session. "),(0,a.kt)("p",null,"This only returns the key names, not the values."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Session token"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"KV_KEYS_RSP")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"st"),(0,a.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"An array of key names")))),(0,a.kt)("p",null,"If there are no keys, the ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," array is empty."),(0,a.kt)("p",null,"Possible status values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ok")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"no-keys"},"No Keys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_KEYS":\n  {\n    "tkn":13549976642705620562\n  }\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_KEYS_RSP":\n  {\n    "tkn": 13549976642705620562,\n    "st": 1,\n    "keys": []\n  }\n}\n')),(0,a.kt)("h3",{id:"keys-exist"},"Keys Exist"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_KEYS":\n  {\n    "tkn":13549976642705620562\n  }\n}\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_KEYS_RSP":\n  {\n    "tkn": 13549976642705620562,\n    "st": 1,\n    "keys": ["profile","stats"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);