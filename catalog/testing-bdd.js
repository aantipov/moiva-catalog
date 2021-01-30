const libs =  {
  name: 'Testing-BDD-BehaviourDrivenDevelopment',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ '@cucumber/cucumber', 'cucumber/cucumber-js', 'Cucumber.js', null ],
    [ 'mocha-cakes-2', 'iensu/mocha-cakes-2', 'Mocha Cakes 2', null ],
    [ 'livedoc-mocha', 'dotnetprofessional/LiveDoc', 'LiveDoc', null ],
  ]
};

module.exports = libs;
