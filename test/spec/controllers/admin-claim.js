'use strict';

describe('Controller: AdminClaimCtrl', function () {

  // load the controller's module
  beforeEach(module('promoPlatformApp'));

  var AdminClaimCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminClaimCtrl = $controller('AdminClaimCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
