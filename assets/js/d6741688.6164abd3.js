"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[9359],{50158:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var a=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=p(t),d=n,b=y["".concat(i,".").concat(d)]||y[d]||s[d]||l;return t?a.createElement(b,c(c({ref:r},u),{},{components:t})):a.createElement(b,c({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=y;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<l;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},35497:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(20216),n=(t(46393),t(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,o={unversionedId:"pages/node-core-library.legacycallback",id:"pages/node-core-library.legacycallback",title:"node-core-library.legacycallback",description:"Home &gt; @rushstack/node-core-library &gt; LegacyCallback",source:"@site/docs/pages/node-core-library.legacycallback.md",sourceDirName:"pages",slug:"/pages/node-core-library.legacycallback",permalink:"/pages/node-core-library.legacycallback",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},p=[{value:"LegacyCallback type",id:"legacycallback-type",level:2}],u={toc:p};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/node-core-library.legacycallback"},"LegacyCallback")),(0,n.kt)("h2",{id:"legacycallback-type"},"LegacyCallback type"),(0,n.kt)("p",null,"Callback used by ",(0,n.kt)("a",{parentName:"p",href:"/pages/node-core-library.legacyadapters"},"LegacyAdapters")," ."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type LegacyCallback<TResult, TError> = (\n  error: TError | null | undefined,\n  result: TResult\n) => void;\n")))}s.isMDXComponent=!0}}]);