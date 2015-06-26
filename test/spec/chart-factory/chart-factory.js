'use strict';
describe("apacheZeppelinGsocApp ChartFactory", function() {
  beforeEach(module("apacheZeppelinGsocApp"));
  var chartService;
  //Mock Chart Factory will extend the ChartFactory 
  var MyChartFactory;
  beforeEach(inject(function(ChartFactory) {
    //mockups models
    function xChartModel(d) {
      return {
        c: [{
          v: d.Make
        }]
      };
    }

    function getXChart(error, rows) {
      MyChartFactory.data.rows = rows;
    }
    var newChartLibrary = {
      model: xChartModel,
      get: getXChart
    };
    MyChartFactory = new ChartFactory('MyTestChartLib',
      newChartLibrary);
  }));
  //testing for genric chart factory
  describe("Instance", function() {
    it(" to be define", function() {
      expect(MyChartFactory).toBeDefined();
    });
  });
  describe("Model", function() {
    //testing My chart is built in Genric chart model
    it("must extend the Genric Chart Model from ChartFactory", function() {
      expect(MyChartFactory.libname).toBeDefined();
      expect(MyChartFactory.model).toBeDefined();
      expect(MyChartFactory.viewModel).toBeDefined();
      expect(MyChartFactory.type).toBeDefined();
      expect(MyChartFactory.data).toBeDefined();
    });
    //testing genric chart attribute type are followed by My Charts
    it("testing the Genric Google Chart Model", function() {
      expect(MyChartFactory).toBeDefined();
      expect(MyChartFactory.viewModel).toBeDefined();
      expect(MyChartFactory.viewModel instanceof Object).toBe(true);
      expect(MyChartFactory.type instanceof Object).toBe(true);
      expect(MyChartFactory.data instanceof Object).toBe(true);
    });
  });
  describe("Operations", function() {
    //testing genric chart attribute type are followed by Google Charts
    it("testing chart library is setted correctly", function() {
      expect(MyChartFactory.model instanceof Object).toBe(true);
      expect(MyChartFactory.libname).toBe('MyTestChartLib');
    });
    it("testing set chart Model", function() {
      expect(MyChartFactory.model.model instanceof Object).toBe(
        true);
      expect(MyChartFactory.model.get instanceof Function).toBe(
        true);
    });
  });
});