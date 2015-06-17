'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.HighChartFactory 
 * @description
 * # Extending Gobal Chart Factory for High Chart Model
 *
 */

angular.module('apacheZeppelinGsocApp').factory('highChartFactory', function(chartFactory) {

  var vm = this;
  //high chart chart
  var highChartFactory = chartFactory;

  //high chart
  function highChartModel(d) {
    return +d.Length;
  }


  function getHighChart(error, rows) {
    //$scope.chartConfig.series[0].data = rows;
    console.log(rows);
    return rows;
  }

  var highxChart = {
    model: highChartModel,
    get: getHighChart
  };

  highChartFactory.setChartLib('highxChart', highxChart);

  // define a new internal private method for this chart object
  function setChartAxis() {}

  return highChartFactory;

});