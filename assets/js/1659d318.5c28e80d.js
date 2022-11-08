"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[58295],{50158:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(46393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,h=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return t?n.createElement(h,o(o({ref:r},s),{},{components:t})):n.createElement(h,o({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94405:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=t(20216),a=(t(46393),t(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/rush-lib.rushconfiguration.tempshrinkwrapfilename",id:"pages/rush-lib.rushconfiguration.tempshrinkwrapfilename",title:"rush-lib.rushconfiguration.tempshrinkwrapfilename",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; tempShrinkwrapFilename",source:"@site/docs/pages/rush-lib.rushconfiguration.tempshrinkwrapfilename.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfiguration.tempshrinkwrapfilename",permalink:"/pages/rush-lib.rushconfiguration.tempshrinkwrapfilename",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},l={},u=[{value:"RushConfiguration.tempShrinkwrapFilename property",id:"rushconfigurationtempshrinkwrapfilename-property",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:u};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration.tempshrinkwrapfilename"},"tempShrinkwrapFilename")),(0,a.kt)("h2",{id:"rushconfigurationtempshrinkwrapfilename-property"},"RushConfiguration.tempShrinkwrapFilename property"),(0,a.kt)("p",null,'The full path of the temporary shrinkwrap file that is used during "rush install". This file may get rewritten by the package manager during installation.'),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"get tempShrinkwrapFilename(): string;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This property merely reports the filename; the file itself may not actually exist. Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\temp\\npm-shrinkwrap.json")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\temp\\pnpm-lock.yaml")))}c.isMDXComponent=!0}}]);