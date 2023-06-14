"use strict";(self.webpackChunkapi_rushstack_io=self.webpackChunkapi_rushstack_io||[]).push([[66055],{50158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(46393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),u=i,h=s["".concat(p,".").concat(u)]||s[u]||d[u]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(29122),i=n(46393),a=n(50158);const l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"pages/api-extractor-model.apiitemcontainermixin.findmemberswithinheritance",id:"pages/api-extractor-model.apiitemcontainermixin.findmemberswithinheritance",title:"api-extractor-model.apiitemcontainermixin.findmemberswithinheritance",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiItemContainerMixin &gt; findMembersWithInheritance",source:"@site/docs/pages/api-extractor-model.apiitemcontainermixin.findmemberswithinheritance.md",sourceDirName:"pages",slug:"/pages/api-extractor-model.apiitemcontainermixin.findmemberswithinheritance",permalink:"/pages/api-extractor-model.apiitemcontainermixin.findmemberswithinheritance",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},m={},c=[{value:"ApiItemContainerMixin.findMembersWithInheritance() method",id:"apiitemcontainermixinfindmemberswithinheritance-method",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apiitemcontainermixin"},"ApiItemContainerMixin")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.apiitemcontainermixin.findmemberswithinheritance"},"findMembersWithInheritance")),(0,a.kt)("h2",{id:"apiitemcontainermixinfindmemberswithinheritance-method"},"ApiItemContainerMixin.findMembersWithInheritance() method"),(0,a.kt)("p",null,"Finds all of the ApiItem's immediate and inherited members by walking up the inheritance tree."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"findMembersWithInheritance(): IFindApiItemsResult;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api-extractor-model.ifindapiitemsresult"},"IFindApiItemsResult")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Given the following class heritage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export class A {\n  public a: number|boolean;\n}\n\nexport class B extends A {\n  public a: number;\n  public b: string;\n}\n\nexport class C extends B {\n  public c: boolean;\n}\n")),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"findMembersWithInheritance")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," will return ",(0,a.kt)("inlineCode",{parentName:"p"},"B.a"),(0,a.kt)(i.Fragment,null),", ",(0,a.kt)("inlineCode",{parentName:"p"},"B.b"),(0,a.kt)(i.Fragment,null),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"C.c"),(0,a.kt)(i.Fragment,null),". Calling the method on ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," will return ",(0,a.kt)("inlineCode",{parentName:"p"},"B.a")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"B.b"),(0,a.kt)(i.Fragment,null),". And calling the method on ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," will return just ",(0,a.kt)("inlineCode",{parentName:"p"},"A.a"),(0,a.kt)(i.Fragment,null),"."),(0,a.kt)("p",null,"The inherited members returned by this method may be incomplete. If so, there will be a flag on the result object indicating this as well as messages explaining the errors in more detail. Some scenarios include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Interface extending from a type alias.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Class extending from a variable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Extending from a declaration not present in the model (e.g. external package).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Extending from an unexported declaration (e.g. ae-forgotten-export). Common in mixin patterns.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Unexpected runtime errors..."))),(0,a.kt)("p",null,"Lastly, be aware that the types of inherited members are returned with respect to their defining class as opposed to with respect to the inheriting class. For example, consider the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export class A<T> {\n  public a: T;\n}\n\nexport class B extends A<number> {}\n")),(0,a.kt)("p",null,"When called on ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),(0,a.kt)(i.Fragment,null),", this method will return ",(0,a.kt)("inlineCode",{parentName:"p"},"B.a")," with type ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," as opposed to type ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),(0,a.kt)(i.Fragment,null),", although the latter is more accurate."))}u.isMDXComponent=!0}}]);