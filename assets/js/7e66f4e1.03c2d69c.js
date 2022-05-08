"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[50650],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(63929);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=i,h=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18518:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=r(50394),i=r(51614),a=(r(63929),r(45242)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,u={unversionedId:"pages/rush-lib.rushconfiguration.committedshrinkwrapfilename",id:"pages/rush-lib.rushconfiguration.committedshrinkwrapfilename",title:"rush-lib.rushconfiguration.committedshrinkwrapfilename",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; committedShrinkwrapFilename",source:"@site/docs/pages/rush-lib.rushconfiguration.committedshrinkwrapfilename.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfiguration.committedshrinkwrapfilename",permalink:"/pages/rush-lib.rushconfiguration.committedshrinkwrapfilename",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"RushConfiguration.committedShrinkwrapFilename property",id:"rushconfigurationcommittedshrinkwrapfilename-property",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration.committedshrinkwrapfilename"},"committedShrinkwrapFilename")),(0,a.kt)("h2",{id:"rushconfigurationcommittedshrinkwrapfilename-property"},"RushConfiguration.committedShrinkwrapFilename property"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,a.kt)("p",{parentName:"blockquote"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"getCommittedShrinkwrapFilename")," instead, which gets the correct common shrinkwrap file name for a given active variant.")),(0,a.kt)("p",null,'The full path of the shrinkwrap file that is tracked by Git. (The "rush install" command uses a temporary copy, whose path is tempShrinkwrapFilename.)'),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"get committedShrinkwrapFilename(): string;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This property merely reports the filename; the file itself may not actually exist. Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\npm-shrinkwrap.json")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\pnpm-lock.yaml")))}f.isMDXComponent=!0}}]);