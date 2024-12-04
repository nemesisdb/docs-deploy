"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[8348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,m=c["".concat(o,".").concat(k)]||c[k]||d[k]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3,displayed_sidebar:"clientApisSidebar",sidebar_label:"kv_get"},l="kv_get",s={unversionedId:"client_apis/python/kv/Get",id:"client_apis/python/kv/Get",title:"kv_get",description:"Retrieves keys from the database.",source:"@site/docs/client_apis/python/kv/Get.md",sourceDirName:"client_apis/python/kv",slug:"/client_apis/python/kv/Get",permalink:"/client_apis/python/kv/Get",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,displayed_sidebar:"clientApisSidebar",sidebar_label:"kv_get"},sidebar:"clientApisSidebar",previous:{title:"kv_set",permalink:"/client_apis/python/kv/Set"},next:{title:"kv_add",permalink:"/client_apis/python/kv/Add"}},o={},p=[{value:"Returns",id:"returns",level:2},{value:"Raises",id:"raises",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kv_get"},"kv_get"),(0,a.kt)("p",null,"Retrieves keys from the database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"kv_get(keys = tuple(), key = None)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},"Key to retrieve")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keys"),(0,a.kt)("td",{parentName:"tr",align:null},"Keys to retrieve")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"keys")," set, a ",(0,a.kt)("inlineCode",{parentName:"li"},"dict")," is returned"),(0,a.kt)("li",{parentName:"ul"},"Otherwise, the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," is returned")),(0,a.kt)("h2",{id:"raises"},"Raises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResponseError")," if query fails"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValueError")," if both ",(0,a.kt)("inlineCode",{parentName:"li"},"keys")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," are set")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Connect and Set'",title:"'Connect",and:!0,"Set'":!0},"from ndb.client import NdbClient\n\nclient = NdbClient(debug=False) # toggle for debug\n\nawait client.open('ws://127.0.0.1:1987/')\nawait client.kv_set({'username':'billy', 'password':'billy_passy'})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Get various'",title:"'Get","various'":!0},"# get single key\nvalue = await client.kv_get(key='username')\nprint (value)\n\n# get multiple keys\nvalues = await client.kv_get(keys=('username', 'password'))\nprint (values)\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"billy\n{'password': 'billy_passy', 'username': 'billy'}\n")))}d.isMDXComponent=!0}}]);