"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[81449],{50158:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(46393);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(a),g=r,k=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},36034:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(29122),r=(a(46393),a(50158));const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,o={unversionedId:"pages/rush-lib",id:"pages/rush-lib",title:"rush-lib",description:"Home &gt; @microsoft/rush-lib",source:"@site/docs/pages/rush-lib.md",sourceDirName:"pages",slug:"/pages/rush-lib",permalink:"/pages/rush-lib",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},s={},p=[{value:"rush-lib package",id:"rush-lib-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Abstract Classes",id:"abstract-classes",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],m={toc:p},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")),(0,r.kt)("h2",{id:"rush-lib-package"},"rush-lib package"),(0,r.kt)("p",null,"A library for writing scripts that interact with the ",(0,r.kt)("a",{parentName:"p",href:"https://rushjs.io/"},"Rush")," tool."),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.approvedpackagesconfiguration"},"ApprovedPackagesConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},'This represents the JSON file specified via the "approvedPackagesFile" option in rush.json.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.approvedpackagesitem"},"ApprovedPackagesItem")),(0,r.kt)("td",{parentName:"tr",align:null},"An item returned by ApprovedPackagesConfiguration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.approvedpackagespolicy"},"ApprovedPackagesPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},'This is a helper object for RushConfiguration. It exposes the "approvedPackagesPolicy" feature from rush.json.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.buildcacheconfiguration"},"BuildCacheConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")),' Use this class to load and save the "common/config/rush/build-cache.json" config file. This file provides configuration options for cached project build output.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.changemanager"},"ChangeManager")),(0,r.kt)("td",{parentName:"tr",align:null},"A class that helps with programmatically interacting with Rush's change files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.commonversionsconfiguration"},"CommonVersionsConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},'Use this class to load and save the "common/config/rush/common-versions.json" config file. This config file stores dependency version information that affects all projects in the repo.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.credentialcache"},"CredentialCache")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.environmentconfiguration"},"EnvironmentConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")),' Provides Rush-specific environment variable data. All Rush environment variables must start with "RUSH',"_",'". This class is designed to be used by RushConfiguration.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.eventhooks"},"EventHooks")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," This class represents Rush event hooks configured for this repo. Hooks are customized script actions that Rush executes when specific events occur. The actions are expressed as a command-line that is executed using the operating system shell.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.experimentsconfiguration"},"ExperimentsConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},'Use this class to load the "common/config/rush/experiments.json" config file. This file allows repo maintainers to enable and disable experimental Rush features.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.filesystembuildcacheprovider"},"FileSystemBuildCacheProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," A build cache provider using the local file system. Required by all cloud cache providers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.individualversionpolicy"},"IndividualVersionPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"This policy indicates all related projects get version bump driven by their own changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.lockstepversionpolicy"},"LockStepVersionPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"This policy indicates all related projects should use the same version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.lookupbypath"},"LookupByPath")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," This class is used to associate POSIX relative paths, such as those returned by ",(0,r.kt)("code",null,"git")," commands, with entities that correspond with ancestor folders, such as Rush Projects."),(0,r.kt)("p",null,"It is optimized for efficiently locating the nearest ancestor path with an associated value."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.npmoptionsconfiguration"},"NpmOptionsConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},"Options that are only used when the NPM package manager is selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.packagejsondependency"},"PackageJsonDependency")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.packagejsoneditor"},"PackageJsonEditor")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.pnpmoptionsconfiguration"},"PnpmOptionsConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},'Options that are only used when the PNPM package manager is selected. Use this class to load "common/config/rush/pnpm-config.json" file, or, load json from "pnpmOptions" field in "rush.json" for legacy support.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.projectchangeanalyzer"},"ProjectChangeAnalyzer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.repostatefile"},"RepoStateFile")),(0,r.kt)("td",{parentName:"tr",align:null},"This file is used to track the state of various Rush-related features. It is generated and updated by Rush.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.rush"},"Rush")),(0,r.kt)("td",{parentName:"tr",align:null},"General operations for the Rush engine.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushconfiguration"},"RushConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},'This represents the Rush configuration for a repository, based on the "rush.json" configuration file.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushconfigurationproject"},"RushConfigurationProject")),(0,r.kt)("td",{parentName:"tr",align:null},"This represents the configuration of a project that is built by Rush, based on the Rush.json configuration file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushconstants"},"RushConstants")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Constants used by the Rush tool.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushlifecyclehooks"},"RushLifecycleHooks")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Hooks into the lifecycle of the Rush process invocation that plugins may tap into.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushsession"},"RushSession")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushuserconfiguration"},"RushUserConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Rush per-user configuration data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.versionpolicyconfiguration"},"VersionPolicyConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},'Use this class to load and save the "common/config/rush/version-policies.json" config file. This config file configures how different groups of projects will be published by Rush, and how their version numbers will be determined.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.yarnoptionsconfiguration"},"YarnOptionsConfiguration")),(0,r.kt)("td",{parentName:"tr",align:null},"Options that are only used when the yarn package manager is selected.")))),(0,r.kt)("h2",{id:"abstract-classes"},"Abstract Classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Abstract Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.packagemanager"},"PackageManager")),(0,r.kt)("td",{parentName:"tr",align:null},"An abstraction for controlling the supported package managers: PNPM, NPM, and Yarn.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.packagemanageroptionsconfigurationbase"},"PackageManagerOptionsConfigurationBase")),(0,r.kt)("td",{parentName:"tr",align:null},"Options that all package managers share.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.versionpolicy"},"VersionPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the base class for version policy which controls how versions get bumped.")))),(0,r.kt)("h2",{id:"enumerations"},"Enumerations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Enumeration"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.bumptype"},"BumpType")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of version bumps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.dependencytype"},"DependencyType")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.environmentvariablenames"},"EnvironmentVariableNames")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Names of environment variables used by Rush.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.event"},"Event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Events happen during Rush runs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.operationstatus"},"OperationStatus")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Enumeration defining potential states of an operation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.versionpolicydefinitionname"},"VersionPolicyDefinitionName")),(0,r.kt)("td",{parentName:"tr",align:null},"Version policy base type names")))),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Interface"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.icloudbuildcacheprovider"},"ICloudBuildCacheProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.iconfigurationenvironment"},"IConfigurationEnvironment")),(0,r.kt)("td",{parentName:"tr",align:null},"A collection of environment variables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.iconfigurationenvironmentvariable"},"IConfigurationEnvironmentVariable")),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the value of an environment variable, and if the value should be overridden if the variable is set in the parent environment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.icredentialcacheentry"},"ICredentialCacheEntry")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.icredentialcacheoptions"},"ICredentialCacheOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.ienvironmentconfigurationinitializeoptions"},"IEnvironmentConfigurationInitializeOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.iexperimentsjson"},"IExperimentsJson")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," This interface represents the raw experiments.json file which allows repo maintainers to enable and disable experimental Rush features.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.ifilesystembuildcacheprovideroptions"},"IFileSystemBuildCacheProviderOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Options for creating a file system build cache provider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.igeneratecacheentryidoptions"},"IGenerateCacheEntryIdOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Options for generating the cache id for an operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.igetchangedprojectsoptions"},"IGetChangedProjectsOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.iglobalcommand"},"IGlobalCommand")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Information about the currently executing global script command (as defined in command-line.json) provided to plugins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.ilaunchoptions"},"ILaunchOptions")),(0,r.kt)("td",{parentName:"tr",align:null},'Options to pass to the rush "launch" functions.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.ilogger"},"ILogger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.ioperationrunner"},"IOperationRunner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," The ",(0,r.kt)("code",null,"Operation")," class is a node in the dependency graph of work that needs to be scheduled by the ",(0,r.kt)("code",null,"OperationExecutionManager"),". Each ",(0,r.kt)("code",null,"Operation")," has a ",(0,r.kt)("code",null,"runner")," member of type ",(0,r.kt)("code",null,"IOperationRunner"),", whose implementation manages the actual process for running a single operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.ioperationrunnercontext"},"IOperationRunnerContext")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Information passed to the executing ",(0,r.kt)("code",null,"IOperationRunner"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.ipackagemanageroptionsjsonbase"},"IPackageManagerOptionsJsonBase")),(0,r.kt)("td",{parentName:"tr",align:null},"Options for the package manager.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.iphasedcommand"},"IPhasedCommand")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")),' Information about the currently executing phased script command (as defined in command-line.json, or default "build" or "rebuild") provided to plugins.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.irushcommand"},"IRushCommand")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Information about the currently executing command provided to plugins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.irushplugin"},"IRushPlugin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.irushsessionoptions"},"IRushSessionOptions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.istopwatchresult"},"IStopwatchResult")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Represents a readonly view of a ",(0,r.kt)("code",null,"Stopwatch"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.itelemetrydata"},"ITelemetryData")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.itelemetrymachineinfo"},"ITelemetryMachineInfo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.itelemetryoperationresult"},"ITelemetryOperationResult")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.itryfindrushjsonlocationoptions"},"ITryFindRushJsonLocationOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Options for ",(0,r.kt)("code",null,"RushConfiguration.tryFindRushJsonLocation"),".")))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.cloudbuildcacheproviderfactory"},"CloudBuildCacheProviderFactory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.getcacheentryidfunction"},"GetCacheEntryIdFunction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," Calculates the cache entry id string for an operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.packagemanagername"},"PackageManagerName")),(0,r.kt)("td",{parentName:"tr",align:null},"This represents the available Package Manager tools as a string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/rush-lib.pnpmstoreoptions"},"PnpmStoreOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"This represents the available PNPM store options")))))}u.isMDXComponent=!0}}]);