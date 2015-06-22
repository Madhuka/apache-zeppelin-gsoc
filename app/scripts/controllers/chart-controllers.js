'use strict';

/**
 * @ngdoc function
 * @name apacheZeppelinGsocApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of chart library, type.
 *
 * @author madhuka udantha
 */

angular.module('apacheZeppelinGsocApp').controller('ChartCtrl', function($scope, ChartFactory, GoogleChartFactory, HighChartFactory, NVD3ChartFactory, ChartService, ChartMetaService) {

  var vm = this;
  var myChart = {};

  var libraryName = [{
    'library': 'NVD3Chart',
    'template': 'views/charts/nvd3chart.html'
  }, {
    'library': 'highChart',
    'template': 'views/charts/highchart.html'
  }, {
    'library': 'googleChart',
    'template': 'views/charts/googlechart.html'
  }];

  var files = ['car','bike'];

  var chartTypes = ['Line', 'Bar'];

  function renderChart(chart, datax) {
    datax.row(chart.model).get(chart.get);
  }

  var data = {};

  function loadData(fileName) {
    setButtonActive('dataButton', fileName);
    data = getData(fileName);
    ChartMetaService.setChartDataSetName(fileName);
    drawChart(data);
  }

  function loadChartLibrary(libraryIndex) {
    setButtonActive('chartLibraryButton', libraryName[libraryIndex].library);
    ChartMetaService.setChartLib(libraryName[libraryIndex].library);
    ChartMetaService.setChartTemplateURL(libraryName[libraryIndex].template);
    if(ChartMetaService.getChartType() === null){
      //setting default chart type
      ChartMetaService.setChartType('Bar');
    }
    drawChart(data);
  }

  function getChartTemplateURL(libraryIndex) {
    return ChartMetaService.getChartTemplateURL();
  }

  function loadChartType(chartType) {
    ChartMetaService.setChartType(chartType);
    setButtonActive('chartTypeButton', chartType);
    drawChart(data);
    //To-Do CHart model will be completing for rendering the chart
  }

  function drawChart(data) {
    //Checking chart requirement is completed
      var myNewChart = {};
      var myChartType = ChartMetaService.getChartType();
      console.log(myChartType);
      switch (ChartMetaService.getChartLib()) {
        case 'NVD3Chart':
          //set data for NVD3
          vm.data = [];
          //chart is generated from service, service is using HighChartfactory.HighCHart Factory is extended version of ChartFactory.
          myNewChart = ChartService.getNVD3Chart(myChartType);
          vm.data[0] = myNewChart.viewModel.data[0];
          vm.options = myNewChart.viewModel.options;
          break;
        case 'highChart':
          myNewChart = ChartService.getHighChart(myChartType);
          vm.chartConfig = myNewChart.viewModel;
          break;
        case 'googleChart':
          myNewChart = ChartService.getGoogleChart(myChartType);
          vm.chart = myNewChart.viewModel;
          break;
      }
      if (myNewChart.model){
        renderChart(myNewChart.model, data);
      }
      //NVD3 axis update
  }

  function getData(fileName) {
    return d3.csv('data/' + fileName + '.csv');
  }

  //default button picker
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
  vm.files = files;
  vm.libraryName = libraryName;
  vm.chartTypes = chartTypes;
  vm.getChartTemplateURL = getChartTemplateURL;
});