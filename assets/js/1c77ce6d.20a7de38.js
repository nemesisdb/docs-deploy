"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:40},o="KV_ADDQ",l={unversionedId:"api/kv/kv-addq",id:"api/kv/kv-addq",title:"KV_ADDQ",description:"Stores data. This command is the same as KV_ADD but it will only response on an error (i.e. the key already exists).",source:"@site/docs/api/kv/kv-addq.md",sourceDirName:"api/kv",slug:"/api/kv/kv-addq",permalink:"/api/kv/kv-addq",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"apiSidebar",previous:{title:"KV_ADD",permalink:"/api/kv/kv-add"},next:{title:"KV_GET",permalink:"/api/kv/kv-get"}},p={},s=[{value:"Response",id:"response",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kv_addq"},"KV_ADDQ"),(0,a.kt)("p",null,"Stores data. This command is the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"KV_ADD")," but it will only response on an error (i.e. the key already exists)."),(0,a.kt)("p",null,"This is most useful when you are initially populating an empty database so keys can't already exist."),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"KV_ADDQ_RSP")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," page for status values."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"keys"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"For each key that was set: ",(0,a.kt)("inlineCode",{parentName:"td"},'"<keyname>":<status>'))))),(0,a.kt)("p",null,"Possible status values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"KeyExists"),(0,a.kt)("li",{parentName:"ul"},"ParamMissing (no ",(0,a.kt)("inlineCode",{parentName:"li"},"keys"),")"),(0,a.kt)("li",{parentName:"ul"},"ValueTypeInvalid (",(0,a.kt)("inlineCode",{parentName:"li"},"keys")," not an object)")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"KV_ADDQ")," only returns a response on error the ",(0,a.kt)("inlineCode",{parentName:"p"},"st")," will never be ",(0,a.kt)("inlineCode",{parentName:"p"},"KeySet")," (",(0,a.kt)("inlineCode",{parentName:"p"},"20"),").")))}c.isMDXComponent=!0}}]);