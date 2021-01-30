const libs =  {
  name: 'Vue Component Libraries',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'vuetify', 'vuetifyjs/vuetify', null, null ],
    [ 'quasar', 'quasarframework/quasar', null, null ],
    [ 'bootstrap-vue', 'bootstrap-vue/bootstrap-vue', 'BootstrapVue', null ],
    [ 'primevue', 'primefaces/primevue', null, null ],
    [ 'vue-material', 'vuematerial/vue-material', 'Vue Material', null ],
    [ 'element-ui', 'ElemeFE/element', 'Element UI', null ],
    [ 'element-plus', 'element-plus/element-plus', 'Element Plus', null ],
    [ 'iview', 'iview/iview', 'iView', null ],
    [ 'ant-design-vue', 'vueComponent/ant-design-vue', 'Ant Design Vue', null ],
  ]
};

module.exports = libs;
