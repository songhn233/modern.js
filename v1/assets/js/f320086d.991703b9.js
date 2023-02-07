"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6848],{57522:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(29901);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=l,b=c["".concat(i,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(b,p(p({ref:t},d),{},{components:n})):a.createElement(b,p({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(18249),l=(n(29901),n(57522));const r={title:"tools.babel",sidebar_label:"babel"},p=void 0,o={unversionedId:"apis/app/config/tools/babel",id:"apis/app/config/tools/babel",title:"tools.babel",description:"- \u7c7b\u578b\uff1a Object | Function",source:"@site/docs/apis/app/config/tools/babel.md",sourceDirName:"apis/app/config/tools",slug:"/apis/app/config/tools/babel",permalink:"/v1/docs/apis/app/config/tools/babel",tags:[],version:"current",frontMatter:{title:"tools.babel",sidebar_label:"babel"},sidebar:"apisAppSidebar",previous:{title:"autoprefixer",permalink:"/v1/docs/apis/app/config/tools/autoprefixer"},next:{title:"devServer",permalink:"/v1/docs/apis/app/config/tools/dev-server"}},i={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:3},{value:"Function \u7c7b\u578b",id:"function-\u7c7b\u578b",level:3},{value:"\u5de5\u5177\u51fd\u6570",id:"\u5de5\u5177\u51fd\u6570",level:2},{value:"addPlugins",id:"addplugins",level:3},{value:"addPresets",id:"addpresets",level:3},{value:"removePlugins",id:"removeplugins",level:3},{value:"removePresets",id:"removepresets",level:3},{value:"addIncludes",id:"addincludes",level:3},{value:"addExcludes",id:"addexcludes",level:3},{value:"\u63d2\u4ef6\u4fe1\u606f",id:"\u63d2\u4ef6\u4fe1\u606f",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"{ presets: ['@modern-js/babel-preset-app'], plugins: [] }"))),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"tools.babel")," \u53ef\u4ee5\u4fee\u6539 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babel/babel-loader"},"babel-loader")," \u7684\u914d\u7f6e\u9879\u3002"),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("h3",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,l.kt)("p",null,"\u5f53\u6b64\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u5408\u5e76\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    babel: {\n      plugins: [\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ],\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"function-\u7c7b\u578b"},"Function \u7c7b\u578b"),(0,l.kt)("p",null,"\u5f53\u6b64\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u503c\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u7684\u5de5\u5177\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    babel: config => {\n      // \u6dfb\u52a0\u4e00\u4e2a\u63d2\u4ef6\uff0c\u6bd4\u5982\u914d\u7f6e\u67d0\u4e2a\u7ec4\u4ef6\u5e93\u7684\u6309\u9700\u5f15\u5165\n      // Modern.js \u76ee\u524d\u5185\u7f6e\u4e86 antd \u7684\u6309\u9700\u5f15\u5165\u89c4\u5219\n      config.plugins.push([\n        'babel-plugin-import',\n        {\n          libraryName: 'xxx-components',\n          libraryDirectory: 'es',\n          style: true,\n        },\n      ]);\n    },\n  },\n});\n")),(0,l.kt)("h2",{id:"\u5de5\u5177\u51fd\u6570"},"\u5de5\u5177\u51fd\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tools.babel")," \u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Function")," \u65f6\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u53ef\u7528\u7684\u5de5\u5177\u51fd\u6570\u5982\u4e0b\uff1a"),(0,l.kt)("h3",{id:"addplugins"},"addPlugins"),(0,l.kt)("p",null,"\u6dfb\u52a0 Babel \u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-import"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    babel: (config, { addPlugins }) => {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ]);\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"addpresets"},"addPresets"),(0,l.kt)("p",null,"\u6dfb\u52a0 Babel \u9884\u8bbe\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u65b0\u589e\u9884\u8bbe\u914d\u7f6e\uff0c\u5185\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"@modern-js/babel-preset-app")," \u5df2\u7ecf\u80fd\u6ee1\u8db3\u5927\u90e8\u5206\u9700\u6c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    babel: (config, { addPresets }) => {\n      addPresets([['@babel/preset-env', { targets: 'defaults' }]]);\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"removeplugins"},"removePlugins"),(0,l.kt)("p",null,"\u5220\u9664 Modern.js \u4e2d\u9ed8\u8ba4\u96c6\u6210\u7684 Babel \u63d2\u4ef6\uff0c\u53c2\u6570\u4e3a\u9700\u8981\u5220\u9664\u7684\u63d2\u4ef6\u540d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    babel: (config, { removePlugins }) => {\n      removePlugins(['babel-plugin-import']);\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"removepresets"},"removePresets"),(0,l.kt)("p",null,"\u5220\u9664 Modern.js \u4e2d\u9ed8\u8ba4\u96c6\u6210\u7684 Babel \u9884\u8bbe\u914d\u7f6e\uff0c\u53c2\u6570\u4e3a\u9700\u8981\u5220\u9664\u7684\u9884\u8bbe\u540d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    babel: (config, { removePresets }) => {\n      removePresets(['@babel/preset-react']);\n    },\n  },\n});\n")),(0,l.kt)("h3",{id:"addincludes"},"addIncludes"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cModern.js \u53ea\u4f1a\u7f16\u8bd1 src \u76ee\u5f55\u4e0b\u7684\u4e1a\u52a1\u4ee3\u7801\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"addIncludes")," \u53ef\u4ee5\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u7f16\u8bd1 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    babel: (config, { addIncludes }) => {\n      addIncludes([/node_modules\\/react/]);\n    },\n  },\n});\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e0d\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"addIncludes")," \u7f16\u8bd1 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e0b\u7684\u6587\u4ef6\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/apis/app/config/source/include"},"source.include")," \u4ee3\u66ff\u3002"))),(0,l.kt)("h3",{id:"addexcludes"},"addExcludes"),(0,l.kt)("p",null,"\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"addIncludes")," \u76f8\u53cd\uff0c\u6307\u5b9a Babel \u7f16\u8bd1\u65f6\u6392\u9664\u67d0\u4e9b\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u4e0d\u7f16\u8bd1 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/example")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  tools: {\n    babel: (config, { addExcludes }) => {\n      addExcludes([/src\\/example/]);\n    },\n  },\n});\n")),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u4fe1\u606f"},"\u63d2\u4ef6\u4fe1\u606f"),(0,l.kt)("p",null,"\u76ee\u524d\u5185\u90e8\u96c6\u6210\u7684 Babel \u9884\u8bbe\u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/preset-env"},"@babel/preset-env")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/preset-react"},"@babel/preset-react")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/preset-typescript"},"@babel/preset-typescript"))),(0,l.kt)("p",null,"\u76ee\u524d\u5185\u90e8\u96c6\u6210\u7684 Babel \u63d2\u4ef6\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/plugin-proposal-decorators"},"@babel/plugin-proposal-decorators")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/plugin-transform-runtime"},"@babel/plugin-transform-runtime")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/plugin-proposal-function-bind"},"@babel/plugin-proposal-function-bind")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/plugin-proposal-export-default-from"},"@babel/plugin-proposal-export-default-from")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/plugin-proposal-pipeline-operator"},"@babel/plugin-proposal-pipeline-operator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@babel/plugin-proposal-partial-application"},"@babel/plugin-proposal-partial-application")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types"},"babel-plugin-transform-react-remove-prop-types")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-styled-components"},"babel-plugin-styled-components")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-macros"},"babel-plugin-macros")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-dynamic-import-node"},"babel-plugin-dynamic-import-node")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-import"},"babel-plugin-import")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-lodash"},"babel-plugin-lodash"))))}m.isMDXComponent=!0}}]);