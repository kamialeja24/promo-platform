'use strict';

describe('Controller: AdminMainCtrl', function () {

  // load the controller's module
  beforeEach(module('promoPlatformApp'));

  var AdminMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminMainCtrl = $controller('AdminMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
