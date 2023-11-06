"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[1965],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>m});var n=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=d(s),p=a,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||i;return s?n.createElement(m,o(o({ref:t},u),{},{components:s})):n.createElement(m,o({ref:t},u))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=s.length,o=new Array(i);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<i;d++)o[d]=s[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},7242:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=s(7462),a=(s(7294),s(3905));const i={sidebar_position:1},o="What is a Session",r={unversionedId:"tutorials/sessions/what-is-a-session",id:"tutorials/sessions/what-is-a-session",title:"What is a Session",description:"A session is just a data container. They are called sessions because data is intended to be stored for a period of time before being deleted:",source:"@site/docs/tutorials/sessions/what-is-a-session.md",sourceDirName:"tutorials/sessions",slug:"/tutorials/sessions/what-is-a-session",permalink:"/tutorials/sessions/what-is-a-session",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Sessions",permalink:"/category/sessions"},next:{title:"Create Session",permalink:"/tutorials/sessions/create-session"}},l={},d=[{value:"Session Token",id:"session-token",level:2},{value:"Session Data",id:"session-data",level:2},{value:"Shared Sessions",id:"shared-sessions",level:2}],u={toc:d},h="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-a-session"},"What is a Session"),(0,a.kt)("p",null,"A session is just a data container. They are called sessions because data is intended to be stored for a period of time before being deleted:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A session can expire"),(0,a.kt)("li",{parentName:"ul"},"When a session expires, all its data is deleted"),(0,a.kt)("li",{parentName:"ul"},"The session and data can be deleted or just the data. If you only delete data, you can continue to use the session")),(0,a.kt)("p",null,"A session can represent:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Whilst a user is logged into your app"),(0,a.kt)("li",{parentName:"ul"},"Whilst you're waiting for a user to confirm a One Time Password"),(0,a.kt)("li",{parentName:"ul"},"Until the session data has been stored in the primary database")),(0,a.kt)("p",null,"For example, when writing a service which handles users, you can create a separate session for each user that logs in and delete the session when they log out."),(0,a.kt)("p",null,(0,a.kt)("img",{src:s(2358).Z,width:"875",height:"502"})),(0,a.kt)("p",null,"If user 2 logs out, their session can be ended which deletes their data, without affecting any other sessions. Session can also be set to expire with a duration. In this example,\na session expire could be used as an auto logout feature."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"session-token"},"Session Token"),(0,a.kt)("p",null,"A session is identified by a token, which is just a string. When you create a session the server returns a token which is used with commands to access the data."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"session-data"},"Session Data"),(0,a.kt)("p",null,"Each session has a dedicated data store. When you store, get, update etc session data, you are only accessing that particular session's data store."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you are finished with the data you can end the session"),(0,a.kt)("li",{parentName:"ul"},"If the session was created with an expiry duration, the session and data can both be deleted, or just the data")),(0,a.kt)("p",null,"A visual representation of two session with tokens ",(0,a.kt)("inlineCode",{parentName:"p"},"1234")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"4321"),". Each token is mapped to dedicated expiry info and data:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Session map",src:s(5150).Z,width:"516",height:"518"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"shared-sessions"},"Shared Sessions"),(0,a.kt)("p",null,"A session doesn't belong to a particular client via some authentication process - it can be accessed by any client with the token. But there may be cases where sharing a session is useful, for example a session\nthat stores default settings which are common to many areas of the backend services. "),(0,a.kt)("p",null,"You could distribute the session token amongst all clients, but this adds complexity. This is what shared sessions are for."),(0,a.kt)("p",null,"When a session is shared, the session token can be retrieved from just the session name."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Token Generation"),(0,a.kt)("div",null,(0,a.kt)("div",null,"If a session is not shared:",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",null,"The session name does not take part in token generation. This means two sessions with the same name do not generate the same token")),"If a session is shared:",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",null,"The session name is used in token generation, allowing others to get the token from session name"))))),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"example---pizza-delivery"},"Example - Pizza Delivery"),(0,a.kt)("p",null,"A pizza delivery app must track pizzas as they are out for delivery, but once delivered, the delivery data can be discarded."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When a pizza is out the oven and assigned to a driver, start a new session"),(0,a.kt)("li",{parentName:"ol"},"Update the session data as the driver delivers (position, estimated time, etc)"),(0,a.kt)("li",{parentName:"ol"},"When a pizza is delivered, the session is ended, deleting the data")),(0,a.kt)("p",null,"An alternative is to have a session per driver. When a pizza is delivered its key is deleted from the session. The session ends when the driver finishes their shift."),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"example---shopping-basket"},"Example - Shopping Basket"),(0,a.kt)("p",null,"An ecommerce website lets customers add items to their basket, but many customers are just 'window shopping' - they add items to their basket without any intention to actually buy the products."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a session when a customer visits the site (or adds their first item)"),(0,a.kt)("li",{parentName:"ol"},"Store each basket item in the session"),(0,a.kt)("li",{parentName:"ol"},"Set the session expiry duration to a reasonable time to allow delays and decisions"),(0,a.kt)("li",{parentName:"ol"},"If the customer leaves the site without completing the order, the basket will be cleared when the sessions expires")))}c.isMDXComponent=!0},5150:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sessions_map-90a359e9803b479b0879c2fda3946ffa.svg"},2358:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sessions_overview-f310ec992d9001a7761b18d233cae66b.png"}}]);