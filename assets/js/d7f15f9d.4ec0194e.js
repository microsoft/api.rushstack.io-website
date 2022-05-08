"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[56124],{45242:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=s(r),m=a,d=h["".concat(i,".").concat(m)]||h[m]||c[m]||u;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,l=new Array(u);l[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<u;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},17016:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(50394),a=r(51614),u=(r(63929),r(45242)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,s={unversionedId:"pages/rush-lib.rush.launchrushx",id:"pages/rush-lib.rush.launchrushx",title:"rush-lib.rush.launchrushx",description:"Home &gt; @microsoft/rush-lib &gt; Rush &gt; launchRushX",source:"@site/docs/pages/rush-lib.rush.launchrushx.md",sourceDirName:"pages",slug:"/pages/rush-lib.rush.launchrushx",permalink:"/pages/rush-lib.rush.launchrushx",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},c=[{value:"Rush.launchRushX() method",id:"rushlaunchrushx-method",level:2},{value:"Parameters",id:"parameters",level:2}],h={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,u.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,u.kt)("a",{parentName:"p",href:"/pages/rush-lib.rush"},"Rush")," ",">"," ",(0,u.kt)("a",{parentName:"p",href:"/pages/rush-lib.rush.launchrushx"},"launchRushX")),(0,u.kt)("h2",{id:"rushlaunchrushx-method"},"Rush.launchRushX() method"),(0,u.kt)("p",null,"This API is used by the ",(0,u.kt)("inlineCode",{parentName:"p"},"@microsoft/rush"),' front end to launch the "rushx" command-line. Third-party tools should not use this API. Instead, they should execute the "rushx" binary and start a new Node.js process.'),(0,u.kt)("b",null,"Signature:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"static launchRushX(launcherVersion: string, options: ILaunchOptions): void;\n")),(0,u.kt)("h2",{id:"parameters"},"Parameters"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"launcherVersion"),(0,u.kt)("td",{parentName:"tr",align:null},"string"),(0,u.kt)("td",{parentName:"tr",align:null},"The version of the ",(0,u.kt)("code",null,"@microsoft/rush")," wrapper used to call invoke the CLI.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"options"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("a",{parentName:"td",href:"/pages/rush-lib.ilaunchoptions"},"ILaunchOptions")),(0,u.kt)("td",{parentName:"tr",align:null})))),(0,u.kt)("b",null,"Returns:"),(0,u.kt)("p",null,"void"))}m.isMDXComponent=!0}}]);