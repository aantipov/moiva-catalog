const libs =  {
  name: "NodeJS Frameworks",
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'express', 'expressjs/express', null, null ],
    [ '@nestjs/core', 'nestjs/nest', 'NestJS', null ],
    [ 'koa', 'koajs/koa', null, null ],
    [ 'fastify', 'fastify/fastify', null, null ],
    [ '@hapi/hapi', 'hapijs/hapi', 'Hapi', null ],
    [ 'sails', 'balderdashy/sails', null, null ],
    [ 'restify', 'restify/node-restify', 'Restify', null ],
    [ '@feathersjs/feathers', 'feathersjs/feathers', 'Feathers', null ],
    [ 'loopback', 'strongloop/loopback', 'LoopBack 3', null ],
    [ '@loopback/core', 'strongloop/loopback-next', 'LoopBack 4', null ],
  ]
};

module.exports = libs;
