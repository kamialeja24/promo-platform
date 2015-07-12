'use strict'

angular.module('promoPlatformApp')

  .factory('StatisticsService',['$http','ApiEndpoint',function($http,ApiEndpoint){


    var getDemographicGroups = function(){
      return $http.get(ApiEndpoint.url + '/public/demographic_groups');
    };

    var getDetailedStatistics = function(product_id, manager_id, date_start, date_end){
      return $http.get(ApiEndpoint.url + '/platform/managers/'+manager_id+'/products/'+product_id+'/statistics?date_start='+date_start+'&date_end='+date_end);
    }
    var getPublicStatistics = function(category_id, date_start, date_end){
      return $http.get(ApiEndpoint.url + '/public/statistics?date_start='+date_start+'&date_end='+date_end+'&category_id='+category_id);
    };


    return {getDemographicGroups:getDemographicGroups,
            getDetailedStatistics:getDetailedStatistics,
            getPublicStatistics:getPublicStatistics};




  }]);
