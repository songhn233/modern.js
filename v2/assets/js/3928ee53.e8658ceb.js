"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4126],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,u=m["".concat(l,".").concat(d)]||m[d]||f[d]||i;return n?r.createElement(u,p(p({ref:t},c),{},{components:n})):r.createElement(u,p({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const i={sidebar_label:"proxy"},p="bff.proxy",a={unversionedId:"configure/app/bff/proxy",id:"configure/app/bff/proxy",title:"bff.proxy",description:"* \u7c7b\u578b\uff1aRecord",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/bff/proxy.md",sourceDirName:"configure/app/bff",slug:"/configure/app/bff/proxy",permalink:"/v2/docs/configure/app/bff/proxy",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"proxy"},sidebar:"configsAppSidebar",previous:{title:"prefix",permalink:"/v2/docs/configure/app/bff/prefix"},next:{title:"assetPrefix",permalink:"/v2/docs/configure/app/dev/asset-prefix"}},l={},s=[{value:"\u5e38\u89c1\u7528\u6cd5",id:"\u5e38\u89c1\u7528\u6cd5",level:2},{value:"\u89e3\u51b3\u63a5\u53e3\u8de8\u57df\u95ee\u9898",id:"\u89e3\u51b3\u63a5\u53e3\u8de8\u57df\u95ee\u9898",level:3}],c={toc:s};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bffproxy"},"bff.proxy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Record<string, string>")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"{}"))),(0,o.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8bf7\u5148\u5728\u5f53\u524d\u5e94\u7528\u9879\u76ee\u6839\u76ee\u5f55\u4f7f\u7528\u3010",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/commands/new"},"new"),"\u3011 \u542f\u7528 BFF \u529f\u80fd\u3002")),(0,o.kt)("p",null,"\u901a\u8fc7\u7b80\u5355\u914d\u7f6e\uff0c\u65e0\u9700\u7f16\u5199\u4ee3\u7801\uff0cModern.js \u4f1a\u81ea\u52a8\u8f6c\u53d1\u8bf7\u6c42\u3002\u53d1\u9001\u7ed9 Modern.js BFF server \u7684\u8bf7\u6c42\uff0c\u4f1a\u4ee3\u7406\u5230\u6307\u5b9a\u7684\u670d\u52a1\u4e0a\u3002\nBFF Proxy \u4f7f\u7528\u4e86\u5f3a\u5927\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chimurai/http-proxy-middleware"},"http-proxy-middleware"),"\uff0c\u5982\u679c\u9700\u8981\u66f4\u591a\u9ad8\u7ea7\u7684\u7528\u6cd5\uff0c \u53ef\u4ee5\u67e5\u770b\u5b83\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chimurai/http-proxy-middleware#options"},"\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.server-runtime.config.js")," \u4e2d\u52a0\u5165\u4ee5\u4e0b\u914d\u7f6e\uff1b\u5373\u53ef\u5f00\u542f\u4ee3\u7406\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.server-runtime.config.js"',title:'"modern.server-runtime.config.js"'},'import { defineConfig } from \'@modern-js/app-tools/server\';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      "/api": "https://cnodejs.org"\n    }\n  }\n})\n')),(0,o.kt)("p",null,"\u5047\u8bbe\u542f\u52a8\u7684 Modern.js BFF server \u7684\u670d\u52a1\u5730\u5740\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080"),"\uff0c\u6240\u6709 path \u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," \u5f00\u5934\u7684\u8bf7\u6c42\u90fd\u4f1a\u88ab\u62e6\u622a\uff0c\u5982\u53d1\u9001\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080/api/v1/topics")," \u7684\u8bf7\u6c42\u4f1a\u88ab\u4ee3\u7406\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://cnodejs.org/api/v1/topics"),"\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u505a\u8def\u5f84\u7684\u91cd\u5199\uff0c\u5982\u5c06\u53d1\u9001\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080/api/topics")," \u7684\u8bf7\u6c42\u4ee3\u7406\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://cnodejs.org/api/v1/topics"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.server-runtime.config.js"',title:'"modern.server-runtime.config.js"'},"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api': {\n        target: 'https://cnodejs.org',\n        pathRewrite: { '/api/topics': '/api/v1/topics' },\n        changeOrigin: true,\n      },\n    },\n  },\n});\n")),(0,o.kt)("p",null,"\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/dev/proxy"},"dev.proxy")," \u4e0d\u540c\uff0c\u672c\u8282\u6240\u4ecb\u7ecd\u7684\u4ee3\u7406\u53ea\u4f5c\u7528\u4e8e\u8fdb\u5165 BFF/API \u670d\u52a1\u7684\u8bf7\u6c42\uff1b\u540c\u65f6\uff0c\u8fd9\u4e00\u914d\u7f6e\u4e0d\u4f46\u53ef\u4ee5\u5728\u5f00\u53d1\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4e5f\u4f1a\u4ee3\u7406\u76f8\u5e94\u7684\u8bf7\u6c42\u3002"),(0,o.kt)("h2",{id:"\u5e38\u89c1\u7528\u6cd5"},"\u5e38\u89c1\u7528\u6cd5"),(0,o.kt)("h3",{id:"\u89e3\u51b3\u63a5\u53e3\u8de8\u57df\u95ee\u9898"},"\u89e3\u51b3\u63a5\u53e3\u8de8\u57df\u95ee\u9898"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u56e0\u4e3a web \u9875\u9762\u548c\u63a5\u53e3\u670d\u52a1\u4e0d\u662f\u90e8\u7f72\u5728\u540c\u4e00\u4e2a\u57df\u540d\u4e0b\uff0c\u5e38\u5e38\u4f1a\u9047\u5230\u8de8\u57df\u95ee\u9898\u3002\n\u89e3\u51b3\u8de8\u57df\u95ee\u9898\u7684\u65b9\u5f0f\u6709\u5f88\u591a\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"bff.proxy")," \u53ef\u4ee5\u8f7b\u677e\u89e3\u51b3\u8de8\u57df\u95ee\u9898\u3002"),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"BFF proxy \u6a21\u5f0f\u4e0b\uff0c\u5982\u679c\u4e0d\u9700\u8981\u5199 BFF \u7684\u63a5\u53e3\uff0c API \u76ee\u5f55\u53ef\u4ee5\u5220\u9664\uff1b\u6b64\u65f6 BFF proxy\u4ecd\u4f1a\u5f00\u542f\u3002")),(0,o.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.server-runtime.config.js")," \u4e2d\uff0c\u5199\u5165\u5982\u4e0b\u914d\u7f6e\uff1b\u6211\u4eec\u5c06\u6240\u6709 web \u9875\u9762\u53d1\u9001\u5230\u540c\u57df\u7684\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"/api")," \u5f00\u5934\u7684\u8bf7\u6c42\u4ee3\u7406\u5230\u53e6\u4e00\u4e2a\u57df\u540d\u7684\u670d\u52a1\u4e0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.server-runtime.config.js"',title:'"modern.server-runtime.config.js"'},"export default defineServerConfig({\n  bff: {\n    proxy: {\n      '/api': 'https://cnodejs.org',\n    },\n  },\n};\n")))}f.isMDXComponent=!0}}]);