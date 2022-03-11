"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[33822],{45242:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(63929);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var a=n(95464),r=n(20134),o=(n(63929),n(45242)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,m={unversionedId:"pages/ts-command-line.commandlineflagparameter.appendtoarglist",id:"pages/ts-command-line.commandlineflagparameter.appendtoarglist",title:"ts-command-line.commandlineflagparameter.appendtoarglist",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineFlagParameter &gt; appendToArgList",source:"@site/docs/pages/ts-command-line.commandlineflagparameter.appendtoarglist.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineflagparameter.appendtoarglist",permalink:"/pages/ts-command-line.commandlineflagparameter.appendtoarglist",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},d=[{value:"CommandLineFlagParameter.appendToArgList() method",id:"commandlineflagparameterappendtoarglist-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineflagparameter"},"CommandLineFlagParameter")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineflagparameter.appendtoarglist"},"appendToArgList")),(0,o.kt)("h2",{id:"commandlineflagparameterappendtoarglist-method"},"CommandLineFlagParameter.appendToArgList() method"),(0,o.kt)("p",null,"Append the parsed values to the provided string array."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/** @override */\nappendToArgList(argList: string[]): void;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"argList"),(0,o.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,o.kt)("td",{parentName:"tr",align:null},"the parsed strings will be appended to this string array")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"void"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,'Sometimes a command line parameter is not used directly, but instead gets passed through to another tool that will use it. For example if our parameter comes in as "--max-count 3", then we might want to call ',(0,o.kt)("inlineCode",{parentName:"p"},"child_process.spawn()")," and append ","[",'"--max-count", "3"',"]"," to the args array for that tool. appendToArgList() appends zero or more strings to the provided array, based on the input command-line that we parsed."),(0,o.kt)("p",null,"If the parameter was omitted from our command-line and has no default value, then nothing will be appended. If the short name was used, the long name will be appended instead."))}u.isMDXComponent=!0}}]);