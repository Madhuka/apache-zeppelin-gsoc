'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.ChartService 
 * @description
 * # ChartService will be using ChartFactories.
 *
 */


angular.module('apacheZeppelinGsocApp').service('ChartService', function(HighChartFactory, GoogleChartFactory, NVD3ChartFactory,ChartMetaService) {

  /*using chart facotry*/
  this.getHighChart = function(chartType) {
    var myChart = HighChartFactory;
    myChart.setChartType(chartType);
    return myChart;
  };

  this.getGoogleChart = function(chartType) {
    var myChart = GoogleChartFactory;
    myChart.setChartType(chartType);
    return myChart;
  };

  this.getNVD3Chart = function(chartType) {
    var myChart = NVD3ChartFactory;
    myChart.setChartType(chartType);
    myChart.setChartAxis(ChartMetaService.getChartDataSetPath());
    return myChart;
  };

});