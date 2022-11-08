"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[99129],{50158:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),c=o,g=d["".concat(i,".").concat(c)]||d[c]||m[c]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(20216),o=(r(46393),r(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"pages/node-core-library.import.resolvemodule",id:"pages/node-core-library.import.resolvemodule",title:"node-core-library.import.resolvemodule",description:"Home &gt; @rushstack/node-core-library &gt; Import &gt; resolveModule",source:"@site/docs/pages/node-core-library.import.resolvemodule.md",sourceDirName:"pages",slug:"/pages/node-core-library.import.resolvemodule",permalink:"/pages/node-core-library.import.resolvemodule",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},s=[{value:"Import.resolveModule() method",id:"importresolvemodule-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.import"},"Import")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.import.resolvemodule"},"resolveModule")),(0,o.kt)("h2",{id:"importresolvemodule-method"},"Import.resolveModule() method"),(0,o.kt)("p",null,"This resolves a module path using similar logic as the Node.js ",(0,o.kt)("inlineCode",{parentName:"p"},"require.resolve()")," API, but supporting extra features such as specifying the base folder."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static resolveModule(options: IImportResolveModuleOptions): string;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.iimportresolvemoduleoptions"},"IImportResolveModuleOptions")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"string"),(0,o.kt)("p",null,"the absolute path of the resolved module. If ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.iimportresolveoptions.includesystemmodules"},"IImportResolveOptions.includeSystemModules")," is specified and a system module is found, then its name is returned without any file path."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"A module path is a text string that might appear in a statement such as ",(0,o.kt)("inlineCode",{parentName:"p"},'import { X } from "____";')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'const x = require("___");')," . The implementation is based on the popular ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," NPM package."),(0,o.kt)("p",null,"Suppose ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," is an NPM package whose entry point is ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/index.js")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Returns \"/path/to/project/node_modules/example/lib/index.js\"\nImport.resolveModule({ modulePath: 'example' });\n\n// Returns \"/path/to/project/node_modules/example/lib/other.js\"\nImport.resolveModule({ modulePath: 'example/lib/other' });\n")),(0,o.kt)("p",null,"If you need to determine the containing package folder (",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/project/node_modules/example")," ), use ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.import.resolvepackage"},"Import.resolvePackage()")," instead."))}m.isMDXComponent=!0}}]);