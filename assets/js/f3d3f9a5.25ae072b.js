"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[30093],{50158:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(46393);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(a),m=n,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(g,l(l({ref:e},c),{},{components:a})):r.createElement(g,l({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38353:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(20216),n=(a(46393),a(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,o={unversionedId:"pages/index",id:"pages/index",title:"index",description:"Home",source:"@site/docs/pages/index.md",sourceDirName:"pages",slug:"/pages/",permalink:"/pages/",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"API Reference",id:"api-reference",level:2},{value:"Packages",id:"packages",level:2}],c={toc:s};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h2",{id:"packages"},"Packages"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Package"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/api-documenter"},"@microsoft/api-documenter")),(0,n.kt)("td",{parentName:"tr",align:null},"API Documenter generates an API reference website from the .api.json files created by API Extractor. The ",(0,n.kt)("code",null,"@microsoft/api-documenter")," package provides the command-line tool. It also exposes a developer API that you can use to create plugins that customize how API Documenter generates documentation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/api-extractor"},"@microsoft/api-extractor")),(0,n.kt)("td",{parentName:"tr",align:null},"API Extractor helps with validation, documentation, and reviewing of the exported API for a TypeScript library. The ",(0,n.kt)("code",null,"@microsoft/api-extractor")," package provides the command-line tool. It also exposes a developer API that you can use to invoke API Extractor programmatically.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")),(0,n.kt)("td",{parentName:"tr",align:null},"Use this library to read and write ","*",".api.json files as defined by the ",(0,n.kt)("a",{parentName:"td",href:"https://api-extractor.com/"},"API Extractor")," tool. These files are used to generate a documentation website for your TypeScript package. The files store the API signatures and doc comments that were extracted from your package.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/rush-lib"},"@microsoft/rush-lib")),(0,n.kt)("td",{parentName:"tr",align:null},"A library for writing scripts that interact with the ",(0,n.kt)("a",{parentName:"td",href:"https://rushjs.io/"},"Rush")," tool.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/debug-certificate-manager"},"@rushstack/debug-certificate-manager")),(0,n.kt)("td",{parentName:"tr",align:null},"This package is used to manage debug certificates for development servers. It is used by ","[","@ microsoft/gulp-core-build-serve","]","(",(0,n.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/"},"https://www.npmjs.com/package/")," @ microsoft/gulp-core-build-serve) to generate and trust a certificate when HTTPS is turned on. This package provides the following utilities: - ",(0,n.kt)("code",null,"CertificateStore")," to handle retrieving and saving a debug certificate. - ",(0,n.kt)("code",null,"CertificateManager")," is a utility class containing the following public methods: ","|"," - ",(0,n.kt)("code",null,"ensureCertificate")," will find or optionally create a debug certificate and trust it. ","|"," - ",(0,n.kt)("code",null,"untrustCertificate")," will untrust a debug certificate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/heft"},"@rushstack/heft")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/heft-config-file"},"@rushstack/heft-config-file")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/localization-plugin"},"@rushstack/localization-plugin")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/module-minifier-plugin"},"@rushstack/module-minifier-plugin")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/node-core-library"},"@rushstack/node-core-library")),(0,n.kt)("td",{parentName:"tr",align:null},"Core libraries that every NodeJS toolchain project should use.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/package-deps-hash"},"@rushstack/package-deps-hash")),(0,n.kt)("td",{parentName:"tr",align:null},"This package builds a JSON object containing the git hashes of all files used to produce a given NPM package. The ",(0,n.kt)("a",{parentName:"td",href:"https://rushjs.io/"},"Rush")," tool uses this library to implement incremental build detection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/rig-package"},"@rushstack/rig-package")),(0,n.kt)("td",{parentName:"tr",align:null},"A system for sharing tool configurations between projects without duplicating config files.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/stream-collator"},"@rushstack/stream-collator")),(0,n.kt)("td",{parentName:"tr",align:null},"This library enables a tool to display live console output from multiple concurrent processes, while ensuring that their output does not get jumbled together.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/terminal"},"@rushstack/terminal")),(0,n.kt)("td",{parentName:"tr",align:null},"This library implements a system for processing human readable text that will be output by console applications.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/tree-pattern"},"@rushstack/tree-pattern")),(0,n.kt)("td",{parentName:"tr",align:null},"A fast, lightweight pattern matcher for tree structures such as an Abstract Syntax Tree (AST).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")),(0,n.kt)("td",{parentName:"tr",align:null},"An object-oriented command-line parser for TypeScript projects.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/pages/typings-generator"},"@rushstack/typings-generator")),(0,n.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);