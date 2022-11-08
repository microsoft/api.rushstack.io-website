"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[93456],{50158:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>k});var n=t(46393);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),i=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=i(e.components);return n.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(t),k=r,g=d["".concat(c,".").concat(k)]||d[k]||u[k]||o;return t?n.createElement(g,l(l({ref:a},s),{},{components:t})):n.createElement(g,l({ref:a},s))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67160:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=t(20216),r=(t(46393),t(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"pages/node-core-library.packagejsonlookup.loadnodepackagejson",id:"pages/node-core-library.packagejsonlookup.loadnodepackagejson",title:"node-core-library.packagejsonlookup.loadnodepackagejson",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; loadNodePackageJson",source:"@site/docs/pages/node-core-library.packagejsonlookup.loadnodepackagejson.md",sourceDirName:"pages",slug:"/pages/node-core-library.packagejsonlookup.loadnodepackagejson",permalink:"/pages/node-core-library.packagejsonlookup.loadnodepackagejson",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},i=[{value:"PackageJsonLookup.loadNodePackageJson() method",id:"packagejsonlookuploadnodepackagejson-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:i};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup.loadnodepackagejson"},"loadNodePackageJson")),(0,r.kt)("h2",{id:"packagejsonlookuploadnodepackagejson-method"},"PackageJsonLookup.loadNodePackageJson() method"),(0,r.kt)("p",null,"This function is similar to ",(0,r.kt)("a",{parentName:"p",href:"/pages/node-core-library.packagejsonlookup.loadpackagejson"},"PackageJsonLookup.loadPackageJson()")," , except that it does not report an error if the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," field is missing from the package.json file."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"loadNodePackageJson(jsonFilename: string): INodePackageJson;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonFilename"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("b",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pages/node-core-library.inodepackagejson"},"INodePackageJson")))}u.isMDXComponent=!0}}]);