"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[55855],{50158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=u(r),f=o,m=g["".concat(s,".").concat(f)]||g[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},51143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(20216),o=r(46393),i=r(50158);const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"pages/rush-lib.rushconfigurationproject.consumingprojects",id:"pages/rush-lib.rushconfigurationproject.consumingprojects",title:"rush-lib.rushconfigurationproject.consumingprojects",description:"Home &gt; @microsoft/rush-lib &gt; RushConfigurationProject &gt; consumingProjects",source:"@site/docs/pages/rush-lib.rushconfigurationproject.consumingprojects.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfigurationproject.consumingprojects",permalink:"/pages/rush-lib.rushconfigurationproject.consumingprojects",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},p=[{value:"RushConfigurationProject.consumingProjects property",id:"rushconfigurationprojectconsumingprojects-property",level:2},{value:"Remarks",id:"remarks",level:2}],l={toc:p};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfigurationproject.consumingprojects"},"consumingProjects")),(0,i.kt)("h2",{id:"rushconfigurationprojectconsumingprojects-property"},"RushConfigurationProject.consumingProjects property"),(0,i.kt)("p",null,"The set of projects within the Rush configuration which declare this project as a dependency. Excludes those that declare this project as a ",(0,i.kt)("inlineCode",{parentName:"p"},"cyclicDependencyProject"),(0,i.kt)(o.Fragment,null),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get consumingProjects(): ReadonlySet<RushConfigurationProject>;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This field is the counterpart to ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencyProjects"),(0,i.kt)(o.Fragment,null),", and can be used recursively to walk the project dependency graph to find all projects which will be impacted by changes to this project."))}g.isMDXComponent=!0}}]);