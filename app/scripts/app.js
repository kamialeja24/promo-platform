'use strict';

/**
 * @ngdoc overview
 * @name promoPlatformApp
 * @description
 * # promoPlatformApp
 *
 * Main module of the application.
 */
angular
  .module('promoPlatformApp', [
    'ui.bootstrap',
    'angularModalService',
    'ui.router',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      
        $stateProvider
          .state('common', {
            templateUrl: 'common.html', /*This is the 1st (home) layout*/
            abstract: true
          })
          .state('home', {
            url: '/home',
            templateUrl: '/views/main.html',
            parent: 'common',
            controller: 'MainCtrl'
          })
          .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            parent: 'common',
            controller: 'LoginCtrl'
          })
          .state('sign-up', {
            url: '/sign-up',
            templateUrl: 'views/sign-up.html',
            parent: 'common',
            controller: 'SignUpCtrl'
          })
          .state('vendedor-home', {
            url: '/vendedor-home',
            templateUrl: 'views/vendedor-home.html',
            controller: 'VendedorHomeCtrl'
         })
        .state('add-product', {
          url: '/agregar-producto',
          templateUrl: 'views/add-product.html',
          parent: 'vendedor-home',
          controller: 'AddProductCtrl'
        })
        .state('subscription', {
          url: '/suscripcion',
          templateUrl: 'views/subscription.html',
          parent: 'vendedor-home',
          controller: 'SubscriptionCtrl'
        })
        .state('create-shop', {
          url: '/agregar-tienda',
          templateUrl: 'views/create-shop.html',
          parent: 'vendedor-home',
          controller: 'CreateShopCtrl'
        })
        .state('settings', {
          url: '/ajustes',
          templateUrl: 'views/settings.html',
          parent: 'vendedor-home',
          controller: 'SettingsCtrl'
        })
        .state('create-company', {
          url: '/crear-empresa',
          templateUrl: 'views/create-company.html',
          parent: 'vendedor-home',
          controller: 'CreateCompanyCtrl'
        })
        .state('list-of-shops', {
          url: '/lista-de-tiendas',    
          templateUrl: 'views/list-of-shops.html',
          parent: 'vendedor-home',
          controller: 'ListOfShopsCtrl'
        })
        .state('list-of-products', {
          url: '/lista-de-productos', 
          templateUrl: 'views/list-of-products.html',
          parent: 'vendedor-home',
          controller: 'ListOfProductsCtrl'
        })
        .state('edit-product', {
          url: '/editar-producto',    
          templateUrl: 'views/edit-product.html',
          parent: 'vendedor-home',
          controller: 'EditProductCtrl'
        })
        $urlRouterProvider.otherwise('/home');
}]);



