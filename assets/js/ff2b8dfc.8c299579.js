"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[15766],{50158:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,b=c["".concat(o,".").concat(d)]||c[d]||m[d]||p;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<p;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(29122),a=(r(46393),r(50158));const p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,l={unversionedId:"pages/rush-lib.versionpolicy.bump",id:"pages/rush-lib.versionpolicy.bump",title:"rush-lib.versionpolicy.bump",description:"Home &gt; @microsoft/rush-lib &gt; VersionPolicy &gt; bump",source:"@site/docs/pages/rush-lib.versionpolicy.bump.md",sourceDirName:"pages",slug:"/pages/rush-lib.versionpolicy.bump",permalink:"/pages/rush-lib.versionpolicy.bump",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},o={},u=[{value:"VersionPolicy.bump() method",id:"versionpolicybump-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.versionpolicy"},"VersionPolicy")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.versionpolicy.bump"},"bump")),(0,a.kt)("h2",{id:"versionpolicybump-method"},"VersionPolicy.bump() method"),(0,a.kt)("p",null,"Bumps version based on the policy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract bump(bumpType?: BumpType, identifier?: string): void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bumpType"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/rush-lib.bumptype"},"BumpType")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(Optional)")," (optional) override bump type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"identifier"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(Optional)")," (optional) override prerelease Id")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"void"))}m.isMDXComponent=!0}}]);