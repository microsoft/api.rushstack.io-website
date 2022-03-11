"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[29159],{45242:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,s=d["".concat(p,".").concat(f)]||d[f]||m[f]||o;return r?n.createElement(s,u(u({ref:t},l),{},{components:r})):n.createElement(s,u({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81303:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=r(95464),a=r(20134),o=(r(63929),r(45242)),u=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"pages/api-documenter.markdowndocumenterfeature.onbeforewritepage",id:"pages/api-documenter.markdowndocumenterfeature.onbeforewritepage",title:"api-documenter.markdowndocumenterfeature.onbeforewritepage",description:"Home &gt; @microsoft/api-documenter &gt; MarkdownDocumenterFeature &gt; onBeforeWritePage",source:"@site/docs/pages/api-documenter.markdowndocumenterfeature.onbeforewritepage.md",sourceDirName:"pages",slug:"/pages/api-documenter.markdowndocumenterfeature.onbeforewritepage",permalink:"/pages/api-documenter.markdowndocumenterfeature.onbeforewritepage",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},l={},m=[{value:"MarkdownDocumenterFeature.onBeforeWritePage() method",id:"markdowndocumenterfeatureonbeforewritepage-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-documenter"},"@microsoft/api-documenter")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-documenter.markdowndocumenterfeature"},"MarkdownDocumenterFeature")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-documenter.markdowndocumenterfeature.onbeforewritepage"},"onBeforeWritePage")),(0,o.kt)("h2",{id:"markdowndocumenterfeatureonbeforewritepage-method"},"MarkdownDocumenterFeature.onBeforeWritePage() method"),(0,o.kt)("p",null,"This event occurs before each markdown file is written. It provides an opportunity to customize the content of the file."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/** @virtual */\nonBeforeWritePage(eventArgs: IMarkdownDocumenterFeatureOnBeforeWritePageArgs): void;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventArgs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api-documenter.imarkdowndocumenterfeatureonbeforewritepageargs"},"IMarkdownDocumenterFeatureOnBeforeWritePageArgs")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"void"))}f.isMDXComponent=!0}}]);