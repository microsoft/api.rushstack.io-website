"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[44339],{50158:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||o;return r?a.createElement(m,i(i({ref:t},f),{},{components:r})):a.createElement(m,i({ref:t},f))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(20216),n=(r(46393),r(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,l={unversionedId:"pages/api-extractor.extractorconfig.loadfileandprepare",id:"pages/api-extractor.extractorconfig.loadfileandprepare",title:"api-extractor.extractorconfig.loadfileandprepare",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorConfig &gt; loadFileAndPrepare",source:"@site/docs/pages/api-extractor.extractorconfig.loadfileandprepare.md",sourceDirName:"pages",slug:"/pages/api-extractor.extractorconfig.loadfileandprepare",permalink:"/pages/api-extractor.extractorconfig.loadfileandprepare",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},c=[{value:"ExtractorConfig.loadFileAndPrepare() method",id:"extractorconfigloadfileandprepare-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],f={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor.extractorconfig"},"ExtractorConfig")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor.extractorconfig.loadfileandprepare"},"loadFileAndPrepare")),(0,n.kt)("h2",{id:"extractorconfigloadfileandprepare-method"},"ExtractorConfig.loadFileAndPrepare() method"),(0,n.kt)("p",null,"Loads the api-extractor.json config file from the specified file path, and prepares an ",(0,n.kt)("inlineCode",{parentName:"p"},"ExtractorConfig")," object."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"static loadFileAndPrepare(configJsonFilePath: string): ExtractorConfig;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"configJsonFilePath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor.extractorconfig"},"ExtractorConfig")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,'Loads the api-extractor.json config file from the specified file path. If the "extends" field is present, the referenced file(s) will be merged. For any omitted fields, the API Extractor default values are merged.'),(0,n.kt)("p",null,"The result is prepared using ",(0,n.kt)("inlineCode",{parentName:"p"},"ExtractorConfig.prepare()")," ."))}s.isMDXComponent=!0}}]);