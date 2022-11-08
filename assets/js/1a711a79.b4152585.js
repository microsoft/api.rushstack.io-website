"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[3476],{50158:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(46393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=c(r),u=i,d=y["".concat(s,".").concat(u)]||y[u]||m[u]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},67749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(20216),i=(r(46393),r(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,o={unversionedId:"pages/node-core-library.filesystem.createsymboliclinkfile",id:"pages/node-core-library.filesystem.createsymboliclinkfile",title:"node-core-library.filesystem.createsymboliclinkfile",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem &gt; createSymbolicLinkFile",source:"@site/docs/pages/node-core-library.filesystem.createsymboliclinkfile.md",sourceDirName:"pages",slug:"/pages/node-core-library.filesystem.createsymboliclinkfile",permalink:"/pages/node-core-library.filesystem.createsymboliclinkfile",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},c=[{value:"FileSystem.createSymbolicLinkFile() method",id:"filesystemcreatesymboliclinkfile-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library.filesystem"},"FileSystem")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library.filesystem.createsymboliclinkfile"},"createSymbolicLinkFile")),(0,i.kt)("h2",{id:"filesystemcreatesymboliclinkfile-method"},"FileSystem.createSymbolicLinkFile() method"),(0,i.kt)("p",null,"Creates a symbolic link to a file. On Windows operating systems, this may require administrator elevation. Behind the scenes it uses ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.symlinkSync()")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static createSymbolicLinkFile(options: IFileSystemCreateLinkOptions): void;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/node-core-library.ifilesystemcreatelinkoptions"},"IFileSystemCreateLinkOptions")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"void"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"To avoid administrator elevation on Windows, use ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library.filesystem.createhardlink"},"FileSystem.createHardLink()")," instead."),(0,i.kt)("p",null,"On Windows operating systems, the NTFS file system distinguishes file symlinks versus directory symlinks: If the target is not the correct type, the symlink will be created successfully, but will fail to resolve. Other operating systems do not make this distinction, in which case ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library.filesystem.createsymboliclinkfile"},"FileSystem.createSymbolicLinkFile()")," and ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library.filesystem.createsymboliclinkfolder"},"FileSystem.createSymbolicLinkFolder()")," can be used interchangeably, but doing so will make your tool incompatible with Windows."))}m.isMDXComponent=!0}}]);