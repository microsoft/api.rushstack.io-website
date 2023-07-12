"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[18325],{50158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},83068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(29122),a=r(46393),l=r(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"pages/node-core-library.async.mapasync",id:"pages/node-core-library.async.mapasync",title:"node-core-library.async.mapasync",description:"Home &gt; @rushstack/node-core-library &gt; Async &gt; mapAsync",source:"@site/docs/pages/node-core-library.async.mapasync.md",sourceDirName:"pages",slug:"/pages/node-core-library.async.mapasync",permalink:"/pages/node-core-library.async.mapasync",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},c=[{value:"Async.mapAsync() method",id:"asyncmapasync-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.async"},"Async")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.async.mapasync"},"mapAsync")),(0,l.kt)("h2",{id:"asyncmapasync-method"},"Async.mapAsync() method"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,l.kt)("p",null,"Given an input array and a ",(0,l.kt)("inlineCode",{parentName:"p"},"callback")," function, invoke the callback to start a promise for each element in the array. Returns an array containing the results."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static mapAsync<TEntry, TRetVal>(iterable: Iterable<TEntry> | AsyncIterable<TEntry>, callback: (entry: TEntry, arrayIndex: number) => Promise<TRetVal>, options?: IAsyncParallelismOptions | undefined): Promise<TRetVal[]>;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iterable"),(0,l.kt)("td",{parentName:"tr",align:null},"Iterable","<","TEntry",">"," ","|"," AsyncIterable","<","TEntry",">"),(0,l.kt)("td",{parentName:"tr",align:null},"the array of inputs for the callback function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"(entry: TEntry, arrayIndex: number) =",">"," Promise","<","TRetVal",">"),(0,l.kt)("td",{parentName:"tr",align:null},"a function that starts an asynchronous promise for an element from the array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.iasyncparallelismoptions"},"IAsyncParallelismOptions")," ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," options for customizing the control flow")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")),(0,l.kt)("p",null,"Promise","<","TRetVal","[","]",">"),(0,l.kt)("p",null,"an array containing the result for each callback, in the same order as the original input ",(0,l.kt)("inlineCode",{parentName:"p"},"array")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"This API is similar to the system ",(0,l.kt)("inlineCode",{parentName:"p"},"Array#map"),(0,l.kt)(a.Fragment,null),", except that the loop is asynchronous, and the maximum number of concurrent promises can be throttled using ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.iasyncparallelismoptions.concurrency"},"IAsyncParallelismOptions.concurrency"),(0,l.kt)(a.Fragment,null),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"callback")," throws a synchronous exception, or if it returns a promise that rejects, then the loop stops immediately. Any remaining array items will be skipped, and overall operation will reject with the first error that was encountered."))}y.isMDXComponent=!0}}]);