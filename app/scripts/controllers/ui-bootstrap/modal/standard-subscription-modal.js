'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:StandardSubscriptionModalCtrl
 * @description
 * # Ctrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp').controller('StandardSubscriptionModalCtrl', ['$scope','$modal','$log','$rootScope','SweetAlert','SubscriptionService',function ($scope, $modal, $log, $rootScope, SweetAlert, SubscriptionService) {


  $scope.standardSubscriptionModal = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'standardSubscriptionModal.html',
      controller: function ($scope, $modalInstance) {
        var manager = $rootScope.globals.currentUser.userObject;
        $scope.ok = function () {
          var subscriptionPromise = SubscriptionService.buySubscription(manager.id,1);
          subscriptionPromise.then(
            //success buy subscription
            function (data){
              SweetAlert.swal("Exito!", "Tu Compraste la subscripción Standart", "success");
            },
            // error
            function (data){
              SweetAlert.swal("Error!", "Algo ocurrió", "error");
            }
          );
          $modalInstance.close();
        };
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      },
      /*backdrop static makes modal window not close when clicking outside of the modal window.*/
      backdrop: 'static',
      size: size,
      resolve: {

      }
    });

  };
}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

