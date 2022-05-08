"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[45139],{45242:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=s(r),m=a,d=h["".concat(i,".").concat(m)]||h[m]||c[m]||l;return r?n.createElement(d,u(u({ref:t},p),{},{components:r})):n.createElement(d,u({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<l;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64310:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(50394),a=r(51614),l=(r(63929),r(45242)),u=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,s={unversionedId:"pages/rush-lib.rush.launch",id:"pages/rush-lib.rush.launch",title:"rush-lib.rush.launch",description:"Home &gt; @microsoft/rush-lib &gt; Rush &gt; launch",source:"@site/docs/pages/rush-lib.rush.launch.md",sourceDirName:"pages",slug:"/pages/rush-lib.rush.launch",permalink:"/pages/rush-lib.rush.launch",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},c=[{value:"Rush.launch() method",id:"rushlaunch-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],h={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rush-lib.rush"},"Rush")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rush-lib.rush.launch"},"launch")),(0,l.kt)("h2",{id:"rushlaunch-method"},"Rush.launch() method"),(0,l.kt)("p",null,"This API is used by the ",(0,l.kt)("inlineCode",{parentName:"p"},"@microsoft/rush"),' front end to launch the "rush" command-line. Third-party tools should not use this API. Instead, they should execute the "rush" binary and start a new Node.js process.'),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static launch(launcherVersion: string, arg: ILaunchOptions): void;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"launcherVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The version of the ",(0,l.kt)("code",null,"@microsoft/rush")," wrapper used to call invoke the CLI.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.ilaunchoptions"},"ILaunchOptions")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,"void"),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Earlier versions of the rush frontend used a different API contract. In the old contract, the second argument was the ",(0,l.kt)("inlineCode",{parentName:"p"},"isManaged")," value of the ",(0,l.kt)("a",{parentName:"p",href:"/pages/rush-lib.ilaunchoptions"},"ILaunchOptions")," object."),(0,l.kt)("p",null,"Even though this API isn't documented, it is still supported for legacy compatibility."))}m.isMDXComponent=!0}}]);