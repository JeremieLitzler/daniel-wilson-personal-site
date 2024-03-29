//https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

import { hopeTheme } from 'vuepress-theme-hope';

import { enNavBarConfig } from './configs/navbar';

export default hopeTheme({
  //path.resolve(__dirname, './theme'),
  hostname: 'https://danielwilson.netlify.app',
  author: {
    name: 'Daniel Wilson',
    url: 'https://danielwilson.netlify.app',
  },
  docsDir: 'docs',
  logo: '/icons/favicon-32x32.png',
  logoDark: '/icons/dark-favicon-32x32.png',
  locales: {
    '/': {
      navbar: enNavBarConfig,
      sidebar: false,
    },
  },
  displayFooter: true,
  darkmode: 'disable',
  footer:
    'GPLv3 Licensed | <a href="/page/terms" title="Read the terms">Terms</a>',
  plugins: {
    blog: true,
    mdEnhance: {
      checkLinks: 'always',
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html
      align: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html
      attrs: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html
      //chart: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html
      hint: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html
      // echarts: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html
      //See also https://echarts.apache.org/en/index.html
      footnote: true,
      //use the figure, figureCaption to wrap an image
      figure: true,
      //load image lazily with native method
      imgLazyload: true,
      //Syntax: ==this text is marked==
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html
      mark: true,
      //Supports RevealJS
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html
      //presentation: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.html
      //I'm not sure I need it for now
      //stylize: []
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html
      // tabs: true,
    },
    pwa: {
      cacheHTML: true,
      //caching pictures is too heavy...
      //cachePic: true
    },
  },
});
