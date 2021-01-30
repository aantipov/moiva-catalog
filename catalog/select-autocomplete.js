const libs =  {
  name: 'Select Box',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'downshift', 'downshift-js/downshift', null, 'react' ],
    [ 'react-select', 'JedWatson/react-select', 'React Select', 'react' ],
    [ 'select2', 'select2/select2', null, null ],
    [ 'react-autosuggest', 'moroshko/react-autosuggest', 'React Autosuggest', 'react' ],
    [ 'react-autocomplete', 'reactjs/react-autocomplete', 'React Autocomplete', 'react' ],
    [ 'react-virtualized-select', 'bvaughn/react-virtualized-select', 'React Virtualized Select', 'react' ],
    [ 'react-dropdown', 'fraserxu/react-dropdown', null, 'react' ],
  ]
};

module.exports = libs;
