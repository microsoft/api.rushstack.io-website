"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[6291],{50158:(e,a,r)=>{r.d(a,{Zo:()=>s,kt:()=>d});var t=r(46393);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function p(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?p(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),i=function(e){var a=t.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},s=function(e){var a=i(e.components);return t.createElement(c.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(r),g=n,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||p;return r?t.createElement(d,o(o({ref:a},s),{},{components:r})):t.createElement(d,o({ref:a},s))}));function d(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=g;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<p;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},21267:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=r(29122),n=r(46393),p=r(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/node-core-library.packagename.parse",id:"pages/node-core-library.packagename.parse",title:"node-core-library.packagename.parse",description:"Home &gt; @rushstack/node-core-library &gt; PackageName &gt; parse",source:"@site/docs/pages/node-core-library.packagename.parse.md",sourceDirName:"pages",slug:"/pages/node-core-library.packagename.parse",permalink:"/pages/node-core-library.packagename.parse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},i={},s=[{value:"PackageName.parse() method",id:"packagenameparse-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:s},u="wrapper";function g(e){let{components:a,...r}=e;return(0,p.kt)(u,(0,t.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagename"},"PackageName")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagename.parse"},"parse")),(0,p.kt)("h2",{id:"packagenameparse-method"},"PackageName.parse() method"),(0,p.kt)("p",null,"Same as ",(0,p.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagename.tryparse"},"PackageName.tryParse()"),(0,p.kt)(n.Fragment,null),", except this throws an exception if the input cannot be parsed."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"static parse(packageName: string): IParsedPackageName;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"packageName"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/node-core-library.iparsedpackagename"},"IParsedPackageName")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"The packageName must not be an empty string."))}g.isMDXComponent=!0}}]);