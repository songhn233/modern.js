"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4914],{57522:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(29901);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(18249),i=(n(29901),n(57522));const r={title:"tools.tailwindcss",sidebar_label:"tailwindcss"},o=void 0,s={unversionedId:"apis/app/config/tools/tailwindcss",id:"apis/app/config/tools/tailwindcss",title:"tools.tailwindcss",description:"* \u7c7b\u578b\uff1a Object | Function",source:"@site/docs/apis/app/config/tools/tailwindcss.md",sourceDirName:"apis/app/config/tools",slug:"/apis/app/config/tools/tailwindcss",permalink:"/v1/docs/apis/app/config/tools/tailwindcss",tags:[],version:"current",frontMatter:{title:"tools.tailwindcss",sidebar_label:"tailwindcss"},sidebar:"apisAppSidebar",previous:{title:"styledComponents",permalink:"/v1/docs/apis/app/config/tools/styled-components"},next:{title:"terser",permalink:"/v1/docs/apis/app/config/tools/terser"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u89c1\u4e0b\u65b9\u914d\u7f6e\u8be6\u60c5\u3002")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"TailwindCSS \u914d\u7f6e\u8be6\u60c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const tailwind = {\n    purge: {\n        enabled: options.env === 'production',\n        content: [\n          './config/html/**/*.html',\n          './config/html/**/*.ejs',\n          './config/html/**/*.hbs',\n          './src/**/*',\n        ],\n        layers: ['utilities'],\n    },\n    // https://tailwindcss.com/docs/upcoming-changes\n    future: {\n      removeDeprecatedGapUtilities: false,\n      purgeLayersByDefault: true,\n      defaultLineHeights: false,\n      standardFontWeights: false,\n    },\n    theme: source.designSystem // \u4f7f\u7528source.designSystem\u914d\u7f6e\u4f5c\u4e3aTailwind CSS Theme\u914d\u7f6e\n  }\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u66f4\u591a\u5173\u4e8e\uff1a",(0,i.kt)("a",{href:"https://tailwindcss.com/docs/configuration",target:"_blank"},"TailwindCSS \u914d\u7f6e"),"\u3002")))),(0,i.kt)("p",null,"\u5bf9\u5e94 ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/configuration"},"TailwindCSS")," \u7684\u914d\u7f6e\uff0c\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u5408\u5e76\u3002"),(0,i.kt)("p",null,"\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u51fd\u6570\u8fd4\u56de\u7684\u5bf9\u8c61\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u5408\u5e76\u3002"),(0,i.kt)("p",null,"\u4e0d\u5141\u8bb8\u51fa\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," \u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u6784\u5efa\u5931\u8d25\u3002 Modern.js \u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/config/source/design-system"},(0,i.kt)("inlineCode",{parentName:"a"},"source.designSystem"))," \u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tailwind CSS Theme")," \u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u5176\u4ed6\u7684\u4f7f\u7528\u65b9\u5f0f\u548c Tailwind CSS \u4e00\u81f4: ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/configuration"},"\u5feb\u901f\u4f20\u9001\u95e8"),"\u3002"))}d.isMDXComponent=!0}}]);