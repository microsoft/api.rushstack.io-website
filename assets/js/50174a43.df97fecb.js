"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[29237],{50158:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=u(n),c=a,m=h["".concat(p,".").concat(c)]||h[c]||d[c]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(20216),a=n(46393),l=n(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"pages/rush-lib.lookupbypath.findchildpath",id:"pages/rush-lib.lookupbypath.findchildpath",title:"rush-lib.lookupbypath.findchildpath",description:"Home &gt; @microsoft/rush-lib &gt; LookupByPath &gt; findChildPath",source:"@site/docs/pages/rush-lib.lookupbypath.findchildpath.md",sourceDirName:"pages",slug:"/pages/rush-lib.lookupbypath.findchildpath",permalink:"/pages/rush-lib.lookupbypath.findchildpath",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},u={},s=[{value:"LookupByPath.findChildPath() method",id:"lookupbypathfindchildpath-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],d={toc:s};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rush-lib.lookupbypath"},"LookupByPath")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rush-lib.lookupbypath.findchildpath"},"findChildPath")),(0,l.kt)("h2",{id:"lookupbypathfindchildpath-method"},"LookupByPath.findChildPath() method"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,l.kt)("p",null,"Searches for the item associated with ",(0,l.kt)("inlineCode",{parentName:"p"},"childPath"),(0,l.kt)(a.Fragment,null),", or the nearest ancestor of that path that has an associated item."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"findChildPath(childPath: string): TItem | undefined;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"childPath"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")),(0,l.kt)("p",null,"TItem ","|"," undefined"),(0,l.kt)("p",null,"the found item, or ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," if no item was found"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const tree = new LookupByPath([['foo', 1], ['foo/bar', 2]]);\ntree.findChildPath('foo/baz'); // returns 1\ntree.findChildPath('foo/bar/baz'); // returns 2\n")))}h.isMDXComponent=!0}}]);