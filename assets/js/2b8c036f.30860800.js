"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[57878],{50158:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>u});var t=r(46393);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?t.createElement(f,s(s({ref:n},l),{},{components:r})):t.createElement(f,s({ref:n},l))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50581:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=r(20216),o=(r(46393),r(50158));const a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,i={unversionedId:"pages/node-core-library.ijsonschemafromfileoptions.dependentschemas",id:"pages/node-core-library.ijsonschemafromfileoptions.dependentschemas",title:"node-core-library.ijsonschemafromfileoptions.dependentschemas",description:"Home &gt; @rushstack/node-core-library &gt; IJsonSchemaFromFileOptions &gt; dependentSchemas",source:"@site/docs/pages/node-core-library.ijsonschemafromfileoptions.dependentschemas.md",sourceDirName:"pages",slug:"/pages/node-core-library.ijsonschemafromfileoptions.dependentschemas",permalink:"/pages/node-core-library.ijsonschemafromfileoptions.dependentschemas",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},p=[{value:"IJsonSchemaFromFileOptions.dependentSchemas property",id:"ijsonschemafromfileoptionsdependentschemas-property",level:2},{value:"Remarks",id:"remarks",level:2}],l={toc:p};function m(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.ijsonschemafromfileoptions"},"IJsonSchemaFromFileOptions")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/node-core-library.ijsonschemafromfileoptions.dependentschemas"},"dependentSchemas")),(0,o.kt)("h2",{id:"ijsonschemafromfileoptionsdependentschemas-property"},"IJsonSchemaFromFileOptions.dependentSchemas property"),(0,o.kt)("p",null,'Other schemas that this schema references, e.g. via the "$ref" directive.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"dependentSchemas?: JsonSchema[];\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,'The tree of dependent schemas may reference the same schema more than once. However, if the same schema "id" is used by two different JsonSchema instances, an error will be reported. This means you cannot load the same filename twice and use them both together, and you cannot have diamond dependencies on different versions of the same schema. Although technically this would be possible to support, it normally indicates an error or design problem.'),(0,o.kt)("p",null,"JsonSchema also does not allow circular references between schema dependencies."))}m.isMDXComponent=!0}}]);