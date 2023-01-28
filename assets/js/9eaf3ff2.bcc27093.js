"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[35263],{50158:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(20216),o=(r(46393),r(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,i={unversionedId:"pages/rush-lib.rushconfigurationproject.downstreamdependencyprojects",id:"pages/rush-lib.rushconfigurationproject.downstreamdependencyprojects",title:"rush-lib.rushconfigurationproject.downstreamdependencyprojects",description:"Home &gt; @microsoft/rush-lib &gt; RushConfigurationProject &gt; downstreamDependencyProjects",source:"@site/docs/pages/rush-lib.rushconfigurationproject.downstreamdependencyprojects.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfigurationproject.downstreamdependencyprojects",permalink:"/pages/rush-lib.rushconfigurationproject.downstreamdependencyprojects",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"RushConfigurationProject.downstreamDependencyProjects property",id:"rushconfigurationprojectdownstreamdependencyprojects-property",level:2}],u={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfigurationproject.downstreamdependencyprojects"},"downstreamDependencyProjects")),(0,o.kt)("h2",{id:"rushconfigurationprojectdownstreamdependencyprojects-property"},"RushConfigurationProject.downstreamDependencyProjects property"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,o.kt)("p",{parentName:"blockquote"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"consumingProjectNames")," instead, as it has Set semantics, which better reflect the nature of the data.")),(0,o.kt)("p",null,"An array of projects within the Rush configuration which directly depend on this package."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get downstreamDependencyProjects(): string[];\n")))}l.isMDXComponent=!0}}]);