'use strict';
describe("apacheZeppelinGsocApp NVD3ChartFactory", function() {
  beforeEach(module("apacheZeppelinGsocApp"));
  var myChart;
  beforeEach(inject(function(NVD3ChartFactory) {
    //making mock-chart called mychart from NVD3ChartFactory
    myChart = NVD3ChartFactory;
    //mock mychart is NVD3Chart
    myChart.setChartType('Line');
  }));
  //testing for Google chart factory
  describe("Building a Chart", function() {
    it(" to be define", function() {
      expect(myChart).toBeDefined();
    });
    it(" from NVD3Chart library", function() {
      expect(myChart.libname).toBe('NVD3Chart');
    });
  });
  describe("Model", function() {
    //testing NVD3 chart is built in Generic chart model
    it("must extend the Generic Chart Model from ChartFactory", function() {
      expect(myChart.libname).toBeDefined();
      expect(myChart.model).toBeDefined();
      expect(myChart.viewModel).toBeDefined();
      expect(myChart.type).toBeDefined();
      expect(myChart.data).toBeDefined();
    });
    //testing generic chart attribute type are followed by NVD3 Charts
    it("testing the Generic  Chart Model attribute type", function() {
      expect(myChart.viewModel).toBeDefined();
      expect(myChart.viewModel instanceof Object).toBe(true);
      expect(myChart.type).toBe('Line');
      expect(myChart.data instanceof Object).toBe(true);
    });
  });
  describe("Operations", function() {
    it("testing setChartType", function() {
      //changing the mock chart type
      myChart.setChartType('Bar');
      expect(myChart.type).toBe('Bar');
      expect(myChart.viewModel.options.chart.type).toBe('discreteBarChart');
    });
  });
  describe("view model", function() {
    it("testing for attributes", function() {
      expect(myChart.viewModel).toBeDefined();
      expect(myChart.viewModel.options.chart.type).toBeDefined();
      expect(myChart.viewModel.options.chart.showLegend).toBeDefined();
      expect(myChart.viewModel.options.chart.showValues).toBeDefined();
      expect(myChart.viewModel.data).toBeDefined();
    });
    it("testing for values of defaults", function() {
      expect(myChart.viewModel.options.chart.showLegend).toBe(true);
      expect(myChart.viewModel.options.chart.showValues).toBe(true);
      expect(myChart.viewModel.options.chart.height).toBe(300);
      expect(myChart.viewModel.options.chart.width).toBe(500);
    });
  });
});