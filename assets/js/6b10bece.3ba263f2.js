"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[90869],{50158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,g=u["".concat(o,".").concat(y)]||u[y]||m[y]||s;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(20216),a=r(46393),s=r(50158);const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,o={unversionedId:"pages/node-core-library.filesystem.getstatisticsasync",id:"pages/node-core-library.filesystem.getstatisticsasync",title:"node-core-library.filesystem.getstatisticsasync",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem &gt; getStatisticsAsync",source:"@site/docs/pages/node-core-library.filesystem.getstatisticsasync.md",sourceDirName:"pages",slug:"/pages/node-core-library.filesystem.getstatisticsasync",permalink:"/pages/node-core-library.filesystem.getstatisticsasync",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},p=[{value:"FileSystem.getStatisticsAsync() method",id:"filesystemgetstatisticsasync-method",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/pages/node-core-library.filesystem"},"FileSystem")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/pages/node-core-library.filesystem.getstatisticsasync"},"getStatisticsAsync")),(0,s.kt)("h2",{id:"filesystemgetstatisticsasync-method"},"FileSystem.getStatisticsAsync() method"),(0,s.kt)("p",null,"An async version of ",(0,s.kt)("a",{parentName:"p",href:"/pages/node-core-library.filesystem.getstatistics"},"FileSystem.getStatistics()"),(0,s.kt)(a.Fragment,null),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Signature:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"static getStatisticsAsync(path: string): Promise<FileSystemStats>;\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")),(0,s.kt)("p",null,"Promise","<",(0,s.kt)("a",{parentName:"p",href:"/pages/node-core-library.filesystemstats"},"FileSystemStats"),(0,s.kt)(a.Fragment,null),">"))}u.isMDXComponent=!0}}]);