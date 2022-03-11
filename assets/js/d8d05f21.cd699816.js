"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[37616],{45242:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(63929);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return t?i.createElement(f,a(a({ref:n},p),{},{components:t})):i.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46680:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var i=t(95464),o=t(20134),r=(t(63929),t(45242)),a=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,s={unversionedId:"pages/ts-command-line.icommandlinechoicelistdefinition.completions",id:"pages/ts-command-line.icommandlinechoicelistdefinition.completions",title:"ts-command-line.icommandlinechoicelistdefinition.completions",description:"Home &gt; @rushstack/ts-command-line &gt; ICommandLineChoiceListDefinition &gt; completions",source:"@site/docs/pages/ts-command-line.icommandlinechoicelistdefinition.completions.md",sourceDirName:"pages",slug:"/pages/ts-command-line.icommandlinechoicelistdefinition.completions",permalink:"/pages/ts-command-line.icommandlinechoicelistdefinition.completions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},m=[{value:"ICommandLineChoiceListDefinition.completions property",id:"icommandlinechoicelistdefinitioncompletions-property",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/ts-command-line.icommandlinechoicelistdefinition"},"ICommandLineChoiceListDefinition")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/ts-command-line.icommandlinechoicelistdefinition.completions"},"completions")),(0,r.kt)("h2",{id:"icommandlinechoicelistdefinitioncompletions-property"},"ICommandLineChoiceListDefinition.completions property"),(0,r.kt)("p",null,"An optional callback that provides a list of custom choices for tab completion."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"completions?: () => Promise<string[]>;\n")),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"This option is only used when ",(0,r.kt)("inlineCode",{parentName:"p"},"ICommandLineParserOptions.enableTabCompletionAction")," is enabled."))}d.isMDXComponent=!0}}]);