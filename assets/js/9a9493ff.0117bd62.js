"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[22607],{50158:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>d});var t=n(46393);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?t.createElement(d,a(a({ref:r},c),{},{components:n})):t.createElement(d,a({ref:r},c))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54012:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(29122),i=n(46393),o=n(50158);const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"pages/rush-lib.commonversionsconfiguration.implicitlypreferredversions",id:"pages/rush-lib.commonversionsconfiguration.implicitlypreferredversions",title:"rush-lib.commonversionsconfiguration.implicitlypreferredversions",description:"Home &gt; @microsoft/rush-lib &gt; CommonVersionsConfiguration &gt; implicitlyPreferredVersions",source:"@site/docs/pages/rush-lib.commonversionsconfiguration.implicitlypreferredversions.md",sourceDirName:"pages",slug:"/pages/rush-lib.commonversionsconfiguration.implicitlypreferredversions",permalink:"/pages/rush-lib.commonversionsconfiguration.implicitlypreferredversions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},c=[{value:"CommonVersionsConfiguration.implicitlyPreferredVersions property",id:"commonversionsconfigurationimplicitlypreferredversions-property",level:2}],u={toc:c},m="wrapper";function f(e){let{components:r,...n}=e;return(0,o.kt)(m,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.commonversionsconfiguration"},"CommonVersionsConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.commonversionsconfiguration.implicitlypreferredversions"},"implicitlyPreferredVersions")),(0,o.kt)("h2",{id:"commonversionsconfigurationimplicitlypreferredversions-property"},"CommonVersionsConfiguration.implicitlyPreferredVersions property"),(0,o.kt)("p",null,"When set to true, for all projects in the repo, all dependencies will be automatically added as preferredVersions, except in cases where different projects specify different version ranges for a given dependency. For older package managers, this tended to reduce duplication of indirect dependencies. However, it can sometimes cause trouble for indirect dependencies with incompatible peerDependencies ranges."),(0,o.kt)("p",null,"If the value is ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),(0,o.kt)(i.Fragment,null),", then the default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),(0,o.kt)(i.Fragment,null),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly implicitlyPreferredVersions: boolean | undefined;\n")))}f.isMDXComponent=!0}}]);