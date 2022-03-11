"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[52931],{45242:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var a=r(63929);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=c(r),k=n,f=g["".concat(i,".").concat(k)]||g[k]||s[k]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},25443:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var a=r(95464),n=r(20134),o=(r(63929),r(45242)),l=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,c={unversionedId:"pages/node-core-library.packagejsonlookup.trygetpackagejsonfilepathfor",id:"pages/node-core-library.packagejsonlookup.trygetpackagejsonfilepathfor",title:"node-core-library.packagejsonlookup.trygetpackagejsonfilepathfor",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; tryGetPackageJsonFilePathFor",source:"@site/docs/pages/node-core-library.packagejsonlookup.trygetpackagejsonfilepathfor.md",sourceDirName:"pages",slug:"/pages/node-core-library.packagejsonlookup.trygetpackagejsonfilepathfor",permalink:"/pages/node-core-library.packagejsonlookup.trygetpackagejsonfilepathfor",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},s=[{value:"PackageJsonLookup.tryGetPackageJsonFilePathFor() method",id:"packagejsonlookuptrygetpackagejsonfilepathfor-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],g={toc:s};function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup.trygetpackagejsonfilepathfor"},"tryGetPackageJsonFilePathFor")),(0,o.kt)("h2",{id:"packagejsonlookuptrygetpackagejsonfilepathfor-method"},"PackageJsonLookup.tryGetPackageJsonFilePathFor() method"),(0,o.kt)("p",null,"If the specified file or folder is part of a package, this returns the absolute path to the associated package.json file."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"tryGetPackageJsonFilePathFor(fileOrFolderPath: string): string | undefined;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fileOrFolderPath"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"a relative or absolute path to a source file or folder that may be part of a package")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"string ","|"," undefined"),(0,o.kt)("p",null,"an absolute path to ","*"," package.json file"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The package folder is determined using the same algorithm as ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup.trygetpackagefolderfor"},"PackageJsonLookup.tryGetPackageFolderFor()")," ."))}k.isMDXComponent=!0}}]);