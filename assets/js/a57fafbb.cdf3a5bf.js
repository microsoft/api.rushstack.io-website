"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[60669],{50158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||p;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<p;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(20216),n=r(46393),p=r(50158);const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,i={unversionedId:"pages/api-extractor-model.apiproperty",id:"pages/api-extractor-model.apiproperty",title:"api-extractor-model.apiproperty",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiProperty",source:"@site/docs/pages/api-extractor-model.apiproperty.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.apiproperty",permalink:"/pages/api-extractor-model.apiproperty",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},c=[{value:"ApiProperty class",id:"apiproperty-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apiproperty"},"ApiProperty")),(0,p.kt)("h2",{id:"apiproperty-class"},"ApiProperty class"),(0,p.kt)("p",null,"Represents a TypeScript property declaration that belongs to an ",(0,p.kt)("inlineCode",{parentName:"p"},"ApiClass"),(0,p.kt)(n.Fragment,null),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ApiProperty extends ApiProperty_base \n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Extends:")," ApiProperty","_","base"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This is part of the ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apimodel"},"ApiModel")," hierarchy of classes, which are serializable representations of API declarations."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"ApiProperty")," represents a TypeScript declaration such as the ",(0,p.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"height")," members in this example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"export class Widget {\n  public width: number = 100;\n\n  public get height(): number {\n    if (this.isSquashed()) {\n      return 0;\n    } else {\n      return this.clientArea.height;\n    }\n  }\n}\n")),(0,p.kt)("p",null,"Note that member variables are also considered to be properties."),(0,p.kt)("p",null,"If the property has both a getter function and setter function, they will be represented by a single ",(0,p.kt)("inlineCode",{parentName:"p"},"ApiProperty")," and must have a single documentation comment."),(0,p.kt)("p",null,"Compare with ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apipropertysignature"},"ApiPropertySignature"),(0,p.kt)(n.Fragment,null),", which represents a property belonging to an interface. For example, a class property can be ",(0,p.kt)("inlineCode",{parentName:"p"},"static")," but an interface property cannot."),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiproperty._constructor_"},"(constructor)(options)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,p.kt)("code",null,"ApiProperty")," class")))),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Property"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiproperty.containerkey"},"containerKey")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("code",null,"readonly")),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiproperty.kind"},"kind")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("code",null,"readonly")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiitemkind"},"ApiItemKind")),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Method"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiproperty.buildcanonicalreference"},"buildCanonicalReference()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},(0,p.kt)("em",{parentName:"strong"},"(BETA)")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiproperty.getcontainerkey"},"getContainerKey(name, isStatic)")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("code",null,"static")),(0,p.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);