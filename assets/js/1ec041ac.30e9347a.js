"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[16665],{45242:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(63929);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,g=c["".concat(o,".").concat(u)]||c[u]||s[u]||m;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,l=new Array(m);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<m;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89376:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var n=a(50394),r=a(51614),m=(a(63929),a(45242)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,d={unversionedId:"pages/ts-command-line.scopedcommandlineaction",id:"pages/ts-command-line.scopedcommandlineaction",title:"ts-command-line.scopedcommandlineaction",description:"Home &gt; @rushstack/ts-command-line &gt; ScopedCommandLineAction",source:"@site/docs/pages/ts-command-line.scopedcommandlineaction.md",sourceDirName:"pages",slug:"/pages/ts-command-line.scopedcommandlineaction",permalink:"/pages/ts-command-line.scopedcommandlineaction",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"ScopedCommandLineAction class",id:"scopedcommandlineaction-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,m.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,m.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,m.kt)("a",{parentName:"p",href:"/pages/ts-command-line.scopedcommandlineaction"},"ScopedCommandLineAction")),(0,m.kt)("h2",{id:"scopedcommandlineaction-class"},"ScopedCommandLineAction class"),(0,m.kt)("p",null,"Represents a sub-command that is part of the CommandLineParser command-line. Applications should create subclasses of ScopedCommandLineAction corresponding to each action that they want to expose."),(0,m.kt)("p",null,'The action name should be comprised of lower case words separated by hyphens or colons. The name should include an English verb (e.g. "deploy"). Use a hyphen to separate words (e.g. "upload-docs"). A group of related commands can be prefixed with a colon (e.g. "docs:generate", "docs:deploy", "docs:serve", etc).'),(0,m.kt)("p",null,'Scoped commands allow for different parameters to be specified for different provided scoping values. For example, the "scoped-action --scope A" command may allow for different scoped arguments to be specified than the "scoped-action --scope B" command.'),(0,m.kt)("p",null,'Scoped arguments are specified after the "--" pseudo-argument. For example, "scoped-action --scope A -- --scopedFoo --scopedBar".'),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Signature:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class ScopedCommandLineAction extends CommandLineAction \n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Extends:")," ",(0,m.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineaction"},"CommandLineAction")),(0,m.kt)("h2",{id:"constructors"},"Constructors"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,m.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction._constructor_"},"(constructor)(options)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,m.kt)("code",null,"ScopedCommandLineAction")," class")))),(0,m.kt)("h2",{id:"properties"},"Properties"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Property"),(0,m.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,m.kt)("th",{parentName:"tr",align:null},"Type"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineaction.actionname"},"actionName")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"readonly")),(0,m.kt)("td",{parentName:"tr",align:null},"string"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,'The name of the action. For example, if the tool is called "example", then the "build" action might be invoked as: "example build -q --some-other-option"'),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineaction"},"CommandLineAction")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineaction.documentation"},"documentation")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"readonly")),(0,m.kt)("td",{parentName:"tr",align:null},"string"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,'A detailed description that is shown on the action help page, which is displayed by the command "example build --help", e.g. for actionName="build".'),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineaction"},"CommandLineAction")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.parameters"},"parameters")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"readonly")),(0,m.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameter"},"CommandLineParameter")," ",">"),(0,m.kt)("td",{parentName:"tr",align:null},"Returns a collection of the parameters that were defined for this object.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.parametersprocessed"},"parametersProcessed")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"readonly")),(0,m.kt)("td",{parentName:"tr",align:null},"boolean"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Informs the caller if the argparse data has been processed into parameters."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.remainder"},"remainder")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"readonly")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineremainder"},"CommandLineRemainder")," ","|"," undefined"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"If ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definecommandlineremainder"},"CommandLineParameterProvider.defineCommandLineRemainder()")," was called, this object captures any remaining command line arguments after the recognized portion."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.scopingparametergroup"},"ScopingParameterGroup")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,(0,m.kt)("code",null,"readonly")),(0,m.kt)("p",null,(0,m.kt)("code",null,"static"))),(0,m.kt)("td",{parentName:"tr",align:null},"typeof SCOPING","_","PARAMETER","_","GROUP"),(0,m.kt)("td",{parentName:"tr",align:null},"The required group name to apply to all scoping parameters. At least one parameter must be defined with this group name.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineaction.summary"},"summary")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"readonly")),(0,m.kt)("td",{parentName:"tr",align:null},"string"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,'A quick summary that is shown on the main help page, which is displayed by the command "example --help"'),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineaction"},"CommandLineAction")," )"))))),(0,m.kt)("h2",{id:"methods"},"Methods"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Method"),(0,m.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter"},"defineChoiceListParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Defines a command-line parameter whose value must be a string from a fixed set of allowable choices (similar to an enum). The parameter can be specified multiple times to build a list."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definechoiceparameter"},"defineChoiceParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Defines a command-line parameter whose value must be a string from a fixed set of allowable choices (similar to an enum)."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definecommandlineremainder"},"defineCommandLineRemainder(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Defines a rule that captures any remaining command line arguments after the recognized portion."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineflagparameter"},"defineFlagParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Defines a command-line switch whose boolean value is true if the switch is provided, and false otherwise."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineintegerlistparameter"},"defineIntegerListParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Defines a command-line parameter whose argument is an integer. The parameter can be specified multiple times to build a list."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineintegerparameter"},"defineIntegerParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Defines a command-line parameter whose argument is an integer."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definestringlistparameter"},"defineStringListParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Defines a command-line parameter whose argument is a single text string. The parameter can be specified multiple times to build a list."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definestringparameter"},"defineStringParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Defines a command-line parameter whose argument is a single text string."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getchoicelistparameter"},"getChoiceListParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Returns the CommandLineChoiceListParameter with the specified long name."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getchoiceparameter"},"getChoiceParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Returns the CommandLineChoiceParameter with the specified long name."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getflagparameter"},"getFlagParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Returns the CommandLineFlagParameter with the specified long name."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getintegerlistparameter"},"getIntegerListParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Returns the CommandLineIntegerParameter with the specified long name."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getintegerparameter"},"getIntegerParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Returns the CommandLineIntegerParameter with the specified long name."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getparameterstringmap"},"getParameterStringMap()")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Returns a object which maps the long name of each parameter in this.parameters to the stringified form of its value. This is useful for logging telemetry, but it is not the proper way of accessing parameters or their values."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getstringlistparameter"},"getStringListParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Returns the CommandLineStringListParameter with the specified long name."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getstringparameter"},"getStringParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Returns the CommandLineStringParameter with the specified long name."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.ondefineparameters"},"onDefineParameters()")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"protected")),(0,m.kt)("td",{parentName:"tr",align:null},"The child class should implement this hook to define its command-line parameters, e.g. by calling defineFlagParameter().")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.ondefinescopedparameters"},"onDefineScopedParameters(scopedParameterProvider)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"protected")),(0,m.kt)("td",{parentName:"tr",align:null},"The child class should implement this hook to define its scoped command-line parameters, e.g. by calling scopedParameterProvider.defineFlagParameter(). These parameters will only be available if the action is invoked with a scope.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.ondefineunscopedparameters"},"onDefineUnscopedParameters()")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"protected")),(0,m.kt)("td",{parentName:"tr",align:null},"The child class should implement this hook to define its unscoped command-line parameters, e.g. by calling defineFlagParameter(). At least one scoping parameter must be defined. Scoping parameters are defined by setting the parameterGroupName to ScopedCommandLineAction.ScopingParameterGroupName.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction.onexecute"},"onExecute()")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"protected")),(0,m.kt)("td",{parentName:"tr",align:null},"Your subclass should implement this hook to perform the operation.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.parsescopedlongname"},"parseScopedLongName(scopedLongName)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Returns an object with the parsed scope (if present) and the long name of the parameter."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.renderhelptext"},"renderHelpText()")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Generates the command-line help text."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.renderusagetext"},"renderUsageText()")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("p",null,"Generates the command-line usage text."),(0,m.kt)("p",null,"(Inherited from ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," )"))))))}u.isMDXComponent=!0}}]);