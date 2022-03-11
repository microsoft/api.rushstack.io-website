"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[76975],{45242:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(95464),a=r(20134),o=(r(63929),r(45242)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,c={unversionedId:"pages/api-extractor.extractormessage.loglevel",id:"pages/api-extractor.extractormessage.loglevel",title:"api-extractor.extractormessage.loglevel",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorMessage &gt; logLevel",source:"@site/docs/pages/api-extractor.extractormessage.loglevel.md",sourceDirName:"pages",slug:"/pages/api-extractor.extractormessage.loglevel",permalink:"/pages/api-extractor.extractormessage.loglevel",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},u=[{value:"ExtractorMessage.logLevel property",id:"extractormessageloglevel-property",level:2},{value:"Remarks",id:"remarks",level:2}],g={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor.extractormessage"},"ExtractorMessage")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor.extractormessage.loglevel"},"logLevel")),(0,o.kt)("h2",{id:"extractormessageloglevel-property"},"ExtractorMessage.logLevel property"),(0,o.kt)("p",null,"Specifies how the message should be reported."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get logLevel(): ExtractorLogLevel;\n\nset logLevel(value: ExtractorLogLevel);\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"/pages/api-extractor.iextractorinvokeoptions.messagecallback"},"IExtractorInvokeOptions.messageCallback")," handles the message (i.e. sets ",(0,o.kt)("inlineCode",{parentName:"p"},"handled = true")," ), it can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel")," to determine how to display the message."),(0,o.kt)("p",null,"Alternatively, if API Extractor is handling the message, the ",(0,o.kt)("inlineCode",{parentName:"p"},"messageCallback")," could assign ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel")," to change how it will be processed. However, in general the recommended practice is to configure message routing using the ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," section in api-extractor.json."),(0,o.kt)("p",null,"To discard a message entirely, assign ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel = none")," ."))}m.isMDXComponent=!0}}]);