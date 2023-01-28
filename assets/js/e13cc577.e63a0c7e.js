"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[89146],{50158:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(k,o(o({ref:t},s),{},{components:r})):a.createElement(k,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(20216),n=r(46393),l=r(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,i={unversionedId:"pages/api-extractor-model.excerpt",id:"pages/api-extractor-model.excerpt",title:"api-extractor-model.excerpt",description:"Home &gt; @microsoft/api-extractor-model &gt; Excerpt",source:"@site/docs/pages/api-extractor-model.excerpt.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.excerpt",permalink:"/pages/api-extractor-model.excerpt",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"Excerpt class",id:"excerpt-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.excerpt"},"Excerpt")),(0,l.kt)("h2",{id:"excerpt-class"},"Excerpt class"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Excerpt")," class is used by ",(0,l.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apideclareditem"},"ApiDeclaredItem")," to represent a TypeScript code fragment that may be annotated with hyperlinks to declared types (and in the future, source code locations)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Excerpt \n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"API Extractor's .api.json file format stores excerpts compactly as a start/end indexes into an array of tokens. Every ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiDeclaredItem"),' has a "main excerpt" corresponding to the full list of tokens. The declaration may also have have "captured" excerpts that correspond to subranges of tokens.'),(0,l.kt)("p",null,"For example, if the main excerpt is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function parse(s: string): Vector | undefined;\n")),(0,l.kt)("p",null,'...then this entire signature is the "main excerpt", whereas the function\'s return type ',(0,l.kt)("inlineCode",{parentName:"p"},"Vector | undefined")," is a captured excerpt. The ",(0,l.kt)("inlineCode",{parentName:"p"},"Vector")," token might be a hyperlink to that API item."),(0,l.kt)("p",null,"An excerpt may be empty (i.e. a token range containing zero tokens). For example, if a function's return value is not explicitly declared, then the returnTypeExcerpt will be empty. By contrast, a class constructor cannot have a return value, so ApiConstructor has no returnTypeExcerpt property at all."),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.excerpt._constructor_"},"(constructor)(tokens, tokenRange)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,l.kt)("code",null,"Excerpt")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.excerpt.isempty"},"isEmpty")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the excerpt is an empty range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.excerpt.spannedtokens"},"spannedTokens")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.excerpttoken"},"ExcerptToken"),(0,l.kt)(n.Fragment,null),">"),(0,l.kt)("td",{parentName:"tr",align:null},"The tokens spanned by this excerpt. It is the range of the ",(0,l.kt)("code",null,"tokens")," array as specified by the ",(0,l.kt)("code",null,"tokenRange")," property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.excerpt.text"},"text")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The excerpted text, formed by concatenating the text of the ",(0,l.kt)("code",null,"spannedTokens")," strings.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.excerpt.tokenrange"},"tokenRange")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"Readonly","<",(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.iexcerpttokenrange"},"IExcerptTokenRange"),(0,l.kt)(n.Fragment,null),">"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the excerpt's range within the ",(0,l.kt)("code",null,"tokens")," array.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.excerpt.tokens"},"tokens")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,l.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.excerpttoken"},"ExcerptToken"),(0,l.kt)(n.Fragment,null),">"),(0,l.kt)("td",{parentName:"tr",align:null},"The complete list of tokens for the source code fragment that this excerpt is based upon. If this object is the main excerpt, then it will span all of the tokens; otherwise, it will correspond to a range within the array.")))))}u.isMDXComponent=!0}}]);