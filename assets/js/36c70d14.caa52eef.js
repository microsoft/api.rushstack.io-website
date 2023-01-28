"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[30273],{50158:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(46393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=o(a),f=n,d=u["".concat(l,".").concat(f)]||u[f]||c[f]||i;return a?r.createElement(d,p(p({ref:t},m),{},{components:a})):r.createElement(d,p({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var o=2;o<i;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38371:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var r=a(20216),n=a(46393),i=a(50158);const p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"pages/api-extractor-model.apiparameterlistmixin.isbaseclassof",id:"pages/api-extractor-model.apiparameterlistmixin.isbaseclassof",title:"api-extractor-model.apiparameterlistmixin.isbaseclassof",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiParameterListMixin &gt; isBaseClassOf",source:"@site/docs/pages/api-extractor-model.apiparameterlistmixin.isbaseclassof.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.apiparameterlistmixin.isbaseclassof",permalink:"/pages/api-extractor-model.apiparameterlistmixin.isbaseclassof",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},o={},m=[{value:"ApiParameterListMixin.isBaseClassOf() function",id:"apiparameterlistmixinisbaseclassof-function",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:m};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apiparameterlistmixin"},"ApiParameterListMixin")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apiparameterlistmixin.isbaseclassof"},"isBaseClassOf")),(0,i.kt)("h2",{id:"apiparameterlistmixinisbaseclassof-function"},"ApiParameterListMixin.isBaseClassOf() function"),(0,i.kt)("p",null,"A type guard that tests whether the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiItem")," subclass extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiParameterListMixin")," mixin."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function isBaseClassOf(apiItem: ApiItem): apiItem is ApiParameterListMixin;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"apiItem"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiitem"},"ApiItem")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"apiItem is ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apiparameterlistmixin"},"ApiParameterListMixin")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceof")," operator cannot be used to test for mixin inheritance, because each invocation of the mixin function produces a different subclass. (This could be mitigated by ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbol.hasInstance"),(0,i.kt)(n.Fragment,null),", however the TypeScript type system cannot invoke a runtime test.)"))}u.isMDXComponent=!0}}]);