"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[44097],{50158:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(46393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=l(a),d=n,g=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return a?r.createElement(g,p(p({ref:t},m),{},{components:a})):r.createElement(g,p({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87382:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=a(29122),n=a(46393),i=a(50158);const p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,c={unversionedId:"pages/api-extractor-model.apiitem.getscopednamewithinpackage",id:"pages/api-extractor-model.apiitem.getscopednamewithinpackage",title:"api-extractor-model.apiitem.getscopednamewithinpackage",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiItem &gt; getScopedNameWithinPackage",source:"@site/docs/pages/api-extractor-model.apiitem.getscopednamewithinpackage.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.apiitem.getscopednamewithinpackage",permalink:"/pages/api-extractor-model.apiitem.getscopednamewithinpackage",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},l={},m=[{value:"ApiItem.getScopedNameWithinPackage() method",id:"apiitemgetscopednamewithinpackage-method",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apiitem"},"ApiItem")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apiitem.getscopednamewithinpackage"},"getScopedNameWithinPackage")),(0,i.kt)("h2",{id:"apiitemgetscopednamewithinpackage-method"},"ApiItem.getScopedNameWithinPackage() method"),(0,i.kt)("p",null,"This returns a scoped name such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"Namespace1.Namespace2.MyClass.myMember()"'),(0,i.kt)(n.Fragment,null),". It does not include the package name or entry point."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getScopedNameWithinPackage(): string;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"string"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"If called on an ApiEntrypoint, ApiPackage, or ApiModel item, the result is an empty string."))}d.isMDXComponent=!0}}]);