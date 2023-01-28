"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[3527],{50158:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||o;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(20216),n=(r(46393),r(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,s={unversionedId:"pages/heft.compilesubstagehooks",id:"pages/heft.compilesubstagehooks",title:"heft.compilesubstagehooks",description:"Home &gt; @rushstack/heft &gt; CompileSubstageHooks",source:"@site/docs/pages/heft.compilesubstagehooks.md",sourceDirName:"pages",slug:"/pages/heft.compilesubstagehooks",permalink:"/pages/heft.compilesubstagehooks",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},p=[{value:"CompileSubstageHooks class",id:"compilesubstagehooks-class",level:2},{value:"Properties",id:"properties",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/heft"},"@rushstack/heft")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/heft.compilesubstagehooks"},"CompileSubstageHooks")),(0,n.kt)("h2",{id:"compilesubstagehooks-class"},"CompileSubstageHooks class"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class CompileSubstageHooks extends BuildSubstageHooksBase \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",{parentName:"p",href:"/pages/heft.buildsubstagehooksbase"},"BuildSubstageHooksBase")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/heft.compilesubstagehooks.aftercompile"},"afterCompile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"readonly")),(0,n.kt)("td",{parentName:"tr",align:null},"AsyncParallelHook"),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("code",null,"afterCompile"),' event is fired exactly once, after the "compile" stage completes its first operation. The "bundle" stage will not begin until all event handlers have resolved their promises. The behavior of this event is the same in watch mode and non-watch mode.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/heft.compilesubstagehooks.afterrecompile"},"afterRecompile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"readonly")),(0,n.kt)("td",{parentName:"tr",align:null},"AsyncParallelHook"),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("code",null,"afterRecompile")," event is only used in watch mode. It fires whenever the compiler's outputs have been rebuilt. The initial compilation fires the ",(0,n.kt)("code",null,"afterCompile")," event only, and then all subsequent iterations fire the ",(0,n.kt)("code",null,"afterRecompile")," event only. Heft does not wait for the ",(0,n.kt)("code",null,"afterRecompile")," promises to resolve.")))))}c.isMDXComponent=!0}}]);