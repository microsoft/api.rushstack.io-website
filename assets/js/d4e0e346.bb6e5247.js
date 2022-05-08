"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[55430],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(r),s=a,b=y["".concat(i,".").concat(s)]||y[s]||m[s]||u;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,o=new Array(u);o[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<u;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},52976:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(50394),a=r(51614),u=(r(63929),r(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"pages/node-core-library.enum.getkeybynumber",id:"pages/node-core-library.enum.getkeybynumber",title:"node-core-library.enum.getkeybynumber",description:"Home &gt; @rushstack/node-core-library &gt; Enum &gt; getKeyByNumber",source:"@site/docs/pages/node-core-library.enum.getkeybynumber.md",sourceDirName:"pages",slug:"/pages/node-core-library.enum.getkeybynumber",permalink:"/pages/node-core-library.enum.getkeybynumber",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},m=[{value:"Enum.getKeyByNumber() method",id:"enumgetkeybynumber-method",level:2},{value:"Parameters",id:"parameters",level:2}],y={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,u.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,u.kt)("a",{parentName:"p",href:"/pages/node-core-library.enum"},"Enum")," ",">"," ",(0,u.kt)("a",{parentName:"p",href:"/pages/node-core-library.enum.getkeybynumber"},"getKeyByNumber")),(0,u.kt)("h2",{id:"enumgetkeybynumber-method"},"Enum.getKeyByNumber() method"),(0,u.kt)("p",null,"This API is similar to ",(0,u.kt)("a",{parentName:"p",href:"/pages/node-core-library.enum.trygetkeybynumber"},"Enum.tryGetKeyByNumber()")," , except that it throws an exception if the key is undefined."),(0,u.kt)("b",null,"Signature:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"static getKeyByNumber<TEnumValue, TEnumObject extends {\n        [key: string]: TEnumValue;\n    }>(enumObject: TEnumObject, value: number): keyof typeof enumObject;\n")),(0,u.kt)("h2",{id:"parameters"},"Parameters"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"enumObject"),(0,u.kt)("td",{parentName:"tr",align:null},"TEnumObject"),(0,u.kt)("td",{parentName:"tr",align:null})),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"value"),(0,u.kt)("td",{parentName:"tr",align:null},"number"),(0,u.kt)("td",{parentName:"tr",align:null})))),(0,u.kt)("b",null,"Returns:"),(0,u.kt)("p",null,"keyof typeof enumObject"))}s.isMDXComponent=!0}}]);