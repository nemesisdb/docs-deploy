"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,f=u["".concat(l,".").concat(d)]||u[d]||y[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:100,displayed_sidebar:"clientApisSidebar",sidebar_label:"sh_keys"},a="sh_keys",o={unversionedId:"client_apis/python/sh/sh_keys",id:"client_apis/python/sh/sh_keys",title:"sh_keys",description:"Returns all key names (excludes values) in a session.",source:"@site/docs/client_apis/python/sh/sh_keys.md",sourceDirName:"client_apis/python/sh",slug:"/client_apis/python/sh/sh_keys",permalink:"/client_apis/python/sh/sh_keys",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,displayed_sidebar:"clientApisSidebar",sidebar_label:"sh_keys"},sidebar:"clientApisSidebar",previous:{title:"sh_contains",permalink:"/client_apis/python/sh/sh_contains"},next:{title:"sh_save",permalink:"/client_apis/python/sh/Save"}},l={},p=[{value:"Returns",id:"returns",level:2},{value:"Raises",id:"raises",level:2}],c={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sh_keys"},"sh_keys"),(0,s.kt)("p",null,"Returns all key names (excludes values) in a session."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"sh_keys(tkn: int) -> List[str]:\n")),(0,s.kt)("h2",{id:"returns"},"Returns"),(0,s.kt)("p",null,"The keys, excluding values"),(0,s.kt)("h2",{id:"raises"},"Raises"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ResponseError")," if query fails")))}y.isMDXComponent=!0}}]);