//new move.
'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the top navigation, mainly use for the dropdown menu
 *
 * @author madhuka udantha
 */

angular.module('apacheZeppelinGsocApp').controller('ChartCtrl', function($scope, ChartFactory, GoogleChartFactory, HighChartFactory) {

  var vm = this;
  // var libraryName = [ { 'library': 'NVD3Chart', 'model':NVD3Chart}, { 'library':'highxChart', 'model':highxChart}, { 'library': 'googlexChart','model':googlexChart}];
  var myChart = {};
  //myChart.setChartLib('highxChart',highxChart);
  //var myChart = googleChartFactory;
  //var myChart ={};
  console.log(myChart);
  var libraryName = [{
    'library': 'NVD3Chart'
  }, {
    'library': 'highxChart'
  }, {
    'library': 'googlexChart'
  }];

  var chartTypes = ['Line', 'Bar'];

  function drawChart(data) {
    console.log('draw the chart ' + myChart.lib);
    console.log(myChart);
    //getting nvd3 chart sample


    if (myChart.model !== null) {
      renderChart(myChart.model, data);
      //nvd3 axis update
    }
  }

  function renderChart(chart, datax) {
    console.log('drawing....');
    console.log(datax);
    datax.row(chart.model).get(chart.get);
  }
  var data = {};

  function loadData(fileName) {
    console.log('loading data ' + fileName);
    setButtonActive('dataButton', fileName);
    data = getData(fileName);

  }

  function loadChartLibrary(libraryIndex) {
    //loading chart library model
    myChart.lib = libraryName[libraryIndex];

    console.log(myChart.lib.library);
    setButtonActive('chartLibraryButton', myChart.lib.library);
    myChart = HighChartFactory;
    vm.chartConfig.series[0].data = HighChartFactory.data;
    drawChart(data);
  }

  function loadChartType(chartType) {
    setButtonActive('chartTypeButton', chartType);
    //To-Do CHart model will be completing for rendering the chart
  }

  //Chart models

  //high chart
  /*  function highChartModel(d) {
      return +d.Length;
    }


    function getHighChart(error, rows) {
      vm.chartConfig.series[0].data = rows;
    }

    var highxChart = {
      model: highChartModel,
      get: getHighChart
    };*/

  //NVD3 Chart 

  function getData(fileName) {
    return d3.csv('data/' + fileName + '.csv');
  }
  /*
    function getNVD3(error, rows) {
      vm.data[0].values = rows;
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
    };*/


  //deafult button picker
  var active = {
    'dataButton': false,
    'chartLibraryButton': false,
    'chartTypeButton': false
  };

  function setButtonActive(set, type) {
    active[set] = type;
  }

  function isButtonActive(set, type) {
    return active[set] === type;
  }

  function isButtonSelected(set) {
    return active[set];
  }

  vm.loadData = loadData;
  vm.isButtonActive = isButtonActive;
  vm.isButtonSelected = isButtonSelected;
  vm.loadChartLibrary = loadChartLibrary;
  vm.loadChartType = loadChartType;
  /*To-DO (Testing) chart lib testing for lib */
  vm.options = ncd3Chart1.options;
  vm.data = ncd3Chart1.data;
  vm.chartConfig = highchart.chartConfig;
  vm.chart = googleChart;
  /*END*/

});