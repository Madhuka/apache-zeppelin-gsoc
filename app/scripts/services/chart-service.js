'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.ChartService 
 * @description
 * # ChartService will be using ChartFactories.
 *
 */


angular.module('apacheZeppelinGsocApp').service('ChartService', function(HighChartFactory) {

  /*using chart facotry*/
  this.getHighChart = function(chartType) {
    var myChart = HighChartFactory;
    myChart.setChartType(chartType);
    return myChart;
  };

});