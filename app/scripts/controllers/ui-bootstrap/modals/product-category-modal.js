'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:ProductsCategoryModalCtrl
 * @description
 * # ProductsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('ProductsCategoryModalCtrl', function ($scope, $modal, $log) {
    $scope.items = [
        'item1',
        'item2',
        'item3'
    ];
    
//Open a modal window to know the product categories
     $scope.categoryModal = function (size) {

        var modalInstance = $modal.open({
          templateUrl: 'categoryModal.html',
          controller: function ($scope, $modalInstance, items) {
            $scope.items = items;
              $scope.selected = {
                item: $scope.items[0]
              };

              $scope.ok = function () {
                $modalInstance.close($scope.selected.item);
              };

              $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
              };
          },
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };

  });