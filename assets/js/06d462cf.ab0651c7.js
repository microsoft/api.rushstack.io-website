"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[83628],{50158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(29122),n=r(46393),i=r(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"pages/api-extractor-model.apivariable.ondeserializeinto",id:"pages/api-extractor-model.apivariable.ondeserializeinto",title:"api-extractor-model.apivariable.ondeserializeinto",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiVariable &gt; onDeserializeInto",source:"@site/docs/pages/api-extractor-model.apivariable.ondeserializeinto.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.apivariable.ondeserializeinto",permalink:"/pages/api-extractor-model.apivariable.ondeserializeinto",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},c=[{value:"ApiVariable.onDeserializeInto() method",id:"apivariableondeserializeinto-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apivariable"},"ApiVariable")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apivariable.ondeserializeinto"},"onDeserializeInto")),(0,i.kt)("h2",{id:"apivariableondeserializeinto-method"},"ApiVariable.onDeserializeInto() method"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/** @override */\nstatic onDeserializeInto(options: Partial<IApiVariableOptions>, context: DeserializerContext, jsonObject: IApiVariableJson): void;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options"),(0,i.kt)("td",{parentName:"tr",align:null},"Partial","<",(0,i.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.iapivariableoptions"},"IApiVariableOptions"),(0,i.kt)(n.Fragment,null),">"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"DeserializerContext"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jsonObject"),(0,i.kt)("td",{parentName:"tr",align:null},"IApiVariableJson"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"void"))}d.isMDXComponent=!0}}]);