"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[98679],{50158:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>h});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(t),g=o,h=c["".concat(p,".").concat(g)]||c[g]||f[g]||a;return t?n.createElement(h,i(i({ref:r},l),{},{components:t})):n.createElement(h,i({ref:r},l))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19535:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(29122),o=(t(46393),t(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,s={unversionedId:"pages/rush-lib.rushconfiguration.yarnoptions",id:"pages/rush-lib.rushconfiguration.yarnoptions",title:"rush-lib.rushconfiguration.yarnoptions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; yarnOptions",source:"@site/docs/pages/rush-lib.rushconfiguration.yarnoptions.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfiguration.yarnoptions",permalink:"/pages/rush-lib.rushconfiguration.yarnoptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},u=[{value:"RushConfiguration.yarnOptions property",id:"rushconfigurationyarnoptions-property",level:2},{value:"Remarks",id:"remarks",level:2}],l={toc:u},c="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration.yarnoptions"},"yarnOptions")),(0,o.kt)("h2",{id:"rushconfigurationyarnoptions-property"},"RushConfiguration.yarnOptions property"),(0,o.kt)("p",null,"Options that are only used when the yarn package manager is selected."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly yarnOptions: YarnOptionsConfiguration;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"It is valid to define these options in rush.json even if the yarn package manager is not being used."),(0,o.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"YarnOptionsConfiguration")," class."))}f.isMDXComponent=!0}}]);