"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[11879],{45242:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(n),y=a,d=s["".concat(i,".").concat(y)]||s[y]||c[y]||l;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var m=2;m<l;m++)u[m]=n[m];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},31961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var r=n(95464),a=n(20134),l=(n(63929),n(45242)),u=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,m={unversionedId:"pages/node-core-library.enum.trygetkeybynumber",id:"pages/node-core-library.enum.trygetkeybynumber",title:"node-core-library.enum.trygetkeybynumber",description:"Home &gt; @rushstack/node-core-library &gt; Enum &gt; tryGetKeyByNumber",source:"@site/docs/pages/node-core-library.enum.trygetkeybynumber.md",sourceDirName:"pages",slug:"/pages/node-core-library.enum.trygetkeybynumber",permalink:"/pages/node-core-library.enum.trygetkeybynumber",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},c=[{value:"Enum.tryGetKeyByNumber() method",id:"enumtrygetkeybynumber-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],s={toc:c};function y(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.enum"},"Enum")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.enum.trygetkeybynumber"},"tryGetKeyByNumber")),(0,l.kt)("h2",{id:"enumtrygetkeybynumber-method"},"Enum.tryGetKeyByNumber() method"),(0,l.kt)("p",null,"Returns an enum string key, given its numeric value. Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," if no matching value is found."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static tryGetKeyByNumber<TEnumValue, TEnumObject extends {\n        [key: string]: TEnumValue;\n    }>(enumObject: TEnumObject, value: number): keyof typeof enumObject | undefined;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enumObject"),(0,l.kt)("td",{parentName:"tr",align:null},"TEnumObject"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,"keyof typeof enumObject ","|"," undefined"),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The TypeScript compiler only creates a reverse mapping for enum members whose value is numeric. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"enum E {\n  A = 1,\n  B = 'c'\n}\n\n// Prints \"A\"\nconsole.log(E[1]);\n\n// Prints \"undefined\"\nconsole.log(E['c']);\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'enum Colors {\n  Red = 1,\n  Blue = \'blue\'\n}\n\n// Prints "Red"\nconsole.log(Enum.tryGetKeyByNumber(Colors, 1));\n\n// Prints "undefined"\nconsole.log(Enum.tryGetKeyByNumber(Colors, -1));\n')))}y.isMDXComponent=!0}}]);