'use strict'

angular.module('promoPlatformApp')

.factory('ShopService',['$http','ApiEndpoint',function($http,ApiEndpoint){
    
    var createShop = function (shop,manager) {
        return $http.post(ApiEndpoint.url + '/platform/managers/'+manager.id+'/shops',
                          {name: shop.name,
                           description: shop.description,
                           address: shop.address
                          }); 
    };
    
    var getShops = function (manager) {
         return $http.get(ApiEndpoint.url + '/platform/managers/'+manager.id+'/shops');    
    };
    
    var getShop = function (manager,shop_id){
        return $http.get(ApiEndpoint.url + '/platform/managers/'+manager.id+'/shops/'+shop_id);
    };
    
    var deleteShop = function (manager,shop_id) {
        return $http.delete(ApiEndpoint.url + '/platform/managers/'+manager.id+'/shops/'+shop_id);
    };
    
    
    var updateShop = function (shop,manager,shop_id){
         return $http.put(ApiEndpoint.url + '/platform/managers/'+manager.id+'/shops/'+shop_id,
                          {name: shop.name,
                           description: shop.description,
                           address: shop.address
                          }); 
    };
    
    var addProductToShop = function (manager,shop_id,product_id){
          return $http.post(ApiEndpoint.url + '/platform/managers/'+manager.id+'/shops/'+shop_id+'/products',
                          {product_id: product_id
                          });        
    };

    return {createShop: createShop,
            getShops: getShops,
            getShop: getShop,
            deleteShop: deleteShop,
            updateShop: updateShop,
            addProductToShop: addProductToShop};
}]);