"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[99610],{50158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),u=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(m,".").concat(d)]||s[d]||c[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},63092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(20216),a=(r(46393),r(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,o={unversionedId:"pages/ts-command-line.commandlineintegerparameter.defaultvalue",id:"pages/ts-command-line.commandlineintegerparameter.defaultvalue",title:"ts-command-line.commandlineintegerparameter.defaultvalue",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineIntegerParameter &gt; defaultValue",source:"@site/docs/pages/ts-command-line.commandlineintegerparameter.defaultvalue.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineintegerparameter.defaultvalue",permalink:"/pages/ts-command-line.commandlineintegerparameter.defaultvalue",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},m={},u=[{value:"CommandLineIntegerParameter.defaultValue property",id:"commandlineintegerparameterdefaultvalue-property",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineintegerparameter"},"CommandLineIntegerParameter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineintegerparameter.defaultvalue"},"defaultValue")),(0,a.kt)("h2",{id:"commandlineintegerparameterdefaultvalue-property"},"CommandLineIntegerParameter.defaultValue property"),(0,a.kt)("p",null,"The default value which will be used if the parameter is omitted from the command line."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly defaultValue: number | undefined;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If a default value is specified, then ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.ibasecommandlinedefinition.required"},"IBaseCommandLineDefinition.required")," must not be true. Instead, a custom error message should be used to report cases where a default value was not available."))}c.isMDXComponent=!0}}]);