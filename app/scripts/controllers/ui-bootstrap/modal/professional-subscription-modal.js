'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:ProSubscriptionModalCtrl
 * @description
 * # Ctrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp').controller('ProSubscriptionModalCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.proSubscriptionModal = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'proSubscriptionModal.html',
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
    /*backdrop static makes modal window not close when clicking outside of the modal window.*/    
      backdrop: 'static',
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

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

