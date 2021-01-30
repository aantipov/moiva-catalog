const libs =  {
  name: 'Build Tools',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'webpack', 'webpack/webpack', null ],
    [ 'rollup', 'rollup/rollup', null ],
    [ '@parcel/core', 'parcel-bundler/parcel', 'Parcel' ],
    [ 'snowpack', 'snowpackjs/snowpack', null ],
    [ 'esbuild', 'evanw/esbuild', null ],
  ]
};

module.exports = libs;
