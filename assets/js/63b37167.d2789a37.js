"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[63607],{45242:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return g}});var n=t(63929);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),l=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(d.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(t),g=r,u=c["".concat(d,".").concat(g)]||c[g]||s[g]||i;return t?n.createElement(u,m(m({ref:a},p),{},{components:t})):n.createElement(u,m({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,m=new Array(i);m[0]=c;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var l=2;l<i;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65474:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var n=t(50394),r=t(51614),i=(t(63929),t(45242)),m=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},d=void 0,l={unversionedId:"pages/ts-command-line",id:"pages/ts-command-line",title:"ts-command-line",description:"Home &gt; @rushstack/ts-command-line",source:"@site/docs/pages/ts-command-line.md",sourceDirName:"pages",slug:"/pages/ts-command-line",permalink:"/pages/ts-command-line",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"ts-command-line package",id:"ts-command-line-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Interfaces",id:"interfaces",level:2}],c={toc:s};function g(e){var a=e.components,t=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")),(0,i.kt)("h2",{id:"ts-command-line-package"},"ts-command-line package"),(0,i.kt)("p",null,"An object-oriented command-line parser for TypeScript projects."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineaction"},"CommandLineAction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"Represents a sub-command that is part of the CommandLineParser command line. Applications should create subclasses of CommandLineAction corresponding to each action that they want to expose."),(0,i.kt)("p",null,'The action name should be comprised of lower case words separated by hyphens or colons. The name should include an English verb (e.g. "deploy"). Use a hyphen to separate words (e.g. "upload-docs"). A group of related commands can be prefixed with a colon (e.g. "docs:generate", "docs:deploy", "docs:serve", etc).'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlinechoicelistparameter"},"CommandLineChoiceListParameter")),(0,i.kt)("td",{parentName:"tr",align:null},"The data type returned by ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter"},"CommandLineParameterProvider.defineChoiceListParameter()"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlinechoiceparameter"},"CommandLineChoiceParameter")),(0,i.kt)("td",{parentName:"tr",align:null},"The data type returned by ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definechoiceparameter"},"CommandLineParameterProvider.defineChoiceParameter()"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineflagparameter"},"CommandLineFlagParameter")),(0,i.kt)("td",{parentName:"tr",align:null},"The data type returned by ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineflagparameter"},"CommandLineParameterProvider.defineFlagParameter()"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlinehelper"},"CommandLineHelper")),(0,i.kt)("td",{parentName:"tr",align:null},"Helpers for working with the ts-command-line API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineintegerlistparameter"},"CommandLineIntegerListParameter")),(0,i.kt)("td",{parentName:"tr",align:null},"The data type returned by ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineintegerlistparameter"},"CommandLineParameterProvider.defineIntegerListParameter()"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineintegerparameter"},"CommandLineIntegerParameter")),(0,i.kt)("td",{parentName:"tr",align:null},"The data type returned by ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineintegerparameter"},"CommandLineParameterProvider.defineIntegerParameter()"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameter"},"CommandLineParameter")),(0,i.kt)("td",{parentName:"tr",align:null},"The base class for the various command-line parameter types.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")),(0,i.kt)("td",{parentName:"tr",align:null},"This is the common base class for CommandLineAction and CommandLineParser that provides functionality for defining command-line parameters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterwithargument"},"CommandLineParameterWithArgument")),(0,i.kt)("td",{parentName:"tr",align:null},"The common base class for parameters types that receive an argument.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser"},"CommandLineParser")),(0,i.kt)("td",{parentName:"tr",align:null},'The "argparse" library is a relatively advanced command-line parser with features such as word-wrapping and intelligible error messages (that are lacking in other similar libraries such as commander, yargs, and nomnom). Unfortunately, its ruby-inspired API is awkward to use. The abstract base classes CommandLineParser and CommandLineAction provide a wrapper for "argparse" that makes defining and consuming arguments quick and simple, and enforces that appropriate documentation is provided for each parameter.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineremainder"},"CommandLineRemainder")),(0,i.kt)("td",{parentName:"tr",align:null},"The data type returned by ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definecommandlineremainder"},"CommandLineParameterProvider.defineCommandLineRemainder()"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlinestringlistparameter"},"CommandLineStringListParameter")),(0,i.kt)("td",{parentName:"tr",align:null},"The data type returned by ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definestringlistparameter"},"CommandLineParameterProvider.defineStringListParameter()"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlinestringparameter"},"CommandLineStringParameter")),(0,i.kt)("td",{parentName:"tr",align:null},"The data type returned by ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definestringparameter"},"CommandLineParameterProvider.defineStringParameter()"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.dynamiccommandlineaction"},"DynamicCommandLineAction")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.dynamiccommandlineparser"},"DynamicCommandLineParser")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.scopedcommandlineaction"},"ScopedCommandLineAction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"Represents a sub-command that is part of the CommandLineParser command-line. Applications should create subclasses of ScopedCommandLineAction corresponding to each action that they want to expose."),(0,i.kt)("p",null,'The action name should be comprised of lower case words separated by hyphens or colons. The name should include an English verb (e.g. "deploy"). Use a hyphen to separate words (e.g. "upload-docs"). A group of related commands can be prefixed with a colon (e.g. "docs:generate", "docs:deploy", "docs:serve", etc).'),(0,i.kt)("p",null,'Scoped commands allow for different parameters to be specified for different provided scoping values. For example, the "scoped-action --scope A" command may allow for different scoped arguments to be specified than the "scoped-action --scope B" command.'),(0,i.kt)("p",null,'Scoped arguments are specified after the "--" pseudo-argument. For example, "scoped-action --scope A -- --scopedFoo --scopedBar".'))))),(0,i.kt)("h2",{id:"enumerations"},"Enumerations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Enumeration"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineconstants"},"CommandLineConstants")),(0,i.kt)("td",{parentName:"tr",align:null},"String constants for command line processing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterkind"},"CommandLineParameterKind")),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies the kind of a CommandLineParameter.")))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.ibasecommandlinedefinition"},"IBaseCommandLineDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with CommandLineParser, this interface represents a generic command-line parameter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.ibasecommandlinedefinitionwithargument"},"IBaseCommandLineDefinitionWithArgument")),(0,i.kt)("td",{parentName:"tr",align:null},"The common base interface for parameter types that accept an argument.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlineactionoptions"},"ICommandLineActionOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Options for the CommandLineAction constructor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlinechoicedefinition"},"ICommandLineChoiceDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definechoiceparameter"},"CommandLineParameterProvider.defineChoiceParameter()"),", this interface defines a command line parameter which is constrained to a list of possible options.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlinechoicelistdefinition"},"ICommandLineChoiceListDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter"},"CommandLineParameterProvider.defineChoiceListParameter()"),", this interface defines a command line parameter which is constrained to a list of possible options. The parameter can be specified multiple times to build a list.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlineflagdefinition"},"ICommandLineFlagDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineflagparameter"},"CommandLineParameterProvider.defineFlagParameter()"),", this interface defines a command line parameter that is a boolean flag.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlineintegerdefinition"},"ICommandLineIntegerDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineintegerparameter"},"CommandLineParameterProvider.defineIntegerParameter()"),", this interface defines a command line parameter whose argument is an integer value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlineintegerlistdefinition"},"ICommandLineIntegerListDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineintegerlistparameter"},"CommandLineParameterProvider.defineIntegerListParameter()"),", this interface defines a command line parameter whose argument is an integer value. The parameter can be specified multiple times to build a list.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlineparseroptions"},"ICommandLineParserOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Options for the ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparser"},"CommandLineParser")," constructor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlineremainderdefinition"},"ICommandLineRemainderDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definecommandlineremainder"},"CommandLineParameterProvider.defineCommandLineRemainder()"),", this interface defines a rule that captures any remaining command line arguments after the recognized portion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlinestringdefinition"},"ICommandLineStringDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definestringparameter"},"CommandLineParameterProvider.defineStringParameter()"),", this interface defines a command line parameter whose argument is a string value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.icommandlinestringlistdefinition"},"ICommandLineStringListDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definestringlistparameter"},"CommandLineParameterProvider.defineStringListParameter()"),", this interface defines a command line parameter whose argument is a single text string. The parameter can be specified multiple times to build a list.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.iscopedlongnameparseresult"},"IScopedLongNameParseResult")),(0,i.kt)("td",{parentName:"tr",align:null},"The result containing the parsed paramter long name and scope. Returned when calling ",(0,i.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.parsescopedlongname"},"CommandLineParameterProvider.parseScopedLongName()"),".")))))}g.isMDXComponent=!0}}]);