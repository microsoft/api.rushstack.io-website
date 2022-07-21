"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[79127],{45242:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var r=a(63929);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},m=Object.keys(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,m=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),g=n,u=c["".concat(o,".").concat(g)]||c[g]||s[g]||m;return a?r.createElement(u,i(i({ref:t},d),{},{components:a})):r.createElement(u,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var m=a.length,i=new Array(m);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<m;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67717:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=a(50394),n=a(51614),m=(a(63929),a(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/ts-command-line.commandlineparameterprovider",id:"pages/ts-command-line.commandlineparameterprovider",title:"ts-command-line.commandlineparameterprovider",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider",source:"@site/docs/pages/ts-command-line.commandlineparameterprovider.md",sourceDirName:"pages",slug:"/pages/ts-command-line.commandlineparameterprovider",permalink:"/pages/ts-command-line.commandlineparameterprovider",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},d={},s=[{value:"CommandLineParameterProvider class",id:"commandlineparameterprovider-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:s};function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,m.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,m.kt)("a",{parentName:"p",href:"/pages/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,m.kt)("a",{parentName:"p",href:"/pages/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")),(0,m.kt)("h2",{id:"commandlineparameterprovider-class"},"CommandLineParameterProvider class"),(0,m.kt)("p",null,"This is the common base class for CommandLineAction and CommandLineParser that provides functionality for defining command-line parameters."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Signature:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class CommandLineParameterProvider \n")),(0,m.kt)("h2",{id:"remarks"},"Remarks"),(0,m.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,m.kt)("inlineCode",{parentName:"p"},"CommandLineParameterProvider")," class."),(0,m.kt)("h2",{id:"properties"},"Properties"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Property"),(0,m.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,m.kt)("th",{parentName:"tr",align:null},"Type"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.parameters"},"parameters")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"readonly")),(0,m.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameter"},"CommandLineParameter"),">"),(0,m.kt)("td",{parentName:"tr",align:null},"Returns a collection of the parameters that were defined for this object.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.parametersprocessed"},"parametersProcessed")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"readonly")),(0,m.kt)("td",{parentName:"tr",align:null},"boolean"),(0,m.kt)("td",{parentName:"tr",align:null},"Informs the caller if the argparse data has been processed into parameters.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.remainder"},"remainder")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"readonly")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineremainder"},"CommandLineRemainder")," ","|"," undefined"),(0,m.kt)("td",{parentName:"tr",align:null},"If ",(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definecommandlineremainder"},"CommandLineParameterProvider.defineCommandLineRemainder()")," was called, this object captures any remaining command line arguments after the recognized portion.")))),(0,m.kt)("h2",{id:"methods"},"Methods"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Method"),(0,m.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definechoicelistparameter"},"defineChoiceListParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose value must be a string from a fixed set of allowable choices (similar to an enum). The parameter can be specified multiple times to build a list.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definechoiceparameter"},"defineChoiceParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose value must be a string from a fixed set of allowable choices (similar to an enum).")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definecommandlineremainder"},"defineCommandLineRemainder(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Defines a rule that captures any remaining command line arguments after the recognized portion.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineflagparameter"},"defineFlagParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Defines a command-line switch whose boolean value is true if the switch is provided, and false otherwise.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineintegerlistparameter"},"defineIntegerListParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose argument is an integer. The parameter can be specified multiple times to build a list.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.defineintegerparameter"},"defineIntegerParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose argument is an integer.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definestringlistparameter"},"defineStringListParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose argument is a single text string. The parameter can be specified multiple times to build a list.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.definestringparameter"},"defineStringParameter(definition)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Defines a command-line parameter whose argument is a single text string.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getchoicelistparameter"},"getChoiceListParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineChoiceListParameter with the specified long name.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getchoiceparameter"},"getChoiceParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineChoiceParameter with the specified long name.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getflagparameter"},"getFlagParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineFlagParameter with the specified long name.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getintegerlistparameter"},"getIntegerListParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineIntegerParameter with the specified long name.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getintegerparameter"},"getIntegerParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineIntegerParameter with the specified long name.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getparameterstringmap"},"getParameterStringMap()")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Returns a object which maps the long name of each parameter in this.parameters to the stringified form of its value. This is useful for logging telemetry, but it is not the proper way of accessing parameters or their values.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getstringlistparameter"},"getStringListParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineStringListParameter with the specified long name.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.getstringparameter"},"getStringParameter(parameterLongName, parameterScope)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Returns the CommandLineStringParameter with the specified long name.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.ondefineparameters"},"onDefineParameters()")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("code",null,"protected")),(0,m.kt)("td",{parentName:"tr",align:null},"The child class should implement this hook to define its command-line parameters, e.g. by calling defineFlagParameter().")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.parsescopedlongname"},"parseScopedLongName(scopedLongName)")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Returns an object with the parsed scope (if present) and the long name of the parameter.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.renderhelptext"},"renderHelpText()")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Generates the command-line help text.")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/pages/ts-command-line.commandlineparameterprovider.renderusagetext"},"renderUsageText()")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"Generates the command-line usage text.")))))}g.isMDXComponent=!0}}]);