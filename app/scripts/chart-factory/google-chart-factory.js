'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.GoogleChartFactory 
 * @description
 * # Extending Gobal Chart Factory for Google Chart Model
 *
 */

angular.module('apacheZeppelinGsocApp').factory('googleChartFactory', function(chartFactory) {


  //google chart
  var googleChartFactory = chartFactory;

  function googleChartModel(d) {
    return {
      c: [{
        v: d.Make
      }, {
        v: +d.Length
      }]
    };
  }

  function getGoogleChart(error, rows) {
   //$scope.chart.data.rows = rows;
  }

  var googlexChart = {
    model: googleChartModel,
    get: getGoogleChart
  };

  chartFactory.setChartLib('googleChart', googlexChart);

  // define a new internal private method for this chart object
  function setChartAxis() {
  }

  return googleChartFactory;
  
});