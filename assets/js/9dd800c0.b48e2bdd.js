"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[27584],{45242:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var o=n(63929);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=o.createContext({}),l=function(e){var r=o.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},s=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=t,g=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?o.createElement(g,u(u({ref:r},s),{},{components:n})):o.createElement(g,u({ref:r},s))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,u=new Array(i);u[0]=p;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:t,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11104:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return f}});var o=n(95464),t=n(20134),i=(n(63929),n(45242)),u=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"pages/rush-lib.rushconfiguration.commonrushconfigfolder",id:"pages/rush-lib.rushconfiguration.commonrushconfigfolder",title:"rush-lib.rushconfiguration.commonrushconfigfolder",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; commonRushConfigFolder",source:"@site/docs/pages/rush-lib.rushconfiguration.commonrushconfigfolder.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfiguration.commonrushconfigfolder",permalink:"/pages/rush-lib.rushconfiguration.commonrushconfigfolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},f=[{value:"RushConfiguration.commonRushConfigFolder property",id:"rushconfigurationcommonrushconfigfolder-property",level:2}],p={toc:f};function m(e){var r=e.components,n=(0,t.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration.commonrushconfigfolder"},"commonRushConfigFolder")),(0,i.kt)("h2",{id:"rushconfigurationcommonrushconfigfolder-property"},"RushConfiguration.commonRushConfigFolder property"),(0,i.kt)("p",null,"The folder where Rush's additional config files are stored. This folder is always a subfolder called ",(0,i.kt)("inlineCode",{parentName:"p"},"config\\rush")," inside the common folder. (The ",(0,i.kt)("inlineCode",{parentName:"p"},"common\\config")," folder is reserved for configuration files used by other tools.) To avoid confusion or mistakes, Rush will report an error if this this folder contains any unrecognized files."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\config\\rush")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get commonRushConfigFolder(): string;\n")))}m.isMDXComponent=!0}}]);