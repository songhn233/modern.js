"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1146],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(18249),a=(n(52983),n(44993));const o={title:"act"},i=void 0,c={unversionedId:"apis/app/runtime/testing/act",id:"apis/app/runtime/testing/act",title:"act",description:"\u7528\u4e8e\u786e\u4fdd\u6e32\u67d3\u3001\u4e8b\u4ef6\u3001\u6570\u636e\u83b7\u53d6\u7b49\u884c\u4e3a\u5df2\u7ecf\u5e94\u7528\u5728 DOM \u4e0a\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/testing/act.md",sourceDirName:"apis/app/runtime/testing",slug:"/apis/app/runtime/testing/act",permalink:"/v2/docs/apis/app/runtime/testing/act",draft:!1,tags:[],version:"current",frontMatter:{title:"act"},sidebar:"apisAppSidebar",previous:{title:"cleanup",permalink:"/v2/docs/apis/app/runtime/testing/cleanup"},next:{title:"render",permalink:"/v2/docs/apis/app/runtime/testing/render"}},p={},l=[{value:"\u4f7f\u7528\u59ff\u52bf",id:"\u4f7f\u7528\u59ff\u52bf",level:2},{value:"\u51fd\u6570\u7b7e\u540d",id:"\u51fd\u6570\u7b7e\u540d",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7528\u4e8e\u786e\u4fdd\u6e32\u67d3\u3001\u4e8b\u4ef6\u3001\u6570\u636e\u83b7\u53d6\u7b49\u884c\u4e3a\u5df2\u7ecf\u5e94\u7528\u5728 DOM \u4e0a\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u59ff\u52bf"},"\u4f7f\u7528\u59ff\u52bf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { act } from '@modern-js/runtime/testing';\n")),(0,a.kt)("h2",{id:"\u51fd\u6570\u7b7e\u540d"},"\u51fd\u6570\u7b7e\u540d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"act")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/testing-recipes.html#act"},"react-dom/test-utils act \u51fd\u6570")," \u662f\u4e00\u81f4\u7684\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import ReactDOM from 'react-dom';\nimport { act } from '@modern-js/runtime/testing';\nimport { Foo } from '@/components/Foo';\n\ndescribe('test act', () => {\n  it('it should be foo', () => {\n    const el = document.createElement('div');\n    act(() => {\n      ReactDOM.render(<Foo />, el);\n    });\n\n    expect(el.innerHTML).toBe('<div>Foo</div>');\n  });\n});\n")))}u.isMDXComponent=!0}}]);