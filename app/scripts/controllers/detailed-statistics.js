'use strict';

/**
 * @ngdoc function
 * @name promoPlatformApp.controller:CreateShopCtrl
 * @description
 * # DetailedStatisticsCtrl
 * Controller of the promoPlatformApp
 */
angular.module('promoPlatformApp')
  .controller('DetailedStatisticsCtrl',['$scope','$rootScope','SweetAlert', 'StatisticsService', '$stateParams', function($scope, $rootScope, SweetAlert, StatisticsService, $stateParams){
    $scope.labels = [];
    $scope.data = [];
    $scope.errorMessage = "";
    var demographicPromise = StatisticsService.getDemographicGroups();
    demographicPromise.then(
      function (data){
        for(var i in data.data.demographic_groups){
          console.log(data.data.demographic_groups[i]);
          $scope.labels.push(data.data.demographic_groups[i].name);
        }

      },
      function (data) {

      }
    );
    $scope.loadData = function(){
      $scope.checkDates();
      $scope.data = [];
      if ($scope.dateStart){

        if ($scope.dateEnd){
          var dataPromise = StatisticsService.getDetailedStatistics($stateParams.id, $rootScope.globals.currentUser.userObject.id,$scope.dateStart,$scope.dateEnd);
          dataPromise.then(
            function (data){
              $scope.verification(data.data.statistics);
              for(var i in data.data.statistics){
                $scope.data.push(data.data.statistics[i]);
              }
            },
            function (data) {

            }
          );
        }else{
          SweetAlert.swal("Seleccione fecha de fin", "Porfavor seleccione fecha de fin", "warning");
        }
      }else{
        SweetAlert.swal("Seleccione fecha de inicio", "Porfavor seleccione fecha de inicio", "warning");
      }

    };

    $scope.checkDates = function (){
      if ($scope.dateStart > $scope.dateEnd){
        SweetAlert.swal("Error", "El rango de fechas no tiene coherencia", "error");
      }
    };


    $scope.verification = function(array){
      var condition = true;
      for (var i in array){
        if(array[i]!=0){
          condition = false;
        }
      }
      if (condition){
        $scope.errorMessage = "No se tienen datos de visitas para este producto";
      }else{
        $scope.errorMessage = "";
      }
    };
    $scope.loadData();

  }]);
