'use strict';
describe("apacheZeppelinGsocApp chartService", function() {
  beforeEach(module("apacheZeppelinGsocApp"));
  var chartService;
  beforeEach(inject(function(ChartService) {
    chartService = ChartService;
  }));
  describe("Testing Function APIs", function() {
    it("chartService to be define", function() {
      expect(chartService).toBeDefined();
      expect(chartService.getHighChart()).toBeDefined();
      expect(chartService.getGoogleChart()).toBeDefined();
      expect(chartService.getNVD3Chart()).toBeDefined();
    });
  });
  describe("Testing Function Operations", function() {
    it("testing the Google Chart Model", function() {
      expect(chartService).toBeDefined();
      expect(chartService.getGoogleChart('Line').libname).toBe(
        'googleChart');
      expect(chartService.getGoogleChart('Line').type).toBe('Line');
      expect(chartService.getGoogleChart('Line').viewModel.type).toBe(
        'LineChart');
    });
  });
  describe("Testing Function Operations", function() {
    it("testing the High Chart Model", function() {
      expect(chartService).toBeDefined();
      expect(chartService.getHighChart('Line').libname).toBe(
        'highxChart');
      expect(chartService.getHighChart('Line').type).toBe('Line');
    });
  });
  describe("Testing Function Operations", function() {
    it("testing the NVD3 Chart Model", function() {
      expect(chartService).toBeDefined();
      expect(chartService.getNVD3Chart('Bar').libname).toBe(
        'NVD3Chart');
      expect(chartService.getNVD3Chart('Bar').type).toBe('Bar');
    });
  });
});