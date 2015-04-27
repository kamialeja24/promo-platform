'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:ListOfProductsCtrl
 * @description
 * # ListOfProductsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('ListOfProductsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
