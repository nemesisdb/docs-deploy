"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[7282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,b=d["".concat(o,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(b,s(s({ref:t},c),{},{components:n})):a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:10,displayed_sidebar:"clientApisSidebar"},s="Overview",l={unversionedId:"client_apis/python/lst/overview",id:"client_apis/python/lst/overview",title:"Overview",description:"A list is a node based container, implemented as a doubly linked list.",source:"@site/docs/client_apis/python/lst/overview.md",sourceDirName:"client_apis/python/lst",slug:"/client_apis/python/lst/overview",permalink:"/client_apis/python/lst/overview",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,displayed_sidebar:"clientApisSidebar"},sidebar:"clientApisSidebar",previous:{title:"Lists",permalink:"/category/lists"},next:{title:"create",permalink:"/client_apis/python/lst/create"}},o={},p=[{value:"API",id:"api",level:2},{value:"API Classes",id:"api-classes",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A list is a node based container, implemented as a doubly linked list. "),(0,i.kt)("p",null,"There is only one type of list, storing JSON objects and is unsorted."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Many API functions use indices, these begin at ",(0,i.kt)("inlineCode",{parentName:"li"},"0")),(0,i.kt)("li",{parentName:"ul"},"In functions that use ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," parameters, the ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," is exclusive")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stop")," parameters are similar to Python's ",(0,i.kt)("inlineCode",{parentName:"p"},"range()")," function and splicing."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"values = await lists.get_rng('my_list', start=0, stop=10)\n")),(0,i.kt)("p",{parentName:"admonition"},"Will return values from index ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to and including ",(0,i.kt)("inlineCode",{parentName:"p"},"9"),".")),(0,i.kt)("br",null),(0,i.kt)("p",null,"After creating and connecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"NdbClient"),", create an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjLists"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='List as a stack'",title:"'List",as:!0,a:!0,"stack'":!0},"from ndb.client import NdbClient\nfrom ndb.lists import ObjLists\n\nclient = NdbClient()\nawait client.open('ws://127.0.0.1:1987/')\n\n# create API object\nlists = ObjLists(client)\n\nawait lists.create('stack')\n\nprint('Push')\nawait lists.add_head('stack', {'name':'first'})\nawait lists.add_head('stack', {'name':'second'})\nawait lists.add_head('stack', {'name':'third'})\n\nfor item in await lists.get_rng('stack', start=0):\n  print(item)\n\nprint('Pop')\nawait lists.remove_head('stack')\n\nfor item in await lists.get_rng('stack', start=0):\n  print(item)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Push\n{'name': 'third'}\n{'name': 'second'}\n{'name': 'first'}\nPop\n{'name': 'second'}\n{'name': 'first'}\n")),(0,i.kt)("h2",{id:"api-classes"},"API Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Storage Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ObjLists"),(0,i.kt)("td",{parentName:"tr",align:null},"JSON object")))))}m.isMDXComponent=!0}}]);