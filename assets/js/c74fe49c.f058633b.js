"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[80711],{50158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?a.createElement(d,p(p({ref:t},c),{},{components:r})):a.createElement(d,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(20216),n=(r(46393),r(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,o={unversionedId:"pages/api-extractor-model.apireturntypemixin.isbaseclassof",id:"pages/api-extractor-model.apireturntypemixin.isbaseclassof",title:"api-extractor-model.apireturntypemixin.isbaseclassof",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiReturnTypeMixin &gt; isBaseClassOf",source:"@site/docs/pages/api-extractor-model.apireturntypemixin.isbaseclassof.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.apireturntypemixin.isbaseclassof",permalink:"/pages/api-extractor-model.apireturntypemixin.isbaseclassof",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},l=[{value:"ApiReturnTypeMixin.isBaseClassOf() function",id:"apireturntypemixinisbaseclassof-function",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apireturntypemixin"},"ApiReturnTypeMixin")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apireturntypemixin.isbaseclassof"},"isBaseClassOf")),(0,n.kt)("h2",{id:"apireturntypemixinisbaseclassof-function"},"ApiReturnTypeMixin.isBaseClassOf() function"),(0,n.kt)("p",null,"A type guard that tests whether the specified ",(0,n.kt)("inlineCode",{parentName:"p"},"ApiItem")," subclass extends the ",(0,n.kt)("inlineCode",{parentName:"p"},"ApiReturnTypeMixin")," mixin."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function isBaseClassOf(apiItem: ApiItem): apiItem is ApiReturnTypeMixin;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"apiItem"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiitem"},"ApiItem")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"apiItem is ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apireturntypemixin"},"ApiReturnTypeMixin")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"The JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"instanceof")," operator cannot be used to test for mixin inheritance, because each invocation of the mixin function produces a different subclass. (This could be mitigated by ",(0,n.kt)("inlineCode",{parentName:"p"},"Symbol.hasInstance")," , however the TypeScript type system cannot invoke a runtime test.)"))}u.isMDXComponent=!0}}]);