const version = '1.0.4';

import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

// import docsearchPlugin from '@vuepress/plugin-docsearch';

import theme from './theme';
import { enHeadConfig } from './configs/head';

export default defineUserConfig({
  lang: 'en-US',
  locales: {
    '/': enHeadConfig,
  },
  theme,
  shouldPrefetch: false,
  bundler: viteBundler(),
});
