const libs =  {
  name: "Date Utilities",
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'date-fns', 'date-fns/date-fns', null, null ],
    [ 'dayjs', 'iamkun/dayjs', null, null ],
    [ 'luxon', 'moment/luxon', null, null ],
    [ 'moment', 'moment/moment', null, null ],
    [ 'fecha', 'taylorhakes/fecha', null, null ],
    [ 'ms', 'vercel/ms', null, null ],
    [ 'timeago.js', 'hustcc/timeago.js', null, null ],
    [ 'date.js', 'MatthewMueller/date', null, null ],
  ]
};

module.exports = libs;
