'use strict';

describe('Controller: AdminRequestCtrl', function () {

  // load the controller's module
  beforeEach(module('promoPlatformApp'));

  var AdminRequestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminRequestCtrl = $controller('AdminRequestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
