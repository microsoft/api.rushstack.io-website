"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[87838],{50158:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<p;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(29122),n=r(46393),p=r(50158);const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,l={unversionedId:"pages/api-extractor-model.apipackage.findentrypointsbypath",id:"pages/api-extractor-model.apipackage.findentrypointsbypath",title:"api-extractor-model.apipackage.findentrypointsbypath",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiPackage &gt; findEntryPointsByPath",source:"@site/docs/pages/api-extractor-model.apipackage.findentrypointsbypath.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.apipackage.findentrypointsbypath",permalink:"/pages/api-extractor-model.apipackage.findentrypointsbypath",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"ApiPackage.findEntryPointsByPath() method",id:"apipackagefindentrypointsbypath-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,p.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apipackage"},"ApiPackage")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apipackage.findentrypointsbypath"},"findEntryPointsByPath")),(0,p.kt)("h2",{id:"apipackagefindentrypointsbypath-method"},"ApiPackage.findEntryPointsByPath() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"findEntryPointsByPath(importPath: string): ReadonlyArray<ApiEntryPoint>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"importPath"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"ReadonlyArray","<",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apientrypoint"},"ApiEntryPoint"),(0,p.kt)(n.Fragment,null),">"))}d.isMDXComponent=!0}}]);