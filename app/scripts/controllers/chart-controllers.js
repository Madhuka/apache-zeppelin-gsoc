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
angular.module('apacheZeppelinGsocApp').controller('ChartCtrl', function($scope,
  ChartFactory, GoogleChartFactory, HighChartFactory, NVD3ChartFactory,
  ChartService, ChartMetaService, chartConfig) {
  var vm = this;
  //loading from chart config file.
  var libraryName = chartConfig.libraryName;
  var files = chartConfig.dataFiles;
  var chartTypes = chartConfig.chartTypes;

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
    ChartMetaService.setChartService(libraryName[libraryIndex].service);
    if (ChartMetaService.getChartType() === null) {
      //setting default chart type
      ChartMetaService.setChartType('Bar');
    }
    drawChart(data);
  }

  function getChartTemplateURL() {
    return ChartMetaService.getChartTemplateURL();
  }

  function loadChartType(chartType) {
    ChartMetaService.setChartType(chartType);
    setButtonActive('chartTypeButton', chartType);
    drawChart(data);
    //To-Do CHart model will be completing for rendering the chart
  }
  //chart is generated from service, service is using HighChartfactory.HighCHart Factory is extended version of ChartFactory.
  function drawChart(data) {
    //Checking chart requirement is completed
    var myNewChart = {};
    var myChartType = ChartMetaService.getChartType();
    var chartService = ChartMetaService.getChartService();
    if (chartService !== null) {
      myNewChart = ChartService[chartService](myChartType);
      vm.chart = myNewChart.viewModel;
      if (myNewChart.model) {
        renderChart(myNewChart.model, data);
      }
    }
  }

  function getData(fileName) {
    return d3.csv('data/' + fileName + '.csv');
  }
  //default button picker
  var active = {
    'dataButton': false,
    'chartLibraryButton': false,
    'chartTypeButton': 'Bar'
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