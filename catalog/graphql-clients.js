const libs =  {
  name: 'GraphQL clients',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
  // GraphQLSupport
    ['relay-runtime', 'Relay', 'react'],
    ['@apollo/client', 'Apollo Client', 'react'],
    ['apollo-client', null, 'react'],
    ['vue-apollo', 'Vue Apollo', 'vue'],
    ['svelte-apollo', null, 'svelte'],
    ['ember-apollo-client', null, 'ember'],
    ['apollo-angular', null, 'Apollo Angular'],
  ]
};

module.exports = libs;
