"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[71446],{50158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(29122),a=n(46393),i=n(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,u={unversionedId:"pages/api-documenter.ifeaturedefinition",id:"pages/api-documenter.ifeaturedefinition",title:"api-documenter.ifeaturedefinition",description:"Home &gt; @microsoft/api-documenter &gt; IFeatureDefinition",source:"@site/docs/pages/api-documenter.ifeaturedefinition.md",sourceDirName:"pages",slug:"/pages/api-documenter.ifeaturedefinition",permalink:"/pages/api-documenter.ifeaturedefinition",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},c=[{value:"IFeatureDefinition interface",id:"ifeaturedefinition-interface",level:2},{value:"Properties",id:"properties",level:2}],s={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-documenter"},"@microsoft/api-documenter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api-documenter.ifeaturedefinition"},"IFeatureDefinition")),(0,i.kt)("h2",{id:"ifeaturedefinition-interface"},"IFeatureDefinition interface"),(0,i.kt)("p",null,'Defines a "feature" that is provided by an API Documenter plugin. A feature is a user-defined module that customizes the behavior of API Documenter.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IFeatureDefinition \n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api-documenter.ifeaturedefinition.featurename"},"featureName")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The name of this feature, as it will appear in the config file."),(0,i.kt)("p",null,"The name should consist of one or more words separated by hyphens. Each word should consist of lower case letters and numbers. Example: ",(0,i.kt)("code",null,"my-feature")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api-documenter.ifeaturedefinition.kind"},"kind")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"'MarkdownDocumenterFeature'"),(0,i.kt)("td",{parentName:"tr",align:null},"Determines the kind of feature. The specified value is the name of the base class that ",(0,i.kt)("code",null,"subclass")," inherits from.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api-documenter.ifeaturedefinition.subclass"},"subclass")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"{ new (initialization: ",(0,i.kt)("a",{parentName:"td",href:"/pages/api-documenter.pluginfeatureinitialization"},"PluginFeatureInitialization"),(0,i.kt)(a.Fragment,null),"): ",(0,i.kt)("a",{parentName:"td",href:"/pages/api-documenter.markdowndocumenterfeature"},"MarkdownDocumenterFeature"),(0,i.kt)(a.Fragment,null),"; }"),(0,i.kt)("td",{parentName:"tr",align:null},"Your subclass that extends from the base class.")))))}f.isMDXComponent=!0}}]);