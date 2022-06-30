"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1567],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(86215),r=(n(49231),n(54852));const i={sidebar_position:2,title:"\u643a\u5e26 Schema \u7684 BFF \u51fd\u6570"},l=void 0,o={unversionedId:"guides/features/server-side/bff/schema",id:"guides/features/server-side/bff/schema",title:"\u643a\u5e26 Schema \u7684 BFF \u51fd\u6570",description:"\u4e4b\u524d\u5c0f\u8282\u63d0\u5230\u8fc7 Modern.js \u4e2d\u7684\u4e24\u79cd BFF \u51fd\u6570\u5b9a\u4e49\uff0c\u8fd9\u4e00\u5c0f\u8282\u6765\u7740\u91cd\u4e86\u89e3\u4e00\u4e0b schema BFF \u51fd\u6570\u3002",source:"@site/docs/guides/features/server-side/bff/schema.md",sourceDirName:"guides/features/server-side/bff",slug:"/guides/features/server-side/bff/schema",permalink:"/docs/guides/features/server-side/bff/schema",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u643a\u5e26 Schema \u7684 BFF \u51fd\u6570"},sidebar:"guidesSidebar",previous:{title:"BFF \u51fd\u6570",permalink:"/docs/guides/features/server-side/bff/function"},next:{title:"\u5b9a\u5236 BFF Server",permalink:"/docs/guides/features/server-side/bff/bff-server"}},p={},m=[{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:2},{value:"match",id:"match",level:2},{value:"\u57fa\u7840\u7684\u6570\u636e\u53d1\u9001",id:"\u57fa\u7840\u7684\u6570\u636e\u53d1\u9001",level:3},{value:"\u7279\u6b8a\u7684\u6570\u636e\u53d1\u9001",id:"\u7279\u6b8a\u7684\u6570\u636e\u53d1\u9001",level:3},{value:"Schema \u6821\u9a8c\u89c4\u5219",id:"schema-\u6821\u9a8c\u89c4\u5219",level:2},{value:"\u6821\u9a8c\u5b57\u6bb5",id:"\u6821\u9a8c\u5b57\u6bb5",level:3},{value:"\u6821\u9a8c\u5931\u8d25\u7684\u5904\u7406",id:"\u6821\u9a8c\u5931\u8d25\u7684\u5904\u7406",level:3},{value:"Type Schema Builder",id:"type-schema-builder",level:3}],s={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e4b\u524d\u5c0f\u8282\u63d0\u5230\u8fc7 Modern.js \u4e2d\u7684\u4e24\u79cd BFF \u51fd\u6570\u5b9a\u4e49\uff0c\u8fd9\u4e00\u5c0f\u8282\u6765\u7740\u91cd\u4e86\u89e3\u4e00\u4e0b schema BFF \u51fd\u6570\u3002"),(0,r.kt)("p",null,"Modern.js \u4e2d\u5185\u7f6e\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farrow-js/farrow/tree/master/packages/farrow-schema"},"farrow-schema")," \u7684 Type Schema Builder\uff0c\u501f\u7528\u8fd9\u4e9b Schema Builder \u4e3a BFF \u63a5\u53e3\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u80fd\u529b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u7684\u63a5\u53e3\u53c2\u6570\u6570\u636e\u6821\u9a8c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u7684\u63a5\u53e3\u8fd4\u56de\u503c\u6570\u636e\u6821\u9a8c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u751f\u6210\u5b8c\u6574 TypeScript \u7c7b\u578b\u63a5\u53e3\u8c03\u7528 SDK\uff0c\u4ee5\u53ca\u66f4\u6709\u9488\u5bf9\u6027\u6d4b\u8bd5\u3001\u66f4\u6b63\u786e\u7684\u81ea\u52a8 Mock \u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5bf9\u5404\u79cd\u6570\u636e\u7c7b\u578b\u7684\u8bf7\u6c42\u53d1\u9001\u5904\u7406\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"text/plain"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"application/json"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"multipart/form-data"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"multipart/form-data")," \u7684\u5f62\u5f0f\u4e0a\u4f20\u6587\u4ef6\u3002")),(0,r.kt)("h2",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { match } from '@modern-js/runtime/server';\n\nexport const post = match(\n  {\n    request: {\n      data: {\n        a: Number,\n        b: Number,\n      },\n    },\n    response: Number,\n  },\n  ({ data: { a, b } }) => {\n    return a + b;\n  },\n);\n")),(0,r.kt)("h2",{id:"match"},"match"),(0,r.kt)("p",null,"Modern.js \u4e2d\u63d0\u4f9b\u4e86\u5b9a\u4e49 schema BFF \u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," \u51fd\u6570\uff0c\u8be5\u51fd\u6570\u652f\u6301\u901a\u8fc7 Type Schema Builder \u63cf\u8ff0 RESTful \u98ce\u683c\u7684\u63a5\u53e3\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"match")," \u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"matcher")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"handler"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"matcher")," \u7684\u4f5c\u7528\u662f\u63cf\u8ff0\u5f53\u524d\u63a5\u53e3\u7684\u5f62\u72b6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"matcher")," \u4e2d\u6709 4 \u4e2a\u5b57\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request"),"\uff1a \u63a5\u53e3\u5165\u53c2\u76f8\u5173\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"response"),"\uff1a\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description"),"\uff08\u53ef\u9009\uff09\uff1a\u63a5\u53e3\u63cf\u8ff0\u6587\u5b57"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deprecated"),"\uff08\u53ef\u9009\uff09\uff1a\u63a5\u53e3\u5e9f\u5f03\u72b6\u6001\u4e0e\u539f\u56e0")),(0,r.kt)("p",null,"\u5176\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," \u8f83\u4e3a\u590d\u6742\uff0c\u5b83\u7528\u6765\u5b9a\u4e49\u8bf7\u6c42\u7684\u4e00\u4e9b\u5fc5\u8981\u4fe1\u606f\uff0c\u5b83\u6709\u56db\u4e2a\u57fa\u7840\u5b57\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params"),"\uff08\u53ef\u9009\uff09\uff1a\u52a8\u6001\u8def\u7531\u7684\u547d\u540d\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query"),"\uff08\u53ef\u9009\uff09\uff1a\u8bf7\u6c42 URL \u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"},"search")," \u90e8\u5206\u7684\u5e8f\u5217\u5316\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),"\uff08\u53ef\u9009\uff09\uff1a\u8bf7\u6c42\u643a\u5e26\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"},"HTTP Header")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cookies"),"\uff08\u53ef\u9009\uff09\uff1a\u8bf7\u6c42\u643a\u5e26\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies"},"HTTP Header"))),(0,r.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a 4 \u4e2a\u57fa\u7840\u5b57\u6bb5\uff0c\u8fd8\u6709\u652f\u6301\u63cf\u8ff0 4 \u79cd\u7c7b\u578b\u6570\u636e\uff0c\u5bf9\u5e94 4 \u4e2a\u5b57\u6bb5\uff0c\u4f7f\u7528\u65f6\uff0c\u8fd9 4 \u5b57\u6bb5\u9700\u8981 4 \u9009 1\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"body")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formUrlencoded"))),(0,r.kt)("p",null,"\u7531\u4e8e\u5b83\u4eec\u5bf9\u5e94\u7684\u6570\u636e\u7c7b\u578b\u4e0d\u540c\uff0c\u80fd\u529b\u4e5f\u4e0d\u540c\uff0c\u6240\u4ee5\u8fd9\u91cc\u5206\u5f00\u4ecb\u7ecd\u3002"),(0,r.kt)("h3",{id:"\u57fa\u7840\u7684\u6570\u636e\u53d1\u9001"},"\u57fa\u7840\u7684\u6570\u636e\u53d1\u9001"),(0,r.kt)("p",null,"\u8fd9\u90e8\u5206\u4e3b\u8981\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u652f\u6301\u7684 JSON \u6570\u636e\u7684\u53d1\u9001\u3001\u548c JSON \u6570\u636e\u6570\u636e\u7684\u81ea\u52a8\u6821\u9a8c\uff0c\u7b80\u5355\u7684\u5199\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/hello.ts"',title:'"api/hello.ts"'},"import { match } form '@modern-js/runtime/server'\n\nexport const post = match(\n  {\n    request: {\n      data: { name: String }\n    },\n    response: {\n      message: String\n    }\n  },\n  (request) => { // request: { data: { name: string } }\n    return {\n      message: `Hello ${request.data.name}!`\n    }\n  }\n)\n")),(0,r.kt)("p",null,"\u4e00\u4f53\u5316\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u8c03\u7528\u4ee3\u7801",title:"\u8c03\u7528\u4ee3\u7801"},"import { post } from '../api/hello'\n\n// res: { message: 'Hello Modern.js!' }\nconst res = await post({ data: { name: 'Modern.js' } })\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4f7f\u7528l\u4e86 Schema Builder \u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u5b57\u6bb5\u8fdb\u884c\u63cf\u8ff0\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," \u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," \u7684\u5165\u53c2\u4e2d\u53ef\u4ee5\u5f97\u5230\u5b8c\u5584\u7684 TypeScript \u7684\u7c7b\u578b\u63a8\u5bfc\uff0c\u4e5f\u8ba9\u63a5\u53e3\u62e5\u6709\u4e86\u6821\u9a8c\u53c2\u6570\u7684\u80fd\u529b\u3002"),(0,r.kt)("h3",{id:"\u7279\u6b8a\u7684\u6570\u636e\u53d1\u9001"},"\u7279\u6b8a\u7684\u6570\u636e\u53d1\u9001"),(0,r.kt)("p",null,"\u8fd9\u90e8\u5206\u4e3b\u8981\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"formData"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"formUrlencoded")," \u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"text/plain"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," \u7684\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u5f53\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"matcher")," \u4e2d\uff0c\u6ca1\u6709\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u5b57\u6bb5\u4f7f\u7528 Schema Builder \u63cf\u8ff0\uff0c\u5219\u8c03\u7528\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f20\u8fd9 3 \u4e2a\u5b57\u6bb5\u4e2d\u7684 1 \u4e2a\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/hello.ts"',title:'"api/hello.ts"'},"import { match } from '@modern-js/runtime/server'\n\nexport const post = match(\n    {\n        request: {\n            // without data\n        },\n        response: {\n            message: String\n        }\n    },\n    (request) => {\n    // request: { body?: string, formData?: Record<string, any>, formUrlencoded?: Record<string, string> }\n        return {\n            message: `Hello!`\n        }\n    }\n)\n")),(0,r.kt)("p",null,"\u5728\u8c03\u7528\u7684\u65f6\u5019\u53ef\u4ee5\u4f20\u9012\u4ee5\u4e0b\u7684\u6570\u636e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text/plain"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { post } from '@api/hello'\n\nconst res = await post({ body: 'Hello' })\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"multipart/form-data"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { post } from '../api/hello'\n\nconst formData = new FormData()\n\nformData.append('test', 'foo')\nconst res = await post({ formData })\n\n// \u4e0a\u4f20\u6587\u4ef6\nconst input = document.querySelector('input[type=\"file\"]')\nformData.append('file', input.files[0])\nconst res = await post({ formData })\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { post } from '../api/hello'\n\n// string: xxx=xxx\nconst res = await post({ formUrlencoded: 'test=foo' })\n\n// Record<string, string>\nconst res = await post({ formUrlencoded: { test: 'foo' } })\n\n// URLSearchParams\nconst urlSearchParams = new URLSearchParams()\nurlSearchParams.append('test', 'foo')\nconst res = await post({ formUrlencoded: urlSearchParams })\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," \u5b9a\u4e49\u7684 BFF \u51fd\u6570\u7684\u5165\u53c2\u5f62\u5f0f\u4e0e\u666e\u901a\u7684 BFF \u51fd\u6570\u662f\u6709\u6240\u4e0d\u540c\u7684\u3002"))),(0,r.kt)("h2",{id:"schema-\u6821\u9a8c\u89c4\u5219"},"Schema \u6821\u9a8c\u89c4\u5219"),(0,r.kt)("h3",{id:"\u6821\u9a8c\u5b57\u6bb5"},"\u6821\u9a8c\u5b57\u6bb5"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," \u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"matcher")," \u53c2\u6570\u4e2d\uff0c\u6709\u4e9b\u5b57\u6bb5\u662f\u53ef\u4ee5\u4f7f\u7528 Schema Builder \u63cf\u8ff0\u5e76\u63d0\u4f9b\u4e86\u7c7b\u578b\u6821\u9a8c\u80fd\u529b\uff0c\u800c\u6709\u4e9b\u5b57\u6bb5\u662f\u62e5\u6709\u7279\u5b9a\u7c7b\u578b\uff0c\u4e0d\u652f\u6301\u4f7f\u7528 Schema Builder \u63cf\u8ff0\uff0c\u5f53\u7136\u4e5f\u6ca1\u6709\u7c7b\u578b\u6821\u9a8c\u80fd\u529b\u7684\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params"),"\uff1a\u53ef\u4f7f\u7528 Schema Builder \u63cf\u8ff0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query"),"\uff1a\u53ef\u4f7f\u7528 Schema Builder \u63cf\u8ff0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers"),"\uff1a\u53ef\u4f7f\u7528 Schema Builder \u63cf\u8ff0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cookies"),"\uff1a\u53ef\u4f7f\u7528 Schema Builder \u63cf\u8ff0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\uff1a\u53ef\u4f7f\u7528 Schema Builder \u63cf\u8ff0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"body"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formData"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"FormData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formUrlencoded"),"\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"URLSearchParams | Record<string, string> | string")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"response"),": \u53ef\u4f7f\u7528 Schema Builder \u63cf\u8ff0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deprecated"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("h3",{id:"\u6821\u9a8c\u5931\u8d25\u7684\u5904\u7406"},"\u6821\u9a8c\u5931\u8d25\u7684\u5904\u7406"),(0,r.kt)("p",null,"\u6821\u9a8c\u5931\u8d25\u4e3b\u8981\u5206\u4e3a\u4e24\u79cd\uff1a\u5165\u53c2\u6821\u9a8c\u5931\u8d25\u548c\u8fd4\u56de\u503c\u6821\u9a8c\u5931\u8d25\u3002\u5f53\u5165\u53c2\u6821\u9a8c\u5931\u8d25\u65f6\uff0c\u54cd\u5e94 code \u4e3a 400\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"body")," \u4e2d\u4f1a\u643a\u5e26\u6821\u9a8c\u5931\u8d25\u54cd\u5e94\u7684\u4fe1\u606f\uff0c\u800c\u5f53\u8fd4\u56de\u503c\u6821\u9a8c\u5931\u8d25\u65f6\uff0c\u54cd\u5e94 code \u4e3a 500\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"body")," \u4e2d\u540c\u6837\u4f1a\u643a\u5e26\u6821\u9a8c\u5931\u8d25\u54cd\u5e94\u7684\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { match } form '@modern-js/runtime/bff'\n\nexport const post = match(\n    {\n        request: {\n            data: { name: String }\n        },\n        response: {\n            message: String\n        }\n    },\n    (request) => { // request: { data: { name: string } }\n        return {\n            message: `Hello ${request.data.name}!`\n        }\n    }\n)\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u9762\u7684\u793a\u4f8b\u4e3a\u4f8b\uff0c\u5f53\u8fd9\u91cc ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u4e2d\u4f20\u9012\u7684\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"{ name: string }")," \u65f6\uff0c\u6bd4\u5982\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"{ name: 0 }")," \u65f6\uff0c\u54cd\u5e94 code \u4e3a 400\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"res.body")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"name is not string"),"\u3002"),(0,r.kt)("p",null,"\u5f53 BFF \u51fd\u6570\u8fd4\u56de\u7684\u5185\u5bb9\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"{ message: string }")," \u65f6\uff0c\u5219\u54cd\u5e94 code \u4e3a 500, ",(0,r.kt)("inlineCode",{parentName:"p"},"res.body")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"message is not string"),"\u3002"),(0,r.kt)("h3",{id:"type-schema-builder"},"Type Schema Builder"),(0,r.kt)("p",null,"\u5173\u4e8e Type Schema Builder \u7684\u7528\u6cd5\u4e0e\u80fd\u529b\uff0c\u53ef\u4ee5\u67e5\u770b farrow \u7684\u76f8\u5173\u6587\u6863\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farrow-js/farrow/tree/master/packages/farrow-schema/README.md"},"farrow-schema"),"\u3002"))}d.isMDXComponent=!0}}]);