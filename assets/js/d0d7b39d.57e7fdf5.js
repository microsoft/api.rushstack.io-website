"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[31002],{45242:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(63929);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(95464),r=n(20134),l=(n(63929),n(45242)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/terminal.terminalwritable",id:"pages/terminal.terminalwritable",title:"terminal.terminalwritable",description:"Home &gt; @rushstack/terminal &gt; TerminalWritable",source:"@site/docs/pages/terminal.terminalwritable.md",sourceDirName:"pages",slug:"/pages/terminal.terminalwritable",permalink:"/pages/terminal.terminalwritable",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},m={},u=[{value:"TerminalWritable class",id:"terminalwritable-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal"},"@rushstack/terminal")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminalwritable"},"TerminalWritable")),(0,l.kt)("h2",{id:"terminalwritable-class"},"TerminalWritable class"),(0,l.kt)("p",null,"The abstract base class for objects that can present, route, or process text output for a console application. This output is typically prepared using the ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.terminal"},"Terminal")," API."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class TerminalWritable\n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The design is based loosely on the ",(0,l.kt)("inlineCode",{parentName:"p"},"WritableStream")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TransformStream")," classes from the system ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts"},"Streams API")," , except that instead of asynchronous byte streams, the ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalWritable")," system synchronously transmits human readable messages intended to be rendered on a text console or log file."),(0,l.kt)("p",null,"Consider a console application whose output may need to be processed in different ways before finally being output. The conceptual block diagram might look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"         [Terminal API]\n                |\n                V\n       [normalize newlines]\n                |\n                V\n      +----[splitter]-------+\n      |                     |\n      V                     V\n  [shell console]     [remove ANSI colors]\n                            |\n                            V\n                      [write to build.log]\n")),(0,l.kt)("p",null,"The application uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"Terminal")," API to print ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," messages, for example with standardized formatting for errors and warnings, and ANSI escapes to make nice colors. Maybe it also includes text received from external processes, whose newlines may be inconsistent. Ultimately we want to write the output to the shell console and a ",(0,l.kt)("inlineCode",{parentName:"p"},"build.log")," file, but we don't want to put ANSI colors in the build log."),(0,l.kt)("p",null,"For the above example, ",(0,l.kt)("inlineCode",{parentName:"p"},"[shell console]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"[write to build.log]")," would be modeled as subclasses of ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalWritable")," . The ",(0,l.kt)("inlineCode",{parentName:"p"},"[normalize newlines]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"[remove ANSI colors]")," steps are modeled as subclasses of ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminaltransform"},"TerminalTransform"),' , because they output to a "destination" object. The ',(0,l.kt)("inlineCode",{parentName:"p"},"[splitter]")," would be implemented using ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.splittertransform"},"SplitterTransform")," ."),(0,l.kt)("p",null,"The stream of messages are ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.iterminalchunk"},"ITerminalChunk")," objects, which can represent both ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," channels. The pipeline operates synchronously on each chunk, but by processing one chunk at a time, it avoids storing the entire output in memory. This means that operations like ",(0,l.kt)("inlineCode",{parentName:"p"},"[remove ANSI colors]")," cannot be simple regular expressions -- they must be implemented as state machines (",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.textrewriter"},"TextRewriter")," subclasses) capable of matching substrings that span multiple chunks."),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminalwritable._constructor_"},"(constructor)(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,l.kt)("code",null,"TerminalWritable")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminalwritable.isopen"},"isOpen")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"This property is initially ",(0,l.kt)("code",null,"true")," when the object is constructed, and becomes ",(0,l.kt)("code",null,"false")," when ",(0,l.kt)("code",null,"close()")," is called.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminalwritable.preventautoclose"},"preventAutoclose")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminalwritable.close"},"close()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Calling this method flushes any remaining outputs and permanently transitions the ",(0,l.kt)("code",null,"TerminalWritable"),' to a "closed" state, where no further chunks can be written.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminalwritable.onclose"},"onClose()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Subclasses can override this empty method to perform additional operations such as closing a file handle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminalwritable.onwritechunk"},"onWriteChunk(chunk)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Subclasses should implement this ",(0,l.kt)("code",null,"abstract")," method to process the chunk.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/terminal.terminalwritable.writechunk"},"writeChunk(chunk)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Upstream objects call this method to provide inputs to this object.")))))}d.isMDXComponent=!0}}]);