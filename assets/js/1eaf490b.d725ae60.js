"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[82390],{45242:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(63929);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=s(a),m=r,g=k["".concat(p,".").concat(m)]||k[m]||c[m]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},57760:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=a(50394),r=a(51614),o=(a(63929),a(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/node-core-library.inodepackagejson",id:"pages/node-core-library.inodepackagejson",title:"node-core-library.inodepackagejson",description:"Home &gt; @rushstack/node-core-library &gt; INodePackageJson",source:"@site/docs/pages/node-core-library.inodepackagejson.md",sourceDirName:"pages",slug:"/pages/node-core-library.inodepackagejson",permalink:"/pages/node-core-library.inodepackagejson",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},d={},c=[{value:"INodePackageJson interface",id:"inodepackagejson-interface",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2}],k={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.inodepackagejson"},"INodePackageJson")),(0,o.kt)("h2",{id:"inodepackagejson-interface"},"INodePackageJson interface"),(0,o.kt)("p",null,"An interface for accessing common fields from a package.json file whose version field may be missing."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface INodePackageJson\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This interface is the same as ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.ipackagejson"},"IPackageJson")," , except that the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," field is optional. According to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"NPM documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"http://wiki.commonjs.org/wiki/Packages/1.0"},"CommonJS Packages specification")," , the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," field is normally a required field for package.json files."),(0,o.kt)("p",null,"However, NodeJS relaxes this requirement for its ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," API. The ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_folders_as_modules"},'"Folders as Modules" section')," from the NodeJS documentation gives an example of a package.json file that has only the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," fields. NodeJS does not consider the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," field during resolution, so it can be omitted. Some libraries do this."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"INodePackageJson")," interface when loading such files. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"IPackageJson")," for package.json files that are installed from an NPM registry, or are otherwise known to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," field."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.bin"},"bin?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," The main entry point for the package.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.dependencies"},"dependencies?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsondependencytable"},"IPackageJsonDependencyTable")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," An array of dependencies that must always be installed for this package.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.description"},"description?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," A brief description of the package.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.devdependencies"},"devDependencies?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsondependencytable"},"IPackageJsonDependencyTable")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," An array of dependencies that must only be installed for developers who will build this package.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.homepage"},"homepage?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," The URL to the project's web page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.license"},"license?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," The name of the license.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.main"},"main?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," The path to the module file that will act as the main entry point.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.name"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the package.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.optionaldependencies"},"optionalDependencies?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsondependencytable"},"IPackageJsonDependencyTable")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," An array of optional dependencies that may be installed for this package.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.peerdependencies"},"peerDependencies?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsondependencytable"},"IPackageJsonDependencyTable")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," An array of dependencies that must be installed by a consumer of this package, but which will not be automatically installed by this package.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.private"},"private?")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," Indicates whether this package is allowed to be published or not.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.repository"},"repository?")),(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsonrepository"},"IPackageJsonRepository")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," The URL of the project's repository.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.resolutions"},"resolutions?")),(0,o.kt)("td",{parentName:"tr",align:null},"Record","<","string, string",">"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," A table of package version resolutions. This feature is only implemented by the Yarn package manager.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.scripts"},"scripts?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.ipackagejsonscripttable"},"IPackageJsonScriptTable")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," A table of script hooks that a package manager or build tool may invoke.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.tsdocmetadata"},"tsdocMetadata?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," ",(0,o.kt)("i",null,"(Optional)")," The path to the TSDoc metadata file. This is still being standardized: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/tsdoc/issues/7%5C#issuecomment-442271815"},"https://github.com/microsoft/tsdoc/issues/7\\#issuecomment-442271815"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.types"},"types?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," The path to the TypeScript ","*",".d.ts file describing the module file that will act as the main entry point.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.typings"},"typings?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," Alias for ",(0,o.kt)("code",null,"types"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/node-core-library.inodepackagejson.version"},"version?")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," A version number conforming to the Semantic Versioning (SemVer) standard.")))))}m.isMDXComponent=!0}}]);