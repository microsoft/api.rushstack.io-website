"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[32537],{45242:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(n),f=a,d=h["".concat(p,".").concat(f)]||h[f]||c[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44015:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(50394),a=n(51614),o=(n(63929),n(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"pages/rush-lib.ilaunchoptions",id:"pages/rush-lib.ilaunchoptions",title:"rush-lib.ilaunchoptions",description:"Home &gt; @microsoft/rush-lib &gt; ILaunchOptions",source:"@site/docs/pages/rush-lib.ilaunchoptions.md",sourceDirName:"pages",slug:"/pages/rush-lib.ilaunchoptions",permalink:"/pages/rush-lib.ilaunchoptions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},c=[{value:"ILaunchOptions interface",id:"ilaunchoptions-interface",level:2},{value:"Properties",id:"properties",level:2}],h={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/rush-lib.ilaunchoptions"},"ILaunchOptions")),(0,o.kt)("h2",{id:"ilaunchoptions-interface"},"ILaunchOptions interface"),(0,o.kt)("p",null,'Options to pass to the rush "launch" functions.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ILaunchOptions\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/rush-lib.ilaunchoptions.alreadyreportednodetoonewerror"},"alreadyReportedNodeTooNewError?")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," If true, the wrapper process already printed a warning that the version of Node.js hasn't been tested with this version of Rush, so we shouldn't print a similar error.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/rush-lib.ilaunchoptions.ismanaged"},"isManaged")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},'True if the tool was invoked from within a project with a rush.json file, otherwise false. We consider a project without a rush.json to be "unmanaged" and we\'ll print that to the command line when the tool is executed. This is mainly used for debugging purposes.')))))}f.isMDXComponent=!0}}]);