"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[87951],{45242:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,g=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},52914:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(95464),a=r(20134),o=(r(63929),r(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,u={unversionedId:"pages/ts-command-line.commandlineparser.executewithouterrorhandling",id:"pages/ts-command-line.commandlineparser.executewithouterrorhandling",title:"ts-command-line.commandlineparser.executewithouterrorhandling",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParser &gt; executeWithoutErrorHandling",source:"@site/docs/pages/ts-command-line.commandlineparser.executewithouterrorhandling.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineparser.executewithouterrorhandling",permalink:"/pages/ts-command-line.commandlineparser.executewithouterrorhandling",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},m={},p=[{value:"CommandLineParser.executeWithoutErrorHandling() method",id:"commandlineparserexecutewithouterrorhandling-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparser"},"CommandLineParser")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparser.executewithouterrorhandling"},"executeWithoutErrorHandling")),(0,o.kt)("h2",{id:"commandlineparserexecutewithouterrorhandling-method"},"CommandLineParser.executeWithoutErrorHandling() method"),(0,o.kt)("p",null,"This is similar to ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparser.execute"},"CommandLineParser.execute()")," , except that execution errors simply cause the promise to reject. It is the caller's responsibility to trap"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"executeWithoutErrorHandling(args?: string[]): Promise<void>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"args"),(0,o.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","void",">"))}d.isMDXComponent=!0}}]);