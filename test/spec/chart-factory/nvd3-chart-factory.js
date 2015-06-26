'use strict';
describe("apacheZeppelinGsocApp NVD3ChartFactory", function() {
  beforeEach(module("apacheZeppelinGsocApp"));
  var myChart;
  beforeEach(inject(function(NVD3ChartFactory) {
    //making mockchart called mychart from NVD3ChartFactory
    myChart = NVD3ChartFactory;
    //mock mychart is NVD3Chart
    myChart.setChartType('Line');
  }));
  //testing for google chart factory
  describe("Building a Chart", function() {
    it(" to be define", function() {
      expect(myChart).toBeDefined();
    });
  });
  describe("Model", function() {
    //testing NVD3 chart is built in Genric chart model
    it("must extend the Genric Chart Model from ChartFactory", function() {
      expect(myChart.libname).toBeDefined();
      expect(myChart.model).toBeDefined();
      expect(myChart.viewModel).toBeDefined();
      expect(myChart.type).toBeDefined();
      expect(myChart.data).toBeDefined();
    });
    //testing genric chart attribute type are followed by NVD3 Charts
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
    });
  });
  describe("view model", function() {
    it("testing for attributes", function() {
      expect(myChart.viewModel).toBeDefined();
      //to-Do more Testing
    });
  });
});