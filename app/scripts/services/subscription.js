'use strict'

angular.module('promoPlatformApp')

.factory('SubscriptionService',['$http','ApiEndpoint',function($http,ApiEndpoint){
    
    
    var getSubscription = function(manager_id){
        return $http.get(ApiEndpoint.url + '/platform/managers/'+manager_id+'/subscriptions');
    };
    var publish = function(manager_id, product_id){
        return $http.post(ApiEndpoint.url + '/platform/managers/'+manager_id+'/products/'+product_id+'/publish');
    };
    
    

    
    var unPublish = function(manager_id, product_id){
        return $http.delete(ApiEndpoint.url + '/platform/managers/'+manager_id+'/products/'+product_id+'/publish');
    };
    
        var buySubscription = function(manager_id, subscription_id){
        return $http.post(ApiEndpoint.url + '/platform/managers/'+manager_id+'/subscriptions',
                          {subscription_id: subscription_id}
                         );
    };
    
    return {publish:publish,
           unPublish:unPublish,
           buySubscription:buySubscription,
           getSubscription:getSubscription};
    



}]);