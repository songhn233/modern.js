"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7335,4066,6178],{57522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(18249),r=(n(29901),n(57522)),i=n(66993);const o={sidebar_position:7,title:"handleEffect"},l=void 0,p={unversionedId:"apis/app/runtime/model/handle-effect",id:"apis/app/runtime/model/handle-effect",title:"handleEffect",description:"\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\u7c7b\u578b\u7684 Effect\uff0c\u901a\u5e38\u6709\u4e09\u79cd\u9700\u8981\u5904\u7406\u7684\u72b6\u6001: 1.\u8bf7\u6c42\u4e2d\uff1b2.\u8bf7\u6c42\u6210\u529f\uff1b3.\u8bf7\u6c42\u5904\u7406\u5931\u8d25\u3002\u8fd9\u4e9b\u72b6\u6001\u5904\u7406\u7684\u65b9\u5f0f\uff0c\u5c31\u662f\u7f16\u5199\u5bf9\u5e94\u7684 Action \u51fd\u6570(pending\u3001fulfilled\u3001rejected)\u3002",source:"@site/docs/apis/app/runtime/model/handle-effect.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/handle-effect",permalink:"/v1/docs/apis/app/runtime/model/handle-effect",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"handleEffect"},sidebar:"apisAppSidebar",previous:{title:"Auto actions",permalink:"/v1/docs/apis/app/runtime/model/auto-actions"},next:{title:"Provider",permalink:"/v1/docs/apis/app/runtime/model/Provider"}},d={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"ReduckTip"}),(0,r.kt)("p",null,"\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\u7c7b\u578b\u7684 Effect\uff0c\u901a\u5e38\u6709\u4e09\u79cd\u9700\u8981\u5904\u7406\u7684\u72b6\u6001: 1.\u8bf7\u6c42\u4e2d\uff1b2.\u8bf7\u6c42\u6210\u529f\uff1b3.\u8bf7\u6c42\u5904\u7406\u5931\u8d25\u3002\u8fd9\u4e9b\u72b6\u6001\u5904\u7406\u7684\u65b9\u5f0f\uff0c\u5c31\u662f\u7f16\u5199\u5bf9\u5e94\u7684 Action \u51fd\u6570(pending\u3001fulfilled\u3001rejected)\u3002"),(0,r.kt)("p",null,"\u501f\u52a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"handleEffect")," API\uff0c\u6211\u4eec\u53ef\u4ee5\u751f\u6210\u9ed8\u8ba4\u7684 Action \u51fd\u6570\u6765\u5904\u7406\u5f02\u6b65\u8bf7\u6c42\u5404\u4e2a\u9636\u6bb5\u7684\u4e0d\u540c\u7ed3\u679c\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"handleEffect")," \u751f\u6210\u7684 Action \u8fd4\u56de\u7684 State \u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  result: any; // \u5b58\u50a8 fulfilled \u72b6\u6001\u7684\u8fd4\u56de\u7ed3\u679c\n  pending: boolean; // \u8bf7\u6c42\u662f\u5426\u7ed3\u675f\n  error: string; // \u8bf7\u6c42\u5931\u8d25\u7684\u7ed3\u679c\n}\n")),(0,r.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface EffectActions {\n  pending: Action;\n  fulfilled: Action;\n  rejected: Action;\n}\n\ninterface Config {\n  ns?: string;\n  result?: string | false;\n  error?: string | false;\n  pending?: string | false;\n  combineMode?: 'merge' | 'replace';\n  omitResultNamespace?: boolean;\n}\n\nfunction handleEffect(config: Config): EffectActions;\n")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ns\uff1a\u9ed8\u8ba4\u8fd4\u56de\u7684 State \u7ed3\u6784\u6241\u5e73\u5730\u6302\u8f7d\u5230 Model \u7684 State \u4e0a\uff0c\u901a\u8fc7\u8bbe\u7f6e\u8be5\u53c2\u6570\u53ef\u4ee5\u5c06\u8fd4\u56de\u7684 State \u6302\u8f7d\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"ns")," \u503c\u547d\u540d\u7684\u5b57\u6bb5\u4e0b\u3002\u4f8b\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"ns")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\uff0c\u8fd4\u56de\u7684 State \u7ed3\u6784\u4e3a\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  data: {\n    pending: boolean;\n    result: any;\n    error: string;\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"result\uff1a\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},'"result"'),"\u3002\u8be5\u53c2\u6570\u5bf9\u5e94\u5b58\u50a8\u5f02\u6b65\u8bf7\u6c42 fulfilled \u72b6\u6001\u7ed3\u679c\u7684\u5b57\u6bb5\u540d\u79f0\u3002\u4f8b\u5982\uff0c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"result")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},'"items"'),"\uff0c\u8fd4\u56de\u7684 State \u7ed3\u6784\u4e3a\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  items: any; // \u9ed8\u8ba4\u7684 result -> items\n  pending: boolean;\n  error: string;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u8fd4\u56de\u7684 State \u7ed3\u6784\u4e2d\u4e0d\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  pending: boolean;\n  error: string;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"pending\uff1a\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"pending"'),"\u3002\u6539\u53d8\u8fd4\u56de State \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pending")," \u5b57\u6bb5\u540d\u3002\u7528\u6cd5\u540c\u4e0a\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"error\uff1a \u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"error"'),"\u3002\u6539\u53d8\u8fd4\u56de State \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," \u5b57\u6bb5\u540d\u3002\u7528\u6cd5\u540c\u4e0a\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"combineMode\uff1a\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"merge"'),"\u3002\u83b7\u53d6 fulfilled \u72b6\u6001\u7684\u8fd4\u56de\u6570\u636e\u540e\uff0c\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u7684\u5904\u7406\u65b9\u5f0f\uff1amerge\uff08\u5408\u5e76\uff09\u548creplace\uff08\u66ff\u6362\uff09\u3002\u8fd9\u91cc\u80fd\u81ea\u52a8\u5904\u7406\u7684\u6570\u636e\u7c7b\u578b\u4e5f\u4ec5\u9650\u4e3a\u7b80\u5355\u7684\u5bf9\u8c61\u6216\u8005\u6570\u7ec4\u7c7b\u578b\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"merge\uff1a\u524d\u4e00\u6b21\u7684\u6570\u636e\u4e0e\u5f53\u524d\u7684\u6570\u636e\u5408\u5e76\u3002\u6570\u636e\u4e3a\u6570\u7ec4\u7c7b\u578b\uff0c\u5185\u90e8\u64cd\u4f5c\u7c7b\u4f3c\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"[].concat(lastData, currentData)"),"\uff1b\u6570\u636e\u4e3a\u5bf9\u8c61\u7c7b\u578b\uff0c\u5185\u90e8\u64cd\u4f5c\u7c7b\u4f3c\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"{...lastData, ...curData}"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"replace\uff1a\u5f53\u524d\u7684\u6570\u636e\u76f4\u63a5\u66ff\u6362\u4e4b\u524d\u7684\u6570\u636e\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"omitResultNamespace\uff1a\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"false"'),"\u3002\u5f53\u5f02\u6b65\u8bf7\u6c42\u7684\u7ed3\u679c\u4e3a\u5bf9\u8c61\u7c7b\u578b\uff0c\u5e0c\u671b\u628a\u8be5\u7ed3\u679c\u76f4\u63a5\u6302\u8f7d\u5230 Model \u7684 State \u4e0a\uff0c\u800c\u4e0d\u662f\u6302\u8f7d\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},'"result"')," \u4e0a\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a true\u3002\u4f8b\u5982\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u4e00\u4e2a\u5f02\u6b65\u8bf7\u6c42\u5f97\u5230\u7684\u6570\u636e\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff1a{user: 'xx', email: 'xx'}\uff0c\n// \u914d\u7f6e handleEffect({ omitResultNamespace: true })\n// \u5219\u5f97\u5230\u7684 State \u7ed3\u6784\u5982\u4e0b\uff1a\n{\n  user: 'xx',\n  email: 'xx',\n  pending: false,\n  error: null,\n}\n")),(0,r.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.kt)("p",null,"\u5206\u522b\u5904\u7406 pending\u3001fulfilled\u3001rejected \u4e09\u79cd\u72b6\u6001\u7684 Action \u7ec4\u6210\u7684\u5bf9\u8c61\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u66f4\u591a\u53c2\u8003")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/model/manage-effects"},"\u526f\u4f5c\u7528\u7ba1\u7406")))))}c.isMDXComponent=!0},21602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(18249),r=(n(29901),n(57522)),i=n(69862);const o={sidebar_position:7,title:"handleEffect"},l=void 0,p={unversionedId:"apis/module/runtime/model/handle-effect",id:"apis/module/runtime/model/handle-effect",title:"handleEffect",description:"",source:"@site/docs/apis/module/runtime/model/handle-effect.md",sourceDirName:"apis/module/runtime/model",slug:"/apis/module/runtime/model/handle-effect",permalink:"/v1/docs/apis/module/runtime/model/handle-effect",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"handleEffect"},sidebar:"apisModuleSidebar",previous:{title:"Auto actions",permalink:"/v1/docs/apis/module/runtime/model/auto-actions"},next:{title:"Provider",permalink:"/v1/docs/apis/module/runtime/model/Provider"}},d={},s=[],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"Info"}))}c.isMDXComponent=!0},66993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(18249),r=(n(29901),n(57522));const i={},o=void 0,l={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a@modern-js/runtime/model\u3002",source:"@site/docs/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v1/docs/components/reduck-tip",tags:[],version:"current",frontMatter:{}},p={},d=[],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u662f\u5728 Modern.js \u4ee5\u5916\u5355\u72ec\u96c6\u6210 Reduck\uff0c\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),"\u3002"))))}m.isMDXComponent=!0}}]);