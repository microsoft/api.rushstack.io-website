"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[34225],{50158:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var a=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),i=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=i(e.components);return a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(t),g=n,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return t?a.createElement(m,o(o({ref:r},s),{},{components:t})):a.createElement(m,o({ref:r},s))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16068:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=t(20216),n=(t(46393),t(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,c={unversionedId:"pages/node-core-library.legacyadapters.convertcallbacktopromise_2",id:"pages/node-core-library.legacyadapters.convertcallbacktopromise_2",title:"node-core-library.legacyadapters.convertcallbacktopromise_2",description:"Home &gt; @rushstack/node-core-library &gt; LegacyAdapters &gt; convertCallbackToPromise",source:"@site/docs/pages/node-core-library.legacyadapters.convertcallbacktopromise_2.md",sourceDirName:"pages",slug:"/pages/node-core-library.legacyadapters.convertcallbacktopromise_2",permalink:"/pages/node-core-library.legacyadapters.convertcallbacktopromise_2",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},i=[{value:"LegacyAdapters.convertCallbackToPromise() method",id:"legacyadaptersconvertcallbacktopromise-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:i};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/node-core-library.legacyadapters"},"LegacyAdapters")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/node-core-library.legacyadapters.convertcallbacktopromise_2"},"convertCallbackToPromise")),(0,n.kt)("h2",{id:"legacyadaptersconvertcallbacktopromise-method"},"LegacyAdapters.convertCallbackToPromise() method"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"static convertCallbackToPromise<TResult, TError, TArg1, TArg2>(fn: (arg1: TArg1, arg2: TArg2, cb: LegacyCallback<TResult, TError>) => void, arg1: TArg1, arg2: TArg2): Promise<TResult>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fn"),(0,n.kt)("td",{parentName:"tr",align:null},"(arg1: TArg1, arg2: TArg2, cb: ",(0,n.kt)("a",{parentName:"td",href:"/pages/node-core-library.legacycallback"},"LegacyCallback")," ","<","TResult, TError",">",") =",">"," void"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"arg1"),(0,n.kt)("td",{parentName:"tr",align:null},"TArg1"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"arg2"),(0,n.kt)("td",{parentName:"tr",align:null},"TArg2"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<","TResult",">"))}u.isMDXComponent=!0}}]);