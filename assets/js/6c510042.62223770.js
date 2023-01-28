"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[92181],{50158:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>g});var a=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=n,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||p;return t?a.createElement(d,o(o({ref:r},i),{},{components:t})):a.createElement(d,o({ref:r},i))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,o=new Array(p);o[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<p;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23752:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=t(20216),n=t(46393),p=t(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/node-core-library.packagenameparser.getunscopedname",id:"pages/node-core-library.packagenameparser.getunscopedname",title:"node-core-library.packagenameparser.getunscopedname",description:"Home &gt; @rushstack/node-core-library &gt; PackageNameParser &gt; getUnscopedName",source:"@site/docs/pages/node-core-library.packagenameparser.getunscopedname.md",sourceDirName:"pages",slug:"/pages/node-core-library.packagenameparser.getunscopedname",permalink:"/pages/node-core-library.packagenameparser.getunscopedname",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},i=[{value:"PackageNameParser.getUnscopedName() method",id:"packagenameparsergetunscopedname-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:i};function u(e){let{components:r,...t}=e;return(0,p.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagenameparser"},"PackageNameParser")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagenameparser.getunscopedname"},"getUnscopedName")),(0,p.kt)("h2",{id:"packagenameparsergetunscopedname-method"},"PackageNameParser.getUnscopedName() method"),(0,p.kt)("p",null,"The parsed NPM package name without the scope."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getUnscopedName(packageName: string): string;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"packageName"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"string"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,'For example, if the parsed input was "',(0,p.kt)(n.Fragment,null),"@",(0,p.kt)(n.Fragment,null),'scope/example", then the name would be "example".'))}u.isMDXComponent=!0}}]);