"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[26960],{50158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3644:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(20216),a=(r(46393),r(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,o={unversionedId:"pages/ts-command-line.commandlinestringlistparameter.values",id:"pages/ts-command-line.commandlinestringlistparameter.values",title:"ts-command-line.commandlinestringlistparameter.values",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineStringListParameter &gt; values",source:"@site/docs/pages/ts-command-line.commandlinestringlistparameter.values.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlinestringlistparameter.values",permalink:"/pages/ts-command-line.commandlinestringlistparameter.values",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},m=[{value:"CommandLineStringListParameter.values property",id:"commandlinestringlistparametervalues-property",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlinestringlistparameter"},"CommandLineStringListParameter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlinestringlistparameter.values"},"values")),(0,a.kt)("h2",{id:"commandlinestringlistparametervalues-property"},"CommandLineStringListParameter.values property"),(0,a.kt)("p",null,"Returns the string arguments for a string list parameter that was parsed from the command line."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"get values(): ReadonlyArray<string>;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The array will be empty if the command-line has not been parsed yet, or if the parameter was omitted and has no default value."))}c.isMDXComponent=!0}}]);