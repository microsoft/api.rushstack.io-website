"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[96912],{50158:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(20216),o=(r(46393),r(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,c={unversionedId:"pages/api-extractor.extractorconfig.testmode",id:"pages/api-extractor.extractorconfig.testmode",title:"api-extractor.extractorconfig.testmode",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorConfig &gt; testMode",source:"@site/docs/pages/api-extractor.extractorconfig.testmode.md",sourceDirName:"pages",slug:"/pages/api-extractor.extractorconfig.testmode",permalink:"/pages/api-extractor.extractorconfig.testmode",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"ExtractorConfig.testMode property",id:"extractorconfigtestmode-property",level:2},{value:"Remarks",id:"remarks",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor.extractorconfig"},"ExtractorConfig")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor.extractorconfig.testmode"},"testMode")),(0,o.kt)("h2",{id:"extractorconfigtestmode-property"},"ExtractorConfig.testMode property"),(0,o.kt)("p",null,"Set to true when invoking API Extractor's test harness."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly testMode: boolean;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"testMode")," is true, the ",(0,o.kt)("inlineCode",{parentName:"p"},"toolVersion")," field in the .api.json file is assigned an empty string to prevent spurious diffs in output files tracked for tests."))}u.isMDXComponent=!0}}]);