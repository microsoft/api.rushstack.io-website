"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[62776],{50158:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>g});var t=a(46393);function p(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){p(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,p=function(e,r){if(null==e)return{};var a,t,p={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(p[a]=e[a]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var s=t.createContext({}),l=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),g=p,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?t.createElement(f,n(n({ref:r},c),{},{components:a})):t.createElement(f,n({ref:r},c))}));function g(e,r){var a=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var o=a.length,n=new Array(o);n[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,n[1]=i;for(var l=2;l<o;l++)n[l]=a[l];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27587:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=a(20216),p=(a(46393),a(50158));const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},n=void 0,i={unversionedId:"pages/rush-lib.approvedpackagespolicy.browserapprovedpackages",id:"pages/rush-lib.approvedpackagespolicy.browserapprovedpackages",title:"rush-lib.approvedpackagespolicy.browserapprovedpackages",description:"Home &gt; @microsoft/rush-lib &gt; ApprovedPackagesPolicy &gt; browserApprovedPackages",source:"@site/docs/pages/rush-lib.approvedpackagespolicy.browserapprovedpackages.md",sourceDirName:"pages",slug:"/pages/rush-lib.approvedpackagespolicy.browserapprovedpackages",permalink:"/pages/rush-lib.approvedpackagespolicy.browserapprovedpackages",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},l=[{value:"ApprovedPackagesPolicy.browserApprovedPackages property",id:"approvedpackagespolicybrowserapprovedpackages-property",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:l};function u(e){let{components:r,...a}=e;return(0,p.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/rush-lib.approvedpackagespolicy"},"ApprovedPackagesPolicy")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/rush-lib.approvedpackagespolicy.browserapprovedpackages"},"browserApprovedPackages")),(0,p.kt)("h2",{id:"approvedpackagespolicybrowserapprovedpackages-property"},"ApprovedPackagesPolicy.browserApprovedPackages property"),(0,p.kt)("p",null,"Packages approved for usage in a web browser. This is the stricter of the two types, so by default all new packages are added to this file."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"get browserApprovedPackages(): ApprovedPackagesConfiguration;\n")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This is part of an optional approval workflow, whose purpose is to review any new dependencies that are introduced (e.g. maybe a legal review is required, or maybe we are trying to minimize bloat). When Rush discovers a new dependency has been added to package.json, it will update the file. The intent is that the file will be stored in Git and tracked by a branch policy that notifies reviewers when a PR attempts to modify the file."),(0,p.kt)("p",null,"Example filename: ",(0,p.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\config\\rush\\browser-approved-packages.json")))}u.isMDXComponent=!0}}]);