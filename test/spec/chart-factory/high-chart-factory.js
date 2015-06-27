'use strict';
describe("apacheZeppelinGsocApp HighChartFactory", function() {
  beforeEach(module("apacheZeppelinGsocApp"));
  var myChart;
  beforeEach(inject(function(HighChartFactory) {
    //making mockchart called mychart from HighChartFactory
    myChart = HighChartFactory;
    //mock mychart is highChart
    myChart.setChartType('Line');
  }));
  //testing for google chart factory
  describe("Building a Chart", function() {
    it(" to be define", function() {
      expect(myChart).toBeDefined();
    });
  });
  it(" to be define", function() {
    expect(myChart.libname).toBe('highxChart');
  });
  describe("Model", function() {
    //testing high chart is built in Genric chart model
    it("must extend the Genric Chart Model from ChartFactory", function() {
      expect(myChart.libname).toBeDefined();
      expect(myChart.model).toBeDefined();
      expect(myChart.viewModel).toBeDefined();
      expect(myChart.type).toBeDefined();
      expect(myChart.data).toBeDefined();
    });
    //testing genric chart attribute type are followed by high Charts
    it("testing the Genric  Chart Model attributr type", function() {
      expect(myChart.viewModel).toBeDefined();
      expect(myChart.viewModel instanceof Object).toBe(true);
      expect(myChart.type).toBe('Line');
      expect(myChart.data instanceof Object).toBe(true);
    });
  });
  describe("Operations", function() {
    it("testing setChartType", function() {
      //changing the mockchart type
      myChart.setChartType('Bar');
      expect(myChart.type).toBe('Bar');
      expect(myChart.viewModel.options.chart.type).toBe('bar');
    });
    it("testing setChartAxis", function() {
      myChart.setChartAxis('testData');
      expect(myChart.viewModel.options.chart.type).toBe('line');
      expect(myChart.viewModel.xAxis.categories).toEqual([]);
    });
  });
  describe("view model", function() {
    it("testing for attributes", function() {
      expect(myChart.viewModel.size).toBeDefined();
      expect(myChart.viewModel.size.width).toBe(500);
      expect(myChart.viewModel.size.height).toBe(300);
      expect(myChart.viewModel.series).toBeDefined();
      expect(myChart.viewModel.xAxis).toBeDefined();
    });
    it("testing for series and xAxis", function() {
      expect(myChart.viewModel.series[0].data).toBeDefined();
      expect(myChart.viewModel.xAxis.categories).toBeDefined();
    });
  });
});