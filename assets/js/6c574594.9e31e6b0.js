"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[3744],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(b,i(i({ref:n},c),{},{components:t})):r.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2,displayed_sidebar:"homeSidebar"},i="Debian Package",l={unversionedId:"home/install/package",id:"home/install/package",title:"Debian Package",description:"There is a Docker image if you are running on Windows (note: WSL2 on Windows is not tested).",source:"@site/docs/home/install/package.md",sourceDirName:"home/install",slug:"/home/install/package",permalink:"/home/install/package",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"homeSidebar"},sidebar:"homeSidebar",previous:{title:"Windows",permalink:"/home/install/docker/windows"},next:{title:"Run",permalink:"/home/run"}},s={},p=[{value:"Download",id:"download",level:2},{value:"Install",id:"install",level:2},{value:"Run",id:"run",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debian-package"},"Debian Package"),(0,a.kt)("p",null,"There is a ",(0,a.kt)("a",{parentName:"p",href:"./docker/windows"},"Docker")," image if you are running on Windows (note: WSL2 on Windows is not tested)."),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("p",null,"Download the latest version ",(0,a.kt)("a",{parentName:"p",href:"https://releases.nemesisdb.io/package/nemesisdb_0.7.1_amd64.deb"},"here"),"."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Open a terminal, change to the download location and install with ",(0,a.kt)("inlineCode",{parentName:"p"},"dpkg"),"."),(0,a.kt)("p",null,"The install location is: ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/nemesisdb/<version>"),"."),(0,a.kt)("p",null,"For example, to install version 0.6.5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -i nemesisdb_0.6.5_amd64.deb\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"This installs the server and default config file to ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/nemesisdb/0.6.5"),"."),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("p",null,"To start the server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/local/bin/nemesisdb/0.6.5\n./nemesisdb --config=default.jsonc\n")),(0,a.kt)("p",null,"This starts the server with persistance disabled and the WebSocket API listening on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1987"),"."))}u.isMDXComponent=!0}}]);