"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5099,3508,3856],{44993:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(18249),a=(t(52983),t(44993));const o={},i=void 0,l={unversionedId:"components/enable-micro-frontend",id:"components/enable-micro-frontend",title:"enable-micro-frontend",description:"",source:"@site/../../packages/toolkit/main-doc/zh/components/enable-micro-frontend.md",sourceDirName:"components",slug:"/components/enable-micro-frontend",permalink:"/v2/docs/components/enable-micro-frontend",draft:!1,tags:[],version:"current",frontMatter:{}},p={},d=[],s={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import AppToolPlugin, { defineConfig } from '@modern-js/app-tools';\nimport GarfishPlugin from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n    masterApp: true,\n  },\n  plugins: [AppToolPlugin(), GarfishPlugin()],\n});\n")))}m.isMDXComponent=!0},76555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(18249),a=(t(52983),t(44993));const o={},i=void 0,l={unversionedId:"components/micro-runtime-config",id:"components/micro-runtime-config",title:"micro-runtime-config",description:"",source:"@site/../../packages/toolkit/main-doc/zh/components/micro-runtime-config.md",sourceDirName:"components",slug:"/components/micro-runtime-config",permalink:"/v2/docs/components/micro-runtime-config",draft:!1,tags:[],version:"current",frontMatter:{}},p={},d=[],s={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import { defineConfig } from '@modern-js/runtime';\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        name: 'DashBoard',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'TableList',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n")))}m.isMDXComponent=!0},56310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=t(18249),a=(t(52983),t(44993)),o=t(98516),i=t(76555);const l={sidebar_position:3,title:"\u5f00\u53d1\u4e3b\u5e94\u7528"},p=void 0,d={unversionedId:"guides/topic-detail/micro-frontend/c03-main-app",id:"guides/topic-detail/micro-frontend/c03-main-app",title:"\u5f00\u53d1\u4e3b\u5e94\u7528",description:"\u5728\u4e0a\u4e00\u7ae0 \u4f53\u9a8c\u5fae\u524d\u7aef \u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u521b\u5efa\u548c\u914d\u7f6e\u5fae\u524d\u7aef\u5b50\u5e94\u7528\uff0c\u901a\u8fc7\u672c\u7ae0\u4f60\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4e86\u89e3\u5982\u4f55\u5f00\u53d1\u4e3b\u5e94\u7528\uff0c\u4ee5\u53ca\u5b83\u7684\u5e38\u89c1\u914d\u7f6e\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/micro-frontend/c03-main-app.md",sourceDirName:"guides/topic-detail/micro-frontend",slug:"/guides/topic-detail/micro-frontend/c03-main-app",permalink:"/v2/docs/guides/topic-detail/micro-frontend/c03-main-app",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5f00\u53d1\u4e3b\u5e94\u7528"},sidebar:"guidesSidebar",previous:{title:"\u4f53\u9a8c\u5fae\u524d\u7aef",permalink:"/v2/docs/guides/topic-detail/micro-frontend/c02-development"},next:{title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1",permalink:"/v2/docs/guides/topic-detail/micro-frontend/c04-communicate"}},s={},m=[{value:"\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f",id:"\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f",level:2},{value:"\u76f4\u63a5\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f",id:"\u76f4\u63a5\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f",level:3},{value:"\u81ea\u5b9a\u4e49\u8fdc\u7a0b\u5e94\u7528\u5217\u8868",id:"\u81ea\u5b9a\u4e49\u8fdc\u7a0b\u5e94\u7528\u5217\u8868",level:3},{value:"\u6e32\u67d3\u5b50\u5e94\u7528",id:"\u6e32\u67d3\u5b50\u5e94\u7528",level:2},{value:"\u5b50\u5e94\u7528\u7ec4\u4ef6",id:"\u5b50\u5e94\u7528\u7ec4\u4ef6",level:3},{value:"\u96c6\u4e2d\u5f0f\u8def\u7531",id:"\u96c6\u4e2d\u5f0f\u8def\u7531",level:3},{value:"\u4e24\u79cd\u6a21\u5f0f\u6df7\u7528",id:"\u4e24\u79cd\u6a21\u5f0f\u6df7\u7528",level:3},{value:"\u6dfb\u52a0 loading",id:"\u6dfb\u52a0-loading",level:3},{value:"\u589e\u52a0\u9519\u8bef\u72b6\u6001",id:"\u589e\u52a0\u9519\u8bef\u72b6\u6001",level:4},{value:"\u907f\u514d loading \u95ea\u9000",id:"\u907f\u514d-loading-\u95ea\u9000",level:4},{value:"\u589e\u52a0\u8d85\u65f6\u72b6\u6001",id:"\u589e\u52a0\u8d85\u65f6\u72b6\u6001",level:4}],u={toc:m};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4e0a\u4e00\u7ae0 ",(0,a.kt)("a",{parentName:"p",href:"/v2/docs/guides/topic-detail/micro-frontend/c02-development"},"\u4f53\u9a8c\u5fae\u524d\u7aef")," \u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u521b\u5efa\u548c\u914d\u7f6e\u5fae\u524d\u7aef\u5b50\u5e94\u7528\uff0c\u901a\u8fc7\u672c\u7ae0\u4f60\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4e86\u89e3\u5982\u4f55\u5f00\u53d1\u4e3b\u5e94\u7528\uff0c\u4ee5\u53ca\u5b83\u7684\u5e38\u89c1\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u5728\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/create")," \u547d\u4ee4\u521b\u5efa\u5e94\u7528\u5de5\u7a0b\u540e\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\uff08\u5b9e\u9645\u6267\u884c\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern new")," \u547d\u4ee4\uff09\uff0c\u5728\u9009\u62e9\u4e86\u300c\u5fae\u524d\u7aef\u300d\u6a21\u5f0f\u540e\uff0c\u4f1a\u5b89\u88c5\u5fae\u524d\u7aef\u4f9d\u8d56\u4f9d\u8d56\uff0c\u53ea\u9700\u624b\u52a8\u6ce8\u518c\u63d2\u4ef6\u5373\u53ef\u3002"),(0,a.kt)(o.default,{mdxType:"EnableMicroFrontend"}),(0,a.kt)("h2",{id:"\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f"},"\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f"),(0,a.kt)("p",null,"\u5f53\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"masterApp")," \u914d\u7f6e\u4e0a\u63d0\u4f9b\u4e86\u4fe1\u606f\u540e\uff0c\u5c06\u4f1a\u8ba4\u4e3a\u8be5\u5e94\u7528\u4e3a\u4e3b\u5e94\u7528\uff0c\u76ee\u524d\u5b58\u5728\u4e24\u79cd\u5b50\u5e94\u7528\u4fe1\u606f\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u8fd9\u4e24\u79cd\u65b9\u5f0f\u5206\u522b\u5e94\u7528\u4e8e\u4e0d\u540c\u7684\u573a\u666f\u3002"),(0,a.kt)("h3",{id:"\u76f4\u63a5\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f"},"\u76f4\u63a5\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f"),(0,a.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u914d\u7f6e\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f\uff1a"),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u901a\u8fc7 API ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/app/define-config"},"defineConfig")," \u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u914d\u7f6e\u3002\n\u5f53\u53c2\u6570\u4e3a\u51fd\u6570\u65f6\u65e0\u6cd5\u88ab\u5e8f\u5217\u5316\u5230\u4ea7\u7269\u4ee3\u7801\uff0c\u6240\u4ee5\u5728\u6d89\u53ca\u5230\u51fd\u6570\u4e4b\u7c7b\u7684\u914d\u7f6e\u65f6\u8bf7\u901a\u8fc7 defineConfig \u6765\u8fdb\u884c\u914d\u7f6e")),(0,a.kt)(i.default,{mdxType:"MicroRuntimeConfig"}),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u8fdc\u7a0b\u5e94\u7528\u5217\u8868"},"\u81ea\u5b9a\u4e49\u8fdc\u7a0b\u5e94\u7528\u5217\u8868"),(0,a.kt)("p",null,"\u901a\u8fc7\u8be5\u51fd\u6570\u53ef\u4ee5\u62c9\u53d6\u8fdc\u7a0b\u7684\u5b50\u5e94\u7528\u5217\u8868\uff0c\u5e76\u5c06\u5176\u6ce8\u518c\u81f3\u8fd0\u884c\u65f6\u6846\u67b6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"defineConfig(App, {\n  masterApp: {\n    manifest: {\n      getAppList: async ()=> {\n        // \u53ef\u4ee5\u4ece\u5176\u4ed6\u8fdc\u7a0b\u63a5\u53e3\u83b7\u53d6\n        return [\n            {\n              name: 'DashBoard',\n              entry: 'http://127.0.0.1:8081/'\n            },\n            {\n              name: 'TableList',\n              entry: 'http://localhost:8082'\n            }\n        ];\n      },\n    }\n  }\n})\n")),(0,a.kt)("h2",{id:"\u6e32\u67d3\u5b50\u5e94\u7528"},"\u6e32\u67d3\u5b50\u5e94\u7528"),(0,a.kt)("p",null,"\u5728\u5fae\u524d\u7aef\u4e2d\u5206\u4e3a\u4e24\u79cd\u52a0\u8f7d\u5b50\u5e94\u7528\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u5b50\u5e94\u7528\u7ec4\u4ef6")," \u83b7\u53d6\u5230\u6bcf\u4e2a\u5b50\u5e94\u7528\u7684\u7ec4\u4ef6\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u50cf\u4f7f\u7528\u666e\u901a\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"React")," \u7ec4\u4ef6\u4e00\u6837\u6e32\u67d3\u5fae\u524d\u7aef\u7684\u5b50\u5e94\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u901a\u8fc7\u96c6\u4e2d\u5f0f\u7684\u8def\u7531\u914d\u7f6e\uff0c\u81ea\u52a8\u6839\u636e\u5f53\u524d\u9875\u9762 ",(0,a.kt)("inlineCode",{parentName:"li"},"pathname")," \u6fc0\u6d3b\u6e32\u67d3\u5bf9\u5e94\u7684\u5b50\u5e94\u7528\u3002")),(0,a.kt)("h3",{id:"\u5b50\u5e94\u7528\u7ec4\u4ef6"},"\u5b50\u5e94\u7528\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useModuleApps")," \u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u5230\u5404\u4e2a\u5b50\u5e94\u7528\u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u518d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," \u7ec4\u4ef6\u7684\u7ed3\u5408\u8fd0\u7528\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u63a7\u5f0f\u7684\u6839\u636e\u4e0d\u540c\u7684\u8def\u7531\u6e32\u67d3\u4e0d\u540c\u7684\u5b50\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684\u5b50\u5e94\u7528\u5217\u8868\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)(o.default,{mdxType:"EnableMicroFrontend"}),(0,a.kt)("p",null,"\u7f16\u8f91\u4e3b\u5e94\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," \u6587\u4ef6\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4e3b\u5e94\u7528\uff1aApp.tsx",title:"\u4e3b\u5e94\u7528\uff1aApp.tsx"},"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\nimport { Route, Switch } from '@modern-js/runtime/router';\n\nfunction App() {\n  const { DashBoard, TableList} = useModuleApps();\n\n  return <div>\n    <Route path=\"/dashboard\">\n      <DashBoard\n        loadable={{\n          loading: ({ pastDelay, error }: any) => {\n            if (error) {\n              return <div>error: {error?.message}</div>;\n            } else if (pastDelay) {\n              return <div>loading</div>;\n            } else {\n              return null;\n            }\n          },\n        }}\n      />\n    </Route>\n    <Route path=\"/table\">\n      <TableList />\n    </Route>\n  </div>\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," \u7ec4\u4ef6\u81ea\u5b9a\u4e49\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"DashBoard")," \u7684\u6fc0\u6d3b\u8def\u7531\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"/dashboard"),"\uff0c ",(0,a.kt)("strong",{parentName:"p"},"TableList")," \u7684\u6fc0\u6d3b\u8def\u7531\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"/table"),"\u3002"),(0,a.kt)("h3",{id:"\u96c6\u4e2d\u5f0f\u8def\u7531"},"\u96c6\u4e2d\u5f0f\u8def\u7531"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u662f\u5c06\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u8def\u7531\u96c6\u4e2d\u914d\u7f6e\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u7ed9\u5b50\u5e94\u7528\u5217\u8868\u4fe1\u606f\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"activeWhen")," \u5b57\u6bb5\u6765\u542f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u4e2d\u5f0f\u8def\u7531"),"\u3002"),(0,a.kt)(i.default,{mdxType:"MicroRuntimeConfig"}),(0,a.kt)("p",null,"\u7136\u540e\u5728\u4e3b\u5e94\u7528\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useModuleApp")," \u65b9\u6cd5\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"MApp")," \u7ec4\u4ef6, \u5e76\u5728\u4e3b\u5e94\u7528\u6e32\u67d3 ",(0,a.kt)("inlineCode",{parentName:"p"},"MApp"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4e3b\u5e94\u7528\uff1aApp.tsx",title:"\u4e3b\u5e94\u7528\uff1aApp.tsx"},"import { useModuleApp } from '@modern-js/plugin-runtime';\n\nfunction App() {\n  const { MApp } = useModuleApps();\n\n  return <div>\n    <MApp />\n  </div>\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u542f\u52a8\u5e94\u7528\u540e\uff0c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"/dashboard")," \u8def\u7531\uff0c\u4f1a\u6e32\u67d3 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard")," \u5b50\u5e94\u7528\uff0c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"/table")," \u8def\u7531\uff0c\u4f1a\u6e32\u67d3 ",(0,a.kt)("inlineCode",{parentName:"p"},"TableList")," \u5b50\u5e94\u7528\u3002"),(0,a.kt)("h3",{id:"\u4e24\u79cd\u6a21\u5f0f\u6df7\u7528"},"\u4e24\u79cd\u6a21\u5f0f\u6df7\u7528"),(0,a.kt)("p",null,"\u5f53\u7136 ",(0,a.kt)("strong",{parentName:"p"},"\u5b50\u5e94\u7528\u7ec4\u4ef6")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u662f\u53ef\u4ee5\u6df7\u5408\u4f7f\u7528\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u90e8\u5206\u5b50\u5e94\u7528\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"\u5b50\u5e94\u7528\u7ec4\u4ef6")," \u6fc0\u6d3b\uff0c\u53e6\u5916\u4e00\u90e8\u5206\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u6fc0\u6d3b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u90e8\u5206\u5b50\u5e94\u7528\u65e2\u53ef\u4ee5\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u4e2d\u5f0f\u8def\u7531")," \u6fc0\u6d3b\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"\u5b50\u5e94\u7528\u7ec4\u4ef6")," \u6fc0\u6d3b\u3002")),(0,a.kt)("h3",{id:"\u6dfb\u52a0-loading"},"\u6dfb\u52a0 loading"),(0,a.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"loadable")," \u914d\u7f6e\uff0c\u53ef\u4ee5\u4e3a\u300c\u96c6\u4e2d\u5f0f\u8def\u7531\u300d\u3001\u300c\u5b50\u5e94\u7528\u300d\u6dfb\u52a0 loading \u7ec4\u4ef6\uff0c\u5e76\u53ef\u4ee5\u8003\u8651\u9519\u8bef\u3001\u8d85\u65f6\u3001\u95ea\u70c1\u7b49\u60c5\u51b5\u7684\u51fa\u73b0\uff0c\u4ece\u800c\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002\u8be5\u529f\u80fd\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u53c2\u8003\u81f3 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jamiebuilds/react-loadable"},"react-loadable"),"\uff0c\u57fa\u672c\u529f\u80fd\u8f83\u4e3a\u76f8\u4f3c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Loading() {\n  return <div>Loading...</div>;\n}\n\nfunction App(){\n  return <>\n    <DashBoard\n      loadable={{\n        loading: Loading,\n      }}\n    />\n  <>\n}\n")),(0,a.kt)("h4",{id:"\u589e\u52a0\u9519\u8bef\u72b6\u6001"},"\u589e\u52a0\u9519\u8bef\u72b6\u6001"),(0,a.kt)("p",null,"\u5f53\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u52a0\u8f7d\u5931\u8d25\u6216\u6e32\u67d3\u5931\u8d25\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"loading component")," \u5c06\u4f1a\u63a5\u6536 ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," \u53c2\u6570\uff08\u82e5\u6ca1\u6709\u9519\u8bef\u65f6 error \u662f null\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Loading({ error }) {\n  if (error) {\n    return <div>Error msg {error?.message}</div>;\n  } else {\n    return <div>Loading...</div>;\n  }\n}\n")),(0,a.kt)("h4",{id:"\u907f\u514d-loading-\u95ea\u9000"},"\u907f\u514d loading \u95ea\u9000"),(0,a.kt)("p",null,"\u6709\u65f6 loading \u7ec4\u4ef6\u7684\u663e\u793a\u65f6\u95f4\u53ef\u80fd\u5c0f\u4e8e 200ms\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f1a\u51fa\u73b0 loading \u7ec4\u4ef6\u95ea\u9000\u7684\u60c5\u51b5\u3002\u8bb8\u591a\u7528\u6237\u7814\u7a76\u8bc1\u660e\uff0cloading \u95ea\u9000\u7684\u60c5\u51b5\u4f1a\u5bfc\u81f4\u7528\u6237\u611f\u77e5\u52a0\u8f7d\u5185\u5bb9\u7684\u8017\u65f6\u6bd4\u5b9e\u9645\u8017\u65f6\u66f4\u957f\uff0c\u5728 loading \u5c0f\u4e8e 200ms \u65f6\uff0c\u4e0d\u5c55\u793a\u5185\u5bb9\uff0c\u7528\u6237\u4f1a\u8ba4\u4e3a\u5b83\u66f4\u5feb\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5 loading \u7ec4\u4ef6\u8fd8\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"pastDelay")," \u53c2\u6570\uff0c\u8d85\u8fc7\u8bbe\u7f6e\u7684\u5ef6\u8fdf\u5c55\u793a\u65f6\u624d\u4f1a\u4e3a true\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"delay")," \u53c2\u6570\u8bbe\u7f6e\u5ef6\u8fdf\u7684\u65f6\u957f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Loading({ error, pastDelay }) {\n  if (error) {\n    return <div>Error! {error?.message}</div>;\n  } else if (pastDelay) {\n    return <div>Loading...</div>;\n  } else {\n    return null;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"delay")," \u7684\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"200ms"),"\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"loadable")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"delay")," \u6765\u8bbe\u7f6e\u5ef6\u8fdf\u5c55\u793a\u7684\u65f6\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"\nfunction App(){\n  return <>\n    <DashBoard\n      loadable={{\n        loading: Loading,\n        delay: 300 // 0.3 seconds\n      }}\n    />\n  <>\n}\n")),(0,a.kt)("h4",{id:"\u589e\u52a0\u8d85\u65f6\u72b6\u6001"},"\u589e\u52a0\u8d85\u65f6\u72b6\u6001"),(0,a.kt)("p",null,"\u6709\u65f6\u56e0\u4e3a\u7f51\u7edc\u7684\u539f\u56e0\uff0c\u4ece\u800c\u5bfc\u81f4\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u52a0\u8f7d\u5931\u8d25\uff0c\u4ece\u800c\u5bfc\u81f4\u4e00\u76f4\u5c55\u793a loading \u7684\u72b6\u6001\uff0c\u8fd9\u5bf9\u4e8e\u7528\u6237\u800c\u8a00\u975e\u5e38\u7cdf\u7cd5\uff0c\u56e0\u4e3a\u4ed6\u4eec\u4e0d\u77e5\u9053\u5408\u9002\u624d\u4f1a\u83b7\u5f97\u5177\u4f53\u7684\u54cd\u5e94\uff0c\u4ed6\u4eec\u662f\u5426\u9700\u8981\u5237\u65b0\u9875\u9762\uff0c\u901a\u8fc7\u589e\u52a0\u8d85\u65f6\u72b6\u6001\u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u8be5\u95ee\u9898\u3002"),(0,a.kt)("p",null,"loading \u7ec4\u4ef6\u5728\u8d85\u65f6\u65f6\u4f1a\u83b7\u5f97 ",(0,a.kt)("inlineCode",{parentName:"p"},"timeOut")," \u53c2\u6570\uff0c\u5f53\u5fae\u524d\u7aef\u5e94\u7528\u52a0\u8f7d\u8d85\u65f6\u65f6\u5c06\u4f1a\u83b7\u5f97 ",(0,a.kt)("inlineCode",{parentName:"p"},"timeOut")," \u5c5e\u6027\u503c\u4e3a true"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Loading({ error, timeOut, pastDelay }) {\n  if (error) {\n    return <div>Error! {error?.message}</div>;\n  } else if (timeOut) {\n    return <div>Loading timed out, please refresh the page... </div>;\n  } else if (pastDelay) {\n    return <div>Loading...</div>;\n  } else {\n    return null;\n  }\n}\n")),(0,a.kt)("p",null,"\u8d85\u65f6\u72b6\u6001\u662f\u5173\u95ed\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"loadable")," \u4e2d\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," \u53c2\u6570\u5f00\u542f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"\nfunction App(){\n  return <>\n    <DashBoard\n      loadable={{\n        loading: Loading,\n        timeOut: 10000 // 10s\n      }}\n    />\n  <>\n}\n")))}c.isMDXComponent=!0}}]);