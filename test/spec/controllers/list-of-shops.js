'use strict';

describe('Controller: ListOfShopsCtrl', function () {

  // load the controller's module
  beforeEach(module('promoPlatformApp'));

  var ListOfShopsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListOfShopsCtrl = $controller('ListOfShopsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
