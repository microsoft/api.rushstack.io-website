"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[3558],{50158:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(46393);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?t.createElement(h,s(s({ref:r},p),{},{components:n})):t.createElement(h,s({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52703:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(20216),o=(n(46393),n(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,c={unversionedId:"pages/rush-lib.rushlifecyclehooks.runphasedcommand",id:"pages/rush-lib.rushlifecyclehooks.runphasedcommand",title:"rush-lib.rushlifecyclehooks.runphasedcommand",description:"Home &gt; @microsoft/rush-lib &gt; RushLifecycleHooks &gt; runPhasedCommand",source:"@site/docs/pages/rush-lib.rushlifecyclehooks.runphasedcommand.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushlifecyclehooks.runphasedcommand",permalink:"/pages/rush-lib.rushlifecyclehooks.runphasedcommand",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},l=[{value:"RushLifecycleHooks.runPhasedCommand property",id:"rushlifecyclehooksrunphasedcommand-property",level:2}],p={toc:l};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushlifecyclehooks"},"RushLifecycleHooks")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushlifecyclehooks.runphasedcommand"},"runPhasedCommand")),(0,o.kt)("h2",{id:"rushlifecyclehooksrunphasedcommand-property"},"RushLifecycleHooks.runPhasedCommand property"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"A hook map to allow plugins to hook specific named phased commands (defined in command-line.json) before execution."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"runPhasedCommand: HookMap<AsyncSeriesHook<IPhasedCommand>>;\n")))}u.isMDXComponent=!0}}]);