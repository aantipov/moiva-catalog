const libs =  {
  name: 'Api Mocks',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'msw', 'mswjs/msw', 'MSW' ],
    [ 'mountebank', 'bbyars/mountebank', null ],
    [ 'json-server', 'typicode/json-server', 'JSON Server' ],
    [ 'wiremock-standalone', 'Hagith/wiremock-standalone', 'WireMock' ],
    [ 'miragejs', 'miragejs/miragejs', 'Mirage' ],
  ]
};

module.exports = libs;
