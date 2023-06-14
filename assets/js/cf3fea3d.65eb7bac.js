"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[54582],{50158:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var r=a(46393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return a?r.createElement(d,o(o({ref:t},l),{},{components:a})):r.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},77896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(29122),n=a(46393),i=a(50158);const o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/heft.iheftbaseparameter.actionassociated",id:"pages/heft.iheftbaseparameter.actionassociated",title:"heft.iheftbaseparameter.actionassociated",description:"Home &gt; @rushstack/heft &gt; IHeftBaseParameter &gt; actionAssociated",source:"@site/docs/pages/heft.iheftbaseparameter.actionassociated.md",sourceDirName:"pages",slug:"/pages/heft.iheftbaseparameter.actionassociated",permalink:"/pages/heft.iheftbaseparameter.actionassociated",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},c={},l=[{value:"IHeftBaseParameter.actionAssociated property",id:"iheftbaseparameteractionassociated-property",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:l},m="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft"},"@rushstack/heft")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft.iheftbaseparameter"},"IHeftBaseParameter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft.iheftbaseparameter.actionassociated"},"actionAssociated")),(0,i.kt)("h2",{id:"iheftbaseparameteractionassociated-property"},"IHeftBaseParameter.actionAssociated property"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"If true, then the user has invoked Heft with a command line action that supports this parameter (as defined by the ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft.iparameterassociatedactionnames.associatedactionnames"},"IParameterAssociatedActionNames.associatedActionNames")," option)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly actionAssociated: boolean;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," is one of the associated action names for ",(0,i.kt)("inlineCode",{parentName:"p"},"--my-integer-parameter"),(0,i.kt)(n.Fragment,null),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"actionAssociated")," will be true if the user invokes ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build"),(0,i.kt)(n.Fragment,null),"."),(0,i.kt)("p",null,"To test whether the parameter was actually included (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build --my-integer-parameter 123"),(0,i.kt)(n.Fragment,null),"), verify the ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft.iheftbaseparameter.value"},"IHeftBaseParameter.value")," property is not ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),(0,i.kt)(n.Fragment,null),"."))}f.isMDXComponent=!0}}]);