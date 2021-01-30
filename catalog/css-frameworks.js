const libs =  {
  name: 'CSS Frameworks',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'bootstrap', 'twbs/bootstrap', null ],
    [ 'bulma', 'jgthms/bulma', null ],
    [ 'tailwindcss', 'tailwindlabs/tailwindcss', 'Tailwind CSS' ],
    [ 'tachyons', 'tachyons-css/tachyons', null ],
    [ 'materialize-css', 'Dogfalo/materialize', 'MaterializeCSS' ],
    [ 'html5-boilerplate', 'h5bp/html5-boilerplate', 'HTML5 Boilerplate' ],
    [ 'foundation-sites', 'foundation/foundation-sites', 'Foundation' ],
    [ 'material-design-lite', 'google/material-design-lite', 'Material Design Lite' ],
    [ 'material-components-web', 'material-components/material-components-web', 'Material Components for the web' ],
    [ 'spectre.css', 'picturepan2/spectre', 'Spectre.css' ],
  ]
};

module.exports = libs;
