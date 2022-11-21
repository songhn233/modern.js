"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4277],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(18249),a=(r(52983),r(44993));const i={},o="afterLambdaRegisted",p={unversionedId:"apis/app/runtime/bff-server/after-lambda-registed",id:"apis/app/runtime/bff-server/after-lambda-registed",title:"afterLambdaRegisted",description:"afterLambdaRegisted hook \u53ef\u4ee5\u5728 express \u6846\u67b6\u6a21\u5f0f\u4e0b\uff0c\u6dfb\u52a0\u4ee3\u7801\u903b\u8f91\uff0c\u8be5 hook \u4e2d\u7684\u4ee3\u7801\u4f1a\u5728 BFF \u51fd\u6570\u6ce8\u518c\u8def\u7531\u540e\u6267\u884c\uff0c\u53ef\u4ee5\u7528\u4e8e\u6dfb\u52a0\u4e2d\u95f4\u4ef6\uff0c\u9519\u8bef\u5904\u7406\u7b49\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/bff-server/after-lambda-registed.md",sourceDirName:"apis/app/runtime/bff-server",slug:"/apis/app/runtime/bff-server/after-lambda-registed",permalink:"/v2/en/docs/apis/app/runtime/bff-server/after-lambda-registed",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apisAppSidebar",previous:{title:"hook",permalink:"/v2/en/docs/apis/app/runtime/bff-server/hook"},next:{title:"model",permalink:"/v2/en/docs/apis/app/runtime/model/model_"}},s={},l=[{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"afterlambdaregisted"},"afterLambdaRegisted"),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"afterLambdaRegisted")," hook \u53ef\u4ee5\u5728 express \u6846\u67b6\u6a21\u5f0f\u4e0b\uff0c\u6dfb\u52a0\u4ee3\u7801\u903b\u8f91\uff0c\u8be5 hook \u4e2d\u7684\u4ee3\u7801\u4f1a\u5728 BFF \u51fd\u6570\u6ce8\u518c\u8def\u7531\u540e\u6267\u884c\uff0c\u53ef\u4ee5\u7528\u4e8e\u6dfb\u52a0\u4e2d\u95f4\u4ef6\uff0c\u9519\u8bef\u5904\u7406\u7b49\u3002")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"export const afterLambdaRegisted = (app: Express) => void")),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"app: ",(0,a.kt)("inlineCode",{parentName:"li"},"Express"),"\uff0cExpress \u5b9e\u4f8b\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=api/app.ts",title:"api/app.ts"},"const app = express();\n// \u5176\u4ed6\u4ee3\u7801...\nexport default app;\n\nexport const afterLambdaRegisted = (app: Express) => {\n  const errorHandler = (\n    err: Error,\n    req: Request,\n    res: Response,\n    next: NextFunction,\n  ) => {\n    if (res.headersSent) {\n      return next(err);\n    }\n    res.status(500).send('some error message');\n  }\n  app.use(errHandler);\n}\n")))}d.isMDXComponent=!0}}]);