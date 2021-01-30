const libs =  {
  name: 'React Component Libraries',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ '@material-ui/core', 'mui-org/material-ui', 'Material-UI', null ],
    [ 'antd', 'ant-design/ant-design', 'Ant Design', null ],
    [ 'react-bootstrap', 'react-bootstrap/react-bootstrap', 'React Bootstrap', null ],
    [ 'semantic-ui', 'Semantic-Org/Semantic-UI', 'Semantic UI', null ],
    [ '@chakra-ui/react', 'chakra-ui/chakra-ui', 'Chakra UI', null ],
    [ 'reactstrap', 'reactstrap/reactstrap', null, null ],
    [ 'evergreen-ui', 'segmentio/evergreen', 'Evergreen', null ],
  ]
};

module.exports = libs;
