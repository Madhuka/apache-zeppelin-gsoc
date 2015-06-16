'use strict';

describe('Controller: NavCtrl', function() {

  // load the controller's module
  beforeEach(module('apacheZeppelinGsocApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('NavCtrl and isActive should to be defined', function() {
    expect(NavCtrl).toBeDefined();
    expect(NavCtrl.isActive).toBeDefined();
  });

  it('NavCtrl should not have a property called vm', function() {
    expect(NavCtrl.vm).toBeUndefined();
  });

  it('isActive should reutrn boolean on state.', function() {
    expect(NavCtrl.isActive instanceof Function).toBe(true);
    expect(NavCtrl.isActive('home')).toBe(false);
    expect(NavCtrl.isActive('')).toBe(true);
  });
});
