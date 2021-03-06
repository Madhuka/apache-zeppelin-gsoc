'use strict';
/**
 * @name apacheZeppelinGsocApp.test:ChartCtrl
 * @description
 * # ChartCtrl Test
 *
 * @author madhuka udantha
 */

describe('Controller: ChartCtrl', function() {

  // load the controller's module
  beforeEach(module('apacheZeppelinGsocApp'));

  var ChartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartCtrl = $controller('ChartCtrl', {
      $scope: scope
    });
  }));

  it('Chart Controller should to be defined', function() {
    expect(ChartCtrl).toBeDefined();
  });

  it('ChartCtrl should not have a property called vm', function() {
    expect(ChartCtrl.vm).toBeUndefined();
  });

  it('Chart Controller Option should to be defined', function() {   
    expect(ChartCtrl.loadData).toBeDefined();
    expect(ChartCtrl.loadChartLibrary).toBeDefined();
  });

  it('Chart Controller Button functions should to be defined', function() {
    expect(ChartCtrl.isButtonActive).toBeDefined();
    expect(ChartCtrl.isButtonSelected).toBeDefined();
  });

  it('Button Group function testing', function() {
    expect(ChartCtrl.isButtonActive instanceof Function).toBe(true);
    expect(ChartCtrl.isButtonSelected instanceof Function).toBe(true);
    expect(ChartCtrl.isButtonActive('dataButton','car')).toBe(false);
  });

  it('Get ChartTemplate URL testing', function() {
    expect(ChartCtrl.getChartTemplateURL).toBeDefined();
    expect(ChartCtrl.getChartTemplateURL instanceof Function).toBe(true);
  });
});

