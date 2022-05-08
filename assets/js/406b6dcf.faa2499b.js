"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[41174],{45242:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return f}});var r=a(63929);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),l=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=l(a),f=n,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return a?r.createElement(m,i(i({ref:e},s),{},{components:a})):r.createElement(m,i({ref:e},s))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8846:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=a(50394),n=a(51614),o=(a(63929),a(45242)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api-extractor.iconfigtsdocmetadata.tsdocmetadatafilepath",id:"pages/api-extractor.iconfigtsdocmetadata.tsdocmetadatafilepath",title:"api-extractor.iconfigtsdocmetadata.tsdocmetadatafilepath",description:"Home &gt; @microsoft/api-extractor &gt; IConfigTsdocMetadata &gt; tsdocMetadataFilePath",source:"@site/docs/pages/api-extractor.iconfigtsdocmetadata.tsdocmetadatafilepath.md",sourceDirName:"pages",slug:"/pages/api-extractor.iconfigtsdocmetadata.tsdocmetadatafilepath",permalink:"/pages/api-extractor.iconfigtsdocmetadata.tsdocmetadatafilepath",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},d=[{value:"IConfigTsdocMetadata.tsdocMetadataFilePath property",id:"iconfigtsdocmetadatatsdocmetadatafilepath-property",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:d};function f(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor.iconfigtsdocmetadata"},"IConfigTsdocMetadata")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor.iconfigtsdocmetadata.tsdocmetadatafilepath"},"tsdocMetadataFilePath")),(0,o.kt)("h2",{id:"iconfigtsdocmetadatatsdocmetadatafilepath-property"},"IConfigTsdocMetadata.tsdocMetadataFilePath property"),(0,o.kt)("p",null,"Specifies where the TSDoc metadata file should be written."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"tsdocMetadataFilePath?: string;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The path is resolved relative to the folder of the config file that contains the setting; to change this, prepend a folder token such as ",(0,o.kt)("inlineCode",{parentName:"p"},"<projectFolder>")," ."),(0,o.kt)("p",null,"The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"<lookup>")," , which causes the path to be automatically inferred from the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsdocMetadata")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"typings")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," fields of the project's package.json. If none of these fields are set, the lookup falls back to ",(0,o.kt)("inlineCode",{parentName:"p"},"tsdoc-metadata.json")," in the package folder."))}f.isMDXComponent=!0}}]);