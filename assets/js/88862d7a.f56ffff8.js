"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[18994],{50158:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>g});var n=r(46393);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=l(r),h=a,g=s["".concat(p,".").concat(h)]||s[h]||f[h]||o;return r?n.createElement(g,i(i({ref:e},c),{},{components:r})):n.createElement(g,i({ref:e},c))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=h;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[s]="string"==typeof t?t:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},67471:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(29122),a=(r(46393),r(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,u={unversionedId:"pages/rush-lib.rushconfiguration.trygetprojectforpath",id:"pages/rush-lib.rushconfiguration.trygetprojectforpath",title:"rush-lib.rushconfiguration.trygetprojectforpath",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; tryGetProjectForPath",source:"@site/docs/pages/rush-lib.rushconfiguration.trygetprojectforpath.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfiguration.trygetprojectforpath",permalink:"/pages/rush-lib.rushconfiguration.trygetprojectforpath",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},l=[{value:"RushConfiguration.tryGetProjectForPath() method",id:"rushconfigurationtrygetprojectforpath-method",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:l},s="wrapper";function f(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration.trygetprojectforpath"},"tryGetProjectForPath")),(0,a.kt)("h2",{id:"rushconfigurationtrygetprojectforpath-method"},"RushConfiguration.tryGetProjectForPath() method"),(0,a.kt)("p",null,"Returns the project for which the specified path is underneath that project's folder. If the path is not under any project's folder, returns undefined."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"tryGetProjectForPath(currentFolderPath: string): RushConfigurationProject | undefined;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currentFolderPath"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ","|"," undefined"))}f.isMDXComponent=!0}}]);