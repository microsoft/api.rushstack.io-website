"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[42592],{50158:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(46393);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(t),m=i,g=f["".concat(s,".").concat(m)]||f[m]||c[m]||a;return t?n.createElement(g,l(l({ref:r},u),{},{components:t})):n.createElement(g,l({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},89954:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=t(20216),i=(t(46393),t(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,o={unversionedId:"pages/rush-lib.rushconfiguration.getimplicitlypreferredversions",id:"pages/rush-lib.rushconfiguration.getimplicitlypreferredversions",title:"rush-lib.rushconfiguration.getimplicitlypreferredversions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; getImplicitlyPreferredVersions",source:"@site/docs/pages/rush-lib.rushconfiguration.getimplicitlypreferredversions.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfiguration.getimplicitlypreferredversions",permalink:"/pages/rush-lib.rushconfiguration.getimplicitlypreferredversions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},p=[{value:"RushConfiguration.getImplicitlyPreferredVersions() method",id:"rushconfigurationgetimplicitlypreferredversions-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function c(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration.getimplicitlypreferredversions"},"getImplicitlyPreferredVersions")),(0,i.kt)("h2",{id:"rushconfigurationgetimplicitlypreferredversions-method"},"RushConfiguration.getImplicitlyPreferredVersions() method"),(0,i.kt)("p",null,"Returns a map of all direct dependencies that only have a single semantic version specifier."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getImplicitlyPreferredVersions(variant?: string | undefined): Map<string, string>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"variant"),(0,i.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("i",null,"(Optional)")," The name of the current variant in use by the active command.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Map","<","string, string",">"),(0,i.kt)("p",null,"A map of dependency name -- ",">"," version specifier for implicitly preferred versions."))}c.isMDXComponent=!0}}]);