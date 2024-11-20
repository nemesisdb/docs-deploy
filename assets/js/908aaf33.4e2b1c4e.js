"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[5597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4,displayed_sidebar:"clientApisSidebar",sidebar_label:"add"},l="add",o={unversionedId:"client_apis/python/Add",id:"client_apis/python/Add",title:"add",description:"Stores keys but does not overwrite a key if it already exists.",source:"@site/docs/client_apis/python/Add.md",sourceDirName:"client_apis/python",slug:"/client_apis/python/Add",permalink:"/client_apis/python/Add",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,displayed_sidebar:"clientApisSidebar",sidebar_label:"add"},sidebar:"clientApisSidebar",previous:{title:"get",permalink:"/client_apis/python/Get"},next:{title:"rmv",permalink:"/client_apis/python/Rmv"}},s={},p=[{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add"},"add"),(0,a.kt)("p",null,"Stores keys but does not overwrite a key if it already exists."),(0,a.kt)("p",null,"To overwrite an existing key, use ",(0,a.kt)("a",{parentName:"p",href:"./Set"},"set"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keys"),(0,a.kt)("td",{parentName:"tr",align:"center"},"tuple"),(0,a.kt)("td",{parentName:"tr",align:null},"Tuple of keys to retrieve"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"A session token"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Only if sessions enabled")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bool")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"True")," if command successful, otherwise ",(0,a.kt)("inlineCode",{parentName:"li"},"False"))),(0,a.kt)("p",null,"If a key already exists it is not considered an error."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Avoid overwriting'",title:"'Avoid","overwriting'":!0},"client = KvClient()\nawait client.open('ws://127.0.0.1:1987/')\n\nawait client.set({'LinuxDistro':'Arch'})\n(getOk, values) = await client.get(('LinuxDistro',))\nprint(f'Before add(): {values}')\n\nawait client.add({'LinuxDistro':'Arch btw'})\n(getOk, values) = await client.get(('LinuxDistro',))\nprint(f'After add(): {values}')\n\nawait client.set({'LinuxDistro':'Arch btw'})\n(getOk, values) = await client.get(('LinuxDistro',))\nprint(f'After set(): {values}')\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"calling ",(0,a.kt)("inlineCode",{parentName:"li"},"add()")," does not overwrite the key"),(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"set()")," to replace the value")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Before add(): {'LinuxDistro': 'Arch'}\nAfter add(): {'LinuxDistro': 'Arch'}\nAfter set(): {'LinuxDistro': 'Arch btw'}\n")))}u.isMDXComponent=!0}}]);