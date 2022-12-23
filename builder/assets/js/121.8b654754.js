(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{365:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"产物体积优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产物体积优化"}},[t._v("#")]),t._v(" 产物体积优化")]),t._v(" "),s("p",[t._v("产物体积的优化在生产环境中是非常重要的，因为它直接影响到了线上的用户体验。在这篇文档中，我们将介绍在 Builder 中一些常见的产物体积优化方式。")]),t._v(" "),s("h2",{attrs:{id:"减少重复依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少重复依赖"}},[t._v("#")]),t._v(" 减少重复依赖")]),t._v(" "),s("p",[t._v("在业务项目中，会存在某些第三方依赖被安装了多个版本的现象。重复依赖会导致包体积变大、构建速度变慢。")]),t._v(" "),s("p",[t._v("我们可以通过社区中的一些工具来检测或消除重复依赖。")]),t._v(" "),s("p",[t._v("如果你在使用 "),s("code",[t._v("pnpm")]),t._v("，可以使用 "),s("a",{attrs:{href:"https://github.com/ocavue/pnpm-deduplicate",target:"_blank",rel:"noopener noreferrer"}},[t._v("pnpm-deduplicate"),s("OutboundLink")],1),t._v(" 来分析出所有的重复依赖，并通过升级依赖或声明 "),s("a",{attrs:{href:"https://pnpm.io/package_json#pnpmoverrides",target:"_blank",rel:"noopener noreferrer"}},[t._v("pnpm overrides"),s("OutboundLink")],1),t._v(" 进行版本合并。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("npx pnpm-deduplicate --list\n")])])]),s("p",[t._v("如果你在使用 "),s("code",[t._v("yarn")]),t._v("，可以使用 "),s("a",{attrs:{href:"https://github.com/scinos/yarn-deduplicate",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn-deduplicate"),s("OutboundLink")],1),t._v(" 来自动合并重复依赖：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("npx yarn-deduplicate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用更轻量的库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用更轻量的库"}},[t._v("#")]),t._v(" 使用更轻量的库")]),t._v(" "),s("p",[t._v("建议将项目中体积较大的三方库替换为更轻量的库，比如将 "),s("a",{attrs:{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("moment"),s("OutboundLink")],1),t._v(" 替换为 "),s("a",{attrs:{href:"https://day.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("day.js"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("如果你需要找出项目中体积较大的三方库，可以在执行构建时添加 "),s("RouterLink",{attrs:{to:"/zh/api/config-performance.html#performance-bundleanalyze"}},[t._v("BUNDLE_ANALYZE=true")]),t._v(" 环境变量：")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BUNDLE_ANALYZE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" build\n")])])]),s("p",[t._v("添加该参数后，Builder 会生成一个分析构建产物体积的 HTML 文件，手动在浏览器中打开该文件，可以看到打包产物的瓦片图。区块的面积越大，说明该模块的体积越大。")]),t._v(" "),s("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png"}}),t._v(" "),s("h2",{attrs:{id:"提升-browserslist-范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提升-browserslist-范围"}},[t._v("#")]),t._v(" 提升 Browserslist 范围")]),t._v(" "),s("p",[t._v("Builder 会根据项目的 Browserslist 配置范围进行代码编译，并注入相应的 Polyfill。如果项目不需要兼容旧版浏览器，可以根据实际情况来提升 Browserslist 范围，从而减少在语法和 Polyfill 上的编译开销。")]),t._v(" "),s("p",[t._v("Builder 默认的 Browserslist 配置为：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'> 0.01%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not dead'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not op_mini all'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("比如只兼容 Chrome 61 以上的浏览器，可以改成：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chrome >= 61'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("请阅读 "),s("RouterLink",{attrs:{to:"/guide/advanced/browserslist.html"}},[t._v("设置浏览器范围")]),t._v(" 章节来了解更多关于 Browserslist 的用法。")],1)]),t._v(" "),s("h2",{attrs:{id:"按需引入-polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按需引入-polyfill"}},[t._v("#")]),t._v(" 按需引入 polyfill")]),t._v(" "),s("p",[t._v("在明确第三方依赖不需要额外 polyfill 的情况下，你可以将 "),s("RouterLink",{attrs:{to:"/zh/api/config-output.html#output-polyfill"}},[t._v("output.polyfill")]),t._v(" 设置为 "),s("code",[t._v("usage")]),t._v("。")],1),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("usage")]),t._v(" 模式下，Builder 会分析源代码中使用的语法，按需注入所需的 polyfill 代码，从而减少 polyfill 的代码量。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("polyfill")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'usage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("请阅读 "),s("RouterLink",{attrs:{to:"/guide/advanced/browser-compatibility.html"}},[t._v("浏览器兼容性")]),t._v(" 章节来了解更多关于 polyfill 的用法。")],1)]),t._v(" "),s("h2",{attrs:{id:"使用图片压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用图片压缩"}},[t._v("#")]),t._v(" 使用图片压缩")]),t._v(" "),s("p",[t._v("在一般的前端项目中，图片资源的体积往往是项目产物体积的大头，因此如果能尽可能精简图片的体积，那么将会对项目的打包产物体积起到明显的优化效果。你可以在 Builder 中注册插件来启用图片压缩功能:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PluginImageCompress "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@modern-js/builder-plugin-image-compress'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 往 builder 实例上添加插件")]),t._v("\nbuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PluginImageCompress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("详见 "),s("a",{attrs:{href:"/zh/plugins/plugin-image-compress"}},[t._v("Image Compress 插件")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"代码拆包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码拆包"}},[t._v("#")]),t._v(" 代码拆包")]),t._v(" "),s("p",[t._v("良好的拆包策略对于提升应用的加载性能是十分重要的，可以充分利用浏览器的缓存机制，减少请求数量，加快页面加载速度。")]),t._v(" "),s("p",[t._v("在 Builder 中内置了"),s("a",{attrs:{href:"/zh/guide/optimization/split-chunk"}},[t._v("多种拆包策略")]),t._v("，可以满足大部分应用的需求，你也可以根据自己的业务场景，自定义拆包配置，比如下面的配置:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-experience'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      forceSplitting"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如将 react-query 包拆分为一个 Chunk")]),t._v("\n        react_query"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules\\/react-query")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);