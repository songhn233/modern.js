"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[6066],{65058:function(s,e,n){n.r(e),n.d(e,{content:function(){return a},frontmatter:function(){return t},title:function(){return r},toc:function(){return o}});var l=n(39980);const t=void 0,o=[{id:"assets-format",text:"Assets Format",depth:2},{id:"import-assets-in-js-file",text:"Import Assets in JS file",depth:2},{id:"import-assets-in-css-file",text:"Import Assets in CSS file",depth:2},{id:"import-results",text:"Import Results",depth:2},{id:"output-files",text:"Output Files",depth:2},{id:"url-prefix",text:"URL Prefix",depth:2},{id:"add-type-declaration",text:"Add Type Declaration",depth:2},{id:"image-format",text:"Image Format",depth:2}],r="Import Static Assets",a="\"# Import Static Assets\\n\\nBuilder supports import static assets, including images, fonts, and medias.\\n\\n:::tip What is Static Assets\\nStatic assets are files that are part of a web application and do not change, even when the application is being used. Examples of static assets include images, fonts, medias, stylesheets, and JavaScript files. These assets are typically stored on a web server or CDN, and delivered to the user's web browser when the Web application is accessed. Because they do not change, static assets can be cached by the browser, which helps to improve the performance of the Web application.\\n:::\\n\\n## Assets Format\\n\\nThe following are the formats supported by Builder by default:\\n\\n- **Image**: png, jpg, jpeg, gif, svg, bmp, webp, ico, apng, avif, tiff.\\n- **Fonts**: woff, woff2, eot, ttf, otf, ttc.\\n- **Media**: mp4, webm, ogg, mp3, wav, flac, aac, mov.\\n\\nIf you need to import static resources in other formats, please provide feedback through [GitHub Issues](https://github.com/modern-js-dev/modern.js/issues).\\n\\n:::tip SVG images\\nSVG image is a special case. Builder support convert SVG to React components, so SVG is processed separately. For details, see [Import SVG Assets](/guide/basic/svg-assets.html).\\n:::\\n\\n## Import Assets in JS file\\n\\nIn JS files, you can directly import static assets in relative paths:\\n\\n```tsx\\n// Import the logo.png image in the static directory\\nimport logo from './static/logo.png';\\n\\nexport default = () => <img src={logo} />;\\n```\\n\\nImport with [alias](/guide/advanced/alias.html) are also supported:\\n\\n```tsx\\nimport logo from '@/static/logo.png';\\n\\nexport default = () => <img src={logo} />;\\n```\\n\\n## Import Assets in CSS file\\n\\nIn CSS files, you can reference static assets in relative paths:\\n\\n```css\\n.logo {\\n  background-image: url('../static/logo.png');\\n}\\n```\\n\\nImport with [alias](/guide/advanced/alias.html) are also supported:\\n\\n```css\\n.logo {\\n  background-image: url('@/static/logo.png');\\n}\\n```\\n\\n## Import Results\\n\\nThe result of importing static assets depends on the file size:\\n\\n- When the file size is greater than 10KB, a URL will be returned, and the file will be output to the dist directory.\\n- When the file size is less than 10KB, it will be automatically inlined to Base64 format.\\n\\n```js\\nimport largeImage from './static/largeImage.png';\\nimport smallImage from './static/smallImage.png';\\n\\nconsole.log(largeImage); // \\\"/static/largeImage.6c12aba3.png\\\"\\nconsole.log(smallImage); // \\\"data:image/png;base64,iVBORw0KGgo...\\\"\\n```\\n\\nFor a more detailed introduction to asset inlining, please refer to the [Static Asset Inlining](/guide/optimization/inline-assets.html) chapter.\\n\\n## Output Files\\n\\nWhen static assets are imported, they will be output to the dist directory. You can:\\n\\n- Modify the output filename through [output.filename](/en/api/config-output.html#outputfilename).\\n- Modify the output path through [output.distPath](/en/api/config-output.html#outputdistpath).\\n\\nPlease read [Output Files](/guide/basic/output-files.html) for details.\\n\\n## URL Prefix\\n\\nThe URL returned after importing a asset will automatically include the path prefix:\\n\\n- In development, using [dev.assetPrefix](/en/api/config-dev.html#devassetprefix) to set the path prefix.\\n- In production, using [output.assetPrefix](/en/api/config-output.html#outputassetprefix) to set the path prefix.\\n\\nFor example, you can set `output.assetPrefix` to `https://modern.com`:\\n\\n```js\\nimport logo from './static/logo.png';\\n\\nconsole.log(logo); // \\\"https://modern.com/static/logo.6c12aba3.png\\\"\\n```\\n\\n## Add Type Declaration\\n\\nWhen you import static assets in TypeScript code, TypeScript may prompt that the module is missing a type definition:\\n\\n```\\nTS2307: Cannot find module './logo.png' or its corresponding type declarations.\\n```\\n\\nTo fix this, you need to add a type declaration file for the static assets, please create a `src/global.d.ts` file, and add the corresponding type declaration. Taking png images as an example, you need to add the following declarations:\\n\\n```ts\\n// src/global.d.ts\\ndeclare module '*.png' {\\n  const content: string;\\n  export default content;\\n}\\n```\\n\\nAfter adding the type declaration, if the type error still exists, you can try to restart the current IDE, or adjust the directory where `global.d.ts` is located, making sure the TypeScript can correctly identify the type definition.\\n\\n## Image Format\\n\\nWhen using image assets, you can choose a appropriate image format according to the pros and cons in the table below.\\n\\n| Format | Pros                                                                                                      | Cons                                                                                | Scenarios                                                                                                                                              |\\n| ------ | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |\\n| PNG    | Lossless compression, no loss of picture details, no distortion, support for translucency                 | Not suitable for pictures with complex color tables                                 | Suitable for pictures with few colors and well-defined borders, suitable for logos, icons, transparent images and other scenes                         |\\n| JPG    | Rich colors                                                                                               | Lossy compression, which will cause image distortion, does not support transparency | Suitable for pictures with a large number of colors, gradients, and overly complex pictures, suitable for portrait photos, landscapes and other scenes |\\n| WebP   | Supports both lossy and lossless compression, supports transparency, and is much smaller than PNG and JPG | iOS compatibility is not good                                                       | Pixel images of almost any scene, and the hosting environment that supports WebP, should prefer WebP image format                                      |\\n| SVG    | Lossless format, no distortion, supports transparency                                                     | Not suitable for complex graphics                                                   | Suitable for vector graphics, suitable for icons                                                                                                       |\\n\"";function i(s){const e=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",ul:"ul",li:"li",strong:"strong",button:"button",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"import-static-assets",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-static-assets",children:"#"}),"Import Static Assets"]}),"\n",(0,l.jsx)(e.p,{children:"Builder supports import static assets, including images, fonts, and medias."}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"What is Static Assets"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsx)(e.p,{children:"\nStatic assets are files that are part of a web application and do not change, even when the application is being used. Examples of static assets include images, fonts, medias, stylesheets, and JavaScript files. These assets are typically stored on a web server or CDN, and delivered to the user's web browser when the Web application is accessed. Because they do not change, static assets can be cached by the browser, which helps to improve the performance of the Web application."})})]}),"\n",(0,l.jsxs)(e.h2,{id:"assets-format",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#assets-format",children:"#"}),"Assets Format"]}),"\n",(0,l.jsx)(e.p,{children:"The following are the formats supported by Builder by default:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Image"}),": png, jpg, jpeg, gif, svg, bmp, webp, ico, apng, avif, tiff."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Fonts"}),": woff, woff2, eot, ttf, otf, ttc."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Media"}),": mp4, webm, ogg, mp3, wav, flac, aac, mov."]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["If you need to import static resources in other formats, please provide feedback through ",(0,l.jsx)(e.a,{href:"https://github.com/modern-js-dev/modern.js/issues",target:"_blank",rel:"nofollow",children:"GitHub Issues"}),"."]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"SVG images"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\nSVG image is a special case. Builder support convert SVG to React components, so SVG is processed separately. For details, see ",(0,l.jsx)(e.a,{href:"/builder/en/guide/basic/svg-assets.html",children:"Import SVG Assets"}),"."]})})]}),"\n",(0,l.jsxs)(e.h2,{id:"import-assets-in-js-file",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-assets-in-js-file",children:"#"}),"Import Assets in JS file"]}),"\n",(0,l.jsx)(e.p,{children:"In JS files, you can directly import static assets in relative paths:"}),"\n",(0,l.jsxs)(e.div,{className:"language-tsx",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// Import the logo.png image in the static directory"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"logo"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"./static/logo.png"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"()"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"<img"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"src"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"={"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"logo"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"/>;"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["Import with ",(0,l.jsx)(e.a,{href:"/builder/en/guide/advanced/alias.html",children:"alias"})," are also supported:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-tsx",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"logo"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@/static/logo.png"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"()"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"<img"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"src"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"={"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"logo"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"/>;"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"import-assets-in-css-file",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-assets-in-css-file",children:"#"}),"Import Assets in CSS file"]}),"\n",(0,l.jsx)(e.p,{children:"In CSS files, you can reference static assets in relative paths:"}),"\n",(0,l.jsxs)(e.div,{className:"language-css",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"logo"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"background-image"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"url"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"../static/logo.png"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["Import with ",(0,l.jsx)(e.a,{href:"/builder/en/guide/advanced/alias.html",children:"alias"})," are also supported:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-css",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"logo"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"background-image"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"url"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"@/static/logo.png"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"import-results",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-results",children:"#"}),"Import Results"]}),"\n",(0,l.jsx)(e.p,{children:"The result of importing static assets depends on the file size:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"When the file size is greater than 10KB, a URL will be returned, and the file will be output to the dist directory."}),"\n",(0,l.jsx)(e.li,{children:"When the file size is less than 10KB, it will be automatically inlined to Base64 format."}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"largeImage"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"./static/largeImage.png"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"smallImage"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"./static/smallImage.png"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"log"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"largeImage"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:'// "/static/largeImage.6c12aba3.png"'})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"log"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"smallImage"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:'// "data:image/png;base64,iVBORw0KGgo..."'})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["For a more detailed introduction to asset inlining, please refer to the ",(0,l.jsx)(e.a,{href:"/builder/en/guide/optimization/inline-assets.html",children:"Static Asset Inlining"})," chapter."]}),"\n",(0,l.jsxs)(e.h2,{id:"output-files",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#output-files",children:"#"}),"Output Files"]}),"\n",(0,l.jsx)(e.p,{children:"When static assets are imported, they will be output to the dist directory. You can:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Modify the output filename through ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputfilename",children:"output.filename"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["Modify the output path through ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputdistpath",children:"output.distPath"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["Please read ",(0,l.jsx)(e.a,{href:"/builder/en/guide/basic/output-files.html",children:"Output Files"})," for details."]}),"\n",(0,l.jsxs)(e.h2,{id:"url-prefix",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#url-prefix",children:"#"}),"URL Prefix"]}),"\n",(0,l.jsx)(e.p,{children:"The URL returned after importing a asset will automatically include the path prefix:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["In development, using ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-dev.html#devassetprefix",children:"dev.assetPrefix"})," to set the path prefix."]}),"\n",(0,l.jsxs)(e.li,{children:["In production, using ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputassetprefix",children:"output.assetPrefix"})," to set the path prefix."]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["For example, you can set ",(0,l.jsx)(e.code,{children:"output.assetPrefix"})," to ",(0,l.jsx)(e.code,{children:"https://modern.com"}),":"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"logo"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"./static/logo.png"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"log"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"logo"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:'// "https://modern.com/static/logo.6c12aba3.png"'})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"add-type-declaration",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"}),"Add Type Declaration"]}),"\n",(0,l.jsx)(e.p,{children:"When you import static assets in TypeScript code, TypeScript may prompt that the module is missing a type definition:"}),"\n",(0,l.jsxs)(e.div,{className:"language-text",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"TS2307: Cannot find module './logo.png' or its corresponding type declarations.\n"})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["To fix this, you need to add a type declaration file for the static assets, please create a ",(0,l.jsx)(e.code,{children:"src/global.d.ts"})," file, and add the corresponding type declaration. Taking png images as an example, you need to add the following declarations:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// src/global.d.ts"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"declare"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"module"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"*.png"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"content"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"content"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["After adding the type declaration, if the type error still exists, you can try to restart the current IDE, or adjust the directory where ",(0,l.jsx)(e.code,{children:"global.d.ts"})," is located, making sure the TypeScript can correctly identify the type definition."]}),"\n",(0,l.jsxs)(e.h2,{id:"image-format",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#image-format",children:"#"}),"Image Format"]}),"\n",(0,l.jsx)(e.p,{children:"When using image assets, you can choose a appropriate image format according to the pros and cons in the table below."}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Format"}),(0,l.jsx)(e.th,{children:"Pros"}),(0,l.jsx)(e.th,{children:"Cons"}),(0,l.jsx)(e.th,{children:"Scenarios"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"PNG"}),(0,l.jsx)(e.td,{children:"Lossless compression, no loss of picture details, no distortion, support for translucency"}),(0,l.jsx)(e.td,{children:"Not suitable for pictures with complex color tables"}),(0,l.jsx)(e.td,{children:"Suitable for pictures with few colors and well-defined borders, suitable for logos, icons, transparent images and other scenes"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"JPG"}),(0,l.jsx)(e.td,{children:"Rich colors"}),(0,l.jsx)(e.td,{children:"Lossy compression, which will cause image distortion, does not support transparency"}),(0,l.jsx)(e.td,{children:"Suitable for pictures with a large number of colors, gradients, and overly complex pictures, suitable for portrait photos, landscapes and other scenes"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"WebP"}),(0,l.jsx)(e.td,{children:"Supports both lossy and lossless compression, supports transparency, and is much smaller than PNG and JPG"}),(0,l.jsx)(e.td,{children:"iOS compatibility is not good"}),(0,l.jsx)(e.td,{children:"Pixel images of almost any scene, and the hosting environment that supports WebP, should prefer WebP image format"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"SVG"}),(0,l.jsx)(e.td,{children:"Lossless format, no distortion, supports transparency"}),(0,l.jsx)(e.td,{children:"Not suitable for complex graphics"}),(0,l.jsx)(e.td,{children:"Suitable for vector graphics, suitable for icons"})]})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(i,s)})):i(s)}}}]);