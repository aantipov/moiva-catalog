const libs = {
  name: "Frontend Frameworks",
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    'react',
    'vue' ,
    ['@angular/core', 'Angular'],
    'svelte',
    ['ember-source', 'Ember'],
    'alpinejs',
    'inferno',
    'preact',
    'hyperapp',
    'riot',
    ['angular', 'AngularJS'],
    'backbone.marionette',
    'knockout',
    ['solid-js', 'Solid'],
    'mithril',
    ['aurelia-framework', 'Aurelia'],
    'stimulus',
    'marko',
  ]
};

module.exports = libs;
