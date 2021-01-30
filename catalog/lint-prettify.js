const libs =  {
  name: 'Lint Prettify',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'eslint', 'eslint/eslint', 'ESLint', null ],
    [ 'tslint', 'palantir/tslint', 'TSLint', null ],
    [ 'prettier', 'prettier/prettier', null, null ],
    [ 'jshint', 'jshint/jshint', 'JSHint', null ],
    [ 'js-beautify', 'beautify-web/js-beautify', 'JS Beautifier', null ],
  ]
};

module.exports = libs;
