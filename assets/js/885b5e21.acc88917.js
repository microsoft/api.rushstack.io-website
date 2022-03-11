"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[56057],{45242:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(63929);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=m(t),d=a,f=s["".concat(l,".").concat(d)]||s[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},70079:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var r=t(95464),a=t(20134),o=(t(63929),t(45242)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,m={unversionedId:"pages/ts-command-line.commandlinechoiceparameter.value",id:"pages/ts-command-line.commandlinechoiceparameter.value",title:"ts-command-line.commandlinechoiceparameter.value",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineChoiceParameter &gt; value",source:"@site/docs/pages/ts-command-line.commandlinechoiceparameter.value.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlinechoiceparameter.value",permalink:"/pages/ts-command-line.commandlinechoiceparameter.value",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},p=[{value:"CommandLineChoiceParameter.value property",id:"commandlinechoiceparametervalue-property",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlinechoiceparameter"},"CommandLineChoiceParameter")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlinechoiceparameter.value"},"value")),(0,o.kt)("h2",{id:"commandlinechoiceparametervalue-property"},"CommandLineChoiceParameter.value property"),(0,o.kt)("p",null,"Returns the argument value for a choice parameter that was parsed from the command line."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get value(): string | undefined;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The return value will be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if the command-line has not been parsed yet, or if the parameter was omitted and has no default value."))}d.isMDXComponent=!0}}]);