'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.HighChartFactory 
 * @description
 * # Extending Gobal Chart Factory for High Chart Model
 *
 */

angular.module('apacheZeppelinGsocApp').factory('HighChartFactory', function(ChartFactory) {




  //high chart
  function highChartModel(d) {
    return +d.Length;
  }


  function getHighChart(error, rows) {
    HighChartFactory.data = rows;
  }

  var highxChart = {
    model: highChartModel,
    get: getHighChart
  };

  //highchart chart
  var HighChartFactory = new ChartFactory('highxChart', highxChart);


  // define a new internal private method for this chart object
  function setChartAxis() {}

  return HighChartFactory;

});