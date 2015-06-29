'use strict';
describe("apacheZeppelinGsocApp UseCase Testing", function() {
  beforeEach(module("apacheZeppelinGsocApp"));
  var myChart;
  beforeEach(inject(function(GoogleChartFactory,HighChartFactory,NVD3ChartFactory) {
    //making mock chart called mychart from GoogleChartFactory
    myChart = GoogleChartFactory;
  }));
  //testing for Google chart factory
  describe("Switching Chart Types", function() {
    it(" from default chart type to line then to bar", function() {
      expect(myChart).toBeDefined();
      expect(myChart.libname).toBe('googleChart');
      expect(myChart.viewModel.type).toBe('BarChart');
      myChart.setChartType('Line');
      expect(myChart.viewModel.type).toBe('LineChart');
      myChart.setChartType('Bar');
      expect(myChart.viewModel.type).toBe('BarChart');
    });
    it(" using google chart library", function() {
      
    });
  });
});