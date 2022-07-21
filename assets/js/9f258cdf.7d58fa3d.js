"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[46038],{45242:function(e,r,t){t.d(r,{Zo:function(){return g},kt:function(){return f}});var n=t(63929);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},g=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,d=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return t?n.createElement(d,a(a({ref:r},g),{},{components:t})):n.createElement(d,a({ref:r},g))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87034:function(e,r,t){t.r(r),t.d(r,{assets:function(){return g},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=t(50394),o=t(51614),i=(t(63929),t(45242)),a=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"pages/rig-package.rigconfig.getresolvedprofilefolder",id:"pages/rig-package.rigconfig.getresolvedprofilefolder",title:"rig-package.rigconfig.getresolvedprofilefolder",description:"Home &gt; @rushstack/rig-package &gt; RigConfig &gt; getResolvedProfileFolder",source:"@site/docs/pages/rig-package.rigconfig.getresolvedprofilefolder.md",sourceDirName:"pages",slug:"/pages/rig-package.rigconfig.getresolvedprofilefolder",permalink:"/pages/rig-package.rigconfig.getresolvedprofilefolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},g={},s=[{value:"RigConfig.getResolvedProfileFolder() method",id:"rigconfiggetresolvedprofilefolder-method",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rig-package"},"@rushstack/rig-package")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rig-package.rigconfig"},"RigConfig")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/rig-package.rigconfig.getresolvedprofilefolder"},"getResolvedProfileFolder")),(0,i.kt)("h2",{id:"rigconfiggetresolvedprofilefolder-method"},"RigConfig.getResolvedProfileFolder() method"),(0,i.kt)("p",null,"Performs Node.js module resolution to locate the rig package folder, then returns the absolute path of the rig profile folder specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"rig.json")," ."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getResolvedProfileFolder(): string;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"string"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"If no ",(0,i.kt)("inlineCode",{parentName:"p"},"rig.json")," file was found, then this method throws an error. The first time this method is called, the result is cached and will be returned by all subsequent calls."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/your-project/node_modules/example-rig/profiles/example-profile")))}f.isMDXComponent=!0}}]);