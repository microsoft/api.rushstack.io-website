"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[72480],{50158:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,b=s["".concat(m,".").concat(d)]||s[d]||c[d]||o;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},58003:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var n=r(20216),a=r(46393),o=r(50158);const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,m={unversionedId:"pages/api-extractor-model.enummemberorder",id:"pages/api-extractor-model.enummemberorder",title:"api-extractor-model.enummemberorder",description:"Home &gt; @microsoft/api-extractor-model &gt; EnumMemberOrder",source:"@site/docs/pages/api-extractor-model.enummemberorder.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.enummemberorder",permalink:"/pages/api-extractor-model.enummemberorder",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},u=[{value:"EnumMemberOrder enum",id:"enummemberorder-enum",level:2},{value:"Enumeration Members",id:"enumeration-members",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.enummemberorder"},"EnumMemberOrder")),(0,o.kt)("h2",{id:"enummemberorder-enum"},"EnumMemberOrder enum"),(0,o.kt)("p",null,"Options for customizing the sort order of ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apienum"},"ApiEnum")," members."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare enum EnumMemberOrder \n")),(0,o.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Member"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ByName"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,'"',"by-name",'"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("code",null,"ApiEnumMember")," items are sorted according to their ",(0,o.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiitem.getsortkey"},"ApiItem.getSortKey()"),(0,o.kt)(a.Fragment,null),". The order is basically alphabetical by identifier name, but otherwise unspecified to allow for cosmetic improvements."),(0,o.kt)("p",null,"This is the default behavior."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Preserve"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,'"',"preserve",'"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"ApiEnumMember")," items preserve the original order of the declarations in the source file. (This disables the automatic sorting that is normally applied based on ",(0,o.kt)("a",{parentName:"td",href:"/pages/api-extractor-model.apiitem.getsortkey"},"ApiItem.getSortKey()"),(0,o.kt)(a.Fragment,null),".)")))))}s.isMDXComponent=!0}}]);