"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[25777],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(63929);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=n,g=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return r?a.createElement(g,s(s({ref:t},c),{},{components:r})):a.createElement(g,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44419:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=r(50394),n=r(51614),o=(r(63929),r(45242)),s=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,u={unversionedId:"pages/rush-lib.rushconfiguration.allowmostlystandardpackagenames",id:"pages/rush-lib.rushconfiguration.allowmostlystandardpackagenames",title:"rush-lib.rushconfiguration.allowmostlystandardpackagenames",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; allowMostlyStandardPackageNames",source:"@site/docs/pages/rush-lib.rushconfiguration.allowmostlystandardpackagenames.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfiguration.allowmostlystandardpackagenames",permalink:"/pages/rush-lib.rushconfiguration.allowmostlystandardpackagenames",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},p=[{value:"RushConfiguration.allowMostlyStandardPackageNames property",id:"rushconfigurationallowmostlystandardpackagenames-property",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration.allowmostlystandardpackagenames"},"allowMostlyStandardPackageNames")),(0,o.kt)("h2",{id:"rushconfigurationallowmostlystandardpackagenames-property"},"RushConfiguration.allowMostlyStandardPackageNames property"),(0,o.kt)("p",null,'Today the npmjs.com registry enforces fairly strict naming rules for packages, but in the early days there was no standard and hardly any enforcement. A few large legacy projects are still using nonstandard package names, and private registries sometimes allow it. Set "allowMostlyStandardPackageNames" to true to relax Rush\'s enforcement of package names. This allows upper case letters and in the future may relax other rules, however we want to minimize these exceptions. Many popular tools use certain punctuation characters as delimiters, based on the assumption that they will never appear in a package name; thus if we relax the rules too much it is likely to cause very confusing malfunctions.'),(0,o.kt)("p",null,"The default value is false."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get allowMostlyStandardPackageNames(): boolean;\n")))}m.isMDXComponent=!0}}]);