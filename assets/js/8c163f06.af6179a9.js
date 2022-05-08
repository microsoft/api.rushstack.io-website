"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[14783],{45242:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var r=a(63929);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(a),g=n,d=f["".concat(o,".").concat(g)]||f[g]||s[g]||i;return a?r.createElement(d,c(c({ref:t},p),{},{components:a})):r.createElement(d,c({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<i;u++)c[u]=a[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},38520:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=a(50394),n=a(51614),i=(a(63929),a(45242)),c=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,u={unversionedId:"pages/debug-certificate-manager",id:"pages/debug-certificate-manager",title:"debug-certificate-manager",description:"Home &gt; @rushstack/debug-certificate-manager",source:"@site/docs/pages/debug-certificate-manager.md",sourceDirName:"pages",slug:"/pages/debug-certificate-manager",permalink:"/pages/debug-certificate-manager",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"debug-certificate-manager package",id:"debug-certificate-manager-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2}],f={toc:s};function g(e){var t=e.components,a=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/debug-certificate-manager"},"@rushstack/debug-certificate-manager")),(0,i.kt)("h2",{id:"debug-certificate-manager-package"},"debug-certificate-manager package"),(0,i.kt)("p",null,"This package is used to manage debug certificates for development servers. It is used by ","[","@ microsoft/gulp-core-build-serve","]","(",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/"},"https://www.npmjs.com/package/")," @ microsoft/gulp-core-build-serve) to generate and trust a certificate when HTTPS is turned on."),(0,i.kt)("p",null,"This package provides the following utilities: - ",(0,i.kt)("inlineCode",{parentName:"p"},"CertificateStore")," to handle retrieving and saving a debug certificate. - ",(0,i.kt)("inlineCode",{parentName:"p"},"CertificateManager")," is a utility class containing the following public methods: ","|"," - ",(0,i.kt)("inlineCode",{parentName:"p"},"ensureCertificate")," will find or optionally create a debug certificate and trust it. ","|"," - ",(0,i.kt)("inlineCode",{parentName:"p"},"untrustCertificate")," will untrust a debug certificate."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/debug-certificate-manager.certificatemanager"},"CertificateManager")),(0,i.kt)("td",{parentName:"tr",align:null},"A utility class to handle generating, trusting, and untrustring a debug certificate. Contains two public methods to ",(0,i.kt)("code",null,"ensureCertificate")," and ",(0,i.kt)("code",null,"untrustCertificate"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/debug-certificate-manager.certificatestore"},"CertificateStore")),(0,i.kt)("td",{parentName:"tr",align:null},"Store to retrieve and save debug certificate data.")))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/debug-certificate-manager.icertificate"},"ICertificate")),(0,i.kt)("td",{parentName:"tr",align:null},"The interface for a debug certificate instance")))))}g.isMDXComponent=!0}}]);