'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:CategoryAccordionCtrl
 * @description
 * # ProductsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('CategoryAccordionCtrl', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.status = {
      isFirstOpen: false, /*So none of the accordion groups are opened at frist*/
      isFirstDisabled: false
    };
  });
