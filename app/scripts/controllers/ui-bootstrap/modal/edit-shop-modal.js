'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:EditShopModalCtrl
 * @description
 * # Ctrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp').controller('EditShopModalCtrl',[ '$scope','$modal','$log','ShopService','$rootScope','SweetAlert', function ($scope, $modal, $log, ShopService,$rootScope,SweetAlert) {
  
  $scope.editShopModal = function (id,size) {
    
    var modalInstance = $modal.open({
      templateUrl: 'editShopModal.html',
      controller: function ($scope, $modalInstance,$state) {
                var manager = $rootScope.globals.currentUser.userObject;
                var shopPromise = ShopService.getShop(manager,id);
                shopPromise.then(
                    function(data){
                        $scope.shop = data.data.shop;
                        console.log($scope.shop);
                    }
                );
          
              $scope.ok = function () {
                var shopUpdatePromise = ShopService.updateShop($scope.shop,manager,id);
                shopUpdatePromise.then(
                function(data){
                    SweetAlert.swal("Exito!", "Producto actualizado satisfactoriamente", "success");
                    $state.reload();
                    $modalInstance.close();
                },
                function(data){
                    SweetAlert.swal("Good job!", "You clicked the button!", "error");
                }
                    );
               
              };
              $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
              };
          },
    /*backdrop static makes modal window not close when clicking outside of the modal window.*/    
      size: size,
      resolve: {
      }
    });
  };
}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

