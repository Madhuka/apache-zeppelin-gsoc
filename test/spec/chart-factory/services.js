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
    it("chartService on getGoogleChart", function() {
      expect(chartService).toBeDefined();
      expect(chartService.getGoogleChart('Bar')).toBeDefined();
      expect(chartService.getGoogleChart('Line').libname).toBe(
        'googleChart');
      expect(chartService.getGoogleChart('Line').type).toBe('Line');
      expect(chartService.getGoogleChart('Line').viewModel.type).toBe(
        'LineChart');
    });
  });
});