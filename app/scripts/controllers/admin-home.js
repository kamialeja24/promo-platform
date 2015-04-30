'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:AdminHomeCtrl
 * @description
 * # AdminHomeCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('AdminHomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
