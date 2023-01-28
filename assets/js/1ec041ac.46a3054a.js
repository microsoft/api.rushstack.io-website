"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[16665],{50158:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(46393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,k=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},49070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(20216),r=n(46393),o=n(50158);const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"pages/ts-command-line.scopedcommandlineaction",id:"pages/ts-command-line.scopedcommandlineaction",title:"ts-command-line.scopedcommandlineaction",description:"Home &gt; @rushstack/ts-command-line &gt; ScopedCommandLineAction",source:"@site/docs/pages/ts-command-line.scopedcommandlineaction.md",sourceDirName:"pages",slug:"/pages/ts-command-line.scopedcommandlineaction",permalink:"/pages/ts-command-line.scopedcommandlineaction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},m=[{value:"ScopedCommandLineAction class",id:"scopedcommandlineaction-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.scopedcommandlineaction"},"ScopedCommandLineAction")),(0,o.kt)("h2",{id:"scopedcommandlineaction-class"},"ScopedCommandLineAction class"),(0,o.kt)("p",null,"Represents a sub-command that is part of the CommandLineParser command-line. Applications should create subclasses of ScopedCommandLineAction corresponding to each action that they want to expose."),(0,o.kt)("p",null,'The action name should be comprised of lower case words separated by hyphens or colons. The name should include an English verb (e.g. "deploy"). Use a hyphen to separate words (e.g. "upload-docs"). A group of related commands can be prefixed with a colon (e.g. "docs:generate", "docs:deploy", "docs:serve", etc).'),(0,o.kt)("p",null,'Scoped commands allow for different parameters to be specified for different provided scoping values. For example, the "scoped-action --scope A" command may allow for different scoped arguments to be specified than the "scoped-action --scope B" command.'),(0,o.kt)("p",null,'Scoped arguments are specified after the "--" pseudo-argument. For example, "scoped-action --scope A -- --scopedFoo --scopedBar".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class ScopedCommandLineAction extends CommandLineAction \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extends:")," ",(0,o.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineaction"},"CommandLineAction")),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction._constructor_"},"(constructor)(options)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,o.kt)("code",null,"ScopedCommandLineAction")," class")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.parameters"},"parameters")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"readonly")),(0,o.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,o.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameter"},"CommandLineParameter"),(0,o.kt)(r.Fragment,null),">"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a collection of the parameters that were defined for this object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.scopingparametergroup"},"ScopingParameterGroup")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("code",null,"static")),(0,o.kt)("p",null,(0,o.kt)("code",null,"readonly"))),(0,o.kt)("td",{parentName:"tr",align:null},"typeof SCOPING","_","PARAMETER","_","GROUP"),(0,o.kt)("td",{parentName:"tr",align:null},"The required group name to apply to all scoping parameters. At least one parameter must be defined with this group name.")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.ondefineparameters"},"onDefineParameters()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"protected")),(0,o.kt)("td",{parentName:"tr",align:null},"The child class should implement this hook to define its command-line parameters, e.g. by calling defineFlagParameter().")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.ondefinescopedparameters"},"onDefineScopedParameters(scopedParameterProvider)")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("code",null,"protected")),(0,o.kt)("p",null,(0,o.kt)("code",null,"abstract"))),(0,o.kt)("td",{parentName:"tr",align:null},"The child class should implement this hook to define its scoped command-line parameters, e.g. by calling scopedParameterProvider.defineFlagParameter(). These parameters will only be available if the action is invoked with a scope.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.ondefineunscopedparameters"},"onDefineUnscopedParameters()?")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"protected")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(Optional)")," The child class should implement this hook to define its unscoped command-line parameters, e.g. by calling defineFlagParameter(). At least one scoping parameter must be defined. Scoping parameters are defined by setting the parameterGroupName to ScopedCommandLineAction.ScopingParameterGroupName.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.onexecute"},"onExecute()")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("code",null,"protected")),(0,o.kt)("p",null,(0,o.kt)("code",null,"abstract"))),(0,o.kt)("td",{parentName:"tr",align:null},"Your subclass should implement this hook to perform the operation.")))))}s.isMDXComponent=!0}}]);