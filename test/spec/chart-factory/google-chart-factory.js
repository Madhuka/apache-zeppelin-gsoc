'use strict';
describe("apacheZeppelinGsocApp GoogleChartFactory", function() {
  beforeEach(module("apacheZeppelinGsocApp"));
  var myChart;
  beforeEach(inject(function(GoogleChartFactory) {
    //making mockchart called mychart from GoogleChartFactory
    myChart = GoogleChartFactory;
    //mock mychart is GoogleChart
    myChart.setChartType('Line');
  }));
  //testing for google chart factory
  describe("Building a Chart", function() {
    it(" to be define", function() {
      expect(myChart).toBeDefined();
    });
    it(" using google chart library", function() {
      expect(myChart.libname).toBe('googleChart');
    });
  });
  describe("Model", function() {
    //testing Google chart is built in Genric chart model
    it("must extend the Genric Chart Model from ChartFactory", function() {
      expect(myChart.libname).toBeDefined();
      expect(myChart.model).toBeDefined();
      expect(myChart.viewModel).toBeDefined();
      expect(myChart.type).toBeDefined();
      expect(myChart.data).toBeDefined();
    });
    //testing genric chart attribute type are followed by Google Charts
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
      expect(myChart.viewModel.type).toBe('BarChart');
    });
  });
  describe("view model", function() {
    it("testing for attributes", function() {
      expect(myChart.viewModel.options).toBeDefined();
      expect(myChart.viewModel.type).toBeDefined();
      expect(myChart.viewModel.cssStyle).toBeDefined();
      expect(myChart.viewModel.data).toBeDefined();
      expect(myChart.viewModel.formatters).toBeDefined();
    });
    it("testing for deafults vales of attributes", function() {
      expect(myChart.viewModel.options.height).toBe(400);
      expect(myChart.viewModel.options.displayExactValues).toBe(
        true);
      expect(myChart.viewModel.options.fill).toBe(20);
    });
    it("testing for axis", function() {
      expect(myChart.viewModel.options.vAxis).toBeDefined();
      expect(myChart.viewModel.options.hAxis).toBeDefined();
      expect(myChart.viewModel.options.vAxis instanceof Object).toBe(
        true);
      expect(myChart.viewModel.options.hAxis instanceof Object).toBe(
        true);
    });
  });
});