"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[7331],{45242:function(e,a,n){n.d(a,{Zo:function(){return s},kt:function(){return k}});var t=n(63929);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},s=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,g=d["".concat(i,".").concat(k)]||d[k]||u[k]||o;return n?t.createElement(g,l(l({ref:a},s),{},{components:n})):t.createElement(g,l({ref:a},s))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60440:function(e,a,n){n.r(a),n.d(a,{assets:function(){return s},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var t=n(50394),r=n(51614),o=(n(63929),n(45242)),l=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,c={unversionedId:"pages/node-core-library.packagejsonlookup.loadownpackagejson",id:"pages/node-core-library.packagejsonlookup.loadownpackagejson",title:"node-core-library.packagejsonlookup.loadownpackagejson",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; loadOwnPackageJson",source:"@site/docs/pages/node-core-library.packagejsonlookup.loadownpackagejson.md",sourceDirName:"pages",slug:"/pages/node-core-library.packagejsonlookup.loadownpackagejson",permalink:"/pages/node-core-library.packagejsonlookup.loadownpackagejson",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},u=[{value:"PackageJsonLookup.loadOwnPackageJson() method",id:"packagejsonlookuploadownpackagejson-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],d={toc:u};function k(e){var a=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup.loadownpackagejson"},"loadOwnPackageJson")),(0,o.kt)("h2",{id:"packagejsonlookuploadownpackagejson-method"},"PackageJsonLookup.loadOwnPackageJson() method"),(0,o.kt)("p",null,"A helper for loading the caller's own package.json file."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static loadOwnPackageJson(dirnameOfCaller: string): IPackageJson;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dirnameOfCaller"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The NodeJS ",(0,o.kt)("code",null,"_","_","dirname")," macro for the caller.")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.ipackagejson"},"IPackageJson")),(0,o.kt)("p",null,"This function always returns a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"IPackageJson")," object. If any problems are encountered during loading, an exception will be thrown instead."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This function provides a concise and efficient way for an NPM package to report metadata about itself. For example, a tool might want to report its version."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"loadOwnPackageJson()")," probes upwards from the caller's folder, expecting to find a package.json file, which is assumed to be the caller's package. The result is cached, under the assumption that a tool's own package.json (and intermediary folders) will never change during the lifetime of the process."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Report the version of our NPM package\nconst myPackageVersion: string = PackageJsonLookup.loadOwnPackageJson(__dirname).version;\nconsole.log(`Cool Tool - Version ${myPackageVersion}`);\n")))}k.isMDXComponent=!0}}]);