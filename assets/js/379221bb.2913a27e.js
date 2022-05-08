"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[6023],{45242:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(63929);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7462:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=r(50394),n=r(51614),l=(r(63929),r(45242)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,m={unversionedId:"pages/terminal.terminaltransform",id:"pages/terminal.terminaltransform",title:"terminal.terminaltransform",description:"Home &gt; @rushstack/terminal &gt; TerminalTransform",source:"@site/docs/pages/terminal.terminaltransform.md",sourceDirName:"pages",slug:"/pages/terminal.terminaltransform",permalink:"/pages/terminal.terminaltransform",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},u=[{value:"TerminalTransform class",id:"terminaltransform-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal"},"@rushstack/terminal")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminaltransform"},"TerminalTransform")),(0,l.kt)("h2",{id:"terminaltransform-class"},"TerminalTransform class"),(0,l.kt)("p",null,"The abstract base class for ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminalwritable"},"TerminalWritable")," objects that receive an input, transform it somehow, and then write the output to another ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalWritable")," ."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class TerminalTransform extends TerminalWritable\n")),(0,l.kt)("b",null,"Extends:")," [TerminalWritable](/pages/terminal.terminalwritable)",(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalTransform")," and ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.splittertransform"},"SplitterTransform")," base classes formalize the idea of modeling data flow as a directed acyclic graph of reusable transforms, whose final outputs are ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalWritable")," objects."),(0,l.kt)("p",null,"The design is based loosely on the ",(0,l.kt)("inlineCode",{parentName:"p"},"WritableStream")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TransformStream")," classes from the system ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts"},"Streams API")," , except that instead of asynchronous byte streams, the ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalWritable")," system synchronously transmits human readable messages intended to be rendered on a text console or log file."),(0,l.kt)("p",null,"The main feature of the ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalTransform")," class is its ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminaltransform.destination"},"TerminalTransform.destination")," property, which tracks the next link in the graph."),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminaltransform._constructor_"},"(constructor)(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,l.kt)("code",null,"TerminalTransform")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminaltransform.destination"},"destination")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminalwritable"},"TerminalWritable")),(0,l.kt)("td",{parentName:"tr",align:null},"The target ",(0,l.kt)("code",null,"TerminalWritable")," that the ",(0,l.kt)("code",null,"TerminalTransform")," will write its output to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminaltransform.preventdestinationautoclose"},"preventDestinationAutoclose")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Prevents the ",(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminaltransform.destination"},"TerminalTransform.destination")," object from being closed automatically when the transform is closed.")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminaltransform.autoclosedestination"},"autocloseDestination()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The default implementation of ",(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminaltransform.onclose"},"TerminalTransform.onClose()")," calls this method, which closes the ",(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminaltransform.destination"},"TerminalTransform.destination")," if appropriate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminaltransform.onclose"},"onClose()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);