"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[6374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:50,displayed_sidebar:"clientApisSidebar"},l="add_tail",o={unversionedId:"client_apis/python/lst/add_tail",id:"client_apis/python/lst/add_tail",title:"add_tail",description:"|Param|Description|",source:"@site/docs/client_apis/python/lst/add_tail.md",sourceDirName:"client_apis/python/lst",slug:"/client_apis/python/lst/add_tail",permalink:"/client_apis/python/lst/add_tail",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,displayed_sidebar:"clientApisSidebar"},sidebar:"clientApisSidebar",previous:{title:"add_head",permalink:"/client_apis/python/lst/add_head"},next:{title:"set",permalink:"/client_apis/python/lst/set"}},s={},p=[{value:"Returns",id:"returns",level:2},{value:"Raises",id:"raises",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add_tail"},"add_tail"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"async def add_tail(self, name: str, items=list[dict]|dict) -> int:\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"items"),(0,r.kt)("td",{parentName:"tr",align:null},"- Single item: dictionary",(0,r.kt)("br",null),"- Multiple times: A list of dictionaries")))),(0,r.kt)("p",null,"The item(s) are appended to the tail:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adding a single item, the item becomes the tail"),(0,r.kt)("li",{parentName:"ul"},"adding multiple items, the last item becomes the tail")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"add_head()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"remove_head()")," can be called to use a list as a stack."),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"The position of the insert (i.e. the position of the tail before the insertion)."),(0,r.kt)("h2",{id:"raises"},"Raises"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ResponseError"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," does not exist")))))}u.isMDXComponent=!0}}]);