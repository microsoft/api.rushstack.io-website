"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[43644],{50158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,f=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[s]="string"==typeof e?e:n,o[1]=m;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=r(29122),n=(r(46393),r(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,m={unversionedId:"pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter",id:"pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter",title:"ts-command-line.commandlineparameterprovider.definechoicelistparameter",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider &gt; defineChoiceListParameter",source:"@site/docs/pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter",permalink:"/pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},l={},p=[{value:"CommandLineParameterProvider.defineChoiceListParameter() method",id:"commandlineparameterproviderdefinechoicelistparameter-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter"},"defineChoiceListParameter")),(0,n.kt)("h2",{id:"commandlineparameterproviderdefinechoicelistparameter-method"},"CommandLineParameterProvider.defineChoiceListParameter() method"),(0,n.kt)("p",null,"Defines a command-line parameter whose value must be a string from a fixed set of allowable choices (similar to an enum). The parameter can be specified multiple times to build a list."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"defineChoiceListParameter(definition: ICommandLineChoiceListDefinition): CommandLineChoiceListParameter;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"definition"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlinechoicelistdefinition"},"ICommandLineChoiceListDefinition")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlinechoicelistparameter"},"CommandLineChoiceListParameter")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Example of a choice list parameter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"example-tool --allow-color red --allow-color green\n")))}d.isMDXComponent=!0}}]);