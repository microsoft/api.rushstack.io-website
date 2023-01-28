"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[81725],{50158:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(20216),r=(a(46393),a(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,o={unversionedId:"pages/node-core-library.executable",id:"pages/node-core-library.executable",title:"node-core-library.executable",description:"Home &gt; @rushstack/node-core-library &gt; Executable",source:"@site/docs/pages/node-core-library.executable.md",sourceDirName:"pages",slug:"/pages/node-core-library.executable",permalink:"/pages/node-core-library.executable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},c=[{value:"Executable class",id:"executable-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/node-core-library.executable"},"Executable")),(0,r.kt)("h2",{id:"executable-class"},"Executable class"),(0,r.kt)("p",null,"The Executable class provides a safe, portable, recommended solution for tools that need to launch child processes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Executable \n")),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The NodeJS child","_","process API provides a solution for launching child processes, however its design encourages reliance on the operating system shell for certain features. Invoking the OS shell is not safe, not portable, and generally not recommended:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Different shells have different behavior and command-line syntax, and which shell you will get with NodeJS is unpredictable. There is no universal shell guaranteed to be available on all platforms.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a command parameter contains symbol characters, a shell may interpret them, which can introduce a security vulnerability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each shell has different rules for escaping these symbols. On Windows, the default shell is incapable of escaping certain character sequences."))),(0,r.kt)("p",null,"The Executable API provides a pure JavaScript implementation of primitive shell-like functionality for searching the default PATH, appending default file extensions on Windows, and executing a file that may contain a POSIX shebang. This primitive functionality is sufficient (and recommended) for most tooling scenarios."),(0,r.kt)("p",null,"If you need additional shell features such as wildcard globbing, environment variable expansion, piping, or built-in commands, then we recommend to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@microsoft/rushell")," library instead. Rushell is a pure JavaScript shell with a standard syntax that is guaranteed to work consistently across all platforms."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/node-core-library.executable.spawn"},"spawn(filename, args, options)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"static")),(0,r.kt)("td",{parentName:"tr",align:null},"Start a child process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/node-core-library.executable.spawnsync"},"spawnSync(filename, args, options)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"static")),(0,r.kt)("td",{parentName:"tr",align:null},"Synchronously create a child process and optionally capture its output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/node-core-library.executable.tryresolve"},"tryResolve(filename, options)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"static")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Given a filename, this determines the absolute path of the executable file that would be executed by a shell:"),(0,r.kt)("p",null,"- If the filename is missing a path, then the shell's default PATH will be searched. - If the filename is missing a file extension, then Windows default file extensions will be searched."))))))}u.isMDXComponent=!0}}]);