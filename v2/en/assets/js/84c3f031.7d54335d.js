"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9318],{44993:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(18249),o=(t(52983),t(44993));const i={sidebar_position:3},a="enableFunc",l={unversionedId:"guides/topic-detail/generator/plugin/api/new/enableFunc",id:"guides/topic-detail/generator/plugin/api/new/enableFunc",title:"enableFunc",description:"Enable functionality to support application and module engineering scenarios.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/api/new/enableFunc.md",sourceDirName:"guides/topic-detail/generator/plugin/api/new",slug:"/guides/topic-detail/generator/plugin/api/new/enableFunc",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/new/enableFunc",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"createElement",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/new/createElement"},next:{title:"createSubProject",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/new/createSubProject"}},c={},p=[{value:"func",id:"func",level:2},{value:"params",id:"params",level:2}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enablefunc"},"enableFunc"),(0,o.kt)("p",null,"Enable functionality to support application and module engineering scenarios."),(0,o.kt)("p",null,"This method is available on the ",(0,o.kt)("inlineCode",{parentName:"p"},"onForged")," API parameter."),(0,o.kt)("p",null,"Its type is defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ActionFunction {\n  UnBundle = 'unbundle',\n  TailwindCSS = 'tailwindcss',\n  BFF = 'bff',\n  MicroFrontend = 'micro_frontend',\n  I18n = 'i18n',\n  Test = 'test',\n  E2ETest = 'e2e_test',\n  Doc = 'doc',\n  Storybook = 'storybook',\n  RuntimeApi = 'runtimeApi',\n  SSG = 'ssg',\n  Polyfill = 'polyfill',\n  Deploy = 'deploy',\n}\nexport type ForgedAPI = {\n  enableFunc: (\n    func: ActionFunction,\n    params?: Record<string, unknown> | undefined,\n  ) => Promise<void>;\n  ...\n};\n")),(0,o.kt)("h2",{id:"func"},"func"),(0,o.kt)("p",null,"The function name is passed according to the functions supported by the different engineering solutions."),(0,o.kt)("h2",{id:"params"},"params"),(0,o.kt)("p",null,"For other parameters when the function is enabled, please refer to",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/mwa"},"MWA New Command"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/module"},"Module New Command"),"."))}s.isMDXComponent=!0}}]);