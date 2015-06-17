'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.HighChartFactory 
 * @description
 * # Extending Gobal Chart Factory for High Chart Model
 *
 */

angular.module('apacheZeppelinGsocApp').factory('HighChartFactory', function(ChartFactory) {



  //highChart model
  var HighChartChartModel = {
    options: {
      chart: {
        type: 'bar'
      }
    },
    xAxis: {
      categories: []
    },
    series: [{
      data: []
    }],
    size: {
      width: 500,
      height: 300
    },
    loading: false
  };

  //high chart
  function highChartModel(d) {
    return +d.Length;
  }


  function getHighChart(error, rows) {
    HighChartChartModel.series[0].data = rows;
  }

  var highxChart = {
    model: highChartModel,
    get: getHighChart
  };

  //highchart chart
  var HighChartFactory = new ChartFactory('highxChart', highxChart);
  HighChartFactory.viewModel = HighChartChartModel;

  // define a new internal private method for this chart object
  function setChartAxis() {}

  return HighChartFactory;

});