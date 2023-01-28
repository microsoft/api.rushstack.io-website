"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[5099],{50158:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>m});var o=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||p;return t?o.createElement(d,i(i({ref:r},f),{},{components:t})):o.createElement(d,i({ref:r},f))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=u;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var c=2;c<p;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31691:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var o=t(20216),n=t(46393),p=t(50158);const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},a=void 0,l={unversionedId:"pages/api-extractor.iconfigapireport.reporttempfolder",id:"pages/api-extractor.iconfigapireport.reporttempfolder",title:"api-extractor.iconfigapireport.reporttempfolder",description:"Home &gt; @microsoft/api-extractor &gt; IConfigApiReport &gt; reportTempFolder",source:"@site/docs/pages/api-extractor.iconfigapireport.reporttempfolder.md",sourceDirName:"pages",slug:"/pages/api-extractor.iconfigapireport.reporttempfolder",permalink:"/pages/api-extractor.iconfigapireport.reporttempfolder",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},f=[{value:"IConfigApiReport.reportTempFolder property",id:"iconfigapireportreporttempfolder-property",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:f};function u(e){let{components:r,...t}=e;return(0,p.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor.iconfigapireport"},"IConfigApiReport")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api-extractor.iconfigapireport.reporttempfolder"},"reportTempFolder")),(0,p.kt)("h2",{id:"iconfigapireportreporttempfolder-property"},"IConfigApiReport.reportTempFolder property"),(0,p.kt)("p",null,"Specifies the folder where the temporary report file is written. The file name portion is determined by the ",(0,p.kt)("inlineCode",{parentName:"p"},"reportFileName")," setting."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"reportTempFolder?: string;\n")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"After the temporary file is written to disk, it is compared with the file in the ",(0,p.kt)("inlineCode",{parentName:"p"},"reportFolder"),(0,p.kt)(n.Fragment,null),". If they are different, a production build will fail."),(0,p.kt)("p",null,"The path is resolved relative to the folder of the config file that contains the setting; to change this, prepend a folder token such as ",(0,p.kt)("inlineCode",{parentName:"p"},"<projectFolder>"),(0,p.kt)(n.Fragment,null),"."))}u.isMDXComponent=!0}}]);