"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[72427],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61529:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=r(95464),a=r(20134),i=(r(63929),r(45242)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,s={unversionedId:"pages/node-core-library.stringbuilder",id:"pages/node-core-library.stringbuilder",title:"node-core-library.stringbuilder",description:"Home &gt; @rushstack/node-core-library &gt; StringBuilder",source:"@site/docs/pages/node-core-library.stringbuilder.md",sourceDirName:"pages",slug:"/pages/node-core-library.stringbuilder",permalink:"/pages/node-core-library.stringbuilder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},p=[{value:"StringBuilder class",id:"stringbuilder-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],d={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library.stringbuilder"},"StringBuilder")),(0,i.kt)("h2",{id:"stringbuilder-class"},"StringBuilder class"),(0,i.kt)("p",null,"This class allows a large text string to be constructed incrementally by appending small chunks. The final string can be obtained by calling StringBuilder.toString()."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class StringBuilder implements IStringBuilder\n")),(0,i.kt)("b",null,"Implements:")," [IStringBuilder](/pages/node-core-library.istringbuilder)",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"A naive approach might use the ",(0,i.kt)("inlineCode",{parentName:"p"},"+=")," operator to append strings: This would have the downside of copying the entire string each time a chunk is appended, resulting in ",(0,i.kt)("inlineCode",{parentName:"p"},"O(n^2)")," bytes of memory being allocated (and later freed by the garbage collector), and many of the allocations could be very large objects. StringBuilder avoids this overhead by accumulating the chunks in an array, and efficiently joining them when ",(0,i.kt)("inlineCode",{parentName:"p"},"getText()")," is finally called."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/node-core-library.stringbuilder._constructor_"},"(constructor)()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,i.kt)("code",null,"StringBuilder")," class")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/node-core-library.stringbuilder.append"},"append(text)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Append the specified text to the buffer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/node-core-library.stringbuilder.tostring"},"toString()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns a single string containing all the text that was appended to the buffer so far.")))))}g.isMDXComponent=!0}}]);