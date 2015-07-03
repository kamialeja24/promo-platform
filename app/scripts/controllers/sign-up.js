'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('SignUpCtrl',['$scope','ManagerService','SweetAlert','$state', function ($scope, ManagerService, SweetAlert,$state){
    $scope.manager = {}
    $scope.dataLoading = false;
    $scope.signUp = function (manager) {
      var promise = ManagerService.createManager(manager);
      $scope.dataLoading = true;
      promise.then(
        //success
        function (data){
          $scope.dataLoading = false;
          console.log(data.data.manager);
          SweetAlert.swal("Usuario registrado exitosamente!", "Ahora puedes ingresar se te ha enviado un correo con instrucciones", "success");
          $scope.manager = {};
          $state.go('login');

        },
        //fail
        function (data){
          console.log(data);
          if (data.status === 404){
            $scope.dataLoading = false;
            $scope.errors = data.data;
          }if(data.status === 500){
            $scope.dataLoading = false;
            $scope.errors = {errors:{message:"Error con el servidor"}};
          }if(data.status === 0){
            $scope.dataLoading = false;
            $scope.errors = {errors:{message:"Verifica tu conexion a internet"}};
          }

        }
      );

    }


  }]);
