"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[32074],{50158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(46393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,m=u["".concat(i,".").concat(g)]||u[g]||f[g]||a;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,p[1]=l;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(29122),o=(n(46393),n(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/heft.globfn",id:"pages/heft.globfn",title:"heft.globfn",description:"Home &gt; @rushstack/heft &gt; GlobFn",source:"@site/docs/pages/heft.globfn.md",sourceDirName:"pages",slug:"/pages/heft.globfn",permalink:"/pages/heft.globfn",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},s=[{value:"GlobFn type",id:"globfn-type",level:2}],c={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/heft"},"@rushstack/heft")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/heft.globfn"},"GlobFn")),(0,o.kt)("h2",{id:"globfn-type"},"GlobFn type"),(0,o.kt)("p",null,"Glob a set of files and return a list of paths that match the provided patterns."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type GlobFn = (pattern: string | string[], options?: IGlobOptions | undefined) => Promise<string[]>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"References:")," ",(0,o.kt)("a",{parentName:"p",href:"/pages/heft.igloboptions"},"IGlobOptions")))}f.isMDXComponent=!0}}]);