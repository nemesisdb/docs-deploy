"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[4463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||y[d]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:10,displayed_sidebar:"clientApisSidebar",sidebar_label:"keys"},s="keys",o={unversionedId:"client_apis/python/kv/Keys",id:"client_apis/python/kv/Keys",title:"keys",description:"Returns all keys, excluding values.",source:"@site/docs/client_apis/python/kv/Keys.md",sourceDirName:"client_apis/python/kv",slug:"/client_apis/python/kv/Keys",permalink:"/client_apis/python/kv/Keys",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,displayed_sidebar:"clientApisSidebar",sidebar_label:"keys"},sidebar:"clientApisSidebar",previous:{title:"contains",permalink:"/client_apis/python/kv/Contains"},next:{title:"save",permalink:"/client_apis/python/kv/Save"}},l={},p=[{value:"Returns",id:"returns",level:2},{value:"Raises",id:"raises",level:2}],c={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keys"},"keys"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"async def kv_keys() -> List[str]\n")),(0,i.kt)("p",null,"Returns all keys, excluding values."),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," of all keys"),(0,i.kt)("h2",{id:"raises"},"Raises"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ResponseError"))))}y.isMDXComponent=!0}}]);