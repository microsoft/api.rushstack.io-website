"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[9359],{45242:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(63929);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=u(t),f=a,b=y["".concat(i,".").concat(f)]||y[f]||s[f]||c;return t?n.createElement(b,l(l({ref:r},p),{},{components:t})):n.createElement(b,l({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=y;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<c;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},73346:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=t(50394),a=t(51614),c=(t(63929),t(45242)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,u={unversionedId:"pages/node-core-library.legacycallback",id:"pages/node-core-library.legacycallback",title:"node-core-library.legacycallback",description:"Home &gt; @rushstack/node-core-library &gt; LegacyCallback",source:"@site/docs/pages/node-core-library.legacycallback.md",sourceDirName:"pages",slug:"/pages/node-core-library.legacycallback",permalink:"/pages/node-core-library.legacycallback",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"LegacyCallback type",id:"legacycallback-type",level:2}],y={toc:s};function f(e){var r=e.components,t=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/node-core-library.legacycallback"},"LegacyCallback")),(0,c.kt)("h2",{id:"legacycallback-type"},"LegacyCallback type"),(0,c.kt)("p",null,"Callback used by ",(0,c.kt)("a",{parentName:"p",href:"/pages/node-core-library.legacyadapters"},"LegacyAdapters")," ."),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type LegacyCallback<TResult, TError> = (\n  error: TError | null | undefined,\n  result: TResult\n) => void;\n")))}f.isMDXComponent=!0}}]);