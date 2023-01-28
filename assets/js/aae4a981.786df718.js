"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[68195],{50158:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var r=n(46393);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15546:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(20216),a=(n(46393),n(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,i={unversionedId:"pages/rush-lib.operationstatus",id:"pages/rush-lib.operationstatus",title:"rush-lib.operationstatus",description:"Home &gt; @microsoft/rush-lib &gt; OperationStatus",source:"@site/docs/pages/rush-lib.operationstatus.md",sourceDirName:"pages",slug:"/pages/rush-lib.operationstatus",permalink:"/pages/rush-lib.operationstatus",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},u=[{value:"OperationStatus enum",id:"operationstatus-enum",level:2},{value:"Enumeration Members",id:"enumeration-members",level:2}],s={toc:u};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.operationstatus"},"OperationStatus")),(0,a.kt)("h2",{id:"operationstatus-enum"},"OperationStatus enum"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Enumeration defining potential states of an operation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare enum OperationStatus \n")),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Member"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Blocked"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"BLOCKED",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," The Operation could not be executed because one or more of its dependencies failed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Executing"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"EXECUTING",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," The Operation is currently executing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Failure"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"FAILURE",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," The Operation failed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FromCache"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"FROM CACHE",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," The Operation had its outputs restored from the build cache")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NoOp"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"NO OP",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," The Operation was a no-op (for example, it had an empty script)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ready"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"READY",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," The Operation is on the queue, ready to execute (but may be waiting for dependencies)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Skipped"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"SKIPPED",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," The Operation was skipped via the legacy incremental build logic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Success"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"SUCCESS",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," The Operation completed successfully and did not write to standard output")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SuccessWithWarning"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,'"',"SUCCESS WITH WARNINGS",'"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," The Operation completed successfully, but wrote to standard output")))))}m.isMDXComponent=!0}}]);