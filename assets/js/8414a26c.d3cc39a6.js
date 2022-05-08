"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[30547],{45242:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(63929);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=t.createContext({}),c=function(e){var n=t.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(m,".").concat(d)]||p[d]||s[d]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},35963:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var t=r(50394),a=r(51614),o=(r(63929),r(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},m=void 0,c={unversionedId:"pages/ts-command-line.commandlineremainder.values",id:"pages/ts-command-line.commandlineremainder.values",title:"ts-command-line.commandlineremainder.values",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineRemainder &gt; values",source:"@site/docs/pages/ts-command-line.commandlineremainder.values.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineremainder.values",permalink:"/pages/ts-command-line.commandlineremainder.values",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},s=[{value:"CommandLineRemainder.values property",id:"commandlineremaindervalues-property",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:s};function d(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineremainder"},"CommandLineRemainder")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineremainder.values"},"values")),(0,o.kt)("h2",{id:"commandlineremaindervalues-property"},"CommandLineRemainder.values property"),(0,o.kt)("p",null,"Returns any remaining command line arguments after the recognized portion that was parsed from the command line."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get values(): ReadonlyArray<string>;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The array will be empty if the command-line has not been parsed yet."))}d.isMDXComponent=!0}}]);