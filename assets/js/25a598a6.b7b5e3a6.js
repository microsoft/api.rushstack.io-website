"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[40643],{45242:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return f}});var n=r(63929);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),p=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=p(r),f=a,b=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(b,l(l({ref:e},c),{},{components:r})):n.createElement(b,l({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,l[1]=u;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80017:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=r(50394),a=r(51614),o=(r(63929),r(45242)),l=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"pages/rush-lib.lookupbypath._constructor_",id:"pages/rush-lib.lookupbypath._constructor_",title:"rush-lib.lookupbypath._constructor_",description:"Home &gt; @microsoft/rush-lib &gt; LookupByPath &gt; (constructor)",source:"@site/docs/pages/rush-lib.lookupbypath._constructor_.md",sourceDirName:"pages",slug:"/pages/rush-lib.lookupbypath._constructor_",permalink:"/pages/rush-lib.lookupbypath._constructor_",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"LookupByPath.(constructor)",id:"lookupbypathconstructor",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:s};function f(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.lookupbypath"},"LookupByPath")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.lookupbypath._constructor_"},"(constructor)")),(0,o.kt)("h2",{id:"lookupbypathconstructor"},"LookupByPath.(constructor)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Constructs a new ",(0,o.kt)("inlineCode",{parentName:"p"},"LookupByPath")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(entries?: Iterable<[string, TItem]>, delimiter?: string);\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"entries"),(0,o.kt)("td",{parentName:"tr",align:null},"Iterable","<","[","string, TItem","]",">"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," Initial path-value pairs to populate the tree.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)"))))))}f.isMDXComponent=!0}}]);