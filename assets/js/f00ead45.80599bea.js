"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[54236],{50158:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(46393);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:e},c),{},{components:n})):a.createElement(f,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2970:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(20216),r=(n(46393),n(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,l={unversionedId:"pages/heft.icustomactionoptions",id:"pages/heft.icustomactionoptions",title:"heft.icustomactionoptions",description:"Home &gt; @rushstack/heft &gt; ICustomActionOptions",source:"@site/docs/pages/heft.icustomactionoptions.md",sourceDirName:"pages",slug:"/pages/heft.icustomactionoptions",permalink:"/pages/heft.icustomactionoptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"ICustomActionOptions interface",id:"icustomactionoptions-interface",level:2},{value:"Properties",id:"properties",level:2}],c={toc:s};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/heft"},"@rushstack/heft")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/heft.icustomactionoptions"},"ICustomActionOptions")),(0,r.kt)("h2",{id:"icustomactionoptions-interface"},"ICustomActionOptions interface"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ICustomActionOptions<TParameters>\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/heft.icustomactionoptions.actionname"},"actionName")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/heft.icustomactionoptions.callback"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},"(parameters: TParameters) =",">"," void ","|"," Promise","<","void",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/heft.icustomactionoptions.documentation"},"documentation")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/heft.icustomactionoptions.parameters"},"parameters?")),(0,r.kt)("td",{parentName:"tr",align:null},"{ ","[","K in keyof TParameters","]",": ",(0,r.kt)("a",{parentName:"td",href:"/pages/heft.icustomactionparameter"},"ICustomActionParameter")," ","<","TParameters","[","K","]",">","; }"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," ",(0,r.kt)("i",null,"(Optional)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/heft.icustomactionoptions.summary"},"summary?")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,(0,r.kt)("i",null,"(BETA)"))," ",(0,r.kt)("i",null,"(Optional)"))))))}u.isMDXComponent=!0}}]);