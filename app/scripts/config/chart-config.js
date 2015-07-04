'use strict';
/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.configure
 * @description
 * # configures will contains the configuration details for charting library
 *
 * @author madhuka udantha
 */
angular.module('apacheZeppelinGsocApp')
  .constant('chartConfig', {
    'libraryName': [{
      'library': 'highChart',
      'service': 'getHighChart',
      'template': 'views/charts/highchart.html'
    }, {
      'library': 'NVD3Chart',
      'service': 'getNVD3Chart',
      'template': 'views/charts/nvd3chart.html'
    }, {
      'library': 'googleChart',
      'service': 'getGoogleChart',
      'template': 'views/charts/googlechart.html'
    }],
    'dataFiles': ['car', 'bike'],
    'chartTypes': ['Line', 'Bar','Area']
  });