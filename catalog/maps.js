const libs =  {
  name: 'Maps',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'leaflet', 'Leaflet/Leaflet', null, null ],
    [ 'ol', 'openlayers/openlayers', 'OpenLayers', null ],
  ]
};

module.exports = libs;
