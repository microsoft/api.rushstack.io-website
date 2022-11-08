"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[23721],{50158:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(46393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,g=m["".concat(s,".").concat(f)]||m[f]||c[f]||p;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,i=new Array(p);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var r=n(20216),o=(n(46393),n(50158));const p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,a={unversionedId:"pages/rush-lib.pnpmoptionsconfiguration.pnpmstore",id:"pages/rush-lib.pnpmoptionsconfiguration.pnpmstore",title:"rush-lib.pnpmoptionsconfiguration.pnpmstore",description:"Home &gt; @microsoft/rush-lib &gt; PnpmOptionsConfiguration &gt; pnpmStore",source:"@site/docs/pages/rush-lib.pnpmoptionsconfiguration.pnpmstore.md",sourceDirName:"pages",slug:"/pages/rush-lib.pnpmoptionsconfiguration.pnpmstore",permalink:"/pages/rush-lib.pnpmoptionsconfiguration.pnpmstore",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},l=[{value:"PnpmOptionsConfiguration.pnpmStore property",id:"pnpmoptionsconfigurationpnpmstore-property",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.pnpmoptionsconfiguration"},"PnpmOptionsConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.pnpmoptionsconfiguration.pnpmstore"},"pnpmStore")),(0,o.kt)("h2",{id:"pnpmoptionsconfigurationpnpmstore-property"},"PnpmOptionsConfiguration.pnpmStore property"),(0,o.kt)("p",null,"The method used to resolve the store used by PNPM."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly pnpmStore: PnpmStoreOptions;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Available options: - local: Use the standard Rush store path: common/temp/pnpm-store - global: Use PNPM's global store path"))}c.isMDXComponent=!0}}]);