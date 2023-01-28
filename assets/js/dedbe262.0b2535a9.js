"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[34552],{50158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,b=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(20216),a=(r(46393),r(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,l={unversionedId:"pages/terminal.iterminalwritableoptions.preventautoclose",id:"pages/terminal.iterminalwritableoptions.preventautoclose",title:"terminal.iterminalwritableoptions.preventautoclose",description:"Home &gt; @rushstack/terminal &gt; ITerminalWritableOptions &gt; preventAutoclose",source:"@site/docs/pages/terminal.iterminalwritableoptions.preventautoclose.md",sourceDirName:"pages",slug:"/pages/terminal.iterminalwritableoptions.preventautoclose",permalink:"/pages/terminal.iterminalwritableoptions.preventautoclose",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"ITerminalWritableOptions.preventAutoclose property",id:"iterminalwritableoptionspreventautoclose-property",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/terminal"},"@rushstack/terminal")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/terminal.iterminalwritableoptions"},"ITerminalWritableOptions")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/terminal.iterminalwritableoptions.preventautoclose"},"preventAutoclose")),(0,a.kt)("h2",{id:"iterminalwritableoptionspreventautoclose-property"},"ITerminalWritableOptions.preventAutoclose property"),(0,a.kt)("p",null,"When this object is the ",(0,a.kt)("a",{parentName:"p",href:"/pages/terminal.terminaltransform.destination"},"TerminalTransform.destination")," for a transform, the transform will automatically close this object. Set ",(0,a.kt)("inlineCode",{parentName:"p"},"preventAutoclose")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to prevent that behavior."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"preventAutoclose?: boolean;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"When a transform is closed, normally it will automatically close its destination ",(0,a.kt)("inlineCode",{parentName:"p"},"TerminalWritable")," object. There are two ways to prevent that: either by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"preventDestinationAutoclose")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for the transform, or by setting ",(0,a.kt)("a",{parentName:"p",href:"/pages/terminal.terminalwritable.preventautoclose"},"TerminalWritable.preventAutoclose")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"destination")," object."))}u.isMDXComponent=!0}}]);