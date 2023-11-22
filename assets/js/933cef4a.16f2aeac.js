"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[4147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,h=m["".concat(o,".").concat(k)]||m[k]||u[k]||s;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:1},i="SH_NEW",l={unversionedId:"api/sessions/sh-new",id:"api/sessions/sh-new",title:"SH_NEW",description:"Creates a new session.",source:"@site/docs/api/sessions/sh-new.md",sourceDirName:"api/sessions",slug:"/api/sessions/sh-new",permalink:"/api/sessions/sh-new",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apiSidebar",previous:{title:"Sessions",permalink:"/category/sessions-1"},next:{title:"SH_END",permalink:"/api/sessions/sh-end"}},o={},p=[{value:"Session Name",id:"session-name",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2},{value:"Never expires, not shared",id:"never-expires-not-shared",level:3},{value:"Expires after 1 minute, deletes session on expire, not shared",id:"expires-after-1-minute-deletes-session-on-expire-not-shared",level:3},{value:"Expires after 1 minute, only deletes data on expire, not shared",id:"expires-after-1-minute-only-deletes-data-on-expire-not-shared",level:3},{value:"Shared session, never expires",id:"shared-session-never-expires",level:3},{value:"Shared Sessions",id:"shared-sessions",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sh_new"},"SH_NEW"),(0,r.kt)("p",null,"Creates a new session."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The session name.",(0,r.kt)("br",null)," If the session is shared, the name can be used in ",(0,r.kt)("inlineCode",{parentName:"td"},"SH_OPEN")," to get the session token."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"shared"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),": the session token is created so that the token can be retrieved by the token name with ",(0,r.kt)("inlineCode",{parentName:"td"},"SH_OPEN"),". See ",(0,r.kt)("a",{parentName:"td",href:"#shared-sessions"},"below")),(0,r.kt)("td",{parentName:"tr",align:"center"},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expiry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default: never expires ",(0,r.kt)("br",null),"Defines session expiry settings. See below."),(0,r.kt)("td",{parentName:"tr",align:"center"},"N")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expiry"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Time in seconds until the session expires"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"deleteSession"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Flag indicating if the session should be deleted. If ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", only the data is deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"session-name"},"Session Name"),(0,r.kt)("p",null,"For a session that is not shared (",(0,r.kt)("inlineCode",{parentName:"p"},'"shared":false'),") the name has no meaning to the server other than it can't be empty. The name is returned in the response so clients can match the name to a session token when working asynchronously."),(0,r.kt)("p",null,"If the session is shared the name can be used in ",(0,r.kt)("a",{parentName:"p",href:"/api/sessions/sh-open"},(0,r.kt)("inlineCode",{parentName:"a"},"SH_OPEN"))," to get the session token from its name. This allows services/apps to access the same session without having to exchange the token."),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SH_NEW_RSP")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./../Statuses"},"response status")," page for status values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session name as used in the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tkn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Session token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"st"),(0,r.kt)("td",{parentName:"tr",align:"left"},"unsigned int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status")))),(0,r.kt)("p",null,"Possible status values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ok"),(0,r.kt)("li",{parentName:"ul"},"CommandSyntax"),(0,r.kt)("li",{parentName:"ul"},"ValueMissing (no ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),")"),(0,r.kt)("li",{parentName:"ul"},"ValueTypeInvalid (",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is wrong type)"),(0,r.kt)("li",{parentName:"ul"},"ValueSize (",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is empty)")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"never-expires-not-shared"},"Never expires, not shared"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_NEW": {\n    "name": "user1000"\n  }\n}\n')),(0,r.kt)("h3",{id:"expires-after-1-minute-deletes-session-on-expire-not-shared"},"Expires after 1 minute, deletes session on expire, not shared"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_NEW": {\n    "name": "sesh1",\n    "expiry": {\n      "duration": 60,\n      "deleteSession":true\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"expires-after-1-minute-only-deletes-data-on-expire-not-shared"},"Expires after 1 minute, only deletes data on expire, not shared"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_NEW": {\n    "name": "sesh1",\n    "expiry": {\n      "duration": 60,\n      "deleteSession":false\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"shared-session-never-expires"},"Shared session, never expires"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "SH_NEW": {\n    "name": "sesh1",\n    "shared": true\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"shared-sessions"},"Shared Sessions"),(0,r.kt)("p",null,"Shared sessions don't refer to authentication - a session's data can be accessed by any client using the session token, there's no session authentication."),(0,r.kt)("p",null,"But that means clients knowing the session token. This may not be possible or practical because all services using the shared session must have the token."),(0,r.kt)("p",null,"A shared service helps by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," to generate the session tkn. Other clients then use ",(0,r.kt)("inlineCode",{parentName:"p"},"SH_OPEN")," with the same session name and receive the same session token."))}u.isMDXComponent=!0}}]);