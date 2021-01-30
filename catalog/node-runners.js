const libs =  {
  name: 'Node Runners',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'forever', 'foreverjs/forever', null, null ],
    [ 'pm2', 'Unitech/pm2', null, null ],
    [ 'nodemon', 'remy/nodemon', null, null ],
  ]
};

module.exports = libs;
