"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[1221],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(63929);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,g=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94798:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=r(50394),o=r(51614),a=(r(63929),r(45242)),i=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,s={unversionedId:"pages/heft.compilesubstagehooks.aftercompile",id:"pages/heft.compilesubstagehooks.aftercompile",title:"heft.compilesubstagehooks.aftercompile",description:"Home &gt; @rushstack/heft &gt; CompileSubstageHooks &gt; afterCompile",source:"@site/docs/pages/heft.compilesubstagehooks.aftercompile.md",sourceDirName:"pages",slug:"/pages/heft.compilesubstagehooks.aftercompile",permalink:"/pages/heft.compilesubstagehooks.aftercompile",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},u=[{value:"CompileSubstageHooks.afterCompile property",id:"compilesubstagehooksaftercompile-property",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/heft"},"@rushstack/heft")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/heft.compilesubstagehooks"},"CompileSubstageHooks")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/heft.compilesubstagehooks.aftercompile"},"afterCompile")),(0,a.kt)("h2",{id:"compilesubstagehooksaftercompile-property"},"CompileSubstageHooks.afterCompile property"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"afterCompile"),' event is fired exactly once, after the "compile" stage completes its first operation. The "bundle" stage will not begin until all event handlers have resolved their promises. The behavior of this event is the same in watch mode and non-watch mode.'),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly afterCompile: AsyncParallelHook;\n")))}m.isMDXComponent=!0}}]);