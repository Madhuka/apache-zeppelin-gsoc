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

angular.module('apacheZeppelinGsocApp').controller('ChartCtrl', function($scope) {

  var vm = this;
  // var libraryName = [ { 'library': 'NVD3Chart', 'model':NVD3Chart}, { 'library':'highxChart', 'model':highxChart}, { 'library': 'googlexChart','model':googlexChart}];
  var libraryName = [{
    'library': 'NVD3Chart'
  }, {
    'library': 'highxChart'
  }, {
    'library': 'googlexChart'
  }];

  var chartTypes = ['Line', 'Bar'];
  var myChart = {
    lib: {},
    type: {}
  };

  function loadData(fileName) {
    console.log('loading data ' + fileName);
    setButtonActive('dataButton', fileName);

  }

  function loadChartLibrary(libraryIndex) {
    //loading chart library model
    myChart.lib = libraryName[libraryIndex];
    console.log(myChart.lib.library);
    setButtonActive('chartLibraryButton', myChart.lib.library);

  }

  function loadChartType(chartType) {
    setButtonActive('chartTypeButton', chartType);
    //To-Do CHart model will be completing for rendering the chart
  }

  //Chart models

  //high chart
  function highChartModel(d) {
    return +d.Length;
  }


  function getHighChart(error, rows) {
    // $scope.chartConfig.series[0].data = rows;
  }

  var highxChart = {
    model: highChartModel,
    get: getHighChart
  };

  //NVD3 Chart 

  function getData(fileName) {
    return d3.csv('data/' + fileName + '.csv');
  }

  function getNVD3(error, rows) {
    // $scope.data[0].values = rows;
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

  //google chart
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

});