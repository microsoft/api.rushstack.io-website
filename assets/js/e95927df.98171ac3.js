"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[42632],{50158:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),k=s(n),g=a,d=k["".concat(i,".").concat(g)]||k[g]||u[g]||o;return n?r.createElement(d,p(p({ref:t},l),{},{components:n})):r.createElement(d,p({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},90210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(20216),a=n(46393),o=n(50158);const p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,i={unversionedId:"pages/node-core-library.packagejsonlookup.instance",id:"pages/node-core-library.packagejsonlookup.instance",title:"node-core-library.packagejsonlookup.instance",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; instance",source:"@site/docs/pages/node-core-library.packagejsonlookup.instance.md",sourceDirName:"pages",slug:"/pages/node-core-library.packagejsonlookup.instance",permalink:"/pages/node-core-library.packagejsonlookup.instance",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},l=[{value:"PackageJsonLookup.instance property",id:"packagejsonlookupinstance-property",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:l};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup.instance"},"instance")),(0,o.kt)("h2",{id:"packagejsonlookupinstance-property"},"PackageJsonLookup.instance property"),(0,o.kt)("p",null,"A singleton instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageJsonLookup"),(0,o.kt)(a.Fragment,null),", which is useful for short-lived processes that can reasonably assume that the file system will not be modified after the cache is populated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static get instance(): PackageJsonLookup;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"For long-running processes that need to clear the cache at appropriate times, it is recommended to create your own instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"PackageJsonLookup")," instead of relying on this instance."))}k.isMDXComponent=!0}}]);