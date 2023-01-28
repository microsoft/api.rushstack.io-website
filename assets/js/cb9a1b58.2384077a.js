"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[81878],{50158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=n,g=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?o.createElement(g,p(p({ref:t},c),{},{components:r})):o.createElement(g,p({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(20216),n=(r(46393),r(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,i={unversionedId:"pages/heft.compilesubstagehooks.afterrecompile",id:"pages/heft.compilesubstagehooks.afterrecompile",title:"heft.compilesubstagehooks.afterrecompile",description:"Home &gt; @rushstack/heft &gt; CompileSubstageHooks &gt; afterRecompile",source:"@site/docs/pages/heft.compilesubstagehooks.afterrecompile.md",sourceDirName:"pages",slug:"/pages/heft.compilesubstagehooks.afterrecompile",permalink:"/pages/heft.compilesubstagehooks.afterrecompile",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},l={},s=[{value:"CompileSubstageHooks.afterRecompile property",id:"compilesubstagehooksafterrecompile-property",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/heft"},"@rushstack/heft")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/heft.compilesubstagehooks"},"CompileSubstageHooks")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/heft.compilesubstagehooks.afterrecompile"},"afterRecompile")),(0,n.kt)("h2",{id:"compilesubstagehooksafterrecompile-property"},"CompileSubstageHooks.afterRecompile property"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"afterRecompile")," event is only used in watch mode. It fires whenever the compiler's outputs have been rebuilt. The initial compilation fires the ",(0,n.kt)("inlineCode",{parentName:"p"},"afterCompile")," event only, and then all subsequent iterations fire the ",(0,n.kt)("inlineCode",{parentName:"p"},"afterRecompile")," event only. Heft does not wait for the ",(0,n.kt)("inlineCode",{parentName:"p"},"afterRecompile")," promises to resolve."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly afterRecompile: AsyncParallelHook;\n")))}u.isMDXComponent=!0}}]);