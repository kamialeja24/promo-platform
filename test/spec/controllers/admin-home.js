'use strict';

describe('Controller: AdminHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('promoPlatformApp'));

  var AdminHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminHomeCtrl = $controller('AdminHomeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
