"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[40282],{50158:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var n=r(46393);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(r),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return r?n.createElement(k,i(i({ref:e},m),{},{components:r})):n.createElement(k,i({ref:e},m))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33695:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=r(29122),a=r(46393),l=r(50158);const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/terminal.splittertransform",id:"pages/terminal.splittertransform",title:"terminal.splittertransform",description:"Home &gt; @rushstack/terminal &gt; SplitterTransform",source:"@site/docs/pages/terminal.splittertransform.md",sourceDirName:"pages",slug:"/pages/terminal.splittertransform",permalink:"/pages/terminal.splittertransform",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},m=[{value:"SplitterTransform class",id:"splittertransform-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],u={toc:m},c="wrapper";function d(t){let{components:e,...r}=t;return(0,l.kt)(c,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal"},"@rushstack/terminal")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.splittertransform"},"SplitterTransform")),(0,l.kt)("h2",{id:"splittertransform-class"},"SplitterTransform class"),(0,l.kt)("p",null,"Use this instead of ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminaltransform"},"TerminalTransform")," if you need to output ",(0,l.kt)("inlineCode",{parentName:"p"},"ITerminalChunk")," data to more than one destination."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class SplitterTransform extends TerminalWritable \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Extends:")," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminalwritable"},"TerminalWritable")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Splitting streams complicates the pipeline topology and can make debugging more difficult. For this reason, it is modeled as an explicit ",(0,l.kt)("inlineCode",{parentName:"p"},"SplitterTransform")," node, rather than as a built-in feature of ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalTransform"),(0,l.kt)(a.Fragment,null),"."),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.splittertransform._constructor_"},"(constructor)(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,l.kt)("code",null,"SplitterTransform")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.splittertransform.destinations"},"destinations")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminalwritable"},"TerminalWritable"),(0,l.kt)(a.Fragment,null),">"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.splittertransform.onclose"},"onClose()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"protected")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.splittertransform.onwritechunk"},"onWriteChunk(chunk)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"protected")),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);