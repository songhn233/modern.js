"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2216],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(18249),r=(n(52983),n(44993));const i={sidebar_position:1},l="@modern-js/codesmith-api-app",o={unversionedId:"guides/topic-detail/generator/codesmith/api/app",id:"guides/topic-detail/generator/codesmith/api/app",title:"@modern-js/codesmith-api-app",description:"\u5fae\u751f\u6210\u5668\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5e38\u7528 API \u7684\u7ec4\u5408\u5c01\u88c5\uff0c\u5305\u542b fs\u3001git\u3001npm \u7b49\u5176\u4ed6\u5305\u7684 API \u5c01\u88c5\uff0c\u5728\u80fd\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u63a8\u8350\u4f7f\u7528\u8be5 npm \u5305\u7684 API\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/codesmith/api/app.md",sourceDirName:"guides/topic-detail/generator/codesmith/api",slug:"/guides/topic-detail/generator/codesmith/api/app",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/api/app",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528 JS \u4ee3\u7801\u6267\u884c\u5fae\u751f\u6210\u5668",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/run-in-js"},next:{title:"@modern-js/codesmith-api-json",permalink:"/v2/docs/guides/topic-detail/generator/codesmith/api/json"}},p={},s=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"API",id:"api",level:2},{value:"checkEnvironment",id:"checkenvironment",level:3},{value:"runInstall",id:"runinstall",level:3},{value:"runGitAndInstall",id:"rungitandinstall",level:3},{value:"forgeTemplate",id:"forgetemplate",level:3},{value:"showSuccessInfo",id:"showsuccessinfo",level:3},{value:"runSubGenerator",id:"runsubgenerator",level:3},{value:"getInputBySchema",id:"getinputbyschema",level:3},{value:"getInputBySchemaFunc",id:"getinputbyschemafunc",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modern-jscodesmith-api-app"},"@modern-js/codesmith-api-app"),(0,r.kt)("p",null,"\u5fae\u751f\u6210\u5668\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5e38\u7528 API \u7684\u7ec4\u5408\u5c01\u88c5\uff0c\u5305\u542b fs\u3001git\u3001npm \u7b49\u5176\u4ed6\u5305\u7684 API \u5c01\u88c5\uff0c\u5728\u80fd\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u63a8\u8350\u4f7f\u7528\u8be5 npm \u5305\u7684 API\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppAPI } from '@modern-js/codesmith-api-app';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const appApi = new AppAPI(context, generator);\n  await appApi.runInstall();\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa AppAPI \u5b9e\u4f8b\uff0c\u53c2\u6570\u548c\u5fae\u751f\u6210\u5668\u51fd\u6570\u53c2\u6570\u4e00\u81f4\uff0c\u4e3a context \u548c generator\uff0c\u5177\u4f53\u4ecb\u7ecd\u8bf7\u770b",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/topic-detail/generator/codesmith/structure"},"\u5fae\u751f\u6210\u5668\u9879\u76ee\u7ec4\u6210"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528\u5176\u5b9e\u4f8b\u4e0a API \u5373\u53ef\u3002")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"checkenvironment"},"checkEnvironment"),(0,r.kt)("p",null,"\u68c0\u67e5\u5f53\u524d\u751f\u6210\u5668\u8fd0\u884c\u73af\u5883\uff0c\u68c0\u67e5\u9879\u4e3a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"node \u53ca node \u7248\u672c\uff0c\u9ed8\u8ba4\u5927\u4e8e 12.22.12\uff0c\u53ef\u4f20\u9012\u53c2\u6570\u6267\u884c node \u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4f7f\u7528 yarn\u3001pnpm \u6216\u8005 npm\u3002")),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nodeVersion?: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u6821\u9a8c\u7684 node \u7248\u672c")),(0,r.kt)("h3",{id:"runinstall"},"runInstall"),(0,r.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\uff0c\u53ef\u4f20\u5165\u5b89\u88c5\u4f9d\u8d56\u547d\u4ee4\uff0c\u9ed8\u8ba4\u6839\u636e config \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"packageManager")," \u503c\u8fdb\u884c\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"command?: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u5b89\u88c5\u4f9d\u8d56\u547d\u4ee4")),(0,r.kt)("h3",{id:"rungitandinstall"},"runGitAndInstall"),(0,r.kt)("p",null,"\u8be5\u51fd\u6570\u5b8c\u6210\u4ee5\u4e0b\u52a8\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6821\u9a8c\u5f53\u524d\u751f\u6210\u5668\u6267\u884c\u76ee\u5f55\u662f\u5426\u4e3a\u4e00\u4e2a git \u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u662f\u4e00\u4e2a git \u4ed3\u5e93\uff0c\u521d\u59cb\u5316\u4e3a\u4e00\u4e2a git \u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u975e monorepo \u9879\u76ee(\u5224\u65ad\u6761\u4ef6\uff0cconfig \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"isMonorepoSubProject")," \u4e0d\u5b58\u5728\u6216\u8005\u4e3a false)\u4e2d\u63d0\u4ea4\u521d\u59cb commit\uff0ccommit \u4fe1\u606f\u4e3a feat: init\uff0c\u652f\u6301\u81ea\u5b9a\u4e49")),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"commitMessage?: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u521d\u59cb\u5316 commit message \u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"installFunc?: ",(0,r.kt)("inlineCode",{parentName:"li"},"() => Promise<void>")," \u5b89\u88c5\u4f9d\u8d56\u51fd\u6570")),(0,r.kt)("h3",{id:"forgetemplate"},"forgeTemplate"),(0,r.kt)("p",null,"\u6e32\u67d3\u751f\u6210\u5668\u6a21\u677f\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"templatePattern: string \u6a21\u677f\u6587\u4ef6\u5339\u914d\u6b63\u5219\uff0c\u4f8b\u5982\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"templates/base-templates/**/*")," \u3002"),(0,r.kt)("li",{parentName:"ul"},"filter?: ",(0,r.kt)("inlineCode",{parentName:"li"},"(resourceKey: string) => boolean")," \u8fc7\u6ee4\u51fd\u6570\uff0c\u53c2\u6570\u4e3a templatePattern \u5339\u914d\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u8fd4\u56de true \u8868\u793a\u6e32\u67d3\u8be5\u6587\u4ef6\uff0c\u8fd4\u56de false \u8868\u793a\u4e0d\u6e32\u67d3\u8be5\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"rename?: ",(0,r.kt)("inlineCode",{parentName:"li"},"(resourceKey: string) => string")," \u91cd\u547d\u540d\u51fd\u6570\uff0c\u53c2\u6570\u4e3a templatePattern \u5339\u914d\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u8fd4\u56de\u65b0\u6587\u4ef6\u540d\u3002\u9ed8\u8ba4\u4f1a\u66ff\u6362 resourceKey \u5f00\u5934\u7684 templates \u76ee\u5f55\u548c\u7ed3\u5c3e\u7684 .handlebars \u540e\u7f00"),(0,r.kt)("li",{parentName:"ul"},"parameters?: ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, any>")," \u6e32\u67d3\u53c2\u6570\uff0c\u5f53\u6a21\u677f\u4e2d\u5b58\u5728 handlebars \u53d8\u91cf\u65f6\uff0c\u4f7f\u7528\u5176\u4f20\u9012\u5bf9\u5e94\u53d8\u91cf\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"type?: ",(0,r.kt)("inlineCode",{parentName:"li"},"'handlebars' | 'ejs'"),"  \u6a21\u677f\u6587\u4ef6\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a handlebars\u3002")),(0,r.kt)("p",null,"\u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await appApi.forgeTemplate(\n    'templates/base-templates/**/*',\n    undefined,\n    resourceKey =>\n      resourceKey\n        .replace('templates/base-templates/', '')\n        .replace('.handlebars', ''),\n  );\n\n await appApi.forgeTemplate(\n    'templates/base-template/**/*',\n    resourceKey => !resourceKey.include('eslintrc.json'),\n    resourceKey =>\n      resourceKey\n        .replace('templates/base-template/', projectPath)\n        .replace('language', language as string)\n        .replace('.handlebars', ''),\n    {\n      name: packageName as string,\n      language,\n      isTs: language === Language.TS,\n      packageManager: getPackageManagerText(packageManager as any),\n    },\n  );\n")),(0,r.kt)("h3",{id:"showsuccessinfo"},"showSuccessInfo"),(0,r.kt)("p",null,"\u5c55\u793a\u6210\u529f\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"successInfo?: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u9ed8\u8ba4\u4e3a Success || \u6210\u529f")),(0,r.kt)("h3",{id:"runsubgenerator"},"runSubGenerator"),(0,r.kt)("p",null,"\u8fd0\u884c\u5b50\u751f\u6210\u5668\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"subGenerator: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u5b50\u751f\u6210\u5668\u540d\u79f0\u6216\u8005\u8def\u5f84\u3002"),(0,r.kt)("li",{parentName:"ul"},"relativePwdPath?: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u5b50\u751f\u6210\u5668\u8fd0\u884c\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,r.kt)("li",{parentName:"ul"},"config?: ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, unknown>")," \u5b50\u751f\u6210\u5668\u8fd0\u884c\u7684\u9ed8\u8ba4 config \u914d\u7f6e\u3002")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  await appApi.runSubGenerator(\n    getGeneratorPath('@modern-js/repo-generator', context.config.distTag),\n    undefined,\n    { ...context.config, hasPlugin: false },\n  );\n")),(0,r.kt)("h3",{id:"getinputbyschema"},"getInputBySchema"),(0,r.kt)("p",null,"\u901a\u8fc7 schema \u5b8c\u6210\u7528\u6237\u4ea4\u4e92\u8f93\u5165\u3002"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"schema: ",(0,r.kt)("inlineCode",{parentName:"li"},"FormilySchema | Question[]")," \u95ee\u9898\u5217\u8868\uff0c\u652f\u6301 Formily schema \u548c inquirer \u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"type: ",(0,r.kt)("inlineCode",{parentName:"li"},"'formily' | 'inquirer'")," \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a formily\u3002"),(0,r.kt)("li",{parentName:"ul"},"configValue: ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, unknown> = {}"),"  schema \u9ed8\u8ba4\u503c\uff0c\u4f20\u5165\u8be5\u503c\u7684 schema \u5b57\u6bb5\u5bf9\u5e94\u7684\u95ee\u9898\u5c06\u4e0d\u518d\u548c\u7528\u6237\u4ea4\u4e92\u3002"),(0,r.kt)("li",{parentName:"ul"},"validateMap?: ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, (input: unknown, data?: Record<string, unknown>) => { success: boolean; error?: string }>")," schema \u4e2d\u7279\u6b8a\u5b57\u6bb5\u7684\u9a8c\u8bc1\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"initValue?: ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, any>")," schema \u4e2d\u5b57\u6bb5\u7684\u521d\u59cb\u5316\u503c\u3002")),(0,r.kt)("p",null,"Formily Schema \u7c7b\u578b\u652f\u6301\u65b9\u5f0f\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/input/type"},"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"),"\u3002"),(0,r.kt)("h3",{id:"getinputbyschemafunc"},"getInputBySchemaFunc"),(0,r.kt)("p",null,"\u901a\u8fc7 schema \u5b8c\u6210\u7528\u6237\u4ea4\u4e92\u8f93\u5165\uff0cschema \u53c2\u6570\u503c\u4e3a\u51fd\u6570\uff0c\u7528\u6237\u5904\u7406\u56fd\u9645\u5316\u95ee\u9898\uff0c\u4ec5\u652f\u6301 Formily schema"),(0,r.kt)("p",null,"\u53c2\u6570\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"schema: ",(0,r.kt)("inlineCode",{parentName:"li"},"config?: Record<string, any>) => FormilySchema")," \u83b7\u53d6\u95ee\u9898\u5217\u8868\u51fd\u6570\uff0cconfig \u53c2\u6570\u4e3a\u5f53\u524d\u751f\u6210\u5668\u4e2d\u7684 config \u914d\u7f6e\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"configValue: ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, unknown> = {}"),"  schema \u9ed8\u8ba4\u503c\uff0c\u4f20\u5165\u8be5\u503c\u7684 schema \u5b57\u6bb5\u5bf9\u5e94\u7684\u95ee\u9898\u5c06\u4e0d\u518d\u548c\u7528\u6237\u4ea4\u4e92\u3002"),(0,r.kt)("li",{parentName:"ul"},"validateMap?: ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, (input: unknown, data?: Record<string, unknown>) => { success: boolean; error?: string }>")," schema \u4e2d\u7279\u6b8a\u5b57\u6bb5\u7684\u9a8c\u8bc1\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"initValue?: ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, any>")," schema \u4e2d\u5b57\u6bb5\u7684\u521d\u59cb\u5316\u503c\u3002")),(0,r.kt)("p",null,"Formily Schema \u7c7b\u578b\u652f\u6301\u65b9\u5f0f\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/input/type"},"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"),"\u3002"))}c.isMDXComponent=!0}}]);