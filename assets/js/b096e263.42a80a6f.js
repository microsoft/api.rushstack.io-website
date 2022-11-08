"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[67251],{50158:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var o=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),u=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},i=function(e){var r=u(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=n,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return t?o.createElement(d,l(l({ref:r},i),{},{components:t})):o.createElement(d,l({ref:r},i))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<a;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93410:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(20216),n=(t(46393),t(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/rush-lib.rushlifecyclehooks.runglobalcustomcommand",id:"pages/rush-lib.rushlifecyclehooks.runglobalcustomcommand",title:"rush-lib.rushlifecyclehooks.runglobalcustomcommand",description:"Home &gt; @microsoft/rush-lib &gt; RushLifecycleHooks &gt; runGlobalCustomCommand",source:"@site/docs/pages/rush-lib.rushlifecyclehooks.runglobalcustomcommand.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushlifecyclehooks.runglobalcustomcommand",permalink:"/pages/rush-lib.rushlifecyclehooks.runglobalcustomcommand",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},u=[{value:"RushLifecycleHooks.runGlobalCustomCommand property",id:"rushlifecyclehooksrunglobalcustomcommand-property",level:2}],i={toc:u};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushlifecyclehooks"},"RushLifecycleHooks")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushlifecyclehooks.runglobalcustomcommand"},"runGlobalCustomCommand")),(0,n.kt)("h2",{id:"rushlifecyclehooksrunglobalcustomcommand-property"},"RushLifecycleHooks.runGlobalCustomCommand property"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"A hook map to allow plugins to hook specific named global commands (defined in command-line.json) before execution."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"runGlobalCustomCommand: HookMap<AsyncSeriesHook<IGlobalCommand>>;\n")))}p.isMDXComponent=!0}}]);