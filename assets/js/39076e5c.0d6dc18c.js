"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[38318],{50158:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(20216),n=r(46393),l=r(50158);const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/node-core-library.path.isequal",id:"pages/node-core-library.path.isequal",title:"node-core-library.path.isequal",description:"Home &gt; @rushstack/node-core-library &gt; Path &gt; isEqual",source:"@site/docs/pages/node-core-library.path.isequal.md",sourceDirName:"pages",slug:"/pages/node-core-library.path.isequal",permalink:"/pages/node-core-library.path.isequal",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},s=[{value:"Path.isEqual() method",id:"pathisequal-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.path"},"Path")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.path.isequal"},"isEqual")),(0,l.kt)("h2",{id:"pathisequal-method"},"Path.isEqual() method"),(0,l.kt)("p",null,"Returns true if ",(0,l.kt)("inlineCode",{parentName:"p"},"path1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"path2")," refer to the same underlying path."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static isEqual(path1: string, path2: string): boolean;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path1"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path2"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")),(0,l.kt)("p",null,"boolean"),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The comparison is performed using ",(0,l.kt)("inlineCode",{parentName:"p"},"path.relative()"),(0,l.kt)(n.Fragment,null),"."))}m.isMDXComponent=!0}}]);