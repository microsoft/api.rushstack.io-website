"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[10437],{45242:function(t,n,e){e.d(n,{Zo:function(){return c},kt:function(){return h}});var r=e(63929);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=r.createContext({}),l=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},c=function(t){var n=l(t.components);return r.createElement(s.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),f=l(e),h=o,d=f["".concat(s,".").concat(h)]||f[h]||p[h]||a;return e?r.createElement(d,i(i({ref:n},c),{},{components:e})):r.createElement(d,i({ref:n},c))}));function h(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var a=e.length,i=new Array(a);i[0]=f;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var l=2;l<a;l++)i[l]=e[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},72209:function(t,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=e(50394),o=e(51614),a=(e(63929),e(45242)),i=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"pages/rush-lib.rushconfiguration.tryfindrushjsonlocation",id:"pages/rush-lib.rushconfiguration.tryfindrushjsonlocation",title:"rush-lib.rushconfiguration.tryfindrushjsonlocation",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; tryFindRushJsonLocation",source:"@site/docs/pages/rush-lib.rushconfiguration.tryfindrushjsonlocation.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfiguration.tryfindrushjsonlocation",permalink:"/pages/rush-lib.rushconfiguration.tryfindrushjsonlocation",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},p=[{value:"RushConfiguration.tryFindRushJsonLocation() method",id:"rushconfigurationtryfindrushjsonlocation-method",level:2},{value:"Parameters",id:"parameters",level:2}],f={toc:p};function h(t){var n=t.components,e=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfiguration.tryfindrushjsonlocation"},"tryFindRushJsonLocation")),(0,a.kt)("h2",{id:"rushconfigurationtryfindrushjsonlocation-method"},"RushConfiguration.tryFindRushJsonLocation() method"),(0,a.kt)("p",null,"Find the rush.json location and return the path, or undefined if a rush.json can't be found."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static tryFindRushJsonLocation(options?: ITryFindRushJsonLocationOptions): string | undefined;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/rush-lib.itryfindrushjsonlocationoptions"},"ITryFindRushJsonLocationOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"string ","|"," undefined"))}h.isMDXComponent=!0}}]);