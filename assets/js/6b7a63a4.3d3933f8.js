"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[76890],{50158:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},i="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),i=c(t),f=o,d=i["".concat(l,".").concat(f)]||i[f]||h[f]||a;return t?n.createElement(d,s(s({ref:r},u),{},{components:t})):n.createElement(d,s({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[i]="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88103:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(29122),o=(t(46393),t(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/rush-lib.rushconstants.projectrushfoldername",id:"pages/rush-lib.rushconstants.projectrushfoldername",title:"rush-lib.rushconstants.projectrushfoldername",description:"Home &gt; @microsoft/rush-lib &gt; RushConstants &gt; projectRushFolderName",source:"@site/docs/pages/rush-lib.rushconstants.projectrushfoldername.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconstants.projectrushfoldername",permalink:"/pages/rush-lib.rushconstants.projectrushfoldername",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},l={},c=[{value:"RushConstants.projectRushFolderName property",id:"rushconstantsprojectrushfoldername-property",level:2}],u={toc:c},i="wrapper";function h(e){let{components:r,...t}=e;return(0,o.kt)(i,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconstants"},"RushConstants")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconstants.projectrushfoldername"},"projectRushFolderName")),(0,o.kt)("h2",{id:"rushconstantsprojectrushfoldername-property"},"RushConstants.projectRushFolderName property"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"The name of the per-project folder where project-specific Rush files are stored. For example, the package-deps files, which are used by commands to determine if a particular project needs to be rebuilt."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static readonly projectRushFolderName: string;\n")))}h.isMDXComponent=!0}}]);