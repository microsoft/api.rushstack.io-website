"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[9111],{50158:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(46393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||g[d]||p;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(20216),n=a(46393),p=a(50158);const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,l={unversionedId:"pages/package-deps-hash.getrepochanges",id:"pages/package-deps-hash.getrepochanges",title:"package-deps-hash.getrepochanges",description:"Home &gt; @rushstack/package-deps-hash &gt; getRepoChanges",source:"@site/docs/pages/package-deps-hash.getrepochanges.md",sourceDirName:"pages",slug:"/pages/package-deps-hash.getrepochanges",permalink:"/pages/package-deps-hash.getrepochanges",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},c=[{value:"getRepoChanges() function",id:"getrepochanges-function",level:2},{value:"Parameters",id:"parameters",level:2}],g={toc:c};function u(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/package-deps-hash"},"@rushstack/package-deps-hash")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/package-deps-hash.getrepochanges"},"getRepoChanges")),(0,p.kt)("h2",{id:"getrepochanges-function"},"getRepoChanges() function"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,p.kt)("p",null,"Find all changed files tracked by Git, their current hashes, and the nature of the change. Only useful if all changes are staged or committed."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function getRepoChanges(currentWorkingDirectory: string, revision?: string, gitPath?: string): Map<string, IFileDiffStatus>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"currentWorkingDirectory"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"The working directory. Only used to find the repository root.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"revision"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("em",{parentName:"td"},"(Optional)")," The Git revision specifier to detect changes relative to. Defaults to HEAD (i.e. will compare staged vs. committed) If comparing against a different branch, call ",(0,p.kt)("code",null,"git merge-base")," first to find the target commit.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"gitPath"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("em",{parentName:"td"},"(Optional)")," The path to the Git executable")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"Map","<","string, ",(0,p.kt)("a",{parentName:"p",href:"/pages/package-deps-hash.ifilediffstatus"},"IFileDiffStatus"),(0,p.kt)(n.Fragment,null),">"),(0,p.kt)("p",null,"A map from the Git file path to the corresponding file change metadata"))}u.isMDXComponent=!0}}]);