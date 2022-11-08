"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[59405],{50158:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,f=s["".concat(o,".").concat(u)]||s[u]||c[u]||i;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:n,l[1]=m;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},35866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=r(20216),n=(r(46393),r(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,m={unversionedId:"pages/ts-command-line.commandlineparameterprovider.defineflagparameter",id:"pages/ts-command-line.commandlineparameterprovider.defineflagparameter",title:"ts-command-line.commandlineparameterprovider.defineflagparameter",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider &gt; defineFlagParameter",source:"@site/docs/pages/ts-command-line.commandlineparameterprovider.defineflagparameter.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineparameterprovider.defineflagparameter",permalink:"/pages/ts-command-line.commandlineparameterprovider.defineflagparameter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},o={},p=[{value:"CommandLineParameterProvider.defineFlagParameter() method",id:"commandlineparameterproviderdefineflagparameter-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameterprovider.defineflagparameter"},"defineFlagParameter")),(0,n.kt)("h2",{id:"commandlineparameterproviderdefineflagparameter-method"},"CommandLineParameterProvider.defineFlagParameter() method"),(0,n.kt)("p",null,"Defines a command-line switch whose boolean value is true if the switch is provided, and false otherwise."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"defineFlagParameter(definition: ICommandLineFlagDefinition): CommandLineFlagParameter;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"definition"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlineflagdefinition"},"ICommandLineFlagDefinition")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineflagparameter"},"CommandLineFlagParameter")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Example usage of a flag parameter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"example-tool --debug\n")))}c.isMDXComponent=!0}}]);