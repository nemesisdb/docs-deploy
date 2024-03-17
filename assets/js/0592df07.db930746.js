"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[4528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,f=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,displayed_sidebar:"tutorialSidebar"},s="Overview",l={unversionedId:"tutorials/persist-data/overview",id:"tutorials/persist-data/overview",title:"Overview",description:"NemesisDB is an in-memory/caching database meaning data is only stored in server RAM unless commanded to write data to the filesystem. When the server shutsdown all data in RAM is lost so persisting the data to filesystem allows you to restore data.",source:"@site/docs/tutorials/persist-data/overview.md",sourceDirName:"tutorials/persist-data",slug:"/tutorials/persist-data/overview",permalink:"/tutorials/persist-data/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"tutorialSidebar"},sidebar:"tutorialSidebar",previous:{title:"Persist Data",permalink:"/category/persist-data"},next:{title:"Configure",permalink:"/tutorials/persist-data/configure"}},o={},d=[{value:"Persistance Structure",id:"persistance-structure",level:2},{value:"Saving",id:"saving",level:2},{value:"Loading",id:"loading",level:2},{value:"Usage",id:"usage",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"NemesisDB is an in-memory/caching database meaning data is only stored in server RAM unless commanded to write data to the filesystem. When the server shutsdown all data in RAM is lost so persisting the data to filesystem allows you to restore data."),(0,r.kt)("p",null,"For some applications this may not be required because you can rebuild the data via the query interface, but there may be cases where minimal data is useful is required on startup such as default app settings, IP addresses or config values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All sessions or a specific settings can be saved"),(0,r.kt)("li",{parentName:"ul"},"Data can be restored at startup with a command line argument or during runtime with a command"),(0,r.kt)("li",{parentName:"ul"},"Data is written as raw JSON, a future release will support BSON")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"persistance-structure"},"Persistance Structure"),(0,r.kt)("p",null,"Data is saved with a name and a timestamp. The name is used when loading as a way to identify which data to restore."),(0,r.kt)("p",null,"The server's config file has a setting for the save path, in to which the data is written."),(0,r.kt)("p",null,"The structure is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 <name>\n    \u2514\u2500\u2500 <timestamp>\n        \u251c\u2500\u2500 data\n        \u2514\u2500\u2500 md\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name used in the save command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp when the data was saved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contains the session data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"md"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contains metadata")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"This structure allows you to save and restore specific data."),(0,r.kt)("p",null,"For example, if we save data using the name ",(0,r.kt)("inlineCode",{parentName:"p"},"defaults")," we will have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 defaults\n    \u2514\u2500\u2500 1701060607618993128\n        \u251c\u2500\u2500 data\n        \u2514\u2500\u2500 md\n")),(0,r.kt)("p",null,"If we send another save command with the same name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 defaults\n    \u251c\u2500\u2500 1701060607618993128\n    \u2502\xa0\xa0 \u251c\u2500\u2500 data\n    \u2502\xa0\xa0 \u2514\u2500\u2500 md\n    \u2514\u2500\u2500 1701061180908039731\n        \u251c\u2500\u2500 data\n        \u2514\u2500\u2500 md\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The current version does not allow you to load a specific timestamp, it always selects the most recent. ",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"If you need to restore specific data, use a different name for each use of ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_SAVE"),".")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"saving"},"Saving"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_SAVE")," command is used to save data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_SAVE":\n  {\n    "name":"defaults"\n  }\n}\n')),(0,r.kt)("p",null,"Supply tokens (",(0,r.kt)("inlineCode",{parentName:"p"},"tkns"),") to save particular sessions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Save two sessions"',title:'"Save',two:!0,'sessions"':!0},'{\n  "SH_SAVE":\n  {\n    "name":"defaults",\n    "tkns":[123456, 654321]\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"loading"},"Loading"),(0,r.kt)("p",null,"Data can be loaded at startup with command line args or at runtime with ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_LOAD"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Startup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--loadName")," can be used with ",(0,r.kt)("inlineCode",{parentName:"li"},"--loadPath")," to read data from a path that's different from that in the server config"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Runtime"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SH_LOAD")," offers the flexibility to load data at any time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SH_LOAD")," will only read data from the path in the server config")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The intention is to offer flexibility:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save all or specific sessions"),(0,r.kt)("li",{parentName:"ul"},"Load data on startup to work from a known base"),(0,r.kt)("li",{parentName:"ul"},"Load data ad-hoc")),(0,r.kt)("p",null,"The server can be populated with data, cleared, and then loaded with data for a different purpose without restarting."))}m.isMDXComponent=!0}}]);