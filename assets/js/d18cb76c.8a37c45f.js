"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[9230],{50158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(20216),n=(r(46393),r(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,i={unversionedId:"pages/api-extractor.consolemessageid",id:"pages/api-extractor.consolemessageid",title:"api-extractor.consolemessageid",description:"Home &gt; @microsoft/api-extractor &gt; ConsoleMessageId",source:"@site/docs/pages/api-extractor.consolemessageid.md",sourceDirName:"pages",slug:"/pages/api-extractor.consolemessageid",permalink:"/pages/api-extractor.consolemessageid",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"ConsoleMessageId enum",id:"consolemessageid-enum",level:2},{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor.consolemessageid"},"ConsoleMessageId")),(0,n.kt)("h2",{id:"consolemessageid-enum"},"ConsoleMessageId enum"),(0,n.kt)("p",null,"Unique identifiers for console messages reported by API Extractor."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum ConsoleMessageId\n")),(0,n.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Member"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ApiReportCopied"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-api-report-copied",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"You have changed the public API signature for this project. Updating ',"_","_","_",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ApiReportCreated"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-api-report-created",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"The API report file was missing, so a new file was created. Please add this file to Git: ',"_","_","_",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ApiReportFolderMissing"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-api-report-folder-missing",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"Unable to create the API report file. Please make sure the target folder exists: ',"_","_","_",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ApiReportNotCopied"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-api-report-not-copied",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"You have changed the public API signature for this project. Please copy the file ',"_","_","_"," to ","_","_","_",', or perform a local build (which does this automatically). See the Git repo documentation for more info." OR "The API report file is missing. Please copy the file ',"_","_","_"," to ","_","_","_",', or perform a local build (which does this automatically). See the Git repo documentation for more info."')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ApiReportUnchanged"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-api-report-unchanged",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"The API report is up to date: ',"_","_","_",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CompilerVersionNotice"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-compiler-version-notice",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"The target project appears to use TypeScript ',"_","_","_",' which is newer than the bundled compiler engine; consider upgrading API Extractor."')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Diagnostics"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-diagnostics",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'Used for the information printed when the "--diagnostics" flag is enabled.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FoundTSDocMetadata"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-found-tsdoc-metadata",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"Found metadata in ',"_","_","_",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Preamble"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-preamble",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"Analysis will use the bundled TypeScript version ',"_","_","_",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UsingCustomTSDocConfig"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-using-custom-tsdoc-config",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"Using custom TSDoc config from ',"_","_","_",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"WritingDocModelFile"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-writing-doc-model-file",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"Writing: ',"_","_","_",'"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"WritingDtsRollup"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,'"',"console-writing-dts-rollup",'"')),(0,n.kt)("td",{parentName:"tr",align:null},'"Writing package typings: ',"_","_","_",'"')))),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"These strings are possible values for the ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor.extractormessage.messageid"},"ExtractorMessage.messageId")," property when the ",(0,n.kt)("inlineCode",{parentName:"p"},"ExtractorMessage.category")," is ",(0,n.kt)("a",{parentName:"p",href:"/pages/api-extractor.extractormessagecategory"},"ExtractorMessageCategory.Console")," ."))}d.isMDXComponent=!0}}]);