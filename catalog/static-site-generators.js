const libs =  {
  name: 'Static Site Generators / JAMStack',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    ['gatsby', null, 'react'],
    ['next', 'Next.js', 'react'],
    ['nuxt', 'Nuxt.js', 'vue'],
    ['sapper', null, 'svelte'],
    ['@11ty/eleventy', '11ty'],
    'hexo',
    ['docusaurus', null, 'react'],
    ['@docusaurus/core','Docusaurus 2', 'react'],
    ['vuepress', 'VuePress', 'vue'],
    'docsify',
    ['umi', 'UmiJS', 'react'],
    ['react-static', 'React Static', 'react'],
    ['gridsome', null, 'vue'],
  ]
};

module.exports = libs;
