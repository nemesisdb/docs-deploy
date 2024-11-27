"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[8513],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var s=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=s.createContext({}),p=function(e){var n=s.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return s.createElement(a.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||r;return t?s.createElement(f,l(l({ref:n},c),{},{components:t})):s.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var s=t(7462),i=(t(7294),t(3905));const r={sidebar_position:3,displayed_sidebar:"clientApisSidebar",sidebar_label:"end_all_sessions"},l="end_all_sessions",o={unversionedId:"client_apis/python/sessions/End_All",id:"client_apis/python/sessions/End_All",title:"end_all_sessions",description:"Ends all sessions.",source:"@site/docs/client_apis/python/sessions/End_All.md",sourceDirName:"client_apis/python/sessions",slug:"/client_apis/python/sessions/End_All",permalink:"/client_apis/python/sessions/End_All",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,displayed_sidebar:"clientApisSidebar",sidebar_label:"end_all_sessions"},sidebar:"clientApisSidebar",previous:{title:"end_session",permalink:"/client_apis/python/sessions/End"},next:{title:"session_exists",permalink:"/client_apis/python/sessions/Exists"}},a={},p=[{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"end_all_sessions"},"end_all_sessions"),(0,i.kt)("p",null,"Ends all sessions."),(0,i.kt)("p",null,"The sessions end immediately, with all keys being deleted, effectively clearing the database."),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tuple(bool, int)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool")," : ",(0,i.kt)("inlineCode",{parentName:"li"},"True")," is the command was successful, otherwise ",(0,i.kt)("inlineCode",{parentName:"li"},"False")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int")," : the number of sessions ended")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"title='Create and end multiple sessions'",title:"'Create",and:!0,end:!0,multiple:!0,"sessions'":!0},"from ndb.sessionclient import SessionClient\n\n\nclient = SessionClient()\nawait client.open('ws://127.0.0.1:1987/')\n\nsession1 = await client.create_session()\nsession2 = await client.create_session()\n\nif session1.isValid and session2.isValid:\n  print(f'Session 1 token {session1.tkn}')\n  print(f'Session 2 token {session2.tkn}')\n\n(ok, count) = await client.end_all_sessions()\nif ok:\n  print(f'Ended {count} sessions')\n")))}u.isMDXComponent=!0}}]);