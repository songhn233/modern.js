"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7267],{57522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(v,s(s({ref:t},c),{},{components:n})):a.createElement(v,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29521:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(29901);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5207:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(18249),r=n(29901),l=n(3246),s=n(36316),o=n(25789);const i="tabItem_YENo";function p(e){var t,n,l;const{lazy:p,block:c,defaultValue:u,values:m,groupId:d,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.lx)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===u?u:null!=(t=null!=u?u:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:h,setTabGroupChoices:y}=(0,s.UB)(),[N,w]=(0,r.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=d){const e=h[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=j.indexOf(t),a=k[n].value;a!==N&&(T(t),w(a),null!=d&&y(d,a))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]||j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]||j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},v)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:x,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},48180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(18249),r=(n(29901),n(57522)),l=n(5207),s=n(29521);const o={title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5"},i=void 0,p={unversionedId:"guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript",id:"guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript",title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5",description:"Modern.js \u540c\u6837\u5bf9 TypeScript \u63d0\u4f9b\u4e86\u4e00\u7b49\u516c\u6c11\u3001\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002",source:"@site/docs/guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript.md",sourceDirName:"guides/tutorials/c04-es6-plus-and-ts",slug:"/guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript",permalink:"/v1/docs/guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5",permalink:"/v1/docs/guides/tutorials/c04-es6-plus-and-ts/4.1-use-es6-plus"},next:{title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",permalink:"/v1/docs/guides/tutorials/c04-es6-plus-and-ts/4.3-compatibility"}},c={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js \u540c\u6837\u5bf9 TypeScript \u63d0\u4f9b\u4e86\u4e00\u7b49\u516c\u6c11\u3001\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\uff0c\u6211\u4eec\u5c06\u5f53\u524d\u4e3a ES6+ \u8bed\u6cd5\u7684 Demo \u4fee\u6539\u4e3a TypeScript \u8bed\u6cd5\u3002"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv src/App.jsx src/App.tsx\n\npnpm add typescript @types/react @types/react-dom @types/node -D\n\ntouch tsconfig.json\n"))),(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv src/App.jsx src/App.tsx\n\npnpm add typescript @types/react @types/react-dom @types/node -D\n\nni tsconfig.json\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u63a5\u4e0b\u6765\u6240\u6709\u7ae0\u8282\u7684\u9879\u76ee\uff0c\u90fd\u4f1a\u4f7f\u7528 TS \u6765\u8fdb\u884c\u5f00\u53d1\u3002"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "@modern-js/tsconfig/base",\n  "compilerOptions": {\n    "declaration": false,\n    "jsx": "preserve",\n    "baseUrl": "./",\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  },\n  "include": ["src", "shared", "config"]\n}\n')),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),"\uff0c\u628a\u4ee3\u7801\u6539\u6210\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction App() {\n  return (\n    <ul>\n      {mockData.map(({ name, avatar, email }) => (\n        <li key={name}>\n          <img src={avatar} width={60} height={60} /> ---\n          <span>{name}</span> ---\n          <span>{email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8ddf ES6+ \u7684\u4ee3\u7801\u76f8\u6bd4\u6709\u4ee5\u4e0b\u4e0d\u540c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7531\u4e8e TS \u8fd8\u4e0d\u652f\u6301 ",(0,r.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator"},"Pipeline Operator")," \u8bed\u6cd5\uff0c\u9700\u8981\u628a mockData \u7684\u751f\u6210\u8fc7\u7a0b\u6539\u6210\u666e\u901a\u7684\u51fd\u6570\u8c03\u7528\u8bed\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981\u58f0\u660e ",(0,r.kt)("inlineCode",{parentName:"li"},"getAvatar")," \u53c2\u6570\u7684\u7c7b\u578b\u3002")),(0,r.kt)("p",null,"\u5728 VS Code \u91cc\uff0c\u628a\u9f20\u6807\u60ac\u505c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"mockData")," \u4e0a\uff0c\u53ef\u4ee5\u770b\u5230\u5b83\u7684\u7c7b\u578b\u5df2\u7ecf\u88ab\u81ea\u52a8\u63a8\u5bfc\u51fa\u6765\u3002\u5982\u679c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"key={name}")," \u6539\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"key={name * 2}"),"\uff0c\u53ef\u4ee5\u770b\u5230 TS \u7684\u62a5\u9519\u3002"),(0,r.kt)("p",null,"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u6837\u7684\u8fd0\u884c\u7ed3\u679c\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u66f4\u7b80\u5355\u3001\u5f00\u7bb1\u5373\u7528\u7684\u65b9\u5f0f\uff0c\u662f\u5728\u521b\u5efa\u9879\u76ee\u7684\u65f6\u5019\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u8bed\u8a00"),"\u9009\u62e9 TS\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u4e0a\u8ff0\u6837\u677f\u4ee3\u7801\uff0c\u6e90\u4ee3\u7801\u6587\u4ef6\u4e5f\u4f1a\u81ea\u52a8\u9ed8\u8ba4\u91c7\u7528 .ts \u548c .tsx\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c04/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);