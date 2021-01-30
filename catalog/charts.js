const libs =  {
  name: 'Charts',
  items: [
    // <npm-package-name> or [<npm-package-name>, <seo-alias>]
    // Seo aliases are used to refer to npm packages in Google Search results. For example, for 'angular/core' Google will show results with a title "Angular: Stats and Trends - Moiva.io".
    // Aliases are important to help users find the right page
    // Important: when adding an alias, make sure it's unique - no other packages in this file should use it as their name
    [ 'chart.js', 'chartjs/Chart.js', null ],
    [ 'd3', 'd3/d3', null ],
    [ 'plotly.js', 'plotly/plotly.js', null ],
    [ 'highcharts', 'highcharts/highcharts', null ],
    [ 'recharts', 'recharts/recharts', 'Apache ECharts' ],
    [ 'echarts', 'apache/incubator-echarts', null ],
    [ '@amcharts/amcharts4', 'amcharts/amcharts4', 'amCharts 4' ],
    [ 'apexcharts', 'apexcharts/apexcharts.js', null ],
    [ 'chartist', 'gionkunz/chartist-js', 'Chartist.js' ],
    [ 'vis', 'almende/vis', 'Vis.js' ],
    [ 'nvd3', 'novus/nvd3', null ],
    [ 'amcharts3', 'amcharts/amcharts3', 'amCharts 3' ],
    [ 'peity', 'benpickles/peity', null ],
  ]
};

module.exports = libs;
