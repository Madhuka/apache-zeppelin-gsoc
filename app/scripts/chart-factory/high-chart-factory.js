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
  // define a new internal private method for this chart object
  function highChartModel(d) {
    return +d.Length;
  }


  function getHighChart(error, rows) {
    HighChartChartModel.series[0].data = rows;
  }

  function setChatTypeView(chartType){
    HighChartFactory.viewModel.options.chart.type = chartType;
  }

  function setChartAxis() { 
  }

  var highxChart = {
    model: highChartModel,
    get: getHighChart
  };

  //setting up the highchart and chart view model for this chart
  var HighChartFactory = new ChartFactory('highxChart', highxChart);
  HighChartFactory.viewModel = HighChartChartModel;
  

  HighChartFactory.setChartType = function(chartType) {
    HighChartFactory.type = chartType; 
    setChatTypeView(chartType);   
 };
    


  return HighChartFactory;

});