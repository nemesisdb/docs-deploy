"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[6201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:12,displayed_sidebar:"clientApisSidebar",sidebar_label:"load"},l="load",o={unversionedId:"client_apis/python/Load",id:"client_apis/python/Load",title:"load",description:"Restores keys that were previously saved with save().",source:"@site/docs/client_apis/python/Load.md",sourceDirName:"client_apis/python",slug:"/client_apis/python/Load",permalink:"/client_apis/python/Load",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,displayed_sidebar:"clientApisSidebar",sidebar_label:"load"},sidebar:"clientApisSidebar",previous:{title:"save",permalink:"/client_apis/python/Save"},next:{title:"Sessions",permalink:"/category/sessions-2"}},p={},s=[{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"load"},"load"),(0,a.kt)("p",null,"Restores keys that were previously saved with ",(0,a.kt)("inlineCode",{parentName:"p"},"save()"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:"center"},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the dataset"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"With sessions enabled, use ",(0,a.kt)("inlineCode",{parentName:"p"},"SessionClient.load()"),".")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tuple(bool,int)"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool")," : ",(0,a.kt)("inlineCode",{parentName:"li"},"True")," if command successful, otherwise ",(0,a.kt)("inlineCode",{parentName:"li"},"False")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int")," : The number of keys loaded")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Assuming a previous call to ",(0,a.kt)("inlineCode",{parentName:"p"},"save('my_data')"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"(loaded, count) = await client.load('my_data')\nif loaded:\n  print(f'Loaded {count} keys')\n")))}u.isMDXComponent=!0}}]);