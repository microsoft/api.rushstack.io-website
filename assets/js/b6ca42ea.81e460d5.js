"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[69651],{45242:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return h}});var a=r(63929);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(r),h=n,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||l;return r?a.createElement(m,o(o({ref:e},c),{},{components:r})):a.createElement(m,o({ref:e},c))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77946:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=r(95464),n=r(20134),l=(r(63929),r(45242)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/node-core-library.path",id:"pages/node-core-library.path",title:"node-core-library.path",description:"Home &gt; @rushstack/node-core-library &gt; Path",source:"@site/docs/pages/node-core-library.path.md",sourceDirName:"pages",slug:"/pages/node-core-library.path",permalink:"/pages/node-core-library.path",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},d=[{value:"Path class",id:"path-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],u={toc:d};function h(t){var e=t.components,r=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.path"},"Path")),(0,l.kt)("h2",{id:"path-class"},"Path class"),(0,l.kt)("p",null,"Common operations for manipulating file and directory paths."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Path\n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,'This API is intended to eventually be a complete replacement for the NodeJS "path" API.'),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.path.converttobackslashes"},"convertToBackslashes(inputPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Replaces POSIX-style slashes with Windows-style backslashes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.path.converttoslashes"},"convertToSlashes(inputPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Replaces Windows-style backslashes with POSIX-style slashes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.path.formatconcisely"},"formatConcisely(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Formats a path to look nice for reporting purposes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.path.isdownwardrelative"},"isDownwardRelative(inputPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the specified path is a relative path and does not use ",(0,l.kt)("code",null,"..")," to walk upwards.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.path.isequal"},"isEqual(path1, path2)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if ",(0,l.kt)("code",null,"path1")," and ",(0,l.kt)("code",null,"path2")," refer to the same underlying path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.path.isunder"},"isUnder(childPath, parentFolderPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},'Returns true if "childPath" is located inside the "parentFolderPath" folder or one of its child folders. Note that "parentFolderPath" is not considered to be under itself. The "childPath" can refer to any type of file system object.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.path.isunderorequal"},"isUnderOrEqual(childPath, parentFolderPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},'Returns true if "childPath" is equal to "parentFolderPath", or if it is inside that folder or one of its children. The "childPath" can refer to any type of file system object.')))))}h.isMDXComponent=!0}}]);