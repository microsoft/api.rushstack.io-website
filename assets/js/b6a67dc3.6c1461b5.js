"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[52056],{45242:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(50394),a=n(51614),i=(n(63929),n(45242)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"pages/terminal.terminalwritable.onwritechunk",id:"pages/terminal.terminalwritable.onwritechunk",title:"terminal.terminalwritable.onwritechunk",description:"Home &gt; @rushstack/terminal &gt; TerminalWritable &gt; onWriteChunk",source:"@site/docs/pages/terminal.terminalwritable.onwritechunk.md",sourceDirName:"pages",slug:"/pages/terminal.terminalwritable.onwritechunk",permalink:"/pages/terminal.terminalwritable.onwritechunk",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},m=[{value:"TerminalWritable.onWriteChunk() method",id:"terminalwritableonwritechunk-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/terminal"},"@rushstack/terminal")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/terminal.terminalwritable"},"TerminalWritable")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/terminal.terminalwritable.onwritechunk"},"onWriteChunk")),(0,i.kt)("h2",{id:"terminalwritableonwritechunk-method"},"TerminalWritable.onWriteChunk() method"),(0,i.kt)("p",null,"Subclasses should implement this ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract")," method to process the chunk."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"protected abstract onWriteChunk(chunk: ITerminalChunk): void;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chunk"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/terminal.iterminalchunk"},"ITerminalChunk")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"void"))}f.isMDXComponent=!0}}]);