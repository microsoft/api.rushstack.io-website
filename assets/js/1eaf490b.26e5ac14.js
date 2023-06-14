"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[82390],{50158:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,g=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},77655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(29122),r=a(46393),l=a(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"pages/node-core-library.inodepackagejson",id:"pages/node-core-library.inodepackagejson",title:"node-core-library.inodepackagejson",description:"Home &gt; @rushstack/node-core-library &gt; INodePackageJson",source:"@site/docs/pages/node-core-library.inodepackagejson.md",sourceDirName:"pages",slug:"/pages/node-core-library.inodepackagejson",permalink:"/pages/node-core-library.inodepackagejson",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},d={},s=[{value:"INodePackageJson interface",id:"inodepackagejson-interface",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2}],m={toc:s},c="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.inodepackagejson"},"INodePackageJson")),(0,l.kt)("h2",{id:"inodepackagejson-interface"},"INodePackageJson interface"),(0,l.kt)("p",null,"An interface for accessing common fields from a package.json file whose version field may be missing."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface INodePackageJson \n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"This interface is the same as ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.ipackagejson"},"IPackageJson"),(0,l.kt)(r.Fragment,null),", except that the ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," field is optional. According to the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"NPM documentation")," and ",(0,l.kt)("a",{parentName:"p",href:"http://wiki.commonjs.org/wiki/Packages/1.0"},"CommonJS Packages specification"),(0,l.kt)(r.Fragment,null),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," field is normally a required field for package.json files."),(0,l.kt)("p",null,"However, NodeJS relaxes this requirement for its ",(0,l.kt)("inlineCode",{parentName:"p"},"require()")," API. The ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_folders_as_modules"},'"Folders as Modules" section')," from the NodeJS documentation gives an example of a package.json file that has only the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," fields. NodeJS does not consider the ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," field during resolution, so it can be omitted. Some libraries do this."),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"INodePackageJson")," interface when loading such files. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"IPackageJson")," for package.json files that are installed from an NPM registry, or are otherwise known to have a ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," field."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.bin"},"bin?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," The main entry point for the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.dependencies"},"dependencies?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsondependencytable"},"IPackageJsonDependencyTable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," An array of dependencies that must always be installed for this package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.description"},"description?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," A brief description of the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.devdependencies"},"devDependencies?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsondependencytable"},"IPackageJsonDependencyTable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," An array of dependencies that must only be installed for developers who will build this package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.homepage"},"homepage?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," The URL to the project's web page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.license"},"license?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," The name of the license.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.main"},"main?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," The path to the module file that will act as the main entry point.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.name"},"name")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.optionaldependencies"},"optionalDependencies?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsondependencytable"},"IPackageJsonDependencyTable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," An array of optional dependencies that may be installed for this package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.peerdependencies"},"peerDependencies?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsondependencytable"},"IPackageJsonDependencyTable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," An array of dependencies that must be installed by a consumer of this package, but which will not be automatically installed by this package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.private"},"private?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," Indicates whether this package is allowed to be published or not.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.repository"},"repository?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsonrepository"},"IPackageJsonRepository")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," The URL of the project's repository.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.resolutions"},"resolutions?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Record","<","string, string",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," A table of package version resolutions. This feature is only implemented by the Yarn package manager.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.scripts"},"scripts?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsonscripttable"},"IPackageJsonScriptTable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," A table of script hooks that a package manager or build tool may invoke.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.tsdocmetadata"},"tsdocMetadata?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"(BETA)"))," ",(0,l.kt)("em",{parentName:"td"},"(Optional)")," The path to the TSDoc metadata file. This is still being standardized: ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/microsoft/tsdoc/issues/7%5C#issuecomment-442271815"},"https://github.com/microsoft/tsdoc/issues/7\\#issuecomment-442271815"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.types"},"types?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," The path to the TypeScript ","*",".d.ts file describing the module file that will act as the main entry point.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.typings"},"typings?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," Alias for ",(0,l.kt)("code",null,"types"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.version"},"version?")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"(Optional)")," A version number conforming to the Semantic Versioning (SemVer) standard.")))))}k.isMDXComponent=!0}}]);