"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[30082],{45242:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(63929);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56015:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=t(50394),o=t(51614),a=(t(63929),t(45242)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,s={unversionedId:"pages/node-core-library.jsonnull",id:"pages/node-core-library.jsonnull",title:"node-core-library.jsonnull",description:"Home &gt; @rushstack/node-core-library &gt; JsonNull",source:"@site/docs/pages/node-core-library.jsonnull.md",sourceDirName:"pages",slug:"/pages/node-core-library.jsonnull",permalink:"/pages/node-core-library.jsonnull",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},c=[{value:"JsonNull type",id:"jsonnull-type",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:c};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/node-core-library.jsonnull"},"JsonNull")),(0,a.kt)("h2",{id:"jsonnull-type"},"JsonNull type"),(0,a.kt)("p",null,"The Rush Stack lint rules discourage usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," . However, JSON parsers always return JavaScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to keep the two syntaxes consistent. When creating interfaces that describe JSON structures, use ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonNull")," to avoid triggering the lint rule. Do not use ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonNull")," for any other purpose."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type JsonNull = null;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If you are designing a new JSON file format, it's a good idea to avoid ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," entirely. In most cases there are better representations that convey more information about an item that is unknown, omitted, or disabled."),(0,a.kt)("p",null,"To understand why ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," is deprecated, please see the ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/eslint-plugin")," documentation here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/eslint-plugin#rushstackno-null"},"https://www.npmjs.com/package/@rushstack/eslint-plugin","#","rushstackno-null")))}f.isMDXComponent=!0}}]);