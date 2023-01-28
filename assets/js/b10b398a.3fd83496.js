"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[18907],{50158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(46393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(m,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=n(20216),r=n(46393),l=n(50158);const i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,m={unversionedId:"pages/ts-command-line.commandlineparser",id:"pages/ts-command-line.commandlineparser",title:"ts-command-line.commandlineparser",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParser",source:"@site/docs/pages/ts-command-line.commandlineparser.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineparser",permalink:"/pages/ts-command-line.commandlineparser",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},p=[{value:"CommandLineParser class",id:"commandlineparser-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparser"},"CommandLineParser")),(0,l.kt)("h2",{id:"commandlineparser-class"},"CommandLineParser class"),(0,l.kt)("p",null,'The "argparse" library is a relatively advanced command-line parser with features such as word-wrapping and intelligible error messages (that are lacking in other similar libraries such as commander, yargs, and nomnom). Unfortunately, its ruby-inspired API is awkward to use. The abstract base classes CommandLineParser and CommandLineAction provide a wrapper for "argparse" that makes defining and consuming arguments quick and simple, and enforces that appropriate documentation is provided for each parameter.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class CommandLineParser extends CommandLineParameterProvider \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Extends:")," ",(0,l.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser._constructor_"},"(constructor)(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,l.kt)("code",null,"CommandLineParser")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser.actions"},"actions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineaction"},"CommandLineAction"),(0,l.kt)(r.Fragment,null),">"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the list of actions that were defined for this CommandLineParser object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser.selectedaction"},"selectedAction")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineaction"},"CommandLineAction")," ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Reports which CommandLineAction was specified on the command line.")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser.addaction"},"addAction(action)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Defines a new action that can be used with the CommandLineParser instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser.execute"},"execute(args)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The program entry point will call this method to begin parsing command-line arguments and executing the corresponding action.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser.executewithouterrorhandling"},"executeWithoutErrorHandling(args)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This is similar to ",(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser.execute"},"CommandLineParser.execute()"),(0,l.kt)(r.Fragment,null),", except that execution errors simply cause the promise to reject. It is the caller's responsibility to trap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser.getaction"},"getAction(actionName)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Retrieves the action with the specified name. If no matching action is found, an exception is thrown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser.onexecute"},"onExecute()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"protected")),(0,l.kt)("td",{parentName:"tr",align:null},"This hook allows the subclass to perform additional operations before or after the chosen action is executed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser.trygetaction"},"tryGetAction(actionName)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Retrieves the action with the specified name. If no matching action is found, undefined is returned.")))))}c.isMDXComponent=!0}}]);