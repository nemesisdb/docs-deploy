"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[6704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:5,displayed_sidebar:"clientApisSidebar",sidebar_label:"rmv"},i="rmv",p={unversionedId:"client_apis/python/Rmv",id:"client_apis/python/Rmv",title:"rmv",description:"Delete key(s).",source:"@site/docs/client_apis/python/Rmv.md",sourceDirName:"client_apis/python",slug:"/client_apis/python/Rmv",permalink:"/client_apis/python/Rmv",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"clientApisSidebar",sidebar_label:"rmv"},sidebar:"clientApisSidebar",previous:{title:"add",permalink:"/client_apis/python/Add"},next:{title:"clear",permalink:"/client_apis/python/Clear"}},o={},s=[{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rmv"},"rmv"),(0,a.kt)("p",null,"Delete key(s)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To delete all keys, use ",(0,a.kt)("a",{parentName:"li",href:"./Clear"},"clear")),(0,a.kt)("li",{parentName:"ul"},"You can use ",(0,a.kt)("a",{parentName:"li",href:"/client_apis/python/Clear_Set"},"clear_set")," which clears all keys then sets new keys in a single command.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keys"),(0,a.kt)("td",{parentName:"tr",align:"center"},"tuple"),(0,a.kt)("td",{parentName:"tr",align:null},"Keys to delete"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"A session token"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Only if sessions enabled")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bool")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"True")," if command successful, otherwise ",(0,a.kt)("inlineCode",{parentName:"li"},"False"))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Delete one key'",title:"'Delete",one:!0,"key'":!0},"client = KvClient()\nawait client.open('ws://127.0.0.1:1987/')\n# assume keys have been stored\nawait client.rmv(('username',))\n")),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Delete multiple keys'",title:"'Delete",multiple:!0,"keys'":!0},"client = KvClient()\nawait client.open('ws://127.0.0.1:1987/')\n# assume keys have been stored\nawait client.rmv(('key1','key2','key3'))\n")))}u.isMDXComponent=!0}}]);