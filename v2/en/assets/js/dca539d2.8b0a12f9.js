"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8546],{44993:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return t?o.createElement(k,i(i({ref:n},p),{},{components:t})):o.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<l;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var o=t(18249),a=(t(52983),t(44993));const l={sidebar_position:7,title:"Model \u901a\u4fe1"},i=void 0,r={unversionedId:"guides/topic-detail/model/model-communicate",id:"guides/topic-detail/model/model-communicate",title:"Model \u901a\u4fe1",description:"Model \u901a\u4fe1\uff0c\u65e2\u6307\u4e0d\u540c Model \u95f4\u7684\u901a\u4fe1\uff0c\u4e5f\u6307\u540c\u4e00\u4e2a Model \u5185\u90e8 Effects\u3001Actions \u4e4b\u95f4\u7684\u901a\u4fe1\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/model/model-communicate.md",sourceDirName:"guides/topic-detail/model",slug:"/guides/topic-detail/model/model-communicate",permalink:"/v2/en/docs/guides/topic-detail/model/model-communicate",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Model \u901a\u4fe1"},sidebar:"guidesSidebar",previous:{title:"\u81ea\u52a8\u751f\u6210 Actions",permalink:"/v2/en/docs/guides/topic-detail/model/auto-actions"},next:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/v2/en/docs/guides/topic-detail/model/performance"}},d={},s=[{value:"Model \u95f4\u901a\u4fe1",id:"model-\u95f4\u901a\u4fe1",level:2},{value:"Model \u5185\u901a\u4fe1",id:"model-\u5185\u901a\u4fe1",level:2}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Model \u901a\u4fe1\uff0c\u65e2\u6307\u4e0d\u540c Model \u95f4\u7684\u901a\u4fe1\uff0c\u4e5f\u6307\u540c\u4e00\u4e2a Model \u5185\u90e8 Effects\u3001Actions \u4e4b\u95f4\u7684\u901a\u4fe1\u3002"),(0,a.kt)("h2",{id:"model-\u95f4\u901a\u4fe1"},"Model \u95f4\u901a\u4fe1"),(0,a.kt)("p",null,"Model \u4e4b\u95f4\u4e0d\u662f\u5b64\u7acb\u7684\uff0c\u662f\u53ef\u4ee5\u8fdb\u884c\u901a\u4fe1\u7684\u3002\u4e3b\u8981\u5206\u4e3a\u4e24\u79cd\u573a\u666f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 Model \u4e2d\u8bbf\u95ee\u5176\u5b83 Model \u7684 State \u548c Actions\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 Model \u4e2d\u76d1\u542c\u5176\u5b83 Model \u53d8\u5316\u3002")),(0,a.kt)("p",null,"\u8fd9\u91cc\u5c06 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/quick-start"},"\u5feb\u901f\u4e0a\u624b")," \u4e00\u8282\u7684\u7b80\u5355\u8ba1\u6570\u5668\u5e94\u7528\u6539\u9020\u6210\u4e00\u4e2a\u53ef\u8bbe\u7f6e\u6b65\u9891\u7684\u8ba1\u6570\u5668\u5e94\u7528\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u6b65\u9891\uff0c\u4ece\u800c\u5f71\u54cd\u6bcf\u6b21\u8ba1\u6570\u5668\u589e\u52a0\u7684\u5e45\u5ea6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u62bd\u8c61\u51fa\u4e24\u4e2a Model\uff0c\u5206\u522b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel"),"\uff08\u6b65\u9891\uff09\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"counterModel"),"\uff08\u8ba1\u6570\u5668\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { model } from '@modern-js/runtime/model';\n\nconst stepModel = model('step').define({\n  state: 1,\n});\n\nconst counterModel = model('count').define((context, { use, onMount }) => {\n  const [, , subscribeStep] = use(stepModel);\n\n  onMount(() => {\n    return subscribeStep(() => {\n      console.log(\n        `Subscribe in counterModel: stepModel change to ${use(stepModel)[0]}`,\n      );\n    });\n  });\n\n  return {\n    state: {\n      value: 1,\n    },\n    actions: {\n      add(state) {\n        const step = use(stepModel)[0];\n        state.value += step;\n      },\n    },\n  };\n});\n\nexport { stepModel, counterModel };\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stepModel")," \u53ea\u58f0\u660e\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u521d\u59cb\u503c\u4e3a 1\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"counterModel")," \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u51fd\u6570\u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel"),"\uff0c\u62ff\u5230\u8fd4\u56de\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribeStep")," \u51fd\u6570\uff0c\u7528\u6765\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel")," \u72b6\u6001\u7684\u53d8\u66f4\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"onMount")," \u662f Model \u6302\u8f7d\u5b8c\u6210\u540e\u7684\u94a9\u5b50\u51fd\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"counterModel")," \u6302\u8f7d\u5b8c\u6210\u540e\u5f00\u59cb\u8ba2\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel")," \u72b6\u6001\u7684\u53d8\u66f4\uff0c\u6253\u5370\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel")," \u7684\u6700\u65b0\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"counterModel")," \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u51fd\u6570\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel"),"\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," \u91cc\u53ef\u4ee5\u83b7\u53d6\u5230\u5f53\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel")," \u7684\u503c\uff08\u6b65\u9891\uff09\uff0c\u4ee5\u6b64\u503c\u6765\u505a\u81ea\u589e\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u9700\u8981\u8bbf\u95ee\u5176\u4ed6 Model \u7684 State \u65f6\uff0c\u5fc5\u987b\u8981\u5728\u5f53\u524d Actions \u6216 Effects \u51fd\u6570\uff08\u672c\u4f8b\u4e2d\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," \u51fd\u6570 \uff09\u771f\u6b63\u6267\u884c\u7684\u9636\u6bb5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"use"),"\uff0c\u4ee5\u4fdd\u8bc1\u83b7\u53d6\u7684 State \u662f\u6700\u65b0\u503c\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u867d\u7136\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"define")," \u7684\u56de\u8c03\u51fd\u6570\u4e2d\u4e5f\u8c03\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"use(stepModel)"),"\uff0c\u4f46\u662f\u6211\u4eec\u5e76\u6ca1\u6709\u89e3\u6784 ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u503c\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"define")," \u7684\u56de\u8c03\u51fd\u6570\u662f\u5728 Model \u7684\u6302\u8f7d\u9636\u6bb5\u6267\u884c\u7684\uff0c\u8fd9\u4e2a\u65f6\u5019\u83b7\u53d6\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u53ef\u80fd\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," \u6267\u884c\u65f6\u83b7\u53d6\u5230\u7684\u503c\u662f\u4e0d\u540c\u7684\u3002")),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("strong",{parentName:"p"},"App.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useModel } from '@modern-js/runtime/model';\nimport { counterModel, stepModel } from './models/count';\n\nfunction Counter() {\n  const [state, actions] = useModel(counterModel);\n  const [step, stepActions] = useModel(stepModel);\n\n  return (\n    <div>\n      <div>step: {step}</div>\n      <button onClick={() => stepActions.setState(step + 1)}>add step</button>\n      <div>counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add counter</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  return <Counter />;\n}\n")),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Modern.js \u9ed8\u8ba4\u5f00\u542f ",(0,a.kt)("a",{parentName:"p",href:"/v2/en/docs/guides/topic-detail/model/auto-actions"},"\u81ea\u52a8\u751f\u6210 actions"),"\uff0c\u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"stepModel")," \u4e2d\u867d\u7136\u6ca1\u6709\u624b\u52a8\u5b9a\u4e49 Actions\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528\u81ea\u52a8\u751f\u6210\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"setState"),"\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"add step")," \u589e\u52a0\u6b65\u9891\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"add counter")," \u89e6\u53d1\u8ba1\u6570\u5668\u589e\u52a0\u3002")),(0,a.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/models-communicate.gif",alt:"communicate-models"})),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u672c\u8282\u5b8c\u6574\u7684",(0,a.kt)("a",{parentName:"li",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/models-communication"},"\u793a\u4f8b\u4ee3\u7801"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u76f8\u5173 API \u7684\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"li",href:"/docs/apis/app/runtime/model/model_#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B"},"model"),"\u3002"))),(0,a.kt)("p",null,"\u524d\u9762 ",(0,a.kt)("inlineCode",{parentName:"p"},"counterModel")," \u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u662f\u5728 Actions \u7684\u51fd\u6570\u5185\u90e8\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u83b7\u53d6\u5176\u4ed6 Model \u5bf9\u8c61\u7684\u3002\u5982\u679c\u53ea\u9700\u8981\u8c03\u7528\u5176\u5b83 Model \u7684 Actions\uff0c\u56e0\u4e3a Actions \u90fd\u662f\u51fd\u6570\uff0c\u4e0d\u5b58\u5728\u503c\u8fc7\u671f\u95ee\u9898\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"define")," \u7684\u56de\u8c03\u51fd\u6570\u4e2d\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u83b7\u53d6 Model \u7684 Actions\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const barModel = model('bar').define({\n  // \u7701\u7565\n});\n\nconst fooModel = model('foo').define((context, utils) => {\n  // \u83b7\u53d6 barModel \u7684 actions\n  const [, actions] = utils.use(barModel);\n  return {\n    // \u7701\u7565 state\u3001actions\n    effects: {\n      async loadA() {\n        // \u7701\u7565\u526f\u4f5c\u7528\u903b\u8f91\n        // \u8c03\u7528 barModel \u7684 action\n        barModel.actionA();\n      },\n      async loadB() {\n        // \u7701\u7565\u526f\u4f5c\u7528\u903b\u8f91\n        // \u8c03\u7528 barModel \u7684 action\n        barModel.actionB();\n      },\n    },\n  };\n});\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"loadA"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"loadB")," \u4e2d\u91cd\u590d\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"barModel")," \u5bf9\u8c61\uff0c\u7b80\u5316\u4e86\u4ee3\u7801\u903b\u8f91\u3002"),(0,a.kt)("h2",{id:"model-\u5185\u901a\u4fe1"},"Model \u5185\u901a\u4fe1"),(0,a.kt)("p",null,"Model \u5185\u901a\u4fe1\uff0c\u4e5f\u4e3b\u8981\u5206\u4e3a\u4e24\u79cd\u573a\u666f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Effects \u51fd\u6570\u8c03\u7528\u81ea\u8eab Model \u7684 Actions \u51fd\u6570\u3001\u6216\u5176\u4ed6 Effects \u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ol"},"Actions \u51fd\u6570\u8c03\u7528\u81ea\u8eab Model \u7684 \u5176\u4ed6 Actions \u51fd\u6570\u3002")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/manage-effects"},"\u526f\u4f5c\u7528\u7ba1\u7406"),"  \u4e00\u8282\uff0c\u6211\u4eec\u6f14\u793a\u8fc7 Effects \u51fd\u6570\u5982\u4f55\u8c03\u7528 Actions \u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u518d\u6765\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const fooModel = model('foo').define((context, { use, onMount }) => ({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.a = payload;\n    },\n  },\n  effects: {\n    async loadA() {\n      // \u901a\u8fc7 use \u83b7\u53d6\u5f53\u524d Model \u7684 actions\n      const [, actions] = use(fooModel);\n      const res = await mockFetchA();\n      actions.setA(res);\n    },\n    async loadB() {\n      // \u901a\u8fc7 use \u83b7\u53d6\u5f53\u524d Model \u7684 actions\n      const [, actions] = use(fooModel);\n      const res = await mockFetchB();\n      actions.setB(res);\n    },\n  },\n}));\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"fooModel")," \u7684\u4e24\u4e2a Effects \u51fd\u6570\uff0c\u9700\u8981\u8c03\u7528\u81ea\u8eab\u7684 Actions \u51fd\u6570\u3002\u8fd9\u91cc\u6211\u4eec\u5728\u6bcf\u4e2a Effects \u51fd\u6570\u4e2d\uff0c\u90fd\u8c03\u7528\u4e86\u4e00\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"use"),"\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u50cf Model \u95f4\u901a\u4fe1\u7684\u4f8b\u5b50\u4e2d\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"define")," \u7684\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u7edf\u4e00\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u83b7\u53d6 Model \u81ea\u8eab\u7684 Actions \u5462\uff1f\u8fd9\u662f\u56e0\u4e3a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u83b7\u53d6 Model \u65f6\uff0c\u4f1a\u5148\u68c0\u67e5\u8fd9\u4e2a Model \u662f\u5426\u5df2\u7ecf\u6302\u8f7d\uff0c\u5982\u679c\u8fd8\u6ca1\u6709\u6302\u8f7d\uff0c\u4f1a\u5148\u6267\u884c\u6302\u8f7d\u903b\u8f91\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"define")," \u7684\u56de\u8c03\u51fd\u6570\u53c8\u662f\u5728 Model \u7684\u6302\u8f7d\u9636\u6bb5\u6267\u884c\u7684\uff0c\u8fd9\u6837\u4e00\u6765\uff0c\u5728\u6302\u8f7d\u9636\u6bb5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u83b7\u53d6 Model \u81ea\u8eab\uff0c\u4f1a\u51fa\u73b0\u6b7b\u5faa\u73af\uff08\u4ee3\u7801\u5b9e\u9645\u6267\u884c\u8fc7\u7a0b\u4f1a\u629b\u51fa\u9519\u8bef\uff09\u3002\u6240\u4ee5\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u5b9a\u4e0d\u80fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"strong"},"define")," \u7684\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"use")," \u83b7\u53d6 Model \u81ea\u8eab\u5bf9\u8c61\u3002")),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"onMount")," \u8fd9\u4e2a\u94a9\u5b50\u51fd\u6570\uff0c\u5728 Model \u6302\u8f7d\u5b8c\u6210\u540e\uff0c\u518d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u83b7\u53d6 Model \u81ea\u8eab\u5bf9\u8c61\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const fooModel = model('foo').define((context, { use, onMount }) => {\n  let actions;\n\n  onMount(() => {\n    // fooModel \u6302\u8f7d\u5b8c\u6210\u540e\uff0c\u901a\u8fc7 use \u83b7\u53d6\u5f53\u524d Model \u7684 actions\n    [, actions] = use(fooModel);\n  });\n\n  return {\n    state: {\n      a: '',\n      b: '',\n    },\n    actions: {\n      setA(state, payload) {\n        state.a = payload;\n      },\n      setB(state, payload) {\n        state.a = payload;\n      },\n    },\n    effects: {\n      async loadA() {\n        const res = await mockFetchA();\n        actions.setA(res);\n      },\n      async loadB() {\n        const res = await mockFetchB();\n        actions.setB(res);\n      },\n    },\n  };\n});\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u4ee3\u7801\u7684\u7b80\u5316\u3002"))}c.isMDXComponent=!0}}]);