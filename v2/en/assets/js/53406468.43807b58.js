"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8653],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(18249),o=(r(52983),r(44993));const a={sidebar_position:4},i="Monorepo",p={unversionedId:"guides/topic-detail/generator/config/monorepo",id:"guides/topic-detail/generator/config/monorepo",title:"Monorepo",description:"Monorepo projects only need PackageManager.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/config/monorepo.md",sourceDirName:"guides/topic-detail/generator/config",slug:"/guides/topic-detail/generator/config/monorepo",permalink:"/v2/en/docs/guides/topic-detail/generator/config/monorepo",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"Module",permalink:"/v2/en/docs/guides/topic-detail/generator/config/module"},next:{title:"Why do you need a generator plugin",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/abstract"}},c={},l=[{value:"Create subproject",id:"create-subproject",level:2},{value:"solution",id:"solution",level:3},{value:"packageName",id:"packagename",level:3},{value:"packagePath",id:"packagepath",level:3}],u={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monorepo"},"Monorepo"),(0,o.kt)("p",null,"Monorepo projects only need ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/common#packagemanager"},"PackageManager"),"."),(0,o.kt)("h2",{id:"create-subproject"},"Create subproject"),(0,o.kt)("p",null,"The Monorepo project supports the creation of sub-projects by using the new command. The sub-project type supports application, test application, module, internal module. In addition to the respective configuration of the application and module, some general sub-project configuration is required here."),(0,o.kt)("h3",{id:"solution"},"solution"),(0,o.kt)("p",null,"Subproject type(solution)\uff0cthe different subproject type fields are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application (mwa)"),(0,o.kt)("li",{parentName:"ul"},"Application (Test) (mwa_test)"),(0,o.kt)("li",{parentName:"ul"},"Module"),(0,o.kt)("li",{parentName:"ul"},"Modules (internal) (inner_module)")),(0,o.kt)("h3",{id:"packagename"},"packageName"),(0,o.kt)("p",null,"Subproject name (packageName), character ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," type."),(0,o.kt)("h3",{id:"packagepath"},"packagePath"),(0,o.kt)("p",null,"Subproject path (packagePath), character ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," type."))}s.isMDXComponent=!0}}]);