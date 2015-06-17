'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.GoogleChartFactory 
 * @description
 * # Extending Gobal Chart Factory for Google Chart Model
 *
 */

angular.module('apacheZeppelinGsocApp').factory('GoogleChartFactory', function(ChartFactory) {

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
    GoogleChartFactory.data = rows;
  }

  var googlexChart = {
    model: googleChartModel,
    get: getGoogleChart
  };

  //google chart
  var GoogleChartFactory = new ChartFactory('googleChart', googlexChart);

  // define a new internal private method for this chart object
  function setChartAxis() {
  }

  return GoogleChartFactory;
  
});