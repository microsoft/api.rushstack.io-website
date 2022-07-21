"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[16764],{45242:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return s}});var n=a(63929);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(a),s=r,k=d["".concat(o,".").concat(s)]||d[s]||c[s]||l;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61924:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var n=a(50394),r=a(51614),l=(a(63929),a(45242)),p=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,m={unversionedId:"pages/api-extractor-model.apienum",id:"pages/api-extractor-model.apienum",title:"api-extractor-model.apienum",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiEnum",source:"@site/docs/pages/api-extractor-model.apienum.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.apienum",permalink:"/pages/api-extractor-model.apienum",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},c=[{value:"ApiEnum class",id:"apienum-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:c};function s(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apienum"},"ApiEnum")),(0,l.kt)("h2",{id:"apienum-class"},"ApiEnum class"),(0,l.kt)("p",null,"Represents a TypeScript enum declaration."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ApiEnum extends ApiEnum_base \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Extends:")," ApiEnum","_","base"),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"This is part of the ",(0,l.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apimodel"},"ApiModel")," hierarchy of classes, which are serializable representations of API declarations."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ApiEnum")," represents an enum declaration such as ",(0,l.kt)("inlineCode",{parentName:"p"},"FontSizes")," in the example below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export enum FontSizes {\n  Small = 100,\n  Medium = 200,\n  Large = 300\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(Some inherited members may not be shown because they are not represented in the documentation.)")),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apienum._constructor_"},"(constructor)(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,l.kt)("code",null,"ApiEnum")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apienum.containerkey"},"containerKey")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apienum.kind"},"kind")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiitemkind"},"ApiItemKind")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apienum.members"},"members")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apienummember"},"ApiEnumMember"),">"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apienum.addmember"},"addMember(member)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apienum.buildcanonicalreference"},"buildCanonicalReference()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apienum.getcontainerkey"},"getContainerKey(name)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);