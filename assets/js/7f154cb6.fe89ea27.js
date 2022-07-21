"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[13522],{45242:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(63929);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,g=d["".concat(u,".").concat(f)]||d[f]||s[f]||c;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3531:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=t(50394),o=t(51614),c=(t(63929),t(45242)),i=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,l={unversionedId:"pages/rush-lib.rushconfigurationproject.decoupledlocaldependencies",id:"pages/rush-lib.rushconfigurationproject.decoupledlocaldependencies",title:"rush-lib.rushconfigurationproject.decoupledlocaldependencies",description:"Home &gt; @microsoft/rush-lib &gt; RushConfigurationProject &gt; decoupledLocalDependencies",source:"@site/docs/pages/rush-lib.rushconfigurationproject.decoupledlocaldependencies.md",sourceDirName:"pages",slug:"/pages/rush-lib.rushconfigurationproject.decoupledlocaldependencies",permalink:"/pages/rush-lib.rushconfigurationproject.decoupledlocaldependencies",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},s=[{value:"RushConfigurationProject.decoupledLocalDependencies property",id:"rushconfigurationprojectdecoupledlocaldependencies-property",level:2}],d={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/rush-lib.rushconfigurationproject.decoupledlocaldependencies"},"decoupledLocalDependencies")),(0,c.kt)("h2",{id:"rushconfigurationprojectdecoupledlocaldependencies-property"},"RushConfigurationProject.decoupledLocalDependencies property"),(0,c.kt)("p",null,"A list of local projects that appear as devDependencies for this project, but cannot be locally linked because it would create a cyclic dependency; instead, the last published version will be installed in the Common folder."),(0,c.kt)("p",null,"These are package names that would be found by RushConfiguration.getProjectByName()."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Signature:")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"get decoupledLocalDependencies(): Set<string>;\n")))}f.isMDXComponent=!0}}]);