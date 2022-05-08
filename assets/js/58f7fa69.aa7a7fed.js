"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[37064],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90008:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(50394),a=r(51614),o=(r(63929),r(45242)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"pages/node-core-library.sort.comparebyvalue",id:"pages/node-core-library.sort.comparebyvalue",title:"node-core-library.sort.comparebyvalue",description:"Home &gt; @rushstack/node-core-library &gt; Sort &gt; compareByValue",source:"@site/docs/pages/node-core-library.sort.comparebyvalue.md",sourceDirName:"pages",slug:"/pages/node-core-library.sort.comparebyvalue",permalink:"/pages/node-core-library.sort.comparebyvalue",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"Sort.compareByValue() method",id:"sortcomparebyvalue-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.sort"},"Sort")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.sort.comparebyvalue"},"compareByValue")),(0,o.kt)("h2",{id:"sortcomparebyvalue-method"},"Sort.compareByValue() method"),(0,o.kt)("p",null,"Compares ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," using the JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},">")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<")," operators. This function is suitable for usage as the callback for ",(0,o.kt)("inlineCode",{parentName:"p"},"array.sort()")," ."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static compareByValue(x: any, y: any): number;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x"),(0,o.kt)("td",{parentName:"tr",align:null},"any"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"y"),(0,o.kt)("td",{parentName:"tr",align:null},"any"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"number"),(0,o.kt)("p",null,"-1 if ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is smaller than ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," , 1 if ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," , or 0 if the values are equal."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The JavaScript ordering is generalized so that ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," ","<"," ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","<"," all other values."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let array: number[] = [3, 6, 2];\narray.sort(Sort.compareByValue); // [2, 3, 6]\n")))}d.isMDXComponent=!0}}]);