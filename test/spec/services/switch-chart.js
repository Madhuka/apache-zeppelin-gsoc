'use strict';
describe("apacheZeppelinGsocApp chartService", function() {
  beforeEach(module("apacheZeppelinGsocApp"));
  var chartService;
  beforeEach(inject(function(ChartService) {
    chartService = ChartService;
  }));
  describe("Google Chart", function() {
    it("Google Chart Type Switching", function() {
      expect(chartService).toBeDefined();
      expect(chartService.getHighChart()).toBeDefined();
      expect(chartService.getGoogleChart('Bar').libname).toBe(
        'googleChart');
      expect(chartService.getGoogleChart('Bar').viewModel.type).toBe(
        'BarChart');
      expect(chartService.getGoogleChart('Line').viewModel.type).toBe(
        'LineChart');
      expect(chartService.getGoogleChart('Bar').viewModel.type).toBe(
        'BarChart');
    });
    it("testing the Google Chart View.Model", function() {
      expect(chartService.getGoogleChart('Line').viewModel.data instanceof Object)
        .toBe(true);
      expect(chartService.getGoogleChart('Line').viewModel.cssStyle)
        .toBe('height:400px; width:500px;');
      expect(chartService.getGoogleChart('Line').viewModel.options instanceof Object)
        .toBe(true);
      expect(chartService.getGoogleChart('Line').viewModel.options.displayExactValues)
        .toBe(true);
    });
  });
  describe("High Chart", function() {
    var categories, myHighChart;
    beforeEach(function() {
      categories = [1, 2, 3, 4];
      myHighChart = chartService.getHighChart('Line');
      myHighChart.viewModel.xAxis.categories = categories;
    });
    it("High Chart Type Switching", function() {
      expect(chartService.getHighChart('Line').libname).toBe(
        'highxChart');
      expect(myHighChart.viewModel.options.chart.type).toBe(
        'line');
      expect(chartService.getHighChart('Line').data instanceof Object)
        .toBe(true);
      expect(chartService.getHighChart('Line').viewModel.options.chart
        .type).toBe(
        'line');
      expect(chartService.getHighChart('Bar').viewModel.options.chart
        .type).toBe(
        'bar');
      expect(chartService.getHighChart('Bar').type).toBe(
        'Bar');
    });
    it("testing the High Chart View.Model", function() {
      expect(chartService.getHighChart('Line').viewModel.data instanceof Object)
        .toBe(false);
      expect(chartService.getHighChart('Line').viewModel.size instanceof Object)
        .toBe(true);
      expect(chartService.getHighChart('Line').viewModel.size.width)
        .toBe(500);
      expect(chartService.getHighChart('Line').viewModel.size.height)
        .toBe(300);
    });
    it("testing the High Chart changing the xAxis.categories", function() {
      expect(myHighChart.viewModel.xAxis.categories instanceof Array)
        .toBe(true);
      expect(myHighChart.viewModel.xAxis.categories).toEqual(
        categories);
    });
  });
  describe("Testing NVD3Chart", function() {
    var data, myNVD3Chart;
    beforeEach(function() {
      data = {
        'values': [12, 34, 23]
      };
      myNVD3Chart = chartService.getNVD3Chart('Line');
      myNVD3Chart.viewModel.data = [1, 2];
    });
    it("Testing NVD3Chart Data Transform", function() {
      expect(chartService.getNVD3Chart('Bar').libname).toBe(
        'NVD3Chart');
      expect(myNVD3Chart.type).toBe('Bar');
      expect(myNVD3Chart.viewModel.data).toEqual([1, 2]);
      myNVD3Chart.viewModel.data = data;
      expect(myNVD3Chart.viewModel.data).toEqual(data);
    });
    it("Testing NVD3Chart Chart Type Transform", function() {
      expect(chartService.getNVD3Chart('Line').viewModel.options.chart
        .type).toBe(
        'lineChart');
      expect(chartService.getNVD3Chart('Bar').viewModel.options.chart
        .type).toBe(
        'discreteBarChart');
      expect(chartService.getNVD3Chart('Bar').type).toBe(
        'Bar');
    });
  });
});