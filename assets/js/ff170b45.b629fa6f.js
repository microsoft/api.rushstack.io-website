"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[19183],{50158:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,g=c["".concat(p,".").concat(u)]||c[u]||s[u]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(20216),a=(n(46393),n(50158));const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,l={unversionedId:"pages/ts-command-line.commandlineremainder.appendtoarglist",id:"pages/ts-command-line.commandlineremainder.appendtoarglist",title:"ts-command-line.commandlineremainder.appendtoarglist",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineRemainder &gt; appendToArgList",source:"@site/docs/pages/ts-command-line.commandlineremainder.appendtoarglist.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineremainder.appendtoarglist",permalink:"/pages/ts-command-line.commandlineremainder.appendtoarglist",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},m=[{value:"CommandLineRemainder.appendToArgList() method",id:"commandlineremainderappendtoarglist-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineremainder"},"CommandLineRemainder")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineremainder.appendtoarglist"},"appendToArgList")),(0,a.kt)("h2",{id:"commandlineremainderappendtoarglist-method"},"CommandLineRemainder.appendToArgList() method"),(0,a.kt)("p",null,"Append the parsed values to the provided string array."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/** @override */\nappendToArgList(argList: string[]): void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"argList"),(0,a.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,a.kt)("td",{parentName:"tr",align:null},"the parsed strings will be appended to this string array")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"void"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,'Sometimes a command line parameter is not used directly, but instead gets passed through to another tool that will use it. For example if our parameter comes in as "--max-count 3", then we might want to call ',(0,a.kt)("inlineCode",{parentName:"p"},"child_process.spawn()")," and append ","[",'"--max-count", "3"',"]"," to the args array for that tool. appendToArgList() appends zero or more strings to the provided array, based on the input command-line that we parsed."),(0,a.kt)("p",null,"If the parameter was omitted from our command-line and has no default value, then nothing will be appended. If the short name was used, the long name will be appended instead."))}s.isMDXComponent=!0}}]);