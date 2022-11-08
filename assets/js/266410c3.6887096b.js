"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[58309],{50158:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(46393);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?t.createElement(f,i(i({ref:r},p),{},{components:n})):t.createElement(f,i({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32822:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(20216),o=(n(46393),n(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,l={unversionedId:"pages/rush-lib.commonversionsconfiguration.allowedalternativeversions",id:"pages/rush-lib.commonversionsconfiguration.allowedalternativeversions",title:"rush-lib.commonversionsconfiguration.allowedalternativeversions",description:"Home &gt; @microsoft/rush-lib &gt; CommonVersionsConfiguration &gt; allowedAlternativeVersions",source:"@site/docs/pages/rush-lib.commonversionsconfiguration.allowedalternativeversions.md",sourceDirName:"pages",slug:"/pages/rush-lib.commonversionsconfiguration.allowedalternativeversions",permalink:"/pages/rush-lib.commonversionsconfiguration.allowedalternativeversions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},c=[{value:"CommonVersionsConfiguration.allowedAlternativeVersions property",id:"commonversionsconfigurationallowedalternativeversions-property",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.commonversionsconfiguration"},"CommonVersionsConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.commonversionsconfiguration.allowedalternativeversions"},"allowedAlternativeVersions")),(0,o.kt)("h2",{id:"commonversionsconfigurationallowedalternativeversions-property"},"CommonVersionsConfiguration.allowedAlternativeVersions property"),(0,o.kt)("p",null,'A table that stores, for a given dependency, a list of SemVer ranges that will be accepted by "rush check" in addition to the normal version range.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get allowedAlternativeVersions(): Map<string, ReadonlyArray<string>>;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,'The "rush check" command can be used to enforce that every project in the repo must specify the same SemVer range for a given dependency. However, sometimes exceptions are needed. The allowedAlternativeVersions table allows you to list other SemVer ranges that will be accepted by "rush check" for a given dependency. Note that the normal version range (as inferred by looking at all projects in the repo) should NOT be included in this list.'))}u.isMDXComponent=!0}}]);