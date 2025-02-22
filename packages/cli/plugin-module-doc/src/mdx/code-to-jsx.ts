import { join } from 'path';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import type { MdxjsEsm } from 'mdast-util-mdxjs-esm';
import { demoRuntimeModules } from '../runtimeModule';
import { PACKAGE_ROOT, PropsMarkdownMap } from '../constants';

// FIXME: import type from third party package
type MDXJsxFlowElement = {
  type: string;
  name: string;
  attributes: Array<MDXJsxAttribute>;
};
type MDXJsxAttribute = {
  type: string;
  name: string;

  // not right
  value: string;
};
/**
 * remark plugin to transform code to jsx
 */
export const remarkTsxToReact: Plugin<[{ appDir: string }], Root> = ({
  appDir,
}) => {
  return tree => {
    const demos: MdxjsEsm[] = [];
    let index = 0;
    demos.push(getASTNodeImport(`API`, join(PACKAGE_ROOT, 'dist/api.js')));
    demos.push(
      getASTNodeImport(
        `CodeContainer`,
        join(PACKAGE_ROOT, 'dist/codeContainer.js'),
      ),
    );
    visit(tree, 'code', node => {
      if (node.lang === 'jsx' || node.lang === 'tsx') {
        const code = node.value;
        const isPure = node?.meta?.includes('pure');
        if (isPure) {
          // not transform pure code
          return;
        }
        const virtualModulePath = join(
          appDir,
          'node_modules',
          '.modern-doc',
          `virtual-demo${++index}.tsx`,
        );
        demoRuntimeModules.writeModule(virtualModulePath, code);
        demos.push(getASTNodeImport(`Demo${index}`, virtualModulePath));
        Object.assign(node, {
          type: 'mdxJsxFlowElement',
          name: 'CodeContainer',
          children: [
            {
              type: 'mdxJsxFlowElement',
              name: `Demo${index}`,
            },
            {
              // if lang not change, this node will be visited again and again
              ...node,
              lang: 'typescript',
            },
          ],
        });
      }
    });
    visit(tree, 'mdxJsxFlowElement', (node: MDXJsxFlowElement) => {
      if (node.name === 'API') {
        node.attributes.forEach(attr => {
          if (attr.name === 'moduleName') {
            const { value } = attr;
            const str = PropsMarkdownMap.get(value);
            if (str) {
              attr.value = str;
            }
          }
        });
      }
    });
    tree.children.unshift(...demos);
  };
};

const getASTNodeImport = (name: string, from: string) =>
  ({
    type: 'mdxjsEsm',
    value: `import ${name} from "${from}"`,
    data: {
      estree: {
        type: 'Program',
        sourceType: 'module',
        body: [
          {
            type: 'ImportDeclaration',
            specifiers: [
              {
                type: 'ImportDefaultSpecifier',
                local: { type: 'Identifier', name },
              },
            ],
            source: {
              type: 'Literal',
              value: from,
              raw: `"${from}"`,
            },
          },
        ],
      },
    },
  } as MdxjsEsm);
