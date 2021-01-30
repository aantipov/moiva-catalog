const libs =  {
  name: 'State Management',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>, <framework>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'redux', 'reduxjs/redux', null, null ],
    [ 'mobx', 'mobxjs/mobx', 'MobX', null ],
    [ 'rxjs', 'reactivex/rxjs', 'RxJS', null ],
    [ 'recoil', 'facebookexperimental/recoil', null, null ],
    [ 'vuex', 'vuejs/vuex', null, 'vue' ],
  ]
};

module.exports = libs;
