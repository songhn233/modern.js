"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3534],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const o={toc:[{value:"Example",id:"example",level:4}]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string | object | function | RegExp"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")))),(0,a.kt)("p",null,"At build time, prevent some ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," dependencies from being packed into bundles in your code, and instead fetch them externally at runtime."),(0,a.kt)("p",null,"For more information, please see: ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/externals/"},"webpack Externals")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,"Exclude the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-dom")," dependency from the build product. To get this module at runtime, the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-dom")," will globally retrieve the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM")," variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    externals: {\n      'react-dom': 'ReactDOM',\n    },\n  },\n};\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When the build target is Web Worker, externals will not take effect. This is because the Worker environment can not access global variables.")))}i.isMDXComponent=!0;const p={title:"output.externals",sidebar_label:"externals"},l=void 0,u={unversionedId:"configure/app/output/externals",id:"configure/app/output/externals",title:"output.externals",description:"This configuration is Modern.js Builder configuration, more detail can see output.externals\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/externals.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/externals",permalink:"/v2/en/docs/configure/app/output/externals",draft:!1,tags:[],version:"current",frontMatter:{title:"output.externals",sidebar_label:"externals"},sidebar:"configsAppSidebar",previous:{title:"enableLatestDecorators",permalink:"/v2/en/docs/configure/app/output/enable-latest-decorators"},next:{title:"filename",permalink:"/v2/en/docs/configure/app/output/filename"}},c={},s=[],m={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-externals"},"output.externals"),"\u3002")),(0,a.kt)(i,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);