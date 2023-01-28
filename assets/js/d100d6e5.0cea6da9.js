"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[88116],{50158:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var r=t(46393);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),c=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=n,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return t?r.createElement(g,p(p({ref:a},s),{},{components:t})):r.createElement(g,p({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,p=new Array(l);p[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<l;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94835:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=t(20216),n=t(46393),l=t(50158);const p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,i={unversionedId:"pages/node-core-library.packagename",id:"pages/node-core-library.packagename",title:"node-core-library.packagename",description:"Home &gt; @rushstack/node-core-library &gt; PackageName",source:"@site/docs/pages/node-core-library.packagename.md",sourceDirName:"pages",slug:"/pages/node-core-library.packagename",permalink:"/pages/node-core-library.packagename",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"PackageName class",id:"packagename-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],m={toc:s};function d(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagename"},"PackageName")),(0,l.kt)("h2",{id:"packagename-class"},"PackageName class"),(0,l.kt)("p",null,"Provides basic operations for validating and manipulating NPM package names such as ",(0,l.kt)("inlineCode",{parentName:"p"},"my-package")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/my-package"),(0,l.kt)(n.Fragment,null),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class PackageName \n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"This is the default implementation of ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagenameparser"},"PackageNameParser"),(0,l.kt)(n.Fragment,null),", exposed as a convenient static class. If you need to configure the parsing rules, use ",(0,l.kt)("inlineCode",{parentName:"p"},"PackageNameParser")," instead."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.packagename.combineparts"},"combineParts(scope, unscopedName)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Combines an optional package scope with an unscoped root name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.packagename.getscope"},"getScope(packageName)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"The parsed NPM scope, or an empty string if there was no scope. The scope value will always include the at-sign.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.packagename.getunscopedname"},"getUnscopedName(packageName)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"The parsed NPM package name without the scope.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.packagename.isvalidname"},"isValidName(packageName)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the specified package name is valid, or false otherwise.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.packagename.parse"},"parse(packageName)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Same as ",(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.packagename.tryparse"},"PackageName.tryParse()"),(0,l.kt)(n.Fragment,null),", except this throws an exception if the input cannot be parsed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.packagename.tryparse"},"tryParse(packageName)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"This attempts to parse a package name that may include a scope component. The packageName must not be an empty string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.packagename.validate"},"validate(packageName)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Throws an exception if the specified name is not a valid package name. The packageName must not be an empty string.")))))}d.isMDXComponent=!0}}]);