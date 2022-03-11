"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[73117],{45242:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(63929);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,h=f["".concat(p,".").concat(d)]||f[d]||s[d]||c;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32249:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(95464),o=r(20134),c=(r(63929),r(45242)),a=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"pages/rush-lib.rushconfigurationproject.localdependencyprojects",id:"pages/rush-lib.rushconfigurationproject.localdependencyprojects",title:"rush-lib.rushconfigurationproject.localdependencyprojects",description:"Home &gt; @microsoft/rush-lib &gt; RushConfigurationProject &gt; localDependencyProjects",source:"@site/docs/pages/rush-lib.rushconfigurationproject.localdependencyprojects.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfigurationproject.localdependencyprojects",permalink:"/pages/rush-lib.rushconfigurationproject.localdependencyprojects",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},l={},s=[{value:"RushConfigurationProject.localDependencyProjects property",id:"rushconfigurationprojectlocaldependencyprojects-property",level:2}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfigurationproject.localdependencyprojects"},"localDependencyProjects")),(0,c.kt)("h2",{id:"rushconfigurationprojectlocaldependencyprojects-property"},"RushConfigurationProject.localDependencyProjects property"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,c.kt)("p",{parentName:"blockquote"},"Use ",(0,c.kt)("inlineCode",{parentName:"p"},"dependencyProjects")," instead, as it has Set semantics, which better reflect the nature of the data.")),(0,c.kt)("p",null,"An array of projects within the Rush configuration which this project declares as dependencies."),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"get localDependencyProjects(): ReadonlyArray<RushConfigurationProject>;\n")))}d.isMDXComponent=!0}}]);