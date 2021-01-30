const libs =  {
  name: "HTML Templating Engines",
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'ejs', 'mde/ejs', null, null ],
    [ 'handlebars', 'wycats/handlebars.js', null, null ],
    [ 'mustache', 'janl/mustache.js', null, null ],
    [ 'pug', 'pugjs/pug', null, null ],
    [ 'nunjucks', 'mozilla/nunjucks', null, null ],
    [ 'blueimp-tmpl', 'blueimp/JavaScript-Templates', 'blueimp/JavaScript-Templates', null ],
    [ 'dot', 'olado/doT', null, null ],
    [ 'xtemplate', 'xtemplate/xtemplate', null, null ],
    [ 'dustjs-linkedin', 'linkedin/dustjs', 'Dust.js', null ],
    [ 'ehtml', 'Guseyn/EHTML', null, null ],
  ]
};

module.exports = libs;
