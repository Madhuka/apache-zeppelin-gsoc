'use strict';
describe("apacheZeppelinGsocApp UseCase Testing", function() {
  beforeEach(module("apacheZeppelinGsocApp"));
  var myChart,highChart,nvd3chart;
  beforeEach(inject(function(GoogleChartFactory,HighChartFactory,NVD3ChartFactory) {
    //making mock chart called mychart from GoogleChartFactory
    myChart = GoogleChartFactory;
    highChart = HighChartFactory;
    nvd3chart  = NVD3ChartFactory;
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
    it(" from HighChart to Google chart then NVD3Chart", function() {
      var newchart = highChart;
      expect(newchart.libname).toBe('highxChart');
      newchart = myChart;
      expect(newchart.libname).toBe('googleChart');
      newchart = nvd3chart;
      expect(newchart.libname).toBe('NVD3Chart');
    });
  });
});