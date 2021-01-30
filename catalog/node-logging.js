const libs =  {
  name: "NodeJS Logging",
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'log4js', 'log4js-node/log4js-node', null, null ],
    [ 'pino', 'pinojs/pino', null, null ],
    [ 'winston', 'winstonjs/winston', null, null ],
    [ 'morgan', 'expressjs/morgan', null, null ],
    [ 'loglevel', 'pimterry/loglevel', null, null ],
    [ 'bunyan', 'trentm/node-bunyan', 'Bunyan', null ],
  ]
};

module.exports = libs;
