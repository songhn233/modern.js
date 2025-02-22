import path from 'path';
import fs from 'fs-extra';

const tip: Record<string, string> = {
  zh: '该配置由 Modern.js Builder 提供，更多信息可参考',
  en: 'This config is provided by Modern.js Builder, more detail can see',
};

export type Summary = {
  name: string;
  dirname: string;
};

export type Language = 'en' | 'zh';

const createMarkdown = (summary: Summary, lng: Language) => {
  const { name, dirname } = summary;

  const langPrefix = lng === 'zh' ? '' : `/${lng}`;

  return `---
sidebar_label: ${name}
---

# ${dirname}.${name}

:::tip
${
  tip[lng]
} [${dirname}.${name}](https://modernjs.dev/builder${langPrefix}/api/config-${dirname}.html#${dirname}${name.toLowerCase()})${
    lng === 'en' ? '.' : '。'
  }
:::

import Main from '@modern-js/builder-doc/docs/${lng}/config/${dirname}/${name}.md';

<Main />
`;
};

const hyphenateRE = /\B([A-Z]+)/g;
const hyphenate = function (str: string) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
};

const configPath = 'configure/app';
const getBaseDir = (lng: Language) => {
  const cwd = process.cwd();
  const baseDir = path.join(cwd, 'docs', lng, configPath);

  return baseDir;
};

export const gen = (jsonMap: Record<Language, Summary[]>) => {
  Object.keys(jsonMap).forEach(lng => {
    const baseDir = getBaseDir(lng as Language);
    const json = jsonMap[lng as Language];
    json.forEach(summary => {
      const mdDir = path.join(baseDir, summary.dirname);
      const mdPath = path.join(mdDir, `${hyphenate(summary.name)}.mdx`);
      if (!fs.existsSync(mdDir)) {
        fs.mkdirpSync(mdDir);
      }
      fs.writeFileSync(mdPath, createMarkdown(summary, lng as Language));
    });
  });
};

export const diff = (jsonMap: Record<Language, Summary[]>) => {
  const outdatedURI: string[] = [];
  Object.keys(jsonMap).forEach(lng => {
    const json = jsonMap[lng as Language];
    const old: {
      name: string;
      dirname: string;
    }[] = require(`./summary.${lng}.json`);

    const outdated = old.filter(oldSummary => {
      return !json.find(summary => {
        return (
          summary.dirname === oldSummary.dirname &&
          summary.name === oldSummary.name
        );
      });
    });

    const URIAry = outdated.map(summary => {
      const baseDir = getBaseDir(lng as Language);
      const mdDir = path.join(baseDir, summary.dirname);
      const mdPath = path.join(mdDir, `${hyphenate(summary.name)}.md`);
      return mdPath;
    });
    outdatedURI.push(...URIAry);
  });
  return outdatedURI;
};
