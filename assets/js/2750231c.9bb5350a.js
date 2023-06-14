"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[16849],{50158:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),g=n,k=s["".concat(i,".").concat(g)]||s[g]||d[g]||o;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},77538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(29122),n=(r(46393),r(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"pages/node-core-library.packagejsonlookup.trygetpackagefolderfor",id:"pages/node-core-library.packagejsonlookup.trygetpackagefolderfor",title:"node-core-library.packagejsonlookup.trygetpackagefolderfor",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; tryGetPackageFolderFor",source:"@site/docs/pages/node-core-library.packagejsonlookup.trygetpackagefolderfor.md",sourceDirName:"pages",slug:"/pages/node-core-library.packagejsonlookup.trygetpackagefolderfor",permalink:"/pages/node-core-library.packagejsonlookup.trygetpackagefolderfor",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},c=[{value:"PackageJsonLookup.tryGetPackageFolderFor() method",id:"packagejsonlookuptrygetpackagefolderfor-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup.trygetpackagefolderfor"},"tryGetPackageFolderFor")),(0,n.kt)("h2",{id:"packagejsonlookuptrygetpackagefolderfor-method"},"PackageJsonLookup.tryGetPackageFolderFor() method"),(0,n.kt)("p",null,"Returns the absolute path of a folder containing a package.json file, by looking upwards from the specified fileOrFolderPath. If no package.json can be found, undefined is returned."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"tryGetPackageFolderFor(fileOrFolderPath: string): string | undefined;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileOrFolderPath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"a relative or absolute path to a source file or folder that may be part of a package")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"string ","|"," undefined"),(0,n.kt)("p",null,"an absolute path to a folder containing a package.json file"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"The fileOrFolderPath is not required to actually exist on disk. The fileOrFolderPath itself can be the return value, if it is a folder containing a package.json file. Both positive and negative lookup results are cached."))}d.isMDXComponent=!0}}]);