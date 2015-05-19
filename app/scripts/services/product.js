'use strict'

angular.module('promoPlatformApp')

.factory('ProductService',['$http','ApiEndpoint',function($http,ApiEndpoint){
    
    var createProduct = function(manager, product, expiration_date, category){
        return $http.post(ApiEndpoint.url + '/platform/managers/'+manager.id+'/products',
                          {name: product.name,
                           description: product.description,
                           price: product.price,
                           expiration_date: expiration_date,
                           discount: product.discount,
                           category_id: category.id
                          }); 
    };
    var updateProduct = function(manager, product, expiration_date, category){
        return $http.put(ApiEndpoint.url + '/platform/managers/'+manager.id+'/products',
                          {name: product.name,
                           description: product.description,
                           price: product.price,
                           expiration_date: expiration_date,
                           discount: product.discount,
                           category_id: category.id
                          }); 
    };
    
    var getProducts = function(manager){
        return $http.get(ApiEndpoint.url + '/platform/managers/'+manager.id+'/products');    
    };
    
        
    var deleteProduct = function (manager,product_id) {
        return $http.delete(ApiEndpoint.url + '/platform/managers/'+manager.id+'/products/'+product_id);
    };
    
    return {createProduct:createProduct,
            updateProduct:updateProduct,
            getProducts:getProducts,
            deleteProduct:deleteProduct};

}]);