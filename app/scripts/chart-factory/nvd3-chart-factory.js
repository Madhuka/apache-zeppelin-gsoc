'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.NVD3ChartFactory 
 * @description
 * # Extending Gobal Chart Factory for NVD3 Chart Model
 *
 */

angular.module('apacheZeppelinGsocApp').factory('nvd3ChartFactory', function(ChartFactory) {


  function getNVD3(error, rows) {
    nvd3ChartFactory.data = rows;
  }

  function nvd3Model(d) {
    return {
      label: d.Make,
      value: +d.Length,
      valuex: +d.No
    };
  }

  var NVD3Chart = {
    model: nvd3Model,
    get: getNVD3
  };

  //nvd3 chart
  var nvd3ChartFactory = new ChartFactory('NVD3Chart', NVD3Chart);


  // define a new internal private method for this chart object
  function setChartAxis() {}

  return nvd3ChartFactory;

});