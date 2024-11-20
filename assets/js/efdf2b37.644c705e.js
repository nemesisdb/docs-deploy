"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[7917],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),p=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return s.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?s.createElement(f,o(o({ref:n},c),{},{components:t})):s.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<i;p++)o[p]=t[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var s=t(7462),r=(t(7294),t(3905));const i={sidebar_position:2,displayed_sidebar:"clientApisSidebar",sidebar_label:"end_session"},o="end_session",a={unversionedId:"client_apis/python/sessions/End",id:"client_apis/python/sessions/End",title:"end_session",description:"Ends a session.",source:"@site/docs/client_apis/python/sessions/End.md",sourceDirName:"client_apis/python/sessions",slug:"/client_apis/python/sessions/End",permalink:"/client_apis/python/sessions/End",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"clientApisSidebar",sidebar_label:"end_session"},sidebar:"clientApisSidebar",previous:{title:"create_session",permalink:"/client_apis/python/sessions/Create"},next:{title:"end_all_sessions",permalink:"/client_apis/python/sessions/End_All"}},l={},p=[{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"end_session"},"end_session"),(0,r.kt)("p",null,"Ends a session."),(0,r.kt)("p",null,"The session is ended immediately, with all keys being deleted."),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bool")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"True")," is the command was successful, otherwise ",(0,r.kt)("inlineCode",{parentName:"li"},"False"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Create and end a session'",title:"'Create",and:!0,end:!0,a:!0,"session'":!0},"from ndb.sessionclient import SessionClient\n\n\nclient = SessionClient()\nawait client.open('ws://127.0.0.1:1987/')\n\nsession = await client.create_session()\nif session.isValid:\n  print(f'Session created with token {session.token}')\n  await session.end_session()\n")))}u.isMDXComponent=!0}}]);