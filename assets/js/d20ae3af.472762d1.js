"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[85150],{50158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(20216),a=r(46393),o=r(50158);const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,c={unversionedId:"pages/node-core-library.async.foreachasync",id:"pages/node-core-library.async.foreachasync",title:"node-core-library.async.foreachasync",description:"Home &gt; @rushstack/node-core-library &gt; Async &gt; forEachAsync",source:"@site/docs/pages/node-core-library.async.foreachasync.md",sourceDirName:"pages",slug:"/pages/node-core-library.async.foreachasync",permalink:"/pages/node-core-library.async.foreachasync",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},p=[{value:"Async.forEachAsync() method",id:"asyncforeachasync-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.async"},"Async")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.async.foreachasync"},"forEachAsync")),(0,o.kt)("h2",{id:"asyncforeachasync-method"},"Async.forEachAsync() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Given an input array and a ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," function, invoke the callback to start a promise for each element in the array."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static forEachAsync<TEntry>(iterable: Iterable<TEntry> | AsyncIterable<TEntry>, callback: (entry: TEntry, arrayIndex: number) => Promise<void>, options?: IAsyncParallelismOptions | undefined): Promise<void>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"iterable"),(0,o.kt)("td",{parentName:"tr",align:null},"Iterable","<","TEntry",">"," ","|"," AsyncIterable","<","TEntry",">"),(0,o.kt)("td",{parentName:"tr",align:null},"the array of inputs for the callback function")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"callback"),(0,o.kt)("td",{parentName:"tr",align:null},"(entry: TEntry, arrayIndex: number) =",">"," Promise","<","void",">"),(0,o.kt)("td",{parentName:"tr",align:null},"a function that starts an asynchronous promise for an element from the array")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.iasyncparallelismoptions"},"IAsyncParallelismOptions")," ","|"," undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(Optional)")," options for customizing the control flow")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<","void",">"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This API is similar to the system ",(0,o.kt)("inlineCode",{parentName:"p"},"Array#forEach"),(0,o.kt)(a.Fragment,null),", except that the loop is asynchronous, and the maximum number of concurrent promises can be throttled using ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.iasyncparallelismoptions.concurrency"},"IAsyncParallelismOptions.concurrency"),(0,o.kt)(a.Fragment,null),"."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," throws a synchronous exception, or if it returns a promise that rejects, then the loop stops immediately. Any remaining array items will be skipped, and overall operation will reject with the first error that was encountered."))}m.isMDXComponent=!0}}]);