'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
