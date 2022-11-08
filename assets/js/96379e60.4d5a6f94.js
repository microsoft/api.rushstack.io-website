"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[72040],{50158:(e,a,r)=>{r.d(a,{Zo:()=>s,kt:()=>k});var t=r(46393);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),i=function(e){var a=t.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},s=function(e){var a=i(e.components);return t.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(r),k=o,g=d["".concat(c,".").concat(k)]||d[k]||u[k]||n;return r?t.createElement(g,l(l({ref:a},s),{},{components:r})):t.createElement(g,l({ref:a},s))}));function k(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<n;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45099:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var t=r(20216),o=(r(46393),r(50158));const n={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"pages/node-core-library.packagejsonlookup.tryloadpackagejsonfor",id:"pages/node-core-library.packagejsonlookup.tryloadpackagejsonfor",title:"node-core-library.packagejsonlookup.tryloadpackagejsonfor",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; tryLoadPackageJsonFor",source:"@site/docs/pages/node-core-library.packagejsonlookup.tryloadpackagejsonfor.md",sourceDirName:"pages",slug:"/pages/node-core-library.packagejsonlookup.tryloadpackagejsonfor",permalink:"/pages/node-core-library.packagejsonlookup.tryloadpackagejsonfor",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},i=[{value:"PackageJsonLookup.tryLoadPackageJsonFor() method",id:"packagejsonlookuptryloadpackagejsonfor-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:i};function u(e){let{components:a,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup.tryloadpackagejsonfor"},"tryLoadPackageJsonFor")),(0,o.kt)("h2",{id:"packagejsonlookuptryloadpackagejsonfor-method"},"PackageJsonLookup.tryLoadPackageJsonFor() method"),(0,o.kt)("p",null,"If the specified file or folder is part of a package, this loads and returns the associated package.json file."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"tryLoadPackageJsonFor(fileOrFolderPath: string): IPackageJson | undefined;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fileOrFolderPath"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"a relative or absolute path to a source file or folder that may be part of a package")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.ipackagejson"},"IPackageJson")," ","|"," undefined"),(0,o.kt)("p",null,"an IPackageJson object, or undefined if the fileOrFolderPath does not belong to a package"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The package folder is determined using the same algorithm as ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup.trygetpackagefolderfor"},"PackageJsonLookup.tryGetPackageFolderFor()")," ."))}u.isMDXComponent=!0}}]);