"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[18],{50158:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(29122),a=(t(46393),t(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/ts-command-line.ibasecommandlinedefinition.parameterscope",id:"pages/ts-command-line.ibasecommandlinedefinition.parameterscope",title:"ts-command-line.ibasecommandlinedefinition.parameterscope",description:"Home &gt; @rushstack/ts-command-line &gt; IBaseCommandLineDefinition &gt; parameterScope",source:"@site/docs/pages/ts-command-line.ibasecommandlinedefinition.parameterscope.md",sourceDirName:"pages",slug:"/pages/ts-command-line.ibasecommandlinedefinition.parameterscope",permalink:"/pages/ts-command-line.ibasecommandlinedefinition.parameterscope",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},s=[{value:"IBaseCommandLineDefinition.parameterScope property",id:"ibasecommandlinedefinitionparameterscope-property",level:2}],l={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.ibasecommandlinedefinition"},"IBaseCommandLineDefinition")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.ibasecommandlinedefinition.parameterscope"},"parameterScope")),(0,a.kt)("h2",{id:"ibasecommandlinedefinitionparameterscope-property"},"IBaseCommandLineDefinition.parameterScope property"),(0,a.kt)("p",null,'An optional parameter scope name, used to add a scope-prefixed parameter synonym, e.g. "--scope:do-something". Scopes provide additional flexibility for parameters in conflict resolution since when a scope is specified, parameters that have conflicting long names will be defined using only the scope-prefixed name.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"parameterScope?: string;\n")))}d.isMDXComponent=!0}}]);