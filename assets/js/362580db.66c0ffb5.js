"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[34225],{50158:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var a=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),i=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=i(e.components);return a.createElement(p.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),m=n,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||l;return t?a.createElement(d,o(o({ref:r},s),{},{components:t})):a.createElement(d,o({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7947:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(29122),n=t(46393),l=t(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,p={unversionedId:"pages/node-core-library.legacyadapters.convertcallbacktopromise_2",id:"pages/node-core-library.legacyadapters.convertcallbacktopromise_2",title:"node-core-library.legacyadapters.convertcallbacktopromise_2",description:"Home &gt; @rushstack/node-core-library &gt; LegacyAdapters &gt; convertCallbackToPromise",source:"@site/docs/pages/node-core-library.legacyadapters.convertcallbacktopromise_2.md",sourceDirName:"pages",slug:"/pages/node-core-library.legacyadapters.convertcallbacktopromise_2",permalink:"/pages/node-core-library.legacyadapters.convertcallbacktopromise_2",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},s=[{value:"LegacyAdapters.convertCallbackToPromise() method",id:"legacyadaptersconvertcallbacktopromise-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:s},g="wrapper";function m(e){let{components:r,...t}=e;return(0,l.kt)(g,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.legacyadapters"},"LegacyAdapters")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.legacyadapters.convertcallbacktopromise_2"},"convertCallbackToPromise")),(0,l.kt)("h2",{id:"legacyadaptersconvertcallbacktopromise-method"},"LegacyAdapters.convertCallbackToPromise() method"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static convertCallbackToPromise<TResult, TError, TArg1, TArg2>(fn: (arg1: TArg1, arg2: TArg2, cb: LegacyCallback<TResult, TError>) => void, arg1: TArg1, arg2: TArg2): Promise<TResult>;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fn"),(0,l.kt)("td",{parentName:"tr",align:null},"(arg1: TArg1, arg2: TArg2, cb: ",(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.legacycallback"},"LegacyCallback"),(0,l.kt)(n.Fragment,null),"<","TResult, TError",">",") =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arg1"),(0,l.kt)("td",{parentName:"tr",align:null},"TArg1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arg2"),(0,l.kt)("td",{parentName:"tr",align:null},"TArg2"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")),(0,l.kt)("p",null,"Promise","<","TResult",">"))}m.isMDXComponent=!0}}]);