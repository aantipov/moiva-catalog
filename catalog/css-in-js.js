const libs =  {
  name: 'CSS-IN-JS',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'styled-jsx', 'vercel/styled-jsx', null, 'react' ],
    [
      'styled-components',
      'styled-components/styled-components',
      null,
      'react'
    ],
    [ 'radium', 'formidablelabs/radium', null, 'react' ],
    [ '@linaria/core', 'callstack/linaria', 'Linaria', 'react' ],
    [ 'jss', 'cssinjs/jss', 'JSS', null ],
    [ 'aphrodite', 'Khan/aphrodite', null, null ],
    [ '@emotion/css', 'emotion-js/emotion', 'Emotion', null ],
  ]
};

module.exports = libs;
