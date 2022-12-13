"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6841],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var s=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=s.createContext({}),i=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return s.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?s.createElement(f,l(l({ref:t},c),{},{components:n})):s.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var i=2;i<r;i++)l[i]=n[i];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=n(18249),o=(n(52983),n(44993));const r={sidebar_position:5},l="CSS Modules",a={unversionedId:"guides/basic-features/css/css-modules",id:"guides/basic-features/css/css-modules",title:"CSS Modules",description:"Modern.js out of the box support for CSS Modules.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/basic-features/css/css-modules.md",sourceDirName:"guides/basic-features/css",slug:"/guides/basic-features/css/css-modules",permalink:"/v2/en/docs/guides/basic-features/css/css-modules",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guidesSidebar",previous:{title:"Less and Sass",permalink:"/v2/en/docs/guides/basic-features/css/less-sass"},next:{title:"\u4ee3\u7406",permalink:"/v2/en/docs/guides/basic-features/proxy"}},u={},i=[{value:"File Suffix Form CSS Modules",id:"file-suffix-form-css-modules",level:2},{value:"Global CSS Modules",id:"global-css-modules",level:2}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"css-modules"},"CSS Modules"),(0,o.kt)("p",null,"Modern.js out of the box support for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules"),"."),(0,o.kt)("h2",{id:"file-suffix-form-css-modules"},"File Suffix Form CSS Modules"),(0,o.kt)("p",null,"By default, files ending in ",(0,o.kt)("inlineCode",{parentName:"p"},".module.(css|scss|sass|less)")," are treated as CSS Modules files, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="button.module.css"',title:'"button.module.css"'},".redColor {\n  color: red;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Button.jsx"',title:'"Button.jsx"'},"import styles from './button.module.css';\n\nexport default function Button() {\n  return (\n    <button type=\"button\" className={styles.redColor}>\n      red button\n    </button>\n  );\n}\n")),(0,o.kt)("p",null,"Will eventually be compiled as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<button type="button" className="button_redColor__1-RBg">\n  red button\n</button>;\n')),(0,o.kt)("h2",{id:"global-css-modules"},"Global CSS Modules"),(0,o.kt)("p",null,"If you want to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},".module")," suffix from the filename, you can set ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/output/disable-css-module-extension"},(0,o.kt)("inlineCode",{parentName:"a"},"output.disable CssModuleExtension")),"."),(0,o.kt)("p",null,"After setting, all style files except the style files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/")," directory and the file name format of ",(0,o.kt)("inlineCode",{parentName:"p"},"[name].global.(css|scss|sass|less)")," will be processed as CSS Modules."),(0,o.kt)("p",null,"If you need global styles at this point, you can solve it by creating a style file with the filename format ",(0,o.kt)("inlineCode",{parentName:"p"},"[name].global.(css|scss|sass|less)"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="app.global.css"',title:'"app.global.css"'},".bg-blue {\n  background-color: blue;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="button.css"',title:'"button.css"'},".redColor {\n  color: red;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="App.jsx"',title:'"App.jsx"'},"import './app.global.css';\nimport styles from './button.css';\n\nexport default function Button() {\n  return (\n    <button type=\"button\" className={`${styles.redColor} bg-blue`}>\n      button\n    </button>\n  );\n}\n")),(0,o.kt)("p",null,"Will eventually be compiled as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<button type="button" className="button__redColor--JsFYl bg-blue">\n  button\n</button>;\n')),(0,o.kt)("p",null,"The final effect is as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/more-css-modules.png",alt:null})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gajus/babel-plugin-react-css-modules"},"babel-plugin-react-css-modules"),", it is important to note that the configuration option ",(0,o.kt)("inlineCode",{parentName:"p"},"generateScopedName")," of this plugin needs to be the same as ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/output/css-module-local-ident-name"},(0,o.kt)("inlineCode",{parentName:"a"},"output.css ModuleLocalIdentName")),".")))}p.isMDXComponent=!0}}]);