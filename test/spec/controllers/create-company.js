'use strict';

describe('Controller: CreateCompanyCtrl', function () {

  // load the controller's module
  beforeEach(module('promoPlatformApp'));

  var CreateCompanyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateCompanyCtrl = $controller('CreateCompanyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
