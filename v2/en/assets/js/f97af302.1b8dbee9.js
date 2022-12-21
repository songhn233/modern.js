"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6062],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(18249),i=(n(52983),n(44993));const o={title:"tools.tailwindcss",sidebar_label:"tailwindcss"},a=void 0,s={unversionedId:"configure/app/tools/tailwindcss",id:"configure/app/tools/tailwindcss",title:"tools.tailwindcss",description:"* Type: Object | Function",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/tools/tailwindcss.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/tailwindcss",permalink:"/v2/en/docs/configure/app/tools/tailwindcss",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.tailwindcss",sidebar_label:"tailwindcss"},sidebar:"configsAppSidebar",previous:{title:"swc",permalink:"/v2/en/docs/configure/app/tools/swc"},next:{title:"terser",permalink:"/v2/en/docs/configure/app/tools/terser"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,i.kt)("li",{parentName:"ul"},"Default: See configuration details below.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"TailwindCSS configuration details"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const tailwind = {\n    purge: {\n        enabled: options.env === 'production',\n        content: [\n          './config/html/**/*.html',\n          './config/html/**/*.ejs',\n          './config/html/**/*.hbs',\n          './src/**/*',\n        ],\n        layers: ['utilities'],\n    },\n    // https://tailwindcss.com/docs/upcoming-changes\n    future: {\n      removeDeprecatedGapUtilities: false,\n      purgeLayersByDefault: true,\n      defaultLineHeights: false,\n      standardFontWeights: false,\n    },\n    theme: source.designSystem // Use source.design System configuration as Tailwind CSS Theme configuration\n  }\n")),(0,i.kt)("admonition",{title:"Tips",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"More about: ",(0,i.kt)("a",{href:"https://tailwindcss.com/docs/configuration",target:"_blank"},"TailwindCSS configuration"),"\u3002"))),(0,i.kt)("p",null,"When the value is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),", rhe configuration corresponding to ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/configuration"},"TailwindCSS")," is merged with the default configuration through ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign"),"."),(0,i.kt)("p",null,"When the value is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Function"),", the object returned by the function is merged with the default configuration by ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," attribute is not allowed, otherwise the build will fail. Modern.js use ",(0,i.kt)("a",{parentName:"p",href:"/docs/configure/app/source/design-system"},(0,i.kt)("inlineCode",{parentName:"a"},"source.designSystem"))," as the Tailwind CSS Theme configuration."),(0,i.kt)("p",null,"Other uses are consistent with ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/configuration"},"Tailwind CSS"),"\u3002"))}u.isMDXComponent=!0}}]);