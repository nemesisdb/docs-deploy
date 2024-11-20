"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[5515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,displayed_sidebar:"clientApisSidebar",sidebar_label:"set"},l="set",s={unversionedId:"client_apis/python/Set",id:"client_apis/python/Set",title:"set",description:"Store keys to the database.",source:"@site/docs/client_apis/python/Set.md",sourceDirName:"client_apis/python",slug:"/client_apis/python/Set",permalink:"/client_apis/python/Set",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"clientApisSidebar",sidebar_label:"set"},sidebar:"clientApisSidebar",previous:{title:"Quick Start",permalink:"/client_apis/python/Overview"},next:{title:"get",permalink:"/client_apis/python/Get"}},p={},o=[{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:o},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set"},"set"),(0,a.kt)("p",null,"Store keys to the database."),(0,a.kt)("p",null,"Existing keys are overwritten, to avoid this use ",(0,a.kt)("a",{parentName:"p",href:"./Add"},"add"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keys"),(0,a.kt)("td",{parentName:"tr",align:"center"},"dict"),(0,a.kt)("td",{parentName:"tr",align:null},"A dictionary of key/values to store"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"A session token"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Only if sessions enabled")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bool")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"True")," if command successful, otherwise ",(0,a.kt)("inlineCode",{parentName:"li"},"False"))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Set scalar'",title:"'Set","scalar'":!0},"client = KvClient()\nawait client.open('ws://127.0.0.1:1987/')\n\nsetSuccess = await client.set({'username':'billy', 'password':'billy_passy'})\n\nif setSuccess:\n  (getOk, values) = await client.get(('username',))\n  if getOk:\n    print(values)\n  else:\n    print('Query failed')\n")),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Set object'",title:"'Set","object'":!0},'client = KvClient()\nawait client.open(\'ws://127.0.0.1:1987/\')\n\ndata = {  "server_ip":"123.456.7.8",\n          "server_port":1987,\n          "server_users":\n          {\n            "admins":["user1", "user2"],\n            "banned":["user3"]\n          }\n        }\n\nsetSuccess = await client.set(data)\nif setSuccess:\n  (getOk, values) = await client.get((\'server_users\',))\n  if getOk:\n    print(values)\n')),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"server_users")," is the key with the value being an object, so ",(0,a.kt)("inlineCode",{parentName:"p"},"print(values)")," produces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"'server_users':{'admins':['user1', 'user2'],'banned':['user3']}\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"./Get"},"get"),"."))}d.isMDXComponent=!0}}]);