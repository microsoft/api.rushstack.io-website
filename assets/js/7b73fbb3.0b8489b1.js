"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[6925],{50158:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>y});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,y=s["".concat(p,".").concat(u)]||s[u]||f[u]||i;return r?n.createElement(y,o(o({ref:t},g),{},{components:r})):n.createElement(y,o({ref:t},g))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(29122),a=(r(46393),r(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,l={unversionedId:"pages/rig-package.rigconfig.tryresolveconfigfilepathasync",id:"pages/rig-package.rigconfig.tryresolveconfigfilepathasync",title:"rig-package.rigconfig.tryresolveconfigfilepathasync",description:"Home &gt; @rushstack/rig-package &gt; RigConfig &gt; tryResolveConfigFilePathAsync",source:"@site/docs/pages/rig-package.rigconfig.tryresolveconfigfilepathasync.md",sourceDirName:"pages",slug:"/pages/rig-package.rigconfig.tryresolveconfigfilepathasync",permalink:"/pages/rig-package.rigconfig.tryresolveconfigfilepathasync",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},c=[{value:"RigConfig.tryResolveConfigFilePathAsync() method",id:"rigconfigtryresolveconfigfilepathasync-method",level:2},{value:"Parameters",id:"parameters",level:2}],g={toc:c},s="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rig-package"},"@rushstack/rig-package")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rig-package.rigconfig"},"RigConfig")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rig-package.rigconfig.tryresolveconfigfilepathasync"},"tryResolveConfigFilePathAsync")),(0,a.kt)("h2",{id:"rigconfigtryresolveconfigfilepathasync-method"},"RigConfig.tryResolveConfigFilePathAsync() method"),(0,a.kt)("p",null,"An async variant of ",(0,a.kt)("a",{parentName:"p",href:"/pages/rig-package.rigconfig.tryresolveconfigfilepath"},"RigConfig.tryResolveConfigFilePath()")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"tryResolveConfigFilePathAsync(configFileRelativePath: string): Promise<string | undefined>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"configFileRelativePath"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","string ","|"," undefined",">"))}f.isMDXComponent=!0}}]);