"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[97510],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var a=r(63929);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},m=Object.keys(e);for(a=0;a<m.length;a++)r=m[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)r=m[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,m=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),s=n,g=d["".concat(i,".").concat(s)]||d[s]||u[s]||m;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var m=r.length,o=new Array(m);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<m;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72902:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(50394),n=r(51614),m=(r(63929),r(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"pages/ts-command-line.commandlineparameterprovider.getflagparameter",id:"pages/ts-command-line.commandlineparameterprovider.getflagparameter",title:"ts-command-line.commandlineparameterprovider.getflagparameter",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider &gt; getFlagParameter",source:"@site/docs/pages/ts-command-line.commandlineparameterprovider.getflagparameter.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineparameterprovider.getflagparameter",permalink:"/pages/ts-command-line.commandlineparameterprovider.getflagparameter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},u=[{value:"CommandLineParameterProvider.getFlagParameter() method",id:"commandlineparameterprovidergetflagparameter-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:u};function s(e){var t=e.components,r=(0,n.Z)(e,o);return(0,m.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,m.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,m.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," ",">"," ",(0,m.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameterprovider.getflagparameter"},"getFlagParameter")),(0,m.kt)("h2",{id:"commandlineparameterprovidergetflagparameter-method"},"CommandLineParameterProvider.getFlagParameter() method"),(0,m.kt)("p",null,"Returns the CommandLineFlagParameter with the specified long name."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Signature:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-typescript"},"getFlagParameter(parameterLongName: string, parameterScope?: string): CommandLineFlagParameter;\n")),(0,m.kt)("h2",{id:"parameters"},"Parameters"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,m.kt)("th",{parentName:"tr",align:null},"Type"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"parameterLongName"),(0,m.kt)("td",{parentName:"tr",align:null},"string"),(0,m.kt)("td",{parentName:"tr",align:null})),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"parameterScope"),(0,m.kt)("td",{parentName:"tr",align:null},"string"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("i",null,"(Optional)"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineflagparameter"},"CommandLineFlagParameter")),(0,m.kt)("h2",{id:"remarks"},"Remarks"),(0,m.kt)("p",null,"This method throws an exception if the parameter is not defined."))}s.isMDXComponent=!0}}]);