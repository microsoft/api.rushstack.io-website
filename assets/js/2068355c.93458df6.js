"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[72226],{45242:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return v}});var t=r(63929);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),v=a,f=m["".concat(c,".").concat(v)]||m[v]||u[v]||i;return r?t.createElement(f,o(o({ref:n},l),{},{components:r})):t.createElement(f,o({ref:n},l))}));function v(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53791:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var t=r(95464),a=r(20134),i=(r(63929),r(45242)),o=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,p={unversionedId:"pages/node-core-library.environmentmap.casesensitive",id:"pages/node-core-library.environmentmap.casesensitive",title:"node-core-library.environmentmap.casesensitive",description:"Home &gt; @rushstack/node-core-library &gt; EnvironmentMap &gt; caseSensitive",source:"@site/docs/pages/node-core-library.environmentmap.casesensitive.md",sourceDirName:"pages",slug:"/pages/node-core-library.environmentmap.casesensitive",permalink:"/pages/node-core-library.environmentmap.casesensitive",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},l={},u=[{value:"EnvironmentMap.caseSensitive property",id:"environmentmapcasesensitive-property",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:u};function v(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library.environmentmap"},"EnvironmentMap")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/node-core-library.environmentmap.casesensitive"},"caseSensitive")),(0,i.kt)("h2",{id:"environmentmapcasesensitive-property"},"EnvironmentMap.caseSensitive property"),(0,i.kt)("p",null,"Whether the environment variable names are case-sensitive."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly caseSensitive: boolean;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"On Windows operating system, environment variables are case-insensitive. The map will preserve the variable name casing from the most recent assignment operation."))}v.isMDXComponent=!0}}]);