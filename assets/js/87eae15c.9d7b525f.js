"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[14410],{50158:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(r),c=a,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(20216),a=(r(46393),r(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,o={unversionedId:"pages/terminal.normalizenewlinestextrewriter",id:"pages/terminal.normalizenewlinestextrewriter",title:"terminal.normalizenewlinestextrewriter",description:"Home &gt; @rushstack/terminal &gt; NormalizeNewlinesTextRewriter",source:"@site/docs/pages/terminal.normalizenewlinestextrewriter.md",sourceDirName:"pages",slug:"/pages/terminal.normalizenewlinestextrewriter",permalink:"/pages/terminal.normalizenewlinestextrewriter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"NormalizeNewlinesTextRewriter class",id:"normalizenewlinestextrewriter-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/terminal"},"@rushstack/terminal")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/terminal.normalizenewlinestextrewriter"},"NormalizeNewlinesTextRewriter")),(0,a.kt)("h2",{id:"normalizenewlinestextrewriter-class"},"NormalizeNewlinesTextRewriter class"),(0,a.kt)("p",null,"For use with ",(0,a.kt)("a",{parentName:"p",href:"/pages/terminal.textrewritertransform"},"TextRewriterTransform")," , this rewriter converts all newlines to a standard format."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class NormalizeNewlinesTextRewriter extends TextRewriter\n")),(0,a.kt)("b",null,"Extends:")," [TextRewriter](/pages/terminal.textrewriter)",(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/terminal.normalizenewlinestextrewriter._constructor_"},"(constructor)(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,a.kt)("code",null,"NormalizeNewlinesTextRewriter")," class")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/terminal.normalizenewlinestextrewriter.ensurenewlineatend"},"ensureNewlineAtEnd")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"If ",(0,a.kt)("code",null,"true"),", then ",(0,a.kt)("code",null,"NormalizeNewlinesTextRewriter.close()")," will append a newline to the output if it ends with an incomplete line.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/terminal.normalizenewlinestextrewriter.newline"},"newline")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The specific character sequence that will be used when appending newlines.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/terminal.normalizenewlinestextrewriter.newlinekind"},"newlineKind")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/node-core-library.newlinekind"},"NewlineKind")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies how newlines should be represented in the output stream.")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/terminal.normalizenewlinestextrewriter.close"},"close(unknownState)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/terminal.normalizenewlinestextrewriter.initialize"},"initialize()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/terminal.normalizenewlinestextrewriter.process"},"process(unknownState, text)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);