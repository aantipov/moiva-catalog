const libs =  {
  name: 'CSS-IN-JS',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    ['styled-jsx', null, 'react'],
    ['styled-components', null, 'react'],
    ['radium', null, 'react'],
    ['@emotion/react', null, 'react'],
    ['@linaria/core', 'Linaria', 'react'],
    ['jss', 'JSS'],
    'aphrodite',
    ['@emotion/css', 'Emotion'],
  ]
};

module.exports = libs;
