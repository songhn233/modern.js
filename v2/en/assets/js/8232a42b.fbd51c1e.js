"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3494],{44993:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(18249),a=(r(52983),r(44993));const i={sidebar_position:6},o="@modern-js/codesmith-api-ejs",l={unversionedId:"guides/topic-detail/generator/codesmith/api/ejs",id:"guides/topic-detail/generator/codesmith/api/ejs",title:"@modern-js/codesmith-api-ejs",description:"\u5fae\u751f\u6210\u5668\u4e2d\u4f7f\u7528 ejs \u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\u7684 API \u5c01\u88c5\uff0c\u63d0\u4f9b\u6e32\u67d3\u5355\u4e2a\u6a21\u677f\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u7684\u65b9\u6cd5\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/ejs.md",sourceDirName:"guides/topic-detail/generator/codesmith/api",slug:"/guides/topic-detail/generator/codesmith/api/ejs",permalink:"/v2/en/docs/guides/topic-detail/generator/codesmith/api/ejs",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"@modern-js/codesmith-api-handlebars",permalink:"/v2/en/docs/guides/topic-detail/generator/codesmith/api/handlebars"},next:{title:"@modern-js/codesmith-api-npm",permalink:"/v2/en/docs/guides/topic-detail/generator/codesmith/api/npm"}},p={},s=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"API",id:"api",level:2},{value:"renderTemplate",id:"rendertemplate",level:3},{value:"renderTemplateDir",id:"rendertemplatedir",level:3}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modern-jscodesmith-api-ejs"},"@modern-js/codesmith-api-ejs"),(0,a.kt)("p",null,"\u5fae\u751f\u6210\u5668\u4e2d\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://ejs.co/"},"ejs")," \u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\u7684 API \u5c01\u88c5\uff0c\u63d0\u4f9b\u6e32\u67d3\u5355\u4e2a\u6a21\u677f\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EjsAPI } from '@modern-js/codesmith-api-ejs';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const ejsAPI = new EjsAPI(generator);\n  await ejsAPI.renderTemplate(\n     material.get('templates/a.js'),\n     target: 'b.js',\n     { data: \"data\" }\n   );\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa EjsAPI \u5b9e\u4f8b\uff0c\u53c2\u6570\u4e3a\u5fae\u751f\u6210\u5668\u51fd\u6570\u53c2\u6570\u7684 generator\uff0c\u5177\u4f53\u4ecb\u7ecd\u8bf7\u770b\u5fae\u751f\u6210\u5668\u9879\u76ee\u7ec4\u6210 \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8c03\u7528\u5176\u5b9e\u4f8b\u4e0a API \u5373\u53ef\u3002")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"rendertemplate"},"renderTemplate"),(0,a.kt)("p",null,"\u6e32\u67d3\u5355\u4e2a\u6a21\u677f\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"templateResource: ",(0,a.kt)("inlineCode",{parentName:"li"},"FsResource")," \u6a21\u677f\u6587\u4ef6\u8d44\u6e90\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"context.materials.get(<filename>)")," \u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"target: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u76ee\u6807\u6587\u4ef6\u8def\u5f84\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},"parameters?: ",(0,a.kt)("inlineCode",{parentName:"li"},"Record<string, string>")," \u6e32\u67d3\u53c2\u6570\u3002")),(0,a.kt)("h3",{id:"rendertemplatedir"},"renderTemplateDir"),(0,a.kt)("p",null,"\u6e32\u67d3\u6a21\u677f\u6587\u4ef6\u5939\u3002"),(0,a.kt)("p",null,"\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"material: ",(0,a.kt)("inlineCode",{parentName:"li"},"FsMaterial")," \u5f53\u524d\u5fae\u751f\u6210\u5668\u6267\u884c\u7684 material \u4e0a\u4e0b\u6587\u3002"),(0,a.kt)("li",{parentName:"ul"},"findGlob: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u6a21\u677f\u6587\u4ef6\u5339\u914d\u6b63\u5219\u3002"),(0,a.kt)("li",{parentName:"ul"},"target: ",(0,a.kt)("inlineCode",{parentName:"li"},"(globMatch: string) => string")," \u76ee\u6807\u6587\u4ef6\u8def\u5f84\u751f\u6210\u51fd\u6570\uff0c\u53c2\u6570\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"resourceKey\u3002")),(0,a.kt)("li",{parentName:"ul"},"options?: ",(0,a.kt)("inlineCode",{parentName:"li"},"RenderTemplateDirOptions")," glob \u67e5\u627e\u6587\u4ef6\u914d\u7f6e\uff0c\u5177\u4f53\u51fd\u6570\u53ef\u67e5\u770b\u8fd9\u91cc ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/glob"},"glob"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type RenderTemplateDirOptions = {\n  nodir?: boolean;\n  dot?: boolean;\n  ignore?: string | readonly string[];\n};\n")))}c.isMDXComponent=!0}}]);