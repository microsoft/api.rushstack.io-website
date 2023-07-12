"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[77879],{50158:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),g=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=g(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=g(t),u=o,d=c["".concat(p,".").concat(u)]||c[u]||f[u]||i;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=t[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22273:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=t(29122),o=t(46393),i=t(50158);const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"pages/rig-package.irigconfig.getresolvedprofilefolder",id:"pages/rig-package.irigconfig.getresolvedprofilefolder",title:"rig-package.irigconfig.getresolvedprofilefolder",description:"Home &gt; @rushstack/rig-package &gt; IRigConfig &gt; getResolvedProfileFolder",source:"@site/docs/pages/rig-package.irigconfig.getresolvedprofilefolder.md",sourceDirName:"pages",slug:"/pages/rig-package.irigconfig.getresolvedprofilefolder",permalink:"/pages/rig-package.irigconfig.getresolvedprofilefolder",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},g={},s=[{value:"IRigConfig.getResolvedProfileFolder() method",id:"irigconfiggetresolvedprofilefolder-method",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:s},f="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(f,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rig-package"},"@rushstack/rig-package")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rig-package.irigconfig"},"IRigConfig")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rig-package.irigconfig.getresolvedprofilefolder"},"getResolvedProfileFolder")),(0,i.kt)("h2",{id:"irigconfiggetresolvedprofilefolder-method"},"IRigConfig.getResolvedProfileFolder() method"),(0,i.kt)("p",null,"Performs Node.js module resolution to locate the rig package folder, then returns the absolute path of the rig profile folder specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"rig.json"),(0,i.kt)(o.Fragment,null),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getResolvedProfileFolder(): string;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"string"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"If no ",(0,i.kt)("inlineCode",{parentName:"p"},"rig.json")," file was found, then this method throws an error. The first time this method is called, the result is cached and will be returned by all subsequent calls."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/your-project/node_modules/example-rig/profiles/example-profile")))}u.isMDXComponent=!0}}]);