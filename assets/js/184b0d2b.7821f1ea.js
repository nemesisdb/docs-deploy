"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[6267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7,displayed_sidebar:"homeSidebar"},o="Run",s={unversionedId:"home/run",id:"home/run",title:"Run",description:"These instruction are for the Debian package. See here for Docker instructions.",source:"@site/docs/home/run.md",sourceDirName:"home",slug:"/home/run",permalink:"/home/run",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Debian Package",permalink:"/home/install/package"},next:{title:"Configure",permalink:"/home/config"}},l={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2},{value:"Restore",id:"restore",level:3}],m={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run"},"Run"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"These instruction are for the Debian package. See ",(0,r.kt)("a",{parentName:"p",href:"/category/docker"},"here")," for Docker instructions.")),(0,r.kt)("p",null,"The bulk of the server config are set in a JSON ",(0,r.kt)("a",{parentName:"p",href:"./config"},"config")," file, which is in preference to endless command line arguments."),(0,r.kt)("p",null,"The server includes a default config which starts the server on ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1987"),"."),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,"The command line arguments are preceeded with ",(0,r.kt)("inlineCode",{parentName:"p"},"--"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Argument"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"config"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the config file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"loadName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of a save point containing data to restore. The name would have been used with ",(0,r.kt)("inlineCode",{parentName:"td"},"SH_SAVE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"loadPath"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to directory containing the ",(0,r.kt)("inlineCode",{parentName:"td"},"loadName")," data. If not set, uses the ",(0,r.kt)("inlineCode",{parentName:"td"},"persist::path")," in the config file")))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"When save is enabled the ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," must exist and be a directory"),(0,r.kt)("li",{parentName:"ul"},"You can disable save but still restore data"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./persist"},"Persist Data")," for more information on restoring."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"restore"},"Restore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Start and restore, using path in config"',title:'"Start',and:!0,"restore,":!0,using:!0,path:!0,in:!0,'config"':!0},'./nemesisdb --config=default.json --loadName=10k_10000\n\nNemesisDB v0.3.5 starting\nRegistering signals\nReading config\nLoad Path: "./data"\nLoad Name: 10k_10000\nReading metadata in "./data/10k_10000/1700433845873084066/md"\nLoading from "./data/10k_10000/1700433845873084066/data"\n-- Load --\nStatus: Success\nSessions: 10000\nKeys: 50000\nTime: 94ms\n----------\nReady\n')),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Start and restore with alternative path"',title:'"Start',and:!0,restore:!0,with:!0,alternative:!0,'path"':!0},'./nemesisdb --config=default.json --loadName=mydata --loadPath=/some/other/path\n\nNemesisDB v0.3.5 starting\nRegistering signals\nReading config\nLoad Path: "/some/other/path"\nLoad Name: mydata\nReading metadata in "/some/other/path/mydata/1700433845873084066/md"\nLoading from "/some/other/path/data/mydata/1700433845873084066/data"\n-- Load --\nStatus: Success\nSessions: 10000\nKeys: 50000\nTime: 94ms\n----------\nReady\n')),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Load name does not exist"',title:'"Load',name:!0,does:!0,not:!0,'exist"':!0},'./nemesisdb --config=default.json --loadName=dontexist\n\nNemesisDB v0.3.5 starting\nRegistering signals\nReading config\nLoad Path: "./data"\nLoad Name: dontexist\nLoad name does not exist\n')),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Load name exists but contains no data (not an error)"',title:'"Load',name:!0,exists:!0,but:!0,contains:!0,no:!0,data:!0,"(not":!0,an:!0,'error)"':!0},'./nemesisdb --config=default.json --loadName=empty\n\nNemesisDB v0.3.7 starting\nRegistering signals\nReading config\nLoad Path: "./data"\nLoad Name: empty\nReading metadata in "./data/empty/1701179912205808300/md"\nLoading from "./data/empty/1701179912205808300/data"\n-- Load --\nStatus: Success \nSessions: 0\nKeys: 0\nTime: 0\n----------\nReady\n')))}c.isMDXComponent=!0}}]);