"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[17730],{50158:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=c(r),u=a,d=g["".concat(p,".").concat(u)]||g[u]||f[u]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(29122),a=r(46393),i=r(50158);const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/rig-package.rigconfig.tryresolveconfigfilepath",id:"pages/rig-package.rigconfig.tryresolveconfigfilepath",title:"rig-package.rigconfig.tryresolveconfigfilepath",description:"Home &gt; @rushstack/rig-package &gt; RigConfig &gt; tryResolveConfigFilePath",source:"@site/docs/pages/rig-package.rigconfig.tryresolveconfigfilepath.md",sourceDirName:"pages",slug:"/pages/rig-package.rigconfig.tryresolveconfigfilepath",permalink:"/pages/rig-package.rigconfig.tryresolveconfigfilepath",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"RigConfig.tryResolveConfigFilePath() method",id:"rigconfigtryresolveconfigfilepath-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],g={toc:s},f="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rig-package"},"@rushstack/rig-package")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rig-package.rigconfig"},"RigConfig")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rig-package.rigconfig.tryresolveconfigfilepath"},"tryResolveConfigFilePath")),(0,i.kt)("h2",{id:"rigconfigtryresolveconfigfilepath-method"},"RigConfig.tryResolveConfigFilePath() method"),(0,i.kt)("p",null,"This lookup first checks for the specified relative path under ",(0,i.kt)("inlineCode",{parentName:"p"},"projectFolderPath"),(0,i.kt)(a.Fragment,null),"; if it does not exist there, then it checks in the resolved rig profile folder. If the file is found, its absolute path is returned. Otherwise, ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," is returned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"tryResolveConfigFilePath(configFileRelativePath: string): string | undefined;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"configFileRelativePath"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"string ","|"," undefined"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"For example, suppose the rig profile is:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/your-project/node_modules/example-rig/profiles/example-profile")),(0,i.kt)("p",null,"And suppose ",(0,i.kt)("inlineCode",{parentName:"p"},"configFileRelativePath")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"folder/file.json"),(0,i.kt)(a.Fragment,null),". Then the following locations will be checked:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/your-project/folder/file.json")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/your-project/node_modules/example-rig/profiles/example-profile/folder/file.json")))}u.isMDXComponent=!0}}]);