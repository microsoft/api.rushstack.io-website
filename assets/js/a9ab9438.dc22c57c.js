"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[12264],{45242:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6313:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(50394),a=r(51614),l=(r(63929),r(45242)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"pages/terminal.terminalwritable.close",id:"pages/terminal.terminalwritable.close",title:"terminal.terminalwritable.close",description:"Home &gt; @rushstack/terminal &gt; TerminalWritable &gt; close",source:"@site/docs/pages/terminal.terminalwritable.close.md",sourceDirName:"pages",slug:"/pages/terminal.terminalwritable.close",permalink:"/pages/terminal.terminalwritable.close",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},u=[{value:"TerminalWritable.close() method",id:"terminalwritableclose-method",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal"},"@rushstack/terminal")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminalwritable"},"TerminalWritable")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminalwritable.close"},"close")),(0,l.kt)("h2",{id:"terminalwritableclose-method"},"TerminalWritable.close() method"),(0,l.kt)("p",null,"Calling this method flushes any remaining outputs and permanently transitions the ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalWritable"),' to a "closed" state, where no further chunks can be written.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"/** @sealed */\nclose(): void;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")),(0,l.kt)("p",null,"void"),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The subclass provides its implementation via the the ",(0,l.kt)("a",{parentName:"p",href:"/pages/terminal.terminalwritable.onclose"},"TerminalWritable.onClose()")," method, which is called by ",(0,l.kt)("inlineCode",{parentName:"p"},"close()")," ."),(0,l.kt)("p",null,"If this method is called more than once, the additional calls are ignored; ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalWritable.onClose")," will be called at most once."))}f.isMDXComponent=!0}}]);