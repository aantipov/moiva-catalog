const libs =  {
  name: "e2e testing",
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'puppeteer', 'puppeteer/puppeteer', null, null ],
    [ 'cypress', 'cypress-io/cypress', null, null ],
    [ 'playwright', 'Microsoft/playwright', null, null ],
    [ 'selenium-webdriver', 'SeleniumHQ/selenium', null, null ],
    [ 'webdriverio', 'webdriverio/webdriverio', null, null ],
    [ 'testcafe', 'DevExpress/testcafe', null, null ],
    [ 'nightwatch', 'nightwatchjs/nightwatch', null, null ],
    [ 'taiko', 'getgauge/taiko', null, null ],
    [ 'nightmare', 'segmentio/nightmare', null, null ],
    [ 'casperjs', 'casperjs/casperjs', null, null ],
    [ 'slimerjs', 'laurentj/slimerjs', null, null ],
    [ 'zombie', 'assaf/zombie', null, null ],
  ]
};

module.exports = libs;
