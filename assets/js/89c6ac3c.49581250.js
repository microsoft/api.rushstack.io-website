"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[54110],{50158:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(46393);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(t),f=i,m=g["".concat(p,".").concat(f)]||g[f]||c[f]||a;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},46293:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(20216),i=(t(46393),t(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,l={unversionedId:"pages/rush-lib.rushconfiguration.gitallowedemailregexps",id:"pages/rush-lib.rushconfiguration.gitallowedemailregexps",title:"rush-lib.rushconfiguration.gitallowedemailregexps",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; gitAllowedEmailRegExps",source:"@site/docs/pages/rush-lib.rushconfiguration.gitallowedemailregexps.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfiguration.gitallowedemailregexps",permalink:"/pages/rush-lib.rushconfiguration.gitallowedemailregexps",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"RushConfiguration.gitAllowedEmailRegExps property",id:"rushconfigurationgitallowedemailregexps-property",level:2}],u={toc:s};function c(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration.gitallowedemailregexps"},"gitAllowedEmailRegExps")),(0,i.kt)("h2",{id:"rushconfigurationgitallowedemailregexps-property"},"RushConfiguration.gitAllowedEmailRegExps property"),(0,i.kt)("p",null,"[",'Part of the "gitPolicy" feature.',"]"," A list of regular expressions describing allowable email patterns for Git commits. They are case-insensitive anchored JavaScript RegExps. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'".*@example\\.com"')," This array will never be undefined."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly gitAllowedEmailRegExps: string[];\n")))}c.isMDXComponent=!0}}]);