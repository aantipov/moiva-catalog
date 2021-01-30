const libs = {
  name: "Frontend Frameworks",
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'react', 'facebook/react', null, null ],
    [ 'vue', 'vuejs/vue', null, null ],
    [ '@angular/core', 'angular/angular', 'Angular', null ],
    [ 'svelte', 'sveltejs/svelte', null, null ],
    [ 'ember-source', 'emberjs/ember.js', 'Ember', null ],
    [ 'alpinejs', 'alpinejs/alpine', 'Alpine.js', null ],
    [ 'inferno', 'infernojs/inferno', null, null ],
    [ 'preact', 'preactjs/preact', null, null ],
    [ 'hyperapp', 'jorgebucaran/hyperapp', null, null ],
    [ 'riot', 'riot/riot', null, null ],
    [ 'angular', 'angular/angular.js', 'AngularJS', null ],
    [ 'backbone.marionette', 'marionettejs/backbone.marionette', null, null ],
    [ 'knockout', 'knockout/knockout', null, null ],
    [ 'solid-js', 'ryansolid/solid', 'Solid', null ],
    [ 'mithril', 'MithrilJS/mithril.js', null, null ],
    [ 'aurelia-framework', 'aurelia/framework', 'Aurelia', null ],
    [ 'stimulus', 'stimulusjs/stimulus', null, null ],
    [ 'marko', 'marko-js/marko', null, null ],
  ]
};

module.exports = libs;
