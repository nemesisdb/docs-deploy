"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[46],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:20},o="KV_SETQ",l={unversionedId:"api/kv/kv-setq",id:"api/kv/kv-setq",title:"KV_SETQ",description:"Stores data. This is identical to KV_SET but it only sends a response on failure.",source:"@site/docs/api/kv/kv-setq.md",sourceDirName:"api/kv",slug:"/api/kv/kv-setq",permalink:"/api/kv/kv-setq",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"apiSidebar",previous:{title:"KV_SET",permalink:"/api/kv/kv-set"},next:{title:"KV_ADD",permalink:"/api/kv/kv-add"}},s={},p=[{value:"Response",id:"response",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kv_setq"},"KV_SETQ"),(0,a.kt)("p",null,"Stores data. This is identical to ",(0,a.kt)("inlineCode",{parentName:"p"},"KV_SET")," but it only sends a response on failure."),(0,a.kt)("p",null,"The purpose of this command is reduce network traffic. It is only suitable if you don't need confirmation the command is successful (or you only need confirmation if it wasn't successful)."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"./kv-set"},(0,a.kt)("inlineCode",{parentName:"a"},"KV_SET"))," for structure."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"KV_SETQ_RSP")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," page for status values."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"For each key that was set: ",(0,a.kt)("inlineCode",{parentName:"td"},'"<keyname>":<status>'))))),(0,a.kt)("p",null,"Possible status values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ParamMissing (no ",(0,a.kt)("inlineCode",{parentName:"li"},"keys"),")"),(0,a.kt)("li",{parentName:"ul"},"ValueTypeInvalid (",(0,a.kt)("inlineCode",{parentName:"li"},"keys")," not an object)")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"KV_SETQ")," only returns a response on error the ",(0,a.kt)("inlineCode",{parentName:"p"},"st")," will never be ",(0,a.kt)("inlineCode",{parentName:"p"},"KeySet")," (",(0,a.kt)("inlineCode",{parentName:"p"},"20"),").")))}m.isMDXComponent=!0}}]);