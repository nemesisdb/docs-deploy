"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[9450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:11,displayed_sidebar:"clientApisSidebar",sidebar_label:"save"},l="save",s={unversionedId:"client_apis/python/Save",id:"client_apis/python/Save",title:"save",description:"Saves all keys to the filesystem so they can be restored later.",source:"@site/docs/client_apis/python/Save.md",sourceDirName:"client_apis/python",slug:"/client_apis/python/Save",permalink:"/client_apis/python/Save",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,displayed_sidebar:"clientApisSidebar",sidebar_label:"save"},sidebar:"clientApisSidebar",previous:{title:"keys",permalink:"/client_apis/python/Keys"},next:{title:"load",permalink:"/client_apis/python/Load"}},o={},p=[{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"save"},"save"),(0,r.kt)("p",null,"Saves all keys to the filesystem so they can be restored later."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the dataset"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is used to load data at runtime with ",(0,r.kt)("inlineCode",{parentName:"p"},"KV_LOAD")," and at startup:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Persistance must be enabled in the server config"),(0,r.kt)("li",{parentName:"ul"},"With sessions enabled, use ",(0,r.kt)("a",{parentName:"li",href:"./sessions/Save"},"session_save()")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bool"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if command successful, otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"False")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"client = KvClient()\nawait client.open('ws://127.0.0.1:1987/')\n\n# set keys, etc\nsaved = await client.save('my_data')\nif saved:\n  print('Save success')  \n")),(0,r.kt)("p",null,"If the server is shutdown, we can restore the keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"(loaded, count) = await client.load('my_data')\nif loaded:\n  print(f'Loaded {count} keys')\n")))}u.isMDXComponent=!0}}]);