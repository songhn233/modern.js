"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[7681],{72759:function(s,l,n){n.r(l),n.d(l,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var e=n(39980);const c=void 0,r=[{id:"\u793a\u4f8b",text:"\u793a\u4f8b",depth:3}],o="\"- **\u7c7b\u578b**\\n\\n```ts\\ntype DistPathConfig = {\\n  root?: string;\\n  js?: string;\\n  css?: string;\\n  svg?: string;\\n  font?: string;\\n  html?: string;\\n  image?: string;\\n  media?: string;\\n  server?: string;\\n};\\n```\\n\\n- **\u9ed8\u8ba4\u503c**\\n\\n```js\\nconst defaultDistPath = {\\n  root: 'dist',\\n  html: 'html',\\n  js: 'static/js',\\n  css: 'static/css',\\n  svg: 'static/svg',\\n  font: 'static/font',\\n  image: 'static/image',\\n  media: 'static/media',\\n  server: 'bundles',\\n};\\n```\\n\\n\u8bbe\u7f6e\u6784\u5efa\u4ea7\u7269\u7684\u8f93\u51fa\u76ee\u5f55\uff0cBuilder \u4f1a\u6839\u636e\u4ea7\u7269\u7684\u7c7b\u578b\u8f93\u51fa\u5230\u5bf9\u5e94\u7684\u5b50\u76ee\u5f55\u4e0b\u3002\\n\\n\u5176\u4e2d\uff1a\\n\\n- `root`: \u8868\u793a\u6240\u6709\u6784\u5efa\u4ea7\u7269\u8f93\u51fa\u7684\u6839\u76ee\u5f55\u3002\\n- `html`\uff1a\u8868\u793a HTML \u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002\\n- `js`\uff1a\u8868\u793a JavaScript \u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002\\n- `css`\uff1a\u8868\u793a CSS \u6837\u5f0f\u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002\\n- `svg`\uff1a\u8868\u793a SVG \u56fe\u7247\u7684\u8f93\u51fa\u76ee\u5f55\u3002\\n- `font`\uff1a\u8868\u793a\u5b57\u4f53\u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002\\n- `image`\uff1a\u8868\u793a\u975e SVG \u56fe\u7247\u7684\u8f93\u51fa\u76ee\u5f55\u3002\\n- `media`\uff1a\u8868\u793a\u89c6\u9891\u7b49\u5a92\u4f53\u8d44\u6e90\u7684\u8f93\u51fa\u76ee\u5f55\u3002\\n- `server`: \u8868\u793a\u670d\u52a1\u7aef\u4ea7\u7269\u7684\u8f93\u51fa\u76ee\u5f55\uff0c\u4ec5\u5728 target \u4e3a `node` \u65f6\u6709\u6548\u3002\\n\\n### \u793a\u4f8b\\n\\n\u4ee5 JavaScript \u6587\u4ef6\u4e3a\u4f8b\uff0c\u4f1a\u8f93\u51fa\u5230 `distPath.root` + `distPath.js` \u76ee\u5f55\uff0c\u5373\u4e3a `dist/static/js`\u3002\\n\\n\u5982\u679c\u9700\u8981\u5c06 JavaScript \u6587\u4ef6\u8f93\u51fa\u5230 `build/resource/js` \u76ee\u5f55\uff0c\u53ef\u4ee5\u8fd9\u6837\u8bbe\u7f6e\uff1a\\n\\n```js\\nexport default {\\n  output: {\\n    distPath: {\\n      root: 'build',\\n      js: 'resource/js',\\n    },\\n  },\\n};\\n```\\n\"";function i(s){const l=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p",h3:"h3",a:"a"},s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:(0,e.jsx)(l.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,e.jsxs)(l.div,{className:"language-ts",children:[(0,e.jsx)(l.div,{className:""}),(0,e.jsxs)(l.div,{className:"modern-code-content",children:[(0,e.jsx)(l.button,{className:"copy"}),(0,e.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(l.code,{children:[(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"type"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"DistPathConfig"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"="}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  root"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"string"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  js"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"string"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  css"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"string"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  svg"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"string"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  font"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"string"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  html"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"string"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  image"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"string"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  media"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"string"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  server"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#8FBCBB"},children:"string"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:(0,e.jsx)(l.strong,{children:"\u9ed8\u8ba4\u503c"})}),"\n"]}),"\n",(0,e.jsxs)(l.div,{className:"language-js",children:[(0,e.jsx)(l.div,{className:""}),(0,e.jsxs)(l.div,{className:"modern-code-content",children:[(0,e.jsx)(l.button,{className:"copy"}),(0,e.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(l.code,{children:[(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"const"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9"},children:"defaultDistPath"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"="}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"root"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"dist"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"html"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"html"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"js"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"static/js"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"css"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"static/css"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"svg"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"static/svg"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"font"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"static/font"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"image"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"static/image"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"media"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"static/media"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"server"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"bundles"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(l.span,{className:"line"})]})})]})]}),"\n",(0,e.jsx)(l.p,{children:"\u8bbe\u7f6e\u6784\u5efa\u4ea7\u7269\u7684\u8f93\u51fa\u76ee\u5f55\uff0cBuilder \u4f1a\u6839\u636e\u4ea7\u7269\u7684\u7c7b\u578b\u8f93\u51fa\u5230\u5bf9\u5e94\u7684\u5b50\u76ee\u5f55\u4e0b\u3002"}),"\n",(0,e.jsx)(l.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"root"}),": \u8868\u793a\u6240\u6709\u6784\u5efa\u4ea7\u7269\u8f93\u51fa\u7684\u6839\u76ee\u5f55\u3002"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"html"}),"\uff1a\u8868\u793a HTML \u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"js"}),"\uff1a\u8868\u793a JavaScript \u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"css"}),"\uff1a\u8868\u793a CSS \u6837\u5f0f\u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"svg"}),"\uff1a\u8868\u793a SVG \u56fe\u7247\u7684\u8f93\u51fa\u76ee\u5f55\u3002"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"font"}),"\uff1a\u8868\u793a\u5b57\u4f53\u6587\u4ef6\u7684\u8f93\u51fa\u76ee\u5f55\u3002"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"image"}),"\uff1a\u8868\u793a\u975e SVG \u56fe\u7247\u7684\u8f93\u51fa\u76ee\u5f55\u3002"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"media"}),"\uff1a\u8868\u793a\u89c6\u9891\u7b49\u5a92\u4f53\u8d44\u6e90\u7684\u8f93\u51fa\u76ee\u5f55\u3002"]}),"\n",(0,e.jsxs)(l.li,{children:[(0,e.jsx)(l.code,{children:"server"}),": \u8868\u793a\u670d\u52a1\u7aef\u4ea7\u7269\u7684\u8f93\u51fa\u76ee\u5f55\uff0c\u4ec5\u5728 target \u4e3a ",(0,e.jsx)(l.code,{children:"node"})," \u65f6\u6709\u6548\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(l.h3,{id:"\u793a\u4f8b",children:[(0,e.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793a\u4f8b",children:"#"}),"\u793a\u4f8b"]}),"\n",(0,e.jsxs)(l.p,{children:["\u4ee5 JavaScript \u6587\u4ef6\u4e3a\u4f8b\uff0c\u4f1a\u8f93\u51fa\u5230 ",(0,e.jsx)(l.code,{children:"distPath.root"})," + ",(0,e.jsx)(l.code,{children:"distPath.js"})," \u76ee\u5f55\uff0c\u5373\u4e3a ",(0,e.jsx)(l.code,{children:"dist/static/js"}),"\u3002"]}),"\n",(0,e.jsxs)(l.p,{children:["\u5982\u679c\u9700\u8981\u5c06 JavaScript \u6587\u4ef6\u8f93\u51fa\u5230 ",(0,e.jsx)(l.code,{children:"build/resource/js"})," \u76ee\u5f55\uff0c\u53ef\u4ee5\u8fd9\u6837\u8bbe\u7f6e\uff1a"]}),"\n",(0,e.jsxs)(l.div,{className:"language-js",children:[(0,e.jsx)(l.div,{className:""}),(0,e.jsxs)(l.div,{className:"modern-code-content",children:[(0,e.jsx)(l.button,{className:"copy"}),(0,e.jsx)(l.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(l.code,{children:[(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"output"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"distPath"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"root"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"build"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(l.span,{style:{color:"#88C0D0"},children:"js"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#A3BE8C"},children:"resource/js"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(l.span,{className:"line",children:[(0,e.jsx)(l.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(l.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(l.span,{className:"line"})]})})]})]})]})}l.default=function(s={}){const{wrapper:l}=s.components||{};return l?(0,e.jsx)(l,Object.assign({},s,{children:(0,e.jsx)(i,s)})):i(s)}}}]);