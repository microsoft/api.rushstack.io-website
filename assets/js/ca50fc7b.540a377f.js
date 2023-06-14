"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[77477],{50158:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=r(29122),n=r(46393),o=r(50158);const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"pages/node-core-library.path.formatfilelocation",id:"pages/node-core-library.path.formatfilelocation",title:"node-core-library.path.formatfilelocation",description:"Home &gt; @rushstack/node-core-library &gt; Path &gt; formatFileLocation",source:"@site/docs/pages/node-core-library.path.formatfilelocation.md",sourceDirName:"pages",slug:"/pages/node-core-library.path.formatfilelocation",permalink:"/pages/node-core-library.path.formatfilelocation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"Path.formatFileLocation() method",id:"pathformatfilelocation-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.path"},"Path")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.path.formatfilelocation"},"formatFileLocation")),(0,o.kt)("h2",{id:"pathformatfilelocation-method"},"Path.formatFileLocation() method"),(0,o.kt)("p",null,"Formats a file location to look nice for reporting purposes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static formatFileLocation(options: IPathFormatFileLocationOptions): string;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipathformatfilelocationoptions"},"IPathFormatFileLocationOptions")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"string"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"pathToFormat")," is under the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseFolder"),(0,o.kt)(n.Fragment,null),", then it will be converted to a relative with the ",(0,o.kt)("inlineCode",{parentName:"p"},"./")," prefix. Otherwise, it will be converted to an absolute path."),(0,o.kt)("p",null,"Backslashes will be converted to slashes, unless the path starts with an OS-specific string like ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\"),(0,o.kt)(n.Fragment,null),"."))}f.isMDXComponent=!0}}]);