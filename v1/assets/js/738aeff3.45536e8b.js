"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2592],{57522:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(29901);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(18249),o=(t(29901),t(57522));const a={sidebar_position:1},i="\u4ecb\u7ecd",l={unversionedId:"apis/generator/plugin/introduce",id:"apis/generator/plugin/introduce",title:"\u4ecb\u7ecd",description:"Modern.js \u652f\u6301\u901a\u8fc7\u751f\u6210\u5668\u63d2\u4ef6\u7684\u65b9\u5f0f\u5bf9\u63d0\u4f9b\u7684\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u5b9a\u5236\u5316\u6216\u9488\u5bf9\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u7279\u5b9a\u573a\u666f\u7684\u5b9a\u5236\u5316\u3002",source:"@site/docs/apis/generator/plugin/introduce.md",sourceDirName:"apis/generator/plugin",slug:"/apis/generator/plugin/introduce",permalink:"/v1/docs/apis/generator/plugin/introduce",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisGeneratorSidebar",previous:{title:"Monorepo",permalink:"/v1/docs/apis/generator/config/monorepo"},next:{title:"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49",permalink:"/v1/docs/apis/generator/plugin/input/type"}},p={},s=[{value:"\u751f\u6210\u5668\u63d2\u4ef6\u6784\u6210",id:"\u751f\u6210\u5668\u63d2\u4ef6\u6784\u6210",level:2},{value:"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b",id:"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b",level:2},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:3},{value:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848",id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848",level:4},{value:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f",id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f",level:4},{value:"\u81ea\u5b9a\u4e49(custom)\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49custom\u7c7b\u578b",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"Modern.js \u652f\u6301\u901a\u8fc7\u751f\u6210\u5668\u63d2\u4ef6\u7684\u65b9\u5f0f\u5bf9\u63d0\u4f9b\u7684\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u5b9a\u5236\u5316\u6216\u9488\u5bf9\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u7279\u5b9a\u573a\u666f\u7684\u5b9a\u5236\u5316\u3002"),(0,o.kt)("h2",{id:"\u751f\u6210\u5668\u63d2\u4ef6\u6784\u6210"},"\u751f\u6210\u5668\u63d2\u4ef6\u6784\u6210"),(0,o.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u662f\u4e00\u4e2a\u6a21\u5757\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Modern.js \u7684\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u5f00\u53d1\u3002\u5f53\u7136\uff0cModern.js \u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u751f\u6210\u5668\u63d2\u4ef6(",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/generator-plugin-plugin"),")\u76f4\u63a5\u65b0\u5efa\u751f\u6210\u5668\u63d2\u4ef6\u9879\u76ee\u3002"),(0,o.kt)("p",null,"\u4e00\u4e2a\u751f\u6210\u5668\u63d2\u4ef6\u9879\u76ee\u76ee\u5f55\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2514\u2500\u2500 modern-app-env.d.ts\n\u251c\u2500\u2500 templates\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"src/index.ts")," \u4e2d\u4e3a\u6e90\u7801\u76ee\u5f55\uff0c\u7528\u4e8e\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6\u903b\u8f91\u3002\u63d2\u4ef6\u9ed8\u8ba4\u5bfc\u51fa\u4e00\u4e2a\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"context")," \u4e0a\u63d0\u4f9b\u4e00\u4e9b\u65b9\u6cd5\u53ef\u76f4\u63a5\u5bf9\u5f53\u524d\u9879\u76ee\u8fdb\u884c\u64cd\u4f5c\uff0c\u672c\u7ae0\u8282\u540e\u7eed\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8fd9\u4e9b\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"templates")," \u76ee\u5f55\u4e3a\u6a21\u677f\u76ee\u5f55\uff0c\u7528\u4e8e\u5b58\u5728\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u9700\u8981\u4f7f\u7528\u7684\u6a21\u677f\u6587\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b"},"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u7c7b"),(0,o.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848\uff1a\u76f4\u63a5\u5bf9\u9ed8\u8ba4\u63d0\u4f9b\u7684\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u5b9a\u5236\u5316")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f\uff1a\u57fa\u4e8e\u9ed8\u8ba4\u7684\u4e09\u5927\u5de5\u7a0b\u65b9\u6848\u521b\u5efa\u5bf9\u5e94\u7684\u5de5\u7a0b\u65b9\u6848\u573a\u666f"))),(0,o.kt)("h3",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,o.kt)("p",null,"\u751f\u6210\u5668\u63d2\u4ef6\u7684\u5206\u7c7b\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," \u4fe1\u606f\u63d0\u4f9b\u3002"),(0,o.kt)("h4",{id:"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848"},"\u6269\u5c55\u5de5\u7a0b\u65b9\u6848"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "extend": "mwa"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"extend")," \u4e3a\u6269\u5c55\u7684\u5de5\u7a0b\u65b9\u6848\u540d\u79f0\uff0cModern.js \u7684\u5de5\u7a0b\u65b9\u6848\u540d\u79f0\u5206\u522b\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"mwa"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"module"),"\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"monorepo"),"\u3002"),(0,o.kt)("h4",{id:"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f"},"\u521b\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "key": "new_solution",\n        "name": "\u65b0\u5de5\u7a0b\u65b9\u6848",\n        "type": "mwa"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a\u573a\u666f\u65b9\u6848\u540d\u79f0\uff0c\u503c\u4e3a\u5b57\u7b26\u4e32\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"name")," \u4e3a\u573a\u666f\u65b9\u6848\u5c55\u793a\u540d\u79f0\uff0c\u7528\u4e0e\u4f7f\u7528\u65f6\u9009\u9879\u7684\u5c55\u793a\uff0c\u503c\u4e3a\u5b57\u7b26\u4e32\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"type")," \u4e3a\u5de5\u7a0b\u65b9\u6848\u7c7b\u578b\uff0c\u9664\u4e86\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"extend")," \u4e00\u6837\u652f\u6301\u4e09\u79cd\u5de5\u7a0b\u65b9\u6848\u4e4b\u5916\uff0c\u8fd8\u652f\u6301\u81ea\u5b9a\u4e49(custom)\u7c7b\u578b\u3002"),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49custom\u7c7b\u578b"},"\u81ea\u5b9a\u4e49(custom)\u7c7b\u578b"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u7c7b\u578b\u63d0\u4f9b\u4e86\u5b8c\u5168\u81ea\u5b9a\u4e49\u5de5\u7a0b\u65b9\u6848\u7684\u5b9e\u73b0\u80fd\u529b\uff0c\u5f53\u4f7f\u7528\u8be5\u7c7b\u578b\u65b0\u5efa\u5de5\u7a0b\u65b9\u6848\u573a\u666f\u65f6\uff0c\u53ea\u63d0\u4f9b\u4e86\u5c11\u91cf\u7684\u5f00\u53d1\u5c42\u9762\u7684\u6700\u4f73\u5b9e\u8df5\u7684\u4ee3\u7801\uff0c\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},".editorConfig")," \u7b49\u6587\u4ef6\uff0c\u5177\u4f53\u4e3a\u4e0b\u65b9\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 .editorconfig\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .idea\n\u2502   \u251c\u2500\u2500 codeStyles\n\u2502   \u2502   \u251c\u2500\u2500 Project.xml\n\u2502   \u2502   \u2514\u2500\u2500 codeStyleConfig.xml\n\u2502   \u251c\u2500\u2500 inspectionProfiles\n\u2502   \u2502   \u2514\u2500\u2500 Project_Default.xml\n\u2502   \u2514\u2500\u2500 jsLinters\n\u2502       \u2514\u2500\u2500 eslint.xml\n\u251c\u2500\u2500 .nvmrc\n\u2514\u2500\u2500 .vscode\n    \u251c\u2500\u2500 extensions.json\n    \u2514\u2500\u2500 settings.json\n")),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u7c7b\u578b\u4fdd\u8bc1\u4e86\u53ef\u6839\u636e\u81ea\u8eab\u5bf9\u5de5\u7a0b\u65b9\u6848\u7684\u9700\u6c42\u7075\u6d3b\u8fdb\u884c\u914d\u7f6e\u3002"))}u.isMDXComponent=!0}}]);