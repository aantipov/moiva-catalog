const libs =  {
  name: 'React Unit Testing',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'enzyme', 'airbnb/enzyme', null, null ],
    [ '@testing-library/react', 'testing-library/react-testing-library', 'React Testing Library', null ],
  ]
};

module.exports = libs;
