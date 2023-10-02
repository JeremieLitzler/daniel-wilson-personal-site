const websiteDomain = 'danielwilson.netlify.app';
const titleDefault = 'Daniel Wilson';
const descriptionDefault = 'A description...';
const themeColor = '#209cee';
const repoLink =
  'https://github.com/JeremieLitzler/daniel-wilson-personal-site';
export const enHeadConfig = {
  title: titleDefault,
  description: descriptionDefault,
  // repo: repoLink,
  //https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    ['meta', { property: 'og:title', content: titleDefault }],
    ['meta', { property: 'og:url', content: `https://${websiteDomain}/en/` }],
    [
      'meta',
      {
        property: 'og:description',
        content: descriptionDefault,
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      { property: 'og:image', content: '/icons/android-chrome-512x512.png' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: themeColor }],
    ['meta', { name: 'theme-color', content: themeColor }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],
};
