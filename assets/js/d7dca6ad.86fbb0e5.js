"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[52849],{50158:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>g});var a=r(46393);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),i=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=i(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=i(r),d=n,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(g,o(o({ref:e},c),{},{components:r})):a.createElement(g,o({ref:e},c))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[m]="string"==typeof t?t:n,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29224:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(29122),n=r(46393),l=r(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/stream-collator",id:"pages/stream-collator",title:"stream-collator",description:"Home &gt; @rushstack/stream-collator",source:"@site/docs/pages/stream-collator.md",sourceDirName:"pages",slug:"/pages/stream-collator",permalink:"/pages/stream-collator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},c=[{value:"stream-collator package",id:"stream-collator-package",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2}],m={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,l.kt)(u,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/stream-collator"},"@rushstack/stream-collator")),(0,l.kt)("h2",{id:"stream-collator-package"},"stream-collator package"),(0,l.kt)("p",null,"This library enables a tool to display live console output from multiple concurrent processes, while ensuring that their output does not get jumbled together."),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"For more info, please see the package ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/stream-collator"},"README"),(0,l.kt)(n.Fragment,null),"."),(0,l.kt)("h2",{id:"classes"},"Classes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/stream-collator.collatedterminal"},"CollatedTerminal")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"(BETA)"))," This API was introduced as a temporary measure.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/stream-collator.collatedwriter"},"CollatedWriter")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"(BETA)"))," An writable interface for managing output of simultaneous processes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/stream-collator.streamcollator"},"StreamCollator")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"(BETA)"))," A static class which manages the output of multiple threads.")))),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Interface"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/stream-collator.istreamcollatoroptions"},"IStreamCollatorOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"(BETA)"))," Constructor options for ",(0,l.kt)("a",{parentName:"td",href:"/pages/stream-collator.streamcollator"},"StreamCollator"),(0,l.kt)(n.Fragment,null),".")))))}d.isMDXComponent=!0}}]);