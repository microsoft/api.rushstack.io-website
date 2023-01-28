"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[48920],{50158:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>d});var t=n(46393);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,g=f["".concat(i,".").concat(d)]||f[d]||u[d]||o;return n?t.createElement(g,s(s({ref:r},c),{},{components:n})):t.createElement(g,s({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75262:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=n(20216),a=(n(46393),n(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/rush-lib.rushconstants.nonbrowserapprovedpackagesfilename",id:"pages/rush-lib.rushconstants.nonbrowserapprovedpackagesfilename",title:"rush-lib.rushconstants.nonbrowserapprovedpackagesfilename",description:"Home &gt; @microsoft/rush-lib &gt; RushConstants &gt; nonbrowserApprovedPackagesFilename",source:"@site/docs/pages/rush-lib.rushconstants.nonbrowserapprovedpackagesfilename.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconstants.nonbrowserapprovedpackagesfilename",permalink:"/pages/rush-lib.rushconstants.nonbrowserapprovedpackagesfilename",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},l=[{value:"RushConstants.nonbrowserApprovedPackagesFilename property",id:"rushconstantsnonbrowserapprovedpackagesfilename-property",level:2}],c={toc:l};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconstants"},"RushConstants")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconstants.nonbrowserapprovedpackagesfilename"},"nonbrowserApprovedPackagesFilename")),(0,a.kt)("h2",{id:"rushconstantsnonbrowserapprovedpackagesfilename-property"},"RushConstants.nonbrowserApprovedPackagesFilename property"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,'The filename ("nonbrowser-approved-packages.json") for an optional policy configuration file that stores a list of NPM packages that have been approved for usage by Rush projects. This is part of a pair of config files, one for projects that run in a web browser (e.g. whose approval criteria mostly focuses on licensing and code size), and one for everywhere else (e.g. tooling projects whose approval criteria mostly focuses on avoiding node',"_","modules sprawl)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static readonly nonbrowserApprovedPackagesFilename: string;\n")))}u.isMDXComponent=!0}}]);