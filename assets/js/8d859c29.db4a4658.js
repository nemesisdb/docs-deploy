"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[8958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(n),m=a,d=k["".concat(i,".").concat(m)]||k[m]||c[m]||s;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[k]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:50},l="KV_GET",o={unversionedId:"api/kv/kv-get",id:"api/kv/kv-get",title:"KV_GET",description:"Get one or multiple keys.",source:"@site/docs/api/kv/kv-get.md",sourceDirName:"api/kv",slug:"/api/kv/kv-get",permalink:"/api/kv/kv-get",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"apiSidebar",previous:{title:"KV_ADDQ",permalink:"/api/kv/kv-addq"},next:{title:"KV_FIND",permalink:"/api/kv/kv-find"}},i={},p=[{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2},{value:"Various Types",id:"various-types",level:3},{value:"Key Does Not Exist",id:"key-does-not-exist",level:3}],u={toc:p},k="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kv_get"},"KV_GET"),(0,a.kt)("p",null,"Get one or multiple keys."),(0,a.kt)("p",null,"The command requires the token and an array of keys to retrieve. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Array of keys to retrieve"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"KV_GET_RSP")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The keys and values requested")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"If a key does not exist it is not returned."),(0,a.kt)("p",null,"Possible status values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"KeyNotExists"),(0,a.kt)("li",{parentName:"ul"},"ParamMissing (no ",(0,a.kt)("inlineCode",{parentName:"li"},"keys"),")"),(0,a.kt)("li",{parentName:"ul"},"ValueTypeInvalid (",(0,a.kt)("inlineCode",{parentName:"li"},"keys")," not an array)")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," page for status values."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"various-types"},"Various Types"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "KV_SET":\n  {    \n    "keys":\n    {\n      "user_1_name":"John",\n      "user_1_dob":638236800000,\n      "user_1_access":\n      [\n        {\n          "location":"Secret Lab",\n          "lastEntry":1711275303000\n        },\n        {\n          "location":"Server Room",\n          "lastEntry":1711034103000\n        }\n      ],\n      "user_1_account":\n      {\n        "enabled":true,\n        "creditBalance":34.50\n      }\n    }\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Request string and array keys"',title:'"Request',string:!0,and:!0,array:!0,'keys"':!0},'{\n  "KV_GET":\n  {\n    "keys":["user_1_name", "user_1_access"]\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Response",title:"Response"},'{\n  "KV_GET_RSP":\n  {\n    "st": 1,\n    "keys":\n    {\n      "user_1_name": "John",\n      "user_1_access":\n      [\n        {\n          "location": "Secret Lab",\n          "lastEntry": 1711275303000\n        },\n        {\n          "location": "Server Room",\n          "lastEntry": 1711034103000\n        }\n      ]\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"key-does-not-exist"},"Key Does Not Exist"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="key user_1_dontexist does not exist"',title:'"key',user_1_dontexist:!0,does:!0,not:!0,'exist"':!0},'{\n  "KV_GET":\n  {\n    "keys":["user_1_name", "user_1_dontexist"]\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Only keys that exist are in the response"',title:'"Only',keys:!0,that:!0,exist:!0,are:!0,in:!0,the:!0,'response"':!0},'{\n  "KV_GET_RSP":\n  {\n    "keys":\n    {\n      "user_1_name": "John"\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);