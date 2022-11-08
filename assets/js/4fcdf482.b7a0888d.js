"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[23543],{50158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(20216),a=(n(46393),n(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,i={unversionedId:"pages/node-core-library.enum",id:"pages/node-core-library.enum",title:"node-core-library.enum",description:"Home &gt; @rushstack/node-core-library &gt; Enum",source:"@site/docs/pages/node-core-library.enum.md",sourceDirName:"pages",slug:"/pages/node-core-library.enum",permalink:"/pages/node-core-library.enum",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},s=[{value:"Enum class",id:"enum-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/node-core-library.enum"},"Enum")),(0,a.kt)("h2",{id:"enum-class"},"Enum class"),(0,a.kt)("p",null,"A helper for looking up TypeScript ",(0,a.kt)("inlineCode",{parentName:"p"},"enum")," keys/values."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Enum\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"TypeScript enums implement a lookup table for mapping between their keys and values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'enum Colors {\n  Red = 1\n}\n\n// Prints "Red"\nconsole.log(Colors[1]);\n\n// Prints "1"\nconsole.log(Colors["Red]);\n')),(0,a.kt)("p",null,'However the compiler\'s "noImplicitAny" validation has trouble with these mappings, because there are so many possible types for the map elements:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function f(s: string): Colors | undefined {\n  // (TS 7015) Element implicitly has an 'any' type because\n  // index expression is not of type 'number'.\n  return Colors[s];\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum")," helper provides a more specific, strongly typed way to access members:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function f(s: string): Colors | undefined {\n  return Enum.tryGetValueByKey(Colors, s);\n}\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/node-core-library.enum.getkeybynumber"},"getKeyByNumber(enumObject, value)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"static")),(0,a.kt)("td",{parentName:"tr",align:null},"This API is similar to ",(0,a.kt)("a",{parentName:"td",href:"/pages/node-core-library.enum.trygetkeybynumber"},"Enum.tryGetKeyByNumber()")," , except that it throws an exception if the key is undefined.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/node-core-library.enum.getvaluebykey"},"getValueByKey(enumObject, key)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"static")),(0,a.kt)("td",{parentName:"tr",align:null},"This API is similar to ",(0,a.kt)("a",{parentName:"td",href:"/pages/node-core-library.enum.trygetvaluebykey"},"Enum.tryGetValueByKey()")," , except that it throws an exception if the key is undefined.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/node-core-library.enum.trygetkeybynumber"},"tryGetKeyByNumber(enumObject, value)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"static")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns an enum string key, given its numeric value. Returns ",(0,a.kt)("code",null,"undefined")," if no matching value is found.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/node-core-library.enum.trygetvaluebykey"},"tryGetValueByKey(enumObject, key)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"static")),(0,a.kt)("td",{parentName:"tr",align:null},"Returns an enum value, given its key. Returns ",(0,a.kt)("code",null,"undefined")," if no matching key is found.")))))}c.isMDXComponent=!0}}]);