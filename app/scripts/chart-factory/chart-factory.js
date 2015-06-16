'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.Chart Factory 
 * @description
 * # Gobal Chart Factory
 * Controller of the top navigation, mainly use for the dropdown menu
 *
 */

angular.module('apacheZeppelinGsocApp').factory('chartFactory', function() {
 
   var chart = {
    lib: {},
    type: {}
  };

  chart.setChartType = function(chartType) {
    chart.type = chartType;
  };
  chart.setChartLib = function(chartLib,chartModel) {
    chart.lib.name = chartLib;
    chart.lib.model = chartModel;
  };

  return chart;
});