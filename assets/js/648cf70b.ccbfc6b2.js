"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[60990],{50158:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),p=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,s=c["".concat(g,".").concat(u)]||c[u]||f[u]||l;return r?a.createElement(s,i(i({ref:t},d),{},{components:r})):a.createElement(s,i({ref:t},d))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>g,toc:()=>d});var a=r(29122),n=r(46393),l=r(50158);const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,g={unversionedId:"pages/rig-package.irigconfig",id:"pages/rig-package.irigconfig",title:"rig-package.irigconfig",description:"Home &gt; @rushstack/rig-package &gt; IRigConfig",source:"@site/docs/pages/rig-package.irigconfig.md",sourceDirName:"pages",slug:"/pages/rig-package.irigconfig",permalink:"/pages/rig-package.irigconfig",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},d=[{value:"IRigConfig interface",id:"irigconfig-interface",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:d},f="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(f,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rig-package"},"@rushstack/rig-package")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rig-package.irigconfig"},"IRigConfig")),(0,l.kt)("h2",{id:"irigconfig-interface"},"IRigConfig interface"),(0,l.kt)("p",null,"This is the main API for loading the ",(0,l.kt)("inlineCode",{parentName:"p"},"config/rig.json")," file format."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IRigConfig \n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.filepath"},"filePath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The full path to the ",(0,l.kt)("code",null,"rig.json")," file that was found, or ",(0,l.kt)("code",null,'"','"')," if none was found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.projectfolderoriginalpath"},"projectFolderOriginalPath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The project folder path that was passed to ",(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.rigconfig.loadforprojectfolder"},"RigConfig.loadForProjectFolder()"),(0,l.kt)(n.Fragment,null),", which maybe an absolute or relative path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.projectfolderpath"},"projectFolderPath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The absolute path for the project folder path that was passed to ",(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.rigconfig.loadforprojectfolder"},"RigConfig.loadForProjectFolder()"),(0,l.kt)(n.Fragment,null),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.relativeprofilefolderpath"},"relativeProfileFolderPath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The relative path to the rig profile specified by ",(0,l.kt)("code",null,"rig.json"),", or ",(0,l.kt)("code",null,'"','"')," if the file was not found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.rigfound"},"rigFound")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("code",null,"true")," if ",(0,l.kt)("code",null,"config/rig.json")," was found, or ",(0,l.kt)("code",null,"false")," otherwise.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.rigpackagename"},"rigPackageName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("code",null,'"',"rigPackageName",'"')," field from ",(0,l.kt)("code",null,"rig.json"),", or ",(0,l.kt)("code",null,'"','"')," if the file was not found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.rigprofile"},"rigProfile")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("code",null,'"',"rigProfile",'"')," value that was loaded from ",(0,l.kt)("code",null,"rig.json"),", or ",(0,l.kt)("code",null,'"','"')," if the file was not found.")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.getresolvedprofilefolder"},"getResolvedProfileFolder()")),(0,l.kt)("td",{parentName:"tr",align:null},"Performs Node.js module resolution to locate the rig package folder, then returns the absolute path of the rig profile folder specified by ",(0,l.kt)("code",null,"rig.json"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.getresolvedprofilefolderasync"},"getResolvedProfileFolderAsync()")),(0,l.kt)("td",{parentName:"tr",align:null},"An async variant of ",(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.getresolvedprofilefolder"},"IRigConfig.getResolvedProfileFolder()"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.tryresolveconfigfilepath"},"tryResolveConfigFilePath(configFileRelativePath)")),(0,l.kt)("td",{parentName:"tr",align:null},"This lookup first checks for the specified relative path under ",(0,l.kt)("code",null,"projectFolderPath"),"; if it does not exist there, then it checks in the resolved rig profile folder. If the file is found, its absolute path is returned. Otherwise, ",(0,l.kt)("code",null,"undefined")," is returned.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.tryresolveconfigfilepathasync"},"tryResolveConfigFilePathAsync(configFileRelativePath)")),(0,l.kt)("td",{parentName:"tr",align:null},"An async variant of ",(0,l.kt)("a",{parentName:"td",href:"/pages/rig-package.irigconfig.tryresolveconfigfilepath"},"IRigConfig.tryResolveConfigFilePath()"))))))}u.isMDXComponent=!0}}]);