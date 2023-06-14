"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[66652],{50158:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(29122),a=n(46393),i=n(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,u={unversionedId:"pages/rush-lib.buildcacheconfiguration.tryloadasync",id:"pages/rush-lib.buildcacheconfiguration.tryloadasync",title:"rush-lib.buildcacheconfiguration.tryloadasync",description:"Home &gt; @microsoft/rush-lib &gt; BuildCacheConfiguration &gt; tryLoadAsync",source:"@site/docs/pages/rush-lib.buildcacheconfiguration.tryloadasync.md",sourceDirName:"pages",slug:"/pages/rush-lib.buildcacheconfiguration.tryloadasync",permalink:"/pages/rush-lib.buildcacheconfiguration.tryloadasync",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"BuildCacheConfiguration.tryLoadAsync() method",id:"buildcacheconfigurationtryloadasync-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.buildcacheconfiguration"},"BuildCacheConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.buildcacheconfiguration.tryloadasync"},"tryLoadAsync")),(0,i.kt)("h2",{id:"buildcacheconfigurationtryloadasync-method"},"BuildCacheConfiguration.tryLoadAsync() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Attempts to load the build-cache.json data from the standard file path ",(0,i.kt)("inlineCode",{parentName:"p"},"common/config/rush/build-cache.json"),(0,i.kt)(a.Fragment,null),". If the file has not been created yet, then undefined is returned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static tryLoadAsync(terminal: ITerminal, rushConfiguration: RushConfiguration, rushSession: RushSession): Promise<BuildCacheConfiguration | undefined>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"terminal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/node-core-library.iterminal"},"ITerminal")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rushConfiguration"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rushSession"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushsession"},"RushSession")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.buildcacheconfiguration"},"BuildCacheConfiguration")," ","|"," undefined",">"))}m.isMDXComponent=!0}}]);