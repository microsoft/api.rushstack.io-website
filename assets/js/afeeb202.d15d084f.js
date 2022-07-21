"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[7229],{45242:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(50394),a=n(51614),l=(n(63929),n(45242)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,s={unversionedId:"pages/rush-lib.rushlifecyclehooks",id:"pages/rush-lib.rushlifecyclehooks",title:"rush-lib.rushlifecyclehooks",description:"Home &gt; @microsoft/rush-lib &gt; RushLifecycleHooks",source:"@site/docs/pages/rush-lib.rushlifecyclehooks.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushlifecyclehooks",permalink:"/pages/rush-lib.rushlifecyclehooks",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},c=[{value:"RushLifecycleHooks class",id:"rushlifecyclehooks-class",level:2},{value:"Properties",id:"properties",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushlifecyclehooks"},"RushLifecycleHooks")),(0,l.kt)("h2",{id:"rushlifecyclehooks-class"},"RushLifecycleHooks class"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,l.kt)("p",null,"Hooks into the lifecycle of the Rush process invocation that plugins may tap into."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class RushLifecycleHooks\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushlifecyclehooks.flushtelemetry"},"flushTelemetry")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AsyncParallelHook","<","[","ReadonlyArray","<",(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.itelemetrydata"},"ITelemetryData")," ",">","]",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," A hook to allow plugins to hook custom logic to process telemetry data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushlifecyclehooks.initialize"},"initialize")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AsyncSeriesHook","<",(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.irushcommand"},"IRushCommand")," ",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," The hook to run before executing any Rush CLI Command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushlifecyclehooks.runanyglobalcustomcommand"},"runAnyGlobalCustomCommand")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AsyncSeriesHook","<",(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.iglobalcommand"},"IGlobalCommand")," ",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," The hook to run before executing any global Rush CLI Command (defined in command-line.json).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushlifecyclehooks.runanyphasedcommand"},"runAnyPhasedCommand")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AsyncSeriesHook","<",(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.iphasedcommand"},"IPhasedCommand")," ",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")),' The hook to run before executing any phased Rush CLI Command (defined in command-line.json, or the default "build" or "rebuild").')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushlifecyclehooks.runglobalcustomcommand"},"runGlobalCustomCommand")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"HookMap","<","AsyncSeriesHook","<",(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.iglobalcommand"},"IGlobalCommand")," ",">",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," A hook map to allow plugins to hook specific named global commands (defined in command-line.json) before execution.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.rushlifecyclehooks.runphasedcommand"},"runPhasedCommand")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"HookMap","<","AsyncSeriesHook","<",(0,l.kt)("a",{parentName:"td",href:"/pages/rush-lib.iphasedcommand"},"IPhasedCommand")," ",">",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," A hook map to allow plugins to hook specific named phased commands (defined in command-line.json) before execution.")))))}d.isMDXComponent=!0}}]);