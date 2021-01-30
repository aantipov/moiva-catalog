const libs =  {
  name: 'React Forms',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'formik', 'formium/formik', null, null ],
    [ 'react-hook-form', 'react-hook-form/react-hook-form', 'React Hook Form', null ],
    [ 'redux-form', 'redux-form/redux-form', 'Redux Form', null ],
    [ 'final-form', 'final-form/final-form', 'React Final Form', null ],
  ]
};

module.exports = libs;
