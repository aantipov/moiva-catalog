const libs =  {
  name: 'Static Site Generators / JAMStack',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'gatsby', 'gatsbyjs/gatsby', null, 'react' ],
    [ 'next', 'vercel/next.js', 'Next.js', 'react' ],
    [ 'nuxt', 'nuxt/nuxt.js', 'Nuxt.js', 'vue' ],
    [ 'sapper', 'sveltejs/sapper', null, 'svelte' ],
    [ '@11ty/eleventy', '11ty/eleventy', '11ty', null ],
    [ 'hexo', 'hexojs/hexo', null, null ],
    [ '@docusaurus/core', 'facebook/docusaurus', 'Docusaurus', 'react' ],
    [ 'vuepress', 'vuejs/vuepress', 'VuePress', 'vue' ],
    [ 'docsify', 'docsifyjs/docsify', null, null ],
    [ 'umi', 'umijs/umi', 'UmiJS', 'react' ],
    [ 'react-static', 'react-static/react-static', 'React Static', 'react' ],
    [ 'gridsome', 'gridsome/gridsome', null, 'vue' ],
  ]
};

module.exports = libs;
