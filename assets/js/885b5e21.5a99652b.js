"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[56057],{50158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(29122),a=(n(46393),n(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,l={unversionedId:"pages/ts-command-line.commandlinechoiceparameter.value",id:"pages/ts-command-line.commandlinechoiceparameter.value",title:"ts-command-line.commandlinechoiceparameter.value",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineChoiceParameter &gt; value",source:"@site/docs/pages/ts-command-line.commandlinechoiceparameter.value.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlinechoiceparameter.value",permalink:"/pages/ts-command-line.commandlinechoiceparameter.value",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},m=[{value:"CommandLineChoiceParameter.value property",id:"commandlinechoiceparametervalue-property",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:m},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlinechoiceparameter"},"CommandLineChoiceParameter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlinechoiceparameter.value"},"value")),(0,a.kt)("h2",{id:"commandlinechoiceparametervalue-property"},"CommandLineChoiceParameter.value property"),(0,a.kt)("p",null,"Returns the argument value for a choice parameter that was parsed from the command line."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"get value(): string | undefined;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The return value will be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if the command-line has not been parsed yet, or if the parameter was omitted and has no default value."))}s.isMDXComponent=!0}}]);