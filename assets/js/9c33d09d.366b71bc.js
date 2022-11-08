"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[83190],{50158:(e,r,n)=>{n.d(r,{Zo:()=>i,kt:()=>y});var t=n(46393);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},i=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(n),y=o,f=m["".concat(u,".").concat(y)]||m[y]||p[y]||a;return n?t.createElement(f,l(l({ref:r},i),{},{components:n})):t.createElement(f,l({ref:r},i))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7506:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var t=n(20216),o=(n(46393),n(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/rush-lib.rushlifecyclehooks.runanyglobalcustomcommand",id:"pages/rush-lib.rushlifecyclehooks.runanyglobalcustomcommand",title:"rush-lib.rushlifecyclehooks.runanyglobalcustomcommand",description:"Home &gt; @microsoft/rush-lib &gt; RushLifecycleHooks &gt; runAnyGlobalCustomCommand",source:"@site/docs/pages/rush-lib.rushlifecyclehooks.runanyglobalcustomcommand.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushlifecyclehooks.runanyglobalcustomcommand",permalink:"/pages/rush-lib.rushlifecyclehooks.runanyglobalcustomcommand",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},s=[{value:"RushLifecycleHooks.runAnyGlobalCustomCommand property",id:"rushlifecyclehooksrunanyglobalcustomcommand-property",level:2}],i={toc:s};function p(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},i,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushlifecyclehooks"},"RushLifecycleHooks")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushlifecyclehooks.runanyglobalcustomcommand"},"runAnyGlobalCustomCommand")),(0,o.kt)("h2",{id:"rushlifecyclehooksrunanyglobalcustomcommand-property"},"RushLifecycleHooks.runAnyGlobalCustomCommand property"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"The hook to run before executing any global Rush CLI Command (defined in command-line.json)."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"runAnyGlobalCustomCommand: AsyncSeriesHook<IGlobalCommand>;\n")))}p.isMDXComponent=!0}}]);