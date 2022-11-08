"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[99711],{50158:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,v=u["".concat(m,".").concat(d)]||u[d]||c[d]||i;return t?r.createElement(v,o(o({ref:n},s),{},{components:t})):r.createElement(v,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(20216),a=(t(46393),t(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,l={unversionedId:"pages/ts-command-line.commandlineparameter.environmentvariable",id:"pages/ts-command-line.commandlineparameter.environmentvariable",title:"ts-command-line.commandlineparameter.environmentvariable",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameter &gt; environmentVariable",source:"@site/docs/pages/ts-command-line.commandlineparameter.environmentvariable.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineparameter.environmentvariable",permalink:"/pages/ts-command-line.commandlineparameter.environmentvariable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},m={},p=[{value:"CommandLineParameter.environmentVariable property",id:"commandlineparameterenvironmentvariable-property",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameter"},"CommandLineParameter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameter.environmentvariable"},"environmentVariable")),(0,a.kt)("h2",{id:"commandlineparameterenvironmentvariable-property"},"CommandLineParameter.environmentVariable property"),(0,a.kt)("p",null,"The name of an environment variable that the parameter value will be read from, if it was omitted from the command-line. An error will be reported if the environment value cannot be parsed."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly environmentVariable: string | undefined;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The environment variable name must consist only of upper-case letters, numbers, and underscores. It may not start with a number."),(0,a.kt)("p",null,"This feature cannot be used when ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.ibasecommandlinedefinition.required"},"IBaseCommandLineDefinition.required")," is true, because in that case the environmentVariable would never be used."),(0,a.kt)("p",null,"Syntax notes for environment variable values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choice Parameter: The value must match one of the defined choices, otherwise a validation error is reported. An empty string causes the environment variable to be ignored.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Flag Parameter: The value must be ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," for true, or ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," for false, otherwise a validation error is reported. An empty string causes the environment variable to be ignored.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Integer Parameter: The value must be an integer number, otherwise a validation error is reported. An empty string causes the environment variable to be ignored.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"String Parameter: Any value is accepted, including an empty string.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"String List Parameter: If the string starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"[")," (ignoring whitespace) then it will be parsed as a JSON array, whose elements must be strings, numbers, or boolean values. If the string does not start with ",(0,a.kt)("inlineCode",{parentName:"p"},"[")," , then it behaves like an ordinary String Parameter: Any value is accepted, including an empty string."))))}c.isMDXComponent=!0}}]);