"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3285],{57522:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(29901);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),v=i,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||s;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48209:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(18249),i=(r(29901),r(57522));const s={sidebar_position:3},a="\u6e32\u67d3\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1",o={unversionedId:"guides/features/electron/ipc/regist-services/render",id:"guides/features/electron/ipc/regist-services/render",title:"\u6e32\u67d3\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1",description:"\u5728\u6e32\u67d3\u8fdb\u7a0b\u4e2d\uff0c\u6ce8\u518c\u7684\u670d\u52a1\uff0c\u4e00\u822c\u6709\u5982\u4e0b\u4e24\u79cd\u573a\u666f\uff1a",source:"@site/docs/guides/features/electron/ipc/regist-services/render.md",sourceDirName:"guides/features/electron/ipc/regist-services",slug:"/guides/features/electron/ipc/regist-services/render",permalink:"/v1/docs/guides/features/electron/ipc/regist-services/render",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u4e3b\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1",permalink:"/v1/docs/guides/features/electron/ipc/regist-services/main"},next:{title:"webview \u6ce8\u518c\u670d\u52a1",permalink:"/v1/docs/guides/features/electron/ipc/regist-services/webview"}},l={},c=[{value:"\u6ce8\u518c\u670d\u52a1\uff0c\u4f9b\u4e3b\u8fdb\u7a0b\u8bbf\u95ee",id:"\u6ce8\u518c\u670d\u52a1\u4f9b\u4e3b\u8fdb\u7a0b\u8bbf\u95ee",level:2},{value:"\u5b9e\u73b0\u670d\u52a1\u5185\u5bb9",id:"\u5b9e\u73b0\u670d\u52a1\u5185\u5bb9",level:3},{value:"\u6ce8\u518c\u670d\u52a1",id:"\u6ce8\u518c\u670d\u52a1",level:3},{value:"\u4e3b\u8fdb\u7a0b\u4e2d\u8bbf\u95ee\u670d\u52a1",id:"\u4e3b\u8fdb\u7a0b\u4e2d\u8bbf\u95ee\u670d\u52a1",level:3},{value:"\u6ce8\u518c\u670d\u52a1\uff0c\u4f9b\u6e32\u67d3\u8fdb\u7a0b\uff08webview\uff09\u8bbf\u95ee",id:"\u6ce8\u518c\u670d\u52a1\u4f9b\u6e32\u67d3\u8fdb\u7a0bwebview\u8bbf\u95ee",level:2},{value:"\u5b9e\u73b0\u670d\u52a1\u5185\u5bb9",id:"\u5b9e\u73b0\u670d\u52a1\u5185\u5bb9-1",level:3},{value:"\u6ce8\u518c\u670d\u52a1",id:"\u6ce8\u518c\u670d\u52a1-1",level:3},{value:"webview \u8fdb\u7a0b\u4e2d\u8bbf\u95ee\u670d\u52a1",id:"webview-\u8fdb\u7a0b\u4e2d\u8bbf\u95ee\u670d\u52a1",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6e32\u67d3\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1"},"\u6e32\u67d3\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1"),(0,i.kt)("p",null,"\u5728\u6e32\u67d3\u8fdb\u7a0b\u4e2d\uff0c\u6ce8\u518c\u7684\u670d\u52a1\uff0c\u4e00\u822c\u6709\u5982\u4e0b\u4e24\u79cd\u573a\u666f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u670d\u52a1\uff0c\u4f9b\u4e3b\u8fdb\u7a0b\u8bbf\u95ee\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u670d\u52a1\uff0c\u4f9b\u6e32\u67d3\u8fdb\u7a0b\uff08webview\uff09\u8bbf\u95ee\u3002")),(0,i.kt)("p",null,"\u4e24\u8005\u6ce8\u518c\u7684\u670d\u52a1\u5185\u5bb9\u4e0d\u4e00\u6837\uff0c\u9762\u5411\u7684\u8bbf\u95ee\u5bf9\u8c61\u4e5f\u4e0d\u4e00\u6837\u3002"),(0,i.kt)("h2",{id:"\u6ce8\u518c\u670d\u52a1\u4f9b\u4e3b\u8fdb\u7a0b\u8bbf\u95ee"},"\u6ce8\u518c\u670d\u52a1\uff0c\u4f9b\u4e3b\u8fdb\u7a0b\u8bbf\u95ee"),(0,i.kt)("p",null,"\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"winService")," \u8fdb\u884c\u6ce8\u518c\u670d\u52a1\u3002"),(0,i.kt)("h3",{id:"\u5b9e\u73b0\u670d\u52a1\u5185\u5bb9"},"\u5b9e\u73b0\u670d\u52a1\u5185\u5bb9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='services/index.ts'",title:"'services/index.ts'"},"export const getPageLocation = () => {\n  return window.location.href;\n}\n")),(0,i.kt)("h3",{id:"\u6ce8\u518c\u670d\u52a1"},"\u6ce8\u518c\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"',title:'"xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"'},"// \u6e32\u67d3\u8fdb\u7a0b\u4e2d\nimport { winService } from '@modern-js/runtime/electron-render';\nimport * as services from './services';\n...\nwinService.registerServices(services);\n")),(0,i.kt)("h3",{id:"\u4e3b\u8fdb\u7a0b\u4e2d\u8bbf\u95ee\u670d\u52a1"},"\u4e3b\u8fdb\u7a0b\u4e2d\u8bbf\u95ee\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="electron/services/index.ts\uff08\u4e3b\u8fdb\u7a0b\uff09"',title:'"electron/services/index.ts\uff08\u4e3b\u8fdb\u7a0b\uff09"'},"// \u4e3b\u8fdb\u7a0b\u4e2d\n\nimport { winService } from '@modern-js/runtime/electron-main';\n\nexport const getPageLocationOfMainWindow = () => {\n  return winService.callBrowserWindow('getPageLocation');\n}\n")),(0,i.kt)("h2",{id:"\u6ce8\u518c\u670d\u52a1\u4f9b\u6e32\u67d3\u8fdb\u7a0bwebview\u8bbf\u95ee"},"\u6ce8\u518c\u670d\u52a1\uff0c\u4f9b\u6e32\u67d3\u8fdb\u7a0b\uff08webview\uff09\u8bbf\u95ee"),(0,i.kt)("p",null,"\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"webviewService")," \u8fdb\u884c\u6ce8\u518c\u670d\u52a1\u3002"),(0,i.kt)("h3",{id:"\u5b9e\u73b0\u670d\u52a1\u5185\u5bb9-1"},"\u5b9e\u73b0\u670d\u52a1\u5185\u5bb9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='services/index.ts'",title:"'services/index.ts'"},"export const getWindowName = () => {\n  return 'main';\n}\n")),(0,i.kt)("h3",{id:"\u6ce8\u518c\u670d\u52a1-1"},"\u6ce8\u518c\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"',title:'"xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"'},"// \u6e32\u67d3\u8fdb\u7a0b\u4e2d\nimport { webviewService } from '@modern-js/runtime/electron-render';\nimport * as services from './services';\n...\nwebviewService.registerServices(services);\n")),(0,i.kt)("h3",{id:"webview-\u8fdb\u7a0b\u4e2d\u8bbf\u95ee\u670d\u52a1"},"webview \u8fdb\u7a0b\u4e2d\u8bbf\u95ee\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx/xx.tsx\uff08webview \u8fdb\u7a0b\uff09"',title:'"xx/xx.tsx\uff08webview','\u8fdb\u7a0b\uff09"':!0},"// webview \u8fdb\u7a0b\u4e2d\n\nimport webviewBridge from '@modern-js/runtime/electron-webview';\n...\n\nwebviewBridge.callBrowserWindow('getWindowName');\n")))}u.isMDXComponent=!0}}]);