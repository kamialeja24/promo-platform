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
    var updateProduct = function(manager, product, expiration_date, product_id, category){
        return $http.put(ApiEndpoint.url + '/platform/managers/'+manager.id+'/products/'+product_id,
                          {name: product.name,
                           description: product.description,
                           price: product.price,
                           expiration_date: expiration_date,
                           discount: product.discount,
                           category_id: category.id
                          });
    };
    var updateProductNoCategory = function(manager, product, expiration_date, product_id){
      return $http.put(ApiEndpoint.url + '/platform/managers/'+manager.id+'/products/'+product_id,
        {name: product.name,
          description: product.description,
          price: product.price,
          expiration_date: expiration_date,
          discount: product.discount,
        });
    };

    var getProducts = function(manager){
        return $http.get(ApiEndpoint.url + '/platform/managers/'+manager.id+'/products');
    };
    var getProduct = function(manager, product_id){
      return $http.get(ApiEndpoint.url + '/platform/managers/'+manager.id+'/products/'+product_id);
    };


    var deleteProduct = function (manager,product_id) {
        return $http.delete(ApiEndpoint.url + '/platform/managers/'+manager.id+'/products/'+product_id);
    };

    return {createProduct:createProduct,
            updateProduct:updateProduct,
            getProducts:getProducts,
            getProduct:getProduct,
            deleteProduct:deleteProduct,
            updateProductNoCategory:updateProductNoCategory};

}]);
