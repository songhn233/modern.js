"use strict";
(self["webpackChunk_modern_js_main_doc_website"] = self["webpackChunk_modern_js_main_doc_website"] || []).push([[29208],{

/***/ 67314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "content": () => (/* binding */ title_by_entries_content),
  "default": () => (/* binding */ title_by_entries),
  "frontmatter": () => (/* binding */ title_by_entries_frontmatter),
  "title": () => (/* binding */ title),
  "toc": () => (/* binding */ title_by_entries_toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(97458);
;// CONCATENATED MODULE: ../../packages/builder/builder-doc/docs/zh/config/html/titleByEntries.md
/*@jsxRuntime automatic @jsxImportSource react*/

const frontmatter = (/* unused pure expression or super */ null && (undefined));
const toc = [{
  "id": "示例",
  "text": "示例",
  "depth": 4
}];
const content = "\"- Type: `Record<string, string>`\\n- Default: `undefined`\\n\\n用于在多页面的场景下，为不同的页面设置不同的 `title`。\\n\\n整体用法与 `title` 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。\\n\\n`titleByEntries` 的优先级高于 `title`，因此会覆盖 `title` 中设置的值。\\n\\n#### 示例\\n\\n```js\\nexport default {\\n  html: {\\n    title: 'ByteDance',\\n    titleByEntries: {\\n      foo: 'TikTok',\\n    },\\n  },\\n};\\n```\\n\\n重新编译后，可以看到:\\n\\n- 页面 `foo` 的 title 为 `TikTok`。\\n- 其他页面的 title 为 `ByteDance`。\\n\"";
function _createMdxContent(props) {
  const _components = Object.assign({
    ul: "ul",
    li: "li",
    code: "code",
    p: "p",
    h4: "h4",
    a: "a",
    div: "div",
    button: "button",
    pre: "pre",
    span: "span"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Type: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Record<string, string>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "undefined"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于在多页面的场景下，为不同的页面设置不同的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["整体用法与 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), " 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "titleByEntries"
      }), " 的优先级高于 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), "，因此会覆盖 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title"
      }), " 中设置的值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "示例",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#示例",
        children: "#"
      }), "示例"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "language-js",
      children: [(0,jsx_runtime.jsx)(_components.div, {
        className: ""
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "modern-code-content",
        children: [(0,jsx_runtime.jsx)(_components.button, {
          className: "copy"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          className: "shiki",
          style: {
            backgroundColor: "#2e3440ff"
          },
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#81A1C1"
                },
                children: "export"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#81A1C1"
                },
                children: "default"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "{"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#88C0D0"
                },
                children: "html"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "{"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#88C0D0"
                },
                children: "title"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#A3BE8C"
                },
                children: "ByteDance"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#88C0D0"
                },
                children: "titleByEntries"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "{"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "      "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#88C0D0"
                },
                children: "foo"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: ":"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: " "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#A3BE8C"
                },
                children: "TikTok"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "'"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: ","
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "    "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "},"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#D8DEE9FF"
                },
                children: "  "
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "},"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.span, {
              className: "line",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#ECEFF4"
                },
                children: "}"
              }), (0,jsx_runtime.jsx)(_components.span, {
                style: {
                  color: "#81A1C1"
                },
                children: ";"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.span, {
              className: "line"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新编译后，可以看到:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["页面 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "foo"
        }), " 的 title 为 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TikTok"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["其他页面的 title 为 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ByteDance"
        }), "。"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const titleByEntries = (MDXContent);

;// CONCATENATED MODULE: ../../packages/toolkit/main-doc/zh/configure/app/html/title-by-entries.mdx
/*@jsxRuntime automatic @jsxImportSource react*/

const title_by_entries_frontmatter = {
  "title": "html.titleByEntries",
  "sidebar_label": "titleByEntries"
};

const title_by_entries_toc = [];
const title = `titleByEntries`;
const title_by_entries_content = "\"---\\ntitle: html.titleByEntries\\nsidebar_label: titleByEntries\\n---\\n# titleByEntries\\n\\n:::info BUILDER\\n该配置为 Modern.js Builder 配置，详细信息可参考 [html.titleByEntries](https://modernjs.dev/builder/api/config-html.html#html-titlebyentries)。\\n:::\\n\\nimport Main from '@modern-js/builder-doc/docs/zh/config/html/titleByEntries.md'\\n\\n<Main />\\n\"";
function title_by_entries_createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h1, {
      id: "titlebyentries",
      children: [(0,jsx_runtime.jsx)(_components.a, {
        className: "header-anchor",
        "aria-hidden": "true",
        href: "#titlebyentries",
        children: "#"
      }), "titleByEntries"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.div, {
      className: "modern-directive info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        className: "modern-directive-title",
        children: "BUILDER"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "modern-directive-content",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["\n该配置为 Modern.js Builder 配置，详细信息可参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://modernjs.dev/builder/api/config-html.html#html-titlebyentries-2",
            target: "_blank",
            rel: "nofollow",
            children: "html.titleByEntries"
          }), "。"]
        })
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(titleByEntries, {})]
  });
}
function title_by_entries_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(title_by_entries_createMdxContent, props)
  })) : title_by_entries_createMdxContent(props);
}
/* harmony default export */ const title_by_entries = (title_by_entries_MDXContent);


/***/ })

}]);