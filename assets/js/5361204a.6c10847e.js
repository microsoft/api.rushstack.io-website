"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[7121],{50158:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>s});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},y=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),c=p(n),s=a,d=c["".concat(i,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(d,u(u({ref:t},y),{},{components:n})):r.createElement(d,u({ref:t},y))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var p=2;p<l;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(20216),a=(n(46393),n(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,o={unversionedId:"pages/node-core-library.enum.trygetvaluebykey",id:"pages/node-core-library.enum.trygetvaluebykey",title:"node-core-library.enum.trygetvaluebykey",description:"Home &gt; @rushstack/node-core-library &gt; Enum &gt; tryGetValueByKey",source:"@site/docs/pages/node-core-library.enum.trygetvaluebykey.md",sourceDirName:"pages",slug:"/pages/node-core-library.enum.trygetvaluebykey",permalink:"/pages/node-core-library.enum.trygetvaluebykey",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},p=[{value:"Enum.tryGetValueByKey() method",id:"enumtrygetvaluebykey-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],y={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/node-core-library.enum"},"Enum")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/node-core-library.enum.trygetvaluebykey"},"tryGetValueByKey")),(0,a.kt)("h2",{id:"enumtrygetvaluebykey-method"},"Enum.tryGetValueByKey() method"),(0,a.kt)("p",null,"Returns an enum value, given its key. Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if no matching key is found."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static tryGetValueByKey<TEnumValue>(enumObject: {\n        [key: string]: TEnumValue | string;\n        [key: number]: TEnumValue | string;\n    }, key: string): TEnumValue | undefined;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enumObject"),(0,a.kt)("td",{parentName:"tr",align:null},"{ ","[","key: string","]",": TEnumValue ","|"," string; ","[","key: number","]",": TEnumValue ","|"," string; }"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"TEnumValue ","|"," undefined"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Example usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'enum Colors {\n  Red = 1\n}\n\n// Prints "1"\nconsole.log(Enum.tryGetValueByKey(Colors, "Red"));\n\n// Prints "undefined"\nconsole.log(Enum.tryGetValueByKey(Colors, "Black"));\n')))}m.isMDXComponent=!0}}]);