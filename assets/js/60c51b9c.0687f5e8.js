"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[75658],{45242:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(63929);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},71375:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=a(50394),r=a(51614),l=(a(63929),a(45242)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"pages/node-core-library.jsonfile.loadandvalidatewithcallbackasync",id:"pages/node-core-library.jsonfile.loadandvalidatewithcallbackasync",title:"node-core-library.jsonfile.loadandvalidatewithcallbackasync",description:"Home &gt; @rushstack/node-core-library &gt; JsonFile &gt; loadAndValidateWithCallbackAsync",source:"@site/docs/pages/node-core-library.jsonfile.loadandvalidatewithcallbackasync.md",sourceDirName:"pages",slug:"/pages/node-core-library.jsonfile.loadandvalidatewithcallbackasync",permalink:"/pages/node-core-library.jsonfile.loadandvalidatewithcallbackasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},d={},p=[{value:"JsonFile.loadAndValidateWithCallbackAsync() method",id:"jsonfileloadandvalidatewithcallbackasync-method",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.jsonfile"},"JsonFile")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.jsonfile.loadandvalidatewithcallbackasync"},"loadAndValidateWithCallbackAsync")),(0,l.kt)("h2",{id:"jsonfileloadandvalidatewithcallbackasync-method"},"JsonFile.loadAndValidateWithCallbackAsync() method"),(0,l.kt)("p",null,"An async version of ",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.jsonfile.loadandvalidatewithcallback"},"JsonFile.loadAndValidateWithCallback()")," ."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static loadAndValidateWithCallbackAsync(jsonFilename: string, jsonSchema: JsonSchema, errorCallback: (errorInfo: IJsonSchemaErrorInfo) => void): Promise<JsonObject>;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonFilename"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonSchema"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.jsonschema"},"JsonSchema")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errorCallback"),(0,l.kt)("td",{parentName:"tr",align:null},"(errorInfo: ",(0,l.kt)("a",{parentName:"td",href:"/pages/node-core-library.ijsonschemaerrorinfo"},"IJsonSchemaErrorInfo")," ) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,"Promise","<",(0,l.kt)("a",{parentName:"p",href:"/pages/node-core-library.jsonobject"},"JsonObject")," ",">"))}m.isMDXComponent=!0}}]);